/* < ---__ Создаем переменную которая будет хранить режимы разработки __--- > */

    const result = {
        modes: {
            dev: "dev",
            prod: "prod",
        },
    };

/* < ---__ Присваеваем переменным режимы разработки __--- > */

    result.builds = {
        [result.modes.dev]: "development", // Режим разработчика
        [result.modes.prod]: "production", // Режим для пользователя
    };

/* < ---__ Экспортируем режим разработки __--- > */

module.exports = result;