"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResult = exports.UntagResourceRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.DescribeAcceleratorTypesResponse = exports.DescribeAcceleratorTypesRequest = exports.DescribeAcceleratorsResponse = exports.ElasticInferenceAccelerator = exports.ElasticInferenceAcceleratorHealth = exports.DescribeAcceleratorsRequest = exports.Filter = exports.ResourceNotFoundException = exports.InternalServerException = exports.DescribeAcceleratorOfferingsResponse = exports.DescribeAcceleratorOfferingsRequest = exports.BadRequestException = exports.AcceleratorTypeOffering = exports.AcceleratorType = exports.KeyValuePair = exports.MemoryInfo = void 0;
var MemoryInfo;
(function (MemoryInfo) {
    /**
     * @internal
     */
    MemoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemoryInfo = exports.MemoryInfo || (exports.MemoryInfo = {}));
var KeyValuePair;
(function (KeyValuePair) {
    /**
     * @internal
     */
    KeyValuePair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyValuePair = exports.KeyValuePair || (exports.KeyValuePair = {}));
var AcceleratorType;
(function (AcceleratorType) {
    /**
     * @internal
     */
    AcceleratorType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceleratorType = exports.AcceleratorType || (exports.AcceleratorType = {}));
var AcceleratorTypeOffering;
(function (AcceleratorTypeOffering) {
    /**
     * @internal
     */
    AcceleratorTypeOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceleratorTypeOffering = exports.AcceleratorTypeOffering || (exports.AcceleratorTypeOffering = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var DescribeAcceleratorOfferingsRequest;
(function (DescribeAcceleratorOfferingsRequest) {
    /**
     * @internal
     */
    DescribeAcceleratorOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorOfferingsRequest = exports.DescribeAcceleratorOfferingsRequest || (exports.DescribeAcceleratorOfferingsRequest = {}));
var DescribeAcceleratorOfferingsResponse;
(function (DescribeAcceleratorOfferingsResponse) {
    /**
     * @internal
     */
    DescribeAcceleratorOfferingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorOfferingsResponse = exports.DescribeAcceleratorOfferingsResponse || (exports.DescribeAcceleratorOfferingsResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeAcceleratorsRequest;
(function (DescribeAcceleratorsRequest) {
    /**
     * @internal
     */
    DescribeAcceleratorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorsRequest = exports.DescribeAcceleratorsRequest || (exports.DescribeAcceleratorsRequest = {}));
var ElasticInferenceAcceleratorHealth;
(function (ElasticInferenceAcceleratorHealth) {
    /**
     * @internal
     */
    ElasticInferenceAcceleratorHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticInferenceAcceleratorHealth = exports.ElasticInferenceAcceleratorHealth || (exports.ElasticInferenceAcceleratorHealth = {}));
var ElasticInferenceAccelerator;
(function (ElasticInferenceAccelerator) {
    /**
     * @internal
     */
    ElasticInferenceAccelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticInferenceAccelerator = exports.ElasticInferenceAccelerator || (exports.ElasticInferenceAccelerator = {}));
var DescribeAcceleratorsResponse;
(function (DescribeAcceleratorsResponse) {
    /**
     * @internal
     */
    DescribeAcceleratorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorsResponse = exports.DescribeAcceleratorsResponse || (exports.DescribeAcceleratorsResponse = {}));
var DescribeAcceleratorTypesRequest;
(function (DescribeAcceleratorTypesRequest) {
    /**
     * @internal
     */
    DescribeAcceleratorTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorTypesRequest = exports.DescribeAcceleratorTypesRequest || (exports.DescribeAcceleratorTypesRequest = {}));
var DescribeAcceleratorTypesResponse;
(function (DescribeAcceleratorTypesResponse) {
    /**
     * @internal
     */
    DescribeAcceleratorTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorTypesResponse = exports.DescribeAcceleratorTypesResponse || (exports.DescribeAcceleratorTypesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
//# sourceMappingURL=models_0.js.map