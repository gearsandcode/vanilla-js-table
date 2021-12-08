 /* Javascript */
var movieDB = {
    'movies': [
        {
            title: "The Shawshank Redemption",
            rating: "9.2",
            year: "1994",
        },
        {
            title: "The Godfather",
            rating: "9.2",
            year: "1972",
        },
        {
            title: "The Godfather II",
            rating: "9.0",
            year: "1974",
        },
        {
            title: "The Dark Knight",
            rating: "9.0",
            year: "2008",
        },
        {
            title: "12 Angry Men",
            rating: "8.9",
            year: "1957",
        },
        {
            title: "Schindlers List",
            rating: "8.9",
            year: "1993",
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            rating: "8.9",
            year: "2003",
        },
        {
            title: "Pulp Fiction",
            rating: "8.9",
            year: "1994",
        },
        {
            title: "The Good, the Bad and the ugly",
            rating: "8.8",
            year: "1966",
        },
        {
            title: "Fight Club",
            rating: "8.8",
            year: "1999",
        }
    ]
}

let movieTitleAscSort = false;
let movieRatingAscSort = false;
let movieYearAscSort = false;

function sortTable(col, asc = true){
    const table = document.getElementById('movieTable')
    const direction = asc ? 1 : -1;
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a,b) => {
        const aCol = a.querySelector(`td:nth-child(${ col + 1})`).textContent.trim();
        const bCol = b.querySelector(`td:nth-child(${ col + 1})`).textContent.trim();

        return aCol > bCol ? (1 * direction ) : (-1 * direction);
    });

    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

    tbody.append(...sortedRows);

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${ col + 1 })`).classList.toggle('th-sort-asc', asc);
    table.querySelector(`th:nth-child(${ col + 1 })`).classList.toggle('th-sort-desc', !asc);
}

buildMovieTable(movieDB);

document.querySelectorAll('th').forEach(th => {
    console.log('th', th)
    th.addEventListener('click', () => {
        const headerIndex = Array.prototype.indexOf.call(th.parentElement.children, th);
        const currentIsAsc = th.classList.contains('th-sort-asc');
        console.log('headerIndex', headerIndex)
        console.log('currentIsAsc', currentIsAsc)
        sortTable(headerIndex, !currentIsAsc);
    })
})


// sortTable(0);

function buildMovieTable(data){
    var table = document.getElementById('movieTable');
    table.innerHTML = `
    <thead>
    <tr class="tableHead">
        <th id="movieTitle">Name</th>
        <th id="movieRating">Rating</th>
        <th id="movieYear">Year</th>
    </tr>
    </thead>
    <tbody id="movieBody">`;
    var tBody = document.getElementById('movieBody');
    for (let i = 0; i < data.movies.length; i++){
        var row = `
        <tr>
            <td>${data.movies[i].title}</td>
            <td>${data.movies[i].rating}</td>
            <td>${data.movies[i].year}</td>
        </tr>`
        tBody.innerHTML += row;
    }
    table.innerHTML += `</tbody>`;
}