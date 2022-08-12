import React, { useState } from "react";

const Header = () => {

    return (
        <div className="hidden lg:block">
            <div className="flex w-screen h-99px px-14 py-4 relative border-b border-grey-200">
                <div className="flex items-center">
                    <img src="/images/logo.svg" className="mr-31px cursor-pointer"/>
                    <img src="/images/search.png" className="w-12 h-12 cursor-pointer"/>
                </div>

                <div className="flex absolute right-14">
                    <div className="flex items-center">
                        <div className="mr-10 text-ft1 text-magenta cursor-pointer">Explore</div>
                        <div className="mr-10 text-ft2 text-grey-100 cursor-pointer">Collections</div>
                        <div className="mr-9 text-ft2 text-grey-100 cursor-pointer">Create Listing</div>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/mode.png" className="w-12 h-12 mr-31px cursor-pointer"/>
                        <img src="/images/language.png" className="w-12 h-12 mr-31px cursor-pointer"/>
                        <img src="/images/wallet_address.png" className="h-12 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
