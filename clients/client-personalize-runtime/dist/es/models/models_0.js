import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var GetPersonalizedRankingRequest;
(function (GetPersonalizedRankingRequest) {
    /**
     * @internal
     */
    GetPersonalizedRankingRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.context && { context: SENSITIVE_STRING })), (obj.filterValues && { filterValues: SENSITIVE_STRING }))); };
})(GetPersonalizedRankingRequest || (GetPersonalizedRankingRequest = {}));
export var PredictedItem;
(function (PredictedItem) {
    /**
     * @internal
     */
    PredictedItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictedItem || (PredictedItem = {}));
export var GetPersonalizedRankingResponse;
(function (GetPersonalizedRankingResponse) {
    /**
     * @internal
     */
    GetPersonalizedRankingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPersonalizedRankingResponse || (GetPersonalizedRankingResponse = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var GetRecommendationsRequest;
(function (GetRecommendationsRequest) {
    /**
     * @internal
     */
    GetRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.context && { context: SENSITIVE_STRING })), (obj.filterValues && { filterValues: SENSITIVE_STRING }))); };
})(GetRecommendationsRequest || (GetRecommendationsRequest = {}));
export var GetRecommendationsResponse;
(function (GetRecommendationsResponse) {
    /**
     * @internal
     */
    GetRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRecommendationsResponse || (GetRecommendationsResponse = {}));
//# sourceMappingURL=models_0.js.map