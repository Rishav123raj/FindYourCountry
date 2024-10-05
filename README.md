# Find Your Country

## 🌍 Overview
Find Your Country is an interactive web application that allows users to explore information about different countries around the world. Built with vanilla JavaScript, HTML, and CSS, this project utilizes the REST Countries API to provide detailed information about countries, including their flags, population, region, capital, and more.

Live Demo: https://find-your-country-seven.vercel.app/

## ✨ Features
- **Country Listing**: View all countries in a responsive grid layout
- **Search Functionality**: Search for specific countries by name
- **Region Filtering**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- **Detailed Information**: Click on a country to see detailed information including:
  - Native name
  - Population
  - Region and Sub-region
  - Capital
  - Top Level Domain
  - Currencies
  - Languages
  - Border countries (with clickable links)
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- REST Countries API
- Font Awesome Icons
- Google Fonts (Nunito)

## 📋 Project Structure
```
world-countries-explorer/
├── index.html
├── country.html
├── style.css
├── country.css
├── script.js
├── country.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- Internet connection (to fetch data from the REST Countries API)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/world-countries-explorer.git
   ```
2. Navigate to the project directory
   ```bash
   cd world-countries-explorer
   ```
3. Open `index.html` in your web browser
   ```bash
   # For macOS
   open index.html
   
   # For Linux
   xdg-open index.html
   
   # For Windows
   start index.html
   ```

Alternatively, you can use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🎯 Usage
1. **Browse Countries**: Scroll through the homepage to view all countries
2. **Search**: Use the search bar to find specific countries by name
3. **Filter by Region**: Use the dropdown to filter countries by continent
4. **View Details**: Click on any country card to see detailed information
5. **Toggle Theme**: Click the moon icon to switch between light and dark modes
6. **Explore Border Countries**: On the detail page, click on border country tags to navigate to those countries

## 🧪 Code Examples

### Theme Toggle Implementation
```javascript
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
```

### CSS Theme Variables
```css
:root {
  --background-color: #fafafa;
  --text-color: #111517;
  --element-color: #ffffff;
  --box-shadow: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --background-color: #202c37;
  --text-color: #ffffff;
  --element-color: #2b3945;
  --box-shadow: rgba(0, 0, 0, 0.2);
}
```

## 🤝 Contributing
Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 To-Do
- [ ] Add error handling for failed API requests
- [ ] Implement loading states
- [ ] Add unit tests
- [ ] Implement caching for API responses
- [ ] Add keyboard navigation support

## 🐛 Known Issues
- Border countries might load slowly due to multiple API calls
- Search functionality is case-sensitive

## 📄 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments
- [REST Countries API](https://restcountries.com/) for providing the country data
- [Frontend Mentor](https://www.frontendmentor.io/) for the design inspiration
- Font Awesome for the icons
- Google Fonts for the Nunito font family
  
⭐️ If you found this project helpful, please consider giving it a star!
