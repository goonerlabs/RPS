'reach 0.1';

const player = {
 getHand: Fun([], UInt),
 seeOutcome: Fun([UInt], Null)
};

// participant interact interface
export const main = Reach.App(() => {
 const Alice = Participant('Alice', {
  // interact interface
  ...player,
  wager: UInt,
 });
 const Bob = Participant('Bob', {
  // interact interface
  ...player,
  acceptWager: Fun([UInt], Null)
 });
 init();

 Alice.only(() => {
  const handAlice = declassify(interact.getHand());
  const wager = declassify(interact.wager);
 });
 Alice.publish(handAlice, wager).pay(wager);
 commit();

 Bob.only(() => {
  const handBob = declassify(interact.getHand());
  interact.acceptWager(wager);
 });
 Bob.publish(handBob).pay(wager);

 const outcome = (handAlice + (4 - handBob)) % 3;
 
 const [forAlice, forBob] = 
 outcome == 2 ? [2, 0] :
 outcome == 0 ? [0, 2] :
 /* draw */ [1, 1];
 transfer(forAlice * wager).to(Alice);
 transfer(forBob * wager).to(Bob);
 commit()

 each([Alice, Bob], () => {
  interact.seeOutcome(outcome)
 })

});