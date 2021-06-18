import { __extends } from "tslib";
import { CloudDirectoryClient } from "./CloudDirectoryClient";
import { AddFacetToObjectCommand } from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommand } from "./commands/ApplySchemaCommand";
import { AttachObjectCommand } from "./commands/AttachObjectCommand";
import { AttachPolicyCommand } from "./commands/AttachPolicyCommand";
import { AttachToIndexCommand } from "./commands/AttachToIndexCommand";
import { AttachTypedLinkCommand } from "./commands/AttachTypedLinkCommand";
import { BatchReadCommand } from "./commands/BatchReadCommand";
import { BatchWriteCommand } from "./commands/BatchWriteCommand";
import { CreateDirectoryCommand } from "./commands/CreateDirectoryCommand";
import { CreateFacetCommand } from "./commands/CreateFacetCommand";
import { CreateIndexCommand } from "./commands/CreateIndexCommand";
import { CreateObjectCommand } from "./commands/CreateObjectCommand";
import { CreateSchemaCommand } from "./commands/CreateSchemaCommand";
import { CreateTypedLinkFacetCommand } from "./commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommand } from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommand } from "./commands/DeleteFacetCommand";
import { DeleteObjectCommand } from "./commands/DeleteObjectCommand";
import { DeleteSchemaCommand } from "./commands/DeleteSchemaCommand";
import { DeleteTypedLinkFacetCommand } from "./commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommand } from "./commands/DetachFromIndexCommand";
import { DetachObjectCommand } from "./commands/DetachObjectCommand";
import { DetachPolicyCommand } from "./commands/DetachPolicyCommand";
import { DetachTypedLinkCommand } from "./commands/DetachTypedLinkCommand";
import { DisableDirectoryCommand } from "./commands/DisableDirectoryCommand";
import { EnableDirectoryCommand } from "./commands/EnableDirectoryCommand";
import { GetAppliedSchemaVersionCommand } from "./commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommand } from "./commands/GetDirectoryCommand";
import { GetFacetCommand } from "./commands/GetFacetCommand";
import { GetLinkAttributesCommand } from "./commands/GetLinkAttributesCommand";
import { GetObjectAttributesCommand } from "./commands/GetObjectAttributesCommand";
import { GetObjectInformationCommand } from "./commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommand } from "./commands/GetSchemaAsJsonCommand";
import { GetTypedLinkFacetInformationCommand } from "./commands/GetTypedLinkFacetInformationCommand";
import { ListAppliedSchemaArnsCommand } from "./commands/ListAppliedSchemaArnsCommand";
import { ListAttachedIndicesCommand } from "./commands/ListAttachedIndicesCommand";
import { ListDevelopmentSchemaArnsCommand } from "./commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommand } from "./commands/ListDirectoriesCommand";
import { ListFacetAttributesCommand } from "./commands/ListFacetAttributesCommand";
import { ListFacetNamesCommand } from "./commands/ListFacetNamesCommand";
import { ListIncomingTypedLinksCommand } from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommand } from "./commands/ListIndexCommand";
import { ListManagedSchemaArnsCommand } from "./commands/ListManagedSchemaArnsCommand";
import { ListObjectAttributesCommand } from "./commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommand } from "./commands/ListObjectChildrenCommand";
import { ListObjectParentPathsCommand } from "./commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommand } from "./commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommand } from "./commands/ListObjectPoliciesCommand";
import { ListOutgoingTypedLinksCommand } from "./commands/ListOutgoingTypedLinksCommand";
import { ListPolicyAttachmentsCommand } from "./commands/ListPolicyAttachmentsCommand";
import { ListPublishedSchemaArnsCommand } from "./commands/ListPublishedSchemaArnsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTypedLinkFacetAttributesCommand } from "./commands/ListTypedLinkFacetAttributesCommand";
import { ListTypedLinkFacetNamesCommand } from "./commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommand } from "./commands/LookupPolicyCommand";
import { PublishSchemaCommand } from "./commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommand } from "./commands/PutSchemaFromJsonCommand";
import { RemoveFacetFromObjectCommand } from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateFacetCommand } from "./commands/UpdateFacetCommand";
import { UpdateLinkAttributesCommand } from "./commands/UpdateLinkAttributesCommand";
import { UpdateObjectAttributesCommand } from "./commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommand } from "./commands/UpdateSchemaCommand";
import { UpdateTypedLinkFacetCommand } from "./commands/UpdateTypedLinkFacetCommand";
import { UpgradeAppliedSchemaCommand } from "./commands/UpgradeAppliedSchemaCommand";
import { UpgradePublishedSchemaCommand } from "./commands/UpgradePublishedSchemaCommand";
/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
var CloudDirectory = /** @class */ (function (_super) {
  __extends(CloudDirectory, _super);
  function CloudDirectory() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CloudDirectory.prototype.addFacetToObject = function (args, optionsOrCb, cb) {
    var command = new AddFacetToObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.applySchema = function (args, optionsOrCb, cb) {
    var command = new ApplySchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.attachObject = function (args, optionsOrCb, cb) {
    var command = new AttachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.attachPolicy = function (args, optionsOrCb, cb) {
    var command = new AttachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.attachToIndex = function (args, optionsOrCb, cb) {
    var command = new AttachToIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.attachTypedLink = function (args, optionsOrCb, cb) {
    var command = new AttachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.batchRead = function (args, optionsOrCb, cb) {
    var command = new BatchReadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.batchWrite = function (args, optionsOrCb, cb) {
    var command = new BatchWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createDirectory = function (args, optionsOrCb, cb) {
    var command = new CreateDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createFacet = function (args, optionsOrCb, cb) {
    var command = new CreateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createIndex = function (args, optionsOrCb, cb) {
    var command = new CreateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createObject = function (args, optionsOrCb, cb) {
    var command = new CreateObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createSchema = function (args, optionsOrCb, cb) {
    var command = new CreateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.createTypedLinkFacet = function (args, optionsOrCb, cb) {
    var command = new CreateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.deleteDirectory = function (args, optionsOrCb, cb) {
    var command = new DeleteDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.deleteFacet = function (args, optionsOrCb, cb) {
    var command = new DeleteFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.deleteObject = function (args, optionsOrCb, cb) {
    var command = new DeleteObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.deleteSchema = function (args, optionsOrCb, cb) {
    var command = new DeleteSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.deleteTypedLinkFacet = function (args, optionsOrCb, cb) {
    var command = new DeleteTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.detachFromIndex = function (args, optionsOrCb, cb) {
    var command = new DetachFromIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.detachObject = function (args, optionsOrCb, cb) {
    var command = new DetachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.detachPolicy = function (args, optionsOrCb, cb) {
    var command = new DetachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.detachTypedLink = function (args, optionsOrCb, cb) {
    var command = new DetachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.disableDirectory = function (args, optionsOrCb, cb) {
    var command = new DisableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.enableDirectory = function (args, optionsOrCb, cb) {
    var command = new EnableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getAppliedSchemaVersion = function (args, optionsOrCb, cb) {
    var command = new GetAppliedSchemaVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getDirectory = function (args, optionsOrCb, cb) {
    var command = new GetDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getFacet = function (args, optionsOrCb, cb) {
    var command = new GetFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getLinkAttributes = function (args, optionsOrCb, cb) {
    var command = new GetLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getObjectAttributes = function (args, optionsOrCb, cb) {
    var command = new GetObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getObjectInformation = function (args, optionsOrCb, cb) {
    var command = new GetObjectInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getSchemaAsJson = function (args, optionsOrCb, cb) {
    var command = new GetSchemaAsJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.getTypedLinkFacetInformation = function (args, optionsOrCb, cb) {
    var command = new GetTypedLinkFacetInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listAppliedSchemaArns = function (args, optionsOrCb, cb) {
    var command = new ListAppliedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listAttachedIndices = function (args, optionsOrCb, cb) {
    var command = new ListAttachedIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listDevelopmentSchemaArns = function (args, optionsOrCb, cb) {
    var command = new ListDevelopmentSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listDirectories = function (args, optionsOrCb, cb) {
    var command = new ListDirectoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listFacetAttributes = function (args, optionsOrCb, cb) {
    var command = new ListFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listFacetNames = function (args, optionsOrCb, cb) {
    var command = new ListFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listIncomingTypedLinks = function (args, optionsOrCb, cb) {
    var command = new ListIncomingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listIndex = function (args, optionsOrCb, cb) {
    var command = new ListIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listManagedSchemaArns = function (args, optionsOrCb, cb) {
    var command = new ListManagedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listObjectAttributes = function (args, optionsOrCb, cb) {
    var command = new ListObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listObjectChildren = function (args, optionsOrCb, cb) {
    var command = new ListObjectChildrenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listObjectParentPaths = function (args, optionsOrCb, cb) {
    var command = new ListObjectParentPathsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listObjectParents = function (args, optionsOrCb, cb) {
    var command = new ListObjectParentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listObjectPolicies = function (args, optionsOrCb, cb) {
    var command = new ListObjectPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listOutgoingTypedLinks = function (args, optionsOrCb, cb) {
    var command = new ListOutgoingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listPolicyAttachments = function (args, optionsOrCb, cb) {
    var command = new ListPolicyAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listPublishedSchemaArns = function (args, optionsOrCb, cb) {
    var command = new ListPublishedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listTypedLinkFacetAttributes = function (args, optionsOrCb, cb) {
    var command = new ListTypedLinkFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.listTypedLinkFacetNames = function (args, optionsOrCb, cb) {
    var command = new ListTypedLinkFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.lookupPolicy = function (args, optionsOrCb, cb) {
    var command = new LookupPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.publishSchema = function (args, optionsOrCb, cb) {
    var command = new PublishSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.putSchemaFromJson = function (args, optionsOrCb, cb) {
    var command = new PutSchemaFromJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.removeFacetFromObject = function (args, optionsOrCb, cb) {
    var command = new RemoveFacetFromObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.updateFacet = function (args, optionsOrCb, cb) {
    var command = new UpdateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.updateLinkAttributes = function (args, optionsOrCb, cb) {
    var command = new UpdateLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.updateObjectAttributes = function (args, optionsOrCb, cb) {
    var command = new UpdateObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.updateSchema = function (args, optionsOrCb, cb) {
    var command = new UpdateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.updateTypedLinkFacet = function (args, optionsOrCb, cb) {
    var command = new UpdateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.upgradeAppliedSchema = function (args, optionsOrCb, cb) {
    var command = new UpgradeAppliedSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudDirectory.prototype.upgradePublishedSchema = function (args, optionsOrCb, cb) {
    var command = new UpgradePublishedSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return CloudDirectory;
})(CloudDirectoryClient);
export { CloudDirectory };
//# sourceMappingURL=CloudDirectory.js.map
