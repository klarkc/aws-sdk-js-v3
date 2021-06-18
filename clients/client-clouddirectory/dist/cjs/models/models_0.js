"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchListObjectParents =
  exports.BatchListObjectParentPaths =
  exports.BatchListObjectChildren =
  exports.BatchListObjectAttributes =
  exports.BatchListIndex =
  exports.ObjectAttributeRange =
  exports.BatchListIncomingTypedLinks =
  exports.TypedLinkAttributeRange =
  exports.TypedAttributeValueRange =
  exports.RangeMode =
  exports.BatchListAttachedIndices =
  exports.BatchGetObjectInformation =
  exports.BatchGetObjectAttributes =
  exports.BatchGetLinkAttributes =
  exports.ConsistencyLevel =
  exports.AttachTypedLinkResponse =
  exports.TypedLinkSpecifier =
  exports.AttachTypedLinkRequest =
  exports.TypedLinkSchemaAndFacetName =
  exports.AttributeNameAndValue =
  exports.NotIndexException =
  exports.IndexedAttributeMissingException =
  exports.AttachToIndexResponse =
  exports.AttachToIndexRequest =
  exports.NotPolicyException =
  exports.AttachPolicyResponse =
  exports.AttachPolicyRequest =
  exports.LinkNameAlreadyInUseException =
  exports.AttachObjectResponse =
  exports.AttachObjectRequest =
  exports.SchemaAlreadyExistsException =
  exports.InvalidAttachmentException =
  exports.ApplySchemaResponse =
  exports.ApplySchemaRequest =
  exports.ValidationException =
  exports.RetryableConflictException =
  exports.ResourceNotFoundException =
  exports.LimitExceededException =
  exports.InvalidArnException =
  exports.InternalServiceException =
  exports.FacetValidationException =
  exports.DirectoryNotEnabledException =
  exports.AddFacetToObjectResponse =
  exports.AddFacetToObjectRequest =
  exports.SchemaFacet =
  exports.ObjectReference =
  exports.AttributeKeyAndValue =
  exports.TypedAttributeValue =
  exports.AttributeKey =
  exports.AccessDeniedException =
    void 0;
exports.ObjectAttributeAction =
  exports.BatchUpdateLinkAttributes =
  exports.LinkAttributeUpdate =
  exports.LinkAttributeAction =
  exports.UpdateActionType =
  exports.BatchRemoveFacetFromObject =
  exports.BatchDetachTypedLink =
  exports.BatchDetachPolicy =
  exports.BatchDetachObject =
  exports.BatchDetachFromIndex =
  exports.BatchDeleteObject =
  exports.BatchCreateObject =
  exports.BatchCreateIndex =
  exports.BatchAttachTypedLink =
  exports.BatchAttachToIndex =
  exports.BatchAttachPolicy =
  exports.BatchAttachObject =
  exports.BatchAddFacetToObject =
  exports.BatchWriteException =
  exports.BatchWriteExceptionType =
  exports.BatchReadResponse =
  exports.BatchReadOperationResponse =
  exports.BatchReadSuccessfulResponse =
  exports.BatchLookupPolicyResponse =
  exports.PolicyToPath =
  exports.PolicyAttachment =
  exports.BatchListPolicyAttachmentsResponse =
  exports.BatchListOutgoingTypedLinksResponse =
  exports.BatchListObjectPoliciesResponse =
  exports.BatchListObjectParentsResponse =
  exports.ObjectIdentifierAndLinkNameTuple =
  exports.BatchListObjectParentPathsResponse =
  exports.PathToObjectIdentifiers =
  exports.BatchListObjectChildrenResponse =
  exports.BatchListObjectAttributesResponse =
  exports.BatchListIndexResponse =
  exports.BatchListIncomingTypedLinksResponse =
  exports.BatchListAttachedIndicesResponse =
  exports.IndexAttachment =
  exports.BatchGetObjectInformationResponse =
  exports.BatchGetObjectAttributesResponse =
  exports.BatchGetLinkAttributesResponse =
  exports.BatchReadException =
  exports.BatchReadExceptionType =
  exports.BatchReadRequest =
  exports.BatchReadOperation =
  exports.BatchLookupPolicy =
  exports.BatchListPolicyAttachments =
  exports.BatchListOutgoingTypedLinks =
  exports.BatchListObjectPolicies =
    void 0;
exports.DeleteDirectoryResponse =
  exports.DeleteDirectoryRequest =
  exports.CreateTypedLinkFacetResponse =
  exports.CreateTypedLinkFacetRequest =
  exports.TypedLinkFacet =
  exports.TypedLinkAttributeDefinition =
  exports.CreateSchemaResponse =
  exports.CreateSchemaRequest =
  exports.CreateObjectResponse =
  exports.CreateObjectRequest =
  exports.UnsupportedIndexTypeException =
  exports.CreateIndexResponse =
  exports.CreateIndexRequest =
  exports.InvalidRuleException =
  exports.FacetAlreadyExistsException =
  exports.CreateFacetResponse =
  exports.CreateFacetRequest =
  exports.ObjectType =
  exports.FacetStyle =
  exports.FacetAttribute =
  exports.RequiredAttributeBehavior =
  exports.FacetAttributeReference =
  exports.FacetAttributeDefinition =
  exports.FacetAttributeType =
  exports.Rule =
  exports.RuleType =
  exports.DirectoryAlreadyExistsException =
  exports.CreateDirectoryResponse =
  exports.CreateDirectoryRequest =
  exports.BatchWriteResponse =
  exports.BatchWriteOperationResponse =
  exports.BatchUpdateObjectAttributesResponse =
  exports.BatchUpdateLinkAttributesResponse =
  exports.BatchRemoveFacetFromObjectResponse =
  exports.BatchDetachTypedLinkResponse =
  exports.BatchDetachPolicyResponse =
  exports.BatchDetachObjectResponse =
  exports.BatchDetachFromIndexResponse =
  exports.BatchDeleteObjectResponse =
  exports.BatchCreateObjectResponse =
  exports.BatchCreateIndexResponse =
  exports.BatchAttachTypedLinkResponse =
  exports.BatchAttachToIndexResponse =
  exports.BatchAttachPolicyResponse =
  exports.BatchAttachObjectResponse =
  exports.BatchAddFacetToObjectResponse =
  exports.BatchWriteRequest =
  exports.BatchWriteOperation =
  exports.BatchUpdateObjectAttributes =
  exports.ObjectAttributeUpdate =
    void 0;
exports.ListAttachedIndicesRequest =
  exports.ListAppliedSchemaArnsResponse =
  exports.ListAppliedSchemaArnsRequest =
  exports.InvalidNextTokenException =
  exports.GetTypedLinkFacetInformationResponse =
  exports.GetTypedLinkFacetInformationRequest =
  exports.GetSchemaAsJsonResponse =
  exports.GetSchemaAsJsonRequest =
  exports.GetObjectInformationResponse =
  exports.GetObjectInformationRequest =
  exports.GetObjectAttributesResponse =
  exports.GetObjectAttributesRequest =
  exports.GetLinkAttributesResponse =
  exports.GetLinkAttributesRequest =
  exports.GetFacetResponse =
  exports.Facet =
  exports.GetFacetRequest =
  exports.GetDirectoryResponse =
  exports.Directory =
  exports.DirectoryState =
  exports.GetDirectoryRequest =
  exports.GetAppliedSchemaVersionResponse =
  exports.GetAppliedSchemaVersionRequest =
  exports.EnableDirectoryResponse =
  exports.EnableDirectoryRequest =
  exports.DisableDirectoryResponse =
  exports.DisableDirectoryRequest =
  exports.DetachTypedLinkRequest =
  exports.DetachPolicyResponse =
  exports.DetachPolicyRequest =
  exports.NotNodeException =
  exports.DetachObjectResponse =
  exports.DetachObjectRequest =
  exports.ObjectAlreadyDetachedException =
  exports.DetachFromIndexResponse =
  exports.DetachFromIndexRequest =
  exports.DeleteTypedLinkFacetResponse =
  exports.DeleteTypedLinkFacetRequest =
  exports.StillContainsLinksException =
  exports.DeleteSchemaResponse =
  exports.DeleteSchemaRequest =
  exports.ObjectNotDetachedException =
  exports.DeleteObjectResponse =
  exports.DeleteObjectRequest =
  exports.FacetNotFoundException =
  exports.FacetInUseException =
  exports.DeleteFacetResponse =
  exports.DeleteFacetRequest =
  exports.DirectoryNotDisabledException =
  exports.DirectoryDeletedException =
    void 0;
exports.RemoveFacetFromObjectResponse =
  exports.RemoveFacetFromObjectRequest =
  exports.PutSchemaFromJsonResponse =
  exports.PutSchemaFromJsonRequest =
  exports.InvalidSchemaDocException =
  exports.SchemaAlreadyPublishedException =
  exports.PublishSchemaResponse =
  exports.PublishSchemaRequest =
  exports.LookupPolicyResponse =
  exports.LookupPolicyRequest =
  exports.ListTypedLinkFacetNamesResponse =
  exports.ListTypedLinkFacetNamesRequest =
  exports.ListTypedLinkFacetAttributesResponse =
  exports.ListTypedLinkFacetAttributesRequest =
  exports.ListTagsForResourceResponse =
  exports.Tag =
  exports.ListTagsForResourceRequest =
  exports.InvalidTaggingRequestException =
  exports.ListPublishedSchemaArnsResponse =
  exports.ListPublishedSchemaArnsRequest =
  exports.ListPolicyAttachmentsResponse =
  exports.ListPolicyAttachmentsRequest =
  exports.ListOutgoingTypedLinksResponse =
  exports.ListOutgoingTypedLinksRequest =
  exports.ListObjectPoliciesResponse =
  exports.ListObjectPoliciesRequest =
  exports.ListObjectParentsResponse =
  exports.ListObjectParentsRequest =
  exports.CannotListParentOfRootException =
  exports.ListObjectParentPathsResponse =
  exports.ListObjectParentPathsRequest =
  exports.ListObjectChildrenResponse =
  exports.ListObjectChildrenRequest =
  exports.ListObjectAttributesResponse =
  exports.ListObjectAttributesRequest =
  exports.ListManagedSchemaArnsResponse =
  exports.ListManagedSchemaArnsRequest =
  exports.ListIndexResponse =
  exports.ListIndexRequest =
  exports.ListIncomingTypedLinksResponse =
  exports.ListIncomingTypedLinksRequest =
  exports.ListFacetNamesResponse =
  exports.ListFacetNamesRequest =
  exports.ListFacetAttributesResponse =
  exports.ListFacetAttributesRequest =
  exports.ListDirectoriesResponse =
  exports.ListDirectoriesRequest =
  exports.ListDevelopmentSchemaArnsResponse =
  exports.ListDevelopmentSchemaArnsRequest =
  exports.ListAttachedIndicesResponse =
    void 0;
exports.UpgradePublishedSchemaResponse =
  exports.UpgradePublishedSchemaRequest =
  exports.UpgradeAppliedSchemaResponse =
  exports.UpgradeAppliedSchemaRequest =
  exports.IncompatibleSchemaException =
  exports.UpdateTypedLinkFacetResponse =
  exports.UpdateTypedLinkFacetRequest =
  exports.TypedLinkFacetAttributeUpdate =
  exports.UpdateSchemaResponse =
  exports.UpdateSchemaRequest =
  exports.UpdateObjectAttributesResponse =
  exports.UpdateObjectAttributesRequest =
  exports.UpdateLinkAttributesResponse =
  exports.UpdateLinkAttributesRequest =
  exports.UpdateFacetResponse =
  exports.UpdateFacetRequest =
  exports.FacetAttributeUpdate =
  exports.InvalidFacetUpdateException =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var AttributeKey;
(function (AttributeKey) {
  /**
   * @internal
   */
  AttributeKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttributeKey = exports.AttributeKey || (exports.AttributeKey = {})));
var TypedAttributeValue;
(function (TypedAttributeValue) {
  TypedAttributeValue.visit = (value, visitor) => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.BinaryValue !== undefined) return visitor.BinaryValue(value.BinaryValue);
    if (value.BooleanValue !== undefined) return visitor.BooleanValue(value.BooleanValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    if (value.DatetimeValue !== undefined) return visitor.DatetimeValue(value.DatetimeValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  TypedAttributeValue.filterSensitiveLog = (obj) => {
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.BinaryValue !== undefined) return { BinaryValue: obj.BinaryValue };
    if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
    if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
    if (obj.DatetimeValue !== undefined) return { DatetimeValue: obj.DatetimeValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((TypedAttributeValue = exports.TypedAttributeValue || (exports.TypedAttributeValue = {})));
var AttributeKeyAndValue;
(function (AttributeKeyAndValue) {
  /**
   * @internal
   */
  AttributeKeyAndValue.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: TypedAttributeValue.filterSensitiveLog(obj.Value) }),
  });
})((AttributeKeyAndValue = exports.AttributeKeyAndValue || (exports.AttributeKeyAndValue = {})));
var ObjectReference;
(function (ObjectReference) {
  /**
   * @internal
   */
  ObjectReference.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ObjectReference = exports.ObjectReference || (exports.ObjectReference = {})));
var SchemaFacet;
(function (SchemaFacet) {
  /**
   * @internal
   */
  SchemaFacet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SchemaFacet = exports.SchemaFacet || (exports.SchemaFacet = {})));
var AddFacetToObjectRequest;
(function (AddFacetToObjectRequest) {
  /**
   * @internal
   */
  AddFacetToObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeList && {
      ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)),
    }),
  });
})((AddFacetToObjectRequest = exports.AddFacetToObjectRequest || (exports.AddFacetToObjectRequest = {})));
var AddFacetToObjectResponse;
(function (AddFacetToObjectResponse) {
  /**
   * @internal
   */
  AddFacetToObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AddFacetToObjectResponse = exports.AddFacetToObjectResponse || (exports.AddFacetToObjectResponse = {})));
var DirectoryNotEnabledException;
(function (DirectoryNotEnabledException) {
  /**
   * @internal
   */
  DirectoryNotEnabledException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DirectoryNotEnabledException = exports.DirectoryNotEnabledException || (exports.DirectoryNotEnabledException = {}))
);
var FacetValidationException;
(function (FacetValidationException) {
  /**
   * @internal
   */
  FacetValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FacetValidationException = exports.FacetValidationException || (exports.FacetValidationException = {})));
var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {})));
var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var RetryableConflictException;
(function (RetryableConflictException) {
  /**
   * @internal
   */
  RetryableConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RetryableConflictException = exports.RetryableConflictException || (exports.RetryableConflictException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var ApplySchemaRequest;
(function (ApplySchemaRequest) {
  /**
   * @internal
   */
  ApplySchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplySchemaRequest = exports.ApplySchemaRequest || (exports.ApplySchemaRequest = {})));
var ApplySchemaResponse;
(function (ApplySchemaResponse) {
  /**
   * @internal
   */
  ApplySchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplySchemaResponse = exports.ApplySchemaResponse || (exports.ApplySchemaResponse = {})));
var InvalidAttachmentException;
(function (InvalidAttachmentException) {
  /**
   * @internal
   */
  InvalidAttachmentException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidAttachmentException = exports.InvalidAttachmentException || (exports.InvalidAttachmentException = {})));
var SchemaAlreadyExistsException;
(function (SchemaAlreadyExistsException) {
  /**
   * @internal
   */
  SchemaAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SchemaAlreadyExistsException = exports.SchemaAlreadyExistsException || (exports.SchemaAlreadyExistsException = {}))
);
var AttachObjectRequest;
(function (AttachObjectRequest) {
  /**
   * @internal
   */
  AttachObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachObjectRequest = exports.AttachObjectRequest || (exports.AttachObjectRequest = {})));
var AttachObjectResponse;
(function (AttachObjectResponse) {
  /**
   * @internal
   */
  AttachObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachObjectResponse = exports.AttachObjectResponse || (exports.AttachObjectResponse = {})));
var LinkNameAlreadyInUseException;
(function (LinkNameAlreadyInUseException) {
  /**
   * @internal
   */
  LinkNameAlreadyInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (LinkNameAlreadyInUseException =
    exports.LinkNameAlreadyInUseException || (exports.LinkNameAlreadyInUseException = {}))
);
var AttachPolicyRequest;
(function (AttachPolicyRequest) {
  /**
   * @internal
   */
  AttachPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachPolicyRequest = exports.AttachPolicyRequest || (exports.AttachPolicyRequest = {})));
var AttachPolicyResponse;
(function (AttachPolicyResponse) {
  /**
   * @internal
   */
  AttachPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachPolicyResponse = exports.AttachPolicyResponse || (exports.AttachPolicyResponse = {})));
var NotPolicyException;
(function (NotPolicyException) {
  /**
   * @internal
   */
  NotPolicyException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotPolicyException = exports.NotPolicyException || (exports.NotPolicyException = {})));
var AttachToIndexRequest;
(function (AttachToIndexRequest) {
  /**
   * @internal
   */
  AttachToIndexRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachToIndexRequest = exports.AttachToIndexRequest || (exports.AttachToIndexRequest = {})));
var AttachToIndexResponse;
(function (AttachToIndexResponse) {
  /**
   * @internal
   */
  AttachToIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttachToIndexResponse = exports.AttachToIndexResponse || (exports.AttachToIndexResponse = {})));
var IndexedAttributeMissingException;
(function (IndexedAttributeMissingException) {
  /**
   * @internal
   */
  IndexedAttributeMissingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (IndexedAttributeMissingException =
    exports.IndexedAttributeMissingException || (exports.IndexedAttributeMissingException = {}))
);
var NotIndexException;
(function (NotIndexException) {
  /**
   * @internal
   */
  NotIndexException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotIndexException = exports.NotIndexException || (exports.NotIndexException = {})));
var AttributeNameAndValue;
(function (AttributeNameAndValue) {
  /**
   * @internal
   */
  AttributeNameAndValue.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: TypedAttributeValue.filterSensitiveLog(obj.Value) }),
  });
})((AttributeNameAndValue = exports.AttributeNameAndValue || (exports.AttributeNameAndValue = {})));
var TypedLinkSchemaAndFacetName;
(function (TypedLinkSchemaAndFacetName) {
  /**
   * @internal
   */
  TypedLinkSchemaAndFacetName.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TypedLinkSchemaAndFacetName = exports.TypedLinkSchemaAndFacetName || (exports.TypedLinkSchemaAndFacetName = {})));
var AttachTypedLinkRequest;
(function (AttachTypedLinkRequest) {
  /**
   * @internal
   */
  AttachTypedLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeNameAndValue.filterSensitiveLog(item)) }),
  });
})((AttachTypedLinkRequest = exports.AttachTypedLinkRequest || (exports.AttachTypedLinkRequest = {})));
var TypedLinkSpecifier;
(function (TypedLinkSpecifier) {
  /**
   * @internal
   */
  TypedLinkSpecifier.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.IdentityAttributeValues && {
      IdentityAttributeValues: obj.IdentityAttributeValues.map((item) =>
        AttributeNameAndValue.filterSensitiveLog(item)
      ),
    }),
  });
})((TypedLinkSpecifier = exports.TypedLinkSpecifier || (exports.TypedLinkSpecifier = {})));
var AttachTypedLinkResponse;
(function (AttachTypedLinkResponse) {
  /**
   * @internal
   */
  AttachTypedLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})((AttachTypedLinkResponse = exports.AttachTypedLinkResponse || (exports.AttachTypedLinkResponse = {})));
var ConsistencyLevel;
(function (ConsistencyLevel) {
  ConsistencyLevel["EVENTUAL"] = "EVENTUAL";
  ConsistencyLevel["SERIALIZABLE"] = "SERIALIZABLE";
})((ConsistencyLevel = exports.ConsistencyLevel || (exports.ConsistencyLevel = {})));
var BatchGetLinkAttributes;
(function (BatchGetLinkAttributes) {
  /**
   * @internal
   */
  BatchGetLinkAttributes.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})((BatchGetLinkAttributes = exports.BatchGetLinkAttributes || (exports.BatchGetLinkAttributes = {})));
var BatchGetObjectAttributes;
(function (BatchGetObjectAttributes) {
  /**
   * @internal
   */
  BatchGetObjectAttributes.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchGetObjectAttributes = exports.BatchGetObjectAttributes || (exports.BatchGetObjectAttributes = {})));
var BatchGetObjectInformation;
(function (BatchGetObjectInformation) {
  /**
   * @internal
   */
  BatchGetObjectInformation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchGetObjectInformation = exports.BatchGetObjectInformation || (exports.BatchGetObjectInformation = {})));
var BatchListAttachedIndices;
(function (BatchListAttachedIndices) {
  /**
   * @internal
   */
  BatchListAttachedIndices.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListAttachedIndices = exports.BatchListAttachedIndices || (exports.BatchListAttachedIndices = {})));
var RangeMode;
(function (RangeMode) {
  RangeMode["EXCLUSIVE"] = "EXCLUSIVE";
  RangeMode["FIRST"] = "FIRST";
  RangeMode["INCLUSIVE"] = "INCLUSIVE";
  RangeMode["LAST"] = "LAST";
  RangeMode["LAST_BEFORE_MISSING_VALUES"] = "LAST_BEFORE_MISSING_VALUES";
})((RangeMode = exports.RangeMode || (exports.RangeMode = {})));
var TypedAttributeValueRange;
(function (TypedAttributeValueRange) {
  /**
   * @internal
   */
  TypedAttributeValueRange.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.StartValue && { StartValue: TypedAttributeValue.filterSensitiveLog(obj.StartValue) }),
    ...(obj.EndValue && { EndValue: TypedAttributeValue.filterSensitiveLog(obj.EndValue) }),
  });
})((TypedAttributeValueRange = exports.TypedAttributeValueRange || (exports.TypedAttributeValueRange = {})));
var TypedLinkAttributeRange;
(function (TypedLinkAttributeRange) {
  /**
   * @internal
   */
  TypedLinkAttributeRange.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Range && { Range: TypedAttributeValueRange.filterSensitiveLog(obj.Range) }),
  });
})((TypedLinkAttributeRange = exports.TypedLinkAttributeRange || (exports.TypedLinkAttributeRange = {})));
var BatchListIncomingTypedLinks;
(function (BatchListIncomingTypedLinks) {
  /**
   * @internal
   */
  BatchListIncomingTypedLinks.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FilterAttributeRanges && {
      FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRange.filterSensitiveLog(item)),
    }),
  });
})((BatchListIncomingTypedLinks = exports.BatchListIncomingTypedLinks || (exports.BatchListIncomingTypedLinks = {})));
var ObjectAttributeRange;
(function (ObjectAttributeRange) {
  /**
   * @internal
   */
  ObjectAttributeRange.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Range && { Range: TypedAttributeValueRange.filterSensitiveLog(obj.Range) }),
  });
})((ObjectAttributeRange = exports.ObjectAttributeRange || (exports.ObjectAttributeRange = {})));
var BatchListIndex;
(function (BatchListIndex) {
  /**
   * @internal
   */
  BatchListIndex.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RangesOnIndexedValues && {
      RangesOnIndexedValues: obj.RangesOnIndexedValues.map((item) => ObjectAttributeRange.filterSensitiveLog(item)),
    }),
  });
})((BatchListIndex = exports.BatchListIndex || (exports.BatchListIndex = {})));
var BatchListObjectAttributes;
(function (BatchListObjectAttributes) {
  /**
   * @internal
   */
  BatchListObjectAttributes.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListObjectAttributes = exports.BatchListObjectAttributes || (exports.BatchListObjectAttributes = {})));
var BatchListObjectChildren;
(function (BatchListObjectChildren) {
  /**
   * @internal
   */
  BatchListObjectChildren.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListObjectChildren = exports.BatchListObjectChildren || (exports.BatchListObjectChildren = {})));
var BatchListObjectParentPaths;
(function (BatchListObjectParentPaths) {
  /**
   * @internal
   */
  BatchListObjectParentPaths.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListObjectParentPaths = exports.BatchListObjectParentPaths || (exports.BatchListObjectParentPaths = {})));
var BatchListObjectParents;
(function (BatchListObjectParents) {
  /**
   * @internal
   */
  BatchListObjectParents.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListObjectParents = exports.BatchListObjectParents || (exports.BatchListObjectParents = {})));
var BatchListObjectPolicies;
(function (BatchListObjectPolicies) {
  /**
   * @internal
   */
  BatchListObjectPolicies.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListObjectPolicies = exports.BatchListObjectPolicies || (exports.BatchListObjectPolicies = {})));
var BatchListOutgoingTypedLinks;
(function (BatchListOutgoingTypedLinks) {
  /**
   * @internal
   */
  BatchListOutgoingTypedLinks.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FilterAttributeRanges && {
      FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRange.filterSensitiveLog(item)),
    }),
  });
})((BatchListOutgoingTypedLinks = exports.BatchListOutgoingTypedLinks || (exports.BatchListOutgoingTypedLinks = {})));
var BatchListPolicyAttachments;
(function (BatchListPolicyAttachments) {
  /**
   * @internal
   */
  BatchListPolicyAttachments.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListPolicyAttachments = exports.BatchListPolicyAttachments || (exports.BatchListPolicyAttachments = {})));
var BatchLookupPolicy;
(function (BatchLookupPolicy) {
  /**
   * @internal
   */
  BatchLookupPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchLookupPolicy = exports.BatchLookupPolicy || (exports.BatchLookupPolicy = {})));
var BatchReadOperation;
(function (BatchReadOperation) {
  /**
   * @internal
   */
  BatchReadOperation.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ListIndex && { ListIndex: BatchListIndex.filterSensitiveLog(obj.ListIndex) }),
    ...(obj.ListOutgoingTypedLinks && {
      ListOutgoingTypedLinks: BatchListOutgoingTypedLinks.filterSensitiveLog(obj.ListOutgoingTypedLinks),
    }),
    ...(obj.ListIncomingTypedLinks && {
      ListIncomingTypedLinks: BatchListIncomingTypedLinks.filterSensitiveLog(obj.ListIncomingTypedLinks),
    }),
    ...(obj.GetLinkAttributes && {
      GetLinkAttributes: BatchGetLinkAttributes.filterSensitiveLog(obj.GetLinkAttributes),
    }),
  });
})((BatchReadOperation = exports.BatchReadOperation || (exports.BatchReadOperation = {})));
var BatchReadRequest;
(function (BatchReadRequest) {
  /**
   * @internal
   */
  BatchReadRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchReadRequest = exports.BatchReadRequest || (exports.BatchReadRequest = {})));
var BatchReadExceptionType;
(function (BatchReadExceptionType) {
  BatchReadExceptionType["AccessDeniedException"] = "AccessDeniedException";
  BatchReadExceptionType["CannotListParentOfRootException"] = "CannotListParentOfRootException";
  BatchReadExceptionType["DirectoryNotEnabledException"] = "DirectoryNotEnabledException";
  BatchReadExceptionType["FacetValidationException"] = "FacetValidationException";
  BatchReadExceptionType["InternalServiceException"] = "InternalServiceException";
  BatchReadExceptionType["InvalidArnException"] = "InvalidArnException";
  BatchReadExceptionType["InvalidNextTokenException"] = "InvalidNextTokenException";
  BatchReadExceptionType["LimitExceededException"] = "LimitExceededException";
  BatchReadExceptionType["NotIndexException"] = "NotIndexException";
  BatchReadExceptionType["NotNodeException"] = "NotNodeException";
  BatchReadExceptionType["NotPolicyException"] = "NotPolicyException";
  BatchReadExceptionType["ResourceNotFoundException"] = "ResourceNotFoundException";
  BatchReadExceptionType["ValidationException"] = "ValidationException";
})((BatchReadExceptionType = exports.BatchReadExceptionType || (exports.BatchReadExceptionType = {})));
var BatchReadException;
(function (BatchReadException) {
  /**
   * @internal
   */
  BatchReadException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchReadException = exports.BatchReadException || (exports.BatchReadException = {})));
var BatchGetLinkAttributesResponse;
(function (BatchGetLinkAttributesResponse) {
  /**
   * @internal
   */
  BatchGetLinkAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})(
  (BatchGetLinkAttributesResponse =
    exports.BatchGetLinkAttributesResponse || (exports.BatchGetLinkAttributesResponse = {}))
);
var BatchGetObjectAttributesResponse;
(function (BatchGetObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchGetObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})(
  (BatchGetObjectAttributesResponse =
    exports.BatchGetObjectAttributesResponse || (exports.BatchGetObjectAttributesResponse = {}))
);
var BatchGetObjectInformationResponse;
(function (BatchGetObjectInformationResponse) {
  /**
   * @internal
   */
  BatchGetObjectInformationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchGetObjectInformationResponse =
    exports.BatchGetObjectInformationResponse || (exports.BatchGetObjectInformationResponse = {}))
);
var IndexAttachment;
(function (IndexAttachment) {
  /**
   * @internal
   */
  IndexAttachment.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.IndexedAttributes && {
      IndexedAttributes: obj.IndexedAttributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)),
    }),
  });
})((IndexAttachment = exports.IndexAttachment || (exports.IndexAttachment = {})));
var BatchListAttachedIndicesResponse;
(function (BatchListAttachedIndicesResponse) {
  /**
   * @internal
   */
  BatchListAttachedIndicesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListAttachedIndicesResponse =
    exports.BatchListAttachedIndicesResponse || (exports.BatchListAttachedIndicesResponse = {}))
);
var BatchListIncomingTypedLinksResponse;
(function (BatchListIncomingTypedLinksResponse) {
  /**
   * @internal
   */
  BatchListIncomingTypedLinksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListIncomingTypedLinksResponse =
    exports.BatchListIncomingTypedLinksResponse || (exports.BatchListIncomingTypedLinksResponse = {}))
);
var BatchListIndexResponse;
(function (BatchListIndexResponse) {
  /**
   * @internal
   */
  BatchListIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchListIndexResponse = exports.BatchListIndexResponse || (exports.BatchListIndexResponse = {})));
var BatchListObjectAttributesResponse;
(function (BatchListObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchListObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})(
  (BatchListObjectAttributesResponse =
    exports.BatchListObjectAttributesResponse || (exports.BatchListObjectAttributesResponse = {}))
);
var BatchListObjectChildrenResponse;
(function (BatchListObjectChildrenResponse) {
  /**
   * @internal
   */
  BatchListObjectChildrenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListObjectChildrenResponse =
    exports.BatchListObjectChildrenResponse || (exports.BatchListObjectChildrenResponse = {}))
);
var PathToObjectIdentifiers;
(function (PathToObjectIdentifiers) {
  /**
   * @internal
   */
  PathToObjectIdentifiers.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PathToObjectIdentifiers = exports.PathToObjectIdentifiers || (exports.PathToObjectIdentifiers = {})));
var BatchListObjectParentPathsResponse;
(function (BatchListObjectParentPathsResponse) {
  /**
   * @internal
   */
  BatchListObjectParentPathsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListObjectParentPathsResponse =
    exports.BatchListObjectParentPathsResponse || (exports.BatchListObjectParentPathsResponse = {}))
);
var ObjectIdentifierAndLinkNameTuple;
(function (ObjectIdentifierAndLinkNameTuple) {
  /**
   * @internal
   */
  ObjectIdentifierAndLinkNameTuple.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ObjectIdentifierAndLinkNameTuple =
    exports.ObjectIdentifierAndLinkNameTuple || (exports.ObjectIdentifierAndLinkNameTuple = {}))
);
var BatchListObjectParentsResponse;
(function (BatchListObjectParentsResponse) {
  /**
   * @internal
   */
  BatchListObjectParentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListObjectParentsResponse =
    exports.BatchListObjectParentsResponse || (exports.BatchListObjectParentsResponse = {}))
);
var BatchListObjectPoliciesResponse;
(function (BatchListObjectPoliciesResponse) {
  /**
   * @internal
   */
  BatchListObjectPoliciesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListObjectPoliciesResponse =
    exports.BatchListObjectPoliciesResponse || (exports.BatchListObjectPoliciesResponse = {}))
);
var BatchListOutgoingTypedLinksResponse;
(function (BatchListOutgoingTypedLinksResponse) {
  /**
   * @internal
   */
  BatchListOutgoingTypedLinksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListOutgoingTypedLinksResponse =
    exports.BatchListOutgoingTypedLinksResponse || (exports.BatchListOutgoingTypedLinksResponse = {}))
);
var BatchListPolicyAttachmentsResponse;
(function (BatchListPolicyAttachmentsResponse) {
  /**
   * @internal
   */
  BatchListPolicyAttachmentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchListPolicyAttachmentsResponse =
    exports.BatchListPolicyAttachmentsResponse || (exports.BatchListPolicyAttachmentsResponse = {}))
);
var PolicyAttachment;
(function (PolicyAttachment) {
  /**
   * @internal
   */
  PolicyAttachment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyAttachment = exports.PolicyAttachment || (exports.PolicyAttachment = {})));
var PolicyToPath;
(function (PolicyToPath) {
  /**
   * @internal
   */
  PolicyToPath.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyToPath = exports.PolicyToPath || (exports.PolicyToPath = {})));
var BatchLookupPolicyResponse;
(function (BatchLookupPolicyResponse) {
  /**
   * @internal
   */
  BatchLookupPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchLookupPolicyResponse = exports.BatchLookupPolicyResponse || (exports.BatchLookupPolicyResponse = {})));
var BatchReadSuccessfulResponse;
(function (BatchReadSuccessfulResponse) {
  /**
   * @internal
   */
  BatchReadSuccessfulResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ListObjectAttributes && {
      ListObjectAttributes: BatchListObjectAttributesResponse.filterSensitiveLog(obj.ListObjectAttributes),
    }),
    ...(obj.GetObjectAttributes && {
      GetObjectAttributes: BatchGetObjectAttributesResponse.filterSensitiveLog(obj.GetObjectAttributes),
    }),
    ...(obj.GetLinkAttributes && {
      GetLinkAttributes: BatchGetLinkAttributesResponse.filterSensitiveLog(obj.GetLinkAttributes),
    }),
  });
})((BatchReadSuccessfulResponse = exports.BatchReadSuccessfulResponse || (exports.BatchReadSuccessfulResponse = {})));
var BatchReadOperationResponse;
(function (BatchReadOperationResponse) {
  /**
   * @internal
   */
  BatchReadOperationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SuccessfulResponse && {
      SuccessfulResponse: BatchReadSuccessfulResponse.filterSensitiveLog(obj.SuccessfulResponse),
    }),
  });
})((BatchReadOperationResponse = exports.BatchReadOperationResponse || (exports.BatchReadOperationResponse = {})));
var BatchReadResponse;
(function (BatchReadResponse) {
  /**
   * @internal
   */
  BatchReadResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchReadResponse = exports.BatchReadResponse || (exports.BatchReadResponse = {})));
var BatchWriteExceptionType;
(function (BatchWriteExceptionType) {
  BatchWriteExceptionType["AccessDeniedException"] = "AccessDeniedException";
  BatchWriteExceptionType["DirectoryNotEnabledException"] = "DirectoryNotEnabledException";
  BatchWriteExceptionType["FacetValidationException"] = "FacetValidationException";
  BatchWriteExceptionType["IndexedAttributeMissingException"] = "IndexedAttributeMissingException";
  BatchWriteExceptionType["InternalServiceException"] = "InternalServiceException";
  BatchWriteExceptionType["InvalidArnException"] = "InvalidArnException";
  BatchWriteExceptionType["InvalidAttachmentException"] = "InvalidAttachmentException";
  BatchWriteExceptionType["LimitExceededException"] = "LimitExceededException";
  BatchWriteExceptionType["LinkNameAlreadyInUseException"] = "LinkNameAlreadyInUseException";
  BatchWriteExceptionType["NotIndexException"] = "NotIndexException";
  BatchWriteExceptionType["NotNodeException"] = "NotNodeException";
  BatchWriteExceptionType["NotPolicyException"] = "NotPolicyException";
  BatchWriteExceptionType["ObjectAlreadyDetachedException"] = "ObjectAlreadyDetachedException";
  BatchWriteExceptionType["ObjectNotDetachedException"] = "ObjectNotDetachedException";
  BatchWriteExceptionType["ResourceNotFoundException"] = "ResourceNotFoundException";
  BatchWriteExceptionType["StillContainsLinksException"] = "StillContainsLinksException";
  BatchWriteExceptionType["UnsupportedIndexTypeException"] = "UnsupportedIndexTypeException";
  BatchWriteExceptionType["ValidationException"] = "ValidationException";
})((BatchWriteExceptionType = exports.BatchWriteExceptionType || (exports.BatchWriteExceptionType = {})));
var BatchWriteException;
(function (BatchWriteException) {
  /**
   * @internal
   */
  BatchWriteException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchWriteException = exports.BatchWriteException || (exports.BatchWriteException = {})));
var BatchAddFacetToObject;
(function (BatchAddFacetToObject) {
  /**
   * @internal
   */
  BatchAddFacetToObject.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeList && {
      ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)),
    }),
  });
})((BatchAddFacetToObject = exports.BatchAddFacetToObject || (exports.BatchAddFacetToObject = {})));
var BatchAttachObject;
(function (BatchAttachObject) {
  /**
   * @internal
   */
  BatchAttachObject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachObject = exports.BatchAttachObject || (exports.BatchAttachObject = {})));
var BatchAttachPolicy;
(function (BatchAttachPolicy) {
  /**
   * @internal
   */
  BatchAttachPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachPolicy = exports.BatchAttachPolicy || (exports.BatchAttachPolicy = {})));
var BatchAttachToIndex;
(function (BatchAttachToIndex) {
  /**
   * @internal
   */
  BatchAttachToIndex.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachToIndex = exports.BatchAttachToIndex || (exports.BatchAttachToIndex = {})));
var BatchAttachTypedLink;
(function (BatchAttachTypedLink) {
  /**
   * @internal
   */
  BatchAttachTypedLink.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeNameAndValue.filterSensitiveLog(item)) }),
  });
})((BatchAttachTypedLink = exports.BatchAttachTypedLink || (exports.BatchAttachTypedLink = {})));
var BatchCreateIndex;
(function (BatchCreateIndex) {
  /**
   * @internal
   */
  BatchCreateIndex.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchCreateIndex = exports.BatchCreateIndex || (exports.BatchCreateIndex = {})));
var BatchCreateObject;
(function (BatchCreateObject) {
  /**
   * @internal
   */
  BatchCreateObject.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeList && {
      ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)),
    }),
  });
})((BatchCreateObject = exports.BatchCreateObject || (exports.BatchCreateObject = {})));
var BatchDeleteObject;
(function (BatchDeleteObject) {
  /**
   * @internal
   */
  BatchDeleteObject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDeleteObject = exports.BatchDeleteObject || (exports.BatchDeleteObject = {})));
var BatchDetachFromIndex;
(function (BatchDetachFromIndex) {
  /**
   * @internal
   */
  BatchDetachFromIndex.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDetachFromIndex = exports.BatchDetachFromIndex || (exports.BatchDetachFromIndex = {})));
var BatchDetachObject;
(function (BatchDetachObject) {
  /**
   * @internal
   */
  BatchDetachObject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDetachObject = exports.BatchDetachObject || (exports.BatchDetachObject = {})));
var BatchDetachPolicy;
(function (BatchDetachPolicy) {
  /**
   * @internal
   */
  BatchDetachPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDetachPolicy = exports.BatchDetachPolicy || (exports.BatchDetachPolicy = {})));
var BatchDetachTypedLink;
(function (BatchDetachTypedLink) {
  /**
   * @internal
   */
  BatchDetachTypedLink.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})((BatchDetachTypedLink = exports.BatchDetachTypedLink || (exports.BatchDetachTypedLink = {})));
var BatchRemoveFacetFromObject;
(function (BatchRemoveFacetFromObject) {
  /**
   * @internal
   */
  BatchRemoveFacetFromObject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchRemoveFacetFromObject = exports.BatchRemoveFacetFromObject || (exports.BatchRemoveFacetFromObject = {})));
var UpdateActionType;
(function (UpdateActionType) {
  UpdateActionType["CREATE_OR_UPDATE"] = "CREATE_OR_UPDATE";
  UpdateActionType["DELETE"] = "DELETE";
})((UpdateActionType = exports.UpdateActionType || (exports.UpdateActionType = {})));
var LinkAttributeAction;
(function (LinkAttributeAction) {
  /**
   * @internal
   */
  LinkAttributeAction.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeUpdateValue && {
      AttributeUpdateValue: TypedAttributeValue.filterSensitiveLog(obj.AttributeUpdateValue),
    }),
  });
})((LinkAttributeAction = exports.LinkAttributeAction || (exports.LinkAttributeAction = {})));
var LinkAttributeUpdate;
(function (LinkAttributeUpdate) {
  /**
   * @internal
   */
  LinkAttributeUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeAction && { AttributeAction: LinkAttributeAction.filterSensitiveLog(obj.AttributeAction) }),
  });
})((LinkAttributeUpdate = exports.LinkAttributeUpdate || (exports.LinkAttributeUpdate = {})));
var BatchUpdateLinkAttributes;
(function (BatchUpdateLinkAttributes) {
  /**
   * @internal
   */
  BatchUpdateLinkAttributes.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => LinkAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})((BatchUpdateLinkAttributes = exports.BatchUpdateLinkAttributes || (exports.BatchUpdateLinkAttributes = {})));
var ObjectAttributeAction;
(function (ObjectAttributeAction) {
  /**
   * @internal
   */
  ObjectAttributeAction.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeUpdateValue && {
      ObjectAttributeUpdateValue: TypedAttributeValue.filterSensitiveLog(obj.ObjectAttributeUpdateValue),
    }),
  });
})((ObjectAttributeAction = exports.ObjectAttributeAction || (exports.ObjectAttributeAction = {})));
var ObjectAttributeUpdate;
(function (ObjectAttributeUpdate) {
  /**
   * @internal
   */
  ObjectAttributeUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeAction && {
      ObjectAttributeAction: ObjectAttributeAction.filterSensitiveLog(obj.ObjectAttributeAction),
    }),
  });
})((ObjectAttributeUpdate = exports.ObjectAttributeUpdate || (exports.ObjectAttributeUpdate = {})));
var BatchUpdateObjectAttributes;
(function (BatchUpdateObjectAttributes) {
  /**
   * @internal
   */
  BatchUpdateObjectAttributes.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => ObjectAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})((BatchUpdateObjectAttributes = exports.BatchUpdateObjectAttributes || (exports.BatchUpdateObjectAttributes = {})));
var BatchWriteOperation;
(function (BatchWriteOperation) {
  /**
   * @internal
   */
  BatchWriteOperation.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UpdateObjectAttributes && {
      UpdateObjectAttributes: BatchUpdateObjectAttributes.filterSensitiveLog(obj.UpdateObjectAttributes),
    }),
    ...(obj.AddFacetToObject && { AddFacetToObject: BatchAddFacetToObject.filterSensitiveLog(obj.AddFacetToObject) }),
    ...(obj.AttachTypedLink && { AttachTypedLink: BatchAttachTypedLink.filterSensitiveLog(obj.AttachTypedLink) }),
    ...(obj.DetachTypedLink && { DetachTypedLink: BatchDetachTypedLink.filterSensitiveLog(obj.DetachTypedLink) }),
    ...(obj.UpdateLinkAttributes && {
      UpdateLinkAttributes: BatchUpdateLinkAttributes.filterSensitiveLog(obj.UpdateLinkAttributes),
    }),
  });
})((BatchWriteOperation = exports.BatchWriteOperation || (exports.BatchWriteOperation = {})));
var BatchWriteRequest;
(function (BatchWriteRequest) {
  /**
   * @internal
   */
  BatchWriteRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchWriteRequest = exports.BatchWriteRequest || (exports.BatchWriteRequest = {})));
var BatchAddFacetToObjectResponse;
(function (BatchAddFacetToObjectResponse) {
  /**
   * @internal
   */
  BatchAddFacetToObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchAddFacetToObjectResponse =
    exports.BatchAddFacetToObjectResponse || (exports.BatchAddFacetToObjectResponse = {}))
);
var BatchAttachObjectResponse;
(function (BatchAttachObjectResponse) {
  /**
   * @internal
   */
  BatchAttachObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachObjectResponse = exports.BatchAttachObjectResponse || (exports.BatchAttachObjectResponse = {})));
var BatchAttachPolicyResponse;
(function (BatchAttachPolicyResponse) {
  /**
   * @internal
   */
  BatchAttachPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachPolicyResponse = exports.BatchAttachPolicyResponse || (exports.BatchAttachPolicyResponse = {})));
var BatchAttachToIndexResponse;
(function (BatchAttachToIndexResponse) {
  /**
   * @internal
   */
  BatchAttachToIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchAttachToIndexResponse = exports.BatchAttachToIndexResponse || (exports.BatchAttachToIndexResponse = {})));
var BatchAttachTypedLinkResponse;
(function (BatchAttachTypedLinkResponse) {
  /**
   * @internal
   */
  BatchAttachTypedLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})(
  (BatchAttachTypedLinkResponse = exports.BatchAttachTypedLinkResponse || (exports.BatchAttachTypedLinkResponse = {}))
);
var BatchCreateIndexResponse;
(function (BatchCreateIndexResponse) {
  /**
   * @internal
   */
  BatchCreateIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchCreateIndexResponse = exports.BatchCreateIndexResponse || (exports.BatchCreateIndexResponse = {})));
var BatchCreateObjectResponse;
(function (BatchCreateObjectResponse) {
  /**
   * @internal
   */
  BatchCreateObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchCreateObjectResponse = exports.BatchCreateObjectResponse || (exports.BatchCreateObjectResponse = {})));
var BatchDeleteObjectResponse;
(function (BatchDeleteObjectResponse) {
  /**
   * @internal
   */
  BatchDeleteObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDeleteObjectResponse = exports.BatchDeleteObjectResponse || (exports.BatchDeleteObjectResponse = {})));
var BatchDetachFromIndexResponse;
(function (BatchDetachFromIndexResponse) {
  /**
   * @internal
   */
  BatchDetachFromIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDetachFromIndexResponse = exports.BatchDetachFromIndexResponse || (exports.BatchDetachFromIndexResponse = {}))
);
var BatchDetachObjectResponse;
(function (BatchDetachObjectResponse) {
  /**
   * @internal
   */
  BatchDetachObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDetachObjectResponse = exports.BatchDetachObjectResponse || (exports.BatchDetachObjectResponse = {})));
var BatchDetachPolicyResponse;
(function (BatchDetachPolicyResponse) {
  /**
   * @internal
   */
  BatchDetachPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDetachPolicyResponse = exports.BatchDetachPolicyResponse || (exports.BatchDetachPolicyResponse = {})));
var BatchDetachTypedLinkResponse;
(function (BatchDetachTypedLinkResponse) {
  /**
   * @internal
   */
  BatchDetachTypedLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDetachTypedLinkResponse = exports.BatchDetachTypedLinkResponse || (exports.BatchDetachTypedLinkResponse = {}))
);
var BatchRemoveFacetFromObjectResponse;
(function (BatchRemoveFacetFromObjectResponse) {
  /**
   * @internal
   */
  BatchRemoveFacetFromObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchRemoveFacetFromObjectResponse =
    exports.BatchRemoveFacetFromObjectResponse || (exports.BatchRemoveFacetFromObjectResponse = {}))
);
var BatchUpdateLinkAttributesResponse;
(function (BatchUpdateLinkAttributesResponse) {
  /**
   * @internal
   */
  BatchUpdateLinkAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchUpdateLinkAttributesResponse =
    exports.BatchUpdateLinkAttributesResponse || (exports.BatchUpdateLinkAttributesResponse = {}))
);
var BatchUpdateObjectAttributesResponse;
(function (BatchUpdateObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchUpdateObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchUpdateObjectAttributesResponse =
    exports.BatchUpdateObjectAttributesResponse || (exports.BatchUpdateObjectAttributesResponse = {}))
);
var BatchWriteOperationResponse;
(function (BatchWriteOperationResponse) {
  /**
   * @internal
   */
  BatchWriteOperationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttachTypedLink && {
      AttachTypedLink: BatchAttachTypedLinkResponse.filterSensitiveLog(obj.AttachTypedLink),
    }),
  });
})((BatchWriteOperationResponse = exports.BatchWriteOperationResponse || (exports.BatchWriteOperationResponse = {})));
var BatchWriteResponse;
(function (BatchWriteResponse) {
  /**
   * @internal
   */
  BatchWriteResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchWriteResponse = exports.BatchWriteResponse || (exports.BatchWriteResponse = {})));
var CreateDirectoryRequest;
(function (CreateDirectoryRequest) {
  /**
   * @internal
   */
  CreateDirectoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDirectoryRequest = exports.CreateDirectoryRequest || (exports.CreateDirectoryRequest = {})));
var CreateDirectoryResponse;
(function (CreateDirectoryResponse) {
  /**
   * @internal
   */
  CreateDirectoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDirectoryResponse = exports.CreateDirectoryResponse || (exports.CreateDirectoryResponse = {})));
var DirectoryAlreadyExistsException;
(function (DirectoryAlreadyExistsException) {
  /**
   * @internal
   */
  DirectoryAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DirectoryAlreadyExistsException =
    exports.DirectoryAlreadyExistsException || (exports.DirectoryAlreadyExistsException = {}))
);
var RuleType;
(function (RuleType) {
  RuleType["BINARY_LENGTH"] = "BINARY_LENGTH";
  RuleType["NUMBER_COMPARISON"] = "NUMBER_COMPARISON";
  RuleType["STRING_FROM_SET"] = "STRING_FROM_SET";
  RuleType["STRING_LENGTH"] = "STRING_LENGTH";
})((RuleType = exports.RuleType || (exports.RuleType = {})));
var Rule;
(function (Rule) {
  /**
   * @internal
   */
  Rule.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Rule = exports.Rule || (exports.Rule = {})));
var FacetAttributeType;
(function (FacetAttributeType) {
  FacetAttributeType["BINARY"] = "BINARY";
  FacetAttributeType["BOOLEAN"] = "BOOLEAN";
  FacetAttributeType["DATETIME"] = "DATETIME";
  FacetAttributeType["NUMBER"] = "NUMBER";
  FacetAttributeType["STRING"] = "STRING";
  FacetAttributeType["VARIANT"] = "VARIANT";
})((FacetAttributeType = exports.FacetAttributeType || (exports.FacetAttributeType = {})));
var FacetAttributeDefinition;
(function (FacetAttributeDefinition) {
  /**
   * @internal
   */
  FacetAttributeDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DefaultValue && { DefaultValue: TypedAttributeValue.filterSensitiveLog(obj.DefaultValue) }),
  });
})((FacetAttributeDefinition = exports.FacetAttributeDefinition || (exports.FacetAttributeDefinition = {})));
var FacetAttributeReference;
(function (FacetAttributeReference) {
  /**
   * @internal
   */
  FacetAttributeReference.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FacetAttributeReference = exports.FacetAttributeReference || (exports.FacetAttributeReference = {})));
var RequiredAttributeBehavior;
(function (RequiredAttributeBehavior) {
  RequiredAttributeBehavior["NOT_REQUIRED"] = "NOT_REQUIRED";
  RequiredAttributeBehavior["REQUIRED_ALWAYS"] = "REQUIRED_ALWAYS";
})((RequiredAttributeBehavior = exports.RequiredAttributeBehavior || (exports.RequiredAttributeBehavior = {})));
var FacetAttribute;
(function (FacetAttribute) {
  /**
   * @internal
   */
  FacetAttribute.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeDefinition && {
      AttributeDefinition: FacetAttributeDefinition.filterSensitiveLog(obj.AttributeDefinition),
    }),
  });
})((FacetAttribute = exports.FacetAttribute || (exports.FacetAttribute = {})));
var FacetStyle;
(function (FacetStyle) {
  FacetStyle["DYNAMIC"] = "DYNAMIC";
  FacetStyle["STATIC"] = "STATIC";
})((FacetStyle = exports.FacetStyle || (exports.FacetStyle = {})));
var ObjectType;
(function (ObjectType) {
  ObjectType["INDEX"] = "INDEX";
  ObjectType["LEAF_NODE"] = "LEAF_NODE";
  ObjectType["NODE"] = "NODE";
  ObjectType["POLICY"] = "POLICY";
})((ObjectType = exports.ObjectType || (exports.ObjectType = {})));
var CreateFacetRequest;
(function (CreateFacetRequest) {
  /**
   * @internal
   */
  CreateFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => FacetAttribute.filterSensitiveLog(item)) }),
  });
})((CreateFacetRequest = exports.CreateFacetRequest || (exports.CreateFacetRequest = {})));
var CreateFacetResponse;
(function (CreateFacetResponse) {
  /**
   * @internal
   */
  CreateFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFacetResponse = exports.CreateFacetResponse || (exports.CreateFacetResponse = {})));
var FacetAlreadyExistsException;
(function (FacetAlreadyExistsException) {
  /**
   * @internal
   */
  FacetAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FacetAlreadyExistsException = exports.FacetAlreadyExistsException || (exports.FacetAlreadyExistsException = {})));
var InvalidRuleException;
(function (InvalidRuleException) {
  /**
   * @internal
   */
  InvalidRuleException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRuleException = exports.InvalidRuleException || (exports.InvalidRuleException = {})));
var CreateIndexRequest;
(function (CreateIndexRequest) {
  /**
   * @internal
   */
  CreateIndexRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateIndexRequest = exports.CreateIndexRequest || (exports.CreateIndexRequest = {})));
var CreateIndexResponse;
(function (CreateIndexResponse) {
  /**
   * @internal
   */
  CreateIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateIndexResponse = exports.CreateIndexResponse || (exports.CreateIndexResponse = {})));
var UnsupportedIndexTypeException;
(function (UnsupportedIndexTypeException) {
  /**
   * @internal
   */
  UnsupportedIndexTypeException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UnsupportedIndexTypeException =
    exports.UnsupportedIndexTypeException || (exports.UnsupportedIndexTypeException = {}))
);
var CreateObjectRequest;
(function (CreateObjectRequest) {
  /**
   * @internal
   */
  CreateObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ObjectAttributeList && {
      ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)),
    }),
  });
})((CreateObjectRequest = exports.CreateObjectRequest || (exports.CreateObjectRequest = {})));
var CreateObjectResponse;
(function (CreateObjectResponse) {
  /**
   * @internal
   */
  CreateObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateObjectResponse = exports.CreateObjectResponse || (exports.CreateObjectResponse = {})));
var CreateSchemaRequest;
(function (CreateSchemaRequest) {
  /**
   * @internal
   */
  CreateSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSchemaRequest = exports.CreateSchemaRequest || (exports.CreateSchemaRequest = {})));
var CreateSchemaResponse;
(function (CreateSchemaResponse) {
  /**
   * @internal
   */
  CreateSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSchemaResponse = exports.CreateSchemaResponse || (exports.CreateSchemaResponse = {})));
var TypedLinkAttributeDefinition;
(function (TypedLinkAttributeDefinition) {
  /**
   * @internal
   */
  TypedLinkAttributeDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DefaultValue && { DefaultValue: TypedAttributeValue.filterSensitiveLog(obj.DefaultValue) }),
  });
})(
  (TypedLinkAttributeDefinition = exports.TypedLinkAttributeDefinition || (exports.TypedLinkAttributeDefinition = {}))
);
var TypedLinkFacet;
(function (TypedLinkFacet) {
  /**
   * @internal
   */
  TypedLinkFacet.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && {
      Attributes: obj.Attributes.map((item) => TypedLinkAttributeDefinition.filterSensitiveLog(item)),
    }),
  });
})((TypedLinkFacet = exports.TypedLinkFacet || (exports.TypedLinkFacet = {})));
var CreateTypedLinkFacetRequest;
(function (CreateTypedLinkFacetRequest) {
  /**
   * @internal
   */
  CreateTypedLinkFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Facet && { Facet: TypedLinkFacet.filterSensitiveLog(obj.Facet) }),
  });
})((CreateTypedLinkFacetRequest = exports.CreateTypedLinkFacetRequest || (exports.CreateTypedLinkFacetRequest = {})));
var CreateTypedLinkFacetResponse;
(function (CreateTypedLinkFacetResponse) {
  /**
   * @internal
   */
  CreateTypedLinkFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateTypedLinkFacetResponse = exports.CreateTypedLinkFacetResponse || (exports.CreateTypedLinkFacetResponse = {}))
);
var DeleteDirectoryRequest;
(function (DeleteDirectoryRequest) {
  /**
   * @internal
   */
  DeleteDirectoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDirectoryRequest = exports.DeleteDirectoryRequest || (exports.DeleteDirectoryRequest = {})));
var DeleteDirectoryResponse;
(function (DeleteDirectoryResponse) {
  /**
   * @internal
   */
  DeleteDirectoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDirectoryResponse = exports.DeleteDirectoryResponse || (exports.DeleteDirectoryResponse = {})));
var DirectoryDeletedException;
(function (DirectoryDeletedException) {
  /**
   * @internal
   */
  DirectoryDeletedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DirectoryDeletedException = exports.DirectoryDeletedException || (exports.DirectoryDeletedException = {})));
var DirectoryNotDisabledException;
(function (DirectoryNotDisabledException) {
  /**
   * @internal
   */
  DirectoryNotDisabledException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DirectoryNotDisabledException =
    exports.DirectoryNotDisabledException || (exports.DirectoryNotDisabledException = {}))
);
var DeleteFacetRequest;
(function (DeleteFacetRequest) {
  /**
   * @internal
   */
  DeleteFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFacetRequest = exports.DeleteFacetRequest || (exports.DeleteFacetRequest = {})));
var DeleteFacetResponse;
(function (DeleteFacetResponse) {
  /**
   * @internal
   */
  DeleteFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFacetResponse = exports.DeleteFacetResponse || (exports.DeleteFacetResponse = {})));
var FacetInUseException;
(function (FacetInUseException) {
  /**
   * @internal
   */
  FacetInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FacetInUseException = exports.FacetInUseException || (exports.FacetInUseException = {})));
var FacetNotFoundException;
(function (FacetNotFoundException) {
  /**
   * @internal
   */
  FacetNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FacetNotFoundException = exports.FacetNotFoundException || (exports.FacetNotFoundException = {})));
var DeleteObjectRequest;
(function (DeleteObjectRequest) {
  /**
   * @internal
   */
  DeleteObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteObjectRequest = exports.DeleteObjectRequest || (exports.DeleteObjectRequest = {})));
var DeleteObjectResponse;
(function (DeleteObjectResponse) {
  /**
   * @internal
   */
  DeleteObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteObjectResponse = exports.DeleteObjectResponse || (exports.DeleteObjectResponse = {})));
var ObjectNotDetachedException;
(function (ObjectNotDetachedException) {
  /**
   * @internal
   */
  ObjectNotDetachedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ObjectNotDetachedException = exports.ObjectNotDetachedException || (exports.ObjectNotDetachedException = {})));
var DeleteSchemaRequest;
(function (DeleteSchemaRequest) {
  /**
   * @internal
   */
  DeleteSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSchemaRequest = exports.DeleteSchemaRequest || (exports.DeleteSchemaRequest = {})));
var DeleteSchemaResponse;
(function (DeleteSchemaResponse) {
  /**
   * @internal
   */
  DeleteSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSchemaResponse = exports.DeleteSchemaResponse || (exports.DeleteSchemaResponse = {})));
var StillContainsLinksException;
(function (StillContainsLinksException) {
  /**
   * @internal
   */
  StillContainsLinksException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StillContainsLinksException = exports.StillContainsLinksException || (exports.StillContainsLinksException = {})));
var DeleteTypedLinkFacetRequest;
(function (DeleteTypedLinkFacetRequest) {
  /**
   * @internal
   */
  DeleteTypedLinkFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTypedLinkFacetRequest = exports.DeleteTypedLinkFacetRequest || (exports.DeleteTypedLinkFacetRequest = {})));
var DeleteTypedLinkFacetResponse;
(function (DeleteTypedLinkFacetResponse) {
  /**
   * @internal
   */
  DeleteTypedLinkFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteTypedLinkFacetResponse = exports.DeleteTypedLinkFacetResponse || (exports.DeleteTypedLinkFacetResponse = {}))
);
var DetachFromIndexRequest;
(function (DetachFromIndexRequest) {
  /**
   * @internal
   */
  DetachFromIndexRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachFromIndexRequest = exports.DetachFromIndexRequest || (exports.DetachFromIndexRequest = {})));
var DetachFromIndexResponse;
(function (DetachFromIndexResponse) {
  /**
   * @internal
   */
  DetachFromIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachFromIndexResponse = exports.DetachFromIndexResponse || (exports.DetachFromIndexResponse = {})));
var ObjectAlreadyDetachedException;
(function (ObjectAlreadyDetachedException) {
  /**
   * @internal
   */
  ObjectAlreadyDetachedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ObjectAlreadyDetachedException =
    exports.ObjectAlreadyDetachedException || (exports.ObjectAlreadyDetachedException = {}))
);
var DetachObjectRequest;
(function (DetachObjectRequest) {
  /**
   * @internal
   */
  DetachObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachObjectRequest = exports.DetachObjectRequest || (exports.DetachObjectRequest = {})));
var DetachObjectResponse;
(function (DetachObjectResponse) {
  /**
   * @internal
   */
  DetachObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachObjectResponse = exports.DetachObjectResponse || (exports.DetachObjectResponse = {})));
var NotNodeException;
(function (NotNodeException) {
  /**
   * @internal
   */
  NotNodeException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotNodeException = exports.NotNodeException || (exports.NotNodeException = {})));
var DetachPolicyRequest;
(function (DetachPolicyRequest) {
  /**
   * @internal
   */
  DetachPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachPolicyRequest = exports.DetachPolicyRequest || (exports.DetachPolicyRequest = {})));
var DetachPolicyResponse;
(function (DetachPolicyResponse) {
  /**
   * @internal
   */
  DetachPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetachPolicyResponse = exports.DetachPolicyResponse || (exports.DetachPolicyResponse = {})));
var DetachTypedLinkRequest;
(function (DetachTypedLinkRequest) {
  /**
   * @internal
   */
  DetachTypedLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})((DetachTypedLinkRequest = exports.DetachTypedLinkRequest || (exports.DetachTypedLinkRequest = {})));
var DisableDirectoryRequest;
(function (DisableDirectoryRequest) {
  /**
   * @internal
   */
  DisableDirectoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DisableDirectoryRequest = exports.DisableDirectoryRequest || (exports.DisableDirectoryRequest = {})));
var DisableDirectoryResponse;
(function (DisableDirectoryResponse) {
  /**
   * @internal
   */
  DisableDirectoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DisableDirectoryResponse = exports.DisableDirectoryResponse || (exports.DisableDirectoryResponse = {})));
var EnableDirectoryRequest;
(function (EnableDirectoryRequest) {
  /**
   * @internal
   */
  EnableDirectoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnableDirectoryRequest = exports.EnableDirectoryRequest || (exports.EnableDirectoryRequest = {})));
var EnableDirectoryResponse;
(function (EnableDirectoryResponse) {
  /**
   * @internal
   */
  EnableDirectoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnableDirectoryResponse = exports.EnableDirectoryResponse || (exports.EnableDirectoryResponse = {})));
var GetAppliedSchemaVersionRequest;
(function (GetAppliedSchemaVersionRequest) {
  /**
   * @internal
   */
  GetAppliedSchemaVersionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAppliedSchemaVersionRequest =
    exports.GetAppliedSchemaVersionRequest || (exports.GetAppliedSchemaVersionRequest = {}))
);
var GetAppliedSchemaVersionResponse;
(function (GetAppliedSchemaVersionResponse) {
  /**
   * @internal
   */
  GetAppliedSchemaVersionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAppliedSchemaVersionResponse =
    exports.GetAppliedSchemaVersionResponse || (exports.GetAppliedSchemaVersionResponse = {}))
);
var GetDirectoryRequest;
(function (GetDirectoryRequest) {
  /**
   * @internal
   */
  GetDirectoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDirectoryRequest = exports.GetDirectoryRequest || (exports.GetDirectoryRequest = {})));
var DirectoryState;
(function (DirectoryState) {
  DirectoryState["DELETED"] = "DELETED";
  DirectoryState["DISABLED"] = "DISABLED";
  DirectoryState["ENABLED"] = "ENABLED";
})((DirectoryState = exports.DirectoryState || (exports.DirectoryState = {})));
var Directory;
(function (Directory) {
  /**
   * @internal
   */
  Directory.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Directory = exports.Directory || (exports.Directory = {})));
var GetDirectoryResponse;
(function (GetDirectoryResponse) {
  /**
   * @internal
   */
  GetDirectoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDirectoryResponse = exports.GetDirectoryResponse || (exports.GetDirectoryResponse = {})));
var GetFacetRequest;
(function (GetFacetRequest) {
  /**
   * @internal
   */
  GetFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFacetRequest = exports.GetFacetRequest || (exports.GetFacetRequest = {})));
var Facet;
(function (Facet) {
  /**
   * @internal
   */
  Facet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Facet = exports.Facet || (exports.Facet = {})));
var GetFacetResponse;
(function (GetFacetResponse) {
  /**
   * @internal
   */
  GetFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFacetResponse = exports.GetFacetResponse || (exports.GetFacetResponse = {})));
var GetLinkAttributesRequest;
(function (GetLinkAttributesRequest) {
  /**
   * @internal
   */
  GetLinkAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
  });
})((GetLinkAttributesRequest = exports.GetLinkAttributesRequest || (exports.GetLinkAttributesRequest = {})));
var GetLinkAttributesResponse;
(function (GetLinkAttributesResponse) {
  /**
   * @internal
   */
  GetLinkAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})((GetLinkAttributesResponse = exports.GetLinkAttributesResponse || (exports.GetLinkAttributesResponse = {})));
var GetObjectAttributesRequest;
(function (GetObjectAttributesRequest) {
  /**
   * @internal
   */
  GetObjectAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetObjectAttributesRequest = exports.GetObjectAttributesRequest || (exports.GetObjectAttributesRequest = {})));
var GetObjectAttributesResponse;
(function (GetObjectAttributesResponse) {
  /**
   * @internal
   */
  GetObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})((GetObjectAttributesResponse = exports.GetObjectAttributesResponse || (exports.GetObjectAttributesResponse = {})));
var GetObjectInformationRequest;
(function (GetObjectInformationRequest) {
  /**
   * @internal
   */
  GetObjectInformationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetObjectInformationRequest = exports.GetObjectInformationRequest || (exports.GetObjectInformationRequest = {})));
var GetObjectInformationResponse;
(function (GetObjectInformationResponse) {
  /**
   * @internal
   */
  GetObjectInformationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetObjectInformationResponse = exports.GetObjectInformationResponse || (exports.GetObjectInformationResponse = {}))
);
var GetSchemaAsJsonRequest;
(function (GetSchemaAsJsonRequest) {
  /**
   * @internal
   */
  GetSchemaAsJsonRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSchemaAsJsonRequest = exports.GetSchemaAsJsonRequest || (exports.GetSchemaAsJsonRequest = {})));
var GetSchemaAsJsonResponse;
(function (GetSchemaAsJsonResponse) {
  /**
   * @internal
   */
  GetSchemaAsJsonResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSchemaAsJsonResponse = exports.GetSchemaAsJsonResponse || (exports.GetSchemaAsJsonResponse = {})));
var GetTypedLinkFacetInformationRequest;
(function (GetTypedLinkFacetInformationRequest) {
  /**
   * @internal
   */
  GetTypedLinkFacetInformationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetTypedLinkFacetInformationRequest =
    exports.GetTypedLinkFacetInformationRequest || (exports.GetTypedLinkFacetInformationRequest = {}))
);
var GetTypedLinkFacetInformationResponse;
(function (GetTypedLinkFacetInformationResponse) {
  /**
   * @internal
   */
  GetTypedLinkFacetInformationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetTypedLinkFacetInformationResponse =
    exports.GetTypedLinkFacetInformationResponse || (exports.GetTypedLinkFacetInformationResponse = {}))
);
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {})));
var ListAppliedSchemaArnsRequest;
(function (ListAppliedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListAppliedSchemaArnsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAppliedSchemaArnsRequest = exports.ListAppliedSchemaArnsRequest || (exports.ListAppliedSchemaArnsRequest = {}))
);
var ListAppliedSchemaArnsResponse;
(function (ListAppliedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListAppliedSchemaArnsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAppliedSchemaArnsResponse =
    exports.ListAppliedSchemaArnsResponse || (exports.ListAppliedSchemaArnsResponse = {}))
);
var ListAttachedIndicesRequest;
(function (ListAttachedIndicesRequest) {
  /**
   * @internal
   */
  ListAttachedIndicesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAttachedIndicesRequest = exports.ListAttachedIndicesRequest || (exports.ListAttachedIndicesRequest = {})));
var ListAttachedIndicesResponse;
(function (ListAttachedIndicesResponse) {
  /**
   * @internal
   */
  ListAttachedIndicesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAttachedIndicesResponse = exports.ListAttachedIndicesResponse || (exports.ListAttachedIndicesResponse = {})));
var ListDevelopmentSchemaArnsRequest;
(function (ListDevelopmentSchemaArnsRequest) {
  /**
   * @internal
   */
  ListDevelopmentSchemaArnsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDevelopmentSchemaArnsRequest =
    exports.ListDevelopmentSchemaArnsRequest || (exports.ListDevelopmentSchemaArnsRequest = {}))
);
var ListDevelopmentSchemaArnsResponse;
(function (ListDevelopmentSchemaArnsResponse) {
  /**
   * @internal
   */
  ListDevelopmentSchemaArnsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDevelopmentSchemaArnsResponse =
    exports.ListDevelopmentSchemaArnsResponse || (exports.ListDevelopmentSchemaArnsResponse = {}))
);
var ListDirectoriesRequest;
(function (ListDirectoriesRequest) {
  /**
   * @internal
   */
  ListDirectoriesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDirectoriesRequest = exports.ListDirectoriesRequest || (exports.ListDirectoriesRequest = {})));
var ListDirectoriesResponse;
(function (ListDirectoriesResponse) {
  /**
   * @internal
   */
  ListDirectoriesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDirectoriesResponse = exports.ListDirectoriesResponse || (exports.ListDirectoriesResponse = {})));
var ListFacetAttributesRequest;
(function (ListFacetAttributesRequest) {
  /**
   * @internal
   */
  ListFacetAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFacetAttributesRequest = exports.ListFacetAttributesRequest || (exports.ListFacetAttributesRequest = {})));
var ListFacetAttributesResponse;
(function (ListFacetAttributesResponse) {
  /**
   * @internal
   */
  ListFacetAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => FacetAttribute.filterSensitiveLog(item)) }),
  });
})((ListFacetAttributesResponse = exports.ListFacetAttributesResponse || (exports.ListFacetAttributesResponse = {})));
var ListFacetNamesRequest;
(function (ListFacetNamesRequest) {
  /**
   * @internal
   */
  ListFacetNamesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFacetNamesRequest = exports.ListFacetNamesRequest || (exports.ListFacetNamesRequest = {})));
var ListFacetNamesResponse;
(function (ListFacetNamesResponse) {
  /**
   * @internal
   */
  ListFacetNamesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFacetNamesResponse = exports.ListFacetNamesResponse || (exports.ListFacetNamesResponse = {})));
var ListIncomingTypedLinksRequest;
(function (ListIncomingTypedLinksRequest) {
  /**
   * @internal
   */
  ListIncomingTypedLinksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FilterAttributeRanges && {
      FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRange.filterSensitiveLog(item)),
    }),
  });
})(
  (ListIncomingTypedLinksRequest =
    exports.ListIncomingTypedLinksRequest || (exports.ListIncomingTypedLinksRequest = {}))
);
var ListIncomingTypedLinksResponse;
(function (ListIncomingTypedLinksResponse) {
  /**
   * @internal
   */
  ListIncomingTypedLinksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListIncomingTypedLinksResponse =
    exports.ListIncomingTypedLinksResponse || (exports.ListIncomingTypedLinksResponse = {}))
);
var ListIndexRequest;
(function (ListIndexRequest) {
  /**
   * @internal
   */
  ListIndexRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RangesOnIndexedValues && {
      RangesOnIndexedValues: obj.RangesOnIndexedValues.map((item) => ObjectAttributeRange.filterSensitiveLog(item)),
    }),
  });
})((ListIndexRequest = exports.ListIndexRequest || (exports.ListIndexRequest = {})));
var ListIndexResponse;
(function (ListIndexResponse) {
  /**
   * @internal
   */
  ListIndexResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListIndexResponse = exports.ListIndexResponse || (exports.ListIndexResponse = {})));
var ListManagedSchemaArnsRequest;
(function (ListManagedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListManagedSchemaArnsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListManagedSchemaArnsRequest = exports.ListManagedSchemaArnsRequest || (exports.ListManagedSchemaArnsRequest = {}))
);
var ListManagedSchemaArnsResponse;
(function (ListManagedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListManagedSchemaArnsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListManagedSchemaArnsResponse =
    exports.ListManagedSchemaArnsResponse || (exports.ListManagedSchemaArnsResponse = {}))
);
var ListObjectAttributesRequest;
(function (ListObjectAttributesRequest) {
  /**
   * @internal
   */
  ListObjectAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectAttributesRequest = exports.ListObjectAttributesRequest || (exports.ListObjectAttributesRequest = {})));
var ListObjectAttributesResponse;
(function (ListObjectAttributesResponse) {
  /**
   * @internal
   */
  ListObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValue.filterSensitiveLog(item)) }),
  });
})(
  (ListObjectAttributesResponse = exports.ListObjectAttributesResponse || (exports.ListObjectAttributesResponse = {}))
);
var ListObjectChildrenRequest;
(function (ListObjectChildrenRequest) {
  /**
   * @internal
   */
  ListObjectChildrenRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectChildrenRequest = exports.ListObjectChildrenRequest || (exports.ListObjectChildrenRequest = {})));
var ListObjectChildrenResponse;
(function (ListObjectChildrenResponse) {
  /**
   * @internal
   */
  ListObjectChildrenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectChildrenResponse = exports.ListObjectChildrenResponse || (exports.ListObjectChildrenResponse = {})));
var ListObjectParentPathsRequest;
(function (ListObjectParentPathsRequest) {
  /**
   * @internal
   */
  ListObjectParentPathsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListObjectParentPathsRequest = exports.ListObjectParentPathsRequest || (exports.ListObjectParentPathsRequest = {}))
);
var ListObjectParentPathsResponse;
(function (ListObjectParentPathsResponse) {
  /**
   * @internal
   */
  ListObjectParentPathsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListObjectParentPathsResponse =
    exports.ListObjectParentPathsResponse || (exports.ListObjectParentPathsResponse = {}))
);
var CannotListParentOfRootException;
(function (CannotListParentOfRootException) {
  /**
   * @internal
   */
  CannotListParentOfRootException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CannotListParentOfRootException =
    exports.CannotListParentOfRootException || (exports.CannotListParentOfRootException = {}))
);
var ListObjectParentsRequest;
(function (ListObjectParentsRequest) {
  /**
   * @internal
   */
  ListObjectParentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectParentsRequest = exports.ListObjectParentsRequest || (exports.ListObjectParentsRequest = {})));
var ListObjectParentsResponse;
(function (ListObjectParentsResponse) {
  /**
   * @internal
   */
  ListObjectParentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectParentsResponse = exports.ListObjectParentsResponse || (exports.ListObjectParentsResponse = {})));
var ListObjectPoliciesRequest;
(function (ListObjectPoliciesRequest) {
  /**
   * @internal
   */
  ListObjectPoliciesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectPoliciesRequest = exports.ListObjectPoliciesRequest || (exports.ListObjectPoliciesRequest = {})));
var ListObjectPoliciesResponse;
(function (ListObjectPoliciesResponse) {
  /**
   * @internal
   */
  ListObjectPoliciesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListObjectPoliciesResponse = exports.ListObjectPoliciesResponse || (exports.ListObjectPoliciesResponse = {})));
var ListOutgoingTypedLinksRequest;
(function (ListOutgoingTypedLinksRequest) {
  /**
   * @internal
   */
  ListOutgoingTypedLinksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FilterAttributeRanges && {
      FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRange.filterSensitiveLog(item)),
    }),
  });
})(
  (ListOutgoingTypedLinksRequest =
    exports.ListOutgoingTypedLinksRequest || (exports.ListOutgoingTypedLinksRequest = {}))
);
var ListOutgoingTypedLinksResponse;
(function (ListOutgoingTypedLinksResponse) {
  /**
   * @internal
   */
  ListOutgoingTypedLinksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListOutgoingTypedLinksResponse =
    exports.ListOutgoingTypedLinksResponse || (exports.ListOutgoingTypedLinksResponse = {}))
);
var ListPolicyAttachmentsRequest;
(function (ListPolicyAttachmentsRequest) {
  /**
   * @internal
   */
  ListPolicyAttachmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPolicyAttachmentsRequest = exports.ListPolicyAttachmentsRequest || (exports.ListPolicyAttachmentsRequest = {}))
);
var ListPolicyAttachmentsResponse;
(function (ListPolicyAttachmentsResponse) {
  /**
   * @internal
   */
  ListPolicyAttachmentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPolicyAttachmentsResponse =
    exports.ListPolicyAttachmentsResponse || (exports.ListPolicyAttachmentsResponse = {}))
);
var ListPublishedSchemaArnsRequest;
(function (ListPublishedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListPublishedSchemaArnsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPublishedSchemaArnsRequest =
    exports.ListPublishedSchemaArnsRequest || (exports.ListPublishedSchemaArnsRequest = {}))
);
var ListPublishedSchemaArnsResponse;
(function (ListPublishedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListPublishedSchemaArnsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPublishedSchemaArnsResponse =
    exports.ListPublishedSchemaArnsResponse || (exports.ListPublishedSchemaArnsResponse = {}))
);
var InvalidTaggingRequestException;
(function (InvalidTaggingRequestException) {
  /**
   * @internal
   */
  InvalidTaggingRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidTaggingRequestException =
    exports.InvalidTaggingRequestException || (exports.InvalidTaggingRequestException = {}))
);
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var ListTypedLinkFacetAttributesRequest;
(function (ListTypedLinkFacetAttributesRequest) {
  /**
   * @internal
   */
  ListTypedLinkFacetAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListTypedLinkFacetAttributesRequest =
    exports.ListTypedLinkFacetAttributesRequest || (exports.ListTypedLinkFacetAttributesRequest = {}))
);
var ListTypedLinkFacetAttributesResponse;
(function (ListTypedLinkFacetAttributesResponse) {
  /**
   * @internal
   */
  ListTypedLinkFacetAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attributes && {
      Attributes: obj.Attributes.map((item) => TypedLinkAttributeDefinition.filterSensitiveLog(item)),
    }),
  });
})(
  (ListTypedLinkFacetAttributesResponse =
    exports.ListTypedLinkFacetAttributesResponse || (exports.ListTypedLinkFacetAttributesResponse = {}))
);
var ListTypedLinkFacetNamesRequest;
(function (ListTypedLinkFacetNamesRequest) {
  /**
   * @internal
   */
  ListTypedLinkFacetNamesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListTypedLinkFacetNamesRequest =
    exports.ListTypedLinkFacetNamesRequest || (exports.ListTypedLinkFacetNamesRequest = {}))
);
var ListTypedLinkFacetNamesResponse;
(function (ListTypedLinkFacetNamesResponse) {
  /**
   * @internal
   */
  ListTypedLinkFacetNamesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListTypedLinkFacetNamesResponse =
    exports.ListTypedLinkFacetNamesResponse || (exports.ListTypedLinkFacetNamesResponse = {}))
);
var LookupPolicyRequest;
(function (LookupPolicyRequest) {
  /**
   * @internal
   */
  LookupPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LookupPolicyRequest = exports.LookupPolicyRequest || (exports.LookupPolicyRequest = {})));
var LookupPolicyResponse;
(function (LookupPolicyResponse) {
  /**
   * @internal
   */
  LookupPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LookupPolicyResponse = exports.LookupPolicyResponse || (exports.LookupPolicyResponse = {})));
var PublishSchemaRequest;
(function (PublishSchemaRequest) {
  /**
   * @internal
   */
  PublishSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublishSchemaRequest = exports.PublishSchemaRequest || (exports.PublishSchemaRequest = {})));
var PublishSchemaResponse;
(function (PublishSchemaResponse) {
  /**
   * @internal
   */
  PublishSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublishSchemaResponse = exports.PublishSchemaResponse || (exports.PublishSchemaResponse = {})));
var SchemaAlreadyPublishedException;
(function (SchemaAlreadyPublishedException) {
  /**
   * @internal
   */
  SchemaAlreadyPublishedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SchemaAlreadyPublishedException =
    exports.SchemaAlreadyPublishedException || (exports.SchemaAlreadyPublishedException = {}))
);
var InvalidSchemaDocException;
(function (InvalidSchemaDocException) {
  /**
   * @internal
   */
  InvalidSchemaDocException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidSchemaDocException = exports.InvalidSchemaDocException || (exports.InvalidSchemaDocException = {})));
var PutSchemaFromJsonRequest;
(function (PutSchemaFromJsonRequest) {
  /**
   * @internal
   */
  PutSchemaFromJsonRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutSchemaFromJsonRequest = exports.PutSchemaFromJsonRequest || (exports.PutSchemaFromJsonRequest = {})));
var PutSchemaFromJsonResponse;
(function (PutSchemaFromJsonResponse) {
  /**
   * @internal
   */
  PutSchemaFromJsonResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutSchemaFromJsonResponse = exports.PutSchemaFromJsonResponse || (exports.PutSchemaFromJsonResponse = {})));
var RemoveFacetFromObjectRequest;
(function (RemoveFacetFromObjectRequest) {
  /**
   * @internal
   */
  RemoveFacetFromObjectRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RemoveFacetFromObjectRequest = exports.RemoveFacetFromObjectRequest || (exports.RemoveFacetFromObjectRequest = {}))
);
var RemoveFacetFromObjectResponse;
(function (RemoveFacetFromObjectResponse) {
  /**
   * @internal
   */
  RemoveFacetFromObjectResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RemoveFacetFromObjectResponse =
    exports.RemoveFacetFromObjectResponse || (exports.RemoveFacetFromObjectResponse = {}))
);
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var InvalidFacetUpdateException;
(function (InvalidFacetUpdateException) {
  /**
   * @internal
   */
  InvalidFacetUpdateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidFacetUpdateException = exports.InvalidFacetUpdateException || (exports.InvalidFacetUpdateException = {})));
var FacetAttributeUpdate;
(function (FacetAttributeUpdate) {
  /**
   * @internal
   */
  FacetAttributeUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attribute && { Attribute: FacetAttribute.filterSensitiveLog(obj.Attribute) }),
  });
})((FacetAttributeUpdate = exports.FacetAttributeUpdate || (exports.FacetAttributeUpdate = {})));
var UpdateFacetRequest;
(function (UpdateFacetRequest) {
  /**
   * @internal
   */
  UpdateFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => FacetAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})((UpdateFacetRequest = exports.UpdateFacetRequest || (exports.UpdateFacetRequest = {})));
var UpdateFacetResponse;
(function (UpdateFacetResponse) {
  /**
   * @internal
   */
  UpdateFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFacetResponse = exports.UpdateFacetResponse || (exports.UpdateFacetResponse = {})));
var UpdateLinkAttributesRequest;
(function (UpdateLinkAttributesRequest) {
  /**
   * @internal
   */
  UpdateLinkAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TypedLinkSpecifier && {
      TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
    }),
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => LinkAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})((UpdateLinkAttributesRequest = exports.UpdateLinkAttributesRequest || (exports.UpdateLinkAttributesRequest = {})));
var UpdateLinkAttributesResponse;
(function (UpdateLinkAttributesResponse) {
  /**
   * @internal
   */
  UpdateLinkAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateLinkAttributesResponse = exports.UpdateLinkAttributesResponse || (exports.UpdateLinkAttributesResponse = {}))
);
var UpdateObjectAttributesRequest;
(function (UpdateObjectAttributesRequest) {
  /**
   * @internal
   */
  UpdateObjectAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => ObjectAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})(
  (UpdateObjectAttributesRequest =
    exports.UpdateObjectAttributesRequest || (exports.UpdateObjectAttributesRequest = {}))
);
var UpdateObjectAttributesResponse;
(function (UpdateObjectAttributesResponse) {
  /**
   * @internal
   */
  UpdateObjectAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateObjectAttributesResponse =
    exports.UpdateObjectAttributesResponse || (exports.UpdateObjectAttributesResponse = {}))
);
var UpdateSchemaRequest;
(function (UpdateSchemaRequest) {
  /**
   * @internal
   */
  UpdateSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSchemaRequest = exports.UpdateSchemaRequest || (exports.UpdateSchemaRequest = {})));
var UpdateSchemaResponse;
(function (UpdateSchemaResponse) {
  /**
   * @internal
   */
  UpdateSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSchemaResponse = exports.UpdateSchemaResponse || (exports.UpdateSchemaResponse = {})));
var TypedLinkFacetAttributeUpdate;
(function (TypedLinkFacetAttributeUpdate) {
  /**
   * @internal
   */
  TypedLinkFacetAttributeUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attribute && { Attribute: TypedLinkAttributeDefinition.filterSensitiveLog(obj.Attribute) }),
  });
})(
  (TypedLinkFacetAttributeUpdate =
    exports.TypedLinkFacetAttributeUpdate || (exports.TypedLinkFacetAttributeUpdate = {}))
);
var UpdateTypedLinkFacetRequest;
(function (UpdateTypedLinkFacetRequest) {
  /**
   * @internal
   */
  UpdateTypedLinkFacetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeUpdates && {
      AttributeUpdates: obj.AttributeUpdates.map((item) => TypedLinkFacetAttributeUpdate.filterSensitiveLog(item)),
    }),
  });
})((UpdateTypedLinkFacetRequest = exports.UpdateTypedLinkFacetRequest || (exports.UpdateTypedLinkFacetRequest = {})));
var UpdateTypedLinkFacetResponse;
(function (UpdateTypedLinkFacetResponse) {
  /**
   * @internal
   */
  UpdateTypedLinkFacetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateTypedLinkFacetResponse = exports.UpdateTypedLinkFacetResponse || (exports.UpdateTypedLinkFacetResponse = {}))
);
var IncompatibleSchemaException;
(function (IncompatibleSchemaException) {
  /**
   * @internal
   */
  IncompatibleSchemaException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IncompatibleSchemaException = exports.IncompatibleSchemaException || (exports.IncompatibleSchemaException = {})));
var UpgradeAppliedSchemaRequest;
(function (UpgradeAppliedSchemaRequest) {
  /**
   * @internal
   */
  UpgradeAppliedSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpgradeAppliedSchemaRequest = exports.UpgradeAppliedSchemaRequest || (exports.UpgradeAppliedSchemaRequest = {})));
var UpgradeAppliedSchemaResponse;
(function (UpgradeAppliedSchemaResponse) {
  /**
   * @internal
   */
  UpgradeAppliedSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpgradeAppliedSchemaResponse = exports.UpgradeAppliedSchemaResponse || (exports.UpgradeAppliedSchemaResponse = {}))
);
var UpgradePublishedSchemaRequest;
(function (UpgradePublishedSchemaRequest) {
  /**
   * @internal
   */
  UpgradePublishedSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpgradePublishedSchemaRequest =
    exports.UpgradePublishedSchemaRequest || (exports.UpgradePublishedSchemaRequest = {}))
);
var UpgradePublishedSchemaResponse;
(function (UpgradePublishedSchemaResponse) {
  /**
   * @internal
   */
  UpgradePublishedSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpgradePublishedSchemaResponse =
    exports.UpgradePublishedSchemaResponse || (exports.UpgradePublishedSchemaResponse = {}))
);
//# sourceMappingURL=models_0.js.map
