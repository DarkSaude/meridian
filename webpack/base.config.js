/* < ---__ Подключение пакетов и путей к файлам __--- > */

    const path      = require('path'),
          constants = require('./constants'); // Подключение режимов разработки

/* < ---__ Устанавливаем проверку в каком режиме будет произведена сборка проекта __--- > */

    const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

/* < ---__ Устанавливаем source-map для style __--- > */

    const devtool = buildType === constants.modes.dev ? 'source-map' : undefined;

/* < ---__ Основные настройки подключения Webpack __--- > */

module.exports = {

/* < ---__ Определяем режим разработки проекта __--- > */

    mode: constants.builds[ buildType ],
    devtool,

/* < ---__ Точка входа файлов __--- > */

    entry: {
        main: path.resolve(__dirname,"../src/", "index.js"),
    },

/* < ---__ Точка выхода файлов __--- > */

    output: {
        path: path.resolve(__dirname,"../app"),
        clean: true,                                                                                     // Очистка файлов перед сборкой проекта
        filename: buildType === constants.modes.prod ? './js/index.[contenthash].js' : './js/index.js',  // Название выходного файла Java Script
        assetModuleFilename: 'assets/img/[name]-[hash][ext]',        
    },

/* < ---__ EXTANSIONS ( Позволяет не дописывать окончание файлов ) __--- > */

    resolve: {
        alias: {
            '@style': path.resolve(__dirname, '../src/publick/scss'),
            '@img': path.resolve(__dirname, '../src/publick/assets/img')
        },
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.scss', '.jpg', '.png'],
    },

/* < ---__ Настройка сервера для запуска __--- > */

    devServer: {
        port: 5000,
        static: path.resolve(__dirname,"../app"),
    },

}