import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AttributeKey;
(function (AttributeKey) {
  /**
   * @internal
   */
  AttributeKey.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttributeKey || (AttributeKey = {}));
export var TypedAttributeValue;
(function (TypedAttributeValue) {
  TypedAttributeValue.visit = function (value, visitor) {
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
  TypedAttributeValue.filterSensitiveLog = function (obj) {
    var _a;
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.BinaryValue !== undefined) return { BinaryValue: obj.BinaryValue };
    if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
    if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
    if (obj.DatetimeValue !== undefined) return { DatetimeValue: obj.DatetimeValue };
    if (obj.$unknown !== undefined) return (_a = {}), (_a[obj.$unknown[0]] = "UNKNOWN"), _a;
  };
})(TypedAttributeValue || (TypedAttributeValue = {}));
export var AttributeKeyAndValue;
(function (AttributeKeyAndValue) {
  /**
   * @internal
   */
  AttributeKeyAndValue.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Value && { Value: TypedAttributeValue.filterSensitiveLog(obj.Value) });
  };
})(AttributeKeyAndValue || (AttributeKeyAndValue = {}));
export var ObjectReference;
(function (ObjectReference) {
  /**
   * @internal
   */
  ObjectReference.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectReference || (ObjectReference = {}));
export var SchemaFacet;
(function (SchemaFacet) {
  /**
   * @internal
   */
  SchemaFacet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SchemaFacet || (SchemaFacet = {}));
export var AddFacetToObjectRequest;
(function (AddFacetToObjectRequest) {
  /**
   * @internal
   */
  AddFacetToObjectRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeList && {
        ObjectAttributeList: obj.ObjectAttributeList.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(AddFacetToObjectRequest || (AddFacetToObjectRequest = {}));
export var AddFacetToObjectResponse;
(function (AddFacetToObjectResponse) {
  /**
   * @internal
   */
  AddFacetToObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AddFacetToObjectResponse || (AddFacetToObjectResponse = {}));
export var DirectoryNotEnabledException;
(function (DirectoryNotEnabledException) {
  /**
   * @internal
   */
  DirectoryNotEnabledException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DirectoryNotEnabledException || (DirectoryNotEnabledException = {}));
export var FacetValidationException;
(function (FacetValidationException) {
  /**
   * @internal
   */
  FacetValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FacetValidationException || (FacetValidationException = {}));
export var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServiceException || (InternalServiceException = {}));
export var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidArnException || (InvalidArnException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var RetryableConflictException;
(function (RetryableConflictException) {
  /**
   * @internal
   */
  RetryableConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RetryableConflictException || (RetryableConflictException = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var ApplySchemaRequest;
(function (ApplySchemaRequest) {
  /**
   * @internal
   */
  ApplySchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApplySchemaRequest || (ApplySchemaRequest = {}));
export var ApplySchemaResponse;
(function (ApplySchemaResponse) {
  /**
   * @internal
   */
  ApplySchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApplySchemaResponse || (ApplySchemaResponse = {}));
export var InvalidAttachmentException;
(function (InvalidAttachmentException) {
  /**
   * @internal
   */
  InvalidAttachmentException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidAttachmentException || (InvalidAttachmentException = {}));
export var SchemaAlreadyExistsException;
(function (SchemaAlreadyExistsException) {
  /**
   * @internal
   */
  SchemaAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SchemaAlreadyExistsException || (SchemaAlreadyExistsException = {}));
export var AttachObjectRequest;
(function (AttachObjectRequest) {
  /**
   * @internal
   */
  AttachObjectRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachObjectRequest || (AttachObjectRequest = {}));
export var AttachObjectResponse;
(function (AttachObjectResponse) {
  /**
   * @internal
   */
  AttachObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachObjectResponse || (AttachObjectResponse = {}));
export var LinkNameAlreadyInUseException;
(function (LinkNameAlreadyInUseException) {
  /**
   * @internal
   */
  LinkNameAlreadyInUseException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LinkNameAlreadyInUseException || (LinkNameAlreadyInUseException = {}));
export var AttachPolicyRequest;
(function (AttachPolicyRequest) {
  /**
   * @internal
   */
  AttachPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachPolicyRequest || (AttachPolicyRequest = {}));
export var AttachPolicyResponse;
(function (AttachPolicyResponse) {
  /**
   * @internal
   */
  AttachPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachPolicyResponse || (AttachPolicyResponse = {}));
export var NotPolicyException;
(function (NotPolicyException) {
  /**
   * @internal
   */
  NotPolicyException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotPolicyException || (NotPolicyException = {}));
export var AttachToIndexRequest;
(function (AttachToIndexRequest) {
  /**
   * @internal
   */
  AttachToIndexRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachToIndexRequest || (AttachToIndexRequest = {}));
export var AttachToIndexResponse;
(function (AttachToIndexResponse) {
  /**
   * @internal
   */
  AttachToIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AttachToIndexResponse || (AttachToIndexResponse = {}));
export var IndexedAttributeMissingException;
(function (IndexedAttributeMissingException) {
  /**
   * @internal
   */
  IndexedAttributeMissingException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IndexedAttributeMissingException || (IndexedAttributeMissingException = {}));
export var NotIndexException;
(function (NotIndexException) {
  /**
   * @internal
   */
  NotIndexException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotIndexException || (NotIndexException = {}));
export var AttributeNameAndValue;
(function (AttributeNameAndValue) {
  /**
   * @internal
   */
  AttributeNameAndValue.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Value && { Value: TypedAttributeValue.filterSensitiveLog(obj.Value) });
  };
})(AttributeNameAndValue || (AttributeNameAndValue = {}));
export var TypedLinkSchemaAndFacetName;
(function (TypedLinkSchemaAndFacetName) {
  /**
   * @internal
   */
  TypedLinkSchemaAndFacetName.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TypedLinkSchemaAndFacetName || (TypedLinkSchemaAndFacetName = {}));
export var AttachTypedLinkRequest;
(function (AttachTypedLinkRequest) {
  /**
   * @internal
   */
  AttachTypedLinkRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeNameAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(AttachTypedLinkRequest || (AttachTypedLinkRequest = {}));
export var TypedLinkSpecifier;
(function (TypedLinkSpecifier) {
  /**
   * @internal
   */
  TypedLinkSpecifier.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.IdentityAttributeValues && {
        IdentityAttributeValues: obj.IdentityAttributeValues.map(function (item) {
          return AttributeNameAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(TypedLinkSpecifier || (TypedLinkSpecifier = {}));
export var AttachTypedLinkResponse;
(function (AttachTypedLinkResponse) {
  /**
   * @internal
   */
  AttachTypedLinkResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(AttachTypedLinkResponse || (AttachTypedLinkResponse = {}));
export var ConsistencyLevel;
(function (ConsistencyLevel) {
  ConsistencyLevel["EVENTUAL"] = "EVENTUAL";
  ConsistencyLevel["SERIALIZABLE"] = "SERIALIZABLE";
})(ConsistencyLevel || (ConsistencyLevel = {}));
export var BatchGetLinkAttributes;
(function (BatchGetLinkAttributes) {
  /**
   * @internal
   */
  BatchGetLinkAttributes.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(BatchGetLinkAttributes || (BatchGetLinkAttributes = {}));
export var BatchGetObjectAttributes;
(function (BatchGetObjectAttributes) {
  /**
   * @internal
   */
  BatchGetObjectAttributes.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchGetObjectAttributes || (BatchGetObjectAttributes = {}));
export var BatchGetObjectInformation;
(function (BatchGetObjectInformation) {
  /**
   * @internal
   */
  BatchGetObjectInformation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchGetObjectInformation || (BatchGetObjectInformation = {}));
export var BatchListAttachedIndices;
(function (BatchListAttachedIndices) {
  /**
   * @internal
   */
  BatchListAttachedIndices.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListAttachedIndices || (BatchListAttachedIndices = {}));
export var RangeMode;
(function (RangeMode) {
  RangeMode["EXCLUSIVE"] = "EXCLUSIVE";
  RangeMode["FIRST"] = "FIRST";
  RangeMode["INCLUSIVE"] = "INCLUSIVE";
  RangeMode["LAST"] = "LAST";
  RangeMode["LAST_BEFORE_MISSING_VALUES"] = "LAST_BEFORE_MISSING_VALUES";
})(RangeMode || (RangeMode = {}));
export var TypedAttributeValueRange;
(function (TypedAttributeValueRange) {
  /**
   * @internal
   */
  TypedAttributeValueRange.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.StartValue && { StartValue: TypedAttributeValue.filterSensitiveLog(obj.StartValue) }
      ),
      obj.EndValue && { EndValue: TypedAttributeValue.filterSensitiveLog(obj.EndValue) }
    );
  };
})(TypedAttributeValueRange || (TypedAttributeValueRange = {}));
export var TypedLinkAttributeRange;
(function (TypedLinkAttributeRange) {
  /**
   * @internal
   */
  TypedLinkAttributeRange.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Range && { Range: TypedAttributeValueRange.filterSensitiveLog(obj.Range) });
  };
})(TypedLinkAttributeRange || (TypedLinkAttributeRange = {}));
export var BatchListIncomingTypedLinks;
(function (BatchListIncomingTypedLinks) {
  /**
   * @internal
   */
  BatchListIncomingTypedLinks.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.FilterAttributeRanges && {
        FilterAttributeRanges: obj.FilterAttributeRanges.map(function (item) {
          return TypedLinkAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchListIncomingTypedLinks || (BatchListIncomingTypedLinks = {}));
export var ObjectAttributeRange;
(function (ObjectAttributeRange) {
  /**
   * @internal
   */
  ObjectAttributeRange.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Range && { Range: TypedAttributeValueRange.filterSensitiveLog(obj.Range) });
  };
})(ObjectAttributeRange || (ObjectAttributeRange = {}));
export var BatchListIndex;
(function (BatchListIndex) {
  /**
   * @internal
   */
  BatchListIndex.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RangesOnIndexedValues && {
        RangesOnIndexedValues: obj.RangesOnIndexedValues.map(function (item) {
          return ObjectAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchListIndex || (BatchListIndex = {}));
export var BatchListObjectAttributes;
(function (BatchListObjectAttributes) {
  /**
   * @internal
   */
  BatchListObjectAttributes.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectAttributes || (BatchListObjectAttributes = {}));
export var BatchListObjectChildren;
(function (BatchListObjectChildren) {
  /**
   * @internal
   */
  BatchListObjectChildren.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectChildren || (BatchListObjectChildren = {}));
export var BatchListObjectParentPaths;
(function (BatchListObjectParentPaths) {
  /**
   * @internal
   */
  BatchListObjectParentPaths.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectParentPaths || (BatchListObjectParentPaths = {}));
export var BatchListObjectParents;
(function (BatchListObjectParents) {
  /**
   * @internal
   */
  BatchListObjectParents.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectParents || (BatchListObjectParents = {}));
export var BatchListObjectPolicies;
(function (BatchListObjectPolicies) {
  /**
   * @internal
   */
  BatchListObjectPolicies.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectPolicies || (BatchListObjectPolicies = {}));
export var BatchListOutgoingTypedLinks;
(function (BatchListOutgoingTypedLinks) {
  /**
   * @internal
   */
  BatchListOutgoingTypedLinks.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.FilterAttributeRanges && {
        FilterAttributeRanges: obj.FilterAttributeRanges.map(function (item) {
          return TypedLinkAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchListOutgoingTypedLinks || (BatchListOutgoingTypedLinks = {}));
export var BatchListPolicyAttachments;
(function (BatchListPolicyAttachments) {
  /**
   * @internal
   */
  BatchListPolicyAttachments.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListPolicyAttachments || (BatchListPolicyAttachments = {}));
export var BatchLookupPolicy;
(function (BatchLookupPolicy) {
  /**
   * @internal
   */
  BatchLookupPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchLookupPolicy || (BatchLookupPolicy = {}));
export var BatchReadOperation;
(function (BatchReadOperation) {
  /**
   * @internal
   */
  BatchReadOperation.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.ListIndex && { ListIndex: BatchListIndex.filterSensitiveLog(obj.ListIndex) }),
          obj.ListOutgoingTypedLinks && {
            ListOutgoingTypedLinks: BatchListOutgoingTypedLinks.filterSensitiveLog(obj.ListOutgoingTypedLinks),
          }
        ),
        obj.ListIncomingTypedLinks && {
          ListIncomingTypedLinks: BatchListIncomingTypedLinks.filterSensitiveLog(obj.ListIncomingTypedLinks),
        }
      ),
      obj.GetLinkAttributes && {
        GetLinkAttributes: BatchGetLinkAttributes.filterSensitiveLog(obj.GetLinkAttributes),
      }
    );
  };
})(BatchReadOperation || (BatchReadOperation = {}));
export var BatchReadRequest;
(function (BatchReadRequest) {
  /**
   * @internal
   */
  BatchReadRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchReadRequest || (BatchReadRequest = {}));
export var BatchReadExceptionType;
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
})(BatchReadExceptionType || (BatchReadExceptionType = {}));
export var BatchReadException;
(function (BatchReadException) {
  /**
   * @internal
   */
  BatchReadException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchReadException || (BatchReadException = {}));
export var BatchGetLinkAttributesResponse;
(function (BatchGetLinkAttributesResponse) {
  /**
   * @internal
   */
  BatchGetLinkAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchGetLinkAttributesResponse || (BatchGetLinkAttributesResponse = {}));
export var BatchGetObjectAttributesResponse;
(function (BatchGetObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchGetObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchGetObjectAttributesResponse || (BatchGetObjectAttributesResponse = {}));
export var BatchGetObjectInformationResponse;
(function (BatchGetObjectInformationResponse) {
  /**
   * @internal
   */
  BatchGetObjectInformationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchGetObjectInformationResponse || (BatchGetObjectInformationResponse = {}));
export var IndexAttachment;
(function (IndexAttachment) {
  /**
   * @internal
   */
  IndexAttachment.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.IndexedAttributes && {
        IndexedAttributes: obj.IndexedAttributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(IndexAttachment || (IndexAttachment = {}));
export var BatchListAttachedIndicesResponse;
(function (BatchListAttachedIndicesResponse) {
  /**
   * @internal
   */
  BatchListAttachedIndicesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListAttachedIndicesResponse || (BatchListAttachedIndicesResponse = {}));
export var BatchListIncomingTypedLinksResponse;
(function (BatchListIncomingTypedLinksResponse) {
  /**
   * @internal
   */
  BatchListIncomingTypedLinksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListIncomingTypedLinksResponse || (BatchListIncomingTypedLinksResponse = {}));
export var BatchListIndexResponse;
(function (BatchListIndexResponse) {
  /**
   * @internal
   */
  BatchListIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListIndexResponse || (BatchListIndexResponse = {}));
export var BatchListObjectAttributesResponse;
(function (BatchListObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchListObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchListObjectAttributesResponse || (BatchListObjectAttributesResponse = {}));
export var BatchListObjectChildrenResponse;
(function (BatchListObjectChildrenResponse) {
  /**
   * @internal
   */
  BatchListObjectChildrenResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectChildrenResponse || (BatchListObjectChildrenResponse = {}));
export var PathToObjectIdentifiers;
(function (PathToObjectIdentifiers) {
  /**
   * @internal
   */
  PathToObjectIdentifiers.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PathToObjectIdentifiers || (PathToObjectIdentifiers = {}));
export var BatchListObjectParentPathsResponse;
(function (BatchListObjectParentPathsResponse) {
  /**
   * @internal
   */
  BatchListObjectParentPathsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectParentPathsResponse || (BatchListObjectParentPathsResponse = {}));
export var ObjectIdentifierAndLinkNameTuple;
(function (ObjectIdentifierAndLinkNameTuple) {
  /**
   * @internal
   */
  ObjectIdentifierAndLinkNameTuple.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectIdentifierAndLinkNameTuple || (ObjectIdentifierAndLinkNameTuple = {}));
export var BatchListObjectParentsResponse;
(function (BatchListObjectParentsResponse) {
  /**
   * @internal
   */
  BatchListObjectParentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectParentsResponse || (BatchListObjectParentsResponse = {}));
export var BatchListObjectPoliciesResponse;
(function (BatchListObjectPoliciesResponse) {
  /**
   * @internal
   */
  BatchListObjectPoliciesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListObjectPoliciesResponse || (BatchListObjectPoliciesResponse = {}));
export var BatchListOutgoingTypedLinksResponse;
(function (BatchListOutgoingTypedLinksResponse) {
  /**
   * @internal
   */
  BatchListOutgoingTypedLinksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListOutgoingTypedLinksResponse || (BatchListOutgoingTypedLinksResponse = {}));
export var BatchListPolicyAttachmentsResponse;
(function (BatchListPolicyAttachmentsResponse) {
  /**
   * @internal
   */
  BatchListPolicyAttachmentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchListPolicyAttachmentsResponse || (BatchListPolicyAttachmentsResponse = {}));
export var PolicyAttachment;
(function (PolicyAttachment) {
  /**
   * @internal
   */
  PolicyAttachment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PolicyAttachment || (PolicyAttachment = {}));
export var PolicyToPath;
(function (PolicyToPath) {
  /**
   * @internal
   */
  PolicyToPath.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PolicyToPath || (PolicyToPath = {}));
export var BatchLookupPolicyResponse;
(function (BatchLookupPolicyResponse) {
  /**
   * @internal
   */
  BatchLookupPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchLookupPolicyResponse || (BatchLookupPolicyResponse = {}));
export var BatchReadSuccessfulResponse;
(function (BatchReadSuccessfulResponse) {
  /**
   * @internal
   */
  BatchReadSuccessfulResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign({}, obj),
          obj.ListObjectAttributes && {
            ListObjectAttributes: BatchListObjectAttributesResponse.filterSensitiveLog(obj.ListObjectAttributes),
          }
        ),
        obj.GetObjectAttributes && {
          GetObjectAttributes: BatchGetObjectAttributesResponse.filterSensitiveLog(obj.GetObjectAttributes),
        }
      ),
      obj.GetLinkAttributes && {
        GetLinkAttributes: BatchGetLinkAttributesResponse.filterSensitiveLog(obj.GetLinkAttributes),
      }
    );
  };
})(BatchReadSuccessfulResponse || (BatchReadSuccessfulResponse = {}));
export var BatchReadOperationResponse;
(function (BatchReadOperationResponse) {
  /**
   * @internal
   */
  BatchReadOperationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SuccessfulResponse && {
        SuccessfulResponse: BatchReadSuccessfulResponse.filterSensitiveLog(obj.SuccessfulResponse),
      }
    );
  };
})(BatchReadOperationResponse || (BatchReadOperationResponse = {}));
export var BatchReadResponse;
(function (BatchReadResponse) {
  /**
   * @internal
   */
  BatchReadResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchReadResponse || (BatchReadResponse = {}));
export var BatchWriteExceptionType;
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
})(BatchWriteExceptionType || (BatchWriteExceptionType = {}));
export var BatchWriteException;
(function (BatchWriteException) {
  /**
   * @internal
   */
  BatchWriteException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchWriteException || (BatchWriteException = {}));
export var BatchAddFacetToObject;
(function (BatchAddFacetToObject) {
  /**
   * @internal
   */
  BatchAddFacetToObject.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeList && {
        ObjectAttributeList: obj.ObjectAttributeList.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchAddFacetToObject || (BatchAddFacetToObject = {}));
export var BatchAttachObject;
(function (BatchAttachObject) {
  /**
   * @internal
   */
  BatchAttachObject.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachObject || (BatchAttachObject = {}));
export var BatchAttachPolicy;
(function (BatchAttachPolicy) {
  /**
   * @internal
   */
  BatchAttachPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachPolicy || (BatchAttachPolicy = {}));
export var BatchAttachToIndex;
(function (BatchAttachToIndex) {
  /**
   * @internal
   */
  BatchAttachToIndex.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachToIndex || (BatchAttachToIndex = {}));
export var BatchAttachTypedLink;
(function (BatchAttachTypedLink) {
  /**
   * @internal
   */
  BatchAttachTypedLink.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeNameAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchAttachTypedLink || (BatchAttachTypedLink = {}));
export var BatchCreateIndex;
(function (BatchCreateIndex) {
  /**
   * @internal
   */
  BatchCreateIndex.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateIndex || (BatchCreateIndex = {}));
export var BatchCreateObject;
(function (BatchCreateObject) {
  /**
   * @internal
   */
  BatchCreateObject.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeList && {
        ObjectAttributeList: obj.ObjectAttributeList.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchCreateObject || (BatchCreateObject = {}));
export var BatchDeleteObject;
(function (BatchDeleteObject) {
  /**
   * @internal
   */
  BatchDeleteObject.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeleteObject || (BatchDeleteObject = {}));
export var BatchDetachFromIndex;
(function (BatchDetachFromIndex) {
  /**
   * @internal
   */
  BatchDetachFromIndex.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachFromIndex || (BatchDetachFromIndex = {}));
export var BatchDetachObject;
(function (BatchDetachObject) {
  /**
   * @internal
   */
  BatchDetachObject.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachObject || (BatchDetachObject = {}));
export var BatchDetachPolicy;
(function (BatchDetachPolicy) {
  /**
   * @internal
   */
  BatchDetachPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachPolicy || (BatchDetachPolicy = {}));
export var BatchDetachTypedLink;
(function (BatchDetachTypedLink) {
  /**
   * @internal
   */
  BatchDetachTypedLink.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(BatchDetachTypedLink || (BatchDetachTypedLink = {}));
export var BatchRemoveFacetFromObject;
(function (BatchRemoveFacetFromObject) {
  /**
   * @internal
   */
  BatchRemoveFacetFromObject.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchRemoveFacetFromObject || (BatchRemoveFacetFromObject = {}));
export var UpdateActionType;
(function (UpdateActionType) {
  UpdateActionType["CREATE_OR_UPDATE"] = "CREATE_OR_UPDATE";
  UpdateActionType["DELETE"] = "DELETE";
})(UpdateActionType || (UpdateActionType = {}));
export var LinkAttributeAction;
(function (LinkAttributeAction) {
  /**
   * @internal
   */
  LinkAttributeAction.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeUpdateValue && {
        AttributeUpdateValue: TypedAttributeValue.filterSensitiveLog(obj.AttributeUpdateValue),
      }
    );
  };
})(LinkAttributeAction || (LinkAttributeAction = {}));
export var LinkAttributeUpdate;
(function (LinkAttributeUpdate) {
  /**
   * @internal
   */
  LinkAttributeUpdate.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeAction && { AttributeAction: LinkAttributeAction.filterSensitiveLog(obj.AttributeAction) }
    );
  };
})(LinkAttributeUpdate || (LinkAttributeUpdate = {}));
export var BatchUpdateLinkAttributes;
(function (BatchUpdateLinkAttributes) {
  /**
   * @internal
   */
  BatchUpdateLinkAttributes.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.TypedLinkSpecifier && {
          TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
        }
      ),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return LinkAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchUpdateLinkAttributes || (BatchUpdateLinkAttributes = {}));
export var ObjectAttributeAction;
(function (ObjectAttributeAction) {
  /**
   * @internal
   */
  ObjectAttributeAction.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeUpdateValue && {
        ObjectAttributeUpdateValue: TypedAttributeValue.filterSensitiveLog(obj.ObjectAttributeUpdateValue),
      }
    );
  };
})(ObjectAttributeAction || (ObjectAttributeAction = {}));
export var ObjectAttributeUpdate;
(function (ObjectAttributeUpdate) {
  /**
   * @internal
   */
  ObjectAttributeUpdate.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeAction && {
        ObjectAttributeAction: ObjectAttributeAction.filterSensitiveLog(obj.ObjectAttributeAction),
      }
    );
  };
})(ObjectAttributeUpdate || (ObjectAttributeUpdate = {}));
export var BatchUpdateObjectAttributes;
(function (BatchUpdateObjectAttributes) {
  /**
   * @internal
   */
  BatchUpdateObjectAttributes.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return ObjectAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchUpdateObjectAttributes || (BatchUpdateObjectAttributes = {}));
export var BatchWriteOperation;
(function (BatchWriteOperation) {
  /**
   * @internal
   */
  BatchWriteOperation.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign({}, obj),
              obj.UpdateObjectAttributes && {
                UpdateObjectAttributes: BatchUpdateObjectAttributes.filterSensitiveLog(obj.UpdateObjectAttributes),
              }
            ),
            obj.AddFacetToObject && { AddFacetToObject: BatchAddFacetToObject.filterSensitiveLog(obj.AddFacetToObject) }
          ),
          obj.AttachTypedLink && { AttachTypedLink: BatchAttachTypedLink.filterSensitiveLog(obj.AttachTypedLink) }
        ),
        obj.DetachTypedLink && { DetachTypedLink: BatchDetachTypedLink.filterSensitiveLog(obj.DetachTypedLink) }
      ),
      obj.UpdateLinkAttributes && {
        UpdateLinkAttributes: BatchUpdateLinkAttributes.filterSensitiveLog(obj.UpdateLinkAttributes),
      }
    );
  };
})(BatchWriteOperation || (BatchWriteOperation = {}));
export var BatchWriteRequest;
(function (BatchWriteRequest) {
  /**
   * @internal
   */
  BatchWriteRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchWriteRequest || (BatchWriteRequest = {}));
export var BatchAddFacetToObjectResponse;
(function (BatchAddFacetToObjectResponse) {
  /**
   * @internal
   */
  BatchAddFacetToObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAddFacetToObjectResponse || (BatchAddFacetToObjectResponse = {}));
export var BatchAttachObjectResponse;
(function (BatchAttachObjectResponse) {
  /**
   * @internal
   */
  BatchAttachObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachObjectResponse || (BatchAttachObjectResponse = {}));
export var BatchAttachPolicyResponse;
(function (BatchAttachPolicyResponse) {
  /**
   * @internal
   */
  BatchAttachPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachPolicyResponse || (BatchAttachPolicyResponse = {}));
export var BatchAttachToIndexResponse;
(function (BatchAttachToIndexResponse) {
  /**
   * @internal
   */
  BatchAttachToIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAttachToIndexResponse || (BatchAttachToIndexResponse = {}));
export var BatchAttachTypedLinkResponse;
(function (BatchAttachTypedLinkResponse) {
  /**
   * @internal
   */
  BatchAttachTypedLinkResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(BatchAttachTypedLinkResponse || (BatchAttachTypedLinkResponse = {}));
export var BatchCreateIndexResponse;
(function (BatchCreateIndexResponse) {
  /**
   * @internal
   */
  BatchCreateIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateIndexResponse || (BatchCreateIndexResponse = {}));
export var BatchCreateObjectResponse;
(function (BatchCreateObjectResponse) {
  /**
   * @internal
   */
  BatchCreateObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateObjectResponse || (BatchCreateObjectResponse = {}));
export var BatchDeleteObjectResponse;
(function (BatchDeleteObjectResponse) {
  /**
   * @internal
   */
  BatchDeleteObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeleteObjectResponse || (BatchDeleteObjectResponse = {}));
export var BatchDetachFromIndexResponse;
(function (BatchDetachFromIndexResponse) {
  /**
   * @internal
   */
  BatchDetachFromIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachFromIndexResponse || (BatchDetachFromIndexResponse = {}));
export var BatchDetachObjectResponse;
(function (BatchDetachObjectResponse) {
  /**
   * @internal
   */
  BatchDetachObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachObjectResponse || (BatchDetachObjectResponse = {}));
export var BatchDetachPolicyResponse;
(function (BatchDetachPolicyResponse) {
  /**
   * @internal
   */
  BatchDetachPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachPolicyResponse || (BatchDetachPolicyResponse = {}));
export var BatchDetachTypedLinkResponse;
(function (BatchDetachTypedLinkResponse) {
  /**
   * @internal
   */
  BatchDetachTypedLinkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDetachTypedLinkResponse || (BatchDetachTypedLinkResponse = {}));
export var BatchRemoveFacetFromObjectResponse;
(function (BatchRemoveFacetFromObjectResponse) {
  /**
   * @internal
   */
  BatchRemoveFacetFromObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchRemoveFacetFromObjectResponse || (BatchRemoveFacetFromObjectResponse = {}));
export var BatchUpdateLinkAttributesResponse;
(function (BatchUpdateLinkAttributesResponse) {
  /**
   * @internal
   */
  BatchUpdateLinkAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUpdateLinkAttributesResponse || (BatchUpdateLinkAttributesResponse = {}));
export var BatchUpdateObjectAttributesResponse;
(function (BatchUpdateObjectAttributesResponse) {
  /**
   * @internal
   */
  BatchUpdateObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUpdateObjectAttributesResponse || (BatchUpdateObjectAttributesResponse = {}));
export var BatchWriteOperationResponse;
(function (BatchWriteOperationResponse) {
  /**
   * @internal
   */
  BatchWriteOperationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttachTypedLink && {
        AttachTypedLink: BatchAttachTypedLinkResponse.filterSensitiveLog(obj.AttachTypedLink),
      }
    );
  };
})(BatchWriteOperationResponse || (BatchWriteOperationResponse = {}));
export var BatchWriteResponse;
(function (BatchWriteResponse) {
  /**
   * @internal
   */
  BatchWriteResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchWriteResponse || (BatchWriteResponse = {}));
export var CreateDirectoryRequest;
(function (CreateDirectoryRequest) {
  /**
   * @internal
   */
  CreateDirectoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDirectoryRequest || (CreateDirectoryRequest = {}));
export var CreateDirectoryResponse;
(function (CreateDirectoryResponse) {
  /**
   * @internal
   */
  CreateDirectoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDirectoryResponse || (CreateDirectoryResponse = {}));
export var DirectoryAlreadyExistsException;
(function (DirectoryAlreadyExistsException) {
  /**
   * @internal
   */
  DirectoryAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DirectoryAlreadyExistsException || (DirectoryAlreadyExistsException = {}));
export var RuleType;
(function (RuleType) {
  RuleType["BINARY_LENGTH"] = "BINARY_LENGTH";
  RuleType["NUMBER_COMPARISON"] = "NUMBER_COMPARISON";
  RuleType["STRING_FROM_SET"] = "STRING_FROM_SET";
  RuleType["STRING_LENGTH"] = "STRING_LENGTH";
})(RuleType || (RuleType = {}));
export var Rule;
(function (Rule) {
  /**
   * @internal
   */
  Rule.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Rule || (Rule = {}));
export var FacetAttributeType;
(function (FacetAttributeType) {
  FacetAttributeType["BINARY"] = "BINARY";
  FacetAttributeType["BOOLEAN"] = "BOOLEAN";
  FacetAttributeType["DATETIME"] = "DATETIME";
  FacetAttributeType["NUMBER"] = "NUMBER";
  FacetAttributeType["STRING"] = "STRING";
  FacetAttributeType["VARIANT"] = "VARIANT";
})(FacetAttributeType || (FacetAttributeType = {}));
export var FacetAttributeDefinition;
(function (FacetAttributeDefinition) {
  /**
   * @internal
   */
  FacetAttributeDefinition.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DefaultValue && { DefaultValue: TypedAttributeValue.filterSensitiveLog(obj.DefaultValue) }
    );
  };
})(FacetAttributeDefinition || (FacetAttributeDefinition = {}));
export var FacetAttributeReference;
(function (FacetAttributeReference) {
  /**
   * @internal
   */
  FacetAttributeReference.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FacetAttributeReference || (FacetAttributeReference = {}));
export var RequiredAttributeBehavior;
(function (RequiredAttributeBehavior) {
  RequiredAttributeBehavior["NOT_REQUIRED"] = "NOT_REQUIRED";
  RequiredAttributeBehavior["REQUIRED_ALWAYS"] = "REQUIRED_ALWAYS";
})(RequiredAttributeBehavior || (RequiredAttributeBehavior = {}));
export var FacetAttribute;
(function (FacetAttribute) {
  /**
   * @internal
   */
  FacetAttribute.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeDefinition && {
        AttributeDefinition: FacetAttributeDefinition.filterSensitiveLog(obj.AttributeDefinition),
      }
    );
  };
})(FacetAttribute || (FacetAttribute = {}));
export var FacetStyle;
(function (FacetStyle) {
  FacetStyle["DYNAMIC"] = "DYNAMIC";
  FacetStyle["STATIC"] = "STATIC";
})(FacetStyle || (FacetStyle = {}));
export var ObjectType;
(function (ObjectType) {
  ObjectType["INDEX"] = "INDEX";
  ObjectType["LEAF_NODE"] = "LEAF_NODE";
  ObjectType["NODE"] = "NODE";
  ObjectType["POLICY"] = "POLICY";
})(ObjectType || (ObjectType = {}));
export var CreateFacetRequest;
(function (CreateFacetRequest) {
  /**
   * @internal
   */
  CreateFacetRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return FacetAttribute.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateFacetRequest || (CreateFacetRequest = {}));
export var CreateFacetResponse;
(function (CreateFacetResponse) {
  /**
   * @internal
   */
  CreateFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFacetResponse || (CreateFacetResponse = {}));
export var FacetAlreadyExistsException;
(function (FacetAlreadyExistsException) {
  /**
   * @internal
   */
  FacetAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FacetAlreadyExistsException || (FacetAlreadyExistsException = {}));
export var InvalidRuleException;
(function (InvalidRuleException) {
  /**
   * @internal
   */
  InvalidRuleException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidRuleException || (InvalidRuleException = {}));
export var CreateIndexRequest;
(function (CreateIndexRequest) {
  /**
   * @internal
   */
  CreateIndexRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIndexRequest || (CreateIndexRequest = {}));
export var CreateIndexResponse;
(function (CreateIndexResponse) {
  /**
   * @internal
   */
  CreateIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIndexResponse || (CreateIndexResponse = {}));
export var UnsupportedIndexTypeException;
(function (UnsupportedIndexTypeException) {
  /**
   * @internal
   */
  UnsupportedIndexTypeException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnsupportedIndexTypeException || (UnsupportedIndexTypeException = {}));
export var CreateObjectRequest;
(function (CreateObjectRequest) {
  /**
   * @internal
   */
  CreateObjectRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ObjectAttributeList && {
        ObjectAttributeList: obj.ObjectAttributeList.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateObjectRequest || (CreateObjectRequest = {}));
export var CreateObjectResponse;
(function (CreateObjectResponse) {
  /**
   * @internal
   */
  CreateObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateObjectResponse || (CreateObjectResponse = {}));
export var CreateSchemaRequest;
(function (CreateSchemaRequest) {
  /**
   * @internal
   */
  CreateSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSchemaRequest || (CreateSchemaRequest = {}));
export var CreateSchemaResponse;
(function (CreateSchemaResponse) {
  /**
   * @internal
   */
  CreateSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSchemaResponse || (CreateSchemaResponse = {}));
export var TypedLinkAttributeDefinition;
(function (TypedLinkAttributeDefinition) {
  /**
   * @internal
   */
  TypedLinkAttributeDefinition.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DefaultValue && { DefaultValue: TypedAttributeValue.filterSensitiveLog(obj.DefaultValue) }
    );
  };
})(TypedLinkAttributeDefinition || (TypedLinkAttributeDefinition = {}));
export var TypedLinkFacet;
(function (TypedLinkFacet) {
  /**
   * @internal
   */
  TypedLinkFacet.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return TypedLinkAttributeDefinition.filterSensitiveLog(item);
        }),
      }
    );
  };
})(TypedLinkFacet || (TypedLinkFacet = {}));
export var CreateTypedLinkFacetRequest;
(function (CreateTypedLinkFacetRequest) {
  /**
   * @internal
   */
  CreateTypedLinkFacetRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Facet && { Facet: TypedLinkFacet.filterSensitiveLog(obj.Facet) });
  };
})(CreateTypedLinkFacetRequest || (CreateTypedLinkFacetRequest = {}));
export var CreateTypedLinkFacetResponse;
(function (CreateTypedLinkFacetResponse) {
  /**
   * @internal
   */
  CreateTypedLinkFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateTypedLinkFacetResponse || (CreateTypedLinkFacetResponse = {}));
export var DeleteDirectoryRequest;
(function (DeleteDirectoryRequest) {
  /**
   * @internal
   */
  DeleteDirectoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDirectoryRequest || (DeleteDirectoryRequest = {}));
export var DeleteDirectoryResponse;
(function (DeleteDirectoryResponse) {
  /**
   * @internal
   */
  DeleteDirectoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDirectoryResponse || (DeleteDirectoryResponse = {}));
export var DirectoryDeletedException;
(function (DirectoryDeletedException) {
  /**
   * @internal
   */
  DirectoryDeletedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DirectoryDeletedException || (DirectoryDeletedException = {}));
export var DirectoryNotDisabledException;
(function (DirectoryNotDisabledException) {
  /**
   * @internal
   */
  DirectoryNotDisabledException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DirectoryNotDisabledException || (DirectoryNotDisabledException = {}));
export var DeleteFacetRequest;
(function (DeleteFacetRequest) {
  /**
   * @internal
   */
  DeleteFacetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFacetRequest || (DeleteFacetRequest = {}));
export var DeleteFacetResponse;
(function (DeleteFacetResponse) {
  /**
   * @internal
   */
  DeleteFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFacetResponse || (DeleteFacetResponse = {}));
export var FacetInUseException;
(function (FacetInUseException) {
  /**
   * @internal
   */
  FacetInUseException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FacetInUseException || (FacetInUseException = {}));
export var FacetNotFoundException;
(function (FacetNotFoundException) {
  /**
   * @internal
   */
  FacetNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FacetNotFoundException || (FacetNotFoundException = {}));
export var DeleteObjectRequest;
(function (DeleteObjectRequest) {
  /**
   * @internal
   */
  DeleteObjectRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteObjectRequest || (DeleteObjectRequest = {}));
export var DeleteObjectResponse;
(function (DeleteObjectResponse) {
  /**
   * @internal
   */
  DeleteObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteObjectResponse || (DeleteObjectResponse = {}));
export var ObjectNotDetachedException;
(function (ObjectNotDetachedException) {
  /**
   * @internal
   */
  ObjectNotDetachedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectNotDetachedException || (ObjectNotDetachedException = {}));
export var DeleteSchemaRequest;
(function (DeleteSchemaRequest) {
  /**
   * @internal
   */
  DeleteSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteSchemaRequest || (DeleteSchemaRequest = {}));
export var DeleteSchemaResponse;
(function (DeleteSchemaResponse) {
  /**
   * @internal
   */
  DeleteSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteSchemaResponse || (DeleteSchemaResponse = {}));
export var StillContainsLinksException;
(function (StillContainsLinksException) {
  /**
   * @internal
   */
  StillContainsLinksException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StillContainsLinksException || (StillContainsLinksException = {}));
export var DeleteTypedLinkFacetRequest;
(function (DeleteTypedLinkFacetRequest) {
  /**
   * @internal
   */
  DeleteTypedLinkFacetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTypedLinkFacetRequest || (DeleteTypedLinkFacetRequest = {}));
export var DeleteTypedLinkFacetResponse;
(function (DeleteTypedLinkFacetResponse) {
  /**
   * @internal
   */
  DeleteTypedLinkFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTypedLinkFacetResponse || (DeleteTypedLinkFacetResponse = {}));
export var DetachFromIndexRequest;
(function (DetachFromIndexRequest) {
  /**
   * @internal
   */
  DetachFromIndexRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachFromIndexRequest || (DetachFromIndexRequest = {}));
export var DetachFromIndexResponse;
(function (DetachFromIndexResponse) {
  /**
   * @internal
   */
  DetachFromIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachFromIndexResponse || (DetachFromIndexResponse = {}));
export var ObjectAlreadyDetachedException;
(function (ObjectAlreadyDetachedException) {
  /**
   * @internal
   */
  ObjectAlreadyDetachedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ObjectAlreadyDetachedException || (ObjectAlreadyDetachedException = {}));
export var DetachObjectRequest;
(function (DetachObjectRequest) {
  /**
   * @internal
   */
  DetachObjectRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachObjectRequest || (DetachObjectRequest = {}));
export var DetachObjectResponse;
(function (DetachObjectResponse) {
  /**
   * @internal
   */
  DetachObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachObjectResponse || (DetachObjectResponse = {}));
export var NotNodeException;
(function (NotNodeException) {
  /**
   * @internal
   */
  NotNodeException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotNodeException || (NotNodeException = {}));
export var DetachPolicyRequest;
(function (DetachPolicyRequest) {
  /**
   * @internal
   */
  DetachPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachPolicyRequest || (DetachPolicyRequest = {}));
export var DetachPolicyResponse;
(function (DetachPolicyResponse) {
  /**
   * @internal
   */
  DetachPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetachPolicyResponse || (DetachPolicyResponse = {}));
export var DetachTypedLinkRequest;
(function (DetachTypedLinkRequest) {
  /**
   * @internal
   */
  DetachTypedLinkRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(DetachTypedLinkRequest || (DetachTypedLinkRequest = {}));
export var DisableDirectoryRequest;
(function (DisableDirectoryRequest) {
  /**
   * @internal
   */
  DisableDirectoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisableDirectoryRequest || (DisableDirectoryRequest = {}));
export var DisableDirectoryResponse;
(function (DisableDirectoryResponse) {
  /**
   * @internal
   */
  DisableDirectoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisableDirectoryResponse || (DisableDirectoryResponse = {}));
export var EnableDirectoryRequest;
(function (EnableDirectoryRequest) {
  /**
   * @internal
   */
  EnableDirectoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EnableDirectoryRequest || (EnableDirectoryRequest = {}));
export var EnableDirectoryResponse;
(function (EnableDirectoryResponse) {
  /**
   * @internal
   */
  EnableDirectoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EnableDirectoryResponse || (EnableDirectoryResponse = {}));
export var GetAppliedSchemaVersionRequest;
(function (GetAppliedSchemaVersionRequest) {
  /**
   * @internal
   */
  GetAppliedSchemaVersionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppliedSchemaVersionRequest || (GetAppliedSchemaVersionRequest = {}));
export var GetAppliedSchemaVersionResponse;
(function (GetAppliedSchemaVersionResponse) {
  /**
   * @internal
   */
  GetAppliedSchemaVersionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppliedSchemaVersionResponse || (GetAppliedSchemaVersionResponse = {}));
export var GetDirectoryRequest;
(function (GetDirectoryRequest) {
  /**
   * @internal
   */
  GetDirectoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDirectoryRequest || (GetDirectoryRequest = {}));
export var DirectoryState;
(function (DirectoryState) {
  DirectoryState["DELETED"] = "DELETED";
  DirectoryState["DISABLED"] = "DISABLED";
  DirectoryState["ENABLED"] = "ENABLED";
})(DirectoryState || (DirectoryState = {}));
export var Directory;
(function (Directory) {
  /**
   * @internal
   */
  Directory.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Directory || (Directory = {}));
export var GetDirectoryResponse;
(function (GetDirectoryResponse) {
  /**
   * @internal
   */
  GetDirectoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDirectoryResponse || (GetDirectoryResponse = {}));
export var GetFacetRequest;
(function (GetFacetRequest) {
  /**
   * @internal
   */
  GetFacetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFacetRequest || (GetFacetRequest = {}));
export var Facet;
(function (Facet) {
  /**
   * @internal
   */
  Facet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Facet || (Facet = {}));
export var GetFacetResponse;
(function (GetFacetResponse) {
  /**
   * @internal
   */
  GetFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFacetResponse || (GetFacetResponse = {}));
export var GetLinkAttributesRequest;
(function (GetLinkAttributesRequest) {
  /**
   * @internal
   */
  GetLinkAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.TypedLinkSpecifier && {
        TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
      }
    );
  };
})(GetLinkAttributesRequest || (GetLinkAttributesRequest = {}));
export var GetLinkAttributesResponse;
(function (GetLinkAttributesResponse) {
  /**
   * @internal
   */
  GetLinkAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(GetLinkAttributesResponse || (GetLinkAttributesResponse = {}));
export var GetObjectAttributesRequest;
(function (GetObjectAttributesRequest) {
  /**
   * @internal
   */
  GetObjectAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetObjectAttributesRequest || (GetObjectAttributesRequest = {}));
export var GetObjectAttributesResponse;
(function (GetObjectAttributesResponse) {
  /**
   * @internal
   */
  GetObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(GetObjectAttributesResponse || (GetObjectAttributesResponse = {}));
export var GetObjectInformationRequest;
(function (GetObjectInformationRequest) {
  /**
   * @internal
   */
  GetObjectInformationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetObjectInformationRequest || (GetObjectInformationRequest = {}));
export var GetObjectInformationResponse;
(function (GetObjectInformationResponse) {
  /**
   * @internal
   */
  GetObjectInformationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetObjectInformationResponse || (GetObjectInformationResponse = {}));
export var GetSchemaAsJsonRequest;
(function (GetSchemaAsJsonRequest) {
  /**
   * @internal
   */
  GetSchemaAsJsonRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSchemaAsJsonRequest || (GetSchemaAsJsonRequest = {}));
export var GetSchemaAsJsonResponse;
(function (GetSchemaAsJsonResponse) {
  /**
   * @internal
   */
  GetSchemaAsJsonResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSchemaAsJsonResponse || (GetSchemaAsJsonResponse = {}));
export var GetTypedLinkFacetInformationRequest;
(function (GetTypedLinkFacetInformationRequest) {
  /**
   * @internal
   */
  GetTypedLinkFacetInformationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTypedLinkFacetInformationRequest || (GetTypedLinkFacetInformationRequest = {}));
export var GetTypedLinkFacetInformationResponse;
(function (GetTypedLinkFacetInformationResponse) {
  /**
   * @internal
   */
  GetTypedLinkFacetInformationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTypedLinkFacetInformationResponse || (GetTypedLinkFacetInformationResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListAppliedSchemaArnsRequest;
(function (ListAppliedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListAppliedSchemaArnsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAppliedSchemaArnsRequest || (ListAppliedSchemaArnsRequest = {}));
export var ListAppliedSchemaArnsResponse;
(function (ListAppliedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListAppliedSchemaArnsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAppliedSchemaArnsResponse || (ListAppliedSchemaArnsResponse = {}));
export var ListAttachedIndicesRequest;
(function (ListAttachedIndicesRequest) {
  /**
   * @internal
   */
  ListAttachedIndicesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAttachedIndicesRequest || (ListAttachedIndicesRequest = {}));
export var ListAttachedIndicesResponse;
(function (ListAttachedIndicesResponse) {
  /**
   * @internal
   */
  ListAttachedIndicesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAttachedIndicesResponse || (ListAttachedIndicesResponse = {}));
export var ListDevelopmentSchemaArnsRequest;
(function (ListDevelopmentSchemaArnsRequest) {
  /**
   * @internal
   */
  ListDevelopmentSchemaArnsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDevelopmentSchemaArnsRequest || (ListDevelopmentSchemaArnsRequest = {}));
export var ListDevelopmentSchemaArnsResponse;
(function (ListDevelopmentSchemaArnsResponse) {
  /**
   * @internal
   */
  ListDevelopmentSchemaArnsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDevelopmentSchemaArnsResponse || (ListDevelopmentSchemaArnsResponse = {}));
export var ListDirectoriesRequest;
(function (ListDirectoriesRequest) {
  /**
   * @internal
   */
  ListDirectoriesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDirectoriesRequest || (ListDirectoriesRequest = {}));
export var ListDirectoriesResponse;
(function (ListDirectoriesResponse) {
  /**
   * @internal
   */
  ListDirectoriesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDirectoriesResponse || (ListDirectoriesResponse = {}));
export var ListFacetAttributesRequest;
(function (ListFacetAttributesRequest) {
  /**
   * @internal
   */
  ListFacetAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFacetAttributesRequest || (ListFacetAttributesRequest = {}));
export var ListFacetAttributesResponse;
(function (ListFacetAttributesResponse) {
  /**
   * @internal
   */
  ListFacetAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return FacetAttribute.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListFacetAttributesResponse || (ListFacetAttributesResponse = {}));
export var ListFacetNamesRequest;
(function (ListFacetNamesRequest) {
  /**
   * @internal
   */
  ListFacetNamesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFacetNamesRequest || (ListFacetNamesRequest = {}));
export var ListFacetNamesResponse;
(function (ListFacetNamesResponse) {
  /**
   * @internal
   */
  ListFacetNamesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFacetNamesResponse || (ListFacetNamesResponse = {}));
export var ListIncomingTypedLinksRequest;
(function (ListIncomingTypedLinksRequest) {
  /**
   * @internal
   */
  ListIncomingTypedLinksRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.FilterAttributeRanges && {
        FilterAttributeRanges: obj.FilterAttributeRanges.map(function (item) {
          return TypedLinkAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListIncomingTypedLinksRequest || (ListIncomingTypedLinksRequest = {}));
export var ListIncomingTypedLinksResponse;
(function (ListIncomingTypedLinksResponse) {
  /**
   * @internal
   */
  ListIncomingTypedLinksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListIncomingTypedLinksResponse || (ListIncomingTypedLinksResponse = {}));
export var ListIndexRequest;
(function (ListIndexRequest) {
  /**
   * @internal
   */
  ListIndexRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RangesOnIndexedValues && {
        RangesOnIndexedValues: obj.RangesOnIndexedValues.map(function (item) {
          return ObjectAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListIndexRequest || (ListIndexRequest = {}));
export var ListIndexResponse;
(function (ListIndexResponse) {
  /**
   * @internal
   */
  ListIndexResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListIndexResponse || (ListIndexResponse = {}));
export var ListManagedSchemaArnsRequest;
(function (ListManagedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListManagedSchemaArnsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListManagedSchemaArnsRequest || (ListManagedSchemaArnsRequest = {}));
export var ListManagedSchemaArnsResponse;
(function (ListManagedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListManagedSchemaArnsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListManagedSchemaArnsResponse || (ListManagedSchemaArnsResponse = {}));
export var ListObjectAttributesRequest;
(function (ListObjectAttributesRequest) {
  /**
   * @internal
   */
  ListObjectAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectAttributesRequest || (ListObjectAttributesRequest = {}));
export var ListObjectAttributesResponse;
(function (ListObjectAttributesResponse) {
  /**
   * @internal
   */
  ListObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return AttributeKeyAndValue.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListObjectAttributesResponse || (ListObjectAttributesResponse = {}));
export var ListObjectChildrenRequest;
(function (ListObjectChildrenRequest) {
  /**
   * @internal
   */
  ListObjectChildrenRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectChildrenRequest || (ListObjectChildrenRequest = {}));
export var ListObjectChildrenResponse;
(function (ListObjectChildrenResponse) {
  /**
   * @internal
   */
  ListObjectChildrenResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectChildrenResponse || (ListObjectChildrenResponse = {}));
export var ListObjectParentPathsRequest;
(function (ListObjectParentPathsRequest) {
  /**
   * @internal
   */
  ListObjectParentPathsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectParentPathsRequest || (ListObjectParentPathsRequest = {}));
export var ListObjectParentPathsResponse;
(function (ListObjectParentPathsResponse) {
  /**
   * @internal
   */
  ListObjectParentPathsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectParentPathsResponse || (ListObjectParentPathsResponse = {}));
export var CannotListParentOfRootException;
(function (CannotListParentOfRootException) {
  /**
   * @internal
   */
  CannotListParentOfRootException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CannotListParentOfRootException || (CannotListParentOfRootException = {}));
export var ListObjectParentsRequest;
(function (ListObjectParentsRequest) {
  /**
   * @internal
   */
  ListObjectParentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectParentsRequest || (ListObjectParentsRequest = {}));
export var ListObjectParentsResponse;
(function (ListObjectParentsResponse) {
  /**
   * @internal
   */
  ListObjectParentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectParentsResponse || (ListObjectParentsResponse = {}));
export var ListObjectPoliciesRequest;
(function (ListObjectPoliciesRequest) {
  /**
   * @internal
   */
  ListObjectPoliciesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectPoliciesRequest || (ListObjectPoliciesRequest = {}));
export var ListObjectPoliciesResponse;
(function (ListObjectPoliciesResponse) {
  /**
   * @internal
   */
  ListObjectPoliciesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListObjectPoliciesResponse || (ListObjectPoliciesResponse = {}));
export var ListOutgoingTypedLinksRequest;
(function (ListOutgoingTypedLinksRequest) {
  /**
   * @internal
   */
  ListOutgoingTypedLinksRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.FilterAttributeRanges && {
        FilterAttributeRanges: obj.FilterAttributeRanges.map(function (item) {
          return TypedLinkAttributeRange.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListOutgoingTypedLinksRequest || (ListOutgoingTypedLinksRequest = {}));
export var ListOutgoingTypedLinksResponse;
(function (ListOutgoingTypedLinksResponse) {
  /**
   * @internal
   */
  ListOutgoingTypedLinksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListOutgoingTypedLinksResponse || (ListOutgoingTypedLinksResponse = {}));
export var ListPolicyAttachmentsRequest;
(function (ListPolicyAttachmentsRequest) {
  /**
   * @internal
   */
  ListPolicyAttachmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPolicyAttachmentsRequest || (ListPolicyAttachmentsRequest = {}));
export var ListPolicyAttachmentsResponse;
(function (ListPolicyAttachmentsResponse) {
  /**
   * @internal
   */
  ListPolicyAttachmentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPolicyAttachmentsResponse || (ListPolicyAttachmentsResponse = {}));
export var ListPublishedSchemaArnsRequest;
(function (ListPublishedSchemaArnsRequest) {
  /**
   * @internal
   */
  ListPublishedSchemaArnsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPublishedSchemaArnsRequest || (ListPublishedSchemaArnsRequest = {}));
export var ListPublishedSchemaArnsResponse;
(function (ListPublishedSchemaArnsResponse) {
  /**
   * @internal
   */
  ListPublishedSchemaArnsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPublishedSchemaArnsResponse || (ListPublishedSchemaArnsResponse = {}));
export var InvalidTaggingRequestException;
(function (InvalidTaggingRequestException) {
  /**
   * @internal
   */
  InvalidTaggingRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidTaggingRequestException || (InvalidTaggingRequestException = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListTypedLinkFacetAttributesRequest;
(function (ListTypedLinkFacetAttributesRequest) {
  /**
   * @internal
   */
  ListTypedLinkFacetAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypedLinkFacetAttributesRequest || (ListTypedLinkFacetAttributesRequest = {}));
export var ListTypedLinkFacetAttributesResponse;
(function (ListTypedLinkFacetAttributesResponse) {
  /**
   * @internal
   */
  ListTypedLinkFacetAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attributes && {
        Attributes: obj.Attributes.map(function (item) {
          return TypedLinkAttributeDefinition.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListTypedLinkFacetAttributesResponse || (ListTypedLinkFacetAttributesResponse = {}));
export var ListTypedLinkFacetNamesRequest;
(function (ListTypedLinkFacetNamesRequest) {
  /**
   * @internal
   */
  ListTypedLinkFacetNamesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypedLinkFacetNamesRequest || (ListTypedLinkFacetNamesRequest = {}));
export var ListTypedLinkFacetNamesResponse;
(function (ListTypedLinkFacetNamesResponse) {
  /**
   * @internal
   */
  ListTypedLinkFacetNamesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypedLinkFacetNamesResponse || (ListTypedLinkFacetNamesResponse = {}));
export var LookupPolicyRequest;
(function (LookupPolicyRequest) {
  /**
   * @internal
   */
  LookupPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LookupPolicyRequest || (LookupPolicyRequest = {}));
export var LookupPolicyResponse;
(function (LookupPolicyResponse) {
  /**
   * @internal
   */
  LookupPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LookupPolicyResponse || (LookupPolicyResponse = {}));
export var PublishSchemaRequest;
(function (PublishSchemaRequest) {
  /**
   * @internal
   */
  PublishSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublishSchemaRequest || (PublishSchemaRequest = {}));
export var PublishSchemaResponse;
(function (PublishSchemaResponse) {
  /**
   * @internal
   */
  PublishSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublishSchemaResponse || (PublishSchemaResponse = {}));
export var SchemaAlreadyPublishedException;
(function (SchemaAlreadyPublishedException) {
  /**
   * @internal
   */
  SchemaAlreadyPublishedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SchemaAlreadyPublishedException || (SchemaAlreadyPublishedException = {}));
export var InvalidSchemaDocException;
(function (InvalidSchemaDocException) {
  /**
   * @internal
   */
  InvalidSchemaDocException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidSchemaDocException || (InvalidSchemaDocException = {}));
export var PutSchemaFromJsonRequest;
(function (PutSchemaFromJsonRequest) {
  /**
   * @internal
   */
  PutSchemaFromJsonRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutSchemaFromJsonRequest || (PutSchemaFromJsonRequest = {}));
export var PutSchemaFromJsonResponse;
(function (PutSchemaFromJsonResponse) {
  /**
   * @internal
   */
  PutSchemaFromJsonResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutSchemaFromJsonResponse || (PutSchemaFromJsonResponse = {}));
export var RemoveFacetFromObjectRequest;
(function (RemoveFacetFromObjectRequest) {
  /**
   * @internal
   */
  RemoveFacetFromObjectRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveFacetFromObjectRequest || (RemoveFacetFromObjectRequest = {}));
export var RemoveFacetFromObjectResponse;
(function (RemoveFacetFromObjectResponse) {
  /**
   * @internal
   */
  RemoveFacetFromObjectResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveFacetFromObjectResponse || (RemoveFacetFromObjectResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var InvalidFacetUpdateException;
(function (InvalidFacetUpdateException) {
  /**
   * @internal
   */
  InvalidFacetUpdateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidFacetUpdateException || (InvalidFacetUpdateException = {}));
export var FacetAttributeUpdate;
(function (FacetAttributeUpdate) {
  /**
   * @internal
   */
  FacetAttributeUpdate.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attribute && { Attribute: FacetAttribute.filterSensitiveLog(obj.Attribute) }
    );
  };
})(FacetAttributeUpdate || (FacetAttributeUpdate = {}));
export var UpdateFacetRequest;
(function (UpdateFacetRequest) {
  /**
   * @internal
   */
  UpdateFacetRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return FacetAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateFacetRequest || (UpdateFacetRequest = {}));
export var UpdateFacetResponse;
(function (UpdateFacetResponse) {
  /**
   * @internal
   */
  UpdateFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFacetResponse || (UpdateFacetResponse = {}));
export var UpdateLinkAttributesRequest;
(function (UpdateLinkAttributesRequest) {
  /**
   * @internal
   */
  UpdateLinkAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.TypedLinkSpecifier && {
          TypedLinkSpecifier: TypedLinkSpecifier.filterSensitiveLog(obj.TypedLinkSpecifier),
        }
      ),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return LinkAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateLinkAttributesRequest || (UpdateLinkAttributesRequest = {}));
export var UpdateLinkAttributesResponse;
(function (UpdateLinkAttributesResponse) {
  /**
   * @internal
   */
  UpdateLinkAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateLinkAttributesResponse || (UpdateLinkAttributesResponse = {}));
export var UpdateObjectAttributesRequest;
(function (UpdateObjectAttributesRequest) {
  /**
   * @internal
   */
  UpdateObjectAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return ObjectAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateObjectAttributesRequest || (UpdateObjectAttributesRequest = {}));
export var UpdateObjectAttributesResponse;
(function (UpdateObjectAttributesResponse) {
  /**
   * @internal
   */
  UpdateObjectAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateObjectAttributesResponse || (UpdateObjectAttributesResponse = {}));
export var UpdateSchemaRequest;
(function (UpdateSchemaRequest) {
  /**
   * @internal
   */
  UpdateSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSchemaRequest || (UpdateSchemaRequest = {}));
export var UpdateSchemaResponse;
(function (UpdateSchemaResponse) {
  /**
   * @internal
   */
  UpdateSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSchemaResponse || (UpdateSchemaResponse = {}));
export var TypedLinkFacetAttributeUpdate;
(function (TypedLinkFacetAttributeUpdate) {
  /**
   * @internal
   */
  TypedLinkFacetAttributeUpdate.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attribute && { Attribute: TypedLinkAttributeDefinition.filterSensitiveLog(obj.Attribute) }
    );
  };
})(TypedLinkFacetAttributeUpdate || (TypedLinkFacetAttributeUpdate = {}));
export var UpdateTypedLinkFacetRequest;
(function (UpdateTypedLinkFacetRequest) {
  /**
   * @internal
   */
  UpdateTypedLinkFacetRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AttributeUpdates && {
        AttributeUpdates: obj.AttributeUpdates.map(function (item) {
          return TypedLinkFacetAttributeUpdate.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateTypedLinkFacetRequest || (UpdateTypedLinkFacetRequest = {}));
export var UpdateTypedLinkFacetResponse;
(function (UpdateTypedLinkFacetResponse) {
  /**
   * @internal
   */
  UpdateTypedLinkFacetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateTypedLinkFacetResponse || (UpdateTypedLinkFacetResponse = {}));
export var IncompatibleSchemaException;
(function (IncompatibleSchemaException) {
  /**
   * @internal
   */
  IncompatibleSchemaException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IncompatibleSchemaException || (IncompatibleSchemaException = {}));
export var UpgradeAppliedSchemaRequest;
(function (UpgradeAppliedSchemaRequest) {
  /**
   * @internal
   */
  UpgradeAppliedSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpgradeAppliedSchemaRequest || (UpgradeAppliedSchemaRequest = {}));
export var UpgradeAppliedSchemaResponse;
(function (UpgradeAppliedSchemaResponse) {
  /**
   * @internal
   */
  UpgradeAppliedSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpgradeAppliedSchemaResponse || (UpgradeAppliedSchemaResponse = {}));
export var UpgradePublishedSchemaRequest;
(function (UpgradePublishedSchemaRequest) {
  /**
   * @internal
   */
  UpgradePublishedSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpgradePublishedSchemaRequest || (UpgradePublishedSchemaRequest = {}));
export var UpgradePublishedSchemaResponse;
(function (UpgradePublishedSchemaResponse) {
  /**
   * @internal
   */
  UpgradePublishedSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpgradePublishedSchemaResponse || (UpgradePublishedSchemaResponse = {}));
//# sourceMappingURL=models_0.js.map
