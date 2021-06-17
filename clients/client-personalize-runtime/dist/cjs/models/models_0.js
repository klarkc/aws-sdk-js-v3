"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecommendationsResponse = exports.GetRecommendationsRequest = exports.ResourceNotFoundException = exports.InvalidInputException = exports.GetPersonalizedRankingResponse = exports.PredictedItem = exports.GetPersonalizedRankingRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var GetPersonalizedRankingRequest;
(function (GetPersonalizedRankingRequest) {
    /**
     * @internal
     */
    GetPersonalizedRankingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.context && { context: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.filterValues && { filterValues: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetPersonalizedRankingRequest = exports.GetPersonalizedRankingRequest || (exports.GetPersonalizedRankingRequest = {}));
var PredictedItem;
(function (PredictedItem) {
    /**
     * @internal
     */
    PredictedItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictedItem = exports.PredictedItem || (exports.PredictedItem = {}));
var GetPersonalizedRankingResponse;
(function (GetPersonalizedRankingResponse) {
    /**
     * @internal
     */
    GetPersonalizedRankingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPersonalizedRankingResponse = exports.GetPersonalizedRankingResponse || (exports.GetPersonalizedRankingResponse = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var GetRecommendationsRequest;
(function (GetRecommendationsRequest) {
    /**
     * @internal
     */
    GetRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.context && { context: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.filterValues && { filterValues: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetRecommendationsRequest = exports.GetRecommendationsRequest || (exports.GetRecommendationsRequest = {}));
var GetRecommendationsResponse;
(function (GetRecommendationsResponse) {
    /**
     * @internal
     */
    GetRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommendationsResponse = exports.GetRecommendationsResponse || (exports.GetRecommendationsResponse = {}));
//# sourceMappingURL=models_0.js.map