"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudDirectory = void 0;
const CloudDirectoryClient_1 = require("./CloudDirectoryClient");
const AddFacetToObjectCommand_1 = require("./commands/AddFacetToObjectCommand");
const ApplySchemaCommand_1 = require("./commands/ApplySchemaCommand");
const AttachObjectCommand_1 = require("./commands/AttachObjectCommand");
const AttachPolicyCommand_1 = require("./commands/AttachPolicyCommand");
const AttachToIndexCommand_1 = require("./commands/AttachToIndexCommand");
const AttachTypedLinkCommand_1 = require("./commands/AttachTypedLinkCommand");
const BatchReadCommand_1 = require("./commands/BatchReadCommand");
const BatchWriteCommand_1 = require("./commands/BatchWriteCommand");
const CreateDirectoryCommand_1 = require("./commands/CreateDirectoryCommand");
const CreateFacetCommand_1 = require("./commands/CreateFacetCommand");
const CreateIndexCommand_1 = require("./commands/CreateIndexCommand");
const CreateObjectCommand_1 = require("./commands/CreateObjectCommand");
const CreateSchemaCommand_1 = require("./commands/CreateSchemaCommand");
const CreateTypedLinkFacetCommand_1 = require("./commands/CreateTypedLinkFacetCommand");
const DeleteDirectoryCommand_1 = require("./commands/DeleteDirectoryCommand");
const DeleteFacetCommand_1 = require("./commands/DeleteFacetCommand");
const DeleteObjectCommand_1 = require("./commands/DeleteObjectCommand");
const DeleteSchemaCommand_1 = require("./commands/DeleteSchemaCommand");
const DeleteTypedLinkFacetCommand_1 = require("./commands/DeleteTypedLinkFacetCommand");
const DetachFromIndexCommand_1 = require("./commands/DetachFromIndexCommand");
const DetachObjectCommand_1 = require("./commands/DetachObjectCommand");
const DetachPolicyCommand_1 = require("./commands/DetachPolicyCommand");
const DetachTypedLinkCommand_1 = require("./commands/DetachTypedLinkCommand");
const DisableDirectoryCommand_1 = require("./commands/DisableDirectoryCommand");
const EnableDirectoryCommand_1 = require("./commands/EnableDirectoryCommand");
const GetAppliedSchemaVersionCommand_1 = require("./commands/GetAppliedSchemaVersionCommand");
const GetDirectoryCommand_1 = require("./commands/GetDirectoryCommand");
const GetFacetCommand_1 = require("./commands/GetFacetCommand");
const GetLinkAttributesCommand_1 = require("./commands/GetLinkAttributesCommand");
const GetObjectAttributesCommand_1 = require("./commands/GetObjectAttributesCommand");
const GetObjectInformationCommand_1 = require("./commands/GetObjectInformationCommand");
const GetSchemaAsJsonCommand_1 = require("./commands/GetSchemaAsJsonCommand");
const GetTypedLinkFacetInformationCommand_1 = require("./commands/GetTypedLinkFacetInformationCommand");
const ListAppliedSchemaArnsCommand_1 = require("./commands/ListAppliedSchemaArnsCommand");
const ListAttachedIndicesCommand_1 = require("./commands/ListAttachedIndicesCommand");
const ListDevelopmentSchemaArnsCommand_1 = require("./commands/ListDevelopmentSchemaArnsCommand");
const ListDirectoriesCommand_1 = require("./commands/ListDirectoriesCommand");
const ListFacetAttributesCommand_1 = require("./commands/ListFacetAttributesCommand");
const ListFacetNamesCommand_1 = require("./commands/ListFacetNamesCommand");
const ListIncomingTypedLinksCommand_1 = require("./commands/ListIncomingTypedLinksCommand");
const ListIndexCommand_1 = require("./commands/ListIndexCommand");
const ListManagedSchemaArnsCommand_1 = require("./commands/ListManagedSchemaArnsCommand");
const ListObjectAttributesCommand_1 = require("./commands/ListObjectAttributesCommand");
const ListObjectChildrenCommand_1 = require("./commands/ListObjectChildrenCommand");
const ListObjectParentPathsCommand_1 = require("./commands/ListObjectParentPathsCommand");
const ListObjectParentsCommand_1 = require("./commands/ListObjectParentsCommand");
const ListObjectPoliciesCommand_1 = require("./commands/ListObjectPoliciesCommand");
const ListOutgoingTypedLinksCommand_1 = require("./commands/ListOutgoingTypedLinksCommand");
const ListPolicyAttachmentsCommand_1 = require("./commands/ListPolicyAttachmentsCommand");
const ListPublishedSchemaArnsCommand_1 = require("./commands/ListPublishedSchemaArnsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTypedLinkFacetAttributesCommand_1 = require("./commands/ListTypedLinkFacetAttributesCommand");
const ListTypedLinkFacetNamesCommand_1 = require("./commands/ListTypedLinkFacetNamesCommand");
const LookupPolicyCommand_1 = require("./commands/LookupPolicyCommand");
const PublishSchemaCommand_1 = require("./commands/PublishSchemaCommand");
const PutSchemaFromJsonCommand_1 = require("./commands/PutSchemaFromJsonCommand");
const RemoveFacetFromObjectCommand_1 = require("./commands/RemoveFacetFromObjectCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateFacetCommand_1 = require("./commands/UpdateFacetCommand");
const UpdateLinkAttributesCommand_1 = require("./commands/UpdateLinkAttributesCommand");
const UpdateObjectAttributesCommand_1 = require("./commands/UpdateObjectAttributesCommand");
const UpdateSchemaCommand_1 = require("./commands/UpdateSchemaCommand");
const UpdateTypedLinkFacetCommand_1 = require("./commands/UpdateTypedLinkFacetCommand");
const UpgradeAppliedSchemaCommand_1 = require("./commands/UpgradeAppliedSchemaCommand");
const UpgradePublishedSchemaCommand_1 = require("./commands/UpgradePublishedSchemaCommand");
/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
class CloudDirectory extends CloudDirectoryClient_1.CloudDirectoryClient {
  addFacetToObject(args, optionsOrCb, cb) {
    const command = new AddFacetToObjectCommand_1.AddFacetToObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  applySchema(args, optionsOrCb, cb) {
    const command = new ApplySchemaCommand_1.ApplySchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  attachObject(args, optionsOrCb, cb) {
    const command = new AttachObjectCommand_1.AttachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  attachPolicy(args, optionsOrCb, cb) {
    const command = new AttachPolicyCommand_1.AttachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  attachToIndex(args, optionsOrCb, cb) {
    const command = new AttachToIndexCommand_1.AttachToIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  attachTypedLink(args, optionsOrCb, cb) {
    const command = new AttachTypedLinkCommand_1.AttachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchRead(args, optionsOrCb, cb) {
    const command = new BatchReadCommand_1.BatchReadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchWrite(args, optionsOrCb, cb) {
    const command = new BatchWriteCommand_1.BatchWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDirectory(args, optionsOrCb, cb) {
    const command = new CreateDirectoryCommand_1.CreateDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createFacet(args, optionsOrCb, cb) {
    const command = new CreateFacetCommand_1.CreateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createIndex(args, optionsOrCb, cb) {
    const command = new CreateIndexCommand_1.CreateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createObject(args, optionsOrCb, cb) {
    const command = new CreateObjectCommand_1.CreateObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createSchema(args, optionsOrCb, cb) {
    const command = new CreateSchemaCommand_1.CreateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createTypedLinkFacet(args, optionsOrCb, cb) {
    const command = new CreateTypedLinkFacetCommand_1.CreateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDirectory(args, optionsOrCb, cb) {
    const command = new DeleteDirectoryCommand_1.DeleteDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteFacet(args, optionsOrCb, cb) {
    const command = new DeleteFacetCommand_1.DeleteFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteObject(args, optionsOrCb, cb) {
    const command = new DeleteObjectCommand_1.DeleteObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteSchema(args, optionsOrCb, cb) {
    const command = new DeleteSchemaCommand_1.DeleteSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteTypedLinkFacet(args, optionsOrCb, cb) {
    const command = new DeleteTypedLinkFacetCommand_1.DeleteTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  detachFromIndex(args, optionsOrCb, cb) {
    const command = new DetachFromIndexCommand_1.DetachFromIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  detachObject(args, optionsOrCb, cb) {
    const command = new DetachObjectCommand_1.DetachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  detachPolicy(args, optionsOrCb, cb) {
    const command = new DetachPolicyCommand_1.DetachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  detachTypedLink(args, optionsOrCb, cb) {
    const command = new DetachTypedLinkCommand_1.DetachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disableDirectory(args, optionsOrCb, cb) {
    const command = new DisableDirectoryCommand_1.DisableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  enableDirectory(args, optionsOrCb, cb) {
    const command = new EnableDirectoryCommand_1.EnableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAppliedSchemaVersion(args, optionsOrCb, cb) {
    const command = new GetAppliedSchemaVersionCommand_1.GetAppliedSchemaVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDirectory(args, optionsOrCb, cb) {
    const command = new GetDirectoryCommand_1.GetDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFacet(args, optionsOrCb, cb) {
    const command = new GetFacetCommand_1.GetFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getLinkAttributes(args, optionsOrCb, cb) {
    const command = new GetLinkAttributesCommand_1.GetLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getObjectAttributes(args, optionsOrCb, cb) {
    const command = new GetObjectAttributesCommand_1.GetObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getObjectInformation(args, optionsOrCb, cb) {
    const command = new GetObjectInformationCommand_1.GetObjectInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSchemaAsJson(args, optionsOrCb, cb) {
    const command = new GetSchemaAsJsonCommand_1.GetSchemaAsJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getTypedLinkFacetInformation(args, optionsOrCb, cb) {
    const command = new GetTypedLinkFacetInformationCommand_1.GetTypedLinkFacetInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAppliedSchemaArns(args, optionsOrCb, cb) {
    const command = new ListAppliedSchemaArnsCommand_1.ListAppliedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAttachedIndices(args, optionsOrCb, cb) {
    const command = new ListAttachedIndicesCommand_1.ListAttachedIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDevelopmentSchemaArns(args, optionsOrCb, cb) {
    const command = new ListDevelopmentSchemaArnsCommand_1.ListDevelopmentSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDirectories(args, optionsOrCb, cb) {
    const command = new ListDirectoriesCommand_1.ListDirectoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFacetAttributes(args, optionsOrCb, cb) {
    const command = new ListFacetAttributesCommand_1.ListFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFacetNames(args, optionsOrCb, cb) {
    const command = new ListFacetNamesCommand_1.ListFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listIncomingTypedLinks(args, optionsOrCb, cb) {
    const command = new ListIncomingTypedLinksCommand_1.ListIncomingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listIndex(args, optionsOrCb, cb) {
    const command = new ListIndexCommand_1.ListIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listManagedSchemaArns(args, optionsOrCb, cb) {
    const command = new ListManagedSchemaArnsCommand_1.ListManagedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listObjectAttributes(args, optionsOrCb, cb) {
    const command = new ListObjectAttributesCommand_1.ListObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listObjectChildren(args, optionsOrCb, cb) {
    const command = new ListObjectChildrenCommand_1.ListObjectChildrenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listObjectParentPaths(args, optionsOrCb, cb) {
    const command = new ListObjectParentPathsCommand_1.ListObjectParentPathsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listObjectParents(args, optionsOrCb, cb) {
    const command = new ListObjectParentsCommand_1.ListObjectParentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listObjectPolicies(args, optionsOrCb, cb) {
    const command = new ListObjectPoliciesCommand_1.ListObjectPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listOutgoingTypedLinks(args, optionsOrCb, cb) {
    const command = new ListOutgoingTypedLinksCommand_1.ListOutgoingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPolicyAttachments(args, optionsOrCb, cb) {
    const command = new ListPolicyAttachmentsCommand_1.ListPolicyAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPublishedSchemaArns(args, optionsOrCb, cb) {
    const command = new ListPublishedSchemaArnsCommand_1.ListPublishedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTypedLinkFacetAttributes(args, optionsOrCb, cb) {
    const command = new ListTypedLinkFacetAttributesCommand_1.ListTypedLinkFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTypedLinkFacetNames(args, optionsOrCb, cb) {
    const command = new ListTypedLinkFacetNamesCommand_1.ListTypedLinkFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  lookupPolicy(args, optionsOrCb, cb) {
    const command = new LookupPolicyCommand_1.LookupPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  publishSchema(args, optionsOrCb, cb) {
    const command = new PublishSchemaCommand_1.PublishSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putSchemaFromJson(args, optionsOrCb, cb) {
    const command = new PutSchemaFromJsonCommand_1.PutSchemaFromJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  removeFacetFromObject(args, optionsOrCb, cb) {
    const command = new RemoveFacetFromObjectCommand_1.RemoveFacetFromObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateFacet(args, optionsOrCb, cb) {
    const command = new UpdateFacetCommand_1.UpdateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateLinkAttributes(args, optionsOrCb, cb) {
    const command = new UpdateLinkAttributesCommand_1.UpdateLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateObjectAttributes(args, optionsOrCb, cb) {
    const command = new UpdateObjectAttributesCommand_1.UpdateObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateSchema(args, optionsOrCb, cb) {
    const command = new UpdateSchemaCommand_1.UpdateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateTypedLinkFacet(args, optionsOrCb, cb) {
    const command = new UpdateTypedLinkFacetCommand_1.UpdateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  upgradeAppliedSchema(args, optionsOrCb, cb) {
    const command = new UpgradeAppliedSchemaCommand_1.UpgradeAppliedSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  upgradePublishedSchema(args, optionsOrCb, cb) {
    const command = new UpgradePublishedSchemaCommand_1.UpgradePublishedSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.CloudDirectory = CloudDirectory;
//# sourceMappingURL=CloudDirectory.js.map
