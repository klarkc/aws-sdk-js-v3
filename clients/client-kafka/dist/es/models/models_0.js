import { __assign } from "tslib";
export var BrokerEBSVolumeInfo;
(function (BrokerEBSVolumeInfo) {
    /**
     * @internal
     */
    BrokerEBSVolumeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BrokerEBSVolumeInfo || (BrokerEBSVolumeInfo = {}));
export var BrokerAZDistribution;
(function (BrokerAZDistribution) {
    BrokerAZDistribution["DEFAULT"] = "DEFAULT";
})(BrokerAZDistribution || (BrokerAZDistribution = {}));
export var EBSStorageInfo;
(function (EBSStorageInfo) {
    /**
     * @internal
     */
    EBSStorageInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSStorageInfo || (EBSStorageInfo = {}));
export var StorageInfo;
(function (StorageInfo) {
    /**
     * @internal
     */
    StorageInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageInfo || (StorageInfo = {}));
export var BrokerNodeGroupInfo;
(function (BrokerNodeGroupInfo) {
    /**
     * @internal
     */
    BrokerNodeGroupInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BrokerNodeGroupInfo || (BrokerNodeGroupInfo = {}));
export var Iam;
(function (Iam) {
    /**
     * @internal
     */
    Iam.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Iam || (Iam = {}));
export var Scram;
(function (Scram) {
    /**
     * @internal
     */
    Scram.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scram || (Scram = {}));
export var Sasl;
(function (Sasl) {
    /**
     * @internal
     */
    Sasl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Sasl || (Sasl = {}));
export var Tls;
(function (Tls) {
    /**
     * @internal
     */
    Tls.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tls || (Tls = {}));
export var ClientAuthentication;
(function (ClientAuthentication) {
    /**
     * @internal
     */
    ClientAuthentication.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientAuthentication || (ClientAuthentication = {}));
export var BrokerSoftwareInfo;
(function (BrokerSoftwareInfo) {
    /**
     * @internal
     */
    BrokerSoftwareInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BrokerSoftwareInfo || (BrokerSoftwareInfo = {}));
export var EncryptionAtRest;
(function (EncryptionAtRest) {
    /**
     * @internal
     */
    EncryptionAtRest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionAtRest || (EncryptionAtRest = {}));
export var ClientBroker;
(function (ClientBroker) {
    ClientBroker["PLAINTEXT"] = "PLAINTEXT";
    ClientBroker["TLS"] = "TLS";
    ClientBroker["TLS_PLAINTEXT"] = "TLS_PLAINTEXT";
})(ClientBroker || (ClientBroker = {}));
export var EncryptionInTransit;
(function (EncryptionInTransit) {
    /**
     * @internal
     */
    EncryptionInTransit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionInTransit || (EncryptionInTransit = {}));
export var EncryptionInfo;
(function (EncryptionInfo) {
    /**
     * @internal
     */
    EncryptionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionInfo || (EncryptionInfo = {}));
export var EnhancedMonitoring;
(function (EnhancedMonitoring) {
    EnhancedMonitoring["DEFAULT"] = "DEFAULT";
    EnhancedMonitoring["PER_BROKER"] = "PER_BROKER";
    EnhancedMonitoring["PER_TOPIC_PER_BROKER"] = "PER_TOPIC_PER_BROKER";
    EnhancedMonitoring["PER_TOPIC_PER_PARTITION"] = "PER_TOPIC_PER_PARTITION";
})(EnhancedMonitoring || (EnhancedMonitoring = {}));
export var CloudWatchLogs;
(function (CloudWatchLogs) {
    /**
     * @internal
     */
    CloudWatchLogs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchLogs || (CloudWatchLogs = {}));
export var Firehose;
(function (Firehose) {
    /**
     * @internal
     */
    Firehose.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Firehose || (Firehose = {}));
export var S3;
(function (S3) {
    /**
     * @internal
     */
    S3.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3 || (S3 = {}));
export var BrokerLogs;
(function (BrokerLogs) {
    /**
     * @internal
     */
    BrokerLogs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BrokerLogs || (BrokerLogs = {}));
export var LoggingInfo;
(function (LoggingInfo) {
    /**
     * @internal
     */
    LoggingInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingInfo || (LoggingInfo = {}));
export var JmxExporter;
(function (JmxExporter) {
    /**
     * @internal
     */
    JmxExporter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JmxExporter || (JmxExporter = {}));
export var NodeExporter;
(function (NodeExporter) {
    /**
     * @internal
     */
    NodeExporter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeExporter || (NodeExporter = {}));
export var Prometheus;
(function (Prometheus) {
    /**
     * @internal
     */
    Prometheus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Prometheus || (Prometheus = {}));
export var OpenMonitoring;
(function (OpenMonitoring) {
    /**
     * @internal
     */
    OpenMonitoring.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenMonitoring || (OpenMonitoring = {}));
export var ClusterState;
(function (ClusterState) {
    ClusterState["ACTIVE"] = "ACTIVE";
    ClusterState["CREATING"] = "CREATING";
    ClusterState["DELETING"] = "DELETING";
    ClusterState["FAILED"] = "FAILED";
    ClusterState["HEALING"] = "HEALING";
    ClusterState["MAINTENANCE"] = "MAINTENANCE";
    ClusterState["REBOOTING_BROKER"] = "REBOOTING_BROKER";
    ClusterState["UPDATING"] = "UPDATING";
})(ClusterState || (ClusterState = {}));
export var StateInfo;
(function (StateInfo) {
    /**
     * @internal
     */
    StateInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateInfo || (StateInfo = {}));
export var ClusterInfo;
(function (ClusterInfo) {
    /**
     * @internal
     */
    ClusterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterInfo || (ClusterInfo = {}));
export var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorInfo || (ErrorInfo = {}));
export var ClusterOperationStepInfo;
(function (ClusterOperationStepInfo) {
    /**
     * @internal
     */
    ClusterOperationStepInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterOperationStepInfo || (ClusterOperationStepInfo = {}));
export var ClusterOperationStep;
(function (ClusterOperationStep) {
    /**
     * @internal
     */
    ClusterOperationStep.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterOperationStep || (ClusterOperationStep = {}));
export var ConfigurationInfo;
(function (ConfigurationInfo) {
    /**
     * @internal
     */
    ConfigurationInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfigurationInfo || (ConfigurationInfo = {}));
export var MutableClusterInfo;
(function (MutableClusterInfo) {
    /**
     * @internal
     */
    MutableClusterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MutableClusterInfo || (MutableClusterInfo = {}));
export var ClusterOperationInfo;
(function (ClusterOperationInfo) {
    /**
     * @internal
     */
    ClusterOperationInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterOperationInfo || (ClusterOperationInfo = {}));
export var CompatibleKafkaVersion;
(function (CompatibleKafkaVersion) {
    /**
     * @internal
     */
    CompatibleKafkaVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompatibleKafkaVersion || (CompatibleKafkaVersion = {}));
export var ConfigurationRevision;
(function (ConfigurationRevision) {
    /**
     * @internal
     */
    ConfigurationRevision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfigurationRevision || (ConfigurationRevision = {}));
export var ConfigurationState;
(function (ConfigurationState) {
    ConfigurationState["ACTIVE"] = "ACTIVE";
    ConfigurationState["DELETE_FAILED"] = "DELETE_FAILED";
    ConfigurationState["DELETING"] = "DELETING";
})(ConfigurationState || (ConfigurationState = {}));
export var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Configuration || (Configuration = {}));
export var KafkaVersionStatus;
(function (KafkaVersionStatus) {
    KafkaVersionStatus["ACTIVE"] = "ACTIVE";
    KafkaVersionStatus["DEPRECATED"] = "DEPRECATED";
})(KafkaVersionStatus || (KafkaVersionStatus = {}));
export var KafkaVersion;
(function (KafkaVersion) {
    /**
     * @internal
     */
    KafkaVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KafkaVersion || (KafkaVersion = {}));
export var BrokerNodeInfo;
(function (BrokerNodeInfo) {
    /**
     * @internal
     */
    BrokerNodeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BrokerNodeInfo || (BrokerNodeInfo = {}));
export var NodeType;
(function (NodeType) {
    NodeType["BROKER"] = "BROKER";
})(NodeType || (NodeType = {}));
export var ZookeeperNodeInfo;
(function (ZookeeperNodeInfo) {
    /**
     * @internal
     */
    ZookeeperNodeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ZookeeperNodeInfo || (ZookeeperNodeInfo = {}));
export var NodeInfo;
(function (NodeInfo) {
    /**
     * @internal
     */
    NodeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeInfo || (NodeInfo = {}));
export var UnprocessedScramSecret;
(function (UnprocessedScramSecret) {
    /**
     * @internal
     */
    UnprocessedScramSecret.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnprocessedScramSecret || (UnprocessedScramSecret = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var BatchAssociateScramSecretRequest;
(function (BatchAssociateScramSecretRequest) {
    /**
     * @internal
     */
    BatchAssociateScramSecretRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchAssociateScramSecretRequest || (BatchAssociateScramSecretRequest = {}));
export var BatchAssociateScramSecretResponse;
(function (BatchAssociateScramSecretResponse) {
    /**
     * @internal
     */
    BatchAssociateScramSecretResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchAssociateScramSecretResponse || (BatchAssociateScramSecretResponse = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedException || (UnauthorizedException = {}));
export var BatchDisassociateScramSecretRequest;
(function (BatchDisassociateScramSecretRequest) {
    /**
     * @internal
     */
    BatchDisassociateScramSecretRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDisassociateScramSecretRequest || (BatchDisassociateScramSecretRequest = {}));
export var BatchDisassociateScramSecretResponse;
(function (BatchDisassociateScramSecretResponse) {
    /**
     * @internal
     */
    BatchDisassociateScramSecretResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDisassociateScramSecretResponse || (BatchDisassociateScramSecretResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var JmxExporterInfo;
(function (JmxExporterInfo) {
    /**
     * @internal
     */
    JmxExporterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JmxExporterInfo || (JmxExporterInfo = {}));
export var NodeExporterInfo;
(function (NodeExporterInfo) {
    /**
     * @internal
     */
    NodeExporterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeExporterInfo || (NodeExporterInfo = {}));
export var PrometheusInfo;
(function (PrometheusInfo) {
    /**
     * @internal
     */
    PrometheusInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrometheusInfo || (PrometheusInfo = {}));
export var OpenMonitoringInfo;
(function (OpenMonitoringInfo) {
    /**
     * @internal
     */
    OpenMonitoringInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenMonitoringInfo || (OpenMonitoringInfo = {}));
export var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterRequest || (CreateClusterRequest = {}));
export var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterResponse || (CreateClusterResponse = {}));
export var CreateConfigurationRequest;
(function (CreateConfigurationRequest) {
    /**
     * @internal
     */
    CreateConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationRequest || (CreateConfigurationRequest = {}));
export var CreateConfigurationResponse;
(function (CreateConfigurationResponse) {
    /**
     * @internal
     */
    CreateConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationResponse || (CreateConfigurationResponse = {}));
export var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterRequest || (DeleteClusterRequest = {}));
export var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterResponse || (DeleteClusterResponse = {}));
export var DeleteConfigurationRequest;
(function (DeleteConfigurationRequest) {
    /**
     * @internal
     */
    DeleteConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationRequest || (DeleteConfigurationRequest = {}));
export var DeleteConfigurationResponse;
(function (DeleteConfigurationResponse) {
    /**
     * @internal
     */
    DeleteConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationResponse || (DeleteConfigurationResponse = {}));
export var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterRequest || (DescribeClusterRequest = {}));
export var DescribeClusterResponse;
(function (DescribeClusterResponse) {
    /**
     * @internal
     */
    DescribeClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterResponse || (DescribeClusterResponse = {}));
export var DescribeClusterOperationRequest;
(function (DescribeClusterOperationRequest) {
    /**
     * @internal
     */
    DescribeClusterOperationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterOperationRequest || (DescribeClusterOperationRequest = {}));
export var DescribeClusterOperationResponse;
(function (DescribeClusterOperationResponse) {
    /**
     * @internal
     */
    DescribeClusterOperationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClusterOperationResponse || (DescribeClusterOperationResponse = {}));
export var DescribeConfigurationRequest;
(function (DescribeConfigurationRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConfigurationRequest || (DescribeConfigurationRequest = {}));
export var DescribeConfigurationResponse;
(function (DescribeConfigurationResponse) {
    /**
     * @internal
     */
    DescribeConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConfigurationResponse || (DescribeConfigurationResponse = {}));
export var DescribeConfigurationRevisionRequest;
(function (DescribeConfigurationRevisionRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConfigurationRevisionRequest || (DescribeConfigurationRevisionRequest = {}));
export var DescribeConfigurationRevisionResponse;
(function (DescribeConfigurationRevisionResponse) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConfigurationRevisionResponse || (DescribeConfigurationRevisionResponse = {}));
export var GetBootstrapBrokersRequest;
(function (GetBootstrapBrokersRequest) {
    /**
     * @internal
     */
    GetBootstrapBrokersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBootstrapBrokersRequest || (GetBootstrapBrokersRequest = {}));
export var GetBootstrapBrokersResponse;
(function (GetBootstrapBrokersResponse) {
    /**
     * @internal
     */
    GetBootstrapBrokersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBootstrapBrokersResponse || (GetBootstrapBrokersResponse = {}));
export var GetCompatibleKafkaVersionsRequest;
(function (GetCompatibleKafkaVersionsRequest) {
    /**
     * @internal
     */
    GetCompatibleKafkaVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCompatibleKafkaVersionsRequest || (GetCompatibleKafkaVersionsRequest = {}));
export var GetCompatibleKafkaVersionsResponse;
(function (GetCompatibleKafkaVersionsResponse) {
    /**
     * @internal
     */
    GetCompatibleKafkaVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCompatibleKafkaVersionsResponse || (GetCompatibleKafkaVersionsResponse = {}));
export var ListClusterOperationsRequest;
(function (ListClusterOperationsRequest) {
    /**
     * @internal
     */
    ListClusterOperationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClusterOperationsRequest || (ListClusterOperationsRequest = {}));
export var ListClusterOperationsResponse;
(function (ListClusterOperationsResponse) {
    /**
     * @internal
     */
    ListClusterOperationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClusterOperationsResponse || (ListClusterOperationsResponse = {}));
export var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersRequest || (ListClustersRequest = {}));
export var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersResponse || (ListClustersResponse = {}));
export var ListConfigurationRevisionsRequest;
(function (ListConfigurationRevisionsRequest) {
    /**
     * @internal
     */
    ListConfigurationRevisionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationRevisionsRequest || (ListConfigurationRevisionsRequest = {}));
export var ListConfigurationRevisionsResponse;
(function (ListConfigurationRevisionsResponse) {
    /**
     * @internal
     */
    ListConfigurationRevisionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationRevisionsResponse || (ListConfigurationRevisionsResponse = {}));
export var ListConfigurationsRequest;
(function (ListConfigurationsRequest) {
    /**
     * @internal
     */
    ListConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationsRequest || (ListConfigurationsRequest = {}));
export var ListConfigurationsResponse;
(function (ListConfigurationsResponse) {
    /**
     * @internal
     */
    ListConfigurationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationsResponse || (ListConfigurationsResponse = {}));
export var ListKafkaVersionsRequest;
(function (ListKafkaVersionsRequest) {
    /**
     * @internal
     */
    ListKafkaVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKafkaVersionsRequest || (ListKafkaVersionsRequest = {}));
export var ListKafkaVersionsResponse;
(function (ListKafkaVersionsResponse) {
    /**
     * @internal
     */
    ListKafkaVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListKafkaVersionsResponse || (ListKafkaVersionsResponse = {}));
export var ListNodesRequest;
(function (ListNodesRequest) {
    /**
     * @internal
     */
    ListNodesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodesRequest || (ListNodesRequest = {}));
export var ListNodesResponse;
(function (ListNodesResponse) {
    /**
     * @internal
     */
    ListNodesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodesResponse || (ListNodesResponse = {}));
export var ListScramSecretsRequest;
(function (ListScramSecretsRequest) {
    /**
     * @internal
     */
    ListScramSecretsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListScramSecretsRequest || (ListScramSecretsRequest = {}));
export var ListScramSecretsResponse;
(function (ListScramSecretsResponse) {
    /**
     * @internal
     */
    ListScramSecretsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListScramSecretsResponse || (ListScramSecretsResponse = {}));
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
export var RebootBrokerRequest;
(function (RebootBrokerRequest) {
    /**
     * @internal
     */
    RebootBrokerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootBrokerRequest || (RebootBrokerRequest = {}));
export var RebootBrokerResponse;
(function (RebootBrokerResponse) {
    /**
     * @internal
     */
    RebootBrokerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootBrokerResponse || (RebootBrokerResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateBrokerCountRequest;
(function (UpdateBrokerCountRequest) {
    /**
     * @internal
     */
    UpdateBrokerCountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerCountRequest || (UpdateBrokerCountRequest = {}));
export var UpdateBrokerCountResponse;
(function (UpdateBrokerCountResponse) {
    /**
     * @internal
     */
    UpdateBrokerCountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerCountResponse || (UpdateBrokerCountResponse = {}));
export var UpdateBrokerStorageRequest;
(function (UpdateBrokerStorageRequest) {
    /**
     * @internal
     */
    UpdateBrokerStorageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerStorageRequest || (UpdateBrokerStorageRequest = {}));
export var UpdateBrokerStorageResponse;
(function (UpdateBrokerStorageResponse) {
    /**
     * @internal
     */
    UpdateBrokerStorageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerStorageResponse || (UpdateBrokerStorageResponse = {}));
export var UpdateBrokerTypeRequest;
(function (UpdateBrokerTypeRequest) {
    /**
     * @internal
     */
    UpdateBrokerTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerTypeRequest || (UpdateBrokerTypeRequest = {}));
export var UpdateBrokerTypeResponse;
(function (UpdateBrokerTypeResponse) {
    /**
     * @internal
     */
    UpdateBrokerTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBrokerTypeResponse || (UpdateBrokerTypeResponse = {}));
export var UpdateClusterConfigurationRequest;
(function (UpdateClusterConfigurationRequest) {
    /**
     * @internal
     */
    UpdateClusterConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterConfigurationRequest || (UpdateClusterConfigurationRequest = {}));
export var UpdateClusterConfigurationResponse;
(function (UpdateClusterConfigurationResponse) {
    /**
     * @internal
     */
    UpdateClusterConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterConfigurationResponse || (UpdateClusterConfigurationResponse = {}));
export var UpdateClusterKafkaVersionRequest;
(function (UpdateClusterKafkaVersionRequest) {
    /**
     * @internal
     */
    UpdateClusterKafkaVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterKafkaVersionRequest || (UpdateClusterKafkaVersionRequest = {}));
export var UpdateClusterKafkaVersionResponse;
(function (UpdateClusterKafkaVersionResponse) {
    /**
     * @internal
     */
    UpdateClusterKafkaVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterKafkaVersionResponse || (UpdateClusterKafkaVersionResponse = {}));
export var UpdateConfigurationRequest;
(function (UpdateConfigurationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConfigurationRequest || (UpdateConfigurationRequest = {}));
export var UpdateConfigurationResponse;
(function (UpdateConfigurationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConfigurationResponse || (UpdateConfigurationResponse = {}));
export var UpdateMonitoringRequest;
(function (UpdateMonitoringRequest) {
    /**
     * @internal
     */
    UpdateMonitoringRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMonitoringRequest || (UpdateMonitoringRequest = {}));
export var UpdateMonitoringResponse;
(function (UpdateMonitoringResponse) {
    /**
     * @internal
     */
    UpdateMonitoringResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMonitoringResponse || (UpdateMonitoringResponse = {}));
//# sourceMappingURL=models_0.js.map