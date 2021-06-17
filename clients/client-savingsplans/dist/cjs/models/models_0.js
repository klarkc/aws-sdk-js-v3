"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.DescribeSavingsPlansOfferingsResponse = exports.SavingsPlanOffering = exports.SavingsPlanOfferingProperty = exports.SavingsPlanOfferingPropertyKey = exports.DescribeSavingsPlansOfferingsRequest = exports.SavingsPlanOfferingFilterElement = exports.SavingsPlanOfferingFilterAttribute = exports.DescribeSavingsPlansOfferingRatesResponse = exports.SavingsPlanOfferingRate = exports.ParentSavingsPlanOffering = exports.SavingsPlanOfferingRateProperty = exports.DescribeSavingsPlansOfferingRatesRequest = exports.SavingsPlanOfferingRateFilterElement = exports.SavingsPlanRateFilterAttribute = exports.DescribeSavingsPlansResponse = exports.SavingsPlan = exports.SavingsPlanType = exports.SavingsPlanPaymentOption = exports.DescribeSavingsPlansRequest = exports.SavingsPlanState = exports.SavingsPlanFilter = exports.SavingsPlansFilterName = exports.DescribeSavingsPlanRatesResponse = exports.SavingsPlanRate = exports.SavingsPlanRateUnit = exports.SavingsPlanRateServiceCode = exports.SavingsPlanRateProperty = exports.SavingsPlanRatePropertyKey = exports.SavingsPlanProductType = exports.DescribeSavingsPlanRatesRequest = exports.SavingsPlanRateFilter = exports.SavingsPlanRateFilterName = exports.DeleteQueuedSavingsPlanResponse = exports.DeleteQueuedSavingsPlanRequest = exports.ValidationException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.CreateSavingsPlanResponse = exports.CreateSavingsPlanRequest = void 0;
var CreateSavingsPlanRequest;
(function (CreateSavingsPlanRequest) {
    /**
     * @internal
     */
    CreateSavingsPlanRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSavingsPlanRequest = exports.CreateSavingsPlanRequest || (exports.CreateSavingsPlanRequest = {}));
var CreateSavingsPlanResponse;
(function (CreateSavingsPlanResponse) {
    /**
     * @internal
     */
    CreateSavingsPlanResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSavingsPlanResponse = exports.CreateSavingsPlanResponse || (exports.CreateSavingsPlanResponse = {}));
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
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DeleteQueuedSavingsPlanRequest;
(function (DeleteQueuedSavingsPlanRequest) {
    /**
     * @internal
     */
    DeleteQueuedSavingsPlanRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueuedSavingsPlanRequest = exports.DeleteQueuedSavingsPlanRequest || (exports.DeleteQueuedSavingsPlanRequest = {}));
var DeleteQueuedSavingsPlanResponse;
(function (DeleteQueuedSavingsPlanResponse) {
    /**
     * @internal
     */
    DeleteQueuedSavingsPlanResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueuedSavingsPlanResponse = exports.DeleteQueuedSavingsPlanResponse || (exports.DeleteQueuedSavingsPlanResponse = {}));
var SavingsPlanRateFilterName;
(function (SavingsPlanRateFilterName) {
    SavingsPlanRateFilterName["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRateFilterName["OPERATION"] = "operation";
    SavingsPlanRateFilterName["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRateFilterName["PRODUCT_TYPE"] = "productType";
    SavingsPlanRateFilterName["REGION"] = "region";
    SavingsPlanRateFilterName["SERVICE_CODE"] = "serviceCode";
    SavingsPlanRateFilterName["TENANCY"] = "tenancy";
    SavingsPlanRateFilterName["USAGE_TYPE"] = "usageType";
})(SavingsPlanRateFilterName = exports.SavingsPlanRateFilterName || (exports.SavingsPlanRateFilterName = {}));
var SavingsPlanRateFilter;
(function (SavingsPlanRateFilter) {
    /**
     * @internal
     */
    SavingsPlanRateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanRateFilter = exports.SavingsPlanRateFilter || (exports.SavingsPlanRateFilter = {}));
var DescribeSavingsPlanRatesRequest;
(function (DescribeSavingsPlanRatesRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlanRatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlanRatesRequest = exports.DescribeSavingsPlanRatesRequest || (exports.DescribeSavingsPlanRatesRequest = {}));
var SavingsPlanProductType;
(function (SavingsPlanProductType) {
    SavingsPlanProductType["EC2"] = "EC2";
    SavingsPlanProductType["FARGATE"] = "Fargate";
    SavingsPlanProductType["LAMBDA"] = "Lambda";
    SavingsPlanProductType["SAGEMAKER"] = "SageMaker";
})(SavingsPlanProductType = exports.SavingsPlanProductType || (exports.SavingsPlanProductType = {}));
var SavingsPlanRatePropertyKey;
(function (SavingsPlanRatePropertyKey) {
    SavingsPlanRatePropertyKey["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanRatePropertyKey["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRatePropertyKey["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRatePropertyKey["REGION"] = "region";
    SavingsPlanRatePropertyKey["TENANCY"] = "tenancy";
})(SavingsPlanRatePropertyKey = exports.SavingsPlanRatePropertyKey || (exports.SavingsPlanRatePropertyKey = {}));
var SavingsPlanRateProperty;
(function (SavingsPlanRateProperty) {
    /**
     * @internal
     */
    SavingsPlanRateProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanRateProperty = exports.SavingsPlanRateProperty || (exports.SavingsPlanRateProperty = {}));
var SavingsPlanRateServiceCode;
(function (SavingsPlanRateServiceCode) {
    SavingsPlanRateServiceCode["EC2"] = "AmazonEC2";
    SavingsPlanRateServiceCode["FARGATE"] = "AmazonECS";
    SavingsPlanRateServiceCode["FARGATE_EKS"] = "AmazonEKS";
    SavingsPlanRateServiceCode["LAMBDA"] = "AWSLambda";
    SavingsPlanRateServiceCode["SAGEMAKER"] = "AmazonSageMaker";
})(SavingsPlanRateServiceCode = exports.SavingsPlanRateServiceCode || (exports.SavingsPlanRateServiceCode = {}));
var SavingsPlanRateUnit;
(function (SavingsPlanRateUnit) {
    SavingsPlanRateUnit["HOURS"] = "Hrs";
    SavingsPlanRateUnit["LAMBDA_GB_SECOND"] = "Lambda-GB-Second";
    SavingsPlanRateUnit["REQUEST"] = "Request";
})(SavingsPlanRateUnit = exports.SavingsPlanRateUnit || (exports.SavingsPlanRateUnit = {}));
var SavingsPlanRate;
(function (SavingsPlanRate) {
    /**
     * @internal
     */
    SavingsPlanRate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanRate = exports.SavingsPlanRate || (exports.SavingsPlanRate = {}));
var DescribeSavingsPlanRatesResponse;
(function (DescribeSavingsPlanRatesResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlanRatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlanRatesResponse = exports.DescribeSavingsPlanRatesResponse || (exports.DescribeSavingsPlanRatesResponse = {}));
var SavingsPlansFilterName;
(function (SavingsPlansFilterName) {
    SavingsPlansFilterName["COMMITMENT"] = "commitment";
    SavingsPlansFilterName["EC2_INSTANCE_FAMILY"] = "ec2-instance-family";
    SavingsPlansFilterName["END"] = "end";
    SavingsPlansFilterName["PAYMENT_OPTION"] = "payment-option";
    SavingsPlansFilterName["REGION"] = "region";
    SavingsPlansFilterName["SAVINGS_PLAN_TYPE"] = "savings-plan-type";
    SavingsPlansFilterName["START"] = "start";
    SavingsPlansFilterName["TERM"] = "term";
    SavingsPlansFilterName["UPFRONT"] = "upfront";
})(SavingsPlansFilterName = exports.SavingsPlansFilterName || (exports.SavingsPlansFilterName = {}));
var SavingsPlanFilter;
(function (SavingsPlanFilter) {
    /**
     * @internal
     */
    SavingsPlanFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanFilter = exports.SavingsPlanFilter || (exports.SavingsPlanFilter = {}));
var SavingsPlanState;
(function (SavingsPlanState) {
    SavingsPlanState["ACTIVE"] = "active";
    SavingsPlanState["PAYMENT_FAILED"] = "payment-failed";
    SavingsPlanState["PAYMENT_PENDING"] = "payment-pending";
    SavingsPlanState["QUEUED"] = "queued";
    SavingsPlanState["QUEUED_DELETED"] = "queued-deleted";
    SavingsPlanState["RETIRED"] = "retired";
})(SavingsPlanState = exports.SavingsPlanState || (exports.SavingsPlanState = {}));
var DescribeSavingsPlansRequest;
(function (DescribeSavingsPlansRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansRequest = exports.DescribeSavingsPlansRequest || (exports.DescribeSavingsPlansRequest = {}));
var SavingsPlanPaymentOption;
(function (SavingsPlanPaymentOption) {
    SavingsPlanPaymentOption["ALL_UPFRONT"] = "All Upfront";
    SavingsPlanPaymentOption["NO_UPFRONT"] = "No Upfront";
    SavingsPlanPaymentOption["PARTIAL_UPFRONT"] = "Partial Upfront";
})(SavingsPlanPaymentOption = exports.SavingsPlanPaymentOption || (exports.SavingsPlanPaymentOption = {}));
var SavingsPlanType;
(function (SavingsPlanType) {
    SavingsPlanType["COMPUTE"] = "Compute";
    SavingsPlanType["EC2_INSTANCE"] = "EC2Instance";
    SavingsPlanType["SAGEMAKER"] = "SageMaker";
})(SavingsPlanType = exports.SavingsPlanType || (exports.SavingsPlanType = {}));
var SavingsPlan;
(function (SavingsPlan) {
    /**
     * @internal
     */
    SavingsPlan.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlan = exports.SavingsPlan || (exports.SavingsPlan = {}));
var DescribeSavingsPlansResponse;
(function (DescribeSavingsPlansResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansResponse = exports.DescribeSavingsPlansResponse || (exports.DescribeSavingsPlansResponse = {}));
var SavingsPlanRateFilterAttribute;
(function (SavingsPlanRateFilterAttribute) {
    SavingsPlanRateFilterAttribute["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanRateFilterAttribute["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRateFilterAttribute["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRateFilterAttribute["PRODUCT_ID"] = "productId";
    SavingsPlanRateFilterAttribute["REGION"] = "region";
    SavingsPlanRateFilterAttribute["TENANCY"] = "tenancy";
})(SavingsPlanRateFilterAttribute = exports.SavingsPlanRateFilterAttribute || (exports.SavingsPlanRateFilterAttribute = {}));
var SavingsPlanOfferingRateFilterElement;
(function (SavingsPlanOfferingRateFilterElement) {
    /**
     * @internal
     */
    SavingsPlanOfferingRateFilterElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOfferingRateFilterElement = exports.SavingsPlanOfferingRateFilterElement || (exports.SavingsPlanOfferingRateFilterElement = {}));
var DescribeSavingsPlansOfferingRatesRequest;
(function (DescribeSavingsPlansOfferingRatesRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingRatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansOfferingRatesRequest = exports.DescribeSavingsPlansOfferingRatesRequest || (exports.DescribeSavingsPlansOfferingRatesRequest = {}));
var SavingsPlanOfferingRateProperty;
(function (SavingsPlanOfferingRateProperty) {
    /**
     * @internal
     */
    SavingsPlanOfferingRateProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOfferingRateProperty = exports.SavingsPlanOfferingRateProperty || (exports.SavingsPlanOfferingRateProperty = {}));
var ParentSavingsPlanOffering;
(function (ParentSavingsPlanOffering) {
    /**
     * @internal
     */
    ParentSavingsPlanOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentSavingsPlanOffering = exports.ParentSavingsPlanOffering || (exports.ParentSavingsPlanOffering = {}));
var SavingsPlanOfferingRate;
(function (SavingsPlanOfferingRate) {
    /**
     * @internal
     */
    SavingsPlanOfferingRate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOfferingRate = exports.SavingsPlanOfferingRate || (exports.SavingsPlanOfferingRate = {}));
var DescribeSavingsPlansOfferingRatesResponse;
(function (DescribeSavingsPlansOfferingRatesResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingRatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansOfferingRatesResponse = exports.DescribeSavingsPlansOfferingRatesResponse || (exports.DescribeSavingsPlansOfferingRatesResponse = {}));
var SavingsPlanOfferingFilterAttribute;
(function (SavingsPlanOfferingFilterAttribute) {
    SavingsPlanOfferingFilterAttribute["instanceFamily"] = "instanceFamily";
    SavingsPlanOfferingFilterAttribute["region"] = "region";
})(SavingsPlanOfferingFilterAttribute = exports.SavingsPlanOfferingFilterAttribute || (exports.SavingsPlanOfferingFilterAttribute = {}));
var SavingsPlanOfferingFilterElement;
(function (SavingsPlanOfferingFilterElement) {
    /**
     * @internal
     */
    SavingsPlanOfferingFilterElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOfferingFilterElement = exports.SavingsPlanOfferingFilterElement || (exports.SavingsPlanOfferingFilterElement = {}));
var DescribeSavingsPlansOfferingsRequest;
(function (DescribeSavingsPlansOfferingsRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansOfferingsRequest = exports.DescribeSavingsPlansOfferingsRequest || (exports.DescribeSavingsPlansOfferingsRequest = {}));
var SavingsPlanOfferingPropertyKey;
(function (SavingsPlanOfferingPropertyKey) {
    SavingsPlanOfferingPropertyKey["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanOfferingPropertyKey["REGION"] = "region";
})(SavingsPlanOfferingPropertyKey = exports.SavingsPlanOfferingPropertyKey || (exports.SavingsPlanOfferingPropertyKey = {}));
var SavingsPlanOfferingProperty;
(function (SavingsPlanOfferingProperty) {
    /**
     * @internal
     */
    SavingsPlanOfferingProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOfferingProperty = exports.SavingsPlanOfferingProperty || (exports.SavingsPlanOfferingProperty = {}));
var SavingsPlanOffering;
(function (SavingsPlanOffering) {
    /**
     * @internal
     */
    SavingsPlanOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlanOffering = exports.SavingsPlanOffering || (exports.SavingsPlanOffering = {}));
var DescribeSavingsPlansOfferingsResponse;
(function (DescribeSavingsPlansOfferingsResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSavingsPlansOfferingsResponse = exports.DescribeSavingsPlansOfferingsResponse || (exports.DescribeSavingsPlansOfferingsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map