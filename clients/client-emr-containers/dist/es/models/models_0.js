import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var CancelJobRunRequest;
(function (CancelJobRunRequest) {
    /**
     * @internal
     */
    CancelJobRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRunRequest || (CancelJobRunRequest = {}));
export var CancelJobRunResponse;
(function (CancelJobRunResponse) {
    /**
     * @internal
     */
    CancelJobRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRunResponse || (CancelJobRunResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var CloudWatchMonitoringConfiguration;
(function (CloudWatchMonitoringConfiguration) {
    /**
     * @internal
     */
    CloudWatchMonitoringConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchMonitoringConfiguration || (CloudWatchMonitoringConfiguration = {}));
export var PersistentAppUI;
(function (PersistentAppUI) {
    PersistentAppUI["DISABLED"] = "DISABLED";
    PersistentAppUI["ENABLED"] = "ENABLED";
})(PersistentAppUI || (PersistentAppUI = {}));
export var S3MonitoringConfiguration;
(function (S3MonitoringConfiguration) {
    /**
     * @internal
     */
    S3MonitoringConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3MonitoringConfiguration || (S3MonitoringConfiguration = {}));
export var MonitoringConfiguration;
(function (MonitoringConfiguration) {
    /**
     * @internal
     */
    MonitoringConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoringConfiguration || (MonitoringConfiguration = {}));
export var CreateManagedEndpointResponse;
(function (CreateManagedEndpointResponse) {
    /**
     * @internal
     */
    CreateManagedEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateManagedEndpointResponse || (CreateManagedEndpointResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var EksInfo;
(function (EksInfo) {
    /**
     * @internal
     */
    EksInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EksInfo || (EksInfo = {}));
export var ContainerInfo;
(function (ContainerInfo) {
    ContainerInfo.visit = function (value, visitor) {
        if (value.eksInfo !== undefined)
            return visitor.eksInfo(value.eksInfo);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ContainerInfo.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.eksInfo !== undefined)
            return { eksInfo: EksInfo.filterSensitiveLog(obj.eksInfo) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ContainerInfo || (ContainerInfo = {}));
export var ContainerProviderType;
(function (ContainerProviderType) {
    ContainerProviderType["EKS"] = "EKS";
})(ContainerProviderType || (ContainerProviderType = {}));
export var ContainerProvider;
(function (ContainerProvider) {
    /**
     * @internal
     */
    ContainerProvider.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.info && { info: ContainerInfo.filterSensitiveLog(obj.info) }))); };
})(ContainerProvider || (ContainerProvider = {}));
export var CreateVirtualClusterRequest;
(function (CreateVirtualClusterRequest) {
    /**
     * @internal
     */
    CreateVirtualClusterRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }))); };
})(CreateVirtualClusterRequest || (CreateVirtualClusterRequest = {}));
export var CreateVirtualClusterResponse;
(function (CreateVirtualClusterResponse) {
    /**
     * @internal
     */
    CreateVirtualClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVirtualClusterResponse || (CreateVirtualClusterResponse = {}));
export var DeleteManagedEndpointRequest;
(function (DeleteManagedEndpointRequest) {
    /**
     * @internal
     */
    DeleteManagedEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteManagedEndpointRequest || (DeleteManagedEndpointRequest = {}));
export var DeleteManagedEndpointResponse;
(function (DeleteManagedEndpointResponse) {
    /**
     * @internal
     */
    DeleteManagedEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteManagedEndpointResponse || (DeleteManagedEndpointResponse = {}));
export var DeleteVirtualClusterRequest;
(function (DeleteVirtualClusterRequest) {
    /**
     * @internal
     */
    DeleteVirtualClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVirtualClusterRequest || (DeleteVirtualClusterRequest = {}));
export var DeleteVirtualClusterResponse;
(function (DeleteVirtualClusterResponse) {
    /**
     * @internal
     */
    DeleteVirtualClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVirtualClusterResponse || (DeleteVirtualClusterResponse = {}));
export var DescribeJobRunRequest;
(function (DescribeJobRunRequest) {
    /**
     * @internal
     */
    DescribeJobRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRunRequest || (DescribeJobRunRequest = {}));
export var FailureReason;
(function (FailureReason) {
    FailureReason["CLUSTER_UNAVAILABLE"] = "CLUSTER_UNAVAILABLE";
    FailureReason["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    FailureReason["USER_ERROR"] = "USER_ERROR";
    FailureReason["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(FailureReason || (FailureReason = {}));
export var SparkSubmitJobDriver;
(function (SparkSubmitJobDriver) {
    /**
     * @internal
     */
    SparkSubmitJobDriver.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.entryPoint && { entryPoint: SENSITIVE_STRING })), (obj.entryPointArguments && { entryPointArguments: SENSITIVE_STRING })), (obj.sparkSubmitParameters && { sparkSubmitParameters: SENSITIVE_STRING }))); };
})(SparkSubmitJobDriver || (SparkSubmitJobDriver = {}));
export var JobDriver;
(function (JobDriver) {
    /**
     * @internal
     */
    JobDriver.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.sparkSubmitJobDriver && {
        sparkSubmitJobDriver: SparkSubmitJobDriver.filterSensitiveLog(obj.sparkSubmitJobDriver),
    }))); };
})(JobDriver || (JobDriver = {}));
export var JobRunState;
(function (JobRunState) {
    JobRunState["CANCELLED"] = "CANCELLED";
    JobRunState["CANCEL_PENDING"] = "CANCEL_PENDING";
    JobRunState["COMPLETED"] = "COMPLETED";
    JobRunState["FAILED"] = "FAILED";
    JobRunState["PENDING"] = "PENDING";
    JobRunState["RUNNING"] = "RUNNING";
    JobRunState["SUBMITTED"] = "SUBMITTED";
})(JobRunState || (JobRunState = {}));
export var DescribeManagedEndpointRequest;
(function (DescribeManagedEndpointRequest) {
    /**
     * @internal
     */
    DescribeManagedEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeManagedEndpointRequest || (DescribeManagedEndpointRequest = {}));
export var EndpointState;
(function (EndpointState) {
    EndpointState["ACTIVE"] = "ACTIVE";
    EndpointState["CREATING"] = "CREATING";
    EndpointState["TERMINATED"] = "TERMINATED";
    EndpointState["TERMINATED_WITH_ERRORS"] = "TERMINATED_WITH_ERRORS";
    EndpointState["TERMINATING"] = "TERMINATING";
})(EndpointState || (EndpointState = {}));
export var DescribeVirtualClusterRequest;
(function (DescribeVirtualClusterRequest) {
    /**
     * @internal
     */
    DescribeVirtualClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVirtualClusterRequest || (DescribeVirtualClusterRequest = {}));
export var VirtualClusterState;
(function (VirtualClusterState) {
    VirtualClusterState["ARRESTED"] = "ARRESTED";
    VirtualClusterState["RUNNING"] = "RUNNING";
    VirtualClusterState["TERMINATED"] = "TERMINATED";
    VirtualClusterState["TERMINATING"] = "TERMINATING";
})(VirtualClusterState || (VirtualClusterState = {}));
export var VirtualCluster;
(function (VirtualCluster) {
    /**
     * @internal
     */
    VirtualCluster.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }))); };
})(VirtualCluster || (VirtualCluster = {}));
export var DescribeVirtualClusterResponse;
(function (DescribeVirtualClusterResponse) {
    /**
     * @internal
     */
    DescribeVirtualClusterResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.virtualCluster && { virtualCluster: VirtualCluster.filterSensitiveLog(obj.virtualCluster) }))); };
})(DescribeVirtualClusterResponse || (DescribeVirtualClusterResponse = {}));
export var ListJobRunsRequest;
(function (ListJobRunsRequest) {
    /**
     * @internal
     */
    ListJobRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobRunsRequest || (ListJobRunsRequest = {}));
export var ListManagedEndpointsRequest;
(function (ListManagedEndpointsRequest) {
    /**
     * @internal
     */
    ListManagedEndpointsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListManagedEndpointsRequest || (ListManagedEndpointsRequest = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListVirtualClustersRequest;
(function (ListVirtualClustersRequest) {
    /**
     * @internal
     */
    ListVirtualClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVirtualClustersRequest || (ListVirtualClustersRequest = {}));
export var ListVirtualClustersResponse;
(function (ListVirtualClustersResponse) {
    /**
     * @internal
     */
    ListVirtualClustersResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.virtualClusters && {
        virtualClusters: obj.virtualClusters.map(function (item) { return VirtualCluster.filterSensitiveLog(item); }),
    }))); };
})(ListVirtualClustersResponse || (ListVirtualClustersResponse = {}));
export var StartJobRunResponse;
(function (StartJobRunResponse) {
    /**
     * @internal
     */
    StartJobRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartJobRunResponse || (StartJobRunResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.properties && { properties: SENSITIVE_STRING })), (obj.configurations && {
        configurations: obj.configurations.map(function (item) { return Configuration.filterSensitiveLog(item); }),
    }))); };
})(Configuration || (Configuration = {}));
export var ConfigurationOverrides;
(function (ConfigurationOverrides) {
    /**
     * @internal
     */
    ConfigurationOverrides.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.applicationConfiguration && {
        applicationConfiguration: obj.applicationConfiguration.map(function (item) { return Configuration.filterSensitiveLog(item); }),
    }))); };
})(ConfigurationOverrides || (ConfigurationOverrides = {}));
export var CreateManagedEndpointRequest;
(function (CreateManagedEndpointRequest) {
    /**
     * @internal
     */
    CreateManagedEndpointRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.configurationOverrides && {
        configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }))); };
})(CreateManagedEndpointRequest || (CreateManagedEndpointRequest = {}));
export var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.configurationOverrides && {
        configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }))); };
})(Endpoint || (Endpoint = {}));
export var JobRun;
(function (JobRun) {
    /**
     * @internal
     */
    JobRun.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.configurationOverrides && {
        configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    })), (obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) }))); };
})(JobRun || (JobRun = {}));
export var StartJobRunRequest;
(function (StartJobRunRequest) {
    /**
     * @internal
     */
    StartJobRunRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) })), (obj.configurationOverrides && {
        configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }))); };
})(StartJobRunRequest || (StartJobRunRequest = {}));
export var DescribeJobRunResponse;
(function (DescribeJobRunResponse) {
    /**
     * @internal
     */
    DescribeJobRunResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobRun && { jobRun: JobRun.filterSensitiveLog(obj.jobRun) }))); };
})(DescribeJobRunResponse || (DescribeJobRunResponse = {}));
export var DescribeManagedEndpointResponse;
(function (DescribeManagedEndpointResponse) {
    /**
     * @internal
     */
    DescribeManagedEndpointResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.endpoint && { endpoint: Endpoint.filterSensitiveLog(obj.endpoint) }))); };
})(DescribeManagedEndpointResponse || (DescribeManagedEndpointResponse = {}));
export var ListJobRunsResponse;
(function (ListJobRunsResponse) {
    /**
     * @internal
     */
    ListJobRunsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobRuns && { jobRuns: obj.jobRuns.map(function (item) { return JobRun.filterSensitiveLog(item); }) }))); };
})(ListJobRunsResponse || (ListJobRunsResponse = {}));
export var ListManagedEndpointsResponse;
(function (ListManagedEndpointsResponse) {
    /**
     * @internal
     */
    ListManagedEndpointsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListManagedEndpointsResponse || (ListManagedEndpointsResponse = {}));
//# sourceMappingURL=models_0.js.map