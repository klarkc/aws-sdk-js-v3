"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkEthereumAttributes = exports.GetNetworkInput = exports.GetMemberOutput = exports.Member = exports.MemberStatus = exports.MemberFrameworkAttributes = exports.MemberFabricAttributes = exports.GetMemberInput = exports.DeleteNodeOutput = exports.DeleteNodeInput = exports.DeleteMemberOutput = exports.DeleteMemberInput = exports.CreateProposalOutput = exports.CreateProposalInput = exports.ProposalActions = exports.RemoveAction = exports.InviteAction = exports.CreateNodeOutput = exports.CreateNodeInput = exports.NodeConfiguration = exports.StateDBType = exports.NodeLogPublishingConfiguration = exports.NodeFabricLogPublishingConfiguration = exports.CreateNetworkOutput = exports.CreateNetworkInput = exports.VotingPolicy = exports.NetworkFrameworkConfiguration = exports.NetworkFabricConfiguration = exports.Edition = exports.Framework = exports.TooManyTagsException = exports.ThrottlingException = exports.ResourceNotReadyException = exports.ResourceNotFoundException = exports.ResourceLimitExceededException = exports.ResourceAlreadyExistsException = exports.InvalidRequestException = exports.InternalServiceErrorException = exports.CreateMemberOutput = exports.CreateMemberInput = exports.MemberConfiguration = exports.MemberLogPublishingConfiguration = exports.MemberFabricLogPublishingConfiguration = exports.LogConfigurations = exports.LogConfiguration = exports.MemberFrameworkConfiguration = exports.MemberFabricConfiguration = exports.ApprovalThresholdPolicy = exports.ThresholdComparator = exports.AccessDeniedException = void 0;
exports.VoteOnProposalInput = exports.UpdateNodeOutput = exports.UpdateNodeInput = exports.UpdateMemberOutput = exports.UpdateMemberInput = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RejectInvitationOutput = exports.RejectInvitationInput = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProposalVotesOutput = exports.VoteSummary = exports.VoteValue = exports.ListProposalVotesInput = exports.ListProposalsOutput = exports.ProposalSummary = exports.ListProposalsInput = exports.ListNodesOutput = exports.NodeSummary = exports.ListNodesInput = exports.ListNetworksOutput = exports.ListNetworksInput = exports.ListMembersOutput = exports.MemberSummary = exports.ListMembersInput = exports.ListInvitationsOutput = exports.ListInvitationsInput = exports.Invitation = exports.InvitationStatus = exports.NetworkSummary = exports.IllegalActionException = exports.GetProposalOutput = exports.Proposal = exports.ProposalStatus = exports.GetProposalInput = exports.GetNodeOutput = exports.Node = exports.NodeStatus = exports.NodeFrameworkAttributes = exports.NodeFabricAttributes = exports.NodeEthereumAttributes = exports.GetNodeInput = exports.GetNetworkOutput = exports.Network = exports.NetworkStatus = exports.NetworkFrameworkAttributes = exports.NetworkFabricAttributes = void 0;
exports.VoteOnProposalOutput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ThresholdComparator;
(function (ThresholdComparator) {
    ThresholdComparator["GREATER_THAN"] = "GREATER_THAN";
    ThresholdComparator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
})(ThresholdComparator = exports.ThresholdComparator || (exports.ThresholdComparator = {}));
var ApprovalThresholdPolicy;
(function (ApprovalThresholdPolicy) {
    /**
     * @internal
     */
    ApprovalThresholdPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalThresholdPolicy = exports.ApprovalThresholdPolicy || (exports.ApprovalThresholdPolicy = {}));
var MemberFabricConfiguration;
(function (MemberFabricConfiguration) {
    /**
     * @internal
     */
    MemberFabricConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdminPassword && { AdminPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(MemberFabricConfiguration = exports.MemberFabricConfiguration || (exports.MemberFabricConfiguration = {}));
var MemberFrameworkConfiguration;
(function (MemberFrameworkConfiguration) {
    /**
     * @internal
     */
    MemberFrameworkConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Fabric && { Fabric: MemberFabricConfiguration.filterSensitiveLog(obj.Fabric) }),
    });
})(MemberFrameworkConfiguration = exports.MemberFrameworkConfiguration || (exports.MemberFrameworkConfiguration = {}));
var LogConfiguration;
(function (LogConfiguration) {
    /**
     * @internal
     */
    LogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogConfiguration = exports.LogConfiguration || (exports.LogConfiguration = {}));
var LogConfigurations;
(function (LogConfigurations) {
    /**
     * @internal
     */
    LogConfigurations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogConfigurations = exports.LogConfigurations || (exports.LogConfigurations = {}));
var MemberFabricLogPublishingConfiguration;
(function (MemberFabricLogPublishingConfiguration) {
    /**
     * @internal
     */
    MemberFabricLogPublishingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberFabricLogPublishingConfiguration = exports.MemberFabricLogPublishingConfiguration || (exports.MemberFabricLogPublishingConfiguration = {}));
var MemberLogPublishingConfiguration;
(function (MemberLogPublishingConfiguration) {
    /**
     * @internal
     */
    MemberLogPublishingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberLogPublishingConfiguration = exports.MemberLogPublishingConfiguration || (exports.MemberLogPublishingConfiguration = {}));
var MemberConfiguration;
(function (MemberConfiguration) {
    /**
     * @internal
     */
    MemberConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.FrameworkConfiguration && {
            FrameworkConfiguration: MemberFrameworkConfiguration.filterSensitiveLog(obj.FrameworkConfiguration),
        }),
    });
})(MemberConfiguration = exports.MemberConfiguration || (exports.MemberConfiguration = {}));
var CreateMemberInput;
(function (CreateMemberInput) {
    /**
     * @internal
     */
    CreateMemberInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MemberConfiguration && {
            MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
        }),
    });
})(CreateMemberInput = exports.CreateMemberInput || (exports.CreateMemberInput = {}));
var CreateMemberOutput;
(function (CreateMemberOutput) {
    /**
     * @internal
     */
    CreateMemberOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMemberOutput = exports.CreateMemberOutput || (exports.CreateMemberOutput = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceNotReadyException;
(function (ResourceNotReadyException) {
    /**
     * @internal
     */
    ResourceNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotReadyException = exports.ResourceNotReadyException || (exports.ResourceNotReadyException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var Framework;
(function (Framework) {
    Framework["ETHEREUM"] = "ETHEREUM";
    Framework["HYPERLEDGER_FABRIC"] = "HYPERLEDGER_FABRIC";
})(Framework = exports.Framework || (exports.Framework = {}));
var Edition;
(function (Edition) {
    Edition["STANDARD"] = "STANDARD";
    Edition["STARTER"] = "STARTER";
})(Edition = exports.Edition || (exports.Edition = {}));
var NetworkFabricConfiguration;
(function (NetworkFabricConfiguration) {
    /**
     * @internal
     */
    NetworkFabricConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFabricConfiguration = exports.NetworkFabricConfiguration || (exports.NetworkFabricConfiguration = {}));
var NetworkFrameworkConfiguration;
(function (NetworkFrameworkConfiguration) {
    /**
     * @internal
     */
    NetworkFrameworkConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFrameworkConfiguration = exports.NetworkFrameworkConfiguration || (exports.NetworkFrameworkConfiguration = {}));
var VotingPolicy;
(function (VotingPolicy) {
    /**
     * @internal
     */
    VotingPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VotingPolicy = exports.VotingPolicy || (exports.VotingPolicy = {}));
var CreateNetworkInput;
(function (CreateNetworkInput) {
    /**
     * @internal
     */
    CreateNetworkInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MemberConfiguration && {
            MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
        }),
    });
})(CreateNetworkInput = exports.CreateNetworkInput || (exports.CreateNetworkInput = {}));
var CreateNetworkOutput;
(function (CreateNetworkOutput) {
    /**
     * @internal
     */
    CreateNetworkOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkOutput = exports.CreateNetworkOutput || (exports.CreateNetworkOutput = {}));
var NodeFabricLogPublishingConfiguration;
(function (NodeFabricLogPublishingConfiguration) {
    /**
     * @internal
     */
    NodeFabricLogPublishingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeFabricLogPublishingConfiguration = exports.NodeFabricLogPublishingConfiguration || (exports.NodeFabricLogPublishingConfiguration = {}));
var NodeLogPublishingConfiguration;
(function (NodeLogPublishingConfiguration) {
    /**
     * @internal
     */
    NodeLogPublishingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeLogPublishingConfiguration = exports.NodeLogPublishingConfiguration || (exports.NodeLogPublishingConfiguration = {}));
var StateDBType;
(function (StateDBType) {
    StateDBType["CouchDB"] = "CouchDB";
    StateDBType["LevelDB"] = "LevelDB";
})(StateDBType = exports.StateDBType || (exports.StateDBType = {}));
var NodeConfiguration;
(function (NodeConfiguration) {
    /**
     * @internal
     */
    NodeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeConfiguration = exports.NodeConfiguration || (exports.NodeConfiguration = {}));
var CreateNodeInput;
(function (CreateNodeInput) {
    /**
     * @internal
     */
    CreateNodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNodeInput = exports.CreateNodeInput || (exports.CreateNodeInput = {}));
var CreateNodeOutput;
(function (CreateNodeOutput) {
    /**
     * @internal
     */
    CreateNodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNodeOutput = exports.CreateNodeOutput || (exports.CreateNodeOutput = {}));
var InviteAction;
(function (InviteAction) {
    /**
     * @internal
     */
    InviteAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InviteAction = exports.InviteAction || (exports.InviteAction = {}));
var RemoveAction;
(function (RemoveAction) {
    /**
     * @internal
     */
    RemoveAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAction = exports.RemoveAction || (exports.RemoveAction = {}));
var ProposalActions;
(function (ProposalActions) {
    /**
     * @internal
     */
    ProposalActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProposalActions = exports.ProposalActions || (exports.ProposalActions = {}));
var CreateProposalInput;
(function (CreateProposalInput) {
    /**
     * @internal
     */
    CreateProposalInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProposalInput = exports.CreateProposalInput || (exports.CreateProposalInput = {}));
var CreateProposalOutput;
(function (CreateProposalOutput) {
    /**
     * @internal
     */
    CreateProposalOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProposalOutput = exports.CreateProposalOutput || (exports.CreateProposalOutput = {}));
var DeleteMemberInput;
(function (DeleteMemberInput) {
    /**
     * @internal
     */
    DeleteMemberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMemberInput = exports.DeleteMemberInput || (exports.DeleteMemberInput = {}));
var DeleteMemberOutput;
(function (DeleteMemberOutput) {
    /**
     * @internal
     */
    DeleteMemberOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMemberOutput = exports.DeleteMemberOutput || (exports.DeleteMemberOutput = {}));
var DeleteNodeInput;
(function (DeleteNodeInput) {
    /**
     * @internal
     */
    DeleteNodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNodeInput = exports.DeleteNodeInput || (exports.DeleteNodeInput = {}));
var DeleteNodeOutput;
(function (DeleteNodeOutput) {
    /**
     * @internal
     */
    DeleteNodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNodeOutput = exports.DeleteNodeOutput || (exports.DeleteNodeOutput = {}));
var GetMemberInput;
(function (GetMemberInput) {
    /**
     * @internal
     */
    GetMemberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberInput = exports.GetMemberInput || (exports.GetMemberInput = {}));
var MemberFabricAttributes;
(function (MemberFabricAttributes) {
    /**
     * @internal
     */
    MemberFabricAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberFabricAttributes = exports.MemberFabricAttributes || (exports.MemberFabricAttributes = {}));
var MemberFrameworkAttributes;
(function (MemberFrameworkAttributes) {
    /**
     * @internal
     */
    MemberFrameworkAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberFrameworkAttributes = exports.MemberFrameworkAttributes || (exports.MemberFrameworkAttributes = {}));
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["AVAILABLE"] = "AVAILABLE";
    MemberStatus["CREATE_FAILED"] = "CREATE_FAILED";
    MemberStatus["CREATING"] = "CREATING";
    MemberStatus["DELETED"] = "DELETED";
    MemberStatus["DELETING"] = "DELETING";
    MemberStatus["UPDATING"] = "UPDATING";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Member = exports.Member || (exports.Member = {}));
var GetMemberOutput;
(function (GetMemberOutput) {
    /**
     * @internal
     */
    GetMemberOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberOutput = exports.GetMemberOutput || (exports.GetMemberOutput = {}));
var GetNetworkInput;
(function (GetNetworkInput) {
    /**
     * @internal
     */
    GetNetworkInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNetworkInput = exports.GetNetworkInput || (exports.GetNetworkInput = {}));
var NetworkEthereumAttributes;
(function (NetworkEthereumAttributes) {
    /**
     * @internal
     */
    NetworkEthereumAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkEthereumAttributes = exports.NetworkEthereumAttributes || (exports.NetworkEthereumAttributes = {}));
var NetworkFabricAttributes;
(function (NetworkFabricAttributes) {
    /**
     * @internal
     */
    NetworkFabricAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFabricAttributes = exports.NetworkFabricAttributes || (exports.NetworkFabricAttributes = {}));
var NetworkFrameworkAttributes;
(function (NetworkFrameworkAttributes) {
    /**
     * @internal
     */
    NetworkFrameworkAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFrameworkAttributes = exports.NetworkFrameworkAttributes || (exports.NetworkFrameworkAttributes = {}));
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus["AVAILABLE"] = "AVAILABLE";
    NetworkStatus["CREATE_FAILED"] = "CREATE_FAILED";
    NetworkStatus["CREATING"] = "CREATING";
    NetworkStatus["DELETED"] = "DELETED";
    NetworkStatus["DELETING"] = "DELETING";
})(NetworkStatus = exports.NetworkStatus || (exports.NetworkStatus = {}));
var Network;
(function (Network) {
    /**
     * @internal
     */
    Network.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Network = exports.Network || (exports.Network = {}));
var GetNetworkOutput;
(function (GetNetworkOutput) {
    /**
     * @internal
     */
    GetNetworkOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNetworkOutput = exports.GetNetworkOutput || (exports.GetNetworkOutput = {}));
var GetNodeInput;
(function (GetNodeInput) {
    /**
     * @internal
     */
    GetNodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNodeInput = exports.GetNodeInput || (exports.GetNodeInput = {}));
var NodeEthereumAttributes;
(function (NodeEthereumAttributes) {
    /**
     * @internal
     */
    NodeEthereumAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeEthereumAttributes = exports.NodeEthereumAttributes || (exports.NodeEthereumAttributes = {}));
var NodeFabricAttributes;
(function (NodeFabricAttributes) {
    /**
     * @internal
     */
    NodeFabricAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeFabricAttributes = exports.NodeFabricAttributes || (exports.NodeFabricAttributes = {}));
var NodeFrameworkAttributes;
(function (NodeFrameworkAttributes) {
    /**
     * @internal
     */
    NodeFrameworkAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeFrameworkAttributes = exports.NodeFrameworkAttributes || (exports.NodeFrameworkAttributes = {}));
var NodeStatus;
(function (NodeStatus) {
    NodeStatus["AVAILABLE"] = "AVAILABLE";
    NodeStatus["CREATE_FAILED"] = "CREATE_FAILED";
    NodeStatus["CREATING"] = "CREATING";
    NodeStatus["DELETED"] = "DELETED";
    NodeStatus["DELETING"] = "DELETING";
    NodeStatus["FAILED"] = "FAILED";
    NodeStatus["UNHEALTHY"] = "UNHEALTHY";
    NodeStatus["UPDATING"] = "UPDATING";
})(NodeStatus = exports.NodeStatus || (exports.NodeStatus = {}));
var Node;
(function (Node) {
    /**
     * @internal
     */
    Node.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Node = exports.Node || (exports.Node = {}));
var GetNodeOutput;
(function (GetNodeOutput) {
    /**
     * @internal
     */
    GetNodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNodeOutput = exports.GetNodeOutput || (exports.GetNodeOutput = {}));
var GetProposalInput;
(function (GetProposalInput) {
    /**
     * @internal
     */
    GetProposalInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProposalInput = exports.GetProposalInput || (exports.GetProposalInput = {}));
var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus["ACTION_FAILED"] = "ACTION_FAILED";
    ProposalStatus["APPROVED"] = "APPROVED";
    ProposalStatus["EXPIRED"] = "EXPIRED";
    ProposalStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProposalStatus["REJECTED"] = "REJECTED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
var Proposal;
(function (Proposal) {
    /**
     * @internal
     */
    Proposal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Proposal = exports.Proposal || (exports.Proposal = {}));
var GetProposalOutput;
(function (GetProposalOutput) {
    /**
     * @internal
     */
    GetProposalOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProposalOutput = exports.GetProposalOutput || (exports.GetProposalOutput = {}));
var IllegalActionException;
(function (IllegalActionException) {
    /**
     * @internal
     */
    IllegalActionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IllegalActionException = exports.IllegalActionException || (exports.IllegalActionException = {}));
var NetworkSummary;
(function (NetworkSummary) {
    /**
     * @internal
     */
    NetworkSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkSummary = exports.NetworkSummary || (exports.NetworkSummary = {}));
var InvitationStatus;
(function (InvitationStatus) {
    InvitationStatus["ACCEPTED"] = "ACCEPTED";
    InvitationStatus["ACCEPTING"] = "ACCEPTING";
    InvitationStatus["EXPIRED"] = "EXPIRED";
    InvitationStatus["PENDING"] = "PENDING";
    InvitationStatus["REJECTED"] = "REJECTED";
})(InvitationStatus = exports.InvitationStatus || (exports.InvitationStatus = {}));
var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Invitation = exports.Invitation || (exports.Invitation = {}));
var ListInvitationsInput;
(function (ListInvitationsInput) {
    /**
     * @internal
     */
    ListInvitationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsInput = exports.ListInvitationsInput || (exports.ListInvitationsInput = {}));
var ListInvitationsOutput;
(function (ListInvitationsOutput) {
    /**
     * @internal
     */
    ListInvitationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsOutput = exports.ListInvitationsOutput || (exports.ListInvitationsOutput = {}));
var ListMembersInput;
(function (ListMembersInput) {
    /**
     * @internal
     */
    ListMembersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersInput = exports.ListMembersInput || (exports.ListMembersInput = {}));
var MemberSummary;
(function (MemberSummary) {
    /**
     * @internal
     */
    MemberSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberSummary = exports.MemberSummary || (exports.MemberSummary = {}));
var ListMembersOutput;
(function (ListMembersOutput) {
    /**
     * @internal
     */
    ListMembersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersOutput = exports.ListMembersOutput || (exports.ListMembersOutput = {}));
var ListNetworksInput;
(function (ListNetworksInput) {
    /**
     * @internal
     */
    ListNetworksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNetworksInput = exports.ListNetworksInput || (exports.ListNetworksInput = {}));
var ListNetworksOutput;
(function (ListNetworksOutput) {
    /**
     * @internal
     */
    ListNetworksOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNetworksOutput = exports.ListNetworksOutput || (exports.ListNetworksOutput = {}));
var ListNodesInput;
(function (ListNodesInput) {
    /**
     * @internal
     */
    ListNodesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodesInput = exports.ListNodesInput || (exports.ListNodesInput = {}));
var NodeSummary;
(function (NodeSummary) {
    /**
     * @internal
     */
    NodeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeSummary = exports.NodeSummary || (exports.NodeSummary = {}));
var ListNodesOutput;
(function (ListNodesOutput) {
    /**
     * @internal
     */
    ListNodesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNodesOutput = exports.ListNodesOutput || (exports.ListNodesOutput = {}));
var ListProposalsInput;
(function (ListProposalsInput) {
    /**
     * @internal
     */
    ListProposalsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProposalsInput = exports.ListProposalsInput || (exports.ListProposalsInput = {}));
var ProposalSummary;
(function (ProposalSummary) {
    /**
     * @internal
     */
    ProposalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProposalSummary = exports.ProposalSummary || (exports.ProposalSummary = {}));
var ListProposalsOutput;
(function (ListProposalsOutput) {
    /**
     * @internal
     */
    ListProposalsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProposalsOutput = exports.ListProposalsOutput || (exports.ListProposalsOutput = {}));
var ListProposalVotesInput;
(function (ListProposalVotesInput) {
    /**
     * @internal
     */
    ListProposalVotesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProposalVotesInput = exports.ListProposalVotesInput || (exports.ListProposalVotesInput = {}));
var VoteValue;
(function (VoteValue) {
    VoteValue["NO"] = "NO";
    VoteValue["YES"] = "YES";
})(VoteValue = exports.VoteValue || (exports.VoteValue = {}));
var VoteSummary;
(function (VoteSummary) {
    /**
     * @internal
     */
    VoteSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoteSummary = exports.VoteSummary || (exports.VoteSummary = {}));
var ListProposalVotesOutput;
(function (ListProposalVotesOutput) {
    /**
     * @internal
     */
    ListProposalVotesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProposalVotesOutput = exports.ListProposalVotesOutput || (exports.ListProposalVotesOutput = {}));
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
var RejectInvitationInput;
(function (RejectInvitationInput) {
    /**
     * @internal
     */
    RejectInvitationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInvitationInput = exports.RejectInvitationInput || (exports.RejectInvitationInput = {}));
var RejectInvitationOutput;
(function (RejectInvitationOutput) {
    /**
     * @internal
     */
    RejectInvitationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInvitationOutput = exports.RejectInvitationOutput || (exports.RejectInvitationOutput = {}));
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
var UpdateMemberInput;
(function (UpdateMemberInput) {
    /**
     * @internal
     */
    UpdateMemberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberInput = exports.UpdateMemberInput || (exports.UpdateMemberInput = {}));
var UpdateMemberOutput;
(function (UpdateMemberOutput) {
    /**
     * @internal
     */
    UpdateMemberOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberOutput = exports.UpdateMemberOutput || (exports.UpdateMemberOutput = {}));
var UpdateNodeInput;
(function (UpdateNodeInput) {
    /**
     * @internal
     */
    UpdateNodeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodeInput = exports.UpdateNodeInput || (exports.UpdateNodeInput = {}));
var UpdateNodeOutput;
(function (UpdateNodeOutput) {
    /**
     * @internal
     */
    UpdateNodeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateNodeOutput = exports.UpdateNodeOutput || (exports.UpdateNodeOutput = {}));
var VoteOnProposalInput;
(function (VoteOnProposalInput) {
    /**
     * @internal
     */
    VoteOnProposalInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoteOnProposalInput = exports.VoteOnProposalInput || (exports.VoteOnProposalInput = {}));
var VoteOnProposalOutput;
(function (VoteOnProposalOutput) {
    /**
     * @internal
     */
    VoteOnProposalOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoteOnProposalOutput = exports.VoteOnProposalOutput || (exports.VoteOnProposalOutput = {}));
//# sourceMappingURL=models_0.js.map