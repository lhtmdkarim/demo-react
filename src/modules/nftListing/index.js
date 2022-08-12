import React, {Component} from "react";
import ListingHeader from "./listingHeader";
import NFTListingComponent from "./nftListing"

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    render(){
        return (
            <>
                <ListingHeader/>
                <NFTListingComponent/>
            </>
        )
    }

}

export default Main
