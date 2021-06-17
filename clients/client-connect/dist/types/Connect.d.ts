import { ConnectClient } from "./ConnectClient";
import { AssociateApprovedOriginCommandInput, AssociateApprovedOriginCommandOutput } from "./commands/AssociateApprovedOriginCommand";
import { AssociateInstanceStorageConfigCommandInput, AssociateInstanceStorageConfigCommandOutput } from "./commands/AssociateInstanceStorageConfigCommand";
import { AssociateLambdaFunctionCommandInput, AssociateLambdaFunctionCommandOutput } from "./commands/AssociateLambdaFunctionCommand";
import { AssociateLexBotCommandInput, AssociateLexBotCommandOutput } from "./commands/AssociateLexBotCommand";
import { AssociateQueueQuickConnectsCommandInput, AssociateQueueQuickConnectsCommandOutput } from "./commands/AssociateQueueQuickConnectsCommand";
import { AssociateRoutingProfileQueuesCommandInput, AssociateRoutingProfileQueuesCommandOutput } from "./commands/AssociateRoutingProfileQueuesCommand";
import { AssociateSecurityKeyCommandInput, AssociateSecurityKeyCommandOutput } from "./commands/AssociateSecurityKeyCommand";
import { CreateContactFlowCommandInput, CreateContactFlowCommandOutput } from "./commands/CreateContactFlowCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import { CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput } from "./commands/CreateIntegrationAssociationCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import { CreateQuickConnectCommandInput, CreateQuickConnectCommandOutput } from "./commands/CreateQuickConnectCommand";
import { CreateRoutingProfileCommandInput, CreateRoutingProfileCommandOutput } from "./commands/CreateRoutingProfileCommand";
import { CreateUseCaseCommandInput, CreateUseCaseCommandOutput } from "./commands/CreateUseCaseCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput } from "./commands/CreateUserHierarchyGroupCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import { DeleteIntegrationAssociationCommandInput, DeleteIntegrationAssociationCommandOutput } from "./commands/DeleteIntegrationAssociationCommand";
import { DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput } from "./commands/DeleteQuickConnectCommand";
import { DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput } from "./commands/DeleteUseCaseCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteUserHierarchyGroupCommandInput, DeleteUserHierarchyGroupCommandOutput } from "./commands/DeleteUserHierarchyGroupCommand";
import { DescribeContactFlowCommandInput, DescribeContactFlowCommandOutput } from "./commands/DescribeContactFlowCommand";
import { DescribeHoursOfOperationCommandInput, DescribeHoursOfOperationCommandOutput } from "./commands/DescribeHoursOfOperationCommand";
import { DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput } from "./commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "./commands/DescribeInstanceCommand";
import { DescribeInstanceStorageConfigCommandInput, DescribeInstanceStorageConfigCommandOutput } from "./commands/DescribeInstanceStorageConfigCommand";
import { DescribeQueueCommandInput, DescribeQueueCommandOutput } from "./commands/DescribeQueueCommand";
import { DescribeQuickConnectCommandInput, DescribeQuickConnectCommandOutput } from "./commands/DescribeQuickConnectCommand";
import { DescribeRoutingProfileCommandInput, DescribeRoutingProfileCommandOutput } from "./commands/DescribeRoutingProfileCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { DescribeUserHierarchyGroupCommandInput, DescribeUserHierarchyGroupCommandOutput } from "./commands/DescribeUserHierarchyGroupCommand";
import { DescribeUserHierarchyStructureCommandInput, DescribeUserHierarchyStructureCommandOutput } from "./commands/DescribeUserHierarchyStructureCommand";
import { DisassociateApprovedOriginCommandInput, DisassociateApprovedOriginCommandOutput } from "./commands/DisassociateApprovedOriginCommand";
import { DisassociateInstanceStorageConfigCommandInput, DisassociateInstanceStorageConfigCommandOutput } from "./commands/DisassociateInstanceStorageConfigCommand";
import { DisassociateLambdaFunctionCommandInput, DisassociateLambdaFunctionCommandOutput } from "./commands/DisassociateLambdaFunctionCommand";
import { DisassociateLexBotCommandInput, DisassociateLexBotCommandOutput } from "./commands/DisassociateLexBotCommand";
import { DisassociateQueueQuickConnectsCommandInput, DisassociateQueueQuickConnectsCommandOutput } from "./commands/DisassociateQueueQuickConnectsCommand";
import { DisassociateRoutingProfileQueuesCommandInput, DisassociateRoutingProfileQueuesCommandOutput } from "./commands/DisassociateRoutingProfileQueuesCommand";
import { DisassociateSecurityKeyCommandInput, DisassociateSecurityKeyCommandOutput } from "./commands/DisassociateSecurityKeyCommand";
import { GetContactAttributesCommandInput, GetContactAttributesCommandOutput } from "./commands/GetContactAttributesCommand";
import { GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput } from "./commands/GetCurrentMetricDataCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "./commands/GetFederationTokenCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import { ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput } from "./commands/ListApprovedOriginsCommand";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "./commands/ListContactFlowsCommand";
import { ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput } from "./commands/ListHoursOfOperationsCommand";
import { ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput } from "./commands/ListInstanceAttributesCommand";
import { ListInstanceStorageConfigsCommandInput, ListInstanceStorageConfigsCommandOutput } from "./commands/ListInstanceStorageConfigsCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import { ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput } from "./commands/ListIntegrationAssociationsCommand";
import { ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput } from "./commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommandInput, ListLexBotsCommandOutput } from "./commands/ListLexBotsCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import { ListQueueQuickConnectsCommandInput, ListQueueQuickConnectsCommandOutput } from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "./commands/ListQuickConnectsCommand";
import { ListRoutingProfileQueuesCommandInput, ListRoutingProfileQueuesCommandOutput } from "./commands/ListRoutingProfileQueuesCommand";
import { ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput } from "./commands/ListRoutingProfilesCommand";
import { ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput } from "./commands/ListSecurityKeysCommand";
import { ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput } from "./commands/ListSecurityProfilesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "./commands/ListUseCasesCommand";
import { ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput } from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ResumeContactRecordingCommandInput, ResumeContactRecordingCommandOutput } from "./commands/ResumeContactRecordingCommand";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "./commands/StartChatContactCommand";
import { StartContactRecordingCommandInput, StartContactRecordingCommandOutput } from "./commands/StartContactRecordingCommand";
import { StartOutboundVoiceContactCommandInput, StartOutboundVoiceContactCommandOutput } from "./commands/StartOutboundVoiceContactCommand";
import { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "./commands/StartTaskContactCommand";
import { StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand";
import { StopContactRecordingCommandInput, StopContactRecordingCommandOutput } from "./commands/StopContactRecordingCommand";
import { SuspendContactRecordingCommandInput, SuspendContactRecordingCommandOutput } from "./commands/SuspendContactRecordingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContactAttributesCommandInput, UpdateContactAttributesCommandOutput } from "./commands/UpdateContactAttributesCommand";
import { UpdateContactFlowContentCommandInput, UpdateContactFlowContentCommandOutput } from "./commands/UpdateContactFlowContentCommand";
import { UpdateContactFlowNameCommandInput, UpdateContactFlowNameCommandOutput } from "./commands/UpdateContactFlowNameCommand";
import { UpdateInstanceAttributeCommandInput, UpdateInstanceAttributeCommandOutput } from "./commands/UpdateInstanceAttributeCommand";
import { UpdateInstanceStorageConfigCommandInput, UpdateInstanceStorageConfigCommandOutput } from "./commands/UpdateInstanceStorageConfigCommand";
import { UpdateQueueHoursOfOperationCommandInput, UpdateQueueHoursOfOperationCommandOutput } from "./commands/UpdateQueueHoursOfOperationCommand";
import { UpdateQueueMaxContactsCommandInput, UpdateQueueMaxContactsCommandOutput } from "./commands/UpdateQueueMaxContactsCommand";
import { UpdateQueueNameCommandInput, UpdateQueueNameCommandOutput } from "./commands/UpdateQueueNameCommand";
import { UpdateQueueOutboundCallerConfigCommandInput, UpdateQueueOutboundCallerConfigCommandOutput } from "./commands/UpdateQueueOutboundCallerConfigCommand";
import { UpdateQueueStatusCommandInput, UpdateQueueStatusCommandOutput } from "./commands/UpdateQueueStatusCommand";
import { UpdateQuickConnectConfigCommandInput, UpdateQuickConnectConfigCommandOutput } from "./commands/UpdateQuickConnectConfigCommand";
import { UpdateQuickConnectNameCommandInput, UpdateQuickConnectNameCommandOutput } from "./commands/UpdateQuickConnectNameCommand";
import { UpdateRoutingProfileConcurrencyCommandInput, UpdateRoutingProfileConcurrencyCommandOutput } from "./commands/UpdateRoutingProfileConcurrencyCommand";
import { UpdateRoutingProfileDefaultOutboundQueueCommandInput, UpdateRoutingProfileDefaultOutboundQueueCommandOutput } from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import { UpdateRoutingProfileNameCommandInput, UpdateRoutingProfileNameCommandOutput } from "./commands/UpdateRoutingProfileNameCommand";
import { UpdateRoutingProfileQueuesCommandInput, UpdateRoutingProfileQueuesCommandOutput } from "./commands/UpdateRoutingProfileQueuesCommand";
import { UpdateUserHierarchyCommandInput, UpdateUserHierarchyCommandOutput } from "./commands/UpdateUserHierarchyCommand";
import { UpdateUserHierarchyGroupNameCommandInput, UpdateUserHierarchyGroupNameCommandOutput } from "./commands/UpdateUserHierarchyGroupNameCommand";
import { UpdateUserHierarchyStructureCommandInput, UpdateUserHierarchyStructureCommandOutput } from "./commands/UpdateUserHierarchyStructureCommand";
import { UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput } from "./commands/UpdateUserIdentityInfoCommand";
import { UpdateUserPhoneConfigCommandInput, UpdateUserPhoneConfigCommandOutput } from "./commands/UpdateUserPhoneConfigCommand";
import { UpdateUserRoutingProfileCommandInput, UpdateUserRoutingProfileCommandOutput } from "./commands/UpdateUserRoutingProfileCommand";
import { UpdateUserSecurityProfilesCommandInput, UpdateUserSecurityProfilesCommandOutput } from "./commands/UpdateUserSecurityProfilesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class Connect extends ConnectClient {
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Associates an approved origin to an Amazon Connect instance.</p>
     */
    associateApprovedOrigin(args: AssociateApprovedOriginCommandInput, options?: __HttpHandlerOptions): Promise<AssociateApprovedOriginCommandOutput>;
    associateApprovedOrigin(args: AssociateApprovedOriginCommandInput, cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void): void;
    associateApprovedOrigin(args: AssociateApprovedOriginCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Associates a storage resource type for the first time. You can only associate one type of
     *    storage configuration in a single call. This means, for example, that you can't define an
     *    instance with multiple S3 buckets for storing chat transcripts.</p>
     *          <p>This API does not create a resource that doesn't exist. It only associates it to the
     *    instance. Ensure that the resource being specified in the storage configuration, like an S3
     *    bucket, exists when being used for association.</p>
     */
    associateInstanceStorageConfig(args: AssociateInstanceStorageConfigCommandInput, options?: __HttpHandlerOptions): Promise<AssociateInstanceStorageConfigCommandOutput>;
    associateInstanceStorageConfig(args: AssociateInstanceStorageConfigCommandInput, cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void): void;
    associateInstanceStorageConfig(args: AssociateInstanceStorageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Allows the specified Amazon Connect instance to access the specified Lambda function.</p>
     */
    associateLambdaFunction(args: AssociateLambdaFunctionCommandInput, options?: __HttpHandlerOptions): Promise<AssociateLambdaFunctionCommandOutput>;
    associateLambdaFunction(args: AssociateLambdaFunctionCommandInput, cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void): void;
    associateLambdaFunction(args: AssociateLambdaFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.</p>
     */
    associateLexBot(args: AssociateLexBotCommandInput, options?: __HttpHandlerOptions): Promise<AssociateLexBotCommandOutput>;
    associateLexBot(args: AssociateLexBotCommandInput, cb: (err: any, data?: AssociateLexBotCommandOutput) => void): void;
    associateLexBot(args: AssociateLexBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateLexBotCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Associates a set of quick connects with a queue.</p>
     */
    associateQueueQuickConnects(args: AssociateQueueQuickConnectsCommandInput, options?: __HttpHandlerOptions): Promise<AssociateQueueQuickConnectsCommandOutput>;
    associateQueueQuickConnects(args: AssociateQueueQuickConnectsCommandInput, cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void): void;
    associateQueueQuickConnects(args: AssociateQueueQuickConnectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void): void;
    /**
     * <p>Associates a set of queues with a routing profile.</p>
     */
    associateRoutingProfileQueues(args: AssociateRoutingProfileQueuesCommandInput, options?: __HttpHandlerOptions): Promise<AssociateRoutingProfileQueuesCommandOutput>;
    associateRoutingProfileQueues(args: AssociateRoutingProfileQueuesCommandInput, cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void): void;
    associateRoutingProfileQueues(args: AssociateRoutingProfileQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Associates a security key to the instance.</p>
     */
    associateSecurityKey(args: AssociateSecurityKeyCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSecurityKeyCommandOutput>;
    associateSecurityKey(args: AssociateSecurityKeyCommandInput, cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void): void;
    associateSecurityKey(args: AssociateSecurityKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void): void;
    /**
     * <p>Creates a contact flow for the specified Amazon Connect instance.</p>
     *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
     *    Flow language</a>.</p>
     */
    createContactFlow(args: CreateContactFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactFlowCommandOutput>;
    createContactFlow(args: CreateContactFlowCommandInput, cb: (err: any, data?: CreateContactFlowCommandOutput) => void): void;
    createContactFlow(args: CreateContactFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContactFlowCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any
     *    storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not
     *    allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
     *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
     * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
     * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
     */
    createInstance(args: CreateInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceCommandOutput>;
    createInstance(args: CreateInstanceCommandInput, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
    createInstance(args: CreateInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
    /**
     * <p>Create an AppIntegration association with an Amazon Connect instance.</p>
     */
    createIntegrationAssociation(args: CreateIntegrationAssociationCommandInput, options?: __HttpHandlerOptions): Promise<CreateIntegrationAssociationCommandOutput>;
    createIntegrationAssociation(args: CreateIntegrationAssociationCommandInput, cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void): void;
    createIntegrationAssociation(args: CreateIntegrationAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Creates a new queue for the specified Amazon Connect instance.</p>
     */
    createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
    createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    createQueue(args: CreateQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Creates a quick connect for the specified Amazon Connect instance.</p>
     */
    createQuickConnect(args: CreateQuickConnectCommandInput, options?: __HttpHandlerOptions): Promise<CreateQuickConnectCommandOutput>;
    createQuickConnect(args: CreateQuickConnectCommandInput, cb: (err: any, data?: CreateQuickConnectCommandOutput) => void): void;
    createQuickConnect(args: CreateQuickConnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateQuickConnectCommandOutput) => void): void;
    /**
     * <p>Creates a new routing profile.</p>
     */
    createRoutingProfile(args: CreateRoutingProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoutingProfileCommandOutput>;
    createRoutingProfile(args: CreateRoutingProfileCommandInput, cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void): void;
    createRoutingProfile(args: CreateRoutingProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void): void;
    /**
     * <p>Creates a use case for an AppIntegration association.</p>
     */
    createUseCase(args: CreateUseCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateUseCaseCommandOutput>;
    createUseCase(args: CreateUseCaseCommandInput, cb: (err: any, data?: CreateUseCaseCommandOutput) => void): void;
    createUseCase(args: CreateUseCaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUseCaseCommandOutput) => void): void;
    /**
     * <p>Creates a user account for the specified Amazon Connect instance.</p>
     *          <p>For information about how to create user accounts using the Amazon Connect console, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html">Add Users</a> in
     *    the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Creates a new user hierarchy group.</p>
     */
    createUserHierarchyGroup(args: CreateUserHierarchyGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserHierarchyGroupCommandOutput>;
    createUserHierarchyGroup(args: CreateUserHierarchyGroupCommandInput, cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void): void;
    createUserHierarchyGroup(args: CreateUserHierarchyGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Deletes the Amazon Connect instance.</p>
     *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
     * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
     * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
     */
    deleteInstance(args: DeleteInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceCommandOutput>;
    deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    deleteInstance(args: DeleteInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes an AppIntegration association from an Amazon Connect instance. The association must not have
     *    any use cases associated with it.</p>
     */
    deleteIntegrationAssociation(args: DeleteIntegrationAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIntegrationAssociationCommandOutput>;
    deleteIntegrationAssociation(args: DeleteIntegrationAssociationCommandInput, cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void): void;
    deleteIntegrationAssociation(args: DeleteIntegrationAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Deletes a quick connect.</p>
     */
    deleteQuickConnect(args: DeleteQuickConnectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQuickConnectCommandOutput>;
    deleteQuickConnect(args: DeleteQuickConnectCommandInput, cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void): void;
    deleteQuickConnect(args: DeleteQuickConnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void): void;
    /**
     * <p>Deletes a use case from an AppIntegration association.</p>
     */
    deleteUseCase(args: DeleteUseCaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUseCaseCommandOutput>;
    deleteUseCase(args: DeleteUseCaseCommandInput, cb: (err: any, data?: DeleteUseCaseCommandOutput) => void): void;
    deleteUseCase(args: DeleteUseCaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUseCaseCommandOutput) => void): void;
    /**
     * <p>Deletes a user account from the specified Amazon Connect instance.</p>
     *          <p>For information about what happens to a user's data when their account is deleted, see
     *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-users.html">Delete Users from
     *     Your Amazon Connect Instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have
     *    any active child groups.</p>
     */
    deleteUserHierarchyGroup(args: DeleteUserHierarchyGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserHierarchyGroupCommandOutput>;
    deleteUserHierarchyGroup(args: DeleteUserHierarchyGroupCommandInput, cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void): void;
    deleteUserHierarchyGroup(args: DeleteUserHierarchyGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void): void;
    /**
     * <p>Describes the specified contact flow.</p>
     *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
     *    Flow language</a>.</p>
     */
    describeContactFlow(args: DescribeContactFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContactFlowCommandOutput>;
    describeContactFlow(args: DescribeContactFlowCommandInput, cb: (err: any, data?: DescribeContactFlowCommandOutput) => void): void;
    describeContactFlow(args: DescribeContactFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContactFlowCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Describes the hours of operation.</p>
     */
    describeHoursOfOperation(args: DescribeHoursOfOperationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHoursOfOperationCommandOutput>;
    describeHoursOfOperation(args: DescribeHoursOfOperationCommandInput, cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void): void;
    describeHoursOfOperation(args: DescribeHoursOfOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns the current state of the specified instance identifier. It tracks the instance while
     *    it is being created and returns an error status, if applicable. </p>
     *          <p>If an instance is not created successfully, the instance status reason field returns details
     *    relevant to the reason. The instance in a failed state is returned only for 24 hours after the
     *    CreateInstance API was invoked.</p>
     */
    describeInstance(args: DescribeInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceCommandOutput>;
    describeInstance(args: DescribeInstanceCommandInput, cb: (err: any, data?: DescribeInstanceCommandOutput) => void): void;
    describeInstance(args: DescribeInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Describes the specified instance attribute.</p>
     */
    describeInstanceAttribute(args: DescribeInstanceAttributeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceAttributeCommandOutput>;
    describeInstanceAttribute(args: DescribeInstanceAttributeCommandInput, cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void): void;
    describeInstanceAttribute(args: DescribeInstanceAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Retrieves the current storage configurations for the specified resource type, association
     *    ID, and instance ID.</p>
     */
    describeInstanceStorageConfig(args: DescribeInstanceStorageConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceStorageConfigCommandOutput>;
    describeInstanceStorageConfig(args: DescribeInstanceStorageConfigCommandInput, cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void): void;
    describeInstanceStorageConfig(args: DescribeInstanceStorageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Describes the specified queue.</p>
     */
    describeQueue(args: DescribeQueueCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQueueCommandOutput>;
    describeQueue(args: DescribeQueueCommandInput, cb: (err: any, data?: DescribeQueueCommandOutput) => void): void;
    describeQueue(args: DescribeQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeQueueCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Describes the quick connect.</p>
     */
    describeQuickConnect(args: DescribeQuickConnectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQuickConnectCommandOutput>;
    describeQuickConnect(args: DescribeQuickConnectCommandInput, cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void): void;
    describeQuickConnect(args: DescribeQuickConnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void): void;
    /**
     * <p>Describes the specified routing profile.</p>
     */
    describeRoutingProfile(args: DescribeRoutingProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRoutingProfileCommandOutput>;
    describeRoutingProfile(args: DescribeRoutingProfileCommandInput, cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void): void;
    describeRoutingProfile(args: DescribeRoutingProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void): void;
    /**
     * <p>Describes the specified user account. You can find the instance ID in the console (it’s the
     *    final part of the ARN). The console does not display the user IDs. Instead, list the users and
     *    note the IDs provided in the output.</p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Describes the specified hierarchy group.</p>
     */
    describeUserHierarchyGroup(args: DescribeUserHierarchyGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserHierarchyGroupCommandOutput>;
    describeUserHierarchyGroup(args: DescribeUserHierarchyGroupCommandInput, cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void): void;
    describeUserHierarchyGroup(args: DescribeUserHierarchyGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void): void;
    /**
     * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
     */
    describeUserHierarchyStructure(args: DescribeUserHierarchyStructureCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserHierarchyStructureCommandOutput>;
    describeUserHierarchyStructure(args: DescribeUserHierarchyStructureCommandInput, cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void): void;
    describeUserHierarchyStructure(args: DescribeUserHierarchyStructureCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Revokes access to integrated applications from Amazon Connect.</p>
     */
    disassociateApprovedOrigin(args: DisassociateApprovedOriginCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateApprovedOriginCommandOutput>;
    disassociateApprovedOrigin(args: DisassociateApprovedOriginCommandInput, cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void): void;
    disassociateApprovedOrigin(args: DisassociateApprovedOriginCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Removes the storage type configurations for the specified resource type and association
     *    ID.</p>
     */
    disassociateInstanceStorageConfig(args: DisassociateInstanceStorageConfigCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateInstanceStorageConfigCommandOutput>;
    disassociateInstanceStorageConfig(args: DisassociateInstanceStorageConfigCommandInput, cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void): void;
    disassociateInstanceStorageConfig(args: DisassociateInstanceStorageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Remove the Lambda function from the dropdown options available in the relevant contact flow
     *    blocks.</p>
     */
    disassociateLambdaFunction(args: DisassociateLambdaFunctionCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateLambdaFunctionCommandOutput>;
    disassociateLambdaFunction(args: DisassociateLambdaFunctionCommandInput, cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void): void;
    disassociateLambdaFunction(args: DisassociateLambdaFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>
     */
    disassociateLexBot(args: DisassociateLexBotCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateLexBotCommandOutput>;
    disassociateLexBot(args: DisassociateLexBotCommandInput, cb: (err: any, data?: DisassociateLexBotCommandOutput) => void): void;
    disassociateLexBot(args: DisassociateLexBotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateLexBotCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Disassociates a set of quick connects from a queue.</p>
     */
    disassociateQueueQuickConnects(args: DisassociateQueueQuickConnectsCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateQueueQuickConnectsCommandOutput>;
    disassociateQueueQuickConnects(args: DisassociateQueueQuickConnectsCommandInput, cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void): void;
    disassociateQueueQuickConnects(args: DisassociateQueueQuickConnectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void): void;
    /**
     * <p>Disassociates a set of queues from a routing profile.</p>
     */
    disassociateRoutingProfileQueues(args: DisassociateRoutingProfileQueuesCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateRoutingProfileQueuesCommandOutput>;
    disassociateRoutingProfileQueues(args: DisassociateRoutingProfileQueuesCommandInput, cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void): void;
    disassociateRoutingProfileQueues(args: DisassociateRoutingProfileQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Deletes the specified security key.</p>
     */
    disassociateSecurityKey(args: DisassociateSecurityKeyCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateSecurityKeyCommandOutput>;
    disassociateSecurityKey(args: DisassociateSecurityKeyCommandInput, cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void): void;
    disassociateSecurityKey(args: DisassociateSecurityKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void): void;
    /**
     * <p>Retrieves the contact attributes for the specified contact.</p>
     */
    getContactAttributes(args: GetContactAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetContactAttributesCommandOutput>;
    getContactAttributes(args: GetContactAttributesCommandInput, cb: (err: any, data?: GetContactAttributesCommandOutput) => void): void;
    getContactAttributes(args: GetContactAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactAttributesCommandOutput) => void): void;
    /**
     * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
     *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
     *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    getCurrentMetricData(args: GetCurrentMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetCurrentMetricDataCommandOutput>;
    getCurrentMetricData(args: GetCurrentMetricDataCommandInput, cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void): void;
    getCurrentMetricData(args: GetCurrentMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void): void;
    /**
     * <p>Retrieves a token for federation.</p>
     *          <note>
     *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
     *     credentials, an error message similar to the following one appears: </p>
     *             <p>
     *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
     *      Amazon Connect</code>
     *             </p>
     *          </note>
     */
    getFederationToken(args: GetFederationTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetFederationTokenCommandOutput>;
    getFederationToken(args: GetFederationTokenCommandInput, cb: (err: any, data?: GetFederationTokenCommandOutput) => void): void;
    getFederationToken(args: GetFederationTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFederationTokenCommandOutput) => void): void;
    /**
     * <p>Gets historical metric data from the specified Amazon Connect instance.</p>
     *
     *          <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics
     *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    getMetricData(args: GetMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetricDataCommandOutput>;
    getMetricData(args: GetMetricDataCommandInput, cb: (err: any, data?: GetMetricDataCommandOutput) => void): void;
    getMetricData(args: GetMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMetricDataCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
     */
    listApprovedOrigins(args: ListApprovedOriginsCommandInput, options?: __HttpHandlerOptions): Promise<ListApprovedOriginsCommandOutput>;
    listApprovedOrigins(args: ListApprovedOriginsCommandInput, cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void): void;
    listApprovedOrigins(args: ListApprovedOriginsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void): void;
    /**
     * <p>Provides information about the contact flows for the specified Amazon Connect instance.</p>
     *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
     *    Flow language</a>.</p>
     *          <p>For more information about contact flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Contact Flows</a> in the
     *     <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listContactFlows(args: ListContactFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactFlowsCommandOutput>;
    listContactFlows(args: ListContactFlowsCommandInput, cb: (err: any, data?: ListContactFlowsCommandOutput) => void): void;
    listContactFlows(args: ListContactFlowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContactFlowsCommandOutput) => void): void;
    /**
     * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
     *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
     *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listHoursOfOperations(args: ListHoursOfOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListHoursOfOperationsCommandOutput>;
    listHoursOfOperations(args: ListHoursOfOperationsCommandInput, cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void): void;
    listHoursOfOperations(args: ListHoursOfOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns a paginated list of all attribute types for the given instance.</p>
     */
    listInstanceAttributes(args: ListInstanceAttributesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceAttributesCommandOutput>;
    listInstanceAttributes(args: ListInstanceAttributesCommandInput, cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void): void;
    listInstanceAttributes(args: ListInstanceAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Return a list of instances which are in active state, creation-in-progress state, and failed
     *    state. Instances that aren't successfully created (they are in a failed state) are returned only
     *    for 24 hours after the CreateInstance API was invoked.</p>
     */
    listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
    listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    listInstances(args: ListInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *
     *          <p>Returns a paginated list of storage configs for the identified instance and resource
     *    type.</p>
     */
    listInstanceStorageConfigs(args: ListInstanceStorageConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceStorageConfigsCommandOutput>;
    listInstanceStorageConfigs(args: ListInstanceStorageConfigsCommandInput, cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void): void;
    listInstanceStorageConfigs(args: ListInstanceStorageConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void): void;
    /**
     * <p>Provides summary information about the AppIntegration associations for the specified Amazon Connect
     *    instance.</p>
     */
    listIntegrationAssociations(args: ListIntegrationAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListIntegrationAssociationsCommandOutput>;
    listIntegrationAssociations(args: ListIntegrationAssociationsCommandInput, cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void): void;
    listIntegrationAssociations(args: ListIntegrationAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the
     *    relevant contact flow blocks.</p>
     */
    listLambdaFunctions(args: ListLambdaFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLambdaFunctionsCommandOutput>;
    listLambdaFunctions(args: ListLambdaFunctionsCommandInput, cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void): void;
    listLambdaFunctions(args: ListLambdaFunctionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns a paginated list of all the Amazon Lex bots currently associated with the
     *    instance.</p>
     */
    listLexBots(args: ListLexBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListLexBotsCommandOutput>;
    listLexBots(args: ListLexBotsCommandInput, cb: (err: any, data?: ListLexBotsCommandOutput) => void): void;
    listLexBots(args: ListLexBotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLexBotsCommandOutput) => void): void;
    /**
     * <p>Provides information about the phone numbers for the specified Amazon Connect instance. </p>
     *          <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your
     *     Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listPhoneNumbers(args: ListPhoneNumbersCommandInput, options?: __HttpHandlerOptions): Promise<ListPhoneNumbersCommandOutput>;
    listPhoneNumbers(args: ListPhoneNumbersCommandInput, cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void): void;
    listPhoneNumbers(args: ListPhoneNumbersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void): void;
    /**
     * <p>Provides information about the prompts for the specified Amazon Connect instance.</p>
     */
    listPrompts(args: ListPromptsCommandInput, options?: __HttpHandlerOptions): Promise<ListPromptsCommandOutput>;
    listPrompts(args: ListPromptsCommandInput, cb: (err: any, data?: ListPromptsCommandOutput) => void): void;
    listPrompts(args: ListPromptsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPromptsCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Lists the quick connects associated with a queue.</p>
     */
    listQueueQuickConnects(args: ListQueueQuickConnectsCommandInput, options?: __HttpHandlerOptions): Promise<ListQueueQuickConnectsCommandOutput>;
    listQueueQuickConnects(args: ListQueueQuickConnectsCommandInput, cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void): void;
    listQueueQuickConnects(args: ListQueueQuickConnectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void): void;
    /**
     * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
     *          <p>If you do not specify a <code>QueueTypes</code>
     *    parameter, both standard and agent queues are returned. This might cause an unexpected truncation
     *    of results if you have more than 1000 agents and you limit the number of results of the API call
     *    in code.</p>
     *          <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and
     *     Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
    listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    listQueues(args: ListQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Provides information about the quick connects for the specified Amazon Connect instance. </p>
     */
    listQuickConnects(args: ListQuickConnectsCommandInput, options?: __HttpHandlerOptions): Promise<ListQuickConnectsCommandOutput>;
    listQuickConnects(args: ListQuickConnectsCommandInput, cb: (err: any, data?: ListQuickConnectsCommandOutput) => void): void;
    listQuickConnects(args: ListQuickConnectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQuickConnectsCommandOutput) => void): void;
    /**
     * <p>Lists the queues associated with a routing profile.</p>
     */
    listRoutingProfileQueues(args: ListRoutingProfileQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoutingProfileQueuesCommandOutput>;
    listRoutingProfileQueues(args: ListRoutingProfileQueuesCommandInput, cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void): void;
    listRoutingProfileQueues(args: ListRoutingProfileQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void): void;
    /**
     * <p>Provides summary information about the routing profiles for the specified Amazon Connect
     *    instance.</p>
     *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
     *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listRoutingProfiles(args: ListRoutingProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoutingProfilesCommandOutput>;
    listRoutingProfiles(args: ListRoutingProfilesCommandInput, cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void): void;
    listRoutingProfiles(args: ListRoutingProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Returns a paginated list of all security keys associated with the instance.</p>
     */
    listSecurityKeys(args: ListSecurityKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityKeysCommandOutput>;
    listSecurityKeys(args: ListSecurityKeysCommandInput, cb: (err: any, data?: ListSecurityKeysCommandOutput) => void): void;
    listSecurityKeys(args: ListSecurityKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityKeysCommandOutput) => void): void;
    /**
     * <p>Provides summary information about the security profiles for the specified Amazon Connect
     *    instance.</p>
     *          <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
     *     <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityProfilesCommandOutput>;
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void): void;
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     *          <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based
     *     Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the use cases. </p>
     */
    listUseCases(args: ListUseCasesCommandInput, options?: __HttpHandlerOptions): Promise<ListUseCasesCommandOutput>;
    listUseCases(args: ListUseCasesCommandInput, cb: (err: any, data?: ListUseCasesCommandOutput) => void): void;
    listUseCases(args: ListUseCasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUseCasesCommandOutput) => void): void;
    /**
     * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
     *    instance.</p>
     *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
     *     <i>Amazon Connect Administrator Guide</i>.</p>
     */
    listUserHierarchyGroups(args: ListUserHierarchyGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserHierarchyGroupsCommandOutput>;
    listUserHierarchyGroups(args: ListUserHierarchyGroupsCommandInput, cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void): void;
    listUserHierarchyGroups(args: ListUserHierarchyGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void): void;
    /**
     * <p>Provides summary information about the users for the specified Amazon Connect instance.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>When a contact is being recorded, and the recording has been suspended using
     *    SuspendContactRecording, this API resumes recording the call.</p>
     *
     *          <p>Only voice recordings are supported at this time.</p>
     */
    resumeContactRecording(args: ResumeContactRecordingCommandInput, options?: __HttpHandlerOptions): Promise<ResumeContactRecordingCommandOutput>;
    resumeContactRecording(args: ResumeContactRecordingCommandInput, cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void): void;
    resumeContactRecording(args: ResumeContactRecordingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void): void;
    /**
     * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides
     *    a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
     *
     *          <p>When a new chat contact is successfully created, clients must subscribe to the participant’s
     *    connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
     *
     *          <p>A 429 error occurs in two situations:</p>
     *          <ul>
     *             <li>
     *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
     *      exception.</p>
     *             </li>
     *             <li>
     *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
     *       chats</a> is exceeded. Active chat throttling returns a
     *       <code>LimitExceededException</code>.</p>
     *             </li>
     *          </ul>
     *
     *          <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator
     *     Guide</i>.</p>
     */
    startChatContact(args: StartChatContactCommandInput, options?: __HttpHandlerOptions): Promise<StartChatContactCommandOutput>;
    startChatContact(args: StartChatContactCommandInput, cb: (err: any, data?: StartChatContactCommandOutput) => void): void;
    startChatContact(args: StartChatContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartChatContactCommandOutput) => void): void;
    /**
     * <p>Starts recording the contact when the agent joins the call. StartContactRecording is a
     *    one-time action. For example, if you use StopContactRecording to stop recording an ongoing call,
     *    you can't use StartContactRecording to restart it. For scenarios where the recording has started
     *    and you want to suspend and resume it, such as when collecting sensitive information (for
     *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
     *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
     *     behavior</a> block.</p>
     *          <p>Only voice recordings are supported at this time.</p>
     */
    startContactRecording(args: StartContactRecordingCommandInput, options?: __HttpHandlerOptions): Promise<StartContactRecordingCommandOutput>;
    startContactRecording(args: StartContactRecordingCommandInput, cb: (err: any, data?: StartContactRecordingCommandOutput) => void): void;
    startContactRecording(args: StartContactRecordingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartContactRecordingCommandOutput) => void): void;
    /**
     * <p>Places an outbound call to a contact, and then initiates the contact flow. It performs the
     *    actions in the contact flow that's specified (in <code>ContactFlowId</code>).</p>
     *
     *          <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If
     *    the contact flow places an outbound call to a contact, and then puts the contact in queue, the
     *    call is then routed to the agent, like any other inbound case.</p>
     *
     *          <p>There is a 60-second dialing timeout for this operation. If the call is not connected after
     *    60 seconds, it fails.</p>
     *          <note>
     *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
     *     mobile numbers, you must submit a service quota increase request. For more information, see
     *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
     *          </note>
     */
    startOutboundVoiceContact(args: StartOutboundVoiceContactCommandInput, options?: __HttpHandlerOptions): Promise<StartOutboundVoiceContactCommandOutput>;
    startOutboundVoiceContact(args: StartOutboundVoiceContactCommandInput, cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void): void;
    startOutboundVoiceContact(args: StartOutboundVoiceContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void): void;
    /**
     * <p>Initiates a contact flow to start a new task.</p>
     */
    startTaskContact(args: StartTaskContactCommandInput, options?: __HttpHandlerOptions): Promise<StartTaskContactCommandOutput>;
    startTaskContact(args: StartTaskContactCommandInput, cb: (err: any, data?: StartTaskContactCommandOutput) => void): void;
    startTaskContact(args: StartTaskContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTaskContactCommandOutput) => void): void;
    /**
     * <p>Ends the specified contact.</p>
     */
    stopContact(args: StopContactCommandInput, options?: __HttpHandlerOptions): Promise<StopContactCommandOutput>;
    stopContact(args: StopContactCommandInput, cb: (err: any, data?: StopContactCommandOutput) => void): void;
    stopContact(args: StopContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopContactCommandOutput) => void): void;
    /**
     * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
     *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
     *    StartContactRecording to restart it. For scenarios where the recording has started and you want
     *    to suspend it for sensitive information (for example, to collect a credit card number), and then
     *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
     *
     *          <p>Only voice recordings are supported at this time.</p>
     */
    stopContactRecording(args: StopContactRecordingCommandInput, options?: __HttpHandlerOptions): Promise<StopContactRecordingCommandOutput>;
    stopContactRecording(args: StopContactRecordingCommandInput, cb: (err: any, data?: StopContactRecordingCommandOutput) => void): void;
    stopContactRecording(args: StopContactRecordingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopContactRecordingCommandOutput) => void): void;
    /**
     * <p>When a contact is being recorded, this API suspends recording the call. For example, you
     *    might suspend the call recording while collecting sensitive information, such as a credit card
     *    number. Then use ResumeContactRecording to restart recording. </p>
     *          <p>The period of time that the recording is suspended is filled with silence in the final
     *    recording. </p>
     *          <p>Only voice recordings are supported at this time.</p>
     */
    suspendContactRecording(args: SuspendContactRecordingCommandInput, options?: __HttpHandlerOptions): Promise<SuspendContactRecordingCommandOutput>;
    suspendContactRecording(args: SuspendContactRecordingCommandInput, cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void): void;
    suspendContactRecording(args: SuspendContactRecordingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource.</p>
     *          <p>The supported resource types are users, routing profiles, queues, quick connects, and
     *    contact flows.</p>
     *          <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based
     *     Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates
     *    user-defined contact attributes
     *    associated with the specified contact.</p>
     *          <p>You can create or update user-defined attributes for both ongoing and completed contacts.
     *    For example, while the call is active, you can update the customer's name or the reason the
     *    customer called. You can add notes about steps that the agent took during the call that display
     *    to the next agent that takes the call. You can also update attributes for a contact using data
     *    from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls
     *    for additional analysis, such as legal review or to identify abusive callers.</p>
     *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For
     *    information about CTR retention and the maximum size of the CTR attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature
     *     specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
     *
     *          <p>
     *             <b>Important:</b> You cannot use the operation to update
     *    attributes for contacts that occurred prior to the release of the API, which was September 12,
     *    2018. You can update attributes only for contacts that started after the release of the API. If
     *    you attempt to update attributes for a contact that occurred prior to the release of the API, a
     *    400 error is returned. This applies also to queued callbacks that were initiated prior to the
     *    release of the API but are still active in your instance.</p>
     */
    updateContactAttributes(args: UpdateContactAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactAttributesCommandOutput>;
    updateContactAttributes(args: UpdateContactAttributesCommandInput, cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void): void;
    updateContactAttributes(args: UpdateContactAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void): void;
    /**
     * <p>Updates the specified contact flow.</p>
     *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
     *    Flow language</a>.</p>
     */
    updateContactFlowContent(args: UpdateContactFlowContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactFlowContentCommandOutput>;
    updateContactFlowContent(args: UpdateContactFlowContentCommandInput, cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void): void;
    updateContactFlowContent(args: UpdateContactFlowContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void): void;
    /**
     * <p>The name of the contact flow.</p>
     *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
     *    Flow language</a>.</p>
     */
    updateContactFlowName(args: UpdateContactFlowNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactFlowNameCommandOutput>;
    updateContactFlowName(args: UpdateContactFlowNameCommandInput, cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void): void;
    updateContactFlowName(args: UpdateContactFlowNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the value for the specified attribute type.</p>
     */
    updateInstanceAttribute(args: UpdateInstanceAttributeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceAttributeCommandOutput>;
    updateInstanceAttribute(args: UpdateInstanceAttributeCommandInput, cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void): void;
    updateInstanceAttribute(args: UpdateInstanceAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
     */
    updateInstanceStorageConfig(args: UpdateInstanceStorageConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceStorageConfigCommandOutput>;
    updateInstanceStorageConfig(args: UpdateInstanceStorageConfigCommandInput, cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void): void;
    updateInstanceStorageConfig(args: UpdateInstanceStorageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the hours of operation for the specified queue.</p>
     */
    updateQueueHoursOfOperation(args: UpdateQueueHoursOfOperationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueHoursOfOperationCommandOutput>;
    updateQueueHoursOfOperation(args: UpdateQueueHoursOfOperationCommandInput, cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void): void;
    updateQueueHoursOfOperation(args: UpdateQueueHoursOfOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the maximum number of contacts allowed in a queue before it is considered
     *    full.</p>
     */
    updateQueueMaxContacts(args: UpdateQueueMaxContactsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueMaxContactsCommandOutput>;
    updateQueueMaxContacts(args: UpdateQueueMaxContactsCommandInput, cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void): void;
    updateQueueMaxContacts(args: UpdateQueueMaxContactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the name and description of a queue. At least <code>Name</code> or <code>Description</code> must be provided.</p>
     */
    updateQueueName(args: UpdateQueueNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueNameCommandOutput>;
    updateQueueName(args: UpdateQueueNameCommandInput, cb: (err: any, data?: UpdateQueueNameCommandOutput) => void): void;
    updateQueueName(args: UpdateQueueNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueNameCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
     *    queue.</p>
     */
    updateQueueOutboundCallerConfig(args: UpdateQueueOutboundCallerConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueOutboundCallerConfigCommandOutput>;
    updateQueueOutboundCallerConfig(args: UpdateQueueOutboundCallerConfigCommandInput, cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void): void;
    updateQueueOutboundCallerConfig(args: UpdateQueueOutboundCallerConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the status of the queue.</p>
     */
    updateQueueStatus(args: UpdateQueueStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueStatusCommandOutput>;
    updateQueueStatus(args: UpdateQueueStatusCommandInput, cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void): void;
    updateQueueStatus(args: UpdateQueueStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the configuration settings for the specified quick connect.</p>
     */
    updateQuickConnectConfig(args: UpdateQuickConnectConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQuickConnectConfigCommandOutput>;
    updateQuickConnectConfig(args: UpdateQuickConnectConfigCommandInput, cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void): void;
    updateQuickConnectConfig(args: UpdateQuickConnectConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void): void;
    /**
     * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
     *          <p>Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
     */
    updateQuickConnectName(args: UpdateQuickConnectNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQuickConnectNameCommandOutput>;
    updateQuickConnectName(args: UpdateQuickConnectNameCommandInput, cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void): void;
    updateQuickConnectName(args: UpdateQuickConnectNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void): void;
    /**
     * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing
     *    profile.</p>
     */
    updateRoutingProfileConcurrency(args: UpdateRoutingProfileConcurrencyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoutingProfileConcurrencyCommandOutput>;
    updateRoutingProfileConcurrency(args: UpdateRoutingProfileConcurrencyCommandInput, cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void): void;
    updateRoutingProfileConcurrency(args: UpdateRoutingProfileConcurrencyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void): void;
    /**
     * <p>Updates the default outbound queue of a routing profile.</p>
     */
    updateRoutingProfileDefaultOutboundQueue(args: UpdateRoutingProfileDefaultOutboundQueueCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput>;
    updateRoutingProfileDefaultOutboundQueue(args: UpdateRoutingProfileDefaultOutboundQueueCommandInput, cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void): void;
    updateRoutingProfileDefaultOutboundQueue(args: UpdateRoutingProfileDefaultOutboundQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void): void;
    /**
     * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format.
     *    At least <code>Name</code> or <code>Description</code> must be provided.</p>
     */
    updateRoutingProfileName(args: UpdateRoutingProfileNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoutingProfileNameCommandOutput>;
    updateRoutingProfileName(args: UpdateRoutingProfileNameCommandInput, cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void): void;
    updateRoutingProfileName(args: UpdateRoutingProfileNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void): void;
    /**
     * <p>Updates the properties associated with a set of queues for a routing profile.</p>
     */
    updateRoutingProfileQueues(args: UpdateRoutingProfileQueuesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoutingProfileQueuesCommandOutput>;
    updateRoutingProfileQueues(args: UpdateRoutingProfileQueuesCommandInput, cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void): void;
    updateRoutingProfileQueues(args: UpdateRoutingProfileQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void): void;
    /**
     * <p>Assigns the specified hierarchy group to the specified user.</p>
     */
    updateUserHierarchy(args: UpdateUserHierarchyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserHierarchyCommandOutput>;
    updateUserHierarchy(args: UpdateUserHierarchyCommandInput, cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void): void;
    updateUserHierarchy(args: UpdateUserHierarchyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void): void;
    /**
     * <p>Updates the name of the user hierarchy group. </p>
     */
    updateUserHierarchyGroupName(args: UpdateUserHierarchyGroupNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserHierarchyGroupNameCommandOutput>;
    updateUserHierarchyGroupName(args: UpdateUserHierarchyGroupNameCommandInput, cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void): void;
    updateUserHierarchyGroupName(args: UpdateUserHierarchyGroupNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void): void;
    /**
     * <p>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</p>
     */
    updateUserHierarchyStructure(args: UpdateUserHierarchyStructureCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserHierarchyStructureCommandOutput>;
    updateUserHierarchyStructure(args: UpdateUserHierarchyStructureCommandInput, cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void): void;
    updateUserHierarchyStructure(args: UpdateUserHierarchyStructureCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void): void;
    /**
     * <p>Updates the identity information for the specified user.</p>
     *          <important>
     *             <p>We strongly recommend limiting who has the ability to invoke
     *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
     *     of other users by changing their email address. This poses a security risk to your organization.
     *     They can change the email address of a user to the attacker's email address, and then reset the
     *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
     *      Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     *          </important>
     */
    updateUserIdentityInfo(args: UpdateUserIdentityInfoCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserIdentityInfoCommandOutput>;
    updateUserIdentityInfo(args: UpdateUserIdentityInfoCommandInput, cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void): void;
    updateUserIdentityInfo(args: UpdateUserIdentityInfoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void): void;
    /**
     * <p>Updates the phone configuration settings for the specified user.</p>
     */
    updateUserPhoneConfig(args: UpdateUserPhoneConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserPhoneConfigCommandOutput>;
    updateUserPhoneConfig(args: UpdateUserPhoneConfigCommandInput, cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void): void;
    updateUserPhoneConfig(args: UpdateUserPhoneConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void): void;
    /**
     * <p>Assigns the specified routing profile to the specified user.</p>
     */
    updateUserRoutingProfile(args: UpdateUserRoutingProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserRoutingProfileCommandOutput>;
    updateUserRoutingProfile(args: UpdateUserRoutingProfileCommandInput, cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void): void;
    updateUserRoutingProfile(args: UpdateUserRoutingProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void): void;
    /**
     * <p>Assigns the specified security profiles to the specified user.</p>
     */
    updateUserSecurityProfiles(args: UpdateUserSecurityProfilesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserSecurityProfilesCommandOutput>;
    updateUserSecurityProfiles(args: UpdateUserSecurityProfilesCommandInput, cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void): void;
    updateUserSecurityProfiles(args: UpdateUserSecurityProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void): void;
}
