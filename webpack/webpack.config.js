const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
   const version = process.env.MANIFEST_VERSION || '3';
   
   return {
      mode: "production",
      entry: {
         background: path.resolve(__dirname, "..", "src", "background.ts"),
         content: path.resolve(__dirname, "..", "src", "content.ts"),
      },
      output: {
         path: path.join(__dirname, "../dist/v" + version),
         filename: "[name].js",
      },
      resolve: {
         extensions: [".ts", ".js"],
      },
      module: {
         rules: [
            {
               test: /\.tsx?$/,
               loader: "ts-loader",
               exclude: /node_modules/,
            },
         ],
      },
      plugins: [
         new CopyPlugin({
            patterns: [
               { 
                  from: `manifest-v${version}.json`, 
                  to: "manifest.json", 
                  context: "public" 
               },
               { 
                  from: ".", 
                  to: ".", 
                  context: "public", 
                  globOptions: { ignore: ["**/manifest-v2.json", "**/manifest-v3.json"] } 
               }
            ]
         }),
      ],
   };
};