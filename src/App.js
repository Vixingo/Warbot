import "./App.css";
import "./css/responsive.css";
import { Route, Link, HashRouter } from "react-router-dom";
import { useWallet, UseWalletProvider } from "use-wallet";
import War_dashboard from "./Pages/War_dashboard";
function App() {
    return (
        <>
            <UseWalletProvider>
                <HashRouter>
                    <Route exact path="/" component={War_dashboard} />
                </HashRouter>
            </UseWalletProvider>
        </>
    );
}

export default App;
