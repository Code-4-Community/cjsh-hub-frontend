import colors from './colors';

export default {
  colors,
  components: {
    Button: {
      baseStyle: {
        borderRadius: '2px',
      },
    },
    Link: {
      baseStyle: {
        textDecoration: 'underline',
        '&:hover': {
          color: 'green.500',
        },
      },
      variants: {
        onDark: {
          '&:hover': {
            color: 'green.300',
          },
        },
      },
    },
  },
  fonts: {
    heading: "'Lato', sans-serif",
    body: "'Lato', sans-serif",
  },
};
