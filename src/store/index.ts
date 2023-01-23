import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        Title: 'Guardians',
        Year: '2009',
        Rated: 'Not Rated',
        Released: '24 Jun 2009',
        Runtime: '87 min',
        Genre: 'Horror, Sci-Fi',
        Director: 'Drew Maxwell',
        Writer: 'Drew Maxwell',
        Actors: 'Chris Bell, Benjamin Budd, Tylan Canady',
        Plot: 'Twilight Cove, a small forgotten town, is besieged by hideous creatures summoned into our dimension. It\'s only a matter of time before the army of creatures attacks the rest of civilization and wreaks havoc upon the world. At dusk, a beat-up truck containing a rag-tag team of hardened mercenaries rolls into town, and this is not the first time they\'ve been called in to exterminate; they are part of a secret society that has been operating outside of the government and the public eye for thousands of years. Their mission is to keep our world safe from evil-of our own creation and from beyond.',
        Language: 'English',
        Country: 'United States',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjgyOTkyOTgwMV5BMl5BanBnXkFtZTgwNTM1OTkwMzE@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '3.0/10'
          }
        ],
        Metascore: 'N/A',
        imdbRating: '3.0',
        imdbVotes: '286',
        imdbID: 'tt0486592',
        Type: 'movie',
        DVD: '15 Jul 2008',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Response: 'True'
      },
      {
        Title: 'Bohemian Rhapsody',
        Year: '2018',
        Rated: 'PG-13',
        Released: '02 Nov 2018',
        Runtime: '134 min',
        Genre: 'Biography, Drama, Music',
        Director: 'Bryan Singer',
        Writer: 'Anthony McCarten, Peter Morgan',
        Actors: 'Rami Malek, Lucy Boynton, Gwilym Lee',
        Plot: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
        Language: 'English, British Sign ',
        Country: 'United Kingdom, United States',
        Awards: 'Won 4 Oscars. 48 wins & 80 nominations total',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '60%'
          },
          {
            Source: 'Metacritic',
            Value: '49/100'
          }
        ],
        Metascore: '49',
        imdbRating: '7.9',
        imdbVotes: '543,721',
        imdbID: 'tt1727824',
        Type: 'movie',
        DVD: '22 Jan 2019',
        BoxOffice: '$216,668,042',
        Production: 'N/A',
        Website: 'N/A',
        Response: 'True'
      },
      {
        Title: 'Bill',
        Year: '2015',
        Rated: 'Not Rated',
        Released: '18 Sep 2015',
        Runtime: '94 min',
        Genre: 'Comedy, Family, History',
        Director: 'Richard Bracewell',
        Writer: 'Laurence Rickard, Ben Willbond',
        Actors: 'Mathew Baynton, Simon Farnaby, Martha Howe-Douglas',
        Plot: 'A down on his luck William \'Bill\' Shakespeare decides to pursue his latest dream: to be an aspiring writer. His adventure soon becomes dangerous when he is caught between a act of murder.',
        Language: 'English',
        Country: 'United Kingdom',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjkxOTkzNDgwMF5BMl5BanBnXkFtZTgwNDQxNTg4NzE@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.5/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '90%'
          },
          {
            Source: 'Metacritic',
            Value: '60/100'
          }
        ],
        Metascore: '60',
        imdbRating: '6.5',
        imdbVotes: '2,825',
        imdbID: 'tt2978576',
        Type: 'movie',
        DVD: '18 Nov 2016',
        BoxOffice: 'N/A',
        Production: 'BBC Films',
        Website: 'N/A',
        Response: 'True'
      },
      {
        Title: 'The Avengers',
        Year: '2012',
        Rated: 'PG-13',
        Released: '04 May 2012',
        Runtime: '143 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Joss Whedon',
        Writer: 'Joss Whedon, Zak Penn',
        Actors: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
        Plot: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        Language: 'English, Russian, Hindi',
        Country: 'United States',
        Awards: 'Nominated for 1 Oscar. 38 wins & 80 nominations total',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.0/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '91%'
          },
          {
            Source: 'Metacritic',
            Value: '69/100'
          }
        ],
        Metascore: '69',
        imdbRating: '8.0',
        imdbVotes: '1,391,621',
        imdbID: 'tt0848228',
        Type: 'movie',
        DVD: '25 Sep 2012',
        BoxOffice: '$623,357,910',
        Production: 'N/A',
        Website: 'N/A',
        Response: 'True'
      },
      {
        Title: 'Inception',
        Year: '2010',
        Rated: 'PG-13',
        Released: '16 Jul 2010',
        Runtime: '148 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
        Plot: 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.',
        Language: 'English, Japanese, French',
        Country: 'United States, United Kingdom',
        Awards: 'Won 4 Oscars. 158 wins & 220 nominations total',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.8/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '87%'
          },
          {
            Source: 'Metacritic',
            Value: '74/100'
          }
        ],
        Metascore: '74',
        imdbRating: '8.8',
        imdbVotes: '2,349,837',
        imdbID: 'tt1375666',
        Type: 'movie',
        DVD: '07 Dec 2010',
        BoxOffice: '$292,587,330',
        Production: 'N/A',
        Website: 'N/A',
        Response: 'True'
      },
      {
        Title: 'Guardians of the Galaxy Vol. 2',
        Year: '2017',
        Rated: 'PG-13',
        Released: '05 May 2017',
        Runtime: '136 min',
        Genre: 'Action, Adventure, Comedy',
        Director: 'James Gunn',
        Writer: 'James Gunn, Dan Abnett, Andy Lanning',
        Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista',
        Plot: 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.',
        Language: 'English',
        Country: 'United States',
        Awards: 'Nominated for 1 Oscar. 15 wins & 60 nominations total',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '85%'
          },
          {
            Source: 'Metacritic',
            Value: '67/100'
          }
        ],
        Metascore: '67',
        imdbRating: '7.6',
        imdbVotes: '687,044',
        imdbID: 'tt3896198',
        Type: 'movie',
        DVD: '22 Aug 2017',
        BoxOffice: '$389,813,101',
        Production: 'N/A',
        Website: 'N/A',
        Response: 'True'
      }
    ],
    totalResult: 0,
    currentpage: 1,
    byRelease: 0,
    byRating: 0
  },
  getters: {
    products: state => {
      return state.products
    }
  },
  mutations: {
    async setAllVideosByTitle (state, cond) {
      try {
        const url = 'https://www.omdbapi.com/?apikey=97f54ad&plot=full&s=' + cond.title + '&page=' + state.currentpage
        const response = await fetch(url)
        const result = await response.json()
        if (result.Response === 'True') {
          state.products = result.Search
          state.totalResult = result.totalResults
          state.currentpage = cond.page
          result.Search.forEach(async (item: any, index: number) => {
            try {
              const tempUrl = 'https://www.omdbapi.com/?apikey=97f54ad&i=' + item.imdbID
              const video = await fetch(tempUrl)
              state.products[index] = await video.json()
            } catch (err) {
              console.log(err)
            }
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    setSortType (state, value) {
      if (value === 0) {
        state.byRelease = 0
        state.byRating = 1
      } else {
        state.byRelease = 1
        state.byRating = 0
      }
    }
  },
  actions: {},
  modules: {}
})
