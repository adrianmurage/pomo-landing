# PomodoroFocus

A modern, clean Pomodoro timer application built with Astro. Boost your productivity with focused work sessions and scheduled breaks using the Pomodoro Technique.

Live demo: [PomodoroFocus](https://adrianmurage.github.io/pomo-landing/)

## Features

- 🎯 Customizable Pomodoro timer (25/5/15 minute intervals)
- 📋 Task management and tracking
- 🔄 Automatic work/break transitions
- 📊 Session counter and progress tracking
- 🎨 Clean, modern UI design
- 📱 Fully responsive for all devices
- 🔔 Audio notifications
- ⚡ Fast and lightweight

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- Vanilla JavaScript - For timer functionality
- CSS3 - For styling and animations

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/adrianmurage/pomo-landing.git
   cd pomo-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── GetStarted.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── timer.astro
└── package.json
```

## Using the Timer

1. Visit the timer page
2. Select your desired work mode (Pomodoro, Short Break, Long Break)
3. Click "Start" to begin your session
4. Add tasks to track your progress
5. Focus on your work until the timer rings
6. Take a break when prompted

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Adrian Murage ([@adrianmurage](https://github.com/adrianmurage))

## Acknowledgments

- The Pomodoro Technique was developed by Francesco Cirillo
- Icons provided by Feather Icons
- Built with [Astro](https://astro.build)
- Deployed on GitHub Pages

## Development

The project is built with Astro and uses GitHub Actions for continuous deployment to GitHub Pages. Any push to the main branch will trigger an automatic build and deployment.

To contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request