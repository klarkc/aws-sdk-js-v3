"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.ServiceUnavailable = exports.ModelError = exports.InvokeEndpointOutput = exports.InvokeEndpointInput = exports.InternalFailure = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var InternalFailure;
(function (InternalFailure) {
    /**
     * @internal
     */
    InternalFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailure = exports.InternalFailure || (exports.InternalFailure = {}));
var InvokeEndpointInput;
(function (InvokeEndpointInput) {
    /**
     * @internal
     */
    InvokeEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Body && { Body: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.CustomAttributes && { CustomAttributes: smithy_client_1.SENSITIVE_STRING }),
    });
})(InvokeEndpointInput = exports.InvokeEndpointInput || (exports.InvokeEndpointInput = {}));
var InvokeEndpointOutput;
(function (InvokeEndpointOutput) {
    /**
     * @internal
     */
    InvokeEndpointOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Body && { Body: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.CustomAttributes && { CustomAttributes: smithy_client_1.SENSITIVE_STRING }),
    });
})(InvokeEndpointOutput = exports.InvokeEndpointOutput || (exports.InvokeEndpointOutput = {}));
var ModelError;
(function (ModelError) {
    /**
     * @internal
     */
    ModelError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelError = exports.ModelError || (exports.ModelError = {}));
var ServiceUnavailable;
(function (ServiceUnavailable) {
    /**
     * @internal
     */
    ServiceUnavailable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailable = exports.ServiceUnavailable || (exports.ServiceUnavailable = {}));
var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
//# sourceMappingURL=models_0.js.map