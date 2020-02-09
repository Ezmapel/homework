// Create a nested object with at least 10 :key: s. Use a const to bind (assign) it to a variable.
const stuffInRoom = {
  bikes: {
    number: 2,
    Ethan: "Bridgestone",
    Kat: "Masi"
  },
  pictures: {
    mantel: {
      left: "acorn",
      right: "horses"
    },
    bookshelf: "flowers",
    wall: "New Zealand photo"
  },
  books: {
    title: {
      First: "The Once & Future King",
      Second: "Guns, Germs, & Steel",
      Third: "The Tao of Pooh"
    }
  },
  instruments: {
    First: "guitar",
    Second: "keyboard"
  },
  furniture: {
    First: "table",
    Second: "chairs"
  },
  plants: {
    floor: "Snake plant",
    desk: "Mini pine tree"
  },
  electronics: "Speaker system",
  games: {
    card: "Skip-Bo",
    other: "Bananagrams"
  },
  candles: "some sort of fruity smelling one",
  maps: "Appalachian Trail"
};

console.log(stuffInRoom);

// Now, add a new :key: using =
stuffInRoom.furniture.Third = "bookshelf";

console.log(stuffInRoom);

// Mutate the value of one of the existing :key: s using =
stuffInRoom.candles = "Peach Mist...apparently";

console.log(stuffInRoom);

// Declare another variable and bind it to a string that corresponds with one of your object’s :key: s.
const deskPlantReassign = "desk";

console.log(deskPlantReassign);

// Use bracket notation with this string variable to reassign that :key: ’s value.
stuffInRoom.plants[deskPlantReassign] = "Norfolk Pine";

console.log(stuffInRoom);
