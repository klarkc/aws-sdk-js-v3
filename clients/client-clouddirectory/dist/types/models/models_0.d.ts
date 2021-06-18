import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Access denied. Check your permissions.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}
export declare namespace AccessDeniedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>A unique identifier for an attribute.</p>
 */
export interface AttributeKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and
   *       attribute.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the facet that the attribute exists within.</p>
   */
  FacetName: string | undefined;
  /**
   * <p>The name of the attribute.</p>
   */
  Name: string | undefined;
}
export declare namespace AttributeKey {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttributeKey) => any;
}
/**
 * <p>Represents the data for a typed attribute. You can set one, and only one, of the
 *       elements. Each attribute in an item is a name-value pair. Attributes have a single
 *       value.</p>
 */
export declare type TypedAttributeValue =
  | TypedAttributeValue.BinaryValueMember
  | TypedAttributeValue.BooleanValueMember
  | TypedAttributeValue.DatetimeValueMember
  | TypedAttributeValue.NumberValueMember
  | TypedAttributeValue.StringValueMember
  | TypedAttributeValue.$UnknownMember;
export declare namespace TypedAttributeValue {
  /**
   * <p>A string data value.</p>
   */
  interface StringValueMember {
    StringValue: string;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A binary data value.</p>
   */
  interface BinaryValueMember {
    StringValue?: never;
    BinaryValue: Uint8Array;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A Boolean data value.</p>
   */
  interface BooleanValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue: boolean;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A number data value.</p>
   */
  interface NumberValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue: string;
    DatetimeValue?: never;
    $unknown?: never;
  }
  /**
   * <p>A date and time value.</p>
   */
  interface DatetimeValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue: Date;
    $unknown?: never;
  }
  interface $UnknownMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    StringValue: (value: string) => T;
    BinaryValue: (value: Uint8Array) => T;
    BooleanValue: (value: boolean) => T;
    NumberValue: (value: string) => T;
    DatetimeValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: TypedAttributeValue, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedAttributeValue) => any;
}
/**
 * <p>The combination of an attribute key and an attribute value.</p>
 */
export interface AttributeKeyAndValue {
  /**
   * <p>The key of the attribute.</p>
   */
  Key: AttributeKey | undefined;
  /**
   * <p>The value of the attribute.</p>
   */
  Value: TypedAttributeValue | undefined;
}
export declare namespace AttributeKeyAndValue {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttributeKeyAndValue) => any;
}
/**
 * <p>The reference that identifies an object.</p>
 */
export interface ObjectReference {
  /**
   * <p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>/some/path</i> - Identifies the object based on path</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>#SomeBatchReference</i> - Identifies the object in a batch call</p>
   *             </li>
   *          </ul>
   */
  Selector?: string;
}
export declare namespace ObjectReference {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectReference) => any;
}
/**
 * <p>A facet.</p>
 */
export interface SchemaFacet {
  /**
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.</p>
   */
  SchemaArn?: string;
  /**
   * <p>The name of the facet.</p>
   */
  FacetName?: string;
}
export declare namespace SchemaFacet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SchemaFacet) => any;
}
export interface AddFacetToObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>Attributes on the facet that you are adding to the object.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];
  /**
   * <p>A reference to the object you are adding the specified facet to.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace AddFacetToObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AddFacetToObjectRequest) => any;
}
export interface AddFacetToObjectResponse {}
export declare namespace AddFacetToObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AddFacetToObjectResponse) => any;
}
/**
 * <p>Operations are only permitted on enabled directories.</p>
 */
export interface DirectoryNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "DirectoryNotEnabledException";
  $fault: "client";
  Message?: string;
}
export declare namespace DirectoryNotEnabledException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DirectoryNotEnabledException) => any;
}
/**
 * <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 */
export interface FacetValidationException extends __SmithyException, $MetadataBearer {
  name: "FacetValidationException";
  $fault: "client";
  Message?: string;
}
export declare namespace FacetValidationException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetValidationException) => any;
}
/**
 * <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}
export declare namespace InternalServiceException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServiceException) => any;
}
/**
 * <p>Indicates that the provided ARN value is not valid.</p>
 */
export interface InvalidArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidArnException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidArnException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidArnException) => any;
}
/**
 * <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}
export declare namespace LimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}
export declare namespace ResourceNotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 */
export interface RetryableConflictException extends __SmithyException, $MetadataBearer {
  name: "RetryableConflictException";
  $fault: "client";
  Message?: string;
}
export declare namespace RetryableConflictException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RetryableConflictException) => any;
}
/**
 * <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}
export declare namespace ValidationException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface ApplySchemaRequest {
  /**
   * <p>Published schema Amazon Resource Name (ARN) that needs to be copied. For more
   *       information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn: string | undefined;
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       into which the schema is copied. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace ApplySchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApplySchemaRequest) => any;
}
export interface ApplySchemaResponse {
  /**
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on
   *       this directory. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn?: string;
  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn?: string;
}
export declare namespace ApplySchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApplySchemaResponse) => any;
}
/**
 * <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 */
export interface InvalidAttachmentException extends __SmithyException, $MetadataBearer {
  name: "InvalidAttachmentException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidAttachmentException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidAttachmentException) => any;
}
/**
 * <p>Indicates that a schema could not be created due to a naming conflict. Please select a
 *       different name and then try again.</p>
 */
export interface SchemaAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "SchemaAlreadyExistsException";
  $fault: "client";
  Message?: string;
}
export declare namespace SchemaAlreadyExistsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SchemaAlreadyExistsException) => any;
}
export interface AttachObjectRequest {
  /**
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;
  /**
   * <p>The child object reference to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;
  /**
   * <p>The link name with which the child object is attached to the parent.</p>
   */
  LinkName: string | undefined;
}
export declare namespace AttachObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachObjectRequest) => any;
}
export interface AttachObjectResponse {
  /**
   * <p>The attached <code>ObjectIdentifier</code>, which is the child
   *         <code>ObjectIdentifier</code>.</p>
   */
  AttachedObjectIdentifier?: string;
}
export declare namespace AttachObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachObjectResponse) => any;
}
/**
 * <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
 */
export interface LinkNameAlreadyInUseException extends __SmithyException, $MetadataBearer {
  name: "LinkNameAlreadyInUseException";
  $fault: "client";
  Message?: string;
}
export declare namespace LinkNameAlreadyInUseException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LinkNameAlreadyInUseException) => any;
}
export interface AttachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>The reference that identifies the object to which the policy will be
   *       attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace AttachPolicyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachPolicyRequest) => any;
}
export interface AttachPolicyResponse {}
export declare namespace AttachPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachPolicyResponse) => any;
}
/**
 * <p>Indicates that the requested operation can only operate on policy objects.</p>
 */
export interface NotPolicyException extends __SmithyException, $MetadataBearer {
  name: "NotPolicyException";
  $fault: "client";
  Message?: string;
}
export declare namespace NotPolicyException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotPolicyException) => any;
}
export interface AttachToIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index
   *       exist.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}
export declare namespace AttachToIndexRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachToIndexRequest) => any;
}
export interface AttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}
export declare namespace AttachToIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachToIndexResponse) => any;
}
/**
 * <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
 */
export interface IndexedAttributeMissingException extends __SmithyException, $MetadataBearer {
  name: "IndexedAttributeMissingException";
  $fault: "client";
  Message?: string;
}
export declare namespace IndexedAttributeMissingException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: IndexedAttributeMissingException) => any;
}
/**
 * <p>Indicates that the requested operation can only operate on index objects.</p>
 */
export interface NotIndexException extends __SmithyException, $MetadataBearer {
  name: "NotIndexException";
  $fault: "client";
  Message?: string;
}
export declare namespace NotIndexException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotIndexException) => any;
}
/**
 * <p>Identifies the attribute name and value for a typed link.</p>
 */
export interface AttributeNameAndValue {
  /**
   * <p>The attribute name of the typed link.</p>
   */
  AttributeName: string | undefined;
  /**
   * <p>The value for the typed link.</p>
   */
  Value: TypedAttributeValue | undefined;
}
export declare namespace AttributeNameAndValue {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttributeNameAndValue) => any;
}
/**
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed
 *       link.</p>
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  TypedLinkName: string | undefined;
}
export declare namespace TypedLinkSchemaAndFacetName {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkSchemaAndFacetName) => any;
}
export interface AttachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}
export declare namespace AttachTypedLinkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachTypedLinkRequest) => any;
}
/**
 * <p>Contains all the information that is used to uniquely identify a typed link. The
 *       parameters discussed in this topic are used to uniquely specify the typed link being operated
 *       on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API
 *       operations provide typed link specifiers as output. You can also construct a typed link
 *       specifier from scratch.</p>
 */
export interface TypedLinkSpecifier {
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues: AttributeNameAndValue[] | undefined;
}
export declare namespace TypedLinkSpecifier {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkSpecifier) => any;
}
export interface AttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export declare namespace AttachTypedLinkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AttachTypedLinkResponse) => any;
}
export declare enum ConsistencyLevel {
  EVENTUAL = "EVENTUAL",
  SERIALIZABLE = "SERIALIZABLE",
}
/**
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}
export declare namespace BatchGetLinkAttributes {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetLinkAttributes) => any;
}
/**
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectAttributes {
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}
export declare namespace BatchGetObjectAttributes {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetObjectAttributes) => any;
}
/**
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectInformation {
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchGetObjectInformation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetObjectInformation) => any;
}
/**
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListAttachedIndices {
  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListAttachedIndices {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListAttachedIndices) => any;
}
export declare enum RangeMode {
  EXCLUSIVE = "EXCLUSIVE",
  FIRST = "FIRST",
  INCLUSIVE = "INCLUSIVE",
  LAST = "LAST",
  LAST_BEFORE_MISSING_VALUES = "LAST_BEFORE_MISSING_VALUES",
}
/**
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 */
export interface TypedAttributeValueRange {
  /**
   * <p>The inclusive or exclusive range start.</p>
   */
  StartMode: RangeMode | string | undefined;
  /**
   * <p>The value to start the range at.</p>
   */
  StartValue?: TypedAttributeValue;
  /**
   * <p>The inclusive or exclusive range end.</p>
   */
  EndMode: RangeMode | string | undefined;
  /**
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: TypedAttributeValue;
}
export declare namespace TypedAttributeValueRange {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedAttributeValueRange) => any;
}
/**
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 */
export interface TypedLinkAttributeRange {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  AttributeName?: string;
  /**
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: TypedAttributeValueRange | undefined;
}
export declare namespace TypedLinkAttributeRange {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkAttributeRange) => any;
}
/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIncomingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *        order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListIncomingTypedLinks {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListIncomingTypedLinks) => any;
}
/**
 * <p>A range of attributes.</p>
 */
export interface ObjectAttributeRange {
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: AttributeKey;
  /**
   * <p>The range of attribute values being selected.</p>
   */
  Range?: TypedAttributeValueRange;
}
export declare namespace ObjectAttributeRange {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectAttributeRange) => any;
}
/**
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIndex {
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];
  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListIndex {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListIndex) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 */
export interface BatchListObjectAttributes {
  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}
export declare namespace BatchListObjectAttributes {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectAttributes) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 */
export interface BatchListObjectChildren {
  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate
   *        number.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListObjectChildren {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectChildren) => any;
}
/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectParentPaths {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListObjectParentPaths {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectParentPaths) => any;
}
export interface BatchListObjectParents {
  /**
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: ObjectReference | undefined;
  NextToken?: string;
  MaxResults?: number;
}
export declare namespace BatchListObjectParents {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectParents) => any;
}
/**
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectPolicies {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListObjectPolicies {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectPolicies) => any;
}
/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *        not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListOutgoingTypedLinks {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListOutgoingTypedLinks) => any;
}
/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListPolicyAttachments {
  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchListPolicyAttachments {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListPolicyAttachments) => any;
}
/**
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchLookupPolicy {
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace BatchLookupPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchLookupPolicy) => any;
}
/**
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 */
export interface BatchReadOperation {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributes;
  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildren;
  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndices;
  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPaths;
  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformation;
  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributes;
  ListObjectParents?: BatchListObjectParents;
  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPolicies;
  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachments;
  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicy;
  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndex;
  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;
  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;
  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributes;
}
export declare namespace BatchReadOperation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadOperation) => any;
}
export interface BatchReadRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchReadOperation[] | undefined;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace BatchReadRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadRequest) => any;
}
export declare enum BatchReadExceptionType {
  AccessDeniedException = "AccessDeniedException",
  CannotListParentOfRootException = "CannotListParentOfRootException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidNextTokenException = "InvalidNextTokenException",
  LimitExceededException = "LimitExceededException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ValidationException = "ValidationException",
}
/**
 * <p>The batch read exception structure, which contains the exception type and
 *       message.</p>
 */
export interface BatchReadException {
  /**
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   */
  Type?: BatchReadExceptionType | string;
  /**
   * <p>An exception message that is associated with the failure.</p>
   */
  Message?: string;
}
export declare namespace BatchReadException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadException) => any;
}
/**
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}
export declare namespace BatchGetLinkAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetLinkAttributesResponse) => any;
}
/**
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}
export declare namespace BatchGetObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetObjectAttributesResponse) => any;
}
/**
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 */
export interface BatchGetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: SchemaFacet[];
  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace BatchGetObjectInformationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchGetObjectInformationResponse) => any;
}
/**
 * <p>Represents an index and an attached object.</p>
 */
export interface IndexAttachment {
  /**
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?: AttributeKeyAndValue[];
  /**
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace IndexAttachment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: IndexAttachment) => any;
}
/**
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListAttachedIndicesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListAttachedIndicesResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListIncomingTypedLinksResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListIncomingTypedLinksResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 */
export interface BatchListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListIndexResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 */
export interface BatchListObjectAttributesResponse {
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key; attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectAttributesResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 */
export interface BatchListObjectChildrenResponse {
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: {
    [key: string]: string;
  };
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListObjectChildrenResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectChildrenResponse) => any;
}
/**
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the
 *       directory.</p>
 */
export interface PathToObjectIdentifiers {
  /**
   * <p>The path that is used to identify the object starting from directory root.</p>
   */
  Path?: string;
  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the
   *       request.</p>
   */
  ObjectIdentifiers?: string[];
}
export declare namespace PathToObjectIdentifiers {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PathToObjectIdentifiers) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *        directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListObjectParentPathsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectParentPathsResponse) => any;
}
/**
 * <p>A pair of ObjectIdentifier and LinkName.</p>
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
  /**
   * <p>The name of the link between the parent and the child object.</p>
   */
  LinkName?: string;
}
export declare namespace ObjectIdentifierAndLinkNameTuple {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectIdentifierAndLinkNameTuple) => any;
}
export interface BatchListObjectParentsResponse {
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
  NextToken?: string;
}
export declare namespace BatchListObjectParentsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectParentsResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *        object.</p>
   */
  AttachedPolicyIds?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListObjectPoliciesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListObjectPoliciesResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListOutgoingTypedLinksResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListOutgoingTypedLinksResponse) => any;
}
/**
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchListPolicyAttachmentsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchListPolicyAttachmentsResponse) => any;
}
/**
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is
 *       attached. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export interface PolicyAttachment {
  /**
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   */
  PolicyId?: string;
  /**
   * <p>The <code>ObjectIdentifier</code> that is associated with
   *       <code>PolicyAttachment</code>.</p>
   */
  ObjectIdentifier?: string;
  /**
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   */
  PolicyType?: string;
}
export declare namespace PolicyAttachment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PolicyAttachment) => any;
}
/**
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find
 *       all of the policies that are associated with that object and the parent to that
 *       object.</p>
 */
export interface PolicyToPath {
  /**
   * <p>The path that is referenced from the root.</p>
   */
  Path?: string;
  /**
   * <p>List of policy objects.</p>
   */
  Policies?: PolicyAttachment[];
}
export declare namespace PolicyToPath {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PolicyToPath) => any;
}
/**
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 */
export interface BatchLookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *        <code>PolicyType</code>. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace BatchLookupPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchLookupPolicyResponse) => any;
}
/**
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 */
export interface BatchReadSuccessfulResponse {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse;
  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildrenResponse;
  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformationResponse;
  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse;
  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse;
  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;
  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse;
  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;
  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicyResponse;
  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndexResponse;
  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;
  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;
  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse;
  ListObjectParents?: BatchListObjectParentsResponse;
}
export declare namespace BatchReadSuccessfulResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadSuccessfulResponse) => any;
}
/**
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 */
export interface BatchReadOperationResponse {
  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse;
  /**
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: BatchReadException;
}
export declare namespace BatchReadOperationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadOperationResponse) => any;
}
export interface BatchReadResponse {
  /**
   * <p>A list of all the responses for each batch read.</p>
   */
  Responses?: BatchReadOperationResponse[];
}
export declare namespace BatchReadResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchReadResponse) => any;
}
export declare enum BatchWriteExceptionType {
  AccessDeniedException = "AccessDeniedException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  IndexedAttributeMissingException = "IndexedAttributeMissingException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidAttachmentException = "InvalidAttachmentException",
  LimitExceededException = "LimitExceededException",
  LinkNameAlreadyInUseException = "LinkNameAlreadyInUseException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ObjectAlreadyDetachedException = "ObjectAlreadyDetachedException",
  ObjectNotDetachedException = "ObjectNotDetachedException",
  ResourceNotFoundException = "ResourceNotFoundException",
  StillContainsLinksException = "StillContainsLinksException",
  UnsupportedIndexTypeException = "UnsupportedIndexTypeException",
  ValidationException = "ValidationException",
}
/**
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 */
export interface BatchWriteException extends __SmithyException, $MetadataBearer {
  name: "BatchWriteException";
  $fault: "client";
  Index?: number;
  Type?: BatchWriteExceptionType | string;
  Message?: string;
}
export declare namespace BatchWriteException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchWriteException) => any;
}
/**
 * <p>Represents the output of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObject {
  /**
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;
  /**
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchAddFacetToObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAddFacetToObject) => any;
}
/**
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 */
export interface BatchAttachObject {
  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;
  /**
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;
  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;
}
export declare namespace BatchAttachObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachObject) => any;
}
/**
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachPolicy {
  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>The reference that identifies the object to which the policy will be
   *        attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchAttachPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachPolicy) => any;
}
/**
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachToIndex {
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}
export declare namespace BatchAttachToIndex {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachToIndex) => any;
}
/**
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachTypedLink {
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;
  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}
export declare namespace BatchAttachTypedLink {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachTypedLink) => any;
}
/**
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchCreateIndex {
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *        is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;
  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *        not.</p>
   */
  IsUnique: boolean | undefined;
  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;
  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}
export declare namespace BatchCreateIndex {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateIndex) => any;
}
/**
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 */
export interface BatchCreateObject {
  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaFacet: SchemaFacet[] | undefined;
  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as
   *       the map value.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;
  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;
  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}
export declare namespace BatchCreateObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateObject) => any;
}
/**
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 */
export interface BatchDeleteObject {
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchDeleteObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeleteObject) => any;
}
/**
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachFromIndex {
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}
export declare namespace BatchDetachFromIndex {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachFromIndex) => any;
}
/**
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 */
export interface BatchDetachObject {
  /**
   * <p>Parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;
  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;
  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}
export declare namespace BatchDetachObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachObject) => any;
}
/**
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 */
export interface BatchDetachPolicy {
  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchDetachPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachPolicy) => any;
}
/**
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachTypedLink {
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}
export declare namespace BatchDetachTypedLink {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachTypedLink) => any;
}
/**
 * <p>A batch operation to remove a facet from an object.</p>
 */
export interface BatchRemoveFacetFromObject {
  /**
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace BatchRemoveFacetFromObject {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchRemoveFacetFromObject) => any;
}
export declare enum UpdateActionType {
  CREATE_OR_UPDATE = "CREATE_OR_UPDATE",
  DELETE = "DELETE",
}
/**
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 */
export interface LinkAttributeAction {
  /**
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   */
  AttributeActionType?: UpdateActionType | string;
  /**
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: TypedAttributeValue;
}
export declare namespace LinkAttributeAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LinkAttributeAction) => any;
}
/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface LinkAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: AttributeKey;
  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: LinkAttributeAction;
}
export declare namespace LinkAttributeUpdate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LinkAttributeUpdate) => any;
}
/**
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchUpdateLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}
export declare namespace BatchUpdateLinkAttributes {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateLinkAttributes) => any;
}
/**
 * <p>The action to take on the object attribute.</p>
 */
export interface ObjectAttributeAction {
  /**
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   */
  ObjectAttributeActionType?: UpdateActionType | string;
  /**
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}
export declare namespace ObjectAttributeAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectAttributeAction) => any;
}
/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface ObjectAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: AttributeKey;
  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: ObjectAttributeAction;
}
export declare namespace ObjectAttributeUpdate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectAttributeUpdate) => any;
}
/**
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 */
export interface BatchUpdateObjectAttributes {
  /**
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}
export declare namespace BatchUpdateObjectAttributes {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateObjectAttributes) => any;
}
/**
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 */
export interface BatchWriteOperation {
  /**
   * <p>Creates an object.</p>
   */
  CreateObject?: BatchCreateObject;
  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObject;
  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObject;
  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;
  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObject;
  /**
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: BatchAddFacetToObject;
  /**
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;
  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicy;
  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicy;
  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndex;
  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndex;
  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndex;
  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLink;
  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLink;
  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;
}
export declare namespace BatchWriteOperation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchWriteOperation) => any;
}
export interface BatchWriteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchWriteOperation[] | undefined;
}
export declare namespace BatchWriteRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchWriteRequest) => any;
}
/**
 * <p>The result of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObjectResponse {}
export declare namespace BatchAddFacetToObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAddFacetToObjectResponse) => any;
}
/**
 * <p>Represents the output batch <a>AttachObject</a> response operation.</p>
 */
export interface BatchAttachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that has been attached.</p>
   */
  attachedObjectIdentifier?: string;
}
export declare namespace BatchAttachObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachObjectResponse) => any;
}
/**
 * <p>Represents the output of an <a>AttachPolicy</a> response
 *       operation.</p>
 */
export interface BatchAttachPolicyResponse {}
export declare namespace BatchAttachPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachPolicyResponse) => any;
}
/**
 * <p>Represents the output of a <a>AttachToIndex</a> response operation.</p>
 */
export interface BatchAttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}
export declare namespace BatchAttachToIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachToIndexResponse) => any;
}
/**
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export declare namespace BatchAttachTypedLinkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAttachTypedLinkResponse) => any;
}
/**
 * <p>Represents the output of a <a>CreateIndex</a> response operation.</p>
 */
export interface BatchCreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace BatchCreateIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateIndexResponse) => any;
}
/**
 * <p>Represents the output of a <a>CreateObject</a> response operation.</p>
 */
export interface BatchCreateObjectResponse {
  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace BatchCreateObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateObjectResponse) => any;
}
/**
 * <p>Represents the output of a <a>DeleteObject</a> response operation.</p>
 */
export interface BatchDeleteObjectResponse {}
export declare namespace BatchDeleteObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeleteObjectResponse) => any;
}
/**
 * <p>Represents the output of a <a>DetachFromIndex</a> response operation.</p>
 */
export interface BatchDetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}
export declare namespace BatchDetachFromIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachFromIndexResponse) => any;
}
/**
 * <p>Represents the output of a <a>DetachObject</a> response operation.</p>
 */
export interface BatchDetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the detached object.</p>
   */
  detachedObjectIdentifier?: string;
}
export declare namespace BatchDetachObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachObjectResponse) => any;
}
/**
 * <p>Represents the output of a <a>DetachPolicy</a> response operation.</p>
 */
export interface BatchDetachPolicyResponse {}
export declare namespace BatchDetachPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachPolicyResponse) => any;
}
/**
 * <p>Represents the output of a <a>DetachTypedLink</a> response operation.</p>
 */
export interface BatchDetachTypedLinkResponse {}
export declare namespace BatchDetachTypedLinkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDetachTypedLinkResponse) => any;
}
/**
 * <p>An empty result that represents success.</p>
 */
export interface BatchRemoveFacetFromObjectResponse {}
export declare namespace BatchRemoveFacetFromObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchRemoveFacetFromObjectResponse) => any;
}
/**
 * <p>Represents the output of a <a>UpdateLinkAttributes</a> response operation.</p>
 */
export interface BatchUpdateLinkAttributesResponse {}
export declare namespace BatchUpdateLinkAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateLinkAttributesResponse) => any;
}
/**
 * <p>Represents the output of a <code>BatchUpdate</code> response operation.</p>
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * <p>ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace BatchUpdateObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateObjectAttributesResponse) => any;
}
/**
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 */
export interface BatchWriteOperationResponse {
  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: BatchCreateObjectResponse;
  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObjectResponse;
  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObjectResponse;
  /**
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObjectResponse;
  /**
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse;
  /**
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicyResponse;
  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicyResponse;
  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndexResponse;
  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndexResponse;
  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndexResponse;
  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse;
  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse;
  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
}
export declare namespace BatchWriteOperationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchWriteOperationResponse) => any;
}
export interface BatchWriteResponse {
  /**
   * <p>A list of all the responses for each batch write.</p>
   */
  Responses?: BatchWriteOperationResponse[];
}
export declare namespace BatchWriteResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchWriteResponse) => any;
}
export interface CreateDirectoryRequest {
  /**
   * <p>The name of the <a>Directory</a>. Should be unique per account, per
   *       region.</p>
   */
  Name: string | undefined;
  /**
   * <p>The Amazon Resource Name (ARN) of the published schema that will be copied into the
   *       data <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}
export declare namespace CreateDirectoryRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDirectoryRequest) => any;
}
export interface CreateDirectoryResponse {
  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The name of the <a>Directory</a>.</p>
   */
  Name: string | undefined;
  /**
   * <p>The root object node of the created directory.</p>
   */
  ObjectIdentifier: string | undefined;
  /**
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published
   *       schema is copied into the directory, it has its own ARN, which is referred to applied schema
   *       ARN. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn: string | undefined;
}
export declare namespace CreateDirectoryResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDirectoryResponse) => any;
}
/**
 * <p>Indicates that a <a>Directory</a> could not be created due to a naming
 *       conflict. Choose a different name and try again.</p>
 */
export interface DirectoryAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "DirectoryAlreadyExistsException";
  $fault: "client";
  Message?: string;
}
export declare namespace DirectoryAlreadyExistsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DirectoryAlreadyExistsException) => any;
}
export declare enum RuleType {
  BINARY_LENGTH = "BINARY_LENGTH",
  NUMBER_COMPARISON = "NUMBER_COMPARISON",
  STRING_FROM_SET = "STRING_FROM_SET",
  STRING_LENGTH = "STRING_LENGTH",
}
/**
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the
 *       rule.</p>
 */
export interface Rule {
  /**
   * <p>The type of attribute validation rule.</p>
   */
  Type?: RuleType | string;
  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: {
    [key: string]: string;
  };
}
export declare namespace Rule {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Rule) => any;
}
export declare enum FacetAttributeType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  NUMBER = "NUMBER",
  STRING = "STRING",
  VARIANT = "VARIANT",
}
/**
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 */
export interface FacetAttributeDefinition {
  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;
  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;
  /**
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: {
    [key: string]: Rule;
  };
}
export declare namespace FacetAttributeDefinition {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetAttributeDefinition) => any;
}
/**
 * <p>The facet attribute reference that specifies the attribute definition that contains the
 *       attribute facet name and attribute name.</p>
 */
export interface FacetAttributeReference {
  /**
   * <p>The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetFacetName: string | undefined;
  /**
   * <p>The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetAttributeName: string | undefined;
}
export declare namespace FacetAttributeReference {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetAttributeReference) => any;
}
export declare enum RequiredAttributeBehavior {
  NOT_REQUIRED = "NOT_REQUIRED",
  REQUIRED_ALWAYS = "REQUIRED_ALWAYS",
}
/**
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 */
export interface FacetAttribute {
  /**
   * <p>The name of the facet attribute.</p>
   */
  Name: string | undefined;
  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure
   *       contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: FacetAttributeDefinition;
  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: FacetAttributeReference;
  /**
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   */
  RequiredBehavior?: RequiredAttributeBehavior | string;
}
export declare namespace FacetAttribute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetAttribute) => any;
}
export declare enum FacetStyle {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}
export declare enum ObjectType {
  INDEX = "INDEX",
  LEAF_NODE = "LEAF_NODE",
  NODE = "NODE",
  POLICY = "POLICY",
}
export interface CreateFacetRequest {
  /**
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   */
  Name: string | undefined;
  /**
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   */
  Attributes?: FacetAttribute[];
  /**
   * <p>Specifies whether a given object created from this facet is of type node, leaf node,
   *       policy or index.</p>
   *          <ul>
   *             <li>
   *                <p>Node: Can have multiple children but one parent.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Leaf node: Cannot have children but can have multiple parents.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Policy: Allows you to store a policy document and policy type. For more
   *         information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Index: Can be created with the Index API.</p>
   *             </li>
   *          </ul>
   */
  ObjectType?: ObjectType | string;
  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;
}
export declare namespace CreateFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateFacetRequest) => any;
}
export interface CreateFacetResponse {}
export declare namespace CreateFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateFacetResponse) => any;
}
/**
 * <p>A facet with the same name already exists.</p>
 */
export interface FacetAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "FacetAlreadyExistsException";
  $fault: "client";
  Message?: string;
}
export declare namespace FacetAlreadyExistsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetAlreadyExistsException) => any;
}
/**
 * <p>Occurs when any of the rule parameter keys or values are invalid.</p>
 */
export interface InvalidRuleException extends __SmithyException, $MetadataBearer {
  name: "InvalidRuleException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidRuleException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidRuleException) => any;
}
export interface CreateIndexRequest {
  /**
   * <p>The ARN of the directory where the index should be created.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *       is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;
  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *       not.</p>
   */
  IsUnique: boolean | undefined;
  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;
  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;
}
export declare namespace CreateIndexRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateIndexRequest) => any;
}
export interface CreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace CreateIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateIndexResponse) => any;
}
/**
 * <p>Indicates that the requested index type is not supported.</p>
 */
export interface UnsupportedIndexTypeException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedIndexTypeException";
  $fault: "client";
  Message?: string;
}
export declare namespace UnsupportedIndexTypeException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UnsupportedIndexTypeException) => any;
}
export interface CreateObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       in which the object will be created. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacets: SchemaFacet[] | undefined;
  /**
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map
   *       value.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];
  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;
  /**
   * <p>The name of link that is used to attach this object to a parent.</p>
   */
  LinkName?: string;
}
export declare namespace CreateObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateObjectRequest) => any;
}
export interface CreateObjectResponse {
  /**
   * <p>The identifier that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace CreateObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateObjectResponse) => any;
}
export interface CreateSchemaRequest {
  /**
   * <p>The name that is associated with the schema. This is unique to each account and in each
   *       region.</p>
   */
  Name: string | undefined;
}
export declare namespace CreateSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSchemaRequest) => any;
}
export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}
export declare namespace CreateSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSchemaResponse) => any;
}
/**
 * <p>A typed link attribute definition.</p>
 */
export interface TypedLinkAttributeDefinition {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  Name: string | undefined;
  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;
  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;
  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: {
    [key: string]: Rule;
  };
  /**
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   */
  RequiredBehavior: RequiredAttributeBehavior | string | undefined;
}
export declare namespace TypedLinkAttributeDefinition {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkAttributeDefinition) => any;
}
/**
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use
 *       the <a>CreateTypedLinkFacet</a> API.</p>
 */
export interface TypedLinkFacet {
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes: TypedLinkAttributeDefinition[] | undefined;
  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}
export declare namespace TypedLinkFacet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkFacet) => any;
}
export interface CreateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>
   *             <a>Facet</a> structure that is associated with the typed link
   *       facet.</p>
   */
  Facet: TypedLinkFacet | undefined;
}
export declare namespace CreateTypedLinkFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateTypedLinkFacetRequest) => any;
}
export interface CreateTypedLinkFacetResponse {}
export declare namespace CreateTypedLinkFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateTypedLinkFacetResponse) => any;
}
export interface DeleteDirectoryRequest {
  /**
   * <p>The ARN of the directory to delete.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace DeleteDirectoryRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDirectoryRequest) => any;
}
export interface DeleteDirectoryResponse {
  /**
   * <p>The ARN of the deleted directory.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace DeleteDirectoryResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDirectoryResponse) => any;
}
/**
 * <p>A directory that has been deleted and to which access has been attempted. Note: The
 *       requested resource will eventually cease to exist.</p>
 */
export interface DirectoryDeletedException extends __SmithyException, $MetadataBearer {
  name: "DirectoryDeletedException";
  $fault: "client";
  Message?: string;
}
export declare namespace DirectoryDeletedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DirectoryDeletedException) => any;
}
/**
 * <p>An operation can only operate on a disabled directory.</p>
 */
export interface DirectoryNotDisabledException extends __SmithyException, $MetadataBearer {
  name: "DirectoryNotDisabledException";
  $fault: "client";
  Message?: string;
}
export declare namespace DirectoryNotDisabledException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DirectoryNotDisabledException) => any;
}
export interface DeleteFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the facet to delete.</p>
   */
  Name: string | undefined;
}
export declare namespace DeleteFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteFacetRequest) => any;
}
export interface DeleteFacetResponse {}
export declare namespace DeleteFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteFacetResponse) => any;
}
/**
 * <p>Occurs when deleting a facet that contains an attribute that is a target to an
 *       attribute reference in a different facet.</p>
 */
export interface FacetInUseException extends __SmithyException, $MetadataBearer {
  name: "FacetInUseException";
  $fault: "client";
  Message?: string;
}
export declare namespace FacetInUseException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetInUseException) => any;
}
/**
 * <p>The specified <a>Facet</a> could not be found.</p>
 */
export interface FacetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "FacetNotFoundException";
  $fault: "client";
  Message?: string;
}
export declare namespace FacetNotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetNotFoundException) => any;
}
export interface DeleteObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace DeleteObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteObjectRequest) => any;
}
export interface DeleteObjectResponse {}
export declare namespace DeleteObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteObjectResponse) => any;
}
/**
 * <p>Indicates that the requested operation cannot be completed because the object has not
 *       been detached from the tree.</p>
 */
export interface ObjectNotDetachedException extends __SmithyException, $MetadataBearer {
  name: "ObjectNotDetachedException";
  $fault: "client";
  Message?: string;
}
export declare namespace ObjectNotDetachedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectNotDetachedException) => any;
}
export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}
export declare namespace DeleteSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteSchemaRequest) => any;
}
export interface DeleteSchemaResponse {
  /**
   * <p>The input ARN that is returned as part of the response. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn?: string;
}
export declare namespace DeleteSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteSchemaResponse) => any;
}
/**
 * <p>The object could not be deleted because links still exist. Remove the links and then
 *       try the operation again.</p>
 */
export interface StillContainsLinksException extends __SmithyException, $MetadataBearer {
  name: "StillContainsLinksException";
  $fault: "client";
  Message?: string;
}
export declare namespace StillContainsLinksException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StillContainsLinksException) => any;
}
export interface DeleteTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}
export declare namespace DeleteTypedLinkFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteTypedLinkFacetRequest) => any;
}
export interface DeleteTypedLinkFacetResponse {}
export declare namespace DeleteTypedLinkFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteTypedLinkFacetResponse) => any;
}
export interface DetachFromIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory the index and object exist
   *       in.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}
export declare namespace DetachFromIndexRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachFromIndexRequest) => any;
}
export interface DetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}
export declare namespace DetachFromIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachFromIndexResponse) => any;
}
/**
 * <p>Indicates that the object is not attached to the index.</p>
 */
export interface ObjectAlreadyDetachedException extends __SmithyException, $MetadataBearer {
  name: "ObjectAlreadyDetachedException";
  $fault: "client";
  Message?: string;
}
export declare namespace ObjectAlreadyDetachedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ObjectAlreadyDetachedException) => any;
}
export interface DetachObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;
  /**
   * <p>The link name associated with the object that needs to be detached.</p>
   */
  LinkName: string | undefined;
}
export declare namespace DetachObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachObjectRequest) => any;
}
export interface DetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   */
  DetachedObjectIdentifier?: string;
}
export declare namespace DetachObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachObjectResponse) => any;
}
/**
 * <p>Occurs when any invalid operations are performed on an object that is not a node, such
 *       as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 */
export interface NotNodeException extends __SmithyException, $MetadataBearer {
  name: "NotNodeException";
  $fault: "client";
  Message?: string;
}
export declare namespace NotNodeException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotNodeException) => any;
}
export interface DetachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace DetachPolicyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachPolicyRequest) => any;
}
export interface DetachPolicyResponse {}
export declare namespace DetachPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachPolicyResponse) => any;
}
export interface DetachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to detach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}
export declare namespace DetachTypedLinkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DetachTypedLinkRequest) => any;
}
export interface DisableDirectoryRequest {
  /**
   * <p>The ARN of the directory to disable.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace DisableDirectoryRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisableDirectoryRequest) => any;
}
export interface DisableDirectoryResponse {
  /**
   * <p>The ARN of the directory that has been disabled.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace DisableDirectoryResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisableDirectoryResponse) => any;
}
export interface EnableDirectoryRequest {
  /**
   * <p>The ARN of the directory to enable.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace EnableDirectoryRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EnableDirectoryRequest) => any;
}
export interface EnableDirectoryResponse {
  /**
   * <p>The ARN of the enabled directory.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace EnableDirectoryResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EnableDirectoryResponse) => any;
}
export interface GetAppliedSchemaVersionRequest {
  /**
   * <p>The ARN of the applied schema.</p>
   */
  SchemaArn: string | undefined;
}
export declare namespace GetAppliedSchemaVersionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppliedSchemaVersionRequest) => any;
}
export interface GetAppliedSchemaVersionResponse {
  /**
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   */
  AppliedSchemaArn?: string;
}
export declare namespace GetAppliedSchemaVersionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppliedSchemaVersionResponse) => any;
}
export interface GetDirectoryRequest {
  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;
}
export declare namespace GetDirectoryRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDirectoryRequest) => any;
}
export declare enum DirectoryState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}
/**
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 */
export interface Directory {
  /**
   * <p>The name of the directory.</p>
   */
  Name?: string;
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more
   *       information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;
  /**
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   */
  State?: DirectoryState | string;
  /**
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date;
}
export declare namespace Directory {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Directory) => any;
}
export interface GetDirectoryResponse {
  /**
   * <p>Metadata about the directory.</p>
   */
  Directory: Directory | undefined;
}
export declare namespace GetDirectoryResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDirectoryResponse) => any;
}
export interface GetFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the facet to retrieve.</p>
   */
  Name: string | undefined;
}
export declare namespace GetFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetFacetRequest) => any;
}
/**
 * <p>A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code>
 *                <a>Rule</a>s</code>, and
 *       <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.</p>
 */
export interface Facet {
  /**
   * <p>The name of the <a>Facet</a>.</p>
   */
  Name?: string;
  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;
  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;
}
export declare namespace Facet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Facet) => any;
}
export interface GetFacetResponse {
  /**
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   */
  Facet?: Facet;
}
export declare namespace GetFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetFacetResponse) => any;
}
export interface GetLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
  /**
   * <p>The consistency level at which to retrieve the attributes on a typed link.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace GetLinkAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetLinkAttributesRequest) => any;
}
export interface GetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}
export declare namespace GetLinkAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetLinkAttributesResponse) => any;
}
export interface GetObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}
export declare namespace GetObjectAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetObjectAttributesRequest) => any;
}
export interface GetObjectAttributesResponse {
  /**
   * <p>The attributes that are associated with the object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}
export declare namespace GetObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetObjectAttributesResponse) => any;
}
export interface GetObjectInformationRequest {
  /**
   * <p>The ARN of the directory being retrieved.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The consistency level at which to retrieve the object information.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace GetObjectInformationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetObjectInformationRequest) => any;
}
export interface GetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   */
  SchemaFacets?: SchemaFacet[];
  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace GetObjectInformationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetObjectInformationResponse) => any;
}
export interface GetSchemaAsJsonRequest {
  /**
   * <p>The ARN of the schema to retrieve.</p>
   */
  SchemaArn: string | undefined;
}
export declare namespace GetSchemaAsJsonRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSchemaAsJsonRequest) => any;
}
export interface GetSchemaAsJsonResponse {
  /**
   * <p>The name of the retrieved schema.</p>
   */
  Name?: string;
  /**
   * <p>The JSON representation of the schema document.</p>
   */
  Document?: string;
}
export declare namespace GetSchemaAsJsonResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSchemaAsJsonResponse) => any;
}
export interface GetTypedLinkFacetInformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}
export declare namespace GetTypedLinkFacetInformationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetTypedLinkFacetInformationRequest) => any;
}
export interface GetTypedLinkFacetInformationResponse {
  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet. When
   *       providing ranges to typed link selection, any inexact ranges must be specified at the end. Any
   *       attributes that do not have a range specified are presumed to match the entire range. Filters
   *       are interpreted in the order of the attributes on the typed link facet, not the order in which
   *       they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder?: string[];
}
export declare namespace GetTypedLinkFacetInformationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetTypedLinkFacetInformationResponse) => any;
}
/**
 * <p>Indicates that the <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidNextTokenException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
export interface ListAppliedSchemaArnsRequest {
  /**
   * <p>The ARN of the directory you are listing.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListAppliedSchemaArnsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppliedSchemaArnsRequest) => any;
}
export interface ListAppliedSchemaArnsResponse {
  /**
   * <p>The ARNs of schemas that are applied to the directory.</p>
   */
  SchemaArns?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppliedSchemaArnsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppliedSchemaArnsResponse) => any;
}
export interface ListAttachedIndicesRequest {
  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
  /**
   * <p>The consistency level to use for this operation.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListAttachedIndicesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttachedIndicesRequest) => any;
}
export interface ListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListAttachedIndicesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttachedIndicesResponse) => any;
}
export interface ListDevelopmentSchemaArnsRequest {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListDevelopmentSchemaArnsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDevelopmentSchemaArnsRequest) => any;
}
export interface ListDevelopmentSchemaArnsResponse {
  /**
   * <p>The ARNs of retrieved development schemas.</p>
   */
  SchemaArns?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListDevelopmentSchemaArnsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDevelopmentSchemaArnsResponse) => any;
}
export interface ListDirectoriesRequest {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
  /**
   * <p>The state of the directories in the list. Can be either Enabled, Disabled, or
   *       Deleted.</p>
   */
  state?: DirectoryState | string;
}
export declare namespace ListDirectoriesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDirectoriesRequest) => any;
}
export interface ListDirectoriesResponse {
  /**
   * <p>Lists all directories that are associated with your account in pagination
   *       fashion.</p>
   */
  Directories: Directory[] | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListDirectoriesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDirectoriesResponse) => any;
}
export interface ListFacetAttributesRequest {
  /**
   * <p>The ARN of the schema where the facet resides.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the facet whose attributes will be retrieved.</p>
   */
  Name: string | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListFacetAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFacetAttributesRequest) => any;
}
export interface ListFacetAttributesResponse {
  /**
   * <p>The attributes attached to the facet.</p>
   */
  Attributes?: FacetAttribute[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListFacetAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFacetAttributesResponse) => any;
}
export interface ListFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to retrieve facet names from.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListFacetNamesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFacetNamesRequest) => any;
}
export interface ListFacetNamesResponse {
  /**
   * <p>The names of facets that exist within the schema.</p>
   */
  FacetNames?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListFacetNamesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFacetNamesResponse) => any;
}
export interface ListIncomingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *       order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListIncomingTypedLinksRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListIncomingTypedLinksRequest) => any;
}
export interface ListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListIncomingTypedLinksResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListIncomingTypedLinksResponse) => any;
}
export interface ListIndexRequest {
  /**
   * <p>The ARN of the directory that the index exists in.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];
  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;
  /**
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  MaxResults?: number;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListIndexRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListIndexRequest) => any;
}
export interface ListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListIndexResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListIndexResponse) => any;
}
export interface ListManagedSchemaArnsRequest {
  /**
   * <p>The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.</p>
   */
  SchemaArn?: string;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListManagedSchemaArnsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListManagedSchemaArnsRequest) => any;
}
export interface ListManagedSchemaArnsResponse {
  /**
   * <p>The ARNs for all AWS managed schemas.</p>
   */
  SchemaArns?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListManagedSchemaArnsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListManagedSchemaArnsResponse) => any;
}
export interface ListObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}
export declare namespace ListObjectAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectAttributesRequest) => any;
}
export interface ListObjectAttributesResponse {
  /**
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key, and attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectAttributesResponse) => any;
}
export interface ListObjectChildrenRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the object for which child objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListObjectChildrenRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectChildrenRequest) => any;
}
export interface ListObjectChildrenResponse {
  /**
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: {
    [key: string]: string;
  };
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListObjectChildrenResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectChildrenResponse) => any;
}
export interface ListObjectParentPathsRequest {
  /**
   * <p>The ARN of the directory to which the parent path applies.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the object whose parent paths are listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}
export declare namespace ListObjectParentPathsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectParentPathsRequest) => any;
}
export interface ListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *       directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListObjectParentPathsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectParentPathsResponse) => any;
}
/**
 * <p>Cannot list the parents of a <a>Directory</a> root.</p>
 */
export interface CannotListParentOfRootException extends __SmithyException, $MetadataBearer {
  name: "CannotListParentOfRootException";
  $fault: "client";
  Message?: string;
}
export declare namespace CannotListParentOfRootException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CannotListParentOfRootException) => any;
}
export interface ListObjectParentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the object for which parent objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
  /**
   * <p>When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.</p>
   */
  IncludeAllLinksToEachParent?: boolean;
}
export declare namespace ListObjectParentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectParentsRequest) => any;
}
export interface ListObjectParentsResponse {
  /**
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and
   *       LinkName as the value.</p>
   */
  Parents?: {
    [key: string]: string;
  };
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
}
export declare namespace ListObjectParentsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectParentsResponse) => any;
}
export interface ListObjectPoliciesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Reference that identifies the object for which policies will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListObjectPoliciesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectPoliciesRequest) => any;
}
export interface ListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *       object.</p>
   */
  AttachedPolicyIds?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListObjectPoliciesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListObjectPoliciesResponse) => any;
}
export interface ListOutgoingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *       not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListOutgoingTypedLinksRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListOutgoingTypedLinksRequest) => any;
}
export interface ListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListOutgoingTypedLinksResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListOutgoingTypedLinksResponse) => any;
}
export interface ListPolicyAttachmentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}
export declare namespace ListPolicyAttachmentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPolicyAttachmentsRequest) => any;
}
export interface ListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListPolicyAttachmentsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPolicyAttachmentsResponse) => any;
}
export interface ListPublishedSchemaArnsRequest {
  /**
   * <p>The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListPublishedSchemaArnsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPublishedSchemaArnsRequest) => any;
}
export interface ListPublishedSchemaArnsResponse {
  /**
   * <p>The ARNs of published schemas.</p>
   */
  SchemaArns?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListPublishedSchemaArnsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPublishedSchemaArnsResponse) => any;
}
/**
 * <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
 */
export interface InvalidTaggingRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidTaggingRequestException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidTaggingRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidTaggingRequestException) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;
  /**
   * <p>The pagination token. This is for future use. Currently pagination is not supported for
   *       tagging.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a
   *       single page. This is for future use and is not supported currently.</p>
   */
  MaxResults?: number;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
/**
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface Tag {
  /**
   * <p>The key that is associated with the tag.</p>
   */
  Key?: string;
  /**
   * <p>The value that is associated with the tag.</p>
   */
  Value?: string;
}
export declare namespace Tag {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Tag) => any;
}
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key value pairs that are associated with the response.</p>
   */
  Tags?: Tag[];
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}
export declare namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListTypedLinkFacetAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListTypedLinkFacetAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypedLinkFacetAttributesRequest) => any;
}
export interface ListTypedLinkFacetAttributesResponse {
  /**
   * <p>An ordered set of attributes associate with the typed link.</p>
   */
  Attributes?: TypedLinkAttributeDefinition[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListTypedLinkFacetAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypedLinkFacetAttributesResponse) => any;
}
export interface ListTypedLinkFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}
export declare namespace ListTypedLinkFacetNamesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypedLinkFacetNamesRequest) => any;
}
export interface ListTypedLinkFacetNamesResponse {
  /**
   * <p>The names of typed link facets that exist within the schema.</p>
   */
  FacetNames?: string[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace ListTypedLinkFacetNamesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypedLinkFacetNamesResponse) => any;
}
export interface LookupPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}
export declare namespace LookupPolicyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LookupPolicyRequest) => any;
}
export interface LookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *       <code>PolicyType</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}
export declare namespace LookupPolicyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LookupPolicyResponse) => any;
}
export interface PublishSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the development schema. For
   *       more information, see <a>arns</a>.</p>
   */
  DevelopmentSchemaArn: string | undefined;
  /**
   * <p>The major version under which the schema will be published. Schemas have both a major and minor version associated with them.</p>
   */
  Version: string | undefined;
  /**
   * <p>The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.</p>
   */
  MinorVersion?: string;
  /**
   * <p>The new name under which the schema will be published. If this is not provided, the
   *       development schema is considered.</p>
   */
  Name?: string;
}
export declare namespace PublishSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PublishSchemaRequest) => any;
}
export interface PublishSchemaResponse {
  /**
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn?: string;
}
export declare namespace PublishSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PublishSchemaResponse) => any;
}
/**
 * <p>Indicates that a schema is already published.</p>
 */
export interface SchemaAlreadyPublishedException extends __SmithyException, $MetadataBearer {
  name: "SchemaAlreadyPublishedException";
  $fault: "client";
  Message?: string;
}
export declare namespace SchemaAlreadyPublishedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SchemaAlreadyPublishedException) => any;
}
/**
 * <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
 */
export interface InvalidSchemaDocException extends __SmithyException, $MetadataBearer {
  name: "InvalidSchemaDocException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidSchemaDocException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidSchemaDocException) => any;
}
export interface PutSchemaFromJsonRequest {
  /**
   * <p>The ARN of the schema to update.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The replacement JSON schema.</p>
   */
  Document: string | undefined;
}
export declare namespace PutSchemaFromJsonRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutSchemaFromJsonRequest) => any;
}
export interface PutSchemaFromJsonResponse {
  /**
   * <p>The ARN of the schema to update.</p>
   */
  Arn?: string;
}
export declare namespace PutSchemaFromJsonResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutSchemaFromJsonResponse) => any;
}
export interface RemoveFacetFromObjectRequest {
  /**
   * <p>The ARN of the directory in which the object resides.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;
  /**
   * <p>A reference to the object to remove the facet from.</p>
   */
  ObjectReference: ObjectReference | undefined;
}
export declare namespace RemoveFacetFromObjectRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RemoveFacetFromObjectRequest) => any;
}
export interface RemoveFacetFromObjectResponse {}
export declare namespace RemoveFacetFromObjectResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RemoveFacetFromObjectResponse) => any;
}
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {}
export declare namespace TagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;
  /**
   * <p>Keys of the tag that need to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {}
export declare namespace UntagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
/**
 * <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema
 *       exception.</p>
 */
export interface InvalidFacetUpdateException extends __SmithyException, $MetadataBearer {
  name: "InvalidFacetUpdateException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidFacetUpdateException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidFacetUpdateException) => any;
}
/**
 * <p>A structure that contains information used to update an attribute.</p>
 */
export interface FacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute?: FacetAttribute;
  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action?: UpdateActionType | string;
}
export declare namespace FacetAttributeUpdate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FacetAttributeUpdate) => any;
}
export interface UpdateFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the facet.</p>
   */
  Name: string | undefined;
  /**
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>.
   *       Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update
   *       operation to perform. </p>
   */
  AttributeUpdates?: FacetAttributeUpdate[];
  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;
}
export declare namespace UpdateFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateFacetRequest) => any;
}
export interface UpdateFacetResponse {}
export declare namespace UpdateFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateFacetResponse) => any;
}
export interface UpdateLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}
export declare namespace UpdateLinkAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateLinkAttributesRequest) => any;
}
export interface UpdateLinkAttributesResponse {}
export declare namespace UpdateLinkAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateLinkAttributesResponse) => any;
}
export interface UpdateObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}
export declare namespace UpdateObjectAttributesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateObjectAttributesRequest) => any;
}
export interface UpdateObjectAttributesResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   */
  ObjectIdentifier?: string;
}
export declare namespace UpdateObjectAttributesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateObjectAttributesResponse) => any;
}
export interface UpdateSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The name of the schema.</p>
   */
  Name: string | undefined;
}
export declare namespace UpdateSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSchemaRequest) => any;
}
export interface UpdateSchemaResponse {
  /**
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}
export declare namespace UpdateSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSchemaResponse) => any;
}
/**
 * <p>A typed link facet attribute update.</p>
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute: TypedLinkAttributeDefinition | undefined;
  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action: UpdateActionType | string | undefined;
}
export declare namespace TypedLinkFacetAttributeUpdate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TypedLinkFacetAttributeUpdate) => any;
}
export interface UpdateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: TypedLinkFacetAttributeUpdate[] | undefined;
  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet.  When
   *       providing ranges to a typed link selection, any inexact ranges must be specified at the end.
   *       Any attributes that do not have a range specified are presumed to match the entire range.
   *       Filters are interpreted in the order of the attributes on the typed link facet, not the order
   *       in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}
export declare namespace UpdateTypedLinkFacetRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateTypedLinkFacetRequest) => any;
}
export interface UpdateTypedLinkFacetResponse {}
export declare namespace UpdateTypedLinkFacetResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateTypedLinkFacetResponse) => any;
}
/**
 * <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 */
export interface IncompatibleSchemaException extends __SmithyException, $MetadataBearer {
  name: "IncompatibleSchemaException";
  $fault: "client";
  Message?: string;
}
export declare namespace IncompatibleSchemaException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: IncompatibleSchemaException) => any;
}
export interface UpgradeAppliedSchemaRequest {
  /**
   * <p>The revision of the published schema to upgrade the directory to.</p>
   */
  PublishedSchemaArn: string | undefined;
  /**
   * <p>The ARN for the directory to which the upgraded schema will be applied.</p>
   */
  DirectoryArn: string | undefined;
  /**
   * <p>Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.</p>
   */
  DryRun?: boolean;
}
export declare namespace UpgradeAppliedSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpgradeAppliedSchemaRequest) => any;
}
export interface UpgradeAppliedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
  /**
   * <p>The ARN of the directory that is returned as part of the response.</p>
   */
  DirectoryArn?: string;
}
export declare namespace UpgradeAppliedSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpgradeAppliedSchemaResponse) => any;
}
export interface UpgradePublishedSchemaRequest {
  /**
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   */
  DevelopmentSchemaArn: string | undefined;
  /**
   * <p>The ARN of the published schema to be upgraded.</p>
   */
  PublishedSchemaArn: string | undefined;
  /**
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   */
  MinorVersion: string | undefined;
  /**
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   */
  DryRun?: boolean;
}
export declare namespace UpgradePublishedSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpgradePublishedSchemaRequest) => any;
}
export interface UpgradePublishedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
}
export declare namespace UpgradePublishedSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpgradePublishedSchemaResponse) => any;
}
