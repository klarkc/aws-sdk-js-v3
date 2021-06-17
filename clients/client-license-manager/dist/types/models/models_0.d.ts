import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AcceptGrantRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
}
export declare namespace AcceptGrantRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptGrantRequest) => any;
}
export declare enum GrantStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    DISABLED = "DISABLED",
    FAILED_WORKFLOW = "FAILED_WORKFLOW",
    PENDING_ACCEPT = "PENDING_ACCEPT",
    PENDING_DELETE = "PENDING_DELETE",
    PENDING_WORKFLOW = "PENDING_WORKFLOW",
    REJECTED = "REJECTED"
}
export interface AcceptGrantResponse {
    /**
     * <p>Grant ARN.</p>
     */
    GrantArn?: string;
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>Grant version.</p>
     */
    Version?: string;
}
export declare namespace AcceptGrantResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptGrantResponse) => any;
}
/**
 * <p>Access to resource denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>The AWS user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 */
export interface AuthorizationException extends __SmithyException, $MetadataBearer {
    name: "AuthorizationException";
    $fault: "client";
    Message?: string;
}
export declare namespace AuthorizationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizationException) => any;
}
/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterValueException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidParameterValueException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterValueException) => any;
}
/**
 * <p>Too many requests have been submitted. Try again after a brief wait.</p>
 */
export interface RateLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "RateLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace RateLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RateLimitExceededException) => any;
}
/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ResourceLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceLimitExceededException) => any;
}
/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
    name: "ServerInternalException";
    $fault: "server";
    Message?: string;
}
export declare namespace ServerInternalException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerInternalException) => any;
}
/**
 * <p>The provided input is not valid. Try your request again.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export declare enum AllowedOperation {
    CHECKOUT_BORROW_LICENSE = "CheckoutBorrowLicense",
    CHECKOUT_LICENSE = "CheckoutLicense",
    CHECK_IN_LICENSE = "CheckInLicense",
    CREATE_GRANT = "CreateGrant",
    CREATE_TOKEN = "CreateToken",
    EXTEND_CONSUMPTION_LICENSE = "ExtendConsumptionLicense",
    LIST_PURCHASED_LICENSES = "ListPurchasedLicenses"
}
/**
 * <p>Describes automated discovery.</p>
 */
export interface AutomatedDiscoveryInformation {
    /**
     * <p>Time that automated discovery last ran.</p>
     */
    LastRunTime?: Date;
}
export declare namespace AutomatedDiscoveryInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutomatedDiscoveryInformation) => any;
}
export interface CheckInLicenseRequest {
    /**
     * <p>License consumption token.</p>
     */
    LicenseConsumptionToken: string | undefined;
    /**
     * <p>License beneficiary.</p>
     */
    Beneficiary?: string;
}
export declare namespace CheckInLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckInLicenseRequest) => any;
}
export interface CheckInLicenseResponse {
}
export declare namespace CheckInLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckInLicenseResponse) => any;
}
/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The resource cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>Describes key/value pairs.</p>
 */
export interface Metadata {
    /**
     * <p>The key name.</p>
     */
    Name?: string;
    /**
     * <p>The value.</p>
     */
    Value?: string;
}
export declare namespace Metadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Metadata) => any;
}
export declare enum DigitalSignatureMethod {
    JWT_PS384 = "JWT_PS384"
}
export declare enum EntitlementDataUnit {
    BITS = "Bits",
    BITS_PER_SECOND = "Bits/Second",
    BYTES = "Bytes",
    BYTES_PER_SECOND = "Bytes/Second",
    COUNT = "Count",
    COUNT_PER_SECOND = "Count/Second",
    GIGABITS = "Gigabits",
    GIGABITS_PER_SECOND = "Gigabits/Second",
    GIGABYTES = "Gigabytes",
    GIGABYTES_PER_SECOND = "Gigabytes/Second",
    KILOBITS = "Kilobits",
    KILOBITS_PER_SECOND = "Kilobits/Second",
    KILOBYTES = "Kilobytes",
    KILOBYTES_PER_SECOND = "Kilobytes/Second",
    MEGABITS = "Megabits",
    MEGABITS_PER_SECOND = "Megabits/Second",
    MEGABYTES = "Megabytes",
    MEGABYTES_PER_SECOND = "Megabytes/Second",
    MICROSECONDS = "Microseconds",
    MILLISECONDS = "Milliseconds",
    NONE = "None",
    PERCENT = "Percent",
    SECONDS = "Seconds",
    TERABITS = "Terabits",
    TERABITS_PER_SECOND = "Terabits/Second",
    TERABYTES = "Terabytes",
    TERABYTES_PER_SECOND = "Terabytes/Second"
}
/**
 * <p>Data associated with an entitlement resource.</p>
 */
export interface EntitlementData {
    /**
     * <p>Entitlement data name.</p>
     */
    Name: string | undefined;
    /**
     * <p>Entitlement data value.</p>
     */
    Value?: string;
    /**
     * <p>Entitlement data unit.</p>
     */
    Unit: EntitlementDataUnit | string | undefined;
}
export declare namespace EntitlementData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntitlementData) => any;
}
export interface CheckoutBorrowLicenseRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>License entitlements. Partial checkouts are not supported.</p>
     */
    Entitlements: EntitlementData[] | undefined;
    /**
     * <p>Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384.
     *          For more information, see <a href="https://tools.ietf.org/html/rfc7518#section-3.5">RFC 7518 Digital Signature with RSASSA-PSS</a>.</p>
     */
    DigitalSignatureMethod: DigitalSignatureMethod | string | undefined;
    /**
     * <p>Node ID.</p>
     */
    NodeId?: string;
    /**
     * <p>Information about constraints.</p>
     */
    CheckoutMetadata?: Metadata[];
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
}
export declare namespace CheckoutBorrowLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckoutBorrowLicenseRequest) => any;
}
export interface CheckoutBorrowLicenseResponse {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn?: string;
    /**
     * <p>License consumption token.</p>
     */
    LicenseConsumptionToken?: string;
    /**
     * <p>Allowed license entitlements.</p>
     */
    EntitlementsAllowed?: EntitlementData[];
    /**
     * <p>Node ID.</p>
     */
    NodeId?: string;
    /**
     * <p>Signed token.</p>
     */
    SignedToken?: string;
    /**
     * <p>Date and time at which the license checkout is issued.</p>
     */
    IssuedAt?: string;
    /**
     * <p>Date and time at which the license checkout expires.</p>
     */
    Expiration?: string;
    /**
     * <p>Information about constraints.</p>
     */
    CheckoutMetadata?: Metadata[];
}
export declare namespace CheckoutBorrowLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckoutBorrowLicenseResponse) => any;
}
/**
 * <p>The entitlement is not allowed.</p>
 */
export interface EntitlementNotAllowedException extends __SmithyException, $MetadataBearer {
    name: "EntitlementNotAllowedException";
    $fault: "client";
    Message?: string;
}
export declare namespace EntitlementNotAllowedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntitlementNotAllowedException) => any;
}
/**
 * <p>There are no entitlements found for this license, or the entitlement maximum count is reached.</p>
 */
export interface NoEntitlementsAllowedException extends __SmithyException, $MetadataBearer {
    name: "NoEntitlementsAllowedException";
    $fault: "client";
    Message?: string;
}
export declare namespace NoEntitlementsAllowedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoEntitlementsAllowedException) => any;
}
/**
 * <p>This is not the correct Region for the resource. Try again.</p>
 */
export interface RedirectException extends __SmithyException, $MetadataBearer {
    name: "RedirectException";
    $fault: "client";
    Location?: string;
    Message?: string;
}
export declare namespace RedirectException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RedirectException) => any;
}
/**
 * <p>The digital signature method is unsupported. Try your request again.</p>
 */
export interface UnsupportedDigitalSignatureMethodException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedDigitalSignatureMethodException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnsupportedDigitalSignatureMethodException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedDigitalSignatureMethodException) => any;
}
export declare enum CheckoutType {
    PROVISIONAL = "PROVISIONAL"
}
export interface CheckoutLicenseRequest {
    /**
     * <p>Product SKU.</p>
     */
    ProductSKU: string | undefined;
    /**
     * <p>Checkout type.</p>
     */
    CheckoutType: CheckoutType | string | undefined;
    /**
     * <p>Key fingerprint identifying the license.</p>
     */
    KeyFingerprint: string | undefined;
    /**
     * <p>License entitlements.</p>
     */
    Entitlements: EntitlementData[] | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>License beneficiary.</p>
     */
    Beneficiary?: string;
    /**
     * <p>Node ID.</p>
     */
    NodeId?: string;
}
export declare namespace CheckoutLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckoutLicenseRequest) => any;
}
export interface CheckoutLicenseResponse {
    /**
     * <p>Checkout type.</p>
     */
    CheckoutType?: CheckoutType | string;
    /**
     * <p>License consumption token.</p>
     */
    LicenseConsumptionToken?: string;
    /**
     * <p>Allowed license entitlements.</p>
     */
    EntitlementsAllowed?: EntitlementData[];
    /**
     * <p>Signed token.</p>
     */
    SignedToken?: string;
    /**
     * <p>Node ID.</p>
     */
    NodeId?: string;
    /**
     * <p>Date and time at which the license checkout is issued.</p>
     */
    IssuedAt?: string;
    /**
     * <p>Date and time at which the license checkout expires.</p>
     */
    Expiration?: string;
}
export declare namespace CheckoutLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CheckoutLicenseResponse) => any;
}
export interface CreateGrantRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>Grant name.</p>
     */
    GrantName: string | undefined;
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>The grant principals.</p>
     */
    Principals: string[] | undefined;
    /**
     * <p>Home Region of the grant.</p>
     */
    HomeRegion: string | undefined;
    /**
     * <p>Allowed operations for the grant.</p>
     */
    AllowedOperations: (AllowedOperation | string)[] | undefined;
}
export declare namespace CreateGrantRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGrantRequest) => any;
}
export interface CreateGrantResponse {
    /**
     * <p>Grant ARN.</p>
     */
    GrantArn?: string;
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>Grant version.</p>
     */
    Version?: string;
}
export declare namespace CreateGrantResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGrantResponse) => any;
}
export interface CreateGrantVersionRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
    /**
     * <p>Grant name.</p>
     */
    GrantName?: string;
    /**
     * <p>Allowed operations for the grant.</p>
     */
    AllowedOperations?: (AllowedOperation | string)[];
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>Current version of the grant.</p>
     */
    SourceVersion?: string;
}
export declare namespace CreateGrantVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGrantVersionRequest) => any;
}
export interface CreateGrantVersionResponse {
    /**
     * <p>Grant ARN.</p>
     */
    GrantArn?: string;
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>New version of the grant.</p>
     */
    Version?: string;
}
export declare namespace CreateGrantVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGrantVersionResponse) => any;
}
/**
 * <p>Details about a borrow configuration.</p>
 */
export interface BorrowConfiguration {
    /**
     * <p>Indicates whether early check-ins are allowed.</p>
     */
    AllowEarlyCheckIn: boolean | undefined;
    /**
     * <p>Maximum time for the borrow configuration, in minutes.</p>
     */
    MaxTimeToLiveInMinutes: number | undefined;
}
export declare namespace BorrowConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BorrowConfiguration) => any;
}
/**
 * <p>Details about a provisional configuration.</p>
 */
export interface ProvisionalConfiguration {
    /**
     * <p>Maximum time for the provisional configuration, in minutes.</p>
     */
    MaxTimeToLiveInMinutes: number | undefined;
}
export declare namespace ProvisionalConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionalConfiguration) => any;
}
export declare enum RenewType {
    MONTHLY = "Monthly",
    NONE = "None",
    WEEKLY = "Weekly"
}
/**
 * <p>Details about a consumption configuration.</p>
 */
export interface ConsumptionConfiguration {
    /**
     * <p>Renewal frequency.</p>
     */
    RenewType?: RenewType | string;
    /**
     * <p>Details about a provisional configuration.</p>
     */
    ProvisionalConfiguration?: ProvisionalConfiguration;
    /**
     * <p>Details about a borrow configuration.</p>
     */
    BorrowConfiguration?: BorrowConfiguration;
}
export declare namespace ConsumptionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConsumptionConfiguration) => any;
}
export declare enum EntitlementUnit {
    BITS = "Bits",
    BITS_PER_SECOND = "Bits/Second",
    BYTES = "Bytes",
    BYTES_PER_SECOND = "Bytes/Second",
    COUNT = "Count",
    COUNT_PER_SECOND = "Count/Second",
    GIGABITS = "Gigabits",
    GIGABITS_PER_SECOND = "Gigabits/Second",
    GIGABYTES = "Gigabytes",
    GIGABYTES_PER_SECOND = "Gigabytes/Second",
    KILOBITS = "Kilobits",
    KILOBITS_PER_SECOND = "Kilobits/Second",
    KILOBYTES = "Kilobytes",
    KILOBYTES_PER_SECOND = "Kilobytes/Second",
    MEGABITS = "Megabits",
    MEGABITS_PER_SECOND = "Megabits/Second",
    MEGABYTES = "Megabytes",
    MEGABYTES_PER_SECOND = "Megabytes/Second",
    MICROSECONDS = "Microseconds",
    MILLISECONDS = "Milliseconds",
    NONE = "None",
    PERCENT = "Percent",
    SECONDS = "Seconds",
    TERABITS = "Terabits",
    TERABITS_PER_SECOND = "Terabits/Second",
    TERABYTES = "Terabytes",
    TERABYTES_PER_SECOND = "Terabytes/Second"
}
/**
 * <p>Describes a resource entitled for use with a license.</p>
 */
export interface Entitlement {
    /**
     * <p>Entitlement name.</p>
     */
    Name: string | undefined;
    /**
     * <p>Entitlement resource. Use only if the unit is None.</p>
     */
    Value?: string;
    /**
     * <p>Maximum entitlement count. Use if the unit is not None.</p>
     */
    MaxCount?: number;
    /**
     * <p>Indicates whether overages are allowed.</p>
     */
    Overage?: boolean;
    /**
     * <p>Entitlement unit.</p>
     */
    Unit: EntitlementUnit | string | undefined;
    /**
     * <p>Indicates whether check-ins are allowed.</p>
     */
    AllowCheckIn?: boolean;
}
export declare namespace Entitlement {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Entitlement) => any;
}
/**
 * <p>Details about the issuer of a license.</p>
 */
export interface Issuer {
    /**
     * <p>Issuer name.</p>
     */
    Name: string | undefined;
    /**
     * <p>Asymmetric CMK from AWS Key Management Service. The CMK must have a key usage of sign and verify,
     *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
     */
    SignKey?: string;
}
export declare namespace Issuer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Issuer) => any;
}
/**
 * <p>Describes a time range, in ISO8601-UTC format.</p>
 */
export interface DatetimeRange {
    /**
     * <p>Start of the time range.</p>
     */
    Begin: string | undefined;
    /**
     * <p>End of the time range.</p>
     */
    End?: string;
}
export declare namespace DatetimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatetimeRange) => any;
}
export interface CreateLicenseRequest {
    /**
     * <p>License name.</p>
     */
    LicenseName: string | undefined;
    /**
     * <p>Product name.</p>
     */
    ProductName: string | undefined;
    /**
     * <p>Product SKU.</p>
     */
    ProductSKU: string | undefined;
    /**
     * <p>License issuer.</p>
     */
    Issuer: Issuer | undefined;
    /**
     * <p>Home Region for the license.</p>
     */
    HomeRegion: string | undefined;
    /**
     * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
     */
    Validity: DatetimeRange | undefined;
    /**
     * <p>License entitlements.</p>
     */
    Entitlements: Entitlement[] | undefined;
    /**
     * <p>License beneficiary.</p>
     */
    Beneficiary: string | undefined;
    /**
     * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
     *           running with continuous connectivity. Choose a borrow configuration for workloads with offline
     *           usage.</p>
     */
    ConsumptionConfiguration: ConsumptionConfiguration | undefined;
    /**
     * <p>Information about the license.</p>
     */
    LicenseMetadata?: Metadata[];
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
}
export declare namespace CreateLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseRequest) => any;
}
export declare enum LicenseStatus {
    AVAILABLE = "AVAILABLE",
    DEACTIVATED = "DEACTIVATED",
    DELETED = "DELETED",
    EXPIRED = "EXPIRED",
    PENDING_AVAILABLE = "PENDING_AVAILABLE",
    PENDING_DELETE = "PENDING_DELETE",
    SUSPENDED = "SUSPENDED"
}
export interface CreateLicenseResponse {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn?: string;
    /**
     * <p>License status.</p>
     */
    Status?: LicenseStatus | string;
    /**
     * <p>License version.</p>
     */
    Version?: string;
}
export declare namespace CreateLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseResponse) => any;
}
export declare enum LicenseCountingType {
    CORE = "Core",
    INSTANCE = "Instance",
    SOCKET = "Socket",
    VCPU = "vCPU"
}
/**
 * <p>Describes product information filters.</p>
 */
export interface ProductInformationFilter {
    /**
     * <p>Filter name.</p>
     */
    ProductInformationFilterName: string | undefined;
    /**
     * <p>Filter value.</p>
     */
    ProductInformationFilterValue?: string[];
    /**
     * <p>Logical operator.</p>
     */
    ProductInformationFilterComparator: string | undefined;
}
export declare namespace ProductInformationFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductInformationFilter) => any;
}
/**
 * <p>Describes product information for a license configuration.</p>
 */
export interface ProductInformation {
    /**
     * <p>Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.</p>
     */
    ResourceType: string | undefined;
    /**
     * <p>A Product information filter consists of a <code>ProductInformationFilterComparator</code> which is a logical operator, a <code>ProductInformationFilterName</code> which specifies the type of filter being declared, and a <code>ProductInformationFilterValue</code> that specifies the value to filter on. </p>
     *          <p>Accepted values for <code>ProductInformationFilterName</code> are listed here along with descriptions and valid options for <code>ProductInformationFilterComparator</code>. </p>
     *          <p>The following filters and are supported when the resource type
     *          is <code>SSM_MANAGED</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Application Name</code> - The name of the application.
     *                Logical operator is <code>EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Application Publisher</code> - The publisher of the application.
     *                Logical operator is <code>EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Application Version</code> - The version of the application.
     *                Logical operator is <code>EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Platform Name</code> - The name of the platform.
     *                Logical operator is <code>EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Platform Type</code> - The platform type.
     *                Logical operator is <code>EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Tag:key</code> - The key of a tag attached to an AWS resource you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>.  The key for your tag must be appended to <code>Tag:</code> following the example: <code>Tag:name-of-your-key</code>. <code>ProductInformationFilterValue</code> is optional if you are not using values for the key.
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>AccountId</code> - The 12-digit ID of an AWS account you wish to exclude from automated discovery.
     *                Logical operator is <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>License Included</code> - The type of license included.
     *                Logical operators are <code>EQUALS</code> and <code>NOT_EQUALS</code>.
     *                Possible values are: <code>sql-server-enterprise</code> |
     *                <code>sql-server-standard</code> |
     *                <code>sql-server-web</code> |
     *                <code>windows-server-datacenter</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The following filters and logical operators are supported when the resource type
     *          is <code>RDS</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Engine Edition</code> - The edition of the database engine.
     *                Logical operator is <code>EQUALS</code>.
     *                Possible values are: <code>oracle-ee</code> | <code>oracle-se</code> | <code>oracle-se1</code> | <code>oracle-se2</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>License Pack</code> - The license pack.
     *                Logical operator is <code>EQUALS</code>.
     *                Possible values are: <code>data guard</code> |
     *                <code>diagnostic pack sqlt</code> |
     *                <code>tuning pack sqlt</code> |
     *                <code>ols</code> |
     *                <code>olap</code>.</p>
     *             </li>
     *          </ul>
     */
    ProductInformationFilterList: ProductInformationFilter[] | undefined;
}
export declare namespace ProductInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductInformation) => any;
}
/**
 * <p>Details about a tag for a license configuration.</p>
 */
export interface Tag {
    /**
     * <p>Tag key.</p>
     */
    Key?: string;
    /**
     * <p>Tag value.</p>
     */
    Value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateLicenseConfigurationRequest {
    /**
     * <p>Name of the license configuration.</p>
     */
    Name: string | undefined;
    /**
     * <p>Description of the license configuration.</p>
     */
    Description?: string;
    /**
     * <p>Dimension used to track the license inventory.</p>
     */
    LicenseCountingType: LicenseCountingType | string | undefined;
    /**
     * <p>Number of licenses managed by the license configuration.</p>
     */
    LicenseCount?: number;
    /**
     * <p>Indicates whether hard or soft license enforcement is used. Exceeding a hard limit
     *          blocks the launch of new instances.</p>
     */
    LicenseCountHardLimit?: boolean;
    /**
     * <p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules
     *          vary by dimension, as follows.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Cores</code> dimension: <code>allowedTenancy</code> |
     *                <code>licenseAffinityToHost</code> |
     *                <code>maximumCores</code> | <code>minimumCores</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Instances</code> dimension: <code>allowedTenancy</code> |
     *                <code>maximumCores</code> | <code>minimumCores</code> |
     *                <code>maximumSockets</code> | <code>minimumSockets</code> |
     *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Sockets</code> dimension: <code>allowedTenancy</code> |
     *                <code>licenseAffinityToHost</code> |
     *                <code>maximumSockets</code> | <code>minimumSockets</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>vCPUs</code> dimension: <code>allowedTenancy</code> |
     *                <code>honorVcpuOptimization</code> |
     *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>The unit for <code>licenseAffinityToHost</code> is days and the range is 1 to 180. The possible
     *          values for <code>allowedTenancy</code> are <code>EC2-Default</code>, <code>EC2-DedicatedHost</code>, and
     *          <code>EC2-DedicatedInstance</code>. The possible values for <code>honorVcpuOptimization</code> are
     *          <code>True</code> and <code>False</code>.</p>
     */
    LicenseRules?: string[];
    /**
     * <p>Tags to add to the license configuration.</p>
     */
    Tags?: Tag[];
    /**
     * <p>When true, disassociates a resource when software is uninstalled.</p>
     */
    DisassociateWhenNotFound?: boolean;
    /**
     * <p>Product information.</p>
     */
    ProductInformationList?: ProductInformation[];
}
export declare namespace CreateLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseConfigurationRequest) => any;
}
export interface CreateLicenseConfigurationResponse {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn?: string;
}
export declare namespace CreateLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseConfigurationResponse) => any;
}
/**
 * <p>Details of the license configuration that this generator reports on.</p>
 */
export interface ReportContext {
    /**
     * <p>Amazon Resource Number (ARN) of the license configuration that this generator reports on.</p>
     */
    licenseConfigurationArns: string[] | undefined;
}
export declare namespace ReportContext {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReportContext) => any;
}
export declare enum ReportFrequencyType {
    DAY = "DAY",
    MONTH = "MONTH",
    WEEK = "WEEK"
}
/**
 * <p>Details on how frequently reports are generated.</p>
 */
export interface ReportFrequency {
    /**
     * <p>Number of times within the frequency period that a report will be generated.  Currently only <code>1</code> is supported.</p>
     */
    value?: number;
    /**
     * <p>Time period between each report. The period can be daily, weekly, or monthly.</p>
     */
    period?: ReportFrequencyType | string;
}
export declare namespace ReportFrequency {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReportFrequency) => any;
}
export declare enum ReportType {
    LICENSE_CONFIGURATION_SUMMARY_REPORT = "LicenseConfigurationSummaryReport",
    LICENSE_CONFIGURATION_USAGE_REPORT = "LicenseConfigurationUsageReport"
}
export interface CreateLicenseManagerReportGeneratorRequest {
    /**
     * <p>Name of the report generator.</p>
     */
    ReportGeneratorName: string | undefined;
    /**
     * <p>Type of reports to generate. The following report types an be generated:</p>
     *          <ul>
     *             <li>
     *                <p>License configuration report - Reports on the number and details of consumed licenses for a license configuration.</p>
     *             </li>
     *             <li>
     *                <p>Resource report - Reports on the tracked licenses and resource consumption for a license configuration.</p>
     *             </li>
     *          </ul>
     */
    Type: (ReportType | string)[] | undefined;
    /**
     * <p>Defines the type of license configuration the report generator tracks.</p>
     */
    ReportContext: ReportContext | undefined;
    /**
     * <p>Frequency by which reports are generated.  Reports can be generated daily, monthly, or weekly.</p>
     */
    ReportFrequency: ReportFrequency | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>Description of the report generator.</p>
     */
    Description?: string;
    /**
     * <p>Tags to add to the report generator.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateLicenseManagerReportGeneratorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseManagerReportGeneratorRequest) => any;
}
export interface CreateLicenseManagerReportGeneratorResponse {
    /**
     * <p>The Amazon Resource Number (ARN) of the new report generator.</p>
     */
    LicenseManagerReportGeneratorArn?: string;
}
export declare namespace CreateLicenseManagerReportGeneratorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseManagerReportGeneratorResponse) => any;
}
export interface CreateLicenseVersionRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>License name.</p>
     */
    LicenseName: string | undefined;
    /**
     * <p>Product name.</p>
     */
    ProductName: string | undefined;
    /**
     * <p>License issuer.</p>
     */
    Issuer: Issuer | undefined;
    /**
     * <p>Home Region of the license.</p>
     */
    HomeRegion: string | undefined;
    /**
     * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
     */
    Validity: DatetimeRange | undefined;
    /**
     * <p>Information about the license.</p>
     */
    LicenseMetadata?: Metadata[];
    /**
     * <p>License entitlements.</p>
     */
    Entitlements: Entitlement[] | undefined;
    /**
     * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
     *          running with continuous connectivity. Choose a borrow configuration for workloads with offline
     *          usage.</p>
     */
    ConsumptionConfiguration: ConsumptionConfiguration | undefined;
    /**
     * <p>License status.</p>
     */
    Status: LicenseStatus | string | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>Current version of the license.</p>
     */
    SourceVersion?: string;
}
export declare namespace CreateLicenseVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseVersionRequest) => any;
}
export interface CreateLicenseVersionResponse {
    /**
     * <p>License ARN.</p>
     */
    LicenseArn?: string;
    /**
     * <p>New version of the license.</p>
     */
    Version?: string;
    /**
     * <p>License status.</p>
     */
    Status?: LicenseStatus | string;
}
export declare namespace CreateLicenseVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLicenseVersionResponse) => any;
}
export interface CreateTokenRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the
     *           JWT token.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>Amazon Resource Name (ARN) of the IAM roles to embed in the token.
     *          License Manager does not check whether the roles are in use.</p>
     */
    RoleArns?: string[];
    /**
     * <p>Token expiration, in days, counted from token creation. The default is 365 days.</p>
     */
    ExpirationInDays?: number;
    /**
     * <p>Data specified by the caller to be included in the JWT token. The data is mapped
     *           to the amr claim of the JWT token.</p>
     */
    TokenProperties?: string[];
    /**
     * <p>Idempotency token, valid for 10 minutes.</p>
     */
    ClientToken: string | undefined;
}
export declare namespace CreateTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTokenRequest) => any;
}
export declare enum TokenType {
    REFRESH_TOKEN = "REFRESH_TOKEN"
}
export interface CreateTokenResponse {
    /**
     * <p>Token ID.</p>
     */
    TokenId?: string;
    /**
     * <p>Token type.</p>
     */
    TokenType?: TokenType | string;
    /**
     * <p>Refresh token, encoded as a JWT token.</p>
     */
    Token?: string;
}
export declare namespace CreateTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTokenResponse) => any;
}
export interface DeleteGrantRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
    /**
     * <p>Current version of the grant.</p>
     */
    Version: string | undefined;
}
export declare namespace DeleteGrantRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGrantRequest) => any;
}
export interface DeleteGrantResponse {
    /**
     * <p>Grant ARN.</p>
     */
    GrantArn?: string;
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>Grant version.</p>
     */
    Version?: string;
}
export declare namespace DeleteGrantResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGrantResponse) => any;
}
export interface DeleteLicenseRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>Current version of the license.</p>
     */
    SourceVersion: string | undefined;
}
export declare namespace DeleteLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseRequest) => any;
}
export declare enum LicenseDeletionStatus {
    DELETED = "DELETED",
    PENDING_DELETE = "PENDING_DELETE"
}
export interface DeleteLicenseResponse {
    /**
     * <p>License status.</p>
     */
    Status?: LicenseDeletionStatus | string;
    /**
     * <p>Date on which the license is deleted.</p>
     */
    DeletionDate?: string;
}
export declare namespace DeleteLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseResponse) => any;
}
export interface DeleteLicenseConfigurationRequest {
    /**
     * <p>ID of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
}
export declare namespace DeleteLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseConfigurationRequest) => any;
}
export interface DeleteLicenseConfigurationResponse {
}
export declare namespace DeleteLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseConfigurationResponse) => any;
}
export interface DeleteLicenseManagerReportGeneratorRequest {
    /**
     * <p>Amazon Resource Number (ARN) of the report generator that will be deleted.</p>
     */
    LicenseManagerReportGeneratorArn: string | undefined;
}
export declare namespace DeleteLicenseManagerReportGeneratorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseManagerReportGeneratorRequest) => any;
}
export interface DeleteLicenseManagerReportGeneratorResponse {
}
export declare namespace DeleteLicenseManagerReportGeneratorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLicenseManagerReportGeneratorResponse) => any;
}
export interface DeleteTokenRequest {
    /**
     * <p>Token ID.</p>
     */
    TokenId: string | undefined;
}
export declare namespace DeleteTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTokenRequest) => any;
}
export interface DeleteTokenResponse {
}
export declare namespace DeleteTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTokenResponse) => any;
}
export interface ExtendLicenseConsumptionRequest {
    /**
     * <p>License consumption token.</p>
     */
    LicenseConsumptionToken: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.</p>
     */
    DryRun?: boolean;
}
export declare namespace ExtendLicenseConsumptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExtendLicenseConsumptionRequest) => any;
}
export interface ExtendLicenseConsumptionResponse {
    /**
     * <p>License consumption token.</p>
     */
    LicenseConsumptionToken?: string;
    /**
     * <p>Date and time at which the license consumption expires.</p>
     */
    Expiration?: string;
}
export declare namespace ExtendLicenseConsumptionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExtendLicenseConsumptionResponse) => any;
}
export interface GetAccessTokenRequest {
    /**
     * <p>Refresh token, encoded as a JWT token.</p>
     */
    Token: string | undefined;
    /**
     * <p>Token properties to validate against those present in the JWT token.</p>
     */
    TokenProperties?: string[];
}
export declare namespace GetAccessTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessTokenRequest) => any;
}
export interface GetAccessTokenResponse {
    /**
     * <p>Temporary access token.</p>
     */
    AccessToken?: string;
}
export declare namespace GetAccessTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessTokenResponse) => any;
}
export interface GetGrantRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
    /**
     * <p>Grant version.</p>
     */
    Version?: string;
}
export declare namespace GetGrantRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGrantRequest) => any;
}
/**
 * <p>Describes a grant.</p>
 */
export interface Grant {
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
    /**
     * <p>Grant name.</p>
     */
    GrantName: string | undefined;
    /**
     * <p>Parent ARN.</p>
     */
    ParentArn: string | undefined;
    /**
     * <p>License ARN.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>The grantee principal ARN.</p>
     */
    GranteePrincipalArn: string | undefined;
    /**
     * <p>Home Region of the grant.</p>
     */
    HomeRegion: string | undefined;
    /**
     * <p>Grant status.</p>
     */
    GrantStatus: GrantStatus | string | undefined;
    /**
     * <p>Grant status reason.</p>
     */
    StatusReason?: string;
    /**
     * <p>Grant version.</p>
     */
    Version: string | undefined;
    /**
     * <p>Granted operations.</p>
     */
    GrantedOperations: (AllowedOperation | string)[] | undefined;
}
export declare namespace Grant {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Grant) => any;
}
export interface GetGrantResponse {
    /**
     * <p>Grant details.</p>
     */
    Grant?: Grant;
}
export declare namespace GetGrantResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGrantResponse) => any;
}
export interface GetLicenseRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>License version.</p>
     */
    Version?: string;
}
export declare namespace GetLicenseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseRequest) => any;
}
/**
 * <p>Details associated with the issuer of a license.</p>
 */
export interface IssuerDetails {
    /**
     * <p>Issuer name.</p>
     */
    Name?: string;
    /**
     * <p>Asymmetric CMK from AWS Key Management Service. The CMK must have a key usage of sign and verify,
     *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
     */
    SignKey?: string;
    /**
     * <p>Issuer key fingerprint.</p>
     */
    KeyFingerprint?: string;
}
export declare namespace IssuerDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IssuerDetails) => any;
}
/**
 * <p>Software license that is managed in AWS License Manager.</p>
 */
export interface License {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn?: string;
    /**
     * <p>License name.</p>
     */
    LicenseName?: string;
    /**
     * <p>Product name.</p>
     */
    ProductName?: string;
    /**
     * <p>Product SKU.</p>
     */
    ProductSKU?: string;
    /**
     * <p>License issuer.</p>
     */
    Issuer?: IssuerDetails;
    /**
     * <p>Home Region of the license.</p>
     */
    HomeRegion?: string;
    /**
     * <p>License status.</p>
     */
    Status?: LicenseStatus | string;
    /**
     * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
     */
    Validity?: DatetimeRange;
    /**
     * <p>License beneficiary.</p>
     */
    Beneficiary?: string;
    /**
     * <p>License entitlements.</p>
     */
    Entitlements?: Entitlement[];
    /**
     * <p>Configuration for consumption of the license.</p>
     */
    ConsumptionConfiguration?: ConsumptionConfiguration;
    /**
     * <p>License metadata.</p>
     */
    LicenseMetadata?: Metadata[];
    /**
     * <p>License creation time.</p>
     */
    CreateTime?: string;
    /**
     * <p>License version.</p>
     */
    Version?: string;
}
export declare namespace License {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: License) => any;
}
export interface GetLicenseResponse {
    /**
     * <p>License details.</p>
     */
    License?: License;
}
export declare namespace GetLicenseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseResponse) => any;
}
export interface GetLicenseConfigurationRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
}
export declare namespace GetLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseConfigurationRequest) => any;
}
export declare enum ResourceType {
    EC2_AMI = "EC2_AMI",
    EC2_HOST = "EC2_HOST",
    EC2_INSTANCE = "EC2_INSTANCE",
    RDS = "RDS",
    SYSTEMS_MANAGER_MANAGED_INSTANCE = "SYSTEMS_MANAGER_MANAGED_INSTANCE"
}
/**
 * <p>Details about license consumption.</p>
 */
export interface ConsumedLicenseSummary {
    /**
     * <p>Resource type of the resource consuming a license.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>Number of licenses consumed by the resource.</p>
     */
    ConsumedLicenses?: number;
}
export declare namespace ConsumedLicenseSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConsumedLicenseSummary) => any;
}
/**
 * <p>Summary information about a managed resource.</p>
 */
export interface ManagedResourceSummary {
    /**
     * <p>Type of resource associated with a license.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>Number of resources associated with licenses.</p>
     */
    AssociationCount?: number;
}
export declare namespace ManagedResourceSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ManagedResourceSummary) => any;
}
export interface GetLicenseConfigurationResponse {
    /**
     * <p>Unique ID for the license configuration.</p>
     */
    LicenseConfigurationId?: string;
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn?: string;
    /**
     * <p>Name of the license configuration.</p>
     */
    Name?: string;
    /**
     * <p>Description of the license configuration.</p>
     */
    Description?: string;
    /**
     * <p>Dimension on which the licenses are counted.</p>
     */
    LicenseCountingType?: LicenseCountingType | string;
    /**
     * <p>License rules.</p>
     */
    LicenseRules?: string[];
    /**
     * <p>Number of available licenses.</p>
     */
    LicenseCount?: number;
    /**
     * <p>Sets the number of available licenses as a hard limit.</p>
     */
    LicenseCountHardLimit?: boolean;
    /**
     * <p>Number of licenses assigned to resources.</p>
     */
    ConsumedLicenses?: number;
    /**
     * <p>License configuration status.</p>
     */
    Status?: string;
    /**
     * <p>Account ID of the owner of the license configuration.</p>
     */
    OwnerAccountId?: string;
    /**
     * <p>Summaries of the licenses consumed by resources.</p>
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];
    /**
     * <p>Summaries of the managed resources.</p>
     */
    ManagedResourceSummaryList?: ManagedResourceSummary[];
    /**
     * <p>Tags for the license configuration.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Product information.</p>
     */
    ProductInformationList?: ProductInformation[];
    /**
     * <p>Automated discovery information.</p>
     */
    AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
    /**
     * <p>When true, disassociates a resource when software is uninstalled.</p>
     */
    DisassociateWhenNotFound?: boolean;
}
export declare namespace GetLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseConfigurationResponse) => any;
}
export interface GetLicenseManagerReportGeneratorRequest {
    /**
     * <p>mazon Resource Number (ARN) of the report generator to retrieve information on.</p>
     */
    LicenseManagerReportGeneratorArn: string | undefined;
}
export declare namespace GetLicenseManagerReportGeneratorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseManagerReportGeneratorRequest) => any;
}
/**
 * <p>Details of the S3 bucket that report generator reports are published to.</p>
 */
export interface S3Location {
    /**
     * <p>Name of the S3 bucket reports are published to.</p>
     */
    bucket?: string;
    /**
     * <p>Prefix of the S3 bucket reports are published to.</p>
     */
    keyPrefix?: string;
}
export declare namespace S3Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Location) => any;
}
/**
 * <p>Describe the details of a report generator.</p>
 */
export interface ReportGenerator {
    /**
     * <p>Name of the report generator.</p>
     */
    ReportGeneratorName?: string;
    /**
     * <p>Type of reports that are generated.</p>
     */
    ReportType?: (ReportType | string)[];
    /**
     * <p>License configuration type this generator reports on.</p>
     */
    ReportContext?: ReportContext;
    /**
     * <p>Details on how frequently reports are generated.</p>
     */
    ReportFrequency?: ReportFrequency;
    /**
     * <p>Amazon Resource Number (ARN) of the report generator.</p>
     */
    LicenseManagerReportGeneratorArn?: string;
    /**
     * <p>Status of the last report generation attempt.</p>
     */
    LastRunStatus?: string;
    /**
     * <p>Failure message for the last report generation attempt.</p>
     */
    LastRunFailureReason?: string;
    /**
     * <p>Time the last report was generated at.</p>
     */
    LastReportGenerationTime?: string;
    /**
     * <p>The AWS account ID used to create the report generator.</p>
     */
    ReportCreatorAccount?: string;
    /**
     * <p>Description of the report generator.</p>
     */
    Description?: string;
    /**
     * <p>Details of the S3 bucket that report generator reports are published to.</p>
     */
    S3Location?: S3Location;
    /**
     * <p>Time the report was created.</p>
     */
    CreateTime?: string;
    /**
     * <p>Tags associated with the report generator.</p>
     */
    Tags?: Tag[];
}
export declare namespace ReportGenerator {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReportGenerator) => any;
}
export interface GetLicenseManagerReportGeneratorResponse {
    /**
     * <p>A report generator that creates periodic reports on your license configurations.</p>
     */
    ReportGenerator?: ReportGenerator;
}
export declare namespace GetLicenseManagerReportGeneratorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseManagerReportGeneratorResponse) => any;
}
export interface GetLicenseUsageRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
}
export declare namespace GetLicenseUsageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseUsageRequest) => any;
}
/**
 * <p>Usage associated with an entitlement resource.</p>
 */
export interface EntitlementUsage {
    /**
     * <p>Entitlement usage name.</p>
     */
    Name: string | undefined;
    /**
     * <p>Resource usage consumed.</p>
     */
    ConsumedValue: string | undefined;
    /**
     * <p>Maximum entitlement usage count.</p>
     */
    MaxCount?: string;
    /**
     * <p>Entitlement usage unit.</p>
     */
    Unit: EntitlementDataUnit | string | undefined;
}
export declare namespace EntitlementUsage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntitlementUsage) => any;
}
/**
 * <p>Describes the entitlement usage associated with a license.</p>
 */
export interface LicenseUsage {
    /**
     * <p>License entitlement usages.</p>
     */
    EntitlementUsages?: EntitlementUsage[];
}
export declare namespace LicenseUsage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseUsage) => any;
}
export interface GetLicenseUsageResponse {
    /**
     * <p>License usage details.</p>
     */
    LicenseUsage?: LicenseUsage;
}
export declare namespace GetLicenseUsageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLicenseUsageResponse) => any;
}
export interface GetServiceSettingsRequest {
}
export declare namespace GetServiceSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceSettingsRequest) => any;
}
/**
 * <p>Configuration information for AWS Organizations.</p>
 */
export interface OrganizationConfiguration {
    /**
     * <p>Enables AWS Organization integration.</p>
     */
    EnableIntegration: boolean | undefined;
}
export declare namespace OrganizationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationConfiguration) => any;
}
export interface GetServiceSettingsResponse {
    /**
     * <p>Regional S3 bucket path for storing reports, license trail event data, discovery data,
     *          and so on.</p>
     */
    S3BucketArn?: string;
    /**
     * <p>SNS topic configured to receive notifications from License Manager.</p>
     */
    SnsTopicArn?: string;
    /**
     * <p>Indicates whether AWS Organizations is integrated with License Manager for
     *          cross-account discovery.</p>
     */
    OrganizationConfiguration?: OrganizationConfiguration;
    /**
     * <p>Indicates whether cross-account discovery is enabled.</p>
     */
    EnableCrossAccountsDiscovery?: boolean;
    /**
     * <p>Amazon Resource Name (ARN) of the AWS resource share. The License Manager management account
     *          provides member accounts with access to this share.</p>
     */
    LicenseManagerResourceShareArn?: string;
}
export declare namespace GetServiceSettingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceSettingsResponse) => any;
}
/**
 * <p>The request uses too many filters or too many filter values.</p>
 */
export interface FilterLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "FilterLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace FilterLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FilterLimitExceededException) => any;
}
export interface ListAssociationsForLicenseConfigurationRequest {
    /**
     * <p>Amazon Resource Name (ARN) of a license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListAssociationsForLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociationsForLicenseConfigurationRequest) => any;
}
/**
 * <p>Describes an association with a license configuration.</p>
 */
export interface LicenseConfigurationAssociation {
    /**
     * <p>Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn?: string;
    /**
     * <p>Type of server resource.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>ID of the AWS account that owns the resource consuming licenses.</p>
     */
    ResourceOwnerId?: string;
    /**
     * <p>Time when the license configuration was associated with the resource.</p>
     */
    AssociationTime?: Date;
    /**
     * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
     */
    AmiAssociationScope?: string;
}
export declare namespace LicenseConfigurationAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseConfigurationAssociation) => any;
}
export interface ListAssociationsForLicenseConfigurationResponse {
    /**
     * <p>Information about the associations for the license configuration.</p>
     */
    LicenseConfigurationAssociations?: LicenseConfigurationAssociation[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListAssociationsForLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociationsForLicenseConfigurationResponse) => any;
}
/**
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific criteria,
 *          such as tags, attributes, or IDs.</p>
 */
export interface Filter {
    /**
     * <p>Name of the filter. Filter names are case-sensitive.</p>
     */
    Name?: string;
    /**
     * <p>Filter values. Filter values are case-sensitive.</p>
     */
    Values?: string[];
}
export declare namespace Filter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filter) => any;
}
export interface ListDistributedGrantsRequest {
    /**
     * <p>Amazon Resource Names (ARNs) of the grants.</p>
     */
    GrantArns?: string[];
    /**
     * <p>Filters to scope the results. The following filters are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LicenseArn</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>GrantStatus</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>GranteePrincipalARN</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ProductSKU</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LicenseIssuerName</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListDistributedGrantsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDistributedGrantsRequest) => any;
}
export interface ListDistributedGrantsResponse {
    /**
     * <p>Distributed grant details.</p>
     */
    Grants?: Grant[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDistributedGrantsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDistributedGrantsResponse) => any;
}
export interface ListFailuresForLicenseConfigurationOperationsRequest {
    /**
     * <p>Amazon Resource Name of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListFailuresForLicenseConfigurationOperationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFailuresForLicenseConfigurationOperationsRequest) => any;
}
/**
 * <p>Describes the failure of a license operation.</p>
 */
export interface LicenseOperationFailure {
    /**
     * <p>Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn?: string;
    /**
     * <p>Resource type.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>Error message.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>Failure time.</p>
     */
    FailureTime?: Date;
    /**
     * <p>Name of the operation.</p>
     */
    OperationName?: string;
    /**
     * <p>ID of the AWS account that owns the resource.</p>
     */
    ResourceOwnerId?: string;
    /**
     * <p>The requester is "License Manager Automated Discovery".</p>
     */
    OperationRequestedBy?: string;
    /**
     * <p>Reserved.</p>
     */
    MetadataList?: Metadata[];
}
export declare namespace LicenseOperationFailure {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseOperationFailure) => any;
}
export interface ListFailuresForLicenseConfigurationOperationsResponse {
    /**
     * <p>License configuration operations that failed.</p>
     */
    LicenseOperationFailureList?: LicenseOperationFailure[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListFailuresForLicenseConfigurationOperationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFailuresForLicenseConfigurationOperationsResponse) => any;
}
export interface ListLicenseConfigurationsRequest {
    /**
     * <p>Amazon Resource Names (ARN) of the license configurations.</p>
     */
    LicenseConfigurationArns?: string[];
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Filters to scope the results. The following filters and logical operators
     *         are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>licenseCountingType</code> - The dimension on which licenses are counted.
     *                Possible values are <code>vCPU</code> | <code>Instance</code> | <code>Core</code> | <code>Socket</code>.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>enforceLicenseCount</code> - A Boolean value that indicates whether hard license enforcement is used.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>usagelimitExceeded</code> - A Boolean value that indicates whether the available licenses have been exceeded.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
}
export declare namespace ListLicenseConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseConfigurationsRequest) => any;
}
/**
 * <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
 *          must be associated with a host), and the number of licenses purchased and used.</p>
 */
export interface LicenseConfiguration {
    /**
     * <p>Unique ID of the license configuration.</p>
     */
    LicenseConfigurationId?: string;
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn?: string;
    /**
     * <p>Name of the license configuration.</p>
     */
    Name?: string;
    /**
     * <p>Description of the license configuration.</p>
     */
    Description?: string;
    /**
     * <p>Dimension to use to track the license inventory.</p>
     */
    LicenseCountingType?: LicenseCountingType | string;
    /**
     * <p>License rules.</p>
     */
    LicenseRules?: string[];
    /**
     * <p>Number of licenses managed by the license configuration.</p>
     */
    LicenseCount?: number;
    /**
     * <p>Number of available licenses as a hard limit.</p>
     */
    LicenseCountHardLimit?: boolean;
    /**
     * <p>When true, disassociates a resource when software is uninstalled.</p>
     */
    DisassociateWhenNotFound?: boolean;
    /**
     * <p>Number of licenses consumed. </p>
     */
    ConsumedLicenses?: number;
    /**
     * <p>Status of the license configuration.</p>
     */
    Status?: string;
    /**
     * <p>Account ID of the license configuration's owner.</p>
     */
    OwnerAccountId?: string;
    /**
     * <p>Summaries for licenses consumed by various resources.</p>
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];
    /**
     * <p>Summaries for managed resources.</p>
     */
    ManagedResourceSummaryList?: ManagedResourceSummary[];
    /**
     * <p>Product information.</p>
     */
    ProductInformationList?: ProductInformation[];
    /**
     * <p>Automated discovery information.</p>
     */
    AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
}
export declare namespace LicenseConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseConfiguration) => any;
}
export interface ListLicenseConfigurationsResponse {
    /**
     * <p>Information about the license configurations.</p>
     */
    LicenseConfigurations?: LicenseConfiguration[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicenseConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseConfigurationsResponse) => any;
}
export interface ListLicenseManagerReportGeneratorsRequest {
    /**
     * <p>Filters to scope the results. The following filters are supported: </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LicenseConfigurationArn</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLicenseManagerReportGeneratorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseManagerReportGeneratorsRequest) => any;
}
export interface ListLicenseManagerReportGeneratorsResponse {
    /**
     * <p>A report generator that creates periodic reports on your license configurations.</p>
     */
    ReportGenerators?: ReportGenerator[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicenseManagerReportGeneratorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseManagerReportGeneratorsResponse) => any;
}
export interface ListLicensesRequest {
    /**
     * <p>Amazon Resource Names (ARNs) of the licenses.</p>
     */
    LicenseArns?: string[];
    /**
     * <p>Filters to scope the results. The following filters are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Beneficiary</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ProductSKU</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Fingerprint</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLicensesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicensesRequest) => any;
}
export interface ListLicensesResponse {
    /**
     * <p>License details.</p>
     */
    Licenses?: License[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicensesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicensesResponse) => any;
}
export interface ListLicenseSpecificationsForResourceRequest {
    /**
     * <p>Amazon Resource Name (ARN) of a resource that has an associated license configuration.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicenseSpecificationsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseSpecificationsForResourceRequest) => any;
}
/**
 * <p>Details for associating a license configuration with a resource.</p>
 */
export interface LicenseSpecification {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
    /**
     * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
     */
    AmiAssociationScope?: string;
}
export declare namespace LicenseSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseSpecification) => any;
}
export interface ListLicenseSpecificationsForResourceResponse {
    /**
     * <p>License configurations associated with a resource.</p>
     */
    LicenseSpecifications?: LicenseSpecification[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicenseSpecificationsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseSpecificationsForResourceResponse) => any;
}
export interface ListLicenseVersionsRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn: string | undefined;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLicenseVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseVersionsRequest) => any;
}
export interface ListLicenseVersionsResponse {
    /**
     * <p>License details.</p>
     */
    Licenses?: License[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLicenseVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLicenseVersionsResponse) => any;
}
export interface ListReceivedGrantsRequest {
    /**
     * <p>Amazon Resource Names (ARNs) of the grants.</p>
     */
    GrantArns?: string[];
    /**
     * <p>Filters to scope the results. The following filters are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ProductSKU</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LicenseIssuerName</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LicenseArn</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>GrantStatus</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>GranterAccountId</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListReceivedGrantsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListReceivedGrantsRequest) => any;
}
export interface ListReceivedGrantsResponse {
    /**
     * <p>Received grant details.</p>
     */
    Grants?: Grant[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListReceivedGrantsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListReceivedGrantsResponse) => any;
}
export interface ListReceivedLicensesRequest {
    /**
     * <p>Amazon Resource Names (ARNs) of the licenses.</p>
     */
    LicenseArns?: string[];
    /**
     * <p>Filters to scope the results. The following filters are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ProductSKU</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Fingerprint</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IssuerName</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Beneficiary</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListReceivedLicensesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListReceivedLicensesRequest) => any;
}
export declare enum ReceivedStatus {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    DISABLED = "DISABLED",
    FAILED_WORKFLOW = "FAILED_WORKFLOW",
    PENDING_ACCEPT = "PENDING_ACCEPT",
    PENDING_WORKFLOW = "PENDING_WORKFLOW",
    REJECTED = "REJECTED"
}
/**
 * <p>Metadata associated with received licenses and grants.</p>
 */
export interface ReceivedMetadata {
    /**
     * <p>Received status.</p>
     */
    ReceivedStatus?: ReceivedStatus | string;
    /**
     * <p>Allowed operations.</p>
     */
    AllowedOperations?: (AllowedOperation | string)[];
}
export declare namespace ReceivedMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReceivedMetadata) => any;
}
/**
 * <p>Describes a license that is granted to a grantee.</p>
 */
export interface GrantedLicense {
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn?: string;
    /**
     * <p>License name.</p>
     */
    LicenseName?: string;
    /**
     * <p>Product name.</p>
     */
    ProductName?: string;
    /**
     * <p>Product SKU.</p>
     */
    ProductSKU?: string;
    /**
     * <p>Granted license issuer.</p>
     */
    Issuer?: IssuerDetails;
    /**
     * <p>Home Region of the granted license.</p>
     */
    HomeRegion?: string;
    /**
     * <p>Granted license status.</p>
     */
    Status?: LicenseStatus | string;
    /**
     * <p>Date and time range during which the granted license is valid, in ISO8601-UTC format.</p>
     */
    Validity?: DatetimeRange;
    /**
     * <p>Granted license beneficiary.</p>
     */
    Beneficiary?: string;
    /**
     * <p>License entitlements.</p>
     */
    Entitlements?: Entitlement[];
    /**
     * <p>Configuration for consumption of the license.</p>
     */
    ConsumptionConfiguration?: ConsumptionConfiguration;
    /**
     * <p>Granted license metadata.</p>
     */
    LicenseMetadata?: Metadata[];
    /**
     * <p>Creation time of the granted license.</p>
     */
    CreateTime?: string;
    /**
     * <p>Version of the granted license.</p>
     */
    Version?: string;
    /**
     * <p>Granted license received metadata.</p>
     */
    ReceivedMetadata?: ReceivedMetadata;
}
export declare namespace GrantedLicense {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GrantedLicense) => any;
}
export interface ListReceivedLicensesResponse {
    /**
     * <p>Received license details.</p>
     */
    Licenses?: GrantedLicense[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListReceivedLicensesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListReceivedLicensesResponse) => any;
}
/**
 * <p>A dependency required to run the API is missing.</p>
 */
export interface FailedDependencyException extends __SmithyException, $MetadataBearer {
    name: "FailedDependencyException";
    $fault: "client";
    Message?: string;
    ErrorCode?: string;
}
export declare namespace FailedDependencyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedDependencyException) => any;
}
export declare enum InventoryFilterCondition {
    BEGINS_WITH = "BEGINS_WITH",
    CONTAINS = "CONTAINS",
    EQUALS = "EQUALS",
    NOT_EQUALS = "NOT_EQUALS"
}
/**
 * <p>An inventory filter.</p>
 */
export interface InventoryFilter {
    /**
     * <p>Name of the filter.</p>
     */
    Name: string | undefined;
    /**
     * <p>Condition of the filter.</p>
     */
    Condition: InventoryFilterCondition | string | undefined;
    /**
     * <p>Value of the filter.</p>
     */
    Value?: string;
}
export declare namespace InventoryFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InventoryFilter) => any;
}
export interface ListResourceInventoryRequest {
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Filters to scope the results. The following filters and logical operators
     *         are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>account_id</code> - The ID of the AWS account that owns the resource.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>application_name</code> - The name of the application.
     *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>license_included</code> - The type of license included.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.
     *                Possible values are <code>sql-server-enterprise</code> |
     *                <code>sql-server-standard</code> |
     *                <code>sql-server-web</code> |
     *                <code>windows-server-datacenter</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>platform</code> - The platform of the resource.
     *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>resource_id</code> - The ID of the resource.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag:<key></code> - The key/value combination of a tag assigned
     *                to the resource. Logical operators are <code>EQUALS</code> (single account) or
     *                <code>EQUALS</code> | <code>NOT_EQUALS</code> (cross account).</p>
     *             </li>
     *          </ul>
     */
    Filters?: InventoryFilter[];
}
export declare namespace ListResourceInventoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceInventoryRequest) => any;
}
/**
 * <p>Details about a resource.</p>
 */
export interface ResourceInventory {
    /**
     * <p>ID of the resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>Type of resource.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn?: string;
    /**
     * <p>Platform of the resource.</p>
     */
    Platform?: string;
    /**
     * <p>Platform version of the resource in the inventory.</p>
     */
    PlatformVersion?: string;
    /**
     * <p>ID of the account that owns the resource.</p>
     */
    ResourceOwningAccountId?: string;
}
export declare namespace ResourceInventory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInventory) => any;
}
export interface ListResourceInventoryResponse {
    /**
     * <p>Information about the resources.</p>
     */
    ResourceInventoryList?: ResourceInventory[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListResourceInventoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceInventoryResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>Information about the tags.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListTokensRequest {
    /**
     * <p>Token IDs.</p>
     */
    TokenIds?: string[];
    /**
     * <p>Filters to scope the results. The following filter is supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LicenseArns</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListTokensRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTokensRequest) => any;
}
/**
 * <p>Describes a token.</p>
 */
export interface TokenData {
    /**
     * <p>Token ID.</p>
     */
    TokenId?: string;
    /**
     * <p>Type of token generated. The supported value is <code>REFRESH_TOKEN</code>.</p>
     */
    TokenType?: string;
    /**
     * <p>Amazon Resource Name (ARN) of the license.</p>
     */
    LicenseArn?: string;
    /**
     * <p>Token expiration time, in ISO8601-UTC format.</p>
     */
    ExpirationTime?: string;
    /**
     * <p>Data specified by the caller.</p>
     */
    TokenProperties?: string[];
    /**
     * <p>Amazon Resource Names (ARN) of the roles included in the token.</p>
     */
    RoleArns?: string[];
    /**
     * <p>Token status. The possible values are <code>AVAILABLE</code> and <code>DELETED</code>.</p>
     */
    Status?: string;
}
export declare namespace TokenData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TokenData) => any;
}
export interface ListTokensResponse {
    /**
     * <p>Received token details.</p>
     */
    Tokens?: TokenData[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListTokensResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTokensResponse) => any;
}
export interface ListUsageForLicenseConfigurationRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
    /**
     * <p>Maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Filters to scope the results. The following filters and logical operators
     *         are supported:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>resourceArn</code> - The ARN of the license configuration resource.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>resourceType</code> - The resource type (<code>EC2_INSTANCE</code> | <code>EC2_HOST</code> | <code>EC2_AMI</code> | <code>SYSTEMS_MANAGER_MANAGED_INSTANCE</code>).
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>resourceAccount</code> - The ID of the account that owns the resource.
     *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
}
export declare namespace ListUsageForLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsageForLicenseConfigurationRequest) => any;
}
/**
 * <p>Details about the usage of a resource associated with a license configuration.</p>
 */
export interface LicenseConfigurationUsage {
    /**
     * <p>Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn?: string;
    /**
     * <p>Type of resource.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>Status of the resource.</p>
     */
    ResourceStatus?: string;
    /**
     * <p>ID of the account that owns the resource.</p>
     */
    ResourceOwnerId?: string;
    /**
     * <p>Time when the license configuration was initially associated with the resource.</p>
     */
    AssociationTime?: Date;
    /**
     * <p>Number of licenses consumed by the resource.</p>
     */
    ConsumedLicenses?: number;
}
export declare namespace LicenseConfigurationUsage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseConfigurationUsage) => any;
}
export interface ListUsageForLicenseConfigurationResponse {
    /**
     * <p>Information about the license configurations.</p>
     */
    LicenseConfigurationUsageList?: LicenseConfigurationUsage[];
    /**
     * <p>Token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListUsageForLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsageForLicenseConfigurationResponse) => any;
}
export interface RejectGrantRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the grant.</p>
     */
    GrantArn: string | undefined;
}
export declare namespace RejectGrantRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectGrantRequest) => any;
}
export interface RejectGrantResponse {
    /**
     * <p>Grant ARN.</p>
     */
    GrantArn?: string;
    /**
     * <p>Grant status.</p>
     */
    Status?: GrantStatus | string;
    /**
     * <p>Grant version.</p>
     */
    Version?: string;
}
export declare namespace RejectGrantResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectGrantResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Keys identifying the tags to remove.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export declare enum LicenseConfigurationStatus {
    AVAILABLE = "AVAILABLE",
    DISABLED = "DISABLED"
}
export interface UpdateLicenseConfigurationRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn: string | undefined;
    /**
     * <p>New status of the license configuration.</p>
     */
    LicenseConfigurationStatus?: LicenseConfigurationStatus | string;
    /**
     * <p>New license rule. The only rule that you can add after you create a license
     *           configuration is licenseAffinityToHost.</p>
     */
    LicenseRules?: string[];
    /**
     * <p>New number of licenses managed by the license configuration.</p>
     */
    LicenseCount?: number;
    /**
     * <p>New hard limit of the number of available licenses.</p>
     */
    LicenseCountHardLimit?: boolean;
    /**
     * <p>New name of the license configuration.</p>
     */
    Name?: string;
    /**
     * <p>New description of the license configuration.</p>
     */
    Description?: string;
    /**
     * <p>New product information.</p>
     */
    ProductInformationList?: ProductInformation[];
    /**
     * <p>When true, disassociates a resource when software is uninstalled.</p>
     */
    DisassociateWhenNotFound?: boolean;
}
export declare namespace UpdateLicenseConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseConfigurationRequest) => any;
}
export interface UpdateLicenseConfigurationResponse {
}
export declare namespace UpdateLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseConfigurationResponse) => any;
}
export interface UpdateLicenseManagerReportGeneratorRequest {
    /**
     * <p>Amazon Resource Number (ARN) of the report generator to update.</p>
     */
    LicenseManagerReportGeneratorArn: string | undefined;
    /**
     * <p>Name of the report generator.</p>
     */
    ReportGeneratorName: string | undefined;
    /**
     * <p>Type of reports to generate. The following report types an be generated:</p>
     *          <ul>
     *             <li>
     *                <p>License configuration report - Reports on the number and details of consumed licenses for a license configuration.</p>
     *             </li>
     *             <li>
     *                <p>Resource report - Reports on the tracked licenses and resource consumption for a license configuration.</p>
     *             </li>
     *          </ul>
     */
    Type: (ReportType | string)[] | undefined;
    /**
     * <p>?</p>
     */
    ReportContext: ReportContext | undefined;
    /**
     * <p>Frequency by which reports are generated.  The following options are avaiable:</p>
     *          <p>??? What are the APi value options?</p>
     */
    ReportFrequency: ReportFrequency | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    ClientToken: string | undefined;
    /**
     * <p>Description of the report generator.</p>
     */
    Description?: string;
}
export declare namespace UpdateLicenseManagerReportGeneratorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseManagerReportGeneratorRequest) => any;
}
export interface UpdateLicenseManagerReportGeneratorResponse {
}
export declare namespace UpdateLicenseManagerReportGeneratorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseManagerReportGeneratorResponse) => any;
}
/**
 * <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidResourceStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceStateException) => any;
}
/**
 * <p>You do not have enough licenses available to support a new resource launch.</p>
 */
export interface LicenseUsageException extends __SmithyException, $MetadataBearer {
    name: "LicenseUsageException";
    $fault: "client";
    Message?: string;
}
export declare namespace LicenseUsageException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseUsageException) => any;
}
export interface UpdateLicenseSpecificationsForResourceRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the AWS resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>ARNs of the license configurations to add.</p>
     */
    AddLicenseSpecifications?: LicenseSpecification[];
    /**
     * <p>ARNs of the license configurations to remove.</p>
     */
    RemoveLicenseSpecifications?: LicenseSpecification[];
}
export declare namespace UpdateLicenseSpecificationsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseSpecificationsForResourceRequest) => any;
}
export interface UpdateLicenseSpecificationsForResourceResponse {
}
export declare namespace UpdateLicenseSpecificationsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLicenseSpecificationsForResourceResponse) => any;
}
export interface UpdateServiceSettingsRequest {
    /**
     * <p>Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.</p>
     */
    S3BucketArn?: string;
    /**
     * <p>Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.</p>
     */
    SnsTopicArn?: string;
    /**
     * <p>Enables integration with AWS Organizations for cross-account discovery.</p>
     */
    OrganizationConfiguration?: OrganizationConfiguration;
    /**
     * <p>Activates cross-account discovery.</p>
     */
    EnableCrossAccountsDiscovery?: boolean;
}
export declare namespace UpdateServiceSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceSettingsRequest) => any;
}
export interface UpdateServiceSettingsResponse {
}
export declare namespace UpdateServiceSettingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceSettingsResponse) => any;
}
