"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersResponse = exports.User = exports.ListUsersRequest = exports.ListGroupsResponse = exports.Group = exports.ListGroupsRequest = exports.Filter = exports.DescribeUserResponse = exports.DescribeUserRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.ResourceType = exports.InternalServerException = exports.DescribeGroupResponse = exports.DescribeGroupRequest = exports.AccessDeniedException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var DescribeGroupRequest;
(function (DescribeGroupRequest) {
    /**
     * @internal
     */
    DescribeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupRequest = exports.DescribeGroupRequest || (exports.DescribeGroupRequest = {}));
var DescribeGroupResponse;
(function (DescribeGroupResponse) {
    /**
     * @internal
     */
    DescribeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupResponse = exports.DescribeGroupResponse || (exports.DescribeGroupResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["GROUP"] = "GROUP";
    ResourceType["IDENTITY_STORE"] = "IDENTITY_STORE";
    ResourceType["USER"] = "USER";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
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
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AttributeValue && { AttributeValue: smithy_client_1.SENSITIVE_STRING }),
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filters && { Filters: obj.Filters.map((item) => Filter.filterSensitiveLog(item)) }),
    });
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filters && { Filters: obj.Filters.map((item) => Filter.filterSensitiveLog(item)) }),
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
    });
})(User = exports.User || (exports.User = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
//# sourceMappingURL=models_0.js.map