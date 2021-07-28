import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms } = context;
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <RoomFilter />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);