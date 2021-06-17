"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRequest = exports.SearchExpression = exports.UpdateWorkteamResponse = exports.UpdateWorkteamRequest = exports.UpdateWorkforceResponse = exports.UpdateWorkforceRequest = exports.UpdateUserProfileResponse = exports.UpdateUserProfileRequest = exports.UpdateTrialComponentResponse = exports.UpdateTrialComponentRequest = exports.UpdateTrialResponse = exports.UpdateTrialRequest = exports.UpdateTrainingJobResponse = exports.UpdateTrainingJobRequest = void 0;
const models_1_1 = require("./models_1");
var UpdateTrainingJobRequest;
(function (UpdateTrainingJobRequest) {
    /**
     * @internal
     */
    UpdateTrainingJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrainingJobRequest = exports.UpdateTrainingJobRequest || (exports.UpdateTrainingJobRequest = {}));
var UpdateTrainingJobResponse;
(function (UpdateTrainingJobResponse) {
    /**
     * @internal
     */
    UpdateTrainingJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrainingJobResponse = exports.UpdateTrainingJobResponse || (exports.UpdateTrainingJobResponse = {}));
var UpdateTrialRequest;
(function (UpdateTrialRequest) {
    /**
     * @internal
     */
    UpdateTrialRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrialRequest = exports.UpdateTrialRequest || (exports.UpdateTrialRequest = {}));
var UpdateTrialResponse;
(function (UpdateTrialResponse) {
    /**
     * @internal
     */
    UpdateTrialResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrialResponse = exports.UpdateTrialResponse || (exports.UpdateTrialResponse = {}));
var UpdateTrialComponentRequest;
(function (UpdateTrialComponentRequest) {
    /**
     * @internal
     */
    UpdateTrialComponentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && {
            Parameters: Object.entries(obj.Parameters).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: models_1_1.TrialComponentParameterValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(UpdateTrialComponentRequest = exports.UpdateTrialComponentRequest || (exports.UpdateTrialComponentRequest = {}));
var UpdateTrialComponentResponse;
(function (UpdateTrialComponentResponse) {
    /**
     * @internal
     */
    UpdateTrialComponentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrialComponentResponse = exports.UpdateTrialComponentResponse || (exports.UpdateTrialComponentResponse = {}));
var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    /**
     * @internal
     */
    UpdateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserProfileRequest = exports.UpdateUserProfileRequest || (exports.UpdateUserProfileRequest = {}));
var UpdateUserProfileResponse;
(function (UpdateUserProfileResponse) {
    /**
     * @internal
     */
    UpdateUserProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserProfileResponse = exports.UpdateUserProfileResponse || (exports.UpdateUserProfileResponse = {}));
var UpdateWorkforceRequest;
(function (UpdateWorkforceRequest) {
    /**
     * @internal
     */
    UpdateWorkforceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OidcConfig && { OidcConfig: models_1_1.OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
    });
})(UpdateWorkforceRequest = exports.UpdateWorkforceRequest || (exports.UpdateWorkforceRequest = {}));
var UpdateWorkforceResponse;
(function (UpdateWorkforceResponse) {
    /**
     * @internal
     */
    UpdateWorkforceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkforceResponse = exports.UpdateWorkforceResponse || (exports.UpdateWorkforceResponse = {}));
var UpdateWorkteamRequest;
(function (UpdateWorkteamRequest) {
    /**
     * @internal
     */
    UpdateWorkteamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkteamRequest = exports.UpdateWorkteamRequest || (exports.UpdateWorkteamRequest = {}));
var UpdateWorkteamResponse;
(function (UpdateWorkteamResponse) {
    /**
     * @internal
     */
    UpdateWorkteamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkteamResponse = exports.UpdateWorkteamResponse || (exports.UpdateWorkteamResponse = {}));
var SearchExpression;
(function (SearchExpression) {
    /**
     * @internal
     */
    SearchExpression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchExpression = exports.SearchExpression || (exports.SearchExpression = {}));
var SearchRequest;
(function (SearchRequest) {
    /**
     * @internal
     */
    SearchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchRequest = exports.SearchRequest || (exports.SearchRequest = {}));
//# sourceMappingURL=models_3.js.map