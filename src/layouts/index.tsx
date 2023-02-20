import React, {useContext} from "react";
import AuthLayout from "./AuthLayout";
import Dashboard from "./Dashboard";
import {redirect} from "react-router-dom";

interface LayoutInterface {
    auth: React.FC<{children: any}>,
    dashboard: React.FC<{children: any}>
}

const layouts: LayoutInterface = {
    auth: AuthLayout,
    dashboard: Dashboard,
}
const Layout = (Component: any) => {
    let layoutStr: string = Component.layout;

    let Layout = layouts[layoutStr as keyof LayoutInterface];

    if (Component && Layout) {

        return (
            <Layout>
                <Component />
            </Layout>
        );
    }

    return <Component />;
}

export default Layout