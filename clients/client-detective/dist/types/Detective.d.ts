import { DetectiveClient } from "./DetectiveClient";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { CreateGraphCommandInput, CreateGraphCommandOutput } from "./commands/CreateGraphCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { DeleteGraphCommandInput, DeleteGraphCommandOutput } from "./commands/DeleteGraphCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import { DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput } from "./commands/DisassociateMembershipCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { ListGraphsCommandInput, ListGraphsCommandOutput } from "./commands/ListGraphsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "./commands/RejectInvitationCommand";
import { StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput } from "./commands/StartMonitoringMemberCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Detective uses machine learning and purpose-built visualizations to help you analyze and
 *          investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically
 *          extracts time-based events such as login attempts, API calls, and network traffic from
 *          AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
 *          Amazon GuardDuty.</p>
 *          <p>The Detective API primarily supports the creation and management of behavior graphs. A
 *          behavior graph contains the extracted data from a set of member accounts, and is created
 *          and managed by an administrator account.</p>
 *          <p>Every behavior graph is specific to a Region. You can only use the API to manage graphs
 *          that belong to the Region that is associated with the currently selected endpoint.</p>
 *          <p>A Detective administrator account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>View the list of member accounts in a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Add member accounts to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove member accounts from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>A member account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>View the list of behavior graphs that they are invited to.</p>
 *             </li>
 *             <li>
 *                <p>Accept an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Decline an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove their account from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>
 *          <note>
 *             <p>We replaced the term "master account" with the term "administrator account." An
 *             administrator account is used to centrally manage multiple accounts. In the case of
 *             Detective, the administrator account manages the accounts in their behavior graph.</p>
 *          </note>
 */
export declare class Detective extends DetectiveClient {
    /**
     * <p>Accepts an invitation for the member account to contribute data to a behavior graph.
     *          This operation can only be called by an invited member account. </p>
     *          <p>The request provides the ARN of behavior graph.</p>
     *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
     */
    acceptInvitation(args: AcceptInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInvitationCommandOutput>;
    acceptInvitation(args: AcceptInvitationCommandInput, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    acceptInvitation(args: AcceptInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    /**
     * <p>Creates a new behavior graph for the calling account, and sets that account as the
     *          administrator account. This operation is called by the account that is enabling
     *          Detective.</p>
     *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
     *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
     *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
     *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
     *          quota, then you cannot enable Detective. </p>
     *          <p>The operation also enables Detective for the calling account in the currently selected
     *          Region. It returns the ARN of the new behavior graph.</p>
     *          <p>
     *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
     *          the new behavior graph.</p>
     *          <p>An account can only be the administrator account for one behavior graph within a Region.
     *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
     *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
     */
    createGraph(args: CreateGraphCommandInput, options?: __HttpHandlerOptions): Promise<CreateGraphCommandOutput>;
    createGraph(args: CreateGraphCommandInput, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
    createGraph(args: CreateGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
    /**
     * <p>Sends a request to invite the specified AWS accounts to be member accounts in the
     *          behavior graph. This operation can only be called by the administrator account for a
     *          behavior graph. </p>
     *          <p>
     *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
     *          The administrator can optionally specify to not send invitation emails to the member
     *          accounts. This would be used when the administrator manages their member accounts
     *          centrally.</p>
     *          <p>The request provides the behavior graph ARN and the list of accounts to invite.</p>
     *          <p>The response separates the requested accounts into two lists:</p>
     *          <ul>
     *             <li>
     *                <p>The accounts that <code>CreateMembers</code> was able to start the verification
     *                for. This list includes member accounts that are being verified, that have passed
     *                verification and are to be invited, and that have failed verification.</p>
     *             </li>
     *             <li>
     *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
     *                includes accounts that were already invited to be member accounts in the behavior
     *                graph.</p>
     *             </li>
     *          </ul>
     */
    createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
    createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    createMembers(args: CreateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    /**
     * <p>Disables the specified behavior graph and queues it to be deleted. This operation
     *          removes the graph from each member account's list of behavior graphs.</p>
     *          <p>
     *             <code>DeleteGraph</code> can only be called by the administrator account for a behavior
     *          graph.</p>
     */
    deleteGraph(args: DeleteGraphCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGraphCommandOutput>;
    deleteGraph(args: DeleteGraphCommandInput, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
    deleteGraph(args: DeleteGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
    /**
     * <p>Deletes one or more member accounts from the administrator account's behavior graph.
     *          This operation can only be called by a Detective administrator account. That account cannot use
     *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
     *          disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API
     *          method.</p>
     */
    deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
    deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    deleteMembers(args: DeleteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    /**
     * <p>Removes the member account from the specified behavior graph. This operation can only be
     *          called by a member account that has the <code>ENABLED</code> status.</p>
     */
    disassociateMembership(args: DisassociateMembershipCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMembershipCommandOutput>;
    disassociateMembership(args: DisassociateMembershipCommandInput, cb: (err: any, data?: DisassociateMembershipCommandOutput) => void): void;
    disassociateMembership(args: DisassociateMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMembershipCommandOutput) => void): void;
    /**
     * <p>Returns the membership details for specified member accounts for a behavior
     *          graph.</p>
     */
    getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
    getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    getMembers(args: GetMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    /**
     * <p>Returns the list of behavior graphs that the calling account is an administrator account
     *          of. This operation can only be called by an administrator account.</p>
     *          <p>Because an account can currently only be the administrator of one behavior graph within
     *          a Region, the results always contain a single behavior graph.</p>
     */
    listGraphs(args: ListGraphsCommandInput, options?: __HttpHandlerOptions): Promise<ListGraphsCommandOutput>;
    listGraphs(args: ListGraphsCommandInput, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
    listGraphs(args: ListGraphsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of open and accepted behavior graph invitations for the member
     *          account. This operation can only be called by a member account.</p>
     *          <p>Open invitations are invitations that the member account has not responded to.</p>
     *          <p>The results do not include behavior graphs for which the member account declined the
     *          invitation. The results also do not include behavior graphs that the member account
     *          resigned from or was removed from.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of member accounts for a behavior graph. Does not return member
     *          accounts that were removed from the behavior graph.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Returns the tag values that are assigned to a behavior graph.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
     *          must be called by a member account that has the <code>INVITED</code> status.</p>
     */
    rejectInvitation(args: RejectInvitationCommandInput, options?: __HttpHandlerOptions): Promise<RejectInvitationCommandOutput>;
    rejectInvitation(args: RejectInvitationCommandInput, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
    rejectInvitation(args: RejectInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectInvitationCommandOutput) => void): void;
    /**
     * <p>Sends a request to enable data ingest for a member account that has a status of
     *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
     *          <p>For valid member accounts, the status is updated as follows.</p>
     *          <ul>
     *             <li>
     *                <p>If Detective enabled the member account, then the new status is
     *                <code>ENABLED</code>.</p>
     *             </li>
     *             <li>
     *                <p>If Detective cannot enable the member account, the status remains
     *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
     *             </li>
     *          </ul>
     */
    startMonitoringMember(args: StartMonitoringMemberCommandInput, options?: __HttpHandlerOptions): Promise<StartMonitoringMemberCommandOutput>;
    startMonitoringMember(args: StartMonitoringMemberCommandInput, cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void): void;
    startMonitoringMember(args: StartMonitoringMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMonitoringMemberCommandOutput) => void): void;
    /**
     * <p>Applies tag values to a behavior graph.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a behavior graph.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
