import React, { useEffect, useState } from 'react';

import Panel from "../Panel/Panel";
import Loader from '../Loader/Loader';
import { useFetch } from "../../hooks/useFetch"

import "./Matches.css";

const Matches = ({location}) => {
    const { pathname } = location;

    const { data, isLoaded, error } = useFetch(pathname);

    if (!isLoaded) { return <Loader /> }

    if (error) { return <div>Ошибка: {error.message}</div>; }
    
    return (
        <section className="matches">
            <div className="container">
                <div className="panels-list">
                    {
                        data
                            ? data.map(item => {
                                const { id, details, players } = item;
                                const { status } = details;

                                return (
                                    <Panel
                                        key={id}
                                        details={details}
                                    >
                                        <div className="panel_icons">
                                            {players.map(({ team }, index) => (
                                                <div key={index} className="panel_icon">
                                                    <img src={team.icon} alt={team.name} />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="panel_box">
                                            <div className="panel_wrap">
                                                {players.map(({ fullName, score, coefficient, win }, index) => (
                                                    <div key={index} className={"panel_row " + (win ? "panel_row-winner" : "")}>
                                                        <div className="panel_name">{fullName}</div>

                                                        {
                                                            status === "finish"
                                                                ? <div className="panel_score">{score}</div>
                                                                : <div className="panel_coefficient">{coefficient}</div>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Panel>
                                )
                              })
                            : <div> list clear </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Matches;
