// Komponent Głownego ekranu - Dashboard //
import React from 'react';
import './dashboard.css';
import { Title } from './title';
import shop from './images/shop.svg';
import Comments from './comments';
import Charts from './charts';

class Dashboard extends React.Component{

    render(){;
        return(
            <section className="main_container">
            <Title></Title>
            <Comments></Comments>
            <img src={shop} className="shop_img" alt="shopping app"></img>
                <Charts></Charts>
            </section>
        )
    }
}

export default Dashboard;