import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f4f9', // Light greyish background for the overall app
      paper: '#ffffff',   // White background for cards and modals
    },
    primary: {
      main: '#263238',     // Charcoal gray for primary actions (serious and professional)
      contrastText: '#fff' // White text for contrast
    },
    secondary: {
      main: '#00796b',     // Teal for secondary actions (fresh, modern)
      contrastText: '#fff' // White text for contrast
    },
    error: {
      main: '#d32f2f',     // Red for error states (strong and clear)
    },
    text: {
      primary: '#212121',  // Dark grey for primary text
      secondary: '#757575', // Medium grey for secondary text
    },
    action: {
      active: '#00796b',    // Active state for icons in teal
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`, // A clean, modern sans-serif font
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#263238',   // Charcoal gray for main headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#263238',   // Charcoal gray for secondary headings
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#00796b',   // Teal for tertiary headings
    },
    body1: {
      fontSize: '1rem',
      color: '#212121', // Dark grey for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#757575', // Medium grey for smaller body text
    },
    button: {
      textTransform: 'none', // Keep button text normal case
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for a clean look
          padding: '12px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.12)', // Subtle shadow on hover
            transform: 'scale(1.05)', // Slight scaling effect on hover
          },
        },
        containedPrimary: {
          backgroundColor: '#263238', // Charcoal for primary button
          '&:hover': {
            backgroundColor: '#1c313a', // Darker charcoal on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#00796b', // Teal for secondary button
          '&:hover': {
            backgroundColor: '#004d40', // Darker teal on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          padding: '20px',
          backgroundColor: '#ffffff', // Clean white background
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '10px', // Rounded text fields
            backgroundColor: '#fafafa', // Light grey background
            color: '#212121', // Dark text inside text fields
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#f1f1f1', // Light grey for table headers
            color: '#212121', // Dark grey for header text
            fontWeight: 600,
          },
          '& td': {
            color: '#757575', // Medium grey for table data
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#263238', // Charcoal for the app bar
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for app bar
        },
      },
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for consistency
  },
  shadows: [
    'none',
    '0px 6px 18px rgba(0, 0, 0, 0.1)', // Light shadow for components
    // Add more shadows as needed
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
