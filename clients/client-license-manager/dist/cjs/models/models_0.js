"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLicenseConfigurationResponse = exports.CreateLicenseConfigurationRequest = exports.Tag = exports.ProductInformation = exports.ProductInformationFilter = exports.LicenseCountingType = exports.CreateLicenseResponse = exports.LicenseStatus = exports.CreateLicenseRequest = exports.DatetimeRange = exports.Issuer = exports.Entitlement = exports.EntitlementUnit = exports.ConsumptionConfiguration = exports.RenewType = exports.ProvisionalConfiguration = exports.BorrowConfiguration = exports.CreateGrantVersionResponse = exports.CreateGrantVersionRequest = exports.CreateGrantResponse = exports.CreateGrantRequest = exports.CheckoutLicenseResponse = exports.CheckoutLicenseRequest = exports.CheckoutType = exports.UnsupportedDigitalSignatureMethodException = exports.RedirectException = exports.NoEntitlementsAllowedException = exports.EntitlementNotAllowedException = exports.CheckoutBorrowLicenseResponse = exports.CheckoutBorrowLicenseRequest = exports.EntitlementData = exports.EntitlementDataUnit = exports.DigitalSignatureMethod = exports.Metadata = exports.ResourceNotFoundException = exports.ConflictException = exports.CheckInLicenseResponse = exports.CheckInLicenseRequest = exports.AutomatedDiscoveryInformation = exports.AllowedOperation = exports.ValidationException = exports.ServerInternalException = exports.ResourceLimitExceededException = exports.RateLimitExceededException = exports.InvalidParameterValueException = exports.AuthorizationException = exports.AccessDeniedException = exports.AcceptGrantResponse = exports.GrantStatus = exports.AcceptGrantRequest = void 0;
exports.FilterLimitExceededException = exports.GetServiceSettingsResponse = exports.OrganizationConfiguration = exports.GetServiceSettingsRequest = exports.GetLicenseUsageResponse = exports.LicenseUsage = exports.EntitlementUsage = exports.GetLicenseUsageRequest = exports.GetLicenseManagerReportGeneratorResponse = exports.ReportGenerator = exports.S3Location = exports.GetLicenseManagerReportGeneratorRequest = exports.GetLicenseConfigurationResponse = exports.ManagedResourceSummary = exports.ConsumedLicenseSummary = exports.ResourceType = exports.GetLicenseConfigurationRequest = exports.GetLicenseResponse = exports.License = exports.IssuerDetails = exports.GetLicenseRequest = exports.GetGrantResponse = exports.Grant = exports.GetGrantRequest = exports.GetAccessTokenResponse = exports.GetAccessTokenRequest = exports.ExtendLicenseConsumptionResponse = exports.ExtendLicenseConsumptionRequest = exports.DeleteTokenResponse = exports.DeleteTokenRequest = exports.DeleteLicenseManagerReportGeneratorResponse = exports.DeleteLicenseManagerReportGeneratorRequest = exports.DeleteLicenseConfigurationResponse = exports.DeleteLicenseConfigurationRequest = exports.DeleteLicenseResponse = exports.LicenseDeletionStatus = exports.DeleteLicenseRequest = exports.DeleteGrantResponse = exports.DeleteGrantRequest = exports.CreateTokenResponse = exports.TokenType = exports.CreateTokenRequest = exports.CreateLicenseVersionResponse = exports.CreateLicenseVersionRequest = exports.CreateLicenseManagerReportGeneratorResponse = exports.CreateLicenseManagerReportGeneratorRequest = exports.ReportType = exports.ReportFrequency = exports.ReportFrequencyType = exports.ReportContext = void 0;
exports.UpdateLicenseConfigurationRequest = exports.LicenseConfigurationStatus = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RejectGrantResponse = exports.RejectGrantRequest = exports.ListUsageForLicenseConfigurationResponse = exports.LicenseConfigurationUsage = exports.ListUsageForLicenseConfigurationRequest = exports.ListTokensResponse = exports.TokenData = exports.ListTokensRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListResourceInventoryResponse = exports.ResourceInventory = exports.ListResourceInventoryRequest = exports.InventoryFilter = exports.InventoryFilterCondition = exports.FailedDependencyException = exports.ListReceivedLicensesResponse = exports.GrantedLicense = exports.ReceivedMetadata = exports.ReceivedStatus = exports.ListReceivedLicensesRequest = exports.ListReceivedGrantsResponse = exports.ListReceivedGrantsRequest = exports.ListLicenseVersionsResponse = exports.ListLicenseVersionsRequest = exports.ListLicenseSpecificationsForResourceResponse = exports.LicenseSpecification = exports.ListLicenseSpecificationsForResourceRequest = exports.ListLicensesResponse = exports.ListLicensesRequest = exports.ListLicenseManagerReportGeneratorsResponse = exports.ListLicenseManagerReportGeneratorsRequest = exports.ListLicenseConfigurationsResponse = exports.LicenseConfiguration = exports.ListLicenseConfigurationsRequest = exports.ListFailuresForLicenseConfigurationOperationsResponse = exports.LicenseOperationFailure = exports.ListFailuresForLicenseConfigurationOperationsRequest = exports.ListDistributedGrantsResponse = exports.ListDistributedGrantsRequest = exports.Filter = exports.ListAssociationsForLicenseConfigurationResponse = exports.LicenseConfigurationAssociation = exports.ListAssociationsForLicenseConfigurationRequest = void 0;
exports.UpdateServiceSettingsResponse = exports.UpdateServiceSettingsRequest = exports.UpdateLicenseSpecificationsForResourceResponse = exports.UpdateLicenseSpecificationsForResourceRequest = exports.LicenseUsageException = exports.InvalidResourceStateException = exports.UpdateLicenseManagerReportGeneratorResponse = exports.UpdateLicenseManagerReportGeneratorRequest = exports.UpdateLicenseConfigurationResponse = void 0;
var AcceptGrantRequest;
(function (AcceptGrantRequest) {
    /**
     * @internal
     */
    AcceptGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptGrantRequest = exports.AcceptGrantRequest || (exports.AcceptGrantRequest = {}));
var GrantStatus;
(function (GrantStatus) {
    GrantStatus["ACTIVE"] = "ACTIVE";
    GrantStatus["DELETED"] = "DELETED";
    GrantStatus["DISABLED"] = "DISABLED";
    GrantStatus["FAILED_WORKFLOW"] = "FAILED_WORKFLOW";
    GrantStatus["PENDING_ACCEPT"] = "PENDING_ACCEPT";
    GrantStatus["PENDING_DELETE"] = "PENDING_DELETE";
    GrantStatus["PENDING_WORKFLOW"] = "PENDING_WORKFLOW";
    GrantStatus["REJECTED"] = "REJECTED";
})(GrantStatus = exports.GrantStatus || (exports.GrantStatus = {}));
var AcceptGrantResponse;
(function (AcceptGrantResponse) {
    /**
     * @internal
     */
    AcceptGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptGrantResponse = exports.AcceptGrantResponse || (exports.AcceptGrantResponse = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AuthorizationException;
(function (AuthorizationException) {
    /**
     * @internal
     */
    AuthorizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationException = exports.AuthorizationException || (exports.AuthorizationException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var RateLimitExceededException;
(function (RateLimitExceededException) {
    /**
     * @internal
     */
    RateLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateLimitExceededException = exports.RateLimitExceededException || (exports.RateLimitExceededException = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ServerInternalException;
(function (ServerInternalException) {
    /**
     * @internal
     */
    ServerInternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerInternalException = exports.ServerInternalException || (exports.ServerInternalException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AllowedOperation;
(function (AllowedOperation) {
    AllowedOperation["CHECKOUT_BORROW_LICENSE"] = "CheckoutBorrowLicense";
    AllowedOperation["CHECKOUT_LICENSE"] = "CheckoutLicense";
    AllowedOperation["CHECK_IN_LICENSE"] = "CheckInLicense";
    AllowedOperation["CREATE_GRANT"] = "CreateGrant";
    AllowedOperation["CREATE_TOKEN"] = "CreateToken";
    AllowedOperation["EXTEND_CONSUMPTION_LICENSE"] = "ExtendConsumptionLicense";
    AllowedOperation["LIST_PURCHASED_LICENSES"] = "ListPurchasedLicenses";
})(AllowedOperation = exports.AllowedOperation || (exports.AllowedOperation = {}));
var AutomatedDiscoveryInformation;
(function (AutomatedDiscoveryInformation) {
    /**
     * @internal
     */
    AutomatedDiscoveryInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomatedDiscoveryInformation = exports.AutomatedDiscoveryInformation || (exports.AutomatedDiscoveryInformation = {}));
var CheckInLicenseRequest;
(function (CheckInLicenseRequest) {
    /**
     * @internal
     */
    CheckInLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckInLicenseRequest = exports.CheckInLicenseRequest || (exports.CheckInLicenseRequest = {}));
var CheckInLicenseResponse;
(function (CheckInLicenseResponse) {
    /**
     * @internal
     */
    CheckInLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckInLicenseResponse = exports.CheckInLicenseResponse || (exports.CheckInLicenseResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var Metadata;
(function (Metadata) {
    /**
     * @internal
     */
    Metadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metadata = exports.Metadata || (exports.Metadata = {}));
var DigitalSignatureMethod;
(function (DigitalSignatureMethod) {
    DigitalSignatureMethod["JWT_PS384"] = "JWT_PS384";
})(DigitalSignatureMethod = exports.DigitalSignatureMethod || (exports.DigitalSignatureMethod = {}));
var EntitlementDataUnit;
(function (EntitlementDataUnit) {
    EntitlementDataUnit["BITS"] = "Bits";
    EntitlementDataUnit["BITS_PER_SECOND"] = "Bits/Second";
    EntitlementDataUnit["BYTES"] = "Bytes";
    EntitlementDataUnit["BYTES_PER_SECOND"] = "Bytes/Second";
    EntitlementDataUnit["COUNT"] = "Count";
    EntitlementDataUnit["COUNT_PER_SECOND"] = "Count/Second";
    EntitlementDataUnit["GIGABITS"] = "Gigabits";
    EntitlementDataUnit["GIGABITS_PER_SECOND"] = "Gigabits/Second";
    EntitlementDataUnit["GIGABYTES"] = "Gigabytes";
    EntitlementDataUnit["GIGABYTES_PER_SECOND"] = "Gigabytes/Second";
    EntitlementDataUnit["KILOBITS"] = "Kilobits";
    EntitlementDataUnit["KILOBITS_PER_SECOND"] = "Kilobits/Second";
    EntitlementDataUnit["KILOBYTES"] = "Kilobytes";
    EntitlementDataUnit["KILOBYTES_PER_SECOND"] = "Kilobytes/Second";
    EntitlementDataUnit["MEGABITS"] = "Megabits";
    EntitlementDataUnit["MEGABITS_PER_SECOND"] = "Megabits/Second";
    EntitlementDataUnit["MEGABYTES"] = "Megabytes";
    EntitlementDataUnit["MEGABYTES_PER_SECOND"] = "Megabytes/Second";
    EntitlementDataUnit["MICROSECONDS"] = "Microseconds";
    EntitlementDataUnit["MILLISECONDS"] = "Milliseconds";
    EntitlementDataUnit["NONE"] = "None";
    EntitlementDataUnit["PERCENT"] = "Percent";
    EntitlementDataUnit["SECONDS"] = "Seconds";
    EntitlementDataUnit["TERABITS"] = "Terabits";
    EntitlementDataUnit["TERABITS_PER_SECOND"] = "Terabits/Second";
    EntitlementDataUnit["TERABYTES"] = "Terabytes";
    EntitlementDataUnit["TERABYTES_PER_SECOND"] = "Terabytes/Second";
})(EntitlementDataUnit = exports.EntitlementDataUnit || (exports.EntitlementDataUnit = {}));
var EntitlementData;
(function (EntitlementData) {
    /**
     * @internal
     */
    EntitlementData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitlementData = exports.EntitlementData || (exports.EntitlementData = {}));
var CheckoutBorrowLicenseRequest;
(function (CheckoutBorrowLicenseRequest) {
    /**
     * @internal
     */
    CheckoutBorrowLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckoutBorrowLicenseRequest = exports.CheckoutBorrowLicenseRequest || (exports.CheckoutBorrowLicenseRequest = {}));
var CheckoutBorrowLicenseResponse;
(function (CheckoutBorrowLicenseResponse) {
    /**
     * @internal
     */
    CheckoutBorrowLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckoutBorrowLicenseResponse = exports.CheckoutBorrowLicenseResponse || (exports.CheckoutBorrowLicenseResponse = {}));
var EntitlementNotAllowedException;
(function (EntitlementNotAllowedException) {
    /**
     * @internal
     */
    EntitlementNotAllowedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitlementNotAllowedException = exports.EntitlementNotAllowedException || (exports.EntitlementNotAllowedException = {}));
var NoEntitlementsAllowedException;
(function (NoEntitlementsAllowedException) {
    /**
     * @internal
     */
    NoEntitlementsAllowedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoEntitlementsAllowedException = exports.NoEntitlementsAllowedException || (exports.NoEntitlementsAllowedException = {}));
var RedirectException;
(function (RedirectException) {
    /**
     * @internal
     */
    RedirectException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedirectException = exports.RedirectException || (exports.RedirectException = {}));
var UnsupportedDigitalSignatureMethodException;
(function (UnsupportedDigitalSignatureMethodException) {
    /**
     * @internal
     */
    UnsupportedDigitalSignatureMethodException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedDigitalSignatureMethodException = exports.UnsupportedDigitalSignatureMethodException || (exports.UnsupportedDigitalSignatureMethodException = {}));
var CheckoutType;
(function (CheckoutType) {
    CheckoutType["PROVISIONAL"] = "PROVISIONAL";
})(CheckoutType = exports.CheckoutType || (exports.CheckoutType = {}));
var CheckoutLicenseRequest;
(function (CheckoutLicenseRequest) {
    /**
     * @internal
     */
    CheckoutLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckoutLicenseRequest = exports.CheckoutLicenseRequest || (exports.CheckoutLicenseRequest = {}));
var CheckoutLicenseResponse;
(function (CheckoutLicenseResponse) {
    /**
     * @internal
     */
    CheckoutLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckoutLicenseResponse = exports.CheckoutLicenseResponse || (exports.CheckoutLicenseResponse = {}));
var CreateGrantRequest;
(function (CreateGrantRequest) {
    /**
     * @internal
     */
    CreateGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantRequest = exports.CreateGrantRequest || (exports.CreateGrantRequest = {}));
var CreateGrantResponse;
(function (CreateGrantResponse) {
    /**
     * @internal
     */
    CreateGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantResponse = exports.CreateGrantResponse || (exports.CreateGrantResponse = {}));
var CreateGrantVersionRequest;
(function (CreateGrantVersionRequest) {
    /**
     * @internal
     */
    CreateGrantVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantVersionRequest = exports.CreateGrantVersionRequest || (exports.CreateGrantVersionRequest = {}));
var CreateGrantVersionResponse;
(function (CreateGrantVersionResponse) {
    /**
     * @internal
     */
    CreateGrantVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGrantVersionResponse = exports.CreateGrantVersionResponse || (exports.CreateGrantVersionResponse = {}));
var BorrowConfiguration;
(function (BorrowConfiguration) {
    /**
     * @internal
     */
    BorrowConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BorrowConfiguration = exports.BorrowConfiguration || (exports.BorrowConfiguration = {}));
var ProvisionalConfiguration;
(function (ProvisionalConfiguration) {
    /**
     * @internal
     */
    ProvisionalConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionalConfiguration = exports.ProvisionalConfiguration || (exports.ProvisionalConfiguration = {}));
var RenewType;
(function (RenewType) {
    RenewType["MONTHLY"] = "Monthly";
    RenewType["NONE"] = "None";
    RenewType["WEEKLY"] = "Weekly";
})(RenewType = exports.RenewType || (exports.RenewType = {}));
var ConsumptionConfiguration;
(function (ConsumptionConfiguration) {
    /**
     * @internal
     */
    ConsumptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConsumptionConfiguration = exports.ConsumptionConfiguration || (exports.ConsumptionConfiguration = {}));
var EntitlementUnit;
(function (EntitlementUnit) {
    EntitlementUnit["BITS"] = "Bits";
    EntitlementUnit["BITS_PER_SECOND"] = "Bits/Second";
    EntitlementUnit["BYTES"] = "Bytes";
    EntitlementUnit["BYTES_PER_SECOND"] = "Bytes/Second";
    EntitlementUnit["COUNT"] = "Count";
    EntitlementUnit["COUNT_PER_SECOND"] = "Count/Second";
    EntitlementUnit["GIGABITS"] = "Gigabits";
    EntitlementUnit["GIGABITS_PER_SECOND"] = "Gigabits/Second";
    EntitlementUnit["GIGABYTES"] = "Gigabytes";
    EntitlementUnit["GIGABYTES_PER_SECOND"] = "Gigabytes/Second";
    EntitlementUnit["KILOBITS"] = "Kilobits";
    EntitlementUnit["KILOBITS_PER_SECOND"] = "Kilobits/Second";
    EntitlementUnit["KILOBYTES"] = "Kilobytes";
    EntitlementUnit["KILOBYTES_PER_SECOND"] = "Kilobytes/Second";
    EntitlementUnit["MEGABITS"] = "Megabits";
    EntitlementUnit["MEGABITS_PER_SECOND"] = "Megabits/Second";
    EntitlementUnit["MEGABYTES"] = "Megabytes";
    EntitlementUnit["MEGABYTES_PER_SECOND"] = "Megabytes/Second";
    EntitlementUnit["MICROSECONDS"] = "Microseconds";
    EntitlementUnit["MILLISECONDS"] = "Milliseconds";
    EntitlementUnit["NONE"] = "None";
    EntitlementUnit["PERCENT"] = "Percent";
    EntitlementUnit["SECONDS"] = "Seconds";
    EntitlementUnit["TERABITS"] = "Terabits";
    EntitlementUnit["TERABITS_PER_SECOND"] = "Terabits/Second";
    EntitlementUnit["TERABYTES"] = "Terabytes";
    EntitlementUnit["TERABYTES_PER_SECOND"] = "Terabytes/Second";
})(EntitlementUnit = exports.EntitlementUnit || (exports.EntitlementUnit = {}));
var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entitlement = exports.Entitlement || (exports.Entitlement = {}));
var Issuer;
(function (Issuer) {
    /**
     * @internal
     */
    Issuer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Issuer = exports.Issuer || (exports.Issuer = {}));
var DatetimeRange;
(function (DatetimeRange) {
    /**
     * @internal
     */
    DatetimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatetimeRange = exports.DatetimeRange || (exports.DatetimeRange = {}));
var CreateLicenseRequest;
(function (CreateLicenseRequest) {
    /**
     * @internal
     */
    CreateLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseRequest = exports.CreateLicenseRequest || (exports.CreateLicenseRequest = {}));
var LicenseStatus;
(function (LicenseStatus) {
    LicenseStatus["AVAILABLE"] = "AVAILABLE";
    LicenseStatus["DEACTIVATED"] = "DEACTIVATED";
    LicenseStatus["DELETED"] = "DELETED";
    LicenseStatus["EXPIRED"] = "EXPIRED";
    LicenseStatus["PENDING_AVAILABLE"] = "PENDING_AVAILABLE";
    LicenseStatus["PENDING_DELETE"] = "PENDING_DELETE";
    LicenseStatus["SUSPENDED"] = "SUSPENDED";
})(LicenseStatus = exports.LicenseStatus || (exports.LicenseStatus = {}));
var CreateLicenseResponse;
(function (CreateLicenseResponse) {
    /**
     * @internal
     */
    CreateLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseResponse = exports.CreateLicenseResponse || (exports.CreateLicenseResponse = {}));
var LicenseCountingType;
(function (LicenseCountingType) {
    LicenseCountingType["CORE"] = "Core";
    LicenseCountingType["INSTANCE"] = "Instance";
    LicenseCountingType["SOCKET"] = "Socket";
    LicenseCountingType["VCPU"] = "vCPU";
})(LicenseCountingType = exports.LicenseCountingType || (exports.LicenseCountingType = {}));
var ProductInformationFilter;
(function (ProductInformationFilter) {
    /**
     * @internal
     */
    ProductInformationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductInformationFilter = exports.ProductInformationFilter || (exports.ProductInformationFilter = {}));
var ProductInformation;
(function (ProductInformation) {
    /**
     * @internal
     */
    ProductInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductInformation = exports.ProductInformation || (exports.ProductInformation = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateLicenseConfigurationRequest;
(function (CreateLicenseConfigurationRequest) {
    /**
     * @internal
     */
    CreateLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseConfigurationRequest = exports.CreateLicenseConfigurationRequest || (exports.CreateLicenseConfigurationRequest = {}));
var CreateLicenseConfigurationResponse;
(function (CreateLicenseConfigurationResponse) {
    /**
     * @internal
     */
    CreateLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseConfigurationResponse = exports.CreateLicenseConfigurationResponse || (exports.CreateLicenseConfigurationResponse = {}));
var ReportContext;
(function (ReportContext) {
    /**
     * @internal
     */
    ReportContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportContext = exports.ReportContext || (exports.ReportContext = {}));
var ReportFrequencyType;
(function (ReportFrequencyType) {
    ReportFrequencyType["DAY"] = "DAY";
    ReportFrequencyType["MONTH"] = "MONTH";
    ReportFrequencyType["WEEK"] = "WEEK";
})(ReportFrequencyType = exports.ReportFrequencyType || (exports.ReportFrequencyType = {}));
var ReportFrequency;
(function (ReportFrequency) {
    /**
     * @internal
     */
    ReportFrequency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportFrequency = exports.ReportFrequency || (exports.ReportFrequency = {}));
var ReportType;
(function (ReportType) {
    ReportType["LICENSE_CONFIGURATION_SUMMARY_REPORT"] = "LicenseConfigurationSummaryReport";
    ReportType["LICENSE_CONFIGURATION_USAGE_REPORT"] = "LicenseConfigurationUsageReport";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var CreateLicenseManagerReportGeneratorRequest;
(function (CreateLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    CreateLicenseManagerReportGeneratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseManagerReportGeneratorRequest = exports.CreateLicenseManagerReportGeneratorRequest || (exports.CreateLicenseManagerReportGeneratorRequest = {}));
var CreateLicenseManagerReportGeneratorResponse;
(function (CreateLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    CreateLicenseManagerReportGeneratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseManagerReportGeneratorResponse = exports.CreateLicenseManagerReportGeneratorResponse || (exports.CreateLicenseManagerReportGeneratorResponse = {}));
var CreateLicenseVersionRequest;
(function (CreateLicenseVersionRequest) {
    /**
     * @internal
     */
    CreateLicenseVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseVersionRequest = exports.CreateLicenseVersionRequest || (exports.CreateLicenseVersionRequest = {}));
var CreateLicenseVersionResponse;
(function (CreateLicenseVersionResponse) {
    /**
     * @internal
     */
    CreateLicenseVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLicenseVersionResponse = exports.CreateLicenseVersionResponse || (exports.CreateLicenseVersionResponse = {}));
var CreateTokenRequest;
(function (CreateTokenRequest) {
    /**
     * @internal
     */
    CreateTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTokenRequest = exports.CreateTokenRequest || (exports.CreateTokenRequest = {}));
var TokenType;
(function (TokenType) {
    TokenType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var CreateTokenResponse;
(function (CreateTokenResponse) {
    /**
     * @internal
     */
    CreateTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTokenResponse = exports.CreateTokenResponse || (exports.CreateTokenResponse = {}));
var DeleteGrantRequest;
(function (DeleteGrantRequest) {
    /**
     * @internal
     */
    DeleteGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGrantRequest = exports.DeleteGrantRequest || (exports.DeleteGrantRequest = {}));
var DeleteGrantResponse;
(function (DeleteGrantResponse) {
    /**
     * @internal
     */
    DeleteGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGrantResponse = exports.DeleteGrantResponse || (exports.DeleteGrantResponse = {}));
var DeleteLicenseRequest;
(function (DeleteLicenseRequest) {
    /**
     * @internal
     */
    DeleteLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseRequest = exports.DeleteLicenseRequest || (exports.DeleteLicenseRequest = {}));
var LicenseDeletionStatus;
(function (LicenseDeletionStatus) {
    LicenseDeletionStatus["DELETED"] = "DELETED";
    LicenseDeletionStatus["PENDING_DELETE"] = "PENDING_DELETE";
})(LicenseDeletionStatus = exports.LicenseDeletionStatus || (exports.LicenseDeletionStatus = {}));
var DeleteLicenseResponse;
(function (DeleteLicenseResponse) {
    /**
     * @internal
     */
    DeleteLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseResponse = exports.DeleteLicenseResponse || (exports.DeleteLicenseResponse = {}));
var DeleteLicenseConfigurationRequest;
(function (DeleteLicenseConfigurationRequest) {
    /**
     * @internal
     */
    DeleteLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseConfigurationRequest = exports.DeleteLicenseConfigurationRequest || (exports.DeleteLicenseConfigurationRequest = {}));
var DeleteLicenseConfigurationResponse;
(function (DeleteLicenseConfigurationResponse) {
    /**
     * @internal
     */
    DeleteLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseConfigurationResponse = exports.DeleteLicenseConfigurationResponse || (exports.DeleteLicenseConfigurationResponse = {}));
var DeleteLicenseManagerReportGeneratorRequest;
(function (DeleteLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    DeleteLicenseManagerReportGeneratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseManagerReportGeneratorRequest = exports.DeleteLicenseManagerReportGeneratorRequest || (exports.DeleteLicenseManagerReportGeneratorRequest = {}));
var DeleteLicenseManagerReportGeneratorResponse;
(function (DeleteLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    DeleteLicenseManagerReportGeneratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLicenseManagerReportGeneratorResponse = exports.DeleteLicenseManagerReportGeneratorResponse || (exports.DeleteLicenseManagerReportGeneratorResponse = {}));
var DeleteTokenRequest;
(function (DeleteTokenRequest) {
    /**
     * @internal
     */
    DeleteTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTokenRequest = exports.DeleteTokenRequest || (exports.DeleteTokenRequest = {}));
var DeleteTokenResponse;
(function (DeleteTokenResponse) {
    /**
     * @internal
     */
    DeleteTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTokenResponse = exports.DeleteTokenResponse || (exports.DeleteTokenResponse = {}));
var ExtendLicenseConsumptionRequest;
(function (ExtendLicenseConsumptionRequest) {
    /**
     * @internal
     */
    ExtendLicenseConsumptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExtendLicenseConsumptionRequest = exports.ExtendLicenseConsumptionRequest || (exports.ExtendLicenseConsumptionRequest = {}));
var ExtendLicenseConsumptionResponse;
(function (ExtendLicenseConsumptionResponse) {
    /**
     * @internal
     */
    ExtendLicenseConsumptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExtendLicenseConsumptionResponse = exports.ExtendLicenseConsumptionResponse || (exports.ExtendLicenseConsumptionResponse = {}));
var GetAccessTokenRequest;
(function (GetAccessTokenRequest) {
    /**
     * @internal
     */
    GetAccessTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessTokenRequest = exports.GetAccessTokenRequest || (exports.GetAccessTokenRequest = {}));
var GetAccessTokenResponse;
(function (GetAccessTokenResponse) {
    /**
     * @internal
     */
    GetAccessTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessTokenResponse = exports.GetAccessTokenResponse || (exports.GetAccessTokenResponse = {}));
var GetGrantRequest;
(function (GetGrantRequest) {
    /**
     * @internal
     */
    GetGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGrantRequest = exports.GetGrantRequest || (exports.GetGrantRequest = {}));
var Grant;
(function (Grant) {
    /**
     * @internal
     */
    Grant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Grant = exports.Grant || (exports.Grant = {}));
var GetGrantResponse;
(function (GetGrantResponse) {
    /**
     * @internal
     */
    GetGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGrantResponse = exports.GetGrantResponse || (exports.GetGrantResponse = {}));
var GetLicenseRequest;
(function (GetLicenseRequest) {
    /**
     * @internal
     */
    GetLicenseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseRequest = exports.GetLicenseRequest || (exports.GetLicenseRequest = {}));
var IssuerDetails;
(function (IssuerDetails) {
    /**
     * @internal
     */
    IssuerDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IssuerDetails = exports.IssuerDetails || (exports.IssuerDetails = {}));
var License;
(function (License) {
    /**
     * @internal
     */
    License.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(License = exports.License || (exports.License = {}));
var GetLicenseResponse;
(function (GetLicenseResponse) {
    /**
     * @internal
     */
    GetLicenseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseResponse = exports.GetLicenseResponse || (exports.GetLicenseResponse = {}));
var GetLicenseConfigurationRequest;
(function (GetLicenseConfigurationRequest) {
    /**
     * @internal
     */
    GetLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseConfigurationRequest = exports.GetLicenseConfigurationRequest || (exports.GetLicenseConfigurationRequest = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["EC2_AMI"] = "EC2_AMI";
    ResourceType["EC2_HOST"] = "EC2_HOST";
    ResourceType["EC2_INSTANCE"] = "EC2_INSTANCE";
    ResourceType["RDS"] = "RDS";
    ResourceType["SYSTEMS_MANAGER_MANAGED_INSTANCE"] = "SYSTEMS_MANAGER_MANAGED_INSTANCE";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ConsumedLicenseSummary;
(function (ConsumedLicenseSummary) {
    /**
     * @internal
     */
    ConsumedLicenseSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConsumedLicenseSummary = exports.ConsumedLicenseSummary || (exports.ConsumedLicenseSummary = {}));
var ManagedResourceSummary;
(function (ManagedResourceSummary) {
    /**
     * @internal
     */
    ManagedResourceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedResourceSummary = exports.ManagedResourceSummary || (exports.ManagedResourceSummary = {}));
var GetLicenseConfigurationResponse;
(function (GetLicenseConfigurationResponse) {
    /**
     * @internal
     */
    GetLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseConfigurationResponse = exports.GetLicenseConfigurationResponse || (exports.GetLicenseConfigurationResponse = {}));
var GetLicenseManagerReportGeneratorRequest;
(function (GetLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    GetLicenseManagerReportGeneratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseManagerReportGeneratorRequest = exports.GetLicenseManagerReportGeneratorRequest || (exports.GetLicenseManagerReportGeneratorRequest = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var ReportGenerator;
(function (ReportGenerator) {
    /**
     * @internal
     */
    ReportGenerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportGenerator = exports.ReportGenerator || (exports.ReportGenerator = {}));
var GetLicenseManagerReportGeneratorResponse;
(function (GetLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    GetLicenseManagerReportGeneratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseManagerReportGeneratorResponse = exports.GetLicenseManagerReportGeneratorResponse || (exports.GetLicenseManagerReportGeneratorResponse = {}));
var GetLicenseUsageRequest;
(function (GetLicenseUsageRequest) {
    /**
     * @internal
     */
    GetLicenseUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseUsageRequest = exports.GetLicenseUsageRequest || (exports.GetLicenseUsageRequest = {}));
var EntitlementUsage;
(function (EntitlementUsage) {
    /**
     * @internal
     */
    EntitlementUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitlementUsage = exports.EntitlementUsage || (exports.EntitlementUsage = {}));
var LicenseUsage;
(function (LicenseUsage) {
    /**
     * @internal
     */
    LicenseUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseUsage = exports.LicenseUsage || (exports.LicenseUsage = {}));
var GetLicenseUsageResponse;
(function (GetLicenseUsageResponse) {
    /**
     * @internal
     */
    GetLicenseUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLicenseUsageResponse = exports.GetLicenseUsageResponse || (exports.GetLicenseUsageResponse = {}));
var GetServiceSettingsRequest;
(function (GetServiceSettingsRequest) {
    /**
     * @internal
     */
    GetServiceSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceSettingsRequest = exports.GetServiceSettingsRequest || (exports.GetServiceSettingsRequest = {}));
var OrganizationConfiguration;
(function (OrganizationConfiguration) {
    /**
     * @internal
     */
    OrganizationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationConfiguration = exports.OrganizationConfiguration || (exports.OrganizationConfiguration = {}));
var GetServiceSettingsResponse;
(function (GetServiceSettingsResponse) {
    /**
     * @internal
     */
    GetServiceSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceSettingsResponse = exports.GetServiceSettingsResponse || (exports.GetServiceSettingsResponse = {}));
var FilterLimitExceededException;
(function (FilterLimitExceededException) {
    /**
     * @internal
     */
    FilterLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterLimitExceededException = exports.FilterLimitExceededException || (exports.FilterLimitExceededException = {}));
var ListAssociationsForLicenseConfigurationRequest;
(function (ListAssociationsForLicenseConfigurationRequest) {
    /**
     * @internal
     */
    ListAssociationsForLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsForLicenseConfigurationRequest = exports.ListAssociationsForLicenseConfigurationRequest || (exports.ListAssociationsForLicenseConfigurationRequest = {}));
var LicenseConfigurationAssociation;
(function (LicenseConfigurationAssociation) {
    /**
     * @internal
     */
    LicenseConfigurationAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseConfigurationAssociation = exports.LicenseConfigurationAssociation || (exports.LicenseConfigurationAssociation = {}));
var ListAssociationsForLicenseConfigurationResponse;
(function (ListAssociationsForLicenseConfigurationResponse) {
    /**
     * @internal
     */
    ListAssociationsForLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsForLicenseConfigurationResponse = exports.ListAssociationsForLicenseConfigurationResponse || (exports.ListAssociationsForLicenseConfigurationResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var ListDistributedGrantsRequest;
(function (ListDistributedGrantsRequest) {
    /**
     * @internal
     */
    ListDistributedGrantsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDistributedGrantsRequest = exports.ListDistributedGrantsRequest || (exports.ListDistributedGrantsRequest = {}));
var ListDistributedGrantsResponse;
(function (ListDistributedGrantsResponse) {
    /**
     * @internal
     */
    ListDistributedGrantsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDistributedGrantsResponse = exports.ListDistributedGrantsResponse || (exports.ListDistributedGrantsResponse = {}));
var ListFailuresForLicenseConfigurationOperationsRequest;
(function (ListFailuresForLicenseConfigurationOperationsRequest) {
    /**
     * @internal
     */
    ListFailuresForLicenseConfigurationOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFailuresForLicenseConfigurationOperationsRequest = exports.ListFailuresForLicenseConfigurationOperationsRequest || (exports.ListFailuresForLicenseConfigurationOperationsRequest = {}));
var LicenseOperationFailure;
(function (LicenseOperationFailure) {
    /**
     * @internal
     */
    LicenseOperationFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseOperationFailure = exports.LicenseOperationFailure || (exports.LicenseOperationFailure = {}));
var ListFailuresForLicenseConfigurationOperationsResponse;
(function (ListFailuresForLicenseConfigurationOperationsResponse) {
    /**
     * @internal
     */
    ListFailuresForLicenseConfigurationOperationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFailuresForLicenseConfigurationOperationsResponse = exports.ListFailuresForLicenseConfigurationOperationsResponse || (exports.ListFailuresForLicenseConfigurationOperationsResponse = {}));
var ListLicenseConfigurationsRequest;
(function (ListLicenseConfigurationsRequest) {
    /**
     * @internal
     */
    ListLicenseConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseConfigurationsRequest = exports.ListLicenseConfigurationsRequest || (exports.ListLicenseConfigurationsRequest = {}));
var LicenseConfiguration;
(function (LicenseConfiguration) {
    /**
     * @internal
     */
    LicenseConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseConfiguration = exports.LicenseConfiguration || (exports.LicenseConfiguration = {}));
var ListLicenseConfigurationsResponse;
(function (ListLicenseConfigurationsResponse) {
    /**
     * @internal
     */
    ListLicenseConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseConfigurationsResponse = exports.ListLicenseConfigurationsResponse || (exports.ListLicenseConfigurationsResponse = {}));
var ListLicenseManagerReportGeneratorsRequest;
(function (ListLicenseManagerReportGeneratorsRequest) {
    /**
     * @internal
     */
    ListLicenseManagerReportGeneratorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseManagerReportGeneratorsRequest = exports.ListLicenseManagerReportGeneratorsRequest || (exports.ListLicenseManagerReportGeneratorsRequest = {}));
var ListLicenseManagerReportGeneratorsResponse;
(function (ListLicenseManagerReportGeneratorsResponse) {
    /**
     * @internal
     */
    ListLicenseManagerReportGeneratorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseManagerReportGeneratorsResponse = exports.ListLicenseManagerReportGeneratorsResponse || (exports.ListLicenseManagerReportGeneratorsResponse = {}));
var ListLicensesRequest;
(function (ListLicensesRequest) {
    /**
     * @internal
     */
    ListLicensesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicensesRequest = exports.ListLicensesRequest || (exports.ListLicensesRequest = {}));
var ListLicensesResponse;
(function (ListLicensesResponse) {
    /**
     * @internal
     */
    ListLicensesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicensesResponse = exports.ListLicensesResponse || (exports.ListLicensesResponse = {}));
var ListLicenseSpecificationsForResourceRequest;
(function (ListLicenseSpecificationsForResourceRequest) {
    /**
     * @internal
     */
    ListLicenseSpecificationsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseSpecificationsForResourceRequest = exports.ListLicenseSpecificationsForResourceRequest || (exports.ListLicenseSpecificationsForResourceRequest = {}));
var LicenseSpecification;
(function (LicenseSpecification) {
    /**
     * @internal
     */
    LicenseSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseSpecification = exports.LicenseSpecification || (exports.LicenseSpecification = {}));
var ListLicenseSpecificationsForResourceResponse;
(function (ListLicenseSpecificationsForResourceResponse) {
    /**
     * @internal
     */
    ListLicenseSpecificationsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseSpecificationsForResourceResponse = exports.ListLicenseSpecificationsForResourceResponse || (exports.ListLicenseSpecificationsForResourceResponse = {}));
var ListLicenseVersionsRequest;
(function (ListLicenseVersionsRequest) {
    /**
     * @internal
     */
    ListLicenseVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseVersionsRequest = exports.ListLicenseVersionsRequest || (exports.ListLicenseVersionsRequest = {}));
var ListLicenseVersionsResponse;
(function (ListLicenseVersionsResponse) {
    /**
     * @internal
     */
    ListLicenseVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLicenseVersionsResponse = exports.ListLicenseVersionsResponse || (exports.ListLicenseVersionsResponse = {}));
var ListReceivedGrantsRequest;
(function (ListReceivedGrantsRequest) {
    /**
     * @internal
     */
    ListReceivedGrantsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReceivedGrantsRequest = exports.ListReceivedGrantsRequest || (exports.ListReceivedGrantsRequest = {}));
var ListReceivedGrantsResponse;
(function (ListReceivedGrantsResponse) {
    /**
     * @internal
     */
    ListReceivedGrantsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReceivedGrantsResponse = exports.ListReceivedGrantsResponse || (exports.ListReceivedGrantsResponse = {}));
var ListReceivedLicensesRequest;
(function (ListReceivedLicensesRequest) {
    /**
     * @internal
     */
    ListReceivedLicensesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReceivedLicensesRequest = exports.ListReceivedLicensesRequest || (exports.ListReceivedLicensesRequest = {}));
var ReceivedStatus;
(function (ReceivedStatus) {
    ReceivedStatus["ACTIVE"] = "ACTIVE";
    ReceivedStatus["DELETED"] = "DELETED";
    ReceivedStatus["DISABLED"] = "DISABLED";
    ReceivedStatus["FAILED_WORKFLOW"] = "FAILED_WORKFLOW";
    ReceivedStatus["PENDING_ACCEPT"] = "PENDING_ACCEPT";
    ReceivedStatus["PENDING_WORKFLOW"] = "PENDING_WORKFLOW";
    ReceivedStatus["REJECTED"] = "REJECTED";
})(ReceivedStatus = exports.ReceivedStatus || (exports.ReceivedStatus = {}));
var ReceivedMetadata;
(function (ReceivedMetadata) {
    /**
     * @internal
     */
    ReceivedMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceivedMetadata = exports.ReceivedMetadata || (exports.ReceivedMetadata = {}));
var GrantedLicense;
(function (GrantedLicense) {
    /**
     * @internal
     */
    GrantedLicense.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantedLicense = exports.GrantedLicense || (exports.GrantedLicense = {}));
var ListReceivedLicensesResponse;
(function (ListReceivedLicensesResponse) {
    /**
     * @internal
     */
    ListReceivedLicensesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReceivedLicensesResponse = exports.ListReceivedLicensesResponse || (exports.ListReceivedLicensesResponse = {}));
var FailedDependencyException;
(function (FailedDependencyException) {
    /**
     * @internal
     */
    FailedDependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedDependencyException = exports.FailedDependencyException || (exports.FailedDependencyException = {}));
var InventoryFilterCondition;
(function (InventoryFilterCondition) {
    InventoryFilterCondition["BEGINS_WITH"] = "BEGINS_WITH";
    InventoryFilterCondition["CONTAINS"] = "CONTAINS";
    InventoryFilterCondition["EQUALS"] = "EQUALS";
    InventoryFilterCondition["NOT_EQUALS"] = "NOT_EQUALS";
})(InventoryFilterCondition = exports.InventoryFilterCondition || (exports.InventoryFilterCondition = {}));
var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryFilter = exports.InventoryFilter || (exports.InventoryFilter = {}));
var ListResourceInventoryRequest;
(function (ListResourceInventoryRequest) {
    /**
     * @internal
     */
    ListResourceInventoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceInventoryRequest = exports.ListResourceInventoryRequest || (exports.ListResourceInventoryRequest = {}));
var ResourceInventory;
(function (ResourceInventory) {
    /**
     * @internal
     */
    ResourceInventory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInventory = exports.ResourceInventory || (exports.ResourceInventory = {}));
var ListResourceInventoryResponse;
(function (ListResourceInventoryResponse) {
    /**
     * @internal
     */
    ListResourceInventoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceInventoryResponse = exports.ListResourceInventoryResponse || (exports.ListResourceInventoryResponse = {}));
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
var ListTokensRequest;
(function (ListTokensRequest) {
    /**
     * @internal
     */
    ListTokensRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTokensRequest = exports.ListTokensRequest || (exports.ListTokensRequest = {}));
var TokenData;
(function (TokenData) {
    /**
     * @internal
     */
    TokenData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TokenData = exports.TokenData || (exports.TokenData = {}));
var ListTokensResponse;
(function (ListTokensResponse) {
    /**
     * @internal
     */
    ListTokensResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTokensResponse = exports.ListTokensResponse || (exports.ListTokensResponse = {}));
var ListUsageForLicenseConfigurationRequest;
(function (ListUsageForLicenseConfigurationRequest) {
    /**
     * @internal
     */
    ListUsageForLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsageForLicenseConfigurationRequest = exports.ListUsageForLicenseConfigurationRequest || (exports.ListUsageForLicenseConfigurationRequest = {}));
var LicenseConfigurationUsage;
(function (LicenseConfigurationUsage) {
    /**
     * @internal
     */
    LicenseConfigurationUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseConfigurationUsage = exports.LicenseConfigurationUsage || (exports.LicenseConfigurationUsage = {}));
var ListUsageForLicenseConfigurationResponse;
(function (ListUsageForLicenseConfigurationResponse) {
    /**
     * @internal
     */
    ListUsageForLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsageForLicenseConfigurationResponse = exports.ListUsageForLicenseConfigurationResponse || (exports.ListUsageForLicenseConfigurationResponse = {}));
var RejectGrantRequest;
(function (RejectGrantRequest) {
    /**
     * @internal
     */
    RejectGrantRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectGrantRequest = exports.RejectGrantRequest || (exports.RejectGrantRequest = {}));
var RejectGrantResponse;
(function (RejectGrantResponse) {
    /**
     * @internal
     */
    RejectGrantResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectGrantResponse = exports.RejectGrantResponse || (exports.RejectGrantResponse = {}));
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
var LicenseConfigurationStatus;
(function (LicenseConfigurationStatus) {
    LicenseConfigurationStatus["AVAILABLE"] = "AVAILABLE";
    LicenseConfigurationStatus["DISABLED"] = "DISABLED";
})(LicenseConfigurationStatus = exports.LicenseConfigurationStatus || (exports.LicenseConfigurationStatus = {}));
var UpdateLicenseConfigurationRequest;
(function (UpdateLicenseConfigurationRequest) {
    /**
     * @internal
     */
    UpdateLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseConfigurationRequest = exports.UpdateLicenseConfigurationRequest || (exports.UpdateLicenseConfigurationRequest = {}));
var UpdateLicenseConfigurationResponse;
(function (UpdateLicenseConfigurationResponse) {
    /**
     * @internal
     */
    UpdateLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseConfigurationResponse = exports.UpdateLicenseConfigurationResponse || (exports.UpdateLicenseConfigurationResponse = {}));
var UpdateLicenseManagerReportGeneratorRequest;
(function (UpdateLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    UpdateLicenseManagerReportGeneratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseManagerReportGeneratorRequest = exports.UpdateLicenseManagerReportGeneratorRequest || (exports.UpdateLicenseManagerReportGeneratorRequest = {}));
var UpdateLicenseManagerReportGeneratorResponse;
(function (UpdateLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    UpdateLicenseManagerReportGeneratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseManagerReportGeneratorResponse = exports.UpdateLicenseManagerReportGeneratorResponse || (exports.UpdateLicenseManagerReportGeneratorResponse = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    /**
     * @internal
     */
    InvalidResourceStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var LicenseUsageException;
(function (LicenseUsageException) {
    /**
     * @internal
     */
    LicenseUsageException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseUsageException = exports.LicenseUsageException || (exports.LicenseUsageException = {}));
var UpdateLicenseSpecificationsForResourceRequest;
(function (UpdateLicenseSpecificationsForResourceRequest) {
    /**
     * @internal
     */
    UpdateLicenseSpecificationsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseSpecificationsForResourceRequest = exports.UpdateLicenseSpecificationsForResourceRequest || (exports.UpdateLicenseSpecificationsForResourceRequest = {}));
var UpdateLicenseSpecificationsForResourceResponse;
(function (UpdateLicenseSpecificationsForResourceResponse) {
    /**
     * @internal
     */
    UpdateLicenseSpecificationsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLicenseSpecificationsForResourceResponse = exports.UpdateLicenseSpecificationsForResourceResponse || (exports.UpdateLicenseSpecificationsForResourceResponse = {}));
var UpdateServiceSettingsRequest;
(function (UpdateServiceSettingsRequest) {
    /**
     * @internal
     */
    UpdateServiceSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceSettingsRequest = exports.UpdateServiceSettingsRequest || (exports.UpdateServiceSettingsRequest = {}));
var UpdateServiceSettingsResponse;
(function (UpdateServiceSettingsResponse) {
    /**
     * @internal
     */
    UpdateServiceSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceSettingsResponse = exports.UpdateServiceSettingsResponse || (exports.UpdateServiceSettingsResponse = {}));
//# sourceMappingURL=models_0.js.map