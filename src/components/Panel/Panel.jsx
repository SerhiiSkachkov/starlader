import React from 'react';
import btn_play from '../../assets/images/play_icon.png';
import './Panel.css';

const Panel = ({ children, details }) => {
    const {
        status,
        datetime,
        stage,
        mode,
        sponsor,
        timeLeft,
        url,
        result,
        map,
        victor
    } = details;

    let panelStatus;

    switch (status) {
        case "live":
            panelStatus = (
                <div className="panel_watch">
                    <div className="panel_watch-icon">
                        <img src={btn_play} alt="" />
                    </div>
                    <div className="panel_watch-title"> watch live!</div>
                </div>
            ); break;

        case "finish":
        case "upcoming":
            const [date, time] = datetime;

            panelStatus = (
                <div className="panel_watch">
                    <div className="panel_watch-time">{time}</div>
                    <div className="panel_watch-date">{date}</div>
                </div>
            );
    }

    const panel = (
        <>
            {panelStatus}

            <div className="panel_stage">{stage}</div>

            {children}

            <div className="panel_inform">
                <ul className="panel_sistems">

                    {
                        timeLeft
                            ? <li>Starts in: {timeLeft}</li>
                            : null
                    }

                    {
                        map
                            ? <li>Map: {map}</li>
                            : null
                    }

                    {
                        mode
                            ? <li>{mode}</li>
                            : null
                    }

                    {
                        result
                            ? result.map((el, index) => {
                                return (<li key={index}>{el}</li>)
                            })
                            : null
                    }

                    {
                        victor
                            ? <li className="panel_sistems-victor">{victor.name} - {victor.score}</li>
                            : null
                    }

                </ul>

                {
                    sponsor
                        ? <div className="panel_partner">
                            <img src={sponsor.icon} alt={sponsor.name} />
                        </div>
                        : null
                }

            </div>

        </>

    );

    if (status === "live") {
        return (
            <a className={`panel panel_${status}`} href={url} target="_blank">
                {panel}
            </a>
        )
    }

    return (
        <div className={`panel panel_${status}`}>
            {panel}
        </div>
    );
};

export default Panel;
