"use strict";var i=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=i(function(H,n){"use strict";var q=require("@stdlib/buffer-ctor"),s=require("@stdlib/array-float64"),y=require("@stdlib/array-float32"),A=require("@stdlib/array-int16"),f=require("@stdlib/array-int32"),m=require("@stdlib/array-int8"),p=require("@stdlib/array-uint16"),x=require("@stdlib/array-uint32"),C=require("@stdlib/array-uint8"),F=require("@stdlib/array-uint8c"),I=require("@stdlib/array-complex64"),U=require("@stdlib/array-complex128"),b=require("@stdlib/array-bool");function u(){throw new Error("not implemented")}var g={binary:q,float64:s,float32:y,float16:u,generic:Array,int16:A,int32:f,int8:m,uint16:p,uint32:x,uint8:C,uint8c:F,complex32:u,complex64:I,complex128:U,bool:b};n.exports=g});var c=i(function(T,l){"use strict";var w=require("@stdlib/assert-is-function"),B=require("@stdlib/ndarray-base-assert-is-struct-data-type"),E=require("@stdlib/array-struct-factory"),S=o(),v={};function h(a){var r,e,t;return!w(a)&&(t=String(a),e=S[t]||null,e)?e:B(a)?(t?r=a.value:(r=a,t=r.layout),e=v[t],e||(e=E(r),v[t]=e,e)):null}l.exports=h});var k=c();module.exports=k;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
