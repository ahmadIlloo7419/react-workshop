/**
 * Created by ahmad on 2/28/2017.
 */
module.exports = {
    entry : "./src/app.js" ,
    output : {
        filename : "./index.js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/,use: [ 'style-loader','css-loader' ]},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader?name=/public/icons/[name].[ext]"}
        ]
    }
};

