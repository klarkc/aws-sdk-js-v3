import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var InternalFailure;
(function (InternalFailure) {
    /**
     * @internal
     */
    InternalFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailure || (InternalFailure = {}));
export var InvokeEndpointInput;
(function (InvokeEndpointInput) {
    /**
     * @internal
     */
    InvokeEndpointInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Body && { Body: SENSITIVE_STRING })), (obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }))); };
})(InvokeEndpointInput || (InvokeEndpointInput = {}));
export var InvokeEndpointOutput;
(function (InvokeEndpointOutput) {
    /**
     * @internal
     */
    InvokeEndpointOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Body && { Body: SENSITIVE_STRING })), (obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }))); };
})(InvokeEndpointOutput || (InvokeEndpointOutput = {}));
export var ModelError;
(function (ModelError) {
    /**
     * @internal
     */
    ModelError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelError || (ModelError = {}));
export var ServiceUnavailable;
(function (ServiceUnavailable) {
    /**
     * @internal
     */
    ServiceUnavailable.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailable || (ServiceUnavailable = {}));
export var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationError || (ValidationError = {}));
//# sourceMappingURL=models_0.js.map