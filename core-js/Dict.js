try{if(Elm.Dict)throw "Module name collision, 'Dict' is already defined.";Elm.Dict=function(){try{if(!(Elm.Prelude instanceof Object))throw 'module not found'}catch(e){throw "Module 'Prelude' is missing. Compile with --make flag or load missing module in a separate JavaScript file."};var hiddenVars=[];for(var i in Elm.Prelude){if(hiddenVars.indexOf(i)>=0)continue;this[i]=Elm.Prelude[i]};try{if(!(Elm.Data.Maybe instanceof Object))throw 'module not found'}catch(e){throw "Module 'Data.Maybe' is missing. Compile with --make flag or load missing module in a separate JavaScript file."};var isJust=Elm.Data.Maybe.isJust,Red_0=["Red"],Black_1=["Black"]
function RBNode_2(a1){return function(a2){return function(a3){return function(a4){return function(a5){return ["RBNode",a1,a2,a3,a4,a5]}}}}};var RBEmpty_3=["RBEmpty"],raise_4=console.log,empty_5=RBEmpty_3
function equal_pathLen_6(t_46){return function(){function path_numBlacks_47(t_48){return function(){switch(t_48[0]){case"RBEmpty":return 1;case"RBNode":return function(){var bl_52=path_numBlacks_47(t_48[4]),br_53=path_numBlacks_47(t_48[5]);return((not(eq(bl_52,br_53))||(eq(bl_52,-1)||eq(br_53,-1)))?-1:(bl_52+(eq(t_48[1],Red_0)?0:1)))}()};throw "Non-exhaustive pattern match in case"}()};return not(eq(-1,path_numBlacks_47(t_46)))}()}
function rootBlack_7(t_54){return function(){switch(t_54[0]){case"RBEmpty":return true;case"RBNode":switch(t_54[1][0]){case"Black":return true};break};return false}()}
function redBlack_children_8(t_55){return function(){switch(t_55[0]){case"RBEmpty":return true;case"RBNode":switch(t_55[1][0]){case"Red":switch(t_55[4][0]){case"RBNode":switch(t_55[4][1][0]){case"Red":return false};break};switch(t_55[5][0]){case"RBNode":switch(t_55[5][1][0]){case"Red":return false};break};break};return(redBlack_children_8(t_55[4])&&redBlack_children_8(t_55[5]))};throw "Non-exhaustive pattern match in case"}()}
function findExtreme_9(f_58){return function(t_59){return function(){switch(t_59[0]){case"RBEmpty":return Nothing;case"RBNode":return function(){var case6=findExtreme_9(f_58)(f_58(["Tuple2",t_59[4],t_59[5]]));switch(case6[0]){case"Just":return Just(case6[1]);case"Nothing":return Just(t_59[2])};throw "Non-exhaustive pattern match in case"}()};throw "Non-exhaustive pattern match in case"}()}}
function findminRbt_10(t_65){return findExtreme_9(fst)(t_65)}
function findmaxRbt_11(t_66){return findExtreme_9(snd)(t_66)}
function optionRelation_12(f_67){return function(u_68){return function(xo_69){return function(yo_70){return function(){var case0=["Tuple2",xo_69,yo_70];switch(case0[0]){case"Tuple2":switch(case0[1][0]){case"Nothing":return u_68};switch(case0[2][0]){case"Nothing":return u_68};switch(case0[1][0]){case"Just":switch(case0[2][0]){case"Just":return f_67(case0[1][1])(case0[2][1])};break};break};throw "Non-exhaustive pattern match in case"}()}}}}
function olt_13(xo_73){return function(yo_74){return optionRelation_12(function(x_75){return function(y_76){return(compare(x_75)(y_76)[0]==='LT')}})(true)(xo_73)(yo_74)}}
function olte_14(xo_77){return function(yo_78){return optionRelation_12(function(x_79){return function(y_80){return function(){var ord=compare(x_79)(y_80)[0];return ord==='LT'||ord==='EQ'}()}})(true)(xo_77)(yo_78)}}
function ordered_15(t_81){return function(){switch(t_81[0]){case"RBEmpty":return true;case"RBNode":return function(){var Tuple2$lmaxrmin_87=["Tuple2",findmaxRbt_11(t_81[4]),findminRbt_10(t_81[5])],lmax_88=function(){switch(Tuple2$lmaxrmin_87[0]){case"Tuple2":return Tuple2$lmaxrmin_87[1]};throw "Non-exhaustive pattern match in case"}(),rmin_89=function(){switch(Tuple2$lmaxrmin_87[0]){case"Tuple2":return Tuple2$lmaxrmin_87[2]};throw "Non-exhaustive pattern match in case"}();return(olte_14(lmax_88)(Just(t_81[2]))&&(olte_14(Just(t_81[2]))(rmin_89)&&(ordered_15(t_81[4])&&ordered_15(t_81[5]))))}()};throw "Non-exhaustive pattern match in case"}()}
function leftLeaning_16(t_94){return function(){switch(t_94[0]){case"RBEmpty":return true;case"RBNode":switch(t_94[4][0]){case"RBEmpty":switch(t_94[5][0]){case"RBNode":switch(t_94[5][1][0]){case"Red":return false};break};break;case"RBNode":switch(t_94[4][1][0]){case"Black":switch(t_94[5][0]){case"RBNode":switch(t_94[5][1][0]){case"Red":return false};break};break};break};return(leftLeaning_16(t_94[4])&&leftLeaning_16(t_94[5]))};throw "Non-exhaustive pattern match in case"}()}
function invariants_hold_17(t_97){return(ordered_15(t_97)&&(rootBlack_7(t_97)&&(redBlack_children_8(t_97)&&(equal_pathLen_6(t_97)&&leftLeaning_16(t_97)))))}
function min_18(t_98){return function(){switch(t_98[0]){case"RBEmpty":return console.log(Value.str("(min RBEmpty) is not defined"));case"RBNode":switch(t_98[4][0]){case"RBEmpty":return ["Tuple2",t_98[2],t_98[3]]};return min_18(t_98[4])};throw "Non-exhaustive pattern match in case"}()}
function max_19(t_102){return function(){switch(t_102[0]){case"RBEmpty":return console.log(Value.str("(max RBEmpty) is not defined"));case"RBNode":switch(t_102[5][0]){case"RBEmpty":return ["Tuple2",t_102[2],t_102[3]]};return max_19(t_102[5])};throw "Non-exhaustive pattern match in case"}()}
function lookup_20(k_106){return function(t_107){return function(){switch(t_107[0]){case"RBEmpty":return Nothing;case"RBNode":return function(){var case6=compare(k_106)(t_107[2]);switch(case6[0]){case"EQ":return Just(t_107[3]);case"GT":return lookup_20(k_106)(t_107[5]);case"LT":return lookup_20(k_106)(t_107[4])};throw "Non-exhaustive pattern match in case"}()};throw "Non-exhaustive pattern match in case"}()}}
function member_21(k_112){return function(t_113){return isJust(lookup_20(k_112)(t_113))}}
function rotateLeft_22(t_114){return function(){switch(t_114[0]){case"RBNode":switch(t_114[5][0]){case"RBNode":return RBNode_2(t_114[1])(t_114[5][2])(t_114[5][3])(RBNode_2(Red_0)(t_114[2])(t_114[3])(t_114[4])(t_114[5][4]))(t_114[5][5])};break};return raise_4(Value.str("rotateLeft of a node without enough children"))}()}
function rotateRight_23(t_124){return function(){switch(t_124[0]){case"RBNode":switch(t_124[4][0]){case"RBNode":return RBNode_2(t_124[1])(t_124[4][2])(t_124[4][3])(t_124[4][4])(RBNode_2(Red_0)(t_124[2])(t_124[3])(t_124[4][5])(t_124[5]))};break};return raise_4(Value.str("rotateRight of a node without enough children"))}()}
function rotateLeftIfNeeded_24(t_134){return function(){switch(t_134[0]){case"RBNode":switch(t_134[5][0]){case"RBNode":switch(t_134[5][1][0]){case"Red":return rotateLeft_22(t_134)};break};break};return t_134}()}
function rotateRightIfNeeded_25(t_135){return function(){switch(t_135[0]){case"RBNode":switch(t_135[4][0]){case"RBNode":switch(t_135[4][1][0]){case"Red":switch(t_135[4][4][0]){case"RBNode":switch(t_135[4][4][1][0]){case"Red":return rotateRight_23(t_135)};break};break};break};break};return t_135}()}
function otherColor_26(c_136){return function(){switch(c_136[0]){case"Black":return Red_0;case"Red":return Black_1};throw "Non-exhaustive pattern match in case"}()}
function color_flip_27(t_137){return function(){switch(t_137[0]){case"RBNode":switch(t_137[4][0]){case"RBNode":switch(t_137[5][0]){case"RBNode":return RBNode_2(otherColor_26(t_137[1]))(t_137[2])(t_137[3])(RBNode_2(otherColor_26(t_137[4][1]))(t_137[4][2])(t_137[4][3])(t_137[4][4])(t_137[4][5]))(RBNode_2(otherColor_26(t_137[5][1]))(t_137[5][2])(t_137[5][3])(t_137[5][4])(t_137[5][5]))};break};break};return raise_4(Value.str("color_flip called on a RBEmpty or RBNode with a RBEmpty child"))}()}
function color_flipIfNeeded_28(t_151){return function(){switch(t_151[0]){case"RBNode":switch(t_151[4][0]){case"RBNode":switch(t_151[4][1][0]){case"Red":switch(t_151[5][0]){case"RBNode":switch(t_151[5][1][0]){case"Red":return color_flip_27(t_151)};break};break};break};break};return t_151}()}
function fixUp_29(t_152){return color_flipIfNeeded_28(rotateRightIfNeeded_25(rotateLeftIfNeeded_24(t_152)))}
function ensureBlackRoot_30(t_153){return function(){switch(t_153[0]){case"RBNode":switch(t_153[1][0]){case"Red":return RBNode_2(Black_1)(t_153[2])(t_153[3])(t_153[4])(t_153[5])};break};return t_153}()}
function insert_31(k_158){return function(v_159){return function(t_160){return function(){function ins_161(t_162){return function(){switch(t_162[0]){case"RBEmpty":return RBNode_2(Red_0)(k_158)(v_159)(RBEmpty_3)(RBEmpty_3);case"RBNode":return function(){var h_168=function(){var case6=compare(k_158)(t_162[2]);switch(case6[0]){case"EQ":return RBNode_2(t_162[1])(t_162[2])(v_159)(t_162[4])(t_162[5]);case"GT":return RBNode_2(t_162[1])(t_162[2])(t_162[3])(t_162[4])(ins_161(t_162[5]));case"LT":return RBNode_2(t_162[1])(t_162[2])(t_162[3])(ins_161(t_162[4]))(t_162[5])};throw "Non-exhaustive pattern match in case"}();return fixUp_29(h_168)}()};throw "Non-exhaustive pattern match in case"}()};return(not(invariants_hold_17(t_160))?raise_4(Value.str("invariants broken before insert")):function(){var new_t_169=ensureBlackRoot_30(ins_161(t_160));return(not(invariants_hold_17(new_t_169))?raise_4(Value.str("invariants broken after insert")):new_t_169)}())}()}}}
function singleton_32(k_170){return function(v_171){return insert_31(k_170)(v_171)(RBEmpty_3)}}
function isRed_33(t_172){return function(){switch(t_172[0]){case"RBNode":switch(t_172[1][0]){case"Red":return true};break};return false}()}
function isRedLeft_34(t_173){return function(){switch(t_173[0]){case"RBNode":switch(t_173[4][0]){case"RBNode":switch(t_173[4][1][0]){case"Red":return true};break};break};return false}()}
function isRedLeftLeft_35(t_174){return function(){switch(t_174[0]){case"RBNode":switch(t_174[4][0]){case"RBNode":switch(t_174[4][4][0]){case"RBNode":switch(t_174[4][4][1][0]){case"Red":return true};break};break};break};return false}()}
function isRedRight_36(t_175){return function(){switch(t_175[0]){case"RBNode":switch(t_175[5][0]){case"RBNode":switch(t_175[5][1][0]){case"Red":return true};break};break};return false}()}
function isRedRightLeft_37(t_176){return function(){switch(t_176[0]){case"RBNode":switch(t_176[5][0]){case"RBNode":switch(t_176[5][4][0]){case"RBNode":switch(t_176[5][4][1][0]){case"Red":return true};break};break};break};return false}()}
function moveRedLeft_38(t_177){return function(){var t__178=color_flip_27(t_177);return function(){switch(t__178[0]){case"RBNode":return function(){switch(t__178[5][0]){case"RBNode":switch(t__178[5][4][0]){case"RBNode":switch(t__178[5][4][1][0]){case"Red":return color_flip_27(rotateLeft_22(RBNode_2(t__178[1])(t__178[2])(t__178[3])(t__178[4])(rotateRight_23(t__178[5]))))};break};break};return t__178}()};return t__178}()}()}
function moveRedRight_39(t_184){return function(){var t__185=color_flip_27(t_184);return(isRedLeftLeft_35(t__185)?color_flip_27(rotateRight_23(t__185)):t__185)}()}
function moveRedLeftIfNeeded_40(t_186){return((not(isRedLeft_34(t_186))&&not(isRedLeftLeft_35(t_186)))?moveRedLeft_38(t_186):t_186)}
function moveRedRightIfNeeded_41(t_187){return((not(isRedRight_36(t_187))&&not(isRedRightLeft_37(t_187)))?moveRedRight_39(t_187):t_187)}
function deleteMin_42(t_188){return function(){function del_189(t_190){return function(){switch(t_190[0]){case"RBNode":switch(t_190[4][0]){case"RBEmpty":return RBEmpty_3};break};return function(){var t__191=moveRedLeftIfNeeded_40(t_190);return function(){switch(t__191[0]){case"RBEmpty":return RBEmpty_3;case"RBNode":return fixUp_29(RBNode_2(t__191[1])(t__191[2])(t__191[3])(del_189(t__191[4]))(t__191[5]))};throw "Non-exhaustive pattern match in case"}()}()}()};return ensureBlackRoot_30(del_189(t_188))}()}
function deleteMax_43(t_197){return function(){function del_198(t_199){return function(){var t__200=(isRedLeft_34(t_199)?rotateRight_23(t_199):t_199);return function(){switch(t__200[0]){case"RBNode":switch(t__200[5][0]){case"RBEmpty":return RBEmpty_3};break};return function(){var t___201=moveRedRightIfNeeded_41(t__200);return function(){switch(t___201[0]){case"RBEmpty":return RBEmpty_3;case"RBNode":return fixUp_29(RBNode_2(t___201[1])(t___201[2])(t___201[3])(t___201[4])(del_198(t___201[5])))};throw "Non-exhaustive pattern match in case"}()}()}()}()};return ensureBlackRoot_30(del_198(t_197))}()}
function remove_44(k_207){return function(t_208){return function(){function eq_and_noRightNode_209(t_215){return function(){switch(t_215[0]){case"RBNode":switch(t_215[5][0]){case"RBEmpty":return eq(k_207,t_215[2])};break};return false}()}
function eq_210(t_217){return function(){switch(t_217[0]){case"RBNode":return eq(k_207,t_217[2])};return false}()}
function delLT_211(t_219){return function(){var t__220=moveRedLeftIfNeeded_40(t_219);return function(){switch(t__220[0]){case"RBEmpty":return raise_4(Value.str("delLT on RBEmpty"));case"RBNode":return fixUp_29(RBNode_2(t__220[1])(t__220[2])(t__220[3])(del_214(t__220[4]))(t__220[5]))};throw "Non-exhaustive pattern match in case"}()}()}
function delEQ_212(t_226){return function(){switch(t_226[0]){case"RBEmpty":return raise_4(Value.str("delEQ called on a RBEmpty"));case"RBNode":return function(){var Tuple2$k_v__230=min_18(t_226[5]),k__231=function(){switch(Tuple2$k_v__230[0]){case"Tuple2":return Tuple2$k_v__230[1]};throw "Non-exhaustive pattern match in case"}(),v__232=function(){switch(Tuple2$k_v__230[0]){case"Tuple2":return Tuple2$k_v__230[2]};throw "Non-exhaustive pattern match in case"}();return fixUp_29(RBNode_2(t_226[1])(k__231)(v__232)(t_226[4])(deleteMin_42(t_226[5])))}()};throw "Non-exhaustive pattern match in case"}()}
function delGT_213(t_237){return function(){switch(t_237[0]){case"RBEmpty":return raise_4(Value.str("delGT called on a RBEmpty"));case"RBNode":return fixUp_29(RBNode_2(t_237[1])(t_237[2])(t_237[3])(t_237[4])(del_214(t_237[5])))};throw "Non-exhaustive pattern match in case"}()}
function del_214(t_243){return function(){switch(t_243[0]){case"RBEmpty":return RBEmpty_3;case"RBNode":return((compare(k_207)(t_243[2])[0]==='LT')?delLT_211(t_243):function(){var t__245=(isRedLeft_34(t_243)?rotateRight_23(t_243):t_243);return(eq_and_noRightNode_209(t__245)?RBEmpty_3:function(){var t_246=moveRedRightIfNeeded_41(t_246);return(eq_210(t_246)?delEQ_212(t_246):delGT_213(t_246))}())}())};throw "Non-exhaustive pattern match in case"}()};return(not(invariants_hold_17(t_208))?raise_4(Value.str("invariants broken before remove")):function(){var t__247=ensureBlackRoot_30(del_214(t_208));return(invariants_hold_17(t__247)?t__247:raise_4(Value.str("invariants broken after remove")))}())}()}}
function fold_45(f_248){return function(acc_249){return function(t_250){return function(){switch(t_250[0]){case"RBEmpty":return acc_249;case"RBNode":return fold_45(f_248)(f_248(t_250[2])(t_250[3])(fold_45(f_248)(acc_249)(t_250[4])))(t_250[5])};throw "Non-exhaustive pattern match in case"}()}}};return {empty:empty_5,lookup:lookup_20,member:member_21,insert:insert_31,singleton:singleton_32,remove:remove_44,fold:fold_45}}();Elm.main=function(){return Elm.Dict.main}}catch(e){Elm.main=function(){var msg=('<br/><h2>Your browser may not be supported. Are you using a modern browser?</h2>'+'<br/><span style="color:grey">Runtime Error in Dict module:<br/>'+e+'<br/><br/>The problem may stem from an improper usage of:<br/>EQ, GT, LT, console.log, fst, snd</span>');document.body.innerHTML=Text.monospace(msg);throw e}}