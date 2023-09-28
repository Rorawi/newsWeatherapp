module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
  }
};

// module.exports = {
//   resolver: {
//     assetExts: ['db', 'mp3', 'ttf', 'png', 'jpg', 'jpeg', 'gif', 'webp'],
//   },
// };
