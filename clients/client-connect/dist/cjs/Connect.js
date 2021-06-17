"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const ConnectClient_1 = require("./ConnectClient");
const AssociateApprovedOriginCommand_1 = require("./commands/AssociateApprovedOriginCommand");
const AssociateInstanceStorageConfigCommand_1 = require("./commands/AssociateInstanceStorageConfigCommand");
const AssociateLambdaFunctionCommand_1 = require("./commands/AssociateLambdaFunctionCommand");
const AssociateLexBotCommand_1 = require("./commands/AssociateLexBotCommand");
const AssociateQueueQuickConnectsCommand_1 = require("./commands/AssociateQueueQuickConnectsCommand");
const AssociateRoutingProfileQueuesCommand_1 = require("./commands/AssociateRoutingProfileQueuesCommand");
const AssociateSecurityKeyCommand_1 = require("./commands/AssociateSecurityKeyCommand");
const CreateContactFlowCommand_1 = require("./commands/CreateContactFlowCommand");
const CreateInstanceCommand_1 = require("./commands/CreateInstanceCommand");
const CreateIntegrationAssociationCommand_1 = require("./commands/CreateIntegrationAssociationCommand");
const CreateQueueCommand_1 = require("./commands/CreateQueueCommand");
const CreateQuickConnectCommand_1 = require("./commands/CreateQuickConnectCommand");
const CreateRoutingProfileCommand_1 = require("./commands/CreateRoutingProfileCommand");
const CreateUseCaseCommand_1 = require("./commands/CreateUseCaseCommand");
const CreateUserCommand_1 = require("./commands/CreateUserCommand");
const CreateUserHierarchyGroupCommand_1 = require("./commands/CreateUserHierarchyGroupCommand");
const DeleteInstanceCommand_1 = require("./commands/DeleteInstanceCommand");
const DeleteIntegrationAssociationCommand_1 = require("./commands/DeleteIntegrationAssociationCommand");
const DeleteQuickConnectCommand_1 = require("./commands/DeleteQuickConnectCommand");
const DeleteUseCaseCommand_1 = require("./commands/DeleteUseCaseCommand");
const DeleteUserCommand_1 = require("./commands/DeleteUserCommand");
const DeleteUserHierarchyGroupCommand_1 = require("./commands/DeleteUserHierarchyGroupCommand");
const DescribeContactFlowCommand_1 = require("./commands/DescribeContactFlowCommand");
const DescribeHoursOfOperationCommand_1 = require("./commands/DescribeHoursOfOperationCommand");
const DescribeInstanceAttributeCommand_1 = require("./commands/DescribeInstanceAttributeCommand");
const DescribeInstanceCommand_1 = require("./commands/DescribeInstanceCommand");
const DescribeInstanceStorageConfigCommand_1 = require("./commands/DescribeInstanceStorageConfigCommand");
const DescribeQueueCommand_1 = require("./commands/DescribeQueueCommand");
const DescribeQuickConnectCommand_1 = require("./commands/DescribeQuickConnectCommand");
const DescribeRoutingProfileCommand_1 = require("./commands/DescribeRoutingProfileCommand");
const DescribeUserCommand_1 = require("./commands/DescribeUserCommand");
const DescribeUserHierarchyGroupCommand_1 = require("./commands/DescribeUserHierarchyGroupCommand");
const DescribeUserHierarchyStructureCommand_1 = require("./commands/DescribeUserHierarchyStructureCommand");
const DisassociateApprovedOriginCommand_1 = require("./commands/DisassociateApprovedOriginCommand");
const DisassociateInstanceStorageConfigCommand_1 = require("./commands/DisassociateInstanceStorageConfigCommand");
const DisassociateLambdaFunctionCommand_1 = require("./commands/DisassociateLambdaFunctionCommand");
const DisassociateLexBotCommand_1 = require("./commands/DisassociateLexBotCommand");
const DisassociateQueueQuickConnectsCommand_1 = require("./commands/DisassociateQueueQuickConnectsCommand");
const DisassociateRoutingProfileQueuesCommand_1 = require("./commands/DisassociateRoutingProfileQueuesCommand");
const DisassociateSecurityKeyCommand_1 = require("./commands/DisassociateSecurityKeyCommand");
const GetContactAttributesCommand_1 = require("./commands/GetContactAttributesCommand");
const GetCurrentMetricDataCommand_1 = require("./commands/GetCurrentMetricDataCommand");
const GetFederationTokenCommand_1 = require("./commands/GetFederationTokenCommand");
const GetMetricDataCommand_1 = require("./commands/GetMetricDataCommand");
const ListApprovedOriginsCommand_1 = require("./commands/ListApprovedOriginsCommand");
const ListContactFlowsCommand_1 = require("./commands/ListContactFlowsCommand");
const ListHoursOfOperationsCommand_1 = require("./commands/ListHoursOfOperationsCommand");
const ListInstanceAttributesCommand_1 = require("./commands/ListInstanceAttributesCommand");
const ListInstanceStorageConfigsCommand_1 = require("./commands/ListInstanceStorageConfigsCommand");
const ListInstancesCommand_1 = require("./commands/ListInstancesCommand");
const ListIntegrationAssociationsCommand_1 = require("./commands/ListIntegrationAssociationsCommand");
const ListLambdaFunctionsCommand_1 = require("./commands/ListLambdaFunctionsCommand");
const ListLexBotsCommand_1 = require("./commands/ListLexBotsCommand");
const ListPhoneNumbersCommand_1 = require("./commands/ListPhoneNumbersCommand");
const ListPromptsCommand_1 = require("./commands/ListPromptsCommand");
const ListQueueQuickConnectsCommand_1 = require("./commands/ListQueueQuickConnectsCommand");
const ListQueuesCommand_1 = require("./commands/ListQueuesCommand");
const ListQuickConnectsCommand_1 = require("./commands/ListQuickConnectsCommand");
const ListRoutingProfileQueuesCommand_1 = require("./commands/ListRoutingProfileQueuesCommand");
const ListRoutingProfilesCommand_1 = require("./commands/ListRoutingProfilesCommand");
const ListSecurityKeysCommand_1 = require("./commands/ListSecurityKeysCommand");
const ListSecurityProfilesCommand_1 = require("./commands/ListSecurityProfilesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListUseCasesCommand_1 = require("./commands/ListUseCasesCommand");
const ListUserHierarchyGroupsCommand_1 = require("./commands/ListUserHierarchyGroupsCommand");
const ListUsersCommand_1 = require("./commands/ListUsersCommand");
const ResumeContactRecordingCommand_1 = require("./commands/ResumeContactRecordingCommand");
const StartChatContactCommand_1 = require("./commands/StartChatContactCommand");
const StartContactRecordingCommand_1 = require("./commands/StartContactRecordingCommand");
const StartOutboundVoiceContactCommand_1 = require("./commands/StartOutboundVoiceContactCommand");
const StartTaskContactCommand_1 = require("./commands/StartTaskContactCommand");
const StopContactCommand_1 = require("./commands/StopContactCommand");
const StopContactRecordingCommand_1 = require("./commands/StopContactRecordingCommand");
const SuspendContactRecordingCommand_1 = require("./commands/SuspendContactRecordingCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateContactAttributesCommand_1 = require("./commands/UpdateContactAttributesCommand");
const UpdateContactFlowContentCommand_1 = require("./commands/UpdateContactFlowContentCommand");
const UpdateContactFlowNameCommand_1 = require("./commands/UpdateContactFlowNameCommand");
const UpdateInstanceAttributeCommand_1 = require("./commands/UpdateInstanceAttributeCommand");
const UpdateInstanceStorageConfigCommand_1 = require("./commands/UpdateInstanceStorageConfigCommand");
const UpdateQueueHoursOfOperationCommand_1 = require("./commands/UpdateQueueHoursOfOperationCommand");
const UpdateQueueMaxContactsCommand_1 = require("./commands/UpdateQueueMaxContactsCommand");
const UpdateQueueNameCommand_1 = require("./commands/UpdateQueueNameCommand");
const UpdateQueueOutboundCallerConfigCommand_1 = require("./commands/UpdateQueueOutboundCallerConfigCommand");
const UpdateQueueStatusCommand_1 = require("./commands/UpdateQueueStatusCommand");
const UpdateQuickConnectConfigCommand_1 = require("./commands/UpdateQuickConnectConfigCommand");
const UpdateQuickConnectNameCommand_1 = require("./commands/UpdateQuickConnectNameCommand");
const UpdateRoutingProfileConcurrencyCommand_1 = require("./commands/UpdateRoutingProfileConcurrencyCommand");
const UpdateRoutingProfileDefaultOutboundQueueCommand_1 = require("./commands/UpdateRoutingProfileDefaultOutboundQueueCommand");
const UpdateRoutingProfileNameCommand_1 = require("./commands/UpdateRoutingProfileNameCommand");
const UpdateRoutingProfileQueuesCommand_1 = require("./commands/UpdateRoutingProfileQueuesCommand");
const UpdateUserHierarchyCommand_1 = require("./commands/UpdateUserHierarchyCommand");
const UpdateUserHierarchyGroupNameCommand_1 = require("./commands/UpdateUserHierarchyGroupNameCommand");
const UpdateUserHierarchyStructureCommand_1 = require("./commands/UpdateUserHierarchyStructureCommand");
const UpdateUserIdentityInfoCommand_1 = require("./commands/UpdateUserIdentityInfoCommand");
const UpdateUserPhoneConfigCommand_1 = require("./commands/UpdateUserPhoneConfigCommand");
const UpdateUserRoutingProfileCommand_1 = require("./commands/UpdateUserRoutingProfileCommand");
const UpdateUserSecurityProfilesCommand_1 = require("./commands/UpdateUserSecurityProfilesCommand");
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
class Connect extends ConnectClient_1.ConnectClient {
    associateApprovedOrigin(args, optionsOrCb, cb) {
        const command = new AssociateApprovedOriginCommand_1.AssociateApprovedOriginCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateInstanceStorageConfig(args, optionsOrCb, cb) {
        const command = new AssociateInstanceStorageConfigCommand_1.AssociateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateLambdaFunction(args, optionsOrCb, cb) {
        const command = new AssociateLambdaFunctionCommand_1.AssociateLambdaFunctionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateLexBot(args, optionsOrCb, cb) {
        const command = new AssociateLexBotCommand_1.AssociateLexBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateQueueQuickConnects(args, optionsOrCb, cb) {
        const command = new AssociateQueueQuickConnectsCommand_1.AssociateQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateRoutingProfileQueues(args, optionsOrCb, cb) {
        const command = new AssociateRoutingProfileQueuesCommand_1.AssociateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSecurityKey(args, optionsOrCb, cb) {
        const command = new AssociateSecurityKeyCommand_1.AssociateSecurityKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createContactFlow(args, optionsOrCb, cb) {
        const command = new CreateContactFlowCommand_1.CreateContactFlowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInstance(args, optionsOrCb, cb) {
        const command = new CreateInstanceCommand_1.CreateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createIntegrationAssociation(args, optionsOrCb, cb) {
        const command = new CreateIntegrationAssociationCommand_1.CreateIntegrationAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createQueue(args, optionsOrCb, cb) {
        const command = new CreateQueueCommand_1.CreateQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createQuickConnect(args, optionsOrCb, cb) {
        const command = new CreateQuickConnectCommand_1.CreateQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRoutingProfile(args, optionsOrCb, cb) {
        const command = new CreateRoutingProfileCommand_1.CreateRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUseCase(args, optionsOrCb, cb) {
        const command = new CreateUseCaseCommand_1.CreateUseCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUser(args, optionsOrCb, cb) {
        const command = new CreateUserCommand_1.CreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserHierarchyGroup(args, optionsOrCb, cb) {
        const command = new CreateUserHierarchyGroupCommand_1.CreateUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInstance(args, optionsOrCb, cb) {
        const command = new DeleteInstanceCommand_1.DeleteInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIntegrationAssociation(args, optionsOrCb, cb) {
        const command = new DeleteIntegrationAssociationCommand_1.DeleteIntegrationAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteQuickConnect(args, optionsOrCb, cb) {
        const command = new DeleteQuickConnectCommand_1.DeleteQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUseCase(args, optionsOrCb, cb) {
        const command = new DeleteUseCaseCommand_1.DeleteUseCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUser(args, optionsOrCb, cb) {
        const command = new DeleteUserCommand_1.DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserHierarchyGroup(args, optionsOrCb, cb) {
        const command = new DeleteUserHierarchyGroupCommand_1.DeleteUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContactFlow(args, optionsOrCb, cb) {
        const command = new DescribeContactFlowCommand_1.DescribeContactFlowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHoursOfOperation(args, optionsOrCb, cb) {
        const command = new DescribeHoursOfOperationCommand_1.DescribeHoursOfOperationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstance(args, optionsOrCb, cb) {
        const command = new DescribeInstanceCommand_1.DescribeInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceAttribute(args, optionsOrCb, cb) {
        const command = new DescribeInstanceAttributeCommand_1.DescribeInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceStorageConfig(args, optionsOrCb, cb) {
        const command = new DescribeInstanceStorageConfigCommand_1.DescribeInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeQueue(args, optionsOrCb, cb) {
        const command = new DescribeQueueCommand_1.DescribeQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeQuickConnect(args, optionsOrCb, cb) {
        const command = new DescribeQuickConnectCommand_1.DescribeQuickConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRoutingProfile(args, optionsOrCb, cb) {
        const command = new DescribeRoutingProfileCommand_1.DescribeRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUser(args, optionsOrCb, cb) {
        const command = new DescribeUserCommand_1.DescribeUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserHierarchyGroup(args, optionsOrCb, cb) {
        const command = new DescribeUserHierarchyGroupCommand_1.DescribeUserHierarchyGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserHierarchyStructure(args, optionsOrCb, cb) {
        const command = new DescribeUserHierarchyStructureCommand_1.DescribeUserHierarchyStructureCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateApprovedOrigin(args, optionsOrCb, cb) {
        const command = new DisassociateApprovedOriginCommand_1.DisassociateApprovedOriginCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateInstanceStorageConfig(args, optionsOrCb, cb) {
        const command = new DisassociateInstanceStorageConfigCommand_1.DisassociateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateLambdaFunction(args, optionsOrCb, cb) {
        const command = new DisassociateLambdaFunctionCommand_1.DisassociateLambdaFunctionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateLexBot(args, optionsOrCb, cb) {
        const command = new DisassociateLexBotCommand_1.DisassociateLexBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateQueueQuickConnects(args, optionsOrCb, cb) {
        const command = new DisassociateQueueQuickConnectsCommand_1.DisassociateQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateRoutingProfileQueues(args, optionsOrCb, cb) {
        const command = new DisassociateRoutingProfileQueuesCommand_1.DisassociateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateSecurityKey(args, optionsOrCb, cb) {
        const command = new DisassociateSecurityKeyCommand_1.DisassociateSecurityKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getContactAttributes(args, optionsOrCb, cb) {
        const command = new GetContactAttributesCommand_1.GetContactAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCurrentMetricData(args, optionsOrCb, cb) {
        const command = new GetCurrentMetricDataCommand_1.GetCurrentMetricDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFederationToken(args, optionsOrCb, cb) {
        const command = new GetFederationTokenCommand_1.GetFederationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMetricData(args, optionsOrCb, cb) {
        const command = new GetMetricDataCommand_1.GetMetricDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApprovedOrigins(args, optionsOrCb, cb) {
        const command = new ListApprovedOriginsCommand_1.ListApprovedOriginsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listContactFlows(args, optionsOrCb, cb) {
        const command = new ListContactFlowsCommand_1.ListContactFlowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listHoursOfOperations(args, optionsOrCb, cb) {
        const command = new ListHoursOfOperationsCommand_1.ListHoursOfOperationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstanceAttributes(args, optionsOrCb, cb) {
        const command = new ListInstanceAttributesCommand_1.ListInstanceAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstances(args, optionsOrCb, cb) {
        const command = new ListInstancesCommand_1.ListInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstanceStorageConfigs(args, optionsOrCb, cb) {
        const command = new ListInstanceStorageConfigsCommand_1.ListInstanceStorageConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIntegrationAssociations(args, optionsOrCb, cb) {
        const command = new ListIntegrationAssociationsCommand_1.ListIntegrationAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLambdaFunctions(args, optionsOrCb, cb) {
        const command = new ListLambdaFunctionsCommand_1.ListLambdaFunctionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLexBots(args, optionsOrCb, cb) {
        const command = new ListLexBotsCommand_1.ListLexBotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPhoneNumbers(args, optionsOrCb, cb) {
        const command = new ListPhoneNumbersCommand_1.ListPhoneNumbersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPrompts(args, optionsOrCb, cb) {
        const command = new ListPromptsCommand_1.ListPromptsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listQueueQuickConnects(args, optionsOrCb, cb) {
        const command = new ListQueueQuickConnectsCommand_1.ListQueueQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listQueues(args, optionsOrCb, cb) {
        const command = new ListQueuesCommand_1.ListQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listQuickConnects(args, optionsOrCb, cb) {
        const command = new ListQuickConnectsCommand_1.ListQuickConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRoutingProfileQueues(args, optionsOrCb, cb) {
        const command = new ListRoutingProfileQueuesCommand_1.ListRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRoutingProfiles(args, optionsOrCb, cb) {
        const command = new ListRoutingProfilesCommand_1.ListRoutingProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSecurityKeys(args, optionsOrCb, cb) {
        const command = new ListSecurityKeysCommand_1.ListSecurityKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSecurityProfiles(args, optionsOrCb, cb) {
        const command = new ListSecurityProfilesCommand_1.ListSecurityProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUseCases(args, optionsOrCb, cb) {
        const command = new ListUseCasesCommand_1.ListUseCasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserHierarchyGroups(args, optionsOrCb, cb) {
        const command = new ListUserHierarchyGroupsCommand_1.ListUserHierarchyGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUsers(args, optionsOrCb, cb) {
        const command = new ListUsersCommand_1.ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resumeContactRecording(args, optionsOrCb, cb) {
        const command = new ResumeContactRecordingCommand_1.ResumeContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startChatContact(args, optionsOrCb, cb) {
        const command = new StartChatContactCommand_1.StartChatContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startContactRecording(args, optionsOrCb, cb) {
        const command = new StartContactRecordingCommand_1.StartContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startOutboundVoiceContact(args, optionsOrCb, cb) {
        const command = new StartOutboundVoiceContactCommand_1.StartOutboundVoiceContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startTaskContact(args, optionsOrCb, cb) {
        const command = new StartTaskContactCommand_1.StartTaskContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopContact(args, optionsOrCb, cb) {
        const command = new StopContactCommand_1.StopContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopContactRecording(args, optionsOrCb, cb) {
        const command = new StopContactRecordingCommand_1.StopContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    suspendContactRecording(args, optionsOrCb, cb) {
        const command = new SuspendContactRecordingCommand_1.SuspendContactRecordingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContactAttributes(args, optionsOrCb, cb) {
        const command = new UpdateContactAttributesCommand_1.UpdateContactAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContactFlowContent(args, optionsOrCb, cb) {
        const command = new UpdateContactFlowContentCommand_1.UpdateContactFlowContentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContactFlowName(args, optionsOrCb, cb) {
        const command = new UpdateContactFlowNameCommand_1.UpdateContactFlowNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateInstanceAttribute(args, optionsOrCb, cb) {
        const command = new UpdateInstanceAttributeCommand_1.UpdateInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateInstanceStorageConfig(args, optionsOrCb, cb) {
        const command = new UpdateInstanceStorageConfigCommand_1.UpdateInstanceStorageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQueueHoursOfOperation(args, optionsOrCb, cb) {
        const command = new UpdateQueueHoursOfOperationCommand_1.UpdateQueueHoursOfOperationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQueueMaxContacts(args, optionsOrCb, cb) {
        const command = new UpdateQueueMaxContactsCommand_1.UpdateQueueMaxContactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQueueName(args, optionsOrCb, cb) {
        const command = new UpdateQueueNameCommand_1.UpdateQueueNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQueueOutboundCallerConfig(args, optionsOrCb, cb) {
        const command = new UpdateQueueOutboundCallerConfigCommand_1.UpdateQueueOutboundCallerConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQueueStatus(args, optionsOrCb, cb) {
        const command = new UpdateQueueStatusCommand_1.UpdateQueueStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQuickConnectConfig(args, optionsOrCb, cb) {
        const command = new UpdateQuickConnectConfigCommand_1.UpdateQuickConnectConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateQuickConnectName(args, optionsOrCb, cb) {
        const command = new UpdateQuickConnectNameCommand_1.UpdateQuickConnectNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRoutingProfileConcurrency(args, optionsOrCb, cb) {
        const command = new UpdateRoutingProfileConcurrencyCommand_1.UpdateRoutingProfileConcurrencyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRoutingProfileDefaultOutboundQueue(args, optionsOrCb, cb) {
        const command = new UpdateRoutingProfileDefaultOutboundQueueCommand_1.UpdateRoutingProfileDefaultOutboundQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRoutingProfileName(args, optionsOrCb, cb) {
        const command = new UpdateRoutingProfileNameCommand_1.UpdateRoutingProfileNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRoutingProfileQueues(args, optionsOrCb, cb) {
        const command = new UpdateRoutingProfileQueuesCommand_1.UpdateRoutingProfileQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserHierarchy(args, optionsOrCb, cb) {
        const command = new UpdateUserHierarchyCommand_1.UpdateUserHierarchyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserHierarchyGroupName(args, optionsOrCb, cb) {
        const command = new UpdateUserHierarchyGroupNameCommand_1.UpdateUserHierarchyGroupNameCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserHierarchyStructure(args, optionsOrCb, cb) {
        const command = new UpdateUserHierarchyStructureCommand_1.UpdateUserHierarchyStructureCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserIdentityInfo(args, optionsOrCb, cb) {
        const command = new UpdateUserIdentityInfoCommand_1.UpdateUserIdentityInfoCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserPhoneConfig(args, optionsOrCb, cb) {
        const command = new UpdateUserPhoneConfigCommand_1.UpdateUserPhoneConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserRoutingProfile(args, optionsOrCb, cb) {
        const command = new UpdateUserRoutingProfileCommand_1.UpdateUserRoutingProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserSecurityProfiles(args, optionsOrCb, cb) {
        const command = new UpdateUserSecurityProfilesCommand_1.UpdateUserSecurityProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Connect = Connect;
//# sourceMappingURL=Connect.js.map