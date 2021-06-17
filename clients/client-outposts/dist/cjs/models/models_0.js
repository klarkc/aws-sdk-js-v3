"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSitesOutput = exports.Site = exports.ListSitesInput = exports.ListOutpostsOutput = exports.ListOutpostsInput = exports.GetOutpostInstanceTypesOutput = exports.InstanceTypeItem = exports.GetOutpostInstanceTypesInput = exports.GetOutpostOutput = exports.GetOutpostInput = exports.DeleteSiteOutput = exports.DeleteSiteInput = exports.DeleteOutpostOutput = exports.DeleteOutpostInput = exports.ValidationException = exports.ServiceQuotaExceededException = exports.NotFoundException = exports.InternalServerException = exports.CreateOutpostOutput = exports.Outpost = exports.CreateOutpostInput = exports.ConflictException = exports.ResourceType = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["OUTPOST"] = "OUTPOST";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateOutpostInput;
(function (CreateOutpostInput) {
    /**
     * @internal
     */
    CreateOutpostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOutpostInput = exports.CreateOutpostInput || (exports.CreateOutpostInput = {}));
var Outpost;
(function (Outpost) {
    /**
     * @internal
     */
    Outpost.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Outpost = exports.Outpost || (exports.Outpost = {}));
var CreateOutpostOutput;
(function (CreateOutpostOutput) {
    /**
     * @internal
     */
    CreateOutpostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOutpostOutput = exports.CreateOutpostOutput || (exports.CreateOutpostOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
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
var DeleteOutpostInput;
(function (DeleteOutpostInput) {
    /**
     * @internal
     */
    DeleteOutpostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutpostInput = exports.DeleteOutpostInput || (exports.DeleteOutpostInput = {}));
var DeleteOutpostOutput;
(function (DeleteOutpostOutput) {
    /**
     * @internal
     */
    DeleteOutpostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutpostOutput = exports.DeleteOutpostOutput || (exports.DeleteOutpostOutput = {}));
var DeleteSiteInput;
(function (DeleteSiteInput) {
    /**
     * @internal
     */
    DeleteSiteInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSiteInput = exports.DeleteSiteInput || (exports.DeleteSiteInput = {}));
var DeleteSiteOutput;
(function (DeleteSiteOutput) {
    /**
     * @internal
     */
    DeleteSiteOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSiteOutput = exports.DeleteSiteOutput || (exports.DeleteSiteOutput = {}));
var GetOutpostInput;
(function (GetOutpostInput) {
    /**
     * @internal
     */
    GetOutpostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutpostInput = exports.GetOutpostInput || (exports.GetOutpostInput = {}));
var GetOutpostOutput;
(function (GetOutpostOutput) {
    /**
     * @internal
     */
    GetOutpostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutpostOutput = exports.GetOutpostOutput || (exports.GetOutpostOutput = {}));
var GetOutpostInstanceTypesInput;
(function (GetOutpostInstanceTypesInput) {
    /**
     * @internal
     */
    GetOutpostInstanceTypesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutpostInstanceTypesInput = exports.GetOutpostInstanceTypesInput || (exports.GetOutpostInstanceTypesInput = {}));
var InstanceTypeItem;
(function (InstanceTypeItem) {
    /**
     * @internal
     */
    InstanceTypeItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTypeItem = exports.InstanceTypeItem || (exports.InstanceTypeItem = {}));
var GetOutpostInstanceTypesOutput;
(function (GetOutpostInstanceTypesOutput) {
    /**
     * @internal
     */
    GetOutpostInstanceTypesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOutpostInstanceTypesOutput = exports.GetOutpostInstanceTypesOutput || (exports.GetOutpostInstanceTypesOutput = {}));
var ListOutpostsInput;
(function (ListOutpostsInput) {
    /**
     * @internal
     */
    ListOutpostsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOutpostsInput = exports.ListOutpostsInput || (exports.ListOutpostsInput = {}));
var ListOutpostsOutput;
(function (ListOutpostsOutput) {
    /**
     * @internal
     */
    ListOutpostsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOutpostsOutput = exports.ListOutpostsOutput || (exports.ListOutpostsOutput = {}));
var ListSitesInput;
(function (ListSitesInput) {
    /**
     * @internal
     */
    ListSitesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSitesInput = exports.ListSitesInput || (exports.ListSitesInput = {}));
var Site;
(function (Site) {
    /**
     * @internal
     */
    Site.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Site = exports.Site || (exports.Site = {}));
var ListSitesOutput;
(function (ListSitesOutput) {
    /**
     * @internal
     */
    ListSitesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSitesOutput = exports.ListSitesOutput || (exports.ListSitesOutput = {}));
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