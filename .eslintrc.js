module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  rules:{
    'react-native/no-inline-styles':0
  }
};
