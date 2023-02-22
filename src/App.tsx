import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
    <>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: layout</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <div>CSS: Tailwind</div>
            <div>
                <p>이 프로젝트에서는 Header.tsx와 Footer.tsx를 정의하고 expose 합니다.</p>
                <p>이 프로젝트의에서는 해당 컴포넌트들을 화면에 불러오고 있지 않으므로 현재 도메인에서는 정보를 볼 수 없습니다.</p></div>
        </div>
    </>
);
ReactDOM.render(<App />, document.getElementById("app"));
