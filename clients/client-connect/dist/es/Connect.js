import { __extends } from "tslib";
import { ConnectClient } from "./ConnectClient";
import { AssociateApprovedOriginCommand, } from "./commands/AssociateApprovedOriginCommand";
import { AssociateInstanceStorageConfigCommand, } from "./commands/AssociateInstanceStorageConfigCommand";
import { AssociateLambdaFunctionCommand, } from "./commands/AssociateLambdaFunctionCommand";
import { AssociateLexBotCommand, } from "./commands/AssociateLexBotCommand";
import { AssociateQueueQuickConnectsCommand, } from "./commands/AssociateQueueQuickConnectsCommand";
import { AssociateRoutingProfileQueuesCommand, } from "./commands/AssociateRoutingProfileQueuesCommand";
import { AssociateSecurityKeyCommand, } from "./commands/AssociateSecurityKeyCommand";
import { CreateContactFlowCommand, } from "./commands/CreateContactFlowCommand";
import { CreateInstanceCommand, } from "./commands/CreateInstanceCommand";
import { CreateIntegrationAssociationCommand, } from "./commands/CreateIntegrationAssociationCommand";
import { CreateQueueCommand } from "./commands/CreateQueueCommand";
import { CreateQuickConnectCommand, } from "./commands/CreateQuickConnectCommand";
import { CreateRoutingProfileCommand, } from "./commands/CreateRoutingProfileCommand";
import { CreateUseCaseCommand, } from "./commands/CreateUseCaseCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { CreateUserHierarchyGroupCommand, } from "./commands/CreateUserHierarchyGroupCommand";
import { DeleteInstanceCommand, } from "./commands/DeleteInstanceCommand";
import { DeleteIntegrationAssociationCommand, } from "./commands/DeleteIntegrationAssociationCommand";
import { DeleteQuickConnectCommand, } from "./commands/DeleteQuickConnectCommand";
import { DeleteUseCaseCommand, } from "./commands/DeleteUseCaseCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeleteUserHierarchyGroupCommand, } from "./commands/DeleteUserHierarchyGroupCommand";
import { DescribeContactFlowCommand, } from "./commands/DescribeContactFlowCommand";
import { DescribeHoursOfOperationCommand, } from "./commands/DescribeHoursOfOperationCommand";
import { DescribeInstanceAttributeCommand, } from "./commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCommand, } from "./commands/DescribeInstanceCommand";
import { DescribeInstanceStorageConfigCommand, } from "./commands/DescribeInstanceStorageConfigCommand";
import { DescribeQueueCommand, } from "./commands/DescribeQueueCommand";
import { DescribeQuickConnectCommand, } from "./commands/DescribeQuickConnectCommand";
import { DescribeRoutingProfileCommand, } from "./commands/DescribeRoutingProfileCommand";
import { DescribeUserCommand, } from "./commands/DescribeUserCommand";
import { DescribeUserHierarchyGroupCommand, } from "./commands/DescribeUserHierarchyGroupCommand";
import { DescribeUserHierarchyStructureCommand, } from "./commands/DescribeUserHierarchyStructureCommand";
import { DisassociateApprovedOriginCommand, } from "./commands/DisassociateApprovedOriginCommand";
import { DisassociateInstanceStorageConfigCommand, } from "./commands/DisassociateInstanceStorageConfigCommand";
import { DisassociateLambdaFunctionCommand, } from "./commands/DisassociateLambdaFunctionCommand";
import { DisassociateLexBotCommand, } from "./commands/DisassociateLexBotCommand";
import { DisassociateQueueQuickConnectsCommand, } from "./commands/DisassociateQueueQuickConnectsCommand";
import { DisassociateRoutingProfileQueuesCommand, } from "./commands/DisassociateRoutingProfileQueuesCommand";
import { DisassociateSecurityKeyCommand, } from "./commands/DisassociateSecurityKeyCommand";
import { GetContactAttributesCommand, } from "./commands/GetContactAttributesCommand";
import { GetCurrentMetricDataCommand, } from "./commands/GetCurrentMetricDataCommand";
import { GetFederationTokenCommand, } from "./commands/GetFederationTokenCommand";
import { GetMetricDataCommand, } from "./commands/GetMetricDataCommand";
import { ListApprovedOriginsCommand, } from "./commands/ListApprovedOriginsCommand";
import { ListContactFlowsCommand, } from "./commands/ListContactFlowsCommand";
import { ListHoursOfOperationsCommand, } from "./commands/ListHoursOfOperationsCommand";
import { ListInstanceAttributesCommand, } from "./commands/ListInstanceAttributesCommand";
import { ListInstanceStorageConfigsCommand, } from "./commands/ListInstanceStorageConfigsCommand";
import { ListInstancesCommand, } from "./commands/ListInstancesCommand";
import { ListIntegrationAssociationsCommand, } from "./commands/ListIntegrationAssociationsCommand";
import { ListLambdaFunctionsCommand, } from "./commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommand } from "./commands/ListLexBotsCommand";
import { ListPhoneNumbersCommand, } from "./commands/ListPhoneNumbersCommand";
import { ListPromptsCommand } from "./commands/ListPromptsCommand";
import { ListQueueQuickConnectsCommand, } from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommand } from "./commands/ListQueuesCommand";
import { ListQuickConnectsCommand, } from "./commands/ListQuickConnectsCommand";
import { ListRoutingProfileQueuesCommand, } from "./commands/ListRoutingProfileQueuesCommand";
import { ListRoutingProfilesCommand, } from "./commands/ListRoutingProfilesCommand";
import { ListSecurityKeysCommand, } from "./commands/ListSecurityKeysCommand";
import { ListSecurityProfilesCommand, } from "./commands/ListSecurityProfilesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListUseCasesCommand, } from "./commands/ListUseCasesCommand";
import { ListUserHierarchyGroupsCommand, } from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ResumeContactRecordingCommand, } from "./commands/ResumeContactRecordingCommand";
import { StartChatContactCommand, } from "./commands/StartChatContactCommand";
import { StartContactRecordingCommand, } from "./commands/StartContactRecordingCommand";
import { StartOutboundVoiceContactCommand, } from "./commands/StartOutboundVoiceContactCommand";
import { StartTaskContactCommand, } from "./commands/StartTaskContactCommand";
import { StopContactCommand } from "./commands/StopContactCommand";
import { StopContactRecordingCommand, } from "./commands/StopContactRecordingCommand";
import { SuspendContactRecordingCommand, } from "./commands/SuspendContactRecordingCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateContactAttributesCommand, } from "./commands/UpdateContactAttributesCommand";
import { UpdateContactFlowContentCommand, } from "./commands/UpdateContactFlowContentCommand";
import { UpdateContactFlowNameCommand, } from "./commands/UpdateContactFlowNameCommand";
import { UpdateInstanceAttributeCommand, } from "./commands/UpdateInstanceAttributeCommand";
import { UpdateInstanceStorageConfigCommand, } from "./commands/UpdateInstanceStorageConfigCommand";
import { UpdateQueueHoursOfOperationCommand, } from "./commands/UpdateQueueHoursOfOperationCommand";
import { UpdateQueueMaxContactsCommand, } from "./commands/UpdateQueueMaxContactsCommand";
import { UpdateQueueNameCommand, } from "./commands/UpdateQueueNameCommand";
import { UpdateQueueOutboundCallerConfigCommand, } from "./commands/UpdateQueueOutboundCallerConfigCommand";
import { UpdateQueueStatusCommand, } from "./commands/UpdateQueueStatusCommand";
import { UpdateQuickConnectConfigCommand, } from "./commands/UpdateQuickConnectConfigCommand";
import { UpdateQuickConnectNameCommand, } from "./commands/UpdateQuickConnectNameCommand";
import { UpdateRoutingProfileConcurrencyCommand, } from "./commands/UpdateRoutingProfileConcurrencyCommand";
import { UpdateRoutingProfileDefaultOutboundQueueCommand, } from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import { UpdateRoutingProfileNameCommand, } from "./commands/UpdateRoutingProfileNameCommand";
import { UpdateRoutingProfileQueuesCommand, } from "./commands/UpdateRoutingProfileQueuesCommand";
import { UpdateUserHierarchyCommand, } from "./commands/UpdateUserHierarchyCommand";
import { UpdateUserHierarchyGroupNameCommand, } from "./commands/UpdateUserHierarchyGroupNameCommand";
import { UpdateUserHierarchyStructureCommand, } from "./commands/UpdateUserHierarchyStructureCommand";
import { UpdateUserIdentityInfoCommand, } from "./commands/UpdateUserIdentityInfoCommand";
import { UpdateUserPhoneConfigCommand, } from "./commands/UpdateUserPhoneConfigCommand";
import { UpdateUserRoutingProfileCommand, } from "./commands/UpdateUserRoutingProfileCommand";
import { UpdateUserSecurityProfilesCommand, } from "./commands/UpdateUserSecurityProfilesCommand";
/**
 * <p>Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer
 *    contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing.
 *    You can also resolve customer issues more efficiently by getting customers in touch with the
 *    appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There are also limits
 *    to the number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect
 *     Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>You can
 *    connect
 *    programmatically to an AWS service by using an endpoint. For a list of Amazon Connect endpoints, see
 *     <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect
 *    Endpoints</a>.</p>
 *          <note>
 *             <p>Working with contact flows? Check out the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect Flow language</a>.</p>
 *          </note>
 */
var Connect = /** @class */ (function (_super) {
    __extends(Connect, _super);
    function Connect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Connect.prototype.associateApprovedOrigin = function (args, optionsOrCb, cb) {
        var command = new AssociateApprovedOriginCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateInstanceStorageConfig = function (args, optionsOrCb, cb) {
        var command = new AssociateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateLambdaFunction = function (args, optionsOrCb, cb) {
        var command = new AssociateLambdaFunctionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateLexBot = function (args, optionsOrCb, cb) {
        var command = new AssociateLexBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateQueueQuickConnects = function (args, optionsOrCb, cb) {
        var command = new AssociateQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateRoutingProfileQueues = function (args, optionsOrCb, cb) {
        var command = new AssociateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.associateSecurityKey = function (args, optionsOrCb, cb) {
        var command = new AssociateSecurityKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createContactFlow = function (args, optionsOrCb, cb) {
        var command = new CreateContactFlowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createInstance = function (args, optionsOrCb, cb) {
        var command = new CreateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createIntegrationAssociation = function (args, optionsOrCb, cb) {
        var command = new CreateIntegrationAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createQueue = function (args, optionsOrCb, cb) {
        var command = new CreateQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createQuickConnect = function (args, optionsOrCb, cb) {
        var command = new CreateQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createRoutingProfile = function (args, optionsOrCb, cb) {
        var command = new CreateRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createUseCase = function (args, optionsOrCb, cb) {
        var command = new CreateUseCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createUser = function (args, optionsOrCb, cb) {
        var command = new CreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.createUserHierarchyGroup = function (args, optionsOrCb, cb) {
        var command = new CreateUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteIntegrationAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteIntegrationAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteQuickConnect = function (args, optionsOrCb, cb) {
        var command = new DeleteQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteUseCase = function (args, optionsOrCb, cb) {
        var command = new DeleteUseCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteUser = function (args, optionsOrCb, cb) {
        var command = new DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.deleteUserHierarchyGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeContactFlow = function (args, optionsOrCb, cb) {
        var command = new DescribeContactFlowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeHoursOfOperation = function (args, optionsOrCb, cb) {
        var command = new DescribeHoursOfOperationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeInstance = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeInstanceAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeInstanceStorageConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeQueue = function (args, optionsOrCb, cb) {
        var command = new DescribeQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeQuickConnect = function (args, optionsOrCb, cb) {
        var command = new DescribeQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeRoutingProfile = function (args, optionsOrCb, cb) {
        var command = new DescribeRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeUser = function (args, optionsOrCb, cb) {
        var command = new DescribeUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeUserHierarchyGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.describeUserHierarchyStructure = function (args, optionsOrCb, cb) {
        var command = new DescribeUserHierarchyStructureCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateApprovedOrigin = function (args, optionsOrCb, cb) {
        var command = new DisassociateApprovedOriginCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateInstanceStorageConfig = function (args, optionsOrCb, cb) {
        var command = new DisassociateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateLambdaFunction = function (args, optionsOrCb, cb) {
        var command = new DisassociateLambdaFunctionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateLexBot = function (args, optionsOrCb, cb) {
        var command = new DisassociateLexBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateQueueQuickConnects = function (args, optionsOrCb, cb) {
        var command = new DisassociateQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateRoutingProfileQueues = function (args, optionsOrCb, cb) {
        var command = new DisassociateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.disassociateSecurityKey = function (args, optionsOrCb, cb) {
        var command = new DisassociateSecurityKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.getContactAttributes = function (args, optionsOrCb, cb) {
        var command = new GetContactAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.getCurrentMetricData = function (args, optionsOrCb, cb) {
        var command = new GetCurrentMetricDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.getFederationToken = function (args, optionsOrCb, cb) {
        var command = new GetFederationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.getMetricData = function (args, optionsOrCb, cb) {
        var command = new GetMetricDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listApprovedOrigins = function (args, optionsOrCb, cb) {
        var command = new ListApprovedOriginsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listContactFlows = function (args, optionsOrCb, cb) {
        var command = new ListContactFlowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listHoursOfOperations = function (args, optionsOrCb, cb) {
        var command = new ListHoursOfOperationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listInstanceAttributes = function (args, optionsOrCb, cb) {
        var command = new ListInstanceAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listInstances = function (args, optionsOrCb, cb) {
        var command = new ListInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listInstanceStorageConfigs = function (args, optionsOrCb, cb) {
        var command = new ListInstanceStorageConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listIntegrationAssociations = function (args, optionsOrCb, cb) {
        var command = new ListIntegrationAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listLambdaFunctions = function (args, optionsOrCb, cb) {
        var command = new ListLambdaFunctionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listLexBots = function (args, optionsOrCb, cb) {
        var command = new ListLexBotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listPhoneNumbers = function (args, optionsOrCb, cb) {
        var command = new ListPhoneNumbersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listPrompts = function (args, optionsOrCb, cb) {
        var command = new ListPromptsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listQueueQuickConnects = function (args, optionsOrCb, cb) {
        var command = new ListQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listQueues = function (args, optionsOrCb, cb) {
        var command = new ListQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listQuickConnects = function (args, optionsOrCb, cb) {
        var command = new ListQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listRoutingProfileQueues = function (args, optionsOrCb, cb) {
        var command = new ListRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listRoutingProfiles = function (args, optionsOrCb, cb) {
        var command = new ListRoutingProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listSecurityKeys = function (args, optionsOrCb, cb) {
        var command = new ListSecurityKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listSecurityProfiles = function (args, optionsOrCb, cb) {
        var command = new ListSecurityProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listUseCases = function (args, optionsOrCb, cb) {
        var command = new ListUseCasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listUserHierarchyGroups = function (args, optionsOrCb, cb) {
        var command = new ListUserHierarchyGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.listUsers = function (args, optionsOrCb, cb) {
        var command = new ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.resumeContactRecording = function (args, optionsOrCb, cb) {
        var command = new ResumeContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.startChatContact = function (args, optionsOrCb, cb) {
        var command = new StartChatContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.startContactRecording = function (args, optionsOrCb, cb) {
        var command = new StartContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.startOutboundVoiceContact = function (args, optionsOrCb, cb) {
        var command = new StartOutboundVoiceContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.startTaskContact = function (args, optionsOrCb, cb) {
        var command = new StartTaskContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.stopContact = function (args, optionsOrCb, cb) {
        var command = new StopContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.stopContactRecording = function (args, optionsOrCb, cb) {
        var command = new StopContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.suspendContactRecording = function (args, optionsOrCb, cb) {
        var command = new SuspendContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateContactAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateContactAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateContactFlowContent = function (args, optionsOrCb, cb) {
        var command = new UpdateContactFlowContentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateContactFlowName = function (args, optionsOrCb, cb) {
        var command = new UpdateContactFlowNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateInstanceAttribute = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateInstanceStorageConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQueueHoursOfOperation = function (args, optionsOrCb, cb) {
        var command = new UpdateQueueHoursOfOperationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQueueMaxContacts = function (args, optionsOrCb, cb) {
        var command = new UpdateQueueMaxContactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQueueName = function (args, optionsOrCb, cb) {
        var command = new UpdateQueueNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQueueOutboundCallerConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateQueueOutboundCallerConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQueueStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateQueueStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQuickConnectConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateQuickConnectConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateQuickConnectName = function (args, optionsOrCb, cb) {
        var command = new UpdateQuickConnectNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateRoutingProfileConcurrency = function (args, optionsOrCb, cb) {
        var command = new UpdateRoutingProfileConcurrencyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateRoutingProfileDefaultOutboundQueue = function (args, optionsOrCb, cb) {
        var command = new UpdateRoutingProfileDefaultOutboundQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateRoutingProfileName = function (args, optionsOrCb, cb) {
        var command = new UpdateRoutingProfileNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateRoutingProfileQueues = function (args, optionsOrCb, cb) {
        var command = new UpdateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserHierarchy = function (args, optionsOrCb, cb) {
        var command = new UpdateUserHierarchyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserHierarchyGroupName = function (args, optionsOrCb, cb) {
        var command = new UpdateUserHierarchyGroupNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserHierarchyStructure = function (args, optionsOrCb, cb) {
        var command = new UpdateUserHierarchyStructureCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserIdentityInfo = function (args, optionsOrCb, cb) {
        var command = new UpdateUserIdentityInfoCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserPhoneConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateUserPhoneConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserRoutingProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateUserRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Connect.prototype.updateUserSecurityProfiles = function (args, optionsOrCb, cb) {
        var command = new UpdateUserSecurityProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Connect;
}(ConnectClient));
export { Connect };
//# sourceMappingURL=Connect.js.map