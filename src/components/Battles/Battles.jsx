import React, { useEffect, useState } from 'react';

import Panel from "../Panel/Panel";
import Loader from '../Loader/Loader';
import { useFetch } from "../../hooks/useFetch"
import "./Battles.css";

const Battles = ({location}) => {
    const { pathname } = location;

    const { data, isLoaded, error } = useFetch(pathname);

    if (!isLoaded) { return <Loader /> }

    if (error) { return <div>Ошибка: {error.message}</div>; }

    return (
        <section className="battles">
            <div className="container">
                <div className="panels-list">
                    {
                        data
                            ? data.map(item => {
                                const { id, details, players } = item;
                                const { status, discipline, match } = details;

                                return (
                                    <Panel
                                        key={id}
                                        details={details}
                                    >
                                        <div className="panel_icons">
                                            {discipline.map((item, index) => (
                                                <div key={index} className="panel_icon">
                                                    <img src={item.icon} alt={item.name} />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="panel_box">
                                            <div className="panel_wrap">
                                                {players.map(({ fullName }, index) => (
                                                    <div key={index} className="panel_row">
                                                        <div className="panel_name panel_name--battles">{fullName}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="panel_matches">match #{match}</div>.
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

export default Battles;
