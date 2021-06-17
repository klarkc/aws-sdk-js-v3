import { __assign } from "tslib";
export var AcceptGrantRequest;
(function (AcceptGrantRequest) {
    /**
     * @internal
     */
    AcceptGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptGrantRequest || (AcceptGrantRequest = {}));
export var GrantStatus;
(function (GrantStatus) {
    GrantStatus["ACTIVE"] = "ACTIVE";
    GrantStatus["DELETED"] = "DELETED";
    GrantStatus["DISABLED"] = "DISABLED";
    GrantStatus["FAILED_WORKFLOW"] = "FAILED_WORKFLOW";
    GrantStatus["PENDING_ACCEPT"] = "PENDING_ACCEPT";
    GrantStatus["PENDING_DELETE"] = "PENDING_DELETE";
    GrantStatus["PENDING_WORKFLOW"] = "PENDING_WORKFLOW";
    GrantStatus["REJECTED"] = "REJECTED";
})(GrantStatus || (GrantStatus = {}));
export var AcceptGrantResponse;
(function (AcceptGrantResponse) {
    /**
     * @internal
     */
    AcceptGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptGrantResponse || (AcceptGrantResponse = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AuthorizationException;
(function (AuthorizationException) {
    /**
     * @internal
     */
    AuthorizationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizationException || (AuthorizationException = {}));
export var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
export var RateLimitExceededException;
(function (RateLimitExceededException) {
    /**
     * @internal
     */
    RateLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RateLimitExceededException || (RateLimitExceededException = {}));
export var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
export var ServerInternalException;
(function (ServerInternalException) {
    /**
     * @internal
     */
    ServerInternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerInternalException || (ServerInternalException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AllowedOperation;
(function (AllowedOperation) {
    AllowedOperation["CHECKOUT_BORROW_LICENSE"] = "CheckoutBorrowLicense";
    AllowedOperation["CHECKOUT_LICENSE"] = "CheckoutLicense";
    AllowedOperation["CHECK_IN_LICENSE"] = "CheckInLicense";
    AllowedOperation["CREATE_GRANT"] = "CreateGrant";
    AllowedOperation["CREATE_TOKEN"] = "CreateToken";
    AllowedOperation["EXTEND_CONSUMPTION_LICENSE"] = "ExtendConsumptionLicense";
    AllowedOperation["LIST_PURCHASED_LICENSES"] = "ListPurchasedLicenses";
})(AllowedOperation || (AllowedOperation = {}));
export var AutomatedDiscoveryInformation;
(function (AutomatedDiscoveryInformation) {
    /**
     * @internal
     */
    AutomatedDiscoveryInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomatedDiscoveryInformation || (AutomatedDiscoveryInformation = {}));
export var CheckInLicenseRequest;
(function (CheckInLicenseRequest) {
    /**
     * @internal
     */
    CheckInLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckInLicenseRequest || (CheckInLicenseRequest = {}));
export var CheckInLicenseResponse;
(function (CheckInLicenseResponse) {
    /**
     * @internal
     */
    CheckInLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckInLicenseResponse || (CheckInLicenseResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var Metadata;
(function (Metadata) {
    /**
     * @internal
     */
    Metadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metadata || (Metadata = {}));
export var DigitalSignatureMethod;
(function (DigitalSignatureMethod) {
    DigitalSignatureMethod["JWT_PS384"] = "JWT_PS384";
})(DigitalSignatureMethod || (DigitalSignatureMethod = {}));
export var EntitlementDataUnit;
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
})(EntitlementDataUnit || (EntitlementDataUnit = {}));
export var EntitlementData;
(function (EntitlementData) {
    /**
     * @internal
     */
    EntitlementData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntitlementData || (EntitlementData = {}));
export var CheckoutBorrowLicenseRequest;
(function (CheckoutBorrowLicenseRequest) {
    /**
     * @internal
     */
    CheckoutBorrowLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckoutBorrowLicenseRequest || (CheckoutBorrowLicenseRequest = {}));
export var CheckoutBorrowLicenseResponse;
(function (CheckoutBorrowLicenseResponse) {
    /**
     * @internal
     */
    CheckoutBorrowLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckoutBorrowLicenseResponse || (CheckoutBorrowLicenseResponse = {}));
export var EntitlementNotAllowedException;
(function (EntitlementNotAllowedException) {
    /**
     * @internal
     */
    EntitlementNotAllowedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntitlementNotAllowedException || (EntitlementNotAllowedException = {}));
export var NoEntitlementsAllowedException;
(function (NoEntitlementsAllowedException) {
    /**
     * @internal
     */
    NoEntitlementsAllowedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoEntitlementsAllowedException || (NoEntitlementsAllowedException = {}));
export var RedirectException;
(function (RedirectException) {
    /**
     * @internal
     */
    RedirectException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedirectException || (RedirectException = {}));
export var UnsupportedDigitalSignatureMethodException;
(function (UnsupportedDigitalSignatureMethodException) {
    /**
     * @internal
     */
    UnsupportedDigitalSignatureMethodException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedDigitalSignatureMethodException || (UnsupportedDigitalSignatureMethodException = {}));
export var CheckoutType;
(function (CheckoutType) {
    CheckoutType["PROVISIONAL"] = "PROVISIONAL";
})(CheckoutType || (CheckoutType = {}));
export var CheckoutLicenseRequest;
(function (CheckoutLicenseRequest) {
    /**
     * @internal
     */
    CheckoutLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckoutLicenseRequest || (CheckoutLicenseRequest = {}));
export var CheckoutLicenseResponse;
(function (CheckoutLicenseResponse) {
    /**
     * @internal
     */
    CheckoutLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckoutLicenseResponse || (CheckoutLicenseResponse = {}));
export var CreateGrantRequest;
(function (CreateGrantRequest) {
    /**
     * @internal
     */
    CreateGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantRequest || (CreateGrantRequest = {}));
export var CreateGrantResponse;
(function (CreateGrantResponse) {
    /**
     * @internal
     */
    CreateGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantResponse || (CreateGrantResponse = {}));
export var CreateGrantVersionRequest;
(function (CreateGrantVersionRequest) {
    /**
     * @internal
     */
    CreateGrantVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantVersionRequest || (CreateGrantVersionRequest = {}));
export var CreateGrantVersionResponse;
(function (CreateGrantVersionResponse) {
    /**
     * @internal
     */
    CreateGrantVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGrantVersionResponse || (CreateGrantVersionResponse = {}));
export var BorrowConfiguration;
(function (BorrowConfiguration) {
    /**
     * @internal
     */
    BorrowConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BorrowConfiguration || (BorrowConfiguration = {}));
export var ProvisionalConfiguration;
(function (ProvisionalConfiguration) {
    /**
     * @internal
     */
    ProvisionalConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisionalConfiguration || (ProvisionalConfiguration = {}));
export var RenewType;
(function (RenewType) {
    RenewType["MONTHLY"] = "Monthly";
    RenewType["NONE"] = "None";
    RenewType["WEEKLY"] = "Weekly";
})(RenewType || (RenewType = {}));
export var ConsumptionConfiguration;
(function (ConsumptionConfiguration) {
    /**
     * @internal
     */
    ConsumptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConsumptionConfiguration || (ConsumptionConfiguration = {}));
export var EntitlementUnit;
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
})(EntitlementUnit || (EntitlementUnit = {}));
export var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Entitlement || (Entitlement = {}));
export var Issuer;
(function (Issuer) {
    /**
     * @internal
     */
    Issuer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Issuer || (Issuer = {}));
export var DatetimeRange;
(function (DatetimeRange) {
    /**
     * @internal
     */
    DatetimeRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatetimeRange || (DatetimeRange = {}));
export var CreateLicenseRequest;
(function (CreateLicenseRequest) {
    /**
     * @internal
     */
    CreateLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseRequest || (CreateLicenseRequest = {}));
export var LicenseStatus;
(function (LicenseStatus) {
    LicenseStatus["AVAILABLE"] = "AVAILABLE";
    LicenseStatus["DEACTIVATED"] = "DEACTIVATED";
    LicenseStatus["DELETED"] = "DELETED";
    LicenseStatus["EXPIRED"] = "EXPIRED";
    LicenseStatus["PENDING_AVAILABLE"] = "PENDING_AVAILABLE";
    LicenseStatus["PENDING_DELETE"] = "PENDING_DELETE";
    LicenseStatus["SUSPENDED"] = "SUSPENDED";
})(LicenseStatus || (LicenseStatus = {}));
export var CreateLicenseResponse;
(function (CreateLicenseResponse) {
    /**
     * @internal
     */
    CreateLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseResponse || (CreateLicenseResponse = {}));
export var LicenseCountingType;
(function (LicenseCountingType) {
    LicenseCountingType["CORE"] = "Core";
    LicenseCountingType["INSTANCE"] = "Instance";
    LicenseCountingType["SOCKET"] = "Socket";
    LicenseCountingType["VCPU"] = "vCPU";
})(LicenseCountingType || (LicenseCountingType = {}));
export var ProductInformationFilter;
(function (ProductInformationFilter) {
    /**
     * @internal
     */
    ProductInformationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProductInformationFilter || (ProductInformationFilter = {}));
export var ProductInformation;
(function (ProductInformation) {
    /**
     * @internal
     */
    ProductInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProductInformation || (ProductInformation = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateLicenseConfigurationRequest;
(function (CreateLicenseConfigurationRequest) {
    /**
     * @internal
     */
    CreateLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseConfigurationRequest || (CreateLicenseConfigurationRequest = {}));
export var CreateLicenseConfigurationResponse;
(function (CreateLicenseConfigurationResponse) {
    /**
     * @internal
     */
    CreateLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseConfigurationResponse || (CreateLicenseConfigurationResponse = {}));
export var ReportContext;
(function (ReportContext) {
    /**
     * @internal
     */
    ReportContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportContext || (ReportContext = {}));
export var ReportFrequencyType;
(function (ReportFrequencyType) {
    ReportFrequencyType["DAY"] = "DAY";
    ReportFrequencyType["MONTH"] = "MONTH";
    ReportFrequencyType["WEEK"] = "WEEK";
})(ReportFrequencyType || (ReportFrequencyType = {}));
export var ReportFrequency;
(function (ReportFrequency) {
    /**
     * @internal
     */
    ReportFrequency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportFrequency || (ReportFrequency = {}));
export var ReportType;
(function (ReportType) {
    ReportType["LICENSE_CONFIGURATION_SUMMARY_REPORT"] = "LicenseConfigurationSummaryReport";
    ReportType["LICENSE_CONFIGURATION_USAGE_REPORT"] = "LicenseConfigurationUsageReport";
})(ReportType || (ReportType = {}));
export var CreateLicenseManagerReportGeneratorRequest;
(function (CreateLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    CreateLicenseManagerReportGeneratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseManagerReportGeneratorRequest || (CreateLicenseManagerReportGeneratorRequest = {}));
export var CreateLicenseManagerReportGeneratorResponse;
(function (CreateLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    CreateLicenseManagerReportGeneratorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseManagerReportGeneratorResponse || (CreateLicenseManagerReportGeneratorResponse = {}));
export var CreateLicenseVersionRequest;
(function (CreateLicenseVersionRequest) {
    /**
     * @internal
     */
    CreateLicenseVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseVersionRequest || (CreateLicenseVersionRequest = {}));
export var CreateLicenseVersionResponse;
(function (CreateLicenseVersionResponse) {
    /**
     * @internal
     */
    CreateLicenseVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLicenseVersionResponse || (CreateLicenseVersionResponse = {}));
export var CreateTokenRequest;
(function (CreateTokenRequest) {
    /**
     * @internal
     */
    CreateTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTokenRequest || (CreateTokenRequest = {}));
export var TokenType;
(function (TokenType) {
    TokenType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
})(TokenType || (TokenType = {}));
export var CreateTokenResponse;
(function (CreateTokenResponse) {
    /**
     * @internal
     */
    CreateTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTokenResponse || (CreateTokenResponse = {}));
export var DeleteGrantRequest;
(function (DeleteGrantRequest) {
    /**
     * @internal
     */
    DeleteGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGrantRequest || (DeleteGrantRequest = {}));
export var DeleteGrantResponse;
(function (DeleteGrantResponse) {
    /**
     * @internal
     */
    DeleteGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGrantResponse || (DeleteGrantResponse = {}));
export var DeleteLicenseRequest;
(function (DeleteLicenseRequest) {
    /**
     * @internal
     */
    DeleteLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseRequest || (DeleteLicenseRequest = {}));
export var LicenseDeletionStatus;
(function (LicenseDeletionStatus) {
    LicenseDeletionStatus["DELETED"] = "DELETED";
    LicenseDeletionStatus["PENDING_DELETE"] = "PENDING_DELETE";
})(LicenseDeletionStatus || (LicenseDeletionStatus = {}));
export var DeleteLicenseResponse;
(function (DeleteLicenseResponse) {
    /**
     * @internal
     */
    DeleteLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseResponse || (DeleteLicenseResponse = {}));
export var DeleteLicenseConfigurationRequest;
(function (DeleteLicenseConfigurationRequest) {
    /**
     * @internal
     */
    DeleteLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseConfigurationRequest || (DeleteLicenseConfigurationRequest = {}));
export var DeleteLicenseConfigurationResponse;
(function (DeleteLicenseConfigurationResponse) {
    /**
     * @internal
     */
    DeleteLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseConfigurationResponse || (DeleteLicenseConfigurationResponse = {}));
export var DeleteLicenseManagerReportGeneratorRequest;
(function (DeleteLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    DeleteLicenseManagerReportGeneratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseManagerReportGeneratorRequest || (DeleteLicenseManagerReportGeneratorRequest = {}));
export var DeleteLicenseManagerReportGeneratorResponse;
(function (DeleteLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    DeleteLicenseManagerReportGeneratorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLicenseManagerReportGeneratorResponse || (DeleteLicenseManagerReportGeneratorResponse = {}));
export var DeleteTokenRequest;
(function (DeleteTokenRequest) {
    /**
     * @internal
     */
    DeleteTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTokenRequest || (DeleteTokenRequest = {}));
export var DeleteTokenResponse;
(function (DeleteTokenResponse) {
    /**
     * @internal
     */
    DeleteTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTokenResponse || (DeleteTokenResponse = {}));
export var ExtendLicenseConsumptionRequest;
(function (ExtendLicenseConsumptionRequest) {
    /**
     * @internal
     */
    ExtendLicenseConsumptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtendLicenseConsumptionRequest || (ExtendLicenseConsumptionRequest = {}));
export var ExtendLicenseConsumptionResponse;
(function (ExtendLicenseConsumptionResponse) {
    /**
     * @internal
     */
    ExtendLicenseConsumptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtendLicenseConsumptionResponse || (ExtendLicenseConsumptionResponse = {}));
export var GetAccessTokenRequest;
(function (GetAccessTokenRequest) {
    /**
     * @internal
     */
    GetAccessTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessTokenRequest || (GetAccessTokenRequest = {}));
export var GetAccessTokenResponse;
(function (GetAccessTokenResponse) {
    /**
     * @internal
     */
    GetAccessTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessTokenResponse || (GetAccessTokenResponse = {}));
export var GetGrantRequest;
(function (GetGrantRequest) {
    /**
     * @internal
     */
    GetGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGrantRequest || (GetGrantRequest = {}));
export var Grant;
(function (Grant) {
    /**
     * @internal
     */
    Grant.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Grant || (Grant = {}));
export var GetGrantResponse;
(function (GetGrantResponse) {
    /**
     * @internal
     */
    GetGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGrantResponse || (GetGrantResponse = {}));
export var GetLicenseRequest;
(function (GetLicenseRequest) {
    /**
     * @internal
     */
    GetLicenseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseRequest || (GetLicenseRequest = {}));
export var IssuerDetails;
(function (IssuerDetails) {
    /**
     * @internal
     */
    IssuerDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IssuerDetails || (IssuerDetails = {}));
export var License;
(function (License) {
    /**
     * @internal
     */
    License.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(License || (License = {}));
export var GetLicenseResponse;
(function (GetLicenseResponse) {
    /**
     * @internal
     */
    GetLicenseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseResponse || (GetLicenseResponse = {}));
export var GetLicenseConfigurationRequest;
(function (GetLicenseConfigurationRequest) {
    /**
     * @internal
     */
    GetLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseConfigurationRequest || (GetLicenseConfigurationRequest = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["EC2_AMI"] = "EC2_AMI";
    ResourceType["EC2_HOST"] = "EC2_HOST";
    ResourceType["EC2_INSTANCE"] = "EC2_INSTANCE";
    ResourceType["RDS"] = "RDS";
    ResourceType["SYSTEMS_MANAGER_MANAGED_INSTANCE"] = "SYSTEMS_MANAGER_MANAGED_INSTANCE";
})(ResourceType || (ResourceType = {}));
export var ConsumedLicenseSummary;
(function (ConsumedLicenseSummary) {
    /**
     * @internal
     */
    ConsumedLicenseSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConsumedLicenseSummary || (ConsumedLicenseSummary = {}));
export var ManagedResourceSummary;
(function (ManagedResourceSummary) {
    /**
     * @internal
     */
    ManagedResourceSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedResourceSummary || (ManagedResourceSummary = {}));
export var GetLicenseConfigurationResponse;
(function (GetLicenseConfigurationResponse) {
    /**
     * @internal
     */
    GetLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseConfigurationResponse || (GetLicenseConfigurationResponse = {}));
export var GetLicenseManagerReportGeneratorRequest;
(function (GetLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    GetLicenseManagerReportGeneratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseManagerReportGeneratorRequest || (GetLicenseManagerReportGeneratorRequest = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var ReportGenerator;
(function (ReportGenerator) {
    /**
     * @internal
     */
    ReportGenerator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReportGenerator || (ReportGenerator = {}));
export var GetLicenseManagerReportGeneratorResponse;
(function (GetLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    GetLicenseManagerReportGeneratorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseManagerReportGeneratorResponse || (GetLicenseManagerReportGeneratorResponse = {}));
export var GetLicenseUsageRequest;
(function (GetLicenseUsageRequest) {
    /**
     * @internal
     */
    GetLicenseUsageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseUsageRequest || (GetLicenseUsageRequest = {}));
export var EntitlementUsage;
(function (EntitlementUsage) {
    /**
     * @internal
     */
    EntitlementUsage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntitlementUsage || (EntitlementUsage = {}));
export var LicenseUsage;
(function (LicenseUsage) {
    /**
     * @internal
     */
    LicenseUsage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseUsage || (LicenseUsage = {}));
export var GetLicenseUsageResponse;
(function (GetLicenseUsageResponse) {
    /**
     * @internal
     */
    GetLicenseUsageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLicenseUsageResponse || (GetLicenseUsageResponse = {}));
export var GetServiceSettingsRequest;
(function (GetServiceSettingsRequest) {
    /**
     * @internal
     */
    GetServiceSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceSettingsRequest || (GetServiceSettingsRequest = {}));
export var OrganizationConfiguration;
(function (OrganizationConfiguration) {
    /**
     * @internal
     */
    OrganizationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationConfiguration || (OrganizationConfiguration = {}));
export var GetServiceSettingsResponse;
(function (GetServiceSettingsResponse) {
    /**
     * @internal
     */
    GetServiceSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceSettingsResponse || (GetServiceSettingsResponse = {}));
export var FilterLimitExceededException;
(function (FilterLimitExceededException) {
    /**
     * @internal
     */
    FilterLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilterLimitExceededException || (FilterLimitExceededException = {}));
export var ListAssociationsForLicenseConfigurationRequest;
(function (ListAssociationsForLicenseConfigurationRequest) {
    /**
     * @internal
     */
    ListAssociationsForLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationsForLicenseConfigurationRequest || (ListAssociationsForLicenseConfigurationRequest = {}));
export var LicenseConfigurationAssociation;
(function (LicenseConfigurationAssociation) {
    /**
     * @internal
     */
    LicenseConfigurationAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseConfigurationAssociation || (LicenseConfigurationAssociation = {}));
export var ListAssociationsForLicenseConfigurationResponse;
(function (ListAssociationsForLicenseConfigurationResponse) {
    /**
     * @internal
     */
    ListAssociationsForLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationsForLicenseConfigurationResponse || (ListAssociationsForLicenseConfigurationResponse = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var ListDistributedGrantsRequest;
(function (ListDistributedGrantsRequest) {
    /**
     * @internal
     */
    ListDistributedGrantsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDistributedGrantsRequest || (ListDistributedGrantsRequest = {}));
export var ListDistributedGrantsResponse;
(function (ListDistributedGrantsResponse) {
    /**
     * @internal
     */
    ListDistributedGrantsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDistributedGrantsResponse || (ListDistributedGrantsResponse = {}));
export var ListFailuresForLicenseConfigurationOperationsRequest;
(function (ListFailuresForLicenseConfigurationOperationsRequest) {
    /**
     * @internal
     */
    ListFailuresForLicenseConfigurationOperationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFailuresForLicenseConfigurationOperationsRequest || (ListFailuresForLicenseConfigurationOperationsRequest = {}));
export var LicenseOperationFailure;
(function (LicenseOperationFailure) {
    /**
     * @internal
     */
    LicenseOperationFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseOperationFailure || (LicenseOperationFailure = {}));
export var ListFailuresForLicenseConfigurationOperationsResponse;
(function (ListFailuresForLicenseConfigurationOperationsResponse) {
    /**
     * @internal
     */
    ListFailuresForLicenseConfigurationOperationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFailuresForLicenseConfigurationOperationsResponse || (ListFailuresForLicenseConfigurationOperationsResponse = {}));
export var ListLicenseConfigurationsRequest;
(function (ListLicenseConfigurationsRequest) {
    /**
     * @internal
     */
    ListLicenseConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseConfigurationsRequest || (ListLicenseConfigurationsRequest = {}));
export var LicenseConfiguration;
(function (LicenseConfiguration) {
    /**
     * @internal
     */
    LicenseConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseConfiguration || (LicenseConfiguration = {}));
export var ListLicenseConfigurationsResponse;
(function (ListLicenseConfigurationsResponse) {
    /**
     * @internal
     */
    ListLicenseConfigurationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseConfigurationsResponse || (ListLicenseConfigurationsResponse = {}));
export var ListLicenseManagerReportGeneratorsRequest;
(function (ListLicenseManagerReportGeneratorsRequest) {
    /**
     * @internal
     */
    ListLicenseManagerReportGeneratorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseManagerReportGeneratorsRequest || (ListLicenseManagerReportGeneratorsRequest = {}));
export var ListLicenseManagerReportGeneratorsResponse;
(function (ListLicenseManagerReportGeneratorsResponse) {
    /**
     * @internal
     */
    ListLicenseManagerReportGeneratorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseManagerReportGeneratorsResponse || (ListLicenseManagerReportGeneratorsResponse = {}));
export var ListLicensesRequest;
(function (ListLicensesRequest) {
    /**
     * @internal
     */
    ListLicensesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicensesRequest || (ListLicensesRequest = {}));
export var ListLicensesResponse;
(function (ListLicensesResponse) {
    /**
     * @internal
     */
    ListLicensesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicensesResponse || (ListLicensesResponse = {}));
export var ListLicenseSpecificationsForResourceRequest;
(function (ListLicenseSpecificationsForResourceRequest) {
    /**
     * @internal
     */
    ListLicenseSpecificationsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseSpecificationsForResourceRequest || (ListLicenseSpecificationsForResourceRequest = {}));
export var LicenseSpecification;
(function (LicenseSpecification) {
    /**
     * @internal
     */
    LicenseSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseSpecification || (LicenseSpecification = {}));
export var ListLicenseSpecificationsForResourceResponse;
(function (ListLicenseSpecificationsForResourceResponse) {
    /**
     * @internal
     */
    ListLicenseSpecificationsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseSpecificationsForResourceResponse || (ListLicenseSpecificationsForResourceResponse = {}));
export var ListLicenseVersionsRequest;
(function (ListLicenseVersionsRequest) {
    /**
     * @internal
     */
    ListLicenseVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseVersionsRequest || (ListLicenseVersionsRequest = {}));
export var ListLicenseVersionsResponse;
(function (ListLicenseVersionsResponse) {
    /**
     * @internal
     */
    ListLicenseVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLicenseVersionsResponse || (ListLicenseVersionsResponse = {}));
export var ListReceivedGrantsRequest;
(function (ListReceivedGrantsRequest) {
    /**
     * @internal
     */
    ListReceivedGrantsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReceivedGrantsRequest || (ListReceivedGrantsRequest = {}));
export var ListReceivedGrantsResponse;
(function (ListReceivedGrantsResponse) {
    /**
     * @internal
     */
    ListReceivedGrantsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReceivedGrantsResponse || (ListReceivedGrantsResponse = {}));
export var ListReceivedLicensesRequest;
(function (ListReceivedLicensesRequest) {
    /**
     * @internal
     */
    ListReceivedLicensesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReceivedLicensesRequest || (ListReceivedLicensesRequest = {}));
export var ReceivedStatus;
(function (ReceivedStatus) {
    ReceivedStatus["ACTIVE"] = "ACTIVE";
    ReceivedStatus["DELETED"] = "DELETED";
    ReceivedStatus["DISABLED"] = "DISABLED";
    ReceivedStatus["FAILED_WORKFLOW"] = "FAILED_WORKFLOW";
    ReceivedStatus["PENDING_ACCEPT"] = "PENDING_ACCEPT";
    ReceivedStatus["PENDING_WORKFLOW"] = "PENDING_WORKFLOW";
    ReceivedStatus["REJECTED"] = "REJECTED";
})(ReceivedStatus || (ReceivedStatus = {}));
export var ReceivedMetadata;
(function (ReceivedMetadata) {
    /**
     * @internal
     */
    ReceivedMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReceivedMetadata || (ReceivedMetadata = {}));
export var GrantedLicense;
(function (GrantedLicense) {
    /**
     * @internal
     */
    GrantedLicense.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantedLicense || (GrantedLicense = {}));
export var ListReceivedLicensesResponse;
(function (ListReceivedLicensesResponse) {
    /**
     * @internal
     */
    ListReceivedLicensesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReceivedLicensesResponse || (ListReceivedLicensesResponse = {}));
export var FailedDependencyException;
(function (FailedDependencyException) {
    /**
     * @internal
     */
    FailedDependencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedDependencyException || (FailedDependencyException = {}));
export var InventoryFilterCondition;
(function (InventoryFilterCondition) {
    InventoryFilterCondition["BEGINS_WITH"] = "BEGINS_WITH";
    InventoryFilterCondition["CONTAINS"] = "CONTAINS";
    InventoryFilterCondition["EQUALS"] = "EQUALS";
    InventoryFilterCondition["NOT_EQUALS"] = "NOT_EQUALS";
})(InventoryFilterCondition || (InventoryFilterCondition = {}));
export var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryFilter || (InventoryFilter = {}));
export var ListResourceInventoryRequest;
(function (ListResourceInventoryRequest) {
    /**
     * @internal
     */
    ListResourceInventoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceInventoryRequest || (ListResourceInventoryRequest = {}));
export var ResourceInventory;
(function (ResourceInventory) {
    /**
     * @internal
     */
    ResourceInventory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInventory || (ResourceInventory = {}));
export var ListResourceInventoryResponse;
(function (ListResourceInventoryResponse) {
    /**
     * @internal
     */
    ListResourceInventoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceInventoryResponse || (ListResourceInventoryResponse = {}));
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
export var ListTokensRequest;
(function (ListTokensRequest) {
    /**
     * @internal
     */
    ListTokensRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTokensRequest || (ListTokensRequest = {}));
export var TokenData;
(function (TokenData) {
    /**
     * @internal
     */
    TokenData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TokenData || (TokenData = {}));
export var ListTokensResponse;
(function (ListTokensResponse) {
    /**
     * @internal
     */
    ListTokensResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTokensResponse || (ListTokensResponse = {}));
export var ListUsageForLicenseConfigurationRequest;
(function (ListUsageForLicenseConfigurationRequest) {
    /**
     * @internal
     */
    ListUsageForLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsageForLicenseConfigurationRequest || (ListUsageForLicenseConfigurationRequest = {}));
export var LicenseConfigurationUsage;
(function (LicenseConfigurationUsage) {
    /**
     * @internal
     */
    LicenseConfigurationUsage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseConfigurationUsage || (LicenseConfigurationUsage = {}));
export var ListUsageForLicenseConfigurationResponse;
(function (ListUsageForLicenseConfigurationResponse) {
    /**
     * @internal
     */
    ListUsageForLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsageForLicenseConfigurationResponse || (ListUsageForLicenseConfigurationResponse = {}));
export var RejectGrantRequest;
(function (RejectGrantRequest) {
    /**
     * @internal
     */
    RejectGrantRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectGrantRequest || (RejectGrantRequest = {}));
export var RejectGrantResponse;
(function (RejectGrantResponse) {
    /**
     * @internal
     */
    RejectGrantResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectGrantResponse || (RejectGrantResponse = {}));
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
export var LicenseConfigurationStatus;
(function (LicenseConfigurationStatus) {
    LicenseConfigurationStatus["AVAILABLE"] = "AVAILABLE";
    LicenseConfigurationStatus["DISABLED"] = "DISABLED";
})(LicenseConfigurationStatus || (LicenseConfigurationStatus = {}));
export var UpdateLicenseConfigurationRequest;
(function (UpdateLicenseConfigurationRequest) {
    /**
     * @internal
     */
    UpdateLicenseConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseConfigurationRequest || (UpdateLicenseConfigurationRequest = {}));
export var UpdateLicenseConfigurationResponse;
(function (UpdateLicenseConfigurationResponse) {
    /**
     * @internal
     */
    UpdateLicenseConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseConfigurationResponse || (UpdateLicenseConfigurationResponse = {}));
export var UpdateLicenseManagerReportGeneratorRequest;
(function (UpdateLicenseManagerReportGeneratorRequest) {
    /**
     * @internal
     */
    UpdateLicenseManagerReportGeneratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseManagerReportGeneratorRequest || (UpdateLicenseManagerReportGeneratorRequest = {}));
export var UpdateLicenseManagerReportGeneratorResponse;
(function (UpdateLicenseManagerReportGeneratorResponse) {
    /**
     * @internal
     */
    UpdateLicenseManagerReportGeneratorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseManagerReportGeneratorResponse || (UpdateLicenseManagerReportGeneratorResponse = {}));
export var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    /**
     * @internal
     */
    InvalidResourceStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResourceStateException || (InvalidResourceStateException = {}));
export var LicenseUsageException;
(function (LicenseUsageException) {
    /**
     * @internal
     */
    LicenseUsageException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseUsageException || (LicenseUsageException = {}));
export var UpdateLicenseSpecificationsForResourceRequest;
(function (UpdateLicenseSpecificationsForResourceRequest) {
    /**
     * @internal
     */
    UpdateLicenseSpecificationsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseSpecificationsForResourceRequest || (UpdateLicenseSpecificationsForResourceRequest = {}));
export var UpdateLicenseSpecificationsForResourceResponse;
(function (UpdateLicenseSpecificationsForResourceResponse) {
    /**
     * @internal
     */
    UpdateLicenseSpecificationsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLicenseSpecificationsForResourceResponse || (UpdateLicenseSpecificationsForResourceResponse = {}));
export var UpdateServiceSettingsRequest;
(function (UpdateServiceSettingsRequest) {
    /**
     * @internal
     */
    UpdateServiceSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingsRequest || (UpdateServiceSettingsRequest = {}));
export var UpdateServiceSettingsResponse;
(function (UpdateServiceSettingsResponse) {
    /**
     * @internal
     */
    UpdateServiceSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceSettingsResponse || (UpdateServiceSettingsResponse = {}));
//# sourceMappingURL=models_0.js.map