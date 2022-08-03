// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v169 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v170 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v173 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:48:38:application',
    fs: ['at ./index.rsh:47:12:application call to [unknown function] (defined at: ./index.rsh:47:16:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v174 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:50:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:47:12:application call to [unknown function] (defined at: ./index.rsh:47:16:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v175 = stdlib.digest(ctc1, [v174, v173]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v170, v169],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v170, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v178, v179], secs: v181, time: v180, didSend: v61, from: v177 } = txn1;
      
      sim_r.txns.push({
        amt: v178,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v190 = stdlib.add(v180, v179);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v178, v179], secs: v181, time: v180, didSend: v61, from: v177 } = txn1;
  ;
  const v190 = stdlib.add(v180, v179);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v190],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v177, v178, v190],
      evt_cnt: 0,
      funcNum: 2,
      lct: v180,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v242, time: v241, didSend: v131, from: v240 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v242, time: v241, didSend: v131, from: v240 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:43:26:application',
      fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:61:79:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v196], secs: v198, time: v197, didSend: v72, from: v195 } = txn2;
    ;
    const txn3 = await (ctc.sendrecv({
      args: [v177, v178, v195, v196, v174, v173, v175],
      evt_cnt: 3,
      funcNum: 3,
      lct: v197,
      onlyIf: true,
      out_tys: [ctc0, ctc0, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:70:8:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v204, v205, v206], secs: v208, time: v207, didSend: v83, from: v203 } = txn3;
        
        ;
        const v212 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, '4'), v196);
        const v213 = stdlib.add(v205, v212);
        const v214 = stdlib.mod(v213, stdlib.checkedBigNumberify('./index.rsh:73:48:decimal', stdlib.UInt_max, '3'));
        const v215 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '2'));
        const v216 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:77:13:decimal', stdlib.UInt_max, '0'));
        const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v219 = v216 ? v217 : v218;
        const v220 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v221 = v215 ? v220 : v219;
        const v222 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '0')];
        const v223 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '1')];
        const v224 = stdlib.mul(v222, v178);
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: undefined /* Nothing */
          });
        const v229 = stdlib.mul(v223, v178);
        sim_r.txns.push({
          kind: 'from',
          to: v195,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v204, v205, v206], secs: v208, time: v207, didSend: v83, from: v203 } = txn3;
    ;
    const v209 = stdlib.addressEq(v177, v203);
    stdlib.assert(v209, {
      at: './index.rsh:70:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v210 = stdlib.digest(ctc1, [v204, v205]);
    const v211 = stdlib.digestEq(v206, v210);
    stdlib.assert(v211, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:71:17:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v212 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, '4'), v196);
    const v213 = stdlib.add(v205, v212);
    const v214 = stdlib.mod(v213, stdlib.checkedBigNumberify('./index.rsh:73:48:decimal', stdlib.UInt_max, '3'));
    const v215 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '2'));
    const v216 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:77:13:decimal', stdlib.UInt_max, '0'));
    const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v219 = v216 ? v217 : v218;
    const v220 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v221 = v215 ? v220 : v219;
    const v222 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '0')];
    const v223 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '1')];
    const v224 = stdlib.mul(v222, v178);
    ;
    const v229 = stdlib.mul(v223, v178);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v214), {
      at: './index.rsh:84:22:application',
      fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:24:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178, v179], secs: v181, time: v180, didSend: v61, from: v177 } = txn1;
  ;
  const v190 = stdlib.add(v180, v179);
  stdlib.protect(ctc1, await interact.acceptWager(v178), {
    at: './index.rsh:58:23:application',
    fs: ['at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:14:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v194 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:59:46:application',
    fs: ['at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:14:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v177, v178, v190, v194],
    evt_cnt: 1,
    funcNum: 1,
    lct: v180,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v178, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v196], secs: v198, time: v197, didSend: v72, from: v195 } = txn2;
      
      sim_r.txns.push({
        amt: v178,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v190],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v177, v178, v190],
      evt_cnt: 0,
      funcNum: 2,
      lct: v180,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v242, time: v241, didSend: v131, from: v240 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v242, time: v241, didSend: v131, from: v240 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:26:application',
      fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:61:79:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v196], secs: v198, time: v197, didSend: v72, from: v195 } = txn2;
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 3,
      funcNum: 3,
      out_tys: [ctc0, ctc0, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v204, v205, v206], secs: v208, time: v207, didSend: v83, from: v203 } = txn3;
    ;
    const v209 = stdlib.addressEq(v177, v203);
    stdlib.assert(v209, {
      at: './index.rsh:70:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v210 = stdlib.digest(ctc3, [v204, v205]);
    const v211 = stdlib.digestEq(v206, v210);
    stdlib.assert(v211, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:71:17:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v212 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, '4'), v196);
    const v213 = stdlib.add(v205, v212);
    const v214 = stdlib.mod(v213, stdlib.checkedBigNumberify('./index.rsh:73:48:decimal', stdlib.UInt_max, '3'));
    const v215 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '2'));
    const v216 = stdlib.eq(v214, stdlib.checkedBigNumberify('./index.rsh:77:13:decimal', stdlib.UInt_max, '0'));
    const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v219 = v216 ? v217 : v218;
    const v220 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v221 = v215 ? v220 : v219;
    const v222 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '0')];
    const v223 = v221[stdlib.checkedBigNumberify('./index.rsh:75:8:array', stdlib.UInt_max, '1')];
    const v224 = stdlib.mul(v222, v178);
    ;
    const v229 = stdlib.mul(v223, v178);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v214), {
      at: './index.rsh:84:22:application',
      fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:24:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEDCAIgKCYCAQAAIjUAMRhBAl0pZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAEfSSQMQADbJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf5JNQVJSSJbNf0lWzX8VxAgNfuABJoHHS80/RZQNPwWUDT7ULA0/zEAEkQ0+zT9FjT8FlABEkQ0/IEENAOBSFsJCCQYNfqAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+iISTYAQAAAAAAAAAAIAAAAAAAAAADT6IQQSTTX5sSKyATT5Ils0/guyCCOyEDT/sgezsSKyATT5JVs0/guyCCOyEDQDVyggsgezQgD+SCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhBlsPRLEisgE0AyEFW7III7IQNANXACCyB7NCAMBJIwxAAF9IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf5JNQUXNf2ABNUVGRQ0/RZQsDIGNAMhBlsMRDT+iADoNP80/hZQMQBQNP0WUChLAVcAUGdIJDUBMgY1AkIAd0iBoI0GiADBIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iACRMgY0/gg1/TEANP8WUDT9FlAoSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v196",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v196",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f5538038062000f5583398101604081905262000026916200023a565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000133565b6020808301510151620000b390436200029a565b815260408051606080820183526000602080840182815284860183815233808752898401515183528851825260019485905543909455865192830193909352519481019490945251908301529060800160405160208183030381529060405260029080519060200190620001299291906200015d565b50505050620002fe565b81620001595760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016b90620002c1565b90600052602060002090601f0160209004810192826200018f5760008555620001da565b82601f10620001aa57805160ff1916838001178555620001da565b82800160010185558215620001da579182015b82811115620001da578251825591602001919060010190620001bd565b50620001e8929150620001ec565b5090565b5b80821115620001e85760008155600101620001ed565b604080519081016001600160401b03811182821017156200023457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024e57600080fd5b6200025862000203565b835181526040601f19830112156200026f57600080fd5b6200027962000203565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002bc57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d657607f821691505b60208210811415620002f857634e487b7160e01b600052602260045260246000fd5b50919050565b610c47806200030e6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780637eea518c146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063ba928cc7146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461097c565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b936600461097c565b610272565b3480156100ca57600080fd5b506100d3610446565b60405161007a92919061099f565b61005d6100ef3660046109fc565b6104e3565b610104600160005414600d6107cf565b61011e8135158061011757506001548235145b600e6107cf565b60008080556002805461013090610a0e565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a0e565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610a5f565b90506101d58160400151431015600f6107cf565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610206929190610ace565b60405180910390a161021a3415600c6107cf565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610257573d6000803e3d6000fd5b506000808055600181905561026e906002906107f4565b5050565b61028260016000541460096107cf565b61029c8135158061029557506001548235145b600a6107cf565b6000808055600280546102ae90610a0e565b80601f01602080910402602001604051908101604052809291908181526020018280546102da90610a0e565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b505050505080602001905181019061033f9190610a5f565b905061035281604001514310600b6107cf565b6040805133815283356020808301919091528401358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16103a88160200151341460086107cf565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186523385528c8701358352600390975543600155895195860196909652925197840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190610440929190610831565b50505050565b60006060600054600280805461045b90610a0e565b80601f016020809104026020016040519081016040528092919081815260200182805461048790610a0e565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b50505050509050915091509091565b6104f360036000541460136107cf565b61050d8135158061050657506001548235145b60146107cf565b60008080556002805461051f90610a0e565b80601f016020809104026020016040519081016040528092919081815260200182805461054b90610a0e565b80156105985780601f1061056d57610100808354040283529160200191610598565b820191906000526020600020905b81548152906001019060200180831161057b57829003601f168201915b50505050508060200190518101906105b09190610b0b565b90506105ba6108b5565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808201527ff712325fecbc11ded83599adf01178803dc26c61c13495590aea68e97ab65f489060a00160405180910390a1610621341560106107cf565b8151610639906001600160a01b0316331460116107cf565b604080516106849161065f91602080880135928801359101918252602082015260400190565b60408051601f19818403018152919052805160209091012060608501351460126107cf565b6003826060015160046106979190610ba1565b6106a5906040860135610bb8565b6106af9190610bd0565b8152602080820180516000908190529051600290830181905260408401805160019081905290518401526060840180518290525190920152815114610709578051156106ff57806040015161070f565b806020015161070f565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916107399190610bf2565b6040518115909202916000818181858888f19350505050158015610761573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc836020015183608001516020015161078b9190610bf2565b6040518115909202916000818181858888f193505050501580156107b3573d6000803e3d6000fd5b50600080805560018190556107ca906002906107f4565b505050565b8161026e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461080090610a0e565b6000825580601f10610810575050565b601f01602090049060005260206000209081019061082e919061094f565b50565b82805461083d90610a0e565b90600052602060002090601f01602090048101928261085f57600085556108a5565b82601f1061087857805160ff19168380011785556108a5565b828001600101855582156108a5579182015b828111156108a557825182559160200191906001019061088a565b506108b192915061094f565b5090565b6040518060a00160405280600081526020016108e4604051806040016040528060008152602001600081525090565b8152602001610906604051806040016040528060008152602001600081525090565b8152602001610928604051806040016040528060008152602001600081525090565b815260200161094a604051806040016040528060008152602001600081525090565b905290565b5b808211156108b15760008155600101610950565b60006040828403121561097657600080fd5b50919050565b60006040828403121561098e57600080fd5b6109988383610964565b9392505050565b82815260006020604081840152835180604085015260005b818110156109d3578581018301518582016060015282016109b7565b818111156109e5576000606083870101525b50601f01601f191692909201606001949350505050565b60006080828403121561097657600080fd5b600181811c90821680610a2257607f821691505b6020821081141561097657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a5a57600080fd5b919050565b600060608284031215610a7157600080fd5b6040516060810181811067ffffffffffffffff82111715610aa257634e487b7160e01b600052604160045260246000fd5b604052610aae83610a43565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610afc57600080fd5b80604085015250509392505050565b600060808284031215610b1d57600080fd5b6040516080810181811067ffffffffffffffff82111715610b4e57634e487b7160e01b600052604160045260246000fd5b604052610b5a83610a43565b815260208301516020820152610b7260408401610a43565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610bb357610bb3610b8b565b500390565b60008219821115610bcb57610bcb610b8b565b500190565b600082610bed57634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610c0c57610c0c610b8b565b50029056fea264697066735822122019619c05c24c8960081333c3414509898923684040f378c53f9834f5f2e2e15e64736f6c634300080c0033`,
  BytecodeLen: 3925,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:79:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:81:2:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
