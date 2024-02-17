(()=>{"use strict";var e,t={3511:(e,t,a)=>{a.r(t);var n=a(7462),s=a(4942),r=(a(5674),a(9307)),i=a(5736),l=a(264),c=a(9674),o=a(2628),p=a.n(o),d=a(6604),m=a.n(d),u=a(9601),w=a.n(u),h=a(1609),g=a.n(h),k=a(5892),_=a.n(k),f=a(6989),v=a.n(f),E=a(5609);const b=i.__,y=({className:e,onUpdate:t,initialProvider:a,newslettersConfig:s,isOnboarding:c=!0,authUrl:o=!1,setInitialProvider:d=(()=>{}),setAuthUrl:u=(()=>{}),setLockedLists:h=(()=>{})})=>{const[k,f]=(0,r.useState)(!1),[y,x]=(0,r.useState)(!1),[S,C]=l.PT.useObjectState({});(0,r.useEffect)((()=>{const e=s?.newspack_newsletters_service_provider;h(!(!a||e===a)),!a&&e&&d(e)}),[s?.newspack_newsletters_service_provider]),(0,r.useEffect)((()=>{P(s?.newspack_newsletters_service_provider)}),[s?.newspack_newsletters_service_provider]);const P=e=>{u(!1),e&&"constant_contact"===e&&(f(!0),v()({path:`/newspack-newsletters/v1/${e}/verify_token`}).then((e=>{!e.valid&&e.auth_url?u(e.auth_url):u(!1)})).catch((()=>{u(!1)})).finally((()=>{f(!1)})))},T=e=>{C(e),t&&t(m()(e.settings,w()("value")))},z=()=>{x(!1),v()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then(T).catch(x)},A=()=>{o&&(window.open(o,"esp_oauth","width=500,height=600").opener={verify:_()((()=>{window.location.reload()}))})},M=async()=>{x(!1),f(!0),v()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters",method:"POST",data:s}).finally((()=>{d(s?.newspack_newsletters_service_provider),P(s?.newspack_newsletters_service_provider),h(!1),f(!1)}))};(0,r.useEffect)(z,[]);const L=e=>({disabled:k,value:S.settings[e]?.value||"",checked:Boolean(S.settings[e]?.value),label:S.settings[e]?.description,placeholder:S.settings[e]?.placeholder,options:S.settings[e]?.options?.map((e=>({value:e.value,label:e.name})))||null,onChange:t=>T({settings:{[e]:{value:t}}})});return!y&&g()(S)?(0,r.createElement)("div",{className:"flex justify-around mt4"},(0,r.createElement)(l.Pi,null)):(0,r.createElement)("div",{className:e},!1===S.configured&&(0,r.createElement)(l.xf,{plugins:["newspack-newsletters"],withoutFooterButton:!0,onStatus:({complete:e})=>e&&z()}),!0===S.configured&&(()=>{const e=L("newspack_newsletters_service_provider");return(0,r.createElement)(l.fM,{isMedium:!0,title:b("Email Service Provider","newspack"),description:b("Connect an email service provider (ESP) to author and send newsletters.","newspack"),notification:y?y?.message||b("Something went wrong.","newspack"):null,notificationLevel:"error",hasGreyHeader:!0,actionContent:(0,r.createElement)(l.zx,{disabled:k,variant:"primary",onClick:M},b("Save Settings","newspack")),disabled:k},(0,r.createElement)(l.rj,{gutter:16,columns:1},!1!==o&&(0,r.createElement)(l.Zb,{isSmall:!0},(0,r.createElement)("h3",null,b("Authorize Application","newspack")),(0,r.createElement)("p",null,(0,i.sprintf)(b("Authorize %s to connect to Newspack.","newspack-newsletters"),(()=>{const e=S.settings.newspack_newsletters_service_provider,t=e?.value;return e?.options?.find((e=>e.value===t))?.name})())),(0,r.createElement)(l.zx,{isSecondary:!0,onClick:A},b("Authorize","newspack"))),p()(S.settings).filter((t=>!t.provider||t.provider===e.value)).map((e=>{if(c&&!e.onboarding)return null;switch(e.type){case"select":return(0,r.createElement)(l.Yw,(0,n.Z)({key:e.key},L(e.key)));case"checkbox":return(0,r.createElement)(E.CheckboxControl,(0,n.Z)({key:e.key},L(e.key)));default:return(0,r.createElement)(l.rj,{columns:1,gutter:8,key:e.key},(0,r.createElement)(l.w4,L(e.key)),e.help&&e.helpURL&&(0,r.createElement)("p",null,(0,r.createElement)(E.ExternalLink,{href:e.helpURL},e.help)))}}))))})())},x=({lockedLists:e,onUpdate:t,initialProvider:a})=>{const[n,s]=(0,r.useState)(!1),[i,c]=(0,r.useState)(!1),[o,p]=(0,r.useState)([]),d=e=>{p(e),"function"==typeof t&&t(e)},m=(e,t)=>a=>{const n=[...o];n[e][t]=a,d(n)};return(0,r.useEffect)((()=>{s(!1),c(!0),v()({path:"/newspack-newsletters/v1/lists"}).then(d).catch(s).finally((()=>c(!1)))}),[a]),i||o?.length||n?!i||o?.length||n?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.fM,{isMedium:!0,title:b("Subscription Lists","newspack"),description:b("Manage the lists available to readers for subscription.","newspack"),notification:n?n?.message||b("Something went wrong.","newspack"):e?b("Please save your ESP settings before changing your subscription lists.","newspack"):null,notificationLevel:n?"error":"warning",hasGreyHeader:!0,actionContent:(0,r.createElement)(r.Fragment,null,newspack_engagement_wizard.new_subscription_lists_url&&(0,r.createElement)(l.zx,{variant:"secondary",disabled:i||e,href:newspack_engagement_wizard.new_subscription_lists_url},b("Add New","newspack")),(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>{s(!1),c(!0),v()({path:"/newspack-newsletters/v1/lists",method:"post",data:{lists:o}}).then(d).catch(s).finally((()=>c(!1)))},disabled:i||e},b("Save Subscription Lists","newspack"))),disabled:i||e},!e&&o.map(((e,t)=>(0,r.createElement)(l.fM,{key:e.id,isSmall:!0,simple:!0,hasWhiteHeader:!0,title:e.name,description:e?.type_label?e.type_label:null,disabled:i,toggleOnChange:m(t,"active"),toggleChecked:e.active,className:e?.id&&e.id.startsWith("group")?"newspack-newsletters-group-list-item":"",actionText:e?.edit_link?(0,r.createElement)(E.ExternalLink,{href:e.edit_link},b("Edit","newspack_newsletters")):null},e.active&&"local"!==e?.type&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.w4,{label:b("List title","newspack"),value:e.title,disabled:i||"local"===e?.type,onChange:m(t,"title")}),(0,r.createElement)(E.TextareaControl,{label:b("List description","newspack"),value:e.description,disabled:i||"local"===e?.type,onChange:m(t,"description")}))))))):(0,r.createElement)("div",{className:"flex justify-around mt4"},(0,r.createElement)(l.Pi,null)):null},S=()=>{const[{newslettersConfig:e},t]=l.PT.useObjectState({}),[a,n]=(0,r.useState)(""),[s,i]=(0,r.useState)(!1),[c,o]=(0,r.useState)(!1);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(y,{isOnboarding:!1,onUpdate:e=>t({newslettersConfig:e}),authUrl:c,setAuthUrl:o,newslettersConfig:e,setLockedLists:i,initialProvider:a,setInitialProvider:n}),(0,r.createElement)(x,{lockedLists:s,initialProvider:a}),"mailchimp"===e?.newspack_newsletters_service_provider&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("hr",null),(0,r.createElement)(l.M$,{title:b("WooCommerce integration","newspack")}),(0,r.createElement)(l.xf,{plugins:["mailchimp-for-woocommerce"],withoutFooterButton:!0})))},C=(0,l.a4)((()=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(S,null))));var P=a(4350);const T=i.__;function z({config:e,getSharedProps:t,inFlight:a,prerequisite:s,saveConfig:c}){const{href:o}=s;return(0,r.createElement)(l.fM,{className:"newspack-ras-wizard__prerequisite",isMedium:!0,expandable:!0,collapse:s.active,title:s.label,description:(0,i.sprintf)(T("Status: %s","newspack"),s.active?T("Ready","newspack"):T("Pending","newspack")),checkbox:s.active?"checked":"unchecked",notificationLevel:"info",notification:s.active&&s.fields&&s.warning&&Object.keys(s.fields).filter((t=>""===e[t])).length?s.warning:null},(0,r.createElement)(r.Fragment,null,s.description&&(0,r.createElement)("p",null,s.description,s.help_url&&(0,r.createElement)(r.Fragment,null," ",(0,r.createElement)(E.ExternalLink,{href:s.help_url},T("Learn more","newspack")))),s.fields&&(0,r.createElement)(l.rj,{columns:2,gutter:16},(0,r.createElement)("div",null,Object.keys(s.fields).map((e=>(0,r.createElement)(l.w4,(0,n.Z)({key:e,label:s.fields[e].label,help:s.fields[e].description},t(e,"text"))))),(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>{const t={};Object.keys(s.fields).forEach((a=>{t[a]=e[a]})),c(t)},disabled:a},a?T("Saving…","newspack"):(0,i.sprintf)(T("%s settings","newspack"),s.active?T("Update","newspack"):T("Save","newspack"))))),o&&s.action_text&&(0,r.createElement)(l.rj,{columns:2,gutter:16},(0,r.createElement)("div",null,(!s.hasOwnProperty("action_enabled")||s.action_enabled)&&(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>{s.instructions&&window.localStorage.setItem(P.r,JSON.stringify({message:(0,i.sprintf)(T("%1$s%2$sReturn to the Reader Activation page to complete the settings and activate%3$s.","newspack"),s.instructions+" ",window.newspack_engagement_wizard?.reader_activation_url?`<a href="${window.newspack_engagement_wizard.reader_activation_url}">`:"",window.newspack_engagement_wizard?.reader_activation_url?"</a>":""),url:o})),window.location.href=o}},(s.active?T("Update ","newspack"):s.fields?T("Save ","newspack"):T("Configure ","newspack"))+s.action_text),s.hasOwnProperty("action_enabled")&&!s.action_enabled&&(0,r.createElement)(l.zx,{isSecondary:!0,disabled:!0},s.disabled_text||s.action_text)))))}const A=i.__;function M({value:e,onChange:t}){const[a,n]=(0,r.useState)(!1),[s,i]=(0,r.useState)([]),[c,o]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{o(!1),n(!0),v()({path:"/newspack-newsletters/v1/lists"}).then(i).catch(o).finally((()=>n(!1)))}),[]),(0,r.createElement)(r.Fragment,null,c&&(0,r.createElement)(l.qX,{noticeText:c?.message||A("Something went wrong.","newspack"),isError:!0}),(0,r.createElement)(l.M$,{title:A("ActiveCampaign","newspack"),description:A("Settings for the ActiveCampaign integration.","newspack")}),(0,r.createElement)(l.Yw,{label:A("Master List","newspack"),help:A("Choose a list to which all registered readers will be added.","newspack"),disabled:a,value:e.masterList,onChange:("masterList",e=>t&&t("masterList",e)),options:[{value:"",label:A("None","newspack")},...s.map((e=>({label:e.name,value:e.id})))]}))}const L=i.__;function F({value:e,onChange:t}){const[a,n]=(0,r.useState)(!1),[s,i]=(0,r.useState)([]),[c,o]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{o(!1),n(!0),v()({path:"/newspack-newsletters/v1/lists"}).then((e=>i(e.filter((e=>"Mailchimp Audience"===e.type_label))))).catch(o).finally((()=>n(!1)))}),[]),(0,r.createElement)(r.Fragment,null,c&&(0,r.createElement)(l.qX,{noticeText:c?.message||L("Something went wrong.","newspack"),isError:!0}),(0,r.createElement)(l.M$,{title:L("Mailchimp","newspack"),description:L("Settings for the Mailchimp integration.","newspack")}),(0,r.createElement)(l.Yw,{label:L("Audience ID","newspack"),help:L("Choose an audience to receive reader activity data.","newspack"),disabled:a,value:e.audienceId,onChange:("audienceId",e=>t&&t("audienceId",e)),options:[{value:"",label:L("None","newspack")},...s.map((e=>({label:e.name,value:e.id})))]}))}var N=a(5661),O=a(1984),j=a(6015),R=a(3904),I=a(3541),$=a(4129);const Z=i.__;function q({lists:e,selected:t=[],onChange:a=(()=>{})}){if(!Array.isArray(e)&&e.errors)return(0,r.createElement)(E.Notice,{status:"error",isDismissible:!1},Object.values(e.errors).join(", "));const n=()=>e.filter((e=>e.active&&!t.find((({id:t})=>t===e.id))));return(0,r.createElement)("div",{className:"newspack__newsletter-list-control"},(0,r.createElement)("div",{className:"newspack__newsletter-list-control__selected"},t.map((n=>{const s=(i=n.id,e.find((e=>e.id===i)));var i;return s?(0,r.createElement)(I.Z,{key:`selected-${n.id}`,title:s.name,description:()=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)("input",{type:"checkbox",checked:n.checked,onChange:()=>{const e=t.findIndex((({id:e})=>e===n.id)),s=[...t];s[e].checked=!s[e].checked,a(s)}}),Z("Checked by default","newspack")),isSmall:!0,actionText:(0,r.createElement)(r.Fragment,null,(0,r.createElement)($.Z,{onClick:()=>a(t.filter((({id:e})=>e!==n.id))),label:Z("Remove","newspack"),icon:N.Z}))},t.length>1&&(0,r.createElement)("span",{className:"newspack__newsletter-list-control__sort-handle"},(0,r.createElement)("button",{onClick:()=>{const e=t.findIndex((({id:e})=>e===n.id));if(0===e)return;const s=[...t];s.splice(e,1),s.splice(e-1,0,n),a(s)},className:0===t.findIndex((({id:e})=>e===n.id))?"disabled":""},(0,r.createElement)(O.Z,{icon:j.Z})),(0,r.createElement)("button",{onClick:()=>{const e=t.findIndex((({id:e})=>e===n.id)),s=[...t];s.splice(e,1),s.splice(e+1,0,n),a(s)},className:t.findIndex((({id:e})=>e===n.id))===t.length-1?"disabled":""},(0,r.createElement)(O.Z,{icon:R.Z})))):null}))),n().length>0&&(0,r.createElement)("p",{className:"newspack__newsletter-list-control__lists"},t.length>0?(0,r.createElement)("strong",null,Z("Add more lists:","newspack")):(0,r.createElement)("strong",null,Z("Select lists:","newspack"))," ",n().map((e=>(0,r.createElement)($.Z,{key:e.id,variant:"secondary",onClick:()=>a([...t,{id:e.id,checked:!0}])},e.name)))))}const U=i.__,B=(0,l.a4)((({wizardApiFetch:e})=>{const[t,a]=(0,r.useState)(!1),[s,c]=(0,r.useState)({}),[o,p]=(0,r.useState)({}),[d,m]=(0,r.useState)(!1),[u,w]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),[k,_]=(0,r.useState)(!1),[f,b]=(0,r.useState)(null),[y,x]=(0,r.useState)([]),[S,C]=(0,r.useState)(!1),T=(e,t)=>{c({...s,[e]:t})},A=()=>{m(!1),a(!0),v()({path:"/newspack/v1/wizard/newspack-engagement-wizard/reader-activation"}).then((({config:e,prerequisites_status:t,memberships:a})=>{b(t),c(e),p(a)})).catch(m).finally((()=>a(!1)))},L=t=>{m(!1),a(!0),e({path:"/newspack/v1/wizard/newspack-engagement-wizard/reader-activation",method:"post",quiet:!0,data:t}).then((({config:e,prerequisites_status:t,memberships:a})=>{b(t),c(e),p(a)})).catch(m).finally((()=>a(!1)))};(0,r.useEffect)((()=>{window.scrollTo(0,0),A(),window.localStorage.removeItem(P.r)}),[]),(0,r.useEffect)((()=>{v()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then((e=>{_("mailchimp"===e?.settings?.newspack_newsletters_service_provider?.value),g("active_campaign"===e?.settings?.newspack_newsletters_service_provider?.value)}))}),[]),(0,r.useEffect)((()=>{const e=!y.length&&f&&Object.keys(f).every((e=>f[e]?.active));w(e),f&&x(Object.keys(f).reduce(((e,t)=>{const a=f[t];if(a.plugins)for(const t in a.plugins)a.plugins[t]||e.push(t);return e}),[]))}),[f]);const N=(e,a="checkbox")=>{const n={onChange:t=>T(e,t)};switch("enabled"!==e&&(n.disabled=t),a){case"checkbox":n.checked=Boolean(s[e]);break;case"text":n.value=s[e]||""}return n},O=Object.values(s.emails||{});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.M$,{title:U("Reader Activation","newspack"),description:()=>(0,r.createElement)(r.Fragment,null,U("Newspack’s Reader Activation system is a set of features that aim to increase reader loyalty, promote engagement, and drive revenue. ","newspack"),(0,r.createElement)(E.ExternalLink,{href:"https://help.newspack.com/engagement/reader-activation-system"},U("Learn more","newspack-plugin")))}),d&&(0,r.createElement)(l.qX,{noticeText:d?.message||U("Something went wrong.","newspack"),isError:!0}),0<y.length&&(0,r.createElement)(l.qX,{noticeText:U("The following plugins are required.","newspack"),isWarning:!0}),0===y.length&&f&&!u&&(0,r.createElement)(l.qX,{noticeText:U("Complete these settings to enable Reader Activation.","newspack"),isWarning:!0}),f&&u&&s.enabled&&(0,r.createElement)(l.qX,{noticeText:U("Reader Activation is enabled.","newspack"),isSuccess:!0}),!f&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.Pi,{isLeft:!0}),U("Retrieving status…","newspack")),0<y.length&&f&&(0,r.createElement)(l.xf,{plugins:y,withoutFooterButton:!0,onStatus:({complete:e})=>e&&A()}),!y.length&&f&&Object.keys(f).map((e=>(0,r.createElement)(z,{key:e,config:s,getSharedProps:N,inFlight:t,prerequisite:f[e],fetchConfig:A,saveConfig:L}))),s.enabled&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("hr",null),(0,r.createElement)(l.zx,{variant:"link",onClick:()=>C(!S)},(0,i.sprintf)(U("%s Advanced Settings","newspack"),U(S?"Hide":"Show","newspack")))),S&&(0,r.createElement)(l.Zb,{noBorder:!0},newspack_engagement_wizard.has_memberships&&o?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.M$,{title:U("Memberships Integration","newspack"),description:U("Improve the reader experience on content gating.","newspack")}),(0,r.createElement)(l.fM,{title:U("Content Gate","newspack"),titleLink:o.edit_gate_url,href:o.edit_gate_url,description:(()=>{let e=U("Configure the gate rendered on content with restricted access.","newspack");return"publish"===o?.gate_status?e+=" "+U("The gate is currently published.","newspack"):"draft"!==o?.gate_status&&"trash"!==o?.gate_status||(e+=" "+U("The gate is currently a draft.","newspack")),e})(),actionText:U("Configure","newspack")}),o?.plans&&1<o.plans.length&&(0,r.createElement)(l.fM,{title:U("Require membership in all plans","newspack"),description:U("When enabled, readers must belong to all membership plans that apply to a restricted content item before they are granted access. Otherwise, they will be able to unlock access to that item with membership in any single plan that applies to it.","newspack"),toggleOnChange:e=>p({...o,require_all_plans:e}),toggleChecked:o.require_all_plans}),(0,r.createElement)("hr",null)):null,O?.length>0&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.M$,{title:U("Transactional Email Content","newspack"),description:U("Customize the content of transactional emails.","newspack")}),O.map((e=>(0,r.createElement)(l.fM,{key:e.post_id,title:e.label,titleLink:e.edit_link,href:e.edit_link,description:e.description,actionText:U("Edit","newspack"),isSmall:!0}))),(0,r.createElement)("hr",null)),(0,r.createElement)(l.M$,{title:U("Newsletter Subscription Lists","newspack")}),(0,r.createElement)(l.fM,{title:U("Custom newsletter lists on registration","newspack"),description:U("Choose which of the Newspack Newsletters's subscription lists should be available upon registration.","newspack"),toggleChecked:s.use_custom_lists,toggleOnChange:e=>T("use_custom_lists",e)}),s.use_custom_lists&&(0,r.createElement)(q,{lists:newspack_engagement_wizard.available_newsletter_lists,selected:s.newsletter_lists,onChange:e=>T("newsletter_lists",e)}),(0,r.createElement)("hr",null),(0,r.createElement)(l.M$,{title:U("Email Service Provider (ESP) Advanced Settings","newspack"),description:U("Settings for Newspack Newsletters integration.","newspack")}),(0,r.createElement)(l.w4,(0,n.Z)({label:U("Newsletter subscription text on registration","newspack"),help:U("The text to display while subscribing to newsletters from the sign-in modal.","newspack")},N("newsletters_label","text"))),s.sync_esp&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.w4,(0,n.Z)({label:U("Metadata field prefix","newspack"),help:U("A string to prefix metadata fields attached to each contact synced to the ESP. Required to ensure that metadata field names are unique. Default: NP_","newspack")},N("metadata_prefix","text"))),k&&(0,r.createElement)(F,{value:{audienceId:s.mailchimp_audience_id},onChange:(e,t)=>{"audienceId"===e&&T("mailchimp_audience_id",t)}}),h&&(0,r.createElement)(M,{value:{masterList:s.active_campaign_master_list},onChange:(e,t)=>{"masterList"===e&&T("active_campaign_master_list",t)}})),(0,r.createElement)("div",{className:"newspack-buttons-card"},(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>{L({newsletters_label:s.newsletters_label,metadata_prefix:s.metadata_prefix,mailchimp_audience_id:s.mailchimp_audience_id,active_campaign_master_list:s.active_campaign_master_list,memberships_require_all_plans:o.require_all_plans,use_custom_lists:s.use_custom_lists,newsletter_lists:s.newsletter_lists})},disabled:t},U("Save advanced settings","newspack")))))}));var H=a(129);const D=i.__;function X({inFlight:e,prompt:t,setInFlight:a,setPrompts:n}){const[s,c]=(0,r.useState)({}),[o,p]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),[u,w]=(0,r.useState)(!1),[h,g]=(0,r.useState)(null),[k,_]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(Array.isArray(t?.user_input_fields)){const e={...s};t.user_input_fields.forEach((t=>{e[t.name]=t.value||t.default})),c(e)}t.featured_image_id&&(a(!0),v()({path:`/wp/v2/media/${t.featured_image_id}`}).then((e=>{(e?.source_url||e?.url)&&g({url:e.source_url||e.url})})).catch(p).finally((()=>{a(!1)})))}),[t]),(0,r.useEffect)((()=>{setTimeout((()=>w(!1)),5e3)}),[u]);const f=(0,r.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},(0,r.createElement)(E.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5001 13C5.17092 13.3354 5.17078 13.3357 5.17066 13.3359L5.17346 13.3305C5.1767 13.3242 5.18233 13.3135 5.19036 13.2985C5.20643 13.2686 5.23209 13.2218 5.26744 13.1608C5.33819 13.0385 5.44741 12.8592 5.59589 12.6419C5.89361 12.2062 6.34485 11.624 6.95484 11.0431C8.17357 9.88241 9.99767 8.75 12.5001 8.75C15.0025 8.75 16.8266 9.88241 18.0454 11.0431C18.6554 11.624 19.1066 12.2062 19.4043 12.6419C19.5528 12.8592 19.662 13.0385 19.7328 13.1608C19.7681 13.2218 19.7938 13.2686 19.8098 13.2985C19.8179 13.3135 19.8235 13.3242 19.8267 13.3305L19.8295 13.3359C19.8294 13.3357 19.8293 13.3354 20.5001 13C21.1709 12.6646 21.1708 12.6643 21.1706 12.664L21.1702 12.6632L21.1693 12.6614L21.1667 12.6563L21.1588 12.6408C21.1522 12.6282 21.1431 12.6108 21.1315 12.5892C21.1083 12.5459 21.0749 12.4852 21.0311 12.4096C20.9437 12.2584 20.8146 12.0471 20.6428 11.7956C20.2999 11.2938 19.7823 10.626 19.0798 9.9569C17.6736 8.61759 15.4977 7.25 12.5001 7.25C9.50252 7.25 7.32663 8.61759 5.92036 9.9569C5.21785 10.626 4.70033 11.2938 4.35743 11.7956C4.1856 12.0471 4.05654 12.2584 3.96909 12.4096C3.92533 12.4852 3.89191 12.5459 3.86867 12.5892C3.85705 12.6108 3.84797 12.6282 3.84141 12.6408L3.83346 12.6563L3.8309 12.6614L3.82997 12.6632L3.82959 12.664C3.82943 12.6643 3.82928 12.6646 4.5001 13ZM12.5001 16C14.4331 16 16.0001 14.433 16.0001 12.5C16.0001 10.567 14.4331 9 12.5001 9C10.5671 9 9.0001 10.567 9.0001 12.5C9.0001 14.433 10.5671 16 12.5001 16Z",fill:e?"#828282":"#3366FF"})),b=l.PT.usePrompt(d,D("You have unsaved changes. Discard changes?","newspack")),y=t.help_info||null;return(0,r.createElement)(l.fM,{isMedium:!0,expandable:!0,collapse:t.ready&&!k,title:t.title,description:(0,i.sprintf)(D("Status: %s","newspack"),d?D("Unsaved changes","newspack"):t.ready?D("Ready","newspack"):D("Pending","newspack")),checkbox:t.ready&&!d?"checked":"unchecked"},(0,r.createElement)(l.rj,{columns:2,gutter:64,className:"newspack-ras-campaign__grid"},(0,r.createElement)("div",{className:"newspack-ras-campaign__fields"},t.user_input_fields.map((t=>(0,r.createElement)(r.Fragment,{key:t.name},"array"===t.type&&Array.isArray(t.options)&&(0,r.createElement)(E.BaseControl,{id:`newspack-engagement-wizard__${t.name}`,label:t.label},t.options.map((a=>(0,r.createElement)(E.BaseControl,{key:a.id,id:`newspack-engagement-wizard__${a.id}`,className:"newspack-checkbox-control",help:a.description},(0,r.createElement)(E.CheckboxControl,{disabled:e,label:a.label,value:a.id,checked:s[t.name]?.indexOf(a.id)>-1,onChange:e=>{const n={...s};!e&&n[t.name].indexOf(a.id)>-1&&(n[t.name].value=n[t.name].splice(n[t.name].indexOf(a.id),1)),e&&-1===n[t.name].indexOf(a.id)&&n[t.name].push(a.id),c(n),m(!0)}}))))),"string"===t.type&&t.max_length&&150<t.max_length&&(0,r.createElement)(E.TextareaControl,{className:"newspack-textarea-control",label:t.label,disabled:e,help:`${s[t.name]?.length||0} / ${t.max_length}`,onChange:e=>{if(e.length>t.max_length)return;const a={...s};a[t.name]=e,c(a),m(!0)},placeholder:t.default,rows:10,value:s[t.name]||""}),"string"===t.type&&t.max_length&&150>=t.max_length&&(0,r.createElement)(l.w4,{label:t.label,disabled:e,help:`${s[t.name]?.length||0} / ${t.max_length}`,onChange:e=>{if(e.length>t.max_length)return;const a={...s};a[t.name]=e,c(a),m(!0)},placeholder:t.default,value:s[t.name]||""}),"int"===t.type&&"featured_image_id"===t.name&&(0,r.createElement)(E.BaseControl,{id:`newspack-engagement-wizard__${t.name}`,label:t.label},(0,r.createElement)(l.Ur,{buttonLabel:D("Select file","newspack"),disabled:e,image:h,onChange:e=>{const a={...s};a[t.name]=e?.id||0,a[t.name],s[t.name],c(a),m(!0),g(e?.url?e:null)}}))))),o&&(0,r.createElement)(l.qX,{noticeText:o?.message||D("Something went wrong.","newspack"),isError:!0}),u&&(0,r.createElement)(l.qX,{noticeText:u,isSuccess:!0}),(0,r.createElement)("div",{className:"newspack-buttons-card"},(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>{var e,r;_(!1),e=t.slug,r=s,new Promise(((t,s)=>{b&&b(),p(!1),w(!1),a(!0),v()({path:"/newspack-popups/v1/reader-activation/campaign",method:"post",data:{slug:e,data:r}}).then((e=>{n(e),w(D("Prompt saved.","newspack")),m(!1),t()})).catch((e=>{p(e),s(e)})).finally((()=>{a(!1)}))}))},disabled:e},e?D("Saving…","newspack"):(0,i.sprintf)(D("%s prompt settings","newspack"),t.ready?D("Update","newspack"):D("Save","newspack"))),(0,r.createElement)(l.BA,{url:(({options:e,slug:t})=>{const{placement:a,trigger_type:n}=e,r=window.newspack_engagement_wizard.preview_query_keys,i={preset:t,values:s};Object.keys(e).forEach((t=>{r.hasOwnProperty(t)&&(i[r[t]]=e[t])}));let l="/";return"archives"===a&&window.newspack_engagement_wizard?.preview_archive?l=window.newspack_engagement_wizard.preview_archive:("inline"===a||"scroll"===n)&&window&&window.newspack_engagement_wizard?.preview_post&&(l=window.newspack_engagement_wizard?.preview_post),`${l}?${(0,H.stringify)({...i})}`})(t),renderButton:({showPreview:t})=>(0,r.createElement)(l.zx,{disabled:e,icon:f,isSecondary:!0,onClick:async()=>t()},D("Preview prompt","newspack"))}))),y&&(0,r.createElement)("div",{className:"newspack-ras-campaign__help"},y.screenshot&&(0,r.createElement)("img",{src:y.screenshot,alt:t.title}),y.description&&(0,r.createElement)("p",null,(0,r.createElement)("span",{dangerouslySetInnerHTML:{__html:y.description}})," ",y.url&&(0,r.createElement)(E.ExternalLink,{href:y.url},D("Learn more","newspack"))),y.recommendations&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("h4",{className:"newspack-ras-campaign__recommendation-heading"},D("We recommend","newspack")),(0,r.createElement)("ul",null,y.recommendations.map(((e,t)=>(0,r.createElement)("li",{key:t},(0,r.createElement)("span",{dangerouslySetInnerHTML:{__html:e}})))))))))}const Y=i.__,W=(0,l.a4)((()=>{const[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(!1),[s,i]=(0,r.useState)(null),[c,o]=(0,r.useState)(!1),{reader_activation_url:p}=newspack_engagement_wizard;return(0,r.useEffect)((()=>{window.scrollTo(0,0),n(!1),t(!0),v()({path:"/newspack-popups/v1/reader-activation/campaign"}).then((e=>{i(e)})).catch(n).finally((()=>t(!1)))}),[]),(0,r.useEffect)((()=>{Array.isArray(s)&&0<s.length&&o(s.every((e=>e.ready)))}),[s]),(0,r.createElement)("div",{className:"newspack-ras-campaign__prompt-wizard"},(0,r.createElement)(l.M$,{title:Y("Set Up Reader Activation Campaign","newspack"),description:Y("Preview and customize the prompts, or use our suggested defaults.","newspack")}),a&&(0,r.createElement)(l.qX,{noticeText:a?.message||Y("Something went wrong.","newspack"),isError:!0}),!s&&!a&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.Pi,{isLeft:!0}),Y("Retrieving prompts…","newspack")),s&&s.map((a=>(0,r.createElement)(X,{key:a.slug,prompt:a,inFlight:e,setInFlight:t,setPrompts:i}))),(0,r.createElement)("div",{className:"newspack-buttons-card"},(0,r.createElement)(l.zx,{isPrimary:!0,disabled:e||!c,href:`${p}/complete`},Y("Continue","newspack")),(0,r.createElement)(l.zx,{isSecondary:!0,disabled:e,href:p},Y("Back","newspack"))))})),G=i.__,K=[G("Your <strong>current segments and prompts</strong> will be deactivated and archived.","newspack"),G("<strong>Reader registration</strong> will be activated to enable better targeting for driving engagement and conversations.","newspack"),G("The <strong>Reader Activation campaign</strong> will be activated with default segments and settings.","newspack")],V=[G("Setting up new segments…","newspack"),G("Activating reader registration…","newspack"),G("Activating Reader Activation Campaign…","newspack")],J=(0,l.a4)((()=>{const[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(!1),[s,i]=(0,r.useState)(null),[c,o]=(0,r.useState)(!1),[p,d]=(0,r.useState)(!1),m=(0,r.useRef)(),{reader_activation_url:u}=newspack_engagement_wizard;return(0,r.useEffect)((()=>{m.current&&clearTimeout(m.current),a&&t(!1),!a&&e&&0<=s&&s<V.length&&(o(V[s]),m.current=setTimeout((()=>{i((e=>e+1))}),(2e3,1e3+1e3*Math.random()))),s===V.length&&p&&(i(V.length+1),o(G("Done!","newspack")),setTimeout((()=>{t(!1),window.location=u}),3e3))}),[p,s]),(0,r.createElement)("div",{className:"newspack-ras-campaign__completed"},(0,r.createElement)(l.M$,{title:G("Enable Reader Activation","newspack"),description:()=>(0,r.createElement)(r.Fragment,null,G("An easy way to let your readers register for your site, sign up for newsletters, or become donors and paid members. ","newspack"),(0,r.createElement)(E.ExternalLink,{href:"https://help.newspack.com"},G("Learn more","newspack-plugin")))}),e&&(0,r.createElement)(l.Zb,{className:"newspack-ras-campaign__completed-card"},(0,r.createElement)(l.ko,{completed:s,displayFraction:!1,total:V.length+1,label:c})),!e&&(0,r.createElement)(l.Zb,{className:"newspack-ras-campaign__completed-card"},(0,r.createElement)("h2",null,G("You're all set to enable Reader Activation!","newspack")),(0,r.createElement)("p",null,G("This is what will happen next:","newspack")),(0,r.createElement)(l.Zb,{noBorder:!0,className:"justify-center"},(0,r.createElement)(l.YH,{stepsListItems:K,narrowList:!0})),a&&(0,r.createElement)(l.qX,{noticeText:a?.message||G("Something went wrong.","newspack"),isError:!0}),(0,r.createElement)(l.Zb,{buttonsCard:!0,noBorder:!0,className:"justify-center"},(0,r.createElement)(l.zx,{isPrimary:!0,onClick:()=>(async()=>{n(!1),t(!0),i(0);try{d(await v()({path:"/newspack/v1/wizard/newspack-engagement-wizard/reader-activation/activate",method:"post"}))}catch(e){n(e)}})()},G("Enable Reader Activation","newspack ")))),(0,r.createElement)("div",{className:"newspack-buttons-card"},(0,r.createElement)(l.zx,{isSecondary:!0,disabled:e,href:`${u}/campaign`},G("Back","newspack"))))}));function Q({title:e,description:t,pixelKey:a,fieldDescription:n,fieldHelp:s,pixelValueType:i}){const c=`/newspack/v1/wizard/newspack-engagement-wizard/social/${a}_pixel`,[o,p]=(0,r.useState)(!1),[d,m]=(0,r.useState)(null),[u,w]=(0,r.useState)(null);if((0,r.useEffect)((()=>{(async()=>{p(!0);try{const e=await v()({path:c});w(e)}catch(e){w(null)}p(!1)})()}),[]),!u)return null;const h=[{key:"pixel_id",type:i,description:n,help:s,value:u.pixel_id}];return(0,r.createElement)(l.d5.Section,{error:d,disabled:o,sectionKey:"pixel-settings",title:e,description:t,active:u.active,fields:h,onUpdate:async e=>{m(null),p(!0);try{const t=await v()({path:c,method:"POST",data:{...u,...e}});w(t)}catch(e){m(e)}p(!1)},onChange:(e,t)=>{w({...u,[e]:t})}})}const ee=i.__,te=()=>(0,r.createElement)(Q,{title:ee("Meta Pixel","newspack"),pixelKey:"meta",pixelValueType:"integer",description:ee("Add the Meta pixel (formely known as Facebook pixel) to your site.","newspack"),fieldDescription:ee("Pixel ID","newspack"),fieldHelp:(0,r.createInterpolateElement)(ee("The Meta Pixel ID. You only need to add the number, not the full code. Example: 123456789123456789. You can get this information <linkToFb>here</linkToFb>.","newspack"),{linkToFb:(0,r.createElement)("a",{href:"https://www.facebook.com/ads/manager/pixel/facebook_pixel",target:"_blank",rel:"noopener noreferrer"})})}),ae=i.__,ne=()=>(0,r.createElement)(Q,{title:ae("Twitter Pixel","newspack"),pixelKey:"twitter",description:ae("Add the Twitter pixel to your site.","newspack"),pixelValueType:"text",fieldDescription:ae("Pixel ID","newspack"),fieldHelp:(0,r.createInterpolateElement)(ae("The Twitter Pixel ID. You only need to add the ID, not the full code. Example: ny3ad. You can read more about it <link>here</link>.","newspack"),{link:(0,r.createElement)("a",{href:"https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html",target:"_blank",rel:"noopener noreferrer"})})}),se=i.__;class re extends r.Component{render(){return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.fM,{title:se("Publicize"),badge:"Jetpack",description:se("Publicize makes it easy to share your site’s posts on several social media networks automatically when you publish a new post."),actionText:se("Configure"),handoff:"jetpack",editLink:"admin.php?page=jetpack#/sharing"}),(0,r.createElement)(te,null),(0,r.createElement)(ne,null))}}const ie=(0,l.a4)(re),le=i.__;class ce extends r.Component{render(){const{onChange:e,relatedPostsEnabled:t,relatedPostsError:a,relatedPostsMaxAge:n}=this.props;return(0,r.createElement)(r.Fragment,null,a&&(0,r.createElement)(l.qX,{noticeText:a,isError:!0}),(0,r.createElement)(l.fM,{title:le("Related Posts","newspack"),badge:"Jetpack",description:le("Automatically add related content at the bottom of each post.","newspack"),actionText:le("Configure"),handoff:"jetpack",editLink:"admin.php?page=jetpack#/traffic"}),t&&(0,r.createElement)(l.rj,null,(0,r.createElement)(l.Zb,{noBorder:!0},(0,r.createElement)(l.w4,{help:le("If set, posts will be shown as related content only if published within the past number of months. If 0, any published post can be shown, regardless of publish date.","newspack"),label:le("Maximum age of related content, in months","newspack"),onChange:t=>e(t),placeholder:le("Maximum age of related content, in months"),type:"number",value:n||0}))))}}const oe=(0,l.a4)(ce),pe=i.__,{HashRouter:de,Redirect:me,Route:ue,Switch:we}=c.Z;class he extends r.Component{constructor(e){super(e),(0,s.Z)(this,"onWizardReady",(()=>{const{setError:e,wizardApiFetch:t}=this.props;return t({path:"/newspack/v1/wizard/newspack-engagement-wizard/related-content"}).then((e=>this.setState(e))).catch((t=>e(t)))})),(0,s.Z)(this,"updatedRelatedContentSettings",(async()=>{const{wizardApiFetch:e}=this.props,{relatedPostsMaxAge:t}=this.state;try{await e({path:"/newspack/v1/wizard/newspack-engagement-wizard/related-posts-max-age",method:"POST",data:{relatedPostsMaxAge:t}}),this.setState({relatedPostsError:null,relatedPostsUpdated:!1})}catch(e){this.setState({relatedPostsError:e.message||pe("There was an error saving settings. Please try again.","newspack")})}})),this.state={relatedPostsEnabled:!1,relatedPostsMaxAge:0,relatedPostsUpdated:!1,relatedPostsError:null}}render(){const{pluginRequirements:e,wizardApiFetch:t}=this.props,{relatedPostsEnabled:a,relatedPostsError:s,relatedPostsMaxAge:i,relatedPostsUpdated:l}=this.state,c=[{label:pe("Reader Activation","newspack"),path:"/reader-activation",exact:!0,activeTabPaths:["/reader-activation","/reader-activation/campaign","/reader-activation/complete"]},{label:pe("Newsletters","newspack"),path:"/newsletters",exact:!0},{label:pe("Social","newspack"),path:"/social",exact:!0},{label:pe("Recirculation","newspack"),path:"/recirculation"}],o={headerText:pe("Engagement","newspack"),tabbedNavigation:c,wizardApiFetch:t};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(de,{hashType:"slash"},(0,r.createElement)(we,null,e,(0,r.createElement)(ue,{path:"/reader-activation",exact:!0,render:()=>(0,r.createElement)(B,(0,n.Z)({subHeaderText:pe("Configure your reader activation settings","newspack")},o))}),(0,r.createElement)(ue,{path:"/reader-activation/campaign",render:()=>(0,r.createElement)(W,(0,n.Z)({subHeaderText:pe("Preview and customize the reader activation prompts","newspack")},o))}),(0,r.createElement)(ue,{path:"/reader-activation/complete",render:()=>(0,r.createElement)(J,(0,n.Z)({subHeaderText:pe("Preview and customize the reader activation prompts","newspack")},o))}),(0,r.createElement)(ue,{path:"/newsletters",render:()=>(0,r.createElement)(C,(0,n.Z)({subHeaderText:pe("Configure your newsletter settings","newspack")},o))}),(0,r.createElement)(ue,{path:"/social",exact:!0,render:()=>(0,r.createElement)(ie,(0,n.Z)({subHeaderText:pe("Share your content to social media","newspack")},o))}),(0,r.createElement)(ue,{path:"/recirculation",exact:!0,render:()=>(0,r.createElement)(oe,(0,n.Z)({},o,{subHeaderText:pe("Engage visitors with related content","newspack"),relatedPostsEnabled:a,relatedPostsError:s,buttonAction:()=>this.updatedRelatedContentSettings(),buttonText:pe("Save Settings","newspack"),buttonDisabled:!a||!l,relatedPostsMaxAge:i,onChange:e=>{this.setState({relatedPostsMaxAge:e,relatedPostsUpdated:!0})}}))}),(0,r.createElement)(me,{to:"/reader-activation"}))))}}(0,r.render)((0,r.createElement)((0,l.uF)(he,["jetpack"])),document.getElementById("newspack-engagement-wizard"))},9196:e=>{e.exports=window.React},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,e=[],n.O=(t,a,s,r)=>{if(!a){var i=1/0;for(p=0;p<e.length;p++){for(var[a,s,r]=e[p],l=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(p--,1);var o=s();void 0!==o&&(t=o)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=103,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={103:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var s,r,[i,l,c]=a,o=0;if(i.some((t=>0!==e[t]))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(c)var p=c(n)}for(t&&t(a);o<i.length;o++)r=i[o],n.o(e,r)&&e[r]&&e[r][0](),e[i[o]]=0;return n.O(p)},a=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=n.O(void 0,[351],(()=>n(3511)));s=n.O(s);var r=window;for(var i in s)r[i]=s[i];s.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();