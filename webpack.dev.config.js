'use strict';

const { merge } = require ('webpack-merge');
const base = require ('./webpack.config');

module.exports = merge(base, {
    //Настройки dev сервера в дериктиве devServer
    devServer: {
        //Папка разоварачиваемая на dev сервере
        contentBase: './public',
        //Относительный путь где находятся точка входа
        publicPath: '/',
        host: 'localhost',
        port: 7700,
        //Автоматическое обналение кода на сервере пез перезагрузки страницы
        hot: true,
        //Автоматическое открытие страницы при запуске
        open: true,
    }
});