const express = require('express');

const SwaggerParser = require('swagger-parser');
const swaggerRoutes = require('swagger-routes-express');

const awilix = require('awilix');
const _ = require('underscore');
const Lifetime = awilix.Lifetime;

const config = require('./config/config.js').getProperties();

const { Logger } = require('./logger.js');

const { MySQL } = require('./db/mysql.js');

const ScriptTask = require('./core/script-tasks.js');

console.log(ScriptTask)

const makeApp = async () => {

    const parser = new SwaggerParser();

    const app = express();

    app.use(require('body-parser').json());
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.set('view engine', 'ejs');

    swaggerRoutes((require('./routes/controller.js')).init(config, logger, mysql, ScriptTask),
        await parser.validate('./task-swagger.yaml'))(app);
    return app;
};

/**
 * Set up dependencies
 */

const diContainer = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC
});


// Register every parameter passed to the application in the DI container
_.forEach(_.keys(config), (n) => {
    diContainer.register(n, awilix.asValue(config[n]));
});

// Set container
diContainer.register({
    logger: awilix.asClass(Logger, { lifetime: Lifetime.SINGLETON }),
    mysql: awilix.asClass(MySQL, { lifetime: Lifetime.SINGLETON }),
});

const logger = diContainer.resolve('logger').logger();
const mysql = diContainer.resolve('mysql').mysql();


/**
 * Starts the app
 */
makeApp().then((thisApp) => {
    thisApp.listen("5000", () => {
        logger.info('Application has started');
    });
}).catch((err) => {
    console.log(err);
    logger.error(err);
});
