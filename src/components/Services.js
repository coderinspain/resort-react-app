import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:'Find advanced grammar, style and punctuation issues or check texts with up to 40,000 characters'
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:'Find advanced grammar, style and punctuation issues or check texts with up to 40,000 characters'
            },
            {
                icon:<FaHiking />,
                title:"Endless Hikking",
                info:'Find advanced grammar, style and punctuation issues or check texts with up to 40,000 characters'
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:'Find advanced grammar, style and punctuation issues or check texts with up to 40,000 characters'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}

                </div>
            </section>
        )
    }
}

