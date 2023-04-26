/*module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-proposal-export-namespace-from','react-native-reanimated/plugin',{relativeSourceLocation: true,}],
};*/

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
  
};

