var mul = function (v1) { return function (v2) { return v1 * v2; }; }
var fix = function (v1) { return fix = arguments.callee, v1(function (i) { return fix(v1)(i) }); }
var list = function (v1) { return function (v2) { return function (v3) { return v3.nil ? v1 : v2(v3.head)(v3.tail); }; }; }
var add = function (v1) { return function (v2) { return v1 + v2; }; }
var bool = function (v1) { return function (v2) { return function (v3) { return v3 ? v1(/*force*/) : v2(/*force*/); }; }; }
var cons = function (v1) { return function (v2) { return { head : v1, tail : v2 }; }; }
var sub = function (v1) { return function (v2) { return v1 - v2; }; }
var eq = function (v1) { return function (v2) { return v1 == v2; }; }
var maybe = function (v1) { return function (v2) { return function (v3) { return v3.nothing ? v1 : v2(v3.just); }; }; }
var just = function (v1) { return { just : v1 }; }
var c10_11 = list(0)
var c10_12 = function (v1) { return function (v2) { return c10_11(function (v3) { return function (v4) { return add(v3)(v1(v4)); }; })(v2); }; }
var c10_13 = fix(c10_12)
var c10_14 = function (v1) { return function (v2) { return v1; }; }
var c10_15 = c10_14({ nil : 1 })
var c10_16 = function (v1) { return c10_15(v1); }
var c10_17 = bool(c10_16)
var c10_19 = mul(2)
var c10_20 = c10_19(8)
var c10_21 = cons(c10_20)
var c10_22 = function (v1) { return function (v2) { return c10_17(function (v3) { return c10_14(c10_21(v1(sub(v2)(1))))(v3); })(eq(v2)(0)); }; }
var c10_23 = fix(c10_22)
var c10_24 = c10_23(3)
var c10_25 = list(c10_24)
var c10_26 = function (v1) { return function (v2) { return c10_25(function (v3) { return function (v4) { return cons(v3)(v1(v4)); }; })(v2); }; }
var c10_27 = fix(c10_26)
var c10_33 = cons(8)
var c10_34 = function (v1) { return function (v2) { return c10_17(function (v3) { return c10_14(c10_33(v1(sub(v2)(1))))(v3); })(eq(v2)(0)); }; }
var c10_35 = fix(c10_34)
var c10_36 = c10_35(3)
var c10_37 = c10_27(c10_36)
var c10_38 = c10_13(c10_37)
var c10_39 = mul(c10_38)
var c10_40 = maybe(4)
var c10_41 = function (v1) { return mul(v1)(8); }
var c10_42 = c10_40(c10_41)
var __main = function (v1) { return c10_39(c10_42(just(sub(v1)(2)))); };alert(__main(3));