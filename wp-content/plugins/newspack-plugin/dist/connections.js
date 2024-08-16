(()=>{"use strict";var e,n={4307:(e,n,s)=>{s(8209);var t=s(6087),i=s(7723),a=s(1727),r=s(216),l=s(1455),c=s.n(l),o=s(790);async function p(e,n=""){const s=n?`/newspack/v1/plugins/${e}/${n}`:`/newspack/v1/plugins/${e}`,t=n?"POST":"GET",i=await c()({path:s,method:t});return{status:i.Status,configured:i.Configured}}const d={jetpack:{pluginSlug:"jetpack",editLink:"admin.php?page=jetpack#/settings",title:"Jetpack",init:()=>p("jetpack"),activate:()=>p("jetpack","activate"),install:()=>p("jetpack","install")},"google-site-kit":{pluginSlug:"google-site-kit",editLink:"admin.php?page=googlesitekit-splash",title:(0,i.__)("Site Kit by Google","newspack-plugin"),statusDescription:{notConfigured:(0,i.__)("Not connected for this user","newspack-plugin")},init:()=>p("google-site-kit"),activate:()=>p("google-site-kit","activate"),install:()=>p("google-site-kit","install")},everlit:{pluginSlug:"everlit",editLink:"admin.php?page=everlit_settings",title:(0,i.__)("Everlit","newspack-plugin"),subTitle:(0,i.__)("AI-Generated Audio Stories","newspack-plugin"),hidden:"1"!==window.newspack_connections_data.can_use_everlit,description:(0,o.jsxs)(o.Fragment,{children:[(0,i.__)("Complete setup and licensing agreement to unlock 5 free audio stories per month.","newspack-plugin")," ",(0,o.jsx)("a",{href:"https://everlit.audio/",target:"_blank",rel:"noreferrer",children:(0,i.__)("Learn more","newspack-plugin")})]}),statusDescription:{uninstalled:(0,i.__)("Not installed.","newspack-plugin"),inactive:(0,i.__)("Inactive.","newspack-plugin"),notConfigured:(0,i.__)("Pending.","newspack-plugin")},init:()=>p("everlit"),activate:()=>p("everlit","activate"),install:()=>p("everlit","install")}},u=({isLoading:e,isSetup:n,isActive:s,onActivate:t,onInstall:r,isInstalled:l,...c})=>"page-reload"===c.status?(0,o.jsx)("span",{className:"gray",children:(0,i.__)("Page reloading…","newspack-plugin")}):e?(0,o.jsx)(a.E$,{}):l?s?n?void 0:(0,o.jsx)("a",{href:c.editLink,children:(0,i.__)("Complete Setup","newspack-plugin")}):(0,o.jsx)(a.$n,{isLink:!0,onClick:t,children:/* translators: %s: Plugin name */ /* translators: %s: Plugin name */
(0,i.sprintf)((0,i.__)("Activate %s","newspack-plugin"),c.title)}):(0,o.jsx)(a.$n,{isLink:!0,onClick:r,children:/* translators: %s: Plugin name */ /* translators: %s: Plugin name */
(0,i.sprintf)((0,i.__)("Install %s","newspack-plugin"),c.title)}),h=({plugin:e,setError:n})=>{const[s,r]=a.JL.useObjectState(e),{title:l,subTitle:c}=s,p="active"===s.status,d="uninstalled"!==s.status,h=s.configured,_=p&&h,g=!s.status;return(0,t.useEffect)((()=>{e.init().then((e=>r(e))).catch(n)}),[]),(0,o.jsx)(a.Lz,{title:`${l}${c?`: ${c}`:""}`,description:()=>{var n;if(g)return(0,i.__)("Loading…","newspack-plugin");const t=null!==(n=e.description)&&void 0!==n?n:"";let a="";var r;if(d)if(p)if(h)a=(0,i.__)("Connected","newspack-plugin");else{var l;a=null!==(l=s.statusDescription?.notConfigured)&&void 0!==l?l:(0,i.__)("Not connected.","newspack-plugin")}else{var c;a=null!==(c=s.statusDescription?.inactive)&&void 0!==c?c:(0,i.__)("Inactive.","newspack-plugin")}else a=null!==(r=s.statusDescription?.uninstalled)&&void 0!==r?r:(0,i.__)("Uninstalled.","newspack-plugin");return(0,o.jsxs)(o.Fragment,{children:[(0,i.__)("Status:","newspack-plugin")," ",a," ",_?"":t]})},actionText:_?null:u({isSetup:_,isActive:p,isLoading:g,isInstalled:d,onActivate:()=>{r({status:""}),s.activate().then((()=>r({status:"page-reload"}))).finally((()=>{window.location.reload()}))},onInstall:()=>{r({status:""}),s.install().then((e=>r(e)))},...s}),disabled:g,checkbox:!_||g?"unchecked":"checked",isMedium:!0})},_=({setError:e})=>(0,o.jsx)(o.Fragment,{children:Object.entries(d).map((([n,s])=>!Boolean(s.hidden)&&(0,o.jsx)(h,{plugin:s,setError:e},n)))});var g=s(8689),k=s(8558),w=s(6427);const x=({setError:e})=>{const[n,s]=(0,t.useState)({}),[r,l]=(0,t.useState)(!1),[p,d]=(0,t.useState)(),[u,h]=(0,t.useState)(!1),_=(0,t.useRef)(null),g=Boolean(n&&n.username),x=n=>e(n.message||(0,i.__)("Something went wrong.","newspack-plugin")),m=()=>{l(!1),d()};(0,t.useEffect)((()=>{h(!0),c()({path:"/newspack/v1/oauth/mailchimp"}).then((e=>{s(e)})).catch(x).finally((()=>h(!1)))}),[]),(0,t.useEffect)((()=>{r&&_.current.querySelector("input").focus()}),[r]);const v=()=>{e(),h(!0),c()({path:"/newspack/v1/oauth/mailchimp",method:"POST",data:{api_key:p}}).then((e=>{s(e)})).catch((n=>{e(n.message||(0,i.__)("Something went wrong during verification of your Mailchimp API key.","newspack-plugin"))})).finally((()=>{h(!1),m()}))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Lz,{title:"Mailchimp",description:`${(0,i.__)("Status:","newspack-plugin")} ${u?(0,i.__)("Loading…","newspack-plugin"):g?(0,i.sprintf)((0,i.__)("Connected as %s","newspack-plugin"),n.username):(0,i.__)("Not connected","newspack-plugin")}`,checkbox:g?"checked":"unchecked",actionText:(0,o.jsx)(a.$n,{isLink:!0,isDestructive:g,onClick:g?()=>{h(!0),c()({path:"/newspack/v1/oauth/mailchimp",method:"DELETE"}).then((()=>{s({}),h(!1)})).catch(x)}:()=>l(!0),disabled:u,children:g?(0,i.__)("Disconnect","newspack-plugin"):(0,i.__)("Connect","newspack-plugin")}),isMedium:!0}),r&&(0,o.jsxs)(a.aF,{title:(0,i.__)("Add Mailchimp API Key","newspack-plugin"),onRequestClose:m,children:[(0,o.jsx)("div",{ref:_,children:(0,o.jsxs)(a.xA,{columns:1,gutter:8,children:[(0,o.jsx)(a.xt,{placeholder:"123457103961b1f4dc0b2b2fd59c137b-us1",label:(0,i.__)("Mailchimp API Key","newspack-plugin"),hideLabelFromVision:!0,value:p,onChange:d,onKeyDown:e=>{k.ENTER===e.keyCode&&""!==p&&(e.preventDefault(),v())}}),(0,o.jsx)("p",{children:(0,o.jsx)(w.ExternalLink,{href:"https://mailchimp.com/help/about-api-keys/#Find_or_generate_your_API_key",children:(0,i.__)("Find or generate your API key","newspack-plugin")})})]})}),(0,o.jsxs)(a.Zp,{buttonsCard:!0,noBorder:!0,className:"justify-end",children:[(0,o.jsx)(a.$n,{isSecondary:!0,onClick:m,children:(0,i.__)("Cancel","newspack-plugin")}),(0,o.jsx)(a.$n,{isPrimary:!0,disabled:!p,onClick:v,children:u?(0,i.__)("Connecting…","newspack-plugin"):g?(0,i.__)("Connected","newspack-plugin"):(0,i.__)("Connect","newspack-plugin")})]})]})]})};var m=s(6942),v=s.n(m),b=s(8156),j=s.n(b);const f=[{service:"stripe",label:(0,i.__)("Stripe","newspack-plugin")}],y=({setError:e})=>{const[n,s]=(0,t.useState)(),[r,l]=(0,t.useState)(!1),[p,d]=(0,t.useState)(null),u=n=>e(n.message||(0,i.__)("Something went wrong.","newspack-plugin")),h=r||!(void 0!==n)||!p;return(0,t.useEffect)((()=>{l(!0),c()({path:"/newspack/v1/oauth/fivetran"}).then((e=>{s(e.connections_statuses),d(e.has_accepted_tos)})).catch(u).finally((()=>l(!1)))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,i.__)("In order to use the this features, you must read and accept","newspack-plugin")," ",(0,o.jsx)("a",{href:"https://newspack.com/terms-of-service/",children:(0,i.__)("Newspack Terms of Service","newspack-plugin")}),":"]}),(0,o.jsx)(w.CheckboxControl,{className:v()("mt1",{"o-50":null===p}),checked:p,disabled:null===p,onChange:e=>{c()({path:"/newspack/v1/oauth/fivetran-tos",method:"POST",data:{has_accepted:e}}),d(e)},label:(0,i.__)("I've read and accept Newspack Terms of Service","newspack-plugin")}),f.map((e=>{const s=((e,n)=>{const s=void 0!==n,t=j()(n,[e.service,"setup_state"]),a=j()(n,[e.service,"sync_state"]),r=j()(n,[e.service,"schema_status"]),l=r&&"ready"!==r||"paused"===a;let c="-";return t?"ready"===r?c=`${t}, ${a}`:l&&(c=`${t}, ${a}. ${(0,i.__)("Sync is in progress – please check back in a while.","newspack-plugin")}`):s&&(c=(0,i.__)("Not connected","newspack-plugin")),{label:c,isConnected:"connected"===t,isPending:l}})(e,n);return(0,o.jsx)(a.Lz,{title:e.label,description:`${(0,i.__)("Status:","newspack-plugin")} ${s.label}`,isPending:s.isPending,actionText:(0,o.jsx)(w.Button,{disabled:h,onClick:()=>(({service:e})=>{l(!0),c()({path:`/newspack/v1/oauth/fivetran/${e}`,method:"POST",data:{service:e}}).then((({url:e})=>window.location=e)).catch(u)})(e),isLink:!0,children:s.isConnected?(0,i.__)("Re-connect","newspack-plugin"):(0,i.__)("Connect","newspack-plugin")}),checkbox:s.isConnected?"checked":"unchecked",isMedium:!0},e.service)}))]})},C=()=>{const[e,n]=(0,t.useState)(null),[s,r]=(0,t.useState)(!1),[l,p]=(0,t.useState)({}),[d,u]=(0,t.useState)({});(0,t.useEffect)((()=>{(async()=>{r(!0);try{const e=await c()({path:"/newspack/v1/recaptcha"});p(e),u(e)}catch(e){n(e.message||(0,i.__)("Error fetching settings.","newspack-plugin"))}finally{r(!1)}})()}),[]),(0,t.useEffect)((()=>{d?.version!==l?.version?(u({...d,site_key:"",site_secret:""}),n((0,i.__)("Your site key and secret must match the selected reCAPTCHA version. Please enter new credentials.","newspack-plugin"))):(u({...d,site_key:l?.site_key||"",site_secret:l?.site_secret||""}),n(null))}),[d?.version]);const h=async e=>{n(null),r(!0);try{const n=await c()({path:"/newspack/v1/recaptcha",method:"POST",data:e});p(n),u(n)}catch(e){n(e?.message||(0,i.__)("Error updating settings.","newspack-plugin"))}finally{r(!1)}},_="v3"===d?.version,g=l.site_key&&l.site_secret;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.X3,{id:"recaptcha",title:(0,i.__)("reCAPTCHA","newspack-plugin")}),(0,o.jsx)(a.Lz,{isMedium:!0,title:(0,i.__)("Use reCAPTCHA","newspack-plugin"),description:()=>(0,o.jsxs)(o.Fragment,{children:[(0,i.__)("Enabling reCAPTCHA can help protect your site against bot attacks and credit card testing.","newspack-plugin")," ",(0,o.jsx)(w.ExternalLink,{href:"https://www.google.com/recaptcha/admin/create",children:(0,i.__)("Get started","newspack-plugin")})]}),hasGreyHeader:!!l.use_captcha,toggleChecked:!!l.use_captcha,toggleOnChange:()=>h({use_captcha:!l.use_captcha}),actionContent:l.use_captcha&&(0,o.jsx)(a.$n,{variant:"primary",disabled:s||!Object.keys(d).length,onClick:()=>h(d),children:(0,i.__)("Save Settings","newspack-plugin")}),disabled:s,children:l.use_captcha&&(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(a.$T,{isError:!0,noticeText:e}),!g&&(0,o.jsx)(a.$T,{noticeText:(0,i.__)("You must enter a valid site key and secret to use reCAPTCHA.","newspack-plugin")}),(0,o.jsx)(a.xA,{noMargin:!0,rowGap:16,children:(0,o.jsx)(w.BaseControl,{id:"recaptcha-version",label:(0,i.__)("reCAPTCHA Version","newspack-plugin"),help:(0,o.jsx)(w.ExternalLink,{href:"https://developers.google.com/recaptcha/docs/versions",children:(0,i.__)("Learn more about reCAPTCHA versions","newspack-plugin")}),children:(0,o.jsx)(a.Yq,{label:(0,i.__)("reCAPTCHA Version","newspack-plugin"),hideLabelFromVision:!0,value:d?.version||"v3",onChange:e=>u({...d,version:e}),options:[{value:"v3",label:(0,i.__)("Score based (v3)","newspack-plugin")},{value:"v2_invisible",label:(0,i.__)("Challenge (v2) - invisible reCAPTCHA badge","newspack-plugin")}]})})}),(0,o.jsxs)(a.xA,{noMargin:!0,rowGap:16,children:[(0,o.jsx)(a.xt,{value:d?.site_key||"",label:(0,i.__)("Site Key","newspack-plugin"),onChange:e=>u({...d,site_key:e}),disabled:s,autoComplete:"off"}),(0,o.jsx)(a.xt,{type:"password",value:d?.site_secret||"",label:(0,i.__)("Site Secret","newspack-plugin"),onChange:e=>u({...d,site_secret:e}),disabled:s,autoComplete:"off"}),_&&(0,o.jsx)(a.xt,{type:"number",step:"0.05",min:"0",max:"1",value:parseFloat(d?.threshold||""),label:(0,i.__)("Threshold","newspack-plugin"),onChange:e=>u({...d,threshold:e}),disabled:s,help:(0,o.jsx)(w.ExternalLink,{href:"https://developers.google.com/recaptcha/docs/v3#interpreting_the_score",children:(0,i.__)("Learn more about the threshold value","newspack-plugin")})})]})]})})]})};var S=s(6154),A=s.n(S),E=s(6786),T=s(8351),$=s(5573);const N=(0,o.jsx)($.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)($.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})});var P=s(9214),L=s(8169),F=s(7677);const I=e=>{let n=e.slice(8);return e.length>45&&(n=`${e.slice(8,38)}...${e.slice(-10)}`),n},O=e=>{const{label:n,url:s}=e;return n||I(s)},M=e=>{const{label:n,url:s}=e;return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)("span",{className:"newspack-webhooks__endpoint__label",children:n}),(0,o.jsx)("span",{className:"newspack-webhooks__endpoint__url",children:I(s)})]})},R=e=>e.requests.some((e=>e.errors.length)),q=({disabled:e,position:n="bottom left",isSystem:s,onEdit:r=(()=>{}),onDelete:l=(()=>{}),onView:c=(()=>{})})=>{const[p,d]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{d(!1)}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.$n,{className:p&&"popover-active",onClick:()=>d(!p),icon:L.A,disabled:e,label:(0,i.__)("Endpoint Actions","newspack-plugin"),tooltipPosition:n}),p&&(0,o.jsxs)(a.AM,{position:n,onFocusOutside:()=>d(!1),onKeyDown:e=>k.ESCAPE===e.keyCode&&d(!1),children:[(0,o.jsx)(w.MenuItem,{onClick:()=>d(!1),className:"screen-reader-text",children:(0,i.__)("Close Endpoint Actions","newspack-plugin")}),(0,o.jsx)(w.MenuItem,{onClick:c,className:"newspack-button",children:(0,i.__)("View Requests","newspack-plugin")}),!s&&(0,o.jsx)(w.MenuItem,{onClick:r,className:"newspack-button",children:(0,i.__)("Edit","newspack-plugin")}),!s&&(0,o.jsx)(w.MenuItem,{onClick:l,className:"newspack-button",isDestructive:!0,children:(0,i.__)("Remove","newspack-plugin")})]})]})},D=({disabled:e,onConfirm:n,onClose:s,title:t,description:r})=>(0,o.jsxs)(a.aF,{title:t,onRequestClose:s,children:[(0,o.jsx)("p",{children:r}),(0,o.jsxs)(a.Zp,{buttonsCard:!0,noBorder:!0,className:"justify-end",children:[(0,o.jsx)(a.$n,{isSecondary:!0,onClick:s,disabled:e,children:(0,i.__)("Cancel","newspack-plugin")}),(0,o.jsx)(a.$n,{isPrimary:!0,onClick:n,disabled:e,children:(0,i.__)("Confirm","newspack-plugin")})]})]}),B=()=>{const[e,n]=(0,t.useState)(!1),[s,r]=(0,t.useState)(!1),[l,p]=(0,t.useState)([]),[d,u]=(0,t.useState)([]),[h,_]=(0,t.useState)(!1),[g,k]=(0,t.useState)(!1),[x,m]=(0,t.useState)(!1),[v,b]=(0,t.useState)(!1),[j,f]=(0,t.useState)(!1),[y,C]=(0,t.useState)(!1),[S,$]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{c()({path:"/newspack/v1/data-events/actions"}).then((e=>{p(e)})).catch((e=>{r(e)}))}),[]),(0,t.useEffect)((()=>{n(!0),c()({path:"/newspack/v1/webhooks/endpoints"}).then((e=>{u(e)})).catch((e=>{r(e)})).finally((()=>{n(!1)}))}),[]),(0,t.useEffect)((()=>{C(!1),f(!1),$(!1)}),[v]),(0,o.jsxs)(a.Zp,{noBorder:!0,className:"mt64",children:[!1!==s&&(0,o.jsx)(a.$T,{isError:!0,noticeText:s.message}),(0,o.jsxs)("div",{className:"flex justify-between items-end",children:[(0,o.jsx)(a.X3,{title:(0,i.__)("Webhook Endpoints","newspack-plugin"),description:(0,i.__)("Register webhook endpoints to integrate reader activity data to third-party services or private APIs","newspack-plugin"),noMargin:!0}),(0,o.jsx)(a.$n,{variant:"primary",onClick:()=>b({global:!0}),disabled:e,children:(0,i.__)("Add New Endpoint","newspack-plugin")})]}),d.length>0&&(0,o.jsx)(o.Fragment,{children:d.map((e=>(0,o.jsx)(a.Lz,{isMedium:!0,className:"newspack-webhooks__endpoint mt16",toggleChecked:!e.disabled,toggleOnChange:()=>k(e),title:M(e),disabled:e.system,description:()=>e.disabled&&e.disabled_error?(0,i.__)("This endpoint is disabled due to excessive request errors","newspack-plugin")+": "+e.disabled_error:(0,o.jsxs)(o.Fragment,{children:[(0,i.__)("Actions:","newspack-plugin")," ",e.global?(0,o.jsx)("span",{className:"newspack-webhooks__endpoint__action",children:(0,i.__)("global","newspack-plugin")}):e.actions.map((e=>(0,o.jsx)("span",{className:"newspack-webhooks__endpoint__action",children:e},e)))]}),actionText:(0,o.jsx)(q,{onEdit:()=>b(e),onDelete:()=>_(e),onView:()=>m(e),isSystem:e.system})},e.id)))}),!1!==h&&(0,o.jsx)(D,{title:(0,i.__)("Remove Endpoint","newspack-plugin"),description:(0,i.sprintf)(/* translators: %s: endpoint title */ /* translators: %s: endpoint title */
(0,i.__)("Are you sure you want to remove the endpoint %s?","newspack-plugin"),`"${I(h.url)}"`),onClose:()=>_(!1),onConfirm:()=>{return e=h,n(!0),void c()({path:`/newspack/v1/webhooks/endpoints/${e.id}`,method:"DELETE"}).then((e=>{u(e)})).catch((e=>{r(e)})).finally((()=>{n(!1),_(!1)}));var e},disabled:e}),!1!==g&&(0,o.jsx)(D,{title:g.disabled?(0,i.__)("Enable Endpoint","newspack-plugin"):(0,i.__)("Disable Endpoint","newspack-plugin"),description:g.disabled?(0,i.sprintf)(/* translators: %s: endpoint title */ /* translators: %s: endpoint title */
(0,i.__)("Are you sure you want to enable the endpoint %s?","newspack-plugin"),`"${I(g.url)}"`):(0,i.sprintf)(/* translators: %s: endpoint title */ /* translators: %s: endpoint title */
(0,i.__)("Are you sure you want to disable the endpoint %s?","newspack-plugin"),`"${I(g.url)}"`),endpoint:g,onClose:()=>k(!1),onConfirm:()=>{return e=g,n(!0),void c()({path:`/newspack/v1/webhooks/endpoints/${e.id}`,method:"POST",data:{disabled:!e.disabled}}).then((e=>{u(e)})).catch((e=>{r(e)})).finally((()=>{n(!1),k(!1)}));var e},disabled:e}),!1!==x&&(0,o.jsxs)(a.aF,{title:(0,i.__)("Latest Requests","newspack-plugin"),onRequestClose:()=>m(!1),children:[(0,o.jsx)("p",{children:(0,i.sprintf)(
// translators: %s is the endpoint title (shortened URL).
// translators: %s is the endpoint title (shortened URL).
(0,i.__)("Most recent requests for %s","newspack-plugin"),O(x))}),x.requests.length>0?(0,o.jsxs)("table",{className:"newspack-webhooks__requests "+(R(x)?"has-error":""),children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{}),(0,o.jsx)("th",{colSpan:"2",children:(0,i.__)("Action","newspack-plugin")}),R(x)&&(0,o.jsx)("th",{colSpan:"2",children:(0,i.__)("Error","newspack-plugin")})]}),x.requests.map((e=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:`status status--${e.status}`,children:(0,o.jsx)(F.A,{icon:(n=e.status,{pending:E.A,finished:T.A,killed:N}[n]||P.A)})}),(0,o.jsx)("td",{className:"action-name",children:e.action_name}),(0,o.jsx)("td",{className:"scheduled",children:"pending"===e.status?(0,i.sprintf)(
// translators: %s is a human-readable time difference.
// translators: %s is a human-readable time difference.
(0,i.__)("sending in %s","newspack-plugin"),A()(1e3*parseInt(e.scheduled)).fromNow(!0)):(0,i.sprintf)(
// translators: %s is a human-readable time difference.
// translators: %s is a human-readable time difference.
(0,i.__)("processed %s","newspack-plugin"),A()(1e3*parseInt(e.scheduled)).fromNow())}),R(x)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("td",{className:"error",children:e.errors&&e.errors.length>0?e.errors[e.errors.length-1]:"--"}),(0,o.jsx)("td",{children:(0,o.jsx)("span",{className:"error-count",children:(0,i.sprintf)(
// translators: %s is the number of errors.
// translators: %s is the number of errors.
(0,i.__)("Attempt #%s","newspack-plugin"),e.errors.length)})})]})]},e.id);var n}))]}):(0,o.jsx)(a.$T,{noticeText:(0,i.__)("This endpoint hasn't received any requests yet.","newspack-plugin")})]}),!1!==v&&(0,o.jsxs)(a.aF,{title:(0,i.__)("Webhook Endpoint","newspack-plugin"),onRequestClose:()=>{b(!1),f(!1)},children:[!1!==j&&(0,o.jsx)(a.$T,{isError:!0,noticeText:j.message}),!0===v.disabled&&(0,o.jsx)(a.$T,{noticeText:(0,i.__)("This webhook endpoint is currently disabled.","newspack-plugin"),className:"mt0"}),v.disabled&&v.disabled_error&&(0,o.jsx)(a.$T,{isError:!0,noticeText:(0,i.__)("Request Error: ","newspack-plugin")+v.disabled_error,className:"mt0"}),S&&(0,o.jsx)(a.$T,{isError:!0,noticeText:(0,i.__)("Test Error: ","newspack-plugin")+S.message,className:"mt0"}),(0,o.jsxs)(a.xA,{columns:1,gutter:16,className:"mt0",children:[(0,o.jsx)(a.xt,{label:(0,i.__)("URL","newspack-plugin"),help:(0,i.__)("The URL to send requests to. It's required for the URL to be under a valid TLS/SSL certificate. You can use the test button below to verify the endpoint response.","newspack-plugin"),className:"code",value:v.url,onChange:e=>b({...v,url:e}),disabled:e}),(0,o.jsx)(a.xt,{label:(0,i.__)("Authentication token (optional)","newspack-plugin"),help:(0,i.__)("If your endpoint requires a token authentication, enter it here. It will be sent as a Bearer token in the Authorization header.","newspack-plugin"),value:v.bearer_token,onChange:e=>b({...v,bearer_token:e}),disabled:e}),(0,o.jsxs)(a.Zp,{buttonsCard:!0,noBorder:!0,className:"justify-end",children:[y&&(0,o.jsxs)("div",{className:"newspack-webhooks__test-response status--"+(y.success?"success":"error"),children:[(0,o.jsx)("span",{className:"message",children:y.message}),(0,o.jsx)("span",{className:"code",children:y.code})]}),(0,o.jsx)(a.$n,{isSecondary:!0,onClick:()=>{return e=v.url,s=v.bearer_token,n(!0),$(!1),C(!1),void c()({path:"/newspack/v1/webhooks/endpoints/test",method:"POST",data:{url:e,bearer_token:s}}).then((e=>{C(e)})).catch((e=>{$(e)})).finally((()=>{n(!1)}));var e,s},disabled:e||!v.url,children:(0,i.__)("Send a test request","newspack-plugin")})]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)(a.xt,{label:(0,i.__)("Label (optional)","newspack-plugin"),help:(0,i.__)("A label to help you identify this endpoint. It will not be sent to the endpoint.","newspack-plugin"),value:v.label,onChange:e=>b({...v,label:e}),disabled:e}),(0,o.jsxs)(a.xA,{columns:1,gutter:16,children:[(0,o.jsx)("h3",{children:(0,i.__)("Actions","newspack-plugin")}),(0,o.jsx)(w.CheckboxControl,{checked:v.global,onChange:e=>b({...v,global:e}),label:(0,i.__)("Global","newspack-plugin"),help:(0,i.__)("Leave this checked if you want this endpoint to receive data from all actions.","newspack-plugin"),disabled:e}),l.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,i.__)("If this endpoint is not global, select which actions should trigger this endpoint:","newspack-plugin")}),(0,o.jsx)(a.xA,{columns:2,gutter:16,children:l.map(((n,s)=>(0,o.jsx)(w.CheckboxControl,{disabled:v.global||e,label:n,checked:v.actions&&v.actions.includes(n)||!1,indeterminate:v.global,onChange:()=>{const e=v.actions||[];e.includes(n)?e.splice(e.indexOf(n),1):e.push(n),b({...v,actions:e})}},s)))})]}),(0,o.jsx)(a.Zp,{buttonsCard:!0,noBorder:!0,className:"justify-end",children:(0,o.jsx)(a.$n,{isPrimary:!0,onClick:()=>{var e;e=v,n(!0),f(!1),c()({path:`/newspack/v1/webhooks/endpoints/${e.id||""}`,method:"POST",data:e}).then((e=>{u(e),b(!1)})).catch((e=>{f(e)})).finally((()=>{n(!1)}))},disabled:e,children:(0,i.__)("Save","newspack-plugin")})})]})]})]})},{HashRouter:H,Redirect:z,Route:G,Switch:V}=r.A,K=(0,a.c_)((()=>{const[e,n]=(0,t.useState)(),s=e=>s=>n(s?e+s:null);return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)(a.$T,{isError:!0,noticeText:e}),(0,o.jsx)(a.X3,{title:(0,i.__)("Plugins","newspack-plugin")}),(0,o.jsx)(_,{}),(0,o.jsx)(a.X3,{title:(0,i.__)("APIs","newspack-plugin")}),newspack_connections_data.can_connect_google&&(0,o.jsx)(g.A,{setError:s((0,i.__)("Google: ","newspack-plugin"))}),(0,o.jsx)(x,{setError:s((0,i.__)("Mailchimp: ","newspack-plugin"))}),newspack_connections_data.can_connect_fivetran&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.X3,{title:"Fivetran"}),(0,o.jsx)(y,{setError:s((0,i.__)("Fivetran: ","newspack-plugin"))})]}),(0,o.jsx)(C,{setError:s((0,i.__)("reCAPTCHA: ","newspack-plugin"))}),newspack_connections_data.can_use_webhooks&&(0,o.jsx)(B,{})]})}));(0,t.render)((0,t.createElement)((0,a.Aq)((({pluginRequirements:e,wizardApiFetch:n,startLoading:s,doneLoading:t})=>{const a={headerText:(0,i.__)("Connections","newspack-plugin"),subHeaderText:(0,i.__)("Connections to third-party services","newspack-plugin"),wizardApiFetch:n,startLoading:s,doneLoading:t};return(0,o.jsx)(H,{hashType:"slash",children:(0,o.jsxs)(V,{children:[e,(0,o.jsx)(G,{exact:!0,path:"/",render:()=>(0,o.jsx)(K,{...a})}),(0,o.jsx)(z,{to:"/"})]})})}))),document.getElementById("newspack-connections-wizard"))},1609:e=>{e.exports=window.React},790:e=>{e.exports=window.ReactJSXRuntime},6154:e=>{e.exports=window.moment},1455:e=>{e.exports=window.wp.apiFetch},6427:e=>{e.exports=window.wp.components},7143:e=>{e.exports=window.wp.data},6087:e=>{e.exports=window.wp.element},2619:e=>{e.exports=window.wp.hooks},8537:e=>{e.exports=window.wp.htmlEntities},7723:e=>{e.exports=window.wp.i18n},8558:e=>{e.exports=window.wp.keycodes},5573:e=>{e.exports=window.wp.primitives},3832:e=>{e.exports=window.wp.url}},s={};function t(e){var i=s[e];if(void 0!==i)return i.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=n,e=[],t.O=(n,s,i,a)=>{if(!s){var r=1/0;for(p=0;p<e.length;p++){for(var[s,i,a]=e[p],l=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((e=>t.O[e](s[c])))?s.splice(c--,1):(l=!1,a<r&&(r=a));if(l){e.splice(p--,1);var o=i();void 0!==o&&(n=o)}}return n}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[s,i,a]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.j=178,(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var s=n.getElementsByTagName("script");if(s.length)for(var i=s.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=s[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={178:0};t.O.j=n=>0===e[n];var n=(n,s)=>{var i,a,[r,l,c]=s,o=0;if(r.some((n=>0!==e[n]))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(c)var p=c(t)}for(n&&n(s);o<r.length;o++)a=r[o],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(p)},s=globalThis.webpackChunknewspack=globalThis.webpackChunknewspack||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))})();var i=t.O(void 0,[223],(()=>t(4307)));i=t.O(i)})();