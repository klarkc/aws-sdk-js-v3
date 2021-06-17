import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface CancelJobRunRequest {
    /**
     * <p>The ID of the job run to cancel.</p>
     */
    id: string | undefined;
    /**
     * <p>The ID of the virtual cluster for which the job run will be canceled.</p>
     */
    virtualClusterId: string | undefined;
}
export declare namespace CancelJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJobRunRequest) => any;
}
export interface CancelJobRunResponse {
    /**
     * <p>The output contains the ID of the cancelled job run.</p>
     */
    id?: string;
    /**
     * <p>The output contains the virtual cluster ID for which the job run is cancelled.</p>
     */
    virtualClusterId?: string;
}
export declare namespace CancelJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJobRunResponse) => any;
}
/**
 * <p>This is an internal server exception.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>There are invalid parameters in the client request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.</p>
 */
export interface CloudWatchMonitoringConfiguration {
    /**
     * <p>The name of the log group for log publishing.</p>
     */
    logGroupName: string | undefined;
    /**
     * <p>The specified name prefix for log streams.</p>
     */
    logStreamNamePrefix?: string;
}
export declare namespace CloudWatchMonitoringConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudWatchMonitoringConfiguration) => any;
}
export declare enum PersistentAppUI {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.</p>
 */
export interface S3MonitoringConfiguration {
    /**
     * <p>Amazon S3 destination URI for log publishing.</p>
     */
    logUri: string | undefined;
}
export declare namespace S3MonitoringConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3MonitoringConfiguration) => any;
}
/**
 * <p>Configuration setting for monitoring.</p>
 */
export interface MonitoringConfiguration {
    /**
     * <p>Monitoring configurations for the persistent application UI. </p>
     */
    persistentAppUI?: PersistentAppUI | string;
    /**
     * <p>Monitoring configurations for CloudWatch.</p>
     */
    cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
    /**
     * <p>Amazon S3 configuration for monitoring log publishing.</p>
     */
    s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
export declare namespace MonitoringConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MonitoringConfiguration) => any;
}
export interface CreateManagedEndpointResponse {
    /**
     * <p>The output contains the ID of the managed endpoint.</p>
     */
    id?: string;
    /**
     * <p>The output contains the name of the managed endpoint.</p>
     */
    name?: string;
    /**
     * <p>The output contains the ARN of the managed endpoint.</p>
     */
    arn?: string;
    /**
     * <p>The output contains the ID of the virtual cluster.</p>
     */
    virtualClusterId?: string;
}
export declare namespace CreateManagedEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateManagedEndpointResponse) => any;
}
/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The information about the EKS cluster.</p>
 */
export interface EksInfo {
    /**
     * <p>The namespaces of the EKS cluster.</p>
     */
    namespace?: string;
}
export declare namespace EksInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EksInfo) => any;
}
/**
 * <p>The information about the container used for a job run or a managed endpoint.</p>
 */
export declare type ContainerInfo = ContainerInfo.EksInfoMember | ContainerInfo.$UnknownMember;
export declare namespace ContainerInfo {
    /**
     * <p>The information about the EKS cluster.</p>
     */
    interface EksInfoMember {
        eksInfo: EksInfo;
        $unknown?: never;
    }
    interface $UnknownMember {
        eksInfo?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        eksInfo: (value: EksInfo) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ContainerInfo, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContainerInfo) => any;
}
export declare enum ContainerProviderType {
    EKS = "EKS"
}
/**
 * <p>The information about the container provider.</p>
 */
export interface ContainerProvider {
    /**
     * <p>The type of the container provider. EKS is the only supported type as of now.</p>
     */
    type: ContainerProviderType | string | undefined;
    /**
     * <p>The ID of the container cluster.</p>
     */
    id: string | undefined;
    /**
     * <p>The information about the container cluster.</p>
     */
    info?: ContainerInfo;
}
export declare namespace ContainerProvider {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContainerProvider) => any;
}
export interface CreateVirtualClusterRequest {
    /**
     * <p>The specified name of the virtual cluster.</p>
     */
    name: string | undefined;
    /**
     * <p>The container provider of the virtual cluster.</p>
     */
    containerProvider: ContainerProvider | undefined;
    /**
     * <p>The client token of the virtual cluster.</p>
     */
    clientToken?: string;
    /**
     * <p>The tags assigned to the virtual cluster.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateVirtualClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVirtualClusterRequest) => any;
}
export interface CreateVirtualClusterResponse {
    /**
     * <p>This output contains the virtual cluster ID.</p>
     */
    id?: string;
    /**
     * <p>This output contains the name of the virtual cluster.</p>
     */
    name?: string;
    /**
     * <p>This output contains the ARN of virtual cluster.</p>
     */
    arn?: string;
}
export declare namespace CreateVirtualClusterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVirtualClusterResponse) => any;
}
export interface DeleteManagedEndpointRequest {
    /**
     * <p>The ID of the managed endpoint.</p>
     */
    id: string | undefined;
    /**
     * <p>The ID of the endpoint's virtual cluster.</p>
     */
    virtualClusterId: string | undefined;
}
export declare namespace DeleteManagedEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteManagedEndpointRequest) => any;
}
export interface DeleteManagedEndpointResponse {
    /**
     * <p>The output displays the ID of the managed endpoint.</p>
     */
    id?: string;
    /**
     * <p>The output displays the ID of the endpoint's virtual cluster.</p>
     */
    virtualClusterId?: string;
}
export declare namespace DeleteManagedEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteManagedEndpointResponse) => any;
}
export interface DeleteVirtualClusterRequest {
    /**
     * <p>The ID of the virtual cluster that will be deleted.</p>
     */
    id: string | undefined;
}
export declare namespace DeleteVirtualClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVirtualClusterRequest) => any;
}
export interface DeleteVirtualClusterResponse {
    /**
     * <p>This output contains the ID of the virtual cluster that will be deleted. </p>
     */
    id?: string;
}
export declare namespace DeleteVirtualClusterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVirtualClusterResponse) => any;
}
export interface DescribeJobRunRequest {
    /**
     * <p>The ID of the job run request. </p>
     */
    id: string | undefined;
    /**
     * <p>The ID of the virtual cluster for which the job run is submitted.</p>
     */
    virtualClusterId: string | undefined;
}
export declare namespace DescribeJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRunRequest) => any;
}
export declare enum FailureReason {
    CLUSTER_UNAVAILABLE = "CLUSTER_UNAVAILABLE",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    USER_ERROR = "USER_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR"
}
/**
 * <p>The information about job driver for Spark submit.</p>
 */
export interface SparkSubmitJobDriver {
    /**
     * <p>The entry point of job application.</p>
     */
    entryPoint: string | undefined;
    /**
     * <p>The arguments for job application.</p>
     */
    entryPointArguments?: string[];
    /**
     * <p>The Spark submit parameters that are used for job runs.</p>
     */
    sparkSubmitParameters?: string;
}
export declare namespace SparkSubmitJobDriver {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SparkSubmitJobDriver) => any;
}
/**
 * <p>Specify the driver that the job runs on.</p>
 */
export interface JobDriver {
    /**
     * <p>The job driver parameters specified for spark submit.</p>
     */
    sparkSubmitJobDriver?: SparkSubmitJobDriver;
}
export declare namespace JobDriver {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobDriver) => any;
}
export declare enum JobRunState {
    CANCELLED = "CANCELLED",
    CANCEL_PENDING = "CANCEL_PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    SUBMITTED = "SUBMITTED"
}
export interface DescribeManagedEndpointRequest {
    /**
     * <p>This output displays ID of the managed endpoint.</p>
     */
    id: string | undefined;
    /**
     * <p>The ID of the endpoint's virtual cluster.</p>
     */
    virtualClusterId: string | undefined;
}
export declare namespace DescribeManagedEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeManagedEndpointRequest) => any;
}
export declare enum EndpointState {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING",
    TERMINATED = "TERMINATED",
    TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS",
    TERMINATING = "TERMINATING"
}
export interface DescribeVirtualClusterRequest {
    /**
     * <p>The ID of the virtual cluster that will be described.</p>
     */
    id: string | undefined;
}
export declare namespace DescribeVirtualClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeVirtualClusterRequest) => any;
}
export declare enum VirtualClusterState {
    ARRESTED = "ARRESTED",
    RUNNING = "RUNNING",
    TERMINATED = "TERMINATED",
    TERMINATING = "TERMINATING"
}
/**
 * <p>This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.</p>
 */
export interface VirtualCluster {
    /**
     * <p>The ID of the virtual cluster.</p>
     */
    id?: string;
    /**
     * <p>The name of the virtual cluster.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the virtual cluster.</p>
     */
    arn?: string;
    /**
     * <p>The state of the virtual cluster.</p>
     */
    state?: VirtualClusterState | string;
    /**
     * <p>The container provider of the virtual cluster.</p>
     */
    containerProvider?: ContainerProvider;
    /**
     * <p>The date and time when the virtual cluster is created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The assigned tags of the virtual cluster.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace VirtualCluster {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VirtualCluster) => any;
}
export interface DescribeVirtualClusterResponse {
    /**
     * <p>This output displays information about the specified virtual cluster.</p>
     */
    virtualCluster?: VirtualCluster;
}
export declare namespace DescribeVirtualClusterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeVirtualClusterResponse) => any;
}
export interface ListJobRunsRequest {
    /**
     * <p>The ID of the virtual cluster for which to list the job run. </p>
     */
    virtualClusterId: string | undefined;
    /**
     * <p>The date and time before which the job runs were submitted.</p>
     */
    createdBefore?: Date;
    /**
     * <p>The date and time after which the job runs were submitted.</p>
     */
    createdAfter?: Date;
    /**
     * <p>The name of the job run.</p>
     */
    name?: string;
    /**
     * <p>The states of the job run.</p>
     */
    states?: (JobRunState | string)[];
    /**
     * <p>The maximum number of job runs that can be listed.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of job runs to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobRunsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobRunsRequest) => any;
}
export interface ListManagedEndpointsRequest {
    /**
     * <p>The ID of the virtual cluster.</p>
     */
    virtualClusterId: string | undefined;
    /**
     * <p>The date and time before which the endpoints are created.</p>
     */
    createdBefore?: Date;
    /**
     * <p> The date and time after which the endpoints are created.</p>
     */
    createdAfter?: Date;
    /**
     * <p>The types of the managed endpoints.</p>
     */
    types?: string[];
    /**
     * <p>The states of the managed endpoints.</p>
     */
    states?: (EndpointState | string)[];
    /**
     * <p>The maximum number of managed endpoints that can be listed.</p>
     */
    maxResults?: number;
    /**
     * <p> The token for the next set of managed endpoints to return. </p>
     */
    nextToken?: string;
}
export declare namespace ListManagedEndpointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListManagedEndpointsRequest) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of tagged resources.</p>
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
     * <p>The tags assigned to resources.</p>
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
export interface ListVirtualClustersRequest {
    /**
     * <p>The container provider ID of the virtual cluster.</p>
     */
    containerProviderId?: string;
    /**
     * <p>The container provider type of the virtual cluster. EKS is the only supported type as of now.</p>
     */
    containerProviderType?: ContainerProviderType | string;
    /**
     * <p>The date and time after which the virtual clusters are created.</p>
     */
    createdAfter?: Date;
    /**
     * <p>The date and time before which the virtual clusters are created.</p>
     */
    createdBefore?: Date;
    /**
     * <p>The states of the requested virtual clusters.</p>
     */
    states?: (VirtualClusterState | string)[];
    /**
     * <p>The maximum number of virtual clusters that can be listed.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of virtual clusters to return. </p>
     */
    nextToken?: string;
}
export declare namespace ListVirtualClustersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVirtualClustersRequest) => any;
}
export interface ListVirtualClustersResponse {
    /**
     * <p>This output lists the specified virtual clusters.</p>
     */
    virtualClusters?: VirtualCluster[];
    /**
     * <p>This output displays the token for the next set of virtual clusters.</p>
     */
    nextToken?: string;
}
export declare namespace ListVirtualClustersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVirtualClustersResponse) => any;
}
export interface StartJobRunResponse {
    /**
     * <p>This output displays the started job run ID.</p>
     */
    id?: string;
    /**
     * <p>This output displays the name of the started job run.</p>
     */
    name?: string;
    /**
     * <p>This output lists the ARN of job run.</p>
     */
    arn?: string;
    /**
     * <p>This output displays the virtual cluster ID for which the job run was submitted.</p>
     */
    virtualClusterId?: string;
}
export declare namespace StartJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartJobRunResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The ARN of resources.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags assigned to resources.</p>
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
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The ARN of resources.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag keys of the resources.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
/**
 * <p>A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.</p>
 */
export interface Configuration {
    /**
     * <p>The classification within a configuration.</p>
     */
    classification: string | undefined;
    /**
     * <p>A set of properties specified within a configuration classification.</p>
     */
    properties?: {
        [key: string]: string;
    };
    /**
     * <p>A list of additional configurations to apply within a configuration object.</p>
     */
    configurations?: Configuration[];
}
export declare namespace Configuration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Configuration) => any;
}
/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 */
export interface ConfigurationOverrides {
    /**
     * <p>The configurations for the application running by the job run. </p>
     */
    applicationConfiguration?: Configuration[];
    /**
     * <p>The configurations for monitoring.</p>
     */
    monitoringConfiguration?: MonitoringConfiguration;
}
export declare namespace ConfigurationOverrides {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigurationOverrides) => any;
}
export interface CreateManagedEndpointRequest {
    /**
     * <p>The name of the managed endpoint.</p>
     */
    name: string | undefined;
    /**
     * <p>The ID of the virtual cluster for which a managed endpoint is created.</p>
     */
    virtualClusterId: string | undefined;
    /**
     * <p>The type of the managed endpoint.</p>
     */
    type: string | undefined;
    /**
     * <p>The Amazon EMR release version.</p>
     */
    releaseLabel: string | undefined;
    /**
     * <p>The ARN of the execution role.</p>
     */
    executionRoleArn: string | undefined;
    /**
     * <p>The certificate ARN of the managed endpoint.</p>
     */
    certificateArn: string | undefined;
    /**
     * <p>The configuration settings that will be used to override existing configurations.</p>
     */
    configurationOverrides?: ConfigurationOverrides;
    /**
     * <p>The client idempotency token for this create call.</p>
     */
    clientToken?: string;
    /**
     * <p>The tags of the managed endpoint.
     *       </p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateManagedEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateManagedEndpointRequest) => any;
}
/**
 * <p>This entity represents the endpoint that is managed by Amazon EMR on EKS.</p>
 */
export interface Endpoint {
    /**
     * <p>The ID of the endpoint.</p>
     */
    id?: string;
    /**
     * <p>The name of the endpoint.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the endpoint.</p>
     */
    arn?: string;
    /**
     * <p>The ID of the endpoint's virtual cluster.</p>
     */
    virtualClusterId?: string;
    /**
     * <p>The type of the endpoint.</p>
     */
    type?: string;
    /**
     * <p>The state of the endpoint.</p>
     */
    state?: EndpointState | string;
    /**
     * <p>The EMR release version to be used for the endpoint.</p>
     */
    releaseLabel?: string;
    /**
     * <p>The execution role ARN of the endpoint.</p>
     */
    executionRoleArn?: string;
    /**
     * <p>The certificate ARN of the endpoint.</p>
     */
    certificateArn?: string;
    /**
     * <p>The configuration settings that are used to override existing configurations for endpoints.</p>
     */
    configurationOverrides?: ConfigurationOverrides;
    /**
     * <p>The server URL of the endpoint.</p>
     */
    serverUrl?: string;
    /**
     * <p>The date and time when the endpoint was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The security group configuration of the endpoint.
     *       </p>
     */
    securityGroup?: string;
    /**
     * <p>The subnet IDs of the endpoint.
     *       </p>
     */
    subnetIds?: string[];
    /**
     * <p>The tags of the endpoint.
     *       </p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Endpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Endpoint) => any;
}
/**
 * <p>This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. </p>
 */
export interface JobRun {
    /**
     * <p>The ID of the job run.</p>
     */
    id?: string;
    /**
     * <p>The name of the job run.</p>
     */
    name?: string;
    /**
     * <p>The ID of the job run's virtual cluster.</p>
     */
    virtualClusterId?: string;
    /**
     * <p>The ARN of job run.</p>
     */
    arn?: string;
    /**
     * <p>The state of the job run. </p>
     */
    state?: JobRunState | string;
    /**
     * <p>The client token used to start a job run.</p>
     */
    clientToken?: string;
    /**
     * <p>The execution role ARN of the job run.</p>
     */
    executionRoleArn?: string;
    /**
     * <p>The release version of Amazon EMR.</p>
     */
    releaseLabel?: string;
    /**
     * <p>The configuration settings that are used to override default configuration.</p>
     */
    configurationOverrides?: ConfigurationOverrides;
    /**
     * <p>Parameters of job driver for the job run.</p>
     */
    jobDriver?: JobDriver;
    /**
     * <p>The date and time when the job run was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user who created the job run.</p>
     */
    createdBy?: string;
    /**
     * <p>The date and time when the job run has finished.</p>
     */
    finishedAt?: Date;
    /**
     * <p>Additional details of the job run state.</p>
     */
    stateDetails?: string;
    /**
     * <p>The reasons why the job run has failed.</p>
     */
    failureReason?: FailureReason | string;
    /**
     * <p>The assigned tags of the job run.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace JobRun {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobRun) => any;
}
export interface StartJobRunRequest {
    /**
     * <p>The name of the job run.</p>
     */
    name?: string;
    /**
     * <p>The virtual cluster ID for which the job run request is submitted.</p>
     */
    virtualClusterId: string | undefined;
    /**
     * <p>The client idempotency token of the job run request. </p>
     */
    clientToken?: string;
    /**
     * <p>The execution role ARN for the job run.</p>
     */
    executionRoleArn: string | undefined;
    /**
     * <p>The Amazon EMR release version to use for the job run.</p>
     */
    releaseLabel: string | undefined;
    /**
     * <p>The job driver for the job run.</p>
     */
    jobDriver: JobDriver | undefined;
    /**
     * <p>The configuration overrides for the job run.</p>
     */
    configurationOverrides?: ConfigurationOverrides;
    /**
     * <p>The tags assigned to job runs.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StartJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartJobRunRequest) => any;
}
export interface DescribeJobRunResponse {
    /**
     * <p>The output displays information about a job run.</p>
     */
    jobRun?: JobRun;
}
export declare namespace DescribeJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRunResponse) => any;
}
export interface DescribeManagedEndpointResponse {
    /**
     * <p>This output displays information about a managed endpoint.</p>
     */
    endpoint?: Endpoint;
}
export declare namespace DescribeManagedEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeManagedEndpointResponse) => any;
}
export interface ListJobRunsResponse {
    /**
     * <p>This output lists information about the specified job runs.</p>
     */
    jobRuns?: JobRun[];
    /**
     * <p>This output displays the token for the next set of job runs.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobRunsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobRunsResponse) => any;
}
export interface ListManagedEndpointsResponse {
    /**
     * <p>The managed endpoints to be listed.</p>
     */
    endpoints?: Endpoint[];
    /**
     * <p> The token for the next set of endpoints to return. </p>
     */
    nextToken?: string;
}
export declare namespace ListManagedEndpointsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListManagedEndpointsResponse) => any;
}
