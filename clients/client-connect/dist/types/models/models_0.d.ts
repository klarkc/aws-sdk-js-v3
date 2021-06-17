import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AssociateApprovedOriginRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The domain to add to your allow list.</p>
     */
    Origin: string | undefined;
}
export declare namespace AssociateApprovedOriginRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateApprovedOriginRequest) => any;
}
/**
 * <p>Request processing failed because of an error or failure with the service.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
    name: "InternalServiceException";
    $fault: "server";
    /**
     * <p>The message.</p>
     */
    Message?: string;
}
export declare namespace InternalServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServiceException) => any;
}
/**
 * <p>One or more of the specified parameters are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    /**
     * <p>The message about the parameters.</p>
     */
    Message?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    /**
     * <p>The message about the request.</p>
     */
    Message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>A resource already has that name.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
    name: "ResourceConflictException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceConflictException) => any;
}
/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The message about the resource.</p>
     */
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The service quota has been exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export declare enum InstanceStorageResourceType {
    AGENT_EVENTS = "AGENT_EVENTS",
    CALL_RECORDINGS = "CALL_RECORDINGS",
    CHAT_TRANSCRIPTS = "CHAT_TRANSCRIPTS",
    CONTACT_TRACE_RECORDS = "CONTACT_TRACE_RECORDS",
    MEDIA_STREAMS = "MEDIA_STREAMS",
    SCHEDULED_REPORTS = "SCHEDULED_REPORTS"
}
/**
 * <p>Configuration information of a Kinesis Data Firehose delivery stream.</p>
 */
export interface KinesisFirehoseConfig {
    /**
     * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
     */
    FirehoseArn: string | undefined;
}
export declare namespace KinesisFirehoseConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KinesisFirehoseConfig) => any;
}
/**
 * <p>Configuration information of a Kinesis data stream.</p>
 */
export interface KinesisStreamConfig {
    /**
     * <p>The Amazon Resource Name (ARN) of the data stream.</p>
     */
    StreamArn: string | undefined;
}
export declare namespace KinesisStreamConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KinesisStreamConfig) => any;
}
export declare enum EncryptionType {
    KMS = "KMS"
}
/**
 * <p>The encryption configuration.</p>
 */
export interface EncryptionConfig {
    /**
     * <p>The type of encryption.</p>
     */
    EncryptionType: EncryptionType | string | undefined;
    /**
     * <p>The identifier of the encryption key.</p>
     */
    KeyId: string | undefined;
}
export declare namespace EncryptionConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionConfig) => any;
}
/**
 * <p>Configuration information of a Kinesis video stream.</p>
 */
export interface KinesisVideoStreamConfig {
    /**
     * <p>The prefix of the video stream.</p>
     */
    Prefix: string | undefined;
    /**
     * <p>The number of hours data is retained in the stream. Kinesis Video Streams retains the data
     *    in a data store that is associated with the stream.</p>
     *          <p>The default value is 0, indicating that the stream does not persist data.</p>
     */
    RetentionPeriodHours: number | undefined;
    /**
     * <p>The encryption configuration.</p>
     */
    EncryptionConfig: EncryptionConfig | undefined;
}
export declare namespace KinesisVideoStreamConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KinesisVideoStreamConfig) => any;
}
/**
 * <p>Information about the Amazon Simple Storage Service (Amazon S3) storage type.</p>
 */
export interface S3Config {
    /**
     * <p>The S3 bucket name.</p>
     */
    BucketName: string | undefined;
    /**
     * <p>The S3 bucket prefix.</p>
     */
    BucketPrefix: string | undefined;
    /**
     * <p>The Amazon S3 encryption configuration.</p>
     */
    EncryptionConfig?: EncryptionConfig;
}
export declare namespace S3Config {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Config) => any;
}
export declare enum StorageType {
    KINESIS_FIREHOSE = "KINESIS_FIREHOSE",
    KINESIS_STREAM = "KINESIS_STREAM",
    KINESIS_VIDEO_STREAM = "KINESIS_VIDEO_STREAM",
    S3 = "S3"
}
/**
 * <p>The storage configuration for the instance.</p>
 */
export interface InstanceStorageConfig {
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId?: string;
    /**
     * <p>A valid storage type.</p>
     */
    StorageType: StorageType | string | undefined;
    /**
     * <p>The S3 bucket
     *    configuration.</p>
     */
    S3Config?: S3Config;
    /**
     * <p>The configuration of the Kinesis video stream.</p>
     */
    KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
    /**
     * <p>The configuration of the Kinesis data stream.</p>
     */
    KinesisStreamConfig?: KinesisStreamConfig;
    /**
     * <p>The configuration of the Kinesis Firehose delivery stream.</p>
     */
    KinesisFirehoseConfig?: KinesisFirehoseConfig;
}
export declare namespace InstanceStorageConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStorageConfig) => any;
}
export interface AssociateInstanceStorageConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>A valid resource type.</p>
     */
    ResourceType: InstanceStorageResourceType | string | undefined;
    /**
     * <p>A valid storage type.</p>
     */
    StorageConfig: InstanceStorageConfig | undefined;
}
export declare namespace AssociateInstanceStorageConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateInstanceStorageConfigRequest) => any;
}
export interface AssociateInstanceStorageConfigResponse {
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId?: string;
}
export declare namespace AssociateInstanceStorageConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateInstanceStorageConfigResponse) => any;
}
export interface AssociateLambdaFunctionRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is
     *    140.</p>
     */
    FunctionArn: string | undefined;
}
export declare namespace AssociateLambdaFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateLambdaFunctionRequest) => any;
}
/**
 * <p>Configuration information of an Amazon Lex bot.</p>
 */
export interface LexBot {
    /**
     * <p>The name of the Amazon Lex bot.</p>
     */
    Name?: string;
    /**
     * <p>The Region that the Amazon Lex bot was created in.</p>
     */
    LexRegion?: string;
}
export declare namespace LexBot {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LexBot) => any;
}
export interface AssociateLexBotRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The Amazon Lex box to associate with the instance.</p>
     */
    LexBot: LexBot | undefined;
}
export declare namespace AssociateLexBotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateLexBotRequest) => any;
}
export interface AssociateQueueQuickConnectsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The quick connects to associate with this queue.</p>
     */
    QuickConnectIds: string[] | undefined;
}
export declare namespace AssociateQueueQuickConnectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateQueueQuickConnectsRequest) => any;
}
/**
 * <p>The allowed limit for the resource has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    /**
     * <p>The message about the limit.</p>
     */
    Message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
export declare enum Channel {
    CHAT = "CHAT",
    TASK = "TASK",
    VOICE = "VOICE"
}
/**
 * <p>Contains the channel and queue identifier for a routing profile.</p>
 */
export interface RoutingProfileQueueReference {
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
     *    profile.</p>
     */
    Channel: Channel | string | undefined;
}
export declare namespace RoutingProfileQueueReference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoutingProfileQueueReference) => any;
}
/**
 * <p>Contains information about the queue and channel for which priority and delay can be
 *    set.</p>
 */
export interface RoutingProfileQueueConfig {
    /**
     * <p>Contains information about a queue resource.</p>
     */
    QueueReference: RoutingProfileQueueReference | undefined;
    /**
     * <p>The order in which contacts are to be handled for the queue. For more information, see
     *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
     *     delay</a>.</p>
     */
    Priority: number | undefined;
    /**
     * <p>The delay, in seconds, a contact should be in the queue before they are routed to an
     *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
     *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    Delay: number | undefined;
}
export declare namespace RoutingProfileQueueConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoutingProfileQueueConfig) => any;
}
export interface AssociateRoutingProfileQueuesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The queues to associate with this routing profile.</p>
     */
    QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}
export declare namespace AssociateRoutingProfileQueuesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRoutingProfileQueuesRequest) => any;
}
export interface AssociateSecurityKeyRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>A valid security key in PEM format.</p>
     */
    Key: string | undefined;
}
export declare namespace AssociateSecurityKeyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateSecurityKeyRequest) => any;
}
export interface AssociateSecurityKeyResponse {
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId?: string;
}
export declare namespace AssociateSecurityKeyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateSecurityKeyResponse) => any;
}
export declare enum ContactFlowType {
    AGENT_HOLD = "AGENT_HOLD",
    AGENT_TRANSFER = "AGENT_TRANSFER",
    AGENT_WHISPER = "AGENT_WHISPER",
    CONTACT_FLOW = "CONTACT_FLOW",
    CUSTOMER_HOLD = "CUSTOMER_HOLD",
    CUSTOMER_QUEUE = "CUSTOMER_QUEUE",
    CUSTOMER_WHISPER = "CUSTOMER_WHISPER",
    OUTBOUND_WHISPER = "OUTBOUND_WHISPER",
    QUEUE_TRANSFER = "QUEUE_TRANSFER"
}
export interface CreateContactFlowRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The name of the contact flow.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of the contact flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a Contact Flow Type</a> in the <i>Amazon Connect Administrator
     *    Guide</i>.</p>
     */
    Type: ContactFlowType | string | undefined;
    /**
     * <p>The description of the contact flow. </p>
     */
    Description?: string;
    /**
     * <p>The content of the contact flow. </p>
     */
    Content: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateContactFlowRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactFlowRequest) => any;
}
export interface CreateContactFlowResponse {
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
     */
    ContactFlowArn?: string;
}
export declare namespace CreateContactFlowResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactFlowResponse) => any;
}
/**
 * <p>A resource with the specified name already exists.</p>
 */
export interface DuplicateResourceException extends __SmithyException, $MetadataBearer {
    name: "DuplicateResourceException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicateResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicateResourceException) => any;
}
/**
 * <p>Information about a problem detail.</p>
 */
export interface ProblemDetail {
    /**
     * <p>The problem detail's message.</p>
     */
    message?: string;
}
export declare namespace ProblemDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProblemDetail) => any;
}
/**
 * <p>The contact flow is not valid.</p>
 */
export interface InvalidContactFlowException extends __SmithyException, $MetadataBearer {
    name: "InvalidContactFlowException";
    $fault: "client";
    /**
     * <p>The problems with the contact flow. Please fix before trying again.</p>
     */
    problems?: ProblemDetail[];
}
export declare namespace InvalidContactFlowException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidContactFlowException) => any;
}
export declare enum DirectoryType {
    CONNECT_MANAGED = "CONNECT_MANAGED",
    EXISTING_DIRECTORY = "EXISTING_DIRECTORY",
    SAML = "SAML"
}
export interface CreateInstanceRequest {
    /**
     * <p>The idempotency token.</p>
     */
    ClientToken?: string;
    /**
     * <p>The type of identity management for your Amazon Connect users.</p>
     */
    IdentityManagementType: DirectoryType | string | undefined;
    /**
     * <p>The name for your instance.</p>
     */
    InstanceAlias?: string;
    /**
     * <p>The identifier for the directory.</p>
     */
    DirectoryId?: string;
    /**
     * <p>Your contact center handles incoming contacts.</p>
     */
    InboundCallsEnabled: boolean | undefined;
    /**
     * <p>Your contact center allows outbound calls.</p>
     */
    OutboundCallsEnabled: boolean | undefined;
}
export declare namespace CreateInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInstanceRequest) => any;
}
export interface CreateInstanceResponse {
    /**
     * <p>The identifier for the instance.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the instance.</p>
     */
    Arn?: string;
}
export declare namespace CreateInstanceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInstanceResponse) => any;
}
export declare enum IntegrationType {
    EVENT = "EVENT"
}
export declare enum SourceType {
    SALESFORCE = "SALESFORCE",
    ZENDESK = "ZENDESK"
}
export interface CreateIntegrationAssociationRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of information to be ingested.</p>
     */
    IntegrationType: IntegrationType | string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the integration.</p>
     */
    IntegrationArn: string | undefined;
    /**
     * <p>The URL for the external application.</p>
     */
    SourceApplicationUrl: string | undefined;
    /**
     * <p>The name of the external application.</p>
     */
    SourceApplicationName: string | undefined;
    /**
     * <p>The type of the data source.</p>
     */
    SourceType: SourceType | string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateIntegrationAssociationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIntegrationAssociationRequest) => any;
}
export interface CreateIntegrationAssociationResponse {
    /**
     * <p>The identifier for the association.</p>
     */
    IntegrationAssociationId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the association.</p>
     */
    IntegrationAssociationArn?: string;
}
export declare namespace CreateIntegrationAssociationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIntegrationAssociationResponse) => any;
}
/**
 * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
 */
export interface OutboundCallerConfig {
    /**
     * <p>The caller ID name.</p>
     */
    OutboundCallerIdName?: string;
    /**
     * <p>The caller ID number.</p>
     */
    OutboundCallerIdNumberId?: string;
    /**
     * <p>The outbound whisper flow to be used during an outbound call.</p>
     */
    OutboundFlowId?: string;
}
export declare namespace OutboundCallerConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutboundCallerConfig) => any;
}
export interface CreateQueueRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The name of the queue.</p>
     */
    Name: string | undefined;
    /**
     * <p>The description of the queue.</p>
     */
    Description?: string;
    /**
     * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
     */
    OutboundCallerConfig?: OutboundCallerConfig;
    /**
     * <p>The identifier for the hours of operation.</p>
     */
    HoursOfOperationId: string | undefined;
    /**
     * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
     */
    MaxContacts?: number;
    /**
     * <p>The quick connects available to agents who are working the queue.</p>
     */
    QuickConnectIds?: string[];
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateQueueRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateQueueRequest) => any;
}
export interface CreateQueueResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the queue.</p>
     */
    QueueArn?: string;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId?: string;
}
export declare namespace CreateQueueResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateQueueResponse) => any;
}
/**
 * <p>Contains information about a phone number for a quick connect.</p>
 */
export interface PhoneNumberQuickConnectConfig {
    /**
     * <p>The phone number in E.164 format.</p>
     */
    PhoneNumber: string | undefined;
}
export declare namespace PhoneNumberQuickConnectConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PhoneNumberQuickConnectConfig) => any;
}
/**
 * <p>Contains information about a queue for a quick connect. The contact flow must be of type
 *    Transfer to Queue.</p>
 */
export interface QueueQuickConnectConfig {
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId: string | undefined;
}
export declare namespace QueueQuickConnectConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QueueQuickConnectConfig) => any;
}
export declare enum QuickConnectType {
    PHONE_NUMBER = "PHONE_NUMBER",
    QUEUE = "QUEUE",
    USER = "USER"
}
/**
 * <p>Contains information about the quick connect configuration settings for a user. The contact
 *    flow must be of type Transfer to Agent.</p>
 */
export interface UserQuickConnectConfig {
    /**
     * <p>The identifier of the user.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId: string | undefined;
}
export declare namespace UserQuickConnectConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserQuickConnectConfig) => any;
}
/**
 * <p>Contains configuration settings for a quick connect.</p>
 */
export interface QuickConnectConfig {
    /**
     * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
     *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). </p>
     */
    QuickConnectType: QuickConnectType | string | undefined;
    /**
     * <p>The user configuration. This is required only if QuickConnectType is USER.</p>
     */
    UserConfig?: UserQuickConnectConfig;
    /**
     * <p>The queue configuration. This is required only if QuickConnectType is QUEUE.</p>
     */
    QueueConfig?: QueueQuickConnectConfig;
    /**
     * <p>The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.</p>
     */
    PhoneConfig?: PhoneNumberQuickConnectConfig;
}
export declare namespace QuickConnectConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuickConnectConfig) => any;
}
export interface CreateQuickConnectRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The name of the quick connect.</p>
     */
    Name: string | undefined;
    /**
     * <p>The description of the quick connect.</p>
     */
    Description?: string;
    /**
     * <p>Configuration settings for the quick connect.</p>
     */
    QuickConnectConfig: QuickConnectConfig | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateQuickConnectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateQuickConnectRequest) => any;
}
export interface CreateQuickConnectResponse {
    /**
     * <p>The Amazon Resource Name (ARN) for the quick connect. </p>
     */
    QuickConnectARN?: string;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId?: string;
}
export declare namespace CreateQuickConnectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateQuickConnectResponse) => any;
}
/**
 * <p>Contains information about which channels are supported, and how many contacts an agent can
 *    have on a channel simultaneously.</p>
 */
export interface MediaConcurrency {
    /**
     * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
     */
    Channel: Channel | string | undefined;
    /**
     * <p>The number of contacts an agent can have on a channel simultaneously.</p>
     *          <p>Valid Range for <code>VOICE</code>: Minimum value of 1. Maximum value of 1.</p>
     *          <p>Valid Range for <code>CHAT</code>: Minimum value of 1. Maximum value of 5.</p>
     *          <p>Valid Range for <code>TASK</code>: Minimum value of 1. Maximum value of 10.</p>
     */
    Concurrency: number | undefined;
}
export declare namespace MediaConcurrency {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MediaConcurrency) => any;
}
export interface CreateRoutingProfileRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The name of the routing profile. Must not be more than 127 characters.</p>
     */
    Name: string | undefined;
    /**
     * <p>Description of the routing profile. Must not be more than 250 characters.</p>
     */
    Description: string | undefined;
    /**
     * <p>The default outbound queue for the routing profile.</p>
     */
    DefaultOutboundQueueId: string | undefined;
    /**
     * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can
     *    make only outbound calls.</p>
     */
    QueueConfigs?: RoutingProfileQueueConfig[];
    /**
     * <p>The channels that agents can handle in the Contact Control Panel (CCP) for this routing
     *    profile.</p>
     */
    MediaConcurrencies: MediaConcurrency[] | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateRoutingProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRoutingProfileRequest) => any;
}
export interface CreateRoutingProfileResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
     */
    RoutingProfileArn?: string;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId?: string;
}
export declare namespace CreateRoutingProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRoutingProfileResponse) => any;
}
export declare enum UseCaseType {
    RULES_EVALUATION = "RULES_EVALUATION"
}
export interface CreateUseCaseRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the AppIntegration association.</p>
     */
    IntegrationAssociationId: string | undefined;
    /**
     * <p>The type of use case to associate to the AppIntegration association. Each AppIntegration
     *    association can have only one of each use case type.</p>
     */
    UseCaseType: UseCaseType | string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateUseCaseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUseCaseRequest) => any;
}
export interface CreateUseCaseResponse {
    /**
     * <p>The identifier of the use case.</p>
     */
    UseCaseId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the use case.</p>
     */
    UseCaseArn?: string;
}
export declare namespace CreateUseCaseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUseCaseResponse) => any;
}
/**
 * <p>Contains information about the identity of a user.</p>
 */
export interface UserIdentityInfo {
    /**
     * <p>The first name. This is required if you are using Amazon Connect or SAML for identity
     *    management.</p>
     */
    FirstName?: string;
    /**
     * <p>The last name. This is required if you are using Amazon Connect or SAML for identity
     *    management.</p>
     */
    LastName?: string;
    /**
     * <p>The email address. If you are using SAML for identity management and include this parameter,
     *    an error is returned.</p>
     */
    Email?: string;
}
export declare namespace UserIdentityInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserIdentityInfo) => any;
}
export declare enum PhoneType {
    DESK_PHONE = "DESK_PHONE",
    SOFT_PHONE = "SOFT_PHONE"
}
/**
 * <p>Contains information about the phone configuration settings for a user.</p>
 */
export interface UserPhoneConfig {
    /**
     * <p>The phone type.</p>
     */
    PhoneType: PhoneType | string | undefined;
    /**
     * <p>The Auto accept setting.</p>
     */
    AutoAccept?: boolean;
    /**
     * <p>The After Call Work (ACW) timeout setting, in seconds.</p>
     */
    AfterContactWorkTimeLimit?: number;
    /**
     * <p>The phone number for the user's desk phone.</p>
     */
    DeskPhoneNumber?: string;
}
export declare namespace UserPhoneConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserPhoneConfig) => any;
}
export interface CreateUserRequest {
    /**
     * <p>The user name for the account. For instances not using SAML for identity management, the
     *    user name can include up to 20 characters. If you are using SAML for identity management, the
     *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
     */
    Username: string | undefined;
    /**
     * <p>The password for the user account. A password is required if you are using Amazon Connect for
     *    identity management. Otherwise, it is an error to include a password.</p>
     */
    Password?: string;
    /**
     * <p>The information about the identity of the user.</p>
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * <p>The phone settings for the user.</p>
     */
    PhoneConfig: UserPhoneConfig | undefined;
    /**
     * <p>The identifier of the user account in the directory used for identity management. If Amazon Connect
     *    cannot access the directory, you can specify this identifier to authenticate users. If you
     *    include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity
     *    information is used to authenticate users from your directory.</p>
     *          <p>This parameter is required if you are using an existing directory for identity management in
     *    Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for
     *    identity management and include this parameter, an error is returned.</p>
     */
    DirectoryUserId?: string;
    /**
     * <p>The identifier of the security profile for the user.</p>
     */
    SecurityProfileIds: string[] | undefined;
    /**
     * <p>The identifier of the routing profile for the user.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The identifier of the hierarchy group for the user.</p>
     */
    HierarchyGroupId?: string;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserRequest) => any;
}
export interface CreateUserResponse {
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user account.</p>
     */
    UserArn?: string;
}
export declare namespace CreateUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserResponse) => any;
}
export interface CreateUserHierarchyGroupRequest {
    /**
     * <p>The name of the user hierarchy group. Must not be more than 100 characters.</p>
     */
    Name: string | undefined;
    /**
     * <p>The identifier for the parent hierarchy group. The user hierarchy is created at level one if
     *    the parent group ID is null.</p>
     */
    ParentGroupId?: string;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace CreateUserHierarchyGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserHierarchyGroupRequest) => any;
}
export interface CreateUserHierarchyGroupResponse {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    HierarchyGroupId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the hierarchy group. </p>
     */
    HierarchyGroupArn?: string;
}
export declare namespace CreateUserHierarchyGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserHierarchyGroupResponse) => any;
}
export interface DeleteInstanceRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DeleteInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInstanceRequest) => any;
}
export interface DeleteIntegrationAssociationRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the AppIntegration association.</p>
     */
    IntegrationAssociationId: string | undefined;
}
export declare namespace DeleteIntegrationAssociationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteIntegrationAssociationRequest) => any;
}
export interface DeleteQuickConnectRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId: string | undefined;
}
export declare namespace DeleteQuickConnectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteQuickConnectRequest) => any;
}
export interface DeleteUseCaseRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the AppIntegration association.</p>
     */
    IntegrationAssociationId: string | undefined;
    /**
     * <p>The identifier for the use case.</p>
     */
    UseCaseId: string | undefined;
}
export declare namespace DeleteUseCaseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUseCaseRequest) => any;
}
export interface DeleteUserRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the user.</p>
     */
    UserId: string | undefined;
}
export declare namespace DeleteUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserRequest) => any;
}
export interface DeleteUserHierarchyGroupRequest {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    HierarchyGroupId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DeleteUserHierarchyGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserHierarchyGroupRequest) => any;
}
export declare enum ResourceType {
    CONTACT = "CONTACT",
    CONTACT_FLOW = "CONTACT_FLOW",
    HIERARCHY_GROUP = "HIERARCHY_GROUP",
    HIERARCHY_LEVEL = "HIERARCHY_LEVEL",
    INSTANCE = "INSTANCE",
    PARTICIPANT = "PARTICIPANT",
    USER = "USER"
}
/**
 * <p>That resource is already in use. Please try another.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>The identifier for the resource.</p>
     */
    ResourceId?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
/**
 * <p>The contact flow has not been published.</p>
 */
export interface ContactFlowNotPublishedException extends __SmithyException, $MetadataBearer {
    name: "ContactFlowNotPublishedException";
    $fault: "client";
    Message?: string;
}
export declare namespace ContactFlowNotPublishedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactFlowNotPublishedException) => any;
}
export interface DescribeContactFlowRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId: string | undefined;
}
export declare namespace DescribeContactFlowRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeContactFlowRequest) => any;
}
/**
 * <p>Contains information about a contact flow.</p>
 */
export interface ContactFlow {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
     */
    Arn?: string;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    Id?: string;
    /**
     * <p>The name of the contact flow.</p>
     */
    Name?: string;
    /**
     * <p>The type of the contact flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a Contact Flow Type</a> in the <i>Amazon Connect Administrator
     *    Guide</i>.</p>
     */
    Type?: ContactFlowType | string;
    /**
     * <p>The description of the contact flow.</p>
     */
    Description?: string;
    /**
     * <p>The content of the contact flow.</p>
     */
    Content?: string;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ContactFlow {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactFlow) => any;
}
export interface DescribeContactFlowResponse {
    /**
     * <p>Information about the contact flow.</p>
     */
    ContactFlow?: ContactFlow;
}
export declare namespace DescribeContactFlowResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeContactFlowResponse) => any;
}
export interface DescribeHoursOfOperationRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the hours of operation.</p>
     */
    HoursOfOperationId: string | undefined;
}
export declare namespace DescribeHoursOfOperationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHoursOfOperationRequest) => any;
}
export declare enum HoursOfOperationDays {
    FRIDAY = "FRIDAY",
    MONDAY = "MONDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
    THURSDAY = "THURSDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY"
}
/**
 * <p>The start time or end time for an hours of operation.</p>
 */
export interface HoursOfOperationTimeSlice {
    /**
     * <p>The hours.</p>
     */
    Hours?: number;
    /**
     * <p>The minutes.</p>
     */
    Minutes?: number;
}
export declare namespace HoursOfOperationTimeSlice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HoursOfOperationTimeSlice) => any;
}
/**
 * <p>Contains information about the hours of operation.</p>
 */
export interface HoursOfOperationConfig {
    /**
     * <p>The day that the hours of operation applies to.</p>
     */
    Day?: HoursOfOperationDays | string;
    /**
     * <p>The start time that your contact center is open.</p>
     */
    StartTime?: HoursOfOperationTimeSlice;
    /**
     * <p>The end time that your contact center is closes.</p>
     */
    EndTime?: HoursOfOperationTimeSlice;
}
export declare namespace HoursOfOperationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HoursOfOperationConfig) => any;
}
/**
 * <p>Information about of the hours of operation.</p>
 */
export interface HoursOfOperation {
    /**
     * <p>The identifier for the hours of operation.</p>
     */
    HoursOfOperationId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
     */
    HoursOfOperationArn?: string;
    /**
     * <p>The name for the hours of operation.</p>
     */
    Name?: string;
    /**
     * <p>The description for the hours of operation.</p>
     */
    Description?: string;
    /**
     * <p>The time zone for the hours of operation.</p>
     */
    TimeZone?: string;
    /**
     * <p>Configuration information for the hours of operation.</p>
     */
    Config?: HoursOfOperationConfig[];
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace HoursOfOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HoursOfOperation) => any;
}
export interface DescribeHoursOfOperationResponse {
    /**
     * <p>The hours of operation.</p>
     */
    HoursOfOperation?: HoursOfOperation;
}
export declare namespace DescribeHoursOfOperationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHoursOfOperationResponse) => any;
}
export interface DescribeInstanceRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DescribeInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceRequest) => any;
}
export declare enum InstanceStatus {
    ACTIVE = "ACTIVE",
    CREATION_FAILED = "CREATION_FAILED",
    CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS"
}
/**
 * <p>Relevant
 *    details why the instance was not successfully created.</p>
 */
export interface InstanceStatusReason {
    /**
     * <p>The message.</p>
     */
    Message?: string;
}
export declare namespace InstanceStatusReason {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStatusReason) => any;
}
/**
 * <p>The Amazon Connect instance.</p>
 */
export interface Instance {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the instance.</p>
     */
    Arn?: string;
    /**
     * <p>The identity management type.</p>
     */
    IdentityManagementType?: DirectoryType | string;
    /**
     * <p>The alias of instance.</p>
     */
    InstanceAlias?: string;
    /**
     * <p>When the instance was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The service role of the instance.</p>
     */
    ServiceRole?: string;
    /**
     * <p>The state of the instance.</p>
     */
    InstanceStatus?: InstanceStatus | string;
    /**
     * <p>Relevant
     *    details why the instance was not successfully created. </p>
     */
    StatusReason?: InstanceStatusReason;
    /**
     * <p>Whether inbound calls are enabled.</p>
     */
    InboundCallsEnabled?: boolean;
    /**
     * <p>Whether outbound calls are enabled.</p>
     */
    OutboundCallsEnabled?: boolean;
}
export declare namespace Instance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Instance) => any;
}
export interface DescribeInstanceResponse {
    /**
     * <p>The name of the instance.</p>
     */
    Instance?: Instance;
}
export declare namespace DescribeInstanceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceResponse) => any;
}
export declare enum InstanceAttributeType {
    AUTO_RESOLVE_BEST_VOICES = "AUTO_RESOLVE_BEST_VOICES",
    CONTACTFLOW_LOGS = "CONTACTFLOW_LOGS",
    CONTACT_LENS = "CONTACT_LENS",
    EARLY_MEDIA = "EARLY_MEDIA",
    INBOUND_CALLS = "INBOUND_CALLS",
    OUTBOUND_CALLS = "OUTBOUND_CALLS",
    USE_CUSTOM_TTS_VOICES = "USE_CUSTOM_TTS_VOICES"
}
export interface DescribeInstanceAttributeRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of attribute.</p>
     */
    AttributeType: InstanceAttributeType | string | undefined;
}
export declare namespace DescribeInstanceAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceAttributeRequest) => any;
}
/**
 * <p>A toggle for an individual feature at the instance level.</p>
 */
export interface Attribute {
    /**
     * <p>The type of attribute.</p>
     */
    AttributeType?: InstanceAttributeType | string;
    /**
     * <p>The value of the attribute.</p>
     */
    Value?: string;
}
export declare namespace Attribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Attribute) => any;
}
export interface DescribeInstanceAttributeResponse {
    /**
     * <p>The
     *    type
     *    of attribute.</p>
     */
    Attribute?: Attribute;
}
export declare namespace DescribeInstanceAttributeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceAttributeResponse) => any;
}
export interface DescribeInstanceStorageConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId: string | undefined;
    /**
     * <p>A valid resource type.</p>
     */
    ResourceType: InstanceStorageResourceType | string | undefined;
}
export declare namespace DescribeInstanceStorageConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceStorageConfigRequest) => any;
}
export interface DescribeInstanceStorageConfigResponse {
    /**
     * <p>A valid storage type.</p>
     */
    StorageConfig?: InstanceStorageConfig;
}
export declare namespace DescribeInstanceStorageConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceStorageConfigResponse) => any;
}
export interface DescribeQueueRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
}
export declare namespace DescribeQueueRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeQueueRequest) => any;
}
export declare enum QueueStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p>Contains information about a queue.</p>
 */
export interface Queue {
    /**
     * <p>The name of the queue.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the queue.</p>
     */
    QueueArn?: string;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId?: string;
    /**
     * <p>The description of the queue.</p>
     */
    Description?: string;
    /**
     * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
     */
    OutboundCallerConfig?: OutboundCallerConfig;
    /**
     * <p>The identifier for the hours of operation.</p>
     */
    HoursOfOperationId?: string;
    /**
     * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
     */
    MaxContacts?: number;
    /**
     * <p>The status of the queue.</p>
     */
    Status?: QueueStatus | string;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace Queue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Queue) => any;
}
export interface DescribeQueueResponse {
    /**
     * <p>The name of the queue.</p>
     */
    Queue?: Queue;
}
export declare namespace DescribeQueueResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeQueueResponse) => any;
}
export interface DescribeQuickConnectRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId: string | undefined;
}
export declare namespace DescribeQuickConnectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeQuickConnectRequest) => any;
}
/**
 * <p>Contains information about a quick connect.</p>
 */
export interface QuickConnect {
    /**
     * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
     */
    QuickConnectARN?: string;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId?: string;
    /**
     * <p>The name of the quick connect.</p>
     */
    Name?: string;
    /**
     * <p>The description.</p>
     */
    Description?: string;
    /**
     * <p>Contains information about the quick connect.</p>
     */
    QuickConnectConfig?: QuickConnectConfig;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace QuickConnect {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuickConnect) => any;
}
export interface DescribeQuickConnectResponse {
    /**
     * <p>Information about the quick connect.</p>
     */
    QuickConnect?: QuickConnect;
}
export declare namespace DescribeQuickConnectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeQuickConnectResponse) => any;
}
export interface DescribeRoutingProfileRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
}
export declare namespace DescribeRoutingProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRoutingProfileRequest) => any;
}
/**
 * <p>Contains information about a routing profile.</p>
 */
export interface RoutingProfile {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The name of the routing profile.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
     */
    RoutingProfileArn?: string;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId?: string;
    /**
     * <p>The description of the routing profile.</p>
     */
    Description?: string;
    /**
     * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
     *    profile.</p>
     */
    MediaConcurrencies?: MediaConcurrency[];
    /**
     * <p>The identifier of the default outbound queue for this routing profile.</p>
     */
    DefaultOutboundQueueId?: string;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace RoutingProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoutingProfile) => any;
}
export interface DescribeRoutingProfileResponse {
    /**
     * <p>The routing profile.</p>
     */
    RoutingProfile?: RoutingProfile;
}
export declare namespace DescribeRoutingProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRoutingProfileResponse) => any;
}
export interface DescribeUserRequest {
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DescribeUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserRequest) => any;
}
/**
 * <p>Contains information about a user account for a Amazon Connect instance.</p>
 */
export interface User {
    /**
     * <p>The identifier of the user account.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user account.</p>
     */
    Arn?: string;
    /**
     * <p>The user name assigned to the user account.</p>
     */
    Username?: string;
    /**
     * <p>Information about the user identity.</p>
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * <p>Information about the phone configuration for the user.</p>
     */
    PhoneConfig?: UserPhoneConfig;
    /**
     * <p>The identifier of the user account in the directory used for identity management.</p>
     */
    DirectoryUserId?: string;
    /**
     * <p>The identifiers of the security profiles for the user.</p>
     */
    SecurityProfileIds?: string[];
    /**
     * <p>The identifier of the routing profile for the user.</p>
     */
    RoutingProfileId?: string;
    /**
     * <p>The identifier of the hierarchy group for the user.</p>
     */
    HierarchyGroupId?: string;
    /**
     * <p>The
     *    tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace User {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: User) => any;
}
export interface DescribeUserResponse {
    /**
     * <p>Information about the user account and configuration settings.</p>
     */
    User?: User;
}
export declare namespace DescribeUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserResponse) => any;
}
export interface DescribeUserHierarchyGroupRequest {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    HierarchyGroupId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DescribeUserHierarchyGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserHierarchyGroupRequest) => any;
}
/**
 * <p>Contains summary information about a hierarchy group.</p>
 */
export interface HierarchyGroupSummary {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the hierarchy group.</p>
     */
    Name?: string;
}
export declare namespace HierarchyGroupSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyGroupSummary) => any;
}
/**
 * <p>Contains information about the levels of a hierarchy group.</p>
 */
export interface HierarchyPath {
    /**
     * <p>Information about level one.</p>
     */
    LevelOne?: HierarchyGroupSummary;
    /**
     * <p>Information about level two.</p>
     */
    LevelTwo?: HierarchyGroupSummary;
    /**
     * <p>Information about level three.</p>
     */
    LevelThree?: HierarchyGroupSummary;
    /**
     * <p>Information about level four.</p>
     */
    LevelFour?: HierarchyGroupSummary;
    /**
     * <p>Information about level five.</p>
     */
    LevelFive?: HierarchyGroupSummary;
}
export declare namespace HierarchyPath {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyPath) => any;
}
/**
 * <p>Contains information about a hierarchy group.</p>
 */
export interface HierarchyGroup {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the hierarchy group.</p>
     */
    Name?: string;
    /**
     * <p>The identifier of the level in the hierarchy group.</p>
     */
    LevelId?: string;
    /**
     * <p>Information about the levels in the hierarchy group.</p>
     */
    HierarchyPath?: HierarchyPath;
}
export declare namespace HierarchyGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyGroup) => any;
}
export interface DescribeUserHierarchyGroupResponse {
    /**
     * <p>Information about the hierarchy group.</p>
     */
    HierarchyGroup?: HierarchyGroup;
}
export declare namespace DescribeUserHierarchyGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserHierarchyGroupResponse) => any;
}
export interface DescribeUserHierarchyStructureRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DescribeUserHierarchyStructureRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserHierarchyStructureRequest) => any;
}
/**
 * <p>Contains information about a hierarchy level.</p>
 */
export interface HierarchyLevel {
    /**
     * <p>The identifier of the hierarchy level.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the hierarchy level.</p>
     */
    Name?: string;
}
export declare namespace HierarchyLevel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyLevel) => any;
}
/**
 * <p>Contains information about a hierarchy structure.</p>
 */
export interface HierarchyStructure {
    /**
     * <p>Information about level one.</p>
     */
    LevelOne?: HierarchyLevel;
    /**
     * <p>Information about level two.</p>
     */
    LevelTwo?: HierarchyLevel;
    /**
     * <p>Information about level three.</p>
     */
    LevelThree?: HierarchyLevel;
    /**
     * <p>Information about level four.</p>
     */
    LevelFour?: HierarchyLevel;
    /**
     * <p>Information about level five.</p>
     */
    LevelFive?: HierarchyLevel;
}
export declare namespace HierarchyStructure {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyStructure) => any;
}
export interface DescribeUserHierarchyStructureResponse {
    /**
     * <p>Information about the hierarchy structure.</p>
     */
    HierarchyStructure?: HierarchyStructure;
}
export declare namespace DescribeUserHierarchyStructureResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserHierarchyStructureResponse) => any;
}
export interface DisassociateApprovedOriginRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The domain URL of the integrated application.</p>
     */
    Origin: string | undefined;
}
export declare namespace DisassociateApprovedOriginRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateApprovedOriginRequest) => any;
}
export interface DisassociateInstanceStorageConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId: string | undefined;
    /**
     * <p>A valid resource type.</p>
     */
    ResourceType: InstanceStorageResourceType | string | undefined;
}
export declare namespace DisassociateInstanceStorageConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateInstanceStorageConfigRequest) => any;
}
export interface DisassociateLambdaFunctionRequest {
    /**
     * <p>The identifier of the Amazon Connect instance..</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
     */
    FunctionArn: string | undefined;
}
export declare namespace DisassociateLambdaFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateLambdaFunctionRequest) => any;
}
export interface DisassociateLexBotRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
     */
    BotName: string | undefined;
    /**
     * <p>The Region in which the Amazon Lex bot has been created.</p>
     */
    LexRegion: string | undefined;
}
export declare namespace DisassociateLexBotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateLexBotRequest) => any;
}
export interface DisassociateQueueQuickConnectsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The quick connects to disassociate from the queue.</p>
     */
    QuickConnectIds: string[] | undefined;
}
export declare namespace DisassociateQueueQuickConnectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateQueueQuickConnectsRequest) => any;
}
export interface DisassociateRoutingProfileQueuesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The queues to disassociate from this routing profile.</p>
     */
    QueueReferences: RoutingProfileQueueReference[] | undefined;
}
export declare namespace DisassociateRoutingProfileQueuesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateRoutingProfileQueuesRequest) => any;
}
export interface DisassociateSecurityKeyRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId: string | undefined;
}
export declare namespace DisassociateSecurityKeyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateSecurityKeyRequest) => any;
}
export interface GetContactAttributesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the initial contact.</p>
     */
    InitialContactId: string | undefined;
}
export declare namespace GetContactAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactAttributesRequest) => any;
}
export interface GetContactAttributesResponse {
    /**
     * <p>Information about the attributes.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
}
export declare namespace GetContactAttributesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactAttributesResponse) => any;
}
export declare enum CurrentMetricName {
    AGENTS_AFTER_CONTACT_WORK = "AGENTS_AFTER_CONTACT_WORK",
    AGENTS_AVAILABLE = "AGENTS_AVAILABLE",
    AGENTS_ERROR = "AGENTS_ERROR",
    AGENTS_NON_PRODUCTIVE = "AGENTS_NON_PRODUCTIVE",
    AGENTS_ONLINE = "AGENTS_ONLINE",
    AGENTS_ON_CALL = "AGENTS_ON_CALL",
    AGENTS_ON_CONTACT = "AGENTS_ON_CONTACT",
    AGENTS_STAFFED = "AGENTS_STAFFED",
    CONTACTS_IN_QUEUE = "CONTACTS_IN_QUEUE",
    CONTACTS_SCHEDULED = "CONTACTS_SCHEDULED",
    OLDEST_CONTACT_AGE = "OLDEST_CONTACT_AGE",
    SLOTS_ACTIVE = "SLOTS_ACTIVE",
    SLOTS_AVAILABLE = "SLOTS_AVAILABLE"
}
export declare enum Unit {
    COUNT = "COUNT",
    PERCENT = "PERCENT",
    SECONDS = "SECONDS"
}
/**
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *    Guide</i>.</p>
 */
export interface CurrentMetric {
    /**
     * <p>The name of the metric.</p>
     */
    Name?: CurrentMetricName | string;
    /**
     * <p>The unit for the metric.</p>
     */
    Unit?: Unit | string;
}
export declare namespace CurrentMetric {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CurrentMetric) => any;
}
/**
 * <p>Contains the filter to apply when retrieving metrics.</p>
 */
export interface Filters {
    /**
     * <p>The queues to use to filter the metrics. You can specify up to 100 queues per
     *    request.</p>
     */
    Queues?: string[];
    /**
     * <p>The channel to use to filter the metrics.</p>
     */
    Channels?: (Channel | string)[];
}
export declare namespace Filters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filters) => any;
}
export declare enum Grouping {
    CHANNEL = "CHANNEL",
    QUEUE = "QUEUE"
}
export interface GetCurrentMetricDataRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
     *    retrieved only for the resources associated with the queues or channels included in the filter.
     *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
     */
    Filters: Filters | undefined;
    /**
     * <p>The grouping applied to the metrics returned. For example, when grouped by
     *     <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all
     *    queues. If you group by <code>CHANNEL</code>, you should include a Channels filter.
     *    VOICE, CHAT, and TASK channels are supported.</p>
     *          <p>If no <code>Grouping</code> is included in the request, a summary of metrics is
     *    returned.</p>
     */
    Groupings?: (Grouping | string)[];
    /**
     * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics
     *    are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
     *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     *          <dl>
     *             <dt>AGENTS_AFTER_CONTACT_WORK</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a>
     *                </p>
     *
     *             </dd>
     *             <dt>AGENTS_AVAILABLE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_ERROR</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_NON_PRODUCTIVE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_ON_CALL</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
     *        contact</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_ON_CONTACT</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
     *        contact</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_ONLINE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a>
     *                </p>
     *             </dd>
     *             <dt>AGENTS_STAFFED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a>
     *                </p>
     *             </dd>
     *             <dt>CONTACTS_IN_QUEUE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In
     *        queue</a>
     *                </p>
     *             </dd>
     *             <dt>CONTACTS_SCHEDULED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a>
     *                </p>
     *             </dd>
     *             <dt>OLDEST_CONTACT_AGE</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>When you use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For
     *       example, if you get a response like this:</p>
     *                <p>
     *                   <code>{ "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0
     *       </code>}</p>
     *                <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p>
     *
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a>
     *                </p>
     *             </dd>
     *             <dt>SLOTS_ACTIVE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a>
     *                </p>
     *             </dd>
     *             <dt>SLOTS_AVAILABLE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a>
     *                </p>
     *             </dd>
     *          </dl>
     */
    CurrentMetrics: CurrentMetric[] | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
     *    the token must use the same request parameters as the request that generated the token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace GetCurrentMetricDataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCurrentMetricDataRequest) => any;
}
/**
 * <p>Contains the data for a real-time metric.</p>
 */
export interface CurrentMetricData {
    /**
     * <p>Information about the metric.</p>
     */
    Metric?: CurrentMetric;
    /**
     * <p>The value of the metric.</p>
     */
    Value?: number;
}
export declare namespace CurrentMetricData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CurrentMetricData) => any;
}
/**
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 */
export interface QueueReference {
    /**
     * <p>The identifier of the queue.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the queue.</p>
     */
    Arn?: string;
}
export declare namespace QueueReference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QueueReference) => any;
}
/**
 * <p>Contains information about the dimensions for a set of metrics.</p>
 */
export interface Dimensions {
    /**
     * <p>Information about the queue for which metrics are returned.</p>
     */
    Queue?: QueueReference;
    /**
     * <p>The channel used for grouping and filters.</p>
     */
    Channel?: Channel | string;
}
export declare namespace Dimensions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Dimensions) => any;
}
/**
 * <p>Contains information about a set of real-time metrics.</p>
 */
export interface CurrentMetricResult {
    /**
     * <p>The dimensions for the metrics.</p>
     */
    Dimensions?: Dimensions;
    /**
     * <p>The set of metrics.</p>
     */
    Collections?: CurrentMetricData[];
}
export declare namespace CurrentMetricResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CurrentMetricResult) => any;
}
export interface GetCurrentMetricDataResponse {
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
     *    the token must use the same request parameters as the request that generated the token.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the real-time metrics.</p>
     */
    MetricResults?: CurrentMetricResult[];
    /**
     * <p>The time at which the metrics were retrieved and cached for pagination.</p>
     */
    DataSnapshotTime?: Date;
}
export declare namespace GetCurrentMetricDataResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCurrentMetricDataResponse) => any;
}
export interface GetFederationTokenRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace GetFederationTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFederationTokenRequest) => any;
}
/**
 * <p>Contains credentials to use for federation.</p>
 */
export interface Credentials {
    /**
     * <p>An access token generated for a federated user to access Amazon Connect.</p>
     */
    AccessToken?: string;
    /**
     * <p>A token generated with an expiration time for the session a user is logged in to
     *    Amazon Connect.</p>
     */
    AccessTokenExpiration?: Date;
    /**
     * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
     */
    RefreshToken?: string;
    /**
     * <p>Renews the expiration timer for a generated token.</p>
     */
    RefreshTokenExpiration?: Date;
}
export declare namespace Credentials {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Credentials) => any;
}
export interface GetFederationTokenResponse {
    /**
     * <p>The credentials to use for federation.</p>
     */
    Credentials?: Credentials;
}
export declare namespace GetFederationTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFederationTokenResponse) => any;
}
/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 */
export interface UserNotFoundException extends __SmithyException, $MetadataBearer {
    name: "UserNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace UserNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserNotFoundException) => any;
}
export declare enum HistoricalMetricName {
    ABANDON_TIME = "ABANDON_TIME",
    AFTER_CONTACT_WORK_TIME = "AFTER_CONTACT_WORK_TIME",
    API_CONTACTS_HANDLED = "API_CONTACTS_HANDLED",
    CALLBACK_CONTACTS_HANDLED = "CALLBACK_CONTACTS_HANDLED",
    CONTACTS_ABANDONED = "CONTACTS_ABANDONED",
    CONTACTS_AGENT_HUNG_UP_FIRST = "CONTACTS_AGENT_HUNG_UP_FIRST",
    CONTACTS_CONSULTED = "CONTACTS_CONSULTED",
    CONTACTS_HANDLED = "CONTACTS_HANDLED",
    CONTACTS_HANDLED_INCOMING = "CONTACTS_HANDLED_INCOMING",
    CONTACTS_HANDLED_OUTBOUND = "CONTACTS_HANDLED_OUTBOUND",
    CONTACTS_HOLD_ABANDONS = "CONTACTS_HOLD_ABANDONS",
    CONTACTS_MISSED = "CONTACTS_MISSED",
    CONTACTS_QUEUED = "CONTACTS_QUEUED",
    CONTACTS_TRANSFERRED_IN = "CONTACTS_TRANSFERRED_IN",
    CONTACTS_TRANSFERRED_IN_FROM_QUEUE = "CONTACTS_TRANSFERRED_IN_FROM_QUEUE",
    CONTACTS_TRANSFERRED_OUT = "CONTACTS_TRANSFERRED_OUT",
    CONTACTS_TRANSFERRED_OUT_FROM_QUEUE = "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE",
    HANDLE_TIME = "HANDLE_TIME",
    HOLD_TIME = "HOLD_TIME",
    INTERACTION_AND_HOLD_TIME = "INTERACTION_AND_HOLD_TIME",
    INTERACTION_TIME = "INTERACTION_TIME",
    OCCUPANCY = "OCCUPANCY",
    QUEUED_TIME = "QUEUED_TIME",
    QUEUE_ANSWER_TIME = "QUEUE_ANSWER_TIME",
    SERVICE_LEVEL = "SERVICE_LEVEL"
}
export declare enum Statistic {
    AVG = "AVG",
    MAX = "MAX",
    SUM = "SUM"
}
export declare enum Comparison {
    LT = "LT"
}
/**
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface Threshold {
    /**
     * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
     */
    Comparison?: Comparison | string;
    /**
     * <p>The threshold value to compare.</p>
     */
    ThresholdValue?: number;
}
export declare namespace Threshold {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Threshold) => any;
}
/**
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *    Guide</i>.</p>
 */
export interface HistoricalMetric {
    /**
     * <p>The name of the metric.</p>
     */
    Name?: HistoricalMetricName | string;
    /**
     * <p>The threshold for the metric, used with service level metrics.</p>
     */
    Threshold?: Threshold;
    /**
     * <p>The statistic for the metric.</p>
     */
    Statistic?: Statistic | string;
    /**
     * <p>The unit for the metric.</p>
     */
    Unit?: Unit | string;
}
export declare namespace HistoricalMetric {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HistoricalMetric) => any;
}
export interface GetMetricDataRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
     *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
     *    such as 10:05, 10:10, 10:15.</p>
     *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
     *    metrics are available only for 24 hours.</p>
     */
    StartTime: Date | undefined;
    /**
     * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
     *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
     *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
     *          <p>The time range between the start and end time must be less than 24 hours.</p>
     */
    EndTime: Date | undefined;
    /**
     * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
     *    retrieved only for the resources associated with the queues or channels included in the filter.
     *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
     *          <note>
     *             <p>To filter by <code>Queues</code>, enter the queue
     *     ID/ARN, not the name of the queue.</p>
     *          </note>
     */
    Filters: Filters | undefined;
    /**
     * <p>The grouping applied to the metrics returned. For example, when results are grouped by
     *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
     *    each queue rather than aggregated for all queues.</p>
     *
     *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
     */
    Groupings?: (Grouping | string)[];
    /**
     * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
     *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
     *    Guide</i>.</p>
     *          <dl>
     *             <dt>ABANDON_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>AFTER_CONTACT_WORK_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>API_CONTACTS_HANDLED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_ABANDONED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_CONSULTED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_HANDLED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_HANDLED_INCOMING</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_HOLD_ABANDONS</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_MISSED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_QUEUED</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_TRANSFERRED_IN</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
     *             <dd>
     *                <p>Unit: COUNT</p>
     *                <p>Statistic: SUM</p>
     *             </dd>
     *             <dt>HANDLE_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>HOLD_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>INTERACTION_AND_HOLD_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>INTERACTION_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>OCCUPANCY</dt>
     *             <dd>
     *                <p>Unit: PERCENT</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>QUEUE_ANSWER_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: AVG</p>
     *             </dd>
     *             <dt>QUEUED_TIME</dt>
     *             <dd>
     *                <p>Unit: SECONDS</p>
     *                <p>Statistic: MAX</p>
     *             </dd>
     *             <dt>SERVICE_LEVEL</dt>
     *             <dd>
     *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
     *                <p>Unit: PERCENT</p>
     *                <p>Statistic: AVG</p>
     *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
     *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
     *       "Less than"). </p>
     *             </dd>
     *          </dl>
     */
    HistoricalMetrics: HistoricalMetric[] | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace GetMetricDataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMetricDataRequest) => any;
}
/**
 * <p>Contains the data for a historical metric.</p>
 */
export interface HistoricalMetricData {
    /**
     * <p>Information about the metric.</p>
     */
    Metric?: HistoricalMetric;
    /**
     * <p>The value of the metric.</p>
     */
    Value?: number;
}
export declare namespace HistoricalMetricData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HistoricalMetricData) => any;
}
/**
 * <p>Contains information about the historical metrics retrieved.</p>
 */
export interface HistoricalMetricResult {
    /**
     * <p>The dimension for the metrics.</p>
     */
    Dimensions?: Dimensions;
    /**
     * <p>The set of metrics.</p>
     */
    Collections?: HistoricalMetricData[];
}
export declare namespace HistoricalMetricResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HistoricalMetricResult) => any;
}
export interface GetMetricDataResponse {
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
     *    the token must use the same request parameters as the request that generated the token.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the historical metrics.</p>
     *          <p>If no grouping is specified, a summary of metric data is returned.</p>
     */
    MetricResults?: HistoricalMetricResult[];
}
export declare namespace GetMetricDataResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMetricDataResponse) => any;
}
export interface ListApprovedOriginsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListApprovedOriginsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListApprovedOriginsRequest) => any;
}
export interface ListApprovedOriginsResponse {
    /**
     * <p>The approved origins.</p>
     */
    Origins?: string[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListApprovedOriginsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListApprovedOriginsResponse) => any;
}
export interface ListContactFlowsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of contact flow.</p>
     */
    ContactFlowTypes?: (ContactFlowType | string)[];
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListContactFlowsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactFlowsRequest) => any;
}
/**
 * <p>Contains summary information about a contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
    /**
     * <p>The identifier of the contact flow.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the contact flow.</p>
     */
    Name?: string;
    /**
     * <p>The type of contact flow.</p>
     */
    ContactFlowType?: ContactFlowType | string;
}
export declare namespace ContactFlowSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactFlowSummary) => any;
}
export interface ListContactFlowsResponse {
    /**
     * <p>Information about the contact flows.</p>
     */
    ContactFlowSummaryList?: ContactFlowSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListContactFlowsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactFlowsResponse) => any;
}
export interface ListHoursOfOperationsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListHoursOfOperationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHoursOfOperationsRequest) => any;
}
/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
    /**
     * <p>The identifier of the hours of operation.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the hours of operation.</p>
     */
    Name?: string;
}
export declare namespace HoursOfOperationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HoursOfOperationSummary) => any;
}
export interface ListHoursOfOperationsResponse {
    /**
     * <p>Information about the hours of operation.</p>
     */
    HoursOfOperationSummaryList?: HoursOfOperationSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListHoursOfOperationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHoursOfOperationsResponse) => any;
}
export interface ListInstanceAttributesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListInstanceAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstanceAttributesRequest) => any;
}
export interface ListInstanceAttributesResponse {
    /**
     * <p>The attribute types.</p>
     */
    Attributes?: Attribute[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListInstanceAttributesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstanceAttributesResponse) => any;
}
export interface ListInstancesRequest {
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstancesRequest) => any;
}
/**
 * <p>Information about the instance.</p>
 */
export interface InstanceSummary {
    /**
     * <p>The identifier of the instance.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the instance.</p>
     */
    Arn?: string;
    /**
     * <p>The identity management type of the instance.</p>
     */
    IdentityManagementType?: DirectoryType | string;
    /**
     * <p>The alias of the instance.</p>
     */
    InstanceAlias?: string;
    /**
     * <p>When the instance was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The service role of the instance.</p>
     */
    ServiceRole?: string;
    /**
     * <p>The state of the instance.</p>
     */
    InstanceStatus?: InstanceStatus | string;
    /**
     * <p>Whether inbound calls are enabled.</p>
     */
    InboundCallsEnabled?: boolean;
    /**
     * <p>Whether outbound calls are enabled.</p>
     */
    OutboundCallsEnabled?: boolean;
}
export declare namespace InstanceSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceSummary) => any;
}
export interface ListInstancesResponse {
    /**
     * <p>Information about the instances.</p>
     */
    InstanceSummaryList?: InstanceSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListInstancesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstancesResponse) => any;
}
export interface ListInstanceStorageConfigsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>A valid resource type.</p>
     */
    ResourceType: InstanceStorageResourceType | string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListInstanceStorageConfigsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstanceStorageConfigsRequest) => any;
}
export interface ListInstanceStorageConfigsResponse {
    /**
     * <p>A valid storage type.</p>
     */
    StorageConfigs?: InstanceStorageConfig[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListInstanceStorageConfigsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInstanceStorageConfigsResponse) => any;
}
export interface ListIntegrationAssociationsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListIntegrationAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIntegrationAssociationsRequest) => any;
}
/**
 * <p>Contains summary information about the associated AppIntegrations.</p>
 */
export interface IntegrationAssociationSummary {
    /**
     * <p>The identifier for the AppIntegration association.</p>
     */
    IntegrationAssociationId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
     */
    IntegrationAssociationArn?: string;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The integration type.</p>
     */
    IntegrationType?: IntegrationType | string;
    /**
     * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
     */
    IntegrationArn?: string;
    /**
     * <p>The URL for the external application.</p>
     */
    SourceApplicationUrl?: string;
    /**
     * <p>The user-provided, friendly name for the external application.</p>
     */
    SourceApplicationName?: string;
    /**
     * <p>The name of the source.</p>
     */
    SourceType?: SourceType | string;
}
export declare namespace IntegrationAssociationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IntegrationAssociationSummary) => any;
}
export interface ListIntegrationAssociationsResponse {
    /**
     * <p>The AppIntegration associations.</p>
     */
    IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListIntegrationAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIntegrationAssociationsResponse) => any;
}
export interface ListLambdaFunctionsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLambdaFunctionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLambdaFunctionsRequest) => any;
}
export interface ListLambdaFunctionsResponse {
    /**
     * <p>The Lambdafunction ARNs associated with the specified instance.</p>
     */
    LambdaFunctions?: string[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLambdaFunctionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLambdaFunctionsResponse) => any;
}
export interface ListLexBotsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLexBotsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLexBotsRequest) => any;
}
export interface ListLexBotsResponse {
    /**
     * <p>The names and Regions of the Amazon Lex bots associated with the specified instance.</p>
     */
    LexBots?: LexBot[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLexBotsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLexBotsResponse) => any;
}
export declare enum PhoneNumberCountryCode {
    AD = "AD",
    AE = "AE",
    AF = "AF",
    AG = "AG",
    AI = "AI",
    AL = "AL",
    AM = "AM",
    AN = "AN",
    AO = "AO",
    AQ = "AQ",
    AR = "AR",
    AS = "AS",
    AT = "AT",
    AU = "AU",
    AW = "AW",
    AZ = "AZ",
    BA = "BA",
    BB = "BB",
    BD = "BD",
    BE = "BE",
    BF = "BF",
    BG = "BG",
    BH = "BH",
    BI = "BI",
    BJ = "BJ",
    BL = "BL",
    BM = "BM",
    BN = "BN",
    BO = "BO",
    BR = "BR",
    BS = "BS",
    BT = "BT",
    BW = "BW",
    BY = "BY",
    BZ = "BZ",
    CA = "CA",
    CC = "CC",
    CD = "CD",
    CF = "CF",
    CG = "CG",
    CH = "CH",
    CI = "CI",
    CK = "CK",
    CL = "CL",
    CM = "CM",
    CN = "CN",
    CO = "CO",
    CR = "CR",
    CU = "CU",
    CV = "CV",
    CW = "CW",
    CX = "CX",
    CY = "CY",
    CZ = "CZ",
    DE = "DE",
    DJ = "DJ",
    DK = "DK",
    DM = "DM",
    DO = "DO",
    DZ = "DZ",
    EC = "EC",
    EE = "EE",
    EG = "EG",
    EH = "EH",
    ER = "ER",
    ES = "ES",
    ET = "ET",
    FI = "FI",
    FJ = "FJ",
    FK = "FK",
    FM = "FM",
    FO = "FO",
    FR = "FR",
    GA = "GA",
    GB = "GB",
    GD = "GD",
    GE = "GE",
    GG = "GG",
    GH = "GH",
    GI = "GI",
    GL = "GL",
    GM = "GM",
    GN = "GN",
    GQ = "GQ",
    GR = "GR",
    GT = "GT",
    GU = "GU",
    GW = "GW",
    GY = "GY",
    HK = "HK",
    HN = "HN",
    HR = "HR",
    HT = "HT",
    HU = "HU",
    ID = "ID",
    IE = "IE",
    IL = "IL",
    IM = "IM",
    IN = "IN",
    IO = "IO",
    IQ = "IQ",
    IR = "IR",
    IS = "IS",
    IT = "IT",
    JE = "JE",
    JM = "JM",
    JO = "JO",
    JP = "JP",
    KE = "KE",
    KG = "KG",
    KH = "KH",
    KI = "KI",
    KM = "KM",
    KN = "KN",
    KP = "KP",
    KR = "KR",
    KW = "KW",
    KY = "KY",
    KZ = "KZ",
    LA = "LA",
    LB = "LB",
    LC = "LC",
    LI = "LI",
    LK = "LK",
    LR = "LR",
    LS = "LS",
    LT = "LT",
    LU = "LU",
    LV = "LV",
    LY = "LY",
    MA = "MA",
    MC = "MC",
    MD = "MD",
    ME = "ME",
    MF = "MF",
    MG = "MG",
    MH = "MH",
    MK = "MK",
    ML = "ML",
    MM = "MM",
    MN = "MN",
    MO = "MO",
    MP = "MP",
    MR = "MR",
    MS = "MS",
    MT = "MT",
    MU = "MU",
    MV = "MV",
    MW = "MW",
    MX = "MX",
    MY = "MY",
    MZ = "MZ",
    NA = "NA",
    NC = "NC",
    NE = "NE",
    NG = "NG",
    NI = "NI",
    NL = "NL",
    NO = "NO",
    NP = "NP",
    NR = "NR",
    NU = "NU",
    NZ = "NZ",
    OM = "OM",
    PA = "PA",
    PE = "PE",
    PF = "PF",
    PG = "PG",
    PH = "PH",
    PK = "PK",
    PL = "PL",
    PM = "PM",
    PN = "PN",
    PR = "PR",
    PT = "PT",
    PW = "PW",
    PY = "PY",
    QA = "QA",
    RE = "RE",
    RO = "RO",
    RS = "RS",
    RU = "RU",
    RW = "RW",
    SA = "SA",
    SB = "SB",
    SC = "SC",
    SD = "SD",
    SE = "SE",
    SG = "SG",
    SH = "SH",
    SI = "SI",
    SJ = "SJ",
    SK = "SK",
    SL = "SL",
    SM = "SM",
    SN = "SN",
    SO = "SO",
    SR = "SR",
    ST = "ST",
    SV = "SV",
    SX = "SX",
    SY = "SY",
    SZ = "SZ",
    TC = "TC",
    TD = "TD",
    TG = "TG",
    TH = "TH",
    TJ = "TJ",
    TK = "TK",
    TL = "TL",
    TM = "TM",
    TN = "TN",
    TO = "TO",
    TR = "TR",
    TT = "TT",
    TV = "TV",
    TW = "TW",
    TZ = "TZ",
    UA = "UA",
    UG = "UG",
    US = "US",
    UY = "UY",
    UZ = "UZ",
    VA = "VA",
    VC = "VC",
    VE = "VE",
    VG = "VG",
    VI = "VI",
    VN = "VN",
    VU = "VU",
    WF = "WF",
    WS = "WS",
    YE = "YE",
    YT = "YT",
    ZA = "ZA",
    ZM = "ZM",
    ZW = "ZW"
}
export declare enum PhoneNumberType {
    DID = "DID",
    TOLL_FREE = "TOLL_FREE"
}
export interface ListPhoneNumbersRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of phone number.</p>
     */
    PhoneNumberTypes?: (PhoneNumberType | string)[];
    /**
     * <p>The ISO country code.</p>
     */
    PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListPhoneNumbersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPhoneNumbersRequest) => any;
}
/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
    /**
     * <p>The identifier of the phone number.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the phone number.</p>
     */
    Arn?: string;
    /**
     * <p>The phone number.</p>
     */
    PhoneNumber?: string;
    /**
     * <p>The type of phone number.</p>
     */
    PhoneNumberType?: PhoneNumberType | string;
    /**
     * <p>The ISO country code.</p>
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode | string;
}
export declare namespace PhoneNumberSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PhoneNumberSummary) => any;
}
export interface ListPhoneNumbersResponse {
    /**
     * <p>Information about the phone numbers.</p>
     */
    PhoneNumberSummaryList?: PhoneNumberSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPhoneNumbersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPhoneNumbersResponse) => any;
}
export interface ListPromptsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous response in
     *    the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListPromptsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPromptsRequest) => any;
}
/**
 * <p>Contains information about the prompt.</p>
 */
export interface PromptSummary {
    /**
     * <p>The identifier of the prompt.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the prompt.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the prompt.</p>
     */
    Name?: string;
}
export declare namespace PromptSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PromptSummary) => any;
}
export interface ListPromptsResponse {
    /**
     * <p>Information about the prompts.</p>
     */
    PromptSummaryList?: PromptSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPromptsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPromptsResponse) => any;
}
export interface ListQueueQuickConnectsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListQueueQuickConnectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQueueQuickConnectsRequest) => any;
}
/**
 * <p>Contains summary information about a quick connect.</p>
 */
export interface QuickConnectSummary {
    /**
     * <p>The identifier for the quick connect.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the quick connect.</p>
     */
    Name?: string;
    /**
     * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
     *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
     */
    QuickConnectType?: QuickConnectType | string;
}
export declare namespace QuickConnectSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuickConnectSummary) => any;
}
export interface ListQueueQuickConnectsResponse {
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the quick connects.</p>
     */
    QuickConnectSummaryList?: QuickConnectSummary[];
}
export declare namespace ListQueueQuickConnectsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQueueQuickConnectsResponse) => any;
}
export declare enum QueueType {
    AGENT = "AGENT",
    STANDARD = "STANDARD"
}
export interface ListQueuesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of queue.</p>
     */
    QueueTypes?: (QueueType | string)[];
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListQueuesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQueuesRequest) => any;
}
/**
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
    /**
     * <p>The identifier of the queue.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the queue.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the queue.</p>
     */
    Name?: string;
    /**
     * <p>The type of queue.</p>
     */
    QueueType?: QueueType | string;
}
export declare namespace QueueSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QueueSummary) => any;
}
export interface ListQueuesResponse {
    /**
     * <p>Information about the queues.</p>
     */
    QueueSummaryList?: QueueSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListQueuesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQueuesResponse) => any;
}
export interface ListQuickConnectsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
    /**
     * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
     *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
     */
    QuickConnectTypes?: (QuickConnectType | string)[];
}
export declare namespace ListQuickConnectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQuickConnectsRequest) => any;
}
export interface ListQuickConnectsResponse {
    /**
     * <p>Information about the quick connects.</p>
     */
    QuickConnectSummaryList?: QuickConnectSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListQuickConnectsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListQuickConnectsResponse) => any;
}
export interface ListRoutingProfileQueuesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListRoutingProfileQueuesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoutingProfileQueuesRequest) => any;
}
/**
 * <p>Contains summary information about a routing profile queue.</p>
 */
export interface RoutingProfileQueueConfigSummary {
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the queue.</p>
     */
    QueueArn: string | undefined;
    /**
     * <p>The name of the queue.</p>
     */
    QueueName: string | undefined;
    /**
     * <p>The order in which contacts are to be handled for the queue. For more information, see
     *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
     *     delay</a>.</p>
     */
    Priority: number | undefined;
    /**
     * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
     *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
     *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
     */
    Delay: number | undefined;
    /**
     * <p>The channels this queue supports.</p>
     */
    Channel: Channel | string | undefined;
}
export declare namespace RoutingProfileQueueConfigSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoutingProfileQueueConfigSummary) => any;
}
export interface ListRoutingProfileQueuesResponse {
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the routing profiles.</p>
     */
    RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];
}
export declare namespace ListRoutingProfileQueuesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoutingProfileQueuesResponse) => any;
}
export interface ListRoutingProfilesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListRoutingProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoutingProfilesRequest) => any;
}
/**
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
    /**
     * <p>The identifier of the routing profile.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the routing profile.</p>
     */
    Name?: string;
}
export declare namespace RoutingProfileSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoutingProfileSummary) => any;
}
export interface ListRoutingProfilesResponse {
    /**
     * <p>Information about the routing profiles.</p>
     */
    RoutingProfileSummaryList?: RoutingProfileSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListRoutingProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoutingProfilesResponse) => any;
}
export interface ListSecurityKeysRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListSecurityKeysRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityKeysRequest) => any;
}
/**
 * <p>Configuration information of the security key.</p>
 */
export interface SecurityKey {
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId?: string;
    /**
     * <p>The key of the security key.</p>
     */
    Key?: string;
    /**
     * <p>When the security key was created.</p>
     */
    CreationTime?: Date;
}
export declare namespace SecurityKey {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityKey) => any;
}
export interface ListSecurityKeysResponse {
    /**
     * <p>The security keys.</p>
     */
    SecurityKeys?: SecurityKey[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSecurityKeysResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityKeysResponse) => any;
}
export interface ListSecurityProfilesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListSecurityProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesRequest) => any;
}
/**
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
    /**
     * <p>The identifier of the security profile.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the security profile.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the security profile.</p>
     */
    Name?: string;
}
export declare namespace SecurityProfileSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityProfileSummary) => any;
}
export interface ListSecurityProfilesResponse {
    /**
     * <p>Information about the security profiles.</p>
     */
    SecurityProfileSummaryList?: SecurityProfileSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSecurityProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>Information about the tags.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
/**
 * <p>Provides summary information about the use cases for the specified Amazon Connect AppIntegration
 *    association.</p>
 */
export interface ListUseCasesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the integration association.</p>
     */
    IntegrationAssociationId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListUseCasesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUseCasesRequest) => any;
}
/**
 * <p>Contains the
 *    use
 *    case.</p>
 */
export interface UseCase {
    /**
     * <p>The identifier for the use case.</p>
     */
    UseCaseId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the use case.</p>
     */
    UseCaseArn?: string;
    /**
     * <p>The type of use case to associate to the AppIntegration association. Each AppIntegration
     *    association can have only one of each use case type.</p>
     */
    UseCaseType?: UseCaseType | string;
}
export declare namespace UseCase {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UseCase) => any;
}
export interface ListUseCasesResponse {
    /**
     * <p>The use cases.</p>
     */
    UseCaseSummaryList?: UseCase[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListUseCasesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUseCasesResponse) => any;
}
export interface ListUserHierarchyGroupsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListUserHierarchyGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUserHierarchyGroupsRequest) => any;
}
export interface ListUserHierarchyGroupsResponse {
    /**
     * <p>Information about the hierarchy groups.</p>
     */
    UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListUserHierarchyGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUserHierarchyGroupsResponse) => any;
}
export interface ListUsersRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The token for the next set of results. Use the value returned in the previous
     * response in the next request to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListUsersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsersRequest) => any;
}
/**
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
    /**
     * <p>The identifier of the user account.</p>
     */
    Id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user account.</p>
     */
    Arn?: string;
    /**
     * <p>The Amazon Connect user name of the user account.</p>
     */
    Username?: string;
}
export declare namespace UserSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserSummary) => any;
}
export interface ListUsersResponse {
    /**
     * <p>Information about the users.</p>
     */
    UserSummaryList?: UserSummary[];
    /**
     * <p>If there are additional results, this is the token for the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListUsersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUsersResponse) => any;
}
export interface ResumeContactRecordingRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The identifier of the contact. This is the identifier of the contact associated with the
     *    first interaction with the contact center.</p>
     */
    InitialContactId: string | undefined;
}
export declare namespace ResumeContactRecordingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResumeContactRecordingRequest) => any;
}
export interface ResumeContactRecordingResponse {
}
export declare namespace ResumeContactRecordingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResumeContactRecordingResponse) => any;
}
/**
 * <p>A chat message.</p>
 */
export interface ChatMessage {
    /**
     * <p>The type of the content. Supported types are text and plain.</p>
     */
    ContentType: string | undefined;
    /**
     * <p>The content of the chat message.</p>
     */
    Content: string | undefined;
}
export declare namespace ChatMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessage) => any;
}
/**
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
    /**
     * <p>Display name of the participant.</p>
     */
    DisplayName: string | undefined;
}
export declare namespace ParticipantDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ParticipantDetails) => any;
}
export interface StartChatContactRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact flow for initiating the chat.
     *    To
     *    see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the
     *    contact flow. On the contact flow page, under the name of the contact flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of
     *    the ARN, shown here in bold: </p>
     *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
     *          </p>
     */
    ContactFlowId: string | undefined;
    /**
     * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
     *    attributes. They can be accessed in contact flows just like any other contact attributes. </p>
     *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
     *    can include only alphanumeric, dash, and underscore characters.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
    /**
     * <p>Information identifying the participant.</p>
     */
    ParticipantDetails: ParticipantDetails | undefined;
    /**
     * <p>The initial message to be sent to the newly created chat.</p>
     */
    InitialMessage?: ChatMessage;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *    request.</p>
     */
    ClientToken?: string;
}
export declare namespace StartChatContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartChatContactRequest) => any;
}
export interface StartChatContactResponse {
    /**
     * <p>The identifier of this contact within the Amazon Connect instance. </p>
     */
    ContactId?: string;
    /**
     * <p>The identifier for a chat participant. The participantId for a chat participant is the same
     *    throughout the chat lifecycle.</p>
     */
    ParticipantId?: string;
    /**
     * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
     *    participant.</p>
     */
    ParticipantToken?: string;
}
export declare namespace StartChatContactResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartChatContactResponse) => any;
}
export declare enum VoiceRecordingTrack {
    ALL = "ALL",
    FROM_AGENT = "FROM_AGENT",
    TO_AGENT = "TO_AGENT"
}
/**
 * <p>Contains information about the recording configuration settings.</p>
 */
export interface VoiceRecordingConfiguration {
    /**
     * <p>Identifies which track is being recorded.</p>
     */
    VoiceRecordingTrack?: VoiceRecordingTrack | string;
}
export declare namespace VoiceRecordingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VoiceRecordingConfiguration) => any;
}
export interface StartContactRecordingRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The identifier of the contact. This is the identifier of the contact associated with the
     *    first interaction with the contact center.</p>
     */
    InitialContactId: string | undefined;
    /**
     * <p>The person being recorded.</p>
     */
    VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}
export declare namespace StartContactRecordingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartContactRecordingRequest) => any;
}
export interface StartContactRecordingResponse {
}
export declare namespace StartContactRecordingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartContactRecordingResponse) => any;
}
/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export interface DestinationNotAllowedException extends __SmithyException, $MetadataBearer {
    name: "DestinationNotAllowedException";
    $fault: "client";
    /**
     * <p>The message about the outbound calls.</p>
     */
    Message?: string;
}
export declare namespace DestinationNotAllowedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DestinationNotAllowedException) => any;
}
/**
 * <p>The contact is not permitted.</p>
 */
export interface OutboundContactNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OutboundContactNotPermittedException";
    $fault: "client";
    /**
     * <p>The message about the contact.</p>
     */
    Message?: string;
}
export declare namespace OutboundContactNotPermittedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutboundContactNotPermittedException) => any;
}
export interface StartOutboundVoiceContactRequest {
    /**
     * <p>The phone number of the customer, in E.164 format.</p>
     */
    DestinationPhoneNumber: string | undefined;
    /**
     * <p>The
     *    identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect
     *    console user interface, on the navigation menu go to <b>Routing</b>,
     *     <b>Contact Flows</b>. Choose the contact flow. On the contact flow
     *    page, under the name of the contact flow, choose <b>Show additional flow
     *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
     *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
     *          </p>
     */
    ContactFlowId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *    request. The token is valid for 7 days after creation. If a contact is already started, the
     *    contact ID is returned. If the contact is disconnected, a new contact is started.</p>
     */
    ClientToken?: string;
    /**
     * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify
     *    a source phone number, you must specify a queue.</p>
     */
    SourcePhoneNumber?: string;
    /**
     * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
     *    phone number specified in the queue. If you do not specify a queue, the queue defined in the
     *    contact flow is used. If you do not specify a queue, you must specify a source phone
     *    number.</p>
     */
    QueueId?: string;
    /**
     * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
     *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
     *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
     *    can include only alphanumeric, dash, and underscore characters.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
}
export declare namespace StartOutboundVoiceContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOutboundVoiceContactRequest) => any;
}
export interface StartOutboundVoiceContactResponse {
    /**
     * <p>The identifier of this contact within the Amazon Connect instance.</p>
     */
    ContactId?: string;
}
export declare namespace StartOutboundVoiceContactResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOutboundVoiceContactResponse) => any;
}
export declare enum ReferenceType {
    URL = "URL"
}
/**
 * <p>A link that an agent selects to complete a given task. You can have up to 4,096 UTF-8 bytes
 *    across all references for a contact.</p>
 */
export interface Reference {
    /**
     * <p>A formatted URL that displays to an agent in the Contact Control Panel (CCP)</p>
     */
    Value: string | undefined;
    /**
     * <p>A valid
     *    URL.</p>
     */
    Type: ReferenceType | string | undefined;
}
export declare namespace Reference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Reference) => any;
}
export interface StartTaskContactRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the previous chat, voice, or task contact. </p>
     */
    PreviousContactId?: string;
    /**
     * <p>The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the
     *    Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On
     *    the contact flow page, under the name of the contact flow, choose <b>Show
     *     additional flow information</b>. The ContactFlowId is the last part of the ARN, shown
     *    here in bold: </p>
     *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
     *          </p>
     */
    ContactFlowId: string | undefined;
    /**
     * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
     *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
     *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
     *    can include only alphanumeric, dash, and underscore characters.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
    /**
     * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
     */
    Name: string | undefined;
    /**
     * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
     */
    References?: {
        [key: string]: Reference;
    };
    /**
     * <p>A description of the task that is shown to an agent in the Contact Control Panel
     *    (CCP).</p>
     */
    Description?: string;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *    request.</p>
     */
    ClientToken?: string;
}
export declare namespace StartTaskContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartTaskContactRequest) => any;
}
export interface StartTaskContactResponse {
    /**
     * <p>The identifier of this contact within the Amazon Connect instance.</p>
     */
    ContactId?: string;
}
export declare namespace StartTaskContactResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartTaskContactResponse) => any;
}
/**
 * <p>The contact with the specified ID is not active or does not exist.</p>
 */
export interface ContactNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ContactNotFoundException";
    $fault: "client";
    /**
     * <p>The message.</p>
     */
    Message?: string;
}
export declare namespace ContactNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactNotFoundException) => any;
}
export interface StopContactRequest {
    /**
     * <p>The ID of the contact.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace StopContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopContactRequest) => any;
}
export interface StopContactResponse {
}
export declare namespace StopContactResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopContactResponse) => any;
}
export interface StopContactRecordingRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The identifier of the contact. This is the identifier of the contact associated with the
     *    first interaction with the contact center.</p>
     */
    InitialContactId: string | undefined;
}
export declare namespace StopContactRecordingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopContactRecordingRequest) => any;
}
export interface StopContactRecordingResponse {
}
export declare namespace StopContactRecordingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopContactRecordingResponse) => any;
}
export interface SuspendContactRecordingRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The identifier of the contact. This is the identifier of the contact associated with the
     *    first interaction with the contact center.</p>
     */
    InitialContactId: string | undefined;
}
export declare namespace SuspendContactRecordingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuspendContactRecordingRequest) => any;
}
export interface SuspendContactRecordingResponse {
}
export declare namespace SuspendContactRecordingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuspendContactRecordingResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag keys.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateContactAttributesRequest {
    /**
     * <p>The identifier of the contact. This is the identifier of the contact associated with the
     *    first interaction with the contact center.</p>
     */
    InitialContactId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other
     *    contact attributes.</p>
     *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
     *    can include only alphanumeric, dash, and underscore characters.</p>
     */
    Attributes: {
        [key: string]: string;
    } | undefined;
}
export declare namespace UpdateContactAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactAttributesRequest) => any;
}
export interface UpdateContactAttributesResponse {
}
export declare namespace UpdateContactAttributesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactAttributesResponse) => any;
}
export interface UpdateContactFlowContentRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId: string | undefined;
    /**
     * <p>The JSON string that represents contact flow’s content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language-example.html">Example contact
     *     flow in Amazon Connect Flow language</a> in the <i>Amazon Connect Administrator Guide</i>.
     *   </p>
     */
    Content: string | undefined;
}
export declare namespace UpdateContactFlowContentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactFlowContentRequest) => any;
}
export interface UpdateContactFlowNameRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the contact flow.</p>
     */
    ContactFlowId: string | undefined;
    /**
     * <p>The name of the contact flow.</p>
     */
    Name?: string;
    /**
     * <p>The description of the contact flow.</p>
     */
    Description?: string;
}
export declare namespace UpdateContactFlowNameRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactFlowNameRequest) => any;
}
export interface UpdateInstanceAttributeRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The type of attribute.</p>
     */
    AttributeType: InstanceAttributeType | string | undefined;
    /**
     * <p>The value for the attribute. Maximum character limit is 100. </p>
     */
    Value: string | undefined;
}
export declare namespace UpdateInstanceAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInstanceAttributeRequest) => any;
}
export interface UpdateInstanceStorageConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
     */
    AssociationId: string | undefined;
    /**
     * <p>A valid resource type.</p>
     */
    ResourceType: InstanceStorageResourceType | string | undefined;
    /**
     * <p>The storage configuration for the instance.</p>
     */
    StorageConfig: InstanceStorageConfig | undefined;
}
export declare namespace UpdateInstanceStorageConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInstanceStorageConfigRequest) => any;
}
export interface UpdateQueueHoursOfOperationRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The identifier for the hours of operation.</p>
     */
    HoursOfOperationId: string | undefined;
}
export declare namespace UpdateQueueHoursOfOperationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQueueHoursOfOperationRequest) => any;
}
export interface UpdateQueueMaxContactsRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
     */
    MaxContacts?: number;
}
export declare namespace UpdateQueueMaxContactsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQueueMaxContactsRequest) => any;
}
export interface UpdateQueueNameRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The name of the queue.</p>
     */
    Name?: string;
    /**
     * <p>The description of the queue.</p>
     */
    Description?: string;
}
export declare namespace UpdateQueueNameRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQueueNameRequest) => any;
}
export interface UpdateQueueOutboundCallerConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
     */
    OutboundCallerConfig: OutboundCallerConfig | undefined;
}
export declare namespace UpdateQueueOutboundCallerConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQueueOutboundCallerConfigRequest) => any;
}
export interface UpdateQueueStatusRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the queue.</p>
     */
    QueueId: string | undefined;
    /**
     * <p>The status of the queue.</p>
     */
    Status: QueueStatus | string | undefined;
}
export declare namespace UpdateQueueStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQueueStatusRequest) => any;
}
export interface UpdateQuickConnectConfigRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId: string | undefined;
    /**
     * <p>Information about the configuration settings for the quick connect.</p>
     */
    QuickConnectConfig: QuickConnectConfig | undefined;
}
export declare namespace UpdateQuickConnectConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQuickConnectConfigRequest) => any;
}
export interface UpdateQuickConnectNameRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier for the quick connect.</p>
     */
    QuickConnectId: string | undefined;
    /**
     * <p>The name of the quick connect.</p>
     */
    Name?: string;
    /**
     * <p>The description of the quick connect.</p>
     */
    Description?: string;
}
export declare namespace UpdateQuickConnectNameRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateQuickConnectNameRequest) => any;
}
export interface UpdateRoutingProfileConcurrencyRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
     */
    MediaConcurrencies: MediaConcurrency[] | undefined;
}
export declare namespace UpdateRoutingProfileConcurrencyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRoutingProfileConcurrencyRequest) => any;
}
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The identifier for the default outbound queue.</p>
     */
    DefaultOutboundQueueId: string | undefined;
}
export declare namespace UpdateRoutingProfileDefaultOutboundQueueRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRoutingProfileDefaultOutboundQueueRequest) => any;
}
export interface UpdateRoutingProfileNameRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The name of the routing profile. Must not be more than 127 characters.</p>
     */
    Name?: string;
    /**
     * <p>The description of the routing profile. Must not be more than 250 characters.</p>
     */
    Description?: string;
}
export declare namespace UpdateRoutingProfileNameRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRoutingProfileNameRequest) => any;
}
export interface UpdateRoutingProfileQueuesRequest {
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The identifier of the routing profile.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The queues to be updated for this routing profile.
     *    Queues must first be associated to the routing
     *    profile. You can do this using AssociateRoutingProfileQueues.</p>
     */
    QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}
export declare namespace UpdateRoutingProfileQueuesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRoutingProfileQueuesRequest) => any;
}
export interface UpdateUserHierarchyRequest {
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    HierarchyGroupId?: string;
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserHierarchyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserHierarchyRequest) => any;
}
export interface UpdateUserHierarchyGroupNameRequest {
    /**
     * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
     */
    Name: string | undefined;
    /**
     * <p>The identifier of the hierarchy group.</p>
     */
    HierarchyGroupId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserHierarchyGroupNameRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserHierarchyGroupNameRequest) => any;
}
/**
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
    /**
     * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
     */
    Name: string | undefined;
}
export declare namespace HierarchyLevelUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyLevelUpdate) => any;
}
/**
 * <p>Contains information about the level hierarchy to update.</p>
 */
export interface HierarchyStructureUpdate {
    /**
     * <p>The
     *    update
     *    for level one.</p>
     */
    LevelOne?: HierarchyLevelUpdate;
    /**
     * <p>The update for level two.</p>
     */
    LevelTwo?: HierarchyLevelUpdate;
    /**
     * <p>The update for level three.</p>
     */
    LevelThree?: HierarchyLevelUpdate;
    /**
     * <p>The update for level four.</p>
     */
    LevelFour?: HierarchyLevelUpdate;
    /**
     * <p>The update for level five.</p>
     */
    LevelFive?: HierarchyLevelUpdate;
}
export declare namespace HierarchyStructureUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HierarchyStructureUpdate) => any;
}
export interface UpdateUserHierarchyStructureRequest {
    /**
     * <p>The hierarchy levels to update.</p>
     */
    HierarchyStructure: HierarchyStructureUpdate | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserHierarchyStructureRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserHierarchyStructureRequest) => any;
}
export interface UpdateUserIdentityInfoRequest {
    /**
     * <p>The identity information for the user.</p>
     */
    IdentityInfo: UserIdentityInfo | undefined;
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserIdentityInfoRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserIdentityInfoRequest) => any;
}
export interface UpdateUserPhoneConfigRequest {
    /**
     * <p>Information about phone configuration settings for the user.</p>
     */
    PhoneConfig: UserPhoneConfig | undefined;
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserPhoneConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserPhoneConfigRequest) => any;
}
export interface UpdateUserRoutingProfileRequest {
    /**
     * <p>The identifier of the routing profile for the user.</p>
     */
    RoutingProfileId: string | undefined;
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserRoutingProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserRoutingProfileRequest) => any;
}
export interface UpdateUserSecurityProfilesRequest {
    /**
     * <p>The identifiers of the security profiles for the user.</p>
     */
    SecurityProfileIds: string[] | undefined;
    /**
     * <p>The identifier of the user account.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The identifier of the Amazon Connect instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace UpdateUserSecurityProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserSecurityProfilesRequest) => any;
}
