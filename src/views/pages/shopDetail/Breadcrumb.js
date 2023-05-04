import React, { Component, Fragment } from "react";

class Breadcrumb extends Component {

    render() {

        return (
            <Fragment>
                {/* <!-- Breadcrumb Start --> */}
                <div className="container-fluid">
                    <div className="row px-xl-5">
                        <div className="col-12">
                            <nav className="breadcrumb bg-light mb-30">
                                <a className="breadcrumb-item text-dark" href="/#">Home</a>
                                <a className="breadcrumb-item text-dark" href="/#">Shop</a>
                                <span className="breadcrumb-item active">Shop Detail</span>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Breadcrumb End --> */}
            </Fragment>
        )
    }
}
export default Breadcrumb