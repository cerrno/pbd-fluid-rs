"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{235:(e,r,t)=>{t.a(e,(async e=>{t.r(r),t.d(r,{Simulation:()=>_.uL,__wbg_attachShader_f542bc1ffd19b410:()=>_.tk,__wbg_bindBuffer_7d0fa67b9824b872:()=>_.P6,__wbg_bufferData_2a7070d86f2279b9:()=>_.dl,__wbg_bufferSubData_efed1d47e456cd4d:()=>_.bz,__wbg_buffer_fbad716641c158a5:()=>_.Bn,__wbg_clearColor_997c3f5e6f9f08d6:()=>_.Ce,__wbg_clear_7f7cbe327101511a:()=>_.D7,__wbg_compileShader_dc2d5d344e104ba7:()=>_.Tn,__wbg_createBuffer_70609557beb6328a:()=>_.cA,__wbg_createProgram_423e552f15789a1f:()=>_.bZ,__wbg_createShader_51d8b138b7a9a555:()=>_.vC,__wbg_drawArrays_e351b7e1443f5c43:()=>_.BN,__wbg_enableVertexAttribArray_3c8b80f0852aad0d:()=>_.Nc,__wbg_getAttribLocation_13c06bdd827ac0aa:()=>_.Pk,__wbg_getContext_9bb15fd189b2c9f1:()=>_.yk,__wbg_getProgramInfoLog_b403ac06b96d8f26:()=>_.Ly,__wbg_getProgramParameter_752b126ee61add0d:()=>_.Yu,__wbg_getShaderInfoLog_cc1ddacf5e0ae0c9:()=>_.tj,__wbg_getShaderParameter_3f1e2ab0eeb1cf60:()=>_.lM,__wbg_getUniformLocation_07b2d367ed388a0d:()=>_.rh,__wbg_instanceof_WebGl2RenderingContext_4bca42e6272623fb:()=>_.Ex,__wbg_linkProgram_09bd455e5aa5e84a:()=>_.yJ,__wbg_newwithbyteoffsetandlength_5eabbe87e8a5283b:()=>_.lp,__wbg_setheight_705eb5fd16a41367:()=>_.rb,__wbg_setwidth_6b276650fdafc277:()=>_.Mi,__wbg_shaderSource_5910f0f849793916:()=>_.Rg,__wbg_uniformMatrix4fv_922df20283f0b41c:()=>_.dr,__wbg_useProgram_ee4a6346a3af060e:()=>_.Ef,__wbg_vertexAttribPointer_f317dbb314cc891f:()=>_.wx,__wbg_viewport_c0b8e58acb57439a:()=>_.AR,__wbindgen_boolean_get:()=>_.HT,__wbindgen_memory:()=>_.oH,__wbindgen_object_drop_ref:()=>_.ug,__wbindgen_rethrow:()=>_.nD,__wbindgen_string_new:()=>_.h4,__wbindgen_throw:()=>_.Or});var _=t(838),n=e([_]);_=(n.then?await n:n)[0]}))},838:(e,r,t)=>{t.a(e,(async _=>{t.d(r,{uL:()=>S,vC:()=>k,Rg:()=>C,Tn:()=>L,lM:()=>D,HT:()=>B,ug:()=>T,tj:()=>E,Mi:()=>M,rb:()=>I,yk:()=>R,Ex:()=>j,AR:()=>H,Ce:()=>N,h4:()=>O,bZ:()=>U,tk:()=>z,yJ:()=>G,Yu:()=>J,Ly:()=>V,Ef:()=>W,rh:()=>Y,dr:()=>Z,Pk:()=>q,cA:()=>F,P6:()=>K,wx:()=>Q,Nc:()=>X,oH:()=>$,Bn:()=>ee,lp:()=>re,dl:()=>te,bz:()=>_e,D7:()=>ne,BN:()=>ae,Or:()=>be,nD:()=>oe});var n=t(530);e=t.hmd(e);var a=_([n]);n=(a.then?await a:a)[0];const b=new Array(32).fill(void 0);function o(e){return b[e]}b.push(void 0,null,!0,!1);let f=b.length;function c(e){const r=o(e);return function(e){e<36||(b[e]=f,f=e)}(e),r}let i=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let u=null;function d(){return null!==u&&u.buffer===n.memory.buffer||(u=new Uint8Array(n.memory.buffer)),u}function g(e,r){return i.decode(d().subarray(e,e+r))}function w(e){f===b.length&&b.push(b.length+1);const r=f;return f=b[r],b[r]=e,r}let l=32;function s(e){return null==e}function h(e,r){try{return e.apply(this,r)}catch(e){n.__wbindgen_exn_store(w(e))}}let m=null;let y=0,p=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const v="function"==typeof p.encodeInto?function(e,r){return p.encodeInto(e,r)}:function(e,r){const t=p.encode(e);return r.set(t),{read:e.length,written:t.length}};function P(e,r,t){if(void 0===t){const t=p.encode(e),_=r(t.length);return d().subarray(_,_+t.length).set(t),y=t.length,_}let _=e.length,n=r(_);const a=d();let b=0;for(;b<_;b++){const r=e.charCodeAt(b);if(r>127)break;a[n+b]=r}if(b!==_){0!==b&&(e=e.slice(b)),n=t(n,_,_=b+3*e.length);const r=d().subarray(n+b,n+_);b+=v(e,r).written}return y=b,n}let x=null;function A(){return null!==x&&x.buffer===n.memory.buffer||(x=new Int32Array(n.memory.buffer)),x}class S{static __wrap(e){const r=Object.create(S.prototype);return r.ptr=e,r}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_simulation_free(e)}constructor(e){try{var r=n.simulation_new(function(e){if(1==l)throw new Error("out of js stack");return b[--l]=e,l}(e));return S.__wrap(r)}finally{b[l++]=void 0}}get_num_particles(){return n.simulation_get_num_particles(this.ptr)>>>0}step(){n.simulation_step(this.ptr)}add_block(){n.simulation_add_block(this.ptr)}reset(){n.simulation_reset(this.ptr)}}function k(e,r){var t=o(e).createShader(r>>>0);return s(t)?0:w(t)}function C(e,r,t,_){o(e).shaderSource(o(r),g(t,_))}function L(e,r){o(e).compileShader(o(r))}function D(e,r,t){return w(o(e).getShaderParameter(o(r),t>>>0))}function B(e){const r=o(e);return"boolean"==typeof r?r?1:0:2}function T(e){c(e)}function E(e,r,t){var _=o(r).getShaderInfoLog(o(t)),a=s(_)?0:P(_,n.__wbindgen_malloc,n.__wbindgen_realloc),b=y;A()[e/4+1]=b,A()[e/4+0]=a}function M(e,r){o(e).width=r>>>0}function I(e,r){o(e).height=r>>>0}function R(){return h((function(e,r,t){var _=o(e).getContext(g(r,t));return s(_)?0:w(_)}),arguments)}function j(e){return o(e)instanceof WebGL2RenderingContext}function H(e,r,t,_,n){o(e).viewport(r,t,_,n)}function N(e,r,t,_,n){o(e).clearColor(r,t,_,n)}function O(e,r){return w(g(e,r))}function U(e){var r=o(e).createProgram();return s(r)?0:w(r)}function z(e,r,t){o(e).attachShader(o(r),o(t))}function G(e,r){o(e).linkProgram(o(r))}function J(e,r,t){return w(o(e).getProgramParameter(o(r),t>>>0))}function V(e,r,t){var _=o(r).getProgramInfoLog(o(t)),a=s(_)?0:P(_,n.__wbindgen_malloc,n.__wbindgen_realloc),b=y;A()[e/4+1]=b,A()[e/4+0]=a}function W(e,r){o(e).useProgram(o(r))}function Y(e,r,t,_){var n=o(e).getUniformLocation(o(r),g(t,_));return s(n)?0:w(n)}function Z(e,r,t,_,a){var b,f;o(e).uniformMatrix4fv(o(r),0!==t,(b=_,f=a,(null!==m&&m.buffer===n.memory.buffer||(m=new Float32Array(n.memory.buffer)),m).subarray(b/4,b/4+f)))}function q(e,r,t,_){return o(e).getAttribLocation(o(r),g(t,_))}function F(e){var r=o(e).createBuffer();return s(r)?0:w(r)}function K(e,r,t){o(e).bindBuffer(r>>>0,o(t))}function Q(e,r,t,_,n,a,b){o(e).vertexAttribPointer(r>>>0,t,_>>>0,0!==n,a,b)}function X(e,r){o(e).enableVertexAttribArray(r>>>0)}function $(){return w(n.memory)}function ee(e){return w(o(e).buffer)}function re(e,r,t){return w(new Float32Array(o(e),r>>>0,t>>>0))}function te(e,r,t,_){o(e).bufferData(r>>>0,o(t),_>>>0)}function _e(e,r,t,_){o(e).bufferSubData(r>>>0,t,o(_))}function ne(e,r){o(e).clear(r>>>0)}function ae(e,r,t,_){o(e).drawArrays(r>>>0,t,_)}function be(e,r){throw new Error(g(e,r))}function oe(e){throw c(e)}}))},530:(e,r,t)=>{var _=([_])=>t.v(r,e.id,"6aba4560d32ab42745f6",{"./index_bg.js":{__wbg_createShader_51d8b138b7a9a555:_.vC,__wbg_shaderSource_5910f0f849793916:_.Rg,__wbg_compileShader_dc2d5d344e104ba7:_.Tn,__wbg_getShaderParameter_3f1e2ab0eeb1cf60:_.lM,__wbindgen_boolean_get:_.HT,__wbindgen_object_drop_ref:_.ug,__wbg_getShaderInfoLog_cc1ddacf5e0ae0c9:_.tj,__wbg_setwidth_6b276650fdafc277:_.Mi,__wbg_setheight_705eb5fd16a41367:_.rb,__wbg_getContext_9bb15fd189b2c9f1:_.yk,__wbg_instanceof_WebGl2RenderingContext_4bca42e6272623fb:_.Ex,__wbg_viewport_c0b8e58acb57439a:_.AR,__wbg_clearColor_997c3f5e6f9f08d6:_.Ce,__wbindgen_string_new:_.h4,__wbg_createProgram_423e552f15789a1f:_.bZ,__wbg_attachShader_f542bc1ffd19b410:_.tk,__wbg_linkProgram_09bd455e5aa5e84a:_.yJ,__wbg_getProgramParameter_752b126ee61add0d:_.Yu,__wbg_getProgramInfoLog_b403ac06b96d8f26:_.Ly,__wbg_useProgram_ee4a6346a3af060e:_.Ef,__wbg_getUniformLocation_07b2d367ed388a0d:_.rh,__wbg_uniformMatrix4fv_922df20283f0b41c:_.dr,__wbg_getAttribLocation_13c06bdd827ac0aa:_.Pk,__wbg_createBuffer_70609557beb6328a:_.cA,__wbg_bindBuffer_7d0fa67b9824b872:_.P6,__wbg_vertexAttribPointer_f317dbb314cc891f:_.wx,__wbg_enableVertexAttribArray_3c8b80f0852aad0d:_.Nc,__wbindgen_memory:_.oH,__wbg_buffer_fbad716641c158a5:_.Bn,__wbg_newwithbyteoffsetandlength_5eabbe87e8a5283b:_.lp,__wbg_bufferData_2a7070d86f2279b9:_.dl,__wbg_bufferSubData_efed1d47e456cd4d:_.bz,__wbg_clear_7f7cbe327101511a:_.D7,__wbg_drawArrays_e351b7e1443f5c43:_.BN,__wbindgen_throw:_.Or,__wbindgen_rethrow:_.nD}});t.a(e,(e=>{var r=e([t(838)]);return r.then?r.then(_):_(r)}),1)}}]);