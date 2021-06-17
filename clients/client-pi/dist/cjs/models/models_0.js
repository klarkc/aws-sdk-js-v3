"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourceMetricsResponse = exports.MetricKeyDataPoints = exports.ResponseResourceMetricKey = exports.GetResourceMetricsRequest = exports.MetricQuery = exports.NotAuthorizedException = exports.InvalidArgumentException = exports.InternalServiceError = exports.DescribeDimensionKeysResponse = exports.ResponsePartitionKey = exports.DimensionKeyDescription = exports.DescribeDimensionKeysRequest = exports.ServiceType = exports.DimensionGroup = exports.DataPoint = void 0;
var DataPoint;
(function (DataPoint) {
    /**
     * @internal
     */
    DataPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataPoint = exports.DataPoint || (exports.DataPoint = {}));
var DimensionGroup;
(function (DimensionGroup) {
    /**
     * @internal
     */
    DimensionGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DimensionGroup = exports.DimensionGroup || (exports.DimensionGroup = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["RDS"] = "RDS";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var DescribeDimensionKeysRequest;
(function (DescribeDimensionKeysRequest) {
    /**
     * @internal
     */
    DescribeDimensionKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDimensionKeysRequest = exports.DescribeDimensionKeysRequest || (exports.DescribeDimensionKeysRequest = {}));
var DimensionKeyDescription;
(function (DimensionKeyDescription) {
    /**
     * @internal
     */
    DimensionKeyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DimensionKeyDescription = exports.DimensionKeyDescription || (exports.DimensionKeyDescription = {}));
var ResponsePartitionKey;
(function (ResponsePartitionKey) {
    /**
     * @internal
     */
    ResponsePartitionKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponsePartitionKey = exports.ResponsePartitionKey || (exports.ResponsePartitionKey = {}));
var DescribeDimensionKeysResponse;
(function (DescribeDimensionKeysResponse) {
    /**
     * @internal
     */
    DescribeDimensionKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDimensionKeysResponse = exports.DescribeDimensionKeysResponse || (exports.DescribeDimensionKeysResponse = {}));
var InternalServiceError;
(function (InternalServiceError) {
    /**
     * @internal
     */
    InternalServiceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var MetricQuery;
(function (MetricQuery) {
    /**
     * @internal
     */
    MetricQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricQuery = exports.MetricQuery || (exports.MetricQuery = {}));
var GetResourceMetricsRequest;
(function (GetResourceMetricsRequest) {
    /**
     * @internal
     */
    GetResourceMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceMetricsRequest = exports.GetResourceMetricsRequest || (exports.GetResourceMetricsRequest = {}));
var ResponseResourceMetricKey;
(function (ResponseResourceMetricKey) {
    /**
     * @internal
     */
    ResponseResourceMetricKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseResourceMetricKey = exports.ResponseResourceMetricKey || (exports.ResponseResourceMetricKey = {}));
var MetricKeyDataPoints;
(function (MetricKeyDataPoints) {
    /**
     * @internal
     */
    MetricKeyDataPoints.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricKeyDataPoints = exports.MetricKeyDataPoints || (exports.MetricKeyDataPoints = {}));
var GetResourceMetricsResponse;
(function (GetResourceMetricsResponse) {
    /**
     * @internal
     */
    GetResourceMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceMetricsResponse = exports.GetResourceMetricsResponse || (exports.GetResourceMetricsResponse = {}));
//# sourceMappingURL=models_0.js.map