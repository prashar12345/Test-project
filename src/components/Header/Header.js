import React from "react";

function Header(){
    return(
       <>
       <div className="hr-main">
        <div className="d-flex flex-wrap justify-content-between">
            <div className="">
<h3 className="hr-hedding "><i class="fa fa-home hr-home" aria-hidden="true"></i> What's My Payment?</h3>
            </div>
            <div className=""> 
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars-sort" class="svg-inline--fa fa-bars-sort fa-flip-horizontal " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM192 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H160c17.7 0 32 14.3 32 32z"></path></svg>
            </div>
        </div>
       </div>
       </>
    )
}

export default Header