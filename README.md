# Modern Chat Interface

This project is a modern, responsive chat interface built with Next.js and React. It features a sleek dark mode design with interactive elements and real-time chat functionality.

## Features

- 🌓 Dark mode design with pink accents
- 💬 Multiple chat conversations
- 🔄 Real-time message updates
- 📱 Responsive layout (mobile-friendly)
- 🖼️ Toggle for chat images
- 🤖 "Create new bot" functionality (UI only)
- ♿ Accessibility features

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/chat-interface.git
   cd chat-interface
   

2. Install dependencies:

   npm install
   # or
   yarn install
 

3. Run the development server:
   
   npm run dev
   # or
   yarn dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- app: Contains the main page component
- components: Reusable React components
- types: TypeScript type definitions
- public: Static assets

Key components:
- ChatLayout: Main layout component
- ChatList: Sidebar with chat conversations
- ChatWindow: Main chat interface

## Cool Things About This Approach

1. State Management: Uses React's useState for local state management, demonstrating how complex UIs can be built with just React hooks.

2. TypeScript: Fully typed for better developer experience and code relability.

3. Modular Design: Components are modular and reusable, making the codebase scalable and maintainable.

4. Accessibility: Implements keyboard navigation and proper ARIA attributes for better accessibility.

5. Realistic Dummy Data: Uses realistic placeholder data to simulate a real chat application.

6. Tailwind CSS: Utilizes Tailwind for rapid UI development and consistent styling.

7. Next.js App Router: Leverages the latest Next.js features for optimal performance and SEO.

8. Lucide Icons: Integrates Lucide icons for a modern, consistent icon set.

## Customization

- To change the color scheme, modify the Tailwind config file.
- To add new features, extend the Chat and Message types in `types/chat.ts`.
- To integrate with a backend, update the handleSendMessage function in ChatLayout.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


## Deployment

This is deployed on vercel https://fezbhakcu4d1knks.vercel.app/

