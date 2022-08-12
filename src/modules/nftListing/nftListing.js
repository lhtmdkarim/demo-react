import React from "react";
import CardComponent from "./card"
import Nfts from "./../../constants/nftList"

function NFTListingComponent(){
    const nfts = Nfts.nfts;
    return (
        <div className="flex justify-start p-8 border-t-2 border-black-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    nfts.map(item => (
                        <CardComponent
                            image={item.image}
                            swap={item.swap}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default NFTListingComponent;
