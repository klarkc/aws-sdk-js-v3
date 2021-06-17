import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var SessionKeysAbpV1_0_x;
(function (SessionKeysAbpV1_0_x) {
    /**
     * @internal
     */
    SessionKeysAbpV1_0_x.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionKeysAbpV1_0_x || (SessionKeysAbpV1_0_x = {}));
export var AbpV1_0_x;
(function (AbpV1_0_x) {
    /**
     * @internal
     */
    AbpV1_0_x.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbpV1_0_x || (AbpV1_0_x = {}));
export var SessionKeysAbpV1_1;
(function (SessionKeysAbpV1_1) {
    /**
     * @internal
     */
    SessionKeysAbpV1_1.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionKeysAbpV1_1 || (SessionKeysAbpV1_1 = {}));
export var AbpV1_1;
(function (AbpV1_1) {
    /**
     * @internal
     */
    AbpV1_1.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbpV1_1 || (AbpV1_1 = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var SidewalkAccountInfo;
(function (SidewalkAccountInfo) {
    /**
     * @internal
     */
    SidewalkAccountInfo.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }))); };
})(SidewalkAccountInfo || (SidewalkAccountInfo = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AssociateAwsAccountWithPartnerAccountRequest;
(function (AssociateAwsAccountWithPartnerAccountRequest) {
    /**
     * @internal
     */
    AssociateAwsAccountWithPartnerAccountRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }))); };
})(AssociateAwsAccountWithPartnerAccountRequest || (AssociateAwsAccountWithPartnerAccountRequest = {}));
export var AssociateAwsAccountWithPartnerAccountResponse;
(function (AssociateAwsAccountWithPartnerAccountResponse) {
    /**
     * @internal
     */
    AssociateAwsAccountWithPartnerAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }))); };
})(AssociateAwsAccountWithPartnerAccountResponse || (AssociateAwsAccountWithPartnerAccountResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
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
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AssociateWirelessDeviceWithThingRequest;
(function (AssociateWirelessDeviceWithThingRequest) {
    /**
     * @internal
     */
    AssociateWirelessDeviceWithThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessDeviceWithThingRequest || (AssociateWirelessDeviceWithThingRequest = {}));
export var AssociateWirelessDeviceWithThingResponse;
(function (AssociateWirelessDeviceWithThingResponse) {
    /**
     * @internal
     */
    AssociateWirelessDeviceWithThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessDeviceWithThingResponse || (AssociateWirelessDeviceWithThingResponse = {}));
export var AssociateWirelessGatewayWithCertificateRequest;
(function (AssociateWirelessGatewayWithCertificateRequest) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessGatewayWithCertificateRequest || (AssociateWirelessGatewayWithCertificateRequest = {}));
export var AssociateWirelessGatewayWithCertificateResponse;
(function (AssociateWirelessGatewayWithCertificateResponse) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessGatewayWithCertificateResponse || (AssociateWirelessGatewayWithCertificateResponse = {}));
export var AssociateWirelessGatewayWithThingRequest;
(function (AssociateWirelessGatewayWithThingRequest) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessGatewayWithThingRequest || (AssociateWirelessGatewayWithThingRequest = {}));
export var AssociateWirelessGatewayWithThingResponse;
(function (AssociateWirelessGatewayWithThingResponse) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWirelessGatewayWithThingResponse || (AssociateWirelessGatewayWithThingResponse = {}));
export var BatteryLevel;
(function (BatteryLevel) {
    BatteryLevel["CRITICAL"] = "critical";
    BatteryLevel["LOW"] = "low";
    BatteryLevel["NORMAL"] = "normal";
})(BatteryLevel || (BatteryLevel = {}));
export var SigningAlg;
(function (SigningAlg) {
    SigningAlg["Ed25519"] = "Ed25519";
    SigningAlg["P256r1"] = "P256r1";
})(SigningAlg || (SigningAlg = {}));
export var CertificateList;
(function (CertificateList) {
    /**
     * @internal
     */
    CertificateList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateList || (CertificateList = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "Connected";
    ConnectionStatus["DISCONNECTED"] = "Disconnected";
})(ConnectionStatus || (ConnectionStatus = {}));
export var ExpressionType;
(function (ExpressionType) {
    ExpressionType["MqttTopic"] = "MqttTopic";
    ExpressionType["RuleName"] = "RuleName";
})(ExpressionType || (ExpressionType = {}));
export var CreateDestinationRequest;
(function (CreateDestinationRequest) {
    /**
     * @internal
     */
    CreateDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDestinationRequest || (CreateDestinationRequest = {}));
export var CreateDestinationResponse;
(function (CreateDestinationResponse) {
    /**
     * @internal
     */
    CreateDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDestinationResponse || (CreateDestinationResponse = {}));
export var LoRaWANDeviceProfile;
(function (LoRaWANDeviceProfile) {
    /**
     * @internal
     */
    LoRaWANDeviceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANDeviceProfile || (LoRaWANDeviceProfile = {}));
export var CreateDeviceProfileRequest;
(function (CreateDeviceProfileRequest) {
    /**
     * @internal
     */
    CreateDeviceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeviceProfileRequest || (CreateDeviceProfileRequest = {}));
export var CreateDeviceProfileResponse;
(function (CreateDeviceProfileResponse) {
    /**
     * @internal
     */
    CreateDeviceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeviceProfileResponse || (CreateDeviceProfileResponse = {}));
export var LoRaWANServiceProfile;
(function (LoRaWANServiceProfile) {
    /**
     * @internal
     */
    LoRaWANServiceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANServiceProfile || (LoRaWANServiceProfile = {}));
export var CreateServiceProfileRequest;
(function (CreateServiceProfileRequest) {
    /**
     * @internal
     */
    CreateServiceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceProfileRequest || (CreateServiceProfileRequest = {}));
export var CreateServiceProfileResponse;
(function (CreateServiceProfileResponse) {
    /**
     * @internal
     */
    CreateServiceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceProfileResponse || (CreateServiceProfileResponse = {}));
export var OtaaV1_0_x;
(function (OtaaV1_0_x) {
    /**
     * @internal
     */
    OtaaV1_0_x.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OtaaV1_0_x || (OtaaV1_0_x = {}));
export var OtaaV1_1;
(function (OtaaV1_1) {
    /**
     * @internal
     */
    OtaaV1_1.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OtaaV1_1 || (OtaaV1_1 = {}));
export var LoRaWANDevice;
(function (LoRaWANDevice) {
    /**
     * @internal
     */
    LoRaWANDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANDevice || (LoRaWANDevice = {}));
export var WirelessDeviceType;
(function (WirelessDeviceType) {
    WirelessDeviceType["LoRaWAN"] = "LoRaWAN";
    WirelessDeviceType["Sidewalk"] = "Sidewalk";
})(WirelessDeviceType || (WirelessDeviceType = {}));
export var CreateWirelessDeviceRequest;
(function (CreateWirelessDeviceRequest) {
    /**
     * @internal
     */
    CreateWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessDeviceRequest || (CreateWirelessDeviceRequest = {}));
export var CreateWirelessDeviceResponse;
(function (CreateWirelessDeviceResponse) {
    /**
     * @internal
     */
    CreateWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessDeviceResponse || (CreateWirelessDeviceResponse = {}));
export var LoRaWANGateway;
(function (LoRaWANGateway) {
    /**
     * @internal
     */
    LoRaWANGateway.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANGateway || (LoRaWANGateway = {}));
export var CreateWirelessGatewayRequest;
(function (CreateWirelessGatewayRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayRequest || (CreateWirelessGatewayRequest = {}));
export var CreateWirelessGatewayResponse;
(function (CreateWirelessGatewayResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayResponse || (CreateWirelessGatewayResponse = {}));
export var CreateWirelessGatewayTaskRequest;
(function (CreateWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayTaskRequest || (CreateWirelessGatewayTaskRequest = {}));
export var WirelessGatewayTaskStatus;
(function (WirelessGatewayTaskStatus) {
    WirelessGatewayTaskStatus["COMPLETED"] = "COMPLETED";
    WirelessGatewayTaskStatus["FAILED"] = "FAILED";
    WirelessGatewayTaskStatus["FIRST_RETRY"] = "FIRST_RETRY";
    WirelessGatewayTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    WirelessGatewayTaskStatus["PENDING"] = "PENDING";
    WirelessGatewayTaskStatus["SECOND_RETRY"] = "SECOND_RETRY";
})(WirelessGatewayTaskStatus || (WirelessGatewayTaskStatus = {}));
export var CreateWirelessGatewayTaskResponse;
(function (CreateWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayTaskResponse || (CreateWirelessGatewayTaskResponse = {}));
export var LoRaWANGatewayVersion;
(function (LoRaWANGatewayVersion) {
    /**
     * @internal
     */
    LoRaWANGatewayVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANGatewayVersion || (LoRaWANGatewayVersion = {}));
export var LoRaWANUpdateGatewayTaskCreate;
(function (LoRaWANUpdateGatewayTaskCreate) {
    /**
     * @internal
     */
    LoRaWANUpdateGatewayTaskCreate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANUpdateGatewayTaskCreate || (LoRaWANUpdateGatewayTaskCreate = {}));
export var UpdateWirelessGatewayTaskCreate;
(function (UpdateWirelessGatewayTaskCreate) {
    /**
     * @internal
     */
    UpdateWirelessGatewayTaskCreate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessGatewayTaskCreate || (UpdateWirelessGatewayTaskCreate = {}));
export var CreateWirelessGatewayTaskDefinitionRequest;
(function (CreateWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayTaskDefinitionRequest || (CreateWirelessGatewayTaskDefinitionRequest = {}));
export var CreateWirelessGatewayTaskDefinitionResponse;
(function (CreateWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWirelessGatewayTaskDefinitionResponse || (CreateWirelessGatewayTaskDefinitionResponse = {}));
export var DeleteDestinationRequest;
(function (DeleteDestinationRequest) {
    /**
     * @internal
     */
    DeleteDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDestinationRequest || (DeleteDestinationRequest = {}));
export var DeleteDestinationResponse;
(function (DeleteDestinationResponse) {
    /**
     * @internal
     */
    DeleteDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDestinationResponse || (DeleteDestinationResponse = {}));
export var DeleteDeviceProfileRequest;
(function (DeleteDeviceProfileRequest) {
    /**
     * @internal
     */
    DeleteDeviceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeviceProfileRequest || (DeleteDeviceProfileRequest = {}));
export var DeleteDeviceProfileResponse;
(function (DeleteDeviceProfileResponse) {
    /**
     * @internal
     */
    DeleteDeviceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeviceProfileResponse || (DeleteDeviceProfileResponse = {}));
export var DeleteServiceProfileRequest;
(function (DeleteServiceProfileRequest) {
    /**
     * @internal
     */
    DeleteServiceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceProfileRequest || (DeleteServiceProfileRequest = {}));
export var DeleteServiceProfileResponse;
(function (DeleteServiceProfileResponse) {
    /**
     * @internal
     */
    DeleteServiceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceProfileResponse || (DeleteServiceProfileResponse = {}));
export var DeleteWirelessDeviceRequest;
(function (DeleteWirelessDeviceRequest) {
    /**
     * @internal
     */
    DeleteWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessDeviceRequest || (DeleteWirelessDeviceRequest = {}));
export var DeleteWirelessDeviceResponse;
(function (DeleteWirelessDeviceResponse) {
    /**
     * @internal
     */
    DeleteWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessDeviceResponse || (DeleteWirelessDeviceResponse = {}));
export var DeleteWirelessGatewayRequest;
(function (DeleteWirelessGatewayRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayRequest || (DeleteWirelessGatewayRequest = {}));
export var DeleteWirelessGatewayResponse;
(function (DeleteWirelessGatewayResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayResponse || (DeleteWirelessGatewayResponse = {}));
export var DeleteWirelessGatewayTaskRequest;
(function (DeleteWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayTaskRequest || (DeleteWirelessGatewayTaskRequest = {}));
export var DeleteWirelessGatewayTaskResponse;
(function (DeleteWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayTaskResponse || (DeleteWirelessGatewayTaskResponse = {}));
export var DeleteWirelessGatewayTaskDefinitionRequest;
(function (DeleteWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayTaskDefinitionRequest || (DeleteWirelessGatewayTaskDefinitionRequest = {}));
export var DeleteWirelessGatewayTaskDefinitionResponse;
(function (DeleteWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWirelessGatewayTaskDefinitionResponse || (DeleteWirelessGatewayTaskDefinitionResponse = {}));
export var Destinations;
(function (Destinations) {
    /**
     * @internal
     */
    Destinations.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Destinations || (Destinations = {}));
export var DeviceProfile;
(function (DeviceProfile) {
    /**
     * @internal
     */
    DeviceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceProfile || (DeviceProfile = {}));
export var DeviceState;
(function (DeviceState) {
    DeviceState["PROVISIONED"] = "Provisioned";
    DeviceState["REGISTEREDNOTSEEN"] = "RegisteredNotSeen";
    DeviceState["REGISTEREDREACHABLE"] = "RegisteredReachable";
    DeviceState["REGISTEREDUNREACHABLE"] = "RegisteredUnreachable";
})(DeviceState || (DeviceState = {}));
export var PartnerType;
(function (PartnerType) {
    PartnerType["Sidewalk"] = "Sidewalk";
})(PartnerType || (PartnerType = {}));
export var DisassociateAwsAccountFromPartnerAccountRequest;
(function (DisassociateAwsAccountFromPartnerAccountRequest) {
    /**
     * @internal
     */
    DisassociateAwsAccountFromPartnerAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateAwsAccountFromPartnerAccountRequest || (DisassociateAwsAccountFromPartnerAccountRequest = {}));
export var DisassociateAwsAccountFromPartnerAccountResponse;
(function (DisassociateAwsAccountFromPartnerAccountResponse) {
    /**
     * @internal
     */
    DisassociateAwsAccountFromPartnerAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateAwsAccountFromPartnerAccountResponse || (DisassociateAwsAccountFromPartnerAccountResponse = {}));
export var DisassociateWirelessDeviceFromThingRequest;
(function (DisassociateWirelessDeviceFromThingRequest) {
    /**
     * @internal
     */
    DisassociateWirelessDeviceFromThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessDeviceFromThingRequest || (DisassociateWirelessDeviceFromThingRequest = {}));
export var DisassociateWirelessDeviceFromThingResponse;
(function (DisassociateWirelessDeviceFromThingResponse) {
    /**
     * @internal
     */
    DisassociateWirelessDeviceFromThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessDeviceFromThingResponse || (DisassociateWirelessDeviceFromThingResponse = {}));
export var DisassociateWirelessGatewayFromCertificateRequest;
(function (DisassociateWirelessGatewayFromCertificateRequest) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessGatewayFromCertificateRequest || (DisassociateWirelessGatewayFromCertificateRequest = {}));
export var DisassociateWirelessGatewayFromCertificateResponse;
(function (DisassociateWirelessGatewayFromCertificateResponse) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessGatewayFromCertificateResponse || (DisassociateWirelessGatewayFromCertificateResponse = {}));
export var DisassociateWirelessGatewayFromThingRequest;
(function (DisassociateWirelessGatewayFromThingRequest) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromThingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessGatewayFromThingRequest || (DisassociateWirelessGatewayFromThingRequest = {}));
export var DisassociateWirelessGatewayFromThingResponse;
(function (DisassociateWirelessGatewayFromThingResponse) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromThingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWirelessGatewayFromThingResponse || (DisassociateWirelessGatewayFromThingResponse = {}));
export var Event;
(function (Event) {
    Event["ACK"] = "ack";
    Event["DISCOVERED"] = "discovered";
    Event["LOST"] = "lost";
    Event["NACK"] = "nack";
    Event["PASSTHROUGH"] = "passthrough";
})(Event || (Event = {}));
export var GetDestinationRequest;
(function (GetDestinationRequest) {
    /**
     * @internal
     */
    GetDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDestinationRequest || (GetDestinationRequest = {}));
export var GetDestinationResponse;
(function (GetDestinationResponse) {
    /**
     * @internal
     */
    GetDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDestinationResponse || (GetDestinationResponse = {}));
export var GetDeviceProfileRequest;
(function (GetDeviceProfileRequest) {
    /**
     * @internal
     */
    GetDeviceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceProfileRequest || (GetDeviceProfileRequest = {}));
export var GetDeviceProfileResponse;
(function (GetDeviceProfileResponse) {
    /**
     * @internal
     */
    GetDeviceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeviceProfileResponse || (GetDeviceProfileResponse = {}));
export var GetLogLevelsByResourceTypesRequest;
(function (GetLogLevelsByResourceTypesRequest) {
    /**
     * @internal
     */
    GetLogLevelsByResourceTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLogLevelsByResourceTypesRequest || (GetLogLevelsByResourceTypesRequest = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
})(LogLevel || (LogLevel = {}));
export var WirelessDeviceEvent;
(function (WirelessDeviceEvent) {
    WirelessDeviceEvent["Downlink_Data"] = "Downlink_Data";
    WirelessDeviceEvent["Join"] = "Join";
    WirelessDeviceEvent["Registration"] = "Registration";
    WirelessDeviceEvent["Rejoin"] = "Rejoin";
    WirelessDeviceEvent["Uplink_Data"] = "Uplink_Data";
})(WirelessDeviceEvent || (WirelessDeviceEvent = {}));
export var WirelessDeviceEventLogOption;
(function (WirelessDeviceEventLogOption) {
    /**
     * @internal
     */
    WirelessDeviceEventLogOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessDeviceEventLogOption || (WirelessDeviceEventLogOption = {}));
export var WirelessDeviceLogOption;
(function (WirelessDeviceLogOption) {
    /**
     * @internal
     */
    WirelessDeviceLogOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessDeviceLogOption || (WirelessDeviceLogOption = {}));
export var WirelessGatewayEvent;
(function (WirelessGatewayEvent) {
    WirelessGatewayEvent["CUPS_Request"] = "CUPS_Request";
    WirelessGatewayEvent["Certificate"] = "Certificate";
})(WirelessGatewayEvent || (WirelessGatewayEvent = {}));
export var WirelessGatewayEventLogOption;
(function (WirelessGatewayEventLogOption) {
    /**
     * @internal
     */
    WirelessGatewayEventLogOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessGatewayEventLogOption || (WirelessGatewayEventLogOption = {}));
export var WirelessGatewayType;
(function (WirelessGatewayType) {
    WirelessGatewayType["LoRaWAN"] = "LoRaWAN";
})(WirelessGatewayType || (WirelessGatewayType = {}));
export var WirelessGatewayLogOption;
(function (WirelessGatewayLogOption) {
    /**
     * @internal
     */
    WirelessGatewayLogOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessGatewayLogOption || (WirelessGatewayLogOption = {}));
export var GetLogLevelsByResourceTypesResponse;
(function (GetLogLevelsByResourceTypesResponse) {
    /**
     * @internal
     */
    GetLogLevelsByResourceTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLogLevelsByResourceTypesResponse || (GetLogLevelsByResourceTypesResponse = {}));
export var GetPartnerAccountRequest;
(function (GetPartnerAccountRequest) {
    /**
     * @internal
     */
    GetPartnerAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPartnerAccountRequest || (GetPartnerAccountRequest = {}));
export var SidewalkAccountInfoWithFingerprint;
(function (SidewalkAccountInfoWithFingerprint) {
    /**
     * @internal
     */
    SidewalkAccountInfoWithFingerprint.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Fingerprint && { Fingerprint: SENSITIVE_STRING }))); };
})(SidewalkAccountInfoWithFingerprint || (SidewalkAccountInfoWithFingerprint = {}));
export var GetPartnerAccountResponse;
(function (GetPartnerAccountResponse) {
    /**
     * @internal
     */
    GetPartnerAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sidewalk && { Sidewalk: SidewalkAccountInfoWithFingerprint.filterSensitiveLog(obj.Sidewalk) }))); };
})(GetPartnerAccountResponse || (GetPartnerAccountResponse = {}));
export var GetResourceLogLevelRequest;
(function (GetResourceLogLevelRequest) {
    /**
     * @internal
     */
    GetResourceLogLevelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourceLogLevelRequest || (GetResourceLogLevelRequest = {}));
export var GetResourceLogLevelResponse;
(function (GetResourceLogLevelResponse) {
    /**
     * @internal
     */
    GetResourceLogLevelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourceLogLevelResponse || (GetResourceLogLevelResponse = {}));
export var WirelessGatewayServiceType;
(function (WirelessGatewayServiceType) {
    WirelessGatewayServiceType["CUPS"] = "CUPS";
    WirelessGatewayServiceType["LNS"] = "LNS";
})(WirelessGatewayServiceType || (WirelessGatewayServiceType = {}));
export var GetServiceEndpointRequest;
(function (GetServiceEndpointRequest) {
    /**
     * @internal
     */
    GetServiceEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceEndpointRequest || (GetServiceEndpointRequest = {}));
export var GetServiceEndpointResponse;
(function (GetServiceEndpointResponse) {
    /**
     * @internal
     */
    GetServiceEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceEndpointResponse || (GetServiceEndpointResponse = {}));
export var GetServiceProfileRequest;
(function (GetServiceProfileRequest) {
    /**
     * @internal
     */
    GetServiceProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceProfileRequest || (GetServiceProfileRequest = {}));
export var LoRaWANGetServiceProfileInfo;
(function (LoRaWANGetServiceProfileInfo) {
    /**
     * @internal
     */
    LoRaWANGetServiceProfileInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANGetServiceProfileInfo || (LoRaWANGetServiceProfileInfo = {}));
export var GetServiceProfileResponse;
(function (GetServiceProfileResponse) {
    /**
     * @internal
     */
    GetServiceProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceProfileResponse || (GetServiceProfileResponse = {}));
export var WirelessDeviceIdType;
(function (WirelessDeviceIdType) {
    WirelessDeviceIdType["DevEui"] = "DevEui";
    WirelessDeviceIdType["ThingName"] = "ThingName";
    WirelessDeviceIdType["WirelessDeviceId"] = "WirelessDeviceId";
})(WirelessDeviceIdType || (WirelessDeviceIdType = {}));
export var GetWirelessDeviceRequest;
(function (GetWirelessDeviceRequest) {
    /**
     * @internal
     */
    GetWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessDeviceRequest || (GetWirelessDeviceRequest = {}));
export var SidewalkDevice;
(function (SidewalkDevice) {
    /**
     * @internal
     */
    SidewalkDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SidewalkDevice || (SidewalkDevice = {}));
export var GetWirelessDeviceResponse;
(function (GetWirelessDeviceResponse) {
    /**
     * @internal
     */
    GetWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessDeviceResponse || (GetWirelessDeviceResponse = {}));
export var GetWirelessDeviceStatisticsRequest;
(function (GetWirelessDeviceStatisticsRequest) {
    /**
     * @internal
     */
    GetWirelessDeviceStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessDeviceStatisticsRequest || (GetWirelessDeviceStatisticsRequest = {}));
export var LoRaWANGatewayMetadata;
(function (LoRaWANGatewayMetadata) {
    /**
     * @internal
     */
    LoRaWANGatewayMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANGatewayMetadata || (LoRaWANGatewayMetadata = {}));
export var LoRaWANDeviceMetadata;
(function (LoRaWANDeviceMetadata) {
    /**
     * @internal
     */
    LoRaWANDeviceMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANDeviceMetadata || (LoRaWANDeviceMetadata = {}));
export var SidewalkDeviceMetadata;
(function (SidewalkDeviceMetadata) {
    /**
     * @internal
     */
    SidewalkDeviceMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SidewalkDeviceMetadata || (SidewalkDeviceMetadata = {}));
export var GetWirelessDeviceStatisticsResponse;
(function (GetWirelessDeviceStatisticsResponse) {
    /**
     * @internal
     */
    GetWirelessDeviceStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessDeviceStatisticsResponse || (GetWirelessDeviceStatisticsResponse = {}));
export var WirelessGatewayIdType;
(function (WirelessGatewayIdType) {
    WirelessGatewayIdType["GatewayEui"] = "GatewayEui";
    WirelessGatewayIdType["ThingName"] = "ThingName";
    WirelessGatewayIdType["WirelessGatewayId"] = "WirelessGatewayId";
})(WirelessGatewayIdType || (WirelessGatewayIdType = {}));
export var GetWirelessGatewayRequest;
(function (GetWirelessGatewayRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayRequest || (GetWirelessGatewayRequest = {}));
export var GetWirelessGatewayResponse;
(function (GetWirelessGatewayResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayResponse || (GetWirelessGatewayResponse = {}));
export var GetWirelessGatewayCertificateRequest;
(function (GetWirelessGatewayCertificateRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayCertificateRequest || (GetWirelessGatewayCertificateRequest = {}));
export var GetWirelessGatewayCertificateResponse;
(function (GetWirelessGatewayCertificateResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayCertificateResponse || (GetWirelessGatewayCertificateResponse = {}));
export var GetWirelessGatewayFirmwareInformationRequest;
(function (GetWirelessGatewayFirmwareInformationRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayFirmwareInformationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayFirmwareInformationRequest || (GetWirelessGatewayFirmwareInformationRequest = {}));
export var LoRaWANGatewayCurrentVersion;
(function (LoRaWANGatewayCurrentVersion) {
    /**
     * @internal
     */
    LoRaWANGatewayCurrentVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANGatewayCurrentVersion || (LoRaWANGatewayCurrentVersion = {}));
export var GetWirelessGatewayFirmwareInformationResponse;
(function (GetWirelessGatewayFirmwareInformationResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayFirmwareInformationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayFirmwareInformationResponse || (GetWirelessGatewayFirmwareInformationResponse = {}));
export var GetWirelessGatewayStatisticsRequest;
(function (GetWirelessGatewayStatisticsRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayStatisticsRequest || (GetWirelessGatewayStatisticsRequest = {}));
export var GetWirelessGatewayStatisticsResponse;
(function (GetWirelessGatewayStatisticsResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayStatisticsResponse || (GetWirelessGatewayStatisticsResponse = {}));
export var GetWirelessGatewayTaskRequest;
(function (GetWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayTaskRequest || (GetWirelessGatewayTaskRequest = {}));
export var GetWirelessGatewayTaskResponse;
(function (GetWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayTaskResponse || (GetWirelessGatewayTaskResponse = {}));
export var GetWirelessGatewayTaskDefinitionRequest;
(function (GetWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayTaskDefinitionRequest || (GetWirelessGatewayTaskDefinitionRequest = {}));
export var GetWirelessGatewayTaskDefinitionResponse;
(function (GetWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWirelessGatewayTaskDefinitionResponse || (GetWirelessGatewayTaskDefinitionResponse = {}));
export var ListDestinationsRequest;
(function (ListDestinationsRequest) {
    /**
     * @internal
     */
    ListDestinationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDestinationsRequest || (ListDestinationsRequest = {}));
export var ListDestinationsResponse;
(function (ListDestinationsResponse) {
    /**
     * @internal
     */
    ListDestinationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDestinationsResponse || (ListDestinationsResponse = {}));
export var ListDeviceProfilesRequest;
(function (ListDeviceProfilesRequest) {
    /**
     * @internal
     */
    ListDeviceProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeviceProfilesRequest || (ListDeviceProfilesRequest = {}));
export var ListDeviceProfilesResponse;
(function (ListDeviceProfilesResponse) {
    /**
     * @internal
     */
    ListDeviceProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeviceProfilesResponse || (ListDeviceProfilesResponse = {}));
export var ListPartnerAccountsRequest;
(function (ListPartnerAccountsRequest) {
    /**
     * @internal
     */
    ListPartnerAccountsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartnerAccountsRequest || (ListPartnerAccountsRequest = {}));
export var ListPartnerAccountsResponse;
(function (ListPartnerAccountsResponse) {
    /**
     * @internal
     */
    ListPartnerAccountsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sidewalk && {
        Sidewalk: obj.Sidewalk.map(function (item) { return SidewalkAccountInfoWithFingerprint.filterSensitiveLog(item); }),
    }))); };
})(ListPartnerAccountsResponse || (ListPartnerAccountsResponse = {}));
export var ListServiceProfilesRequest;
(function (ListServiceProfilesRequest) {
    /**
     * @internal
     */
    ListServiceProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServiceProfilesRequest || (ListServiceProfilesRequest = {}));
export var ServiceProfile;
(function (ServiceProfile) {
    /**
     * @internal
     */
    ServiceProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceProfile || (ServiceProfile = {}));
export var ListServiceProfilesResponse;
(function (ListServiceProfilesResponse) {
    /**
     * @internal
     */
    ListServiceProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServiceProfilesResponse || (ListServiceProfilesResponse = {}));
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
export var ListWirelessDevicesRequest;
(function (ListWirelessDevicesRequest) {
    /**
     * @internal
     */
    ListWirelessDevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessDevicesRequest || (ListWirelessDevicesRequest = {}));
export var LoRaWANListDevice;
(function (LoRaWANListDevice) {
    /**
     * @internal
     */
    LoRaWANListDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANListDevice || (LoRaWANListDevice = {}));
export var SidewalkListDevice;
(function (SidewalkListDevice) {
    /**
     * @internal
     */
    SidewalkListDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SidewalkListDevice || (SidewalkListDevice = {}));
export var WirelessDeviceStatistics;
(function (WirelessDeviceStatistics) {
    /**
     * @internal
     */
    WirelessDeviceStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessDeviceStatistics || (WirelessDeviceStatistics = {}));
export var ListWirelessDevicesResponse;
(function (ListWirelessDevicesResponse) {
    /**
     * @internal
     */
    ListWirelessDevicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessDevicesResponse || (ListWirelessDevicesResponse = {}));
export var ListWirelessGatewaysRequest;
(function (ListWirelessGatewaysRequest) {
    /**
     * @internal
     */
    ListWirelessGatewaysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessGatewaysRequest || (ListWirelessGatewaysRequest = {}));
export var WirelessGatewayStatistics;
(function (WirelessGatewayStatistics) {
    /**
     * @internal
     */
    WirelessGatewayStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessGatewayStatistics || (WirelessGatewayStatistics = {}));
export var ListWirelessGatewaysResponse;
(function (ListWirelessGatewaysResponse) {
    /**
     * @internal
     */
    ListWirelessGatewaysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessGatewaysResponse || (ListWirelessGatewaysResponse = {}));
export var WirelessGatewayTaskDefinitionType;
(function (WirelessGatewayTaskDefinitionType) {
    WirelessGatewayTaskDefinitionType["UPDATE"] = "UPDATE";
})(WirelessGatewayTaskDefinitionType || (WirelessGatewayTaskDefinitionType = {}));
export var ListWirelessGatewayTaskDefinitionsRequest;
(function (ListWirelessGatewayTaskDefinitionsRequest) {
    /**
     * @internal
     */
    ListWirelessGatewayTaskDefinitionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessGatewayTaskDefinitionsRequest || (ListWirelessGatewayTaskDefinitionsRequest = {}));
export var LoRaWANUpdateGatewayTaskEntry;
(function (LoRaWANUpdateGatewayTaskEntry) {
    /**
     * @internal
     */
    LoRaWANUpdateGatewayTaskEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANUpdateGatewayTaskEntry || (LoRaWANUpdateGatewayTaskEntry = {}));
export var UpdateWirelessGatewayTaskEntry;
(function (UpdateWirelessGatewayTaskEntry) {
    /**
     * @internal
     */
    UpdateWirelessGatewayTaskEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessGatewayTaskEntry || (UpdateWirelessGatewayTaskEntry = {}));
export var ListWirelessGatewayTaskDefinitionsResponse;
(function (ListWirelessGatewayTaskDefinitionsResponse) {
    /**
     * @internal
     */
    ListWirelessGatewayTaskDefinitionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWirelessGatewayTaskDefinitionsResponse || (ListWirelessGatewayTaskDefinitionsResponse = {}));
export var PutResourceLogLevelRequest;
(function (PutResourceLogLevelRequest) {
    /**
     * @internal
     */
    PutResourceLogLevelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourceLogLevelRequest || (PutResourceLogLevelRequest = {}));
export var PutResourceLogLevelResponse;
(function (PutResourceLogLevelResponse) {
    /**
     * @internal
     */
    PutResourceLogLevelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourceLogLevelResponse || (PutResourceLogLevelResponse = {}));
export var ResetAllResourceLogLevelsRequest;
(function (ResetAllResourceLogLevelsRequest) {
    /**
     * @internal
     */
    ResetAllResourceLogLevelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetAllResourceLogLevelsRequest || (ResetAllResourceLogLevelsRequest = {}));
export var ResetAllResourceLogLevelsResponse;
(function (ResetAllResourceLogLevelsResponse) {
    /**
     * @internal
     */
    ResetAllResourceLogLevelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetAllResourceLogLevelsResponse || (ResetAllResourceLogLevelsResponse = {}));
export var ResetResourceLogLevelRequest;
(function (ResetResourceLogLevelRequest) {
    /**
     * @internal
     */
    ResetResourceLogLevelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetResourceLogLevelRequest || (ResetResourceLogLevelRequest = {}));
export var ResetResourceLogLevelResponse;
(function (ResetResourceLogLevelResponse) {
    /**
     * @internal
     */
    ResetResourceLogLevelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetResourceLogLevelResponse || (ResetResourceLogLevelResponse = {}));
export var LoRaWANSendDataToDevice;
(function (LoRaWANSendDataToDevice) {
    /**
     * @internal
     */
    LoRaWANSendDataToDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANSendDataToDevice || (LoRaWANSendDataToDevice = {}));
export var MessageType;
(function (MessageType) {
    MessageType["CUSTOM_COMMAND_ID_GET"] = "CUSTOM_COMMAND_ID_GET";
    MessageType["CUSTOM_COMMAND_ID_NOTIFY"] = "CUSTOM_COMMAND_ID_NOTIFY";
    MessageType["CUSTOM_COMMAND_ID_RESP"] = "CUSTOM_COMMAND_ID_RESP";
    MessageType["CUSTOM_COMMAND_ID_SET"] = "CUSTOM_COMMAND_ID_SET";
})(MessageType || (MessageType = {}));
export var SidewalkSendDataToDevice;
(function (SidewalkSendDataToDevice) {
    /**
     * @internal
     */
    SidewalkSendDataToDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SidewalkSendDataToDevice || (SidewalkSendDataToDevice = {}));
export var WirelessMetadata;
(function (WirelessMetadata) {
    /**
     * @internal
     */
    WirelessMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WirelessMetadata || (WirelessMetadata = {}));
export var SendDataToWirelessDeviceRequest;
(function (SendDataToWirelessDeviceRequest) {
    /**
     * @internal
     */
    SendDataToWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendDataToWirelessDeviceRequest || (SendDataToWirelessDeviceRequest = {}));
export var SendDataToWirelessDeviceResponse;
(function (SendDataToWirelessDeviceResponse) {
    /**
     * @internal
     */
    SendDataToWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendDataToWirelessDeviceResponse || (SendDataToWirelessDeviceResponse = {}));
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
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var TestWirelessDeviceRequest;
(function (TestWirelessDeviceRequest) {
    /**
     * @internal
     */
    TestWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestWirelessDeviceRequest || (TestWirelessDeviceRequest = {}));
export var TestWirelessDeviceResponse;
(function (TestWirelessDeviceResponse) {
    /**
     * @internal
     */
    TestWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestWirelessDeviceResponse || (TestWirelessDeviceResponse = {}));
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
export var UpdateDestinationRequest;
(function (UpdateDestinationRequest) {
    /**
     * @internal
     */
    UpdateDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDestinationRequest || (UpdateDestinationRequest = {}));
export var UpdateDestinationResponse;
(function (UpdateDestinationResponse) {
    /**
     * @internal
     */
    UpdateDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDestinationResponse || (UpdateDestinationResponse = {}));
export var UpdateLogLevelsByResourceTypesRequest;
(function (UpdateLogLevelsByResourceTypesRequest) {
    /**
     * @internal
     */
    UpdateLogLevelsByResourceTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLogLevelsByResourceTypesRequest || (UpdateLogLevelsByResourceTypesRequest = {}));
export var UpdateLogLevelsByResourceTypesResponse;
(function (UpdateLogLevelsByResourceTypesResponse) {
    /**
     * @internal
     */
    UpdateLogLevelsByResourceTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLogLevelsByResourceTypesResponse || (UpdateLogLevelsByResourceTypesResponse = {}));
export var SidewalkUpdateAccount;
(function (SidewalkUpdateAccount) {
    /**
     * @internal
     */
    SidewalkUpdateAccount.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }))); };
})(SidewalkUpdateAccount || (SidewalkUpdateAccount = {}));
export var UpdatePartnerAccountRequest;
(function (UpdatePartnerAccountRequest) {
    /**
     * @internal
     */
    UpdatePartnerAccountRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sidewalk && { Sidewalk: SidewalkUpdateAccount.filterSensitiveLog(obj.Sidewalk) }))); };
})(UpdatePartnerAccountRequest || (UpdatePartnerAccountRequest = {}));
export var UpdatePartnerAccountResponse;
(function (UpdatePartnerAccountResponse) {
    /**
     * @internal
     */
    UpdatePartnerAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePartnerAccountResponse || (UpdatePartnerAccountResponse = {}));
export var LoRaWANUpdateDevice;
(function (LoRaWANUpdateDevice) {
    /**
     * @internal
     */
    LoRaWANUpdateDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoRaWANUpdateDevice || (LoRaWANUpdateDevice = {}));
export var UpdateWirelessDeviceRequest;
(function (UpdateWirelessDeviceRequest) {
    /**
     * @internal
     */
    UpdateWirelessDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessDeviceRequest || (UpdateWirelessDeviceRequest = {}));
export var UpdateWirelessDeviceResponse;
(function (UpdateWirelessDeviceResponse) {
    /**
     * @internal
     */
    UpdateWirelessDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessDeviceResponse || (UpdateWirelessDeviceResponse = {}));
export var UpdateWirelessGatewayRequest;
(function (UpdateWirelessGatewayRequest) {
    /**
     * @internal
     */
    UpdateWirelessGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessGatewayRequest || (UpdateWirelessGatewayRequest = {}));
export var UpdateWirelessGatewayResponse;
(function (UpdateWirelessGatewayResponse) {
    /**
     * @internal
     */
    UpdateWirelessGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWirelessGatewayResponse || (UpdateWirelessGatewayResponse = {}));
//# sourceMappingURL=models_0.js.map