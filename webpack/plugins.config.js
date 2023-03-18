/* < ---__ Подключение пакетов и путей к файлам __--- > */

const path = require('path'),
    constants = require('./constants'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

/* < ---__ Устанавливаем проверку в каком режиме будет произведена сборка проекта __--- > */

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

/* < ---__ Создаем переменную куда будет складыватся весь результат __--- > */

const result = {};

/* < ---__ Настройка Плагинов __--- > */

result.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/publick/', 'index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: buildType === constants.modes.dev ? './css/style.css' : './css/style.[contenthash].css',  // Название выходного файла Style
    }),
];

/* < ---__ Настройка модулей __--- > */

result.module = {
    rules: [

        /* < ---__ Обработка Java Script __--- > */

        {
            test: /\.m?js$/i,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },

        /* < ---__ Обработка SCSS __--- > */

        {
            test: /\.(sa|sc|c)ss$/i,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
        },

        /* < ---__ Обработка image __--- > */

        {

            test: /\.(?:|png|svg|jpg|jpeg|gif)$/i,
            use: [
                {
                    loader: 'image-webpack-loader',

                    options: {
                        mozjpeg: {
                          progressive: true,
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }

                },

            ],
            type: 'asset/resource'

        },

        /* < ---__ Обработка Шрифтов __--- > */

        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/font/[name][ext]',
            },
        },

    ],
};


/* < ---__ Экспорт модулей __--- > */

module.exports = result