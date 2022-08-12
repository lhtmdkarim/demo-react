import React from "react";

function CardComponent(props){
    const {image, swap} = props;
    return (
        <div className="border-2 rounded-lg border-black-50">
            <div className="p-7.58px ">
                <img src={image}/>
                <div className="text-ft5 font-bold mt-7.58px">Okay Bear #1050</div>
                <div className="text-ft6 mt-1">Okay Bears</div>
            </div>

            {
                swap ? (
                    <div>
                        <div className="mt-4 py-2.5 px-3 border-t border-b border-black-50 bg-grey-400">
                            <div className="text-ft7">Swap options</div>
                            <div className="flex mt-1.5">
                                <div className="py-1 px-2 mr-1.5 text-ft8 border border-black-50 rounded flex bg-white">
                                    <img src="/images/ethereum.png" className="w-2 mr-1"/>105
                                </div>
                                <div className="py-1 px-2 text-ft8 border border-black-50 rounded flex bg-white">
                                    <img src="/images/ethereum.png" className="w-2 mr-1"/>World of Women - Any
                                </div>
                            </div>
                            <div className="py-1 px-2 text-ft8 border border-black-50 rounded flex bg-grey-300 mt-1">
                                <img src="/images/ethereum.png" className="w-2 mr-1"/>10 +
                                <img src="/images/ethereum.png" className="w-2 mx-1"/>40 (5 days)
                            </div>
                        </div>

                        <div className="py-2.5 px-3 bg-white">
                            <div className="text-ft7">Interested In</div>
                            <div className="flex mt-1.5">
                                <div className="py-1 px-2 mr-1.5 text-ft8 border border-black-50 rounded flex bg-white">
                                    <img src="/images/ethereum.png" className="w-2 mr-1"/>
                                </div>
                                <div className="py-1 px-2 text-ft8 mr-1.5 border border-black-50 rounded flex bg-white">
                                    World of Women - Any
                                </div>
                                <div className="py-1 px-2 text-ft8 border border-black-50 rounded flex bg-white">
                                    Azuki
                                </div>
                            </div>
                            <div className="py-1 px-2 text-ft8 border border-black-50 rounded flex bg-white mt-1">
                                Clone-x + World of Women +
                                <img src="/images/ethereum.png" className="w-2 mx-1"/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mt-4 py-2.5 px-3 border-t border-b border-black-50 bg-grey-400 grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-ft7">Buy reservation</div>
                                <img src="/images/make_offer.png" className="mt-1 w-109.94px h-39.81px cursor-pointer"/>
                            </div>
                            <div>
                                <div className="text-ft7">Remaining</div>
                                <img src="/images/eth_value.png" className="mt-1 w-109.94px h-39.81px"/>
                            </div>
                        </div>
                        <div className="py-2.5 px-3 bg-white">
                            <div className="text-ft7">Remaining balance due by</div>
                            <div className="grid grid-cols-4 gap-4 mt-1.5 bg-grey-500 rounded border border-grey-300 p-2.5">
                                <div>
                                    <div className="font-bold text-ft9">03</div>
                                    <div className="text-ft6">days</div>
                                </div>
                                <div>
                                    <div className="font-bold text-ft9">18</div>
                                    <div className="text-ft6">hours</div>
                                </div>
                                <div>
                                    <div className="font-bold text-ft9">45</div>
                                    <div className="text-ft6">minutes</div>
                                </div>
                                <div>
                                    <div className="font-bold text-ft9">38</div>
                                    <div className="text-ft6">seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CardComponent;
