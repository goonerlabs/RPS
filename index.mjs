import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
  'Are you Alice?',
  ask.yesno
);

const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting RPS! as ${who}`);

let acc = null;

const createAcc = await ask.ask(
  `Would you like to create an account? (Only possible on devnet)`,
  ask.yesno 
);

if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const seedPhrase = await ask.ask(
    `Please input your seed phrase`,
    (x => x)
  );
  await stdlib.newAccountFromMnemonic(seedPhrase);
}

let ctc = null;

if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as: ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask(
    `Please paste the contract info:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info)
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is: ${before}`);

const interact = {...stdlib.hasRandom}

interact.informTimeout = () => {
  console.log(`There was a timeout`);
  process.exit(); 
};

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = {
    ETH: 100,
    ALGO: 100,
    CONFLUX: 1000,
  }[stdlib.connector]
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${amt}`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  }
}

const HAND = ['Rock', 'Paper', 'Scissors'];
const HANDS = {
  'Rock': 0, 'ROCK': 0, 'rock': 0, 'R': 0, 'r': 0,
  'Paper': 1, 'PAPER': 1, 'paper': 1, 'P': 1, 'p': 1,
  'Scissors': 2, 'SCISSORS': 2, 'scissors': 2, 'S': 2, 's': 2,
};

interact.getHand = async () => {
  const hand = await ask.ask(
    `What hand do you want to play? Please choose either Rock, Paper or Scissors,`,
    (x) => {
      const result = HANDS[x];
      if (result === undefined) {
        throw Error(`Not a valid hand: ${result}, Please choose either Rock, Paper or Scissors`);
      }
      return result;
    }
  );
  console.log(`You played ${HAND[hand]}`);
  return hand
}

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
interact.seeOutcome = async (outcome) => {
  console.log(`The outcome is: ${[OUTCOME[outcome]]}`);
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();

console.log(`Your balance is now ${after}`);

ask.done();

