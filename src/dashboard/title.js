import React, { useEffect, useRef } from 'react';
import './dashboard.css';
import gsap from "gsap";

export class Title extends React.Component {

    componentDidMount() {
        gsap.from(".title-1", { opacity: 0, x: -200, duration: 1 });
        gsap.from(".title-2", { opacity: 0, x: -200, duration: 1.5 });
    }

    render() {
        return (
            <div className="header_container">
                <h1 className="title-1">CORONA 404</h1>
                <h2 className="title-2">Nikt o to nie prosił <br /><span className="titlespan">Każdy tego potrzebował</span> </h2>
            </div>
        )
    }

}