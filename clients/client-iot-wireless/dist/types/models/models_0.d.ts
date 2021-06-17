import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Session keys for ABP v1.1</p>
 */
export interface SessionKeysAbpV1_0_x {
    /**
     * <p>The NwkSKey value.</p>
     */
    NwkSKey?: string;
    /**
     * <p>The AppSKey value.</p>
     */
    AppSKey?: string;
}
export declare namespace SessionKeysAbpV1_0_x {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SessionKeysAbpV1_0_x) => any;
}
/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 */
export interface AbpV1_0_x {
    /**
     * <p>The DevAddr value.</p>
     */
    DevAddr?: string;
    /**
     * <p>Session keys for ABP v1.0.x</p>
     */
    SessionKeys?: SessionKeysAbpV1_0_x;
}
export declare namespace AbpV1_0_x {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AbpV1_0_x) => any;
}
/**
 * <p>Session keys for ABP v1.1</p>
 */
export interface SessionKeysAbpV1_1 {
    /**
     * <p>The FNwkSIntKey value.</p>
     */
    FNwkSIntKey?: string;
    /**
     * <p>The SNwkSIntKey value.</p>
     */
    SNwkSIntKey?: string;
    /**
     * <p>The NwkSEncKey value.</p>
     */
    NwkSEncKey?: string;
    /**
     * <p>The AppSKey value.</p>
     */
    AppSKey?: string;
}
export declare namespace SessionKeysAbpV1_1 {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SessionKeysAbpV1_1) => any;
}
/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 */
export interface AbpV1_1 {
    /**
     * <p>The DevAddr value.</p>
     */
    DevAddr?: string;
    /**
     * <p>Session keys for ABP v1.1</p>
     */
    SessionKeys?: SessionKeysAbpV1_1;
}
export declare namespace AbpV1_1 {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AbpV1_1) => any;
}
/**
 * <p>User does not have permission to perform this action.</p>
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
 * <p>Information about a Sidewalk account.</p>
 */
export interface SidewalkAccountInfo {
    /**
     * <p>The Sidewalk Amazon ID.</p>
     */
    AmazonId?: string;
    /**
     * <p>The Sidewalk application server private key.</p>
     */
    AppServerPrivateKey?: string;
}
export declare namespace SidewalkAccountInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkAccountInfo) => any;
}
/**
 * <p>A simple label consisting of a customer-defined key-value pair</p>
 */
export interface Tag {
    /**
     * <p>The tag's key value.</p>
     */
    Key: string | undefined;
    /**
     * <p>The tag's value.</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface AssociateAwsAccountWithPartnerAccountRequest {
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk: SidewalkAccountInfo | undefined;
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace AssociateAwsAccountWithPartnerAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAwsAccountWithPartnerAccountRequest) => any;
}
export interface AssociateAwsAccountWithPartnerAccountResponse {
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk?: SidewalkAccountInfo;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
}
export declare namespace AssociateAwsAccountWithPartnerAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAwsAccountWithPartnerAccountResponse) => any;
}
/**
 * <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
    /**
     * <p>Id of the resource in the conflicting operation.</p>
     */
    ResourceId?: string;
    /**
     * <p>Type of the resource in the conflicting operation.</p>
     */
    ResourceType?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>An unexpected error occurred while processing a request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>Resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
    /**
     * <p>Id of the not found resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>Type of the font found resource.</p>
     */
    ResourceType?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The request was denied because it exceeded the allowed API request rate.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>The input did not meet the specified constraints.</p>
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
export interface AssociateWirelessDeviceWithThingRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The ARN of the thing to associate with the wireless device.</p>
     */
    ThingArn: string | undefined;
}
export declare namespace AssociateWirelessDeviceWithThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessDeviceWithThingRequest) => any;
}
export interface AssociateWirelessDeviceWithThingResponse {
}
export declare namespace AssociateWirelessDeviceWithThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessDeviceWithThingResponse) => any;
}
export interface AssociateWirelessGatewayWithCertificateRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The ID of the certificate to associate with the wireless gateway.</p>
     */
    IotCertificateId: string | undefined;
}
export declare namespace AssociateWirelessGatewayWithCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessGatewayWithCertificateRequest) => any;
}
export interface AssociateWirelessGatewayWithCertificateResponse {
    /**
     * <p>The ID of the certificate associated with the wireless gateway.</p>
     */
    IotCertificateId?: string;
}
export declare namespace AssociateWirelessGatewayWithCertificateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessGatewayWithCertificateResponse) => any;
}
export interface AssociateWirelessGatewayWithThingRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The ARN of the thing to associate with the wireless gateway.</p>
     */
    ThingArn: string | undefined;
}
export declare namespace AssociateWirelessGatewayWithThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessGatewayWithThingRequest) => any;
}
export interface AssociateWirelessGatewayWithThingResponse {
}
export declare namespace AssociateWirelessGatewayWithThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWirelessGatewayWithThingResponse) => any;
}
export declare enum BatteryLevel {
    CRITICAL = "critical",
    LOW = "low",
    NORMAL = "normal"
}
export declare enum SigningAlg {
    Ed25519 = "Ed25519",
    P256r1 = "P256r1"
}
/**
 * <p>List of sidewalk certificates.</p>
 */
export interface CertificateList {
    /**
     * <p>The certificate chain algorithm provided by sidewalk.</p>
     */
    SigningAlg: SigningAlg | string | undefined;
    /**
     * <p>The value of the chosen sidewalk certificate.</p>
     */
    Value: string | undefined;
}
export declare namespace CertificateList {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateList) => any;
}
export declare enum ConnectionStatus {
    CONNECTED = "Connected",
    DISCONNECTED = "Disconnected"
}
export declare enum ExpressionType {
    MqttTopic = "MqttTopic",
    RuleName = "RuleName"
}
export interface CreateDestinationRequest {
    /**
     * <p>The name of the new resource.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of value in <code>Expression</code>.</p>
     */
    ExpressionType: ExpressionType | string | undefined;
    /**
     * <p>The rule name or topic rule to send messages to.</p>
     */
    Expression: string | undefined;
    /**
     * <p>The description of the new resource.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the IAM Role that authorizes the destination.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The tags to attach to the new destination. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDestinationRequest) => any;
}
export interface CreateDestinationResponse {
    /**
     * <p>The Amazon Resource Name of the new resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
}
export declare namespace CreateDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDestinationResponse) => any;
}
/**
 * <p>LoRaWANDeviceProfile object.</p>
 */
export interface LoRaWANDeviceProfile {
    /**
     * <p>The SupportsClassB value.</p>
     */
    SupportsClassB?: boolean;
    /**
     * <p>The ClassBTimeout value.</p>
     */
    ClassBTimeout?: number;
    /**
     * <p>The PingSlotPeriod value.</p>
     */
    PingSlotPeriod?: number;
    /**
     * <p>The PingSlotDR value.</p>
     */
    PingSlotDr?: number;
    /**
     * <p>The PingSlotFreq value.</p>
     */
    PingSlotFreq?: number;
    /**
     * <p>The SupportsClassC value.</p>
     */
    SupportsClassC?: boolean;
    /**
     * <p>The ClassCTimeout value.</p>
     */
    ClassCTimeout?: number;
    /**
     * <p>The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.</p>
     */
    MacVersion?: string;
    /**
     * <p>The version of regional parameters.</p>
     */
    RegParamsRevision?: string;
    /**
     * <p>The RXDelay1 value.</p>
     */
    RxDelay1?: number;
    /**
     * <p>The RXDROffset1 value.</p>
     */
    RxDrOffset1?: number;
    /**
     * <p>The RXDataRate2 value.</p>
     */
    RxDataRate2?: number;
    /**
     * <p>The RXFreq2 value.</p>
     */
    RxFreq2?: number;
    /**
     * <p>The list of values that make up the FactoryPresetFreqs value.</p>
     */
    FactoryPresetFreqsList?: number[];
    /**
     * <p>The MaxEIRP value.</p>
     */
    MaxEirp?: number;
    /**
     * <p>The MaxDutyCycle value.</p>
     */
    MaxDutyCycle?: number;
    /**
     * <p>The frequency band (RFRegion) value.</p>
     */
    RfRegion?: string;
    /**
     * <p>The SupportsJoin value.</p>
     */
    SupportsJoin?: boolean;
    /**
     * <p>The Supports32BitFCnt value.</p>
     */
    Supports32BitFCnt?: boolean;
}
export declare namespace LoRaWANDeviceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANDeviceProfile) => any;
}
export interface CreateDeviceProfileRequest {
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
    /**
     * <p>The device profile information to use to create the device profile.</p>
     */
    LoRaWAN?: LoRaWANDeviceProfile;
    /**
     * <p>The tags to attach to the new device profile. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateDeviceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceProfileRequest) => any;
}
export interface CreateDeviceProfileResponse {
    /**
     * <p>The Amazon Resource Name of the new resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the new device profile.</p>
     */
    Id?: string;
}
export declare namespace CreateDeviceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceProfileResponse) => any;
}
/**
 * <p>LoRaWANServiceProfile object.</p>
 */
export interface LoRaWANServiceProfile {
    /**
     * <p>The AddGWMetaData value.</p>
     */
    AddGwMetadata?: boolean;
}
export declare namespace LoRaWANServiceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANServiceProfile) => any;
}
export interface CreateServiceProfileRequest {
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
    /**
     * <p>The service profile information to use to create the service profile.</p>
     */
    LoRaWAN?: LoRaWANServiceProfile;
    /**
     * <p>The tags to attach to the new service profile. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateServiceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateServiceProfileRequest) => any;
}
export interface CreateServiceProfileResponse {
    /**
     * <p>The Amazon Resource Name of the new resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the new service profile.</p>
     */
    Id?: string;
}
export declare namespace CreateServiceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateServiceProfileResponse) => any;
}
/**
 * <p>OTAA device object for v1.0.x</p>
 */
export interface OtaaV1_0_x {
    /**
     * <p>The AppKey value.</p>
     */
    AppKey?: string;
    /**
     * <p>The AppEUI value.</p>
     */
    AppEui?: string;
}
export declare namespace OtaaV1_0_x {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OtaaV1_0_x) => any;
}
/**
 * <p>OTAA device object for v1.1</p>
 */
export interface OtaaV1_1 {
    /**
     * <p>The AppKey value.</p>
     */
    AppKey?: string;
    /**
     * <p>The NwkKey value.</p>
     */
    NwkKey?: string;
    /**
     * <p>The JoinEUI value.</p>
     */
    JoinEui?: string;
}
export declare namespace OtaaV1_1 {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OtaaV1_1) => any;
}
/**
 * <p>LoRaWAN object for create functions.</p>
 */
export interface LoRaWANDevice {
    /**
     * <p>The DevEUI value.</p>
     */
    DevEui?: string;
    /**
     * <p>The ID of the device profile for the new wireless device.</p>
     */
    DeviceProfileId?: string;
    /**
     * <p>The ID of the service profile.</p>
     */
    ServiceProfileId?: string;
    /**
     * <p>OTAA device object for v1.1 for create APIs</p>
     */
    OtaaV1_1?: OtaaV1_1;
    /**
     * <p>OTAA device object for create APIs for v1.0.x</p>
     */
    OtaaV1_0_x?: OtaaV1_0_x;
    /**
     * <p>ABP device object for create APIs for v1.1</p>
     */
    AbpV1_1?: AbpV1_1;
    /**
     * <p>LoRaWAN object for create APIs</p>
     */
    AbpV1_0_x?: AbpV1_0_x;
}
export declare namespace LoRaWANDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANDevice) => any;
}
export declare enum WirelessDeviceType {
    LoRaWAN = "LoRaWAN",
    Sidewalk = "Sidewalk"
}
export interface CreateWirelessDeviceRequest {
    /**
     * <p>The wireless device type.</p>
     */
    Type: WirelessDeviceType | string | undefined;
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
    /**
     * <p>The description of the new resource.</p>
     */
    Description?: string;
    /**
     * <p>The name of the destination to assign to the new wireless device.</p>
     */
    DestinationName: string | undefined;
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>The device configuration information to use to create the wireless device.</p>
     */
    LoRaWAN?: LoRaWANDevice;
    /**
     * <p>The tags to attach to the new wireless device. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessDeviceRequest) => any;
}
export interface CreateWirelessDeviceResponse {
    /**
     * <p>The Amazon Resource Name of the new resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the new wireless device.</p>
     */
    Id?: string;
}
export declare namespace CreateWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessDeviceResponse) => any;
}
/**
 * <p>LoRaWANGateway object.</p>
 */
export interface LoRaWANGateway {
    /**
     * <p>The gateway's EUI value.</p>
     */
    GatewayEui?: string;
    /**
     * <p>The frequency band (RFRegion) value.</p>
     */
    RfRegion?: string;
    /**
     * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
     */
    JoinEuiFilters?: string[][];
    /**
     * <p>A list of NetId values that are used by LoRa gateways to filter the uplink frames.</p>
     */
    NetIdFilters?: string[];
    /**
     * <p>A list of integer indicating which sub bands are supported by LoRa gateway.</p>
     */
    SubBands?: number[];
}
export declare namespace LoRaWANGateway {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANGateway) => any;
}
export interface CreateWirelessGatewayRequest {
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
    /**
     * <p>The description of the new resource.</p>
     */
    Description?: string;
    /**
     * <p>The gateway configuration information to use to create the wireless gateway.</p>
     */
    LoRaWAN: LoRaWANGateway | undefined;
    /**
     * <p>The tags to attach to the new wireless gateway. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateWirelessGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayRequest) => any;
}
export interface CreateWirelessGatewayResponse {
    /**
     * <p>The Amazon Resource Name of the new resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the new wireless gateway.</p>
     */
    Id?: string;
}
export declare namespace CreateWirelessGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayResponse) => any;
}
export interface CreateWirelessGatewayTaskRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The ID of the WirelessGatewayTaskDefinition.</p>
     */
    WirelessGatewayTaskDefinitionId: string | undefined;
}
export declare namespace CreateWirelessGatewayTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayTaskRequest) => any;
}
export declare enum WirelessGatewayTaskStatus {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    FIRST_RETRY = "FIRST_RETRY",
    IN_PROGRESS = "IN_PROGRESS",
    PENDING = "PENDING",
    SECOND_RETRY = "SECOND_RETRY"
}
export interface CreateWirelessGatewayTaskResponse {
    /**
     * <p>The ID of the WirelessGatewayTaskDefinition.</p>
     */
    WirelessGatewayTaskDefinitionId?: string;
    /**
     * <p>The status of the request.</p>
     */
    Status?: WirelessGatewayTaskStatus | string;
}
export declare namespace CreateWirelessGatewayTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayTaskResponse) => any;
}
/**
 * <p>LoRaWANGatewayVersion object.</p>
 */
export interface LoRaWANGatewayVersion {
    /**
     * <p>The version of the wireless gateway firmware.</p>
     */
    PackageVersion?: string;
    /**
     * <p>The model number of the wireless gateway.</p>
     */
    Model?: string;
    /**
     * <p>The basic station version of the wireless gateway.</p>
     */
    Station?: string;
}
export declare namespace LoRaWANGatewayVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANGatewayVersion) => any;
}
/**
 * <p>LoRaWANUpdateGatewayTaskCreate object.</p>
 */
export interface LoRaWANUpdateGatewayTaskCreate {
    /**
     * <p>The signature used to verify the update firmware.</p>
     */
    UpdateSignature?: string;
    /**
     * <p>The CRC of the signature private key to check.</p>
     */
    SigKeyCrc?: number;
    /**
     * <p>The version of the gateways that should receive the update.</p>
     */
    CurrentVersion?: LoRaWANGatewayVersion;
    /**
     * <p>The firmware version to update the gateway to.</p>
     */
    UpdateVersion?: LoRaWANGatewayVersion;
}
export declare namespace LoRaWANUpdateGatewayTaskCreate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANUpdateGatewayTaskCreate) => any;
}
/**
 * <p>UpdateWirelessGatewayTaskCreate object.</p>
 */
export interface UpdateWirelessGatewayTaskCreate {
    /**
     * <p>The link to the S3 bucket.</p>
     */
    UpdateDataSource?: string;
    /**
     * <p>The IAM role used to read data from the S3 bucket.</p>
     */
    UpdateDataRole?: string;
    /**
     * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
     */
    LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
}
export declare namespace UpdateWirelessGatewayTaskCreate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessGatewayTaskCreate) => any;
}
export interface CreateWirelessGatewayTaskDefinitionRequest {
    /**
     * <p>Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.</p>
     */
    AutoCreateTasks: boolean | undefined;
    /**
     * <p>The name of the new resource.</p>
     */
    Name?: string;
    /**
     * <p>Information about the gateways to update.</p>
     */
    Update?: UpdateWirelessGatewayTaskCreate;
    /**
     * <p>Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateWirelessGatewayTaskDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayTaskDefinitionRequest) => any;
}
export interface CreateWirelessGatewayTaskDefinitionResponse {
    /**
     * <p>The ID of the new wireless gateway task definition.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
}
export declare namespace CreateWirelessGatewayTaskDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWirelessGatewayTaskDefinitionResponse) => any;
}
export interface DeleteDestinationRequest {
    /**
     * <p>The name of the resource to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDestinationRequest) => any;
}
export interface DeleteDestinationResponse {
}
export declare namespace DeleteDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDestinationResponse) => any;
}
export interface DeleteDeviceProfileRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteDeviceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceProfileRequest) => any;
}
export interface DeleteDeviceProfileResponse {
}
export declare namespace DeleteDeviceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceProfileResponse) => any;
}
export interface DeleteServiceProfileRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteServiceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceProfileRequest) => any;
}
export interface DeleteServiceProfileResponse {
}
export declare namespace DeleteServiceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceProfileResponse) => any;
}
export interface DeleteWirelessDeviceRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessDeviceRequest) => any;
}
export interface DeleteWirelessDeviceResponse {
}
export declare namespace DeleteWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessDeviceResponse) => any;
}
export interface DeleteWirelessGatewayRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteWirelessGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayRequest) => any;
}
export interface DeleteWirelessGatewayResponse {
}
export declare namespace DeleteWirelessGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayResponse) => any;
}
export interface DeleteWirelessGatewayTaskRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteWirelessGatewayTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayTaskRequest) => any;
}
export interface DeleteWirelessGatewayTaskResponse {
}
export declare namespace DeleteWirelessGatewayTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayTaskResponse) => any;
}
export interface DeleteWirelessGatewayTaskDefinitionRequest {
    /**
     * <p>The ID of the resource to delete.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteWirelessGatewayTaskDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayTaskDefinitionRequest) => any;
}
export interface DeleteWirelessGatewayTaskDefinitionResponse {
}
export declare namespace DeleteWirelessGatewayTaskDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWirelessGatewayTaskDefinitionResponse) => any;
}
/**
 * <p>Describes a destination.</p>
 */
export interface Destinations {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The type of value in <code>Expression</code>.</p>
     */
    ExpressionType?: ExpressionType | string;
    /**
     * <p>The rule name or topic rule to send messages to.</p>
     */
    Expression?: string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the IAM Role that authorizes the destination.</p>
     */
    RoleArn?: string;
}
export declare namespace Destinations {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Destinations) => any;
}
/**
 * <p>Describes a device profile.</p>
 */
export interface DeviceProfile {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The ID of the device profile.</p>
     */
    Id?: string;
}
export declare namespace DeviceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceProfile) => any;
}
export declare enum DeviceState {
    PROVISIONED = "Provisioned",
    REGISTEREDNOTSEEN = "RegisteredNotSeen",
    REGISTEREDREACHABLE = "RegisteredReachable",
    REGISTEREDUNREACHABLE = "RegisteredUnreachable"
}
export declare enum PartnerType {
    Sidewalk = "Sidewalk"
}
export interface DisassociateAwsAccountFromPartnerAccountRequest {
    /**
     * <p>The partner account ID to disassociate from the AWS account.</p>
     */
    PartnerAccountId: string | undefined;
    /**
     * <p>The partner type.</p>
     */
    PartnerType: PartnerType | string | undefined;
}
export declare namespace DisassociateAwsAccountFromPartnerAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateAwsAccountFromPartnerAccountRequest) => any;
}
export interface DisassociateAwsAccountFromPartnerAccountResponse {
}
export declare namespace DisassociateAwsAccountFromPartnerAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateAwsAccountFromPartnerAccountResponse) => any;
}
export interface DisassociateWirelessDeviceFromThingRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
}
export declare namespace DisassociateWirelessDeviceFromThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessDeviceFromThingRequest) => any;
}
export interface DisassociateWirelessDeviceFromThingResponse {
}
export declare namespace DisassociateWirelessDeviceFromThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessDeviceFromThingResponse) => any;
}
export interface DisassociateWirelessGatewayFromCertificateRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
}
export declare namespace DisassociateWirelessGatewayFromCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessGatewayFromCertificateRequest) => any;
}
export interface DisassociateWirelessGatewayFromCertificateResponse {
}
export declare namespace DisassociateWirelessGatewayFromCertificateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessGatewayFromCertificateResponse) => any;
}
export interface DisassociateWirelessGatewayFromThingRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
}
export declare namespace DisassociateWirelessGatewayFromThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessGatewayFromThingRequest) => any;
}
export interface DisassociateWirelessGatewayFromThingResponse {
}
export declare namespace DisassociateWirelessGatewayFromThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWirelessGatewayFromThingResponse) => any;
}
export declare enum Event {
    ACK = "ack",
    DISCOVERED = "discovered",
    LOST = "lost",
    NACK = "nack",
    PASSTHROUGH = "passthrough"
}
export interface GetDestinationRequest {
    /**
     * <p>The name of the resource to get.</p>
     */
    Name: string | undefined;
}
export declare namespace GetDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDestinationRequest) => any;
}
export interface GetDestinationResponse {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The rule name or topic rule to send messages to.</p>
     */
    Expression?: string;
    /**
     * <p>The type of value in <code>Expression</code>.</p>
     */
    ExpressionType?: ExpressionType | string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the IAM Role that authorizes the destination.</p>
     */
    RoleArn?: string;
}
export declare namespace GetDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDestinationResponse) => any;
}
export interface GetDeviceProfileRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetDeviceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceProfileRequest) => any;
}
export interface GetDeviceProfileResponse {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The ID of the device profile.</p>
     */
    Id?: string;
    /**
     * <p>Information about the device profile.</p>
     */
    LoRaWAN?: LoRaWANDeviceProfile;
}
export declare namespace GetDeviceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceProfileResponse) => any;
}
export interface GetLogLevelsByResourceTypesRequest {
}
export declare namespace GetLogLevelsByResourceTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLogLevelsByResourceTypesRequest) => any;
}
export declare enum LogLevel {
    DISABLED = "DISABLED",
    ERROR = "ERROR",
    INFO = "INFO"
}
export declare enum WirelessDeviceEvent {
    Downlink_Data = "Downlink_Data",
    Join = "Join",
    Registration = "Registration",
    Rejoin = "Rejoin",
    Uplink_Data = "Uplink_Data"
}
/**
 * <p>The log option for a wireless device event. Can be used to set log level for a specific wireless device event. For a LoRaWAN device, the possible events for a log messsage are: Join, Rejoin, Downlink_Data, Uplink_Data. For a Sidewalk device, the possible events for a log message are: Registration, Downlink_Data, Uplink_Data.</p>
 */
export interface WirelessDeviceEventLogOption {
    /**
     * <p>The event for a log message, if the log message is tied to a wireless device.</p>
     */
    Event: WirelessDeviceEvent | string | undefined;
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel: LogLevel | string | undefined;
}
export declare namespace WirelessDeviceEventLogOption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessDeviceEventLogOption) => any;
}
/**
 * <p>The log option for wireless devices. Can be used to set log level for a specific type of wireless device.</p>
 */
export interface WirelessDeviceLogOption {
    /**
     * <p>The wireless device type.</p>
     */
    Type: WirelessDeviceType | string | undefined;
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel: LogLevel | string | undefined;
    /**
     * <p>The list of wireless device event log options.</p>
     */
    Events?: WirelessDeviceEventLogOption[];
}
export declare namespace WirelessDeviceLogOption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessDeviceLogOption) => any;
}
export declare enum WirelessGatewayEvent {
    CUPS_Request = "CUPS_Request",
    Certificate = "Certificate"
}
/**
 * <p>The log option for a wireless gateway event. Can be used to set log level for a specific wireless gateway event. For a LoRaWAN gateway, the possible events for a log message are: CUPS_Request, Certificate.</p>
 */
export interface WirelessGatewayEventLogOption {
    /**
     * <p>The event for a log message, if the log message is tied to a wireless gateway.</p>
     */
    Event: WirelessGatewayEvent | string | undefined;
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel: LogLevel | string | undefined;
}
export declare namespace WirelessGatewayEventLogOption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessGatewayEventLogOption) => any;
}
export declare enum WirelessGatewayType {
    LoRaWAN = "LoRaWAN"
}
/**
 * <p>The log option for wireless gateways. Can be used to set log level for a specific type of wireless gateway.</p>
 */
export interface WirelessGatewayLogOption {
    /**
     * <p>The wireless gateway type.</p>
     */
    Type: WirelessGatewayType | string | undefined;
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel: LogLevel | string | undefined;
    /**
     * <p>The list of wireless gateway event log options.</p>
     */
    Events?: WirelessGatewayEventLogOption[];
}
export declare namespace WirelessGatewayLogOption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessGatewayLogOption) => any;
}
export interface GetLogLevelsByResourceTypesResponse {
    /**
     * <p>The log level for a log message.</p>
     */
    DefaultLogLevel?: LogLevel | string;
    /**
     * <p>The list of wireless gateway log options.</p>
     */
    WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
    /**
     * <p>The list of wireless device log options.</p>
     */
    WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
}
export declare namespace GetLogLevelsByResourceTypesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLogLevelsByResourceTypesResponse) => any;
}
export interface GetPartnerAccountRequest {
    /**
     * <p>The partner account ID to disassociate from the AWS account.</p>
     */
    PartnerAccountId: string | undefined;
    /**
     * <p>The partner type.</p>
     */
    PartnerType: PartnerType | string | undefined;
}
export declare namespace GetPartnerAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPartnerAccountRequest) => any;
}
/**
 * <p>Information about a Sidewalk account.</p>
 */
export interface SidewalkAccountInfoWithFingerprint {
    /**
     * <p>The Sidewalk Amazon ID.</p>
     */
    AmazonId?: string;
    /**
     * <p>The fingerprint of the Sidewalk application server private key.</p>
     */
    Fingerprint?: string;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
}
export declare namespace SidewalkAccountInfoWithFingerprint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkAccountInfoWithFingerprint) => any;
}
export interface GetPartnerAccountResponse {
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk?: SidewalkAccountInfoWithFingerprint;
    /**
     * <p>Whether the partner account is linked to the AWS account.</p>
     */
    AccountLinked?: boolean;
}
export declare namespace GetPartnerAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPartnerAccountResponse) => any;
}
export interface GetResourceLogLevelRequest {
    /**
     * <p>The identifier of the resource. For a Wireless Device, it is the wireless device id. For a wireless gateway, it is the wireless gateway id.</p>
     */
    ResourceIdentifier: string | undefined;
    /**
     * <p>The type of the resource, currently support WirelessDevice and WirelessGateway.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace GetResourceLogLevelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceLogLevelRequest) => any;
}
export interface GetResourceLogLevelResponse {
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel?: LogLevel | string;
}
export declare namespace GetResourceLogLevelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceLogLevelResponse) => any;
}
export declare enum WirelessGatewayServiceType {
    CUPS = "CUPS",
    LNS = "LNS"
}
export interface GetServiceEndpointRequest {
    /**
     * <p>The service type for which to get endpoint information about. Can be <code>CUPS</code> for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint.</p>
     */
    ServiceType?: WirelessGatewayServiceType | string;
}
export declare namespace GetServiceEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceEndpointRequest) => any;
}
export interface GetServiceEndpointResponse {
    /**
     * <p>The endpoint's service type.</p>
     */
    ServiceType?: WirelessGatewayServiceType | string;
    /**
     * <p>The service endpoint value.</p>
     */
    ServiceEndpoint?: string;
    /**
     * <p>The Root CA of the server trust certificate.</p>
     */
    ServerTrust?: string;
}
export declare namespace GetServiceEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceEndpointResponse) => any;
}
export interface GetServiceProfileRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetServiceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceProfileRequest) => any;
}
/**
 * <p>LoRaWANGetServiceProfileInfo object.</p>
 */
export interface LoRaWANGetServiceProfileInfo {
    /**
     * <p>The ULRate value.</p>
     */
    UlRate?: number;
    /**
     * <p>The ULBucketSize value.</p>
     */
    UlBucketSize?: number;
    /**
     * <p>The ULRatePolicy value.</p>
     */
    UlRatePolicy?: string;
    /**
     * <p>The DLRate value.</p>
     */
    DlRate?: number;
    /**
     * <p>The DLBucketSize value.</p>
     */
    DlBucketSize?: number;
    /**
     * <p>The DLRatePolicy value.</p>
     */
    DlRatePolicy?: string;
    /**
     * <p>The AddGWMetaData value.</p>
     */
    AddGwMetadata?: boolean;
    /**
     * <p>The DevStatusReqFreq value.</p>
     */
    DevStatusReqFreq?: number;
    /**
     * <p>The ReportDevStatusBattery value.</p>
     */
    ReportDevStatusBattery?: boolean;
    /**
     * <p>The ReportDevStatusMargin value.</p>
     */
    ReportDevStatusMargin?: boolean;
    /**
     * <p>The DRMin value.</p>
     */
    DrMin?: number;
    /**
     * <p>The DRMax value.</p>
     */
    DrMax?: number;
    /**
     * <p>The ChannelMask value.</p>
     */
    ChannelMask?: string;
    /**
     * <p>The PRAllowed value that describes whether passive roaming is allowed.</p>
     */
    PrAllowed?: boolean;
    /**
     * <p>The HRAllowed value that describes whether handover roaming is allowed.</p>
     */
    HrAllowed?: boolean;
    /**
     * <p>The RAAllowed value that describes whether roaming activation is allowed.</p>
     */
    RaAllowed?: boolean;
    /**
     * <p>The NwkGeoLoc value.</p>
     */
    NwkGeoLoc?: boolean;
    /**
     * <p>The TargetPER value.</p>
     */
    TargetPer?: number;
    /**
     * <p>The MinGwDiversity value.</p>
     */
    MinGwDiversity?: number;
}
export declare namespace LoRaWANGetServiceProfileInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANGetServiceProfileInfo) => any;
}
export interface GetServiceProfileResponse {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The ID of the service profile.</p>
     */
    Id?: string;
    /**
     * <p>Information about the service profile.</p>
     */
    LoRaWAN?: LoRaWANGetServiceProfileInfo;
}
export declare namespace GetServiceProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceProfileResponse) => any;
}
export declare enum WirelessDeviceIdType {
    DevEui = "DevEui",
    ThingName = "ThingName",
    WirelessDeviceId = "WirelessDeviceId"
}
export interface GetWirelessDeviceRequest {
    /**
     * <p>The identifier of the wireless device to get.</p>
     */
    Identifier: string | undefined;
    /**
     * <p>The type of identifier used in <code>identifier</code>.</p>
     */
    IdentifierType: WirelessDeviceIdType | string | undefined;
}
export declare namespace GetWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessDeviceRequest) => any;
}
/**
 * <p>Sidewalk device object.</p>
 */
export interface SidewalkDevice {
    /**
     * <p>The sidewalk device identification.</p>
     */
    SidewalkId?: string;
    /**
     * <p>The Sidewalk manufacturing series number.</p>
     */
    SidewalkManufacturingSn?: string;
    /**
     * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
     */
    DeviceCertificates?: CertificateList[];
}
export declare namespace SidewalkDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkDevice) => any;
}
export interface GetWirelessDeviceResponse {
    /**
     * <p>The wireless device type.</p>
     */
    Type?: WirelessDeviceType | string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The name of the destination to which the device is assigned.</p>
     */
    DestinationName?: string;
    /**
     * <p>The ID of the wireless device.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.</p>
     */
    ThingName?: string;
    /**
     * <p>The ARN of the thing associated with the wireless device.</p>
     */
    ThingArn?: string;
    /**
     * <p>Information about the wireless device.</p>
     */
    LoRaWAN?: LoRaWANDevice;
    /**
     * <p>Sidewalk device object.</p>
     */
    Sidewalk?: SidewalkDevice;
}
export declare namespace GetWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessDeviceResponse) => any;
}
export interface GetWirelessDeviceStatisticsRequest {
    /**
     * <p>The ID of the wireless device for which to get the data.</p>
     */
    WirelessDeviceId: string | undefined;
}
export declare namespace GetWirelessDeviceStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessDeviceStatisticsRequest) => any;
}
/**
 * <p>LoRaWAN gateway metatdata.</p>
 */
export interface LoRaWANGatewayMetadata {
    /**
     * <p>The gateway's EUI value.</p>
     */
    GatewayEui?: string;
    /**
     * <p>The SNR value.</p>
     */
    Snr?: number;
    /**
     * <p>The RSSI value.</p>
     */
    Rssi?: number;
}
export declare namespace LoRaWANGatewayMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANGatewayMetadata) => any;
}
/**
 * <p>LoRaWAN device metatdata.</p>
 */
export interface LoRaWANDeviceMetadata {
    /**
     * <p>The DevEUI value.</p>
     */
    DevEui?: string;
    /**
     * <p>The FPort value.</p>
     */
    FPort?: number;
    /**
     * <p>The DataRate value.</p>
     */
    DataRate?: number;
    /**
     * <p>The device's channel frequency in Hz.</p>
     */
    Frequency?: number;
    /**
     * <p>The date and time of the metadata.</p>
     */
    Timestamp?: string;
    /**
     * <p>Information about the gateways accessed by the device.</p>
     */
    Gateways?: LoRaWANGatewayMetadata[];
}
export declare namespace LoRaWANDeviceMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANDeviceMetadata) => any;
}
/**
 * <p>MetaData for Sidewalk device.</p>
 */
export interface SidewalkDeviceMetadata {
    /**
     * <p>The RSSI value.</p>
     */
    Rssi?: number;
    /**
     * <p>Sidewalk device battery level.</p>
     */
    BatteryLevel?: BatteryLevel | string;
    /**
     * <p>Sidewalk device status notification.</p>
     */
    Event?: Event | string;
    /**
     * <p>Device state defines the device status of sidewalk device.</p>
     */
    DeviceState?: DeviceState | string;
}
export declare namespace SidewalkDeviceMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkDeviceMetadata) => any;
}
export interface GetWirelessDeviceStatisticsResponse {
    /**
     * <p>The ID of the wireless device.</p>
     */
    WirelessDeviceId?: string;
    /**
     * <p>The date and time when the most recent uplink was received.</p>
     */
    LastUplinkReceivedAt?: string;
    /**
     * <p>Information about the wireless device's operations.</p>
     */
    LoRaWAN?: LoRaWANDeviceMetadata;
    /**
     * <p>MetaData for Sidewalk device.</p>
     */
    Sidewalk?: SidewalkDeviceMetadata;
}
export declare namespace GetWirelessDeviceStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessDeviceStatisticsResponse) => any;
}
export declare enum WirelessGatewayIdType {
    GatewayEui = "GatewayEui",
    ThingName = "ThingName",
    WirelessGatewayId = "WirelessGatewayId"
}
export interface GetWirelessGatewayRequest {
    /**
     * <p>The identifier of the wireless gateway to get.</p>
     */
    Identifier: string | undefined;
    /**
     * <p>The type of identifier used in <code>identifier</code>.</p>
     */
    IdentifierType: WirelessGatewayIdType | string | undefined;
}
export declare namespace GetWirelessGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayRequest) => any;
}
export interface GetWirelessGatewayResponse {
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The ID of the wireless gateway.</p>
     */
    Id?: string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>Information about the wireless gateway.</p>
     */
    LoRaWAN?: LoRaWANGateway;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the thing associated with the wireless gateway. The value is empty if a thing isn't associated with the gateway.</p>
     */
    ThingName?: string;
    /**
     * <p>The ARN of the thing associated with the wireless gateway.</p>
     */
    ThingArn?: string;
}
export declare namespace GetWirelessGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayResponse) => any;
}
export interface GetWirelessGatewayCertificateRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetWirelessGatewayCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayCertificateRequest) => any;
}
export interface GetWirelessGatewayCertificateResponse {
    /**
     * <p>The ID of the certificate associated with the wireless gateway.</p>
     */
    IotCertificateId?: string;
    /**
     * <p>The ID of the certificate that is associated with the wireless gateway and used for the LoRaWANNetworkServer endpoint.</p>
     */
    LoRaWANNetworkServerCertificateId?: string;
}
export declare namespace GetWirelessGatewayCertificateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayCertificateResponse) => any;
}
export interface GetWirelessGatewayFirmwareInformationRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetWirelessGatewayFirmwareInformationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayFirmwareInformationRequest) => any;
}
/**
 * <p>LoRaWANGatewayCurrentVersion object.</p>
 */
export interface LoRaWANGatewayCurrentVersion {
    /**
     * <p>The version of the gateways that should receive the update.</p>
     */
    CurrentVersion?: LoRaWANGatewayVersion;
}
export declare namespace LoRaWANGatewayCurrentVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANGatewayCurrentVersion) => any;
}
export interface GetWirelessGatewayFirmwareInformationResponse {
    /**
     * <p>Information about the wireless gateway's firmware.</p>
     */
    LoRaWAN?: LoRaWANGatewayCurrentVersion;
}
export declare namespace GetWirelessGatewayFirmwareInformationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayFirmwareInformationResponse) => any;
}
export interface GetWirelessGatewayStatisticsRequest {
    /**
     * <p>The ID of the wireless gateway for which to get the data.</p>
     */
    WirelessGatewayId: string | undefined;
}
export declare namespace GetWirelessGatewayStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayStatisticsRequest) => any;
}
export interface GetWirelessGatewayStatisticsResponse {
    /**
     * <p>The ID of the wireless gateway.</p>
     */
    WirelessGatewayId?: string;
    /**
     * <p>The date and time when the most recent uplink was received.</p>
     */
    LastUplinkReceivedAt?: string;
    /**
     * <p>The connection status of the wireless gateway.</p>
     */
    ConnectionStatus?: ConnectionStatus | string;
}
export declare namespace GetWirelessGatewayStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayStatisticsResponse) => any;
}
export interface GetWirelessGatewayTaskRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetWirelessGatewayTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayTaskRequest) => any;
}
export interface GetWirelessGatewayTaskResponse {
    /**
     * <p>The ID of the wireless gateway.</p>
     */
    WirelessGatewayId?: string;
    /**
     * <p>The ID of the WirelessGatewayTask.</p>
     */
    WirelessGatewayTaskDefinitionId?: string;
    /**
     * <p>The date and time when the most recent uplink was received.</p>
     */
    LastUplinkReceivedAt?: string;
    /**
     * <p>The date and time when the task was created.</p>
     */
    TaskCreatedAt?: string;
    /**
     * <p>The status of the request.</p>
     */
    Status?: WirelessGatewayTaskStatus | string;
}
export declare namespace GetWirelessGatewayTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayTaskResponse) => any;
}
export interface GetWirelessGatewayTaskDefinitionRequest {
    /**
     * <p>The ID of the resource to get.</p>
     */
    Id: string | undefined;
}
export declare namespace GetWirelessGatewayTaskDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayTaskDefinitionRequest) => any;
}
export interface GetWirelessGatewayTaskDefinitionResponse {
    /**
     * <p>Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.</p>
     */
    AutoCreateTasks?: boolean;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>Information about the gateways to update.</p>
     */
    Update?: UpdateWirelessGatewayTaskCreate;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
}
export declare namespace GetWirelessGatewayTaskDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWirelessGatewayTaskDefinitionResponse) => any;
}
export interface ListDestinationsRequest {
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDestinationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDestinationsRequest) => any;
}
export interface ListDestinationsResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of destinations.</p>
     */
    DestinationList?: Destinations[];
}
export declare namespace ListDestinationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDestinationsResponse) => any;
}
export interface ListDeviceProfilesRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
}
export declare namespace ListDeviceProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceProfilesRequest) => any;
}
export interface ListDeviceProfilesResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of device profiles.</p>
     */
    DeviceProfileList?: DeviceProfile[];
}
export declare namespace ListDeviceProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceProfilesResponse) => any;
}
export interface ListPartnerAccountsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
}
export declare namespace ListPartnerAccountsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPartnerAccountsRequest) => any;
}
export interface ListPartnerAccountsResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk?: SidewalkAccountInfoWithFingerprint[];
}
export declare namespace ListPartnerAccountsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPartnerAccountsResponse) => any;
}
export interface ListServiceProfilesRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
}
export declare namespace ListServiceProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceProfilesRequest) => any;
}
/**
 * <p>Information about a service profile.</p>
 */
export interface ServiceProfile {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The ID of the service profile.</p>
     */
    Id?: string;
}
export declare namespace ServiceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceProfile) => any;
}
export interface ListServiceProfilesResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of service profiles.</p>
     */
    ServiceProfileList?: ServiceProfile[];
}
export declare namespace ListServiceProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceProfilesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource for which you want to list tags.</p>
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
     * <p>The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListWirelessDevicesRequest {
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A filter to list only the wireless devices that use this destination.</p>
     */
    DestinationName?: string;
    /**
     * <p>A filter to list only the wireless devices that use this device profile.</p>
     */
    DeviceProfileId?: string;
    /**
     * <p>A filter to list only the wireless devices that use this service profile.</p>
     */
    ServiceProfileId?: string;
    /**
     * <p>A filter to list only the wireless devices that use this wireless device type.</p>
     */
    WirelessDeviceType?: WirelessDeviceType | string;
}
export declare namespace ListWirelessDevicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessDevicesRequest) => any;
}
/**
 * <p>LoRaWAN object for list functions.</p>
 */
export interface LoRaWANListDevice {
    /**
     * <p>The DevEUI value.</p>
     */
    DevEui?: string;
}
export declare namespace LoRaWANListDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANListDevice) => any;
}
/**
 * <p>Sidewalk object used by list functions.</p>
 */
export interface SidewalkListDevice {
    /**
     * <p>The Sidewalk Amazon ID.</p>
     */
    AmazonId?: string;
    /**
     * <p>The sidewalk device identification.</p>
     */
    SidewalkId?: string;
    /**
     * <p>The Sidewalk manufacturing series number.</p>
     */
    SidewalkManufacturingSn?: string;
    /**
     * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
     */
    DeviceCertificates?: CertificateList[];
}
export declare namespace SidewalkListDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkListDevice) => any;
}
/**
 * <p>Information about a wireless device's operation.</p>
 */
export interface WirelessDeviceStatistics {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the wireless device reporting the data.</p>
     */
    Id?: string;
    /**
     * <p>The wireless device type.</p>
     */
    Type?: WirelessDeviceType | string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The name of the destination to which the device is assigned.</p>
     */
    DestinationName?: string;
    /**
     * <p>The date and time when the most recent uplink was received.</p>
     */
    LastUplinkReceivedAt?: string;
    /**
     * <p>LoRaWAN device info.</p>
     */
    LoRaWAN?: LoRaWANListDevice;
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk?: SidewalkListDevice;
}
export declare namespace WirelessDeviceStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessDeviceStatistics) => any;
}
export interface ListWirelessDevicesResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the wireless device.</p>
     */
    WirelessDeviceList?: WirelessDeviceStatistics[];
}
export declare namespace ListWirelessDevicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessDevicesResponse) => any;
}
export interface ListWirelessGatewaysRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
}
export declare namespace ListWirelessGatewaysRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessGatewaysRequest) => any;
}
/**
 * <p>Information about a wireless gateway's operation.</p>
 */
export interface WirelessGatewayStatistics {
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the wireless gateway reporting the data.</p>
     */
    Id?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>LoRaWAN gateway info.</p>
     */
    LoRaWAN?: LoRaWANGateway;
    /**
     * <p>The date and time when the most recent uplink was received.</p>
     */
    LastUplinkReceivedAt?: string;
}
export declare namespace WirelessGatewayStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessGatewayStatistics) => any;
}
export interface ListWirelessGatewaysResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the wireless gateway.</p>
     */
    WirelessGatewayList?: WirelessGatewayStatistics[];
}
export declare namespace ListWirelessGatewaysResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessGatewaysResponse) => any;
}
export declare enum WirelessGatewayTaskDefinitionType {
    UPDATE = "UPDATE"
}
export interface ListWirelessGatewayTaskDefinitionsRequest {
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    MaxResults?: number;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A filter to list only the wireless gateway task definitions that use this task definition type.</p>
     */
    TaskDefinitionType?: WirelessGatewayTaskDefinitionType | string;
}
export declare namespace ListWirelessGatewayTaskDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessGatewayTaskDefinitionsRequest) => any;
}
/**
 * <p>LoRaWANUpdateGatewayTaskEntry object.</p>
 */
export interface LoRaWANUpdateGatewayTaskEntry {
    /**
     * <p>The version of the gateways that should receive the update.</p>
     */
    CurrentVersion?: LoRaWANGatewayVersion;
    /**
     * <p>The firmware version to update the gateway to.</p>
     */
    UpdateVersion?: LoRaWANGatewayVersion;
}
export declare namespace LoRaWANUpdateGatewayTaskEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANUpdateGatewayTaskEntry) => any;
}
/**
 * <p>UpdateWirelessGatewayTaskEntry object.</p>
 */
export interface UpdateWirelessGatewayTaskEntry {
    /**
     * <p>The ID of the new wireless gateway task entry.</p>
     */
    Id?: string;
    /**
     * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
     */
    LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;
    /**
     * <p>The Amazon Resource Name of the resource.</p>
     */
    Arn?: string;
}
export declare namespace UpdateWirelessGatewayTaskEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessGatewayTaskEntry) => any;
}
export interface ListWirelessGatewayTaskDefinitionsResponse {
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of task definitions.</p>
     */
    TaskDefinitions?: UpdateWirelessGatewayTaskEntry[];
}
export declare namespace ListWirelessGatewayTaskDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWirelessGatewayTaskDefinitionsResponse) => any;
}
export interface PutResourceLogLevelRequest {
    /**
     * <p>The identifier of the resource. For a Wireless Device, it is the wireless device id. For a wireless gateway, it is the wireless gateway id.</p>
     */
    ResourceIdentifier: string | undefined;
    /**
     * <p>The type of the resource, currently support WirelessDevice and WirelessGateway.</p>
     */
    ResourceType: string | undefined;
    /**
     * <p>The log level for a log message.</p>
     */
    LogLevel: LogLevel | string | undefined;
}
export declare namespace PutResourceLogLevelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutResourceLogLevelRequest) => any;
}
export interface PutResourceLogLevelResponse {
}
export declare namespace PutResourceLogLevelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutResourceLogLevelResponse) => any;
}
export interface ResetAllResourceLogLevelsRequest {
}
export declare namespace ResetAllResourceLogLevelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetAllResourceLogLevelsRequest) => any;
}
export interface ResetAllResourceLogLevelsResponse {
}
export declare namespace ResetAllResourceLogLevelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetAllResourceLogLevelsResponse) => any;
}
export interface ResetResourceLogLevelRequest {
    /**
     * <p>The identifier of the resource. For a Wireless Device, it is the wireless device id. For a wireless gateway, it is the wireless gateway id.</p>
     */
    ResourceIdentifier: string | undefined;
    /**
     * <p>The type of the resource, currently support WirelessDevice and WirelessGateway.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ResetResourceLogLevelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetResourceLogLevelRequest) => any;
}
export interface ResetResourceLogLevelResponse {
}
export declare namespace ResetResourceLogLevelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetResourceLogLevelResponse) => any;
}
/**
 * <p>LoRaWAN router info.</p>
 */
export interface LoRaWANSendDataToDevice {
    /**
     * <p>The Fport value.</p>
     */
    FPort?: number;
}
export declare namespace LoRaWANSendDataToDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANSendDataToDevice) => any;
}
export declare enum MessageType {
    CUSTOM_COMMAND_ID_GET = "CUSTOM_COMMAND_ID_GET",
    CUSTOM_COMMAND_ID_NOTIFY = "CUSTOM_COMMAND_ID_NOTIFY",
    CUSTOM_COMMAND_ID_RESP = "CUSTOM_COMMAND_ID_RESP",
    CUSTOM_COMMAND_ID_SET = "CUSTOM_COMMAND_ID_SET"
}
/**
 * <p>Information about a Sidewalk router.</p>
 */
export interface SidewalkSendDataToDevice {
    /**
     * <p>The sequence number.</p>
     */
    Seq?: number;
    /**
     * <p>Sidewalk device message type.</p>
     */
    MessageType?: MessageType | string;
}
export declare namespace SidewalkSendDataToDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkSendDataToDevice) => any;
}
/**
 * <p>WirelessMetadata object.</p>
 */
export interface WirelessMetadata {
    /**
     * <p>LoRaWAN device info.</p>
     */
    LoRaWAN?: LoRaWANSendDataToDevice;
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk?: SidewalkSendDataToDevice;
}
export declare namespace WirelessMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessMetadata) => any;
}
export interface SendDataToWirelessDeviceRequest {
    /**
     * <p>The ID of the wireless device to receive the data.</p>
     */
    Id: string | undefined;
    /**
     * <p>The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).</p>
     */
    TransmitMode: number | undefined;
    /**
     * <p>The message payload to send.</p>
     */
    PayloadData: string | undefined;
    /**
     * <p>Metadata about the message request.</p>
     */
    WirelessMetadata?: WirelessMetadata;
}
export declare namespace SendDataToWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendDataToWirelessDeviceRequest) => any;
}
export interface SendDataToWirelessDeviceResponse {
    /**
     * <p>The ID of the message sent to the wireless device.</p>
     */
    MessageId?: string;
}
export declare namespace SendDataToWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendDataToWirelessDeviceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The ARN of the resource to add tags to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.</p>
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
/**
 * <p>The request was denied because the resource can't have any more tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
    name: "TooManyTagsException";
    $fault: "client";
    Message?: string;
    /**
     * <p>Name of the resource that exceeds maximum number of tags allowed.</p>
     */
    ResourceName?: string;
}
export declare namespace TooManyTagsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
export interface TestWirelessDeviceRequest {
    /**
     * <p>The ID of the wireless device to test.</p>
     */
    Id: string | undefined;
}
export declare namespace TestWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestWirelessDeviceRequest) => any;
}
export interface TestWirelessDeviceResponse {
    /**
     * <p>The result returned by the test.</p>
     */
    Result?: string;
}
export declare namespace TestWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestWirelessDeviceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The ARN of the resource to remove tags from.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>A list of the keys of the tags to remove from the resource.</p>
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
export interface UpdateDestinationRequest {
    /**
     * <p>The new name of the resource.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of value in <code>Expression</code>.</p>
     */
    ExpressionType?: ExpressionType | string;
    /**
     * <p>The new rule name or topic rule to send messages to.</p>
     */
    Expression?: string;
    /**
     * <p>A new description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the IAM Role that authorizes the destination.</p>
     */
    RoleArn?: string;
}
export declare namespace UpdateDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDestinationRequest) => any;
}
export interface UpdateDestinationResponse {
}
export declare namespace UpdateDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDestinationResponse) => any;
}
export interface UpdateLogLevelsByResourceTypesRequest {
    /**
     * <p>The log level for a log message.</p>
     */
    DefaultLogLevel?: LogLevel | string;
    /**
     * <p>The list of wireless device log options.</p>
     */
    WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
    /**
     * <p>The list of wireless gateway log options.</p>
     */
    WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}
export declare namespace UpdateLogLevelsByResourceTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLogLevelsByResourceTypesRequest) => any;
}
export interface UpdateLogLevelsByResourceTypesResponse {
}
export declare namespace UpdateLogLevelsByResourceTypesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLogLevelsByResourceTypesResponse) => any;
}
/**
 * <p>Sidewalk update.</p>
 */
export interface SidewalkUpdateAccount {
    /**
     * <p>The new Sidewalk application server private key.</p>
     */
    AppServerPrivateKey?: string;
}
export declare namespace SidewalkUpdateAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SidewalkUpdateAccount) => any;
}
export interface UpdatePartnerAccountRequest {
    /**
     * <p>The Sidewalk account credentials.</p>
     */
    Sidewalk: SidewalkUpdateAccount | undefined;
    /**
     * <p>The ID of the partner account to update.</p>
     */
    PartnerAccountId: string | undefined;
    /**
     * <p>The partner type.</p>
     */
    PartnerType: PartnerType | string | undefined;
}
export declare namespace UpdatePartnerAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePartnerAccountRequest) => any;
}
export interface UpdatePartnerAccountResponse {
}
export declare namespace UpdatePartnerAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePartnerAccountResponse) => any;
}
/**
 * <p>LoRaWAN object for update functions.</p>
 */
export interface LoRaWANUpdateDevice {
    /**
     * <p>The ID of the device profile for the wireless device.</p>
     */
    DeviceProfileId?: string;
    /**
     * <p>The ID of the service profile.</p>
     */
    ServiceProfileId?: string;
}
export declare namespace LoRaWANUpdateDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoRaWANUpdateDevice) => any;
}
export interface UpdateWirelessDeviceRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The name of the new destination for the device.</p>
     */
    DestinationName?: string;
    /**
     * <p>The new name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>A new description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The updated wireless device's configuration.</p>
     */
    LoRaWAN?: LoRaWANUpdateDevice;
}
export declare namespace UpdateWirelessDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessDeviceRequest) => any;
}
export interface UpdateWirelessDeviceResponse {
}
export declare namespace UpdateWirelessDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessDeviceResponse) => any;
}
export interface UpdateWirelessGatewayRequest {
    /**
     * <p>The ID of the resource to update.</p>
     */
    Id: string | undefined;
    /**
     * <p>The new name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>A new description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
     */
    JoinEuiFilters?: string[][];
    /**
     * <p>A list of NetId values that are used by LoRa gateways to filter the uplink frames.</p>
     */
    NetIdFilters?: string[];
}
export declare namespace UpdateWirelessGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessGatewayRequest) => any;
}
export interface UpdateWirelessGatewayResponse {
}
export declare namespace UpdateWirelessGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWirelessGatewayResponse) => any;
}
