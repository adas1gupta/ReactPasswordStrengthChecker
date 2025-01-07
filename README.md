# React Password Strength Checker

A simple React application that evaluates password strength in real-time as users type. The application provides visual feedback indicating whether a password is weak, medium, or strong based on specific criteria.

## Features

- Real-time password strength evaluation
- Three levels of password strength:
  - Weak: Less than 6 characters
  - Medium: Contains both letters and numbers
  - Strong: At least 8 characters and contains both letters and numbers
- Simple and intuitive user interface
- Built with React and Vite

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 18.18.0 or higher)
- npm (version 8.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/adas1gupta/ReactPasswordStrengthChecker.git
cd reactpasswordstrengthchecker
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - Main application component containing the password strength checker logic
- `index.html` - Entry point HTML file
- `vite.config.js` - Vite configuration file
- `package.json` - Project dependencies and scripts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Future Improvements

- Add password requirements visualization
- Implement more sophisticated password strength criteria
- Add password confirmation field
- Include password visibility toggle
- Add support for special characters in strength evaluation
- Implement password strength indicator bar