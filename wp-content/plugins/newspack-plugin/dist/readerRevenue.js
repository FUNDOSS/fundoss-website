(()=>{"use strict";var e,t={1899:(e,t,n)=>{n.r(t),n(5674);var a=n(2628),r=n.n(a),l=n(9307),o=n(5736),s=n(1732),i=n(9818),c=n(5609),p=n(7405);const u="wc",d="other",m="newspack-reader-revenue-wizard",g=o.__,h={once:{tieredLabel:g("One-time donations"),staticLabel:g("Suggested one-time donation amount")},month:{tieredLabel:g("Monthly donations"),staticLabel:g("Suggested donation amount per month")},year:{tieredLabel:g("Annual donations"),staticLabel:g("Suggested donation amount per year")}},w=Object.keys(h),k=()=>{const e=s.en.useWizardData("reader-revenue"),{updateWizardSettings:t}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);if(!e.donation_data||"errors"in e.donation_data)return null;const{amounts:n,currencySymbol:a,tiered:r,disabledFrequencies:o,minimumDonation:u}=e.donation_data,d=e=>n=>t({slug:"newspack-reader-revenue-wizard",path:["donation_data",...e],value:n}),m=w.map((e=>({key:e,...h[e]}))),k=parseFloat(u),b=window.newspack_reader_revenue?.can_use_name_your_price;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Zb,{headerActions:!0,noBorder:!0},(0,l.createElement)(s.M$,{title:g("Suggested Donations","newspack-plugin"),description:g("Set suggested donation amounts. These will be the default settings for the Donate block.","newspack-plugin"),noMargin:!0}),b&&(0,l.createElement)(s.Yw,{label:g("Donation Type","newspack-plugin"),onChange:()=>d(["tiered"])(!r),buttonOptions:[{value:!0,label:g("Tiered","newspack-plugin")},{value:!1,label:g("Untiered","newspack-plugin")}],buttonSmall:!0,value:r,hideLabelFromVision:!0})),r?(0,l.createElement)(s.rj,{columns:1},m.map((e=>{const t=o[e.key],r=Object.values(o).filter(Boolean).length===w.length-1;return(0,l.createElement)(s.Zb,{noBorder:!0,key:e.key},(0,l.createElement)(s.rj,{columns:1,gutter:8},(0,l.createElement)(c.ToggleControl,{checked:!t,onChange:()=>d(["disabledFrequencies",e.key])(!t),label:e.tieredLabel,disabled:!t&&r}),!t&&(0,l.createElement)(s.rj,{columns:3,rowGap:16},(0,l.createElement)(p.P,{currencySymbol:a,label:g("Low-tier"),error:n[e.key][0]<k?g("Warning: suggested donations should be at least the minimum donation amount.","newspack-plugin"):null,value:n[e.key][0],min:k,onChange:d(["amounts",e.key,0])}),(0,l.createElement)(p.P,{currencySymbol:a,label:g("Mid-tier"),error:n[e.key][1]<k?g("Warning: suggested donations should be at least the minimum donation amount.","newspack-plugin"):null,value:n[e.key][1],min:k,onChange:d(["amounts",e.key,1])}),(0,l.createElement)(p.P,{currencySymbol:a,label:g("High-tier"),error:n[e.key][2]<k?g("Warning: suggested donations should be at least the minimum donation amount.","newspack-plugin"):null,value:n[e.key][2],min:k,onChange:d(["amounts",e.key,2])}))))}))):(0,l.createElement)(s.rj,{columns:1},(0,l.createElement)(s.Zb,{noBorder:!0},(0,l.createElement)(s.rj,{columns:3,rowGap:16},m.map((e=>{const t=o[e.key],r=Object.values(o).filter(Boolean).length===w.length-1;return(0,l.createElement)(s.rj,{columns:1,gutter:16,key:e.key},(0,l.createElement)(c.ToggleControl,{checked:!t,onChange:()=>d(["disabledFrequencies",e.key])(!t),label:e.tieredLabel,disabled:!t&&r}),!t&&(0,l.createElement)(p.P,{currencySymbol:a,label:e.staticLabel,value:n[e.key][3],min:k,error:n[e.key][3]<k?g("Warning: suggested donations should be at least the minimum donation amount.","newspack-plugin"):null,onChange:d(["amounts",e.key,3]),key:e.key}))}))))),(0,l.createElement)(s.rj,{columns:3},(0,l.createElement)(s.w4,{label:g("Minimum donation","newspack-plugin"),help:g("Set minimum donation amount. Setting a reasonable minimum donation amount can help protect your site from bot attacks.","newspack-plugin"),type:"number",min:1,value:k,onChange:e=>d(["minimumDonation"])(e)})))},b=()=>{const e=s.en.useWizardData("reader-revenue"),{updateWizardSettings:t}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);if(!e.donation_data||"errors"in e.donation_data)return null;const n=e.available_billing_fields;if(!n||!Object.keys(n).length)return null;const a=e.donation_data.billingFields.length?e.donation_data.billingFields:Object.keys(n);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Zb,{noBorder:!0,headerActions:!0},(0,l.createElement)(s.M$,{title:g("Billing Fields","newspack-plugin"),description:g("Configure the billing fields shown in the modal checkout form.","newspack-plugin"),noMargin:!0})),(0,l.createElement)(s.rj,{columns:3,rowGap:16},Object.keys(n).map((e=>(0,l.createElement)(c.CheckboxControl,{key:e,label:n[e].label,checked:a.includes(e),disabled:"billing_email"===e,onChange:()=>{let n=[...a];var r;n=a.includes(e)?n.filter((t=>t!==e)):[...n,e],(r=["billingFields"],e=>t({slug:"newspack-reader-revenue-wizard",path:["donation_data",...r],value:e}))(n)}})))))},_=()=>{const e=s.en.useWizardData("reader-revenue"),{saveWizardSettings:t}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.fM,{description:g("Configure options for donations.","newspack-plugin"),hasGreyHeader:!0,isMedium:!0,title:g("Donation Settings","newspack-plugin"),actionContent:(0,l.createElement)(s.zx,{variant:"primary",onClick:()=>t({slug:m,section:"donations",payloadPath:["donation_data"],auxData:{saveDonationProduct:!0}})},g("Save Donation Settings","newspack-plugin"))},e.donation_page&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Zb,{noBorder:!0,headerActions:!0},(0,l.createElement)(s.M$,{title:g("Donations Landing Page","newspack-plugin"),noMargin:!0}),(0,l.createElement)(s.zx,{variant:"secondary",isSmall:!0,href:e.donation_page.editUrl,onClick:void 0},g("Edit Page"))),"publish"===e.donation_page.status?(0,l.createElement)(s.qX,{isSuccess:!0,noticeText:g("Your donations landing page is published.","newspack-plugin")}):(0,l.createElement)(s.qX,{isError:!0,noticeText:g("Your donations landing page is not yet published.","newspack-plugin")})),(0,l.createElement)(k,null)),(0,l.createElement)(s.fM,{description:g("Configure options for modal checkouts.","newspack-plugin"),hasGreyHeader:!0,isMedium:!0,title:g("Modal Checkout Settings","newspack-plugin"),actionContent:(0,l.createElement)(s.zx,{variant:"primary",onClick:()=>t({slug:m,section:"donations",payloadPath:["donation_data"]})},g("Save Modal Checkout Settings","newspack-plugin"))},(0,l.createElement)(b,null)))},E=o.__,f=()=>{const[e,t]=(0,l.useState)(null),n=s.en.useWizardData("reader-revenue"),{updateWizardSettings:a,saveWizardSettings:r}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);(0,l.useEffect)((()=>{n?.platform_data?.donor_landing_page&&t(n.platform_data.donor_landing_page)}),[]);const o=(e,t)=>a({slug:m,path:["platform_data",e],value:t}),c=n?.platform_data||{};return(0,l.createElement)(s.fM,{hasGreyHeader:!0,isMedium:!0,title:E("News Revenue Hub Settings","newspack"),description:E("Configure your site’s connection to News Revenue Hub.","newspack"),actionContent:(0,l.createElement)(s.zx,{isPrimary:!0,onClick:()=>r({slug:m,payloadPath:["platform_data"]})},E("Save Settings"))},(0,l.createElement)("div",null,(0,l.createElement)(s.rj,{columns:3},(0,l.createElement)(s.w4,{label:E("Organization ID","newspack"),placeholder:"exampleid",value:c?.nrh_organization_id||"",onChange:e=>o("nrh_organization_id",e)}),(0,l.createElement)(s.w4,{label:E("Custom domain (optional)","newspack"),help:E("Enter the raw domain without protocol or slashes."),placeholder:"donate.example.com",value:c?.nrh_custom_domain||"",onChange:e=>o("nrh_custom_domain",e)}),(0,l.createElement)(s.w4,{label:E("Salesforce Campaign ID (optional)","newspack"),placeholder:"exampleid",value:c?.nrh_salesforce_campaign_id||"",onChange:e=>o("nrh_salesforce_campaign_id",e)}))),c.hasOwnProperty("donor_landing_page")&&(0,l.createElement)("div",null,(0,l.createElement)("hr",null),(0,l.createElement)("h3",null,E("Donor Landing Page","newspack")),(0,l.createElement)("p",{className:"components-base-control__help"},E("Set a page on your site as a donor landing page. Once a reader donates and lands on this page, they will be considered a donor.","newspack")),(0,l.createElement)(s.ah,{label:E("Search for a New Donor Landing Page","newspack"),help:E("Begin typing page title, click autocomplete result to select.","newspack"),onChange:e=>{if(!e||!e.length)return t(null),o("donor_landing_page",null);const n=e[0];return t(n),o("donor_landing_page",n)},postTypes:[{slug:"page",label:"Page"}],postTypeLabel:E("page","newspack"),postTypeLabelPlural:E("pages","newspack"),selectedItems:e?[e]:[]})))},y=o.__,v=()=>{const e=s.en.useWizardData("reader-revenue"),{saveWizardSettings:t,updateWizardSettings:n}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Zb,{noBorder:!0},(0,l.createElement)(s.Yw,{label:y("Select Reader Revenue Platform","newspack"),value:e.platform_data?.platform,options:[{label:y("Other","newspack"),value:d},{label:y("Newspack","newspack"),value:u},{label:y("News Revenue Hub","newspack"),value:"nrh"}],onChange:e=>{t({slug:"newspack-reader-revenue-wizard",payloadPath:["platform_data"],updatePayload:{path:["platform_data","platform"],value:e}})}})),u===e.platform_data?.platform&&!e.plugin_status&&(0,l.createElement)(s.xf,{plugins:["woocommerce","woocommerce-subscriptions"],onStatus:({complete:e})=>{e&&n({slug:"newspack-reader-revenue-wizard",path:["plugin_status"],value:!0})},withoutFooterButton:!0}))},S=o.__,{SettingsCard:C}=s.Zr,P=({data:e,changeHandler:t})=>(0,l.createElement)(C,{title:S("Transaction Fees","newspack-plugin"),description:S("If you have a non-default or negotiated fee with Stripe, update its parameters here.","newspack-plugin"),columns:1,noBorder:!0},(0,l.createElement)(s.rj,{noMargin:!0,rowGap:16},(0,l.createElement)(s.w4,{type:"number",step:"0.1",value:e.fee_multiplier,label:S("Fee multiplier","newspack-plugin"),onChange:t("fee_multiplier")}),(0,l.createElement)(s.w4,{type:"number",step:"0.1",value:e.fee_static,label:S("Fee static portion","newspack-plugin"),onChange:t("fee_static")}))),x=()=>{const e=s.en.useWizardData("reader-revenue"),{testMode:t=!1,publishableKey:n="",secretKey:a="",testPublishableKey:r="",testSecretKey:o=""}=e.stripe_data||{},{updateWizardSettings:p}=(0,i.useDispatch)(s.en.STORE_NAMESPACE),u=e=>t=>p({slug:m,path:["stripe_data",e],value:t});return(0,l.createElement)(s.rj,{columns:1,gutter:16},(0,l.createElement)(s.rj,{columns:1,gutter:16},(0,l.createElement)("p",{className:"newspack-payment-setup-screen__api-keys-instruction"},S("Configure Stripe and enter your API keys","newspack-plugin")," – ",(0,l.createElement)(c.ExternalLink,{href:"https://stripe.com/docs/keys#api-keys"},S("learn how"))),(0,l.createElement)(c.CheckboxControl,{label:S("Use Stripe in test mode","newspack-plugin"),checked:t,onChange:u("testMode"),help:S("Test mode will not capture real payments. Use it for testing your purchase flow.","newspack-plugin")})),(0,l.createElement)(s.rj,{noMargin:!0,rowGap:16},t?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.w4,{type:"password",value:r,label:S("Test Publishable Key","newspack-plugin"),onChange:u("testPublishableKey")}),(0,l.createElement)(s.w4,{type:"password",value:o,label:S("Test Secret Key","newspack-plugin"),onChange:u("testSecretKey")})):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.w4,{type:"password",value:n,label:S("Publishable Key","newspack-plugin"),onChange:u("publishableKey")}),(0,l.createElement)(s.w4,{type:"password",value:a,label:S("Secret Key","newspack-plugin"),onChange:u("secretKey")}))))},T=()=>{const{stripe_data:e={},is_ssl:t,errors:n=[]}=s.en.useWizardData("reader-revenue"),{updateWizardSettings:a}=(0,i.useDispatch)(s.en.STORE_NAMESPACE),r=e=>t=>a({slug:m,path:["stripe_data",e],value:t}),{saveWizardSettings:o}=(0,i.useDispatch)(s.en.STORE_NAMESPACE),p=()=>o({slug:m,section:"stripe",payloadPath:["stripe_data"]});return e?(0,l.createElement)(l.Fragment,null,n.length>0&&n.map(((e,t)=>(0,l.createElement)(s.qX,{isError:!0,key:t,noticeText:(0,l.createElement)("span",null,e.message)}))),!1===t&&(0,l.createElement)(s.qX,{isWarning:!0,noticeText:(0,l.createElement)("a",{href:"https://stripe.com/docs/security/guide"},S("This site does not use SSL. The page hosting the Stipe integration should be secured with SSL.","newspack-plugin"))}),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.rj,null,(0,l.createElement)(c.ToggleControl,{label:S("Enable Stripe","newspack-plugin"),checked:e.enabled,onChange:r("enabled")})),e.enabled?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(x,null),(0,l.createElement)(P,{data:e,changeHandler:r}),(0,l.createElement)(s.rj,{columns:2},(0,l.createElement)(c.CheckboxControl,{label:S("Allow donors to cover transaction fees","newspack-plugin"),checked:e.allow_covering_fees,onChange:r("allow_covering_fees"),help:S("If checked, the donors will be able to cover Stripe's transaction fees.","newspack-plugin")}),(0,l.createElement)(c.CheckboxControl,{label:S("Enable covering fees by default","newspack-plugin"),checked:e.allow_covering_fees_default,onChange:r("allow_covering_fees_default"),help:S("If checked, the option to cover transaction fees will be checked by default.","newspack-plugin")})),(0,l.createElement)(s.w4,{value:e.allow_covering_fees_label,label:S("Custom message","newspack-plugin"),placeholder:S("A message to explain the transaction fee option (optional).","newspack-plugin"),onChange:r("allow_covering_fees_label")})):(0,l.createElement)(s.rj,null,(0,l.createElement)("p",{className:"newspack-payment-setup-screen__info"},S("Other gateways can be enabled and set up in the ","newspack-plugin"),(0,l.createElement)(c.ExternalLink,{href:"/wp-admin/admin.php?page=wc-settings&tab=checkout"},S("WooCommerce payment gateway settings","newspack-plugin"))))),(0,l.createElement)("div",{className:"newspack-buttons-card"},(0,l.createElement)(s.zx,{isPrimary:!0,onClick:p},S("Save Settings","newspack-plugin")))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("p",null,S("To configure Stripe, install the WooCommerce Stripe Gateway plugin.","newspack-plugin")),(0,l.createElement)(s.xf,{plugins:["woocommerce-gateway-stripe"],onStatus:({complete:e})=>{e&&(a({slug:"newspack-reader-revenue-wizard",path:["stripe_data"],value:{activate:!0}}),p())},withoutFooterButton:!0}))};var O=n(7462),z=n(6989),M=n.n(z);const F=o.__,D=r()(newspack_reader_revenue.emails),j=newspack_reader_revenue.email_cpt,A=()=>{const[e,t]=(0,l.useState)(null),[n,a]=(0,l.useState)(!1),[r,o]=(0,l.useState)(!1),[i,c]=(0,l.useState)(D);return!1===e?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.qX,{isError:!0},F("Newspack uses Newspack Newsletters to handle editing email-type content. Please activate this plugin to proceed.","newspack")),(0,l.createElement)(s.qX,{isError:!0},F("Until this feature is configured, default receipts will be used.","newspack")),(0,l.createElement)(s.xf,{style:e?{display:"none"}:{},plugins:["newspack-newsletters"],onStatus:e=>t(e.complete),onInstalled:()=>window.location.reload(),withoutFooterButton:!0})):(0,l.createElement)(l.Fragment,null,i.map((e=>{const t="publish"===e.status;return(0,l.createElement)(s.fM,(0,O.Z)({key:e.post_id,disabled:r,title:e.label,titleLink:e.edit_link,href:e.edit_link,description:e.description,actionText:F("Edit","newspack"),toggleChecked:t,toggleOnChange:t=>{return n=e.post_id,r=t?"publish":"draft",a(!1),o(!0),void M()({path:`/wp/v2/${j}/${n}`,method:"post",data:{status:r}}).then((()=>{c(i.map((e=>e.post_id===n?{...e,status:r}:e)))})).catch(a).finally((()=>o(!1)));var n,r}},t?{}:{notification:F("This email is not active. The default receipt will be used.","newspack"),notificationLevel:"info"}),n&&(0,l.createElement)(s.qX,{noticeText:n?.message||F("Something went wrong.","newspack"),isError:!0}))})))};var W=n(129),L=n(6483);const N=o.__,R=()=>{const{salesforce_redirect_url:e}=window?.newspack_reader_revenue||{},[t,n]=(0,l.useState)(!1),{salesforce_settings:a={}}=s.en.useWizardData("reader-revenue"),[r,o]=(0,l.useState)(a.refresh_token),[p,u]=(0,l.useState)(null),{saveWizardSettings:d,wizardApiFetch:g}=(0,i.useDispatch)(s.en.STORE_NAMESPACE);return(0,l.useEffect)((()=>{const t=(0,W.parse)(window.location.search).code;t&&(window.history.replaceState({},"",e),(async t=>{try{const n=await g({path:"/newspack/salesforce/v1/tokens",method:"POST",data:{code:t,redirect_uri:e}}),{access_token:a,client_id:r,client_secret:l,instance_url:s,refresh_token:i}=n;a&&i&&d({slug:m,section:"salesforce",payloadPath:["salesforce_settings"],updatePayload:{path:["salesforce_settings"],value:{access_token:a,client_id:r,client_secret:l,instance_url:s,refresh_token:i}}}),o(!0)}catch(e){u(N("We couldn’t establish a connection to Salesforce. Please verify your Consumer Key and Secret and try connecting again.","newspack"))}})(t))}),[]),(0,l.useEffect)((()=>{r?(async()=>{const e=await g({path:"/newspack/salesforce/v1/connection-status",method:"POST",isQuietFetch:!0});e.error&&u(e.error)})():u(null)}),[r]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.d5,{afterUpdate:t=>{let n,a;if((t?.salesforce||[]).forEach((e=>{"newspack_salesforce_client_id"===e.key?n=e.value:"newspack_salesforce_client_secret"===e.key&&(a=e.value)})),n&&a&&e){const t=(0,L.addQueryArgs)("https://login.salesforce.com/services/oauth2/authorize",{response_type:"code",client_id:encodeURIComponent(n),client_secret:encodeURIComponent(a),redirect_uri:encodeURI(e)});window.location.assign(t)}else o(!1)},pluginSlug:"newspack/salesforce",title:N("Salesforce Settings","newspack"),description:()=>(0,l.createElement)(l.Fragment,null,p&&(0,l.createElement)(s.qX,{noticeText:p,isWarning:!0}),r&&!p&&(0,l.createElement)(s.qX,{noticeText:N("Your site is connected to Salesforce.","newspack"),isSuccess:!0}),N("Establish a connection to sync WooCommerce order data to Salesforce. To connect with Salesforce, create or choose a Connected App for this site in your Salesforce dashboard. Make sure to paste the full URL for this page (","newspack"),(0,l.createElement)(c.ClipboardButton,{className:"newspack-button is-link",text:e,onCopy:()=>n(!0),onFinishCopy:()=>n(!1)},N(t?"copied to clipboard!":"copy to clipboard","newspack")),N(") into the “Callback URL” field in the Connected App’s settings. ","newspack"),(0,l.createElement)(c.ExternalLink,{href:"https://help.salesforce.com/articleView?id=connected_app_create.htm"},N("Learn how to create a Connected App","newspack")))}))},B=o.__;(0,l.render)((0,l.createElement)((()=>{const{platform_data:e,plugin_status:t,donation_data:n}=s.en.useWizardData("reader-revenue"),a=e?.platform,o={label:B("Platform","newspack"),path:"/",render:v};let i=[{label:B("Donations","newspack"),path:"/donations",render:_,isHidden:a===d},{label:B("Stripe Settings","newspack"),path:"/stripe-setup",activeTabPaths:["/stripe-setup"],render:T,isHidden:a!==u},{label:B("Emails","newspack"),path:"/emails",render:A,isHidden:a!==u},{label:B("Salesforce","newspack"),path:"/salesforce",render:R,isHidden:a!==u},{label:B("News Revenue Hub Settings","newspack"),path:"/settings",render:f,isHidden:"nrh"!==a},o];return a!==u||t||(i=[o]),(0,l.createElement)(s.en,{headerText:B("Reader Revenue","newspack"),subHeaderText:B("Generate revenue from your customers","newspack"),sections:i,apiSlug:m,renderAboveSections:()=>r()(n?.errors).map(((e,t)=>(0,l.createElement)(s.qX,{key:t,isError:!0,noticeText:e}))),requiredPlugins:["newspack-blocks"]})})),document.getElementById("newspack-reader-revenue-wizard"))},9196:e=>{e.exports=window.React},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=t,e=[],a.O=(t,n,r,l)=>{if(!n){var o=1/0;for(p=0;p<e.length;p++){for(var[n,r,l]=e[p],s=!0,i=0;i<n.length;i++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,l<o&&(o=l));if(s){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=359,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={359:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[o,s,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var p=i(a)}for(t&&t(n);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[o[c]]=0;return a.O(p)},n=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[351],(()=>a(5666)));var r=a.O(void 0,[351],(()=>a(1899)));r=a.O(r);var l=window;for(var o in r)l[o]=r[o];r.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();