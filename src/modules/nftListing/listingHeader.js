import React from "react";

function ListingHeader(){
    return (
        <div className="w-full flex px-8 py-4.5 relative">
            <div>
                <div className="text-ft3 text-black-50">NFT Listings</div>
                <div className="mt-3.5 text-ft4 text-grey-100">Can we all just take a second to remember this from</div>
            </div>
            <div className="flex absolute right-14">
                <div className="py-2.5 px-4 bg-magenta text-white border border-b-2 border-black-50 cursor-pointer">Items</div>
                <div className="py-2.5 px-4 bg-white text-grey-200 border border-b-2 border-r-2 border-black-50 cursor-pointer">Analytics</div>
            </div>
        </div>
    )
}

export default ListingHeader;
