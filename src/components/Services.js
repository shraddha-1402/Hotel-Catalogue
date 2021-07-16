import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktail',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				icon: <FaHiking />,
				title: ' endless hicking',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				icon: <FaShuttleVan />,
				title: 'free travelling',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				icon: <FaBeer />,
				title: 'Strongest Beer',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			}
		]
	}
	render() {
		return (
			<section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
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
