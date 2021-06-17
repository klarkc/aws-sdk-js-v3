"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = exports.ForbiddenException = exports.BatchAssociateScramSecretResponse = exports.BatchAssociateScramSecretRequest = exports.BadRequestException = exports.UnprocessedScramSecret = exports.NodeInfo = exports.ZookeeperNodeInfo = exports.NodeType = exports.BrokerNodeInfo = exports.KafkaVersion = exports.KafkaVersionStatus = exports.Configuration = exports.ConfigurationState = exports.ConfigurationRevision = exports.CompatibleKafkaVersion = exports.ClusterOperationInfo = exports.MutableClusterInfo = exports.ConfigurationInfo = exports.ClusterOperationStep = exports.ClusterOperationStepInfo = exports.ErrorInfo = exports.ClusterInfo = exports.StateInfo = exports.ClusterState = exports.OpenMonitoring = exports.Prometheus = exports.NodeExporter = exports.JmxExporter = exports.LoggingInfo = exports.BrokerLogs = exports.S3 = exports.Firehose = exports.CloudWatchLogs = exports.EnhancedMonitoring = exports.EncryptionInfo = exports.EncryptionInTransit = exports.ClientBroker = exports.EncryptionAtRest = exports.BrokerSoftwareInfo = exports.ClientAuthentication = exports.Tls = exports.Sasl = exports.Scram = exports.Iam = exports.BrokerNodeGroupInfo = exports.StorageInfo = exports.EBSStorageInfo = exports.BrokerAZDistribution = exports.BrokerEBSVolumeInfo = void 0;
exports.TagResourceRequest = exports.RebootBrokerResponse = exports.RebootBrokerRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListScramSecretsResponse = exports.ListScramSecretsRequest = exports.ListNodesResponse = exports.ListNodesRequest = exports.ListKafkaVersionsResponse = exports.ListKafkaVersionsRequest = exports.ListConfigurationsResponse = exports.ListConfigurationsRequest = exports.ListConfigurationRevisionsResponse = exports.ListConfigurationRevisionsRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.GetCompatibleKafkaVersionsResponse = exports.GetCompatibleKafkaVersionsRequest = exports.GetBootstrapBrokersResponse = exports.GetBootstrapBrokersRequest = exports.DescribeConfigurationRevisionResponse = exports.DescribeConfigurationRevisionRequest = exports.DescribeConfigurationResponse = exports.DescribeConfigurationRequest = exports.DescribeClusterOperationResponse = exports.DescribeClusterOperationRequest = exports.DescribeClusterResponse = exports.DescribeClusterRequest = exports.DeleteConfigurationResponse = exports.DeleteConfigurationRequest = exports.DeleteClusterResponse = exports.DeleteClusterRequest = exports.CreateConfigurationResponse = exports.CreateConfigurationRequest = exports.CreateClusterResponse = exports.CreateClusterRequest = exports.OpenMonitoringInfo = exports.PrometheusInfo = exports.NodeExporterInfo = exports.JmxExporterInfo = exports.ConflictException = exports.BatchDisassociateScramSecretResponse = exports.BatchDisassociateScramSecretRequest = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ServiceUnavailableException = exports.NotFoundException = void 0;
exports.UpdateMonitoringResponse = exports.UpdateMonitoringRequest = exports.UpdateConfigurationResponse = exports.UpdateConfigurationRequest = exports.UpdateClusterKafkaVersionResponse = exports.UpdateClusterKafkaVersionRequest = exports.UpdateClusterConfigurationResponse = exports.UpdateClusterConfigurationRequest = exports.UpdateBrokerTypeResponse = exports.UpdateBrokerTypeRequest = exports.UpdateBrokerStorageResponse = exports.UpdateBrokerStorageRequest = exports.UpdateBrokerCountResponse = exports.UpdateBrokerCountRequest = exports.UntagResourceRequest = void 0;
var BrokerEBSVolumeInfo;
(function (BrokerEBSVolumeInfo) {
    /**
     * @internal
     */
    BrokerEBSVolumeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerEBSVolumeInfo = exports.BrokerEBSVolumeInfo || (exports.BrokerEBSVolumeInfo = {}));
var BrokerAZDistribution;
(function (BrokerAZDistribution) {
    BrokerAZDistribution["DEFAULT"] = "DEFAULT";
})(BrokerAZDistribution = exports.BrokerAZDistribution || (exports.BrokerAZDistribution = {}));
var EBSStorageInfo;
(function (EBSStorageInfo) {
    /**
     * @internal
     */
    EBSStorageInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSStorageInfo = exports.EBSStorageInfo || (exports.EBSStorageInfo = {}));
var StorageInfo;
(function (StorageInfo) {
    /**
     * @internal
     */
    StorageInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageInfo = exports.StorageInfo || (exports.StorageInfo = {}));
var BrokerNodeGroupInfo;
(function (BrokerNodeGroupInfo) {
    /**
     * @internal
     */
    BrokerNodeGroupInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerNodeGroupInfo = exports.BrokerNodeGroupInfo || (exports.BrokerNodeGroupInfo = {}));
var Iam;
(function (Iam) {
    /**
     * @internal
     */
    Iam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Iam = exports.Iam || (exports.Iam = {}));
var Scram;
(function (Scram) {
    /**
     * @internal
     */
    Scram.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scram = exports.Scram || (exports.Scram = {}));
var Sasl;
(function (Sasl) {
    /**
     * @internal
     */
    Sasl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sasl = exports.Sasl || (exports.Sasl = {}));
var Tls;
(function (Tls) {
    /**
     * @internal
     */
    Tls.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tls = exports.Tls || (exports.Tls = {}));
var ClientAuthentication;
(function (ClientAuthentication) {
    /**
     * @internal
     */
    ClientAuthentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientAuthentication = exports.ClientAuthentication || (exports.ClientAuthentication = {}));
var BrokerSoftwareInfo;
(function (BrokerSoftwareInfo) {
    /**
     * @internal
     */
    BrokerSoftwareInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerSoftwareInfo = exports.BrokerSoftwareInfo || (exports.BrokerSoftwareInfo = {}));
var EncryptionAtRest;
(function (EncryptionAtRest) {
    /**
     * @internal
     */
    EncryptionAtRest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionAtRest = exports.EncryptionAtRest || (exports.EncryptionAtRest = {}));
var ClientBroker;
(function (ClientBroker) {
    ClientBroker["PLAINTEXT"] = "PLAINTEXT";
    ClientBroker["TLS"] = "TLS";
    ClientBroker["TLS_PLAINTEXT"] = "TLS_PLAINTEXT";
})(ClientBroker = exports.ClientBroker || (exports.ClientBroker = {}));
var EncryptionInTransit;
(function (EncryptionInTransit) {
    /**
     * @internal
     */
    EncryptionInTransit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionInTransit = exports.EncryptionInTransit || (exports.EncryptionInTransit = {}));
var EncryptionInfo;
(function (EncryptionInfo) {
    /**
     * @internal
     */
    EncryptionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionInfo = exports.EncryptionInfo || (exports.EncryptionInfo = {}));
var EnhancedMonitoring;
(function (EnhancedMonitoring) {
    EnhancedMonitoring["DEFAULT"] = "DEFAULT";
    EnhancedMonitoring["PER_BROKER"] = "PER_BROKER";
    EnhancedMonitoring["PER_TOPIC_PER_BROKER"] = "PER_TOPIC_PER_BROKER";
    EnhancedMonitoring["PER_TOPIC_PER_PARTITION"] = "PER_TOPIC_PER_PARTITION";
})(EnhancedMonitoring = exports.EnhancedMonitoring || (exports.EnhancedMonitoring = {}));
var CloudWatchLogs;
(function (CloudWatchLogs) {
    /**
     * @internal
     */
    CloudWatchLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogs = exports.CloudWatchLogs || (exports.CloudWatchLogs = {}));
var Firehose;
(function (Firehose) {
    /**
     * @internal
     */
    Firehose.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Firehose = exports.Firehose || (exports.Firehose = {}));
var S3;
(function (S3) {
    /**
     * @internal
     */
    S3.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3 = exports.S3 || (exports.S3 = {}));
var BrokerLogs;
(function (BrokerLogs) {
    /**
     * @internal
     */
    BrokerLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerLogs = exports.BrokerLogs || (exports.BrokerLogs = {}));
var LoggingInfo;
(function (LoggingInfo) {
    /**
     * @internal
     */
    LoggingInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingInfo = exports.LoggingInfo || (exports.LoggingInfo = {}));
var JmxExporter;
(function (JmxExporter) {
    /**
     * @internal
     */
    JmxExporter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JmxExporter = exports.JmxExporter || (exports.JmxExporter = {}));
var NodeExporter;
(function (NodeExporter) {
    /**
     * @internal
     */
    NodeExporter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeExporter = exports.NodeExporter || (exports.NodeExporter = {}));
var Prometheus;
(function (Prometheus) {
    /**
     * @internal
     */
    Prometheus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Prometheus = exports.Prometheus || (exports.Prometheus = {}));
var OpenMonitoring;
(function (OpenMonitoring) {
    /**
     * @internal
     */
    OpenMonitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenMonitoring = exports.OpenMonitoring || (exports.OpenMonitoring = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["ACTIVE"] = "ACTIVE";
    ClusterState["CREATING"] = "CREATING";
    ClusterState["DELETING"] = "DELETING";
    ClusterState["FAILED"] = "FAILED";
    ClusterState["HEALING"] = "HEALING";
    ClusterState["MAINTENANCE"] = "MAINTENANCE";
    ClusterState["REBOOTING_BROKER"] = "REBOOTING_BROKER";
    ClusterState["UPDATING"] = "UPDATING";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var StateInfo;
(function (StateInfo) {
    /**
     * @internal
     */
    StateInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateInfo = exports.StateInfo || (exports.StateInfo = {}));
var ClusterInfo;
(function (ClusterInfo) {
    /**
     * @internal
     */
    ClusterInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterInfo = exports.ClusterInfo || (exports.ClusterInfo = {}));
var ErrorInfo;
(function (ErrorInfo) {
    /**
     * @internal
     */
    ErrorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorInfo = exports.ErrorInfo || (exports.ErrorInfo = {}));
var ClusterOperationStepInfo;
(function (ClusterOperationStepInfo) {
    /**
     * @internal
     */
    ClusterOperationStepInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterOperationStepInfo = exports.ClusterOperationStepInfo || (exports.ClusterOperationStepInfo = {}));
var ClusterOperationStep;
(function (ClusterOperationStep) {
    /**
     * @internal
     */
    ClusterOperationStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterOperationStep = exports.ClusterOperationStep || (exports.ClusterOperationStep = {}));
var ConfigurationInfo;
(function (ConfigurationInfo) {
    /**
     * @internal
     */
    ConfigurationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationInfo = exports.ConfigurationInfo || (exports.ConfigurationInfo = {}));
var MutableClusterInfo;
(function (MutableClusterInfo) {
    /**
     * @internal
     */
    MutableClusterInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MutableClusterInfo = exports.MutableClusterInfo || (exports.MutableClusterInfo = {}));
var ClusterOperationInfo;
(function (ClusterOperationInfo) {
    /**
     * @internal
     */
    ClusterOperationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterOperationInfo = exports.ClusterOperationInfo || (exports.ClusterOperationInfo = {}));
var CompatibleKafkaVersion;
(function (CompatibleKafkaVersion) {
    /**
     * @internal
     */
    CompatibleKafkaVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompatibleKafkaVersion = exports.CompatibleKafkaVersion || (exports.CompatibleKafkaVersion = {}));
var ConfigurationRevision;
(function (ConfigurationRevision) {
    /**
     * @internal
     */
    ConfigurationRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationRevision = exports.ConfigurationRevision || (exports.ConfigurationRevision = {}));
var ConfigurationState;
(function (ConfigurationState) {
    ConfigurationState["ACTIVE"] = "ACTIVE";
    ConfigurationState["DELETE_FAILED"] = "DELETE_FAILED";
    ConfigurationState["DELETING"] = "DELETING";
})(ConfigurationState = exports.ConfigurationState || (exports.ConfigurationState = {}));
var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var KafkaVersionStatus;
(function (KafkaVersionStatus) {
    KafkaVersionStatus["ACTIVE"] = "ACTIVE";
    KafkaVersionStatus["DEPRECATED"] = "DEPRECATED";
})(KafkaVersionStatus = exports.KafkaVersionStatus || (exports.KafkaVersionStatus = {}));
var KafkaVersion;
(function (KafkaVersion) {
    /**
     * @internal
     */
    KafkaVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KafkaVersion = exports.KafkaVersion || (exports.KafkaVersion = {}));
var BrokerNodeInfo;
(function (BrokerNodeInfo) {
    /**
     * @internal
     */
    BrokerNodeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerNodeInfo = exports.BrokerNodeInfo || (exports.BrokerNodeInfo = {}));
var NodeType;
(function (NodeType) {
    NodeType["BROKER"] = "BROKER";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var ZookeeperNodeInfo;
(function (ZookeeperNodeInfo) {
    /**
     * @internal
     */
    ZookeeperNodeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZookeeperNodeInfo = exports.ZookeeperNodeInfo || (exports.ZookeeperNodeInfo = {}));
var NodeInfo;
(function (NodeInfo) {
    /**
     * @internal
     */
    NodeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeInfo = exports.NodeInfo || (exports.NodeInfo = {}));
var UnprocessedScramSecret;
(function (UnprocessedScramSecret) {
    /**
     * @internal
     */
    UnprocessedScramSecret.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedScramSecret = exports.UnprocessedScramSecret || (exports.UnprocessedScramSecret = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var BatchAssociateScramSecretRequest;
(function (BatchAssociateScramSecretRequest) {
    /**
     * @internal
     */
    BatchAssociateScramSecretRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateScramSecretRequest = exports.BatchAssociateScramSecretRequest || (exports.BatchAssociateScramSecretRequest = {}));
var BatchAssociateScramSecretResponse;
(function (BatchAssociateScramSecretResponse) {
    /**
     * @internal
     */
    BatchAssociateScramSecretResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateScramSecretResponse = exports.BatchAssociateScramSecretResponse || (exports.BatchAssociateScramSecretResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var BatchDisassociateScramSecretRequest;
(function (BatchDisassociateScramSecretRequest) {
    /**
     * @internal
     */
    BatchDisassociateScramSecretRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateScramSecretRequest = exports.BatchDisassociateScramSecretRequest || (exports.BatchDisassociateScramSecretRequest = {}));
var BatchDisassociateScramSecretResponse;
(function (BatchDisassociateScramSecretResponse) {
    /**
     * @internal
     */
    BatchDisassociateScramSecretResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateScramSecretResponse = exports.BatchDisassociateScramSecretResponse || (exports.BatchDisassociateScramSecretResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var JmxExporterInfo;
(function (JmxExporterInfo) {
    /**
     * @internal
     */
    JmxExporterInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JmxExporterInfo = exports.JmxExporterInfo || (exports.JmxExporterInfo = {}));
var NodeExporterInfo;
(function (NodeExporterInfo) {
    /**
     * @internal
     */
    NodeExporterInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeExporterInfo = exports.NodeExporterInfo || (exports.NodeExporterInfo = {}));
var PrometheusInfo;
(function (PrometheusInfo) {
    /**
     * @internal
     */
    PrometheusInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrometheusInfo = exports.PrometheusInfo || (exports.PrometheusInfo = {}));
var OpenMonitoringInfo;
(function (OpenMonitoringInfo) {
    /**
     * @internal
     */
    OpenMonitoringInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenMonitoringInfo = exports.OpenMonitoringInfo || (exports.OpenMonitoringInfo = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var CreateConfigurationRequest;
(function (CreateConfigurationRequest) {
    /**
     * @internal
     */
    CreateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationRequest = exports.CreateConfigurationRequest || (exports.CreateConfigurationRequest = {}));
var CreateConfigurationResponse;
(function (CreateConfigurationResponse) {
    /**
     * @internal
     */
    CreateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationResponse = exports.CreateConfigurationResponse || (exports.CreateConfigurationResponse = {}));
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {}));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {}));
var DeleteConfigurationRequest;
(function (DeleteConfigurationRequest) {
    /**
     * @internal
     */
    DeleteConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationRequest = exports.DeleteConfigurationRequest || (exports.DeleteConfigurationRequest = {}));
var DeleteConfigurationResponse;
(function (DeleteConfigurationResponse) {
    /**
     * @internal
     */
    DeleteConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationResponse = exports.DeleteConfigurationResponse || (exports.DeleteConfigurationResponse = {}));
var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    /**
     * @internal
     */
    DescribeClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterRequest = exports.DescribeClusterRequest || (exports.DescribeClusterRequest = {}));
var DescribeClusterResponse;
(function (DescribeClusterResponse) {
    /**
     * @internal
     */
    DescribeClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterResponse = exports.DescribeClusterResponse || (exports.DescribeClusterResponse = {}));
var DescribeClusterOperationRequest;
(function (DescribeClusterOperationRequest) {
    /**
     * @internal
     */
    DescribeClusterOperationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterOperationRequest = exports.DescribeClusterOperationRequest || (exports.DescribeClusterOperationRequest = {}));
var DescribeClusterOperationResponse;
(function (DescribeClusterOperationResponse) {
    /**
     * @internal
     */
    DescribeClusterOperationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClusterOperationResponse = exports.DescribeClusterOperationResponse || (exports.DescribeClusterOperationResponse = {}));
var DescribeConfigurationRequest;
(function (DescribeConfigurationRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRequest = exports.DescribeConfigurationRequest || (exports.DescribeConfigurationRequest = {}));
var DescribeConfigurationResponse;
(function (DescribeConfigurationResponse) {
    /**
     * @internal
     */
    DescribeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationResponse = exports.DescribeConfigurationResponse || (exports.DescribeConfigurationResponse = {}));
var DescribeConfigurationRevisionRequest;
(function (DescribeConfigurationRevisionRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRevisionRequest = exports.DescribeConfigurationRevisionRequest || (exports.DescribeConfigurationRevisionRequest = {}));
var DescribeConfigurationRevisionResponse;
(function (DescribeConfigurationRevisionResponse) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRevisionResponse = exports.DescribeConfigurationRevisionResponse || (exports.DescribeConfigurationRevisionResponse = {}));
var GetBootstrapBrokersRequest;
(function (GetBootstrapBrokersRequest) {
    /**
     * @internal
     */
    GetBootstrapBrokersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBootstrapBrokersRequest = exports.GetBootstrapBrokersRequest || (exports.GetBootstrapBrokersRequest = {}));
var GetBootstrapBrokersResponse;
(function (GetBootstrapBrokersResponse) {
    /**
     * @internal
     */
    GetBootstrapBrokersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBootstrapBrokersResponse = exports.GetBootstrapBrokersResponse || (exports.GetBootstrapBrokersResponse = {}));
var GetCompatibleKafkaVersionsRequest;
(function (GetCompatibleKafkaVersionsRequest) {
    /**
     * @internal
     */
    GetCompatibleKafkaVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCompatibleKafkaVersionsRequest = exports.GetCompatibleKafkaVersionsRequest || (exports.GetCompatibleKafkaVersionsRequest = {}));
var GetCompatibleKafkaVersionsResponse;
(function (GetCompatibleKafkaVersionsResponse) {
    /**
     * @internal
     */
    GetCompatibleKafkaVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCompatibleKafkaVersionsResponse = exports.GetCompatibleKafkaVersionsResponse || (exports.GetCompatibleKafkaVersionsResponse = {}));
var ListClusterOperationsRequest;
(function (ListClusterOperationsRequest) {
    /**
     * @internal
     */
    ListClusterOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClusterOperationsRequest = exports.ListClusterOperationsRequest || (exports.ListClusterOperationsRequest = {}));
var ListClusterOperationsResponse;
(function (ListClusterOperationsResponse) {
    /**
     * @internal
     */
    ListClusterOperationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClusterOperationsResponse = exports.ListClusterOperationsResponse || (exports.ListClusterOperationsResponse = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersResponse = exports.ListClustersResponse || (exports.ListClustersResponse = {}));
var ListConfigurationRevisionsRequest;
(function (ListConfigurationRevisionsRequest) {
    /**
     * @internal
     */
    ListConfigurationRevisionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationRevisionsRequest = exports.ListConfigurationRevisionsRequest || (exports.ListConfigurationRevisionsRequest = {}));
var ListConfigurationRevisionsResponse;
(function (ListConfigurationRevisionsResponse) {
    /**
     * @internal
     */
    ListConfigurationRevisionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationRevisionsResponse = exports.ListConfigurationRevisionsResponse || (exports.ListConfigurationRevisionsResponse = {}));
var ListConfigurationsRequest;
(function (ListConfigurationsRequest) {
    /**
     * @internal
     */
    ListConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationsRequest = exports.ListConfigurationsRequest || (exports.ListConfigurationsRequest = {}));
var ListConfigurationsResponse;
(function (ListConfigurationsResponse) {
    /**
     * @internal
     */
    ListConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationsResponse = exports.ListConfigurationsResponse || (exports.ListConfigurationsResponse = {}));
var ListKafkaVersionsRequest;
(function (ListKafkaVersionsRequest) {
    /**
     * @internal
     */
    ListKafkaVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKafkaVersionsRequest = exports.ListKafkaVersionsRequest || (exports.ListKafkaVersionsRequest = {}));
var ListKafkaVersionsResponse;
(function (ListKafkaVersionsResponse) {
    /**
     * @internal
     */
    ListKafkaVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListKafkaVersionsResponse = exports.ListKafkaVersionsResponse || (exports.ListKafkaVersionsResponse = {}));
var ListNodesRequest;
(function (ListNodesRequest) {
    /**
     * @internal
     */
    ListNodesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodesRequest = exports.ListNodesRequest || (exports.ListNodesRequest = {}));
var ListNodesResponse;
(function (ListNodesResponse) {
    /**
     * @internal
     */
    ListNodesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodesResponse = exports.ListNodesResponse || (exports.ListNodesResponse = {}));
var ListScramSecretsRequest;
(function (ListScramSecretsRequest) {
    /**
     * @internal
     */
    ListScramSecretsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScramSecretsRequest = exports.ListScramSecretsRequest || (exports.ListScramSecretsRequest = {}));
var ListScramSecretsResponse;
(function (ListScramSecretsResponse) {
    /**
     * @internal
     */
    ListScramSecretsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScramSecretsResponse = exports.ListScramSecretsResponse || (exports.ListScramSecretsResponse = {}));
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
var RebootBrokerRequest;
(function (RebootBrokerRequest) {
    /**
     * @internal
     */
    RebootBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootBrokerRequest = exports.RebootBrokerRequest || (exports.RebootBrokerRequest = {}));
var RebootBrokerResponse;
(function (RebootBrokerResponse) {
    /**
     * @internal
     */
    RebootBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootBrokerResponse = exports.RebootBrokerResponse || (exports.RebootBrokerResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateBrokerCountRequest;
(function (UpdateBrokerCountRequest) {
    /**
     * @internal
     */
    UpdateBrokerCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerCountRequest = exports.UpdateBrokerCountRequest || (exports.UpdateBrokerCountRequest = {}));
var UpdateBrokerCountResponse;
(function (UpdateBrokerCountResponse) {
    /**
     * @internal
     */
    UpdateBrokerCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerCountResponse = exports.UpdateBrokerCountResponse || (exports.UpdateBrokerCountResponse = {}));
var UpdateBrokerStorageRequest;
(function (UpdateBrokerStorageRequest) {
    /**
     * @internal
     */
    UpdateBrokerStorageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerStorageRequest = exports.UpdateBrokerStorageRequest || (exports.UpdateBrokerStorageRequest = {}));
var UpdateBrokerStorageResponse;
(function (UpdateBrokerStorageResponse) {
    /**
     * @internal
     */
    UpdateBrokerStorageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerStorageResponse = exports.UpdateBrokerStorageResponse || (exports.UpdateBrokerStorageResponse = {}));
var UpdateBrokerTypeRequest;
(function (UpdateBrokerTypeRequest) {
    /**
     * @internal
     */
    UpdateBrokerTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerTypeRequest = exports.UpdateBrokerTypeRequest || (exports.UpdateBrokerTypeRequest = {}));
var UpdateBrokerTypeResponse;
(function (UpdateBrokerTypeResponse) {
    /**
     * @internal
     */
    UpdateBrokerTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerTypeResponse = exports.UpdateBrokerTypeResponse || (exports.UpdateBrokerTypeResponse = {}));
var UpdateClusterConfigurationRequest;
(function (UpdateClusterConfigurationRequest) {
    /**
     * @internal
     */
    UpdateClusterConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterConfigurationRequest = exports.UpdateClusterConfigurationRequest || (exports.UpdateClusterConfigurationRequest = {}));
var UpdateClusterConfigurationResponse;
(function (UpdateClusterConfigurationResponse) {
    /**
     * @internal
     */
    UpdateClusterConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterConfigurationResponse = exports.UpdateClusterConfigurationResponse || (exports.UpdateClusterConfigurationResponse = {}));
var UpdateClusterKafkaVersionRequest;
(function (UpdateClusterKafkaVersionRequest) {
    /**
     * @internal
     */
    UpdateClusterKafkaVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterKafkaVersionRequest = exports.UpdateClusterKafkaVersionRequest || (exports.UpdateClusterKafkaVersionRequest = {}));
var UpdateClusterKafkaVersionResponse;
(function (UpdateClusterKafkaVersionResponse) {
    /**
     * @internal
     */
    UpdateClusterKafkaVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterKafkaVersionResponse = exports.UpdateClusterKafkaVersionResponse || (exports.UpdateClusterKafkaVersionResponse = {}));
var UpdateConfigurationRequest;
(function (UpdateConfigurationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationRequest = exports.UpdateConfigurationRequest || (exports.UpdateConfigurationRequest = {}));
var UpdateConfigurationResponse;
(function (UpdateConfigurationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationResponse = exports.UpdateConfigurationResponse || (exports.UpdateConfigurationResponse = {}));
var UpdateMonitoringRequest;
(function (UpdateMonitoringRequest) {
    /**
     * @internal
     */
    UpdateMonitoringRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMonitoringRequest = exports.UpdateMonitoringRequest || (exports.UpdateMonitoringRequest = {}));
var UpdateMonitoringResponse;
(function (UpdateMonitoringResponse) {
    /**
     * @internal
     */
    UpdateMonitoringResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMonitoringResponse = exports.UpdateMonitoringResponse || (exports.UpdateMonitoringResponse = {}));
//# sourceMappingURL=models_0.js.map