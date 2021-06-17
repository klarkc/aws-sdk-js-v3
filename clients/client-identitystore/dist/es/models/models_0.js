import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var DescribeGroupRequest;
(function (DescribeGroupRequest) {
    /**
     * @internal
     */
    DescribeGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGroupRequest || (DescribeGroupRequest = {}));
export var DescribeGroupResponse;
(function (DescribeGroupResponse) {
    /**
     * @internal
     */
    DescribeGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGroupResponse || (DescribeGroupResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["GROUP"] = "GROUP";
    ResourceType["IDENTITY_STORE"] = "IDENTITY_STORE";
    ResourceType["USER"] = "USER";
})(ResourceType || (ResourceType = {}));
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
export var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserRequest || (DescribeUserRequest = {}));
export var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserName && { UserName: SENSITIVE_STRING }))); };
})(DescribeUserResponse || (DescribeUserResponse = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AttributeValue && { AttributeValue: SENSITIVE_STRING }))); };
})(Filter || (Filter = {}));
export var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filters && { Filters: obj.Filters.map(function (item) { return Filter.filterSensitiveLog(item); }) }))); };
})(ListGroupsRequest || (ListGroupsRequest = {}));
export var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Group || (Group = {}));
export var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsResponse || (ListGroupsResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filters && { Filters: obj.Filters.map(function (item) { return Filter.filterSensitiveLog(item); }) }))); };
})(ListUsersRequest || (ListUsersRequest = {}));
export var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserName && { UserName: SENSITIVE_STRING }))); };
})(User || (User = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Users && { Users: obj.Users.map(function (item) { return User.filterSensitiveLog(item); }) }))); };
})(ListUsersResponse || (ListUsersResponse = {}));
//# sourceMappingURL=models_0.js.map