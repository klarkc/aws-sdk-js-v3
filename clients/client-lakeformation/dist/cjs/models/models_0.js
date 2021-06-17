"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEffectivePermissionsForPathResponse = exports.PrincipalResourcePermissions = exports.DetailsMap = exports.GetEffectivePermissionsForPathRequest = exports.GetDataLakeSettingsResponse = exports.DataLakeSettings = exports.PrincipalPermissions = exports.GetDataLakeSettingsRequest = exports.DescribeResourceResponse = exports.ResourceInfo = exports.DescribeResourceRequest = exports.DeregisterResourceResponse = exports.DeregisterResourceRequest = exports.DeleteLFTagResponse = exports.DeleteLFTagRequest = exports.ResourceNumberLimitExceededException = exports.CreateLFTagResponse = exports.CreateLFTagRequest = exports.BatchRevokePermissionsResponse = exports.BatchRevokePermissionsRequest = exports.BatchGrantPermissionsResponse = exports.BatchPermissionsFailureEntry = exports.BatchGrantPermissionsRequest = exports.BatchPermissionsRequestEntry = exports.DataLakePrincipal = exports.Permission = exports.AlreadyExistsException = exports.OperationTimeoutException = exports.InvalidInputException = exports.InternalServiceException = exports.EntityNotFoundException = exports.ConcurrentModificationException = exports.AddLFTagsToResourceResponse = exports.LFTagError = exports.ErrorDetail = exports.AddLFTagsToResourceRequest = exports.Resource = exports.TableWithColumnsResource = exports.ColumnWildcard = exports.TableResource = exports.TableWildcard = exports.LFTagPolicyResource = exports.ResourceType = exports.LFTag = exports.LFTagKeyResource = exports.DataLocationResource = exports.DatabaseResource = exports.CatalogResource = exports.LFTagPair = exports.AccessDeniedException = void 0;
exports.UpdateResourceResponse = exports.UpdateResourceRequest = exports.UpdateLFTagResponse = exports.UpdateLFTagRequest = exports.SearchTablesByLFTagsResponse = exports.TaggedTable = exports.SearchTablesByLFTagsRequest = exports.SearchDatabasesByLFTagsResponse = exports.TaggedDatabase = exports.SearchDatabasesByLFTagsRequest = exports.RevokePermissionsResponse = exports.RevokePermissionsRequest = exports.RemoveLFTagsFromResourceResponse = exports.RemoveLFTagsFromResourceRequest = exports.RegisterResourceResponse = exports.RegisterResourceRequest = exports.PutDataLakeSettingsResponse = exports.PutDataLakeSettingsRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.FilterCondition = exports.FieldNameString = exports.ComparisonOperator = exports.ListPermissionsResponse = exports.ListPermissionsRequest = exports.DataLakeResourceType = exports.ListLFTagsResponse = exports.ListLFTagsRequest = exports.ResourceShareType = exports.GrantPermissionsResponse = exports.GrantPermissionsRequest = exports.GlueEncryptionException = exports.GetResourceLFTagsResponse = exports.ColumnLFTag = exports.GetResourceLFTagsRequest = exports.GetLFTagResponse = exports.GetLFTagRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var LFTagPair;
(function (LFTagPair) {
    /**
     * @internal
     */
    LFTagPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LFTagPair = exports.LFTagPair || (exports.LFTagPair = {}));
var CatalogResource;
(function (CatalogResource) {
    /**
     * @internal
     */
    CatalogResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogResource = exports.CatalogResource || (exports.CatalogResource = {}));
var DatabaseResource;
(function (DatabaseResource) {
    /**
     * @internal
     */
    DatabaseResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatabaseResource = exports.DatabaseResource || (exports.DatabaseResource = {}));
var DataLocationResource;
(function (DataLocationResource) {
    /**
     * @internal
     */
    DataLocationResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataLocationResource = exports.DataLocationResource || (exports.DataLocationResource = {}));
var LFTagKeyResource;
(function (LFTagKeyResource) {
    /**
     * @internal
     */
    LFTagKeyResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LFTagKeyResource = exports.LFTagKeyResource || (exports.LFTagKeyResource = {}));
var LFTag;
(function (LFTag) {
    /**
     * @internal
     */
    LFTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LFTag = exports.LFTag || (exports.LFTag = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["DATABASE"] = "DATABASE";
    ResourceType["TABLE"] = "TABLE";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var LFTagPolicyResource;
(function (LFTagPolicyResource) {
    /**
     * @internal
     */
    LFTagPolicyResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LFTagPolicyResource = exports.LFTagPolicyResource || (exports.LFTagPolicyResource = {}));
var TableWildcard;
(function (TableWildcard) {
    /**
     * @internal
     */
    TableWildcard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableWildcard = exports.TableWildcard || (exports.TableWildcard = {}));
var TableResource;
(function (TableResource) {
    /**
     * @internal
     */
    TableResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableResource = exports.TableResource || (exports.TableResource = {}));
var ColumnWildcard;
(function (ColumnWildcard) {
    /**
     * @internal
     */
    ColumnWildcard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnWildcard = exports.ColumnWildcard || (exports.ColumnWildcard = {}));
var TableWithColumnsResource;
(function (TableWithColumnsResource) {
    /**
     * @internal
     */
    TableWithColumnsResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableWithColumnsResource = exports.TableWithColumnsResource || (exports.TableWithColumnsResource = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var AddLFTagsToResourceRequest;
(function (AddLFTagsToResourceRequest) {
    /**
     * @internal
     */
    AddLFTagsToResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddLFTagsToResourceRequest = exports.AddLFTagsToResourceRequest || (exports.AddLFTagsToResourceRequest = {}));
var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var LFTagError;
(function (LFTagError) {
    /**
     * @internal
     */
    LFTagError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LFTagError = exports.LFTagError || (exports.LFTagError = {}));
var AddLFTagsToResourceResponse;
(function (AddLFTagsToResourceResponse) {
    /**
     * @internal
     */
    AddLFTagsToResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddLFTagsToResourceResponse = exports.AddLFTagsToResourceResponse || (exports.AddLFTagsToResourceResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var EntityNotFoundException;
(function (EntityNotFoundException) {
    /**
     * @internal
     */
    EntityNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityNotFoundException = exports.EntityNotFoundException || (exports.EntityNotFoundException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var OperationTimeoutException;
(function (OperationTimeoutException) {
    /**
     * @internal
     */
    OperationTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationTimeoutException = exports.OperationTimeoutException || (exports.OperationTimeoutException = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var Permission;
(function (Permission) {
    Permission["ALL"] = "ALL";
    Permission["ALTER"] = "ALTER";
    Permission["ALTER_TAG"] = "ALTER_TAG";
    Permission["ASSOCIATE_TAG"] = "ASSOCIATE_TAG";
    Permission["CREATE_DATABASE"] = "CREATE_DATABASE";
    Permission["CREATE_TABLE"] = "CREATE_TABLE";
    Permission["CREATE_TAG"] = "CREATE_TAG";
    Permission["DATA_LOCATION_ACCESS"] = "DATA_LOCATION_ACCESS";
    Permission["DELETE"] = "DELETE";
    Permission["DELETE_TAG"] = "DELETE_TAG";
    Permission["DESCRIBE"] = "DESCRIBE";
    Permission["DESCRIBE_TAG"] = "DESCRIBE_TAG";
    Permission["DROP"] = "DROP";
    Permission["INSERT"] = "INSERT";
    Permission["SELECT"] = "SELECT";
})(Permission = exports.Permission || (exports.Permission = {}));
var DataLakePrincipal;
(function (DataLakePrincipal) {
    /**
     * @internal
     */
    DataLakePrincipal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataLakePrincipal = exports.DataLakePrincipal || (exports.DataLakePrincipal = {}));
var BatchPermissionsRequestEntry;
(function (BatchPermissionsRequestEntry) {
    /**
     * @internal
     */
    BatchPermissionsRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPermissionsRequestEntry = exports.BatchPermissionsRequestEntry || (exports.BatchPermissionsRequestEntry = {}));
var BatchGrantPermissionsRequest;
(function (BatchGrantPermissionsRequest) {
    /**
     * @internal
     */
    BatchGrantPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGrantPermissionsRequest = exports.BatchGrantPermissionsRequest || (exports.BatchGrantPermissionsRequest = {}));
var BatchPermissionsFailureEntry;
(function (BatchPermissionsFailureEntry) {
    /**
     * @internal
     */
    BatchPermissionsFailureEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPermissionsFailureEntry = exports.BatchPermissionsFailureEntry || (exports.BatchPermissionsFailureEntry = {}));
var BatchGrantPermissionsResponse;
(function (BatchGrantPermissionsResponse) {
    /**
     * @internal
     */
    BatchGrantPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGrantPermissionsResponse = exports.BatchGrantPermissionsResponse || (exports.BatchGrantPermissionsResponse = {}));
var BatchRevokePermissionsRequest;
(function (BatchRevokePermissionsRequest) {
    /**
     * @internal
     */
    BatchRevokePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRevokePermissionsRequest = exports.BatchRevokePermissionsRequest || (exports.BatchRevokePermissionsRequest = {}));
var BatchRevokePermissionsResponse;
(function (BatchRevokePermissionsResponse) {
    /**
     * @internal
     */
    BatchRevokePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRevokePermissionsResponse = exports.BatchRevokePermissionsResponse || (exports.BatchRevokePermissionsResponse = {}));
var CreateLFTagRequest;
(function (CreateLFTagRequest) {
    /**
     * @internal
     */
    CreateLFTagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLFTagRequest = exports.CreateLFTagRequest || (exports.CreateLFTagRequest = {}));
var CreateLFTagResponse;
(function (CreateLFTagResponse) {
    /**
     * @internal
     */
    CreateLFTagResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLFTagResponse = exports.CreateLFTagResponse || (exports.CreateLFTagResponse = {}));
var ResourceNumberLimitExceededException;
(function (ResourceNumberLimitExceededException) {
    /**
     * @internal
     */
    ResourceNumberLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNumberLimitExceededException = exports.ResourceNumberLimitExceededException || (exports.ResourceNumberLimitExceededException = {}));
var DeleteLFTagRequest;
(function (DeleteLFTagRequest) {
    /**
     * @internal
     */
    DeleteLFTagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLFTagRequest = exports.DeleteLFTagRequest || (exports.DeleteLFTagRequest = {}));
var DeleteLFTagResponse;
(function (DeleteLFTagResponse) {
    /**
     * @internal
     */
    DeleteLFTagResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLFTagResponse = exports.DeleteLFTagResponse || (exports.DeleteLFTagResponse = {}));
var DeregisterResourceRequest;
(function (DeregisterResourceRequest) {
    /**
     * @internal
     */
    DeregisterResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterResourceRequest = exports.DeregisterResourceRequest || (exports.DeregisterResourceRequest = {}));
var DeregisterResourceResponse;
(function (DeregisterResourceResponse) {
    /**
     * @internal
     */
    DeregisterResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterResourceResponse = exports.DeregisterResourceResponse || (exports.DeregisterResourceResponse = {}));
var DescribeResourceRequest;
(function (DescribeResourceRequest) {
    /**
     * @internal
     */
    DescribeResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceRequest = exports.DescribeResourceRequest || (exports.DescribeResourceRequest = {}));
var ResourceInfo;
(function (ResourceInfo) {
    /**
     * @internal
     */
    ResourceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInfo = exports.ResourceInfo || (exports.ResourceInfo = {}));
var DescribeResourceResponse;
(function (DescribeResourceResponse) {
    /**
     * @internal
     */
    DescribeResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceResponse = exports.DescribeResourceResponse || (exports.DescribeResourceResponse = {}));
var GetDataLakeSettingsRequest;
(function (GetDataLakeSettingsRequest) {
    /**
     * @internal
     */
    GetDataLakeSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataLakeSettingsRequest = exports.GetDataLakeSettingsRequest || (exports.GetDataLakeSettingsRequest = {}));
var PrincipalPermissions;
(function (PrincipalPermissions) {
    /**
     * @internal
     */
    PrincipalPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrincipalPermissions = exports.PrincipalPermissions || (exports.PrincipalPermissions = {}));
var DataLakeSettings;
(function (DataLakeSettings) {
    /**
     * @internal
     */
    DataLakeSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataLakeSettings = exports.DataLakeSettings || (exports.DataLakeSettings = {}));
var GetDataLakeSettingsResponse;
(function (GetDataLakeSettingsResponse) {
    /**
     * @internal
     */
    GetDataLakeSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataLakeSettingsResponse = exports.GetDataLakeSettingsResponse || (exports.GetDataLakeSettingsResponse = {}));
var GetEffectivePermissionsForPathRequest;
(function (GetEffectivePermissionsForPathRequest) {
    /**
     * @internal
     */
    GetEffectivePermissionsForPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEffectivePermissionsForPathRequest = exports.GetEffectivePermissionsForPathRequest || (exports.GetEffectivePermissionsForPathRequest = {}));
var DetailsMap;
(function (DetailsMap) {
    /**
     * @internal
     */
    DetailsMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetailsMap = exports.DetailsMap || (exports.DetailsMap = {}));
var PrincipalResourcePermissions;
(function (PrincipalResourcePermissions) {
    /**
     * @internal
     */
    PrincipalResourcePermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrincipalResourcePermissions = exports.PrincipalResourcePermissions || (exports.PrincipalResourcePermissions = {}));
var GetEffectivePermissionsForPathResponse;
(function (GetEffectivePermissionsForPathResponse) {
    /**
     * @internal
     */
    GetEffectivePermissionsForPathResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEffectivePermissionsForPathResponse = exports.GetEffectivePermissionsForPathResponse || (exports.GetEffectivePermissionsForPathResponse = {}));
var GetLFTagRequest;
(function (GetLFTagRequest) {
    /**
     * @internal
     */
    GetLFTagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLFTagRequest = exports.GetLFTagRequest || (exports.GetLFTagRequest = {}));
var GetLFTagResponse;
(function (GetLFTagResponse) {
    /**
     * @internal
     */
    GetLFTagResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLFTagResponse = exports.GetLFTagResponse || (exports.GetLFTagResponse = {}));
var GetResourceLFTagsRequest;
(function (GetResourceLFTagsRequest) {
    /**
     * @internal
     */
    GetResourceLFTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceLFTagsRequest = exports.GetResourceLFTagsRequest || (exports.GetResourceLFTagsRequest = {}));
var ColumnLFTag;
(function (ColumnLFTag) {
    /**
     * @internal
     */
    ColumnLFTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnLFTag = exports.ColumnLFTag || (exports.ColumnLFTag = {}));
var GetResourceLFTagsResponse;
(function (GetResourceLFTagsResponse) {
    /**
     * @internal
     */
    GetResourceLFTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceLFTagsResponse = exports.GetResourceLFTagsResponse || (exports.GetResourceLFTagsResponse = {}));
var GlueEncryptionException;
(function (GlueEncryptionException) {
    /**
     * @internal
     */
    GlueEncryptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlueEncryptionException = exports.GlueEncryptionException || (exports.GlueEncryptionException = {}));
var GrantPermissionsRequest;
(function (GrantPermissionsRequest) {
    /**
     * @internal
     */
    GrantPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantPermissionsRequest = exports.GrantPermissionsRequest || (exports.GrantPermissionsRequest = {}));
var GrantPermissionsResponse;
(function (GrantPermissionsResponse) {
    /**
     * @internal
     */
    GrantPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantPermissionsResponse = exports.GrantPermissionsResponse || (exports.GrantPermissionsResponse = {}));
var ResourceShareType;
(function (ResourceShareType) {
    ResourceShareType["ALL"] = "ALL";
    ResourceShareType["FOREIGN"] = "FOREIGN";
})(ResourceShareType = exports.ResourceShareType || (exports.ResourceShareType = {}));
var ListLFTagsRequest;
(function (ListLFTagsRequest) {
    /**
     * @internal
     */
    ListLFTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLFTagsRequest = exports.ListLFTagsRequest || (exports.ListLFTagsRequest = {}));
var ListLFTagsResponse;
(function (ListLFTagsResponse) {
    /**
     * @internal
     */
    ListLFTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLFTagsResponse = exports.ListLFTagsResponse || (exports.ListLFTagsResponse = {}));
var DataLakeResourceType;
(function (DataLakeResourceType) {
    DataLakeResourceType["CATALOG"] = "CATALOG";
    DataLakeResourceType["DATABASE"] = "DATABASE";
    DataLakeResourceType["DATA_LOCATION"] = "DATA_LOCATION";
    DataLakeResourceType["LF_TAG"] = "LF_TAG";
    DataLakeResourceType["LF_TAG_POLICY"] = "LF_TAG_POLICY";
    DataLakeResourceType["LF_TAG_POLICY_DATABASE"] = "LF_TAG_POLICY_DATABASE";
    DataLakeResourceType["LF_TAG_POLICY_TABLE"] = "LF_TAG_POLICY_TABLE";
    DataLakeResourceType["TABLE"] = "TABLE";
})(DataLakeResourceType = exports.DataLakeResourceType || (exports.DataLakeResourceType = {}));
var ListPermissionsRequest;
(function (ListPermissionsRequest) {
    /**
     * @internal
     */
    ListPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionsRequest = exports.ListPermissionsRequest || (exports.ListPermissionsRequest = {}));
var ListPermissionsResponse;
(function (ListPermissionsResponse) {
    /**
     * @internal
     */
    ListPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionsResponse = exports.ListPermissionsResponse || (exports.ListPermissionsResponse = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["BEGINS_WITH"] = "BEGINS_WITH";
    ComparisonOperator["BETWEEN"] = "BETWEEN";
    ComparisonOperator["CONTAINS"] = "CONTAINS";
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["IN"] = "IN";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
    ComparisonOperator["NOT_CONTAINS"] = "NOT_CONTAINS";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var FieldNameString;
(function (FieldNameString) {
    FieldNameString["LAST_MODIFIED"] = "LAST_MODIFIED";
    FieldNameString["RESOURCE_ARN"] = "RESOURCE_ARN";
    FieldNameString["ROLE_ARN"] = "ROLE_ARN";
})(FieldNameString = exports.FieldNameString || (exports.FieldNameString = {}));
var FilterCondition;
(function (FilterCondition) {
    /**
     * @internal
     */
    FilterCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterCondition = exports.FilterCondition || (exports.FilterCondition = {}));
var ListResourcesRequest;
(function (ListResourcesRequest) {
    /**
     * @internal
     */
    ListResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesRequest = exports.ListResourcesRequest || (exports.ListResourcesRequest = {}));
var ListResourcesResponse;
(function (ListResourcesResponse) {
    /**
     * @internal
     */
    ListResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesResponse = exports.ListResourcesResponse || (exports.ListResourcesResponse = {}));
var PutDataLakeSettingsRequest;
(function (PutDataLakeSettingsRequest) {
    /**
     * @internal
     */
    PutDataLakeSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDataLakeSettingsRequest = exports.PutDataLakeSettingsRequest || (exports.PutDataLakeSettingsRequest = {}));
var PutDataLakeSettingsResponse;
(function (PutDataLakeSettingsResponse) {
    /**
     * @internal
     */
    PutDataLakeSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDataLakeSettingsResponse = exports.PutDataLakeSettingsResponse || (exports.PutDataLakeSettingsResponse = {}));
var RegisterResourceRequest;
(function (RegisterResourceRequest) {
    /**
     * @internal
     */
    RegisterResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterResourceRequest = exports.RegisterResourceRequest || (exports.RegisterResourceRequest = {}));
var RegisterResourceResponse;
(function (RegisterResourceResponse) {
    /**
     * @internal
     */
    RegisterResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterResourceResponse = exports.RegisterResourceResponse || (exports.RegisterResourceResponse = {}));
var RemoveLFTagsFromResourceRequest;
(function (RemoveLFTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveLFTagsFromResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveLFTagsFromResourceRequest = exports.RemoveLFTagsFromResourceRequest || (exports.RemoveLFTagsFromResourceRequest = {}));
var RemoveLFTagsFromResourceResponse;
(function (RemoveLFTagsFromResourceResponse) {
    /**
     * @internal
     */
    RemoveLFTagsFromResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveLFTagsFromResourceResponse = exports.RemoveLFTagsFromResourceResponse || (exports.RemoveLFTagsFromResourceResponse = {}));
var RevokePermissionsRequest;
(function (RevokePermissionsRequest) {
    /**
     * @internal
     */
    RevokePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokePermissionsRequest = exports.RevokePermissionsRequest || (exports.RevokePermissionsRequest = {}));
var RevokePermissionsResponse;
(function (RevokePermissionsResponse) {
    /**
     * @internal
     */
    RevokePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokePermissionsResponse = exports.RevokePermissionsResponse || (exports.RevokePermissionsResponse = {}));
var SearchDatabasesByLFTagsRequest;
(function (SearchDatabasesByLFTagsRequest) {
    /**
     * @internal
     */
    SearchDatabasesByLFTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchDatabasesByLFTagsRequest = exports.SearchDatabasesByLFTagsRequest || (exports.SearchDatabasesByLFTagsRequest = {}));
var TaggedDatabase;
(function (TaggedDatabase) {
    /**
     * @internal
     */
    TaggedDatabase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaggedDatabase = exports.TaggedDatabase || (exports.TaggedDatabase = {}));
var SearchDatabasesByLFTagsResponse;
(function (SearchDatabasesByLFTagsResponse) {
    /**
     * @internal
     */
    SearchDatabasesByLFTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchDatabasesByLFTagsResponse = exports.SearchDatabasesByLFTagsResponse || (exports.SearchDatabasesByLFTagsResponse = {}));
var SearchTablesByLFTagsRequest;
(function (SearchTablesByLFTagsRequest) {
    /**
     * @internal
     */
    SearchTablesByLFTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTablesByLFTagsRequest = exports.SearchTablesByLFTagsRequest || (exports.SearchTablesByLFTagsRequest = {}));
var TaggedTable;
(function (TaggedTable) {
    /**
     * @internal
     */
    TaggedTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaggedTable = exports.TaggedTable || (exports.TaggedTable = {}));
var SearchTablesByLFTagsResponse;
(function (SearchTablesByLFTagsResponse) {
    /**
     * @internal
     */
    SearchTablesByLFTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTablesByLFTagsResponse = exports.SearchTablesByLFTagsResponse || (exports.SearchTablesByLFTagsResponse = {}));
var UpdateLFTagRequest;
(function (UpdateLFTagRequest) {
    /**
     * @internal
     */
    UpdateLFTagRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLFTagRequest = exports.UpdateLFTagRequest || (exports.UpdateLFTagRequest = {}));
var UpdateLFTagResponse;
(function (UpdateLFTagResponse) {
    /**
     * @internal
     */
    UpdateLFTagResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLFTagResponse = exports.UpdateLFTagResponse || (exports.UpdateLFTagResponse = {}));
var UpdateResourceRequest;
(function (UpdateResourceRequest) {
    /**
     * @internal
     */
    UpdateResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceRequest = exports.UpdateResourceRequest || (exports.UpdateResourceRequest = {}));
var UpdateResourceResponse;
(function (UpdateResourceResponse) {
    /**
     * @internal
     */
    UpdateResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceResponse = exports.UpdateResourceResponse || (exports.UpdateResourceResponse = {}));
//# sourceMappingURL=models_0.js.map