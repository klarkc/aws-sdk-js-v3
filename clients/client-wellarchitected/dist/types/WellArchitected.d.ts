import { WellArchitectedClient } from "./WellArchitectedClient";
import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "./commands/AssociateLensesCommand";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "./commands/CreateMilestoneCommand";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "./commands/CreateWorkloadCommand";
import { CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput } from "./commands/CreateWorkloadShareCommand";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "./commands/DeleteWorkloadCommand";
import { DeleteWorkloadShareCommandInput, DeleteWorkloadShareCommandOutput } from "./commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "./commands/DisassociateLensesCommand";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "./commands/GetLensReviewCommand";
import { GetLensReviewReportCommandInput, GetLensReviewReportCommandOutput } from "./commands/GetLensReviewReportCommand";
import { GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput } from "./commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "./commands/GetMilestoneCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import { ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput } from "./commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "./commands/ListLensReviewsCommand";
import { ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "./commands/ListMilestonesCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import { ListShareInvitationsCommandInput, ListShareInvitationsCommandOutput } from "./commands/ListShareInvitationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "./commands/ListWorkloadSharesCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "./commands/ListWorkloadsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "./commands/UpdateAnswerCommand";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "./commands/UpdateLensReviewCommand";
import { UpdateShareInvitationCommandInput, UpdateShareInvitationCommandOutput } from "./commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "./commands/UpdateWorkloadCommand";
import { UpdateWorkloadShareCommandInput, UpdateWorkloadShareCommandOutput } from "./commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "./commands/UpgradeLensReviewCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>AWS Well-Architected Tool API Reference</i>. The AWS Well-Architected Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the
 *             <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>. For information
 *             about the AWS Well-Architected Tool, see the
 *             <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>
 */
export declare class WellArchitected extends WellArchitectedClient {
    /**
     * <p>Associate a lens to a workload.</p>
     */
    associateLenses(args: AssociateLensesCommandInput, options?: __HttpHandlerOptions): Promise<AssociateLensesCommandOutput>;
    associateLenses(args: AssociateLensesCommandInput, cb: (err: any, data?: AssociateLensesCommandOutput) => void): void;
    associateLenses(args: AssociateLensesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateLensesCommandOutput) => void): void;
    /**
     * <p>Create a milestone for an existing workload.</p>
     */
    createMilestone(args: CreateMilestoneCommandInput, options?: __HttpHandlerOptions): Promise<CreateMilestoneCommandOutput>;
    createMilestone(args: CreateMilestoneCommandInput, cb: (err: any, data?: CreateMilestoneCommandOutput) => void): void;
    createMilestone(args: CreateMilestoneCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMilestoneCommandOutput) => void): void;
    /**
     * <p>Create a new workload.</p>
     *         <p>The owner of a workload can share the workload with other AWS accounts and IAM users
     *             in the same AWS Region. Only the owner of a workload can delete it.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
     *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
     */
    createWorkload(args: CreateWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkloadCommandOutput>;
    createWorkload(args: CreateWorkloadCommandInput, cb: (err: any, data?: CreateWorkloadCommandOutput) => void): void;
    createWorkload(args: CreateWorkloadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkloadCommandOutput) => void): void;
    /**
     * <p>Create a workload share.</p>
     *         <p>The owner of a workload can share it with other AWS accounts and IAM users in the same
     *             AWS Region. Shared access to a workload is not removed until the workload invitation is
     *             deleted.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
     *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
     */
    createWorkloadShare(args: CreateWorkloadShareCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkloadShareCommandOutput>;
    createWorkloadShare(args: CreateWorkloadShareCommandInput, cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void): void;
    createWorkloadShare(args: CreateWorkloadShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void): void;
    /**
     * <p>Delete an existing workload.</p>
     */
    deleteWorkload(args: DeleteWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkloadCommandOutput>;
    deleteWorkload(args: DeleteWorkloadCommandInput, cb: (err: any, data?: DeleteWorkloadCommandOutput) => void): void;
    deleteWorkload(args: DeleteWorkloadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkloadCommandOutput) => void): void;
    /**
     * <p>Delete a workload share.</p>
     */
    deleteWorkloadShare(args: DeleteWorkloadShareCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkloadShareCommandOutput>;
    deleteWorkloadShare(args: DeleteWorkloadShareCommandInput, cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void): void;
    deleteWorkloadShare(args: DeleteWorkloadShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void): void;
    /**
     * <p>Disassociate a lens from a workload.</p>
     *         <note>
     *             <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
     *                 removed from a workload.</p>
     *         </note>
     */
    disassociateLenses(args: DisassociateLensesCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateLensesCommandOutput>;
    disassociateLenses(args: DisassociateLensesCommandInput, cb: (err: any, data?: DisassociateLensesCommandOutput) => void): void;
    disassociateLenses(args: DisassociateLensesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateLensesCommandOutput) => void): void;
    /**
     * <p>Get lens review.</p>
     */
    getAnswer(args: GetAnswerCommandInput, options?: __HttpHandlerOptions): Promise<GetAnswerCommandOutput>;
    getAnswer(args: GetAnswerCommandInput, cb: (err: any, data?: GetAnswerCommandOutput) => void): void;
    getAnswer(args: GetAnswerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAnswerCommandOutput) => void): void;
    /**
     * <p>Get lens review.</p>
     */
    getLensReview(args: GetLensReviewCommandInput, options?: __HttpHandlerOptions): Promise<GetLensReviewCommandOutput>;
    getLensReview(args: GetLensReviewCommandInput, cb: (err: any, data?: GetLensReviewCommandOutput) => void): void;
    getLensReview(args: GetLensReviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLensReviewCommandOutput) => void): void;
    /**
     * <p>Get lens review report.</p>
     */
    getLensReviewReport(args: GetLensReviewReportCommandInput, options?: __HttpHandlerOptions): Promise<GetLensReviewReportCommandOutput>;
    getLensReviewReport(args: GetLensReviewReportCommandInput, cb: (err: any, data?: GetLensReviewReportCommandOutput) => void): void;
    getLensReviewReport(args: GetLensReviewReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLensReviewReportCommandOutput) => void): void;
    /**
     * <p>Get lens version differences.</p>
     */
    getLensVersionDifference(args: GetLensVersionDifferenceCommandInput, options?: __HttpHandlerOptions): Promise<GetLensVersionDifferenceCommandOutput>;
    getLensVersionDifference(args: GetLensVersionDifferenceCommandInput, cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void): void;
    getLensVersionDifference(args: GetLensVersionDifferenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void): void;
    /**
     * <p>Get a milestone for an existing workload.</p>
     */
    getMilestone(args: GetMilestoneCommandInput, options?: __HttpHandlerOptions): Promise<GetMilestoneCommandOutput>;
    getMilestone(args: GetMilestoneCommandInput, cb: (err: any, data?: GetMilestoneCommandOutput) => void): void;
    getMilestone(args: GetMilestoneCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMilestoneCommandOutput) => void): void;
    /**
     * <p>Get an existing workload.</p>
     */
    getWorkload(args: GetWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkloadCommandOutput>;
    getWorkload(args: GetWorkloadCommandInput, cb: (err: any, data?: GetWorkloadCommandOutput) => void): void;
    getWorkload(args: GetWorkloadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkloadCommandOutput) => void): void;
    /**
     * <p>List of answers.</p>
     */
    listAnswers(args: ListAnswersCommandInput, options?: __HttpHandlerOptions): Promise<ListAnswersCommandOutput>;
    listAnswers(args: ListAnswersCommandInput, cb: (err: any, data?: ListAnswersCommandOutput) => void): void;
    listAnswers(args: ListAnswersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnswersCommandOutput) => void): void;
    /**
     * <p>List the available lenses.</p>
     */
    listLenses(args: ListLensesCommandInput, options?: __HttpHandlerOptions): Promise<ListLensesCommandOutput>;
    listLenses(args: ListLensesCommandInput, cb: (err: any, data?: ListLensesCommandOutput) => void): void;
    listLenses(args: ListLensesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLensesCommandOutput) => void): void;
    /**
     * <p>List lens review improvements.</p>
     */
    listLensReviewImprovements(args: ListLensReviewImprovementsCommandInput, options?: __HttpHandlerOptions): Promise<ListLensReviewImprovementsCommandOutput>;
    listLensReviewImprovements(args: ListLensReviewImprovementsCommandInput, cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void): void;
    listLensReviewImprovements(args: ListLensReviewImprovementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void): void;
    /**
     * <p>List lens reviews.</p>
     */
    listLensReviews(args: ListLensReviewsCommandInput, options?: __HttpHandlerOptions): Promise<ListLensReviewsCommandOutput>;
    listLensReviews(args: ListLensReviewsCommandInput, cb: (err: any, data?: ListLensReviewsCommandOutput) => void): void;
    listLensReviews(args: ListLensReviewsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLensReviewsCommandOutput) => void): void;
    /**
     * <p>List all milestones for an existing workload.</p>
     */
    listMilestones(args: ListMilestonesCommandInput, options?: __HttpHandlerOptions): Promise<ListMilestonesCommandOutput>;
    listMilestones(args: ListMilestonesCommandInput, cb: (err: any, data?: ListMilestonesCommandOutput) => void): void;
    listMilestones(args: ListMilestonesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMilestonesCommandOutput) => void): void;
    /**
     * <p>List lens notifications.</p>
     */
    listNotifications(args: ListNotificationsCommandInput, options?: __HttpHandlerOptions): Promise<ListNotificationsCommandOutput>;
    listNotifications(args: ListNotificationsCommandInput, cb: (err: any, data?: ListNotificationsCommandOutput) => void): void;
    listNotifications(args: ListNotificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotificationsCommandOutput) => void): void;
    /**
     * <p>List  the workload invitations.</p>
     */
    listShareInvitations(args: ListShareInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListShareInvitationsCommandOutput>;
    listShareInvitations(args: ListShareInvitationsCommandInput, cb: (err: any, data?: ListShareInvitationsCommandOutput) => void): void;
    listShareInvitations(args: ListShareInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListShareInvitationsCommandOutput) => void): void;
    /**
     * <p>List the tags for a resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>List workloads. Paginated.</p>
     */
    listWorkloads(args: ListWorkloadsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkloadsCommandOutput>;
    listWorkloads(args: ListWorkloadsCommandInput, cb: (err: any, data?: ListWorkloadsCommandOutput) => void): void;
    listWorkloads(args: ListWorkloadsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkloadsCommandOutput) => void): void;
    /**
     * <p>List the workload shares associated with the workload.</p>
     */
    listWorkloadShares(args: ListWorkloadSharesCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkloadSharesCommandOutput>;
    listWorkloadShares(args: ListWorkloadSharesCommandInput, cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void): void;
    listWorkloadShares(args: ListWorkloadSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update the answer to a specific question in a workload review.</p>
     */
    updateAnswer(args: UpdateAnswerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnswerCommandOutput>;
    updateAnswer(args: UpdateAnswerCommandInput, cb: (err: any, data?: UpdateAnswerCommandOutput) => void): void;
    updateAnswer(args: UpdateAnswerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnswerCommandOutput) => void): void;
    /**
     * <p>Update lens review.</p>
     */
    updateLensReview(args: UpdateLensReviewCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLensReviewCommandOutput>;
    updateLensReview(args: UpdateLensReviewCommandInput, cb: (err: any, data?: UpdateLensReviewCommandOutput) => void): void;
    updateLensReview(args: UpdateLensReviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLensReviewCommandOutput) => void): void;
    /**
     * <p>Update a workload invitation.</p>
     */
    updateShareInvitation(args: UpdateShareInvitationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateShareInvitationCommandOutput>;
    updateShareInvitation(args: UpdateShareInvitationCommandInput, cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void): void;
    updateShareInvitation(args: UpdateShareInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void): void;
    /**
     * <p>Update an existing workload.</p>
     */
    updateWorkload(args: UpdateWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkloadCommandOutput>;
    updateWorkload(args: UpdateWorkloadCommandInput, cb: (err: any, data?: UpdateWorkloadCommandOutput) => void): void;
    updateWorkload(args: UpdateWorkloadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkloadCommandOutput) => void): void;
    /**
     * <p>Update a workload share.</p>
     */
    updateWorkloadShare(args: UpdateWorkloadShareCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkloadShareCommandOutput>;
    updateWorkloadShare(args: UpdateWorkloadShareCommandInput, cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void): void;
    updateWorkloadShare(args: UpdateWorkloadShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void): void;
    /**
     * <p>Upgrade lens review.</p>
     */
    upgradeLensReview(args: UpgradeLensReviewCommandInput, options?: __HttpHandlerOptions): Promise<UpgradeLensReviewCommandOutput>;
    upgradeLensReview(args: UpgradeLensReviewCommandInput, cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void): void;
    upgradeLensReview(args: UpgradeLensReviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void): void;
}
