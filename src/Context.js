import React, { Component } from 'react'
import items from './data';
// import { findAllByAltText } from '@testing-library/react';
const RoomContext = React.createContext();

//RoomContext.Provider value={"hello"}
class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	}

	componentDidMount() {
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter((room) => {
			return room.featured === true
		});
		let maxPrice = Math.max(...rooms.map((room) => {
			return room.price;
		}));
		let maxSize = Math.max(...rooms.map((room) => {
			return room.size;
		}));
		this.setState({
			rooms: rooms,
			sortedRooms: rooms,
			featuredRooms: featuredRooms,
			loading: false,
			price: maxPrice,
			maxPrice: maxPrice,
			maxSize: maxSize
		})
	}

	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => {
				return image.fields.file.url;
			})
			let room = { ...item.fields, images: images, id };
			return room;
		});
		return tempItems;
	}

	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.type === "checked" ? event.target.checked : event.target.value;
		console.log( event.type, event.target.type);
		this.setState({
			[name]: value
		},
		this.filterRooms
		);
	}

	filterRooms = () => {
		let {rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = this.state;
		
		//converting capacity into integer after getting input as a string
		capacity = parseInt(capacity);
		price = parseInt(price);
		
		//all rooms
		let tempRooms = [...rooms];

		//filter by type
		if(type !== 'all'){
			tempRooms = tempRooms.filter((tempRoom) => {
				return tempRoom.type === type;
			});
		}

		//filter by capacity
		if(capacity !== 1){
			tempRooms = tempRooms.filter((tempRoom) => {
				return tempRoom.capacity >= capacity;
			})
		}

		//filter by price
		if(price<maxPrice){
			tempRooms = tempRooms.filter((tempRoom) => {
				return tempRoom.price <= price;
			})
		}

		//filter by size
		tempRooms = tempRooms.filter((tempRoom) => {
			return tempRoom.size >= minSize && tempRoom.size <= maxSize;
		})

		//filter by breakfast
		if(breakfast){
			tempRooms = tempRooms.filter((tempRoom) => {
				return tempRoom.breakfast ===true;
			})
		}

		//filter by pets
		if(pets){
			tempRooms = tempRooms.filter((tempRoom) => {
				return tempRoom.pets ===true;
			})
		}
		//passing sorted rooms
		this.setState({
			sortedRooms: tempRooms
		})
	}
	getRoom = (slug) => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find((room) => {
			//problem may occur here.. removing return
			return room.slug === slug;
		})
		return room;
	}
	render() {
		return (
			<RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
	return function consumerWrapper(props) {
		return <RoomConsumer>
			{
				value => <Component {...props} context={value} />
			}
		</RoomConsumer>
	}
}

export { RoomProvider, RoomConsumer, RoomContext }