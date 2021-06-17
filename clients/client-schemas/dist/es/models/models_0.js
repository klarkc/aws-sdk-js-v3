import { __assign } from "tslib";
export var DiscovererState;
(function (DiscovererState) {
    DiscovererState["STARTED"] = "STARTED";
    DiscovererState["STOPPED"] = "STOPPED";
})(DiscovererState || (DiscovererState = {}));
export var DiscovererSummary;
(function (DiscovererSummary) {
    /**
     * @internal
     */
    DiscovererSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiscovererSummary || (DiscovererSummary = {}));
export var RegistrySummary;
(function (RegistrySummary) {
    /**
     * @internal
     */
    RegistrySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistrySummary || (RegistrySummary = {}));
export var SchemaSummary;
(function (SchemaSummary) {
    /**
     * @internal
     */
    SchemaSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaSummary || (SchemaSummary = {}));
export var Type;
(function (Type) {
    Type["JSONSchemaDraft4"] = "JSONSchemaDraft4";
    Type["OpenApi3"] = "OpenApi3";
})(Type || (Type = {}));
export var SchemaVersionSummary;
(function (SchemaVersionSummary) {
    /**
     * @internal
     */
    SchemaVersionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaVersionSummary || (SchemaVersionSummary = {}));
export var SearchSchemaVersionSummary;
(function (SearchSchemaVersionSummary) {
    /**
     * @internal
     */
    SearchSchemaVersionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchSchemaVersionSummary || (SearchSchemaVersionSummary = {}));
export var SearchSchemaSummary;
(function (SearchSchemaSummary) {
    /**
     * @internal
     */
    SearchSchemaSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchSchemaSummary || (SearchSchemaSummary = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var CodeGenerationStatus;
(function (CodeGenerationStatus) {
    CodeGenerationStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    CodeGenerationStatus["CREATE_FAILED"] = "CREATE_FAILED";
    CodeGenerationStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
})(CodeGenerationStatus || (CodeGenerationStatus = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CreateDiscovererRequest;
(function (CreateDiscovererRequest) {
    /**
     * @internal
     */
    CreateDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiscovererRequest || (CreateDiscovererRequest = {}));
export var CreateDiscovererResponse;
(function (CreateDiscovererResponse) {
    /**
     * @internal
     */
    CreateDiscovererResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiscovererResponse || (CreateDiscovererResponse = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedException || (UnauthorizedException = {}));
export var CreateRegistryRequest;
(function (CreateRegistryRequest) {
    /**
     * @internal
     */
    CreateRegistryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegistryRequest || (CreateRegistryRequest = {}));
export var CreateRegistryResponse;
(function (CreateRegistryResponse) {
    /**
     * @internal
     */
    CreateRegistryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegistryResponse || (CreateRegistryResponse = {}));
export var CreateSchemaRequest;
(function (CreateSchemaRequest) {
    /**
     * @internal
     */
    CreateSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSchemaRequest || (CreateSchemaRequest = {}));
export var CreateSchemaResponse;
(function (CreateSchemaResponse) {
    /**
     * @internal
     */
    CreateSchemaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSchemaResponse || (CreateSchemaResponse = {}));
export var DeleteDiscovererRequest;
(function (DeleteDiscovererRequest) {
    /**
     * @internal
     */
    DeleteDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDiscovererRequest || (DeleteDiscovererRequest = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DeleteRegistryRequest;
(function (DeleteRegistryRequest) {
    /**
     * @internal
     */
    DeleteRegistryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegistryRequest || (DeleteRegistryRequest = {}));
export var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyRequest || (DeleteResourcePolicyRequest = {}));
export var DeleteSchemaRequest;
(function (DeleteSchemaRequest) {
    /**
     * @internal
     */
    DeleteSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSchemaRequest || (DeleteSchemaRequest = {}));
export var DeleteSchemaVersionRequest;
(function (DeleteSchemaVersionRequest) {
    /**
     * @internal
     */
    DeleteSchemaVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSchemaVersionRequest || (DeleteSchemaVersionRequest = {}));
export var DescribeCodeBindingRequest;
(function (DescribeCodeBindingRequest) {
    /**
     * @internal
     */
    DescribeCodeBindingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeBindingRequest || (DescribeCodeBindingRequest = {}));
export var DescribeCodeBindingResponse;
(function (DescribeCodeBindingResponse) {
    /**
     * @internal
     */
    DescribeCodeBindingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeBindingResponse || (DescribeCodeBindingResponse = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var DescribeDiscovererRequest;
(function (DescribeDiscovererRequest) {
    /**
     * @internal
     */
    DescribeDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDiscovererRequest || (DescribeDiscovererRequest = {}));
export var DescribeDiscovererResponse;
(function (DescribeDiscovererResponse) {
    /**
     * @internal
     */
    DescribeDiscovererResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDiscovererResponse || (DescribeDiscovererResponse = {}));
export var DescribeRegistryRequest;
(function (DescribeRegistryRequest) {
    /**
     * @internal
     */
    DescribeRegistryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistryRequest || (DescribeRegistryRequest = {}));
export var DescribeRegistryResponse;
(function (DescribeRegistryResponse) {
    /**
     * @internal
     */
    DescribeRegistryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistryResponse || (DescribeRegistryResponse = {}));
export var DescribeSchemaRequest;
(function (DescribeSchemaRequest) {
    /**
     * @internal
     */
    DescribeSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSchemaRequest || (DescribeSchemaRequest = {}));
export var DescribeSchemaResponse;
(function (DescribeSchemaResponse) {
    /**
     * @internal
     */
    DescribeSchemaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSchemaResponse || (DescribeSchemaResponse = {}));
export var ExportSchemaRequest;
(function (ExportSchemaRequest) {
    /**
     * @internal
     */
    ExportSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSchemaRequest || (ExportSchemaRequest = {}));
export var ExportSchemaResponse;
(function (ExportSchemaResponse) {
    /**
     * @internal
     */
    ExportSchemaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSchemaResponse || (ExportSchemaResponse = {}));
export var GetCodeBindingSourceRequest;
(function (GetCodeBindingSourceRequest) {
    /**
     * @internal
     */
    GetCodeBindingSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCodeBindingSourceRequest || (GetCodeBindingSourceRequest = {}));
export var GetCodeBindingSourceResponse;
(function (GetCodeBindingSourceResponse) {
    /**
     * @internal
     */
    GetCodeBindingSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCodeBindingSourceResponse || (GetCodeBindingSourceResponse = {}));
export var GetDiscoveredSchemaRequest;
(function (GetDiscoveredSchemaRequest) {
    /**
     * @internal
     */
    GetDiscoveredSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiscoveredSchemaRequest || (GetDiscoveredSchemaRequest = {}));
export var GetDiscoveredSchemaResponse;
(function (GetDiscoveredSchemaResponse) {
    /**
     * @internal
     */
    GetDiscoveredSchemaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiscoveredSchemaResponse || (GetDiscoveredSchemaResponse = {}));
export var GetResourcePolicyRequest;
(function (GetResourcePolicyRequest) {
    /**
     * @internal
     */
    GetResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePolicyRequest || (GetResourcePolicyRequest = {}));
export var GetResourcePolicyResponse;
(function (GetResourcePolicyResponse) {
    /**
     * @internal
     */
    GetResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePolicyResponse || (GetResourcePolicyResponse = {}));
export var GoneException;
(function (GoneException) {
    /**
     * @internal
     */
    GoneException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GoneException || (GoneException = {}));
export var ListDiscoverersRequest;
(function (ListDiscoverersRequest) {
    /**
     * @internal
     */
    ListDiscoverersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDiscoverersRequest || (ListDiscoverersRequest = {}));
export var ListDiscoverersResponse;
(function (ListDiscoverersResponse) {
    /**
     * @internal
     */
    ListDiscoverersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDiscoverersResponse || (ListDiscoverersResponse = {}));
export var ListRegistriesRequest;
(function (ListRegistriesRequest) {
    /**
     * @internal
     */
    ListRegistriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegistriesRequest || (ListRegistriesRequest = {}));
export var ListRegistriesResponse;
(function (ListRegistriesResponse) {
    /**
     * @internal
     */
    ListRegistriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegistriesResponse || (ListRegistriesResponse = {}));
export var ListSchemasRequest;
(function (ListSchemasRequest) {
    /**
     * @internal
     */
    ListSchemasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemasRequest || (ListSchemasRequest = {}));
export var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemasResponse || (ListSchemasResponse = {}));
export var ListSchemaVersionsRequest;
(function (ListSchemaVersionsRequest) {
    /**
     * @internal
     */
    ListSchemaVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemaVersionsRequest || (ListSchemaVersionsRequest = {}));
export var ListSchemaVersionsResponse;
(function (ListSchemaVersionsResponse) {
    /**
     * @internal
     */
    ListSchemaVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSchemaVersionsResponse || (ListSchemaVersionsResponse = {}));
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
export var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreconditionFailedException || (PreconditionFailedException = {}));
export var PutCodeBindingRequest;
(function (PutCodeBindingRequest) {
    /**
     * @internal
     */
    PutCodeBindingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutCodeBindingRequest || (PutCodeBindingRequest = {}));
export var PutCodeBindingResponse;
(function (PutCodeBindingResponse) {
    /**
     * @internal
     */
    PutCodeBindingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutCodeBindingResponse || (PutCodeBindingResponse = {}));
export var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    /**
     * @internal
     */
    PutResourcePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyRequest || (PutResourcePolicyRequest = {}));
export var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    /**
     * @internal
     */
    PutResourcePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyResponse || (PutResourcePolicyResponse = {}));
export var SearchSchemasRequest;
(function (SearchSchemasRequest) {
    /**
     * @internal
     */
    SearchSchemasRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchSchemasRequest || (SearchSchemasRequest = {}));
export var SearchSchemasResponse;
(function (SearchSchemasResponse) {
    /**
     * @internal
     */
    SearchSchemasResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchSchemasResponse || (SearchSchemasResponse = {}));
export var StartDiscovererRequest;
(function (StartDiscovererRequest) {
    /**
     * @internal
     */
    StartDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDiscovererRequest || (StartDiscovererRequest = {}));
export var StartDiscovererResponse;
(function (StartDiscovererResponse) {
    /**
     * @internal
     */
    StartDiscovererResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDiscovererResponse || (StartDiscovererResponse = {}));
export var StopDiscovererRequest;
(function (StopDiscovererRequest) {
    /**
     * @internal
     */
    StopDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopDiscovererRequest || (StopDiscovererRequest = {}));
export var StopDiscovererResponse;
(function (StopDiscovererResponse) {
    /**
     * @internal
     */
    StopDiscovererResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopDiscovererResponse || (StopDiscovererResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateDiscovererRequest;
(function (UpdateDiscovererRequest) {
    /**
     * @internal
     */
    UpdateDiscovererRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDiscovererRequest || (UpdateDiscovererRequest = {}));
export var UpdateDiscovererResponse;
(function (UpdateDiscovererResponse) {
    /**
     * @internal
     */
    UpdateDiscovererResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDiscovererResponse || (UpdateDiscovererResponse = {}));
export var UpdateRegistryRequest;
(function (UpdateRegistryRequest) {
    /**
     * @internal
     */
    UpdateRegistryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegistryRequest || (UpdateRegistryRequest = {}));
export var UpdateRegistryResponse;
(function (UpdateRegistryResponse) {
    /**
     * @internal
     */
    UpdateRegistryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegistryResponse || (UpdateRegistryResponse = {}));
export var UpdateSchemaRequest;
(function (UpdateSchemaRequest) {
    /**
     * @internal
     */
    UpdateSchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSchemaRequest || (UpdateSchemaRequest = {}));
export var UpdateSchemaResponse;
(function (UpdateSchemaResponse) {
    /**
     * @internal
     */
    UpdateSchemaResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSchemaResponse || (UpdateSchemaResponse = {}));
//# sourceMappingURL=models_0.js.map