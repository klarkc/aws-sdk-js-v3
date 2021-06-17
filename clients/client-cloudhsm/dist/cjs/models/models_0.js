"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTagsFromResourceResponse = exports.RemoveTagsFromResourceRequest = exports.ModifyLunaClientResponse = exports.ModifyLunaClientRequest = exports.ModifyHsmResponse = exports.ModifyHsmRequest = exports.ModifyHapgResponse = exports.ModifyHapgRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListLunaClientsResponse = exports.ListLunaClientsRequest = exports.ListHsmsResponse = exports.ListHsmsRequest = exports.ListHapgsResponse = exports.ListHapgsRequest = exports.ListAvailableZonesResponse = exports.ListAvailableZonesRequest = exports.GetConfigResponse = exports.GetConfigRequest = exports.DescribeLunaClientResponse = exports.DescribeLunaClientRequest = exports.DescribeHsmResponse = exports.HsmStatus = exports.DescribeHsmRequest = exports.DescribeHapgResponse = exports.CloudHsmObjectState = exports.DescribeHapgRequest = exports.DeleteLunaClientResponse = exports.DeleteLunaClientRequest = exports.DeleteHsmResponse = exports.DeleteHsmRequest = exports.DeleteHapgResponse = exports.DeleteHapgRequest = exports.CreateLunaClientResponse = exports.CreateLunaClientRequest = exports.CreateHsmResponse = exports.CreateHsmRequest = exports.SubscriptionType = exports.CreateHapgResponse = exports.CreateHapgRequest = exports.ClientVersion = exports.InvalidRequestException = exports.CloudHsmServiceException = exports.CloudHsmInternalException = exports.AddTagsToResourceResponse = exports.AddTagsToResourceRequest = exports.Tag = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    /**
     * @internal
     */
    AddTagsToResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResponse;
(function (AddTagsToResourceResponse) {
    /**
     * @internal
     */
    AddTagsToResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceResponse = exports.AddTagsToResourceResponse || (exports.AddTagsToResourceResponse = {}));
var CloudHsmInternalException;
(function (CloudHsmInternalException) {
    /**
     * @internal
     */
    CloudHsmInternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmInternalException = exports.CloudHsmInternalException || (exports.CloudHsmInternalException = {}));
var CloudHsmServiceException;
(function (CloudHsmServiceException) {
    /**
     * @internal
     */
    CloudHsmServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudHsmServiceException = exports.CloudHsmServiceException || (exports.CloudHsmServiceException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ClientVersion;
(function (ClientVersion) {
    ClientVersion["FIVE_ONE"] = "5.1";
    ClientVersion["FIVE_THREE"] = "5.3";
})(ClientVersion = exports.ClientVersion || (exports.ClientVersion = {}));
var CreateHapgRequest;
(function (CreateHapgRequest) {
    /**
     * @internal
     */
    CreateHapgRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHapgRequest = exports.CreateHapgRequest || (exports.CreateHapgRequest = {}));
var CreateHapgResponse;
(function (CreateHapgResponse) {
    /**
     * @internal
     */
    CreateHapgResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHapgResponse = exports.CreateHapgResponse || (exports.CreateHapgResponse = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["PRODUCTION"] = "PRODUCTION";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
var CreateHsmRequest;
(function (CreateHsmRequest) {
    /**
     * @internal
     */
    CreateHsmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmRequest = exports.CreateHsmRequest || (exports.CreateHsmRequest = {}));
var CreateHsmResponse;
(function (CreateHsmResponse) {
    /**
     * @internal
     */
    CreateHsmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHsmResponse = exports.CreateHsmResponse || (exports.CreateHsmResponse = {}));
var CreateLunaClientRequest;
(function (CreateLunaClientRequest) {
    /**
     * @internal
     */
    CreateLunaClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLunaClientRequest = exports.CreateLunaClientRequest || (exports.CreateLunaClientRequest = {}));
var CreateLunaClientResponse;
(function (CreateLunaClientResponse) {
    /**
     * @internal
     */
    CreateLunaClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLunaClientResponse = exports.CreateLunaClientResponse || (exports.CreateLunaClientResponse = {}));
var DeleteHapgRequest;
(function (DeleteHapgRequest) {
    /**
     * @internal
     */
    DeleteHapgRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHapgRequest = exports.DeleteHapgRequest || (exports.DeleteHapgRequest = {}));
var DeleteHapgResponse;
(function (DeleteHapgResponse) {
    /**
     * @internal
     */
    DeleteHapgResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHapgResponse = exports.DeleteHapgResponse || (exports.DeleteHapgResponse = {}));
var DeleteHsmRequest;
(function (DeleteHsmRequest) {
    /**
     * @internal
     */
    DeleteHsmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHsmRequest = exports.DeleteHsmRequest || (exports.DeleteHsmRequest = {}));
var DeleteHsmResponse;
(function (DeleteHsmResponse) {
    /**
     * @internal
     */
    DeleteHsmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHsmResponse = exports.DeleteHsmResponse || (exports.DeleteHsmResponse = {}));
var DeleteLunaClientRequest;
(function (DeleteLunaClientRequest) {
    /**
     * @internal
     */
    DeleteLunaClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLunaClientRequest = exports.DeleteLunaClientRequest || (exports.DeleteLunaClientRequest = {}));
var DeleteLunaClientResponse;
(function (DeleteLunaClientResponse) {
    /**
     * @internal
     */
    DeleteLunaClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLunaClientResponse = exports.DeleteLunaClientResponse || (exports.DeleteLunaClientResponse = {}));
var DescribeHapgRequest;
(function (DescribeHapgRequest) {
    /**
     * @internal
     */
    DescribeHapgRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHapgRequest = exports.DescribeHapgRequest || (exports.DescribeHapgRequest = {}));
var CloudHsmObjectState;
(function (CloudHsmObjectState) {
    CloudHsmObjectState["DEGRADED"] = "DEGRADED";
    CloudHsmObjectState["READY"] = "READY";
    CloudHsmObjectState["UPDATING"] = "UPDATING";
})(CloudHsmObjectState = exports.CloudHsmObjectState || (exports.CloudHsmObjectState = {}));
var DescribeHapgResponse;
(function (DescribeHapgResponse) {
    /**
     * @internal
     */
    DescribeHapgResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHapgResponse = exports.DescribeHapgResponse || (exports.DescribeHapgResponse = {}));
var DescribeHsmRequest;
(function (DescribeHsmRequest) {
    /**
     * @internal
     */
    DescribeHsmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHsmRequest = exports.DescribeHsmRequest || (exports.DescribeHsmRequest = {}));
var HsmStatus;
(function (HsmStatus) {
    HsmStatus["DEGRADED"] = "DEGRADED";
    HsmStatus["PENDING"] = "PENDING";
    HsmStatus["RUNNING"] = "RUNNING";
    HsmStatus["SUSPENDED"] = "SUSPENDED";
    HsmStatus["TERMINATED"] = "TERMINATED";
    HsmStatus["TERMINATING"] = "TERMINATING";
    HsmStatus["UPDATING"] = "UPDATING";
})(HsmStatus = exports.HsmStatus || (exports.HsmStatus = {}));
var DescribeHsmResponse;
(function (DescribeHsmResponse) {
    /**
     * @internal
     */
    DescribeHsmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHsmResponse = exports.DescribeHsmResponse || (exports.DescribeHsmResponse = {}));
var DescribeLunaClientRequest;
(function (DescribeLunaClientRequest) {
    /**
     * @internal
     */
    DescribeLunaClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLunaClientRequest = exports.DescribeLunaClientRequest || (exports.DescribeLunaClientRequest = {}));
var DescribeLunaClientResponse;
(function (DescribeLunaClientResponse) {
    /**
     * @internal
     */
    DescribeLunaClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLunaClientResponse = exports.DescribeLunaClientResponse || (exports.DescribeLunaClientResponse = {}));
var GetConfigRequest;
(function (GetConfigRequest) {
    /**
     * @internal
     */
    GetConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigRequest = exports.GetConfigRequest || (exports.GetConfigRequest = {}));
var GetConfigResponse;
(function (GetConfigResponse) {
    /**
     * @internal
     */
    GetConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigResponse = exports.GetConfigResponse || (exports.GetConfigResponse = {}));
var ListAvailableZonesRequest;
(function (ListAvailableZonesRequest) {
    /**
     * @internal
     */
    ListAvailableZonesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableZonesRequest = exports.ListAvailableZonesRequest || (exports.ListAvailableZonesRequest = {}));
var ListAvailableZonesResponse;
(function (ListAvailableZonesResponse) {
    /**
     * @internal
     */
    ListAvailableZonesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableZonesResponse = exports.ListAvailableZonesResponse || (exports.ListAvailableZonesResponse = {}));
var ListHapgsRequest;
(function (ListHapgsRequest) {
    /**
     * @internal
     */
    ListHapgsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHapgsRequest = exports.ListHapgsRequest || (exports.ListHapgsRequest = {}));
var ListHapgsResponse;
(function (ListHapgsResponse) {
    /**
     * @internal
     */
    ListHapgsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHapgsResponse = exports.ListHapgsResponse || (exports.ListHapgsResponse = {}));
var ListHsmsRequest;
(function (ListHsmsRequest) {
    /**
     * @internal
     */
    ListHsmsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHsmsRequest = exports.ListHsmsRequest || (exports.ListHsmsRequest = {}));
var ListHsmsResponse;
(function (ListHsmsResponse) {
    /**
     * @internal
     */
    ListHsmsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHsmsResponse = exports.ListHsmsResponse || (exports.ListHsmsResponse = {}));
var ListLunaClientsRequest;
(function (ListLunaClientsRequest) {
    /**
     * @internal
     */
    ListLunaClientsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLunaClientsRequest = exports.ListLunaClientsRequest || (exports.ListLunaClientsRequest = {}));
var ListLunaClientsResponse;
(function (ListLunaClientsResponse) {
    /**
     * @internal
     */
    ListLunaClientsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLunaClientsResponse = exports.ListLunaClientsResponse || (exports.ListLunaClientsResponse = {}));
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
var ModifyHapgRequest;
(function (ModifyHapgRequest) {
    /**
     * @internal
     */
    ModifyHapgRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHapgRequest = exports.ModifyHapgRequest || (exports.ModifyHapgRequest = {}));
var ModifyHapgResponse;
(function (ModifyHapgResponse) {
    /**
     * @internal
     */
    ModifyHapgResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHapgResponse = exports.ModifyHapgResponse || (exports.ModifyHapgResponse = {}));
var ModifyHsmRequest;
(function (ModifyHsmRequest) {
    /**
     * @internal
     */
    ModifyHsmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHsmRequest = exports.ModifyHsmRequest || (exports.ModifyHsmRequest = {}));
var ModifyHsmResponse;
(function (ModifyHsmResponse) {
    /**
     * @internal
     */
    ModifyHsmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHsmResponse = exports.ModifyHsmResponse || (exports.ModifyHsmResponse = {}));
var ModifyLunaClientRequest;
(function (ModifyLunaClientRequest) {
    /**
     * @internal
     */
    ModifyLunaClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyLunaClientRequest = exports.ModifyLunaClientRequest || (exports.ModifyLunaClientRequest = {}));
var ModifyLunaClientResponse;
(function (ModifyLunaClientResponse) {
    /**
     * @internal
     */
    ModifyLunaClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyLunaClientResponse = exports.ModifyLunaClientResponse || (exports.ModifyLunaClientResponse = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveTagsFromResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResponse;
(function (RemoveTagsFromResourceResponse) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceResponse = exports.RemoveTagsFromResourceResponse || (exports.RemoveTagsFromResourceResponse = {}));
//# sourceMappingURL=models_0.js.map