"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWirelessGatewayTaskDefinitionResponse = exports.CreateWirelessGatewayTaskDefinitionRequest = exports.UpdateWirelessGatewayTaskCreate = exports.LoRaWANUpdateGatewayTaskCreate = exports.LoRaWANGatewayVersion = exports.CreateWirelessGatewayTaskResponse = exports.WirelessGatewayTaskStatus = exports.CreateWirelessGatewayTaskRequest = exports.CreateWirelessGatewayResponse = exports.CreateWirelessGatewayRequest = exports.LoRaWANGateway = exports.CreateWirelessDeviceResponse = exports.CreateWirelessDeviceRequest = exports.WirelessDeviceType = exports.LoRaWANDevice = exports.OtaaV1_1 = exports.OtaaV1_0_x = exports.CreateServiceProfileResponse = exports.CreateServiceProfileRequest = exports.LoRaWANServiceProfile = exports.CreateDeviceProfileResponse = exports.CreateDeviceProfileRequest = exports.LoRaWANDeviceProfile = exports.CreateDestinationResponse = exports.CreateDestinationRequest = exports.ExpressionType = exports.ConnectionStatus = exports.CertificateList = exports.SigningAlg = exports.BatteryLevel = exports.AssociateWirelessGatewayWithThingResponse = exports.AssociateWirelessGatewayWithThingRequest = exports.AssociateWirelessGatewayWithCertificateResponse = exports.AssociateWirelessGatewayWithCertificateRequest = exports.AssociateWirelessDeviceWithThingResponse = exports.AssociateWirelessDeviceWithThingRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AssociateAwsAccountWithPartnerAccountResponse = exports.AssociateAwsAccountWithPartnerAccountRequest = exports.Tag = exports.SidewalkAccountInfo = exports.AccessDeniedException = exports.AbpV1_1 = exports.SessionKeysAbpV1_1 = exports.AbpV1_0_x = exports.SessionKeysAbpV1_0_x = void 0;
exports.GetServiceProfileRequest = exports.GetServiceEndpointResponse = exports.GetServiceEndpointRequest = exports.WirelessGatewayServiceType = exports.GetResourceLogLevelResponse = exports.GetResourceLogLevelRequest = exports.GetPartnerAccountResponse = exports.SidewalkAccountInfoWithFingerprint = exports.GetPartnerAccountRequest = exports.GetLogLevelsByResourceTypesResponse = exports.WirelessGatewayLogOption = exports.WirelessGatewayType = exports.WirelessGatewayEventLogOption = exports.WirelessGatewayEvent = exports.WirelessDeviceLogOption = exports.WirelessDeviceEventLogOption = exports.WirelessDeviceEvent = exports.LogLevel = exports.GetLogLevelsByResourceTypesRequest = exports.GetDeviceProfileResponse = exports.GetDeviceProfileRequest = exports.GetDestinationResponse = exports.GetDestinationRequest = exports.Event = exports.DisassociateWirelessGatewayFromThingResponse = exports.DisassociateWirelessGatewayFromThingRequest = exports.DisassociateWirelessGatewayFromCertificateResponse = exports.DisassociateWirelessGatewayFromCertificateRequest = exports.DisassociateWirelessDeviceFromThingResponse = exports.DisassociateWirelessDeviceFromThingRequest = exports.DisassociateAwsAccountFromPartnerAccountResponse = exports.DisassociateAwsAccountFromPartnerAccountRequest = exports.PartnerType = exports.DeviceState = exports.DeviceProfile = exports.Destinations = exports.DeleteWirelessGatewayTaskDefinitionResponse = exports.DeleteWirelessGatewayTaskDefinitionRequest = exports.DeleteWirelessGatewayTaskResponse = exports.DeleteWirelessGatewayTaskRequest = exports.DeleteWirelessGatewayResponse = exports.DeleteWirelessGatewayRequest = exports.DeleteWirelessDeviceResponse = exports.DeleteWirelessDeviceRequest = exports.DeleteServiceProfileResponse = exports.DeleteServiceProfileRequest = exports.DeleteDeviceProfileResponse = exports.DeleteDeviceProfileRequest = exports.DeleteDestinationResponse = exports.DeleteDestinationRequest = void 0;
exports.PutResourceLogLevelRequest = exports.ListWirelessGatewayTaskDefinitionsResponse = exports.UpdateWirelessGatewayTaskEntry = exports.LoRaWANUpdateGatewayTaskEntry = exports.ListWirelessGatewayTaskDefinitionsRequest = exports.WirelessGatewayTaskDefinitionType = exports.ListWirelessGatewaysResponse = exports.WirelessGatewayStatistics = exports.ListWirelessGatewaysRequest = exports.ListWirelessDevicesResponse = exports.WirelessDeviceStatistics = exports.SidewalkListDevice = exports.LoRaWANListDevice = exports.ListWirelessDevicesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListServiceProfilesResponse = exports.ServiceProfile = exports.ListServiceProfilesRequest = exports.ListPartnerAccountsResponse = exports.ListPartnerAccountsRequest = exports.ListDeviceProfilesResponse = exports.ListDeviceProfilesRequest = exports.ListDestinationsResponse = exports.ListDestinationsRequest = exports.GetWirelessGatewayTaskDefinitionResponse = exports.GetWirelessGatewayTaskDefinitionRequest = exports.GetWirelessGatewayTaskResponse = exports.GetWirelessGatewayTaskRequest = exports.GetWirelessGatewayStatisticsResponse = exports.GetWirelessGatewayStatisticsRequest = exports.GetWirelessGatewayFirmwareInformationResponse = exports.LoRaWANGatewayCurrentVersion = exports.GetWirelessGatewayFirmwareInformationRequest = exports.GetWirelessGatewayCertificateResponse = exports.GetWirelessGatewayCertificateRequest = exports.GetWirelessGatewayResponse = exports.GetWirelessGatewayRequest = exports.WirelessGatewayIdType = exports.GetWirelessDeviceStatisticsResponse = exports.SidewalkDeviceMetadata = exports.LoRaWANDeviceMetadata = exports.LoRaWANGatewayMetadata = exports.GetWirelessDeviceStatisticsRequest = exports.GetWirelessDeviceResponse = exports.SidewalkDevice = exports.GetWirelessDeviceRequest = exports.WirelessDeviceIdType = exports.GetServiceProfileResponse = exports.LoRaWANGetServiceProfileInfo = void 0;
exports.UpdateWirelessGatewayResponse = exports.UpdateWirelessGatewayRequest = exports.UpdateWirelessDeviceResponse = exports.UpdateWirelessDeviceRequest = exports.LoRaWANUpdateDevice = exports.UpdatePartnerAccountResponse = exports.UpdatePartnerAccountRequest = exports.SidewalkUpdateAccount = exports.UpdateLogLevelsByResourceTypesResponse = exports.UpdateLogLevelsByResourceTypesRequest = exports.UpdateDestinationResponse = exports.UpdateDestinationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TestWirelessDeviceResponse = exports.TestWirelessDeviceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.SendDataToWirelessDeviceResponse = exports.SendDataToWirelessDeviceRequest = exports.WirelessMetadata = exports.SidewalkSendDataToDevice = exports.MessageType = exports.LoRaWANSendDataToDevice = exports.ResetResourceLogLevelResponse = exports.ResetResourceLogLevelRequest = exports.ResetAllResourceLogLevelsResponse = exports.ResetAllResourceLogLevelsRequest = exports.PutResourceLogLevelResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var SessionKeysAbpV1_0_x;
(function (SessionKeysAbpV1_0_x) {
    /**
     * @internal
     */
    SessionKeysAbpV1_0_x.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionKeysAbpV1_0_x = exports.SessionKeysAbpV1_0_x || (exports.SessionKeysAbpV1_0_x = {}));
var AbpV1_0_x;
(function (AbpV1_0_x) {
    /**
     * @internal
     */
    AbpV1_0_x.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbpV1_0_x = exports.AbpV1_0_x || (exports.AbpV1_0_x = {}));
var SessionKeysAbpV1_1;
(function (SessionKeysAbpV1_1) {
    /**
     * @internal
     */
    SessionKeysAbpV1_1.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionKeysAbpV1_1 = exports.SessionKeysAbpV1_1 || (exports.SessionKeysAbpV1_1 = {}));
var AbpV1_1;
(function (AbpV1_1) {
    /**
     * @internal
     */
    AbpV1_1.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbpV1_1 = exports.AbpV1_1 || (exports.AbpV1_1 = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var SidewalkAccountInfo;
(function (SidewalkAccountInfo) {
    /**
     * @internal
     */
    SidewalkAccountInfo.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AppServerPrivateKey && { AppServerPrivateKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(SidewalkAccountInfo = exports.SidewalkAccountInfo || (exports.SidewalkAccountInfo = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AssociateAwsAccountWithPartnerAccountRequest;
(function (AssociateAwsAccountWithPartnerAccountRequest) {
    /**
     * @internal
     */
    AssociateAwsAccountWithPartnerAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }),
    });
})(AssociateAwsAccountWithPartnerAccountRequest = exports.AssociateAwsAccountWithPartnerAccountRequest || (exports.AssociateAwsAccountWithPartnerAccountRequest = {}));
var AssociateAwsAccountWithPartnerAccountResponse;
(function (AssociateAwsAccountWithPartnerAccountResponse) {
    /**
     * @internal
     */
    AssociateAwsAccountWithPartnerAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfo.filterSensitiveLog(obj.Sidewalk) }),
    });
})(AssociateAwsAccountWithPartnerAccountResponse = exports.AssociateAwsAccountWithPartnerAccountResponse || (exports.AssociateAwsAccountWithPartnerAccountResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
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
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AssociateWirelessDeviceWithThingRequest;
(function (AssociateWirelessDeviceWithThingRequest) {
    /**
     * @internal
     */
    AssociateWirelessDeviceWithThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessDeviceWithThingRequest = exports.AssociateWirelessDeviceWithThingRequest || (exports.AssociateWirelessDeviceWithThingRequest = {}));
var AssociateWirelessDeviceWithThingResponse;
(function (AssociateWirelessDeviceWithThingResponse) {
    /**
     * @internal
     */
    AssociateWirelessDeviceWithThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessDeviceWithThingResponse = exports.AssociateWirelessDeviceWithThingResponse || (exports.AssociateWirelessDeviceWithThingResponse = {}));
var AssociateWirelessGatewayWithCertificateRequest;
(function (AssociateWirelessGatewayWithCertificateRequest) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessGatewayWithCertificateRequest = exports.AssociateWirelessGatewayWithCertificateRequest || (exports.AssociateWirelessGatewayWithCertificateRequest = {}));
var AssociateWirelessGatewayWithCertificateResponse;
(function (AssociateWirelessGatewayWithCertificateResponse) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessGatewayWithCertificateResponse = exports.AssociateWirelessGatewayWithCertificateResponse || (exports.AssociateWirelessGatewayWithCertificateResponse = {}));
var AssociateWirelessGatewayWithThingRequest;
(function (AssociateWirelessGatewayWithThingRequest) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessGatewayWithThingRequest = exports.AssociateWirelessGatewayWithThingRequest || (exports.AssociateWirelessGatewayWithThingRequest = {}));
var AssociateWirelessGatewayWithThingResponse;
(function (AssociateWirelessGatewayWithThingResponse) {
    /**
     * @internal
     */
    AssociateWirelessGatewayWithThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWirelessGatewayWithThingResponse = exports.AssociateWirelessGatewayWithThingResponse || (exports.AssociateWirelessGatewayWithThingResponse = {}));
var BatteryLevel;
(function (BatteryLevel) {
    BatteryLevel["CRITICAL"] = "critical";
    BatteryLevel["LOW"] = "low";
    BatteryLevel["NORMAL"] = "normal";
})(BatteryLevel = exports.BatteryLevel || (exports.BatteryLevel = {}));
var SigningAlg;
(function (SigningAlg) {
    SigningAlg["Ed25519"] = "Ed25519";
    SigningAlg["P256r1"] = "P256r1";
})(SigningAlg = exports.SigningAlg || (exports.SigningAlg = {}));
var CertificateList;
(function (CertificateList) {
    /**
     * @internal
     */
    CertificateList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateList = exports.CertificateList || (exports.CertificateList = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "Connected";
    ConnectionStatus["DISCONNECTED"] = "Disconnected";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var ExpressionType;
(function (ExpressionType) {
    ExpressionType["MqttTopic"] = "MqttTopic";
    ExpressionType["RuleName"] = "RuleName";
})(ExpressionType = exports.ExpressionType || (exports.ExpressionType = {}));
var CreateDestinationRequest;
(function (CreateDestinationRequest) {
    /**
     * @internal
     */
    CreateDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDestinationRequest = exports.CreateDestinationRequest || (exports.CreateDestinationRequest = {}));
var CreateDestinationResponse;
(function (CreateDestinationResponse) {
    /**
     * @internal
     */
    CreateDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDestinationResponse = exports.CreateDestinationResponse || (exports.CreateDestinationResponse = {}));
var LoRaWANDeviceProfile;
(function (LoRaWANDeviceProfile) {
    /**
     * @internal
     */
    LoRaWANDeviceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANDeviceProfile = exports.LoRaWANDeviceProfile || (exports.LoRaWANDeviceProfile = {}));
var CreateDeviceProfileRequest;
(function (CreateDeviceProfileRequest) {
    /**
     * @internal
     */
    CreateDeviceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceProfileRequest = exports.CreateDeviceProfileRequest || (exports.CreateDeviceProfileRequest = {}));
var CreateDeviceProfileResponse;
(function (CreateDeviceProfileResponse) {
    /**
     * @internal
     */
    CreateDeviceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceProfileResponse = exports.CreateDeviceProfileResponse || (exports.CreateDeviceProfileResponse = {}));
var LoRaWANServiceProfile;
(function (LoRaWANServiceProfile) {
    /**
     * @internal
     */
    LoRaWANServiceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANServiceProfile = exports.LoRaWANServiceProfile || (exports.LoRaWANServiceProfile = {}));
var CreateServiceProfileRequest;
(function (CreateServiceProfileRequest) {
    /**
     * @internal
     */
    CreateServiceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceProfileRequest = exports.CreateServiceProfileRequest || (exports.CreateServiceProfileRequest = {}));
var CreateServiceProfileResponse;
(function (CreateServiceProfileResponse) {
    /**
     * @internal
     */
    CreateServiceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceProfileResponse = exports.CreateServiceProfileResponse || (exports.CreateServiceProfileResponse = {}));
var OtaaV1_0_x;
(function (OtaaV1_0_x) {
    /**
     * @internal
     */
    OtaaV1_0_x.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OtaaV1_0_x = exports.OtaaV1_0_x || (exports.OtaaV1_0_x = {}));
var OtaaV1_1;
(function (OtaaV1_1) {
    /**
     * @internal
     */
    OtaaV1_1.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OtaaV1_1 = exports.OtaaV1_1 || (exports.OtaaV1_1 = {}));
var LoRaWANDevice;
(function (LoRaWANDevice) {
    /**
     * @internal
     */
    LoRaWANDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANDevice = exports.LoRaWANDevice || (exports.LoRaWANDevice = {}));
var WirelessDeviceType;
(function (WirelessDeviceType) {
    WirelessDeviceType["LoRaWAN"] = "LoRaWAN";
    WirelessDeviceType["Sidewalk"] = "Sidewalk";
})(WirelessDeviceType = exports.WirelessDeviceType || (exports.WirelessDeviceType = {}));
var CreateWirelessDeviceRequest;
(function (CreateWirelessDeviceRequest) {
    /**
     * @internal
     */
    CreateWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessDeviceRequest = exports.CreateWirelessDeviceRequest || (exports.CreateWirelessDeviceRequest = {}));
var CreateWirelessDeviceResponse;
(function (CreateWirelessDeviceResponse) {
    /**
     * @internal
     */
    CreateWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessDeviceResponse = exports.CreateWirelessDeviceResponse || (exports.CreateWirelessDeviceResponse = {}));
var LoRaWANGateway;
(function (LoRaWANGateway) {
    /**
     * @internal
     */
    LoRaWANGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANGateway = exports.LoRaWANGateway || (exports.LoRaWANGateway = {}));
var CreateWirelessGatewayRequest;
(function (CreateWirelessGatewayRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayRequest = exports.CreateWirelessGatewayRequest || (exports.CreateWirelessGatewayRequest = {}));
var CreateWirelessGatewayResponse;
(function (CreateWirelessGatewayResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayResponse = exports.CreateWirelessGatewayResponse || (exports.CreateWirelessGatewayResponse = {}));
var CreateWirelessGatewayTaskRequest;
(function (CreateWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayTaskRequest = exports.CreateWirelessGatewayTaskRequest || (exports.CreateWirelessGatewayTaskRequest = {}));
var WirelessGatewayTaskStatus;
(function (WirelessGatewayTaskStatus) {
    WirelessGatewayTaskStatus["COMPLETED"] = "COMPLETED";
    WirelessGatewayTaskStatus["FAILED"] = "FAILED";
    WirelessGatewayTaskStatus["FIRST_RETRY"] = "FIRST_RETRY";
    WirelessGatewayTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    WirelessGatewayTaskStatus["PENDING"] = "PENDING";
    WirelessGatewayTaskStatus["SECOND_RETRY"] = "SECOND_RETRY";
})(WirelessGatewayTaskStatus = exports.WirelessGatewayTaskStatus || (exports.WirelessGatewayTaskStatus = {}));
var CreateWirelessGatewayTaskResponse;
(function (CreateWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayTaskResponse = exports.CreateWirelessGatewayTaskResponse || (exports.CreateWirelessGatewayTaskResponse = {}));
var LoRaWANGatewayVersion;
(function (LoRaWANGatewayVersion) {
    /**
     * @internal
     */
    LoRaWANGatewayVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANGatewayVersion = exports.LoRaWANGatewayVersion || (exports.LoRaWANGatewayVersion = {}));
var LoRaWANUpdateGatewayTaskCreate;
(function (LoRaWANUpdateGatewayTaskCreate) {
    /**
     * @internal
     */
    LoRaWANUpdateGatewayTaskCreate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANUpdateGatewayTaskCreate = exports.LoRaWANUpdateGatewayTaskCreate || (exports.LoRaWANUpdateGatewayTaskCreate = {}));
var UpdateWirelessGatewayTaskCreate;
(function (UpdateWirelessGatewayTaskCreate) {
    /**
     * @internal
     */
    UpdateWirelessGatewayTaskCreate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessGatewayTaskCreate = exports.UpdateWirelessGatewayTaskCreate || (exports.UpdateWirelessGatewayTaskCreate = {}));
var CreateWirelessGatewayTaskDefinitionRequest;
(function (CreateWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayTaskDefinitionRequest = exports.CreateWirelessGatewayTaskDefinitionRequest || (exports.CreateWirelessGatewayTaskDefinitionRequest = {}));
var CreateWirelessGatewayTaskDefinitionResponse;
(function (CreateWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    CreateWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWirelessGatewayTaskDefinitionResponse = exports.CreateWirelessGatewayTaskDefinitionResponse || (exports.CreateWirelessGatewayTaskDefinitionResponse = {}));
var DeleteDestinationRequest;
(function (DeleteDestinationRequest) {
    /**
     * @internal
     */
    DeleteDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDestinationRequest = exports.DeleteDestinationRequest || (exports.DeleteDestinationRequest = {}));
var DeleteDestinationResponse;
(function (DeleteDestinationResponse) {
    /**
     * @internal
     */
    DeleteDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDestinationResponse = exports.DeleteDestinationResponse || (exports.DeleteDestinationResponse = {}));
var DeleteDeviceProfileRequest;
(function (DeleteDeviceProfileRequest) {
    /**
     * @internal
     */
    DeleteDeviceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceProfileRequest = exports.DeleteDeviceProfileRequest || (exports.DeleteDeviceProfileRequest = {}));
var DeleteDeviceProfileResponse;
(function (DeleteDeviceProfileResponse) {
    /**
     * @internal
     */
    DeleteDeviceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceProfileResponse = exports.DeleteDeviceProfileResponse || (exports.DeleteDeviceProfileResponse = {}));
var DeleteServiceProfileRequest;
(function (DeleteServiceProfileRequest) {
    /**
     * @internal
     */
    DeleteServiceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceProfileRequest = exports.DeleteServiceProfileRequest || (exports.DeleteServiceProfileRequest = {}));
var DeleteServiceProfileResponse;
(function (DeleteServiceProfileResponse) {
    /**
     * @internal
     */
    DeleteServiceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceProfileResponse = exports.DeleteServiceProfileResponse || (exports.DeleteServiceProfileResponse = {}));
var DeleteWirelessDeviceRequest;
(function (DeleteWirelessDeviceRequest) {
    /**
     * @internal
     */
    DeleteWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessDeviceRequest = exports.DeleteWirelessDeviceRequest || (exports.DeleteWirelessDeviceRequest = {}));
var DeleteWirelessDeviceResponse;
(function (DeleteWirelessDeviceResponse) {
    /**
     * @internal
     */
    DeleteWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessDeviceResponse = exports.DeleteWirelessDeviceResponse || (exports.DeleteWirelessDeviceResponse = {}));
var DeleteWirelessGatewayRequest;
(function (DeleteWirelessGatewayRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayRequest = exports.DeleteWirelessGatewayRequest || (exports.DeleteWirelessGatewayRequest = {}));
var DeleteWirelessGatewayResponse;
(function (DeleteWirelessGatewayResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayResponse = exports.DeleteWirelessGatewayResponse || (exports.DeleteWirelessGatewayResponse = {}));
var DeleteWirelessGatewayTaskRequest;
(function (DeleteWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayTaskRequest = exports.DeleteWirelessGatewayTaskRequest || (exports.DeleteWirelessGatewayTaskRequest = {}));
var DeleteWirelessGatewayTaskResponse;
(function (DeleteWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayTaskResponse = exports.DeleteWirelessGatewayTaskResponse || (exports.DeleteWirelessGatewayTaskResponse = {}));
var DeleteWirelessGatewayTaskDefinitionRequest;
(function (DeleteWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayTaskDefinitionRequest = exports.DeleteWirelessGatewayTaskDefinitionRequest || (exports.DeleteWirelessGatewayTaskDefinitionRequest = {}));
var DeleteWirelessGatewayTaskDefinitionResponse;
(function (DeleteWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    DeleteWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWirelessGatewayTaskDefinitionResponse = exports.DeleteWirelessGatewayTaskDefinitionResponse || (exports.DeleteWirelessGatewayTaskDefinitionResponse = {}));
var Destinations;
(function (Destinations) {
    /**
     * @internal
     */
    Destinations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destinations = exports.Destinations || (exports.Destinations = {}));
var DeviceProfile;
(function (DeviceProfile) {
    /**
     * @internal
     */
    DeviceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceProfile = exports.DeviceProfile || (exports.DeviceProfile = {}));
var DeviceState;
(function (DeviceState) {
    DeviceState["PROVISIONED"] = "Provisioned";
    DeviceState["REGISTEREDNOTSEEN"] = "RegisteredNotSeen";
    DeviceState["REGISTEREDREACHABLE"] = "RegisteredReachable";
    DeviceState["REGISTEREDUNREACHABLE"] = "RegisteredUnreachable";
})(DeviceState = exports.DeviceState || (exports.DeviceState = {}));
var PartnerType;
(function (PartnerType) {
    PartnerType["Sidewalk"] = "Sidewalk";
})(PartnerType = exports.PartnerType || (exports.PartnerType = {}));
var DisassociateAwsAccountFromPartnerAccountRequest;
(function (DisassociateAwsAccountFromPartnerAccountRequest) {
    /**
     * @internal
     */
    DisassociateAwsAccountFromPartnerAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAwsAccountFromPartnerAccountRequest = exports.DisassociateAwsAccountFromPartnerAccountRequest || (exports.DisassociateAwsAccountFromPartnerAccountRequest = {}));
var DisassociateAwsAccountFromPartnerAccountResponse;
(function (DisassociateAwsAccountFromPartnerAccountResponse) {
    /**
     * @internal
     */
    DisassociateAwsAccountFromPartnerAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAwsAccountFromPartnerAccountResponse = exports.DisassociateAwsAccountFromPartnerAccountResponse || (exports.DisassociateAwsAccountFromPartnerAccountResponse = {}));
var DisassociateWirelessDeviceFromThingRequest;
(function (DisassociateWirelessDeviceFromThingRequest) {
    /**
     * @internal
     */
    DisassociateWirelessDeviceFromThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessDeviceFromThingRequest = exports.DisassociateWirelessDeviceFromThingRequest || (exports.DisassociateWirelessDeviceFromThingRequest = {}));
var DisassociateWirelessDeviceFromThingResponse;
(function (DisassociateWirelessDeviceFromThingResponse) {
    /**
     * @internal
     */
    DisassociateWirelessDeviceFromThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessDeviceFromThingResponse = exports.DisassociateWirelessDeviceFromThingResponse || (exports.DisassociateWirelessDeviceFromThingResponse = {}));
var DisassociateWirelessGatewayFromCertificateRequest;
(function (DisassociateWirelessGatewayFromCertificateRequest) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessGatewayFromCertificateRequest = exports.DisassociateWirelessGatewayFromCertificateRequest || (exports.DisassociateWirelessGatewayFromCertificateRequest = {}));
var DisassociateWirelessGatewayFromCertificateResponse;
(function (DisassociateWirelessGatewayFromCertificateResponse) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessGatewayFromCertificateResponse = exports.DisassociateWirelessGatewayFromCertificateResponse || (exports.DisassociateWirelessGatewayFromCertificateResponse = {}));
var DisassociateWirelessGatewayFromThingRequest;
(function (DisassociateWirelessGatewayFromThingRequest) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessGatewayFromThingRequest = exports.DisassociateWirelessGatewayFromThingRequest || (exports.DisassociateWirelessGatewayFromThingRequest = {}));
var DisassociateWirelessGatewayFromThingResponse;
(function (DisassociateWirelessGatewayFromThingResponse) {
    /**
     * @internal
     */
    DisassociateWirelessGatewayFromThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWirelessGatewayFromThingResponse = exports.DisassociateWirelessGatewayFromThingResponse || (exports.DisassociateWirelessGatewayFromThingResponse = {}));
var Event;
(function (Event) {
    Event["ACK"] = "ack";
    Event["DISCOVERED"] = "discovered";
    Event["LOST"] = "lost";
    Event["NACK"] = "nack";
    Event["PASSTHROUGH"] = "passthrough";
})(Event = exports.Event || (exports.Event = {}));
var GetDestinationRequest;
(function (GetDestinationRequest) {
    /**
     * @internal
     */
    GetDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDestinationRequest = exports.GetDestinationRequest || (exports.GetDestinationRequest = {}));
var GetDestinationResponse;
(function (GetDestinationResponse) {
    /**
     * @internal
     */
    GetDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDestinationResponse = exports.GetDestinationResponse || (exports.GetDestinationResponse = {}));
var GetDeviceProfileRequest;
(function (GetDeviceProfileRequest) {
    /**
     * @internal
     */
    GetDeviceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceProfileRequest = exports.GetDeviceProfileRequest || (exports.GetDeviceProfileRequest = {}));
var GetDeviceProfileResponse;
(function (GetDeviceProfileResponse) {
    /**
     * @internal
     */
    GetDeviceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceProfileResponse = exports.GetDeviceProfileResponse || (exports.GetDeviceProfileResponse = {}));
var GetLogLevelsByResourceTypesRequest;
(function (GetLogLevelsByResourceTypesRequest) {
    /**
     * @internal
     */
    GetLogLevelsByResourceTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLogLevelsByResourceTypesRequest = exports.GetLogLevelsByResourceTypesRequest || (exports.GetLogLevelsByResourceTypesRequest = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var WirelessDeviceEvent;
(function (WirelessDeviceEvent) {
    WirelessDeviceEvent["Downlink_Data"] = "Downlink_Data";
    WirelessDeviceEvent["Join"] = "Join";
    WirelessDeviceEvent["Registration"] = "Registration";
    WirelessDeviceEvent["Rejoin"] = "Rejoin";
    WirelessDeviceEvent["Uplink_Data"] = "Uplink_Data";
})(WirelessDeviceEvent = exports.WirelessDeviceEvent || (exports.WirelessDeviceEvent = {}));
var WirelessDeviceEventLogOption;
(function (WirelessDeviceEventLogOption) {
    /**
     * @internal
     */
    WirelessDeviceEventLogOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessDeviceEventLogOption = exports.WirelessDeviceEventLogOption || (exports.WirelessDeviceEventLogOption = {}));
var WirelessDeviceLogOption;
(function (WirelessDeviceLogOption) {
    /**
     * @internal
     */
    WirelessDeviceLogOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessDeviceLogOption = exports.WirelessDeviceLogOption || (exports.WirelessDeviceLogOption = {}));
var WirelessGatewayEvent;
(function (WirelessGatewayEvent) {
    WirelessGatewayEvent["CUPS_Request"] = "CUPS_Request";
    WirelessGatewayEvent["Certificate"] = "Certificate";
})(WirelessGatewayEvent = exports.WirelessGatewayEvent || (exports.WirelessGatewayEvent = {}));
var WirelessGatewayEventLogOption;
(function (WirelessGatewayEventLogOption) {
    /**
     * @internal
     */
    WirelessGatewayEventLogOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessGatewayEventLogOption = exports.WirelessGatewayEventLogOption || (exports.WirelessGatewayEventLogOption = {}));
var WirelessGatewayType;
(function (WirelessGatewayType) {
    WirelessGatewayType["LoRaWAN"] = "LoRaWAN";
})(WirelessGatewayType = exports.WirelessGatewayType || (exports.WirelessGatewayType = {}));
var WirelessGatewayLogOption;
(function (WirelessGatewayLogOption) {
    /**
     * @internal
     */
    WirelessGatewayLogOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessGatewayLogOption = exports.WirelessGatewayLogOption || (exports.WirelessGatewayLogOption = {}));
var GetLogLevelsByResourceTypesResponse;
(function (GetLogLevelsByResourceTypesResponse) {
    /**
     * @internal
     */
    GetLogLevelsByResourceTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLogLevelsByResourceTypesResponse = exports.GetLogLevelsByResourceTypesResponse || (exports.GetLogLevelsByResourceTypesResponse = {}));
var GetPartnerAccountRequest;
(function (GetPartnerAccountRequest) {
    /**
     * @internal
     */
    GetPartnerAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartnerAccountRequest = exports.GetPartnerAccountRequest || (exports.GetPartnerAccountRequest = {}));
var SidewalkAccountInfoWithFingerprint;
(function (SidewalkAccountInfoWithFingerprint) {
    /**
     * @internal
     */
    SidewalkAccountInfoWithFingerprint.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Fingerprint && { Fingerprint: smithy_client_1.SENSITIVE_STRING }),
    });
})(SidewalkAccountInfoWithFingerprint = exports.SidewalkAccountInfoWithFingerprint || (exports.SidewalkAccountInfoWithFingerprint = {}));
var GetPartnerAccountResponse;
(function (GetPartnerAccountResponse) {
    /**
     * @internal
     */
    GetPartnerAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sidewalk && { Sidewalk: SidewalkAccountInfoWithFingerprint.filterSensitiveLog(obj.Sidewalk) }),
    });
})(GetPartnerAccountResponse = exports.GetPartnerAccountResponse || (exports.GetPartnerAccountResponse = {}));
var GetResourceLogLevelRequest;
(function (GetResourceLogLevelRequest) {
    /**
     * @internal
     */
    GetResourceLogLevelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceLogLevelRequest = exports.GetResourceLogLevelRequest || (exports.GetResourceLogLevelRequest = {}));
var GetResourceLogLevelResponse;
(function (GetResourceLogLevelResponse) {
    /**
     * @internal
     */
    GetResourceLogLevelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceLogLevelResponse = exports.GetResourceLogLevelResponse || (exports.GetResourceLogLevelResponse = {}));
var WirelessGatewayServiceType;
(function (WirelessGatewayServiceType) {
    WirelessGatewayServiceType["CUPS"] = "CUPS";
    WirelessGatewayServiceType["LNS"] = "LNS";
})(WirelessGatewayServiceType = exports.WirelessGatewayServiceType || (exports.WirelessGatewayServiceType = {}));
var GetServiceEndpointRequest;
(function (GetServiceEndpointRequest) {
    /**
     * @internal
     */
    GetServiceEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceEndpointRequest = exports.GetServiceEndpointRequest || (exports.GetServiceEndpointRequest = {}));
var GetServiceEndpointResponse;
(function (GetServiceEndpointResponse) {
    /**
     * @internal
     */
    GetServiceEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceEndpointResponse = exports.GetServiceEndpointResponse || (exports.GetServiceEndpointResponse = {}));
var GetServiceProfileRequest;
(function (GetServiceProfileRequest) {
    /**
     * @internal
     */
    GetServiceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceProfileRequest = exports.GetServiceProfileRequest || (exports.GetServiceProfileRequest = {}));
var LoRaWANGetServiceProfileInfo;
(function (LoRaWANGetServiceProfileInfo) {
    /**
     * @internal
     */
    LoRaWANGetServiceProfileInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANGetServiceProfileInfo = exports.LoRaWANGetServiceProfileInfo || (exports.LoRaWANGetServiceProfileInfo = {}));
var GetServiceProfileResponse;
(function (GetServiceProfileResponse) {
    /**
     * @internal
     */
    GetServiceProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceProfileResponse = exports.GetServiceProfileResponse || (exports.GetServiceProfileResponse = {}));
var WirelessDeviceIdType;
(function (WirelessDeviceIdType) {
    WirelessDeviceIdType["DevEui"] = "DevEui";
    WirelessDeviceIdType["ThingName"] = "ThingName";
    WirelessDeviceIdType["WirelessDeviceId"] = "WirelessDeviceId";
})(WirelessDeviceIdType = exports.WirelessDeviceIdType || (exports.WirelessDeviceIdType = {}));
var GetWirelessDeviceRequest;
(function (GetWirelessDeviceRequest) {
    /**
     * @internal
     */
    GetWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessDeviceRequest = exports.GetWirelessDeviceRequest || (exports.GetWirelessDeviceRequest = {}));
var SidewalkDevice;
(function (SidewalkDevice) {
    /**
     * @internal
     */
    SidewalkDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SidewalkDevice = exports.SidewalkDevice || (exports.SidewalkDevice = {}));
var GetWirelessDeviceResponse;
(function (GetWirelessDeviceResponse) {
    /**
     * @internal
     */
    GetWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessDeviceResponse = exports.GetWirelessDeviceResponse || (exports.GetWirelessDeviceResponse = {}));
var GetWirelessDeviceStatisticsRequest;
(function (GetWirelessDeviceStatisticsRequest) {
    /**
     * @internal
     */
    GetWirelessDeviceStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessDeviceStatisticsRequest = exports.GetWirelessDeviceStatisticsRequest || (exports.GetWirelessDeviceStatisticsRequest = {}));
var LoRaWANGatewayMetadata;
(function (LoRaWANGatewayMetadata) {
    /**
     * @internal
     */
    LoRaWANGatewayMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANGatewayMetadata = exports.LoRaWANGatewayMetadata || (exports.LoRaWANGatewayMetadata = {}));
var LoRaWANDeviceMetadata;
(function (LoRaWANDeviceMetadata) {
    /**
     * @internal
     */
    LoRaWANDeviceMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANDeviceMetadata = exports.LoRaWANDeviceMetadata || (exports.LoRaWANDeviceMetadata = {}));
var SidewalkDeviceMetadata;
(function (SidewalkDeviceMetadata) {
    /**
     * @internal
     */
    SidewalkDeviceMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SidewalkDeviceMetadata = exports.SidewalkDeviceMetadata || (exports.SidewalkDeviceMetadata = {}));
var GetWirelessDeviceStatisticsResponse;
(function (GetWirelessDeviceStatisticsResponse) {
    /**
     * @internal
     */
    GetWirelessDeviceStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessDeviceStatisticsResponse = exports.GetWirelessDeviceStatisticsResponse || (exports.GetWirelessDeviceStatisticsResponse = {}));
var WirelessGatewayIdType;
(function (WirelessGatewayIdType) {
    WirelessGatewayIdType["GatewayEui"] = "GatewayEui";
    WirelessGatewayIdType["ThingName"] = "ThingName";
    WirelessGatewayIdType["WirelessGatewayId"] = "WirelessGatewayId";
})(WirelessGatewayIdType = exports.WirelessGatewayIdType || (exports.WirelessGatewayIdType = {}));
var GetWirelessGatewayRequest;
(function (GetWirelessGatewayRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayRequest = exports.GetWirelessGatewayRequest || (exports.GetWirelessGatewayRequest = {}));
var GetWirelessGatewayResponse;
(function (GetWirelessGatewayResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayResponse = exports.GetWirelessGatewayResponse || (exports.GetWirelessGatewayResponse = {}));
var GetWirelessGatewayCertificateRequest;
(function (GetWirelessGatewayCertificateRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayCertificateRequest = exports.GetWirelessGatewayCertificateRequest || (exports.GetWirelessGatewayCertificateRequest = {}));
var GetWirelessGatewayCertificateResponse;
(function (GetWirelessGatewayCertificateResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayCertificateResponse = exports.GetWirelessGatewayCertificateResponse || (exports.GetWirelessGatewayCertificateResponse = {}));
var GetWirelessGatewayFirmwareInformationRequest;
(function (GetWirelessGatewayFirmwareInformationRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayFirmwareInformationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayFirmwareInformationRequest = exports.GetWirelessGatewayFirmwareInformationRequest || (exports.GetWirelessGatewayFirmwareInformationRequest = {}));
var LoRaWANGatewayCurrentVersion;
(function (LoRaWANGatewayCurrentVersion) {
    /**
     * @internal
     */
    LoRaWANGatewayCurrentVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANGatewayCurrentVersion = exports.LoRaWANGatewayCurrentVersion || (exports.LoRaWANGatewayCurrentVersion = {}));
var GetWirelessGatewayFirmwareInformationResponse;
(function (GetWirelessGatewayFirmwareInformationResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayFirmwareInformationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayFirmwareInformationResponse = exports.GetWirelessGatewayFirmwareInformationResponse || (exports.GetWirelessGatewayFirmwareInformationResponse = {}));
var GetWirelessGatewayStatisticsRequest;
(function (GetWirelessGatewayStatisticsRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayStatisticsRequest = exports.GetWirelessGatewayStatisticsRequest || (exports.GetWirelessGatewayStatisticsRequest = {}));
var GetWirelessGatewayStatisticsResponse;
(function (GetWirelessGatewayStatisticsResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayStatisticsResponse = exports.GetWirelessGatewayStatisticsResponse || (exports.GetWirelessGatewayStatisticsResponse = {}));
var GetWirelessGatewayTaskRequest;
(function (GetWirelessGatewayTaskRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayTaskRequest = exports.GetWirelessGatewayTaskRequest || (exports.GetWirelessGatewayTaskRequest = {}));
var GetWirelessGatewayTaskResponse;
(function (GetWirelessGatewayTaskResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayTaskResponse = exports.GetWirelessGatewayTaskResponse || (exports.GetWirelessGatewayTaskResponse = {}));
var GetWirelessGatewayTaskDefinitionRequest;
(function (GetWirelessGatewayTaskDefinitionRequest) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayTaskDefinitionRequest = exports.GetWirelessGatewayTaskDefinitionRequest || (exports.GetWirelessGatewayTaskDefinitionRequest = {}));
var GetWirelessGatewayTaskDefinitionResponse;
(function (GetWirelessGatewayTaskDefinitionResponse) {
    /**
     * @internal
     */
    GetWirelessGatewayTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWirelessGatewayTaskDefinitionResponse = exports.GetWirelessGatewayTaskDefinitionResponse || (exports.GetWirelessGatewayTaskDefinitionResponse = {}));
var ListDestinationsRequest;
(function (ListDestinationsRequest) {
    /**
     * @internal
     */
    ListDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDestinationsRequest = exports.ListDestinationsRequest || (exports.ListDestinationsRequest = {}));
var ListDestinationsResponse;
(function (ListDestinationsResponse) {
    /**
     * @internal
     */
    ListDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDestinationsResponse = exports.ListDestinationsResponse || (exports.ListDestinationsResponse = {}));
var ListDeviceProfilesRequest;
(function (ListDeviceProfilesRequest) {
    /**
     * @internal
     */
    ListDeviceProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceProfilesRequest = exports.ListDeviceProfilesRequest || (exports.ListDeviceProfilesRequest = {}));
var ListDeviceProfilesResponse;
(function (ListDeviceProfilesResponse) {
    /**
     * @internal
     */
    ListDeviceProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceProfilesResponse = exports.ListDeviceProfilesResponse || (exports.ListDeviceProfilesResponse = {}));
var ListPartnerAccountsRequest;
(function (ListPartnerAccountsRequest) {
    /**
     * @internal
     */
    ListPartnerAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartnerAccountsRequest = exports.ListPartnerAccountsRequest || (exports.ListPartnerAccountsRequest = {}));
var ListPartnerAccountsResponse;
(function (ListPartnerAccountsResponse) {
    /**
     * @internal
     */
    ListPartnerAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sidewalk && {
            Sidewalk: obj.Sidewalk.map((item) => SidewalkAccountInfoWithFingerprint.filterSensitiveLog(item)),
        }),
    });
})(ListPartnerAccountsResponse = exports.ListPartnerAccountsResponse || (exports.ListPartnerAccountsResponse = {}));
var ListServiceProfilesRequest;
(function (ListServiceProfilesRequest) {
    /**
     * @internal
     */
    ListServiceProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceProfilesRequest = exports.ListServiceProfilesRequest || (exports.ListServiceProfilesRequest = {}));
var ServiceProfile;
(function (ServiceProfile) {
    /**
     * @internal
     */
    ServiceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceProfile = exports.ServiceProfile || (exports.ServiceProfile = {}));
var ListServiceProfilesResponse;
(function (ListServiceProfilesResponse) {
    /**
     * @internal
     */
    ListServiceProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceProfilesResponse = exports.ListServiceProfilesResponse || (exports.ListServiceProfilesResponse = {}));
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
var ListWirelessDevicesRequest;
(function (ListWirelessDevicesRequest) {
    /**
     * @internal
     */
    ListWirelessDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessDevicesRequest = exports.ListWirelessDevicesRequest || (exports.ListWirelessDevicesRequest = {}));
var LoRaWANListDevice;
(function (LoRaWANListDevice) {
    /**
     * @internal
     */
    LoRaWANListDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANListDevice = exports.LoRaWANListDevice || (exports.LoRaWANListDevice = {}));
var SidewalkListDevice;
(function (SidewalkListDevice) {
    /**
     * @internal
     */
    SidewalkListDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SidewalkListDevice = exports.SidewalkListDevice || (exports.SidewalkListDevice = {}));
var WirelessDeviceStatistics;
(function (WirelessDeviceStatistics) {
    /**
     * @internal
     */
    WirelessDeviceStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessDeviceStatistics = exports.WirelessDeviceStatistics || (exports.WirelessDeviceStatistics = {}));
var ListWirelessDevicesResponse;
(function (ListWirelessDevicesResponse) {
    /**
     * @internal
     */
    ListWirelessDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessDevicesResponse = exports.ListWirelessDevicesResponse || (exports.ListWirelessDevicesResponse = {}));
var ListWirelessGatewaysRequest;
(function (ListWirelessGatewaysRequest) {
    /**
     * @internal
     */
    ListWirelessGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessGatewaysRequest = exports.ListWirelessGatewaysRequest || (exports.ListWirelessGatewaysRequest = {}));
var WirelessGatewayStatistics;
(function (WirelessGatewayStatistics) {
    /**
     * @internal
     */
    WirelessGatewayStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessGatewayStatistics = exports.WirelessGatewayStatistics || (exports.WirelessGatewayStatistics = {}));
var ListWirelessGatewaysResponse;
(function (ListWirelessGatewaysResponse) {
    /**
     * @internal
     */
    ListWirelessGatewaysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessGatewaysResponse = exports.ListWirelessGatewaysResponse || (exports.ListWirelessGatewaysResponse = {}));
var WirelessGatewayTaskDefinitionType;
(function (WirelessGatewayTaskDefinitionType) {
    WirelessGatewayTaskDefinitionType["UPDATE"] = "UPDATE";
})(WirelessGatewayTaskDefinitionType = exports.WirelessGatewayTaskDefinitionType || (exports.WirelessGatewayTaskDefinitionType = {}));
var ListWirelessGatewayTaskDefinitionsRequest;
(function (ListWirelessGatewayTaskDefinitionsRequest) {
    /**
     * @internal
     */
    ListWirelessGatewayTaskDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessGatewayTaskDefinitionsRequest = exports.ListWirelessGatewayTaskDefinitionsRequest || (exports.ListWirelessGatewayTaskDefinitionsRequest = {}));
var LoRaWANUpdateGatewayTaskEntry;
(function (LoRaWANUpdateGatewayTaskEntry) {
    /**
     * @internal
     */
    LoRaWANUpdateGatewayTaskEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANUpdateGatewayTaskEntry = exports.LoRaWANUpdateGatewayTaskEntry || (exports.LoRaWANUpdateGatewayTaskEntry = {}));
var UpdateWirelessGatewayTaskEntry;
(function (UpdateWirelessGatewayTaskEntry) {
    /**
     * @internal
     */
    UpdateWirelessGatewayTaskEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessGatewayTaskEntry = exports.UpdateWirelessGatewayTaskEntry || (exports.UpdateWirelessGatewayTaskEntry = {}));
var ListWirelessGatewayTaskDefinitionsResponse;
(function (ListWirelessGatewayTaskDefinitionsResponse) {
    /**
     * @internal
     */
    ListWirelessGatewayTaskDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWirelessGatewayTaskDefinitionsResponse = exports.ListWirelessGatewayTaskDefinitionsResponse || (exports.ListWirelessGatewayTaskDefinitionsResponse = {}));
var PutResourceLogLevelRequest;
(function (PutResourceLogLevelRequest) {
    /**
     * @internal
     */
    PutResourceLogLevelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourceLogLevelRequest = exports.PutResourceLogLevelRequest || (exports.PutResourceLogLevelRequest = {}));
var PutResourceLogLevelResponse;
(function (PutResourceLogLevelResponse) {
    /**
     * @internal
     */
    PutResourceLogLevelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourceLogLevelResponse = exports.PutResourceLogLevelResponse || (exports.PutResourceLogLevelResponse = {}));
var ResetAllResourceLogLevelsRequest;
(function (ResetAllResourceLogLevelsRequest) {
    /**
     * @internal
     */
    ResetAllResourceLogLevelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetAllResourceLogLevelsRequest = exports.ResetAllResourceLogLevelsRequest || (exports.ResetAllResourceLogLevelsRequest = {}));
var ResetAllResourceLogLevelsResponse;
(function (ResetAllResourceLogLevelsResponse) {
    /**
     * @internal
     */
    ResetAllResourceLogLevelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetAllResourceLogLevelsResponse = exports.ResetAllResourceLogLevelsResponse || (exports.ResetAllResourceLogLevelsResponse = {}));
var ResetResourceLogLevelRequest;
(function (ResetResourceLogLevelRequest) {
    /**
     * @internal
     */
    ResetResourceLogLevelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetResourceLogLevelRequest = exports.ResetResourceLogLevelRequest || (exports.ResetResourceLogLevelRequest = {}));
var ResetResourceLogLevelResponse;
(function (ResetResourceLogLevelResponse) {
    /**
     * @internal
     */
    ResetResourceLogLevelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetResourceLogLevelResponse = exports.ResetResourceLogLevelResponse || (exports.ResetResourceLogLevelResponse = {}));
var LoRaWANSendDataToDevice;
(function (LoRaWANSendDataToDevice) {
    /**
     * @internal
     */
    LoRaWANSendDataToDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANSendDataToDevice = exports.LoRaWANSendDataToDevice || (exports.LoRaWANSendDataToDevice = {}));
var MessageType;
(function (MessageType) {
    MessageType["CUSTOM_COMMAND_ID_GET"] = "CUSTOM_COMMAND_ID_GET";
    MessageType["CUSTOM_COMMAND_ID_NOTIFY"] = "CUSTOM_COMMAND_ID_NOTIFY";
    MessageType["CUSTOM_COMMAND_ID_RESP"] = "CUSTOM_COMMAND_ID_RESP";
    MessageType["CUSTOM_COMMAND_ID_SET"] = "CUSTOM_COMMAND_ID_SET";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var SidewalkSendDataToDevice;
(function (SidewalkSendDataToDevice) {
    /**
     * @internal
     */
    SidewalkSendDataToDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SidewalkSendDataToDevice = exports.SidewalkSendDataToDevice || (exports.SidewalkSendDataToDevice = {}));
var WirelessMetadata;
(function (WirelessMetadata) {
    /**
     * @internal
     */
    WirelessMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WirelessMetadata = exports.WirelessMetadata || (exports.WirelessMetadata = {}));
var SendDataToWirelessDeviceRequest;
(function (SendDataToWirelessDeviceRequest) {
    /**
     * @internal
     */
    SendDataToWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendDataToWirelessDeviceRequest = exports.SendDataToWirelessDeviceRequest || (exports.SendDataToWirelessDeviceRequest = {}));
var SendDataToWirelessDeviceResponse;
(function (SendDataToWirelessDeviceResponse) {
    /**
     * @internal
     */
    SendDataToWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendDataToWirelessDeviceResponse = exports.SendDataToWirelessDeviceResponse || (exports.SendDataToWirelessDeviceResponse = {}));
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
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var TestWirelessDeviceRequest;
(function (TestWirelessDeviceRequest) {
    /**
     * @internal
     */
    TestWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestWirelessDeviceRequest = exports.TestWirelessDeviceRequest || (exports.TestWirelessDeviceRequest = {}));
var TestWirelessDeviceResponse;
(function (TestWirelessDeviceResponse) {
    /**
     * @internal
     */
    TestWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestWirelessDeviceResponse = exports.TestWirelessDeviceResponse || (exports.TestWirelessDeviceResponse = {}));
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
var UpdateDestinationRequest;
(function (UpdateDestinationRequest) {
    /**
     * @internal
     */
    UpdateDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDestinationRequest = exports.UpdateDestinationRequest || (exports.UpdateDestinationRequest = {}));
var UpdateDestinationResponse;
(function (UpdateDestinationResponse) {
    /**
     * @internal
     */
    UpdateDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDestinationResponse = exports.UpdateDestinationResponse || (exports.UpdateDestinationResponse = {}));
var UpdateLogLevelsByResourceTypesRequest;
(function (UpdateLogLevelsByResourceTypesRequest) {
    /**
     * @internal
     */
    UpdateLogLevelsByResourceTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLogLevelsByResourceTypesRequest = exports.UpdateLogLevelsByResourceTypesRequest || (exports.UpdateLogLevelsByResourceTypesRequest = {}));
var UpdateLogLevelsByResourceTypesResponse;
(function (UpdateLogLevelsByResourceTypesResponse) {
    /**
     * @internal
     */
    UpdateLogLevelsByResourceTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLogLevelsByResourceTypesResponse = exports.UpdateLogLevelsByResourceTypesResponse || (exports.UpdateLogLevelsByResourceTypesResponse = {}));
var SidewalkUpdateAccount;
(function (SidewalkUpdateAccount) {
    /**
     * @internal
     */
    SidewalkUpdateAccount.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AppServerPrivateKey && { AppServerPrivateKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(SidewalkUpdateAccount = exports.SidewalkUpdateAccount || (exports.SidewalkUpdateAccount = {}));
var UpdatePartnerAccountRequest;
(function (UpdatePartnerAccountRequest) {
    /**
     * @internal
     */
    UpdatePartnerAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sidewalk && { Sidewalk: SidewalkUpdateAccount.filterSensitiveLog(obj.Sidewalk) }),
    });
})(UpdatePartnerAccountRequest = exports.UpdatePartnerAccountRequest || (exports.UpdatePartnerAccountRequest = {}));
var UpdatePartnerAccountResponse;
(function (UpdatePartnerAccountResponse) {
    /**
     * @internal
     */
    UpdatePartnerAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePartnerAccountResponse = exports.UpdatePartnerAccountResponse || (exports.UpdatePartnerAccountResponse = {}));
var LoRaWANUpdateDevice;
(function (LoRaWANUpdateDevice) {
    /**
     * @internal
     */
    LoRaWANUpdateDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoRaWANUpdateDevice = exports.LoRaWANUpdateDevice || (exports.LoRaWANUpdateDevice = {}));
var UpdateWirelessDeviceRequest;
(function (UpdateWirelessDeviceRequest) {
    /**
     * @internal
     */
    UpdateWirelessDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessDeviceRequest = exports.UpdateWirelessDeviceRequest || (exports.UpdateWirelessDeviceRequest = {}));
var UpdateWirelessDeviceResponse;
(function (UpdateWirelessDeviceResponse) {
    /**
     * @internal
     */
    UpdateWirelessDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessDeviceResponse = exports.UpdateWirelessDeviceResponse || (exports.UpdateWirelessDeviceResponse = {}));
var UpdateWirelessGatewayRequest;
(function (UpdateWirelessGatewayRequest) {
    /**
     * @internal
     */
    UpdateWirelessGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessGatewayRequest = exports.UpdateWirelessGatewayRequest || (exports.UpdateWirelessGatewayRequest = {}));
var UpdateWirelessGatewayResponse;
(function (UpdateWirelessGatewayResponse) {
    /**
     * @internal
     */
    UpdateWirelessGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWirelessGatewayResponse = exports.UpdateWirelessGatewayResponse || (exports.UpdateWirelessGatewayResponse = {}));
//# sourceMappingURL=models_0.js.map