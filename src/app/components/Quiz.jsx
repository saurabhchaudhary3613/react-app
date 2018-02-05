import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
        return (
                
            <div className="container-fluid">

            <header className="app-header"><div className="text">General Knowledge</div></header>
            <main className="main-container">
                <article>
                    <div className="question-container">
                        <section className="question-number">01_</section>
                        <section className="question-text">The Eiffel Tower is located where in Paris ?</section>
                    </div>
                    <div className="options-container">
                        <ul>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
            
                        </ul>
            
                    </div>
     
            </article>
            <article>
                    <div className="question-container">
                        <section className="question-number">01_</section>
                        <section className="question-text">The Eiffel Tower is located where in Paris ?</section>
                    </div>
                    <div className="options-container">
                        <ul>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
            
                        </ul>
            
                    </div>
     
            </article>
            <article>
                    <div className="question-container">
                        <section className="question-number">01_</section>
                        <section className="question-text">The Eiffel Tower is located where in Paris ?</section>
                    </div>
                    <div className="options-container">
                        <ul>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
                            <li>
                                <input type="radio" /><span>Bios de Boulogne</span>
                            </li>
            
                        </ul>
            
                    </div>
     
            </article>

            </main>
            </div>
            
        )
} 

Header.propTypes = {
    
}