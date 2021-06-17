import { ActivatePipelineCommandInput, ActivatePipelineCommandOutput } from "./commands/ActivatePipelineCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput } from "./commands/DeactivatePipelineCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DescribeObjectsCommandInput, DescribeObjectsCommandOutput } from "./commands/DescribeObjectsCommand";
import { DescribePipelinesCommandInput, DescribePipelinesCommandOutput } from "./commands/DescribePipelinesCommand";
import { EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput } from "./commands/EvaluateExpressionCommand";
import { GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput } from "./commands/GetPipelineDefinitionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { PollForTaskCommandInput, PollForTaskCommandOutput } from "./commands/PollForTaskCommand";
import { PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput } from "./commands/PutPipelineDefinitionCommand";
import { QueryObjectsCommandInput, QueryObjectsCommandOutput } from "./commands/QueryObjectsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput } from "./commands/ReportTaskProgressCommand";
import { ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput } from "./commands/ReportTaskRunnerHeartbeatCommand";
import { SetStatusCommandInput, SetStatusCommandOutput } from "./commands/SetStatusCommand";
import { SetTaskStatusCommandInput, SetTaskStatusCommandOutput } from "./commands/SetTaskStatusCommand";
import { ValidatePipelineDefinitionCommandInput, ValidatePipelineDefinitionCommandOutput } from "./commands/ValidatePipelineDefinitionCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = ActivatePipelineCommandInput | AddTagsCommandInput | CreatePipelineCommandInput | DeactivatePipelineCommandInput | DeletePipelineCommandInput | DescribeObjectsCommandInput | DescribePipelinesCommandInput | EvaluateExpressionCommandInput | GetPipelineDefinitionCommandInput | ListPipelinesCommandInput | PollForTaskCommandInput | PutPipelineDefinitionCommandInput | QueryObjectsCommandInput | RemoveTagsCommandInput | ReportTaskProgressCommandInput | ReportTaskRunnerHeartbeatCommandInput | SetStatusCommandInput | SetTaskStatusCommandInput | ValidatePipelineDefinitionCommandInput;
export declare type ServiceOutputTypes = ActivatePipelineCommandOutput | AddTagsCommandOutput | CreatePipelineCommandOutput | DeactivatePipelineCommandOutput | DeletePipelineCommandOutput | DescribeObjectsCommandOutput | DescribePipelinesCommandOutput | EvaluateExpressionCommandOutput | GetPipelineDefinitionCommandOutput | ListPipelinesCommandOutput | PollForTaskCommandOutput | PutPipelineDefinitionCommandOutput | QueryObjectsCommandOutput | RemoveTagsCommandOutput | ReportTaskProgressCommandOutput | ReportTaskRunnerHeartbeatCommandOutput | SetStatusCommandOutput | SetTaskStatusCommandOutput | ValidatePipelineDefinitionCommandOutput;
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandler;
    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     * @internal
     */
    sha256?: __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     * @internal
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     * @internal
     */
    bodyLengthChecker?: (body: any) => number | undefined;
    /**
     * A function that converts a stream into an array of bytes.
     * @internal
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array.
     * @internal
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string.
     * @internal
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array.
     * @internal
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string.
     * @internal
     */
    utf8Encoder?: __Encoder;
    /**
     * The runtime environment.
     * @internal
     */
    runtime?: string;
    /**
     * Disable dyanamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | __Provider<string>;
    /**
     * Value for how many times a request will be made at most in case of retry.
     */
    maxAttempts?: number | __Provider<number>;
    /**
     * Specifies provider for retry algorithm to use.
     * @internal
     */
    retryModeProvider?: __Provider<string>;
    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: __Logger;
    /**
     * Default credentials provider; Not available in browser runtime.
     * @internal
     */
    credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
    /**
     * Fetch related hostname, signing name or signing region with given region.
     * @internal
     */
    regionInfoProvider?: RegionInfoProvider;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
}
declare type DataPipelineClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & UserAgentInputConfig;
/**
 * The configuration interface of DataPipelineClient class constructor that set the region, credentials and other options.
 */
export interface DataPipelineClientConfig extends DataPipelineClientConfigType {
}
declare type DataPipelineClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DataPipelineClient class. This is resolved and normalized from the {@link DataPipelineClientConfig | constructor configuration interface}.
 */
export interface DataPipelineClientResolvedConfig extends DataPipelineClientResolvedConfigType {
}
/**
 * <p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline
 *             handles the details of scheduling and ensuring that data dependencies are met so that your application
 *             can focus on processing the data.</p>
 *
 *         <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner.
 *             AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing
 *             database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use
 *             AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide
 *             custom data management.</p>
 *
 *         <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline
 *            and define data sources, schedules, dependencies, and the transforms to be performed on the data.
 *            Use the second set in your task runner application to receive the next task ready for processing.
 *            The logic for performing the task, such as querying the data, running data analysis, or converting
 *            the data from one format to another, is contained within the task runner. The task runner performs
 *            the task assigned to it by the web service, reporting progress to the web service as it does so.
 *            When the task is done, the task runner reports the final success or failure of the task to the web service.</p>
 */
export declare class DataPipelineClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, DataPipelineClientResolvedConfig> {
    /**
     * The resolved configuration of DataPipelineClient class. This is resolved and normalized from the {@link DataPipelineClientConfig | constructor configuration interface}.
     */
    readonly config: DataPipelineClientResolvedConfig;
    constructor(configuration: DataPipelineClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
