import { __assign, __read } from "tslib";
import { OidcConfig, TrialComponentParameterValue, } from "./models_1";
export var UpdateTrainingJobRequest;
(function (UpdateTrainingJobRequest) {
    /**
     * @internal
     */
    UpdateTrainingJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrainingJobRequest || (UpdateTrainingJobRequest = {}));
export var UpdateTrainingJobResponse;
(function (UpdateTrainingJobResponse) {
    /**
     * @internal
     */
    UpdateTrainingJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrainingJobResponse || (UpdateTrainingJobResponse = {}));
export var UpdateTrialRequest;
(function (UpdateTrialRequest) {
    /**
     * @internal
     */
    UpdateTrialRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrialRequest || (UpdateTrialRequest = {}));
export var UpdateTrialResponse;
(function (UpdateTrialResponse) {
    /**
     * @internal
     */
    UpdateTrialResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrialResponse || (UpdateTrialResponse = {}));
export var UpdateTrialComponentRequest;
(function (UpdateTrialComponentRequest) {
    /**
     * @internal
     */
    UpdateTrialComponentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Parameters && {
        Parameters: Object.entries(obj.Parameters).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = TrialComponentParameterValue.filterSensitiveLog(value), _b)));
        }, {}),
    }))); };
})(UpdateTrialComponentRequest || (UpdateTrialComponentRequest = {}));
export var UpdateTrialComponentResponse;
(function (UpdateTrialComponentResponse) {
    /**
     * @internal
     */
    UpdateTrialComponentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTrialComponentResponse || (UpdateTrialComponentResponse = {}));
export var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    /**
     * @internal
     */
    UpdateUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserProfileRequest || (UpdateUserProfileRequest = {}));
export var UpdateUserProfileResponse;
(function (UpdateUserProfileResponse) {
    /**
     * @internal
     */
    UpdateUserProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserProfileResponse || (UpdateUserProfileResponse = {}));
export var UpdateWorkforceRequest;
(function (UpdateWorkforceRequest) {
    /**
     * @internal
     */
    UpdateWorkforceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }))); };
})(UpdateWorkforceRequest || (UpdateWorkforceRequest = {}));
export var UpdateWorkforceResponse;
(function (UpdateWorkforceResponse) {
    /**
     * @internal
     */
    UpdateWorkforceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWorkforceResponse || (UpdateWorkforceResponse = {}));
export var UpdateWorkteamRequest;
(function (UpdateWorkteamRequest) {
    /**
     * @internal
     */
    UpdateWorkteamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWorkteamRequest || (UpdateWorkteamRequest = {}));
export var UpdateWorkteamResponse;
(function (UpdateWorkteamResponse) {
    /**
     * @internal
     */
    UpdateWorkteamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWorkteamResponse || (UpdateWorkteamResponse = {}));
export var SearchExpression;
(function (SearchExpression) {
    /**
     * @internal
     */
    SearchExpression.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchExpression || (SearchExpression = {}));
export var SearchRequest;
(function (SearchRequest) {
    /**
     * @internal
     */
    SearchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchRequest || (SearchRequest = {}));
//# sourceMappingURL=models_3.js.map