// Iteration 1 (MAP): The directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  //   const unique = [];

  const directors = movies.map(oneMovie => oneMovie.director);
  //   .forEach(el => {
  //     if(!unique.includes(el)){
  //       unique.push(el)
  //     }
  //   })
  //   return unique;
  return directors;
}

// Iteration 2 (FILTER): Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(someMovies) {
  return someMovies.filter(
    eachMovie =>
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
  ).length;
}

// Iteration 3 (REDUCE): All rates average - Get the average of all rates with 2 decimals
function ratesAverage(lotsOfMovies) {
  //  return !lotsOfMovies.length? 0 : Number((lotsOfMovies.reduce((a,b) => b.rate? a + b.rate : a, 0)/lotsOfMovies.length).toFixed(2));
  // this is the one line version

  if (!lotsOfMovies.length) {
    return 0;
  }

  let total = lotsOfMovies.reduce((a, b) => {
    if (b.rate) {
      return a + b.rate;
    } else {
      return a;
    }
  }, 0);

  // you can use Number(), parseInt() or simply plus +
  return Number((total / lotsOfMovies.length).toFixed(2));
}
// Iteration 4 (FILTER): Drama movies - Get the average of Drama Movies
function dramaMoviesRate(someMovies) {
  let drMovies = someMovies.filter(eachMovie =>
    eachMovie.genre.includes('Drama')
  );
  return ratesAverage(drMovies);
}

// Iteration 5 (SORT): Ordering by year - Order by year, ascending (in growing order)
function orderByYear(lotsOfMovies) {
  let newArray = [...lotsOfMovies];
  // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
  newArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return newArray;
}

// Iteration 6 (SORT, MAP, SLICE): Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(lotsOfMovies) {
  return [...lotsOfMovies]
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(eachMovie => eachMovie.title)
    .slice(0, 20);
}
// BONUS - Iteration 7 (MAP): Time Format - Turn duration of the movies from hours to minutes

// "2h"
function convertHours(hourString) {
  // ["2", ""]
  let calculateHour = hourString.split('h');
  return calculateHour[0] * 60;
  // "2" * 60
  // 120
}

// "33min"
function convertMinutes(minuteString) {
  // ["33", ""]
  let calculateMinutes = minuteString.split('min');
  return Number(calculateMinutes[0]);
  // return +(calculateMinutes[0]); // this is alternative fancier way
  // 33
}

function convertDuration(duration) {
  let timePieces = duration.split(' ');
  // ["2h", "33min"]
  // ["2h"]
  // ["33min"]

  let minutes = timePieces.reduce((sum, onePiece) => {
    if (onePiece.includes('h')) {
      return sum + convertHours(onePiece);
    }
    return sum + convertMinutes(onePiece);
  }, 0);

  return minutes;
}

function turnHoursToMinutes(movies) {
  let newCentArray = movies.map(oneMovie => {
    let newMovie = {};
    newMovie.title = oneMovie.title;
    newMovie.year = oneMovie.year;
    newMovie.director = oneMovie.director;
    newMovie.duration = convertDuration(oneMovie.duration);
    newMovie.genre = oneMovie.genre;
    newMovie.rate = oneMovie.rate;

    return newMovie;
  });

  return newCentArray;
}

// Another possible approach could be:
// function turnHoursToMinutes(lotsOfMovies) {
//   return lotsOfMovies.map(reformat);
// }

// function reformat(oneSingleMovieObject) {
//   let newThing = { ...oneSingleMovieObject };
//   let timeString = oneSingleMovieObject.duration;
//   let hasHours = timeString.includes('h');
//   let hasMinutes = timeString.includes('min');
//   let timeArray, hours, minutes, newTime;

//   if (hasMinutes && hasHours) {
//     timeArray = timeString.split('h');
//     hours = Number(timeArray[0]);
//     minutes = Number(timeArray[1].substr(1, 2));
//     newTime = hours * 60 + minutes;
//   } else if (hasMinutes) {
//     minutes = parseInt(timeString.substr(0, 2));
//     newTime = minutes;
//   } else {
//     hours = parseInt(timeString);
//     newTime = hours * 60;
//   }
//   newThing.duration = newTime;
//   return newThing;
// }

// BONUS - Iteration 8 (FOREACH): Best yearly rate average - Best yearly rate average

function bestYearAvg(lotsOfMovies) {
  if (!lotsOfMovies.length) return null;

  let masterObject = {};

  lotsOfMovies.forEach(eachMovie => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`;
}
