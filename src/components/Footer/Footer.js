import React from "react";
import {Link, NavLink} from 'react-router-dom';
function Footer(){
    return(
        <>

       <div className="main-fo">
       <div className="container">
<div className="row">
<div className="col-md-4">
<div className="d-flex flex-wrap">
    <h3 className="fo-aount">$32,689<span className="mo-cls">/mo</span></h3>
    <div>
    <h3 className="fo-check"><i class="fa fa-check" aria-hidden="true"></i> Taxes</h3>
 <h3 className="fo-check"><i class="fa fa-check" aria-hidden="true"></i> Insurance</h3>
 <h3 className="fo-check"><i class="fa fa-check" aria-hidden="true"></i> PMI</h3>
    </div>

</div>
</div>
<div className="col-md-8">
<div className="d-flex flex-wrap flex-wrap justify-content-between">
<div className="text-center">
<div>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-poll-horizontal" class="svg-inline--fa fa-square-poll-horizontal fa-fw fo-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z"></path></svg>
</div>
<div>Results</div>
</div>

<div className="text-center">
<div>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square fa-fw fo-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path></svg>
</div>
<div>
Edit
</div>
</div>

<div className="text-center">
<div>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-hanging" class="svg-inline--fa fa-sign-hanging fa-fw fo-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32V64l352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32C14.3 128 0 113.7 0 96S14.3 64 32 64H64V32C64 14.3 78.3 0 96 0zm96 160H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"></path></svg>
</div>
<div>
Homes
</div>
</div>

<div className="text-center">
<div>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-percent" class="svg-inline--fa fa-badge-percent fa-fw fo-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM337 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L175 303c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L337 209z"></path></svg>
</div>
<div>
Rates
</div>
</div>

<div className="text-center">
<div>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-to-line" class="svg-inline--fa fa-arrow-up-to-line fa-fw fo-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM214.6 169.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 269.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"></path></svg>
</div>
<div>
Top
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
    )
}

export default Footer;