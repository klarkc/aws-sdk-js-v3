import { __assign } from "tslib";
export var BackupState;
(function (BackupState) {
  BackupState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  BackupState["DELETED"] = "DELETED";
  BackupState["PENDING_DELETION"] = "PENDING_DELETION";
  BackupState["READY"] = "READY";
})(BackupState || (BackupState = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var Backup;
(function (Backup) {
  /**
   * @internal
   */
  Backup.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Backup || (Backup = {}));
export var BackupPolicy;
(function (BackupPolicy) {
  BackupPolicy["DEFAULT"] = "DEFAULT";
})(BackupPolicy || (BackupPolicy = {}));
export var BackupRetentionType;
(function (BackupRetentionType) {
  BackupRetentionType["DAYS"] = "DAYS";
})(BackupRetentionType || (BackupRetentionType = {}));
export var BackupRetentionPolicy;
(function (BackupRetentionPolicy) {
  /**
   * @internal
   */
  BackupRetentionPolicy.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupRetentionPolicy || (BackupRetentionPolicy = {}));
export var CloudHsmAccessDeniedException;
(function (CloudHsmAccessDeniedException) {
  /**
   * @internal
   */
  CloudHsmAccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmAccessDeniedException || (CloudHsmAccessDeniedException = {}));
export var CloudHsmInternalFailureException;
(function (CloudHsmInternalFailureException) {
  /**
   * @internal
   */
  CloudHsmInternalFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmInternalFailureException || (CloudHsmInternalFailureException = {}));
export var CloudHsmInvalidRequestException;
(function (CloudHsmInvalidRequestException) {
  /**
   * @internal
   */
  CloudHsmInvalidRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmInvalidRequestException || (CloudHsmInvalidRequestException = {}));
export var CloudHsmResourceNotFoundException;
(function (CloudHsmResourceNotFoundException) {
  /**
   * @internal
   */
  CloudHsmResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmResourceNotFoundException || (CloudHsmResourceNotFoundException = {}));
export var CloudHsmServiceException;
(function (CloudHsmServiceException) {
  /**
   * @internal
   */
  CloudHsmServiceException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmServiceException || (CloudHsmServiceException = {}));
export var CloudHsmTagException;
(function (CloudHsmTagException) {
  /**
   * @internal
   */
  CloudHsmTagException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudHsmTagException || (CloudHsmTagException = {}));
export var CopyBackupToRegionRequest;
(function (CopyBackupToRegionRequest) {
  /**
   * @internal
   */
  CopyBackupToRegionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyBackupToRegionRequest || (CopyBackupToRegionRequest = {}));
export var DestinationBackup;
(function (DestinationBackup) {
  /**
   * @internal
   */
  DestinationBackup.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DestinationBackup || (DestinationBackup = {}));
export var CopyBackupToRegionResponse;
(function (CopyBackupToRegionResponse) {
  /**
   * @internal
   */
  CopyBackupToRegionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyBackupToRegionResponse || (CopyBackupToRegionResponse = {}));
export var CreateClusterRequest;
(function (CreateClusterRequest) {
  /**
   * @internal
   */
  CreateClusterRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateClusterRequest || (CreateClusterRequest = {}));
export var Certificates;
(function (Certificates) {
  /**
   * @internal
   */
  Certificates.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Certificates || (Certificates = {}));
export var HsmState;
(function (HsmState) {
  HsmState["ACTIVE"] = "ACTIVE";
  HsmState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  HsmState["DEGRADED"] = "DEGRADED";
  HsmState["DELETED"] = "DELETED";
  HsmState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
})(HsmState || (HsmState = {}));
export var Hsm;
(function (Hsm) {
  /**
   * @internal
   */
  Hsm.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Hsm || (Hsm = {}));
export var ClusterState;
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
})(ClusterState || (ClusterState = {}));
export var Cluster;
(function (Cluster) {
  /**
   * @internal
   */
  Cluster.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Cluster || (Cluster = {}));
export var CreateClusterResponse;
(function (CreateClusterResponse) {
  /**
   * @internal
   */
  CreateClusterResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateClusterResponse || (CreateClusterResponse = {}));
export var CreateHsmRequest;
(function (CreateHsmRequest) {
  /**
   * @internal
   */
  CreateHsmRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateHsmRequest || (CreateHsmRequest = {}));
export var CreateHsmResponse;
(function (CreateHsmResponse) {
  /**
   * @internal
   */
  CreateHsmResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateHsmResponse || (CreateHsmResponse = {}));
export var DeleteBackupRequest;
(function (DeleteBackupRequest) {
  /**
   * @internal
   */
  DeleteBackupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupRequest || (DeleteBackupRequest = {}));
export var DeleteBackupResponse;
(function (DeleteBackupResponse) {
  /**
   * @internal
   */
  DeleteBackupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupResponse || (DeleteBackupResponse = {}));
export var DeleteClusterRequest;
(function (DeleteClusterRequest) {
  /**
   * @internal
   */
  DeleteClusterRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteClusterRequest || (DeleteClusterRequest = {}));
export var DeleteClusterResponse;
(function (DeleteClusterResponse) {
  /**
   * @internal
   */
  DeleteClusterResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteClusterResponse || (DeleteClusterResponse = {}));
export var DeleteHsmRequest;
(function (DeleteHsmRequest) {
  /**
   * @internal
   */
  DeleteHsmRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteHsmRequest || (DeleteHsmRequest = {}));
export var DeleteHsmResponse;
(function (DeleteHsmResponse) {
  /**
   * @internal
   */
  DeleteHsmResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteHsmResponse || (DeleteHsmResponse = {}));
export var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
  /**
   * @internal
   */
  DescribeBackupsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupsRequest || (DescribeBackupsRequest = {}));
export var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
  /**
   * @internal
   */
  DescribeBackupsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupsResponse || (DescribeBackupsResponse = {}));
export var DescribeClustersRequest;
(function (DescribeClustersRequest) {
  /**
   * @internal
   */
  DescribeClustersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeClustersRequest || (DescribeClustersRequest = {}));
export var DescribeClustersResponse;
(function (DescribeClustersResponse) {
  /**
   * @internal
   */
  DescribeClustersResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeClustersResponse || (DescribeClustersResponse = {}));
export var InitializeClusterRequest;
(function (InitializeClusterRequest) {
  /**
   * @internal
   */
  InitializeClusterRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InitializeClusterRequest || (InitializeClusterRequest = {}));
export var InitializeClusterResponse;
(function (InitializeClusterResponse) {
  /**
   * @internal
   */
  InitializeClusterResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InitializeClusterResponse || (InitializeClusterResponse = {}));
export var ListTagsRequest;
(function (ListTagsRequest) {
  /**
   * @internal
   */
  ListTagsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsRequest || (ListTagsRequest = {}));
export var ListTagsResponse;
(function (ListTagsResponse) {
  /**
   * @internal
   */
  ListTagsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsResponse || (ListTagsResponse = {}));
export var ModifyBackupAttributesRequest;
(function (ModifyBackupAttributesRequest) {
  /**
   * @internal
   */
  ModifyBackupAttributesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ModifyBackupAttributesRequest || (ModifyBackupAttributesRequest = {}));
export var ModifyBackupAttributesResponse;
(function (ModifyBackupAttributesResponse) {
  /**
   * @internal
   */
  ModifyBackupAttributesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ModifyBackupAttributesResponse || (ModifyBackupAttributesResponse = {}));
export var ModifyClusterRequest;
(function (ModifyClusterRequest) {
  /**
   * @internal
   */
  ModifyClusterRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ModifyClusterRequest || (ModifyClusterRequest = {}));
export var ModifyClusterResponse;
(function (ModifyClusterResponse) {
  /**
   * @internal
   */
  ModifyClusterResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ModifyClusterResponse || (ModifyClusterResponse = {}));
export var RestoreBackupRequest;
(function (RestoreBackupRequest) {
  /**
   * @internal
   */
  RestoreBackupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RestoreBackupRequest || (RestoreBackupRequest = {}));
export var RestoreBackupResponse;
(function (RestoreBackupResponse) {
  /**
   * @internal
   */
  RestoreBackupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RestoreBackupResponse || (RestoreBackupResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map
