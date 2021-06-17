import { LambdaClient } from "./LambdaClient";
import { AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput } from "./commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput } from "./commands/CreateCodeSigningConfigCommand";
import { CreateEventSourceMappingCommandInput, CreateEventSourceMappingCommandOutput } from "./commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteCodeSigningConfigCommandInput, DeleteCodeSigningConfigCommandOutput } from "./commands/DeleteCodeSigningConfigCommand";
import { DeleteEventSourceMappingCommandInput, DeleteEventSourceMappingCommandOutput } from "./commands/DeleteEventSourceMappingCommand";
import { DeleteFunctionCodeSigningConfigCommandInput, DeleteFunctionCodeSigningConfigCommandOutput } from "./commands/DeleteFunctionCodeSigningConfigCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import { DeleteFunctionConcurrencyCommandInput, DeleteFunctionConcurrencyCommandOutput } from "./commands/DeleteFunctionConcurrencyCommand";
import { DeleteFunctionEventInvokeConfigCommandInput, DeleteFunctionEventInvokeConfigCommandOutput } from "./commands/DeleteFunctionEventInvokeConfigCommand";
import { DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput } from "./commands/DeleteLayerVersionCommand";
import { DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput } from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import { GetCodeSigningConfigCommandInput, GetCodeSigningConfigCommandOutput } from "./commands/GetCodeSigningConfigCommand";
import { GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput } from "./commands/GetEventSourceMappingCommand";
import { GetFunctionCodeSigningConfigCommandInput, GetFunctionCodeSigningConfigCommandOutput } from "./commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import { GetFunctionConcurrencyCommandInput, GetFunctionConcurrencyCommandOutput } from "./commands/GetFunctionConcurrencyCommand";
import { GetFunctionConfigurationCommandInput, GetFunctionConfigurationCommandOutput } from "./commands/GetFunctionConfigurationCommand";
import { GetFunctionEventInvokeConfigCommandInput, GetFunctionEventInvokeConfigCommandOutput } from "./commands/GetFunctionEventInvokeConfigCommand";
import { GetLayerVersionByArnCommandInput, GetLayerVersionByArnCommandOutput } from "./commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommandInput, GetLayerVersionCommandOutput } from "./commands/GetLayerVersionCommand";
import { GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput } from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput } from "./commands/GetProvisionedConcurrencyConfigCommand";
import { InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "./commands/InvokeAsyncCommand";
import { InvokeCommandInput, InvokeCommandOutput } from "./commands/InvokeCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput } from "./commands/ListCodeSigningConfigsCommand";
import { ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput } from "./commands/ListEventSourceMappingsCommand";
import { ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput } from "./commands/ListFunctionEventInvokeConfigsCommand";
import { ListFunctionsByCodeSigningConfigCommandInput, ListFunctionsByCodeSigningConfigCommandOutput } from "./commands/ListFunctionsByCodeSigningConfigCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "./commands/ListLayerVersionsCommand";
import { ListLayersCommandInput, ListLayersCommandOutput } from "./commands/ListLayersCommand";
import { ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput } from "./commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput } from "./commands/ListVersionsByFunctionCommand";
import { PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput } from "./commands/PublishLayerVersionCommand";
import { PublishVersionCommandInput, PublishVersionCommandOutput } from "./commands/PublishVersionCommand";
import { PutFunctionCodeSigningConfigCommandInput, PutFunctionCodeSigningConfigCommandOutput } from "./commands/PutFunctionCodeSigningConfigCommand";
import { PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput } from "./commands/PutFunctionConcurrencyCommand";
import { PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput } from "./commands/PutFunctionEventInvokeConfigCommand";
import { PutProvisionedConcurrencyConfigCommandInput, PutProvisionedConcurrencyConfigCommandOutput } from "./commands/PutProvisionedConcurrencyConfigCommand";
import { RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput } from "./commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput } from "./commands/UpdateCodeSigningConfigCommand";
import { UpdateEventSourceMappingCommandInput, UpdateEventSourceMappingCommandOutput } from "./commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput } from "./commands/UpdateFunctionCodeCommand";
import { UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput } from "./commands/UpdateFunctionConfigurationCommand";
import { UpdateFunctionEventInvokeConfigCommandInput, UpdateFunctionEventInvokeConfigCommandOutput } from "./commands/UpdateFunctionEventInvokeConfigCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional
 *       information. For the service overview, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is
 *         AWS Lambda</a>, and for information about how the service works, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <b>AWS Lambda Developer Guide</b>.</p>
 */
export declare class Lambda extends LambdaClient {
    /**
     * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>. Use this action to grant layer
     *       usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all
     *       accounts in an organization.</p>
     *          <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you
     *       specified when you added it.</p>
     */
    addLayerVersionPermission(args: AddLayerVersionPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddLayerVersionPermissionCommandOutput>;
    addLayerVersionPermission(args: AddLayerVersionPermissionCommandInput, cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void): void;
    addLayerVersionPermission(args: AddLayerVersionPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void): void;
    /**
     * <p>Grants an AWS service or another account permission to use a function. You can apply the policy at the
     *       function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier,
     *       the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p>
     *
     *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For AWS
     *       services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or
     *         <code>sns.amazonaws.com</code>. For AWS services, you can also specify the ARN of the associated resource as the
     *         <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other
     *       accounts could potentially configure resources in their account to invoke your Lambda function.</p>
     *
     *          <p>This action adds a statement to a resource-based permissions policy for the function. For more information
     *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
     */
    addPermission(args: AddPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddPermissionCommandOutput>;
    addPermission(args: AddPermissionCommandInput, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
    addPermission(args: AddPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
    /**
     * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a
     *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
     *       different version.</p>
     *          <p>You can also map an alias to split invocation requests between two versions. Use the
     *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
     *       it receives.</p>
     */
    createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
    createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    createAlias(args: CreateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    /**
     * <p>Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">code signing configuration</a> defines a list of
     *       allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment
     *       validation checks fail). </p>
     */
    createCodeSigningConfig(args: CreateCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateCodeSigningConfigCommandOutput>;
    createCodeSigningConfig(args: CreateCodeSigningConfigCommandInput, cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void): void;
    createCodeSigningConfig(args: CreateCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source
     *       and triggers the function.</p>
     *          <p>For details about each event source type, see the following topics.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">Using AWS Lambda with Amazon
     *           DynamoDB</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Using AWS Lambda with Amazon
     *           Kinesis</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html">Using AWS Lambda with Amazon
     *           SQS</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html">Using AWS Lambda with Amazon
     *           MQ</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">Using AWS Lambda with Amazon MSK</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">Using AWS Lambda with Self-Managed Apache Kafka</a>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p>
     *             </li>
     *          </ul>
     */
    createEventSourceMapping(args: CreateEventSourceMappingCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSourceMappingCommandOutput>;
    createEventSourceMapping(args: CreateEventSourceMappingCommandInput, cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void): void;
    createEventSourceMapping(args: CreateEventSourceMappingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void): void;
    /**
     * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The
     *       deployment package is a .zip file  archive or container image that contains your function code. The execution role grants the function permission to use AWS
     *       services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.</p>
     *
     *          <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If
     *       your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or
     *       modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in
     *       the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For
     *       more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
     *         States</a>.</p>
     *
     *          <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version
     *       changes when you update your function's code and configuration. A published version is a snapshot of your function
     *       code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be
     *       changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of
     *       your function from its initial configuration.</p>
     *
     *          <p>The other parameters let you configure version-specific and function-level settings. You can modify
     *       version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply
     *       to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>)
     *       and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p>
     *
     *          <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function,
     *       specify the ARN of a code-signing configuration. When a user
     *       attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code
     *       package has a valid signature from a trusted publisher. The code-signing configuration
     *       includes set set of signing profiles, which define the trusted publishers for this function.</p>
     *
     *          <p>If another account or an AWS service invokes your function, use <a>AddPermission</a> to grant
     *       permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version,
     *       or on an alias.</p>
     *
     *          <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events
     *       in other AWS services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a
     *       function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Functions</a>.</p>
     */
    createFunction(args: CreateFunctionCommandInput, options?: __HttpHandlerOptions): Promise<CreateFunctionCommandOutput>;
    createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
    createFunction(args: CreateFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
    /**
     * <p>Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
     */
    deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
    deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    deleteAlias(args: DeleteAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    /**
     * <p>Deletes the code signing configuration. You can delete the code signing configuration only if no function is
     *       using it. </p>
     */
    deleteCodeSigningConfig(args: DeleteCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCodeSigningConfigCommandOutput>;
    deleteCodeSigningConfig(args: DeleteCodeSigningConfigCommandInput, cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void): void;
    deleteCodeSigningConfig(args: DeleteCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source
     *       mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
     *          <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
     */
    deleteEventSourceMapping(args: DeleteEventSourceMappingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSourceMappingCommandOutput>;
    deleteEventSourceMapping(args: DeleteEventSourceMappingCommandInput, cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void): void;
    deleteEventSourceMapping(args: DeleteEventSourceMappingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void): void;
    /**
     * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter.
     *       Otherwise, all versions and aliases are deleted.</p>
     *
     *          <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>.
     *       For AWS services and resources that invoke your function directly, delete the trigger in the service where you
     *       originally configured it.</p>
     */
    deleteFunction(args: DeleteFunctionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFunctionCommandOutput>;
    deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
    deleteFunction(args: DeleteFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
    /**
     * <p>Removes the code signing configuration from the function.</p>
     */
    deleteFunctionCodeSigningConfig(args: DeleteFunctionCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFunctionCodeSigningConfigCommandOutput>;
    deleteFunctionCodeSigningConfig(args: DeleteFunctionCodeSigningConfigCommandInput, cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void): void;
    deleteFunctionCodeSigningConfig(args: DeleteFunctionCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Removes a concurrent execution limit from a function.</p>
     */
    deleteFunctionConcurrency(args: DeleteFunctionConcurrencyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFunctionConcurrencyCommandOutput>;
    deleteFunctionConcurrency(args: DeleteFunctionConcurrencyCommandInput, cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void): void;
    deleteFunctionConcurrency(args: DeleteFunctionConcurrencyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void): void;
    /**
     * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p>
     *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
     */
    deleteFunctionEventInvokeConfig(args: DeleteFunctionEventInvokeConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFunctionEventInvokeConfigCommandOutput>;
    deleteFunctionEventInvokeConfig(args: DeleteFunctionEventInvokeConfigCommandInput, cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void): void;
    deleteFunctionEventInvokeConfig(args: DeleteFunctionEventInvokeConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void): void;
    /**
     * <p>Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid
     *       breaking functions, a copy of the version remains in Lambda until no functions refer to it.</p>
     */
    deleteLayerVersion(args: DeleteLayerVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLayerVersionCommandOutput>;
    deleteLayerVersion(args: DeleteLayerVersionCommandInput, cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void): void;
    deleteLayerVersion(args: DeleteLayerVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void): void;
    /**
     * <p>Deletes the provisioned concurrency configuration for a function.</p>
     */
    deleteProvisionedConcurrencyConfig(args: DeleteProvisionedConcurrencyConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProvisionedConcurrencyConfigCommandOutput>;
    deleteProvisionedConcurrencyConfig(args: DeleteProvisionedConcurrencyConfigCommandInput, cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void): void;
    deleteProvisionedConcurrencyConfig(args: DeleteProvisionedConcurrencyConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void): void;
    /**
     * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an AWS Region.</p>
     */
    getAccountSettings(args: GetAccountSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountSettingsCommandOutput>;
    getAccountSettings(args: GetAccountSettingsCommandInput, cb: (err: any, data?: GetAccountSettingsCommandOutput) => void): void;
    getAccountSettings(args: GetAccountSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountSettingsCommandOutput) => void): void;
    /**
     * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
     */
    getAlias(args: GetAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetAliasCommandOutput>;
    getAlias(args: GetAliasCommandInput, cb: (err: any, data?: GetAliasCommandOutput) => void): void;
    getAlias(args: GetAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAliasCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified code signing configuration.</p>
     */
    getCodeSigningConfig(args: GetCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetCodeSigningConfigCommandOutput>;
    getCodeSigningConfig(args: GetCodeSigningConfigCommandInput, cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void): void;
    getCodeSigningConfig(args: GetCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
     */
    getEventSourceMapping(args: GetEventSourceMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetEventSourceMappingCommandOutput>;
    getEventSourceMapping(args: GetEventSourceMappingCommandInput, cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void): void;
    getEventSourceMapping(args: GetEventSourceMappingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void): void;
    /**
     * <p>Returns information about the function or function version, with a link to download the deployment package
     *       that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are
     *       returned.</p>
     */
    getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
    getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
    getFunction(args: GetFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
    /**
     * <p>Returns the code signing configuration for the specified function.</p>
     */
    getFunctionCodeSigningConfig(args: GetFunctionCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCodeSigningConfigCommandOutput>;
    getFunctionCodeSigningConfig(args: GetFunctionCodeSigningConfigCommandInput, cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void): void;
    getFunctionCodeSigningConfig(args: GetFunctionCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
     *       function, use <a>PutFunctionConcurrency</a>.</p>
     */
    getFunctionConcurrency(args: GetFunctionConcurrencyCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionConcurrencyCommandOutput>;
    getFunctionConcurrency(args: GetFunctionConcurrencyCommandInput, cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void): void;
    getFunctionConcurrency(args: GetFunctionConcurrencyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void): void;
    /**
     * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that
     *       can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p>
     *          <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
     */
    getFunctionConfiguration(args: GetFunctionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionConfigurationCommandOutput>;
    getFunctionConfiguration(args: GetFunctionConfigurationCommandInput, cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void): void;
    getFunctionConfiguration(args: GetFunctionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p>
     *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
     */
    getFunctionEventInvokeConfig(args: GetFunctionEventInvokeConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionEventInvokeConfigCommandOutput>;
    getFunctionEventInvokeConfig(args: GetFunctionEventInvokeConfigCommandInput, cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void): void;
    getFunctionEventInvokeConfig(args: GetFunctionEventInvokeConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void): void;
    /**
     * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>, with a link to download the layer archive
     *         that's valid for 10 minutes.</p>
     */
    getLayerVersion(args: GetLayerVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetLayerVersionCommandOutput>;
    getLayerVersion(args: GetLayerVersionCommandInput, cb: (err: any, data?: GetLayerVersionCommandOutput) => void): void;
    getLayerVersion(args: GetLayerVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLayerVersionCommandOutput) => void): void;
    /**
     * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>, with a link to download the layer archive
     *         that's valid for 10 minutes.</p>
     */
    getLayerVersionByArn(args: GetLayerVersionByArnCommandInput, options?: __HttpHandlerOptions): Promise<GetLayerVersionByArnCommandOutput>;
    getLayerVersionByArn(args: GetLayerVersionByArnCommandInput, cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void): void;
    getLayerVersionByArn(args: GetLayerVersionByArnCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void): void;
    /**
     * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
     */
    getLayerVersionPolicy(args: GetLayerVersionPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetLayerVersionPolicyCommandOutput>;
    getLayerVersionPolicy(args: GetLayerVersionPolicyCommandInput, cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void): void;
    getLayerVersionPolicy(args: GetLayerVersionPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void): void;
    /**
     * <p>Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.</p>
     */
    getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
    getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    getPolicy(args: GetPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
     */
    getProvisionedConcurrencyConfig(args: GetProvisionedConcurrencyConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetProvisionedConcurrencyConfigCommandOutput>;
    getProvisionedConcurrencyConfig(args: GetProvisionedConcurrencyConfigCommandInput, cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void): void;
    getProvisionedConcurrencyConfig(args: GetProvisionedConcurrencyConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void): void;
    /**
     * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or
     *       asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p>
     *
     *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>,
     *       details about the function response, including errors, are included in the response body and headers. For either
     *       invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p>
     *
     *          <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type,
     *       client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an
     *       error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p>
     *
     *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>,
     *       Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity
     *       to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple
     *       times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a>.</p>
     *
     *          <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that
     *       prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration.
     *       For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to
     *       exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or
     *       function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p>
     *
     *          <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it
     *       waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long
     *       connections with timeout or keep-alive settings.</p>
     *
     *          <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action.</p>
     */
    invoke(args: InvokeCommandInput, options?: __HttpHandlerOptions): Promise<InvokeCommandOutput>;
    invoke(args: InvokeCommandInput, cb: (err: any, data?: InvokeCommandOutput) => void): void;
    invoke(args: InvokeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InvokeCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <important>
     *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
     *          </important>
     *          <p>Invokes a function asynchronously.</p>
     */
    invokeAsync(args: InvokeAsyncCommandInput, options?: __HttpHandlerOptions): Promise<InvokeAsyncCommandOutput>;
    invokeAsync(args: InvokeAsyncCommandInput, cb: (err: any, data?: InvokeAsyncCommandOutput) => void): void;
    invokeAsync(args: InvokeAsyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InvokeAsyncCommandOutput) => void): void;
    /**
     * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a>
     *       for a Lambda function.</p>
     */
    listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
    listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    listAliases(args: ListAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    /**
     * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
     *         signing configurations</a>. A request returns up to 10,000 configurations per
     *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
     */
    listCodeSigningConfigs(args: ListCodeSigningConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListCodeSigningConfigsCommandOutput>;
    listCodeSigningConfigs(args: ListCodeSigningConfigsCommandInput, cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void): void;
    listCodeSigningConfigs(args: ListCodeSigningConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void): void;
    /**
     * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
     *       single event source.</p>
     */
    listEventSourceMappings(args: ListEventSourceMappingsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventSourceMappingsCommandOutput>;
    listEventSourceMappings(args: ListEventSourceMappingsCommandInput, cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void): void;
    listEventSourceMappings(args: ListEventSourceMappingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p>
     *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
     */
    listFunctionEventInvokeConfigs(args: ListFunctionEventInvokeConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionEventInvokeConfigsCommandOutput>;
    listFunctionEventInvokeConfigs(args: ListFunctionEventInvokeConfigsCommandInput, cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void): void;
    listFunctionEventInvokeConfigs(args: ListFunctionEventInvokeConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void): void;
    /**
     * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
     *       functions per call.</p>
     *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
     *       addition to the unpublished version. </p>
     *          <note>
     *             <p>The <code>ListFunctions</code> action returns a subset of the <a>FunctionConfiguration</a> fields.
     *       To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode)
     *       for a function or version, use <a>GetFunction</a>.</p>
     *          </note>
     */
    listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
    listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
    listFunctions(args: ListFunctionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
    /**
     * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a
     *       code signing configuration, to verify that no functions are using it.</p>
     */
    listFunctionsByCodeSigningConfig(args: ListFunctionsByCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsByCodeSigningConfigCommandOutput>;
    listFunctionsByCodeSigningConfig(args: ListFunctionsByCodeSigningConfigCommandInput, cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void): void;
    listFunctionsByCodeSigningConfig(args: ListFunctionsByCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers
     *       that indicate that they're compatible with that runtime.</p>
     */
    listLayers(args: ListLayersCommandInput, options?: __HttpHandlerOptions): Promise<ListLayersCommandOutput>;
    listLayers(args: ListLayersCommandInput, cb: (err: any, data?: ListLayersCommandOutput) => void): void;
    listLayers(args: ListLayersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLayersCommandOutput) => void): void;
    /**
     * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only
     *       versions that indicate that they're compatible with that runtime.</p>
     */
    listLayerVersions(args: ListLayerVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLayerVersionsCommandOutput>;
    listLayerVersions(args: ListLayerVersionsCommandInput, cb: (err: any, data?: ListLayerVersionsCommandOutput) => void): void;
    listLayerVersions(args: ListLayerVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLayerVersionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
     */
    listProvisionedConcurrencyConfigs(args: ListProvisionedConcurrencyConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisionedConcurrencyConfigsCommandOutput>;
    listProvisionedConcurrencyConfigs(args: ListProvisionedConcurrencyConfigsCommandInput, cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void): void;
    listProvisionedConcurrencyConfigs(args: ListProvisionedConcurrencyConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void): void;
    /**
     * <p>Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can
     *       also view tags with <a>GetFunction</a>.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>,
     *       with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
     */
    listVersionsByFunction(args: ListVersionsByFunctionCommandInput, options?: __HttpHandlerOptions): Promise<ListVersionsByFunctionCommandOutput>;
    listVersionsByFunction(args: ListVersionsByFunctionCommandInput, cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void): void;
    listVersionsByFunction(args: ListVersionsByFunctionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void): void;
    /**
     * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
     *       layer name, a new version is created.</p>
     *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
     */
    publishLayerVersion(args: PublishLayerVersionCommandInput, options?: __HttpHandlerOptions): Promise<PublishLayerVersionCommandOutput>;
    publishLayerVersion(args: PublishLayerVersionCommandInput, cb: (err: any, data?: PublishLayerVersionCommandOutput) => void): void;
    publishLayerVersion(args: PublishLayerVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishLayerVersionCommandOutput) => void): void;
    /**
     * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the
     *       current code and configuration of a function. Use versions to create a snapshot of your function code and
     *       configuration that doesn't change.</p>
     *
     *          <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last
     *       version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the
     *       function before publishing a version.</p>
     *
     *          <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
     */
    publishVersion(args: PublishVersionCommandInput, options?: __HttpHandlerOptions): Promise<PublishVersionCommandOutput>;
    publishVersion(args: PublishVersionCommandInput, cb: (err: any, data?: PublishVersionCommandOutput) => void): void;
    publishVersion(args: PublishVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishVersionCommandOutput) => void): void;
    /**
     * <p>Update the code signing configuration for the function. Changes to the code signing configuration take effect the
     *       next time a user tries to deploy a code package to the function. </p>
     */
    putFunctionCodeSigningConfig(args: PutFunctionCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<PutFunctionCodeSigningConfigCommandOutput>;
    putFunctionCodeSigningConfig(args: PutFunctionCodeSigningConfigCommandInput, cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void): void;
    putFunctionCodeSigningConfig(args: PutFunctionCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
     *       level.</p>
     *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
     *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
     *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
     *       the current setting for a function.</p>
     *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
     *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
     *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
     */
    putFunctionConcurrency(args: PutFunctionConcurrencyCommandInput, options?: __HttpHandlerOptions): Promise<PutFunctionConcurrencyCommandOutput>;
    putFunctionConcurrency(args: PutFunctionConcurrencyCommandInput, cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void): void;
    putFunctionConcurrency(args: PutFunctionConcurrencyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void): void;
    /**
     * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous
     *         invocation</a> on a function, version, or alias. If a configuration already exists for a function, version,
     *       or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without
     *       affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p>
     *          <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains
     *       events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous
     *       invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with
     *         <a>UpdateFunctionConfiguration</a>.</p>
     *          <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events
     *       that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a
     *       dead-letter queue.</p>
     */
    putFunctionEventInvokeConfig(args: PutFunctionEventInvokeConfigCommandInput, options?: __HttpHandlerOptions): Promise<PutFunctionEventInvokeConfigCommandOutput>;
    putFunctionEventInvokeConfig(args: PutFunctionEventInvokeConfigCommandInput, cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void): void;
    putFunctionEventInvokeConfig(args: PutFunctionEventInvokeConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void): void;
    /**
     * <p>Adds a provisioned concurrency configuration to a function's alias or version.</p>
     */
    putProvisionedConcurrencyConfig(args: PutProvisionedConcurrencyConfigCommandInput, options?: __HttpHandlerOptions): Promise<PutProvisionedConcurrencyConfigCommandOutput>;
    putProvisionedConcurrencyConfig(args: PutProvisionedConcurrencyConfigCommandInput, cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void): void;
    putProvisionedConcurrencyConfig(args: PutProvisionedConcurrencyConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void): void;
    /**
     * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
     *         layer</a>. For more information, see
     *         <a>AddLayerVersionPermission</a>.</p>
     */
    removeLayerVersionPermission(args: RemoveLayerVersionPermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveLayerVersionPermissionCommandOutput>;
    removeLayerVersionPermission(args: RemoveLayerVersionPermissionCommandInput, cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void): void;
    removeLayerVersionPermission(args: RemoveLayerVersionPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void): void;
    /**
     * <p>Revokes function-use permission from an AWS service or another account. You can get the ID of the statement
     *       from the output of <a>GetPolicy</a>.</p>
     */
    removePermission(args: RemovePermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemovePermissionCommandOutput>;
    removePermission(args: RemovePermissionCommandInput, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    removePermission(args: RemovePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    /**
     * <p>Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
     */
    updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
    updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
    updateAlias(args: UpdateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
    /**
     * <p>Update the code signing configuration. Changes to the code signing configuration take effect the next time a
     *       user tries to deploy a code package to the function. </p>
     */
    updateCodeSigningConfig(args: UpdateCodeSigningConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCodeSigningConfigCommandOutput>;
    updateCodeSigningConfig(args: UpdateCodeSigningConfigCommandInput, cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void): void;
    updateCodeSigningConfig(args: UpdateCodeSigningConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void): void;
    /**
     * <p>Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.</p>
     *          <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p>
     *             </li>
     *          </ul>
     */
    updateEventSourceMapping(args: UpdateEventSourceMappingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEventSourceMappingCommandOutput>;
    updateEventSourceMapping(args: UpdateEventSourceMappingCommandInput, cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void): void;
    updateEventSourceMapping(args: UpdateEventSourceMappingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void): void;
    /**
     * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed
     *       by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p>
     *
     *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
     *       only the unpublished version.</p>
     *          <note>
     *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if
     *         you update the image tag to a new image, Lambda does not automatically update the function.</p>
     *          </note>
     */
    updateFunctionCode(args: UpdateFunctionCodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFunctionCodeCommandOutput>;
    updateFunctionCode(args: UpdateFunctionCodeCommandInput, cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void): void;
    updateFunctionCode(args: UpdateFunctionCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void): void;
    /**
     * <p>Modify the version-specific settings of a Lambda function.</p>
     *
     *          <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If
     *       your function connects to a VPC, this process can take a minute. During this time, you can't modify the function,
     *       but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and
     *         <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
     *       indicate when the update is complete and the function is processing events with the new configuration. For more
     *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
     *       States</a>.</p>
     *
     *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
     *       modify the configuration of a published version, only the unpublished version.</p>
     *
     *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
     *       to an account or AWS service, use <a>AddPermission</a>.</p>
     */
    updateFunctionConfiguration(args: UpdateFunctionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFunctionConfigurationCommandOutput>;
    updateFunctionConfiguration(args: UpdateFunctionConfigurationCommandInput, cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void): void;
    updateFunctionConfiguration(args: UpdateFunctionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p>
     *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
     */
    updateFunctionEventInvokeConfig(args: UpdateFunctionEventInvokeConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFunctionEventInvokeConfigCommandOutput>;
    updateFunctionEventInvokeConfig(args: UpdateFunctionEventInvokeConfigCommandInput, cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void): void;
    updateFunctionEventInvokeConfig(args: UpdateFunctionEventInvokeConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void): void;
}
