import ClassRoom from './0-classroom';

function initializeRooms() {
  const classRooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return classRooms;
}

export default initializeRooms;
