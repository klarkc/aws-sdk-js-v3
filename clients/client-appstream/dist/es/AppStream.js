import { __extends } from "tslib";
import { AppStreamClient } from "./AppStreamClient";
import { AssociateFleetCommand } from "./commands/AssociateFleetCommand";
import { BatchAssociateUserStackCommand } from "./commands/BatchAssociateUserStackCommand";
import { BatchDisassociateUserStackCommand } from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommand } from "./commands/CopyImageCommand";
import { CreateDirectoryConfigCommand } from "./commands/CreateDirectoryConfigCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateImageBuilderCommand } from "./commands/CreateImageBuilderCommand";
import { CreateImageBuilderStreamingURLCommand } from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommand } from "./commands/CreateStackCommand";
import { CreateStreamingURLCommand } from "./commands/CreateStreamingURLCommand";
import { CreateUpdatedImageCommand } from "./commands/CreateUpdatedImageCommand";
import { CreateUsageReportSubscriptionCommand } from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteDirectoryConfigCommand } from "./commands/DeleteDirectoryConfigCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DeleteImageBuilderCommand } from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommand } from "./commands/DeleteImageCommand";
import { DeleteImagePermissionsCommand } from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommand } from "./commands/DeleteStackCommand";
import { DeleteUsageReportSubscriptionCommand } from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeDirectoryConfigsCommand } from "./commands/DescribeDirectoryConfigsCommand";
import { DescribeFleetsCommand } from "./commands/DescribeFleetsCommand";
import { DescribeImageBuildersCommand } from "./commands/DescribeImageBuildersCommand";
import { DescribeImagePermissionsCommand } from "./commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommand } from "./commands/DescribeImagesCommand";
import { DescribeSessionsCommand } from "./commands/DescribeSessionsCommand";
import { DescribeStacksCommand } from "./commands/DescribeStacksCommand";
import { DescribeUsageReportSubscriptionsCommand } from "./commands/DescribeUsageReportSubscriptionsCommand";
import { DescribeUserStackAssociationsCommand } from "./commands/DescribeUserStackAssociationsCommand";
import { DescribeUsersCommand } from "./commands/DescribeUsersCommand";
import { DisableUserCommand } from "./commands/DisableUserCommand";
import { DisassociateFleetCommand } from "./commands/DisassociateFleetCommand";
import { EnableUserCommand } from "./commands/EnableUserCommand";
import { ExpireSessionCommand } from "./commands/ExpireSessionCommand";
import { ListAssociatedFleetsCommand } from "./commands/ListAssociatedFleetsCommand";
import { ListAssociatedStacksCommand } from "./commands/ListAssociatedStacksCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { StartFleetCommand } from "./commands/StartFleetCommand";
import { StartImageBuilderCommand } from "./commands/StartImageBuilderCommand";
import { StopFleetCommand } from "./commands/StopFleetCommand";
import { StopImageBuilderCommand } from "./commands/StopImageBuilderCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDirectoryConfigCommand } from "./commands/UpdateDirectoryConfigCommand";
import { UpdateFleetCommand } from "./commands/UpdateFleetCommand";
import { UpdateImagePermissionsCommand } from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommand } from "./commands/UpdateStackCommand";
/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *         <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *
 *         <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *
 *         <p>To learn more about AppStream 2.0, see the following resources:</p>
 *
 *             <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
var AppStream = /** @class */ (function (_super) {
  __extends(AppStream, _super);
  function AppStream() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AppStream.prototype.associateFleet = function (args, optionsOrCb, cb) {
    var command = new AssociateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.batchAssociateUserStack = function (args, optionsOrCb, cb) {
    var command = new BatchAssociateUserStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.batchDisassociateUserStack = function (args, optionsOrCb, cb) {
    var command = new BatchDisassociateUserStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.copyImage = function (args, optionsOrCb, cb) {
    var command = new CopyImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createDirectoryConfig = function (args, optionsOrCb, cb) {
    var command = new CreateDirectoryConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createFleet = function (args, optionsOrCb, cb) {
    var command = new CreateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createImageBuilder = function (args, optionsOrCb, cb) {
    var command = new CreateImageBuilderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createImageBuilderStreamingURL = function (args, optionsOrCb, cb) {
    var command = new CreateImageBuilderStreamingURLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createStack = function (args, optionsOrCb, cb) {
    var command = new CreateStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createStreamingURL = function (args, optionsOrCb, cb) {
    var command = new CreateStreamingURLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createUpdatedImage = function (args, optionsOrCb, cb) {
    var command = new CreateUpdatedImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createUsageReportSubscription = function (args, optionsOrCb, cb) {
    var command = new CreateUsageReportSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.createUser = function (args, optionsOrCb, cb) {
    var command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteDirectoryConfig = function (args, optionsOrCb, cb) {
    var command = new DeleteDirectoryConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteFleet = function (args, optionsOrCb, cb) {
    var command = new DeleteFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteImage = function (args, optionsOrCb, cb) {
    var command = new DeleteImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteImageBuilder = function (args, optionsOrCb, cb) {
    var command = new DeleteImageBuilderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteImagePermissions = function (args, optionsOrCb, cb) {
    var command = new DeleteImagePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteStack = function (args, optionsOrCb, cb) {
    var command = new DeleteStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteUsageReportSubscription = function (args, optionsOrCb, cb) {
    var command = new DeleteUsageReportSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.deleteUser = function (args, optionsOrCb, cb) {
    var command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeDirectoryConfigs = function (args, optionsOrCb, cb) {
    var command = new DescribeDirectoryConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeFleets = function (args, optionsOrCb, cb) {
    var command = new DescribeFleetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeImageBuilders = function (args, optionsOrCb, cb) {
    var command = new DescribeImageBuildersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeImagePermissions = function (args, optionsOrCb, cb) {
    var command = new DescribeImagePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeImages = function (args, optionsOrCb, cb) {
    var command = new DescribeImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeSessions = function (args, optionsOrCb, cb) {
    var command = new DescribeSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeStacks = function (args, optionsOrCb, cb) {
    var command = new DescribeStacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeUsageReportSubscriptions = function (args, optionsOrCb, cb) {
    var command = new DescribeUsageReportSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeUsers = function (args, optionsOrCb, cb) {
    var command = new DescribeUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.describeUserStackAssociations = function (args, optionsOrCb, cb) {
    var command = new DescribeUserStackAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.disableUser = function (args, optionsOrCb, cb) {
    var command = new DisableUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.disassociateFleet = function (args, optionsOrCb, cb) {
    var command = new DisassociateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.enableUser = function (args, optionsOrCb, cb) {
    var command = new EnableUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.expireSession = function (args, optionsOrCb, cb) {
    var command = new ExpireSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.listAssociatedFleets = function (args, optionsOrCb, cb) {
    var command = new ListAssociatedFleetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.listAssociatedStacks = function (args, optionsOrCb, cb) {
    var command = new ListAssociatedStacksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
  AppStream.prototype.startFleet = function (args, optionsOrCb, cb) {
    var command = new StartFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.startImageBuilder = function (args, optionsOrCb, cb) {
    var command = new StartImageBuilderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.stopFleet = function (args, optionsOrCb, cb) {
    var command = new StopFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.stopImageBuilder = function (args, optionsOrCb, cb) {
    var command = new StopImageBuilderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.tagResource = function (args, optionsOrCb, cb) {
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
  AppStream.prototype.untagResource = function (args, optionsOrCb, cb) {
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
  AppStream.prototype.updateDirectoryConfig = function (args, optionsOrCb, cb) {
    var command = new UpdateDirectoryConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.updateFleet = function (args, optionsOrCb, cb) {
    var command = new UpdateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.updateImagePermissions = function (args, optionsOrCb, cb) {
    var command = new UpdateImagePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AppStream.prototype.updateStack = function (args, optionsOrCb, cb) {
    var command = new UpdateStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AppStream;
})(AppStreamClient);
export { AppStream };
//# sourceMappingURL=AppStream.js.map
