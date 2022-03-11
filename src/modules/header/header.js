import React, { useState } from "react";

function Header(){
    return (
        <div className="flex pt-8 pb-9">
            <div className="mr-60">
                <img src="/images/Logo-Color.svg"/>
            </div>

            <div className="flex">
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">PLAY</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">SPONSOR</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">DISTRIBUTE</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">RETAIL</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">ABOUT</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold mr-13">COMMUNITY</a>
            </div>
        </div>
    )
}

export default Header;
