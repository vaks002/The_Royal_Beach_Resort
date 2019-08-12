import React, {Component} from 'react';
import {FaCocktail,FaHiking ,FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title';
// import { icons } from 'react-icons';

export default class Services extends Component {
    state={
        services :[
            {
                icon:<FaCocktail/>,
                title : "Free Cocktails",
                info : "A cocktail is a mixed drink that is traditionally defined as a combination of liquor(s), a sweetener, bitters, and water (diluted ice)."
            },
            {
                icon:<FaHiking/>,
                title : "Endless Hiking",
                info : "Hiking is a general word for traveling on foot in wilderness or countryside. Hiking is a kind of physical activity as well as a leisure activity."     
            },
            {
                icon:<FaShuttleVan/>,
                title : "Free Shuttle",
                info :  "A shuttle runs between two or more places regularly. The benefit to staying at a hotel close to the airport is that you can take a shuttle."
            },
            {
                icon:<FaBeer/>,
                title : "Strongest Beer",
                info :  "Beer is a refreshing enjoyable beverage with relatively low alcoholic content which brings pleasure and social interaction to many people. "          
            }
        ]
    }
    render(){
        return(
            <div>
                <section className="services">
                    <Title title="services"></Title>
                    <div className="services-center">
                        {this.state.services.map((item, index) =>{
                            return(
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    }
}
