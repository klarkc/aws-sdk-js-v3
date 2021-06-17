"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRepositoryTriggerBranchNameException = exports.SameFileContentException = exports.PutFileOutput = exports.PutFileInput = exports.FileContentRequiredException = exports.ReactionValueRequiredException = exports.ReactionLimitExceededException = exports.PutCommentReactionInput = exports.InvalidReactionValueException = exports.PostCommentReplyOutput = exports.PostCommentReplyInput = exports.PostCommentForPullRequestOutput = exports.PostCommentForPullRequestInput = exports.PostCommentForComparedCommitOutput = exports.PostCommentForComparedCommitInput = exports.InvalidRelativeFileVersionEnumException = exports.InvalidFilePositionException = exports.InvalidFileLocationException = exports.CommentContentSizeLimitExceededException = exports.CommentContentRequiredException = exports.OverrideStatusRequiredException = exports.OverridePullRequestApprovalRulesInput = exports.OverrideAlreadySetException = exports.InvalidOverrideStatusException = exports.MergePullRequestByThreeWayOutput = exports.MergePullRequestByThreeWayInput = exports.MergePullRequestBySquashOutput = exports.MergePullRequestBySquashInput = exports.TipOfSourceReferenceIsDifferentException = exports.PullRequestApprovalRulesNotSatisfiedException = exports.MergePullRequestByFastForwardOutput = exports.MergePullRequestByFastForwardInput = exports.MergeBranchesByThreeWayOutput = exports.MergeBranchesByThreeWayInput = exports.MergeBranchesBySquashOutput = exports.MergeBranchesBySquashInput = exports.MergeBranchesByFastForwardOutput = exports.MergeBranchesByFastForwardInput = exports.InvalidTargetBranchException = exports.ResourceArnRequiredException = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.InvalidResourceArnException = exports.ListRepositoriesForApprovalRuleTemplateOutput = exports.ListRepositoriesForApprovalRuleTemplateInput = exports.ListRepositoriesOutput = exports.RepositoryNameIdPair = exports.ListRepositoriesInput = exports.SortByEnum = exports.OrderEnum = void 0;
exports.UpdateRepositoryNameInput = exports.UpdateRepositoryDescriptionInput = exports.UpdatePullRequestTitleOutput = exports.UpdatePullRequestTitleInput = exports.UpdatePullRequestStatusOutput = exports.UpdatePullRequestStatusInput = exports.PullRequestStatusRequiredException = exports.InvalidPullRequestStatusUpdateException = exports.UpdatePullRequestDescriptionOutput = exports.UpdatePullRequestDescriptionInput = exports.UpdatePullRequestApprovalStateInput = exports.PullRequestCannotBeApprovedByAuthorException = exports.MaximumNumberOfApprovalsExceededException = exports.InvalidApprovalStateException = exports.UpdatePullRequestApprovalRuleContentOutput = exports.UpdatePullRequestApprovalRuleContentInput = exports.UpdateDefaultBranchInput = exports.UpdateCommentOutput = exports.UpdateCommentInput = exports.CommentNotCreatedByCallerException = exports.UpdateApprovalRuleTemplateNameOutput = exports.UpdateApprovalRuleTemplateNameInput = exports.UpdateApprovalRuleTemplateDescriptionOutput = exports.UpdateApprovalRuleTemplateDescriptionInput = exports.UpdateApprovalRuleTemplateContentOutput = exports.UpdateApprovalRuleTemplateContentInput = exports.InvalidRuleContentSha256Exception = exports.UntagResourceInput = exports.TagKeysListRequiredException = exports.InvalidTagKeysListException = exports.TestRepositoryTriggersOutput = exports.RepositoryTriggerExecutionFailure = exports.TestRepositoryTriggersInput = exports.TagsMapRequiredException = exports.TagResourceInput = exports.RepositoryTriggersListRequiredException = exports.RepositoryTriggerNameRequiredException = exports.RepositoryTriggerEventsListRequiredException = exports.RepositoryTriggerDestinationArnRequiredException = exports.RepositoryTriggerBranchNameListRequiredException = exports.PutRepositoryTriggersOutput = exports.PutRepositoryTriggersInput = exports.MaximumRepositoryTriggersExceededException = exports.MaximumBranchesExceededException = exports.InvalidRepositoryTriggerRegionException = exports.InvalidRepositoryTriggerNameException = exports.InvalidRepositoryTriggerEventsException = exports.InvalidRepositoryTriggerDestinationArnException = exports.InvalidRepositoryTriggerCustomDataException = void 0;
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["ASCENDING"] = "ascending";
    OrderEnum["DESCENDING"] = "descending";
})(OrderEnum = exports.OrderEnum || (exports.OrderEnum = {}));
var SortByEnum;
(function (SortByEnum) {
    SortByEnum["MODIFIED_DATE"] = "lastModifiedDate";
    SortByEnum["REPOSITORY_NAME"] = "repositoryName";
})(SortByEnum = exports.SortByEnum || (exports.SortByEnum = {}));
var ListRepositoriesInput;
(function (ListRepositoriesInput) {
    /**
     * @internal
     */
    ListRepositoriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesInput = exports.ListRepositoriesInput || (exports.ListRepositoriesInput = {}));
var RepositoryNameIdPair;
(function (RepositoryNameIdPair) {
    /**
     * @internal
     */
    RepositoryNameIdPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNameIdPair = exports.RepositoryNameIdPair || (exports.RepositoryNameIdPair = {}));
var ListRepositoriesOutput;
(function (ListRepositoriesOutput) {
    /**
     * @internal
     */
    ListRepositoriesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesOutput = exports.ListRepositoriesOutput || (exports.ListRepositoriesOutput = {}));
var ListRepositoriesForApprovalRuleTemplateInput;
(function (ListRepositoriesForApprovalRuleTemplateInput) {
    /**
     * @internal
     */
    ListRepositoriesForApprovalRuleTemplateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesForApprovalRuleTemplateInput = exports.ListRepositoriesForApprovalRuleTemplateInput || (exports.ListRepositoriesForApprovalRuleTemplateInput = {}));
var ListRepositoriesForApprovalRuleTemplateOutput;
(function (ListRepositoriesForApprovalRuleTemplateOutput) {
    /**
     * @internal
     */
    ListRepositoriesForApprovalRuleTemplateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesForApprovalRuleTemplateOutput = exports.ListRepositoriesForApprovalRuleTemplateOutput || (exports.ListRepositoriesForApprovalRuleTemplateOutput = {}));
var InvalidResourceArnException;
(function (InvalidResourceArnException) {
    /**
     * @internal
     */
    InvalidResourceArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceArnException = exports.InvalidResourceArnException || (exports.InvalidResourceArnException = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ResourceArnRequiredException;
(function (ResourceArnRequiredException) {
    /**
     * @internal
     */
    ResourceArnRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceArnRequiredException = exports.ResourceArnRequiredException || (exports.ResourceArnRequiredException = {}));
var InvalidTargetBranchException;
(function (InvalidTargetBranchException) {
    /**
     * @internal
     */
    InvalidTargetBranchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetBranchException = exports.InvalidTargetBranchException || (exports.InvalidTargetBranchException = {}));
var MergeBranchesByFastForwardInput;
(function (MergeBranchesByFastForwardInput) {
    /**
     * @internal
     */
    MergeBranchesByFastForwardInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesByFastForwardInput = exports.MergeBranchesByFastForwardInput || (exports.MergeBranchesByFastForwardInput = {}));
var MergeBranchesByFastForwardOutput;
(function (MergeBranchesByFastForwardOutput) {
    /**
     * @internal
     */
    MergeBranchesByFastForwardOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesByFastForwardOutput = exports.MergeBranchesByFastForwardOutput || (exports.MergeBranchesByFastForwardOutput = {}));
var MergeBranchesBySquashInput;
(function (MergeBranchesBySquashInput) {
    /**
     * @internal
     */
    MergeBranchesBySquashInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesBySquashInput = exports.MergeBranchesBySquashInput || (exports.MergeBranchesBySquashInput = {}));
var MergeBranchesBySquashOutput;
(function (MergeBranchesBySquashOutput) {
    /**
     * @internal
     */
    MergeBranchesBySquashOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesBySquashOutput = exports.MergeBranchesBySquashOutput || (exports.MergeBranchesBySquashOutput = {}));
var MergeBranchesByThreeWayInput;
(function (MergeBranchesByThreeWayInput) {
    /**
     * @internal
     */
    MergeBranchesByThreeWayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesByThreeWayInput = exports.MergeBranchesByThreeWayInput || (exports.MergeBranchesByThreeWayInput = {}));
var MergeBranchesByThreeWayOutput;
(function (MergeBranchesByThreeWayOutput) {
    /**
     * @internal
     */
    MergeBranchesByThreeWayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeBranchesByThreeWayOutput = exports.MergeBranchesByThreeWayOutput || (exports.MergeBranchesByThreeWayOutput = {}));
var MergePullRequestByFastForwardInput;
(function (MergePullRequestByFastForwardInput) {
    /**
     * @internal
     */
    MergePullRequestByFastForwardInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestByFastForwardInput = exports.MergePullRequestByFastForwardInput || (exports.MergePullRequestByFastForwardInput = {}));
var MergePullRequestByFastForwardOutput;
(function (MergePullRequestByFastForwardOutput) {
    /**
     * @internal
     */
    MergePullRequestByFastForwardOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestByFastForwardOutput = exports.MergePullRequestByFastForwardOutput || (exports.MergePullRequestByFastForwardOutput = {}));
var PullRequestApprovalRulesNotSatisfiedException;
(function (PullRequestApprovalRulesNotSatisfiedException) {
    /**
     * @internal
     */
    PullRequestApprovalRulesNotSatisfiedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestApprovalRulesNotSatisfiedException = exports.PullRequestApprovalRulesNotSatisfiedException || (exports.PullRequestApprovalRulesNotSatisfiedException = {}));
var TipOfSourceReferenceIsDifferentException;
(function (TipOfSourceReferenceIsDifferentException) {
    /**
     * @internal
     */
    TipOfSourceReferenceIsDifferentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TipOfSourceReferenceIsDifferentException = exports.TipOfSourceReferenceIsDifferentException || (exports.TipOfSourceReferenceIsDifferentException = {}));
var MergePullRequestBySquashInput;
(function (MergePullRequestBySquashInput) {
    /**
     * @internal
     */
    MergePullRequestBySquashInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestBySquashInput = exports.MergePullRequestBySquashInput || (exports.MergePullRequestBySquashInput = {}));
var MergePullRequestBySquashOutput;
(function (MergePullRequestBySquashOutput) {
    /**
     * @internal
     */
    MergePullRequestBySquashOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestBySquashOutput = exports.MergePullRequestBySquashOutput || (exports.MergePullRequestBySquashOutput = {}));
var MergePullRequestByThreeWayInput;
(function (MergePullRequestByThreeWayInput) {
    /**
     * @internal
     */
    MergePullRequestByThreeWayInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestByThreeWayInput = exports.MergePullRequestByThreeWayInput || (exports.MergePullRequestByThreeWayInput = {}));
var MergePullRequestByThreeWayOutput;
(function (MergePullRequestByThreeWayOutput) {
    /**
     * @internal
     */
    MergePullRequestByThreeWayOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergePullRequestByThreeWayOutput = exports.MergePullRequestByThreeWayOutput || (exports.MergePullRequestByThreeWayOutput = {}));
var InvalidOverrideStatusException;
(function (InvalidOverrideStatusException) {
    /**
     * @internal
     */
    InvalidOverrideStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOverrideStatusException = exports.InvalidOverrideStatusException || (exports.InvalidOverrideStatusException = {}));
var OverrideAlreadySetException;
(function (OverrideAlreadySetException) {
    /**
     * @internal
     */
    OverrideAlreadySetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverrideAlreadySetException = exports.OverrideAlreadySetException || (exports.OverrideAlreadySetException = {}));
var OverridePullRequestApprovalRulesInput;
(function (OverridePullRequestApprovalRulesInput) {
    /**
     * @internal
     */
    OverridePullRequestApprovalRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverridePullRequestApprovalRulesInput = exports.OverridePullRequestApprovalRulesInput || (exports.OverridePullRequestApprovalRulesInput = {}));
var OverrideStatusRequiredException;
(function (OverrideStatusRequiredException) {
    /**
     * @internal
     */
    OverrideStatusRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverrideStatusRequiredException = exports.OverrideStatusRequiredException || (exports.OverrideStatusRequiredException = {}));
var CommentContentRequiredException;
(function (CommentContentRequiredException) {
    /**
     * @internal
     */
    CommentContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentContentRequiredException = exports.CommentContentRequiredException || (exports.CommentContentRequiredException = {}));
var CommentContentSizeLimitExceededException;
(function (CommentContentSizeLimitExceededException) {
    /**
     * @internal
     */
    CommentContentSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentContentSizeLimitExceededException = exports.CommentContentSizeLimitExceededException || (exports.CommentContentSizeLimitExceededException = {}));
var InvalidFileLocationException;
(function (InvalidFileLocationException) {
    /**
     * @internal
     */
    InvalidFileLocationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFileLocationException = exports.InvalidFileLocationException || (exports.InvalidFileLocationException = {}));
var InvalidFilePositionException;
(function (InvalidFilePositionException) {
    /**
     * @internal
     */
    InvalidFilePositionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilePositionException = exports.InvalidFilePositionException || (exports.InvalidFilePositionException = {}));
var InvalidRelativeFileVersionEnumException;
(function (InvalidRelativeFileVersionEnumException) {
    /**
     * @internal
     */
    InvalidRelativeFileVersionEnumException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRelativeFileVersionEnumException = exports.InvalidRelativeFileVersionEnumException || (exports.InvalidRelativeFileVersionEnumException = {}));
var PostCommentForComparedCommitInput;
(function (PostCommentForComparedCommitInput) {
    /**
     * @internal
     */
    PostCommentForComparedCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentForComparedCommitInput = exports.PostCommentForComparedCommitInput || (exports.PostCommentForComparedCommitInput = {}));
var PostCommentForComparedCommitOutput;
(function (PostCommentForComparedCommitOutput) {
    /**
     * @internal
     */
    PostCommentForComparedCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentForComparedCommitOutput = exports.PostCommentForComparedCommitOutput || (exports.PostCommentForComparedCommitOutput = {}));
var PostCommentForPullRequestInput;
(function (PostCommentForPullRequestInput) {
    /**
     * @internal
     */
    PostCommentForPullRequestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentForPullRequestInput = exports.PostCommentForPullRequestInput || (exports.PostCommentForPullRequestInput = {}));
var PostCommentForPullRequestOutput;
(function (PostCommentForPullRequestOutput) {
    /**
     * @internal
     */
    PostCommentForPullRequestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentForPullRequestOutput = exports.PostCommentForPullRequestOutput || (exports.PostCommentForPullRequestOutput = {}));
var PostCommentReplyInput;
(function (PostCommentReplyInput) {
    /**
     * @internal
     */
    PostCommentReplyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentReplyInput = exports.PostCommentReplyInput || (exports.PostCommentReplyInput = {}));
var PostCommentReplyOutput;
(function (PostCommentReplyOutput) {
    /**
     * @internal
     */
    PostCommentReplyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PostCommentReplyOutput = exports.PostCommentReplyOutput || (exports.PostCommentReplyOutput = {}));
var InvalidReactionValueException;
(function (InvalidReactionValueException) {
    /**
     * @internal
     */
    InvalidReactionValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReactionValueException = exports.InvalidReactionValueException || (exports.InvalidReactionValueException = {}));
var PutCommentReactionInput;
(function (PutCommentReactionInput) {
    /**
     * @internal
     */
    PutCommentReactionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCommentReactionInput = exports.PutCommentReactionInput || (exports.PutCommentReactionInput = {}));
var ReactionLimitExceededException;
(function (ReactionLimitExceededException) {
    /**
     * @internal
     */
    ReactionLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactionLimitExceededException = exports.ReactionLimitExceededException || (exports.ReactionLimitExceededException = {}));
var ReactionValueRequiredException;
(function (ReactionValueRequiredException) {
    /**
     * @internal
     */
    ReactionValueRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactionValueRequiredException = exports.ReactionValueRequiredException || (exports.ReactionValueRequiredException = {}));
var FileContentRequiredException;
(function (FileContentRequiredException) {
    /**
     * @internal
     */
    FileContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileContentRequiredException = exports.FileContentRequiredException || (exports.FileContentRequiredException = {}));
var PutFileInput;
(function (PutFileInput) {
    /**
     * @internal
     */
    PutFileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFileInput = exports.PutFileInput || (exports.PutFileInput = {}));
var PutFileOutput;
(function (PutFileOutput) {
    /**
     * @internal
     */
    PutFileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFileOutput = exports.PutFileOutput || (exports.PutFileOutput = {}));
var SameFileContentException;
(function (SameFileContentException) {
    /**
     * @internal
     */
    SameFileContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SameFileContentException = exports.SameFileContentException || (exports.SameFileContentException = {}));
var InvalidRepositoryTriggerBranchNameException;
(function (InvalidRepositoryTriggerBranchNameException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerBranchNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerBranchNameException = exports.InvalidRepositoryTriggerBranchNameException || (exports.InvalidRepositoryTriggerBranchNameException = {}));
var InvalidRepositoryTriggerCustomDataException;
(function (InvalidRepositoryTriggerCustomDataException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerCustomDataException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerCustomDataException = exports.InvalidRepositoryTriggerCustomDataException || (exports.InvalidRepositoryTriggerCustomDataException = {}));
var InvalidRepositoryTriggerDestinationArnException;
(function (InvalidRepositoryTriggerDestinationArnException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerDestinationArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerDestinationArnException = exports.InvalidRepositoryTriggerDestinationArnException || (exports.InvalidRepositoryTriggerDestinationArnException = {}));
var InvalidRepositoryTriggerEventsException;
(function (InvalidRepositoryTriggerEventsException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerEventsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerEventsException = exports.InvalidRepositoryTriggerEventsException || (exports.InvalidRepositoryTriggerEventsException = {}));
var InvalidRepositoryTriggerNameException;
(function (InvalidRepositoryTriggerNameException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerNameException = exports.InvalidRepositoryTriggerNameException || (exports.InvalidRepositoryTriggerNameException = {}));
var InvalidRepositoryTriggerRegionException;
(function (InvalidRepositoryTriggerRegionException) {
    /**
     * @internal
     */
    InvalidRepositoryTriggerRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryTriggerRegionException = exports.InvalidRepositoryTriggerRegionException || (exports.InvalidRepositoryTriggerRegionException = {}));
var MaximumBranchesExceededException;
(function (MaximumBranchesExceededException) {
    /**
     * @internal
     */
    MaximumBranchesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumBranchesExceededException = exports.MaximumBranchesExceededException || (exports.MaximumBranchesExceededException = {}));
var MaximumRepositoryTriggersExceededException;
(function (MaximumRepositoryTriggersExceededException) {
    /**
     * @internal
     */
    MaximumRepositoryTriggersExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumRepositoryTriggersExceededException = exports.MaximumRepositoryTriggersExceededException || (exports.MaximumRepositoryTriggersExceededException = {}));
var PutRepositoryTriggersInput;
(function (PutRepositoryTriggersInput) {
    /**
     * @internal
     */
    PutRepositoryTriggersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryTriggersInput = exports.PutRepositoryTriggersInput || (exports.PutRepositoryTriggersInput = {}));
var PutRepositoryTriggersOutput;
(function (PutRepositoryTriggersOutput) {
    /**
     * @internal
     */
    PutRepositoryTriggersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryTriggersOutput = exports.PutRepositoryTriggersOutput || (exports.PutRepositoryTriggersOutput = {}));
var RepositoryTriggerBranchNameListRequiredException;
(function (RepositoryTriggerBranchNameListRequiredException) {
    /**
     * @internal
     */
    RepositoryTriggerBranchNameListRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggerBranchNameListRequiredException = exports.RepositoryTriggerBranchNameListRequiredException || (exports.RepositoryTriggerBranchNameListRequiredException = {}));
var RepositoryTriggerDestinationArnRequiredException;
(function (RepositoryTriggerDestinationArnRequiredException) {
    /**
     * @internal
     */
    RepositoryTriggerDestinationArnRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggerDestinationArnRequiredException = exports.RepositoryTriggerDestinationArnRequiredException || (exports.RepositoryTriggerDestinationArnRequiredException = {}));
var RepositoryTriggerEventsListRequiredException;
(function (RepositoryTriggerEventsListRequiredException) {
    /**
     * @internal
     */
    RepositoryTriggerEventsListRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggerEventsListRequiredException = exports.RepositoryTriggerEventsListRequiredException || (exports.RepositoryTriggerEventsListRequiredException = {}));
var RepositoryTriggerNameRequiredException;
(function (RepositoryTriggerNameRequiredException) {
    /**
     * @internal
     */
    RepositoryTriggerNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggerNameRequiredException = exports.RepositoryTriggerNameRequiredException || (exports.RepositoryTriggerNameRequiredException = {}));
var RepositoryTriggersListRequiredException;
(function (RepositoryTriggersListRequiredException) {
    /**
     * @internal
     */
    RepositoryTriggersListRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggersListRequiredException = exports.RepositoryTriggersListRequiredException || (exports.RepositoryTriggersListRequiredException = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagsMapRequiredException;
(function (TagsMapRequiredException) {
    /**
     * @internal
     */
    TagsMapRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagsMapRequiredException = exports.TagsMapRequiredException || (exports.TagsMapRequiredException = {}));
var TestRepositoryTriggersInput;
(function (TestRepositoryTriggersInput) {
    /**
     * @internal
     */
    TestRepositoryTriggersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRepositoryTriggersInput = exports.TestRepositoryTriggersInput || (exports.TestRepositoryTriggersInput = {}));
var RepositoryTriggerExecutionFailure;
(function (RepositoryTriggerExecutionFailure) {
    /**
     * @internal
     */
    RepositoryTriggerExecutionFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTriggerExecutionFailure = exports.RepositoryTriggerExecutionFailure || (exports.RepositoryTriggerExecutionFailure = {}));
var TestRepositoryTriggersOutput;
(function (TestRepositoryTriggersOutput) {
    /**
     * @internal
     */
    TestRepositoryTriggersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRepositoryTriggersOutput = exports.TestRepositoryTriggersOutput || (exports.TestRepositoryTriggersOutput = {}));
var InvalidTagKeysListException;
(function (InvalidTagKeysListException) {
    /**
     * @internal
     */
    InvalidTagKeysListException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagKeysListException = exports.InvalidTagKeysListException || (exports.InvalidTagKeysListException = {}));
var TagKeysListRequiredException;
(function (TagKeysListRequiredException) {
    /**
     * @internal
     */
    TagKeysListRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagKeysListRequiredException = exports.TagKeysListRequiredException || (exports.TagKeysListRequiredException = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var InvalidRuleContentSha256Exception;
(function (InvalidRuleContentSha256Exception) {
    /**
     * @internal
     */
    InvalidRuleContentSha256Exception.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRuleContentSha256Exception = exports.InvalidRuleContentSha256Exception || (exports.InvalidRuleContentSha256Exception = {}));
var UpdateApprovalRuleTemplateContentInput;
(function (UpdateApprovalRuleTemplateContentInput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateContentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateContentInput = exports.UpdateApprovalRuleTemplateContentInput || (exports.UpdateApprovalRuleTemplateContentInput = {}));
var UpdateApprovalRuleTemplateContentOutput;
(function (UpdateApprovalRuleTemplateContentOutput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateContentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateContentOutput = exports.UpdateApprovalRuleTemplateContentOutput || (exports.UpdateApprovalRuleTemplateContentOutput = {}));
var UpdateApprovalRuleTemplateDescriptionInput;
(function (UpdateApprovalRuleTemplateDescriptionInput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateDescriptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateDescriptionInput = exports.UpdateApprovalRuleTemplateDescriptionInput || (exports.UpdateApprovalRuleTemplateDescriptionInput = {}));
var UpdateApprovalRuleTemplateDescriptionOutput;
(function (UpdateApprovalRuleTemplateDescriptionOutput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateDescriptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateDescriptionOutput = exports.UpdateApprovalRuleTemplateDescriptionOutput || (exports.UpdateApprovalRuleTemplateDescriptionOutput = {}));
var UpdateApprovalRuleTemplateNameInput;
(function (UpdateApprovalRuleTemplateNameInput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateNameInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateNameInput = exports.UpdateApprovalRuleTemplateNameInput || (exports.UpdateApprovalRuleTemplateNameInput = {}));
var UpdateApprovalRuleTemplateNameOutput;
(function (UpdateApprovalRuleTemplateNameOutput) {
    /**
     * @internal
     */
    UpdateApprovalRuleTemplateNameOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApprovalRuleTemplateNameOutput = exports.UpdateApprovalRuleTemplateNameOutput || (exports.UpdateApprovalRuleTemplateNameOutput = {}));
var CommentNotCreatedByCallerException;
(function (CommentNotCreatedByCallerException) {
    /**
     * @internal
     */
    CommentNotCreatedByCallerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentNotCreatedByCallerException = exports.CommentNotCreatedByCallerException || (exports.CommentNotCreatedByCallerException = {}));
var UpdateCommentInput;
(function (UpdateCommentInput) {
    /**
     * @internal
     */
    UpdateCommentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCommentInput = exports.UpdateCommentInput || (exports.UpdateCommentInput = {}));
var UpdateCommentOutput;
(function (UpdateCommentOutput) {
    /**
     * @internal
     */
    UpdateCommentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCommentOutput = exports.UpdateCommentOutput || (exports.UpdateCommentOutput = {}));
var UpdateDefaultBranchInput;
(function (UpdateDefaultBranchInput) {
    /**
     * @internal
     */
    UpdateDefaultBranchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDefaultBranchInput = exports.UpdateDefaultBranchInput || (exports.UpdateDefaultBranchInput = {}));
var UpdatePullRequestApprovalRuleContentInput;
(function (UpdatePullRequestApprovalRuleContentInput) {
    /**
     * @internal
     */
    UpdatePullRequestApprovalRuleContentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestApprovalRuleContentInput = exports.UpdatePullRequestApprovalRuleContentInput || (exports.UpdatePullRequestApprovalRuleContentInput = {}));
var UpdatePullRequestApprovalRuleContentOutput;
(function (UpdatePullRequestApprovalRuleContentOutput) {
    /**
     * @internal
     */
    UpdatePullRequestApprovalRuleContentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestApprovalRuleContentOutput = exports.UpdatePullRequestApprovalRuleContentOutput || (exports.UpdatePullRequestApprovalRuleContentOutput = {}));
var InvalidApprovalStateException;
(function (InvalidApprovalStateException) {
    /**
     * @internal
     */
    InvalidApprovalStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalStateException = exports.InvalidApprovalStateException || (exports.InvalidApprovalStateException = {}));
var MaximumNumberOfApprovalsExceededException;
(function (MaximumNumberOfApprovalsExceededException) {
    /**
     * @internal
     */
    MaximumNumberOfApprovalsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumNumberOfApprovalsExceededException = exports.MaximumNumberOfApprovalsExceededException || (exports.MaximumNumberOfApprovalsExceededException = {}));
var PullRequestCannotBeApprovedByAuthorException;
(function (PullRequestCannotBeApprovedByAuthorException) {
    /**
     * @internal
     */
    PullRequestCannotBeApprovedByAuthorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestCannotBeApprovedByAuthorException = exports.PullRequestCannotBeApprovedByAuthorException || (exports.PullRequestCannotBeApprovedByAuthorException = {}));
var UpdatePullRequestApprovalStateInput;
(function (UpdatePullRequestApprovalStateInput) {
    /**
     * @internal
     */
    UpdatePullRequestApprovalStateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestApprovalStateInput = exports.UpdatePullRequestApprovalStateInput || (exports.UpdatePullRequestApprovalStateInput = {}));
var UpdatePullRequestDescriptionInput;
(function (UpdatePullRequestDescriptionInput) {
    /**
     * @internal
     */
    UpdatePullRequestDescriptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestDescriptionInput = exports.UpdatePullRequestDescriptionInput || (exports.UpdatePullRequestDescriptionInput = {}));
var UpdatePullRequestDescriptionOutput;
(function (UpdatePullRequestDescriptionOutput) {
    /**
     * @internal
     */
    UpdatePullRequestDescriptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestDescriptionOutput = exports.UpdatePullRequestDescriptionOutput || (exports.UpdatePullRequestDescriptionOutput = {}));
var InvalidPullRequestStatusUpdateException;
(function (InvalidPullRequestStatusUpdateException) {
    /**
     * @internal
     */
    InvalidPullRequestStatusUpdateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPullRequestStatusUpdateException = exports.InvalidPullRequestStatusUpdateException || (exports.InvalidPullRequestStatusUpdateException = {}));
var PullRequestStatusRequiredException;
(function (PullRequestStatusRequiredException) {
    /**
     * @internal
     */
    PullRequestStatusRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestStatusRequiredException = exports.PullRequestStatusRequiredException || (exports.PullRequestStatusRequiredException = {}));
var UpdatePullRequestStatusInput;
(function (UpdatePullRequestStatusInput) {
    /**
     * @internal
     */
    UpdatePullRequestStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestStatusInput = exports.UpdatePullRequestStatusInput || (exports.UpdatePullRequestStatusInput = {}));
var UpdatePullRequestStatusOutput;
(function (UpdatePullRequestStatusOutput) {
    /**
     * @internal
     */
    UpdatePullRequestStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestStatusOutput = exports.UpdatePullRequestStatusOutput || (exports.UpdatePullRequestStatusOutput = {}));
var UpdatePullRequestTitleInput;
(function (UpdatePullRequestTitleInput) {
    /**
     * @internal
     */
    UpdatePullRequestTitleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestTitleInput = exports.UpdatePullRequestTitleInput || (exports.UpdatePullRequestTitleInput = {}));
var UpdatePullRequestTitleOutput;
(function (UpdatePullRequestTitleOutput) {
    /**
     * @internal
     */
    UpdatePullRequestTitleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePullRequestTitleOutput = exports.UpdatePullRequestTitleOutput || (exports.UpdatePullRequestTitleOutput = {}));
var UpdateRepositoryDescriptionInput;
(function (UpdateRepositoryDescriptionInput) {
    /**
     * @internal
     */
    UpdateRepositoryDescriptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryDescriptionInput = exports.UpdateRepositoryDescriptionInput || (exports.UpdateRepositoryDescriptionInput = {}));
var UpdateRepositoryNameInput;
(function (UpdateRepositoryNameInput) {
    /**
     * @internal
     */
    UpdateRepositoryNameInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryNameInput = exports.UpdateRepositoryNameInput || (exports.UpdateRepositoryNameInput = {}));
//# sourceMappingURL=models_1.js.map