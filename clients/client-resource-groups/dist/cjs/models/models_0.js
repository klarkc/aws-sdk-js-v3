"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResourcesOutput = exports.SearchResourcesInput = exports.PutGroupConfigurationOutput = exports.PutGroupConfigurationInput = exports.ListGroupsOutput = exports.GroupIdentifier = exports.ListGroupsInput = exports.GroupFilter = exports.GroupFilterName = exports.UnauthorizedException = exports.ListGroupResourcesOutput = exports.ListGroupResourcesItem = exports.ResourceStatus = exports.ResourceStatusValue = exports.ResourceIdentifier = exports.QueryError = exports.QueryErrorCode = exports.ListGroupResourcesInput = exports.ResourceFilter = exports.ResourceFilterName = exports.GroupResourcesOutput = exports.PendingResource = exports.FailedResource = exports.GroupResourcesInput = exports.GetTagsOutput = exports.GetTagsInput = exports.GetGroupQueryOutput = exports.GroupQuery = exports.GetGroupQueryInput = exports.GetGroupConfigurationOutput = exports.GetGroupConfigurationInput = exports.GetGroupOutput = exports.GetGroupInput = exports.NotFoundException = exports.DeleteGroupOutput = exports.DeleteGroupInput = exports.TooManyRequestsException = exports.MethodNotAllowedException = exports.InternalServerErrorException = exports.ForbiddenException = exports.CreateGroupOutput = exports.GroupConfiguration = exports.GroupConfigurationStatus = exports.Group = exports.CreateGroupInput = exports.ResourceQuery = exports.QueryType = exports.GroupConfigurationItem = exports.GroupConfigurationParameter = exports.BadRequestException = void 0;
exports.UpdateGroupQueryOutput = exports.UpdateGroupQueryInput = exports.UpdateGroupOutput = exports.UpdateGroupInput = exports.UntagOutput = exports.UntagInput = exports.UngroupResourcesOutput = exports.UngroupResourcesInput = exports.TagOutput = exports.TagInput = void 0;
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var GroupConfigurationParameter;
(function (GroupConfigurationParameter) {
    /**
     * @internal
     */
    GroupConfigurationParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupConfigurationParameter = exports.GroupConfigurationParameter || (exports.GroupConfigurationParameter = {}));
var GroupConfigurationItem;
(function (GroupConfigurationItem) {
    /**
     * @internal
     */
    GroupConfigurationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupConfigurationItem = exports.GroupConfigurationItem || (exports.GroupConfigurationItem = {}));
var QueryType;
(function (QueryType) {
    QueryType["CLOUDFORMATION_STACK_1_0"] = "CLOUDFORMATION_STACK_1_0";
    QueryType["TAG_FILTERS_1_0"] = "TAG_FILTERS_1_0";
})(QueryType = exports.QueryType || (exports.QueryType = {}));
var ResourceQuery;
(function (ResourceQuery) {
    /**
     * @internal
     */
    ResourceQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceQuery = exports.ResourceQuery || (exports.ResourceQuery = {}));
var CreateGroupInput;
(function (CreateGroupInput) {
    /**
     * @internal
     */
    CreateGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupInput = exports.CreateGroupInput || (exports.CreateGroupInput = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var GroupConfigurationStatus;
(function (GroupConfigurationStatus) {
    GroupConfigurationStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    GroupConfigurationStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    GroupConfigurationStatus["UPDATING"] = "UPDATING";
})(GroupConfigurationStatus = exports.GroupConfigurationStatus || (exports.GroupConfigurationStatus = {}));
var GroupConfiguration;
(function (GroupConfiguration) {
    /**
     * @internal
     */
    GroupConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupConfiguration = exports.GroupConfiguration || (exports.GroupConfiguration = {}));
var CreateGroupOutput;
(function (CreateGroupOutput) {
    /**
     * @internal
     */
    CreateGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupOutput = exports.CreateGroupOutput || (exports.CreateGroupOutput = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var MethodNotAllowedException;
(function (MethodNotAllowedException) {
    /**
     * @internal
     */
    MethodNotAllowedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MethodNotAllowedException = exports.MethodNotAllowedException || (exports.MethodNotAllowedException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DeleteGroupInput;
(function (DeleteGroupInput) {
    /**
     * @internal
     */
    DeleteGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupInput = exports.DeleteGroupInput || (exports.DeleteGroupInput = {}));
var DeleteGroupOutput;
(function (DeleteGroupOutput) {
    /**
     * @internal
     */
    DeleteGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupOutput = exports.DeleteGroupOutput || (exports.DeleteGroupOutput = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var GetGroupInput;
(function (GetGroupInput) {
    /**
     * @internal
     */
    GetGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupInput = exports.GetGroupInput || (exports.GetGroupInput = {}));
var GetGroupOutput;
(function (GetGroupOutput) {
    /**
     * @internal
     */
    GetGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupOutput = exports.GetGroupOutput || (exports.GetGroupOutput = {}));
var GetGroupConfigurationInput;
(function (GetGroupConfigurationInput) {
    /**
     * @internal
     */
    GetGroupConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupConfigurationInput = exports.GetGroupConfigurationInput || (exports.GetGroupConfigurationInput = {}));
var GetGroupConfigurationOutput;
(function (GetGroupConfigurationOutput) {
    /**
     * @internal
     */
    GetGroupConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupConfigurationOutput = exports.GetGroupConfigurationOutput || (exports.GetGroupConfigurationOutput = {}));
var GetGroupQueryInput;
(function (GetGroupQueryInput) {
    /**
     * @internal
     */
    GetGroupQueryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupQueryInput = exports.GetGroupQueryInput || (exports.GetGroupQueryInput = {}));
var GroupQuery;
(function (GroupQuery) {
    /**
     * @internal
     */
    GroupQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupQuery = exports.GroupQuery || (exports.GroupQuery = {}));
var GetGroupQueryOutput;
(function (GetGroupQueryOutput) {
    /**
     * @internal
     */
    GetGroupQueryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupQueryOutput = exports.GetGroupQueryOutput || (exports.GetGroupQueryOutput = {}));
var GetTagsInput;
(function (GetTagsInput) {
    /**
     * @internal
     */
    GetTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsInput = exports.GetTagsInput || (exports.GetTagsInput = {}));
var GetTagsOutput;
(function (GetTagsOutput) {
    /**
     * @internal
     */
    GetTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsOutput = exports.GetTagsOutput || (exports.GetTagsOutput = {}));
var GroupResourcesInput;
(function (GroupResourcesInput) {
    /**
     * @internal
     */
    GroupResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupResourcesInput = exports.GroupResourcesInput || (exports.GroupResourcesInput = {}));
var FailedResource;
(function (FailedResource) {
    /**
     * @internal
     */
    FailedResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedResource = exports.FailedResource || (exports.FailedResource = {}));
var PendingResource;
(function (PendingResource) {
    /**
     * @internal
     */
    PendingResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingResource = exports.PendingResource || (exports.PendingResource = {}));
var GroupResourcesOutput;
(function (GroupResourcesOutput) {
    /**
     * @internal
     */
    GroupResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupResourcesOutput = exports.GroupResourcesOutput || (exports.GroupResourcesOutput = {}));
var ResourceFilterName;
(function (ResourceFilterName) {
    ResourceFilterName["ResourceType"] = "resource-type";
})(ResourceFilterName = exports.ResourceFilterName || (exports.ResourceFilterName = {}));
var ResourceFilter;
(function (ResourceFilter) {
    /**
     * @internal
     */
    ResourceFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceFilter = exports.ResourceFilter || (exports.ResourceFilter = {}));
var ListGroupResourcesInput;
(function (ListGroupResourcesInput) {
    /**
     * @internal
     */
    ListGroupResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupResourcesInput = exports.ListGroupResourcesInput || (exports.ListGroupResourcesInput = {}));
var QueryErrorCode;
(function (QueryErrorCode) {
    QueryErrorCode["CLOUDFORMATION_STACK_INACTIVE"] = "CLOUDFORMATION_STACK_INACTIVE";
    QueryErrorCode["CLOUDFORMATION_STACK_NOT_EXISTING"] = "CLOUDFORMATION_STACK_NOT_EXISTING";
})(QueryErrorCode = exports.QueryErrorCode || (exports.QueryErrorCode = {}));
var QueryError;
(function (QueryError) {
    /**
     * @internal
     */
    QueryError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryError = exports.QueryError || (exports.QueryError = {}));
var ResourceIdentifier;
(function (ResourceIdentifier) {
    /**
     * @internal
     */
    ResourceIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceIdentifier = exports.ResourceIdentifier || (exports.ResourceIdentifier = {}));
var ResourceStatusValue;
(function (ResourceStatusValue) {
    ResourceStatusValue["Pending"] = "PENDING";
})(ResourceStatusValue = exports.ResourceStatusValue || (exports.ResourceStatusValue = {}));
var ResourceStatus;
(function (ResourceStatus) {
    /**
     * @internal
     */
    ResourceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
var ListGroupResourcesItem;
(function (ListGroupResourcesItem) {
    /**
     * @internal
     */
    ListGroupResourcesItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupResourcesItem = exports.ListGroupResourcesItem || (exports.ListGroupResourcesItem = {}));
var ListGroupResourcesOutput;
(function (ListGroupResourcesOutput) {
    /**
     * @internal
     */
    ListGroupResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupResourcesOutput = exports.ListGroupResourcesOutput || (exports.ListGroupResourcesOutput = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var GroupFilterName;
(function (GroupFilterName) {
    GroupFilterName["ConfigurationType"] = "configuration-type";
    GroupFilterName["ResourceType"] = "resource-type";
})(GroupFilterName = exports.GroupFilterName || (exports.GroupFilterName = {}));
var GroupFilter;
(function (GroupFilter) {
    /**
     * @internal
     */
    GroupFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupFilter = exports.GroupFilter || (exports.GroupFilter = {}));
var ListGroupsInput;
(function (ListGroupsInput) {
    /**
     * @internal
     */
    ListGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsInput = exports.ListGroupsInput || (exports.ListGroupsInput = {}));
var GroupIdentifier;
(function (GroupIdentifier) {
    /**
     * @internal
     */
    GroupIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupIdentifier = exports.GroupIdentifier || (exports.GroupIdentifier = {}));
var ListGroupsOutput;
(function (ListGroupsOutput) {
    /**
     * @internal
     */
    ListGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsOutput = exports.ListGroupsOutput || (exports.ListGroupsOutput = {}));
var PutGroupConfigurationInput;
(function (PutGroupConfigurationInput) {
    /**
     * @internal
     */
    PutGroupConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutGroupConfigurationInput = exports.PutGroupConfigurationInput || (exports.PutGroupConfigurationInput = {}));
var PutGroupConfigurationOutput;
(function (PutGroupConfigurationOutput) {
    /**
     * @internal
     */
    PutGroupConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutGroupConfigurationOutput = exports.PutGroupConfigurationOutput || (exports.PutGroupConfigurationOutput = {}));
var SearchResourcesInput;
(function (SearchResourcesInput) {
    /**
     * @internal
     */
    SearchResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesInput = exports.SearchResourcesInput || (exports.SearchResourcesInput = {}));
var SearchResourcesOutput;
(function (SearchResourcesOutput) {
    /**
     * @internal
     */
    SearchResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesOutput = exports.SearchResourcesOutput || (exports.SearchResourcesOutput = {}));
var TagInput;
(function (TagInput) {
    /**
     * @internal
     */
    TagInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagInput = exports.TagInput || (exports.TagInput = {}));
var TagOutput;
(function (TagOutput) {
    /**
     * @internal
     */
    TagOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOutput = exports.TagOutput || (exports.TagOutput = {}));
var UngroupResourcesInput;
(function (UngroupResourcesInput) {
    /**
     * @internal
     */
    UngroupResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UngroupResourcesInput = exports.UngroupResourcesInput || (exports.UngroupResourcesInput = {}));
var UngroupResourcesOutput;
(function (UngroupResourcesOutput) {
    /**
     * @internal
     */
    UngroupResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UngroupResourcesOutput = exports.UngroupResourcesOutput || (exports.UngroupResourcesOutput = {}));
var UntagInput;
(function (UntagInput) {
    /**
     * @internal
     */
    UntagInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagInput = exports.UntagInput || (exports.UntagInput = {}));
var UntagOutput;
(function (UntagOutput) {
    /**
     * @internal
     */
    UntagOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagOutput = exports.UntagOutput || (exports.UntagOutput = {}));
var UpdateGroupInput;
(function (UpdateGroupInput) {
    /**
     * @internal
     */
    UpdateGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupInput = exports.UpdateGroupInput || (exports.UpdateGroupInput = {}));
var UpdateGroupOutput;
(function (UpdateGroupOutput) {
    /**
     * @internal
     */
    UpdateGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupOutput = exports.UpdateGroupOutput || (exports.UpdateGroupOutput = {}));
var UpdateGroupQueryInput;
(function (UpdateGroupQueryInput) {
    /**
     * @internal
     */
    UpdateGroupQueryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupQueryInput = exports.UpdateGroupQueryInput || (exports.UpdateGroupQueryInput = {}));
var UpdateGroupQueryOutput;
(function (UpdateGroupQueryOutput) {
    /**
     * @internal
     */
    UpdateGroupQueryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupQueryOutput = exports.UpdateGroupQueryOutput || (exports.UpdateGroupQueryOutput = {}));
//# sourceMappingURL=models_0.js.map