

var __main__1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 1;
    r0 = pxsim.Array_.mk(0);
    s.tmp_0 = r0;
    r0 = globals.freqTable___119;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    globals.freqTable___119 = (r0);
    s.lastBrkId = 6;
    s.tmp_0 = { fn: _init_PWS_156, parent: s };
    r0 = 7;
    s.tmp_0.arg0 = r0;
    r0 = 8;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 7;
    r0 = pxsim.pxtcore.ptrOfLiteral(_inline_161);
    s.tmp_0 = r0;
    r0 = pxsim.input.onButtonPressed(1, s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_1;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
__main__1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/dal.d.ts","functionName":"<main>"}
__main__1.continuations = [  ]



var _inline_161  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 8;
    r0 = pxsim.pins.analogWritePin(8, 512);
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_inline_161.info = {"start":77,"length":53,"line":2,"column":31,"endLine":4,"endColumn":1,"fileName":"test.ts","functionName":"inline"}



var _init_PWS_156  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 2;
    r0 = s.arg0;
    globals.pinMoistureSel___153 = (r0);
    s.lastBrkId = 3;
    r0 = s.arg1;
    globals.pinPumpSel___154 = (r0);
    s.lastBrkId = 4;
    r0 = 1023;
    globals.pumpPowerValue___155 = (r0);
    s.lastBrkId = 5;
    setupResume(s, 2);
    pxsim.basic.pause(100);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_init_PWS_156.info = {"start":289,"length":521,"line":16,"column":5,"endLine":31,"endColumn":5,"fileName":"plant-watering.ts","functionName":"init_PWS"}


setupDebugger(9)

pxsim.setupStringLiterals({})
