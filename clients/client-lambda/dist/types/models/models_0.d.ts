/// <reference types="node" />
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";
/**
 * <p>Limits that are related to concurrency and storage. All file and storage sizes are in bytes.</p>
 */
export interface AccountLimit {
    /**
     * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
     */
    TotalCodeSize?: number;
    /**
     * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
     */
    CodeSizeUnzipped?: number;
    /**
     * <p>The maximum size of a deployment package when it's uploaded directly to AWS Lambda. Use Amazon S3 for larger
     *       files.</p>
     */
    CodeSizeZipped?: number;
    /**
     * <p>The maximum number of simultaneous function executions.</p>
     */
    ConcurrentExecutions?: number;
    /**
     * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual
     *       functions with <a>PutFunctionConcurrency</a>.</p>
     */
    UnreservedConcurrentExecutions?: number;
}
export declare namespace AccountLimit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountLimit) => any;
}
/**
 * <p>The number of functions and amount of storage in use.</p>
 */
export interface AccountUsage {
    /**
     * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
     */
    TotalCodeSize?: number;
    /**
     * <p>The number of Lambda functions.</p>
     */
    FunctionCount?: number;
}
export declare namespace AccountUsage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountUsage) => any;
}
export interface AddLayerVersionPermissionRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
    /**
     * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
     */
    StatementId: string | undefined;
    /**
     * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
     */
    Action: string | undefined;
    /**
     * <p>An account ID, or <code>*</code> to grant permission to all AWS accounts.</p>
     */
    Principal: string | undefined;
    /**
     * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified
     *       organization.</p>
     */
    OrganizationId?: string;
    /**
     * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace AddLayerVersionPermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddLayerVersionPermissionRequest) => any;
}
export interface AddLayerVersionPermissionResponse {
    /**
     * <p>The permission statement.</p>
     */
    Statement?: string;
    /**
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
export declare namespace AddLayerVersionPermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddLayerVersionPermissionResponse) => any;
}
/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterValueException";
    $fault: "client";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * <p>The exception message.</p>
     */
    message?: string;
}
export declare namespace InvalidParameterValueException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterValueException) => any;
}
/**
 * <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface PolicyLengthExceededException extends __SmithyException, $MetadataBearer {
    name: "PolicyLengthExceededException";
    $fault: "client";
    Type?: string;
    message?: string;
}
export declare namespace PolicyLengthExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyLengthExceededException) => any;
}
/**
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the
 *         <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your
 *       resource.</p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
    name: "PreconditionFailedException";
    $fault: "client";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * <p>The exception message.</p>
     */
    message?: string;
}
export declare namespace PreconditionFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PreconditionFailedException) => any;
}
/**
 * <p>The resource already exists, or another operation is in progress.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
    name: "ResourceConflictException";
    $fault: "client";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * <p>The exception message.</p>
     */
    message?: string;
}
export declare namespace ResourceConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceConflictException) => any;
}
/**
 * <p>The resource specified in the request does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The AWS Lambda service encountered an internal error.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace ServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceException) => any;
}
export declare enum ThrottleReason {
    CallerRateLimitExceeded = "CallerRateLimitExceeded",
    ConcurrentInvocationLimitExceeded = "ConcurrentInvocationLimitExceeded",
    FunctionInvocationRateLimitExceeded = "FunctionInvocationRateLimitExceeded",
    ReservedFunctionConcurrentInvocationLimitExceeded = "ReservedFunctionConcurrentInvocationLimitExceeded",
    ReservedFunctionInvocationRateLimitExceeded = "ReservedFunctionInvocationRateLimitExceeded"
}
/**
 * <p>The request throughput limit was exceeded.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    /**
     * <p>The number of seconds the caller should wait before retrying.</p>
     */
    retryAfterSeconds?: string;
    Type?: string;
    message?: string;
    Reason?: ThrottleReason | string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
export interface AddPermissionRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
     */
    StatementId: string | undefined;
    /**
     * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or
     *         <code>lambda:GetFunction</code>.</p>
     */
    Action: string | undefined;
    /**
     * <p>The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or
     *         <code>SourceAccount</code> to limit who can invoke the function through that service.</p>
     */
    Principal: string | undefined;
    /**
     * <p>For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or
     *       Amazon SNS topic.</p>
     */
    SourceArn?: string;
    /**
     * <p>For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to
     *       ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted
     *       by its owner and recreated by another account.</p>
     */
    SourceAccount?: string;
    /**
     * <p>For Alexa Smart Home functions, a token that must be supplied by the invoker.</p>
     */
    EventSourceToken?: string;
    /**
     * <p>Specify a version or alias to add permissions to a published version of the function.</p>
     */
    Qualifier?: string;
    /**
     * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace AddPermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddPermissionRequest) => any;
}
export interface AddPermissionResponse {
    /**
     * <p>The permission statement that's added to the function policy.</p>
     */
    Statement?: string;
}
export declare namespace AddPermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddPermissionResponse) => any;
}
/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.</p>
 */
export interface AliasRoutingConfiguration {
    /**
     * <p>The second version, and the percentage of traffic that's routed to it.</p>
     */
    AdditionalVersionWeights?: {
        [key: string]: number;
    };
}
export declare namespace AliasRoutingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AliasRoutingConfiguration) => any;
}
/**
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 */
export interface AliasConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the alias.</p>
     */
    AliasArn?: string;
    /**
     * <p>The name of the alias.</p>
     */
    Name?: string;
    /**
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion?: string;
    /**
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * <p>A unique identifier that changes when you update the alias.</p>
     */
    RevisionId?: string;
}
export declare namespace AliasConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AliasConfiguration) => any;
}
/**
 * <p>List of signing profiles that can sign a code package. </p>
 */
export interface AllowedPublishers {
    /**
     * <p>The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user
     *       who can sign a code package. </p>
     */
    SigningProfileVersionArns: string[] | undefined;
}
export declare namespace AllowedPublishers {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllowedPublishers) => any;
}
export interface CreateAliasRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
    /**
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion: string | undefined;
    /**
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
}
export declare namespace CreateAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAliasRequest) => any;
}
export declare enum CodeSigningPolicy {
    Enforce = "Enforce",
    Warn = "Warn"
}
/**
 * <p>Code signing configuration policies specifies the validation failure action for signature mismatch or
 *        expiry.</p>
 */
export interface CodeSigningPolicies {
    /**
     * <p>Code signing configuration policy for deployment validation failure. If you set the policy to
     *       <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the
     *       policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p>
     *          <p>Default value: <code>Warn</code>
     *          </p>
     */
    UntrustedArtifactOnDeployment?: CodeSigningPolicy | string;
}
export declare namespace CodeSigningPolicies {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeSigningPolicies) => any;
}
export interface CreateCodeSigningConfigRequest {
    /**
     * <p>Descriptive name for this code signing configuration.</p>
     */
    Description?: string;
    /**
     * <p>Signing profiles for this code signing configuration.</p>
     */
    AllowedPublishers: AllowedPublishers | undefined;
    /**
     * <p>The code signing policies define the actions to take if the validation checks fail. </p>
     */
    CodeSigningPolicies?: CodeSigningPolicies;
}
export declare namespace CreateCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCodeSigningConfigRequest) => any;
}
/**
 * <p>Details about a Code signing configuration. </p>
 */
export interface CodeSigningConfig {
    /**
     * <p>Unique identifer for the Code signing configuration.</p>
     */
    CodeSigningConfigId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>Code signing configuration description.</p>
     */
    Description?: string;
    /**
     * <p>List of allowed publishers.</p>
     */
    AllowedPublishers: AllowedPublishers | undefined;
    /**
     * <p>The code signing policy controls the validation failure action for signature mismatch or expiry.</p>
     */
    CodeSigningPolicies: CodeSigningPolicies | undefined;
    /**
     * <p>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). </p>
     */
    LastModified: string | undefined;
}
export declare namespace CodeSigningConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeSigningConfig) => any;
}
export interface CreateCodeSigningConfigResponse {
    /**
     * <p>The code signing configuration.</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
export declare namespace CreateCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCodeSigningConfigResponse) => any;
}
/**
 * <p>A destination for events that failed processing.</p>
 */
export interface OnFailure {
    /**
     * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
     */
    Destination?: string;
}
export declare namespace OnFailure {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OnFailure) => any;
}
/**
 * <p>A destination for events that were processed successfully.</p>
 */
export interface OnSuccess {
    /**
     * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
     */
    Destination?: string;
}
export declare namespace OnSuccess {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OnSuccess) => any;
}
/**
 * <p>A configuration object that specifies the destination of an event after Lambda processes it.</p>
 */
export interface DestinationConfig {
    /**
     * <p>The destination configuration for successful invocations.</p>
     */
    OnSuccess?: OnSuccess;
    /**
     * <p>The destination configuration for failed invocations.</p>
     */
    OnFailure?: OnFailure;
}
export declare namespace DestinationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DestinationConfig) => any;
}
export declare enum FunctionResponseType {
    ReportBatchItemFailures = "ReportBatchItemFailures"
}
export declare enum EndPointType {
    KAFKA_BOOTSTRAP_SERVERS = "KAFKA_BOOTSTRAP_SERVERS"
}
/**
 * <p>The Self-Managed Apache Kafka cluster for your event source.</p>
 */
export interface SelfManagedEventSource {
    /**
     * <p>The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.</p>
     */
    Endpoints?: {
        [key: string]: string[];
    };
}
export declare namespace SelfManagedEventSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SelfManagedEventSource) => any;
}
export declare enum SourceAccessType {
    BASIC_AUTH = "BASIC_AUTH",
    SASL_SCRAM_256_AUTH = "SASL_SCRAM_256_AUTH",
    SASL_SCRAM_512_AUTH = "SASL_SCRAM_512_AUTH",
    VPC_SECURITY_GROUP = "VPC_SECURITY_GROUP",
    VPC_SUBNET = "VPC_SUBNET"
}
/**
 * <p>You can specify the authentication protocol, or the VPC components to secure access to your event source.</p>
 */
export interface SourceAccessConfiguration {
    /**
     * <p>The type of authentication protocol or the VPC components for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BASIC_AUTH</code> - (MQ) The Secrets Manager secret that stores your broker credentials.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VPC_SUBNET</code> - The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your Self-Managed Apache Kafka cluster.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VPC_SECURITY_GROUP</code> - The VPC security group used to manage access to your Self-Managed Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SASL_SCRAM_256_AUTH</code> - The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your Self-Managed Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SASL_SCRAM_512_AUTH</code> - The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your Self-Managed Apache Kafka brokers.</p>
     *             </li>
     *          </ul>
     */
    Type?: SourceAccessType | string;
    /**
     * <p>The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.</p>
     */
    URI?: string;
}
export declare namespace SourceAccessConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SourceAccessConfiguration) => any;
}
export declare enum EventSourcePosition {
    AT_TIMESTAMP = "AT_TIMESTAMP",
    LATEST = "LATEST",
    TRIM_HORIZON = "TRIM_HORIZON"
}
export interface CreateEventSourceMappingRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
     *             </li>
     *          </ul>
     */
    EventSourceArn?: string;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The maximum number of items to retrieve in a single batch.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p>
     *             </li>
     *          </ul>
     */
    BatchSize?: number;
    /**
     * <p>(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * <p>(Streams) The number of batches to process from each shard concurrently.</p>
     */
    ParallelizationFactor?: number;
    /**
     * <p>The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams
     *       sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams.</p>
     */
    StartingPosition?: EventSourcePosition | string;
    /**
     * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
     *       reading.</p>
     */
    StartingPositionTimestamp?: Date;
    /**
     * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1).</p>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>(Streams) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * <p>The name of the Kafka topic.</p>
     */
    Topics?: string[];
    /**
     * <p>
     *       (MQ) The name of the Amazon MQ broker destination queue to consume.
     *     </p>
     */
    Queues?: string[];
    /**
     * <p>An array of the authentication protocol, or the VPC components to secure your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * <p>The Self-Managed Apache Kafka cluster to send records.</p>
     */
    SelfManagedEventSource?: SelfManagedEventSource;
    /**
     * <p>(Streams) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
}
export declare namespace CreateEventSourceMappingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEventSourceMappingRequest) => any;
}
/**
 * <p>A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details.</p>
 */
export interface EventSourceMappingConfiguration {
    /**
     * <p>The identifier of the event source mapping.</p>
     */
    UUID?: string;
    /**
     * <p>The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams
     *       sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams.</p>
     */
    StartingPosition?: EventSourcePosition | string;
    /**
     * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
     *       reading.</p>
     */
    StartingPositionTimestamp?: Date;
    /**
     * <p>The maximum number of items to retrieve in a single batch.</p>
     */
    BatchSize?: number;
    /**
     * <p>(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds. The default value is zero.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * <p>(Streams) The number of batches to process from each shard concurrently. The default value is 1.</p>
     */
    ParallelizationFactor?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     */
    EventSourceArn?: string;
    /**
     * <p>The ARN of the Lambda function.</p>
     */
    FunctionArn?: string;
    /**
     * <p>The date that the event source mapping was last updated, or its state changed.</p>
     */
    LastModified?: Date;
    /**
     * <p>The result of the last AWS Lambda invocation of your Lambda function.</p>
     */
    LastProcessingResult?: string;
    /**
     * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>,
     *       <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>,
     *       <code>Updating</code>, or <code>Deleting</code>.</p>
     */
    State?: string;
    /**
     * <p>Indicates whether the last change to the event source mapping was made by a user, or by the Lambda
     *       service.</p>
     */
    StateTransitionReason?: string;
    /**
     * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * <p>The name of the Kafka topic.</p>
     */
    Topics?: string[];
    /**
     * <p>
     *       (MQ) The name of the Amazon MQ broker destination queue to consume.
     *     </p>
     */
    Queues?: string[];
    /**
     * <p>An array of the authentication protocol, or the VPC components to secure your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * <p>The Self-Managed Apache Kafka cluster for your event source.</p>
     */
    SelfManagedEventSource?: SelfManagedEventSource;
    /**
     * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * <p>(Streams) If the function returns an error, split the batch in two and retry. The default value is false.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>(Streams) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * <p>(Streams) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
}
export declare namespace EventSourceMappingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventSourceMappingConfiguration) => any;
}
/**
 * <p>The specified code signing configuration does not exist.</p>
 */
export interface CodeSigningConfigNotFoundException extends __SmithyException, $MetadataBearer {
    name: "CodeSigningConfigNotFoundException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace CodeSigningConfigNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeSigningConfigNotFoundException) => any;
}
/**
 * <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface CodeStorageExceededException extends __SmithyException, $MetadataBearer {
    name: "CodeStorageExceededException";
    $fault: "client";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    message?: string;
}
export declare namespace CodeStorageExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeStorageExceededException) => any;
}
/**
 * <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code signing policy
 *       is set to ENFORCE. Lambda blocks the deployment. </p>
 */
export interface CodeVerificationFailedException extends __SmithyException, $MetadataBearer {
    name: "CodeVerificationFailedException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace CodeVerificationFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeVerificationFailedException) => any;
}
/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment
 *       package directly, or specify the URI of a container image.</p>
 */
export interface FunctionCode {
    /**
     * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for
     *   you.</p>
     */
    ZipFile?: Uint8Array;
    /**
     * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The Amazon S3 key of the deployment package.</p>
     */
    S3Key?: string;
    /**
     * <p>For versioned objects, the version of the deployment package object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * <p>URI of a container image in the Amazon ECR registry.</p>
     */
    ImageUri?: string;
}
export declare namespace FunctionCode {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionCode) => any;
}
/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for
 *       failed asynchronous invocations.</p>
 */
export interface DeadLetterConfig {
    /**
     * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
     */
    TargetArn?: string;
}
export declare namespace DeadLetterConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeadLetterConfig) => any;
}
/**
 * <p>A function's environment variable settings.</p>
 */
export interface Environment {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {
        [key: string]: string;
    };
}
export declare namespace Environment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Environment) => any;
}
/**
 * <p>Details about the connection between a Lambda function and an Amazon EFS file system.</p>
 */
export interface FileSystemConfig {
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
     */
    LocalMountPath: string | undefined;
}
export declare namespace FileSystemConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FileSystemConfig) => any;
}
/**
 * <p>Configuration values that override the container image Dockerfile settings. See
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. </p>
 */
export interface ImageConfig {
    /**
     * <p>Specifies the entry point to their application, which is typically the location of the runtime
     *       executable.</p>
     */
    EntryPoint?: string[];
    /**
     * <p>Specifies parameters that you want to pass in with ENTRYPOINT. </p>
     */
    Command?: string[];
    /**
     * <p>Specifies the working directory.</p>
     */
    WorkingDirectory?: string;
}
export declare namespace ImageConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageConfig) => any;
}
export declare enum PackageType {
    Image = "Image",
    Zip = "Zip"
}
export declare enum Runtime {
    dotnetcore10 = "dotnetcore1.0",
    dotnetcore20 = "dotnetcore2.0",
    dotnetcore21 = "dotnetcore2.1",
    dotnetcore31 = "dotnetcore3.1",
    go1x = "go1.x",
    java11 = "java11",
    java8 = "java8",
    java8al2 = "java8.al2",
    nodejs = "nodejs",
    nodejs10x = "nodejs10.x",
    nodejs12x = "nodejs12.x",
    nodejs14x = "nodejs14.x",
    nodejs43 = "nodejs4.3",
    nodejs43edge = "nodejs4.3-edge",
    nodejs610 = "nodejs6.10",
    nodejs810 = "nodejs8.10",
    provided = "provided",
    providedal2 = "provided.al2",
    python27 = "python2.7",
    python36 = "python3.6",
    python37 = "python3.7",
    python38 = "python3.8",
    ruby25 = "ruby2.5",
    ruby27 = "ruby2.7"
}
export declare enum TracingMode {
    Active = "Active",
    PassThrough = "PassThrough"
}
/**
 * <p>The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code>
 *       to <code>Active</code>.</p>
 */
export interface TracingConfig {
    /**
     * <p>The tracing mode.</p>
     */
    Mode?: TracingMode | string;
}
export declare namespace TracingConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TracingConfig) => any;
}
/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 */
export interface VpcConfig {
    /**
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>A list of VPC security groups IDs.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace VpcConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcConfig) => any;
}
export interface CreateFunctionRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
     */
    Runtime?: Runtime | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
     */
    Role: string | undefined;
    /**
     * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
     *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
     *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
     */
    Handler?: string;
    /**
     * <p>The code for the function.</p>
     */
    Code: FunctionCode | undefined;
    /**
     * <p>A description of the function.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     *       maximum allowed value is 900 seconds.</p>
     */
    Timeout?: number;
    /**
     * <p>The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU
     *       allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
     */
    MemorySize?: number;
    /**
     * <p>Set to true to publish the first version of the function during creation.</p>
     */
    Publish?: boolean;
    /**
     * <p>For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
     *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
     *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
     */
    VpcConfig?: VpcConfig;
    /**
     * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for ZIP archive.</p>
     */
    PackageType?: PackageType | string;
    /**
     * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
     *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * <p>Environment variables that are accessible from function code during execution.</p>
     */
    Environment?: Environment;
    /**
     * <p>The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment
     *       variables. If it's not provided, AWS Lambda uses a default service key.</p>
     */
    KMSKeyArn?: string;
    /**
     * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with AWS
     *       X-Ray.</p>
     */
    TracingConfig?: TracingConfig;
    /**
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the
     *       function.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
     *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
     */
    Layers?: string[];
    /**
     * <p>Connection settings for an Amazon EFS file system.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * <p>
     *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container image configuration
     *       values</a> that override the values in the container image Dockerfile.</p>
     */
    ImageConfig?: ImageConfig;
    /**
     * <p>To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.</p>
     */
    CodeSigningConfigArn?: string;
}
export declare namespace CreateFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFunctionRequest) => any;
}
/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface EnvironmentError {
    /**
     * <p>The error code.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The error message.</p>
     */
    Message?: string;
}
export declare namespace EnvironmentError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnvironmentError) => any;
}
/**
 * <p>The results of an operation to update or read environment variables. If the operation is successful, the
 *       response contains the environment variables. If it failed, the response contains details about the error.</p>
 */
export interface EnvironmentResponse {
    /**
     * <p>Environment variable key-value pairs.</p>
     */
    Variables?: {
        [key: string]: string;
    };
    /**
     * <p>Error messages for environment variables that couldn't be applied.</p>
     */
    Error?: EnvironmentError;
}
export declare namespace EnvironmentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnvironmentResponse) => any;
}
/**
 * <p>Error response to GetFunctionConfiguration.</p>
 */
export interface ImageConfigError {
    /**
     * <p>Error code.</p>
     */
    ErrorCode?: string;
    /**
     * <p>Error message.</p>
     */
    Message?: string;
}
export declare namespace ImageConfigError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageConfigError) => any;
}
/**
 * <p>Response to GetFunctionConfiguration request.</p>
 */
export interface ImageConfigResponse {
    /**
     * <p>Configuration values that override the container image Dockerfile.</p>
     */
    ImageConfig?: ImageConfig;
    /**
     * <p>Error response to GetFunctionConfiguration.</p>
     */
    Error?: ImageConfigError;
}
export declare namespace ImageConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageConfigResponse) => any;
}
export declare enum LastUpdateStatus {
    Failed = "Failed",
    InProgress = "InProgress",
    Successful = "Successful"
}
export declare enum LastUpdateStatusReasonCode {
    EniLimitExceeded = "EniLimitExceeded",
    ImageAccessDenied = "ImageAccessDenied",
    ImageDeleted = "ImageDeleted",
    InsufficientRolePermissions = "InsufficientRolePermissions",
    InternalError = "InternalError",
    InvalidConfiguration = "InvalidConfiguration",
    InvalidImage = "InvalidImage",
    InvalidSecurityGroup = "InvalidSecurityGroup",
    InvalidSubnet = "InvalidSubnet",
    SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses"
}
/**
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface Layer {
    /**
     * <p>The Amazon Resource Name (ARN) of the function layer.</p>
     */
    Arn?: string;
    /**
     * <p>The size of the layer archive in bytes.</p>
     */
    CodeSize?: number;
    /**
     * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
     */
    SigningJobArn?: string;
}
export declare namespace Layer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Layer) => any;
}
export declare enum State {
    Active = "Active",
    Failed = "Failed",
    Inactive = "Inactive",
    Pending = "Pending"
}
export declare enum StateReasonCode {
    Creating = "Creating",
    EniLimitExceeded = "EniLimitExceeded",
    Idle = "Idle",
    ImageAccessDenied = "ImageAccessDenied",
    ImageDeleted = "ImageDeleted",
    InsufficientRolePermissions = "InsufficientRolePermissions",
    InternalError = "InternalError",
    InvalidConfiguration = "InvalidConfiguration",
    InvalidImage = "InvalidImage",
    InvalidSecurityGroup = "InvalidSecurityGroup",
    InvalidSubnet = "InvalidSubnet",
    Restoring = "Restoring",
    SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses"
}
/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface TracingConfigResponse {
    /**
     * <p>The tracing mode.</p>
     */
    Mode?: TracingMode | string;
}
export declare namespace TracingConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TracingConfigResponse) => any;
}
/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface VpcConfigResponse {
    /**
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>A list of VPC security groups IDs.</p>
     */
    SecurityGroupIds?: string[];
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
export declare namespace VpcConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcConfigResponse) => any;
}
/**
 * <p>Details about a function's configuration.</p>
 */
export interface FunctionConfiguration {
    /**
     * <p>The name of the function.</p>
     */
    FunctionName?: string;
    /**
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    FunctionArn?: string;
    /**
     * <p>The runtime environment for the Lambda function.</p>
     */
    Runtime?: Runtime | string;
    /**
     * <p>The function's execution role.</p>
     */
    Role?: string;
    /**
     * <p>The function that Lambda calls to begin executing your function.</p>
     */
    Handler?: string;
    /**
     * <p>The size of the function's deployment package, in bytes.</p>
     */
    CodeSize?: number;
    /**
     * <p>The function's description.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
     */
    Timeout?: number;
    /**
     * <p>The amount of memory available to the function at runtime. </p>
     */
    MemorySize?: number;
    /**
     * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    LastModified?: string;
    /**
     * <p>The SHA256 hash of the function's deployment package.</p>
     */
    CodeSha256?: string;
    /**
     * <p>The version of the Lambda function.</p>
     */
    Version?: string;
    /**
     * <p>The function's networking configuration.</p>
     */
    VpcConfig?: VpcConfigResponse;
    /**
     * <p>The function's dead letter queue.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * <p>The function's environment variables.</p>
     */
    Environment?: EnvironmentResponse;
    /**
     * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've
     *       configured a customer managed CMK.</p>
     */
    KMSKeyArn?: string;
    /**
     * <p>The function's AWS X-Ray tracing configuration.</p>
     */
    TracingConfig?: TracingConfigResponse;
    /**
     * <p>For Lambda@Edge functions, the ARN of the master function.</p>
     */
    MasterArn?: string;
    /**
     * <p>The latest updated revision of the function or alias.</p>
     */
    RevisionId?: string;
    /**
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
     *       layers</a>.</p>
     */
    Layers?: Layer[];
    /**
     * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by
     *       invoking it.</p>
     */
    State?: State | string;
    /**
     * <p>The reason for the function's current state.</p>
     */
    StateReason?: string;
    /**
     * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or
     *       modify the function.</p>
     */
    StateReasonCode?: StateReasonCode | string;
    /**
     * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code>
     *       after function creation completes.</p>
     */
    LastUpdateStatus?: LastUpdateStatus | string;
    /**
     * <p>The reason for the last update that was performed on the function.</p>
     */
    LastUpdateStatusReason?: string;
    /**
     * <p>The reason code for the last update that was performed on the function.</p>
     */
    LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | string;
    /**
     * <p>Connection settings for an Amazon EFS file system.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
     */
    PackageType?: PackageType | string;
    /**
     * <p>The function's image configuration values.</p>
     */
    ImageConfigResponse?: ImageConfigResponse;
    /**
     * <p>The ARN of the signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * <p>The ARN of the signing job.</p>
     */
    SigningJobArn?: string;
}
export declare namespace FunctionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionConfiguration) => any;
}
/**
 * <p>The code signature failed the integrity check. Lambda always blocks deployment if the integrity check
 *       fails, even if code signing policy is set to WARN.</p>
 */
export interface InvalidCodeSignatureException extends __SmithyException, $MetadataBearer {
    name: "InvalidCodeSignatureException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace InvalidCodeSignatureException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidCodeSignatureException) => any;
}
export interface DeleteAliasRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAliasRequest) => any;
}
export interface DeleteCodeSigningConfigRequest {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
}
export declare namespace DeleteCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteCodeSigningConfigRequest) => any;
}
export interface DeleteCodeSigningConfigResponse {
}
export declare namespace DeleteCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteCodeSigningConfigResponse) => any;
}
export interface DeleteEventSourceMappingRequest {
    /**
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
}
export declare namespace DeleteEventSourceMappingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventSourceMappingRequest) => any;
}
/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSource
 *       Mapping in CREATING, or tried to delete a EventSource mapping currently in the UPDATING state.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
export interface DeleteFunctionRequest {
    /**
     * <p>The name of the Lambda function or version.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify a version to delete. You can't delete a version that's referenced by an alias.</p>
     */
    Qualifier?: string;
}
export declare namespace DeleteFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionRequest) => any;
}
export interface DeleteFunctionCodeSigningConfigRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace DeleteFunctionCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionCodeSigningConfigRequest) => any;
}
export interface DeleteFunctionConcurrencyRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace DeleteFunctionConcurrencyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionConcurrencyRequest) => any;
}
export interface DeleteFunctionEventInvokeConfigRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
}
export declare namespace DeleteFunctionEventInvokeConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionEventInvokeConfigRequest) => any;
}
export interface DeleteLayerVersionRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
export declare namespace DeleteLayerVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLayerVersionRequest) => any;
}
export interface DeleteProvisionedConcurrencyConfigRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
}
export declare namespace DeleteProvisionedConcurrencyConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProvisionedConcurrencyConfigRequest) => any;
}
export interface GetAccountSettingsRequest {
}
export declare namespace GetAccountSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccountSettingsRequest) => any;
}
export interface GetAccountSettingsResponse {
    /**
     * <p>Limits that are related to concurrency and code storage.</p>
     */
    AccountLimit?: AccountLimit;
    /**
     * <p>The number of functions and amount of storage in use.</p>
     */
    AccountUsage?: AccountUsage;
}
export declare namespace GetAccountSettingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccountSettingsResponse) => any;
}
export interface GetAliasRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAliasRequest) => any;
}
export interface GetCodeSigningConfigRequest {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration. </p>
     */
    CodeSigningConfigArn: string | undefined;
}
export declare namespace GetCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCodeSigningConfigRequest) => any;
}
export interface GetCodeSigningConfigResponse {
    /**
     * <p>The code signing configuration</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
export declare namespace GetCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCodeSigningConfigResponse) => any;
}
export interface GetEventSourceMappingRequest {
    /**
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
}
export declare namespace GetEventSourceMappingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEventSourceMappingRequest) => any;
}
export interface GetFunctionRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify a version or alias to get details about a published version of the function.</p>
     */
    Qualifier?: string;
}
export declare namespace GetFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionRequest) => any;
}
/**
 * <p>Details about a function's deployment package.</p>
 */
export interface FunctionCodeLocation {
    /**
     * <p>The service that's hosting the file.</p>
     */
    RepositoryType?: string;
    /**
     * <p>A presigned URL that you can use to download the deployment package.</p>
     */
    Location?: string;
    /**
     * <p>URI of a container image in the Amazon ECR registry.</p>
     */
    ImageUri?: string;
    /**
     * <p>The resolved URI for the image.</p>
     */
    ResolvedImageUri?: string;
}
export declare namespace FunctionCodeLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionCodeLocation) => any;
}
export interface Concurrency {
    /**
     * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
     */
    ReservedConcurrentExecutions?: number;
}
export declare namespace Concurrency {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Concurrency) => any;
}
export interface GetFunctionResponse {
    /**
     * <p>The configuration of the function or version.</p>
     */
    Configuration?: FunctionConfiguration;
    /**
     * <p>The deployment package of the function or version.</p>
     */
    Code?: FunctionCodeLocation;
    /**
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved
     *         concurrency</a>.</p>
     */
    Concurrency?: Concurrency;
}
export declare namespace GetFunctionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionResponse) => any;
}
export interface GetFunctionCodeSigningConfigRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace GetFunctionCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionCodeSigningConfigRequest) => any;
}
export interface GetFunctionCodeSigningConfigResponse {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace GetFunctionCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionCodeSigningConfigResponse) => any;
}
export interface GetFunctionConcurrencyRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace GetFunctionConcurrencyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionConcurrencyRequest) => any;
}
export interface GetFunctionConcurrencyResponse {
    /**
     * <p>The number of simultaneous executions that are reserved for the function.</p>
     */
    ReservedConcurrentExecutions?: number;
}
export declare namespace GetFunctionConcurrencyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionConcurrencyResponse) => any;
}
export interface GetFunctionConfigurationRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify a version or alias to get details about a published version of the function.</p>
     */
    Qualifier?: string;
}
export declare namespace GetFunctionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionConfigurationRequest) => any;
}
export interface FunctionEventInvokeConfig {
    /**
     * <p>The date and time that the configuration was last updated.</p>
     */
    LastModified?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the function.</p>
     */
    FunctionArn?: string;
    /**
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of an SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of an SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
export declare namespace FunctionEventInvokeConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionEventInvokeConfig) => any;
}
export interface GetFunctionEventInvokeConfigRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
}
export declare namespace GetFunctionEventInvokeConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionEventInvokeConfigRequest) => any;
}
export interface GetLayerVersionRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
export declare namespace GetLayerVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLayerVersionRequest) => any;
}
/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionContentOutput {
    /**
     * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
     */
    Location?: string;
    /**
     * <p>The SHA-256 hash of the layer archive.</p>
     */
    CodeSha256?: string;
    /**
     * <p>The size of the layer archive in bytes.</p>
     */
    CodeSize?: number;
    /**
     * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
     */
    SigningJobArn?: string;
}
export declare namespace LayerVersionContentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LayerVersionContentOutput) => any;
}
export interface GetLayerVersionResponse {
    /**
     * <p>Details about the layer version.</p>
     */
    Content?: LayerVersionContentOutput;
    /**
     * <p>The ARN of the layer.</p>
     */
    LayerArn?: string;
    /**
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreatedDate?: string;
    /**
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * <p>The layer's compatible runtimes.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * <p>The layer's software license.</p>
     */
    LicenseInfo?: string;
}
export declare namespace GetLayerVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLayerVersionResponse) => any;
}
export interface GetLayerVersionByArnRequest {
    /**
     * <p>The ARN of the layer version.</p>
     */
    Arn: string | undefined;
}
export declare namespace GetLayerVersionByArnRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLayerVersionByArnRequest) => any;
}
export interface GetLayerVersionPolicyRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
export declare namespace GetLayerVersionPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLayerVersionPolicyRequest) => any;
}
export interface GetLayerVersionPolicyResponse {
    /**
     * <p>The policy document.</p>
     */
    Policy?: string;
    /**
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
export declare namespace GetLayerVersionPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLayerVersionPolicyResponse) => any;
}
export interface GetPolicyRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify a version or alias to get the policy for that resource.</p>
     */
    Qualifier?: string;
}
export declare namespace GetPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyRequest) => any;
}
export interface GetPolicyResponse {
    /**
     * <p>The resource-based policy.</p>
     */
    Policy?: string;
    /**
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
export declare namespace GetPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyResponse) => any;
}
export interface GetProvisionedConcurrencyConfigRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
}
export declare namespace GetProvisionedConcurrencyConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetProvisionedConcurrencyConfigRequest) => any;
}
export declare enum ProvisionedConcurrencyStatusEnum {
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    READY = "READY"
}
export interface GetProvisionedConcurrencyConfigResponse {
    /**
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency allocated.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
export declare namespace GetProvisionedConcurrencyConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetProvisionedConcurrencyConfigResponse) => any;
}
/**
 * <p>The specified configuration does not exist.</p>
 */
export interface ProvisionedConcurrencyConfigNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ProvisionedConcurrencyConfigNotFoundException";
    $fault: "client";
    Type?: string;
    message?: string;
}
export declare namespace ProvisionedConcurrencyConfigNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedConcurrencyConfigNotFoundException) => any;
}
/**
 * <p>Need additional permissions to configure VPC settings.</p>
 */
export interface EC2AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "EC2AccessDeniedException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace EC2AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EC2AccessDeniedException) => any;
}
/**
 * <p>AWS Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided
 *       for the Lambda function.</p>
 */
export interface EC2ThrottledException extends __SmithyException, $MetadataBearer {
    name: "EC2ThrottledException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace EC2ThrottledException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EC2ThrottledException) => any;
}
/**
 * <p>AWS Lambda received an unexpected EC2 client exception while setting up for the Lambda function.</p>
 */
export interface EC2UnexpectedException extends __SmithyException, $MetadataBearer {
    name: "EC2UnexpectedException";
    $fault: "server";
    Type?: string;
    Message?: string;
    EC2ErrorCode?: string;
}
export declare namespace EC2UnexpectedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EC2UnexpectedException) => any;
}
/**
 * <p>An error occured when reading from or writing to a connected file system.</p>
 */
export interface EFSIOException extends __SmithyException, $MetadataBearer {
    name: "EFSIOException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace EFSIOException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EFSIOException) => any;
}
/**
 * <p>The function couldn't make a network connection to the configured file system.</p>
 */
export interface EFSMountConnectivityException extends __SmithyException, $MetadataBearer {
    name: "EFSMountConnectivityException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace EFSMountConnectivityException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EFSMountConnectivityException) => any;
}
/**
 * <p>The function couldn't mount the configured file system due to a permission or configuration issue.</p>
 */
export interface EFSMountFailureException extends __SmithyException, $MetadataBearer {
    name: "EFSMountFailureException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace EFSMountFailureException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EFSMountFailureException) => any;
}
/**
 * <p>The function was able to make a network connection to the configured file system, but the mount operation
 *       timed out.</p>
 */
export interface EFSMountTimeoutException extends __SmithyException, $MetadataBearer {
    name: "EFSMountTimeoutException";
    $fault: "client";
    Type?: string;
    Message?: string;
}
export declare namespace EFSMountTimeoutException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EFSMountTimeoutException) => any;
}
/**
 * <p>AWS Lambda was not able to create an elastic network interface in the VPC, specified as part of Lambda
 *       function configuration, because the limit for network interfaces has been reached.</p>
 */
export interface ENILimitReachedException extends __SmithyException, $MetadataBearer {
    name: "ENILimitReachedException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace ENILimitReachedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ENILimitReachedException) => any;
}
/**
 * <p>The request body could not be parsed as JSON.</p>
 */
export interface InvalidRequestContentException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestContentException";
    $fault: "client";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * <p>The exception message.</p>
     */
    message?: string;
}
export declare namespace InvalidRequestContentException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestContentException) => any;
}
/**
 * <p>The runtime or runtime version specified is not supported.</p>
 */
export interface InvalidRuntimeException extends __SmithyException, $MetadataBearer {
    name: "InvalidRuntimeException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace InvalidRuntimeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRuntimeException) => any;
}
/**
 * <p>The Security Group ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSecurityGroupIDException extends __SmithyException, $MetadataBearer {
    name: "InvalidSecurityGroupIDException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace InvalidSecurityGroupIDException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidSecurityGroupIDException) => any;
}
/**
 * <p>The Subnet ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSubnetIDException extends __SmithyException, $MetadataBearer {
    name: "InvalidSubnetIDException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace InvalidSubnetIDException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidSubnetIDException) => any;
}
/**
 * <p>AWS Lambda could not unzip the deployment package.</p>
 */
export interface InvalidZipFileException extends __SmithyException, $MetadataBearer {
    name: "InvalidZipFileException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace InvalidZipFileException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidZipFileException) => any;
}
export declare enum InvocationType {
    DryRun = "DryRun",
    Event = "Event",
    RequestResponse = "RequestResponse"
}
export declare enum LogType {
    None = "None",
    Tail = "Tail"
}
export interface InvocationRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Choose from the following options.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>RequestResponse</code> (default) - Invoke the function synchronously. Keep the connection open until
     *           the function returns a response or times out. The API response includes the function response and additional
     *           data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Event</code> - Invoke the function asynchronously. Send events that fail multiple times to the
     *           function's dead-letter queue (if it's configured). The API response only includes a status code.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DryRun</code> - Validate parameter values and verify that the user or role has permission to invoke
     *           the function.</p>
     *             </li>
     *          </ul>
     */
    InvocationType?: InvocationType | string;
    /**
     * <p>Set to <code>Tail</code> to include the execution log in the response.</p>
     */
    LogType?: LogType | string;
    /**
     * <p>Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function in the context
     *       object.</p>
     */
    ClientContext?: string;
    /**
     * <p>The JSON that you want to provide to your Lambda function as input.</p>
     */
    Payload?: Uint8Array;
    /**
     * <p>Specify a version or alias to invoke a published version of the function.</p>
     */
    Qualifier?: string;
}
export declare namespace InvocationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvocationRequest) => any;
}
export interface InvocationResponse {
    /**
     * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code>
     *       invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For
     *       the <code>DryRun</code> invocation type, the status code is 204.</p>
     */
    StatusCode?: number;
    /**
     * <p>If present, indicates that an error occurred during function execution. Details about the error are included
     *       in the response payload.</p>
     */
    FunctionError?: string;
    /**
     * <p>The last 4 KB of the execution log, which is base64 encoded.</p>
     */
    LogResult?: string;
    /**
     * <p>The response from the function, or an error object.</p>
     */
    Payload?: Uint8Array;
    /**
     * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which
     *       version the alias resolved to.</p>
     */
    ExecutedVersion?: string;
}
export declare namespace InvocationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvocationResponse) => any;
}
/**
 * <p>Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda
 *       function's KMS permissions.</p>
 */
export interface KMSAccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "KMSAccessDeniedException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace KMSAccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSAccessDeniedException) => any;
}
/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda
 *       function's KMS key settings.</p>
 */
export interface KMSDisabledException extends __SmithyException, $MetadataBearer {
    name: "KMSDisabledException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace KMSDisabledException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSDisabledException) => any;
}
/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for
 *       Decrypt. Check the function's KMS key settings.</p>
 */
export interface KMSInvalidStateException extends __SmithyException, $MetadataBearer {
    name: "KMSInvalidStateException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace KMSInvalidStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSInvalidStateException) => any;
}
/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's
 *       KMS key settings. </p>
 */
export interface KMSNotFoundException extends __SmithyException, $MetadataBearer {
    name: "KMSNotFoundException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace KMSNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSNotFoundException) => any;
}
/**
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see
 *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
 */
export interface RequestTooLargeException extends __SmithyException, $MetadataBearer {
    name: "RequestTooLargeException";
    $fault: "client";
    Type?: string;
    message?: string;
}
export declare namespace RequestTooLargeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestTooLargeException) => any;
}
/**
 * <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 */
export interface ResourceNotReadyException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotReadyException";
    $fault: "server";
    /**
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * <p>The exception message.</p>
     */
    message?: string;
}
export declare namespace ResourceNotReadyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotReadyException) => any;
}
/**
 * <p>AWS Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets
 *       has no available IP addresses.</p>
 */
export interface SubnetIPAddressLimitReachedException extends __SmithyException, $MetadataBearer {
    name: "SubnetIPAddressLimitReachedException";
    $fault: "server";
    Type?: string;
    Message?: string;
}
export declare namespace SubnetIPAddressLimitReachedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubnetIPAddressLimitReachedException) => any;
}
/**
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 */
export interface UnsupportedMediaTypeException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedMediaTypeException";
    $fault: "client";
    Type?: string;
    message?: string;
}
export declare namespace UnsupportedMediaTypeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedMediaTypeException) => any;
}
export interface InvokeAsyncRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The JSON that you want to provide to your Lambda function as input.</p>
     */
    InvokeArgs: Readable | ReadableStream | Blob | undefined;
}
export declare namespace InvokeAsyncRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvokeAsyncRequest) => any;
}
/**
 * @deprecated
 *
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. </p>
 */
export interface InvokeAsyncResponse {
    /**
     * <p>The status code.</p>
     */
    Status?: number;
}
export declare namespace InvokeAsyncResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvokeAsyncResponse) => any;
}
export interface ListAliasesRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify a function version to only list aliases that invoke that version.</p>
     */
    FunctionVersion?: string;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>Limit the number of aliases returned.</p>
     */
    MaxItems?: number;
}
export declare namespace ListAliasesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAliasesRequest) => any;
}
export interface ListAliasesResponse {
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of aliases.</p>
     */
    Aliases?: AliasConfiguration[];
}
export declare namespace ListAliasesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAliasesResponse) => any;
}
export interface ListCodeSigningConfigsRequest {
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>Maximum number of items to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListCodeSigningConfigsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCodeSigningConfigsRequest) => any;
}
export interface ListCodeSigningConfigsResponse {
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * <p>The code signing configurations</p>
     */
    CodeSigningConfigs?: CodeSigningConfig[];
}
export declare namespace ListCodeSigningConfigsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCodeSigningConfigsResponse) => any;
}
export interface ListEventSourceMappingsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
     *             </li>
     *          </ul>
     */
    EventSourceArn?: string;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName?: string;
    /**
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of event source mappings to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListEventSourceMappingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventSourceMappingsRequest) => any;
}
export interface ListEventSourceMappingsResponse {
    /**
     * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of event source mappings.</p>
     */
    EventSourceMappings?: EventSourceMappingConfiguration[];
}
export declare namespace ListEventSourceMappingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventSourceMappingsResponse) => any;
}
export interface ListFunctionEventInvokeConfigsRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of configurations to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListFunctionEventInvokeConfigsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionEventInvokeConfigsRequest) => any;
}
export interface ListFunctionEventInvokeConfigsResponse {
    /**
     * <p>A list of configurations.</p>
     */
    FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[];
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
}
export declare namespace ListFunctionEventInvokeConfigsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionEventInvokeConfigsResponse) => any;
}
export declare enum FunctionVersion {
    ALL = "ALL"
}
export interface ListFunctionsRequest {
    /**
     * <p>For Lambda@Edge functions, the AWS Region of the master function. For example, <code>us-east-1</code> filters
     *       the list of functions to only include Lambda@Edge functions replicated from a master function in US East (N.
     *       Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.</p>
     */
    MasterRegion?: string;
    /**
     * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
     */
    FunctionVersion?: FunctionVersion | string;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response,
     *       even if you set the number higher.</p>
     */
    MaxItems?: number;
}
export declare namespace ListFunctionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionsRequest) => any;
}
/**
 * <p>A list of Lambda functions.</p>
 */
export interface ListFunctionsResponse {
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of Lambda functions.</p>
     */
    Functions?: FunctionConfiguration[];
}
export declare namespace ListFunctionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionsResponse) => any;
}
export interface ListFunctionsByCodeSigningConfigRequest {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>Maximum number of items to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListFunctionsByCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionsByCodeSigningConfigRequest) => any;
}
export interface ListFunctionsByCodeSigningConfigResponse {
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * <p>The function ARNs. </p>
     */
    FunctionArns?: string[];
}
export declare namespace ListFunctionsByCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionsByCodeSigningConfigResponse) => any;
}
export interface ListLayersRequest {
    /**
     * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
     */
    CompatibleRuntime?: Runtime | string;
    /**
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of layers to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListLayersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLayersRequest) => any;
}
/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionsListItem {
    /**
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
     */
    CreatedDate?: string;
    /**
     * <p>The layer's compatible runtimes.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * <p>The layer's open-source license.</p>
     */
    LicenseInfo?: string;
}
export declare namespace LayerVersionsListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LayerVersionsListItem) => any;
}
/**
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayersListItem {
    /**
     * <p>The name of the layer.</p>
     */
    LayerName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the function layer.</p>
     */
    LayerArn?: string;
    /**
     * <p>The newest version of the layer.</p>
     */
    LatestMatchingVersion?: LayerVersionsListItem;
}
export declare namespace LayersListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LayersListItem) => any;
}
export interface ListLayersResponse {
    /**
     * <p>A pagination token returned when the response doesn't contain all layers.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of function layers.</p>
     */
    Layers?: LayersListItem[];
}
export declare namespace ListLayersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLayersResponse) => any;
}
export interface ListLayerVersionsRequest {
    /**
     * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
     */
    CompatibleRuntime?: Runtime | string;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of versions to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListLayerVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLayerVersionsRequest) => any;
}
export interface ListLayerVersionsResponse {
    /**
     * <p>A pagination token returned when the response doesn't contain all versions.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of versions.</p>
     */
    LayerVersions?: LayerVersionsListItem[];
}
export declare namespace ListLayerVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLayerVersionsResponse) => any;
}
export interface ListProvisionedConcurrencyConfigsRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>Specify a number to limit the number of configurations returned.</p>
     */
    MaxItems?: number;
}
export declare namespace ListProvisionedConcurrencyConfigsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisionedConcurrencyConfigsRequest) => any;
}
/**
 * <p>Details about the provisioned concurrency configuration for a function alias or version.</p>
 */
export interface ProvisionedConcurrencyConfigListItem {
    /**
     * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
     */
    FunctionArn?: string;
    /**
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency allocated.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
export declare namespace ProvisionedConcurrencyConfigListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedConcurrencyConfigListItem) => any;
}
export interface ListProvisionedConcurrencyConfigsResponse {
    /**
     * <p>A list of provisioned concurrency configurations.</p>
     */
    ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
}
export declare namespace ListProvisionedConcurrencyConfigsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisionedConcurrencyConfigsResponse) => any;
}
export interface ListTagsRequest {
    /**
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    Resource: string | undefined;
}
export declare namespace ListTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsRequest) => any;
}
export interface ListTagsResponse {
    /**
     * <p>The function's tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsResponse) => any;
}
export interface ListVersionsByFunctionRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of versions to return.</p>
     */
    MaxItems?: number;
}
export declare namespace ListVersionsByFunctionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVersionsByFunctionRequest) => any;
}
export interface ListVersionsByFunctionResponse {
    /**
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * <p>A list of Lambda function versions.</p>
     */
    Versions?: FunctionConfiguration[];
}
export declare namespace ListVersionsByFunctionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVersionsByFunctionResponse) => any;
}
/**
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. You can specify either an Amazon S3 location,
 *       or upload a layer archive directly.</p>
 */
export interface LayerVersionContentInput {
    /**
     * <p>The Amazon S3 bucket of the layer archive.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The Amazon S3 key of the layer archive.</p>
     */
    S3Key?: string;
    /**
     * <p>For versioned objects, the version of the layer archive object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * <p>The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for
     *       you.</p>
     */
    ZipFile?: Uint8Array;
}
export declare namespace LayerVersionContentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LayerVersionContentInput) => any;
}
export interface PublishLayerVersionRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * <p>The function layer archive.</p>
     */
    Content: LayerVersionContentInput | undefined;
    /**
     * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function
     *         runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * <p>The layer's software license. It can be any of the following:</p>
     *          <ul>
     *             <li>
     *                <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example,
     *           <code>MIT</code>.</p>
     *             </li>
     *             <li>
     *                <p>The URL of a license hosted on the internet. For example,
     *           <code>https://opensource.org/licenses/MIT</code>.</p>
     *             </li>
     *             <li>
     *                <p>The full text of the license.</p>
     *             </li>
     *          </ul>
     */
    LicenseInfo?: string;
}
export declare namespace PublishLayerVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishLayerVersionRequest) => any;
}
export interface PublishLayerVersionResponse {
    /**
     * <p>Details about the layer version.</p>
     */
    Content?: LayerVersionContentOutput;
    /**
     * <p>The ARN of the layer.</p>
     */
    LayerArn?: string;
    /**
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreatedDate?: string;
    /**
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * <p>The layer's compatible runtimes.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * <p>The layer's software license.</p>
     */
    LicenseInfo?: string;
}
export declare namespace PublishLayerVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishLayerVersionResponse) => any;
}
export interface PublishVersionRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Only publish a version if the hash value matches the value that's specified. Use this option to avoid
     *       publishing a version if the function code has changed since you last updated it. You can get the hash for the
     *       version that you uploaded from the output of <a>UpdateFunctionCode</a>.</p>
     */
    CodeSha256?: string;
    /**
     * <p>A description for the version to override the description in the function configuration.</p>
     */
    Description?: string;
    /**
     * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid
     *       publishing a version if the function configuration has changed since you last updated it.</p>
     */
    RevisionId?: string;
}
export declare namespace PublishVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishVersionRequest) => any;
}
export interface PutFunctionCodeSigningConfigRequest {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace PutFunctionCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFunctionCodeSigningConfigRequest) => any;
}
export interface PutFunctionCodeSigningConfigResponse {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace PutFunctionCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFunctionCodeSigningConfigResponse) => any;
}
export interface PutFunctionConcurrencyRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The number of simultaneous executions to reserve for the function.</p>
     */
    ReservedConcurrentExecutions: number | undefined;
}
export declare namespace PutFunctionConcurrencyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFunctionConcurrencyRequest) => any;
}
export interface PutFunctionEventInvokeConfigRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
    /**
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of an SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of an SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
export declare namespace PutFunctionEventInvokeConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFunctionEventInvokeConfigRequest) => any;
}
export interface PutProvisionedConcurrencyConfigRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
    /**
     * <p>The amount of provisioned concurrency to allocate for the version or alias.</p>
     */
    ProvisionedConcurrentExecutions: number | undefined;
}
export declare namespace PutProvisionedConcurrencyConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutProvisionedConcurrencyConfigRequest) => any;
}
export interface PutProvisionedConcurrencyConfigResponse {
    /**
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * <p>The amount of provisioned concurrency allocated.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
export declare namespace PutProvisionedConcurrencyConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutProvisionedConcurrencyConfigResponse) => any;
}
export interface RemoveLayerVersionPermissionRequest {
    /**
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
    /**
     * <p>The identifier that was specified when the statement was added.</p>
     */
    StatementId: string | undefined;
    /**
     * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace RemoveLayerVersionPermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveLayerVersionPermissionRequest) => any;
}
export interface RemovePermissionRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>Statement ID of the permission to remove.</p>
     */
    StatementId: string | undefined;
    /**
     * <p>Specify a version or alias to remove permissions from a published version of the function.</p>
     */
    Qualifier?: string;
    /**
     * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace RemovePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemovePermissionRequest) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    Resource: string | undefined;
    /**
     * <p>A list of tags to apply to the function.</p>
     */
    Tags: {
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
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    Resource: string | undefined;
    /**
     * <p>A list of tag keys to remove from the function.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateAliasRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
    /**
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion?: string;
    /**
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * <p>Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying
     *       an alias that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace UpdateAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAliasRequest) => any;
}
export interface UpdateCodeSigningConfigRequest {
    /**
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * <p>Descriptive name for this code signing configuration.</p>
     */
    Description?: string;
    /**
     * <p>Signing profiles for this code signing configuration.</p>
     */
    AllowedPublishers?: AllowedPublishers;
    /**
     * <p>The code signing policy.</p>
     */
    CodeSigningPolicies?: CodeSigningPolicies;
}
export declare namespace UpdateCodeSigningConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCodeSigningConfigRequest) => any;
}
export interface UpdateCodeSigningConfigResponse {
    /**
     * <p>The code signing configuration</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
export declare namespace UpdateCodeSigningConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCodeSigningConfigResponse) => any;
}
export interface UpdateEventSourceMappingRequest {
    /**
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName?: string;
    /**
     * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The maximum number of items to retrieve in a single batch.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p>
     *             </li>
     *          </ul>
     */
    BatchSize?: number;
    /**
     * <p>(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1).</p>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>(Streams) The number of batches to process from each shard concurrently.</p>
     */
    ParallelizationFactor?: number;
    /**
     * <p>An array of the authentication protocol, or the VPC components to secure your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * <p>(Streams) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * <p>(Streams) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
}
export declare namespace UpdateEventSourceMappingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateEventSourceMappingRequest) => any;
}
export interface UpdateFunctionCodeRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for
     *       you.</p>
     */
    ZipFile?: Uint8Array;
    /**
     * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The Amazon S3 key of the deployment package.</p>
     */
    S3Key?: string;
    /**
     * <p>For versioned objects, the version of the deployment package object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * <p>URI of a container image in the Amazon ECR registry.</p>
     */
    ImageUri?: string;
    /**
     * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as
     *       calling <a>PublishVersion</a> separately.</p>
     */
    Publish?: boolean;
    /**
     * <p>Set to true to validate the request parameters and access permissions without modifying the function
     *       code.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       function that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
export declare namespace UpdateFunctionCodeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFunctionCodeRequest) => any;
}
export interface UpdateFunctionConfigurationRequest {
    /**
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
     */
    Role?: string;
    /**
     * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
     *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
     *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
     */
    Handler?: string;
    /**
     * <p>A description of the function.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     *       maximum allowed value is 900 seconds.</p>
     */
    Timeout?: number;
    /**
     * <p>The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU
     *       allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
     */
    MemorySize?: number;
    /**
     * <p>For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
     *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
     *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
     */
    VpcConfig?: VpcConfig;
    /**
     * <p>Environment variables that are accessible from function code during execution.</p>
     */
    Environment?: Environment;
    /**
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
     */
    Runtime?: Runtime | string;
    /**
     * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
     *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * <p>The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment
     *       variables. If it's not provided, AWS Lambda uses a default service key.</p>
     */
    KMSKeyArn?: string;
    /**
     * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with AWS
     *       X-Ray.</p>
     */
    TracingConfig?: TracingConfig;
    /**
     * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       function that has changed since you last read it.</p>
     */
    RevisionId?: string;
    /**
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
     *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
     */
    Layers?: string[];
    /**
     * <p>Connection settings for an Amazon EFS file system.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * <p>
     *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container image configuration
     *         values</a> that override the values in the container image Dockerfile.</p>
     */
    ImageConfig?: ImageConfig;
}
export declare namespace UpdateFunctionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFunctionConfigurationRequest) => any;
}
export interface UpdateFunctionEventInvokeConfigRequest {
    /**
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
    /**
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of an SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of an SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
export declare namespace UpdateFunctionEventInvokeConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFunctionEventInvokeConfigRequest) => any;
}
