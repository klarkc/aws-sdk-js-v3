"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryAssociationSummary = exports.ListRepositoryAssociationsRequest = exports.ListRecommendationsResponse = exports.RecommendationSummary = exports.ListRecommendationsRequest = exports.ListRecommendationFeedbackResponse = exports.RecommendationFeedbackSummary = exports.ListRecommendationFeedbackRequest = exports.ListCodeReviewsResponse = exports.CodeReviewSummary = exports.MetricsSummary = exports.ListCodeReviewsRequest = exports.DisassociateRepositoryResponse = exports.DisassociateRepositoryRequest = exports.NotFoundException = exports.DescribeRepositoryAssociationResponse = exports.DescribeRepositoryAssociationRequest = exports.DescribeRecommendationFeedbackResponse = exports.RecommendationFeedback = exports.Reaction = exports.DescribeRecommendationFeedbackRequest = exports.DescribeCodeReviewResponse = exports.DescribeCodeReviewRequest = exports.ResourceNotFoundException = exports.CreateCodeReviewResponse = exports.CodeReview = exports.Type = exports.JobState = exports.SourceCodeType = exports.CommitDiffSourceCodeType = exports.Metrics = exports.CreateCodeReviewRequest = exports.CodeReviewType = exports.RepositoryAnalysis = exports.RepositoryHeadSourceCodeType = exports.ValidationException = exports.ThrottlingException = exports.InternalServerException = exports.ConflictException = exports.AssociateRepositoryResponse = exports.RepositoryAssociation = exports.RepositoryAssociationState = exports.ProviderType = exports.AssociateRepositoryRequest = exports.Repository = exports.CodeCommitRepository = exports.ThirdPartySourceRepository = exports.KMSKeyDetails = exports.EncryptionOption = exports.AccessDeniedException = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutRecommendationFeedbackResponse = exports.PutRecommendationFeedbackRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRepositoryAssociationsResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var EncryptionOption;
(function (EncryptionOption) {
    EncryptionOption["AoCmk"] = "AWS_OWNED_CMK";
    EncryptionOption["CmCmk"] = "CUSTOMER_MANAGED_CMK";
})(EncryptionOption = exports.EncryptionOption || (exports.EncryptionOption = {}));
var KMSKeyDetails;
(function (KMSKeyDetails) {
    /**
     * @internal
     */
    KMSKeyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSKeyDetails = exports.KMSKeyDetails || (exports.KMSKeyDetails = {}));
var ThirdPartySourceRepository;
(function (ThirdPartySourceRepository) {
    /**
     * @internal
     */
    ThirdPartySourceRepository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThirdPartySourceRepository = exports.ThirdPartySourceRepository || (exports.ThirdPartySourceRepository = {}));
var CodeCommitRepository;
(function (CodeCommitRepository) {
    /**
     * @internal
     */
    CodeCommitRepository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeCommitRepository = exports.CodeCommitRepository || (exports.CodeCommitRepository = {}));
var Repository;
(function (Repository) {
    /**
     * @internal
     */
    Repository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Repository = exports.Repository || (exports.Repository = {}));
var AssociateRepositoryRequest;
(function (AssociateRepositoryRequest) {
    /**
     * @internal
     */
    AssociateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRepositoryRequest = exports.AssociateRepositoryRequest || (exports.AssociateRepositoryRequest = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["BITBUCKET"] = "Bitbucket";
    ProviderType["CODE_COMMIT"] = "CodeCommit";
    ProviderType["GIT_HUB"] = "GitHub";
    ProviderType["GIT_HUB_ENTERPRISE_SERVER"] = "GitHubEnterpriseServer";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var RepositoryAssociationState;
(function (RepositoryAssociationState) {
    RepositoryAssociationState["ASSOCIATED"] = "Associated";
    RepositoryAssociationState["ASSOCIATING"] = "Associating";
    RepositoryAssociationState["DISASSOCIATED"] = "Disassociated";
    RepositoryAssociationState["DISASSOCIATING"] = "Disassociating";
    RepositoryAssociationState["FAILED"] = "Failed";
})(RepositoryAssociationState = exports.RepositoryAssociationState || (exports.RepositoryAssociationState = {}));
var RepositoryAssociation;
(function (RepositoryAssociation) {
    /**
     * @internal
     */
    RepositoryAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryAssociation = exports.RepositoryAssociation || (exports.RepositoryAssociation = {}));
var AssociateRepositoryResponse;
(function (AssociateRepositoryResponse) {
    /**
     * @internal
     */
    AssociateRepositoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRepositoryResponse = exports.AssociateRepositoryResponse || (exports.AssociateRepositoryResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var RepositoryHeadSourceCodeType;
(function (RepositoryHeadSourceCodeType) {
    /**
     * @internal
     */
    RepositoryHeadSourceCodeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryHeadSourceCodeType = exports.RepositoryHeadSourceCodeType || (exports.RepositoryHeadSourceCodeType = {}));
var RepositoryAnalysis;
(function (RepositoryAnalysis) {
    /**
     * @internal
     */
    RepositoryAnalysis.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryAnalysis = exports.RepositoryAnalysis || (exports.RepositoryAnalysis = {}));
var CodeReviewType;
(function (CodeReviewType) {
    /**
     * @internal
     */
    CodeReviewType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeReviewType = exports.CodeReviewType || (exports.CodeReviewType = {}));
var CreateCodeReviewRequest;
(function (CreateCodeReviewRequest) {
    /**
     * @internal
     */
    CreateCodeReviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeReviewRequest = exports.CreateCodeReviewRequest || (exports.CreateCodeReviewRequest = {}));
var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metrics = exports.Metrics || (exports.Metrics = {}));
var CommitDiffSourceCodeType;
(function (CommitDiffSourceCodeType) {
    /**
     * @internal
     */
    CommitDiffSourceCodeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitDiffSourceCodeType = exports.CommitDiffSourceCodeType || (exports.CommitDiffSourceCodeType = {}));
var SourceCodeType;
(function (SourceCodeType) {
    /**
     * @internal
     */
    SourceCodeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceCodeType = exports.SourceCodeType || (exports.SourceCodeType = {}));
var JobState;
(function (JobState) {
    JobState["COMPLETED"] = "Completed";
    JobState["DELETING"] = "Deleting";
    JobState["FAILED"] = "Failed";
    JobState["PENDING"] = "Pending";
})(JobState = exports.JobState || (exports.JobState = {}));
var Type;
(function (Type) {
    Type["PULL_REQUEST"] = "PullRequest";
    Type["REPOSITORY_ANALYSIS"] = "RepositoryAnalysis";
})(Type = exports.Type || (exports.Type = {}));
var CodeReview;
(function (CodeReview) {
    /**
     * @internal
     */
    CodeReview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeReview = exports.CodeReview || (exports.CodeReview = {}));
var CreateCodeReviewResponse;
(function (CreateCodeReviewResponse) {
    /**
     * @internal
     */
    CreateCodeReviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeReviewResponse = exports.CreateCodeReviewResponse || (exports.CreateCodeReviewResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeCodeReviewRequest;
(function (DescribeCodeReviewRequest) {
    /**
     * @internal
     */
    DescribeCodeReviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeReviewRequest = exports.DescribeCodeReviewRequest || (exports.DescribeCodeReviewRequest = {}));
var DescribeCodeReviewResponse;
(function (DescribeCodeReviewResponse) {
    /**
     * @internal
     */
    DescribeCodeReviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCodeReviewResponse = exports.DescribeCodeReviewResponse || (exports.DescribeCodeReviewResponse = {}));
var DescribeRecommendationFeedbackRequest;
(function (DescribeRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    DescribeRecommendationFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecommendationFeedbackRequest = exports.DescribeRecommendationFeedbackRequest || (exports.DescribeRecommendationFeedbackRequest = {}));
var Reaction;
(function (Reaction) {
    Reaction["THUMBS_DOWN"] = "ThumbsDown";
    Reaction["THUMBS_UP"] = "ThumbsUp";
})(Reaction = exports.Reaction || (exports.Reaction = {}));
var RecommendationFeedback;
(function (RecommendationFeedback) {
    /**
     * @internal
     */
    RecommendationFeedback.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationFeedback = exports.RecommendationFeedback || (exports.RecommendationFeedback = {}));
var DescribeRecommendationFeedbackResponse;
(function (DescribeRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    DescribeRecommendationFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecommendationFeedbackResponse = exports.DescribeRecommendationFeedbackResponse || (exports.DescribeRecommendationFeedbackResponse = {}));
var DescribeRepositoryAssociationRequest;
(function (DescribeRepositoryAssociationRequest) {
    /**
     * @internal
     */
    DescribeRepositoryAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryAssociationRequest = exports.DescribeRepositoryAssociationRequest || (exports.DescribeRepositoryAssociationRequest = {}));
var DescribeRepositoryAssociationResponse;
(function (DescribeRepositoryAssociationResponse) {
    /**
     * @internal
     */
    DescribeRepositoryAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryAssociationResponse = exports.DescribeRepositoryAssociationResponse || (exports.DescribeRepositoryAssociationResponse = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DisassociateRepositoryRequest;
(function (DisassociateRepositoryRequest) {
    /**
     * @internal
     */
    DisassociateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRepositoryRequest = exports.DisassociateRepositoryRequest || (exports.DisassociateRepositoryRequest = {}));
var DisassociateRepositoryResponse;
(function (DisassociateRepositoryResponse) {
    /**
     * @internal
     */
    DisassociateRepositoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRepositoryResponse = exports.DisassociateRepositoryResponse || (exports.DisassociateRepositoryResponse = {}));
var ListCodeReviewsRequest;
(function (ListCodeReviewsRequest) {
    /**
     * @internal
     */
    ListCodeReviewsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeReviewsRequest = exports.ListCodeReviewsRequest || (exports.ListCodeReviewsRequest = {}));
var MetricsSummary;
(function (MetricsSummary) {
    /**
     * @internal
     */
    MetricsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricsSummary = exports.MetricsSummary || (exports.MetricsSummary = {}));
var CodeReviewSummary;
(function (CodeReviewSummary) {
    /**
     * @internal
     */
    CodeReviewSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeReviewSummary = exports.CodeReviewSummary || (exports.CodeReviewSummary = {}));
var ListCodeReviewsResponse;
(function (ListCodeReviewsResponse) {
    /**
     * @internal
     */
    ListCodeReviewsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeReviewsResponse = exports.ListCodeReviewsResponse || (exports.ListCodeReviewsResponse = {}));
var ListRecommendationFeedbackRequest;
(function (ListRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    ListRecommendationFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationFeedbackRequest = exports.ListRecommendationFeedbackRequest || (exports.ListRecommendationFeedbackRequest = {}));
var RecommendationFeedbackSummary;
(function (RecommendationFeedbackSummary) {
    /**
     * @internal
     */
    RecommendationFeedbackSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationFeedbackSummary = exports.RecommendationFeedbackSummary || (exports.RecommendationFeedbackSummary = {}));
var ListRecommendationFeedbackResponse;
(function (ListRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    ListRecommendationFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationFeedbackResponse = exports.ListRecommendationFeedbackResponse || (exports.ListRecommendationFeedbackResponse = {}));
var ListRecommendationsRequest;
(function (ListRecommendationsRequest) {
    /**
     * @internal
     */
    ListRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationsRequest = exports.ListRecommendationsRequest || (exports.ListRecommendationsRequest = {}));
var RecommendationSummary;
(function (RecommendationSummary) {
    /**
     * @internal
     */
    RecommendationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationSummary = exports.RecommendationSummary || (exports.RecommendationSummary = {}));
var ListRecommendationsResponse;
(function (ListRecommendationsResponse) {
    /**
     * @internal
     */
    ListRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationsResponse = exports.ListRecommendationsResponse || (exports.ListRecommendationsResponse = {}));
var ListRepositoryAssociationsRequest;
(function (ListRepositoryAssociationsRequest) {
    /**
     * @internal
     */
    ListRepositoryAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoryAssociationsRequest = exports.ListRepositoryAssociationsRequest || (exports.ListRepositoryAssociationsRequest = {}));
var RepositoryAssociationSummary;
(function (RepositoryAssociationSummary) {
    /**
     * @internal
     */
    RepositoryAssociationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryAssociationSummary = exports.RepositoryAssociationSummary || (exports.RepositoryAssociationSummary = {}));
var ListRepositoryAssociationsResponse;
(function (ListRepositoryAssociationsResponse) {
    /**
     * @internal
     */
    ListRepositoryAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoryAssociationsResponse = exports.ListRepositoryAssociationsResponse || (exports.ListRepositoryAssociationsResponse = {}));
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
var PutRecommendationFeedbackRequest;
(function (PutRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    PutRecommendationFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRecommendationFeedbackRequest = exports.PutRecommendationFeedbackRequest || (exports.PutRecommendationFeedbackRequest = {}));
var PutRecommendationFeedbackResponse;
(function (PutRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    PutRecommendationFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRecommendationFeedbackResponse = exports.PutRecommendationFeedbackResponse || (exports.PutRecommendationFeedbackResponse = {}));
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
//# sourceMappingURL=models_0.js.map