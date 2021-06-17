"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveCustomerResult = exports.ResolveCustomerRequest = exports.InvalidTokenException = exports.ExpiredTokenException = exports.RegisterUsageResult = exports.RegisterUsageRequest = exports.PlatformNotSupportedException = exports.InvalidRegionException = exports.InvalidPublicKeyVersionException = exports.MeterUsageResult = exports.MeterUsageRequest = exports.InvalidEndpointRegionException = exports.DuplicateRequestException = exports.CustomerNotEntitledException = exports.TimestampOutOfBoundsException = exports.ThrottlingException = exports.InvalidUsageDimensionException = exports.InvalidUsageAllocationsException = exports.InvalidTagException = exports.InvalidProductCodeException = exports.InvalidCustomerIdentifierException = exports.InternalServiceErrorException = exports.DisabledApiException = exports.BatchMeterUsageResult = exports.UsageRecordResult = exports.UsageRecordResultStatus = exports.BatchMeterUsageRequest = exports.UsageRecord = exports.UsageAllocation = exports.Tag = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var UsageAllocation;
(function (UsageAllocation) {
    /**
     * @internal
     */
    UsageAllocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageAllocation = exports.UsageAllocation || (exports.UsageAllocation = {}));
var UsageRecord;
(function (UsageRecord) {
    /**
     * @internal
     */
    UsageRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageRecord = exports.UsageRecord || (exports.UsageRecord = {}));
var BatchMeterUsageRequest;
(function (BatchMeterUsageRequest) {
    /**
     * @internal
     */
    BatchMeterUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchMeterUsageRequest = exports.BatchMeterUsageRequest || (exports.BatchMeterUsageRequest = {}));
var UsageRecordResultStatus;
(function (UsageRecordResultStatus) {
    UsageRecordResultStatus["CUSTOMER_NOT_SUBSCRIBED"] = "CustomerNotSubscribed";
    UsageRecordResultStatus["DUPLICATE_RECORD"] = "DuplicateRecord";
    UsageRecordResultStatus["SUCCESS"] = "Success";
})(UsageRecordResultStatus = exports.UsageRecordResultStatus || (exports.UsageRecordResultStatus = {}));
var UsageRecordResult;
(function (UsageRecordResult) {
    /**
     * @internal
     */
    UsageRecordResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageRecordResult = exports.UsageRecordResult || (exports.UsageRecordResult = {}));
var BatchMeterUsageResult;
(function (BatchMeterUsageResult) {
    /**
     * @internal
     */
    BatchMeterUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchMeterUsageResult = exports.BatchMeterUsageResult || (exports.BatchMeterUsageResult = {}));
var DisabledApiException;
(function (DisabledApiException) {
    /**
     * @internal
     */
    DisabledApiException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisabledApiException = exports.DisabledApiException || (exports.DisabledApiException = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var InvalidCustomerIdentifierException;
(function (InvalidCustomerIdentifierException) {
    /**
     * @internal
     */
    InvalidCustomerIdentifierException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCustomerIdentifierException = exports.InvalidCustomerIdentifierException || (exports.InvalidCustomerIdentifierException = {}));
var InvalidProductCodeException;
(function (InvalidProductCodeException) {
    /**
     * @internal
     */
    InvalidProductCodeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidProductCodeException = exports.InvalidProductCodeException || (exports.InvalidProductCodeException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    /**
     * @internal
     */
    InvalidTagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var InvalidUsageAllocationsException;
(function (InvalidUsageAllocationsException) {
    /**
     * @internal
     */
    InvalidUsageAllocationsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUsageAllocationsException = exports.InvalidUsageAllocationsException || (exports.InvalidUsageAllocationsException = {}));
var InvalidUsageDimensionException;
(function (InvalidUsageDimensionException) {
    /**
     * @internal
     */
    InvalidUsageDimensionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUsageDimensionException = exports.InvalidUsageDimensionException || (exports.InvalidUsageDimensionException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var TimestampOutOfBoundsException;
(function (TimestampOutOfBoundsException) {
    /**
     * @internal
     */
    TimestampOutOfBoundsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestampOutOfBoundsException = exports.TimestampOutOfBoundsException || (exports.TimestampOutOfBoundsException = {}));
var CustomerNotEntitledException;
(function (CustomerNotEntitledException) {
    /**
     * @internal
     */
    CustomerNotEntitledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerNotEntitledException = exports.CustomerNotEntitledException || (exports.CustomerNotEntitledException = {}));
var DuplicateRequestException;
(function (DuplicateRequestException) {
    /**
     * @internal
     */
    DuplicateRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateRequestException = exports.DuplicateRequestException || (exports.DuplicateRequestException = {}));
var InvalidEndpointRegionException;
(function (InvalidEndpointRegionException) {
    /**
     * @internal
     */
    InvalidEndpointRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEndpointRegionException = exports.InvalidEndpointRegionException || (exports.InvalidEndpointRegionException = {}));
var MeterUsageRequest;
(function (MeterUsageRequest) {
    /**
     * @internal
     */
    MeterUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MeterUsageRequest = exports.MeterUsageRequest || (exports.MeterUsageRequest = {}));
var MeterUsageResult;
(function (MeterUsageResult) {
    /**
     * @internal
     */
    MeterUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MeterUsageResult = exports.MeterUsageResult || (exports.MeterUsageResult = {}));
var InvalidPublicKeyVersionException;
(function (InvalidPublicKeyVersionException) {
    /**
     * @internal
     */
    InvalidPublicKeyVersionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPublicKeyVersionException = exports.InvalidPublicKeyVersionException || (exports.InvalidPublicKeyVersionException = {}));
var InvalidRegionException;
(function (InvalidRegionException) {
    /**
     * @internal
     */
    InvalidRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRegionException = exports.InvalidRegionException || (exports.InvalidRegionException = {}));
var PlatformNotSupportedException;
(function (PlatformNotSupportedException) {
    /**
     * @internal
     */
    PlatformNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformNotSupportedException = exports.PlatformNotSupportedException || (exports.PlatformNotSupportedException = {}));
var RegisterUsageRequest;
(function (RegisterUsageRequest) {
    /**
     * @internal
     */
    RegisterUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterUsageRequest = exports.RegisterUsageRequest || (exports.RegisterUsageRequest = {}));
var RegisterUsageResult;
(function (RegisterUsageResult) {
    /**
     * @internal
     */
    RegisterUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterUsageResult = exports.RegisterUsageResult || (exports.RegisterUsageResult = {}));
var ExpiredTokenException;
(function (ExpiredTokenException) {
    /**
     * @internal
     */
    ExpiredTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpiredTokenException = exports.ExpiredTokenException || (exports.ExpiredTokenException = {}));
var InvalidTokenException;
(function (InvalidTokenException) {
    /**
     * @internal
     */
    InvalidTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTokenException = exports.InvalidTokenException || (exports.InvalidTokenException = {}));
var ResolveCustomerRequest;
(function (ResolveCustomerRequest) {
    /**
     * @internal
     */
    ResolveCustomerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveCustomerRequest = exports.ResolveCustomerRequest || (exports.ResolveCustomerRequest = {}));
var ResolveCustomerResult;
(function (ResolveCustomerResult) {
    /**
     * @internal
     */
    ResolveCustomerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveCustomerResult = exports.ResolveCustomerResult || (exports.ResolveCustomerResult = {}));
//# sourceMappingURL=models_0.js.map