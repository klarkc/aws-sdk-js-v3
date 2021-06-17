import { ManagedBlockchainClient } from "./ManagedBlockchainClient";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import { CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import { CreateProposalCommandInput, CreateProposalCommandOutput } from "./commands/CreateProposalCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import { GetNodeCommandInput, GetNodeCommandOutput } from "./commands/GetNodeCommand";
import { GetProposalCommandInput, GetProposalCommandOutput } from "./commands/GetProposalCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListProposalVotesCommandInput, ListProposalVotesCommandOutput } from "./commands/ListProposalVotesCommand";
import { ListProposalsCommandInput, ListProposalsCommandOutput } from "./commands/ListProposalsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "./commands/RejectInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMemberCommandInput, UpdateMemberCommandOutput } from "./commands/UpdateMemberCommand";
import { UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import { VoteOnProposalCommandInput, VoteOnProposalCommandOutput } from "./commands/VoteOnProposalCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p></p>
 *          <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority.</p>
 *         <p>Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as <code>CreateMember</code> and <code>DeleteMember</code> do not apply to Ethereum.</p>
 *         <p>The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated.</p>
 */
export declare class ManagedBlockchain extends ManagedBlockchainClient {
    /**
     * <p>Creates a member within a Managed Blockchain network.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    createMember(args: CreateMemberCommandInput, options?: __HttpHandlerOptions): Promise<CreateMemberCommandOutput>;
    createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
    createMember(args: CreateMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
    /**
     * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    createNetwork(args: CreateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkCommandOutput>;
    createNetwork(args: CreateNetworkCommandInput, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
    createNetwork(args: CreateNetworkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
    /**
     * <p>Creates a node on the specified blockchain network.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    createNode(args: CreateNodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateNodeCommandOutput>;
    createNode(args: CreateNodeCommandInput, cb: (err: any, data?: CreateNodeCommandOutput) => void): void;
    createNode(args: CreateNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNodeCommandOutput) => void): void;
    /**
     * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    createProposal(args: CreateProposalCommandInput, options?: __HttpHandlerOptions): Promise<CreateProposalCommandOutput>;
    createProposal(args: CreateProposalCommandInput, cb: (err: any, data?: CreateProposalCommandOutput) => void): void;
    createProposal(args: CreateProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProposalCommandOutput) => void): void;
    /**
     * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last AWS account, the network is deleted also.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    deleteMember(args: DeleteMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemberCommandOutput>;
    deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
    deleteMember(args: DeleteMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
    /**
     * <p>Deletes a node that your AWS account owns. All data on the node is lost and cannot be recovered.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    deleteNode(args: DeleteNodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNodeCommandOutput>;
    deleteNode(args: DeleteNodeCommandInput, cb: (err: any, data?: DeleteNodeCommandOutput) => void): void;
    deleteNode(args: DeleteNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNodeCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about a member.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
    getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
    getMember(args: GetMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about a network.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
    getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
    getNetwork(args: GetNetworkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about a node.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    getNode(args: GetNodeCommandInput, options?: __HttpHandlerOptions): Promise<GetNodeCommandOutput>;
    getNode(args: GetNodeCommandInput, cb: (err: any, data?: GetNodeCommandOutput) => void): void;
    getNode(args: GetNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNodeCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about a proposal.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    getProposal(args: GetProposalCommandInput, options?: __HttpHandlerOptions): Promise<GetProposalCommandOutput>;
    getProposal(args: GetProposalCommandInput, cb: (err: any, data?: GetProposalCommandOutput) => void): void;
    getProposal(args: GetProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProposalCommandOutput) => void): void;
    /**
     * <p>Returns a list of all invitations for the current AWS account.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the members in a network and properties of their configurations.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Returns information about the networks in which the current AWS account participates.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    listNetworks(args: ListNetworksCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworksCommandOutput>;
    listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
    listNetworks(args: ListNetworksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
    /**
     * <p>Returns information about the nodes within a network.</p>
     *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
     */
    listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
    listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
    listNodes(args: ListNodesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
    /**
     * <p>Returns a list of proposals for the network.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    listProposals(args: ListProposalsCommandInput, options?: __HttpHandlerOptions): Promise<ListProposalsCommandOutput>;
    listProposals(args: ListProposalsCommandInput, cb: (err: any, data?: ListProposalsCommandOutput) => void): void;
    listProposals(args: ListProposalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProposalsCommandOutput) => void): void;
    /**
     * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    listProposalVotes(args: ListProposalVotesCommandInput, options?: __HttpHandlerOptions): Promise<ListProposalVotesCommandOutput>;
    listProposalVotes(args: ListProposalVotesCommandInput, cb: (err: any, data?: ListProposalVotesCommandOutput) => void): void;
    listProposalVotes(args: ListProposalVotesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProposalVotesCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags for the specified resource. Each tag consists of a key and optional value.</p>
     *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    rejectInvitation(args: RejectInvitationCommandInput, options?: __HttpHandlerOptions): Promise<RejectInvitationCommandOutput>;
    rejectInvitation(args: RejectInvitationCommandInput, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
    rejectInvitation(args: RejectInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value.</p>
     *          <p>When you specify a tag key that already exists, the tag value is overwritten with the new value. Use <code>UntagResource</code> to remove tag keys.</p>
     *          <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>
     *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the Amazon Managed Blockchain resource.</p>
     *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a member configuration with new parameters.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    updateMember(args: UpdateMemberCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMemberCommandOutput>;
    updateMember(args: UpdateMemberCommandInput, cb: (err: any, data?: UpdateMemberCommandOutput) => void): void;
    updateMember(args: UpdateMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMemberCommandOutput) => void): void;
    /**
     * <p>Updates a node configuration with new parameters.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    updateNode(args: UpdateNodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodeCommandOutput>;
    updateNode(args: UpdateNodeCommandInput, cb: (err: any, data?: UpdateNodeCommandOutput) => void): void;
    updateNode(args: UpdateNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNodeCommandOutput) => void): void;
    /**
     * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.</p>
     *          <p>Applies only to Hyperledger Fabric.</p>
     */
    voteOnProposal(args: VoteOnProposalCommandInput, options?: __HttpHandlerOptions): Promise<VoteOnProposalCommandOutput>;
    voteOnProposal(args: VoteOnProposalCommandInput, cb: (err: any, data?: VoteOnProposalCommandOutput) => void): void;
    voteOnProposal(args: VoteOnProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VoteOnProposalCommandOutput) => void): void;
}
