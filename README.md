# Change Password Component

A modern, responsive React component for changing passwords with real-time validation.

## Features

- Modern and clean UI design
- Real-time password validation
- Password visibility toggle
- Password requirements checklist
- Responsive design
- Bootstrap integration

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Technologies Used

- React
- Bootstrap
- React Icons
- Vite

## Usage

```jsx
import ChangePassword from './ChangePassword';

function App() {
  return (
    <div>
      <ChangePassword />
    </div>
  );
}
```

## Password Requirements

- At least 8 characters long
- Contains uppercase letter
- Contains lowercase letter
- Contains a number
- Contains special character
- Different from current password 