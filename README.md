# Collaborative Drawing Board

This project is a **Collaborative Drawing Board**, allowing multiple users to draw on a shared canvas in real time. Users can draw with different colors, adjust pencil or eraser widths, undo/redo their actions, and even download the final drawing. The app uses **Node.js** with **Socket.IO** for real-time communication.

---

## Features

1. **Real-Time Collaboration**
   - Multiple users can draw simultaneously, with their actions reflected live on other users' canvases.

2. **Pencil and Eraser Tools**
   - Change pencil color.
   - Adjust pencil and eraser widths dynamically.

3. **Undo/Redo Functionality**
   - Tracks user actions to allow undoing and redoing drawing steps.

4. **Download Canvas**
   - Save the canvas as an image (e.g., `board.jpg`) to your local machine.

5. **Responsive Canvas**
   - Automatically adjusts to the full width and height of the browser window.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd collaborative-drawing-board
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## File Structure

```
.
├── app.js               # Main server file
├── Public               # Static files (HTML, CSS, JS)
│   ├── index.html       # Main HTML file
│   ├── styles.css       # CSS for styling
│   └── script.js        # Client-side JavaScript
├── package.json         # Node.js dependencies
└── README.md            # Project documentation
```

---

## How It Works

1. **Server**:
   - The server is built with Node.js and uses **Socket.IO** for real-time communication.
   - It listens for events such as `beginPath`, `drawstroke`, and `undoredufuction` and broadcasts these events to all connected clients.

2. **Client**:
   - The client-side JavaScript handles the canvas logic, such as drawing, erasing, and undo/redo actions.
   - When a user performs an action (e.g., drawing), the corresponding event is emitted to the server and broadcasted to all other connected clients.

---

## Events

### Client-Side Events
- `beginPath`: Starts a new path at the given coordinates.
- `drawstroke`: Draws a stroke on the canvas.
- `undoredufuction`: Handles undo and redo functionality.

### Server-Side Events
- `connection`: Handles new client connections.
- `beginPath`: Broadcasts the start of a new path.
- `drawstroke`: Broadcasts a drawing stroke.
- `undoredufuction`: Broadcasts undo/redo data.

---

## Known Issues

1. **Canvas Sync Issues**:
   - If a user refreshes their browser, they lose the current drawing state.

2. **Scalability**:
   - For larger-scale use, consider adding persistence (e.g., saving canvas states to a database).

---

## Future Improvements

1. **Persistence**:
   - Save the canvas state to allow users to reload it after a refresh.

2. **User-Specific Features**:
   - Different colors for different users to distinguish their drawings.

3. **Mobile Optimization**:
   - Improve the UI and functionality for mobile devices.

4. **Advanced Drawing Tools**:
   - Add shapes, text, and fill tools.

---



## Author

Developed by [Your Name].

