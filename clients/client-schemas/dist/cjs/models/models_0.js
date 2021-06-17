"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchemasRequest = exports.ListRegistriesResponse = exports.ListRegistriesRequest = exports.ListDiscoverersResponse = exports.ListDiscoverersRequest = exports.GoneException = exports.GetResourcePolicyResponse = exports.GetResourcePolicyRequest = exports.GetDiscoveredSchemaResponse = exports.GetDiscoveredSchemaRequest = exports.GetCodeBindingSourceResponse = exports.GetCodeBindingSourceRequest = exports.ExportSchemaResponse = exports.ExportSchemaRequest = exports.DescribeSchemaResponse = exports.DescribeSchemaRequest = exports.DescribeRegistryResponse = exports.DescribeRegistryRequest = exports.DescribeDiscovererResponse = exports.DescribeDiscovererRequest = exports.TooManyRequestsException = exports.DescribeCodeBindingResponse = exports.DescribeCodeBindingRequest = exports.DeleteSchemaVersionRequest = exports.DeleteSchemaRequest = exports.DeleteResourcePolicyRequest = exports.DeleteRegistryRequest = exports.NotFoundException = exports.DeleteDiscovererRequest = exports.CreateSchemaResponse = exports.CreateSchemaRequest = exports.CreateRegistryResponse = exports.CreateRegistryRequest = exports.UnauthorizedException = exports.ServiceUnavailableException = exports.InternalServerErrorException = exports.ForbiddenException = exports.CreateDiscovererResponse = exports.CreateDiscovererRequest = exports.ConflictException = exports.CodeGenerationStatus = exports.BadRequestException = exports.SearchSchemaSummary = exports.SearchSchemaVersionSummary = exports.SchemaVersionSummary = exports.Type = exports.SchemaSummary = exports.RegistrySummary = exports.DiscovererSummary = exports.DiscovererState = void 0;
exports.UpdateSchemaResponse = exports.UpdateSchemaRequest = exports.UpdateRegistryResponse = exports.UpdateRegistryRequest = exports.UpdateDiscovererResponse = exports.UpdateDiscovererRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.StopDiscovererResponse = exports.StopDiscovererRequest = exports.StartDiscovererResponse = exports.StartDiscovererRequest = exports.SearchSchemasResponse = exports.SearchSchemasRequest = exports.PutResourcePolicyResponse = exports.PutResourcePolicyRequest = exports.PutCodeBindingResponse = exports.PutCodeBindingRequest = exports.PreconditionFailedException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSchemaVersionsResponse = exports.ListSchemaVersionsRequest = exports.ListSchemasResponse = void 0;
var DiscovererState;
(function (DiscovererState) {
    DiscovererState["STARTED"] = "STARTED";
    DiscovererState["STOPPED"] = "STOPPED";
})(DiscovererState = exports.DiscovererState || (exports.DiscovererState = {}));
var DiscovererSummary;
(function (DiscovererSummary) {
    /**
     * @internal
     */
    DiscovererSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscovererSummary = exports.DiscovererSummary || (exports.DiscovererSummary = {}));
var RegistrySummary;
(function (RegistrySummary) {
    /**
     * @internal
     */
    RegistrySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistrySummary = exports.RegistrySummary || (exports.RegistrySummary = {}));
var SchemaSummary;
(function (SchemaSummary) {
    /**
     * @internal
     */
    SchemaSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaSummary = exports.SchemaSummary || (exports.SchemaSummary = {}));
var Type;
(function (Type) {
    Type["JSONSchemaDraft4"] = "JSONSchemaDraft4";
    Type["OpenApi3"] = "OpenApi3";
})(Type = exports.Type || (exports.Type = {}));
var SchemaVersionSummary;
(function (SchemaVersionSummary) {
    /**
     * @internal
     */
    SchemaVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaVersionSummary = exports.SchemaVersionSummary || (exports.SchemaVersionSummary = {}));
var SearchSchemaVersionSummary;
(function (SearchSchemaVersionSummary) {
    /**
     * @internal
     */
    SearchSchemaVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSchemaVersionSummary = exports.SearchSchemaVersionSummary || (exports.SearchSchemaVersionSummary = {}));
var SearchSchemaSummary;
(function (SearchSchemaSummary) {
    /**
     * @internal
     */
    SearchSchemaSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSchemaSummary = exports.SearchSchemaSummary || (exports.SearchSchemaSummary = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CodeGenerationStatus;
(function (CodeGenerationStatus) {
    CodeGenerationStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    CodeGenerationStatus["CREATE_FAILED"] = "CREATE_FAILED";
    CodeGenerationStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
})(CodeGenerationStatus = exports.CodeGenerationStatus || (exports.CodeGenerationStatus = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateDiscovererRequest;
(function (CreateDiscovererRequest) {
    /**
     * @internal
     */
    CreateDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiscovererRequest = exports.CreateDiscovererRequest || (exports.CreateDiscovererRequest = {}));
var CreateDiscovererResponse;
(function (CreateDiscovererResponse) {
    /**
     * @internal
     */
    CreateDiscovererResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiscovererResponse = exports.CreateDiscovererResponse || (exports.CreateDiscovererResponse = {}));
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
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var CreateRegistryRequest;
(function (CreateRegistryRequest) {
    /**
     * @internal
     */
    CreateRegistryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegistryRequest = exports.CreateRegistryRequest || (exports.CreateRegistryRequest = {}));
var CreateRegistryResponse;
(function (CreateRegistryResponse) {
    /**
     * @internal
     */
    CreateRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegistryResponse = exports.CreateRegistryResponse || (exports.CreateRegistryResponse = {}));
var CreateSchemaRequest;
(function (CreateSchemaRequest) {
    /**
     * @internal
     */
    CreateSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaRequest = exports.CreateSchemaRequest || (exports.CreateSchemaRequest = {}));
var CreateSchemaResponse;
(function (CreateSchemaResponse) {
    /**
     * @internal
     */
    CreateSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaResponse = exports.CreateSchemaResponse || (exports.CreateSchemaResponse = {}));
var DeleteDiscovererRequest;
(function (DeleteDiscovererRequest) {
    /**
     * @internal
     */
    DeleteDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDiscovererRequest = exports.DeleteDiscovererRequest || (exports.DeleteDiscovererRequest = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DeleteRegistryRequest;
(function (DeleteRegistryRequest) {
    /**
     * @internal
     */
    DeleteRegistryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistryRequest = exports.DeleteRegistryRequest || (exports.DeleteRegistryRequest = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteSchemaRequest;
(function (DeleteSchemaRequest) {
    /**
     * @internal
     */
    DeleteSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaRequest = exports.DeleteSchemaRequest || (exports.DeleteSchemaRequest = {}));
var DeleteSchemaVersionRequest;
(function (DeleteSchemaVersionRequest) {
    /**
     * @internal
     */
    DeleteSchemaVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaVersionRequest = exports.DeleteSchemaVersionRequest || (exports.DeleteSchemaVersionRequest = {}));
var DescribeCodeBindingRequest;
(function (DescribeCodeBindingRequest) {
    /**
     * @internal
     */
    DescribeCodeBindingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeBindingRequest = exports.DescribeCodeBindingRequest || (exports.DescribeCodeBindingRequest = {}));
var DescribeCodeBindingResponse;
(function (DescribeCodeBindingResponse) {
    /**
     * @internal
     */
    DescribeCodeBindingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeBindingResponse = exports.DescribeCodeBindingResponse || (exports.DescribeCodeBindingResponse = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DescribeDiscovererRequest;
(function (DescribeDiscovererRequest) {
    /**
     * @internal
     */
    DescribeDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDiscovererRequest = exports.DescribeDiscovererRequest || (exports.DescribeDiscovererRequest = {}));
var DescribeDiscovererResponse;
(function (DescribeDiscovererResponse) {
    /**
     * @internal
     */
    DescribeDiscovererResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDiscovererResponse = exports.DescribeDiscovererResponse || (exports.DescribeDiscovererResponse = {}));
var DescribeRegistryRequest;
(function (DescribeRegistryRequest) {
    /**
     * @internal
     */
    DescribeRegistryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistryRequest = exports.DescribeRegistryRequest || (exports.DescribeRegistryRequest = {}));
var DescribeRegistryResponse;
(function (DescribeRegistryResponse) {
    /**
     * @internal
     */
    DescribeRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistryResponse = exports.DescribeRegistryResponse || (exports.DescribeRegistryResponse = {}));
var DescribeSchemaRequest;
(function (DescribeSchemaRequest) {
    /**
     * @internal
     */
    DescribeSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemaRequest = exports.DescribeSchemaRequest || (exports.DescribeSchemaRequest = {}));
var DescribeSchemaResponse;
(function (DescribeSchemaResponse) {
    /**
     * @internal
     */
    DescribeSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemaResponse = exports.DescribeSchemaResponse || (exports.DescribeSchemaResponse = {}));
var ExportSchemaRequest;
(function (ExportSchemaRequest) {
    /**
     * @internal
     */
    ExportSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSchemaRequest = exports.ExportSchemaRequest || (exports.ExportSchemaRequest = {}));
var ExportSchemaResponse;
(function (ExportSchemaResponse) {
    /**
     * @internal
     */
    ExportSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSchemaResponse = exports.ExportSchemaResponse || (exports.ExportSchemaResponse = {}));
var GetCodeBindingSourceRequest;
(function (GetCodeBindingSourceRequest) {
    /**
     * @internal
     */
    GetCodeBindingSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCodeBindingSourceRequest = exports.GetCodeBindingSourceRequest || (exports.GetCodeBindingSourceRequest = {}));
var GetCodeBindingSourceResponse;
(function (GetCodeBindingSourceResponse) {
    /**
     * @internal
     */
    GetCodeBindingSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCodeBindingSourceResponse = exports.GetCodeBindingSourceResponse || (exports.GetCodeBindingSourceResponse = {}));
var GetDiscoveredSchemaRequest;
(function (GetDiscoveredSchemaRequest) {
    /**
     * @internal
     */
    GetDiscoveredSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiscoveredSchemaRequest = exports.GetDiscoveredSchemaRequest || (exports.GetDiscoveredSchemaRequest = {}));
var GetDiscoveredSchemaResponse;
(function (GetDiscoveredSchemaResponse) {
    /**
     * @internal
     */
    GetDiscoveredSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiscoveredSchemaResponse = exports.GetDiscoveredSchemaResponse || (exports.GetDiscoveredSchemaResponse = {}));
var GetResourcePolicyRequest;
(function (GetResourcePolicyRequest) {
    /**
     * @internal
     */
    GetResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyRequest = exports.GetResourcePolicyRequest || (exports.GetResourcePolicyRequest = {}));
var GetResourcePolicyResponse;
(function (GetResourcePolicyResponse) {
    /**
     * @internal
     */
    GetResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyResponse = exports.GetResourcePolicyResponse || (exports.GetResourcePolicyResponse = {}));
var GoneException;
(function (GoneException) {
    /**
     * @internal
     */
    GoneException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GoneException = exports.GoneException || (exports.GoneException = {}));
var ListDiscoverersRequest;
(function (ListDiscoverersRequest) {
    /**
     * @internal
     */
    ListDiscoverersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoverersRequest = exports.ListDiscoverersRequest || (exports.ListDiscoverersRequest = {}));
var ListDiscoverersResponse;
(function (ListDiscoverersResponse) {
    /**
     * @internal
     */
    ListDiscoverersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDiscoverersResponse = exports.ListDiscoverersResponse || (exports.ListDiscoverersResponse = {}));
var ListRegistriesRequest;
(function (ListRegistriesRequest) {
    /**
     * @internal
     */
    ListRegistriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegistriesRequest = exports.ListRegistriesRequest || (exports.ListRegistriesRequest = {}));
var ListRegistriesResponse;
(function (ListRegistriesResponse) {
    /**
     * @internal
     */
    ListRegistriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegistriesResponse = exports.ListRegistriesResponse || (exports.ListRegistriesResponse = {}));
var ListSchemasRequest;
(function (ListSchemasRequest) {
    /**
     * @internal
     */
    ListSchemasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasRequest = exports.ListSchemasRequest || (exports.ListSchemasRequest = {}));
var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasResponse = exports.ListSchemasResponse || (exports.ListSchemasResponse = {}));
var ListSchemaVersionsRequest;
(function (ListSchemaVersionsRequest) {
    /**
     * @internal
     */
    ListSchemaVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaVersionsRequest = exports.ListSchemaVersionsRequest || (exports.ListSchemaVersionsRequest = {}));
var ListSchemaVersionsResponse;
(function (ListSchemaVersionsResponse) {
    /**
     * @internal
     */
    ListSchemaVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaVersionsResponse = exports.ListSchemaVersionsResponse || (exports.ListSchemaVersionsResponse = {}));
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
var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionFailedException = exports.PreconditionFailedException || (exports.PreconditionFailedException = {}));
var PutCodeBindingRequest;
(function (PutCodeBindingRequest) {
    /**
     * @internal
     */
    PutCodeBindingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCodeBindingRequest = exports.PutCodeBindingRequest || (exports.PutCodeBindingRequest = {}));
var PutCodeBindingResponse;
(function (PutCodeBindingResponse) {
    /**
     * @internal
     */
    PutCodeBindingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCodeBindingResponse = exports.PutCodeBindingResponse || (exports.PutCodeBindingResponse = {}));
var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    /**
     * @internal
     */
    PutResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyRequest = exports.PutResourcePolicyRequest || (exports.PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    /**
     * @internal
     */
    PutResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyResponse = exports.PutResourcePolicyResponse || (exports.PutResourcePolicyResponse = {}));
var SearchSchemasRequest;
(function (SearchSchemasRequest) {
    /**
     * @internal
     */
    SearchSchemasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSchemasRequest = exports.SearchSchemasRequest || (exports.SearchSchemasRequest = {}));
var SearchSchemasResponse;
(function (SearchSchemasResponse) {
    /**
     * @internal
     */
    SearchSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchSchemasResponse = exports.SearchSchemasResponse || (exports.SearchSchemasResponse = {}));
var StartDiscovererRequest;
(function (StartDiscovererRequest) {
    /**
     * @internal
     */
    StartDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDiscovererRequest = exports.StartDiscovererRequest || (exports.StartDiscovererRequest = {}));
var StartDiscovererResponse;
(function (StartDiscovererResponse) {
    /**
     * @internal
     */
    StartDiscovererResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDiscovererResponse = exports.StartDiscovererResponse || (exports.StartDiscovererResponse = {}));
var StopDiscovererRequest;
(function (StopDiscovererRequest) {
    /**
     * @internal
     */
    StopDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDiscovererRequest = exports.StopDiscovererRequest || (exports.StopDiscovererRequest = {}));
var StopDiscovererResponse;
(function (StopDiscovererResponse) {
    /**
     * @internal
     */
    StopDiscovererResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopDiscovererResponse = exports.StopDiscovererResponse || (exports.StopDiscovererResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateDiscovererRequest;
(function (UpdateDiscovererRequest) {
    /**
     * @internal
     */
    UpdateDiscovererRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDiscovererRequest = exports.UpdateDiscovererRequest || (exports.UpdateDiscovererRequest = {}));
var UpdateDiscovererResponse;
(function (UpdateDiscovererResponse) {
    /**
     * @internal
     */
    UpdateDiscovererResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDiscovererResponse = exports.UpdateDiscovererResponse || (exports.UpdateDiscovererResponse = {}));
var UpdateRegistryRequest;
(function (UpdateRegistryRequest) {
    /**
     * @internal
     */
    UpdateRegistryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegistryRequest = exports.UpdateRegistryRequest || (exports.UpdateRegistryRequest = {}));
var UpdateRegistryResponse;
(function (UpdateRegistryResponse) {
    /**
     * @internal
     */
    UpdateRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegistryResponse = exports.UpdateRegistryResponse || (exports.UpdateRegistryResponse = {}));
var UpdateSchemaRequest;
(function (UpdateSchemaRequest) {
    /**
     * @internal
     */
    UpdateSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSchemaRequest = exports.UpdateSchemaRequest || (exports.UpdateSchemaRequest = {}));
var UpdateSchemaResponse;
(function (UpdateSchemaResponse) {
    /**
     * @internal
     */
    UpdateSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSchemaResponse = exports.UpdateSchemaResponse || (exports.UpdateSchemaResponse = {}));
//# sourceMappingURL=models_0.js.map