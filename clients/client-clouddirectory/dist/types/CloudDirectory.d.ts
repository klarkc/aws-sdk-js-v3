import { CloudDirectoryClient } from "./CloudDirectoryClient";
import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "./commands/AttachObjectCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "./commands/AttachToIndexCommand";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "./commands/AttachTypedLinkCommand";
import { BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "./commands/CreateObjectCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "./commands/DetachFromIndexCommand";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "./commands/DetachObjectCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "./commands/DetachTypedLinkCommand";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "./commands/DisableDirectoryCommand";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "./commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "./commands/GetDirectoryCommand";
import { GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "./commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "./commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "./commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "./commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "./commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "./commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "./commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "./commands/LookupPolicyCommand";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "./commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "./commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
export declare class CloudDirectory extends CloudDirectoryClient {
  /**
   * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
   */
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFacetToObjectCommandOutput>;
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;
  /**
   * <p>Copies the input published schema, at the specified version, into the <a>Directory</a> with the same
   *       name and version as that of the published schema.</p>
   */
  applySchema(args: ApplySchemaCommandInput, options?: __HttpHandlerOptions): Promise<ApplySchemaCommandOutput>;
  applySchema(args: ApplySchemaCommandInput, cb: (err: any, data?: ApplySchemaCommandOutput) => void): void;
  applySchema(
    args: ApplySchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySchemaCommandOutput) => void
  ): void;
  /**
   * <p>Attaches an existing object to another object. An object can be accessed in two
   *       ways:</p>
   *          <ol>
   *             <li>
   *                <p>Using the path</p>
   *             </li>
   *             <li>
   *                <p>Using <code>ObjectIdentifier</code>
   *                </p>
   *             </li>
   *          </ol>
   */
  attachObject(args: AttachObjectCommandInput, options?: __HttpHandlerOptions): Promise<AttachObjectCommandOutput>;
  attachObject(args: AttachObjectCommandInput, cb: (err: any, data?: AttachObjectCommandOutput) => void): void;
  attachObject(
    args: AttachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachObjectCommandOutput) => void
  ): void;
  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *       policies.</p>
   */
  attachPolicy(args: AttachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPolicyCommandOutput>;
  attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  attachToIndex(args: AttachToIndexCommandInput, options?: __HttpHandlerOptions): Promise<AttachToIndexCommandOutput>;
  attachToIndex(args: AttachToIndexCommandInput, cb: (err: any, data?: AttachToIndexCommandOutput) => void): void;
  attachToIndex(
    args: AttachToIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachToIndexCommandOutput) => void
  ): void;
  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachTypedLinkCommandOutput>;
  attachTypedLink(args: AttachTypedLinkCommandInput, cb: (err: any, data?: AttachTypedLinkCommandOutput) => void): void;
  attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): void;
  /**
   * <p>Performs all the read operations in a batch. </p>
   */
  batchRead(args: BatchReadCommandInput, options?: __HttpHandlerOptions): Promise<BatchReadCommandOutput>;
  batchRead(args: BatchReadCommandInput, cb: (err: any, data?: BatchReadCommandOutput) => void): void;
  batchRead(
    args: BatchReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchReadCommandOutput) => void
  ): void;
  /**
   * <p>Performs all the write operations in a batch. Either all the operations succeed or
   *       none.</p>
   */
  batchWrite(args: BatchWriteCommandInput, options?: __HttpHandlerOptions): Promise<BatchWriteCommandOutput>;
  batchWrite(args: BatchWriteCommandInput, cb: (err: any, data?: BatchWriteCommandOutput) => void): void;
  batchWrite(
    args: BatchWriteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <a>Directory</a> by copying the published schema into the
   *       directory. A directory cannot be created without a schema.</p>
   *          <p>You can also quickly create a directory using a managed schema, called the
   *         <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
   */
  createDirectory(
    args: CreateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryCommandOutput>;
  createDirectory(args: CreateDirectoryCommandInput, cb: (err: any, data?: CreateDirectoryCommandOutput) => void): void;
  createDirectory(
    args: CreateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new <a>Facet</a> in a schema. Facet creation is allowed only
   *       in development or applied schemas.</p>
   */
  createFacet(args: CreateFacetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFacetCommandOutput>;
  createFacet(args: CreateFacetCommandInput, cb: (err: any, data?: CreateFacetCommandOutput) => void): void;
  createFacet(
    args: CreateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFacetCommandOutput) => void
  ): void;
  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.</p>
   */
  createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  /**
   * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
   *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
   *       collection of <a>Facet</a> attributes. You can also use this API call to create a
   *       policy object, if the facet from which you create the object is a policy facet. </p>
   */
  createObject(args: CreateObjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateObjectCommandOutput>;
  createObject(args: CreateObjectCommandInput, cb: (err: any, data?: CreateObjectCommandOutput) => void): void;
  createObject(
    args: CreateObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateObjectCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new schema in a development state. A schema can exist in three
   *       phases:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Development:</i> This is a mutable phase of the schema. All new
   *           schemas are in the development phase. Once the schema is finalized, it can be
   *           published.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Published:</i> Published schemas are immutable and have a version
   *           associated with them.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
   *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
   *           facets. You can apply only published schemas to directories. </p>
   *             </li>
   *          </ul>
   */
  createSchema(args: CreateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<CreateSchemaCommandOutput>;
  createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTypedLinkFacetCommandOutput>;
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme
   *         caution
   *         when deleting directories.</p>
   */
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryCommandOutput>;
  deleteDirectory(args: DeleteDirectoryCommandInput, cb: (err: any, data?: DeleteDirectoryCommandOutput) => void): void;
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s
   *       that are associated with the facet will be deleted. Only development schema facets are allowed
   *       deletion.</p>
   */
  deleteFacet(args: DeleteFacetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFacetCommandOutput>;
  deleteFacet(args: DeleteFacetCommandInput, cb: (err: any, data?: DeleteFacetCommandOutput) => void): void;
  deleteFacet(
    args: DeleteFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFacetCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an object and its associated attributes. Only objects with no children and no
   *       parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  deleteObject(args: DeleteObjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectCommandOutput>;
  deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
  deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a given schema. Schemas in a development and published state can only be deleted. </p>
   */
  deleteSchema(args: DeleteSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTypedLinkFacetCommandOutput>;
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;
  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  detachFromIndex(
    args: DetachFromIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachFromIndexCommandOutput>;
  detachFromIndex(args: DetachFromIndexCommandInput, cb: (err: any, data?: DetachFromIndexCommandOutput) => void): void;
  detachFromIndex(
    args: DetachFromIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): void;
  /**
   * <p>Detaches a given object from the parent object. The object that is to be detached from the
   *       parent is specified by the link name.</p>
   */
  detachObject(args: DetachObjectCommandInput, options?: __HttpHandlerOptions): Promise<DetachObjectCommandOutput>;
  detachObject(args: DetachObjectCommandInput, cb: (err: any, data?: DetachObjectCommandOutput) => void): void;
  detachObject(
    args: DetachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachObjectCommandOutput) => void
  ): void;
  /**
   * <p>Detaches a policy from an object.</p>
   */
  detachPolicy(args: DetachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPolicyCommandOutput>;
  detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachTypedLinkCommandOutput>;
  detachTypedLink(args: DetachTypedLinkCommandInput, cb: (err: any, data?: DetachTypedLinkCommandOutput) => void): void;
  detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): void;
  /**
   * <p>Disables the specified directory. Disabled directories cannot be read or written to.
   *       Only enabled directories can be disabled. Disabled directories may be reenabled.</p>
   */
  disableDirectory(
    args: DisableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDirectoryCommandOutput>;
  disableDirectory(
    args: DisableDirectoryCommandInput,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;
  disableDirectory(
    args: DisableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;
  /**
   * <p>Enables the specified directory. Only disabled directories can be enabled. Once
   *       enabled, the directory can then be read and written to.</p>
   */
  enableDirectory(
    args: EnableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDirectoryCommandOutput>;
  enableDirectory(args: EnableDirectoryCommandInput, cb: (err: any, data?: EnableDirectoryCommandOutput) => void): void;
  enableDirectory(
    args: EnableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): void;
  /**
   * <p>Returns current applied schema version ARN, including the minor version in use.</p>
   */
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppliedSchemaVersionCommandOutput>;
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves metadata about a directory.</p>
   */
  getDirectory(args: GetDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<GetDirectoryCommandOutput>;
  getDirectory(args: GetDirectoryCommandInput, cb: (err: any, data?: GetDirectoryCommandOutput) => void): void;
  getDirectory(
    args: GetDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryCommandOutput) => void
  ): void;
  /**
   * <p>Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema
   *       facets -- published, development, or applied.</p>
   */
  getFacet(args: GetFacetCommandInput, options?: __HttpHandlerOptions): Promise<GetFacetCommandOutput>;
  getFacet(args: GetFacetCommandInput, cb: (err: any, data?: GetFacetCommandOutput) => void): void;
  getFacet(
    args: GetFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFacetCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkAttributesCommandOutput>;
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectAttributesCommandOutput>;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves metadata about an object.</p>
   */
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectInformationCommandOutput>;
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   */
  getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaAsJsonCommandOutput>;
  getSchemaAsJson(args: GetSchemaAsJsonCommandInput, cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void): void;
  getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): void;
  /**
   * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTypedLinkFacetInformationCommandOutput>;
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;
  /**
   * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
   */
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppliedSchemaArnsCommandOutput>;
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;
  /**
   * <p>Lists indices attached to the specified object.</p>
   */
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedIndicesCommandOutput>;
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
   *       state.</p>
   */
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevelopmentSchemaArnsCommandOutput>;
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;
  /**
   * <p>Lists directories created within an account.</p>
   */
  listDirectories(
    args: ListDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectoriesCommandOutput>;
  listDirectories(args: ListDirectoriesCommandInput, cb: (err: any, data?: ListDirectoriesCommandOutput) => void): void;
  listDirectories(
    args: ListDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves attributes attached to the facet.</p>
   */
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetAttributesCommandOutput>;
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the names of facets that exist in a schema.</p>
   */
  listFacetNames(
    args: ListFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetNamesCommandOutput>;
  listFacetNames(args: ListFacetNamesCommandInput, cb: (err: any, data?: ListFacetNamesCommandOutput) => void): void;
  listFacetNames(
    args: ListFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): void;
  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *       information for an object. It also supports filtering by typed link facet and identity
   *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIncomingTypedLinksCommandOutput>;
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;
  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  listIndex(args: ListIndexCommandInput, options?: __HttpHandlerOptions): Promise<ListIndexCommandOutput>;
  listIndex(args: ListIndexCommandInput, cb: (err: any, data?: ListIndexCommandOutput) => void): void;
  listIndex(
    args: ListIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexCommandOutput) => void
  ): void;
  /**
   * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
   */
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedSchemaArnsCommandOutput>;
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;
  /**
   * <p>Lists all attributes that are associated with an object.
   *       </p>
   */
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectAttributesCommandOutput>;
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectChildrenCommandOutput>;
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *       policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   *          <p>Use this API to evaluate all parents for an object. The call returns all objects from
   *       the root of the directory up to the requested object. The API returns the number of paths
   *       based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent.
   *       The order of the paths and nodes returned is consistent among multiple API calls unless the
   *       objects are deleted or moved. Paths not leading to the directory root are ignored from the
   *       target object.</p>
   */
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentPathsCommandOutput>;
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;
  /**
   * <p>Lists parent objects that are associated with a given object in pagination
   *       fashion.</p>
   */
  listObjectParents(
    args: ListObjectParentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentsCommandOutput>;
  listObjectParents(
    args: ListObjectParentsCommandInput,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;
  listObjectParents(
    args: ListObjectParentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;
  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectPoliciesCommandOutput>;
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;
  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *       information for an object. It also supports filtering by typed link facet and identity
   *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutgoingTypedLinksCommandOutput>;
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;
  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyAttachmentsCommandOutput>;
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.</p>
   */
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublishedSchemaArnsCommandOutput>;
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): void;
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): void;
  /**
   * <p>Returns tags for a resource. Tagging is currently supported only for directories with a
   *       limit of 50 tags per directory. All 50 tags are returned for a given directory with this API
   *       call.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetAttributesCommandOutput>;
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema.
   *       For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetNamesCommandOutput>;
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;
  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *       specified. If there are no policies present, an empty list is returned. If policies are
   *       present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *       for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *       <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  lookupPolicy(args: LookupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<LookupPolicyCommandOutput>;
  lookupPolicy(args: LookupPolicyCommandInput, cb: (err: any, data?: LookupPolicyCommandOutput) => void): void;
  lookupPolicy(
    args: LookupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Publishes a development schema with a major version and a recommended minor version.</p>
   */
  publishSchema(args: PublishSchemaCommandInput, options?: __HttpHandlerOptions): Promise<PublishSchemaCommandOutput>;
  publishSchema(args: PublishSchemaCommandInput, cb: (err: any, data?: PublishSchemaCommandOutput) => void): void;
  publishSchema(
    args: PublishSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   */
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSchemaFromJsonCommandOutput>;
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;
  /**
   * <p>Removes the specified facet from the specified object.</p>
   */
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFacetFromObjectCommandOutput>;
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): void;
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): void;
  /**
   * <p>An API operation for adding tags to a resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>An API operation for removing tags from a resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Does the following:</p>
   *          <ol>
   *             <li>
   *                <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *             <li>
   *                <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *             <li>
   *                <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *          </ol>
   */
  updateFacet(args: UpdateFacetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFacetCommandOutput>;
  updateFacet(args: UpdateFacetCommandInput, cb: (err: any, data?: UpdateFacetCommandOutput) => void): void;
  updateFacet(
    args: UpdateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFacetCommandOutput) => void
  ): void;
  /**
   * <p>Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.</p>
   */
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkAttributesCommandOutput>;
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Updates a given object's attributes.</p>
   */
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateObjectAttributesCommandOutput>;
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;
  /**
   * <p>Updates the schema name with a new name. Only development schema names can be
   *       updated.</p>
   */
  updateSchema(args: UpdateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSchemaCommandOutput>;
  updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTypedLinkFacetCommandOutput>;
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;
  /**
   * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
   */
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeAppliedSchemaCommandOutput>;
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.</p>
   */
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradePublishedSchemaCommandOutput>;
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;
}
