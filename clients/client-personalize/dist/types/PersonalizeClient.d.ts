import { CreateBatchInferenceJobCommandInput, CreateBatchInferenceJobCommandOutput } from "./commands/CreateBatchInferenceJobCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetExportJobCommandInput, CreateDatasetExportJobCommandOutput } from "./commands/CreateDatasetExportJobCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import { CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput } from "./commands/CreateDatasetImportJobCommand";
import { CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput } from "./commands/CreateEventTrackerCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import { CreateSolutionCommandInput, CreateSolutionCommandOutput } from "./commands/CreateSolutionCommand";
import { CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput } from "./commands/CreateSolutionVersionCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import { DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput } from "./commands/DeleteEventTrackerCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "./commands/DeleteSolutionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand";
import { DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput } from "./commands/DescribeBatchInferenceJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "./commands/DescribeCampaignCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeDatasetExportJobCommandInput, DescribeDatasetExportJobCommandOutput } from "./commands/DescribeDatasetExportJobCommand";
import { DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput } from "./commands/DescribeDatasetGroupCommand";
import { DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput } from "./commands/DescribeDatasetImportJobCommand";
import { DescribeEventTrackerCommandInput, DescribeEventTrackerCommandOutput } from "./commands/DescribeEventTrackerCommand";
import { DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput } from "./commands/DescribeFeatureTransformationCommand";
import { DescribeFilterCommandInput, DescribeFilterCommandOutput } from "./commands/DescribeFilterCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "./commands/DescribeSchemaCommand";
import { DescribeSolutionCommandInput, DescribeSolutionCommandOutput } from "./commands/DescribeSolutionCommand";
import { DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput } from "./commands/DescribeSolutionVersionCommand";
import { GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput } from "./commands/GetSolutionMetricsCommand";
import { ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput } from "./commands/ListBatchInferenceJobsCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand";
import { ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput } from "./commands/ListDatasetExportJobsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import { ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput } from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListEventTrackersCommandInput, ListEventTrackersCommandOutput } from "./commands/ListEventTrackersCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput } from "./commands/ListSolutionVersionsCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "./commands/ListSolutionsCommand";
import { StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput } from "./commands/StopSolutionVersionCreationCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateBatchInferenceJobCommandInput | CreateCampaignCommandInput | CreateDatasetCommandInput | CreateDatasetExportJobCommandInput | CreateDatasetGroupCommandInput | CreateDatasetImportJobCommandInput | CreateEventTrackerCommandInput | CreateFilterCommandInput | CreateSchemaCommandInput | CreateSolutionCommandInput | CreateSolutionVersionCommandInput | DeleteCampaignCommandInput | DeleteDatasetCommandInput | DeleteDatasetGroupCommandInput | DeleteEventTrackerCommandInput | DeleteFilterCommandInput | DeleteSchemaCommandInput | DeleteSolutionCommandInput | DescribeAlgorithmCommandInput | DescribeBatchInferenceJobCommandInput | DescribeCampaignCommandInput | DescribeDatasetCommandInput | DescribeDatasetExportJobCommandInput | DescribeDatasetGroupCommandInput | DescribeDatasetImportJobCommandInput | DescribeEventTrackerCommandInput | DescribeFeatureTransformationCommandInput | DescribeFilterCommandInput | DescribeRecipeCommandInput | DescribeSchemaCommandInput | DescribeSolutionCommandInput | DescribeSolutionVersionCommandInput | GetSolutionMetricsCommandInput | ListBatchInferenceJobsCommandInput | ListCampaignsCommandInput | ListDatasetExportJobsCommandInput | ListDatasetGroupsCommandInput | ListDatasetImportJobsCommandInput | ListDatasetsCommandInput | ListEventTrackersCommandInput | ListFiltersCommandInput | ListRecipesCommandInput | ListSchemasCommandInput | ListSolutionVersionsCommandInput | ListSolutionsCommandInput | StopSolutionVersionCreationCommandInput | UpdateCampaignCommandInput;
export declare type ServiceOutputTypes = CreateBatchInferenceJobCommandOutput | CreateCampaignCommandOutput | CreateDatasetCommandOutput | CreateDatasetExportJobCommandOutput | CreateDatasetGroupCommandOutput | CreateDatasetImportJobCommandOutput | CreateEventTrackerCommandOutput | CreateFilterCommandOutput | CreateSchemaCommandOutput | CreateSolutionCommandOutput | CreateSolutionVersionCommandOutput | DeleteCampaignCommandOutput | DeleteDatasetCommandOutput | DeleteDatasetGroupCommandOutput | DeleteEventTrackerCommandOutput | DeleteFilterCommandOutput | DeleteSchemaCommandOutput | DeleteSolutionCommandOutput | DescribeAlgorithmCommandOutput | DescribeBatchInferenceJobCommandOutput | DescribeCampaignCommandOutput | DescribeDatasetCommandOutput | DescribeDatasetExportJobCommandOutput | DescribeDatasetGroupCommandOutput | DescribeDatasetImportJobCommandOutput | DescribeEventTrackerCommandOutput | DescribeFeatureTransformationCommandOutput | DescribeFilterCommandOutput | DescribeRecipeCommandOutput | DescribeSchemaCommandOutput | DescribeSolutionCommandOutput | DescribeSolutionVersionCommandOutput | GetSolutionMetricsCommandOutput | ListBatchInferenceJobsCommandOutput | ListCampaignsCommandOutput | ListDatasetExportJobsCommandOutput | ListDatasetGroupsCommandOutput | ListDatasetImportJobsCommandOutput | ListDatasetsCommandOutput | ListEventTrackersCommandOutput | ListFiltersCommandOutput | ListRecipesCommandOutput | ListSchemasCommandOutput | ListSolutionVersionsCommandOutput | ListSolutionsCommandOutput | StopSolutionVersionCreationCommandOutput | UpdateCampaignCommandOutput;
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
declare type PersonalizeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & UserAgentInputConfig;
/**
 * The configuration interface of PersonalizeClient class constructor that set the region, credentials and other options.
 */
export interface PersonalizeClientConfig extends PersonalizeClientConfigType {
}
declare type PersonalizeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & UserAgentResolvedConfig;
/**
 * The resolved configuration interface of PersonalizeClient class. This is resolved and normalized from the {@link PersonalizeClientConfig | constructor configuration interface}.
 */
export interface PersonalizeClientResolvedConfig extends PersonalizeClientResolvedConfigType {
}
/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export declare class PersonalizeClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, PersonalizeClientResolvedConfig> {
    /**
     * The resolved configuration of PersonalizeClient class. This is resolved and normalized from the {@link PersonalizeClientConfig | constructor configuration interface}.
     */
    readonly config: PersonalizeClientResolvedConfig;
    constructor(configuration: PersonalizeClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
