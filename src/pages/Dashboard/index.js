import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import './styles.css';

const Dashboard = () => {

    const [champions, setChampions] = useState([]);

    useEffect(() => {
        api.get("10.22.1/data/en_US/champion.json").then(response => {
            const data = response.data.data;
            console.log(response.data.data);
            setChampions(Object.entries(data));
        })
    }, []);

    return (
        <>

            <div className="champions-list">
                {champions.map(champion => (
                    <a key={champion[1].key} className="champion-card">
                        <span className="primary-tag">{champion[1].tags[0]}</span>
                        <span className="champion-img">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion[0]}_0.jpg`} alt="" />
                        </span>
                        <span className="champion-name">
                            <p>{champion[1].name}</p>
                        </span>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Dashboard;