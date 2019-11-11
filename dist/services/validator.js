"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
function validateCredentials(credentials) {
    // Validate Email
    /*if (!isemail.validate(credentials.correo)) {
      throw new HttpErrors.UnprocessableEntity('invalid email');
    }*/
    // Validate Email
    /*if (!credentials.rfc.length == 12 ) {
      throw new HttpErrors.UnprocessableEntity('invalid rfc');
    }*/
    // Validate Password Length
    if (credentials.password.length < 8) {
        throw new rest_1.HttpErrors.UnprocessableEntity('password must be minimum 8 characters');
    }
}
exports.validateCredentials = validateCredentials;
//# sourceMappingURL=validator.js.map