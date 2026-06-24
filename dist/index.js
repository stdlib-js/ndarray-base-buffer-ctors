"use strict";var i=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var n=i(function(j,u){"use strict";var q=require("@stdlib/buffer-ctor"),c=require("@stdlib/array-float64"),s=require("@stdlib/array-float32"),y=require("@stdlib/array-float16"),A=require("@stdlib/array-int16"),f=require("@stdlib/array-int32"),m=require("@stdlib/array-int8"),p=require("@stdlib/array-uint16"),x=require("@stdlib/array-uint32"),C=require("@stdlib/array-uint8"),F=require("@stdlib/array-uint8c"),I=require("@stdlib/array-complex64"),U=require("@stdlib/array-complex128"),b=require("@stdlib/array-bool");function w(){throw new Error("not implemented")}var B={binary:q,float64:c,float32:s,float16:y,generic:Array,int16:A,int32:f,int8:m,uint16:p,uint32:x,uint8:C,uint8c:F,complex32:w,complex64:I,complex128:U,bool:b};u.exports=B});var l=i(function(z,v){"use strict";var E=require("@stdlib/assert-is-function"),S=require("@stdlib/ndarray-base-assert-is-struct-data-type"),g=require("@stdlib/ndarray-base-dtype-resolve-str"),h=require("@stdlib/array-struct-factory"),k=n(),o={};function D(a){var e,r,t;return!E(a)&&(t=g(a),r=k[t]||null,r)?r:S(a)?(t?e=a.value:(e=a,t=e.layout),r=o[t],r||(r=h(e),o[t]=r,r)):null}v.exports=D});var H=l();module.exports=H;
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
