import { __assign } from "tslib";
export var CreateSavingsPlanRequest;
(function (CreateSavingsPlanRequest) {
    /**
     * @internal
     */
    CreateSavingsPlanRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSavingsPlanRequest || (CreateSavingsPlanRequest = {}));
export var CreateSavingsPlanResponse;
(function (CreateSavingsPlanResponse) {
    /**
     * @internal
     */
    CreateSavingsPlanResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSavingsPlanResponse || (CreateSavingsPlanResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var DeleteQueuedSavingsPlanRequest;
(function (DeleteQueuedSavingsPlanRequest) {
    /**
     * @internal
     */
    DeleteQueuedSavingsPlanRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQueuedSavingsPlanRequest || (DeleteQueuedSavingsPlanRequest = {}));
export var DeleteQueuedSavingsPlanResponse;
(function (DeleteQueuedSavingsPlanResponse) {
    /**
     * @internal
     */
    DeleteQueuedSavingsPlanResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQueuedSavingsPlanResponse || (DeleteQueuedSavingsPlanResponse = {}));
export var SavingsPlanRateFilterName;
(function (SavingsPlanRateFilterName) {
    SavingsPlanRateFilterName["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRateFilterName["OPERATION"] = "operation";
    SavingsPlanRateFilterName["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRateFilterName["PRODUCT_TYPE"] = "productType";
    SavingsPlanRateFilterName["REGION"] = "region";
    SavingsPlanRateFilterName["SERVICE_CODE"] = "serviceCode";
    SavingsPlanRateFilterName["TENANCY"] = "tenancy";
    SavingsPlanRateFilterName["USAGE_TYPE"] = "usageType";
})(SavingsPlanRateFilterName || (SavingsPlanRateFilterName = {}));
export var SavingsPlanRateFilter;
(function (SavingsPlanRateFilter) {
    /**
     * @internal
     */
    SavingsPlanRateFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanRateFilter || (SavingsPlanRateFilter = {}));
export var DescribeSavingsPlanRatesRequest;
(function (DescribeSavingsPlanRatesRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlanRatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlanRatesRequest || (DescribeSavingsPlanRatesRequest = {}));
export var SavingsPlanProductType;
(function (SavingsPlanProductType) {
    SavingsPlanProductType["EC2"] = "EC2";
    SavingsPlanProductType["FARGATE"] = "Fargate";
    SavingsPlanProductType["LAMBDA"] = "Lambda";
    SavingsPlanProductType["SAGEMAKER"] = "SageMaker";
})(SavingsPlanProductType || (SavingsPlanProductType = {}));
export var SavingsPlanRatePropertyKey;
(function (SavingsPlanRatePropertyKey) {
    SavingsPlanRatePropertyKey["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanRatePropertyKey["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRatePropertyKey["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRatePropertyKey["REGION"] = "region";
    SavingsPlanRatePropertyKey["TENANCY"] = "tenancy";
})(SavingsPlanRatePropertyKey || (SavingsPlanRatePropertyKey = {}));
export var SavingsPlanRateProperty;
(function (SavingsPlanRateProperty) {
    /**
     * @internal
     */
    SavingsPlanRateProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanRateProperty || (SavingsPlanRateProperty = {}));
export var SavingsPlanRateServiceCode;
(function (SavingsPlanRateServiceCode) {
    SavingsPlanRateServiceCode["EC2"] = "AmazonEC2";
    SavingsPlanRateServiceCode["FARGATE"] = "AmazonECS";
    SavingsPlanRateServiceCode["FARGATE_EKS"] = "AmazonEKS";
    SavingsPlanRateServiceCode["LAMBDA"] = "AWSLambda";
    SavingsPlanRateServiceCode["SAGEMAKER"] = "AmazonSageMaker";
})(SavingsPlanRateServiceCode || (SavingsPlanRateServiceCode = {}));
export var SavingsPlanRateUnit;
(function (SavingsPlanRateUnit) {
    SavingsPlanRateUnit["HOURS"] = "Hrs";
    SavingsPlanRateUnit["LAMBDA_GB_SECOND"] = "Lambda-GB-Second";
    SavingsPlanRateUnit["REQUEST"] = "Request";
})(SavingsPlanRateUnit || (SavingsPlanRateUnit = {}));
export var SavingsPlanRate;
(function (SavingsPlanRate) {
    /**
     * @internal
     */
    SavingsPlanRate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanRate || (SavingsPlanRate = {}));
export var DescribeSavingsPlanRatesResponse;
(function (DescribeSavingsPlanRatesResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlanRatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlanRatesResponse || (DescribeSavingsPlanRatesResponse = {}));
export var SavingsPlansFilterName;
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
})(SavingsPlansFilterName || (SavingsPlansFilterName = {}));
export var SavingsPlanFilter;
(function (SavingsPlanFilter) {
    /**
     * @internal
     */
    SavingsPlanFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanFilter || (SavingsPlanFilter = {}));
export var SavingsPlanState;
(function (SavingsPlanState) {
    SavingsPlanState["ACTIVE"] = "active";
    SavingsPlanState["PAYMENT_FAILED"] = "payment-failed";
    SavingsPlanState["PAYMENT_PENDING"] = "payment-pending";
    SavingsPlanState["QUEUED"] = "queued";
    SavingsPlanState["QUEUED_DELETED"] = "queued-deleted";
    SavingsPlanState["RETIRED"] = "retired";
})(SavingsPlanState || (SavingsPlanState = {}));
export var DescribeSavingsPlansRequest;
(function (DescribeSavingsPlansRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansRequest || (DescribeSavingsPlansRequest = {}));
export var SavingsPlanPaymentOption;
(function (SavingsPlanPaymentOption) {
    SavingsPlanPaymentOption["ALL_UPFRONT"] = "All Upfront";
    SavingsPlanPaymentOption["NO_UPFRONT"] = "No Upfront";
    SavingsPlanPaymentOption["PARTIAL_UPFRONT"] = "Partial Upfront";
})(SavingsPlanPaymentOption || (SavingsPlanPaymentOption = {}));
export var SavingsPlanType;
(function (SavingsPlanType) {
    SavingsPlanType["COMPUTE"] = "Compute";
    SavingsPlanType["EC2_INSTANCE"] = "EC2Instance";
    SavingsPlanType["SAGEMAKER"] = "SageMaker";
})(SavingsPlanType || (SavingsPlanType = {}));
export var SavingsPlan;
(function (SavingsPlan) {
    /**
     * @internal
     */
    SavingsPlan.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlan || (SavingsPlan = {}));
export var DescribeSavingsPlansResponse;
(function (DescribeSavingsPlansResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansResponse || (DescribeSavingsPlansResponse = {}));
export var SavingsPlanRateFilterAttribute;
(function (SavingsPlanRateFilterAttribute) {
    SavingsPlanRateFilterAttribute["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanRateFilterAttribute["INSTANCE_TYPE"] = "instanceType";
    SavingsPlanRateFilterAttribute["PRODUCT_DESCRIPTION"] = "productDescription";
    SavingsPlanRateFilterAttribute["PRODUCT_ID"] = "productId";
    SavingsPlanRateFilterAttribute["REGION"] = "region";
    SavingsPlanRateFilterAttribute["TENANCY"] = "tenancy";
})(SavingsPlanRateFilterAttribute || (SavingsPlanRateFilterAttribute = {}));
export var SavingsPlanOfferingRateFilterElement;
(function (SavingsPlanOfferingRateFilterElement) {
    /**
     * @internal
     */
    SavingsPlanOfferingRateFilterElement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOfferingRateFilterElement || (SavingsPlanOfferingRateFilterElement = {}));
export var DescribeSavingsPlansOfferingRatesRequest;
(function (DescribeSavingsPlansOfferingRatesRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingRatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansOfferingRatesRequest || (DescribeSavingsPlansOfferingRatesRequest = {}));
export var SavingsPlanOfferingRateProperty;
(function (SavingsPlanOfferingRateProperty) {
    /**
     * @internal
     */
    SavingsPlanOfferingRateProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOfferingRateProperty || (SavingsPlanOfferingRateProperty = {}));
export var ParentSavingsPlanOffering;
(function (ParentSavingsPlanOffering) {
    /**
     * @internal
     */
    ParentSavingsPlanOffering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParentSavingsPlanOffering || (ParentSavingsPlanOffering = {}));
export var SavingsPlanOfferingRate;
(function (SavingsPlanOfferingRate) {
    /**
     * @internal
     */
    SavingsPlanOfferingRate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOfferingRate || (SavingsPlanOfferingRate = {}));
export var DescribeSavingsPlansOfferingRatesResponse;
(function (DescribeSavingsPlansOfferingRatesResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingRatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansOfferingRatesResponse || (DescribeSavingsPlansOfferingRatesResponse = {}));
export var SavingsPlanOfferingFilterAttribute;
(function (SavingsPlanOfferingFilterAttribute) {
    SavingsPlanOfferingFilterAttribute["instanceFamily"] = "instanceFamily";
    SavingsPlanOfferingFilterAttribute["region"] = "region";
})(SavingsPlanOfferingFilterAttribute || (SavingsPlanOfferingFilterAttribute = {}));
export var SavingsPlanOfferingFilterElement;
(function (SavingsPlanOfferingFilterElement) {
    /**
     * @internal
     */
    SavingsPlanOfferingFilterElement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOfferingFilterElement || (SavingsPlanOfferingFilterElement = {}));
export var DescribeSavingsPlansOfferingsRequest;
(function (DescribeSavingsPlansOfferingsRequest) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansOfferingsRequest || (DescribeSavingsPlansOfferingsRequest = {}));
export var SavingsPlanOfferingPropertyKey;
(function (SavingsPlanOfferingPropertyKey) {
    SavingsPlanOfferingPropertyKey["INSTANCE_FAMILY"] = "instanceFamily";
    SavingsPlanOfferingPropertyKey["REGION"] = "region";
})(SavingsPlanOfferingPropertyKey || (SavingsPlanOfferingPropertyKey = {}));
export var SavingsPlanOfferingProperty;
(function (SavingsPlanOfferingProperty) {
    /**
     * @internal
     */
    SavingsPlanOfferingProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOfferingProperty || (SavingsPlanOfferingProperty = {}));
export var SavingsPlanOffering;
(function (SavingsPlanOffering) {
    /**
     * @internal
     */
    SavingsPlanOffering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlanOffering || (SavingsPlanOffering = {}));
export var DescribeSavingsPlansOfferingsResponse;
(function (DescribeSavingsPlansOfferingsResponse) {
    /**
     * @internal
     */
    DescribeSavingsPlansOfferingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSavingsPlansOfferingsResponse || (DescribeSavingsPlansOfferingsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map