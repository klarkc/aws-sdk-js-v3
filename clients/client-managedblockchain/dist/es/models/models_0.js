import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ThresholdComparator;
(function (ThresholdComparator) {
    ThresholdComparator["GREATER_THAN"] = "GREATER_THAN";
    ThresholdComparator["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
})(ThresholdComparator || (ThresholdComparator = {}));
export var ApprovalThresholdPolicy;
(function (ApprovalThresholdPolicy) {
    /**
     * @internal
     */
    ApprovalThresholdPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApprovalThresholdPolicy || (ApprovalThresholdPolicy = {}));
export var MemberFabricConfiguration;
(function (MemberFabricConfiguration) {
    /**
     * @internal
     */
    MemberFabricConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AdminPassword && { AdminPassword: SENSITIVE_STRING }))); };
})(MemberFabricConfiguration || (MemberFabricConfiguration = {}));
export var MemberFrameworkConfiguration;
(function (MemberFrameworkConfiguration) {
    /**
     * @internal
     */
    MemberFrameworkConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Fabric && { Fabric: MemberFabricConfiguration.filterSensitiveLog(obj.Fabric) }))); };
})(MemberFrameworkConfiguration || (MemberFrameworkConfiguration = {}));
export var LogConfiguration;
(function (LogConfiguration) {
    /**
     * @internal
     */
    LogConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogConfiguration || (LogConfiguration = {}));
export var LogConfigurations;
(function (LogConfigurations) {
    /**
     * @internal
     */
    LogConfigurations.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogConfigurations || (LogConfigurations = {}));
export var MemberFabricLogPublishingConfiguration;
(function (MemberFabricLogPublishingConfiguration) {
    /**
     * @internal
     */
    MemberFabricLogPublishingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberFabricLogPublishingConfiguration || (MemberFabricLogPublishingConfiguration = {}));
export var MemberLogPublishingConfiguration;
(function (MemberLogPublishingConfiguration) {
    /**
     * @internal
     */
    MemberLogPublishingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberLogPublishingConfiguration || (MemberLogPublishingConfiguration = {}));
export var MemberConfiguration;
(function (MemberConfiguration) {
    /**
     * @internal
     */
    MemberConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.FrameworkConfiguration && {
        FrameworkConfiguration: MemberFrameworkConfiguration.filterSensitiveLog(obj.FrameworkConfiguration),
    }))); };
})(MemberConfiguration || (MemberConfiguration = {}));
export var CreateMemberInput;
(function (CreateMemberInput) {
    /**
     * @internal
     */
    CreateMemberInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MemberConfiguration && {
        MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
    }))); };
})(CreateMemberInput || (CreateMemberInput = {}));
export var CreateMemberOutput;
(function (CreateMemberOutput) {
    /**
     * @internal
     */
    CreateMemberOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMemberOutput || (CreateMemberOutput = {}));
export var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceErrorException || (InternalServiceErrorException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ResourceNotReadyException;
(function (ResourceNotReadyException) {
    /**
     * @internal
     */
    ResourceNotReadyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotReadyException || (ResourceNotReadyException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var Framework;
(function (Framework) {
    Framework["ETHEREUM"] = "ETHEREUM";
    Framework["HYPERLEDGER_FABRIC"] = "HYPERLEDGER_FABRIC";
})(Framework || (Framework = {}));
export var Edition;
(function (Edition) {
    Edition["STANDARD"] = "STANDARD";
    Edition["STARTER"] = "STARTER";
})(Edition || (Edition = {}));
export var NetworkFabricConfiguration;
(function (NetworkFabricConfiguration) {
    /**
     * @internal
     */
    NetworkFabricConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFabricConfiguration || (NetworkFabricConfiguration = {}));
export var NetworkFrameworkConfiguration;
(function (NetworkFrameworkConfiguration) {
    /**
     * @internal
     */
    NetworkFrameworkConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFrameworkConfiguration || (NetworkFrameworkConfiguration = {}));
export var VotingPolicy;
(function (VotingPolicy) {
    /**
     * @internal
     */
    VotingPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VotingPolicy || (VotingPolicy = {}));
export var CreateNetworkInput;
(function (CreateNetworkInput) {
    /**
     * @internal
     */
    CreateNetworkInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MemberConfiguration && {
        MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
    }))); };
})(CreateNetworkInput || (CreateNetworkInput = {}));
export var CreateNetworkOutput;
(function (CreateNetworkOutput) {
    /**
     * @internal
     */
    CreateNetworkOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNetworkOutput || (CreateNetworkOutput = {}));
export var NodeFabricLogPublishingConfiguration;
(function (NodeFabricLogPublishingConfiguration) {
    /**
     * @internal
     */
    NodeFabricLogPublishingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeFabricLogPublishingConfiguration || (NodeFabricLogPublishingConfiguration = {}));
export var NodeLogPublishingConfiguration;
(function (NodeLogPublishingConfiguration) {
    /**
     * @internal
     */
    NodeLogPublishingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeLogPublishingConfiguration || (NodeLogPublishingConfiguration = {}));
export var StateDBType;
(function (StateDBType) {
    StateDBType["CouchDB"] = "CouchDB";
    StateDBType["LevelDB"] = "LevelDB";
})(StateDBType || (StateDBType = {}));
export var NodeConfiguration;
(function (NodeConfiguration) {
    /**
     * @internal
     */
    NodeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeConfiguration || (NodeConfiguration = {}));
export var CreateNodeInput;
(function (CreateNodeInput) {
    /**
     * @internal
     */
    CreateNodeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNodeInput || (CreateNodeInput = {}));
export var CreateNodeOutput;
(function (CreateNodeOutput) {
    /**
     * @internal
     */
    CreateNodeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNodeOutput || (CreateNodeOutput = {}));
export var InviteAction;
(function (InviteAction) {
    /**
     * @internal
     */
    InviteAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InviteAction || (InviteAction = {}));
export var RemoveAction;
(function (RemoveAction) {
    /**
     * @internal
     */
    RemoveAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAction || (RemoveAction = {}));
export var ProposalActions;
(function (ProposalActions) {
    /**
     * @internal
     */
    ProposalActions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProposalActions || (ProposalActions = {}));
export var CreateProposalInput;
(function (CreateProposalInput) {
    /**
     * @internal
     */
    CreateProposalInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProposalInput || (CreateProposalInput = {}));
export var CreateProposalOutput;
(function (CreateProposalOutput) {
    /**
     * @internal
     */
    CreateProposalOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProposalOutput || (CreateProposalOutput = {}));
export var DeleteMemberInput;
(function (DeleteMemberInput) {
    /**
     * @internal
     */
    DeleteMemberInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMemberInput || (DeleteMemberInput = {}));
export var DeleteMemberOutput;
(function (DeleteMemberOutput) {
    /**
     * @internal
     */
    DeleteMemberOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMemberOutput || (DeleteMemberOutput = {}));
export var DeleteNodeInput;
(function (DeleteNodeInput) {
    /**
     * @internal
     */
    DeleteNodeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNodeInput || (DeleteNodeInput = {}));
export var DeleteNodeOutput;
(function (DeleteNodeOutput) {
    /**
     * @internal
     */
    DeleteNodeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNodeOutput || (DeleteNodeOutput = {}));
export var GetMemberInput;
(function (GetMemberInput) {
    /**
     * @internal
     */
    GetMemberInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMemberInput || (GetMemberInput = {}));
export var MemberFabricAttributes;
(function (MemberFabricAttributes) {
    /**
     * @internal
     */
    MemberFabricAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberFabricAttributes || (MemberFabricAttributes = {}));
export var MemberFrameworkAttributes;
(function (MemberFrameworkAttributes) {
    /**
     * @internal
     */
    MemberFrameworkAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberFrameworkAttributes || (MemberFrameworkAttributes = {}));
export var MemberStatus;
(function (MemberStatus) {
    MemberStatus["AVAILABLE"] = "AVAILABLE";
    MemberStatus["CREATE_FAILED"] = "CREATE_FAILED";
    MemberStatus["CREATING"] = "CREATING";
    MemberStatus["DELETED"] = "DELETED";
    MemberStatus["DELETING"] = "DELETING";
    MemberStatus["UPDATING"] = "UPDATING";
})(MemberStatus || (MemberStatus = {}));
export var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Member || (Member = {}));
export var GetMemberOutput;
(function (GetMemberOutput) {
    /**
     * @internal
     */
    GetMemberOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMemberOutput || (GetMemberOutput = {}));
export var GetNetworkInput;
(function (GetNetworkInput) {
    /**
     * @internal
     */
    GetNetworkInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNetworkInput || (GetNetworkInput = {}));
export var NetworkEthereumAttributes;
(function (NetworkEthereumAttributes) {
    /**
     * @internal
     */
    NetworkEthereumAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkEthereumAttributes || (NetworkEthereumAttributes = {}));
export var NetworkFabricAttributes;
(function (NetworkFabricAttributes) {
    /**
     * @internal
     */
    NetworkFabricAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFabricAttributes || (NetworkFabricAttributes = {}));
export var NetworkFrameworkAttributes;
(function (NetworkFrameworkAttributes) {
    /**
     * @internal
     */
    NetworkFrameworkAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFrameworkAttributes || (NetworkFrameworkAttributes = {}));
export var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus["AVAILABLE"] = "AVAILABLE";
    NetworkStatus["CREATE_FAILED"] = "CREATE_FAILED";
    NetworkStatus["CREATING"] = "CREATING";
    NetworkStatus["DELETED"] = "DELETED";
    NetworkStatus["DELETING"] = "DELETING";
})(NetworkStatus || (NetworkStatus = {}));
export var Network;
(function (Network) {
    /**
     * @internal
     */
    Network.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Network || (Network = {}));
export var GetNetworkOutput;
(function (GetNetworkOutput) {
    /**
     * @internal
     */
    GetNetworkOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNetworkOutput || (GetNetworkOutput = {}));
export var GetNodeInput;
(function (GetNodeInput) {
    /**
     * @internal
     */
    GetNodeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNodeInput || (GetNodeInput = {}));
export var NodeEthereumAttributes;
(function (NodeEthereumAttributes) {
    /**
     * @internal
     */
    NodeEthereumAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeEthereumAttributes || (NodeEthereumAttributes = {}));
export var NodeFabricAttributes;
(function (NodeFabricAttributes) {
    /**
     * @internal
     */
    NodeFabricAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeFabricAttributes || (NodeFabricAttributes = {}));
export var NodeFrameworkAttributes;
(function (NodeFrameworkAttributes) {
    /**
     * @internal
     */
    NodeFrameworkAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeFrameworkAttributes || (NodeFrameworkAttributes = {}));
export var NodeStatus;
(function (NodeStatus) {
    NodeStatus["AVAILABLE"] = "AVAILABLE";
    NodeStatus["CREATE_FAILED"] = "CREATE_FAILED";
    NodeStatus["CREATING"] = "CREATING";
    NodeStatus["DELETED"] = "DELETED";
    NodeStatus["DELETING"] = "DELETING";
    NodeStatus["FAILED"] = "FAILED";
    NodeStatus["UNHEALTHY"] = "UNHEALTHY";
    NodeStatus["UPDATING"] = "UPDATING";
})(NodeStatus || (NodeStatus = {}));
export var Node;
(function (Node) {
    /**
     * @internal
     */
    Node.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Node || (Node = {}));
export var GetNodeOutput;
(function (GetNodeOutput) {
    /**
     * @internal
     */
    GetNodeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNodeOutput || (GetNodeOutput = {}));
export var GetProposalInput;
(function (GetProposalInput) {
    /**
     * @internal
     */
    GetProposalInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProposalInput || (GetProposalInput = {}));
export var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus["ACTION_FAILED"] = "ACTION_FAILED";
    ProposalStatus["APPROVED"] = "APPROVED";
    ProposalStatus["EXPIRED"] = "EXPIRED";
    ProposalStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProposalStatus["REJECTED"] = "REJECTED";
})(ProposalStatus || (ProposalStatus = {}));
export var Proposal;
(function (Proposal) {
    /**
     * @internal
     */
    Proposal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Proposal || (Proposal = {}));
export var GetProposalOutput;
(function (GetProposalOutput) {
    /**
     * @internal
     */
    GetProposalOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProposalOutput || (GetProposalOutput = {}));
export var IllegalActionException;
(function (IllegalActionException) {
    /**
     * @internal
     */
    IllegalActionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IllegalActionException || (IllegalActionException = {}));
export var NetworkSummary;
(function (NetworkSummary) {
    /**
     * @internal
     */
    NetworkSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkSummary || (NetworkSummary = {}));
export var InvitationStatus;
(function (InvitationStatus) {
    InvitationStatus["ACCEPTED"] = "ACCEPTED";
    InvitationStatus["ACCEPTING"] = "ACCEPTING";
    InvitationStatus["EXPIRED"] = "EXPIRED";
    InvitationStatus["PENDING"] = "PENDING";
    InvitationStatus["REJECTED"] = "REJECTED";
})(InvitationStatus || (InvitationStatus = {}));
export var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Invitation || (Invitation = {}));
export var ListInvitationsInput;
(function (ListInvitationsInput) {
    /**
     * @internal
     */
    ListInvitationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInvitationsInput || (ListInvitationsInput = {}));
export var ListInvitationsOutput;
(function (ListInvitationsOutput) {
    /**
     * @internal
     */
    ListInvitationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInvitationsOutput || (ListInvitationsOutput = {}));
export var ListMembersInput;
(function (ListMembersInput) {
    /**
     * @internal
     */
    ListMembersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMembersInput || (ListMembersInput = {}));
export var MemberSummary;
(function (MemberSummary) {
    /**
     * @internal
     */
    MemberSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MemberSummary || (MemberSummary = {}));
export var ListMembersOutput;
(function (ListMembersOutput) {
    /**
     * @internal
     */
    ListMembersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMembersOutput || (ListMembersOutput = {}));
export var ListNetworksInput;
(function (ListNetworksInput) {
    /**
     * @internal
     */
    ListNetworksInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNetworksInput || (ListNetworksInput = {}));
export var ListNetworksOutput;
(function (ListNetworksOutput) {
    /**
     * @internal
     */
    ListNetworksOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNetworksOutput || (ListNetworksOutput = {}));
export var ListNodesInput;
(function (ListNodesInput) {
    /**
     * @internal
     */
    ListNodesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodesInput || (ListNodesInput = {}));
export var NodeSummary;
(function (NodeSummary) {
    /**
     * @internal
     */
    NodeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeSummary || (NodeSummary = {}));
export var ListNodesOutput;
(function (ListNodesOutput) {
    /**
     * @internal
     */
    ListNodesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListNodesOutput || (ListNodesOutput = {}));
export var ListProposalsInput;
(function (ListProposalsInput) {
    /**
     * @internal
     */
    ListProposalsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProposalsInput || (ListProposalsInput = {}));
export var ProposalSummary;
(function (ProposalSummary) {
    /**
     * @internal
     */
    ProposalSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProposalSummary || (ProposalSummary = {}));
export var ListProposalsOutput;
(function (ListProposalsOutput) {
    /**
     * @internal
     */
    ListProposalsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProposalsOutput || (ListProposalsOutput = {}));
export var ListProposalVotesInput;
(function (ListProposalVotesInput) {
    /**
     * @internal
     */
    ListProposalVotesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProposalVotesInput || (ListProposalVotesInput = {}));
export var VoteValue;
(function (VoteValue) {
    VoteValue["NO"] = "NO";
    VoteValue["YES"] = "YES";
})(VoteValue || (VoteValue = {}));
export var VoteSummary;
(function (VoteSummary) {
    /**
     * @internal
     */
    VoteSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoteSummary || (VoteSummary = {}));
export var ListProposalVotesOutput;
(function (ListProposalVotesOutput) {
    /**
     * @internal
     */
    ListProposalVotesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProposalVotesOutput || (ListProposalVotesOutput = {}));
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
export var RejectInvitationInput;
(function (RejectInvitationInput) {
    /**
     * @internal
     */
    RejectInvitationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInvitationInput || (RejectInvitationInput = {}));
export var RejectInvitationOutput;
(function (RejectInvitationOutput) {
    /**
     * @internal
     */
    RejectInvitationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInvitationOutput || (RejectInvitationOutput = {}));
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
export var UpdateMemberInput;
(function (UpdateMemberInput) {
    /**
     * @internal
     */
    UpdateMemberInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMemberInput || (UpdateMemberInput = {}));
export var UpdateMemberOutput;
(function (UpdateMemberOutput) {
    /**
     * @internal
     */
    UpdateMemberOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMemberOutput || (UpdateMemberOutput = {}));
export var UpdateNodeInput;
(function (UpdateNodeInput) {
    /**
     * @internal
     */
    UpdateNodeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodeInput || (UpdateNodeInput = {}));
export var UpdateNodeOutput;
(function (UpdateNodeOutput) {
    /**
     * @internal
     */
    UpdateNodeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateNodeOutput || (UpdateNodeOutput = {}));
export var VoteOnProposalInput;
(function (VoteOnProposalInput) {
    /**
     * @internal
     */
    VoteOnProposalInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoteOnProposalInput || (VoteOnProposalInput = {}));
export var VoteOnProposalOutput;
(function (VoteOnProposalOutput) {
    /**
     * @internal
     */
    VoteOnProposalOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoteOnProposalOutput || (VoteOnProposalOutput = {}));
//# sourceMappingURL=models_0.js.map