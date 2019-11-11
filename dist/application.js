"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const sequence_1 = require("./sequence");
const rest_explorer_1 = require("@loopback/rest-explorer");
const key_1 = require("./key");
const jwt_service_1 = require("./services/jwt-service");
const empresa_service_1 = require("./services/empresa-service");
const path = require("path");
const authentication_1 = require("@loopback/authentication");
const key_2 = require("./key");
const hash_password_bcryptjs_1 = require("./services/hash.password.bcryptjs");
const jwt_strategy_1 = require("./authentication-strategies/jwt-strategy");
exports.PackageKey = core_1.BindingKey.create('application.package');
const pkg = require('../package.json');
class FacturasApiApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options) {
        super(options);
        this.setUpBindings();
        // Bind authentication component related elements
        this.component(authentication_1.AuthenticationComponent);
        authentication_1.registerAuthenticationStrategy(this, jwt_strategy_1.JWTAuthenticationStrategy);
        // Set up the custom sequence
        this.sequence(sequence_1.MyAuthenticationSequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    setUpBindings() {
        // Bind package.json to the application context
        this.bind(exports.PackageKey).to(pkg);
        this.bind(key_1.TokenServiceBindings.TOKEN_SECRET).to(key_1.TokenServiceConstants.TOKEN_SECRET_VALUE);
        this.bind(key_1.TokenServiceBindings.TOKEN_EXPIRES_IN).to(key_1.TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE);
        this.bind(key_1.TokenServiceBindings.TOKEN_SERVICE).toClass(jwt_service_1.JWTService);
        // // Bind bcrypt hash services
        this.bind(key_2.PasswordHasherBindings.ROUNDS).to(10);
        this.bind(key_2.PasswordHasherBindings.PASSWORD_HASHER).toClass(hash_password_bcryptjs_1.BcryptHasher);
        this.bind(key_1.UserServiceBindings.USER_SERVICE).toClass(empresa_service_1.MyUserService);
    }
}
exports.FacturasApiApplication = FacturasApiApplication;
//# sourceMappingURL=application.js.map