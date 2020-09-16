import React from "react";
import Header from "./components/Header";
import HomeNav from "./components/HomeNav";

export default function App() {
    return (
        <div>
            <Header />
            <main style={{ padding: "1.5em" }}>
                <HomeNav />
            </main>
        </div>
    );
}
