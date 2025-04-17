# Pokédex Web Application

A interactive web-based Pokédex that simulates the classic Pokémon device. This application allows you to browse through the first generation of Pokémon (1-151) with a nostalgic interface.

![Pokedex Preview](pokedex.png)

## Features

- 📱 Classic Pokédex design with opening/closing cover
- 🔍 Search functionality through the green screen input
- 🎮 D-pad navigation controls:
  - Up/Down: Jump 10 Pokémon at a time
  - Left/Right: Navigate one by one
- 🖼️ Dynamic display of Pokémon sprites and information
- 🎨 Background color changes based on Pokémon type
- 💫 Smooth animations and transitions

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- [PokeAPI](https://pokeapi.co/) for Pokémon data

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pokedex.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pokedex
   ```

3. Open the project:
   - If you have Python installed:
     ```bash
     python -m http.server 8000
     ```
   - If you have Node.js installed:
     ```bash
     npx serve
     ```
   - Or simply open the `index.html` file in your browser

## How to Use

1. **Opening/Closing the Pokédex**
   - Click on the red cover to open/close the Pokédex

2. **Navigating Pokémon**
   - Use the D-pad arrows to navigate:
     - ⬆️ Up: +10 Pokémon
     - ⬇️ Down: -10 Pokémon
     - ⬅️ Left: Previous Pokémon
     - ➡️ Right: Next Pokémon

3. **Quick Search**
   - Type a number (1-151) in the green screen
   - Press Enter to jump to that Pokémon

## API Usage

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data. The API is free to use and doesn't require authentication for basic usage.

## Browser Support

The application works best in modern browsers that support:
- CSS Grid
- CSS Flexbox
- CSS Transforms
- Fetch API

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Pokémon and Pokédex are registered trademarks of Nintendo
- Thanks to [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- Inspired by the original Pokédex design from the Pokémon series 
