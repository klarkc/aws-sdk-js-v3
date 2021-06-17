import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var EncryptionOption;
(function (EncryptionOption) {
    EncryptionOption["AoCmk"] = "AWS_OWNED_CMK";
    EncryptionOption["CmCmk"] = "CUSTOMER_MANAGED_CMK";
})(EncryptionOption || (EncryptionOption = {}));
export var KMSKeyDetails;
(function (KMSKeyDetails) {
    /**
     * @internal
     */
    KMSKeyDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KMSKeyDetails || (KMSKeyDetails = {}));
export var ThirdPartySourceRepository;
(function (ThirdPartySourceRepository) {
    /**
     * @internal
     */
    ThirdPartySourceRepository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThirdPartySourceRepository || (ThirdPartySourceRepository = {}));
export var CodeCommitRepository;
(function (CodeCommitRepository) {
    /**
     * @internal
     */
    CodeCommitRepository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeCommitRepository || (CodeCommitRepository = {}));
export var Repository;
(function (Repository) {
    /**
     * @internal
     */
    Repository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Repository || (Repository = {}));
export var AssociateRepositoryRequest;
(function (AssociateRepositoryRequest) {
    /**
     * @internal
     */
    AssociateRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateRepositoryRequest || (AssociateRepositoryRequest = {}));
export var ProviderType;
(function (ProviderType) {
    ProviderType["BITBUCKET"] = "Bitbucket";
    ProviderType["CODE_COMMIT"] = "CodeCommit";
    ProviderType["GIT_HUB"] = "GitHub";
    ProviderType["GIT_HUB_ENTERPRISE_SERVER"] = "GitHubEnterpriseServer";
})(ProviderType || (ProviderType = {}));
export var RepositoryAssociationState;
(function (RepositoryAssociationState) {
    RepositoryAssociationState["ASSOCIATED"] = "Associated";
    RepositoryAssociationState["ASSOCIATING"] = "Associating";
    RepositoryAssociationState["DISASSOCIATED"] = "Disassociated";
    RepositoryAssociationState["DISASSOCIATING"] = "Disassociating";
    RepositoryAssociationState["FAILED"] = "Failed";
})(RepositoryAssociationState || (RepositoryAssociationState = {}));
export var RepositoryAssociation;
(function (RepositoryAssociation) {
    /**
     * @internal
     */
    RepositoryAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryAssociation || (RepositoryAssociation = {}));
export var AssociateRepositoryResponse;
(function (AssociateRepositoryResponse) {
    /**
     * @internal
     */
    AssociateRepositoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateRepositoryResponse || (AssociateRepositoryResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var RepositoryHeadSourceCodeType;
(function (RepositoryHeadSourceCodeType) {
    /**
     * @internal
     */
    RepositoryHeadSourceCodeType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryHeadSourceCodeType || (RepositoryHeadSourceCodeType = {}));
export var RepositoryAnalysis;
(function (RepositoryAnalysis) {
    /**
     * @internal
     */
    RepositoryAnalysis.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryAnalysis || (RepositoryAnalysis = {}));
export var CodeReviewType;
(function (CodeReviewType) {
    /**
     * @internal
     */
    CodeReviewType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeReviewType || (CodeReviewType = {}));
export var CreateCodeReviewRequest;
(function (CreateCodeReviewRequest) {
    /**
     * @internal
     */
    CreateCodeReviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCodeReviewRequest || (CreateCodeReviewRequest = {}));
export var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metrics || (Metrics = {}));
export var CommitDiffSourceCodeType;
(function (CommitDiffSourceCodeType) {
    /**
     * @internal
     */
    CommitDiffSourceCodeType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommitDiffSourceCodeType || (CommitDiffSourceCodeType = {}));
export var SourceCodeType;
(function (SourceCodeType) {
    /**
     * @internal
     */
    SourceCodeType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceCodeType || (SourceCodeType = {}));
export var JobState;
(function (JobState) {
    JobState["COMPLETED"] = "Completed";
    JobState["DELETING"] = "Deleting";
    JobState["FAILED"] = "Failed";
    JobState["PENDING"] = "Pending";
})(JobState || (JobState = {}));
export var Type;
(function (Type) {
    Type["PULL_REQUEST"] = "PullRequest";
    Type["REPOSITORY_ANALYSIS"] = "RepositoryAnalysis";
})(Type || (Type = {}));
export var CodeReview;
(function (CodeReview) {
    /**
     * @internal
     */
    CodeReview.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeReview || (CodeReview = {}));
export var CreateCodeReviewResponse;
(function (CreateCodeReviewResponse) {
    /**
     * @internal
     */
    CreateCodeReviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCodeReviewResponse || (CreateCodeReviewResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DescribeCodeReviewRequest;
(function (DescribeCodeReviewRequest) {
    /**
     * @internal
     */
    DescribeCodeReviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeReviewRequest || (DescribeCodeReviewRequest = {}));
export var DescribeCodeReviewResponse;
(function (DescribeCodeReviewResponse) {
    /**
     * @internal
     */
    DescribeCodeReviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCodeReviewResponse || (DescribeCodeReviewResponse = {}));
export var DescribeRecommendationFeedbackRequest;
(function (DescribeRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    DescribeRecommendationFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecommendationFeedbackRequest || (DescribeRecommendationFeedbackRequest = {}));
export var Reaction;
(function (Reaction) {
    Reaction["THUMBS_DOWN"] = "ThumbsDown";
    Reaction["THUMBS_UP"] = "ThumbsUp";
})(Reaction || (Reaction = {}));
export var RecommendationFeedback;
(function (RecommendationFeedback) {
    /**
     * @internal
     */
    RecommendationFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationFeedback || (RecommendationFeedback = {}));
export var DescribeRecommendationFeedbackResponse;
(function (DescribeRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    DescribeRecommendationFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRecommendationFeedbackResponse || (DescribeRecommendationFeedbackResponse = {}));
export var DescribeRepositoryAssociationRequest;
(function (DescribeRepositoryAssociationRequest) {
    /**
     * @internal
     */
    DescribeRepositoryAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoryAssociationRequest || (DescribeRepositoryAssociationRequest = {}));
export var DescribeRepositoryAssociationResponse;
(function (DescribeRepositoryAssociationResponse) {
    /**
     * @internal
     */
    DescribeRepositoryAssociationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoryAssociationResponse || (DescribeRepositoryAssociationResponse = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DisassociateRepositoryRequest;
(function (DisassociateRepositoryRequest) {
    /**
     * @internal
     */
    DisassociateRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateRepositoryRequest || (DisassociateRepositoryRequest = {}));
export var DisassociateRepositoryResponse;
(function (DisassociateRepositoryResponse) {
    /**
     * @internal
     */
    DisassociateRepositoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateRepositoryResponse || (DisassociateRepositoryResponse = {}));
export var ListCodeReviewsRequest;
(function (ListCodeReviewsRequest) {
    /**
     * @internal
     */
    ListCodeReviewsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCodeReviewsRequest || (ListCodeReviewsRequest = {}));
export var MetricsSummary;
(function (MetricsSummary) {
    /**
     * @internal
     */
    MetricsSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricsSummary || (MetricsSummary = {}));
export var CodeReviewSummary;
(function (CodeReviewSummary) {
    /**
     * @internal
     */
    CodeReviewSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeReviewSummary || (CodeReviewSummary = {}));
export var ListCodeReviewsResponse;
(function (ListCodeReviewsResponse) {
    /**
     * @internal
     */
    ListCodeReviewsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCodeReviewsResponse || (ListCodeReviewsResponse = {}));
export var ListRecommendationFeedbackRequest;
(function (ListRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    ListRecommendationFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecommendationFeedbackRequest || (ListRecommendationFeedbackRequest = {}));
export var RecommendationFeedbackSummary;
(function (RecommendationFeedbackSummary) {
    /**
     * @internal
     */
    RecommendationFeedbackSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationFeedbackSummary || (RecommendationFeedbackSummary = {}));
export var ListRecommendationFeedbackResponse;
(function (ListRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    ListRecommendationFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecommendationFeedbackResponse || (ListRecommendationFeedbackResponse = {}));
export var ListRecommendationsRequest;
(function (ListRecommendationsRequest) {
    /**
     * @internal
     */
    ListRecommendationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecommendationsRequest || (ListRecommendationsRequest = {}));
export var RecommendationSummary;
(function (RecommendationSummary) {
    /**
     * @internal
     */
    RecommendationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommendationSummary || (RecommendationSummary = {}));
export var ListRecommendationsResponse;
(function (ListRecommendationsResponse) {
    /**
     * @internal
     */
    ListRecommendationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRecommendationsResponse || (ListRecommendationsResponse = {}));
export var ListRepositoryAssociationsRequest;
(function (ListRepositoryAssociationsRequest) {
    /**
     * @internal
     */
    ListRepositoryAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoryAssociationsRequest || (ListRepositoryAssociationsRequest = {}));
export var RepositoryAssociationSummary;
(function (RepositoryAssociationSummary) {
    /**
     * @internal
     */
    RepositoryAssociationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryAssociationSummary || (RepositoryAssociationSummary = {}));
export var ListRepositoryAssociationsResponse;
(function (ListRepositoryAssociationsResponse) {
    /**
     * @internal
     */
    ListRepositoryAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoryAssociationsResponse || (ListRepositoryAssociationsResponse = {}));
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
export var PutRecommendationFeedbackRequest;
(function (PutRecommendationFeedbackRequest) {
    /**
     * @internal
     */
    PutRecommendationFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecommendationFeedbackRequest || (PutRecommendationFeedbackRequest = {}));
export var PutRecommendationFeedbackResponse;
(function (PutRecommendationFeedbackResponse) {
    /**
     * @internal
     */
    PutRecommendationFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRecommendationFeedbackResponse || (PutRecommendationFeedbackResponse = {}));
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
//# sourceMappingURL=models_0.js.map