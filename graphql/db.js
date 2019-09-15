let movies = [
  {
    id: "0",
    name: "Nicolas",
    score: 18
  },
  {
    id: "1",
    name: "Jisu",
    score: 18
  },
  {
    id: "2",
    name: "Japan Guy",
    score: 18
  },
  {
    id: "3",
    name: "Daal",
    score: 18
  },
  {
    id: "4",
    name: "JD",
    score: 18
  },
  {
    id: "5",
    name: "moondaddi",
    score: 18
  },
  {
    id: "6",
    name: "flynn",
    score: 18
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.fileter(movie => movie.id !== String(id));

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
