/* < ---__ Подключение пакетов и путей к файлам __--- > */

    const webpack       = require('webpack'),
          baseConfig    = require('./webpack/base.config'),     // Подключение файла настройки основной конфигурации
          pluginsConfig = require('./webpack/plugins.config');  // Подключение файла настройки плашинов


/* < ---__ создание переменной которая объединяет все настройки __--- > */

    const allConfig = {
        ...baseConfig,
        ...pluginsConfig
    };


/* < ---__ Экспорт настроек webpack __--- > */

    module.exports = allConfig
