# 🌌 Exoplanet Hunter AI - Clean Architecture Documentation

## NASA Space Apps Challenge 2025
### A World Away: Hunting for Exoplanets with AI

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Team](#team)

---

## 🎯 Project Overview

**Exoplanet Hunter AI** is an advanced web application that leverages artificial intelligence and machine learning to analyze astronomical data and identify exoplanets. The application provides an intuitive interface for researchers, students, and citizen scientists to interact with exoplanet detection algorithms.

### Key Features
- 🤖 AI-powered exoplanet detection
- 📊 Real-time transit light curve visualization
- 📈 Model performance metrics and analytics
- 👤 User profiles with analysis history
- 🏆 Achievement system for gamification
- 📰 Latest exoplanet news integration
- 💡 Educational facts carousel
- 🔐 Authentication system (login/signup)

---

## 🏗️ Architecture

This project follows **Clean Architecture** principles with clear separation of concerns:

```
┌─────────────────────────────────────────────┐
│              Presentation Layer             │
│  (Pages, Components, UI Logic)              │
├─────────────────────────────────────────────┤
│           Business Logic Layer              │
│  (Hooks, Utils, State Management)           │
├─────────────────────────────────────────────┤
│              Data Layer                     │
│  (Constants, Types, Mock Data)              │
└─────────────────────────────────────────────┘
```

### Design Patterns Used
- **Component-Based Architecture**: Reusable, modular components
- **Custom Hooks**: Encapsulated logic for state management
- **Barrel Exports**: Clean import statements
- **Separation of Concerns**: Clear boundaries between UI and logic
- **Type Safety**: TypeScript interfaces for data structures

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── common/             # Shared components across pages
│   │   ├── StarsBg.tsx     # Animated starry background
│   │   ├── Header.tsx      # Application header
│   │   ├── Footer.tsx      # Application footer
│   │   ├── Modals.tsx      # Modal dialogs
│   │   └── index.ts        # Barrel export
│   │
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── TransitLightCurve.tsx    # Transit data visualization
│   │   ├── AIPrediction.tsx         # AI confidence display
│   │   ├── QuickActions.tsx         # Quick action buttons
│   │   ├── ModelSettings.tsx        # AI model configuration
│   │   ├── TodayStats.tsx           # Daily statistics
│   │   ├── ModelPerformance.tsx     # Performance metrics
│   │   ├── NewsPanel.tsx            # Latest news
│   │   ├── FactsCarousel.tsx        # Educational facts
│   │   ├── ActionButtons.tsx        # Export/share buttons
│   │   ├── PlanetVisualization.tsx  # 3D planet animation
│   │   └── index.ts                 # Barrel export
│   │
│   └── profile/            # Profile-specific components
│       └── index.ts
│
├── pages/                  # Main application views
│   └── LoginPage.tsx       # Login page component
│
├── hooks/                  # Custom React hooks
│   ├── useCyclicIndex.ts   # Auto-cycling carousel hook
│   ├── useModal.ts         # Modal state management hook
│   └── index.ts            # Barrel export
│
├── constants/              # Static data and configuration
│   └── index.ts            # All app constants
│
├── types/                  # TypeScript type definitions
│   └── index.ts            # All type interfaces
│
├── utils/                  # Helper functions
│
├── App.tsx                 # Main application component
└── index.js                # Application entry point
```

---

## 📚 Component Documentation

### Common Components

#### `StarsBg`
**Purpose**: Creates an animated starry background effect  
**Usage**:
```tsx
import { StarsBg } from './components/common';
<StarsBg />
```

#### `Header`
**Purpose**: Main application navigation header  
**Props**:
- `isLoggedIn: boolean` - User authentication status
- `userData?: UserData` - User profile data
- `onAboutClick: () => void` - About modal handler
- `onSignInClick: () => void` - Sign in navigation
- `onProfileClick: () => void` - Profile navigation

#### `Footer`
**Purpose**: Application footer with team and social links  
**Usage**:
```tsx
import { Footer } from './components/common';
<Footer />
```

#### `AboutUsModal`
**Purpose**: Modal displaying team information  
**Props**:
- `isOpen: boolean` - Modal visibility state
- `onClose: () => void` - Close handler

#### `ShareModal`
**Purpose**: Success notification for sharing  
**Props**:
- `isOpen: boolean` - Modal visibility state

### Dashboard Components

#### `TransitLightCurve`
**Purpose**: SVG visualization of exoplanet transit data  
**Props**:
- `isAnalyzing: boolean` - Analysis state

**Features**:
- Real-time visualization
- Loading state
- Transit event highlighting

#### `AIPrediction`
**Purpose**: Displays AI model predictions and confidence  
**Props**:
- `confidence: number` - Confidence percentage (0-100)

**Features**:
- Confidence bar visualization
- Key metrics display (Transit Depth, Orbital Period, Signal/Noise)
- Color-coded status indicators

#### `QuickActions`
**Purpose**: Quick access buttons for analysis  
**Props**:
- `onAnalyzeDemo: () => void` - Demo analysis handler

#### `ModelSettings`
**Purpose**: AI model hyperparameter configuration  
**Features**:
- Model type selection
- Learning rate adjustment
- Epochs configuration

#### `ModelPerformance`
**Purpose**: Displays AI model performance metrics  
**Features**:
- Accuracy visualization
- Precision metrics
- Recall statistics

#### `NewsPanel`
**Purpose**: Latest exoplanet news from external sources  
**Data Source**: `COMMUNITY_NEWS` constant

#### `FactsCarousel`
**Purpose**: Educational facts about exoplanets  
**Props**:
- `currentIndex: number` - Current fact index
- `onPrevious: () => void` - Previous fact handler
- `onNext: () => void` - Next fact handler

**Features**:
- Auto-cycling (7 seconds)
- Manual navigation
- Progress indicators

---

## 🔧 Custom Hooks

### `useCyclicIndex`
**Purpose**: Auto-cycling through array items  
**Parameters**:
- `items: any[]` - Array to cycle through
- `interval?: number` - Cycle interval in ms (default: 7000)

**Returns**:
```typescript
{
  currentIndex: number,
  next: () => void,
  previous: () => void,
  setIndex: (index: number) => void
}
```

**Example**:
```tsx
const factsCarousel = useCyclicIndex(EXOPLANET_FACTS, 7000);
```

### `useModal`
**Purpose**: Manage modal open/close state  
**Parameters**:
- `initialState?: boolean` - Initial state (default: false)

**Returns**:
```typescript
{
  isOpen: boolean,
  open: () => void,
  close: () => void,
  toggle: () => void
}
```

**Example**:
```tsx
const aboutModal = useModal();
<AboutUsModal isOpen={aboutModal.isOpen} onClose={aboutModal.close} />
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd ECI-Centauri-Frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Install additional dependencies** (if not already installed):
```bash
npm install --save-dev @types/react @types/react-dom lucide-react
```

4. **Start the development server**:
```bash
npm start
```

5. **Open your browser**:
Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Running Tests

```bash
npm test
```

---

## 📝 Development Guidelines

### Component Creation

1. **Always define TypeScript interfaces** for props:
```tsx
interface MyComponentProps {
  title: string;
  onAction: () => void;
}
```

2. **Use functional components** with React.FC:
```tsx
export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
  // Component logic
};
```

3. **Document components** with JSDoc comments:
```tsx
/**
 * MyComponent - Brief description
 * NASA Space Apps Challenge 2025
 */
```

### File Naming Conventions

- **Components**: PascalCase with `.tsx` extension
  - Example: `TransitLightCurve.tsx`
- **Hooks**: camelCase with `use` prefix
  - Example: `useCyclicIndex.ts`
- **Constants**: UPPER_SNAKE_CASE
  - Example: `EXOPLANET_FACTS`
- **Types**: PascalCase
  - Example: `UserData`, `ViewType`

### Import Organization

```tsx
// 1. React and external libraries
import React, { useState } from 'react';
import { Icon } from 'lucide-react';

// 2. Internal components
import { MyComponent } from './components';

// 3. Hooks
import { useMyHook } from './hooks';

// 4. Constants and types
import { MY_CONSTANT } from './constants';
import { MyType } from './types';
```

### Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for imports, template literals for strings
- **Semicolons**: Always use semicolons
- **Trailing commas**: Use in multi-line objects/arrays

---

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

### Color Palette
- **Primary**: Purple (`purple-500`, `purple-600`)
- **Secondary**: Blue (`blue-500`, `blue-600`)
- **Background**: Slate (`slate-800`, `slate-900`)
- **Success**: Green (`green-400`, `green-500`)
- **Warning**: Yellow (`yellow-400`, `yellow-500`)
- **Error**: Red (`red-400`, `red-500`)

### Common Classes
```css
/* Glassmorphism effect */
.backdrop-blur-lg

/* Gradient backgrounds */
.bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900

/* Rounded corners */
.rounded-xl (12px), .rounded-2xl (16px)

/* Borders */
.border border-purple-500/20 (20% opacity)
```

---

## 📊 Data Flow

```
User Interaction
      ↓
  Page Component
      ↓
  Event Handler
      ↓
  State Update (useState / Custom Hook)
      ↓
  Re-render Child Components
      ↓
  Updated UI
```

### Example: Demo Analysis Flow

1. User clicks "Analyze Demo Planet" button
2. `QuickActions` component calls `onAnalyzeDemo` prop
3. `App.tsx` receives the callback and sets `isAnalyzing` to `true`
4. `TransitLightCurve` component receives updated prop
5. Loading animation displays
6. After 2 seconds, `isAnalyzing` is set to `false`
7. Results are displayed

---

## 🔐 Authentication Flow (Future Implementation)

```
Login Page → Validate Credentials → API Call → Set Auth State → Redirect to Dashboard
```

Currently uses mock authentication. Future implementation will integrate with:
- JWT tokens
- Secure HTTP-only cookies
- OAuth providers (Google, GitHub)
- Password reset functionality

---

## 🧪 Testing Strategy

### Component Testing
```tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('renders component correctly', () => {
  render(<MyComponent title="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});
```

### Hook Testing
```tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from './useModal';

test('modal opens and closes', () => {
  const { result } = renderHook(() => useModal());
  
  act(() => {
    result.current.open();
  });
  
  expect(result.current.isOpen).toBe(true);
});
```

---

## 🌟 Future Enhancements

### Phase 1: Core Features
- [ ] Real API integration with exoplanet datasets
- [ ] File upload functionality (.csv, .fits)
- [ ] Real-time ML model training
- [ ] Export functionality (CSV, XLSX, PDF)

### Phase 2: Advanced Features
- [ ] Profile page implementation
- [ ] Analysis history with filtering
- [ ] Achievement system
- [ ] Social sharing integration
- [ ] Dark/Light theme toggle

### Phase 3: Community Features
- [ ] User comments and discussions
- [ ] Collaborative analysis
- [ ] Leaderboard system
- [ ] Research paper citations

---

## 👥 Team

### ECI Centauri Team
- **Ana María Rodríguez** - [@anamaria-rodriguez](https://github.com/anamaria-rodriguez)
- **Carlos Andrés Gómez** - [@carlos-gomez](https://github.com/carlos-gomez)
- **Diana Patricia López** - [@diana-lopez](https://github.com/diana-lopez)
- **Juan Sebastián Torres** - [@juan-torres](https://github.com/juan-torres)
- **María Fernanda Castro** - [@maria-castro](https://github.com/maria-castro)
- **Santiago Muñoz Silva** - [@santiago-munoz](https://github.com/santiago-munoz)

**Institution**: Escuela Colombiana de Ingeniería Julio Garavito  
**Country**: 🇨🇴 Colombia

---

## 📞 Contact & Links

- **Website**: [https://www.escuelaing.edu.co](https://www.escuelaing.edu.co/es)
- **Instagram**: [@escuelaing](https://www.instagram.com/escuelaing/)
- **Facebook**: [EscuelaIng](https://www.facebook.com/EscuelaIng/)
- **YouTube**: [Escuela Colombiana de Ingeniería](http://www.youtube.com/@escuelacolingenieria)
- **NASA Challenge**: [View Challenge](https://www.spaceappschallenge.org/2025/challenges/a-world-away-hunting-for-exoplanets-with-ai/)

---

## 📄 License

This project is part of the NASA Space Apps Challenge 2025. See `LICENSE` file for details.

---

## 🙏 Acknowledgments

- NASA for providing open-source exoplanet datasets
- Kepler, K2, and TESS mission teams
- Space Apps Challenge organizers
- Open-source community

---

**Built with ❤️ by ECI Centauri Team**  
**NASA Space Apps Challenge 2025**

