"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.UpdatePlacementResponse = exports.UpdatePlacementRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProjectsResponse = exports.ProjectSummary = exports.ListProjectsRequest = exports.ListPlacementsResponse = exports.PlacementSummary = exports.ListPlacementsRequest = exports.GetDevicesInPlacementResponse = exports.GetDevicesInPlacementRequest = exports.DisassociateDeviceFromPlacementResponse = exports.DisassociateDeviceFromPlacementRequest = exports.DescribeProjectResponse = exports.ProjectDescription = exports.DescribeProjectRequest = exports.DescribePlacementResponse = exports.PlacementDescription = exports.DescribePlacementRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.TooManyRequestsException = exports.DeletePlacementResponse = exports.DeletePlacementRequest = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.PlacementTemplate = exports.DeviceTemplate = exports.CreatePlacementResponse = exports.CreatePlacementRequest = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.InvalidRequestException = exports.InternalFailureException = exports.AssociateDeviceWithPlacementResponse = exports.AssociateDeviceWithPlacementRequest = void 0;
var AssociateDeviceWithPlacementRequest;
(function (AssociateDeviceWithPlacementRequest) {
    /**
     * @internal
     */
    AssociateDeviceWithPlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDeviceWithPlacementRequest = exports.AssociateDeviceWithPlacementRequest || (exports.AssociateDeviceWithPlacementRequest = {}));
var AssociateDeviceWithPlacementResponse;
(function (AssociateDeviceWithPlacementResponse) {
    /**
     * @internal
     */
    AssociateDeviceWithPlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDeviceWithPlacementResponse = exports.AssociateDeviceWithPlacementResponse || (exports.AssociateDeviceWithPlacementResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var CreatePlacementRequest;
(function (CreatePlacementRequest) {
    /**
     * @internal
     */
    CreatePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlacementRequest = exports.CreatePlacementRequest || (exports.CreatePlacementRequest = {}));
var CreatePlacementResponse;
(function (CreatePlacementResponse) {
    /**
     * @internal
     */
    CreatePlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlacementResponse = exports.CreatePlacementResponse || (exports.CreatePlacementResponse = {}));
var DeviceTemplate;
(function (DeviceTemplate) {
    /**
     * @internal
     */
    DeviceTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceTemplate = exports.DeviceTemplate || (exports.DeviceTemplate = {}));
var PlacementTemplate;
(function (PlacementTemplate) {
    /**
     * @internal
     */
    PlacementTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementTemplate = exports.PlacementTemplate || (exports.PlacementTemplate = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var DeletePlacementRequest;
(function (DeletePlacementRequest) {
    /**
     * @internal
     */
    DeletePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlacementRequest = exports.DeletePlacementRequest || (exports.DeletePlacementRequest = {}));
var DeletePlacementResponse;
(function (DeletePlacementResponse) {
    /**
     * @internal
     */
    DeletePlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlacementResponse = exports.DeletePlacementResponse || (exports.DeletePlacementResponse = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResponse = exports.DeleteProjectResponse || (exports.DeleteProjectResponse = {}));
var DescribePlacementRequest;
(function (DescribePlacementRequest) {
    /**
     * @internal
     */
    DescribePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlacementRequest = exports.DescribePlacementRequest || (exports.DescribePlacementRequest = {}));
var PlacementDescription;
(function (PlacementDescription) {
    /**
     * @internal
     */
    PlacementDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementDescription = exports.PlacementDescription || (exports.PlacementDescription = {}));
var DescribePlacementResponse;
(function (DescribePlacementResponse) {
    /**
     * @internal
     */
    DescribePlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlacementResponse = exports.DescribePlacementResponse || (exports.DescribePlacementResponse = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var ProjectDescription;
(function (ProjectDescription) {
    /**
     * @internal
     */
    ProjectDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectDescription = exports.ProjectDescription || (exports.ProjectDescription = {}));
var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectResponse = exports.DescribeProjectResponse || (exports.DescribeProjectResponse = {}));
var DisassociateDeviceFromPlacementRequest;
(function (DisassociateDeviceFromPlacementRequest) {
    /**
     * @internal
     */
    DisassociateDeviceFromPlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDeviceFromPlacementRequest = exports.DisassociateDeviceFromPlacementRequest || (exports.DisassociateDeviceFromPlacementRequest = {}));
var DisassociateDeviceFromPlacementResponse;
(function (DisassociateDeviceFromPlacementResponse) {
    /**
     * @internal
     */
    DisassociateDeviceFromPlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDeviceFromPlacementResponse = exports.DisassociateDeviceFromPlacementResponse || (exports.DisassociateDeviceFromPlacementResponse = {}));
var GetDevicesInPlacementRequest;
(function (GetDevicesInPlacementRequest) {
    /**
     * @internal
     */
    GetDevicesInPlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicesInPlacementRequest = exports.GetDevicesInPlacementRequest || (exports.GetDevicesInPlacementRequest = {}));
var GetDevicesInPlacementResponse;
(function (GetDevicesInPlacementResponse) {
    /**
     * @internal
     */
    GetDevicesInPlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicesInPlacementResponse = exports.GetDevicesInPlacementResponse || (exports.GetDevicesInPlacementResponse = {}));
var ListPlacementsRequest;
(function (ListPlacementsRequest) {
    /**
     * @internal
     */
    ListPlacementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlacementsRequest = exports.ListPlacementsRequest || (exports.ListPlacementsRequest = {}));
var PlacementSummary;
(function (PlacementSummary) {
    /**
     * @internal
     */
    PlacementSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementSummary = exports.PlacementSummary || (exports.PlacementSummary = {}));
var ListPlacementsResponse;
(function (ListPlacementsResponse) {
    /**
     * @internal
     */
    ListPlacementsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlacementsResponse = exports.ListPlacementsResponse || (exports.ListPlacementsResponse = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSummary = exports.ProjectSummary || (exports.ProjectSummary = {}));
var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResponse = exports.ListProjectsResponse || (exports.ListProjectsResponse = {}));
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
var UpdatePlacementRequest;
(function (UpdatePlacementRequest) {
    /**
     * @internal
     */
    UpdatePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePlacementRequest = exports.UpdatePlacementRequest || (exports.UpdatePlacementRequest = {}));
var UpdatePlacementResponse;
(function (UpdatePlacementResponse) {
    /**
     * @internal
     */
    UpdatePlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePlacementResponse = exports.UpdatePlacementResponse || (exports.UpdatePlacementResponse = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResponse;
(function (UpdateProjectResponse) {
    /**
     * @internal
     */
    UpdateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResponse = exports.UpdateProjectResponse || (exports.UpdateProjectResponse = {}));
//# sourceMappingURL=models_0.js.map