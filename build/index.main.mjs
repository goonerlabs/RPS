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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
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
  
  
  const v305 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v306 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v306, v305],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v306, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v310, v311], secs: v313, time: v312, didSend: v56, from: v309 } = txn1;
      
      sim_r.txns.push({
        amt: v310,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v322 = stdlib.add(v312, v311);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v310, v311], secs: v313, time: v312, didSend: v56, from: v309 } = txn1;
  ;
  const v322 = stdlib.add(v312, v311);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v322],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v309, v310, v311, v322],
      evt_cnt: 0,
      funcNum: 2,
      lct: v312,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v309,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:43:26:application',
      fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:57:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v65, from: v326 } = txn2;
    const v330 = stdlib.add(v310, v310);
    ;
    let v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v332 = v327;
    let v339 = v330;
    
    while (await (async () => {
      const v347 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v347;})()) {
      const v354 = stdlib.add(v332, v311);
      const v358 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:65:40:application',
        fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v359 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:66:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v360 = stdlib.digest(ctc1, [v359, v358]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v309, v310, v311, v326, v339, v354, v360],
        evt_cnt: 1,
        funcNum: 4,
        lct: v332,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:69:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v363], secs: v365, time: v364, didSend: v91, from: v362 } = txn3;
          
          ;
          const v373 = stdlib.add(v364, v311);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v354],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v309, v310, v311, v326, v339, v354],
          evt_cnt: 0,
          funcNum: 5,
          lct: v332,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v442, time: v441, didSend: v205, from: v440 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v326,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v442, time: v441, didSend: v205, from: v440 } = txn4;
        ;
        const v443 = stdlib.addressEq(v309, v440);
        const v444 = stdlib.addressEq(v326, v440);
        const v445 = v443 ? true : v444;
        stdlib.assert(v445, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:69:75:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:69:75:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v363], secs: v365, time: v364, didSend: v91, from: v362 } = txn3;
        ;
        const v366 = stdlib.addressEq(v309, v362);
        stdlib.assert(v366, {
          at: './index.rsh:69:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v373 = stdlib.add(v364, v311);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v373],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v309, v310, v311, v326, v339, v363, v373],
            evt_cnt: 0,
            funcNum: 7,
            lct: v364,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v424, time: v423, didSend: v171, from: v422 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v309,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v424, time: v423, didSend: v171, from: v422 } = txn5;
          ;
          const v425 = stdlib.addressEq(v309, v422);
          const v426 = stdlib.addressEq(v326, v422);
          const v427 = v425 ? true : v426;
          stdlib.assert(v427, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:78:69:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:43:26:application',
            fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:78:69:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v379], secs: v381, time: v380, didSend: v101, from: v378 } = txn4;
          ;
          const v382 = stdlib.addressEq(v326, v378);
          stdlib.assert(v382, {
            at: './index.rsh:78:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v389 = stdlib.add(v380, v311);
          const txn5 = await (ctc.sendrecv({
            args: [v309, v310, v311, v326, v339, v363, v379, v389, v359, v358],
            evt_cnt: 2,
            funcNum: 8,
            lct: v380,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:86:8:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v394, v395], secs: v397, time: v396, didSend: v111, from: v393 } = txn5;
              
              ;
              const v401 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '4'), v379);
              const v402 = stdlib.add(v395, v401);
              const v403 = stdlib.mod(v402, stdlib.checkedBigNumberify('./index.rsh:89:42:decimal', stdlib.UInt_max, '3'));
              const cv331 = v403;
              const cv332 = v396;
              const cv339 = v339;
              
              await (async () => {
                const v331 = cv331;
                const v332 = cv332;
                const v339 = cv339;
                
                if (await (async () => {
                  const v347 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v347;})()) {
                  const v354 = stdlib.add(v332, v311);
                  sim_r.isHalt = false;
                  }
                else {
                  const v458 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:92:40:decimal', stdlib.UInt_max, '2'));
                  const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v460 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v461 = v458 ? v459 : v460;
                  const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '0')];
                  const v463 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '1')];
                  const v464 = stdlib.mul(v462, v310);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v309,
                    tok: undefined /* Nothing */
                    });
                  const v469 = stdlib.mul(v463, v310);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v326,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v389],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v309, v310, v311, v326, v339, v363, v379, v389],
              evt_cnt: 0,
              funcNum: 9,
              lct: v380,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v406, time: v405, didSend: v137, from: v404 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v326,
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
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v406, time: v405, didSend: v137, from: v404 } = txn6;
            ;
            const v407 = stdlib.addressEq(v309, v404);
            const v408 = stdlib.addressEq(v326, v404);
            const v409 = v407 ? true : v408;
            stdlib.assert(v409, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:86:83:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:43:26:application',
              fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:86:83:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v394, v395], secs: v397, time: v396, didSend: v111, from: v393 } = txn5;
            ;
            const v398 = stdlib.addressEq(v309, v393);
            stdlib.assert(v398, {
              at: './index.rsh:86:8:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v399 = stdlib.digest(ctc1, [v394, v395]);
            const v400 = stdlib.digestEq(v363, v399);
            stdlib.assert(v400, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:87:17:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v401 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '4'), v379);
            const v402 = stdlib.add(v395, v401);
            const v403 = stdlib.mod(v402, stdlib.checkedBigNumberify('./index.rsh:89:42:decimal', stdlib.UInt_max, '3'));
            const cv331 = v403;
            const cv332 = v396;
            const cv339 = v339;
            
            v331 = cv331;
            v332 = cv332;
            v339 = cv339;
            
            continue;}
          
          }
        
        }
      
      }
    const v458 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:92:40:decimal', stdlib.UInt_max, '2'));
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v460 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v461 = v458 ? v459 : v460;
    const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '0')];
    const v463 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '1')];
    const v464 = stdlib.mul(v462, v310);
    ;
    const v469 = stdlib.mul(v463, v310);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v331), {
      at: './index.rsh:98:22:application',
      fs: ['at ./index.rsh:97:6:application call to [unknown function] (defined at: ./index.rsh:97:24:function exp)'],
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
  const {data: [v310, v311], secs: v313, time: v312, didSend: v56, from: v309 } = txn1;
  ;
  const v322 = stdlib.add(v312, v311);
  stdlib.protect(ctc1, await interact.acceptWager(v310), {
    at: './index.rsh:55:23:application',
    fs: ['at ./index.rsh:54:10:application call to [unknown function] (defined at: ./index.rsh:54:14:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v309, v310, v311, v322],
    evt_cnt: 0,
    funcNum: 1,
    lct: v312,
    onlyIf: true,
    out_tys: [],
    pay: [v310, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v328, time: v327, didSend: v65, from: v326 } = txn2;
      
      const v330 = stdlib.add(v310, v310);
      sim_r.txns.push({
        amt: v310,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v332 = v327;
      const v339 = v330;
      
      if (await (async () => {
        const v347 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v347;})()) {
        const v354 = stdlib.add(v332, v311);
        sim_r.isHalt = false;
        }
      else {
        const v458 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:92:40:decimal', stdlib.UInt_max, '2'));
        const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v460 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v461 = v458 ? v459 : v460;
        const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '0')];
        const v463 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '1')];
        const v464 = stdlib.mul(v462, v310);
        sim_r.txns.push({
          kind: 'from',
          to: v309,
          tok: undefined /* Nothing */
          });
        const v469 = stdlib.mul(v463, v310);
        sim_r.txns.push({
          kind: 'from',
          to: v326,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v322],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v309, v310, v311, v322],
      evt_cnt: 0,
      funcNum: 2,
      lct: v312,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v309,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:26:application',
      fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:57:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v65, from: v326 } = txn2;
    const v330 = stdlib.add(v310, v310);
    ;
    let v331 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v332 = v327;
    let v339 = v330;
    
    while (await (async () => {
      const v347 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v347;})()) {
      const v354 = stdlib.add(v332, v311);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v354],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v309, v310, v311, v326, v339, v354],
          evt_cnt: 0,
          funcNum: 5,
          lct: v332,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v442, time: v441, didSend: v205, from: v440 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v326,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v442, time: v441, didSend: v205, from: v440 } = txn4;
        ;
        const v443 = stdlib.addressEq(v309, v440);
        const v444 = stdlib.addressEq(v326, v440);
        const v445 = v443 ? true : v444;
        stdlib.assert(v445, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:69:75:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:69:75:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v363], secs: v365, time: v364, didSend: v91, from: v362 } = txn3;
        ;
        const v366 = stdlib.addressEq(v309, v362);
        stdlib.assert(v366, {
          at: './index.rsh:69:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v373 = stdlib.add(v364, v311);
        const v377 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:75:48:application',
          fs: ['at ./index.rsh:74:11:application call to [unknown function] (defined at: ./index.rsh:74:15:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v309, v310, v311, v326, v339, v363, v373, v377],
          evt_cnt: 1,
          funcNum: 6,
          lct: v364,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:78:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v379], secs: v381, time: v380, didSend: v101, from: v378 } = txn4;
            
            ;
            const v389 = stdlib.add(v380, v311);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v373],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v309, v310, v311, v326, v339, v363, v373],
            evt_cnt: 0,
            funcNum: 7,
            lct: v364,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v424, time: v423, didSend: v171, from: v422 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v309,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v424, time: v423, didSend: v171, from: v422 } = txn5;
          ;
          const v425 = stdlib.addressEq(v309, v422);
          const v426 = stdlib.addressEq(v326, v422);
          const v427 = v425 ? true : v426;
          stdlib.assert(v427, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:78:69:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:43:26:application',
            fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:78:69:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v379], secs: v381, time: v380, didSend: v101, from: v378 } = txn4;
          ;
          const v382 = stdlib.addressEq(v326, v378);
          stdlib.assert(v382, {
            at: './index.rsh:78:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v389 = stdlib.add(v380, v311);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v389],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v309, v310, v311, v326, v339, v363, v379, v389],
              evt_cnt: 0,
              funcNum: 9,
              lct: v380,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v406, time: v405, didSend: v137, from: v404 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v326,
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
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v406, time: v405, didSend: v137, from: v404 } = txn6;
            ;
            const v407 = stdlib.addressEq(v309, v404);
            const v408 = stdlib.addressEq(v326, v404);
            const v409 = v407 ? true : v408;
            stdlib.assert(v409, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:86:83:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:43:26:application',
              fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:41:27:function exp)', 'at ./index.rsh:86:83:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v394, v395], secs: v397, time: v396, didSend: v111, from: v393 } = txn5;
            ;
            const v398 = stdlib.addressEq(v309, v393);
            stdlib.assert(v398, {
              at: './index.rsh:86:8:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v399 = stdlib.digest(ctc3, [v394, v395]);
            const v400 = stdlib.digestEq(v363, v399);
            stdlib.assert(v400, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:87:17:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v401 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:89:26:decimal', stdlib.UInt_max, '4'), v379);
            const v402 = stdlib.add(v395, v401);
            const v403 = stdlib.mod(v402, stdlib.checkedBigNumberify('./index.rsh:89:42:decimal', stdlib.UInt_max, '3'));
            const cv331 = v403;
            const cv332 = v396;
            const cv339 = v339;
            
            v331 = cv331;
            v332 = cv332;
            v339 = cv339;
            
            continue;}
          
          }
        
        }
      
      }
    const v458 = stdlib.eq(v331, stdlib.checkedBigNumberify('./index.rsh:92:40:decimal', stdlib.UInt_max, '2'));
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v460 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v461 = v458 ? v459 : v460;
    const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '0')];
    const v463 = v461[stdlib.checkedBigNumberify('./index.rsh:92:8:array', stdlib.UInt_max, '1')];
    const v464 = stdlib.mul(v462, v310);
    ;
    const v469 = stdlib.mul(v463, v310);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v331), {
      at: './index.rsh:98:22:application',
      fs: ['at ./index.rsh:97:6:application call to [unknown function] (defined at: ./index.rsh:97:24:function exp)'],
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
  appApproval: `BiAQAAFQCAUJIAcoeAKAAQQDWDAmAwEAAQEAIjUAMRhBBMsqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAIrSSEHDEABNkklDEAA3UkhBQxAAFYhBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gASiBWaOsDIGNAMhC1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ID40ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iVbNf2ABDUaKtA0/hZQNP0WULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT+FjT9FlABEkQ0/zQDIQZbNAMhCFs0A1cwIDT9IQw0AyEJWwkIIQ0YMgY0AyRbQgLGSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQlbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAxBJgQYMQACXSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yEGWzX+IQhbNf1XMCA1/CRbNftXWCA1+kk1BRc1+YAEcO3vejT5FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlAoSwFXAH9nKUsBV38JZ0ghBTUBMgY1AkICjkghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEOWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgIiSSEKDEAA0UkhDAxAAIlIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDlsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBpyEKEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgFKSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhD1sMRDT/iAGCNANXACA0/zQDIQhbMQAjMgY0/0kIQgBfSIGgjQaIAWIiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IATIyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCALk1/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAdYAQAAAAAAAAAAAAAAAAAAAAAoAQAAAAAAAAAAIAAAAAAAAAADT9IQoSTTX4sSKyATT4Ils0+guyCCOyEDT5sgezsSKyATT4JVs0+guyCCOyEDT8sgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCENMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
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
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
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
                "name": "v363",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
    "name": "_reach_e5",
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
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
    "name": "_reach_e9",
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
                "name": "v363",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
    "name": "_reach_m5",
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
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
    "name": "_reach_m7",
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
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c4c38038062001c4c83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b61192d806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046114d3565b610197565b6100a16100e83660046114d3565b61032e565b3480156100f957600080fd5b506001546100b4565b6100a16101103660046114f6565b6104ac565b6100a16101233660046114d3565b6106d9565b6100a16101363660046114d3565b610874565b6100a16101493660046114d3565b610b15565b34801561015a57600080fd5b50610163610d59565b6040516100be929190611508565b6100a161017f3660046114d3565b610df6565b6100a16101923660046114d3565b610f8d565b6101a760016000541460096110e3565b6101c1813515806101ba57506001548235145b600a6110e3565b6000808055600280546101d390611565565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611565565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906115b6565b905061027781606001514310600b6110e3565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a892919061162f565b60405180910390a16102c18160200151341460086110e3565b6102c9611319565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516103179080611682565b60208201516040015261032981611108565b505050565b61033e600160005414600d6110e3565b6103588135158061035157506001548235145b600e6110e3565b60008080556002805461036a90611565565b80601f016020809104026020016040519081016040528092919081815260200182805461039690611565565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb91906115b6565b905061040f8160600151431015600f6110e3565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161044092919061162f565b60405180910390a16104543415600c6110e3565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b50600080805560018190556104a890600290611372565b5050565b6104bc60096000541460276110e3565b6104d6813515806104cf57506001548235145b60286110e3565b6000808055600280546104e890611565565b80601f016020809104026020016040519081016040528092919081815260200182805461051490611565565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b5050505050806020019051810190610579919061169a565b905061058c8160e00151431060296110e3565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105e7341560246110e3565b80516105ff906001600160a01b0316331460256110e3565b6040805161064b9161062591602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a001511460266110e3565b610653611319565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260c082015160039061069c906004611746565b6106aa906040860135611682565b6106b4919061175d565b6020808301805192909252815143910152608083015190516040015261032981611108565b6106e960056000541460176110e3565b610703813515806106fc57506001548235145b60186110e3565b60008080556002805461071590611565565b80601f016020809104026020016040519081016040528092919081815260200182805461074190611565565b801561078e5780601f106107635761010080835404028352916020019161078e565b820191906000526020600020905b81548152906001019060200180831161077157829003601f168201915b50505050508060200190518101906107a6919061177f565b90506107ba8160a0015143101560196110e3565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107eb92919061162f565b60405180910390a16107ff341560156110e3565b8051610833906001600160a01b031633146108295760608201516001600160a01b0316331461082c565b60015b60166110e3565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610491573d6000803e3d6000fd5b610884600760005414601c6110e3565b61089e8135158061089757506001548235145b601d6110e3565b6000808055600280546108b090611565565b80601f01602080910402602001604051908101604052809291908181526020018280546108dc90611565565b80156109295780601f106108fe57610100808354040283529160200191610929565b820191906000526020600020905b81548152906001019060200180831161090c57829003601f168201915b50505050508060200190518101906109419190611813565b90506109596040518060200160405280600081525090565b61096a8260c001514310601e6110e3565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161099b9291906118b1565b60405180910390a16109af3415601a6110e3565b60608201516109ca906001600160a01b03163314601b6110e3565b60408201516109d99043611682565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610aea9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b0e9291906113af565b5050505050565b610b2560056000541460126110e3565b610b3f81351580610b3857506001548235145b60136110e3565b600080805560028054610b5190611565565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7d90611565565b8015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b5050505050806020019051810190610be2919061177f565b9050610bfa6040518060200160405280600081525090565b610c0b8260a00151431060146110e3565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c3c9291906118b1565b60405180910390a1610c50341560106110e3565b8151610c68906001600160a01b0316331460116110e3565b6040820151610c779043611682565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610aea565b600060606000546002808054610d6e90611565565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9a90611565565b8015610de75780601f10610dbc57610100808354040283529160200191610de7565b820191906000526020600020905b815481529060010190602001808311610dca57829003601f168201915b50505050509050915091509091565b610e0660076000541460216110e3565b610e2081351580610e1957506001548235145b60226110e3565b600080805560028054610e3290611565565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5e90611565565b8015610eab5780601f10610e8057610100808354040283529160200191610eab565b820191906000526020600020905b815481529060010190602001808311610e8e57829003601f168201915b5050505050806020019051810190610ec39190611813565b9050610ed78160c0015143101560236110e3565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f0892919061162f565b60405180910390a1610f1c3415601f6110e3565b8051610f50906001600160a01b03163314610f465760608201516001600160a01b03163314610f49565b60015b60206110e3565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b610f9d600960005414602c6110e3565b610fb781351580610fb057506001548235145b602d6110e3565b600080805560028054610fc990611565565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff590611565565b80156110425780601f1061101757610100808354040283529160200191611042565b820191906000526020600020905b81548152906001019060200180831161102557829003601f168201915b505050505080602001905181019061105a919061169a565b905061106e8160e00151431015602e6110e3565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161109f92919061162f565b60405180910390a16110b33415602a6110e3565b8051610833906001600160a01b031633146110dd5760608201516001600160a01b031633146110e0565b60015b602b5b816104a85760405163100960cb60e01b81526004810182905260240160405180910390fd5b611110611433565b602082015151600114156112295781516040015160208084015101516111369190611682565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906112239291906113af565b50505050565b60208082018051600290819052905160009083018190526040840180519190915251820181905290830151511461126457806040015161126a565b80602001515b606082018190528251805160209091015191516001600160a01b03909116916108fc9161129791906118d8565b6040518115909202916000818181858888f193505050501580156112bf573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc8360000151602001518360600151602001516112f191906118d8565b6040518115909202916000818181858888f19350505050158015610491573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161136d60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461137e90611565565b6000825580601f1061138e575050565b601f0160209004906000526020600020908101906113ac91906114a6565b50565b8280546113bb90611565565b90600052602060002090601f0160209004810192826113dd5760008555611423565b82601f106113f657805160ff1916838001178555611423565b82800160010185558215611423579182015b82811115611423578251825591602001919060010190611408565b5061142f9291506114a6565b5090565b604051806080016040528060008152602001611462604051806040016040528060008152602001600081525090565b8152602001611484604051806040016040528060008152602001600081525090565b815260200161136d604051806040016040528060008152602001600081525090565b5b8082111561142f57600081556001016114a7565b6000604082840312156114cd57600080fd5b50919050565b6000604082840312156114e557600080fd5b6114ef83836114bb565b9392505050565b6000606082840312156114cd57600080fd5b82815260006020604081840152835180604085015260005b8181101561153c57858101830151858201606001528201611520565b8181111561154e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061157957607f821691505b602082108114156114cd57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146115b157600080fd5b919050565b6000608082840312156115c857600080fd5b6040516080810181811067ffffffffffffffff821117156115f957634e487b7160e01b600052604160045260246000fd5b6040526116058361159a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461165d57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116955761169561166c565b500190565b60006101008083850312156116ae57600080fd5b6040519081019067ffffffffffffffff821181831017156116df57634e487b7160e01b600052604160045260246000fd5b816040526116ec8461159a565b8152602084015160208201526040840151604082015261170e6060850161159a565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6000828210156117585761175861166c565b500390565b60008261177a57634e487b7160e01b600052601260045260246000fd5b500690565b600060c0828403121561179157600080fd5b60405160c0810181811067ffffffffffffffff821117156117c257634e487b7160e01b600052604160045260246000fd5b6040526117ce8361159a565b815260208301516020820152604083015160408201526117f06060840161159a565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561182557600080fd5b60405160e0810181811067ffffffffffffffff8211171561185657634e487b7160e01b600052604160045260246000fd5b6040526118628361159a565b815260208301516020820152604083015160408201526118846060840161159a565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016114ef602083018480358252602090810135910152565b60008160001904831182151516156118f2576118f261166c565b50029056fea2646970667358221220ec94b9372dfa258418e81a276a31bc64faf05612c9fb37627883edd4cda7e33364736f6c634300080c0033`,
  BytecodeLen: 7244,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:52:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:57:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:2:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:75:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:69:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:79:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:83:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
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
