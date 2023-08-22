import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <>
            <ul>
                <li>
                    <Link to={"/"}>home </Link>
                </li>
                <li>
                    <Link to={"/about"}>acbout</Link>
                </li>
                <li>
                    <Link to={"/home"}>home</Link>
                </li>
                <li>
                    <Link to={"/service"}>service</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </>
    );
}