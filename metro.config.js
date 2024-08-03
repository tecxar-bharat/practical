const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'], // Exclude SVG from assetExts
        sourceExts: ['js', 'jsx', 'ts', 'tsx', 'svg', 'json'], // Include SVG in sourceExts
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
