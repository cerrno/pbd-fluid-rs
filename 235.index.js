"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{235:(e,t,_)=>{_.a(e,(async(e,r)=>{try{_.r(t),_.d(t,{Simulation:()=>n.uL,__wbg_attachShader_0867104b37cae2d6:()=>n.Em,__wbg_bindBuffer_28e62f648e99e251:()=>n.p0,__wbg_bufferData_282e5d315f5503eb:()=>n.gG,__wbg_bufferSubData_884f8fcf6ab0d69e:()=>n.HD,__wbg_buffer_7af23f65f6c64548:()=>n.EF,__wbg_clearColor_2c1d714dee770474:()=>n.N$,__wbg_clear_786a8deca6672a9d:()=>n.o5,__wbg_compileShader_1b371763cfd802f7:()=>n.$m,__wbg_createBuffer_48c0376fc0746386:()=>n.Rn,__wbg_createProgram_c2675d2cc83435a6:()=>n.oE,__wbg_createShader_8d2a55e7777bbea7:()=>n.Ar,__wbg_drawArrays_b8da4ee5bc9599f6:()=>n.G$,__wbg_enableVertexAttribArray_1d5f3ff6e7da7095:()=>n.X_,__wbg_getAttribLocation_f875dcf14748b9d4:()=>n.wG,__wbg_getContext_0c19ba5c037e057f:()=>n.fi,__wbg_getProgramInfoLog_e70b0120bda14895:()=>n.TZ,__wbg_getProgramParameter_e4fe54d806806081:()=>n.Jc,__wbg_getShaderInfoLog_95d068aeccc5dbb3:()=>n._u,__wbg_getShaderParameter_2972af1cb850aeb7:()=>n.jS,__wbg_getUniformLocation_776a1f58e7904d81:()=>n.Ob,__wbg_instanceof_WebGlRenderingContext_b0885da52b151d86:()=>n.Ew,__wbg_linkProgram_b98c8967f45a44fd:()=>n.RC,__wbg_newwithbyteoffsetandlength_3f554978d8793b14:()=>n.XJ,__wbg_setheight_2b662384bfacb65c:()=>n.bx,__wbg_setwidth_654d8adcd4979eed:()=>n.k4,__wbg_shaderSource_daca520f63ef8fca:()=>n.wD,__wbg_uniform4fv_54aeb419c88f21df:()=>n.P9,__wbg_uniformMatrix4fv_caf5129a09f4f267:()=>n.Nf,__wbg_useProgram_022d72a653706891:()=>n.W1,__wbg_vertexAttribPointer_a75ea424ba9fa4e8:()=>n.jL,__wbg_viewport_6c864379ded67e8a:()=>n.s$,__wbindgen_boolean_get:()=>n.HT,__wbindgen_memory:()=>n.oH,__wbindgen_object_drop_ref:()=>n.ug,__wbindgen_string_new:()=>n.h4,__wbindgen_throw:()=>n.Or});var n=_(838),a=e([n]);n=(a.then?(await a)():a)[0],r()}catch(e){r(e)}}))},838:(e,t,_)=>{_.a(e,(async(r,n)=>{try{_.d(t,{uL:()=>C,Ar:()=>D,wD:()=>G,$m:()=>T,jS:()=>$,HT:()=>j,ug:()=>H,_u:()=>I,k4:()=>R,bx:()=>O,fi:()=>B,Ew:()=>J,s$:()=>N,N$:()=>W,h4:()=>X,oE:()=>F,Em:()=>M,RC:()=>U,Jc:()=>V,TZ:()=>Z,W1:()=>q,Ob:()=>z,Nf:()=>K,wG:()=>Q,Rn:()=>Y,p0:()=>ee,jL:()=>te,X_:()=>_e,gG:()=>re,o5:()=>ne,P9:()=>ae,G$:()=>oe,oH:()=>fe,EF:()=>ce,XJ:()=>be,HD:()=>ie,Or:()=>ue});var a=_(530);e=_.hmd(e);var o=r([a]);a=(o.then?(await o)():o)[0];const f=new Array(32).fill(void 0);function c(e){return f[e]}f.push(void 0,null,!0,!1);let b=f.length;function i(e){e<36||(f[e]=b,b=e)}function u(e){const t=c(e);return i(e),t}let d=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});d.decode();let g=null;function w(){return null!==g&&g.buffer===a.memory.buffer||(g=new Uint8Array(a.memory.buffer)),g}function s(e,t){return d.decode(w().subarray(e,e+t))}function l(e){b===f.length&&f.push(f.length+1);const t=b;return b=f[t],f[t]=e,t}let h=32;function m(e){if(1==h)throw new Error("out of js stack");return f[--h]=e,h}let p=null;function y(){return null!==p&&p.buffer===a.memory.buffer||(p=new Int32Array(a.memory.buffer)),p}function x(e){return null==e}function v(e,t){try{return e.apply(this,t)}catch(e){a.__wbindgen_export_0(l(e))}}let P=null;function S(e,t){return(null!==P&&P.buffer===a.memory.buffer||(P=new Float32Array(a.memory.buffer)),P).subarray(e/4,e/4+t)}let A=0,L=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const E="function"==typeof L.encodeInto?function(e,t){return L.encodeInto(e,t)}:function(e,t){const _=L.encode(e);return t.set(_),{read:e.length,written:_.length}};function k(e,t,_){if(void 0===_){const _=L.encode(e),r=t(_.length);return w().subarray(r,r+_.length).set(_),A=_.length,r}let r=e.length,n=t(r);const a=w();let o=0;for(;o<r;o++){const t=e.charCodeAt(o);if(t>127)break;a[n+o]=t}if(o!==r){0!==o&&(e=e.slice(o)),n=_(n,r,r=o+3*e.length);const t=w().subarray(n+o,n+r);o+=E(e,t).written}return A=o,n}class C{static __wrap(e){const t=Object.create(C.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();a.__wbg_simulation_free(e)}constructor(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16);a.simulation_new(r,m(e));var t=y()[r/4+0],_=y()[r/4+1];if(y()[r/4+2])throw u(_);return C.__wrap(t)}finally{a.__wbindgen_add_to_stack_pointer(16),f[h++]=void 0}}get_num_particles(){return a.simulation_get_num_particles(this.ptr)>>>0}set_viscosity(e){a.simulation_set_viscosity(this.ptr,e)}set_solver_substeps(e){a.simulation_set_solver_substeps(this.ptr,e)}step(){a.simulation_step(this.ptr)}add_block(){a.simulation_add_block(this.ptr)}reset(){a.simulation_reset(this.ptr)}}function D(e,t){const _=c(e).createShader(t>>>0);return x(_)?0:l(_)}function G(e,t,_,r){c(e).shaderSource(c(t),s(_,r))}function T(e,t){c(e).compileShader(c(t))}function $(e,t,_){return l(c(e).getShaderParameter(c(t),_>>>0))}function j(e){const t=c(e);return"boolean"==typeof t?t?1:0:2}function H(e){u(e)}function I(e,t,_){const r=c(t).getShaderInfoLog(c(_));var n=x(r)?0:k(r,a.__wbindgen_export_1,a.__wbindgen_export_2),o=A;y()[e/4+1]=o,y()[e/4+0]=n}function R(e,t){c(e).width=t>>>0}function O(e,t){c(e).height=t>>>0}function B(){return v((function(e,t,_){const r=c(e).getContext(s(t,_));return x(r)?0:l(r)}),arguments)}function J(e){return c(e)instanceof WebGLRenderingContext}function N(e,t,_,r,n){c(e).viewport(t,_,r,n)}function W(e,t,_,r,n){c(e).clearColor(t,_,r,n)}function X(e,t){return l(s(e,t))}function F(e){const t=c(e).createProgram();return x(t)?0:l(t)}function M(e,t,_){c(e).attachShader(c(t),c(_))}function U(e,t){c(e).linkProgram(c(t))}function V(e,t,_){return l(c(e).getProgramParameter(c(t),_>>>0))}function Z(e,t,_){const r=c(t).getProgramInfoLog(c(_));var n=x(r)?0:k(r,a.__wbindgen_export_1,a.__wbindgen_export_2),o=A;y()[e/4+1]=o,y()[e/4+0]=n}function q(e,t){c(e).useProgram(c(t))}function z(e,t,_,r){const n=c(e).getUniformLocation(c(t),s(_,r));return x(n)?0:l(n)}function K(e,t,_,r,n){c(e).uniformMatrix4fv(c(t),0!==_,S(r,n))}function Q(e,t,_,r){return c(e).getAttribLocation(c(t),s(_,r))}function Y(e){const t=c(e).createBuffer();return x(t)?0:l(t)}function ee(e,t,_){c(e).bindBuffer(t>>>0,c(_))}function te(e,t,_,r,n,a,o){c(e).vertexAttribPointer(t>>>0,_,r>>>0,0!==n,a,o)}function _e(e,t){c(e).enableVertexAttribArray(t>>>0)}function re(e,t,_,r){c(e).bufferData(t>>>0,c(_),r>>>0)}function ne(e,t){c(e).clear(t>>>0)}function ae(e,t,_,r){c(e).uniform4fv(c(t),S(_,r))}function oe(e,t,_,r){c(e).drawArrays(t>>>0,_,r)}function fe(){return l(a.memory)}function ce(e){return l(c(e).buffer)}function be(e,t,_){return l(new Float32Array(c(e),t>>>0,_>>>0))}function ie(e,t,_,r){c(e).bufferSubData(t>>>0,_,c(r))}function ue(e,t){throw new Error(s(e,t))}n()}catch(e){n(e)}}))},530:(e,t,_)=>{_.a(e,(async(r,n)=>{try{var a,o=r([a=_(838)]),[a]=o.then?(await o)():o;await _.v(t,e.id,"58ab106b993e18ffba5b",{"./index_bg.js":{__wbg_createShader_8d2a55e7777bbea7:a.Ar,__wbg_shaderSource_daca520f63ef8fca:a.wD,__wbg_compileShader_1b371763cfd802f7:a.$m,__wbg_getShaderParameter_2972af1cb850aeb7:a.jS,__wbindgen_boolean_get:a.HT,__wbindgen_object_drop_ref:a.ug,__wbg_getShaderInfoLog_95d068aeccc5dbb3:a._u,__wbg_setwidth_654d8adcd4979eed:a.k4,__wbg_setheight_2b662384bfacb65c:a.bx,__wbg_getContext_0c19ba5c037e057f:a.fi,__wbg_instanceof_WebGlRenderingContext_b0885da52b151d86:a.Ew,__wbg_viewport_6c864379ded67e8a:a.s$,__wbg_clearColor_2c1d714dee770474:a.N$,__wbindgen_string_new:a.h4,__wbg_createProgram_c2675d2cc83435a6:a.oE,__wbg_attachShader_0867104b37cae2d6:a.Em,__wbg_linkProgram_b98c8967f45a44fd:a.RC,__wbg_getProgramParameter_e4fe54d806806081:a.Jc,__wbg_getProgramInfoLog_e70b0120bda14895:a.TZ,__wbg_useProgram_022d72a653706891:a.W1,__wbg_getUniformLocation_776a1f58e7904d81:a.Ob,__wbg_uniformMatrix4fv_caf5129a09f4f267:a.Nf,__wbg_getAttribLocation_f875dcf14748b9d4:a.wG,__wbg_createBuffer_48c0376fc0746386:a.Rn,__wbg_bindBuffer_28e62f648e99e251:a.p0,__wbg_vertexAttribPointer_a75ea424ba9fa4e8:a.jL,__wbg_enableVertexAttribArray_1d5f3ff6e7da7095:a.X_,__wbg_bufferData_282e5d315f5503eb:a.gG,__wbg_clear_786a8deca6672a9d:a.o5,__wbg_uniform4fv_54aeb419c88f21df:a.P9,__wbg_drawArrays_b8da4ee5bc9599f6:a.G$,__wbindgen_memory:a.oH,__wbg_buffer_7af23f65f6c64548:a.EF,__wbg_newwithbyteoffsetandlength_3f554978d8793b14:a.XJ,__wbg_bufferSubData_884f8fcf6ab0d69e:a.HD,__wbindgen_throw:a.Or}}),n()}catch(e){n(e)}}),1)}}]);