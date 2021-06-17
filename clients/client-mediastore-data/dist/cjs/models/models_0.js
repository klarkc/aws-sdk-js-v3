"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutObjectResponse = exports.PutObjectRequest = exports.UploadAvailability = exports.StorageClass = exports.ListItemsResponse = exports.ListItemsRequest = exports.Item = exports.ItemType = exports.RequestedRangeNotSatisfiableException = exports.GetObjectResponse = exports.GetObjectRequest = exports.DescribeObjectResponse = exports.DescribeObjectRequest = exports.ObjectNotFoundException = exports.InternalServerError = exports.DeleteObjectResponse = exports.DeleteObjectRequest = exports.ContainerNotFoundException = void 0;
var ContainerNotFoundException;
(function (ContainerNotFoundException) {
    /**
     * @internal
     */
    ContainerNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerNotFoundException = exports.ContainerNotFoundException || (exports.ContainerNotFoundException = {}));
var DeleteObjectRequest;
(function (DeleteObjectRequest) {
    /**
     * @internal
     */
    DeleteObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectRequest = exports.DeleteObjectRequest || (exports.DeleteObjectRequest = {}));
var DeleteObjectResponse;
(function (DeleteObjectResponse) {
    /**
     * @internal
     */
    DeleteObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectResponse = exports.DeleteObjectResponse || (exports.DeleteObjectResponse = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var ObjectNotFoundException;
(function (ObjectNotFoundException) {
    /**
     * @internal
     */
    ObjectNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectNotFoundException = exports.ObjectNotFoundException || (exports.ObjectNotFoundException = {}));
var DescribeObjectRequest;
(function (DescribeObjectRequest) {
    /**
     * @internal
     */
    DescribeObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeObjectRequest = exports.DescribeObjectRequest || (exports.DescribeObjectRequest = {}));
var DescribeObjectResponse;
(function (DescribeObjectResponse) {
    /**
     * @internal
     */
    DescribeObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeObjectResponse = exports.DescribeObjectResponse || (exports.DescribeObjectResponse = {}));
var GetObjectRequest;
(function (GetObjectRequest) {
    /**
     * @internal
     */
    GetObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectRequest = exports.GetObjectRequest || (exports.GetObjectRequest = {}));
var GetObjectResponse;
(function (GetObjectResponse) {
    /**
     * @internal
     */
    GetObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectResponse = exports.GetObjectResponse || (exports.GetObjectResponse = {}));
var RequestedRangeNotSatisfiableException;
(function (RequestedRangeNotSatisfiableException) {
    /**
     * @internal
     */
    RequestedRangeNotSatisfiableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestedRangeNotSatisfiableException = exports.RequestedRangeNotSatisfiableException || (exports.RequestedRangeNotSatisfiableException = {}));
var ItemType;
(function (ItemType) {
    ItemType["FOLDER"] = "FOLDER";
    ItemType["OBJECT"] = "OBJECT";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Item;
(function (Item) {
    /**
     * @internal
     */
    Item.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Item = exports.Item || (exports.Item = {}));
var ListItemsRequest;
(function (ListItemsRequest) {
    /**
     * @internal
     */
    ListItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListItemsRequest = exports.ListItemsRequest || (exports.ListItemsRequest = {}));
var ListItemsResponse;
(function (ListItemsResponse) {
    /**
     * @internal
     */
    ListItemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListItemsResponse = exports.ListItemsResponse || (exports.ListItemsResponse = {}));
var StorageClass;
(function (StorageClass) {
    StorageClass["TEMPORAL"] = "TEMPORAL";
})(StorageClass = exports.StorageClass || (exports.StorageClass = {}));
var UploadAvailability;
(function (UploadAvailability) {
    UploadAvailability["STANDARD"] = "STANDARD";
    UploadAvailability["STREAMING"] = "STREAMING";
})(UploadAvailability = exports.UploadAvailability || (exports.UploadAvailability = {}));
var PutObjectRequest;
(function (PutObjectRequest) {
    /**
     * @internal
     */
    PutObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectRequest = exports.PutObjectRequest || (exports.PutObjectRequest = {}));
var PutObjectResponse;
(function (PutObjectResponse) {
    /**
     * @internal
     */
    PutObjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectResponse = exports.PutObjectResponse || (exports.PutObjectResponse = {}));
//# sourceMappingURL=models_0.js.map