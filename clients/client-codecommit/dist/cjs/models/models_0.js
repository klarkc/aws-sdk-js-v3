"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictMetadata = exports.ObjectTypes = exports.ObjectTypeEnum = exports.MergeOperations = exports.ChangeTypeEnum = exports.IsBinaryFile = exports.FileSizes = exports.FileModes = exports.FileModeTypeEnum = exports.BatchDescribeMergeConflictsInput = exports.MergeOptionTypeEnum = exports.ConflictResolutionStrategyTypeEnum = exports.ConflictDetailLevelTypeEnum = exports.RepositoryNamesRequiredException = exports.MaximumRepositoryNamesExceededException = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesError = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesInput = exports.AuthorDoesNotExistException = exports.RepositoryNameRequiredException = exports.RepositoryDoesNotExistException = exports.MaximumRuleTemplatesAssociatedWithRepositoryException = exports.InvalidRepositoryNameException = exports.InvalidApprovalRuleTemplateNameException = exports.EncryptionKeyUnavailableException = exports.EncryptionKeyNotFoundException = exports.EncryptionKeyDisabledException = exports.EncryptionKeyAccessDeniedException = exports.EncryptionIntegrityChecksFailedException = exports.AssociateApprovalRuleTemplateWithRepositoryInput = exports.ApprovalStateRequiredException = exports.ApprovalStateChangedEventMetadata = exports.ApprovalRuleTemplateNameRequiredException = exports.ApprovalRuleTemplateNameAlreadyExistsException = exports.ApprovalRuleTemplateInUseException = exports.ApprovalRuleTemplateDoesNotExistException = exports.ApprovalRuleTemplateContentRequiredException = exports.ApprovalRuleTemplate = exports.ApprovalRuleOverriddenEventMetadata = exports.OverrideStatus = exports.ApprovalRuleNameRequiredException = exports.ApprovalRuleNameAlreadyExistsException = exports.ApprovalRuleEventMetadata = exports.ApprovalRuleDoesNotExistException = exports.ApprovalRuleContentRequiredException = exports.ApprovalRule = exports.OriginApprovalRuleTemplate = exports.Approval = exports.ApprovalState = exports.ActorDoesNotExistException = void 0;
exports.CreateBranchInput = exports.CommitIdRequiredException = exports.NumberOfRuleTemplatesExceededException = exports.InvalidApprovalRuleTemplateDescriptionException = exports.InvalidApprovalRuleTemplateContentException = exports.CreateApprovalRuleTemplateOutput = exports.CreateApprovalRuleTemplateInput = exports.ClientRequestTokenRequiredException = exports.CannotModifyApprovalRuleFromTemplateException = exports.CannotDeleteApprovalRuleFromTemplateException = exports.BranchNameRequiredException = exports.BranchNameIsTagNameException = exports.BranchNameExistsException = exports.BranchInfo = exports.BranchDoesNotExistException = exports.BlobMetadata = exports.BlobIdRequiredException = exports.BlobIdDoesNotExistException = exports.BeforeCommitIdAndAfterCommitIdAreSameException = exports.BatchGetRepositoriesOutput = exports.RepositoryMetadata = exports.BatchGetRepositoriesInput = exports.CommitIdsListRequiredException = exports.CommitIdsLimitExceededException = exports.BatchGetCommitsOutput = exports.BatchGetCommitsError = exports.Commit = exports.UserInfo = exports.BatchGetCommitsInput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesError = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = exports.TipsDivergenceExceededException = exports.MergeOptionRequiredException = exports.MaximumItemsToCompareExceededException = exports.MaximumFileContentToLoadExceededException = exports.InvalidMergeOptionException = exports.InvalidMaxMergeHunksException = exports.InvalidMaxConflictFilesException = exports.InvalidContinuationTokenException = exports.InvalidConflictResolutionStrategyException = exports.InvalidConflictDetailLevelException = exports.InvalidCommitException = exports.CommitRequiredException = exports.CommitDoesNotExistException = exports.BatchDescribeMergeConflictsOutput = exports.BatchDescribeMergeConflictsError = exports.Conflict = exports.MergeHunk = exports.MergeHunkDetail = void 0;
exports.MaximumOpenPullRequestsExceededException = exports.InvalidTitleException = exports.InvalidTargetsException = exports.InvalidTargetException = exports.InvalidReferenceNameException = exports.InvalidDescriptionException = exports.InvalidClientRequestTokenException = exports.IdempotencyParameterMismatchException = exports.CreatePullRequestOutput = exports.PullRequest = exports.PullRequestTarget = exports.MergeMetadata = exports.PullRequestStatusEnum = exports.CreatePullRequestInput = exports.Target = exports.SourceFileOrContentRequiredException = exports.SamePathRequestException = exports.RestrictedSourceFileException = exports.PutFileEntryConflictException = exports.PathRequiredException = exports.ParentCommitIdRequiredException = exports.ParentCommitIdOutdatedException = exports.ParentCommitDoesNotExistException = exports.NoChangeException = exports.NameLengthExceededException = exports.MaximumFileEntriesExceededException = exports.InvalidPathException = exports.InvalidParentCommitIdException = exports.InvalidFileModeException = exports.InvalidEmailException = exports.InvalidDeletionParameterException = exports.FolderContentSizeLimitExceededException = exports.FilePathConflictsWithSubmodulePathException = exports.FileNameConflictsWithDirectoryNameException = exports.FileModeRequiredException = exports.FileEntryRequiredException = exports.FileDoesNotExistException = exports.FileContentSizeLimitExceededException = exports.FileContentAndSourceFileSpecifiedException = exports.DirectoryNameConflictsWithFileNameException = exports.CreateCommitOutput = exports.FileMetadata = exports.CreateCommitInput = exports.SetFileModeEntry = exports.PutFileEntry = exports.SourceFileSpecifier = exports.DeleteFileEntry = exports.CommitMessageLengthExceededException = exports.InvalidCommitIdException = exports.InvalidBranchNameException = void 0;
exports.Comment = exports.DeleteCommentContentInput = exports.CommentIdRequiredException = exports.CommentDoesNotExistException = exports.CommentDeletedException = exports.DeleteBranchOutput = exports.DeleteBranchInput = exports.DefaultBranchCannotBeDeletedException = exports.DeleteApprovalRuleTemplateOutput = exports.DeleteApprovalRuleTemplateInput = exports.ReplacementTypeRequiredException = exports.ReplacementContentRequiredException = exports.MultipleConflictResolutionEntriesException = exports.MaximumConflictResolutionEntriesExceededException = exports.ManualMergeRequiredException = exports.InvalidReplacementTypeException = exports.InvalidReplacementContentException = exports.InvalidConflictResolutionException = exports.CreateUnreferencedMergeCommitOutput = exports.CreateUnreferencedMergeCommitInput = exports.ConflictResolution = exports.ReplaceContentEntry = exports.ReplacementTypeEnum = exports.ConcurrentReferenceUpdateException = exports.TooManyTagsException = exports.TagPolicyException = exports.RepositoryNameExistsException = exports.RepositoryLimitExceededException = exports.InvalidTagsMapException = exports.InvalidSystemTagUsageException = exports.InvalidRepositoryDescriptionException = exports.CreateRepositoryOutput = exports.CreateRepositoryInput = exports.PullRequestIdRequiredException = exports.PullRequestDoesNotExistException = exports.PullRequestAlreadyClosedException = exports.NumberOfRulesExceededException = exports.InvalidPullRequestIdException = exports.InvalidApprovalRuleNameException = exports.InvalidApprovalRuleContentException = exports.CreatePullRequestApprovalRuleOutput = exports.CreatePullRequestApprovalRuleInput = exports.TitleRequiredException = exports.TargetsRequiredException = exports.TargetRequiredException = exports.SourceAndDestinationAreSameException = exports.ReferenceTypeNotSupportedException = exports.ReferenceNameRequiredException = exports.ReferenceDoesNotExistException = exports.MultipleRepositoriesInPullRequestException = void 0;
exports.CommentsForPullRequest = exports.GetCommentsForPullRequestInput = exports.GetCommentsForComparedCommitOutput = exports.CommentsForComparedCommit = exports.Location = exports.RelativeFileVersionEnum = exports.GetCommentsForComparedCommitInput = exports.InvalidReactionUserArnException = exports.GetCommentReactionsOutput = exports.ReactionForComment = exports.ReactionValueFormats = exports.GetCommentReactionsInput = exports.GetCommentOutput = exports.GetCommentInput = exports.GetBranchOutput = exports.GetBranchInput = exports.InvalidBlobIdException = exports.GetBlobOutput = exports.GetBlobInput = exports.FileTooLargeException = exports.GetApprovalRuleTemplateOutput = exports.GetApprovalRuleTemplateInput = exports.RevisionNotCurrentException = exports.RevisionIdRequiredException = exports.InvalidRevisionIdException = exports.EvaluatePullRequestApprovalRulesOutput = exports.Evaluation = exports.EvaluatePullRequestApprovalRulesInput = exports.DisassociateApprovalRuleTemplateFromRepositoryInput = exports.InvalidPullRequestEventTypeException = exports.InvalidMaxResultsException = exports.InvalidActorArnException = exports.DescribePullRequestEventsOutput = exports.PullRequestEvent = exports.PullRequestStatusChangedEventMetadata = exports.PullRequestSourceReferenceUpdatedEventMetadata = exports.PullRequestMergedStateChangedEventMetadata = exports.PullRequestCreatedEventMetadata = exports.DescribePullRequestEventsInput = exports.PullRequestEventType = exports.DescribeMergeConflictsOutput = exports.DescribeMergeConflictsInput = exports.DeleteRepositoryOutput = exports.DeleteRepositoryInput = exports.DeletePullRequestApprovalRuleOutput = exports.DeletePullRequestApprovalRuleInput = exports.DeleteFileOutput = exports.DeleteFileInput = exports.InvalidCommentIdException = exports.DeleteCommentContentOutput = void 0;
exports.InvalidSortByException = exports.InvalidOrderException = exports.ListPullRequestsOutput = exports.ListPullRequestsInput = exports.InvalidPullRequestStatusException = exports.InvalidAuthorArnException = exports.ListBranchesOutput = exports.ListBranchesInput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryOutput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryInput = exports.ListApprovalRuleTemplatesOutput = exports.ListApprovalRuleTemplatesInput = exports.GetRepositoryTriggersOutput = exports.RepositoryTrigger = exports.RepositoryTriggerEventEnum = exports.GetRepositoryTriggersInput = exports.GetRepositoryOutput = exports.GetRepositoryInput = exports.GetPullRequestOverrideStateOutput = exports.GetPullRequestOverrideStateInput = exports.GetPullRequestApprovalStatesOutput = exports.GetPullRequestApprovalStatesInput = exports.GetPullRequestOutput = exports.GetPullRequestInput = exports.GetMergeOptionsOutput = exports.GetMergeOptionsInput = exports.InvalidSourceCommitSpecifierException = exports.InvalidDestinationCommitSpecifierException = exports.GetMergeConflictsOutput = exports.GetMergeConflictsInput = exports.GetMergeCommitOutput = exports.GetMergeCommitInput = exports.GetFolderOutput = exports.SymbolicLink = exports.SubModule = exports.Folder = exports.File = exports.GetFolderInput = exports.FolderDoesNotExistException = exports.GetFileOutput = exports.GetFileInput = exports.PathDoesNotExistException = exports.GetDifferencesOutput = exports.Difference = exports.GetDifferencesInput = exports.GetCommitOutput = exports.GetCommitInput = exports.CommitIdDoesNotExistException = exports.RepositoryNotAssociatedWithPullRequestException = exports.GetCommentsForPullRequestOutput = void 0;
var ActorDoesNotExistException;
(function (ActorDoesNotExistException) {
    /**
     * @internal
     */
    ActorDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActorDoesNotExistException = exports.ActorDoesNotExistException || (exports.ActorDoesNotExistException = {}));
var ApprovalState;
(function (ApprovalState) {
    ApprovalState["APPROVE"] = "APPROVE";
    ApprovalState["REVOKE"] = "REVOKE";
})(ApprovalState = exports.ApprovalState || (exports.ApprovalState = {}));
var Approval;
(function (Approval) {
    /**
     * @internal
     */
    Approval.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Approval = exports.Approval || (exports.Approval = {}));
var OriginApprovalRuleTemplate;
(function (OriginApprovalRuleTemplate) {
    /**
     * @internal
     */
    OriginApprovalRuleTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OriginApprovalRuleTemplate = exports.OriginApprovalRuleTemplate || (exports.OriginApprovalRuleTemplate = {}));
var ApprovalRule;
(function (ApprovalRule) {
    /**
     * @internal
     */
    ApprovalRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRule = exports.ApprovalRule || (exports.ApprovalRule = {}));
var ApprovalRuleContentRequiredException;
(function (ApprovalRuleContentRequiredException) {
    /**
     * @internal
     */
    ApprovalRuleContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleContentRequiredException = exports.ApprovalRuleContentRequiredException || (exports.ApprovalRuleContentRequiredException = {}));
var ApprovalRuleDoesNotExistException;
(function (ApprovalRuleDoesNotExistException) {
    /**
     * @internal
     */
    ApprovalRuleDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleDoesNotExistException = exports.ApprovalRuleDoesNotExistException || (exports.ApprovalRuleDoesNotExistException = {}));
var ApprovalRuleEventMetadata;
(function (ApprovalRuleEventMetadata) {
    /**
     * @internal
     */
    ApprovalRuleEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleEventMetadata = exports.ApprovalRuleEventMetadata || (exports.ApprovalRuleEventMetadata = {}));
var ApprovalRuleNameAlreadyExistsException;
(function (ApprovalRuleNameAlreadyExistsException) {
    /**
     * @internal
     */
    ApprovalRuleNameAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleNameAlreadyExistsException = exports.ApprovalRuleNameAlreadyExistsException || (exports.ApprovalRuleNameAlreadyExistsException = {}));
var ApprovalRuleNameRequiredException;
(function (ApprovalRuleNameRequiredException) {
    /**
     * @internal
     */
    ApprovalRuleNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleNameRequiredException = exports.ApprovalRuleNameRequiredException || (exports.ApprovalRuleNameRequiredException = {}));
var OverrideStatus;
(function (OverrideStatus) {
    OverrideStatus["OVERRIDE"] = "OVERRIDE";
    OverrideStatus["REVOKE"] = "REVOKE";
})(OverrideStatus = exports.OverrideStatus || (exports.OverrideStatus = {}));
var ApprovalRuleOverriddenEventMetadata;
(function (ApprovalRuleOverriddenEventMetadata) {
    /**
     * @internal
     */
    ApprovalRuleOverriddenEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleOverriddenEventMetadata = exports.ApprovalRuleOverriddenEventMetadata || (exports.ApprovalRuleOverriddenEventMetadata = {}));
var ApprovalRuleTemplate;
(function (ApprovalRuleTemplate) {
    /**
     * @internal
     */
    ApprovalRuleTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplate = exports.ApprovalRuleTemplate || (exports.ApprovalRuleTemplate = {}));
var ApprovalRuleTemplateContentRequiredException;
(function (ApprovalRuleTemplateContentRequiredException) {
    /**
     * @internal
     */
    ApprovalRuleTemplateContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplateContentRequiredException = exports.ApprovalRuleTemplateContentRequiredException || (exports.ApprovalRuleTemplateContentRequiredException = {}));
var ApprovalRuleTemplateDoesNotExistException;
(function (ApprovalRuleTemplateDoesNotExistException) {
    /**
     * @internal
     */
    ApprovalRuleTemplateDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplateDoesNotExistException = exports.ApprovalRuleTemplateDoesNotExistException || (exports.ApprovalRuleTemplateDoesNotExistException = {}));
var ApprovalRuleTemplateInUseException;
(function (ApprovalRuleTemplateInUseException) {
    /**
     * @internal
     */
    ApprovalRuleTemplateInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplateInUseException = exports.ApprovalRuleTemplateInUseException || (exports.ApprovalRuleTemplateInUseException = {}));
var ApprovalRuleTemplateNameAlreadyExistsException;
(function (ApprovalRuleTemplateNameAlreadyExistsException) {
    /**
     * @internal
     */
    ApprovalRuleTemplateNameAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplateNameAlreadyExistsException = exports.ApprovalRuleTemplateNameAlreadyExistsException || (exports.ApprovalRuleTemplateNameAlreadyExistsException = {}));
var ApprovalRuleTemplateNameRequiredException;
(function (ApprovalRuleTemplateNameRequiredException) {
    /**
     * @internal
     */
    ApprovalRuleTemplateNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalRuleTemplateNameRequiredException = exports.ApprovalRuleTemplateNameRequiredException || (exports.ApprovalRuleTemplateNameRequiredException = {}));
var ApprovalStateChangedEventMetadata;
(function (ApprovalStateChangedEventMetadata) {
    /**
     * @internal
     */
    ApprovalStateChangedEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalStateChangedEventMetadata = exports.ApprovalStateChangedEventMetadata || (exports.ApprovalStateChangedEventMetadata = {}));
var ApprovalStateRequiredException;
(function (ApprovalStateRequiredException) {
    /**
     * @internal
     */
    ApprovalStateRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalStateRequiredException = exports.ApprovalStateRequiredException || (exports.ApprovalStateRequiredException = {}));
var AssociateApprovalRuleTemplateWithRepositoryInput;
(function (AssociateApprovalRuleTemplateWithRepositoryInput) {
    /**
     * @internal
     */
    AssociateApprovalRuleTemplateWithRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateApprovalRuleTemplateWithRepositoryInput = exports.AssociateApprovalRuleTemplateWithRepositoryInput || (exports.AssociateApprovalRuleTemplateWithRepositoryInput = {}));
var EncryptionIntegrityChecksFailedException;
(function (EncryptionIntegrityChecksFailedException) {
    /**
     * @internal
     */
    EncryptionIntegrityChecksFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionIntegrityChecksFailedException = exports.EncryptionIntegrityChecksFailedException || (exports.EncryptionIntegrityChecksFailedException = {}));
var EncryptionKeyAccessDeniedException;
(function (EncryptionKeyAccessDeniedException) {
    /**
     * @internal
     */
    EncryptionKeyAccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKeyAccessDeniedException = exports.EncryptionKeyAccessDeniedException || (exports.EncryptionKeyAccessDeniedException = {}));
var EncryptionKeyDisabledException;
(function (EncryptionKeyDisabledException) {
    /**
     * @internal
     */
    EncryptionKeyDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKeyDisabledException = exports.EncryptionKeyDisabledException || (exports.EncryptionKeyDisabledException = {}));
var EncryptionKeyNotFoundException;
(function (EncryptionKeyNotFoundException) {
    /**
     * @internal
     */
    EncryptionKeyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKeyNotFoundException = exports.EncryptionKeyNotFoundException || (exports.EncryptionKeyNotFoundException = {}));
var EncryptionKeyUnavailableException;
(function (EncryptionKeyUnavailableException) {
    /**
     * @internal
     */
    EncryptionKeyUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKeyUnavailableException = exports.EncryptionKeyUnavailableException || (exports.EncryptionKeyUnavailableException = {}));
var InvalidApprovalRuleTemplateNameException;
(function (InvalidApprovalRuleTemplateNameException) {
    /**
     * @internal
     */
    InvalidApprovalRuleTemplateNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalRuleTemplateNameException = exports.InvalidApprovalRuleTemplateNameException || (exports.InvalidApprovalRuleTemplateNameException = {}));
var InvalidRepositoryNameException;
(function (InvalidRepositoryNameException) {
    /**
     * @internal
     */
    InvalidRepositoryNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryNameException = exports.InvalidRepositoryNameException || (exports.InvalidRepositoryNameException = {}));
var MaximumRuleTemplatesAssociatedWithRepositoryException;
(function (MaximumRuleTemplatesAssociatedWithRepositoryException) {
    /**
     * @internal
     */
    MaximumRuleTemplatesAssociatedWithRepositoryException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumRuleTemplatesAssociatedWithRepositoryException = exports.MaximumRuleTemplatesAssociatedWithRepositoryException || (exports.MaximumRuleTemplatesAssociatedWithRepositoryException = {}));
var RepositoryDoesNotExistException;
(function (RepositoryDoesNotExistException) {
    /**
     * @internal
     */
    RepositoryDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryDoesNotExistException = exports.RepositoryDoesNotExistException || (exports.RepositoryDoesNotExistException = {}));
var RepositoryNameRequiredException;
(function (RepositoryNameRequiredException) {
    /**
     * @internal
     */
    RepositoryNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNameRequiredException = exports.RepositoryNameRequiredException || (exports.RepositoryNameRequiredException = {}));
var AuthorDoesNotExistException;
(function (AuthorDoesNotExistException) {
    /**
     * @internal
     */
    AuthorDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorDoesNotExistException = exports.AuthorDoesNotExistException || (exports.AuthorDoesNotExistException = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesInput) {
    /**
     * @internal
     */
    BatchAssociateApprovalRuleTemplateWithRepositoriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateApprovalRuleTemplateWithRepositoriesInput = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesInput || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesInput = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesError;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesError) {
    /**
     * @internal
     */
    BatchAssociateApprovalRuleTemplateWithRepositoriesError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateApprovalRuleTemplateWithRepositoriesError = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesError || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesError = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesOutput) {
    /**
     * @internal
     */
    BatchAssociateApprovalRuleTemplateWithRepositoriesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = {}));
var MaximumRepositoryNamesExceededException;
(function (MaximumRepositoryNamesExceededException) {
    /**
     * @internal
     */
    MaximumRepositoryNamesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumRepositoryNamesExceededException = exports.MaximumRepositoryNamesExceededException || (exports.MaximumRepositoryNamesExceededException = {}));
var RepositoryNamesRequiredException;
(function (RepositoryNamesRequiredException) {
    /**
     * @internal
     */
    RepositoryNamesRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNamesRequiredException = exports.RepositoryNamesRequiredException || (exports.RepositoryNamesRequiredException = {}));
var ConflictDetailLevelTypeEnum;
(function (ConflictDetailLevelTypeEnum) {
    ConflictDetailLevelTypeEnum["FILE_LEVEL"] = "FILE_LEVEL";
    ConflictDetailLevelTypeEnum["LINE_LEVEL"] = "LINE_LEVEL";
})(ConflictDetailLevelTypeEnum = exports.ConflictDetailLevelTypeEnum || (exports.ConflictDetailLevelTypeEnum = {}));
var ConflictResolutionStrategyTypeEnum;
(function (ConflictResolutionStrategyTypeEnum) {
    ConflictResolutionStrategyTypeEnum["ACCEPT_DESTINATION"] = "ACCEPT_DESTINATION";
    ConflictResolutionStrategyTypeEnum["ACCEPT_SOURCE"] = "ACCEPT_SOURCE";
    ConflictResolutionStrategyTypeEnum["AUTOMERGE"] = "AUTOMERGE";
    ConflictResolutionStrategyTypeEnum["NONE"] = "NONE";
})(ConflictResolutionStrategyTypeEnum = exports.ConflictResolutionStrategyTypeEnum || (exports.ConflictResolutionStrategyTypeEnum = {}));
var MergeOptionTypeEnum;
(function (MergeOptionTypeEnum) {
    MergeOptionTypeEnum["FAST_FORWARD_MERGE"] = "FAST_FORWARD_MERGE";
    MergeOptionTypeEnum["SQUASH_MERGE"] = "SQUASH_MERGE";
    MergeOptionTypeEnum["THREE_WAY_MERGE"] = "THREE_WAY_MERGE";
})(MergeOptionTypeEnum = exports.MergeOptionTypeEnum || (exports.MergeOptionTypeEnum = {}));
var BatchDescribeMergeConflictsInput;
(function (BatchDescribeMergeConflictsInput) {
    /**
     * @internal
     */
    BatchDescribeMergeConflictsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDescribeMergeConflictsInput = exports.BatchDescribeMergeConflictsInput || (exports.BatchDescribeMergeConflictsInput = {}));
var FileModeTypeEnum;
(function (FileModeTypeEnum) {
    FileModeTypeEnum["EXECUTABLE"] = "EXECUTABLE";
    FileModeTypeEnum["NORMAL"] = "NORMAL";
    FileModeTypeEnum["SYMLINK"] = "SYMLINK";
})(FileModeTypeEnum = exports.FileModeTypeEnum || (exports.FileModeTypeEnum = {}));
var FileModes;
(function (FileModes) {
    /**
     * @internal
     */
    FileModes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileModes = exports.FileModes || (exports.FileModes = {}));
var FileSizes;
(function (FileSizes) {
    /**
     * @internal
     */
    FileSizes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSizes = exports.FileSizes || (exports.FileSizes = {}));
var IsBinaryFile;
(function (IsBinaryFile) {
    /**
     * @internal
     */
    IsBinaryFile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IsBinaryFile = exports.IsBinaryFile || (exports.IsBinaryFile = {}));
var ChangeTypeEnum;
(function (ChangeTypeEnum) {
    ChangeTypeEnum["ADDED"] = "A";
    ChangeTypeEnum["DELETED"] = "D";
    ChangeTypeEnum["MODIFIED"] = "M";
})(ChangeTypeEnum = exports.ChangeTypeEnum || (exports.ChangeTypeEnum = {}));
var MergeOperations;
(function (MergeOperations) {
    /**
     * @internal
     */
    MergeOperations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeOperations = exports.MergeOperations || (exports.MergeOperations = {}));
var ObjectTypeEnum;
(function (ObjectTypeEnum) {
    ObjectTypeEnum["DIRECTORY"] = "DIRECTORY";
    ObjectTypeEnum["FILE"] = "FILE";
    ObjectTypeEnum["GIT_LINK"] = "GIT_LINK";
    ObjectTypeEnum["SYMBOLIC_LINK"] = "SYMBOLIC_LINK";
})(ObjectTypeEnum = exports.ObjectTypeEnum || (exports.ObjectTypeEnum = {}));
var ObjectTypes;
(function (ObjectTypes) {
    /**
     * @internal
     */
    ObjectTypes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectTypes = exports.ObjectTypes || (exports.ObjectTypes = {}));
var ConflictMetadata;
(function (ConflictMetadata) {
    /**
     * @internal
     */
    ConflictMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictMetadata = exports.ConflictMetadata || (exports.ConflictMetadata = {}));
var MergeHunkDetail;
(function (MergeHunkDetail) {
    /**
     * @internal
     */
    MergeHunkDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeHunkDetail = exports.MergeHunkDetail || (exports.MergeHunkDetail = {}));
var MergeHunk;
(function (MergeHunk) {
    /**
     * @internal
     */
    MergeHunk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeHunk = exports.MergeHunk || (exports.MergeHunk = {}));
var Conflict;
(function (Conflict) {
    /**
     * @internal
     */
    Conflict.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Conflict = exports.Conflict || (exports.Conflict = {}));
var BatchDescribeMergeConflictsError;
(function (BatchDescribeMergeConflictsError) {
    /**
     * @internal
     */
    BatchDescribeMergeConflictsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDescribeMergeConflictsError = exports.BatchDescribeMergeConflictsError || (exports.BatchDescribeMergeConflictsError = {}));
var BatchDescribeMergeConflictsOutput;
(function (BatchDescribeMergeConflictsOutput) {
    /**
     * @internal
     */
    BatchDescribeMergeConflictsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDescribeMergeConflictsOutput = exports.BatchDescribeMergeConflictsOutput || (exports.BatchDescribeMergeConflictsOutput = {}));
var CommitDoesNotExistException;
(function (CommitDoesNotExistException) {
    /**
     * @internal
     */
    CommitDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitDoesNotExistException = exports.CommitDoesNotExistException || (exports.CommitDoesNotExistException = {}));
var CommitRequiredException;
(function (CommitRequiredException) {
    /**
     * @internal
     */
    CommitRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitRequiredException = exports.CommitRequiredException || (exports.CommitRequiredException = {}));
var InvalidCommitException;
(function (InvalidCommitException) {
    /**
     * @internal
     */
    InvalidCommitException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCommitException = exports.InvalidCommitException || (exports.InvalidCommitException = {}));
var InvalidConflictDetailLevelException;
(function (InvalidConflictDetailLevelException) {
    /**
     * @internal
     */
    InvalidConflictDetailLevelException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConflictDetailLevelException = exports.InvalidConflictDetailLevelException || (exports.InvalidConflictDetailLevelException = {}));
var InvalidConflictResolutionStrategyException;
(function (InvalidConflictResolutionStrategyException) {
    /**
     * @internal
     */
    InvalidConflictResolutionStrategyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConflictResolutionStrategyException = exports.InvalidConflictResolutionStrategyException || (exports.InvalidConflictResolutionStrategyException = {}));
var InvalidContinuationTokenException;
(function (InvalidContinuationTokenException) {
    /**
     * @internal
     */
    InvalidContinuationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidContinuationTokenException = exports.InvalidContinuationTokenException || (exports.InvalidContinuationTokenException = {}));
var InvalidMaxConflictFilesException;
(function (InvalidMaxConflictFilesException) {
    /**
     * @internal
     */
    InvalidMaxConflictFilesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMaxConflictFilesException = exports.InvalidMaxConflictFilesException || (exports.InvalidMaxConflictFilesException = {}));
var InvalidMaxMergeHunksException;
(function (InvalidMaxMergeHunksException) {
    /**
     * @internal
     */
    InvalidMaxMergeHunksException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMaxMergeHunksException = exports.InvalidMaxMergeHunksException || (exports.InvalidMaxMergeHunksException = {}));
var InvalidMergeOptionException;
(function (InvalidMergeOptionException) {
    /**
     * @internal
     */
    InvalidMergeOptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMergeOptionException = exports.InvalidMergeOptionException || (exports.InvalidMergeOptionException = {}));
var MaximumFileContentToLoadExceededException;
(function (MaximumFileContentToLoadExceededException) {
    /**
     * @internal
     */
    MaximumFileContentToLoadExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumFileContentToLoadExceededException = exports.MaximumFileContentToLoadExceededException || (exports.MaximumFileContentToLoadExceededException = {}));
var MaximumItemsToCompareExceededException;
(function (MaximumItemsToCompareExceededException) {
    /**
     * @internal
     */
    MaximumItemsToCompareExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumItemsToCompareExceededException = exports.MaximumItemsToCompareExceededException || (exports.MaximumItemsToCompareExceededException = {}));
var MergeOptionRequiredException;
(function (MergeOptionRequiredException) {
    /**
     * @internal
     */
    MergeOptionRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeOptionRequiredException = exports.MergeOptionRequiredException || (exports.MergeOptionRequiredException = {}));
var TipsDivergenceExceededException;
(function (TipsDivergenceExceededException) {
    /**
     * @internal
     */
    TipsDivergenceExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TipsDivergenceExceededException = exports.TipsDivergenceExceededException || (exports.TipsDivergenceExceededException = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesInput) {
    /**
     * @internal
     */
    BatchDisassociateApprovalRuleTemplateFromRepositoriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesError;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesError) {
    /**
     * @internal
     */
    BatchDisassociateApprovalRuleTemplateFromRepositoriesError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesError = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesError || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesError = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput) {
    /**
     * @internal
     */
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = {}));
var BatchGetCommitsInput;
(function (BatchGetCommitsInput) {
    /**
     * @internal
     */
    BatchGetCommitsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCommitsInput = exports.BatchGetCommitsInput || (exports.BatchGetCommitsInput = {}));
var UserInfo;
(function (UserInfo) {
    /**
     * @internal
     */
    UserInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserInfo = exports.UserInfo || (exports.UserInfo = {}));
var Commit;
(function (Commit) {
    /**
     * @internal
     */
    Commit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Commit = exports.Commit || (exports.Commit = {}));
var BatchGetCommitsError;
(function (BatchGetCommitsError) {
    /**
     * @internal
     */
    BatchGetCommitsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCommitsError = exports.BatchGetCommitsError || (exports.BatchGetCommitsError = {}));
var BatchGetCommitsOutput;
(function (BatchGetCommitsOutput) {
    /**
     * @internal
     */
    BatchGetCommitsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCommitsOutput = exports.BatchGetCommitsOutput || (exports.BatchGetCommitsOutput = {}));
var CommitIdsLimitExceededException;
(function (CommitIdsLimitExceededException) {
    /**
     * @internal
     */
    CommitIdsLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitIdsLimitExceededException = exports.CommitIdsLimitExceededException || (exports.CommitIdsLimitExceededException = {}));
var CommitIdsListRequiredException;
(function (CommitIdsListRequiredException) {
    /**
     * @internal
     */
    CommitIdsListRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitIdsListRequiredException = exports.CommitIdsListRequiredException || (exports.CommitIdsListRequiredException = {}));
var BatchGetRepositoriesInput;
(function (BatchGetRepositoriesInput) {
    /**
     * @internal
     */
    BatchGetRepositoriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetRepositoriesInput = exports.BatchGetRepositoriesInput || (exports.BatchGetRepositoriesInput = {}));
var RepositoryMetadata;
(function (RepositoryMetadata) {
    /**
     * @internal
     */
    RepositoryMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryMetadata = exports.RepositoryMetadata || (exports.RepositoryMetadata = {}));
var BatchGetRepositoriesOutput;
(function (BatchGetRepositoriesOutput) {
    /**
     * @internal
     */
    BatchGetRepositoriesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetRepositoriesOutput = exports.BatchGetRepositoriesOutput || (exports.BatchGetRepositoriesOutput = {}));
var BeforeCommitIdAndAfterCommitIdAreSameException;
(function (BeforeCommitIdAndAfterCommitIdAreSameException) {
    /**
     * @internal
     */
    BeforeCommitIdAndAfterCommitIdAreSameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BeforeCommitIdAndAfterCommitIdAreSameException = exports.BeforeCommitIdAndAfterCommitIdAreSameException || (exports.BeforeCommitIdAndAfterCommitIdAreSameException = {}));
var BlobIdDoesNotExistException;
(function (BlobIdDoesNotExistException) {
    /**
     * @internal
     */
    BlobIdDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlobIdDoesNotExistException = exports.BlobIdDoesNotExistException || (exports.BlobIdDoesNotExistException = {}));
var BlobIdRequiredException;
(function (BlobIdRequiredException) {
    /**
     * @internal
     */
    BlobIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlobIdRequiredException = exports.BlobIdRequiredException || (exports.BlobIdRequiredException = {}));
var BlobMetadata;
(function (BlobMetadata) {
    /**
     * @internal
     */
    BlobMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlobMetadata = exports.BlobMetadata || (exports.BlobMetadata = {}));
var BranchDoesNotExistException;
(function (BranchDoesNotExistException) {
    /**
     * @internal
     */
    BranchDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BranchDoesNotExistException = exports.BranchDoesNotExistException || (exports.BranchDoesNotExistException = {}));
var BranchInfo;
(function (BranchInfo) {
    /**
     * @internal
     */
    BranchInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BranchInfo = exports.BranchInfo || (exports.BranchInfo = {}));
var BranchNameExistsException;
(function (BranchNameExistsException) {
    /**
     * @internal
     */
    BranchNameExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BranchNameExistsException = exports.BranchNameExistsException || (exports.BranchNameExistsException = {}));
var BranchNameIsTagNameException;
(function (BranchNameIsTagNameException) {
    /**
     * @internal
     */
    BranchNameIsTagNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BranchNameIsTagNameException = exports.BranchNameIsTagNameException || (exports.BranchNameIsTagNameException = {}));
var BranchNameRequiredException;
(function (BranchNameRequiredException) {
    /**
     * @internal
     */
    BranchNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BranchNameRequiredException = exports.BranchNameRequiredException || (exports.BranchNameRequiredException = {}));
var CannotDeleteApprovalRuleFromTemplateException;
(function (CannotDeleteApprovalRuleFromTemplateException) {
    /**
     * @internal
     */
    CannotDeleteApprovalRuleFromTemplateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CannotDeleteApprovalRuleFromTemplateException = exports.CannotDeleteApprovalRuleFromTemplateException || (exports.CannotDeleteApprovalRuleFromTemplateException = {}));
var CannotModifyApprovalRuleFromTemplateException;
(function (CannotModifyApprovalRuleFromTemplateException) {
    /**
     * @internal
     */
    CannotModifyApprovalRuleFromTemplateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CannotModifyApprovalRuleFromTemplateException = exports.CannotModifyApprovalRuleFromTemplateException || (exports.CannotModifyApprovalRuleFromTemplateException = {}));
var ClientRequestTokenRequiredException;
(function (ClientRequestTokenRequiredException) {
    /**
     * @internal
     */
    ClientRequestTokenRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientRequestTokenRequiredException = exports.ClientRequestTokenRequiredException || (exports.ClientRequestTokenRequiredException = {}));
var CreateApprovalRuleTemplateInput;
(function (CreateApprovalRuleTemplateInput) {
    /**
     * @internal
     */
    CreateApprovalRuleTemplateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApprovalRuleTemplateInput = exports.CreateApprovalRuleTemplateInput || (exports.CreateApprovalRuleTemplateInput = {}));
var CreateApprovalRuleTemplateOutput;
(function (CreateApprovalRuleTemplateOutput) {
    /**
     * @internal
     */
    CreateApprovalRuleTemplateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApprovalRuleTemplateOutput = exports.CreateApprovalRuleTemplateOutput || (exports.CreateApprovalRuleTemplateOutput = {}));
var InvalidApprovalRuleTemplateContentException;
(function (InvalidApprovalRuleTemplateContentException) {
    /**
     * @internal
     */
    InvalidApprovalRuleTemplateContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalRuleTemplateContentException = exports.InvalidApprovalRuleTemplateContentException || (exports.InvalidApprovalRuleTemplateContentException = {}));
var InvalidApprovalRuleTemplateDescriptionException;
(function (InvalidApprovalRuleTemplateDescriptionException) {
    /**
     * @internal
     */
    InvalidApprovalRuleTemplateDescriptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalRuleTemplateDescriptionException = exports.InvalidApprovalRuleTemplateDescriptionException || (exports.InvalidApprovalRuleTemplateDescriptionException = {}));
var NumberOfRuleTemplatesExceededException;
(function (NumberOfRuleTemplatesExceededException) {
    /**
     * @internal
     */
    NumberOfRuleTemplatesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberOfRuleTemplatesExceededException = exports.NumberOfRuleTemplatesExceededException || (exports.NumberOfRuleTemplatesExceededException = {}));
var CommitIdRequiredException;
(function (CommitIdRequiredException) {
    /**
     * @internal
     */
    CommitIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitIdRequiredException = exports.CommitIdRequiredException || (exports.CommitIdRequiredException = {}));
var CreateBranchInput;
(function (CreateBranchInput) {
    /**
     * @internal
     */
    CreateBranchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBranchInput = exports.CreateBranchInput || (exports.CreateBranchInput = {}));
var InvalidBranchNameException;
(function (InvalidBranchNameException) {
    /**
     * @internal
     */
    InvalidBranchNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBranchNameException = exports.InvalidBranchNameException || (exports.InvalidBranchNameException = {}));
var InvalidCommitIdException;
(function (InvalidCommitIdException) {
    /**
     * @internal
     */
    InvalidCommitIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCommitIdException = exports.InvalidCommitIdException || (exports.InvalidCommitIdException = {}));
var CommitMessageLengthExceededException;
(function (CommitMessageLengthExceededException) {
    /**
     * @internal
     */
    CommitMessageLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitMessageLengthExceededException = exports.CommitMessageLengthExceededException || (exports.CommitMessageLengthExceededException = {}));
var DeleteFileEntry;
(function (DeleteFileEntry) {
    /**
     * @internal
     */
    DeleteFileEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileEntry = exports.DeleteFileEntry || (exports.DeleteFileEntry = {}));
var SourceFileSpecifier;
(function (SourceFileSpecifier) {
    /**
     * @internal
     */
    SourceFileSpecifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceFileSpecifier = exports.SourceFileSpecifier || (exports.SourceFileSpecifier = {}));
var PutFileEntry;
(function (PutFileEntry) {
    /**
     * @internal
     */
    PutFileEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFileEntry = exports.PutFileEntry || (exports.PutFileEntry = {}));
var SetFileModeEntry;
(function (SetFileModeEntry) {
    /**
     * @internal
     */
    SetFileModeEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetFileModeEntry = exports.SetFileModeEntry || (exports.SetFileModeEntry = {}));
var CreateCommitInput;
(function (CreateCommitInput) {
    /**
     * @internal
     */
    CreateCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCommitInput = exports.CreateCommitInput || (exports.CreateCommitInput = {}));
var FileMetadata;
(function (FileMetadata) {
    /**
     * @internal
     */
    FileMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileMetadata = exports.FileMetadata || (exports.FileMetadata = {}));
var CreateCommitOutput;
(function (CreateCommitOutput) {
    /**
     * @internal
     */
    CreateCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCommitOutput = exports.CreateCommitOutput || (exports.CreateCommitOutput = {}));
var DirectoryNameConflictsWithFileNameException;
(function (DirectoryNameConflictsWithFileNameException) {
    /**
     * @internal
     */
    DirectoryNameConflictsWithFileNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryNameConflictsWithFileNameException = exports.DirectoryNameConflictsWithFileNameException || (exports.DirectoryNameConflictsWithFileNameException = {}));
var FileContentAndSourceFileSpecifiedException;
(function (FileContentAndSourceFileSpecifiedException) {
    /**
     * @internal
     */
    FileContentAndSourceFileSpecifiedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileContentAndSourceFileSpecifiedException = exports.FileContentAndSourceFileSpecifiedException || (exports.FileContentAndSourceFileSpecifiedException = {}));
var FileContentSizeLimitExceededException;
(function (FileContentSizeLimitExceededException) {
    /**
     * @internal
     */
    FileContentSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileContentSizeLimitExceededException = exports.FileContentSizeLimitExceededException || (exports.FileContentSizeLimitExceededException = {}));
var FileDoesNotExistException;
(function (FileDoesNotExistException) {
    /**
     * @internal
     */
    FileDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileDoesNotExistException = exports.FileDoesNotExistException || (exports.FileDoesNotExistException = {}));
var FileEntryRequiredException;
(function (FileEntryRequiredException) {
    /**
     * @internal
     */
    FileEntryRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileEntryRequiredException = exports.FileEntryRequiredException || (exports.FileEntryRequiredException = {}));
var FileModeRequiredException;
(function (FileModeRequiredException) {
    /**
     * @internal
     */
    FileModeRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileModeRequiredException = exports.FileModeRequiredException || (exports.FileModeRequiredException = {}));
var FileNameConflictsWithDirectoryNameException;
(function (FileNameConflictsWithDirectoryNameException) {
    /**
     * @internal
     */
    FileNameConflictsWithDirectoryNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileNameConflictsWithDirectoryNameException = exports.FileNameConflictsWithDirectoryNameException || (exports.FileNameConflictsWithDirectoryNameException = {}));
var FilePathConflictsWithSubmodulePathException;
(function (FilePathConflictsWithSubmodulePathException) {
    /**
     * @internal
     */
    FilePathConflictsWithSubmodulePathException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilePathConflictsWithSubmodulePathException = exports.FilePathConflictsWithSubmodulePathException || (exports.FilePathConflictsWithSubmodulePathException = {}));
var FolderContentSizeLimitExceededException;
(function (FolderContentSizeLimitExceededException) {
    /**
     * @internal
     */
    FolderContentSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FolderContentSizeLimitExceededException = exports.FolderContentSizeLimitExceededException || (exports.FolderContentSizeLimitExceededException = {}));
var InvalidDeletionParameterException;
(function (InvalidDeletionParameterException) {
    /**
     * @internal
     */
    InvalidDeletionParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeletionParameterException = exports.InvalidDeletionParameterException || (exports.InvalidDeletionParameterException = {}));
var InvalidEmailException;
(function (InvalidEmailException) {
    /**
     * @internal
     */
    InvalidEmailException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEmailException = exports.InvalidEmailException || (exports.InvalidEmailException = {}));
var InvalidFileModeException;
(function (InvalidFileModeException) {
    /**
     * @internal
     */
    InvalidFileModeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFileModeException = exports.InvalidFileModeException || (exports.InvalidFileModeException = {}));
var InvalidParentCommitIdException;
(function (InvalidParentCommitIdException) {
    /**
     * @internal
     */
    InvalidParentCommitIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParentCommitIdException = exports.InvalidParentCommitIdException || (exports.InvalidParentCommitIdException = {}));
var InvalidPathException;
(function (InvalidPathException) {
    /**
     * @internal
     */
    InvalidPathException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPathException = exports.InvalidPathException || (exports.InvalidPathException = {}));
var MaximumFileEntriesExceededException;
(function (MaximumFileEntriesExceededException) {
    /**
     * @internal
     */
    MaximumFileEntriesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumFileEntriesExceededException = exports.MaximumFileEntriesExceededException || (exports.MaximumFileEntriesExceededException = {}));
var NameLengthExceededException;
(function (NameLengthExceededException) {
    /**
     * @internal
     */
    NameLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NameLengthExceededException = exports.NameLengthExceededException || (exports.NameLengthExceededException = {}));
var NoChangeException;
(function (NoChangeException) {
    /**
     * @internal
     */
    NoChangeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoChangeException = exports.NoChangeException || (exports.NoChangeException = {}));
var ParentCommitDoesNotExistException;
(function (ParentCommitDoesNotExistException) {
    /**
     * @internal
     */
    ParentCommitDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentCommitDoesNotExistException = exports.ParentCommitDoesNotExistException || (exports.ParentCommitDoesNotExistException = {}));
var ParentCommitIdOutdatedException;
(function (ParentCommitIdOutdatedException) {
    /**
     * @internal
     */
    ParentCommitIdOutdatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentCommitIdOutdatedException = exports.ParentCommitIdOutdatedException || (exports.ParentCommitIdOutdatedException = {}));
var ParentCommitIdRequiredException;
(function (ParentCommitIdRequiredException) {
    /**
     * @internal
     */
    ParentCommitIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentCommitIdRequiredException = exports.ParentCommitIdRequiredException || (exports.ParentCommitIdRequiredException = {}));
var PathRequiredException;
(function (PathRequiredException) {
    /**
     * @internal
     */
    PathRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PathRequiredException = exports.PathRequiredException || (exports.PathRequiredException = {}));
var PutFileEntryConflictException;
(function (PutFileEntryConflictException) {
    /**
     * @internal
     */
    PutFileEntryConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFileEntryConflictException = exports.PutFileEntryConflictException || (exports.PutFileEntryConflictException = {}));
var RestrictedSourceFileException;
(function (RestrictedSourceFileException) {
    /**
     * @internal
     */
    RestrictedSourceFileException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestrictedSourceFileException = exports.RestrictedSourceFileException || (exports.RestrictedSourceFileException = {}));
var SamePathRequestException;
(function (SamePathRequestException) {
    /**
     * @internal
     */
    SamePathRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamePathRequestException = exports.SamePathRequestException || (exports.SamePathRequestException = {}));
var SourceFileOrContentRequiredException;
(function (SourceFileOrContentRequiredException) {
    /**
     * @internal
     */
    SourceFileOrContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceFileOrContentRequiredException = exports.SourceFileOrContentRequiredException || (exports.SourceFileOrContentRequiredException = {}));
var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Target = exports.Target || (exports.Target = {}));
var CreatePullRequestInput;
(function (CreatePullRequestInput) {
    /**
     * @internal
     */
    CreatePullRequestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePullRequestInput = exports.CreatePullRequestInput || (exports.CreatePullRequestInput = {}));
var PullRequestStatusEnum;
(function (PullRequestStatusEnum) {
    PullRequestStatusEnum["CLOSED"] = "CLOSED";
    PullRequestStatusEnum["OPEN"] = "OPEN";
})(PullRequestStatusEnum = exports.PullRequestStatusEnum || (exports.PullRequestStatusEnum = {}));
var MergeMetadata;
(function (MergeMetadata) {
    /**
     * @internal
     */
    MergeMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeMetadata = exports.MergeMetadata || (exports.MergeMetadata = {}));
var PullRequestTarget;
(function (PullRequestTarget) {
    /**
     * @internal
     */
    PullRequestTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestTarget = exports.PullRequestTarget || (exports.PullRequestTarget = {}));
var PullRequest;
(function (PullRequest) {
    /**
     * @internal
     */
    PullRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequest = exports.PullRequest || (exports.PullRequest = {}));
var CreatePullRequestOutput;
(function (CreatePullRequestOutput) {
    /**
     * @internal
     */
    CreatePullRequestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePullRequestOutput = exports.CreatePullRequestOutput || (exports.CreatePullRequestOutput = {}));
var IdempotencyParameterMismatchException;
(function (IdempotencyParameterMismatchException) {
    /**
     * @internal
     */
    IdempotencyParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotencyParameterMismatchException = exports.IdempotencyParameterMismatchException || (exports.IdempotencyParameterMismatchException = {}));
var InvalidClientRequestTokenException;
(function (InvalidClientRequestTokenException) {
    /**
     * @internal
     */
    InvalidClientRequestTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClientRequestTokenException = exports.InvalidClientRequestTokenException || (exports.InvalidClientRequestTokenException = {}));
var InvalidDescriptionException;
(function (InvalidDescriptionException) {
    /**
     * @internal
     */
    InvalidDescriptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDescriptionException = exports.InvalidDescriptionException || (exports.InvalidDescriptionException = {}));
var InvalidReferenceNameException;
(function (InvalidReferenceNameException) {
    /**
     * @internal
     */
    InvalidReferenceNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReferenceNameException = exports.InvalidReferenceNameException || (exports.InvalidReferenceNameException = {}));
var InvalidTargetException;
(function (InvalidTargetException) {
    /**
     * @internal
     */
    InvalidTargetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetException = exports.InvalidTargetException || (exports.InvalidTargetException = {}));
var InvalidTargetsException;
(function (InvalidTargetsException) {
    /**
     * @internal
     */
    InvalidTargetsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTargetsException = exports.InvalidTargetsException || (exports.InvalidTargetsException = {}));
var InvalidTitleException;
(function (InvalidTitleException) {
    /**
     * @internal
     */
    InvalidTitleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTitleException = exports.InvalidTitleException || (exports.InvalidTitleException = {}));
var MaximumOpenPullRequestsExceededException;
(function (MaximumOpenPullRequestsExceededException) {
    /**
     * @internal
     */
    MaximumOpenPullRequestsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumOpenPullRequestsExceededException = exports.MaximumOpenPullRequestsExceededException || (exports.MaximumOpenPullRequestsExceededException = {}));
var MultipleRepositoriesInPullRequestException;
(function (MultipleRepositoriesInPullRequestException) {
    /**
     * @internal
     */
    MultipleRepositoriesInPullRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultipleRepositoriesInPullRequestException = exports.MultipleRepositoriesInPullRequestException || (exports.MultipleRepositoriesInPullRequestException = {}));
var ReferenceDoesNotExistException;
(function (ReferenceDoesNotExistException) {
    /**
     * @internal
     */
    ReferenceDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceDoesNotExistException = exports.ReferenceDoesNotExistException || (exports.ReferenceDoesNotExistException = {}));
var ReferenceNameRequiredException;
(function (ReferenceNameRequiredException) {
    /**
     * @internal
     */
    ReferenceNameRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceNameRequiredException = exports.ReferenceNameRequiredException || (exports.ReferenceNameRequiredException = {}));
var ReferenceTypeNotSupportedException;
(function (ReferenceTypeNotSupportedException) {
    /**
     * @internal
     */
    ReferenceTypeNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferenceTypeNotSupportedException = exports.ReferenceTypeNotSupportedException || (exports.ReferenceTypeNotSupportedException = {}));
var SourceAndDestinationAreSameException;
(function (SourceAndDestinationAreSameException) {
    /**
     * @internal
     */
    SourceAndDestinationAreSameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceAndDestinationAreSameException = exports.SourceAndDestinationAreSameException || (exports.SourceAndDestinationAreSameException = {}));
var TargetRequiredException;
(function (TargetRequiredException) {
    /**
     * @internal
     */
    TargetRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetRequiredException = exports.TargetRequiredException || (exports.TargetRequiredException = {}));
var TargetsRequiredException;
(function (TargetsRequiredException) {
    /**
     * @internal
     */
    TargetsRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetsRequiredException = exports.TargetsRequiredException || (exports.TargetsRequiredException = {}));
var TitleRequiredException;
(function (TitleRequiredException) {
    /**
     * @internal
     */
    TitleRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TitleRequiredException = exports.TitleRequiredException || (exports.TitleRequiredException = {}));
var CreatePullRequestApprovalRuleInput;
(function (CreatePullRequestApprovalRuleInput) {
    /**
     * @internal
     */
    CreatePullRequestApprovalRuleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePullRequestApprovalRuleInput = exports.CreatePullRequestApprovalRuleInput || (exports.CreatePullRequestApprovalRuleInput = {}));
var CreatePullRequestApprovalRuleOutput;
(function (CreatePullRequestApprovalRuleOutput) {
    /**
     * @internal
     */
    CreatePullRequestApprovalRuleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePullRequestApprovalRuleOutput = exports.CreatePullRequestApprovalRuleOutput || (exports.CreatePullRequestApprovalRuleOutput = {}));
var InvalidApprovalRuleContentException;
(function (InvalidApprovalRuleContentException) {
    /**
     * @internal
     */
    InvalidApprovalRuleContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalRuleContentException = exports.InvalidApprovalRuleContentException || (exports.InvalidApprovalRuleContentException = {}));
var InvalidApprovalRuleNameException;
(function (InvalidApprovalRuleNameException) {
    /**
     * @internal
     */
    InvalidApprovalRuleNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalRuleNameException = exports.InvalidApprovalRuleNameException || (exports.InvalidApprovalRuleNameException = {}));
var InvalidPullRequestIdException;
(function (InvalidPullRequestIdException) {
    /**
     * @internal
     */
    InvalidPullRequestIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPullRequestIdException = exports.InvalidPullRequestIdException || (exports.InvalidPullRequestIdException = {}));
var NumberOfRulesExceededException;
(function (NumberOfRulesExceededException) {
    /**
     * @internal
     */
    NumberOfRulesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberOfRulesExceededException = exports.NumberOfRulesExceededException || (exports.NumberOfRulesExceededException = {}));
var PullRequestAlreadyClosedException;
(function (PullRequestAlreadyClosedException) {
    /**
     * @internal
     */
    PullRequestAlreadyClosedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestAlreadyClosedException = exports.PullRequestAlreadyClosedException || (exports.PullRequestAlreadyClosedException = {}));
var PullRequestDoesNotExistException;
(function (PullRequestDoesNotExistException) {
    /**
     * @internal
     */
    PullRequestDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestDoesNotExistException = exports.PullRequestDoesNotExistException || (exports.PullRequestDoesNotExistException = {}));
var PullRequestIdRequiredException;
(function (PullRequestIdRequiredException) {
    /**
     * @internal
     */
    PullRequestIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestIdRequiredException = exports.PullRequestIdRequiredException || (exports.PullRequestIdRequiredException = {}));
var CreateRepositoryInput;
(function (CreateRepositoryInput) {
    /**
     * @internal
     */
    CreateRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryInput = exports.CreateRepositoryInput || (exports.CreateRepositoryInput = {}));
var CreateRepositoryOutput;
(function (CreateRepositoryOutput) {
    /**
     * @internal
     */
    CreateRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryOutput = exports.CreateRepositoryOutput || (exports.CreateRepositoryOutput = {}));
var InvalidRepositoryDescriptionException;
(function (InvalidRepositoryDescriptionException) {
    /**
     * @internal
     */
    InvalidRepositoryDescriptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRepositoryDescriptionException = exports.InvalidRepositoryDescriptionException || (exports.InvalidRepositoryDescriptionException = {}));
var InvalidSystemTagUsageException;
(function (InvalidSystemTagUsageException) {
    /**
     * @internal
     */
    InvalidSystemTagUsageException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSystemTagUsageException = exports.InvalidSystemTagUsageException || (exports.InvalidSystemTagUsageException = {}));
var InvalidTagsMapException;
(function (InvalidTagsMapException) {
    /**
     * @internal
     */
    InvalidTagsMapException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagsMapException = exports.InvalidTagsMapException || (exports.InvalidTagsMapException = {}));
var RepositoryLimitExceededException;
(function (RepositoryLimitExceededException) {
    /**
     * @internal
     */
    RepositoryLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryLimitExceededException = exports.RepositoryLimitExceededException || (exports.RepositoryLimitExceededException = {}));
var RepositoryNameExistsException;
(function (RepositoryNameExistsException) {
    /**
     * @internal
     */
    RepositoryNameExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNameExistsException = exports.RepositoryNameExistsException || (exports.RepositoryNameExistsException = {}));
var TagPolicyException;
(function (TagPolicyException) {
    /**
     * @internal
     */
    TagPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var ConcurrentReferenceUpdateException;
(function (ConcurrentReferenceUpdateException) {
    /**
     * @internal
     */
    ConcurrentReferenceUpdateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentReferenceUpdateException = exports.ConcurrentReferenceUpdateException || (exports.ConcurrentReferenceUpdateException = {}));
var ReplacementTypeEnum;
(function (ReplacementTypeEnum) {
    ReplacementTypeEnum["KEEP_BASE"] = "KEEP_BASE";
    ReplacementTypeEnum["KEEP_DESTINATION"] = "KEEP_DESTINATION";
    ReplacementTypeEnum["KEEP_SOURCE"] = "KEEP_SOURCE";
    ReplacementTypeEnum["USE_NEW_CONTENT"] = "USE_NEW_CONTENT";
})(ReplacementTypeEnum = exports.ReplacementTypeEnum || (exports.ReplacementTypeEnum = {}));
var ReplaceContentEntry;
(function (ReplaceContentEntry) {
    /**
     * @internal
     */
    ReplaceContentEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceContentEntry = exports.ReplaceContentEntry || (exports.ReplaceContentEntry = {}));
var ConflictResolution;
(function (ConflictResolution) {
    /**
     * @internal
     */
    ConflictResolution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictResolution = exports.ConflictResolution || (exports.ConflictResolution = {}));
var CreateUnreferencedMergeCommitInput;
(function (CreateUnreferencedMergeCommitInput) {
    /**
     * @internal
     */
    CreateUnreferencedMergeCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUnreferencedMergeCommitInput = exports.CreateUnreferencedMergeCommitInput || (exports.CreateUnreferencedMergeCommitInput = {}));
var CreateUnreferencedMergeCommitOutput;
(function (CreateUnreferencedMergeCommitOutput) {
    /**
     * @internal
     */
    CreateUnreferencedMergeCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUnreferencedMergeCommitOutput = exports.CreateUnreferencedMergeCommitOutput || (exports.CreateUnreferencedMergeCommitOutput = {}));
var InvalidConflictResolutionException;
(function (InvalidConflictResolutionException) {
    /**
     * @internal
     */
    InvalidConflictResolutionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConflictResolutionException = exports.InvalidConflictResolutionException || (exports.InvalidConflictResolutionException = {}));
var InvalidReplacementContentException;
(function (InvalidReplacementContentException) {
    /**
     * @internal
     */
    InvalidReplacementContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReplacementContentException = exports.InvalidReplacementContentException || (exports.InvalidReplacementContentException = {}));
var InvalidReplacementTypeException;
(function (InvalidReplacementTypeException) {
    /**
     * @internal
     */
    InvalidReplacementTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReplacementTypeException = exports.InvalidReplacementTypeException || (exports.InvalidReplacementTypeException = {}));
var ManualMergeRequiredException;
(function (ManualMergeRequiredException) {
    /**
     * @internal
     */
    ManualMergeRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManualMergeRequiredException = exports.ManualMergeRequiredException || (exports.ManualMergeRequiredException = {}));
var MaximumConflictResolutionEntriesExceededException;
(function (MaximumConflictResolutionEntriesExceededException) {
    /**
     * @internal
     */
    MaximumConflictResolutionEntriesExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumConflictResolutionEntriesExceededException = exports.MaximumConflictResolutionEntriesExceededException || (exports.MaximumConflictResolutionEntriesExceededException = {}));
var MultipleConflictResolutionEntriesException;
(function (MultipleConflictResolutionEntriesException) {
    /**
     * @internal
     */
    MultipleConflictResolutionEntriesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultipleConflictResolutionEntriesException = exports.MultipleConflictResolutionEntriesException || (exports.MultipleConflictResolutionEntriesException = {}));
var ReplacementContentRequiredException;
(function (ReplacementContentRequiredException) {
    /**
     * @internal
     */
    ReplacementContentRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplacementContentRequiredException = exports.ReplacementContentRequiredException || (exports.ReplacementContentRequiredException = {}));
var ReplacementTypeRequiredException;
(function (ReplacementTypeRequiredException) {
    /**
     * @internal
     */
    ReplacementTypeRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplacementTypeRequiredException = exports.ReplacementTypeRequiredException || (exports.ReplacementTypeRequiredException = {}));
var DeleteApprovalRuleTemplateInput;
(function (DeleteApprovalRuleTemplateInput) {
    /**
     * @internal
     */
    DeleteApprovalRuleTemplateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApprovalRuleTemplateInput = exports.DeleteApprovalRuleTemplateInput || (exports.DeleteApprovalRuleTemplateInput = {}));
var DeleteApprovalRuleTemplateOutput;
(function (DeleteApprovalRuleTemplateOutput) {
    /**
     * @internal
     */
    DeleteApprovalRuleTemplateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApprovalRuleTemplateOutput = exports.DeleteApprovalRuleTemplateOutput || (exports.DeleteApprovalRuleTemplateOutput = {}));
var DefaultBranchCannotBeDeletedException;
(function (DefaultBranchCannotBeDeletedException) {
    /**
     * @internal
     */
    DefaultBranchCannotBeDeletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultBranchCannotBeDeletedException = exports.DefaultBranchCannotBeDeletedException || (exports.DefaultBranchCannotBeDeletedException = {}));
var DeleteBranchInput;
(function (DeleteBranchInput) {
    /**
     * @internal
     */
    DeleteBranchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBranchInput = exports.DeleteBranchInput || (exports.DeleteBranchInput = {}));
var DeleteBranchOutput;
(function (DeleteBranchOutput) {
    /**
     * @internal
     */
    DeleteBranchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBranchOutput = exports.DeleteBranchOutput || (exports.DeleteBranchOutput = {}));
var CommentDeletedException;
(function (CommentDeletedException) {
    /**
     * @internal
     */
    CommentDeletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentDeletedException = exports.CommentDeletedException || (exports.CommentDeletedException = {}));
var CommentDoesNotExistException;
(function (CommentDoesNotExistException) {
    /**
     * @internal
     */
    CommentDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentDoesNotExistException = exports.CommentDoesNotExistException || (exports.CommentDoesNotExistException = {}));
var CommentIdRequiredException;
(function (CommentIdRequiredException) {
    /**
     * @internal
     */
    CommentIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentIdRequiredException = exports.CommentIdRequiredException || (exports.CommentIdRequiredException = {}));
var DeleteCommentContentInput;
(function (DeleteCommentContentInput) {
    /**
     * @internal
     */
    DeleteCommentContentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCommentContentInput = exports.DeleteCommentContentInput || (exports.DeleteCommentContentInput = {}));
var Comment;
(function (Comment) {
    /**
     * @internal
     */
    Comment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Comment = exports.Comment || (exports.Comment = {}));
var DeleteCommentContentOutput;
(function (DeleteCommentContentOutput) {
    /**
     * @internal
     */
    DeleteCommentContentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCommentContentOutput = exports.DeleteCommentContentOutput || (exports.DeleteCommentContentOutput = {}));
var InvalidCommentIdException;
(function (InvalidCommentIdException) {
    /**
     * @internal
     */
    InvalidCommentIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCommentIdException = exports.InvalidCommentIdException || (exports.InvalidCommentIdException = {}));
var DeleteFileInput;
(function (DeleteFileInput) {
    /**
     * @internal
     */
    DeleteFileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileInput = exports.DeleteFileInput || (exports.DeleteFileInput = {}));
var DeleteFileOutput;
(function (DeleteFileOutput) {
    /**
     * @internal
     */
    DeleteFileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFileOutput = exports.DeleteFileOutput || (exports.DeleteFileOutput = {}));
var DeletePullRequestApprovalRuleInput;
(function (DeletePullRequestApprovalRuleInput) {
    /**
     * @internal
     */
    DeletePullRequestApprovalRuleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePullRequestApprovalRuleInput = exports.DeletePullRequestApprovalRuleInput || (exports.DeletePullRequestApprovalRuleInput = {}));
var DeletePullRequestApprovalRuleOutput;
(function (DeletePullRequestApprovalRuleOutput) {
    /**
     * @internal
     */
    DeletePullRequestApprovalRuleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePullRequestApprovalRuleOutput = exports.DeletePullRequestApprovalRuleOutput || (exports.DeletePullRequestApprovalRuleOutput = {}));
var DeleteRepositoryInput;
(function (DeleteRepositoryInput) {
    /**
     * @internal
     */
    DeleteRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryInput = exports.DeleteRepositoryInput || (exports.DeleteRepositoryInput = {}));
var DeleteRepositoryOutput;
(function (DeleteRepositoryOutput) {
    /**
     * @internal
     */
    DeleteRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryOutput = exports.DeleteRepositoryOutput || (exports.DeleteRepositoryOutput = {}));
var DescribeMergeConflictsInput;
(function (DescribeMergeConflictsInput) {
    /**
     * @internal
     */
    DescribeMergeConflictsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMergeConflictsInput = exports.DescribeMergeConflictsInput || (exports.DescribeMergeConflictsInput = {}));
var DescribeMergeConflictsOutput;
(function (DescribeMergeConflictsOutput) {
    /**
     * @internal
     */
    DescribeMergeConflictsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMergeConflictsOutput = exports.DescribeMergeConflictsOutput || (exports.DescribeMergeConflictsOutput = {}));
var PullRequestEventType;
(function (PullRequestEventType) {
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_CREATED"] = "PULL_REQUEST_APPROVAL_RULE_CREATED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_DELETED"] = "PULL_REQUEST_APPROVAL_RULE_DELETED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN"] = "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_UPDATED"] = "PULL_REQUEST_APPROVAL_RULE_UPDATED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_STATE_CHANGED"] = "PULL_REQUEST_APPROVAL_STATE_CHANGED";
    PullRequestEventType["PULL_REQUEST_CREATED"] = "PULL_REQUEST_CREATED";
    PullRequestEventType["PULL_REQUEST_MERGE_STATE_CHANGED"] = "PULL_REQUEST_MERGE_STATE_CHANGED";
    PullRequestEventType["PULL_REQUEST_SOURCE_REFERENCE_UPDATED"] = "PULL_REQUEST_SOURCE_REFERENCE_UPDATED";
    PullRequestEventType["PULL_REQUEST_STATUS_CHANGED"] = "PULL_REQUEST_STATUS_CHANGED";
})(PullRequestEventType = exports.PullRequestEventType || (exports.PullRequestEventType = {}));
var DescribePullRequestEventsInput;
(function (DescribePullRequestEventsInput) {
    /**
     * @internal
     */
    DescribePullRequestEventsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePullRequestEventsInput = exports.DescribePullRequestEventsInput || (exports.DescribePullRequestEventsInput = {}));
var PullRequestCreatedEventMetadata;
(function (PullRequestCreatedEventMetadata) {
    /**
     * @internal
     */
    PullRequestCreatedEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestCreatedEventMetadata = exports.PullRequestCreatedEventMetadata || (exports.PullRequestCreatedEventMetadata = {}));
var PullRequestMergedStateChangedEventMetadata;
(function (PullRequestMergedStateChangedEventMetadata) {
    /**
     * @internal
     */
    PullRequestMergedStateChangedEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestMergedStateChangedEventMetadata = exports.PullRequestMergedStateChangedEventMetadata || (exports.PullRequestMergedStateChangedEventMetadata = {}));
var PullRequestSourceReferenceUpdatedEventMetadata;
(function (PullRequestSourceReferenceUpdatedEventMetadata) {
    /**
     * @internal
     */
    PullRequestSourceReferenceUpdatedEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestSourceReferenceUpdatedEventMetadata = exports.PullRequestSourceReferenceUpdatedEventMetadata || (exports.PullRequestSourceReferenceUpdatedEventMetadata = {}));
var PullRequestStatusChangedEventMetadata;
(function (PullRequestStatusChangedEventMetadata) {
    /**
     * @internal
     */
    PullRequestStatusChangedEventMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestStatusChangedEventMetadata = exports.PullRequestStatusChangedEventMetadata || (exports.PullRequestStatusChangedEventMetadata = {}));
var PullRequestEvent;
(function (PullRequestEvent) {
    /**
     * @internal
     */
    PullRequestEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PullRequestEvent = exports.PullRequestEvent || (exports.PullRequestEvent = {}));
var DescribePullRequestEventsOutput;
(function (DescribePullRequestEventsOutput) {
    /**
     * @internal
     */
    DescribePullRequestEventsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePullRequestEventsOutput = exports.DescribePullRequestEventsOutput || (exports.DescribePullRequestEventsOutput = {}));
var InvalidActorArnException;
(function (InvalidActorArnException) {
    /**
     * @internal
     */
    InvalidActorArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidActorArnException = exports.InvalidActorArnException || (exports.InvalidActorArnException = {}));
var InvalidMaxResultsException;
(function (InvalidMaxResultsException) {
    /**
     * @internal
     */
    InvalidMaxResultsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMaxResultsException = exports.InvalidMaxResultsException || (exports.InvalidMaxResultsException = {}));
var InvalidPullRequestEventTypeException;
(function (InvalidPullRequestEventTypeException) {
    /**
     * @internal
     */
    InvalidPullRequestEventTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPullRequestEventTypeException = exports.InvalidPullRequestEventTypeException || (exports.InvalidPullRequestEventTypeException = {}));
var DisassociateApprovalRuleTemplateFromRepositoryInput;
(function (DisassociateApprovalRuleTemplateFromRepositoryInput) {
    /**
     * @internal
     */
    DisassociateApprovalRuleTemplateFromRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateApprovalRuleTemplateFromRepositoryInput = exports.DisassociateApprovalRuleTemplateFromRepositoryInput || (exports.DisassociateApprovalRuleTemplateFromRepositoryInput = {}));
var EvaluatePullRequestApprovalRulesInput;
(function (EvaluatePullRequestApprovalRulesInput) {
    /**
     * @internal
     */
    EvaluatePullRequestApprovalRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluatePullRequestApprovalRulesInput = exports.EvaluatePullRequestApprovalRulesInput || (exports.EvaluatePullRequestApprovalRulesInput = {}));
var Evaluation;
(function (Evaluation) {
    /**
     * @internal
     */
    Evaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var EvaluatePullRequestApprovalRulesOutput;
(function (EvaluatePullRequestApprovalRulesOutput) {
    /**
     * @internal
     */
    EvaluatePullRequestApprovalRulesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluatePullRequestApprovalRulesOutput = exports.EvaluatePullRequestApprovalRulesOutput || (exports.EvaluatePullRequestApprovalRulesOutput = {}));
var InvalidRevisionIdException;
(function (InvalidRevisionIdException) {
    /**
     * @internal
     */
    InvalidRevisionIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRevisionIdException = exports.InvalidRevisionIdException || (exports.InvalidRevisionIdException = {}));
var RevisionIdRequiredException;
(function (RevisionIdRequiredException) {
    /**
     * @internal
     */
    RevisionIdRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionIdRequiredException = exports.RevisionIdRequiredException || (exports.RevisionIdRequiredException = {}));
var RevisionNotCurrentException;
(function (RevisionNotCurrentException) {
    /**
     * @internal
     */
    RevisionNotCurrentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionNotCurrentException = exports.RevisionNotCurrentException || (exports.RevisionNotCurrentException = {}));
var GetApprovalRuleTemplateInput;
(function (GetApprovalRuleTemplateInput) {
    /**
     * @internal
     */
    GetApprovalRuleTemplateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApprovalRuleTemplateInput = exports.GetApprovalRuleTemplateInput || (exports.GetApprovalRuleTemplateInput = {}));
var GetApprovalRuleTemplateOutput;
(function (GetApprovalRuleTemplateOutput) {
    /**
     * @internal
     */
    GetApprovalRuleTemplateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApprovalRuleTemplateOutput = exports.GetApprovalRuleTemplateOutput || (exports.GetApprovalRuleTemplateOutput = {}));
var FileTooLargeException;
(function (FileTooLargeException) {
    /**
     * @internal
     */
    FileTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileTooLargeException = exports.FileTooLargeException || (exports.FileTooLargeException = {}));
var GetBlobInput;
(function (GetBlobInput) {
    /**
     * @internal
     */
    GetBlobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlobInput = exports.GetBlobInput || (exports.GetBlobInput = {}));
var GetBlobOutput;
(function (GetBlobOutput) {
    /**
     * @internal
     */
    GetBlobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlobOutput = exports.GetBlobOutput || (exports.GetBlobOutput = {}));
var InvalidBlobIdException;
(function (InvalidBlobIdException) {
    /**
     * @internal
     */
    InvalidBlobIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBlobIdException = exports.InvalidBlobIdException || (exports.InvalidBlobIdException = {}));
var GetBranchInput;
(function (GetBranchInput) {
    /**
     * @internal
     */
    GetBranchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBranchInput = exports.GetBranchInput || (exports.GetBranchInput = {}));
var GetBranchOutput;
(function (GetBranchOutput) {
    /**
     * @internal
     */
    GetBranchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBranchOutput = exports.GetBranchOutput || (exports.GetBranchOutput = {}));
var GetCommentInput;
(function (GetCommentInput) {
    /**
     * @internal
     */
    GetCommentInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentInput = exports.GetCommentInput || (exports.GetCommentInput = {}));
var GetCommentOutput;
(function (GetCommentOutput) {
    /**
     * @internal
     */
    GetCommentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentOutput = exports.GetCommentOutput || (exports.GetCommentOutput = {}));
var GetCommentReactionsInput;
(function (GetCommentReactionsInput) {
    /**
     * @internal
     */
    GetCommentReactionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentReactionsInput = exports.GetCommentReactionsInput || (exports.GetCommentReactionsInput = {}));
var ReactionValueFormats;
(function (ReactionValueFormats) {
    /**
     * @internal
     */
    ReactionValueFormats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactionValueFormats = exports.ReactionValueFormats || (exports.ReactionValueFormats = {}));
var ReactionForComment;
(function (ReactionForComment) {
    /**
     * @internal
     */
    ReactionForComment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactionForComment = exports.ReactionForComment || (exports.ReactionForComment = {}));
var GetCommentReactionsOutput;
(function (GetCommentReactionsOutput) {
    /**
     * @internal
     */
    GetCommentReactionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentReactionsOutput = exports.GetCommentReactionsOutput || (exports.GetCommentReactionsOutput = {}));
var InvalidReactionUserArnException;
(function (InvalidReactionUserArnException) {
    /**
     * @internal
     */
    InvalidReactionUserArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidReactionUserArnException = exports.InvalidReactionUserArnException || (exports.InvalidReactionUserArnException = {}));
var GetCommentsForComparedCommitInput;
(function (GetCommentsForComparedCommitInput) {
    /**
     * @internal
     */
    GetCommentsForComparedCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentsForComparedCommitInput = exports.GetCommentsForComparedCommitInput || (exports.GetCommentsForComparedCommitInput = {}));
var RelativeFileVersionEnum;
(function (RelativeFileVersionEnum) {
    RelativeFileVersionEnum["AFTER"] = "AFTER";
    RelativeFileVersionEnum["BEFORE"] = "BEFORE";
})(RelativeFileVersionEnum = exports.RelativeFileVersionEnum || (exports.RelativeFileVersionEnum = {}));
var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Location = exports.Location || (exports.Location = {}));
var CommentsForComparedCommit;
(function (CommentsForComparedCommit) {
    /**
     * @internal
     */
    CommentsForComparedCommit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentsForComparedCommit = exports.CommentsForComparedCommit || (exports.CommentsForComparedCommit = {}));
var GetCommentsForComparedCommitOutput;
(function (GetCommentsForComparedCommitOutput) {
    /**
     * @internal
     */
    GetCommentsForComparedCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentsForComparedCommitOutput = exports.GetCommentsForComparedCommitOutput || (exports.GetCommentsForComparedCommitOutput = {}));
var GetCommentsForPullRequestInput;
(function (GetCommentsForPullRequestInput) {
    /**
     * @internal
     */
    GetCommentsForPullRequestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentsForPullRequestInput = exports.GetCommentsForPullRequestInput || (exports.GetCommentsForPullRequestInput = {}));
var CommentsForPullRequest;
(function (CommentsForPullRequest) {
    /**
     * @internal
     */
    CommentsForPullRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentsForPullRequest = exports.CommentsForPullRequest || (exports.CommentsForPullRequest = {}));
var GetCommentsForPullRequestOutput;
(function (GetCommentsForPullRequestOutput) {
    /**
     * @internal
     */
    GetCommentsForPullRequestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommentsForPullRequestOutput = exports.GetCommentsForPullRequestOutput || (exports.GetCommentsForPullRequestOutput = {}));
var RepositoryNotAssociatedWithPullRequestException;
(function (RepositoryNotAssociatedWithPullRequestException) {
    /**
     * @internal
     */
    RepositoryNotAssociatedWithPullRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNotAssociatedWithPullRequestException = exports.RepositoryNotAssociatedWithPullRequestException || (exports.RepositoryNotAssociatedWithPullRequestException = {}));
var CommitIdDoesNotExistException;
(function (CommitIdDoesNotExistException) {
    /**
     * @internal
     */
    CommitIdDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitIdDoesNotExistException = exports.CommitIdDoesNotExistException || (exports.CommitIdDoesNotExistException = {}));
var GetCommitInput;
(function (GetCommitInput) {
    /**
     * @internal
     */
    GetCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommitInput = exports.GetCommitInput || (exports.GetCommitInput = {}));
var GetCommitOutput;
(function (GetCommitOutput) {
    /**
     * @internal
     */
    GetCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommitOutput = exports.GetCommitOutput || (exports.GetCommitOutput = {}));
var GetDifferencesInput;
(function (GetDifferencesInput) {
    /**
     * @internal
     */
    GetDifferencesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDifferencesInput = exports.GetDifferencesInput || (exports.GetDifferencesInput = {}));
var Difference;
(function (Difference) {
    /**
     * @internal
     */
    Difference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Difference = exports.Difference || (exports.Difference = {}));
var GetDifferencesOutput;
(function (GetDifferencesOutput) {
    /**
     * @internal
     */
    GetDifferencesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDifferencesOutput = exports.GetDifferencesOutput || (exports.GetDifferencesOutput = {}));
var PathDoesNotExistException;
(function (PathDoesNotExistException) {
    /**
     * @internal
     */
    PathDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PathDoesNotExistException = exports.PathDoesNotExistException || (exports.PathDoesNotExistException = {}));
var GetFileInput;
(function (GetFileInput) {
    /**
     * @internal
     */
    GetFileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFileInput = exports.GetFileInput || (exports.GetFileInput = {}));
var GetFileOutput;
(function (GetFileOutput) {
    /**
     * @internal
     */
    GetFileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFileOutput = exports.GetFileOutput || (exports.GetFileOutput = {}));
var FolderDoesNotExistException;
(function (FolderDoesNotExistException) {
    /**
     * @internal
     */
    FolderDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FolderDoesNotExistException = exports.FolderDoesNotExistException || (exports.FolderDoesNotExistException = {}));
var GetFolderInput;
(function (GetFolderInput) {
    /**
     * @internal
     */
    GetFolderInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFolderInput = exports.GetFolderInput || (exports.GetFolderInput = {}));
var File;
(function (File) {
    /**
     * @internal
     */
    File.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(File = exports.File || (exports.File = {}));
var Folder;
(function (Folder) {
    /**
     * @internal
     */
    Folder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Folder = exports.Folder || (exports.Folder = {}));
var SubModule;
(function (SubModule) {
    /**
     * @internal
     */
    SubModule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubModule = exports.SubModule || (exports.SubModule = {}));
var SymbolicLink;
(function (SymbolicLink) {
    /**
     * @internal
     */
    SymbolicLink.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SymbolicLink = exports.SymbolicLink || (exports.SymbolicLink = {}));
var GetFolderOutput;
(function (GetFolderOutput) {
    /**
     * @internal
     */
    GetFolderOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFolderOutput = exports.GetFolderOutput || (exports.GetFolderOutput = {}));
var GetMergeCommitInput;
(function (GetMergeCommitInput) {
    /**
     * @internal
     */
    GetMergeCommitInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeCommitInput = exports.GetMergeCommitInput || (exports.GetMergeCommitInput = {}));
var GetMergeCommitOutput;
(function (GetMergeCommitOutput) {
    /**
     * @internal
     */
    GetMergeCommitOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeCommitOutput = exports.GetMergeCommitOutput || (exports.GetMergeCommitOutput = {}));
var GetMergeConflictsInput;
(function (GetMergeConflictsInput) {
    /**
     * @internal
     */
    GetMergeConflictsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeConflictsInput = exports.GetMergeConflictsInput || (exports.GetMergeConflictsInput = {}));
var GetMergeConflictsOutput;
(function (GetMergeConflictsOutput) {
    /**
     * @internal
     */
    GetMergeConflictsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeConflictsOutput = exports.GetMergeConflictsOutput || (exports.GetMergeConflictsOutput = {}));
var InvalidDestinationCommitSpecifierException;
(function (InvalidDestinationCommitSpecifierException) {
    /**
     * @internal
     */
    InvalidDestinationCommitSpecifierException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDestinationCommitSpecifierException = exports.InvalidDestinationCommitSpecifierException || (exports.InvalidDestinationCommitSpecifierException = {}));
var InvalidSourceCommitSpecifierException;
(function (InvalidSourceCommitSpecifierException) {
    /**
     * @internal
     */
    InvalidSourceCommitSpecifierException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSourceCommitSpecifierException = exports.InvalidSourceCommitSpecifierException || (exports.InvalidSourceCommitSpecifierException = {}));
var GetMergeOptionsInput;
(function (GetMergeOptionsInput) {
    /**
     * @internal
     */
    GetMergeOptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeOptionsInput = exports.GetMergeOptionsInput || (exports.GetMergeOptionsInput = {}));
var GetMergeOptionsOutput;
(function (GetMergeOptionsOutput) {
    /**
     * @internal
     */
    GetMergeOptionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMergeOptionsOutput = exports.GetMergeOptionsOutput || (exports.GetMergeOptionsOutput = {}));
var GetPullRequestInput;
(function (GetPullRequestInput) {
    /**
     * @internal
     */
    GetPullRequestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestInput = exports.GetPullRequestInput || (exports.GetPullRequestInput = {}));
var GetPullRequestOutput;
(function (GetPullRequestOutput) {
    /**
     * @internal
     */
    GetPullRequestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestOutput = exports.GetPullRequestOutput || (exports.GetPullRequestOutput = {}));
var GetPullRequestApprovalStatesInput;
(function (GetPullRequestApprovalStatesInput) {
    /**
     * @internal
     */
    GetPullRequestApprovalStatesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestApprovalStatesInput = exports.GetPullRequestApprovalStatesInput || (exports.GetPullRequestApprovalStatesInput = {}));
var GetPullRequestApprovalStatesOutput;
(function (GetPullRequestApprovalStatesOutput) {
    /**
     * @internal
     */
    GetPullRequestApprovalStatesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestApprovalStatesOutput = exports.GetPullRequestApprovalStatesOutput || (exports.GetPullRequestApprovalStatesOutput = {}));
var GetPullRequestOverrideStateInput;
(function (GetPullRequestOverrideStateInput) {
    /**
     * @internal
     */
    GetPullRequestOverrideStateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestOverrideStateInput = exports.GetPullRequestOverrideStateInput || (exports.GetPullRequestOverrideStateInput = {}));
var GetPullRequestOverrideStateOutput;
(function (GetPullRequestOverrideStateOutput) {
    /**
     * @internal
     */
    GetPullRequestOverrideStateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPullRequestOverrideStateOutput = exports.GetPullRequestOverrideStateOutput || (exports.GetPullRequestOverrideStateOutput = {}));
var GetRepositoryInput;
(function (GetRepositoryInput) {
    /**
     * @internal
     */
    GetRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryInput = exports.GetRepositoryInput || (exports.GetRepositoryInput = {}));
var GetRepositoryOutput;
(function (GetRepositoryOutput) {
    /**
     * @internal
     */
    GetRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryOutput = exports.GetRepositoryOutput || (exports.GetRepositoryOutput = {}));
var GetRepositoryTriggersInput;
(function (GetRepositoryTriggersInput) {
    /**
     * @internal
     */
    GetRepositoryTriggersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryTriggersInput = exports.GetRepositoryTriggersInput || (exports.GetRepositoryTriggersInput = {}));
var RepositoryTriggerEventEnum;
(function (RepositoryTriggerEventEnum) {
    RepositoryTriggerEventEnum["ALL"] = "all";
    RepositoryTriggerEventEnum["CREATE_REFERENCE"] = "createReference";
    RepositoryTriggerEventEnum["DELETE_REFERENCE"] = "deleteReference";
    RepositoryTriggerEventEnum["UPDATE_REFERENCE"] = "updateReference";
})(RepositoryTriggerEventEnum = exports.RepositoryTriggerEventEnum || (exports.RepositoryTriggerEventEnum = {}));
var RepositoryTrigger;
(function (RepositoryTrigger) {
    /**
     * @internal
     */
    RepositoryTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryTrigger = exports.RepositoryTrigger || (exports.RepositoryTrigger = {}));
var GetRepositoryTriggersOutput;
(function (GetRepositoryTriggersOutput) {
    /**
     * @internal
     */
    GetRepositoryTriggersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryTriggersOutput = exports.GetRepositoryTriggersOutput || (exports.GetRepositoryTriggersOutput = {}));
var ListApprovalRuleTemplatesInput;
(function (ListApprovalRuleTemplatesInput) {
    /**
     * @internal
     */
    ListApprovalRuleTemplatesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApprovalRuleTemplatesInput = exports.ListApprovalRuleTemplatesInput || (exports.ListApprovalRuleTemplatesInput = {}));
var ListApprovalRuleTemplatesOutput;
(function (ListApprovalRuleTemplatesOutput) {
    /**
     * @internal
     */
    ListApprovalRuleTemplatesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApprovalRuleTemplatesOutput = exports.ListApprovalRuleTemplatesOutput || (exports.ListApprovalRuleTemplatesOutput = {}));
var ListAssociatedApprovalRuleTemplatesForRepositoryInput;
(function (ListAssociatedApprovalRuleTemplatesForRepositoryInput) {
    /**
     * @internal
     */
    ListAssociatedApprovalRuleTemplatesForRepositoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedApprovalRuleTemplatesForRepositoryInput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryInput || (exports.ListAssociatedApprovalRuleTemplatesForRepositoryInput = {}));
var ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
(function (ListAssociatedApprovalRuleTemplatesForRepositoryOutput) {
    /**
     * @internal
     */
    ListAssociatedApprovalRuleTemplatesForRepositoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedApprovalRuleTemplatesForRepositoryOutput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryOutput || (exports.ListAssociatedApprovalRuleTemplatesForRepositoryOutput = {}));
var ListBranchesInput;
(function (ListBranchesInput) {
    /**
     * @internal
     */
    ListBranchesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBranchesInput = exports.ListBranchesInput || (exports.ListBranchesInput = {}));
var ListBranchesOutput;
(function (ListBranchesOutput) {
    /**
     * @internal
     */
    ListBranchesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBranchesOutput = exports.ListBranchesOutput || (exports.ListBranchesOutput = {}));
var InvalidAuthorArnException;
(function (InvalidAuthorArnException) {
    /**
     * @internal
     */
    InvalidAuthorArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAuthorArnException = exports.InvalidAuthorArnException || (exports.InvalidAuthorArnException = {}));
var InvalidPullRequestStatusException;
(function (InvalidPullRequestStatusException) {
    /**
     * @internal
     */
    InvalidPullRequestStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPullRequestStatusException = exports.InvalidPullRequestStatusException || (exports.InvalidPullRequestStatusException = {}));
var ListPullRequestsInput;
(function (ListPullRequestsInput) {
    /**
     * @internal
     */
    ListPullRequestsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPullRequestsInput = exports.ListPullRequestsInput || (exports.ListPullRequestsInput = {}));
var ListPullRequestsOutput;
(function (ListPullRequestsOutput) {
    /**
     * @internal
     */
    ListPullRequestsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPullRequestsOutput = exports.ListPullRequestsOutput || (exports.ListPullRequestsOutput = {}));
var InvalidOrderException;
(function (InvalidOrderException) {
    /**
     * @internal
     */
    InvalidOrderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOrderException = exports.InvalidOrderException || (exports.InvalidOrderException = {}));
var InvalidSortByException;
(function (InvalidSortByException) {
    /**
     * @internal
     */
    InvalidSortByException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSortByException = exports.InvalidSortByException || (exports.InvalidSortByException = {}));
//# sourceMappingURL=models_0.js.map