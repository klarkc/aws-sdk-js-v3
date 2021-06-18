"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.RestoreBackupResponse =
  exports.RestoreBackupRequest =
  exports.ModifyClusterResponse =
  exports.ModifyClusterRequest =
  exports.ModifyBackupAttributesResponse =
  exports.ModifyBackupAttributesRequest =
  exports.ListTagsResponse =
  exports.ListTagsRequest =
  exports.InitializeClusterResponse =
  exports.InitializeClusterRequest =
  exports.DescribeClustersResponse =
  exports.DescribeClustersRequest =
  exports.DescribeBackupsResponse =
  exports.DescribeBackupsRequest =
  exports.DeleteHsmResponse =
  exports.DeleteHsmRequest =
  exports.DeleteClusterResponse =
  exports.DeleteClusterRequest =
  exports.DeleteBackupResponse =
  exports.DeleteBackupRequest =
  exports.CreateHsmResponse =
  exports.CreateHsmRequest =
  exports.CreateClusterResponse =
  exports.Cluster =
  exports.ClusterState =
  exports.Hsm =
  exports.HsmState =
  exports.Certificates =
  exports.CreateClusterRequest =
  exports.CopyBackupToRegionResponse =
  exports.DestinationBackup =
  exports.CopyBackupToRegionRequest =
  exports.CloudHsmTagException =
  exports.CloudHsmServiceException =
  exports.CloudHsmResourceNotFoundException =
  exports.CloudHsmInvalidRequestException =
  exports.CloudHsmInternalFailureException =
  exports.CloudHsmAccessDeniedException =
  exports.BackupRetentionPolicy =
  exports.BackupRetentionType =
  exports.BackupPolicy =
  exports.Backup =
  exports.Tag =
  exports.BackupState =
    void 0;
var BackupState;
(function (BackupState) {
  BackupState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  BackupState["DELETED"] = "DELETED";
  BackupState["PENDING_DELETION"] = "PENDING_DELETION";
  BackupState["READY"] = "READY";
})((BackupState = exports.BackupState || (exports.BackupState = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var Backup;
(function (Backup) {
  /**
   * @internal
   */
  Backup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Backup = exports.Backup || (exports.Backup = {})));
var BackupPolicy;
(function (BackupPolicy) {
  BackupPolicy["DEFAULT"] = "DEFAULT";
})((BackupPolicy = exports.BackupPolicy || (exports.BackupPolicy = {})));
var BackupRetentionType;
(function (BackupRetentionType) {
  BackupRetentionType["DAYS"] = "DAYS";
})((BackupRetentionType = exports.BackupRetentionType || (exports.BackupRetentionType = {})));
var BackupRetentionPolicy;
(function (BackupRetentionPolicy) {
  /**
   * @internal
   */
  BackupRetentionPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupRetentionPolicy = exports.BackupRetentionPolicy || (exports.BackupRetentionPolicy = {})));
var CloudHsmAccessDeniedException;
(function (CloudHsmAccessDeniedException) {
  /**
   * @internal
   */
  CloudHsmAccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudHsmAccessDeniedException =
    exports.CloudHsmAccessDeniedException || (exports.CloudHsmAccessDeniedException = {}))
);
var CloudHsmInternalFailureException;
(function (CloudHsmInternalFailureException) {
  /**
   * @internal
   */
  CloudHsmInternalFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudHsmInternalFailureException =
    exports.CloudHsmInternalFailureException || (exports.CloudHsmInternalFailureException = {}))
);
var CloudHsmInvalidRequestException;
(function (CloudHsmInvalidRequestException) {
  /**
   * @internal
   */
  CloudHsmInvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudHsmInvalidRequestException =
    exports.CloudHsmInvalidRequestException || (exports.CloudHsmInvalidRequestException = {}))
);
var CloudHsmResourceNotFoundException;
(function (CloudHsmResourceNotFoundException) {
  /**
   * @internal
   */
  CloudHsmResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudHsmResourceNotFoundException =
    exports.CloudHsmResourceNotFoundException || (exports.CloudHsmResourceNotFoundException = {}))
);
var CloudHsmServiceException;
(function (CloudHsmServiceException) {
  /**
   * @internal
   */
  CloudHsmServiceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloudHsmServiceException = exports.CloudHsmServiceException || (exports.CloudHsmServiceException = {})));
var CloudHsmTagException;
(function (CloudHsmTagException) {
  /**
   * @internal
   */
  CloudHsmTagException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloudHsmTagException = exports.CloudHsmTagException || (exports.CloudHsmTagException = {})));
var CopyBackupToRegionRequest;
(function (CopyBackupToRegionRequest) {
  /**
   * @internal
   */
  CopyBackupToRegionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyBackupToRegionRequest = exports.CopyBackupToRegionRequest || (exports.CopyBackupToRegionRequest = {})));
var DestinationBackup;
(function (DestinationBackup) {
  /**
   * @internal
   */
  DestinationBackup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DestinationBackup = exports.DestinationBackup || (exports.DestinationBackup = {})));
var CopyBackupToRegionResponse;
(function (CopyBackupToRegionResponse) {
  /**
   * @internal
   */
  CopyBackupToRegionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyBackupToRegionResponse = exports.CopyBackupToRegionResponse || (exports.CopyBackupToRegionResponse = {})));
var CreateClusterRequest;
(function (CreateClusterRequest) {
  /**
   * @internal
   */
  CreateClusterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {})));
var Certificates;
(function (Certificates) {
  /**
   * @internal
   */
  Certificates.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Certificates = exports.Certificates || (exports.Certificates = {})));
var HsmState;
(function (HsmState) {
  HsmState["ACTIVE"] = "ACTIVE";
  HsmState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  HsmState["DEGRADED"] = "DEGRADED";
  HsmState["DELETED"] = "DELETED";
  HsmState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
})((HsmState = exports.HsmState || (exports.HsmState = {})));
var Hsm;
(function (Hsm) {
  /**
   * @internal
   */
  Hsm.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Hsm = exports.Hsm || (exports.Hsm = {})));
var ClusterState;
(function (ClusterState) {
  ClusterState["ACTIVE"] = "ACTIVE";
  ClusterState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  ClusterState["DEGRADED"] = "DEGRADED";
  ClusterState["DELETED"] = "DELETED";
  ClusterState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  ClusterState["INITIALIZED"] = "INITIALIZED";
  ClusterState["INITIALIZE_IN_PROGRESS"] = "INITIALIZE_IN_PROGRESS";
  ClusterState["UNINITIALIZED"] = "UNINITIALIZED";
  ClusterState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})((ClusterState = exports.ClusterState || (exports.ClusterState = {})));
var Cluster;
(function (Cluster) {
  /**
   * @internal
   */
  Cluster.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Cluster = exports.Cluster || (exports.Cluster = {})));
var CreateClusterResponse;
(function (CreateClusterResponse) {
  /**
   * @internal
   */
  CreateClusterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {})));
var CreateHsmRequest;
(function (CreateHsmRequest) {
  /**
   * @internal
   */
  CreateHsmRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateHsmRequest = exports.CreateHsmRequest || (exports.CreateHsmRequest = {})));
var CreateHsmResponse;
(function (CreateHsmResponse) {
  /**
   * @internal
   */
  CreateHsmResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateHsmResponse = exports.CreateHsmResponse || (exports.CreateHsmResponse = {})));
var DeleteBackupRequest;
(function (DeleteBackupRequest) {
  /**
   * @internal
   */
  DeleteBackupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupRequest = exports.DeleteBackupRequest || (exports.DeleteBackupRequest = {})));
var DeleteBackupResponse;
(function (DeleteBackupResponse) {
  /**
   * @internal
   */
  DeleteBackupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupResponse = exports.DeleteBackupResponse || (exports.DeleteBackupResponse = {})));
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
  /**
   * @internal
   */
  DeleteClusterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {})));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
  /**
   * @internal
   */
  DeleteClusterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {})));
var DeleteHsmRequest;
(function (DeleteHsmRequest) {
  /**
   * @internal
   */
  DeleteHsmRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteHsmRequest = exports.DeleteHsmRequest || (exports.DeleteHsmRequest = {})));
var DeleteHsmResponse;
(function (DeleteHsmResponse) {
  /**
   * @internal
   */
  DeleteHsmResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteHsmResponse = exports.DeleteHsmResponse || (exports.DeleteHsmResponse = {})));
var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
  /**
   * @internal
   */
  DescribeBackupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupsRequest = exports.DescribeBackupsRequest || (exports.DescribeBackupsRequest = {})));
var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
  /**
   * @internal
   */
  DescribeBackupsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupsResponse = exports.DescribeBackupsResponse || (exports.DescribeBackupsResponse = {})));
var DescribeClustersRequest;
(function (DescribeClustersRequest) {
  /**
   * @internal
   */
  DescribeClustersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeClustersRequest = exports.DescribeClustersRequest || (exports.DescribeClustersRequest = {})));
var DescribeClustersResponse;
(function (DescribeClustersResponse) {
  /**
   * @internal
   */
  DescribeClustersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeClustersResponse = exports.DescribeClustersResponse || (exports.DescribeClustersResponse = {})));
var InitializeClusterRequest;
(function (InitializeClusterRequest) {
  /**
   * @internal
   */
  InitializeClusterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InitializeClusterRequest = exports.InitializeClusterRequest || (exports.InitializeClusterRequest = {})));
var InitializeClusterResponse;
(function (InitializeClusterResponse) {
  /**
   * @internal
   */
  InitializeClusterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InitializeClusterResponse = exports.InitializeClusterResponse || (exports.InitializeClusterResponse = {})));
var ListTagsRequest;
(function (ListTagsRequest) {
  /**
   * @internal
   */
  ListTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {})));
var ListTagsResponse;
(function (ListTagsResponse) {
  /**
   * @internal
   */
  ListTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {})));
var ModifyBackupAttributesRequest;
(function (ModifyBackupAttributesRequest) {
  /**
   * @internal
   */
  ModifyBackupAttributesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ModifyBackupAttributesRequest =
    exports.ModifyBackupAttributesRequest || (exports.ModifyBackupAttributesRequest = {}))
);
var ModifyBackupAttributesResponse;
(function (ModifyBackupAttributesResponse) {
  /**
   * @internal
   */
  ModifyBackupAttributesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ModifyBackupAttributesResponse =
    exports.ModifyBackupAttributesResponse || (exports.ModifyBackupAttributesResponse = {}))
);
var ModifyClusterRequest;
(function (ModifyClusterRequest) {
  /**
   * @internal
   */
  ModifyClusterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ModifyClusterRequest = exports.ModifyClusterRequest || (exports.ModifyClusterRequest = {})));
var ModifyClusterResponse;
(function (ModifyClusterResponse) {
  /**
   * @internal
   */
  ModifyClusterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ModifyClusterResponse = exports.ModifyClusterResponse || (exports.ModifyClusterResponse = {})));
var RestoreBackupRequest;
(function (RestoreBackupRequest) {
  /**
   * @internal
   */
  RestoreBackupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestoreBackupRequest = exports.RestoreBackupRequest || (exports.RestoreBackupRequest = {})));
var RestoreBackupResponse;
(function (RestoreBackupResponse) {
  /**
   * @internal
   */
  RestoreBackupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestoreBackupResponse = exports.RestoreBackupResponse || (exports.RestoreBackupResponse = {})));
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
//# sourceMappingURL=models_0.js.map
