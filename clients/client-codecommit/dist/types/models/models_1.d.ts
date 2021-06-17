import { ApprovalRule, ApprovalRuleTemplate, ApprovalState, Comment, ConflictDetailLevelTypeEnum, ConflictResolution, ConflictResolutionStrategyTypeEnum, FileModeTypeEnum, Location, OverrideStatus, PullRequest, PullRequestStatusEnum, RepositoryTrigger } from "./models_0";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum OrderEnum {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}
export declare enum SortByEnum {
    MODIFIED_DATE = "lastModifiedDate",
    REPOSITORY_NAME = "repositoryName"
}
/**
 * <p>Represents the input of a list repositories operation.</p>
 */
export interface ListRepositoriesInput {
    /**
     * <p>An enumeration token that allows the operation to batch the results of the operation.
     *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
     *             another page of 1,000 records is retrieved.</p>
     */
    nextToken?: string;
    /**
     * <p>The criteria used to sort the results of a list repositories operation.</p>
     */
    sortBy?: SortByEnum | string;
    /**
     * <p>The order in which to sort the results of a list repositories operation.</p>
     */
    order?: OrderEnum | string;
}
export declare namespace ListRepositoriesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesInput) => any;
}
/**
 * <p>Information about a repository name and ID.</p>
 */
export interface RepositoryNameIdPair {
    /**
     * <p>The name associated with the repository.</p>
     */
    repositoryName?: string;
    /**
     * <p>The ID associated with the repository.</p>
     */
    repositoryId?: string;
}
export declare namespace RepositoryNameIdPair {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryNameIdPair) => any;
}
/**
 * <p>Represents the output of a list repositories operation.</p>
 */
export interface ListRepositoriesOutput {
    /**
     * <p>Lists the repositories called by the list repositories operation.</p>
     */
    repositories?: RepositoryNameIdPair[];
    /**
     * <p>An enumeration token that allows the operation to batch the results of the operation.
     *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
     *             another page of 1,000 records is retrieved.</p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesOutput) => any;
}
export interface ListRepositoriesForApprovalRuleTemplateInput {
    /**
     * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
     */
    approvalRuleTemplateName: string | undefined;
    /**
     * <p>An enumeration token that, when provided in a request, returns the next batch of the
     *             results.</p>
     */
    nextToken?: string;
    /**
     * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
     */
    maxResults?: number;
}
export declare namespace ListRepositoriesForApprovalRuleTemplateInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesForApprovalRuleTemplateInput) => any;
}
export interface ListRepositoriesForApprovalRuleTemplateOutput {
    /**
     * <p>A list of repository names that are associated with the specified approval rule template.</p>
     */
    repositoryNames?: string[];
    /**
     * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesForApprovalRuleTemplateOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesForApprovalRuleTemplateOutput) => any;
}
/**
 * <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export interface InvalidResourceArnException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceArnException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidResourceArnException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceArnException) => any;
}
export interface ListTagsForResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
     *             about tags, if any.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>An enumeration token that, when provided in a request, returns the next batch of the
     *             results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceInput) => any;
}
export interface ListTagsForResourceOutput {
    /**
     * <p>A list of tag key and value pairs associated with the specified resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceOutput) => any;
}
/**
 * <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export interface ResourceArnRequiredException extends __SmithyException, $MetadataBearer {
    name: "ResourceArnRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace ResourceArnRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceArnRequiredException) => any;
}
/**
 * <p>The specified target branch is not valid.</p>
 */
export interface InvalidTargetBranchException extends __SmithyException, $MetadataBearer {
    name: "InvalidTargetBranchException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidTargetBranchException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidTargetBranchException) => any;
}
export interface MergeBranchesByFastForwardInput {
    /**
     * <p>The name of the repository where you want to merge two branches.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    sourceCommitSpecifier: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    destinationCommitSpecifier: string | undefined;
    /**
     * <p>The branch where the merge is applied.</p>
     */
    targetBranch?: string;
}
export declare namespace MergeBranchesByFastForwardInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesByFastForwardInput) => any;
}
export interface MergeBranchesByFastForwardOutput {
    /**
     * <p>The commit ID of the merge in the destination or target branch.</p>
     */
    commitId?: string;
    /**
     * <p>The tree ID of the merge in the destination or target branch.</p>
     */
    treeId?: string;
}
export declare namespace MergeBranchesByFastForwardOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesByFastForwardOutput) => any;
}
export interface MergeBranchesBySquashInput {
    /**
     * <p>The name of the repository where you want to merge two branches.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    sourceCommitSpecifier: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    destinationCommitSpecifier: string | undefined;
    /**
     * <p>The branch where the merge is applied. </p>
     */
    targetBranch?: string;
    /**
     * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
     *             which returns a not-mergeable result if the same file has differences in both branches.
     *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
     *             both branches has differences on the same line.</p>
     */
    conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;
    /**
     * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
     *             automatically merging two versions of a file. The default is NONE, which requires any
     *             conflicts to be resolved manually before the merge operation is successful.</p>
     */
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
    /**
     * <p>The name of the author who created the commit. This information is used as both the
     *             author and committer for the commit.</p>
     */
    authorName?: string;
    /**
     * <p>The email address of the person merging the branches. This information is used in the
     *             commit information for the merge.</p>
     */
    email?: string;
    /**
     * <p>The commit message for the merge.</p>
     */
    commitMessage?: string;
    /**
     * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
     *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
     *             created for empty folders. The default is false.</p>
     */
    keepEmptyFolders?: boolean;
    /**
     * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
     *             resolving conflicts during a merge.</p>
     */
    conflictResolution?: ConflictResolution;
}
export declare namespace MergeBranchesBySquashInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesBySquashInput) => any;
}
export interface MergeBranchesBySquashOutput {
    /**
     * <p>The commit ID of the merge in the destination or target branch.</p>
     */
    commitId?: string;
    /**
     * <p>The tree ID of the merge in the destination or target branch.</p>
     */
    treeId?: string;
}
export declare namespace MergeBranchesBySquashOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesBySquashOutput) => any;
}
export interface MergeBranchesByThreeWayInput {
    /**
     * <p>The name of the repository where you want to merge two branches.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    sourceCommitSpecifier: string | undefined;
    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
     *             (for example, a branch name or a full commit ID).</p>
     */
    destinationCommitSpecifier: string | undefined;
    /**
     * <p>The branch where the merge is applied. </p>
     */
    targetBranch?: string;
    /**
     * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
     *             which returns a not-mergeable result if the same file has differences in both branches.
     *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
     *             both branches has differences on the same line.</p>
     */
    conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;
    /**
     * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
     *             automatically merging two versions of a file. The default is NONE, which requires any
     *             conflicts to be resolved manually before the merge operation is successful.</p>
     */
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
    /**
     * <p>The name of the author who created the commit. This information is used as both the
     *             author and committer for the commit.</p>
     */
    authorName?: string;
    /**
     * <p>The email address of the person merging the branches. This information is used in the
     *             commit information for the merge.</p>
     */
    email?: string;
    /**
     * <p>The commit message to include in the commit information for the merge.</p>
     */
    commitMessage?: string;
    /**
     * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
     *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
     *             The default is false.</p>
     */
    keepEmptyFolders?: boolean;
    /**
     * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
     *             resolving conflicts during a merge.</p>
     */
    conflictResolution?: ConflictResolution;
}
export declare namespace MergeBranchesByThreeWayInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesByThreeWayInput) => any;
}
export interface MergeBranchesByThreeWayOutput {
    /**
     * <p>The commit ID of the merge in the destination or target branch.</p>
     */
    commitId?: string;
    /**
     * <p>The tree ID of the merge in the destination or target branch.</p>
     */
    treeId?: string;
}
export declare namespace MergeBranchesByThreeWayOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergeBranchesByThreeWayOutput) => any;
}
export interface MergePullRequestByFastForwardInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
     *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
     */
    sourceCommitId?: string;
}
export declare namespace MergePullRequestByFastForwardInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestByFastForwardInput) => any;
}
export interface MergePullRequestByFastForwardOutput {
    /**
     * <p>Information about the specified pull request, including the merge.</p>
     */
    pullRequest?: PullRequest;
}
export declare namespace MergePullRequestByFastForwardOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestByFastForwardOutput) => any;
}
/**
 * <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 */
export interface PullRequestApprovalRulesNotSatisfiedException extends __SmithyException, $MetadataBearer {
    name: "PullRequestApprovalRulesNotSatisfiedException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace PullRequestApprovalRulesNotSatisfiedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PullRequestApprovalRulesNotSatisfiedException) => any;
}
/**
 * <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 */
export interface TipOfSourceReferenceIsDifferentException extends __SmithyException, $MetadataBearer {
    name: "TipOfSourceReferenceIsDifferentException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace TipOfSourceReferenceIsDifferentException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TipOfSourceReferenceIsDifferentException) => any;
}
export interface MergePullRequestBySquashInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
     *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
     */
    sourceCommitId?: string;
    /**
     * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
     *             which returns a not-mergeable result if the same file has differences in both branches.
     *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
     *             both branches has differences on the same line.</p>
     */
    conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;
    /**
     * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
     *             automatically merging two versions of a file. The default is NONE, which requires any
     *             conflicts to be resolved manually before the merge operation is successful.</p>
     */
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
    /**
     * <p>The commit message to include in the commit information for the merge.</p>
     */
    commitMessage?: string;
    /**
     * <p>The name of the author who created the commit. This information is used as both the
     *             author and committer for the commit.</p>
     */
    authorName?: string;
    /**
     * <p>The email address of the person merging the branches. This information is used in the
     *             commit information for the merge.</p>
     */
    email?: string;
    /**
     * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
     *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
     *             The default is false.</p>
     */
    keepEmptyFolders?: boolean;
    /**
     * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
     *             resolving conflicts during a merge.</p>
     */
    conflictResolution?: ConflictResolution;
}
export declare namespace MergePullRequestBySquashInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestBySquashInput) => any;
}
export interface MergePullRequestBySquashOutput {
    /**
     * <p>Returns information about a pull request.</p>
     */
    pullRequest?: PullRequest;
}
export declare namespace MergePullRequestBySquashOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestBySquashOutput) => any;
}
export interface MergePullRequestByThreeWayInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
     *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
     */
    sourceCommitId?: string;
    /**
     * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
     *             which returns a not-mergeable result if the same file has differences in both branches.
     *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
     *             both branches has differences on the same line.</p>
     */
    conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;
    /**
     * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
     *             automatically merging two versions of a file. The default is NONE, which requires any
     *             conflicts to be resolved manually before the merge operation is successful.</p>
     */
    conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
    /**
     * <p>The commit message to include in the commit information for the merge.</p>
     */
    commitMessage?: string;
    /**
     * <p>The name of the author who created the commit. This information is used as both the
     *             author and committer for the commit.</p>
     */
    authorName?: string;
    /**
     * <p>The email address of the person merging the branches. This information is used in the
     *             commit information for the merge.</p>
     */
    email?: string;
    /**
     * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
     *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
     *             The default is false.</p>
     */
    keepEmptyFolders?: boolean;
    /**
     * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
     *             resolving conflicts during a merge.</p>
     */
    conflictResolution?: ConflictResolution;
}
export declare namespace MergePullRequestByThreeWayInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestByThreeWayInput) => any;
}
export interface MergePullRequestByThreeWayOutput {
    /**
     * <p>Returns information about a pull request.</p>
     */
    pullRequest?: PullRequest;
}
export declare namespace MergePullRequestByThreeWayOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MergePullRequestByThreeWayOutput) => any;
}
/**
 * <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 */
export interface InvalidOverrideStatusException extends __SmithyException, $MetadataBearer {
    name: "InvalidOverrideStatusException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidOverrideStatusException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidOverrideStatusException) => any;
}
/**
 * <p>The pull request has already had its approval rules set to override.</p>
 */
export interface OverrideAlreadySetException extends __SmithyException, $MetadataBearer {
    name: "OverrideAlreadySetException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace OverrideAlreadySetException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OverrideAlreadySetException) => any;
}
export interface OverridePullRequestApprovalRulesInput {
    /**
     * <p>The system-generated ID of the pull request for which you want to override all
     *             approval rule requirements. To get this information, use
     *             <a>GetPullRequest</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
     *             To get the revision ID, use GetPullRequest.</p>
     */
    revisionId: string | undefined;
    /**
     * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
     *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
     */
    overrideStatus: OverrideStatus | string | undefined;
}
export declare namespace OverridePullRequestApprovalRulesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OverridePullRequestApprovalRulesInput) => any;
}
/**
 * <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
 */
export interface OverrideStatusRequiredException extends __SmithyException, $MetadataBearer {
    name: "OverrideStatusRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace OverrideStatusRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OverrideStatusRequiredException) => any;
}
/**
 * <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 */
export interface CommentContentRequiredException extends __SmithyException, $MetadataBearer {
    name: "CommentContentRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace CommentContentRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommentContentRequiredException) => any;
}
/**
 * <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 */
export interface CommentContentSizeLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "CommentContentSizeLimitExceededException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace CommentContentSizeLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommentContentSizeLimitExceededException) => any;
}
/**
 * <p>The location of the file is not valid. Make sure that you include the file name and
 *             extension.</p>
 */
export interface InvalidFileLocationException extends __SmithyException, $MetadataBearer {
    name: "InvalidFileLocationException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidFileLocationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidFileLocationException) => any;
}
/**
 * <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 */
export interface InvalidFilePositionException extends __SmithyException, $MetadataBearer {
    name: "InvalidFilePositionException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidFilePositionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidFilePositionException) => any;
}
/**
 * <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
 */
export interface InvalidRelativeFileVersionEnumException extends __SmithyException, $MetadataBearer {
    name: "InvalidRelativeFileVersionEnumException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRelativeFileVersionEnumException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRelativeFileVersionEnumException) => any;
}
export interface PostCommentForComparedCommitInput {
    /**
     * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>To establish the directionality of the comparison, the full commit ID of the before
     *             commit. Required for commenting on any commit unless that commit is the initial
     *             commit.</p>
     */
    beforeCommitId?: string;
    /**
     * <p>To establish the directionality of the comparison, the full commit ID of the after
     *             commit.</p>
     */
    afterCommitId: string | undefined;
    /**
     * <p>The location of the comparison where you want to comment.</p>
     */
    location?: Location;
    /**
     * <p>The content of the comment you want to make.</p>
     */
    content: string | undefined;
    /**
     * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
     *             the request cannot be repeated with a changed parameter. If a request is received with
     *             the same parameters and a token is included, the request returns information about the
     *             initial request that used that token.</p>
     */
    clientRequestToken?: string;
}
export declare namespace PostCommentForComparedCommitInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentForComparedCommitInput) => any;
}
export interface PostCommentForComparedCommitOutput {
    /**
     * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
     */
    repositoryName?: string;
    /**
     * <p>In the directionality you established, the full commit ID of the before commit.</p>
     */
    beforeCommitId?: string;
    /**
     * <p>In the directionality you established, the full commit ID of the after commit.</p>
     */
    afterCommitId?: string;
    /**
     * <p>In the directionality you established, the blob ID of the before blob.</p>
     */
    beforeBlobId?: string;
    /**
     * <p>In the directionality you established, the blob ID of the after blob.</p>
     */
    afterBlobId?: string;
    /**
     * <p>The location of the comment in the comparison between the two commits.</p>
     */
    location?: Location;
    /**
     * <p>The content of the comment you posted.</p>
     */
    comment?: Comment;
}
export declare namespace PostCommentForComparedCommitOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentForComparedCommitOutput) => any;
}
export interface PostCommentForPullRequestInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The name of the repository where you want to post a comment on a pull request.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
     */
    beforeCommitId: string | undefined;
    /**
     * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
     */
    afterCommitId: string | undefined;
    /**
     * <p>The location of the change where you want to post your comment. If no location is
     *             provided, the comment is posted as a general comment on the pull request difference
     *             between the before commit ID and the after commit ID.</p>
     */
    location?: Location;
    /**
     * <p>The content of your comment on the change.</p>
     */
    content: string | undefined;
    /**
     * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
     *             the request cannot be repeated with a changed parameter. If a request is received with
     *             the same parameters and a token is included, the request returns information about the
     *             initial request that used that token.</p>
     */
    clientRequestToken?: string;
}
export declare namespace PostCommentForPullRequestInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentForPullRequestInput) => any;
}
export interface PostCommentForPullRequestOutput {
    /**
     * <p>The name of the repository where you posted a comment on a pull request.</p>
     */
    repositoryName?: string;
    /**
     * <p>The system-generated ID of the pull request. </p>
     */
    pullRequestId?: string;
    /**
     * <p>The full commit ID of the commit in the source branch used to create the pull request,
     *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
     */
    beforeCommitId?: string;
    /**
     * <p>The full commit ID of the commit in the destination branch where the pull request is
     *             merged.</p>
     */
    afterCommitId?: string;
    /**
     * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
     */
    beforeBlobId?: string;
    /**
     * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
     */
    afterBlobId?: string;
    /**
     * <p>The location of the change where you posted your comment.</p>
     */
    location?: Location;
    /**
     * <p>The content of the comment you posted.</p>
     */
    comment?: Comment;
}
export declare namespace PostCommentForPullRequestOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentForPullRequestOutput) => any;
}
export interface PostCommentReplyInput {
    /**
     * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
     *         or <a>GetCommentsForPullRequest</a>.</p>
     */
    inReplyTo: string | undefined;
    /**
     * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
     *             the request cannot be repeated with a changed parameter. If a request is received with
     *             the same parameters and a token is included, the request returns information about the
     *             initial request that used that token.</p>
     */
    clientRequestToken?: string;
    /**
     * <p>The contents of your reply to a comment.</p>
     */
    content: string | undefined;
}
export declare namespace PostCommentReplyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentReplyInput) => any;
}
export interface PostCommentReplyOutput {
    /**
     * <p>Information about the reply to a comment.</p>
     */
    comment?: Comment;
}
export declare namespace PostCommentReplyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PostCommentReplyOutput) => any;
}
/**
 * <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface InvalidReactionValueException extends __SmithyException, $MetadataBearer {
    name: "InvalidReactionValueException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidReactionValueException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidReactionValueException) => any;
}
export interface PutCommentReactionInput {
    /**
     * <p>The ID of the comment to which you want to add or update a reaction.</p>
     */
    commentId: string | undefined;
    /**
     * <p>The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none.
     *             For information about emoji reaction values supported in AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">AWS CodeCommit User Guide</a>.</p>
     */
    reactionValue: string | undefined;
}
export declare namespace PutCommentReactionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutCommentReactionInput) => any;
}
/**
 * <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 */
export interface ReactionLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ReactionLimitExceededException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace ReactionLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactionLimitExceededException) => any;
}
/**
 * <p>A reaction value is required. </p>
 */
export interface ReactionValueRequiredException extends __SmithyException, $MetadataBearer {
    name: "ReactionValueRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace ReactionValueRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactionValueRequiredException) => any;
}
/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 */
export interface FileContentRequiredException extends __SmithyException, $MetadataBearer {
    name: "FileContentRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace FileContentRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FileContentRequiredException) => any;
}
export interface PutFileInput {
    /**
     * <p>The name of the repository where you want to add or update the file.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The name of the branch where you want to add or update the file. If this is an empty
     *             repository, this branch is created.</p>
     */
    branchName: string | undefined;
    /**
     * <p>The content of the file, in binary object format. </p>
     */
    fileContent: Uint8Array | undefined;
    /**
     * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
     *         <note>
     *             <p>If the path does not currently exist in the repository, the path is created as part of adding
     *                 the file.</p>
     *          </note>
     */
    filePath: string | undefined;
    /**
     * <p>The file mode permissions of the blob. Valid file mode permissions are listed
     *             here.</p>
     */
    fileMode?: FileModeTypeEnum | string;
    /**
     * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
     *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
     *         <p>The commit ID must match the ID of the head commit at the time of the operation.
     *             Otherwise, an error occurs, and the file is not added or updated.</p>
     */
    parentCommitId?: string;
    /**
     * <p>A message about why this file was added or updated. Although it is optional, a message
     *             makes the commit history for your repository more useful.</p>
     */
    commitMessage?: string;
    /**
     * <p>The name of the person adding or updating the file. Although it is optional, a name
     *             makes the commit history for your repository more useful.</p>
     */
    name?: string;
    /**
     * <p>An email address for the person adding or updating the file.</p>
     */
    email?: string;
}
export declare namespace PutFileInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFileInput) => any;
}
export interface PutFileOutput {
    /**
     * <p>The full SHA ID of the commit that contains this file change.</p>
     */
    commitId: string | undefined;
    /**
     * <p>The ID of the blob, which is its SHA-1 pointer.</p>
     */
    blobId: string | undefined;
    /**
     * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
     */
    treeId: string | undefined;
}
export declare namespace PutFileOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFileOutput) => any;
}
/**
 * <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch
 *         that you specified.</p>
 */
export interface SameFileContentException extends __SmithyException, $MetadataBearer {
    name: "SameFileContentException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace SameFileContentException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SameFileContentException) => any;
}
/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerBranchNameException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerBranchNameException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerBranchNameException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerBranchNameException) => any;
}
/**
 * <p>The custom data provided for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerCustomDataException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerCustomDataException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerCustomDataException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerCustomDataException) => any;
}
/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 */
export interface InvalidRepositoryTriggerDestinationArnException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerDestinationArnException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerDestinationArnException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerDestinationArnException) => any;
}
/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 */
export interface InvalidRepositoryTriggerEventsException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerEventsException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerEventsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerEventsException) => any;
}
/**
 * <p>The name of the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerNameException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerNameException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerNameException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerNameException) => any;
}
/**
 * <p>The AWS Region for the trigger target does not match the AWS Region for the
 *             repository. Triggers must be created in the same Region as the target for the
 *             trigger.</p>
 */
export interface InvalidRepositoryTriggerRegionException extends __SmithyException, $MetadataBearer {
    name: "InvalidRepositoryTriggerRegionException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRepositoryTriggerRegionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRepositoryTriggerRegionException) => any;
}
/**
 * <p>The number of branches for the trigger was exceeded.</p>
 */
export interface MaximumBranchesExceededException extends __SmithyException, $MetadataBearer {
    name: "MaximumBranchesExceededException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace MaximumBranchesExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MaximumBranchesExceededException) => any;
}
/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 */
export interface MaximumRepositoryTriggersExceededException extends __SmithyException, $MetadataBearer {
    name: "MaximumRepositoryTriggersExceededException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace MaximumRepositoryTriggersExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MaximumRepositoryTriggersExceededException) => any;
}
/**
 * <p>Represents the input of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersInput {
    /**
     * <p>The name of the repository where you want to create or update the trigger.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The JSON block of configuration information for each trigger.</p>
     */
    triggers: RepositoryTrigger[] | undefined;
}
export declare namespace PutRepositoryTriggersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRepositoryTriggersInput) => any;
}
/**
 * <p>Represents the output of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersOutput {
    /**
     * <p>The system-generated unique ID for the create or update operation.</p>
     */
    configurationId?: string;
}
export declare namespace PutRepositoryTriggersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRepositoryTriggersOutput) => any;
}
/**
 * <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 */
export interface RepositoryTriggerBranchNameListRequiredException extends __SmithyException, $MetadataBearer {
    name: "RepositoryTriggerBranchNameListRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace RepositoryTriggerBranchNameListRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggerBranchNameListRequiredException) => any;
}
/**
 * <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 */
export interface RepositoryTriggerDestinationArnRequiredException extends __SmithyException, $MetadataBearer {
    name: "RepositoryTriggerDestinationArnRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace RepositoryTriggerDestinationArnRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggerDestinationArnRequiredException) => any;
}
/**
 * <p>At least one event for the trigger is required, but was not specified.</p>
 */
export interface RepositoryTriggerEventsListRequiredException extends __SmithyException, $MetadataBearer {
    name: "RepositoryTriggerEventsListRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace RepositoryTriggerEventsListRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggerEventsListRequiredException) => any;
}
/**
 * <p>A name for the trigger is required, but was not specified.</p>
 */
export interface RepositoryTriggerNameRequiredException extends __SmithyException, $MetadataBearer {
    name: "RepositoryTriggerNameRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace RepositoryTriggerNameRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggerNameRequiredException) => any;
}
/**
 * <p>The list of triggers for the repository is required, but was not specified.</p>
 */
export interface RepositoryTriggersListRequiredException extends __SmithyException, $MetadataBearer {
    name: "RepositoryTriggersListRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace RepositoryTriggersListRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggersListRequiredException) => any;
}
export interface TagResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The key-value pair to use when tagging this repository.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceInput) => any;
}
/**
 * <p>A map of tags is required.</p>
 */
export interface TagsMapRequiredException extends __SmithyException, $MetadataBearer {
    name: "TagsMapRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace TagsMapRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagsMapRequiredException) => any;
}
/**
 * <p>Represents the input of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersInput {
    /**
     * <p>The name of the repository in which to test the triggers.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The list of triggers to test.</p>
     */
    triggers: RepositoryTrigger[] | undefined;
}
export declare namespace TestRepositoryTriggersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestRepositoryTriggersInput) => any;
}
/**
 * <p>A trigger failed to run.</p>
 */
export interface RepositoryTriggerExecutionFailure {
    /**
     * <p>The name of the trigger that did not run.</p>
     */
    trigger?: string;
    /**
     * <p>Message information about the trigger that did not run.</p>
     */
    failureMessage?: string;
}
export declare namespace RepositoryTriggerExecutionFailure {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryTriggerExecutionFailure) => any;
}
/**
 * <p>Represents the output of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersOutput {
    /**
     * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
     */
    successfulExecutions?: string[];
    /**
     * <p>The list of triggers that were not tested. This list provides the names of the
     *             triggers that could not be tested, separated by commas.</p>
     */
    failedExecutions?: RepositoryTriggerExecutionFailure[];
}
export declare namespace TestRepositoryTriggersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TestRepositoryTriggersOutput) => any;
}
/**
 * <p>The list of tags is not valid.</p>
 */
export interface InvalidTagKeysListException extends __SmithyException, $MetadataBearer {
    name: "InvalidTagKeysListException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidTagKeysListException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidTagKeysListException) => any;
}
/**
 * <p>A list of tag keys is required. The list cannot be empty or null.</p>
 */
export interface TagKeysListRequiredException extends __SmithyException, $MetadataBearer {
    name: "TagKeysListRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace TagKeysListRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagKeysListRequiredException) => any;
}
export interface UntagResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag key for each tag that you want to remove from the resource.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceInput) => any;
}
/**
 * <p>The SHA-256 hash signature for the rule content is not valid.</p>
 */
export interface InvalidRuleContentSha256Exception extends __SmithyException, $MetadataBearer {
    name: "InvalidRuleContentSha256Exception";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRuleContentSha256Exception {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRuleContentSha256Exception) => any;
}
export interface UpdateApprovalRuleTemplateContentInput {
    /**
     * <p>The name of the approval rule template where you want to update the content of the rule. </p>
     */
    approvalRuleTemplateName: string | undefined;
    /**
     * <p>The content that replaces the existing content of the rule. Content statements must be
     *             complete. You cannot provide only the changes.</p>
     */
    newRuleContent: string | undefined;
    /**
     * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
     *             information by using
     *             <a>GetPullRequest</a>.</p>
     */
    existingRuleContentSha256?: string;
}
export declare namespace UpdateApprovalRuleTemplateContentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateContentInput) => any;
}
export interface UpdateApprovalRuleTemplateContentOutput {
    /**
     * <p>Returns information about an approval rule template.</p>
     */
    approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}
export declare namespace UpdateApprovalRuleTemplateContentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateContentOutput) => any;
}
export interface UpdateApprovalRuleTemplateDescriptionInput {
    /**
     * <p>The name of the template for which you want to update the description.</p>
     */
    approvalRuleTemplateName: string | undefined;
    /**
     * <p>The updated description of the approval rule template.</p>
     */
    approvalRuleTemplateDescription: string | undefined;
}
export declare namespace UpdateApprovalRuleTemplateDescriptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateDescriptionInput) => any;
}
export interface UpdateApprovalRuleTemplateDescriptionOutput {
    /**
     * <p>The structure and content of the updated approval rule template.</p>
     */
    approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}
export declare namespace UpdateApprovalRuleTemplateDescriptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateDescriptionOutput) => any;
}
export interface UpdateApprovalRuleTemplateNameInput {
    /**
     * <p>The current name of the approval rule template.</p>
     */
    oldApprovalRuleTemplateName: string | undefined;
    /**
     * <p>The new name you want to apply to the approval rule template.</p>
     */
    newApprovalRuleTemplateName: string | undefined;
}
export declare namespace UpdateApprovalRuleTemplateNameInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateNameInput) => any;
}
export interface UpdateApprovalRuleTemplateNameOutput {
    /**
     * <p>The structure and content of the updated approval rule template.</p>
     */
    approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}
export declare namespace UpdateApprovalRuleTemplateNameOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApprovalRuleTemplateNameOutput) => any;
}
/**
 * <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 */
export interface CommentNotCreatedByCallerException extends __SmithyException, $MetadataBearer {
    name: "CommentNotCreatedByCallerException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace CommentNotCreatedByCallerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommentNotCreatedByCallerException) => any;
}
export interface UpdateCommentInput {
    /**
     * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
     *             or <a>GetCommentsForPullRequest</a>.</p>
     */
    commentId: string | undefined;
    /**
     * <p>The updated content to replace the existing content of the comment.</p>
     */
    content: string | undefined;
}
export declare namespace UpdateCommentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCommentInput) => any;
}
export interface UpdateCommentOutput {
    /**
     * <p>Information about the updated comment.</p>
     */
    comment?: Comment;
}
export declare namespace UpdateCommentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCommentOutput) => any;
}
/**
 * <p>Represents the input of an update default branch operation.</p>
 */
export interface UpdateDefaultBranchInput {
    /**
     * <p>The name of the repository to set or change the default branch for.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The name of the branch to set as the default.</p>
     */
    defaultBranchName: string | undefined;
}
export declare namespace UpdateDefaultBranchInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDefaultBranchInput) => any;
}
export interface UpdatePullRequestApprovalRuleContentInput {
    /**
     * <p>The system-generated ID of the pull request.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The name of the approval rule you want to update.</p>
     */
    approvalRuleName: string | undefined;
    /**
     * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
     *             information by using
     *             <a>GetPullRequest</a>.</p>
     */
    existingRuleContentSha256?: string;
    /**
     * <p>The updated content for the approval rule.</p>
     *         <note>
     *             <p>When you update the content of the approval rule, you can specify approvers in an
     *                 approval pool in one of two ways:</p>
     *             <ul>
     *                <li>
     *                     <p>
     *                      <b>CodeCommitApprovers</b>: This option only
     *                         requires an AWS account and a resource. It can be used for both IAM users
     *                         and federated access users whose name matches the provided resource name.
     *                         This is a very powerful option that offers a great deal of flexibility. For
     *                         example, if you specify the AWS account <i>123456789012</i>
     *                         and <i>Mary_Major</i>, all of the following are counted as
     *                         approvals coming from that user:</p>
     *                     <ul>
     *                      <li>
     *                             <p>An IAM user in the account
     *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
     *                         </li>
     *                      <li>
     *                             <p>A federated user identified in IAM as Mary_Major
     *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
     *                         </li>
     *                   </ul>
     *                     <p>This option does not recognize an active session of someone assuming the
     *                         role of CodeCommitReview with a role session name of
     *                             <i>Mary_Major</i>
     *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
     *                         unless you include a wildcard (*Mary_Major).</p>
     *                 </li>
     *                <li>
     *                     <p>
     *                      <b>Fully qualified ARN</b>: This option allows
     *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
     *                         user or role. </p>
     *                 </li>
     *             </ul>
     *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
     *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
     *
     *         </note>
     */
    newRuleContent: string | undefined;
}
export declare namespace UpdatePullRequestApprovalRuleContentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestApprovalRuleContentInput) => any;
}
export interface UpdatePullRequestApprovalRuleContentOutput {
    /**
     * <p>Information about the updated approval rule.</p>
     */
    approvalRule: ApprovalRule | undefined;
}
export declare namespace UpdatePullRequestApprovalRuleContentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestApprovalRuleContentOutput) => any;
}
/**
 * <p>The state for the approval is not valid. Valid values include APPROVE and REVOKE. </p>
 */
export interface InvalidApprovalStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidApprovalStateException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidApprovalStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidApprovalStateException) => any;
}
/**
 * <p>The number of approvals required for the approval rule exceeds the maximum number allowed.</p>
 */
export interface MaximumNumberOfApprovalsExceededException extends __SmithyException, $MetadataBearer {
    name: "MaximumNumberOfApprovalsExceededException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace MaximumNumberOfApprovalsExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MaximumNumberOfApprovalsExceededException) => any;
}
/**
 * <p>The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull
 *         request that you created.</p>
 */
export interface PullRequestCannotBeApprovedByAuthorException extends __SmithyException, $MetadataBearer {
    name: "PullRequestCannotBeApprovedByAuthorException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace PullRequestCannotBeApprovedByAuthorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PullRequestCannotBeApprovedByAuthorException) => any;
}
export interface UpdatePullRequestApprovalStateInput {
    /**
     * <p>The system-generated ID of the pull request.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The system-generated ID of the revision.</p>
     */
    revisionId: string | undefined;
    /**
     * <p>The approval state to associate with the user on the pull request.</p>
     */
    approvalState: ApprovalState | string | undefined;
}
export declare namespace UpdatePullRequestApprovalStateInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestApprovalStateInput) => any;
}
export interface UpdatePullRequestDescriptionInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The updated content of the description for the pull request. This content replaces the
     *             existing description.</p>
     */
    description: string | undefined;
}
export declare namespace UpdatePullRequestDescriptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestDescriptionInput) => any;
}
export interface UpdatePullRequestDescriptionOutput {
    /**
     * <p>Information about the updated pull request.</p>
     */
    pullRequest: PullRequest | undefined;
}
export declare namespace UpdatePullRequestDescriptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestDescriptionOutput) => any;
}
/**
 * <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusUpdateException extends __SmithyException, $MetadataBearer {
    name: "InvalidPullRequestStatusUpdateException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidPullRequestStatusUpdateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPullRequestStatusUpdateException) => any;
}
/**
 * <p>A pull request status is required, but none was provided.</p>
 */
export interface PullRequestStatusRequiredException extends __SmithyException, $MetadataBearer {
    name: "PullRequestStatusRequiredException";
    $fault: "client";
    /**
     * <p>Any message associated with the exception.</p>
     */
    message?: string;
}
export declare namespace PullRequestStatusRequiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PullRequestStatusRequiredException) => any;
}
export interface UpdatePullRequestStatusInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The status of the pull request. The only valid operations are to update the status
     *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
     *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
     */
    pullRequestStatus: PullRequestStatusEnum | string | undefined;
}
export declare namespace UpdatePullRequestStatusInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestStatusInput) => any;
}
export interface UpdatePullRequestStatusOutput {
    /**
     * <p>Information about the pull request.</p>
     */
    pullRequest: PullRequest | undefined;
}
export declare namespace UpdatePullRequestStatusOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestStatusOutput) => any;
}
export interface UpdatePullRequestTitleInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string | undefined;
    /**
     * <p>The updated title of the pull request. This replaces the existing title.</p>
     */
    title: string | undefined;
}
export declare namespace UpdatePullRequestTitleInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestTitleInput) => any;
}
export interface UpdatePullRequestTitleOutput {
    /**
     * <p>Information about the updated pull request.</p>
     */
    pullRequest: PullRequest | undefined;
}
export declare namespace UpdatePullRequestTitleOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePullRequestTitleOutput) => any;
}
/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryDescriptionInput {
    /**
     * <p>The name of the repository to set or change the comment or description for.</p>
     */
    repositoryName: string | undefined;
    /**
     * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
     */
    repositoryDescription?: string;
}
export declare namespace UpdateRepositoryDescriptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRepositoryDescriptionInput) => any;
}
/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryNameInput {
    /**
     * <p>The current name of the repository.</p>
     */
    oldName: string | undefined;
    /**
     * <p>The new name for the repository.</p>
     */
    newName: string | undefined;
}
export declare namespace UpdateRepositoryNameInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRepositoryNameInput) => any;
}
