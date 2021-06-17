"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeClustersRequest = exports.SubnetGroupInUseFault = exports.DeleteSubnetGroupResponse = exports.DeleteSubnetGroupRequest = exports.DeleteParameterGroupResponse = exports.DeleteParameterGroupRequest = exports.DeleteClusterResponse = exports.DeleteClusterRequest = exports.NodeNotFoundFault = exports.DecreaseReplicationFactorResponse = exports.DecreaseReplicationFactorRequest = exports.ClusterNotFoundFault = exports.SubnetQuotaExceededFault = exports.SubnetGroupQuotaExceededFault = exports.SubnetGroupAlreadyExistsFault = exports.InvalidSubnet = exports.CreateSubnetGroupResponse = exports.SubnetGroup = exports.Subnet = exports.CreateSubnetGroupRequest = exports.ParameterGroupQuotaExceededFault = exports.ParameterGroupAlreadyExistsFault = exports.CreateParameterGroupResponse = exports.ParameterGroup = exports.CreateParameterGroupRequest = exports.TagQuotaPerResourceExceeded = exports.SubnetGroupNotFoundFault = exports.ServiceLinkedRoleNotFoundFault = exports.ParameterGroupNotFoundFault = exports.NodeQuotaForCustomerExceededFault = exports.NodeQuotaForClusterExceededFault = exports.InvalidVPCNetworkStateFault = exports.InvalidParameterValueException = exports.InvalidParameterGroupStateFault = exports.InvalidParameterCombinationException = exports.InvalidClusterStateFault = exports.InsufficientClusterCapacityFault = exports.CreateClusterResponse = exports.Cluster = exports.SSEDescription = exports.SecurityGroupMembership = exports.ParameterGroupStatus = exports.NotificationConfiguration = exports.Node = exports.Endpoint = exports.CreateClusterRequest = exports.Tag = exports.SSESpecification = exports.ClusterQuotaForCustomerExceededFault = exports.ClusterAlreadyExistsFault = void 0;
exports.UpdateSubnetGroupResponse = exports.UpdateSubnetGroupRequest = exports.SubnetInUse = exports.UpdateParameterGroupResponse = exports.UpdateParameterGroupRequest = exports.ParameterNameValue = exports.UpdateClusterResponse = exports.UpdateClusterRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagNotFoundFault = exports.TagResourceResponse = exports.TagResourceRequest = exports.RebootNodeResponse = exports.RebootNodeRequest = exports.ListTagsResponse = exports.ListTagsRequest = exports.InvalidARNFault = exports.IncreaseReplicationFactorResponse = exports.IncreaseReplicationFactorRequest = exports.DescribeSubnetGroupsResponse = exports.DescribeSubnetGroupsRequest = exports.DescribeParametersResponse = exports.DescribeParametersRequest = exports.DescribeParameterGroupsResponse = exports.DescribeParameterGroupsRequest = exports.DescribeEventsResponse = exports.Event = exports.DescribeEventsRequest = exports.DescribeDefaultParametersResponse = exports.Parameter = exports.NodeTypeSpecificValue = exports.DescribeDefaultParametersRequest = exports.DescribeClustersResponse = void 0;
var ClusterAlreadyExistsFault;
(function (ClusterAlreadyExistsFault) {
    /**
     * @internal
     */
    ClusterAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterAlreadyExistsFault = exports.ClusterAlreadyExistsFault || (exports.ClusterAlreadyExistsFault = {}));
var ClusterQuotaForCustomerExceededFault;
(function (ClusterQuotaForCustomerExceededFault) {
    /**
     * @internal
     */
    ClusterQuotaForCustomerExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterQuotaForCustomerExceededFault = exports.ClusterQuotaForCustomerExceededFault || (exports.ClusterQuotaForCustomerExceededFault = {}));
var SSESpecification;
(function (SSESpecification) {
    /**
     * @internal
     */
    SSESpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSESpecification = exports.SSESpecification || (exports.SSESpecification = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var Node;
(function (Node) {
    /**
     * @internal
     */
    Node.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Node = exports.Node || (exports.Node = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var ParameterGroupStatus;
(function (ParameterGroupStatus) {
    /**
     * @internal
     */
    ParameterGroupStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterGroupStatus = exports.ParameterGroupStatus || (exports.ParameterGroupStatus = {}));
var SecurityGroupMembership;
(function (SecurityGroupMembership) {
    /**
     * @internal
     */
    SecurityGroupMembership.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupMembership = exports.SecurityGroupMembership || (exports.SecurityGroupMembership = {}));
var SSEDescription;
(function (SSEDescription) {
    /**
     * @internal
     */
    SSEDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSEDescription = exports.SSEDescription || (exports.SSEDescription = {}));
var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var InsufficientClusterCapacityFault;
(function (InsufficientClusterCapacityFault) {
    /**
     * @internal
     */
    InsufficientClusterCapacityFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientClusterCapacityFault = exports.InsufficientClusterCapacityFault || (exports.InsufficientClusterCapacityFault = {}));
var InvalidClusterStateFault;
(function (InvalidClusterStateFault) {
    /**
     * @internal
     */
    InvalidClusterStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClusterStateFault = exports.InvalidClusterStateFault || (exports.InvalidClusterStateFault = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidParameterGroupStateFault;
(function (InvalidParameterGroupStateFault) {
    /**
     * @internal
     */
    InvalidParameterGroupStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterGroupStateFault = exports.InvalidParameterGroupStateFault || (exports.InvalidParameterGroupStateFault = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var InvalidVPCNetworkStateFault;
(function (InvalidVPCNetworkStateFault) {
    /**
     * @internal
     */
    InvalidVPCNetworkStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVPCNetworkStateFault = exports.InvalidVPCNetworkStateFault || (exports.InvalidVPCNetworkStateFault = {}));
var NodeQuotaForClusterExceededFault;
(function (NodeQuotaForClusterExceededFault) {
    /**
     * @internal
     */
    NodeQuotaForClusterExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeQuotaForClusterExceededFault = exports.NodeQuotaForClusterExceededFault || (exports.NodeQuotaForClusterExceededFault = {}));
var NodeQuotaForCustomerExceededFault;
(function (NodeQuotaForCustomerExceededFault) {
    /**
     * @internal
     */
    NodeQuotaForCustomerExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeQuotaForCustomerExceededFault = exports.NodeQuotaForCustomerExceededFault || (exports.NodeQuotaForCustomerExceededFault = {}));
var ParameterGroupNotFoundFault;
(function (ParameterGroupNotFoundFault) {
    /**
     * @internal
     */
    ParameterGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterGroupNotFoundFault = exports.ParameterGroupNotFoundFault || (exports.ParameterGroupNotFoundFault = {}));
var ServiceLinkedRoleNotFoundFault;
(function (ServiceLinkedRoleNotFoundFault) {
    /**
     * @internal
     */
    ServiceLinkedRoleNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLinkedRoleNotFoundFault = exports.ServiceLinkedRoleNotFoundFault || (exports.ServiceLinkedRoleNotFoundFault = {}));
var SubnetGroupNotFoundFault;
(function (SubnetGroupNotFoundFault) {
    /**
     * @internal
     */
    SubnetGroupNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetGroupNotFoundFault = exports.SubnetGroupNotFoundFault || (exports.SubnetGroupNotFoundFault = {}));
var TagQuotaPerResourceExceeded;
(function (TagQuotaPerResourceExceeded) {
    /**
     * @internal
     */
    TagQuotaPerResourceExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagQuotaPerResourceExceeded = exports.TagQuotaPerResourceExceeded || (exports.TagQuotaPerResourceExceeded = {}));
var CreateParameterGroupRequest;
(function (CreateParameterGroupRequest) {
    /**
     * @internal
     */
    CreateParameterGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParameterGroupRequest = exports.CreateParameterGroupRequest || (exports.CreateParameterGroupRequest = {}));
var ParameterGroup;
(function (ParameterGroup) {
    /**
     * @internal
     */
    ParameterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterGroup = exports.ParameterGroup || (exports.ParameterGroup = {}));
var CreateParameterGroupResponse;
(function (CreateParameterGroupResponse) {
    /**
     * @internal
     */
    CreateParameterGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateParameterGroupResponse = exports.CreateParameterGroupResponse || (exports.CreateParameterGroupResponse = {}));
var ParameterGroupAlreadyExistsFault;
(function (ParameterGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    ParameterGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterGroupAlreadyExistsFault = exports.ParameterGroupAlreadyExistsFault || (exports.ParameterGroupAlreadyExistsFault = {}));
var ParameterGroupQuotaExceededFault;
(function (ParameterGroupQuotaExceededFault) {
    /**
     * @internal
     */
    ParameterGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterGroupQuotaExceededFault = exports.ParameterGroupQuotaExceededFault || (exports.ParameterGroupQuotaExceededFault = {}));
var CreateSubnetGroupRequest;
(function (CreateSubnetGroupRequest) {
    /**
     * @internal
     */
    CreateSubnetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubnetGroupRequest = exports.CreateSubnetGroupRequest || (exports.CreateSubnetGroupRequest = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var SubnetGroup;
(function (SubnetGroup) {
    /**
     * @internal
     */
    SubnetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetGroup = exports.SubnetGroup || (exports.SubnetGroup = {}));
var CreateSubnetGroupResponse;
(function (CreateSubnetGroupResponse) {
    /**
     * @internal
     */
    CreateSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubnetGroupResponse = exports.CreateSubnetGroupResponse || (exports.CreateSubnetGroupResponse = {}));
var InvalidSubnet;
(function (InvalidSubnet) {
    /**
     * @internal
     */
    InvalidSubnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnet = exports.InvalidSubnet || (exports.InvalidSubnet = {}));
var SubnetGroupAlreadyExistsFault;
(function (SubnetGroupAlreadyExistsFault) {
    /**
     * @internal
     */
    SubnetGroupAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetGroupAlreadyExistsFault = exports.SubnetGroupAlreadyExistsFault || (exports.SubnetGroupAlreadyExistsFault = {}));
var SubnetGroupQuotaExceededFault;
(function (SubnetGroupQuotaExceededFault) {
    /**
     * @internal
     */
    SubnetGroupQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetGroupQuotaExceededFault = exports.SubnetGroupQuotaExceededFault || (exports.SubnetGroupQuotaExceededFault = {}));
var SubnetQuotaExceededFault;
(function (SubnetQuotaExceededFault) {
    /**
     * @internal
     */
    SubnetQuotaExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetQuotaExceededFault = exports.SubnetQuotaExceededFault || (exports.SubnetQuotaExceededFault = {}));
var ClusterNotFoundFault;
(function (ClusterNotFoundFault) {
    /**
     * @internal
     */
    ClusterNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterNotFoundFault = exports.ClusterNotFoundFault || (exports.ClusterNotFoundFault = {}));
var DecreaseReplicationFactorRequest;
(function (DecreaseReplicationFactorRequest) {
    /**
     * @internal
     */
    DecreaseReplicationFactorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseReplicationFactorRequest = exports.DecreaseReplicationFactorRequest || (exports.DecreaseReplicationFactorRequest = {}));
var DecreaseReplicationFactorResponse;
(function (DecreaseReplicationFactorResponse) {
    /**
     * @internal
     */
    DecreaseReplicationFactorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecreaseReplicationFactorResponse = exports.DecreaseReplicationFactorResponse || (exports.DecreaseReplicationFactorResponse = {}));
var NodeNotFoundFault;
(function (NodeNotFoundFault) {
    /**
     * @internal
     */
    NodeNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeNotFoundFault = exports.NodeNotFoundFault || (exports.NodeNotFoundFault = {}));
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
var DeleteParameterGroupRequest;
(function (DeleteParameterGroupRequest) {
    /**
     * @internal
     */
    DeleteParameterGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParameterGroupRequest = exports.DeleteParameterGroupRequest || (exports.DeleteParameterGroupRequest = {}));
var DeleteParameterGroupResponse;
(function (DeleteParameterGroupResponse) {
    /**
     * @internal
     */
    DeleteParameterGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParameterGroupResponse = exports.DeleteParameterGroupResponse || (exports.DeleteParameterGroupResponse = {}));
var DeleteSubnetGroupRequest;
(function (DeleteSubnetGroupRequest) {
    /**
     * @internal
     */
    DeleteSubnetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubnetGroupRequest = exports.DeleteSubnetGroupRequest || (exports.DeleteSubnetGroupRequest = {}));
var DeleteSubnetGroupResponse;
(function (DeleteSubnetGroupResponse) {
    /**
     * @internal
     */
    DeleteSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubnetGroupResponse = exports.DeleteSubnetGroupResponse || (exports.DeleteSubnetGroupResponse = {}));
var SubnetGroupInUseFault;
(function (SubnetGroupInUseFault) {
    /**
     * @internal
     */
    SubnetGroupInUseFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetGroupInUseFault = exports.SubnetGroupInUseFault || (exports.SubnetGroupInUseFault = {}));
var DescribeClustersRequest;
(function (DescribeClustersRequest) {
    /**
     * @internal
     */
    DescribeClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClustersRequest = exports.DescribeClustersRequest || (exports.DescribeClustersRequest = {}));
var DescribeClustersResponse;
(function (DescribeClustersResponse) {
    /**
     * @internal
     */
    DescribeClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClustersResponse = exports.DescribeClustersResponse || (exports.DescribeClustersResponse = {}));
var DescribeDefaultParametersRequest;
(function (DescribeDefaultParametersRequest) {
    /**
     * @internal
     */
    DescribeDefaultParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultParametersRequest = exports.DescribeDefaultParametersRequest || (exports.DescribeDefaultParametersRequest = {}));
var NodeTypeSpecificValue;
(function (NodeTypeSpecificValue) {
    /**
     * @internal
     */
    NodeTypeSpecificValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeTypeSpecificValue = exports.NodeTypeSpecificValue || (exports.NodeTypeSpecificValue = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var DescribeDefaultParametersResponse;
(function (DescribeDefaultParametersResponse) {
    /**
     * @internal
     */
    DescribeDefaultParametersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDefaultParametersResponse = exports.DescribeDefaultParametersResponse || (exports.DescribeDefaultParametersResponse = {}));
var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    /**
     * @internal
     */
    DescribeEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsRequest = exports.DescribeEventsRequest || (exports.DescribeEventsRequest = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var DescribeParameterGroupsRequest;
(function (DescribeParameterGroupsRequest) {
    /**
     * @internal
     */
    DescribeParameterGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParameterGroupsRequest = exports.DescribeParameterGroupsRequest || (exports.DescribeParameterGroupsRequest = {}));
var DescribeParameterGroupsResponse;
(function (DescribeParameterGroupsResponse) {
    /**
     * @internal
     */
    DescribeParameterGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParameterGroupsResponse = exports.DescribeParameterGroupsResponse || (exports.DescribeParameterGroupsResponse = {}));
var DescribeParametersRequest;
(function (DescribeParametersRequest) {
    /**
     * @internal
     */
    DescribeParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParametersRequest = exports.DescribeParametersRequest || (exports.DescribeParametersRequest = {}));
var DescribeParametersResponse;
(function (DescribeParametersResponse) {
    /**
     * @internal
     */
    DescribeParametersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParametersResponse = exports.DescribeParametersResponse || (exports.DescribeParametersResponse = {}));
var DescribeSubnetGroupsRequest;
(function (DescribeSubnetGroupsRequest) {
    /**
     * @internal
     */
    DescribeSubnetGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubnetGroupsRequest = exports.DescribeSubnetGroupsRequest || (exports.DescribeSubnetGroupsRequest = {}));
var DescribeSubnetGroupsResponse;
(function (DescribeSubnetGroupsResponse) {
    /**
     * @internal
     */
    DescribeSubnetGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubnetGroupsResponse = exports.DescribeSubnetGroupsResponse || (exports.DescribeSubnetGroupsResponse = {}));
var IncreaseReplicationFactorRequest;
(function (IncreaseReplicationFactorRequest) {
    /**
     * @internal
     */
    IncreaseReplicationFactorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseReplicationFactorRequest = exports.IncreaseReplicationFactorRequest || (exports.IncreaseReplicationFactorRequest = {}));
var IncreaseReplicationFactorResponse;
(function (IncreaseReplicationFactorResponse) {
    /**
     * @internal
     */
    IncreaseReplicationFactorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncreaseReplicationFactorResponse = exports.IncreaseReplicationFactorResponse || (exports.IncreaseReplicationFactorResponse = {}));
var InvalidARNFault;
(function (InvalidARNFault) {
    /**
     * @internal
     */
    InvalidARNFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidARNFault = exports.InvalidARNFault || (exports.InvalidARNFault = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var RebootNodeRequest;
(function (RebootNodeRequest) {
    /**
     * @internal
     */
    RebootNodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootNodeRequest = exports.RebootNodeRequest || (exports.RebootNodeRequest = {}));
var RebootNodeResponse;
(function (RebootNodeResponse) {
    /**
     * @internal
     */
    RebootNodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootNodeResponse = exports.RebootNodeResponse || (exports.RebootNodeResponse = {}));
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
var TagNotFoundFault;
(function (TagNotFoundFault) {
    /**
     * @internal
     */
    TagNotFoundFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagNotFoundFault = exports.TagNotFoundFault || (exports.TagNotFoundFault = {}));
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
var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    /**
     * @internal
     */
    UpdateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterRequest = exports.UpdateClusterRequest || (exports.UpdateClusterRequest = {}));
var UpdateClusterResponse;
(function (UpdateClusterResponse) {
    /**
     * @internal
     */
    UpdateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterResponse = exports.UpdateClusterResponse || (exports.UpdateClusterResponse = {}));
var ParameterNameValue;
(function (ParameterNameValue) {
    /**
     * @internal
     */
    ParameterNameValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterNameValue = exports.ParameterNameValue || (exports.ParameterNameValue = {}));
var UpdateParameterGroupRequest;
(function (UpdateParameterGroupRequest) {
    /**
     * @internal
     */
    UpdateParameterGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateParameterGroupRequest = exports.UpdateParameterGroupRequest || (exports.UpdateParameterGroupRequest = {}));
var UpdateParameterGroupResponse;
(function (UpdateParameterGroupResponse) {
    /**
     * @internal
     */
    UpdateParameterGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateParameterGroupResponse = exports.UpdateParameterGroupResponse || (exports.UpdateParameterGroupResponse = {}));
var SubnetInUse;
(function (SubnetInUse) {
    /**
     * @internal
     */
    SubnetInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetInUse = exports.SubnetInUse || (exports.SubnetInUse = {}));
var UpdateSubnetGroupRequest;
(function (UpdateSubnetGroupRequest) {
    /**
     * @internal
     */
    UpdateSubnetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubnetGroupRequest = exports.UpdateSubnetGroupRequest || (exports.UpdateSubnetGroupRequest = {}));
var UpdateSubnetGroupResponse;
(function (UpdateSubnetGroupResponse) {
    /**
     * @internal
     */
    UpdateSubnetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubnetGroupResponse = exports.UpdateSubnetGroupResponse || (exports.UpdateSubnetGroupResponse = {}));
//# sourceMappingURL=models_0.js.map