import React from "react";
import { Pages } from "../constants";
import { Row, Column } from "simple-flexbox";
import Main from "./main"
import Header from "./header/header";
import Sidebar from "./sidebar";
export default function ComponentHandler() {
    const activePage = window.location.pathname;
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <Row className="w-screen relative">
                <Column className="w-18per">
                    <Sidebar />
                </Column>
                <Column className="w-82per">
                    {activePage === Pages.DASHBOARD ? <Main /> : ""}
                </Column>
            </Row>
        </>
    );
}
