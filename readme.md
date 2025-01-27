# Collaborative Drawing Application

This application is a browser-based collaborative drawing tool that allows multiple users to draw on a shared canvas in real-time. Users can use various tools such as pencil, eraser, sticky notes, and even upload images. The application also includes undo/redo functionality and allows users to download their creations.

---

## Features

### Drawing Tools:
- **Pencil Tool**: Draw freehand with adjustable width and color options.
- **Eraser Tool**: Erase parts of the drawing with adjustable width.

### Sticky Notes:
- Add sticky notes with text and images.
- Drag and reposition notes anywhere on the canvas.
- Minimize or remove sticky notes as needed.

### Undo/Redo Functionality:
- Easily undo or redo actions to correct mistakes.

### Download:
- Save the canvas as an image (JPEG format).

### Upload:
- Add images to the canvas from your device.

### Real-Time Collaboration:
- Multiple users can draw simultaneously on the same canvas with real-time updates using WebSocket.

---

## How to Use

### Setup:
1. Open the application in a modern web browser.
2. Ensure WebSocket server is set up for real-time collaboration.

### Drawing:
1. Use the **Pencil Tool** to draw by selecting a color and adjusting the width.
2. Use the **Eraser Tool** to erase portions of the drawing.

### Sticky Notes:
1. Click the sticky notes button to add a new note.
2. Use the header of the note to drag and reposition it.
3. Minimize or remove notes using the corresponding buttons in the header.

### Download:
1. Click the download button to save the current canvas as a JPEG file.

### Undo/Redo:
1. Use the undo and redo buttons to step back or forward through your drawing actions.

### Upload:
1. Click the upload button to select and add an image from your device.

---

## Code Overview

### Main Components:
- **Canvas Initialization**: The canvas is set to fit the entire browser window.
- **Drawing Events**: `mousedown`, `mousemove`, and `mouseup` events handle drawing and erasing.
- **Sticky Notes**: Functionality to add, drag, minimize, and remove notes.
- **Real-Time Updates**: WebSocket events handle drawing synchronization among multiple users.
- **Undo/Redo Logic**: Maintains a stack of actions to manage undo and redo functionality.

### Key Functions:
- **`beginPath`**: Starts a new path for drawing.
- **`drawstroke`**: Draws a line to the given coordinates with the specified color and width.
- **`createSticky`**: Creates and appends a sticky note to the canvas.
- **`draganddrop`**: Handles dragging of sticky notes.
- **`undoredufuction`**: Renders the canvas state based on the undo/redo tracker.

---

## Dependencies

- **WebSocket**: For real-time collaboration.
- **Browser Support**: Modern browsers with support for HTML5 and JavaScript.

---

## Future Enhancements

- **Mobile Support**: Optimize for touch devices.
- **Custom Shapes**: Add support for drawing predefined shapes (e.g., rectangles, circles).
- **Color Picker**: Advanced color selection tool.
- **Multi-Canvas Support**: Allow users to switch between multiple canvases.
- **User Management**: Add authentication for personalized sessions.
