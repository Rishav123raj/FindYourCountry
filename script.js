const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')
const moonIcon = themeChanger.querySelector('i')

let allCountriesData

// Theme initialization
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
    updateThemeDisplay(savedTheme)
}

function updateThemeDisplay(theme) {
    const themeText = themeChanger.childNodes[1]
    if (theme === 'dark') {
        moonIcon.classList.remove('fa-regular')
        moonIcon.classList.add('fa-solid')
        themeText.textContent = ' Light Mode'
    } else {
        moonIcon.classList.remove('fa-solid')
        moonIcon.classList.add('fa-regular')
        themeText.textContent = ' Dark Mode'
    }
}

// Fetch and render countries
fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        renderCountries(data)
        allCountriesData = data
    })

filterByRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
        .then((res) => res.json())
        .then(renderCountries)
})

function renderCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach((country) => {
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `/country.html?name=${country.name.common}`
        countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name.common} flag" />
      <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital?.[0]}</p>
      </div>
    `
        countriesContainer.append(countryCard)
    })
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const filteredCountries = allCountriesData.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    )
    renderCountries(filteredCountries)
})

// Theme toggle functionality
themeChanger.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeDisplay(newTheme)
})

// Initialize theme on page load
initializeTheme()