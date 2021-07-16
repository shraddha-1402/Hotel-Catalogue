import React from 'react';
import { RoomContext } from '../Context';
import { useContext } from 'react';
import Title from './Title';

let getUnique = (items, value) => {
  return [...new Set(items.map(item => {
    return item[value];
  }))]
}

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms } = context;

  //get unique type
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((type, index) => {
    return <option value={type} key={index}>{type}</option>
  })

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* start select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/*select capacity end*/}
        {/* start guests type */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}>
            {people}
          </select>
        </div>
        {/*select capacity end*/}
        {/*room price start*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control">
          </input>
        </div>
        {/*room price end*/}
        {/*room size start*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"></input>
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"></input>
          </div>
        </div>
        {/*room size end*/}
        {/*extras start*/}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/*extras end*/}

      </form>
    </section>
  )
}
