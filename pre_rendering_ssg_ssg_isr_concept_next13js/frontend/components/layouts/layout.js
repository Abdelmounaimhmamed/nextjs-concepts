import { Fragment } from "react";
import Header from "./Header";


const Layouts = (props) => {
    return (
        <Fragment>
            <Header />
            <main>{props.children}</main>
        </Fragment>
    )
}


export default Layouts ;