(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{629:function(e,r,t){"use strict";t.r(r);t(98);var n=t(24),o={data:function(){return{form:{username:"",password:"",email:"",image:""},showPassword:!1,valid:!0,snackbar:!1,snackbarText:"",rules:{username:[function(e){return!!e||"اسم المستخدم مطلوب"}],password:[function(e){return!!e||"كلمة المرور مطلوبة"},function(e){return e&&e.length>=6||"لابد ان يكون كلمة المرور اكثر من 6 ارقام"}],email:[function(e){return!!e||"البريد الالكتروني مطلوب"},function(e){return/.+@.+\..+/.test(e)||"يجب ان يكون البريد الاكتروني صحيح"}]}}},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e.$refs.form.validate()){r.next=8;break}return r.next=4,e.$axios.post("/signup",e.form);case 4:return r.next=6,e.$auth.loginWith("local",{data:{email:e.form.email,password:e.form.password}});case 6:e.clear(),e.$router.push("/");case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),e.snackbar=!0,e.snackbarText=r.t0.response.data.message;case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},clear:function(){this.$refs.form.reset()}}},l=t(37),c=t(33),d=t.n(c),m=t(548),f=t(564),v=t(562),w=t(556),x=t(584),k=t(83),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register modal-auth"},[t("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600px",elevation:"0",color:"transparent"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(r){return r.preventDefault(),r.stopPropagation(),e.register()}},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-card-title",{staticClass:"justify-center mb-8"},[e._v("تسجيل جديد")]),e._v(" "),t("v-card-text",[t("v-text-field",{attrs:{outlined:"","prepend-inner-icon":"mdi-account-circle",label:"اسم المستخدم",rules:e.rules.username,required:"",placeholder:" "},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}}),e._v(" "),t("v-text-field",{attrs:{outlined:"",type:"email","prepend-inner-icon":"mdi-email",label:"البريد الالكتروني",rules:e.rules.email,required:""},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),t("v-text-field",{attrs:{type:e.showPassword?"text":"password",outlined:"","prepend-inner-icon":"mdi-lock-outline","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",label:"كلمة المرور",rules:e.rules.password,required:""},on:{"click:append":function(r){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e._v(" "),t("v-btn",{attrs:{color:"primary",text:"",to:{name:"login"}}},[e._v("لديك حساب؟")])],1),e._v(" "),t("v-card-actions",[t("v-btn",{attrs:{type:"submit",color:"primary",block:"",disabled:!e.valid,elevation:"0"}},[e._v("تسجيل")])],1)],1)],1),e._v(" "),t("v-snackbar",{attrs:{timeout:5e3,color:"red"},scopedSlots:e._u([{key:"action",fn:function(r){var n=r.attrs;return[t("v-btn",e._b({staticClass:"v-btn--active",attrs:{text:""},on:{click:function(r){e.snackbar=!1}}},"v-btn",n,!1),[e._v("اغلاق")])]}}]),model:{value:e.snackbar,callback:function(r){e.snackbar=r},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    ")])],1)}),[],!1,null,null,null);r.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VForm:w.a,VSnackbar:x.a,VTextField:k.a})},641:function(e,r,t){"use strict";t.r(r);var n={name:"user-register",middleware:"auth",auth:"guest"},o=t(37),l=t(33),c=t.n(l),d=t(577),component=Object(o.a)(n,(function(){var e=this.$createElement,r=this._self._c||e;return r("v-container",[r("Register")],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{Register:t(629).default}),c()(component,{VContainer:d.a})}}]);