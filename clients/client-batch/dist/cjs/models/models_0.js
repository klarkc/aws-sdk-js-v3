"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ulimit =
  exports.ResourceRequirement =
  exports.ResourceType =
  exports.NetworkConfiguration =
  exports.MountPoint =
  exports.LogConfiguration =
  exports.Secret =
  exports.LogDriver =
  exports.LinuxParameters =
  exports.Tmpfs =
  exports.Device =
  exports.DeviceCgroupPermission =
  exports.FargatePlatformConfiguration =
  exports.KeyValuePair =
  exports.DescribeJobDefinitionsRequest =
  exports.DescribeComputeEnvironmentsResponse =
  exports.ComputeEnvironmentDetail =
  exports.CEStatus =
  exports.DescribeComputeEnvironmentsRequest =
  exports.DeregisterJobDefinitionResponse =
  exports.DeregisterJobDefinitionRequest =
  exports.DeleteJobQueueResponse =
  exports.DeleteJobQueueRequest =
  exports.DeleteComputeEnvironmentResponse =
  exports.DeleteComputeEnvironmentRequest =
  exports.CreateJobQueueResponse =
  exports.CreateJobQueueRequest =
  exports.JQState =
  exports.ComputeEnvironmentOrder =
  exports.CreateComputeEnvironmentResponse =
  exports.CreateComputeEnvironmentRequest =
  exports.CEType =
  exports.CEState =
  exports.ComputeResource =
  exports.CRType =
  exports.LaunchTemplateSpecification =
  exports.Ec2Configuration =
  exports.CRAllocationStrategy =
  exports.ServerException =
  exports.ClientException =
  exports.CancelJobResponse =
  exports.CancelJobRequest =
  exports.AttemptDetail =
  exports.AttemptContainerDetail =
  exports.NetworkInterface =
  exports.AssignPublicIp =
  exports.ArrayPropertiesSummary =
  exports.ArrayPropertiesDetail =
  exports.ArrayProperties =
  exports.ArrayJobDependency =
    void 0;
exports.UpdateComputeEnvironmentRequest =
  exports.ComputeResourceUpdate =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TerminateJobResponse =
  exports.TerminateJobRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.SubmitJobResponse =
  exports.SubmitJobRequest =
  exports.NodeOverrides =
  exports.NodePropertyOverride =
  exports.ContainerOverrides =
  exports.RegisterJobDefinitionResponse =
  exports.RegisterJobDefinitionRequest =
  exports.JobDefinitionType =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListJobsResponse =
  exports.JobSummary =
  exports.NodePropertiesSummary =
  exports.ContainerSummary =
  exports.ListJobsRequest =
  exports.DescribeJobsResponse =
  exports.JobDetail =
  exports.JobStatus =
  exports.NodeDetails =
  exports.JobDependency =
  exports.ContainerDetail =
  exports.DescribeJobsRequest =
  exports.DescribeJobQueuesResponse =
  exports.JobQueueDetail =
  exports.JQStatus =
  exports.DescribeJobQueuesRequest =
  exports.DescribeJobDefinitionsResponse =
  exports.JobDefinition =
  exports.JobTimeout =
  exports.RetryStrategy =
  exports.EvaluateOnExit =
  exports.RetryAction =
  exports.PlatformCapability =
  exports.NodeProperties =
  exports.NodeRangeProperty =
  exports.ContainerProperties =
  exports.Volume =
  exports.Host =
  exports.EFSVolumeConfiguration =
  exports.EFSTransitEncryption =
  exports.EFSAuthorizationConfig =
  exports.EFSAuthorizationConfigIAM =
    void 0;
exports.UpdateJobQueueResponse = exports.UpdateJobQueueRequest = exports.UpdateComputeEnvironmentResponse = void 0;
var ArrayJobDependency;
(function (ArrayJobDependency) {
  ArrayJobDependency["N_TO_N"] = "N_TO_N";
  ArrayJobDependency["SEQUENTIAL"] = "SEQUENTIAL";
})((ArrayJobDependency = exports.ArrayJobDependency || (exports.ArrayJobDependency = {})));
var ArrayProperties;
(function (ArrayProperties) {
  /**
   * @internal
   */
  ArrayProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ArrayProperties = exports.ArrayProperties || (exports.ArrayProperties = {})));
var ArrayPropertiesDetail;
(function (ArrayPropertiesDetail) {
  /**
   * @internal
   */
  ArrayPropertiesDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ArrayPropertiesDetail = exports.ArrayPropertiesDetail || (exports.ArrayPropertiesDetail = {})));
var ArrayPropertiesSummary;
(function (ArrayPropertiesSummary) {
  /**
   * @internal
   */
  ArrayPropertiesSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ArrayPropertiesSummary = exports.ArrayPropertiesSummary || (exports.ArrayPropertiesSummary = {})));
var AssignPublicIp;
(function (AssignPublicIp) {
  AssignPublicIp["DISABLED"] = "DISABLED";
  AssignPublicIp["ENABLED"] = "ENABLED";
})((AssignPublicIp = exports.AssignPublicIp || (exports.AssignPublicIp = {})));
var NetworkInterface;
(function (NetworkInterface) {
  /**
   * @internal
   */
  NetworkInterface.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {})));
var AttemptContainerDetail;
(function (AttemptContainerDetail) {
  /**
   * @internal
   */
  AttemptContainerDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttemptContainerDetail = exports.AttemptContainerDetail || (exports.AttemptContainerDetail = {})));
var AttemptDetail;
(function (AttemptDetail) {
  /**
   * @internal
   */
  AttemptDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AttemptDetail = exports.AttemptDetail || (exports.AttemptDetail = {})));
var CancelJobRequest;
(function (CancelJobRequest) {
  /**
   * @internal
   */
  CancelJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {})));
var CancelJobResponse;
(function (CancelJobResponse) {
  /**
   * @internal
   */
  CancelJobResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelJobResponse = exports.CancelJobResponse || (exports.CancelJobResponse = {})));
var ClientException;
(function (ClientException) {
  /**
   * @internal
   */
  ClientException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ClientException = exports.ClientException || (exports.ClientException = {})));
var ServerException;
(function (ServerException) {
  /**
   * @internal
   */
  ServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServerException = exports.ServerException || (exports.ServerException = {})));
var CRAllocationStrategy;
(function (CRAllocationStrategy) {
  CRAllocationStrategy["BEST_FIT"] = "BEST_FIT";
  CRAllocationStrategy["BEST_FIT_PROGRESSIVE"] = "BEST_FIT_PROGRESSIVE";
  CRAllocationStrategy["SPOT_CAPACITY_OPTIMIZED"] = "SPOT_CAPACITY_OPTIMIZED";
})((CRAllocationStrategy = exports.CRAllocationStrategy || (exports.CRAllocationStrategy = {})));
var Ec2Configuration;
(function (Ec2Configuration) {
  /**
   * @internal
   */
  Ec2Configuration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Ec2Configuration = exports.Ec2Configuration || (exports.Ec2Configuration = {})));
var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
  /**
   * @internal
   */
  LaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LaunchTemplateSpecification = exports.LaunchTemplateSpecification || (exports.LaunchTemplateSpecification = {})));
var CRType;
(function (CRType) {
  CRType["EC2"] = "EC2";
  CRType["FARGATE"] = "FARGATE";
  CRType["FARGATE_SPOT"] = "FARGATE_SPOT";
  CRType["SPOT"] = "SPOT";
})((CRType = exports.CRType || (exports.CRType = {})));
var ComputeResource;
(function (ComputeResource) {
  /**
   * @internal
   */
  ComputeResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeResource = exports.ComputeResource || (exports.ComputeResource = {})));
var CEState;
(function (CEState) {
  CEState["DISABLED"] = "DISABLED";
  CEState["ENABLED"] = "ENABLED";
})((CEState = exports.CEState || (exports.CEState = {})));
var CEType;
(function (CEType) {
  CEType["MANAGED"] = "MANAGED";
  CEType["UNMANAGED"] = "UNMANAGED";
})((CEType = exports.CEType || (exports.CEType = {})));
var CreateComputeEnvironmentRequest;
(function (CreateComputeEnvironmentRequest) {
  /**
   * @internal
   */
  CreateComputeEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateComputeEnvironmentRequest =
    exports.CreateComputeEnvironmentRequest || (exports.CreateComputeEnvironmentRequest = {}))
);
var CreateComputeEnvironmentResponse;
(function (CreateComputeEnvironmentResponse) {
  /**
   * @internal
   */
  CreateComputeEnvironmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateComputeEnvironmentResponse =
    exports.CreateComputeEnvironmentResponse || (exports.CreateComputeEnvironmentResponse = {}))
);
var ComputeEnvironmentOrder;
(function (ComputeEnvironmentOrder) {
  /**
   * @internal
   */
  ComputeEnvironmentOrder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeEnvironmentOrder = exports.ComputeEnvironmentOrder || (exports.ComputeEnvironmentOrder = {})));
var JQState;
(function (JQState) {
  JQState["DISABLED"] = "DISABLED";
  JQState["ENABLED"] = "ENABLED";
})((JQState = exports.JQState || (exports.JQState = {})));
var CreateJobQueueRequest;
(function (CreateJobQueueRequest) {
  /**
   * @internal
   */
  CreateJobQueueRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateJobQueueRequest = exports.CreateJobQueueRequest || (exports.CreateJobQueueRequest = {})));
var CreateJobQueueResponse;
(function (CreateJobQueueResponse) {
  /**
   * @internal
   */
  CreateJobQueueResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateJobQueueResponse = exports.CreateJobQueueResponse || (exports.CreateJobQueueResponse = {})));
var DeleteComputeEnvironmentRequest;
(function (DeleteComputeEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteComputeEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteComputeEnvironmentRequest =
    exports.DeleteComputeEnvironmentRequest || (exports.DeleteComputeEnvironmentRequest = {}))
);
var DeleteComputeEnvironmentResponse;
(function (DeleteComputeEnvironmentResponse) {
  /**
   * @internal
   */
  DeleteComputeEnvironmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteComputeEnvironmentResponse =
    exports.DeleteComputeEnvironmentResponse || (exports.DeleteComputeEnvironmentResponse = {}))
);
var DeleteJobQueueRequest;
(function (DeleteJobQueueRequest) {
  /**
   * @internal
   */
  DeleteJobQueueRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteJobQueueRequest = exports.DeleteJobQueueRequest || (exports.DeleteJobQueueRequest = {})));
var DeleteJobQueueResponse;
(function (DeleteJobQueueResponse) {
  /**
   * @internal
   */
  DeleteJobQueueResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteJobQueueResponse = exports.DeleteJobQueueResponse || (exports.DeleteJobQueueResponse = {})));
var DeregisterJobDefinitionRequest;
(function (DeregisterJobDefinitionRequest) {
  /**
   * @internal
   */
  DeregisterJobDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterJobDefinitionRequest =
    exports.DeregisterJobDefinitionRequest || (exports.DeregisterJobDefinitionRequest = {}))
);
var DeregisterJobDefinitionResponse;
(function (DeregisterJobDefinitionResponse) {
  /**
   * @internal
   */
  DeregisterJobDefinitionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterJobDefinitionResponse =
    exports.DeregisterJobDefinitionResponse || (exports.DeregisterJobDefinitionResponse = {}))
);
var DescribeComputeEnvironmentsRequest;
(function (DescribeComputeEnvironmentsRequest) {
  /**
   * @internal
   */
  DescribeComputeEnvironmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComputeEnvironmentsRequest =
    exports.DescribeComputeEnvironmentsRequest || (exports.DescribeComputeEnvironmentsRequest = {}))
);
var CEStatus;
(function (CEStatus) {
  CEStatus["CREATING"] = "CREATING";
  CEStatus["DELETED"] = "DELETED";
  CEStatus["DELETING"] = "DELETING";
  CEStatus["INVALID"] = "INVALID";
  CEStatus["UPDATING"] = "UPDATING";
  CEStatus["VALID"] = "VALID";
})((CEStatus = exports.CEStatus || (exports.CEStatus = {})));
var ComputeEnvironmentDetail;
(function (ComputeEnvironmentDetail) {
  /**
   * @internal
   */
  ComputeEnvironmentDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeEnvironmentDetail = exports.ComputeEnvironmentDetail || (exports.ComputeEnvironmentDetail = {})));
var DescribeComputeEnvironmentsResponse;
(function (DescribeComputeEnvironmentsResponse) {
  /**
   * @internal
   */
  DescribeComputeEnvironmentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComputeEnvironmentsResponse =
    exports.DescribeComputeEnvironmentsResponse || (exports.DescribeComputeEnvironmentsResponse = {}))
);
var DescribeJobDefinitionsRequest;
(function (DescribeJobDefinitionsRequest) {
  /**
   * @internal
   */
  DescribeJobDefinitionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeJobDefinitionsRequest =
    exports.DescribeJobDefinitionsRequest || (exports.DescribeJobDefinitionsRequest = {}))
);
var KeyValuePair;
(function (KeyValuePair) {
  /**
   * @internal
   */
  KeyValuePair.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyValuePair = exports.KeyValuePair || (exports.KeyValuePair = {})));
var FargatePlatformConfiguration;
(function (FargatePlatformConfiguration) {
  /**
   * @internal
   */
  FargatePlatformConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FargatePlatformConfiguration = exports.FargatePlatformConfiguration || (exports.FargatePlatformConfiguration = {}))
);
var DeviceCgroupPermission;
(function (DeviceCgroupPermission) {
  DeviceCgroupPermission["MKNOD"] = "MKNOD";
  DeviceCgroupPermission["READ"] = "READ";
  DeviceCgroupPermission["WRITE"] = "WRITE";
})((DeviceCgroupPermission = exports.DeviceCgroupPermission || (exports.DeviceCgroupPermission = {})));
var Device;
(function (Device) {
  /**
   * @internal
   */
  Device.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Device = exports.Device || (exports.Device = {})));
var Tmpfs;
(function (Tmpfs) {
  /**
   * @internal
   */
  Tmpfs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tmpfs = exports.Tmpfs || (exports.Tmpfs = {})));
var LinuxParameters;
(function (LinuxParameters) {
  /**
   * @internal
   */
  LinuxParameters.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LinuxParameters = exports.LinuxParameters || (exports.LinuxParameters = {})));
var LogDriver;
(function (LogDriver) {
  LogDriver["AWSLOGS"] = "awslogs";
  LogDriver["FLUENTD"] = "fluentd";
  LogDriver["GELF"] = "gelf";
  LogDriver["JOURNALD"] = "journald";
  LogDriver["JSON_FILE"] = "json-file";
  LogDriver["SPLUNK"] = "splunk";
  LogDriver["SYSLOG"] = "syslog";
})((LogDriver = exports.LogDriver || (exports.LogDriver = {})));
var Secret;
(function (Secret) {
  /**
   * @internal
   */
  Secret.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Secret = exports.Secret || (exports.Secret = {})));
var LogConfiguration;
(function (LogConfiguration) {
  /**
   * @internal
   */
  LogConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LogConfiguration = exports.LogConfiguration || (exports.LogConfiguration = {})));
var MountPoint;
(function (MountPoint) {
  /**
   * @internal
   */
  MountPoint.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MountPoint = exports.MountPoint || (exports.MountPoint = {})));
var NetworkConfiguration;
(function (NetworkConfiguration) {
  /**
   * @internal
   */
  NetworkConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {})));
var ResourceType;
(function (ResourceType) {
  ResourceType["GPU"] = "GPU";
  ResourceType["MEMORY"] = "MEMORY";
  ResourceType["VCPU"] = "VCPU";
})((ResourceType = exports.ResourceType || (exports.ResourceType = {})));
var ResourceRequirement;
(function (ResourceRequirement) {
  /**
   * @internal
   */
  ResourceRequirement.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceRequirement = exports.ResourceRequirement || (exports.ResourceRequirement = {})));
var Ulimit;
(function (Ulimit) {
  /**
   * @internal
   */
  Ulimit.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Ulimit = exports.Ulimit || (exports.Ulimit = {})));
var EFSAuthorizationConfigIAM;
(function (EFSAuthorizationConfigIAM) {
  EFSAuthorizationConfigIAM["DISABLED"] = "DISABLED";
  EFSAuthorizationConfigIAM["ENABLED"] = "ENABLED";
})((EFSAuthorizationConfigIAM = exports.EFSAuthorizationConfigIAM || (exports.EFSAuthorizationConfigIAM = {})));
var EFSAuthorizationConfig;
(function (EFSAuthorizationConfig) {
  /**
   * @internal
   */
  EFSAuthorizationConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EFSAuthorizationConfig = exports.EFSAuthorizationConfig || (exports.EFSAuthorizationConfig = {})));
var EFSTransitEncryption;
(function (EFSTransitEncryption) {
  EFSTransitEncryption["DISABLED"] = "DISABLED";
  EFSTransitEncryption["ENABLED"] = "ENABLED";
})((EFSTransitEncryption = exports.EFSTransitEncryption || (exports.EFSTransitEncryption = {})));
var EFSVolumeConfiguration;
(function (EFSVolumeConfiguration) {
  /**
   * @internal
   */
  EFSVolumeConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EFSVolumeConfiguration = exports.EFSVolumeConfiguration || (exports.EFSVolumeConfiguration = {})));
var Host;
(function (Host) {
  /**
   * @internal
   */
  Host.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Host = exports.Host || (exports.Host = {})));
var Volume;
(function (Volume) {
  /**
   * @internal
   */
  Volume.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Volume = exports.Volume || (exports.Volume = {})));
var ContainerProperties;
(function (ContainerProperties) {
  /**
   * @internal
   */
  ContainerProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContainerProperties = exports.ContainerProperties || (exports.ContainerProperties = {})));
var NodeRangeProperty;
(function (NodeRangeProperty) {
  /**
   * @internal
   */
  NodeRangeProperty.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodeRangeProperty = exports.NodeRangeProperty || (exports.NodeRangeProperty = {})));
var NodeProperties;
(function (NodeProperties) {
  /**
   * @internal
   */
  NodeProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodeProperties = exports.NodeProperties || (exports.NodeProperties = {})));
var PlatformCapability;
(function (PlatformCapability) {
  PlatformCapability["EC2"] = "EC2";
  PlatformCapability["FARGATE"] = "FARGATE";
})((PlatformCapability = exports.PlatformCapability || (exports.PlatformCapability = {})));
var RetryAction;
(function (RetryAction) {
  RetryAction["EXIT"] = "EXIT";
  RetryAction["RETRY"] = "RETRY";
})((RetryAction = exports.RetryAction || (exports.RetryAction = {})));
var EvaluateOnExit;
(function (EvaluateOnExit) {
  /**
   * @internal
   */
  EvaluateOnExit.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EvaluateOnExit = exports.EvaluateOnExit || (exports.EvaluateOnExit = {})));
var RetryStrategy;
(function (RetryStrategy) {
  /**
   * @internal
   */
  RetryStrategy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RetryStrategy = exports.RetryStrategy || (exports.RetryStrategy = {})));
var JobTimeout;
(function (JobTimeout) {
  /**
   * @internal
   */
  JobTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobTimeout = exports.JobTimeout || (exports.JobTimeout = {})));
var JobDefinition;
(function (JobDefinition) {
  /**
   * @internal
   */
  JobDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobDefinition = exports.JobDefinition || (exports.JobDefinition = {})));
var DescribeJobDefinitionsResponse;
(function (DescribeJobDefinitionsResponse) {
  /**
   * @internal
   */
  DescribeJobDefinitionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeJobDefinitionsResponse =
    exports.DescribeJobDefinitionsResponse || (exports.DescribeJobDefinitionsResponse = {}))
);
var DescribeJobQueuesRequest;
(function (DescribeJobQueuesRequest) {
  /**
   * @internal
   */
  DescribeJobQueuesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeJobQueuesRequest = exports.DescribeJobQueuesRequest || (exports.DescribeJobQueuesRequest = {})));
var JQStatus;
(function (JQStatus) {
  JQStatus["CREATING"] = "CREATING";
  JQStatus["DELETED"] = "DELETED";
  JQStatus["DELETING"] = "DELETING";
  JQStatus["INVALID"] = "INVALID";
  JQStatus["UPDATING"] = "UPDATING";
  JQStatus["VALID"] = "VALID";
})((JQStatus = exports.JQStatus || (exports.JQStatus = {})));
var JobQueueDetail;
(function (JobQueueDetail) {
  /**
   * @internal
   */
  JobQueueDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobQueueDetail = exports.JobQueueDetail || (exports.JobQueueDetail = {})));
var DescribeJobQueuesResponse;
(function (DescribeJobQueuesResponse) {
  /**
   * @internal
   */
  DescribeJobQueuesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeJobQueuesResponse = exports.DescribeJobQueuesResponse || (exports.DescribeJobQueuesResponse = {})));
var DescribeJobsRequest;
(function (DescribeJobsRequest) {
  /**
   * @internal
   */
  DescribeJobsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeJobsRequest = exports.DescribeJobsRequest || (exports.DescribeJobsRequest = {})));
var ContainerDetail;
(function (ContainerDetail) {
  /**
   * @internal
   */
  ContainerDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContainerDetail = exports.ContainerDetail || (exports.ContainerDetail = {})));
var JobDependency;
(function (JobDependency) {
  /**
   * @internal
   */
  JobDependency.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobDependency = exports.JobDependency || (exports.JobDependency = {})));
var NodeDetails;
(function (NodeDetails) {
  /**
   * @internal
   */
  NodeDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodeDetails = exports.NodeDetails || (exports.NodeDetails = {})));
var JobStatus;
(function (JobStatus) {
  JobStatus["FAILED"] = "FAILED";
  JobStatus["PENDING"] = "PENDING";
  JobStatus["RUNNABLE"] = "RUNNABLE";
  JobStatus["RUNNING"] = "RUNNING";
  JobStatus["STARTING"] = "STARTING";
  JobStatus["SUBMITTED"] = "SUBMITTED";
  JobStatus["SUCCEEDED"] = "SUCCEEDED";
})((JobStatus = exports.JobStatus || (exports.JobStatus = {})));
var JobDetail;
(function (JobDetail) {
  /**
   * @internal
   */
  JobDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobDetail = exports.JobDetail || (exports.JobDetail = {})));
var DescribeJobsResponse;
(function (DescribeJobsResponse) {
  /**
   * @internal
   */
  DescribeJobsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeJobsResponse = exports.DescribeJobsResponse || (exports.DescribeJobsResponse = {})));
var ListJobsRequest;
(function (ListJobsRequest) {
  /**
   * @internal
   */
  ListJobsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {})));
var ContainerSummary;
(function (ContainerSummary) {
  /**
   * @internal
   */
  ContainerSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContainerSummary = exports.ContainerSummary || (exports.ContainerSummary = {})));
var NodePropertiesSummary;
(function (NodePropertiesSummary) {
  /**
   * @internal
   */
  NodePropertiesSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodePropertiesSummary = exports.NodePropertiesSummary || (exports.NodePropertiesSummary = {})));
var JobSummary;
(function (JobSummary) {
  /**
   * @internal
   */
  JobSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobSummary = exports.JobSummary || (exports.JobSummary = {})));
var ListJobsResponse;
(function (ListJobsResponse) {
  /**
   * @internal
   */
  ListJobsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var JobDefinitionType;
(function (JobDefinitionType) {
  JobDefinitionType["Container"] = "container";
  JobDefinitionType["Multinode"] = "multinode";
})((JobDefinitionType = exports.JobDefinitionType || (exports.JobDefinitionType = {})));
var RegisterJobDefinitionRequest;
(function (RegisterJobDefinitionRequest) {
  /**
   * @internal
   */
  RegisterJobDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterJobDefinitionRequest = exports.RegisterJobDefinitionRequest || (exports.RegisterJobDefinitionRequest = {}))
);
var RegisterJobDefinitionResponse;
(function (RegisterJobDefinitionResponse) {
  /**
   * @internal
   */
  RegisterJobDefinitionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterJobDefinitionResponse =
    exports.RegisterJobDefinitionResponse || (exports.RegisterJobDefinitionResponse = {}))
);
var ContainerOverrides;
(function (ContainerOverrides) {
  /**
   * @internal
   */
  ContainerOverrides.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContainerOverrides = exports.ContainerOverrides || (exports.ContainerOverrides = {})));
var NodePropertyOverride;
(function (NodePropertyOverride) {
  /**
   * @internal
   */
  NodePropertyOverride.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodePropertyOverride = exports.NodePropertyOverride || (exports.NodePropertyOverride = {})));
var NodeOverrides;
(function (NodeOverrides) {
  /**
   * @internal
   */
  NodeOverrides.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NodeOverrides = exports.NodeOverrides || (exports.NodeOverrides = {})));
var SubmitJobRequest;
(function (SubmitJobRequest) {
  /**
   * @internal
   */
  SubmitJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SubmitJobRequest = exports.SubmitJobRequest || (exports.SubmitJobRequest = {})));
var SubmitJobResponse;
(function (SubmitJobResponse) {
  /**
   * @internal
   */
  SubmitJobResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SubmitJobResponse = exports.SubmitJobResponse || (exports.SubmitJobResponse = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var TerminateJobRequest;
(function (TerminateJobRequest) {
  /**
   * @internal
   */
  TerminateJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TerminateJobRequest = exports.TerminateJobRequest || (exports.TerminateJobRequest = {})));
var TerminateJobResponse;
(function (TerminateJobResponse) {
  /**
   * @internal
   */
  TerminateJobResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TerminateJobResponse = exports.TerminateJobResponse || (exports.TerminateJobResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var ComputeResourceUpdate;
(function (ComputeResourceUpdate) {
  /**
   * @internal
   */
  ComputeResourceUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeResourceUpdate = exports.ComputeResourceUpdate || (exports.ComputeResourceUpdate = {})));
var UpdateComputeEnvironmentRequest;
(function (UpdateComputeEnvironmentRequest) {
  /**
   * @internal
   */
  UpdateComputeEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateComputeEnvironmentRequest =
    exports.UpdateComputeEnvironmentRequest || (exports.UpdateComputeEnvironmentRequest = {}))
);
var UpdateComputeEnvironmentResponse;
(function (UpdateComputeEnvironmentResponse) {
  /**
   * @internal
   */
  UpdateComputeEnvironmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateComputeEnvironmentResponse =
    exports.UpdateComputeEnvironmentResponse || (exports.UpdateComputeEnvironmentResponse = {}))
);
var UpdateJobQueueRequest;
(function (UpdateJobQueueRequest) {
  /**
   * @internal
   */
  UpdateJobQueueRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateJobQueueRequest = exports.UpdateJobQueueRequest || (exports.UpdateJobQueueRequest = {})));
var UpdateJobQueueResponse;
(function (UpdateJobQueueResponse) {
  /**
   * @internal
   */
  UpdateJobQueueResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateJobQueueResponse = exports.UpdateJobQueueResponse || (exports.UpdateJobQueueResponse = {})));
//# sourceMappingURL=models_0.js.map
