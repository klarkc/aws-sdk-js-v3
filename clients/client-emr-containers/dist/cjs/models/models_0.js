"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeManagedEndpointResponse = exports.DescribeJobRunResponse = exports.StartJobRunRequest = exports.JobRun = exports.Endpoint = exports.CreateManagedEndpointRequest = exports.ConfigurationOverrides = exports.Configuration = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartJobRunResponse = exports.ListVirtualClustersResponse = exports.ListVirtualClustersRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListManagedEndpointsRequest = exports.ListJobRunsRequest = exports.DescribeVirtualClusterResponse = exports.VirtualCluster = exports.VirtualClusterState = exports.DescribeVirtualClusterRequest = exports.EndpointState = exports.DescribeManagedEndpointRequest = exports.JobRunState = exports.JobDriver = exports.SparkSubmitJobDriver = exports.FailureReason = exports.DescribeJobRunRequest = exports.DeleteVirtualClusterResponse = exports.DeleteVirtualClusterRequest = exports.DeleteManagedEndpointResponse = exports.DeleteManagedEndpointRequest = exports.CreateVirtualClusterResponse = exports.CreateVirtualClusterRequest = exports.ContainerProvider = exports.ContainerProviderType = exports.ContainerInfo = exports.EksInfo = exports.ResourceNotFoundException = exports.CreateManagedEndpointResponse = exports.MonitoringConfiguration = exports.S3MonitoringConfiguration = exports.PersistentAppUI = exports.CloudWatchMonitoringConfiguration = exports.ValidationException = exports.InternalServerException = exports.CancelJobRunResponse = exports.CancelJobRunRequest = void 0;
exports.ListManagedEndpointsResponse = exports.ListJobRunsResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CancelJobRunRequest;
(function (CancelJobRunRequest) {
    /**
     * @internal
     */
    CancelJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRunRequest = exports.CancelJobRunRequest || (exports.CancelJobRunRequest = {}));
var CancelJobRunResponse;
(function (CancelJobRunResponse) {
    /**
     * @internal
     */
    CancelJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRunResponse = exports.CancelJobRunResponse || (exports.CancelJobRunResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var CloudWatchMonitoringConfiguration;
(function (CloudWatchMonitoringConfiguration) {
    /**
     * @internal
     */
    CloudWatchMonitoringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchMonitoringConfiguration = exports.CloudWatchMonitoringConfiguration || (exports.CloudWatchMonitoringConfiguration = {}));
var PersistentAppUI;
(function (PersistentAppUI) {
    PersistentAppUI["DISABLED"] = "DISABLED";
    PersistentAppUI["ENABLED"] = "ENABLED";
})(PersistentAppUI = exports.PersistentAppUI || (exports.PersistentAppUI = {}));
var S3MonitoringConfiguration;
(function (S3MonitoringConfiguration) {
    /**
     * @internal
     */
    S3MonitoringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3MonitoringConfiguration = exports.S3MonitoringConfiguration || (exports.S3MonitoringConfiguration = {}));
var MonitoringConfiguration;
(function (MonitoringConfiguration) {
    /**
     * @internal
     */
    MonitoringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoringConfiguration = exports.MonitoringConfiguration || (exports.MonitoringConfiguration = {}));
var CreateManagedEndpointResponse;
(function (CreateManagedEndpointResponse) {
    /**
     * @internal
     */
    CreateManagedEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateManagedEndpointResponse = exports.CreateManagedEndpointResponse || (exports.CreateManagedEndpointResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var EksInfo;
(function (EksInfo) {
    /**
     * @internal
     */
    EksInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EksInfo = exports.EksInfo || (exports.EksInfo = {}));
var ContainerInfo;
(function (ContainerInfo) {
    ContainerInfo.visit = (value, visitor) => {
        if (value.eksInfo !== undefined)
            return visitor.eksInfo(value.eksInfo);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ContainerInfo.filterSensitiveLog = (obj) => {
        if (obj.eksInfo !== undefined)
            return { eksInfo: EksInfo.filterSensitiveLog(obj.eksInfo) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ContainerInfo = exports.ContainerInfo || (exports.ContainerInfo = {}));
var ContainerProviderType;
(function (ContainerProviderType) {
    ContainerProviderType["EKS"] = "EKS";
})(ContainerProviderType = exports.ContainerProviderType || (exports.ContainerProviderType = {}));
var ContainerProvider;
(function (ContainerProvider) {
    /**
     * @internal
     */
    ContainerProvider.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.info && { info: ContainerInfo.filterSensitiveLog(obj.info) }),
    });
})(ContainerProvider = exports.ContainerProvider || (exports.ContainerProvider = {}));
var CreateVirtualClusterRequest;
(function (CreateVirtualClusterRequest) {
    /**
     * @internal
     */
    CreateVirtualClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }),
    });
})(CreateVirtualClusterRequest = exports.CreateVirtualClusterRequest || (exports.CreateVirtualClusterRequest = {}));
var CreateVirtualClusterResponse;
(function (CreateVirtualClusterResponse) {
    /**
     * @internal
     */
    CreateVirtualClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVirtualClusterResponse = exports.CreateVirtualClusterResponse || (exports.CreateVirtualClusterResponse = {}));
var DeleteManagedEndpointRequest;
(function (DeleteManagedEndpointRequest) {
    /**
     * @internal
     */
    DeleteManagedEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteManagedEndpointRequest = exports.DeleteManagedEndpointRequest || (exports.DeleteManagedEndpointRequest = {}));
var DeleteManagedEndpointResponse;
(function (DeleteManagedEndpointResponse) {
    /**
     * @internal
     */
    DeleteManagedEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteManagedEndpointResponse = exports.DeleteManagedEndpointResponse || (exports.DeleteManagedEndpointResponse = {}));
var DeleteVirtualClusterRequest;
(function (DeleteVirtualClusterRequest) {
    /**
     * @internal
     */
    DeleteVirtualClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVirtualClusterRequest = exports.DeleteVirtualClusterRequest || (exports.DeleteVirtualClusterRequest = {}));
var DeleteVirtualClusterResponse;
(function (DeleteVirtualClusterResponse) {
    /**
     * @internal
     */
    DeleteVirtualClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVirtualClusterResponse = exports.DeleteVirtualClusterResponse || (exports.DeleteVirtualClusterResponse = {}));
var DescribeJobRunRequest;
(function (DescribeJobRunRequest) {
    /**
     * @internal
     */
    DescribeJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRunRequest = exports.DescribeJobRunRequest || (exports.DescribeJobRunRequest = {}));
var FailureReason;
(function (FailureReason) {
    FailureReason["CLUSTER_UNAVAILABLE"] = "CLUSTER_UNAVAILABLE";
    FailureReason["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    FailureReason["USER_ERROR"] = "USER_ERROR";
    FailureReason["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(FailureReason = exports.FailureReason || (exports.FailureReason = {}));
var SparkSubmitJobDriver;
(function (SparkSubmitJobDriver) {
    /**
     * @internal
     */
    SparkSubmitJobDriver.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.entryPoint && { entryPoint: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.entryPointArguments && { entryPointArguments: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sparkSubmitParameters && { sparkSubmitParameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(SparkSubmitJobDriver = exports.SparkSubmitJobDriver || (exports.SparkSubmitJobDriver = {}));
var JobDriver;
(function (JobDriver) {
    /**
     * @internal
     */
    JobDriver.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sparkSubmitJobDriver && {
            sparkSubmitJobDriver: SparkSubmitJobDriver.filterSensitiveLog(obj.sparkSubmitJobDriver),
        }),
    });
})(JobDriver = exports.JobDriver || (exports.JobDriver = {}));
var JobRunState;
(function (JobRunState) {
    JobRunState["CANCELLED"] = "CANCELLED";
    JobRunState["CANCEL_PENDING"] = "CANCEL_PENDING";
    JobRunState["COMPLETED"] = "COMPLETED";
    JobRunState["FAILED"] = "FAILED";
    JobRunState["PENDING"] = "PENDING";
    JobRunState["RUNNING"] = "RUNNING";
    JobRunState["SUBMITTED"] = "SUBMITTED";
})(JobRunState = exports.JobRunState || (exports.JobRunState = {}));
var DescribeManagedEndpointRequest;
(function (DescribeManagedEndpointRequest) {
    /**
     * @internal
     */
    DescribeManagedEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeManagedEndpointRequest = exports.DescribeManagedEndpointRequest || (exports.DescribeManagedEndpointRequest = {}));
var EndpointState;
(function (EndpointState) {
    EndpointState["ACTIVE"] = "ACTIVE";
    EndpointState["CREATING"] = "CREATING";
    EndpointState["TERMINATED"] = "TERMINATED";
    EndpointState["TERMINATED_WITH_ERRORS"] = "TERMINATED_WITH_ERRORS";
    EndpointState["TERMINATING"] = "TERMINATING";
})(EndpointState = exports.EndpointState || (exports.EndpointState = {}));
var DescribeVirtualClusterRequest;
(function (DescribeVirtualClusterRequest) {
    /**
     * @internal
     */
    DescribeVirtualClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVirtualClusterRequest = exports.DescribeVirtualClusterRequest || (exports.DescribeVirtualClusterRequest = {}));
var VirtualClusterState;
(function (VirtualClusterState) {
    VirtualClusterState["ARRESTED"] = "ARRESTED";
    VirtualClusterState["RUNNING"] = "RUNNING";
    VirtualClusterState["TERMINATED"] = "TERMINATED";
    VirtualClusterState["TERMINATING"] = "TERMINATING";
})(VirtualClusterState = exports.VirtualClusterState || (exports.VirtualClusterState = {}));
var VirtualCluster;
(function (VirtualCluster) {
    /**
     * @internal
     */
    VirtualCluster.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }),
    });
})(VirtualCluster = exports.VirtualCluster || (exports.VirtualCluster = {}));
var DescribeVirtualClusterResponse;
(function (DescribeVirtualClusterResponse) {
    /**
     * @internal
     */
    DescribeVirtualClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.virtualCluster && { virtualCluster: VirtualCluster.filterSensitiveLog(obj.virtualCluster) }),
    });
})(DescribeVirtualClusterResponse = exports.DescribeVirtualClusterResponse || (exports.DescribeVirtualClusterResponse = {}));
var ListJobRunsRequest;
(function (ListJobRunsRequest) {
    /**
     * @internal
     */
    ListJobRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobRunsRequest = exports.ListJobRunsRequest || (exports.ListJobRunsRequest = {}));
var ListManagedEndpointsRequest;
(function (ListManagedEndpointsRequest) {
    /**
     * @internal
     */
    ListManagedEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListManagedEndpointsRequest = exports.ListManagedEndpointsRequest || (exports.ListManagedEndpointsRequest = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListVirtualClustersRequest;
(function (ListVirtualClustersRequest) {
    /**
     * @internal
     */
    ListVirtualClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVirtualClustersRequest = exports.ListVirtualClustersRequest || (exports.ListVirtualClustersRequest = {}));
var ListVirtualClustersResponse;
(function (ListVirtualClustersResponse) {
    /**
     * @internal
     */
    ListVirtualClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.virtualClusters && {
            virtualClusters: obj.virtualClusters.map((item) => VirtualCluster.filterSensitiveLog(item)),
        }),
    });
})(ListVirtualClustersResponse = exports.ListVirtualClustersResponse || (exports.ListVirtualClustersResponse = {}));
var StartJobRunResponse;
(function (StartJobRunResponse) {
    /**
     * @internal
     */
    StartJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRunResponse = exports.StartJobRunResponse || (exports.StartJobRunResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.properties && { properties: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.configurations && {
            configurations: obj.configurations.map((item) => Configuration.filterSensitiveLog(item)),
        }),
    });
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var ConfigurationOverrides;
(function (ConfigurationOverrides) {
    /**
     * @internal
     */
    ConfigurationOverrides.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.applicationConfiguration && {
            applicationConfiguration: obj.applicationConfiguration.map((item) => Configuration.filterSensitiveLog(item)),
        }),
    });
})(ConfigurationOverrides = exports.ConfigurationOverrides || (exports.ConfigurationOverrides = {}));
var CreateManagedEndpointRequest;
(function (CreateManagedEndpointRequest) {
    /**
     * @internal
     */
    CreateManagedEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configurationOverrides && {
            configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
        }),
    });
})(CreateManagedEndpointRequest = exports.CreateManagedEndpointRequest || (exports.CreateManagedEndpointRequest = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configurationOverrides && {
            configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
        }),
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var JobRun;
(function (JobRun) {
    /**
     * @internal
     */
    JobRun.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configurationOverrides && {
            configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
        }),
        ...(obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) }),
    });
})(JobRun = exports.JobRun || (exports.JobRun = {}));
var StartJobRunRequest;
(function (StartJobRunRequest) {
    /**
     * @internal
     */
    StartJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) }),
        ...(obj.configurationOverrides && {
            configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
        }),
    });
})(StartJobRunRequest = exports.StartJobRunRequest || (exports.StartJobRunRequest = {}));
var DescribeJobRunResponse;
(function (DescribeJobRunResponse) {
    /**
     * @internal
     */
    DescribeJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobRun && { jobRun: JobRun.filterSensitiveLog(obj.jobRun) }),
    });
})(DescribeJobRunResponse = exports.DescribeJobRunResponse || (exports.DescribeJobRunResponse = {}));
var DescribeManagedEndpointResponse;
(function (DescribeManagedEndpointResponse) {
    /**
     * @internal
     */
    DescribeManagedEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.endpoint && { endpoint: Endpoint.filterSensitiveLog(obj.endpoint) }),
    });
})(DescribeManagedEndpointResponse = exports.DescribeManagedEndpointResponse || (exports.DescribeManagedEndpointResponse = {}));
var ListJobRunsResponse;
(function (ListJobRunsResponse) {
    /**
     * @internal
     */
    ListJobRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobRuns && { jobRuns: obj.jobRuns.map((item) => JobRun.filterSensitiveLog(item)) }),
    });
})(ListJobRunsResponse = exports.ListJobRunsResponse || (exports.ListJobRunsResponse = {}));
var ListManagedEndpointsResponse;
(function (ListManagedEndpointsResponse) {
    /**
     * @internal
     */
    ListManagedEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListManagedEndpointsResponse = exports.ListManagedEndpointsResponse || (exports.ListManagedEndpointsResponse = {}));
//# sourceMappingURL=models_0.js.map