"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourceSharesRequest = exports.TagFilter = exports.ResourceOwner = exports.InvalidMaxResultsException = exports.GetResourceShareInvitationsResponse = exports.GetResourceShareInvitationsRequest = exports.GetResourceShareAssociationsResponse = exports.GetResourceShareAssociationsRequest = exports.ResourceArnNotFoundException = exports.InvalidNextTokenException = exports.GetResourcePoliciesResponse = exports.GetResourcePoliciesRequest = exports.GetPermissionResponse = exports.ResourceSharePermissionDetail = exports.GetPermissionRequest = exports.EnableSharingWithAwsOrganizationResponse = exports.EnableSharingWithAwsOrganizationRequest = exports.DisassociateResourceSharePermissionResponse = exports.DisassociateResourceSharePermissionRequest = exports.DisassociateResourceShareResponse = exports.DisassociateResourceShareRequest = exports.DeleteResourceShareResponse = exports.DeleteResourceShareRequest = exports.TagPolicyViolationException = exports.CreateResourceShareResponse = exports.ResourceShare = exports.CreateResourceShareRequest = exports.Tag = exports.AssociateResourceSharePermissionResponse = exports.AssociateResourceSharePermissionRequest = exports.UnknownResourceException = exports.ResourceShareLimitExceededException = exports.InvalidStateTransitionException = exports.InvalidParameterException = exports.AssociateResourceShareResponse = exports.AssociateResourceShareRequest = exports.ServiceUnavailableException = exports.ServerInternalException = exports.ResourceShareInvitationExpiredException = exports.ResourceShareInvitationArnNotFoundException = exports.ResourceShareInvitationAlreadyRejectedException = exports.ResourceShareInvitationAlreadyAcceptedException = exports.OperationNotPermittedException = exports.MalformedArnException = exports.InvalidClientTokenException = exports.IdempotentParameterMismatchException = exports.AcceptResourceShareInvitationResponse = exports.ResourceShareInvitation = exports.ResourceShareAssociation = exports.AcceptResourceShareInvitationRequest = void 0;
exports.UpdateResourceShareResponse = exports.UpdateResourceShareRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.TagLimitExceededException = exports.RejectResourceShareInvitationResponse = exports.RejectResourceShareInvitationRequest = exports.PromoteResourceShareCreatedFromPolicyResponse = exports.PromoteResourceShareCreatedFromPolicyRequest = exports.ListResourceTypesResponse = exports.ServiceNameAndResourceType = exports.ListResourceTypesRequest = exports.ListResourceSharePermissionsResponse = exports.ListResourceSharePermissionsRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.InvalidResourceTypeException = exports.ListPrincipalsResponse = exports.Principal = exports.ListPrincipalsRequest = exports.ListPermissionsResponse = exports.ResourceSharePermissionSummary = exports.ListPermissionsRequest = exports.MissingRequiredParameterException = exports.ListPendingInvitationResourcesResponse = exports.Resource = exports.ListPendingInvitationResourcesRequest = exports.GetResourceSharesResponse = void 0;
var AcceptResourceShareInvitationRequest;
(function (AcceptResourceShareInvitationRequest) {
    /**
     * @internal
     */
    AcceptResourceShareInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptResourceShareInvitationRequest = exports.AcceptResourceShareInvitationRequest || (exports.AcceptResourceShareInvitationRequest = {}));
var ResourceShareAssociation;
(function (ResourceShareAssociation) {
    /**
     * @internal
     */
    ResourceShareAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareAssociation = exports.ResourceShareAssociation || (exports.ResourceShareAssociation = {}));
var ResourceShareInvitation;
(function (ResourceShareInvitation) {
    /**
     * @internal
     */
    ResourceShareInvitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareInvitation = exports.ResourceShareInvitation || (exports.ResourceShareInvitation = {}));
var AcceptResourceShareInvitationResponse;
(function (AcceptResourceShareInvitationResponse) {
    /**
     * @internal
     */
    AcceptResourceShareInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptResourceShareInvitationResponse = exports.AcceptResourceShareInvitationResponse || (exports.AcceptResourceShareInvitationResponse = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var InvalidClientTokenException;
(function (InvalidClientTokenException) {
    /**
     * @internal
     */
    InvalidClientTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClientTokenException = exports.InvalidClientTokenException || (exports.InvalidClientTokenException = {}));
var MalformedArnException;
(function (MalformedArnException) {
    /**
     * @internal
     */
    MalformedArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedArnException = exports.MalformedArnException || (exports.MalformedArnException = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    /**
     * @internal
     */
    OperationNotPermittedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var ResourceShareInvitationAlreadyAcceptedException;
(function (ResourceShareInvitationAlreadyAcceptedException) {
    /**
     * @internal
     */
    ResourceShareInvitationAlreadyAcceptedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareInvitationAlreadyAcceptedException = exports.ResourceShareInvitationAlreadyAcceptedException || (exports.ResourceShareInvitationAlreadyAcceptedException = {}));
var ResourceShareInvitationAlreadyRejectedException;
(function (ResourceShareInvitationAlreadyRejectedException) {
    /**
     * @internal
     */
    ResourceShareInvitationAlreadyRejectedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareInvitationAlreadyRejectedException = exports.ResourceShareInvitationAlreadyRejectedException || (exports.ResourceShareInvitationAlreadyRejectedException = {}));
var ResourceShareInvitationArnNotFoundException;
(function (ResourceShareInvitationArnNotFoundException) {
    /**
     * @internal
     */
    ResourceShareInvitationArnNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareInvitationArnNotFoundException = exports.ResourceShareInvitationArnNotFoundException || (exports.ResourceShareInvitationArnNotFoundException = {}));
var ResourceShareInvitationExpiredException;
(function (ResourceShareInvitationExpiredException) {
    /**
     * @internal
     */
    ResourceShareInvitationExpiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareInvitationExpiredException = exports.ResourceShareInvitationExpiredException || (exports.ResourceShareInvitationExpiredException = {}));
var ServerInternalException;
(function (ServerInternalException) {
    /**
     * @internal
     */
    ServerInternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerInternalException = exports.ServerInternalException || (exports.ServerInternalException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var AssociateResourceShareRequest;
(function (AssociateResourceShareRequest) {
    /**
     * @internal
     */
    AssociateResourceShareRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceShareRequest = exports.AssociateResourceShareRequest || (exports.AssociateResourceShareRequest = {}));
var AssociateResourceShareResponse;
(function (AssociateResourceShareResponse) {
    /**
     * @internal
     */
    AssociateResourceShareResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceShareResponse = exports.AssociateResourceShareResponse || (exports.AssociateResourceShareResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
    /**
     * @internal
     */
    InvalidStateTransitionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateTransitionException = exports.InvalidStateTransitionException || (exports.InvalidStateTransitionException = {}));
var ResourceShareLimitExceededException;
(function (ResourceShareLimitExceededException) {
    /**
     * @internal
     */
    ResourceShareLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShareLimitExceededException = exports.ResourceShareLimitExceededException || (exports.ResourceShareLimitExceededException = {}));
var UnknownResourceException;
(function (UnknownResourceException) {
    /**
     * @internal
     */
    UnknownResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownResourceException = exports.UnknownResourceException || (exports.UnknownResourceException = {}));
var AssociateResourceSharePermissionRequest;
(function (AssociateResourceSharePermissionRequest) {
    /**
     * @internal
     */
    AssociateResourceSharePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceSharePermissionRequest = exports.AssociateResourceSharePermissionRequest || (exports.AssociateResourceSharePermissionRequest = {}));
var AssociateResourceSharePermissionResponse;
(function (AssociateResourceSharePermissionResponse) {
    /**
     * @internal
     */
    AssociateResourceSharePermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceSharePermissionResponse = exports.AssociateResourceSharePermissionResponse || (exports.AssociateResourceSharePermissionResponse = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateResourceShareRequest;
(function (CreateResourceShareRequest) {
    /**
     * @internal
     */
    CreateResourceShareRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceShareRequest = exports.CreateResourceShareRequest || (exports.CreateResourceShareRequest = {}));
var ResourceShare;
(function (ResourceShare) {
    /**
     * @internal
     */
    ResourceShare.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceShare = exports.ResourceShare || (exports.ResourceShare = {}));
var CreateResourceShareResponse;
(function (CreateResourceShareResponse) {
    /**
     * @internal
     */
    CreateResourceShareResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceShareResponse = exports.CreateResourceShareResponse || (exports.CreateResourceShareResponse = {}));
var TagPolicyViolationException;
(function (TagPolicyViolationException) {
    /**
     * @internal
     */
    TagPolicyViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyViolationException = exports.TagPolicyViolationException || (exports.TagPolicyViolationException = {}));
var DeleteResourceShareRequest;
(function (DeleteResourceShareRequest) {
    /**
     * @internal
     */
    DeleteResourceShareRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceShareRequest = exports.DeleteResourceShareRequest || (exports.DeleteResourceShareRequest = {}));
var DeleteResourceShareResponse;
(function (DeleteResourceShareResponse) {
    /**
     * @internal
     */
    DeleteResourceShareResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceShareResponse = exports.DeleteResourceShareResponse || (exports.DeleteResourceShareResponse = {}));
var DisassociateResourceShareRequest;
(function (DisassociateResourceShareRequest) {
    /**
     * @internal
     */
    DisassociateResourceShareRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceShareRequest = exports.DisassociateResourceShareRequest || (exports.DisassociateResourceShareRequest = {}));
var DisassociateResourceShareResponse;
(function (DisassociateResourceShareResponse) {
    /**
     * @internal
     */
    DisassociateResourceShareResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceShareResponse = exports.DisassociateResourceShareResponse || (exports.DisassociateResourceShareResponse = {}));
var DisassociateResourceSharePermissionRequest;
(function (DisassociateResourceSharePermissionRequest) {
    /**
     * @internal
     */
    DisassociateResourceSharePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceSharePermissionRequest = exports.DisassociateResourceSharePermissionRequest || (exports.DisassociateResourceSharePermissionRequest = {}));
var DisassociateResourceSharePermissionResponse;
(function (DisassociateResourceSharePermissionResponse) {
    /**
     * @internal
     */
    DisassociateResourceSharePermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceSharePermissionResponse = exports.DisassociateResourceSharePermissionResponse || (exports.DisassociateResourceSharePermissionResponse = {}));
var EnableSharingWithAwsOrganizationRequest;
(function (EnableSharingWithAwsOrganizationRequest) {
    /**
     * @internal
     */
    EnableSharingWithAwsOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSharingWithAwsOrganizationRequest = exports.EnableSharingWithAwsOrganizationRequest || (exports.EnableSharingWithAwsOrganizationRequest = {}));
var EnableSharingWithAwsOrganizationResponse;
(function (EnableSharingWithAwsOrganizationResponse) {
    /**
     * @internal
     */
    EnableSharingWithAwsOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSharingWithAwsOrganizationResponse = exports.EnableSharingWithAwsOrganizationResponse || (exports.EnableSharingWithAwsOrganizationResponse = {}));
var GetPermissionRequest;
(function (GetPermissionRequest) {
    /**
     * @internal
     */
    GetPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPermissionRequest = exports.GetPermissionRequest || (exports.GetPermissionRequest = {}));
var ResourceSharePermissionDetail;
(function (ResourceSharePermissionDetail) {
    /**
     * @internal
     */
    ResourceSharePermissionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceSharePermissionDetail = exports.ResourceSharePermissionDetail || (exports.ResourceSharePermissionDetail = {}));
var GetPermissionResponse;
(function (GetPermissionResponse) {
    /**
     * @internal
     */
    GetPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPermissionResponse = exports.GetPermissionResponse || (exports.GetPermissionResponse = {}));
var GetResourcePoliciesRequest;
(function (GetResourcePoliciesRequest) {
    /**
     * @internal
     */
    GetResourcePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesRequest = exports.GetResourcePoliciesRequest || (exports.GetResourcePoliciesRequest = {}));
var GetResourcePoliciesResponse;
(function (GetResourcePoliciesResponse) {
    /**
     * @internal
     */
    GetResourcePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesResponse = exports.GetResourcePoliciesResponse || (exports.GetResourcePoliciesResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ResourceArnNotFoundException;
(function (ResourceArnNotFoundException) {
    /**
     * @internal
     */
    ResourceArnNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceArnNotFoundException = exports.ResourceArnNotFoundException || (exports.ResourceArnNotFoundException = {}));
var GetResourceShareAssociationsRequest;
(function (GetResourceShareAssociationsRequest) {
    /**
     * @internal
     */
    GetResourceShareAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceShareAssociationsRequest = exports.GetResourceShareAssociationsRequest || (exports.GetResourceShareAssociationsRequest = {}));
var GetResourceShareAssociationsResponse;
(function (GetResourceShareAssociationsResponse) {
    /**
     * @internal
     */
    GetResourceShareAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceShareAssociationsResponse = exports.GetResourceShareAssociationsResponse || (exports.GetResourceShareAssociationsResponse = {}));
var GetResourceShareInvitationsRequest;
(function (GetResourceShareInvitationsRequest) {
    /**
     * @internal
     */
    GetResourceShareInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceShareInvitationsRequest = exports.GetResourceShareInvitationsRequest || (exports.GetResourceShareInvitationsRequest = {}));
var GetResourceShareInvitationsResponse;
(function (GetResourceShareInvitationsResponse) {
    /**
     * @internal
     */
    GetResourceShareInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceShareInvitationsResponse = exports.GetResourceShareInvitationsResponse || (exports.GetResourceShareInvitationsResponse = {}));
var InvalidMaxResultsException;
(function (InvalidMaxResultsException) {
    /**
     * @internal
     */
    InvalidMaxResultsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMaxResultsException = exports.InvalidMaxResultsException || (exports.InvalidMaxResultsException = {}));
var ResourceOwner;
(function (ResourceOwner) {
    ResourceOwner["OTHER_ACCOUNTS"] = "OTHER-ACCOUNTS";
    ResourceOwner["SELF"] = "SELF";
})(ResourceOwner = exports.ResourceOwner || (exports.ResourceOwner = {}));
var TagFilter;
(function (TagFilter) {
    /**
     * @internal
     */
    TagFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var GetResourceSharesRequest;
(function (GetResourceSharesRequest) {
    /**
     * @internal
     */
    GetResourceSharesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceSharesRequest = exports.GetResourceSharesRequest || (exports.GetResourceSharesRequest = {}));
var GetResourceSharesResponse;
(function (GetResourceSharesResponse) {
    /**
     * @internal
     */
    GetResourceSharesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceSharesResponse = exports.GetResourceSharesResponse || (exports.GetResourceSharesResponse = {}));
var ListPendingInvitationResourcesRequest;
(function (ListPendingInvitationResourcesRequest) {
    /**
     * @internal
     */
    ListPendingInvitationResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPendingInvitationResourcesRequest = exports.ListPendingInvitationResourcesRequest || (exports.ListPendingInvitationResourcesRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var ListPendingInvitationResourcesResponse;
(function (ListPendingInvitationResourcesResponse) {
    /**
     * @internal
     */
    ListPendingInvitationResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPendingInvitationResourcesResponse = exports.ListPendingInvitationResourcesResponse || (exports.ListPendingInvitationResourcesResponse = {}));
var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    /**
     * @internal
     */
    MissingRequiredParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingRequiredParameterException = exports.MissingRequiredParameterException || (exports.MissingRequiredParameterException = {}));
var ListPermissionsRequest;
(function (ListPermissionsRequest) {
    /**
     * @internal
     */
    ListPermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionsRequest = exports.ListPermissionsRequest || (exports.ListPermissionsRequest = {}));
var ResourceSharePermissionSummary;
(function (ResourceSharePermissionSummary) {
    /**
     * @internal
     */
    ResourceSharePermissionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceSharePermissionSummary = exports.ResourceSharePermissionSummary || (exports.ResourceSharePermissionSummary = {}));
var ListPermissionsResponse;
(function (ListPermissionsResponse) {
    /**
     * @internal
     */
    ListPermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionsResponse = exports.ListPermissionsResponse || (exports.ListPermissionsResponse = {}));
var ListPrincipalsRequest;
(function (ListPrincipalsRequest) {
    /**
     * @internal
     */
    ListPrincipalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalsRequest = exports.ListPrincipalsRequest || (exports.ListPrincipalsRequest = {}));
var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Principal = exports.Principal || (exports.Principal = {}));
var ListPrincipalsResponse;
(function (ListPrincipalsResponse) {
    /**
     * @internal
     */
    ListPrincipalsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalsResponse = exports.ListPrincipalsResponse || (exports.ListPrincipalsResponse = {}));
var InvalidResourceTypeException;
(function (InvalidResourceTypeException) {
    /**
     * @internal
     */
    InvalidResourceTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceTypeException = exports.InvalidResourceTypeException || (exports.InvalidResourceTypeException = {}));
var ListResourcesRequest;
(function (ListResourcesRequest) {
    /**
     * @internal
     */
    ListResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesRequest = exports.ListResourcesRequest || (exports.ListResourcesRequest = {}));
var ListResourcesResponse;
(function (ListResourcesResponse) {
    /**
     * @internal
     */
    ListResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesResponse = exports.ListResourcesResponse || (exports.ListResourcesResponse = {}));
var ListResourceSharePermissionsRequest;
(function (ListResourceSharePermissionsRequest) {
    /**
     * @internal
     */
    ListResourceSharePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceSharePermissionsRequest = exports.ListResourceSharePermissionsRequest || (exports.ListResourceSharePermissionsRequest = {}));
var ListResourceSharePermissionsResponse;
(function (ListResourceSharePermissionsResponse) {
    /**
     * @internal
     */
    ListResourceSharePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceSharePermissionsResponse = exports.ListResourceSharePermissionsResponse || (exports.ListResourceSharePermissionsResponse = {}));
var ListResourceTypesRequest;
(function (ListResourceTypesRequest) {
    /**
     * @internal
     */
    ListResourceTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceTypesRequest = exports.ListResourceTypesRequest || (exports.ListResourceTypesRequest = {}));
var ServiceNameAndResourceType;
(function (ServiceNameAndResourceType) {
    /**
     * @internal
     */
    ServiceNameAndResourceType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNameAndResourceType = exports.ServiceNameAndResourceType || (exports.ServiceNameAndResourceType = {}));
var ListResourceTypesResponse;
(function (ListResourceTypesResponse) {
    /**
     * @internal
     */
    ListResourceTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceTypesResponse = exports.ListResourceTypesResponse || (exports.ListResourceTypesResponse = {}));
var PromoteResourceShareCreatedFromPolicyRequest;
(function (PromoteResourceShareCreatedFromPolicyRequest) {
    /**
     * @internal
     */
    PromoteResourceShareCreatedFromPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteResourceShareCreatedFromPolicyRequest = exports.PromoteResourceShareCreatedFromPolicyRequest || (exports.PromoteResourceShareCreatedFromPolicyRequest = {}));
var PromoteResourceShareCreatedFromPolicyResponse;
(function (PromoteResourceShareCreatedFromPolicyResponse) {
    /**
     * @internal
     */
    PromoteResourceShareCreatedFromPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromoteResourceShareCreatedFromPolicyResponse = exports.PromoteResourceShareCreatedFromPolicyResponse || (exports.PromoteResourceShareCreatedFromPolicyResponse = {}));
var RejectResourceShareInvitationRequest;
(function (RejectResourceShareInvitationRequest) {
    /**
     * @internal
     */
    RejectResourceShareInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectResourceShareInvitationRequest = exports.RejectResourceShareInvitationRequest || (exports.RejectResourceShareInvitationRequest = {}));
var RejectResourceShareInvitationResponse;
(function (RejectResourceShareInvitationResponse) {
    /**
     * @internal
     */
    RejectResourceShareInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectResourceShareInvitationResponse = exports.RejectResourceShareInvitationResponse || (exports.RejectResourceShareInvitationResponse = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
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
var UpdateResourceShareRequest;
(function (UpdateResourceShareRequest) {
    /**
     * @internal
     */
    UpdateResourceShareRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceShareRequest = exports.UpdateResourceShareRequest || (exports.UpdateResourceShareRequest = {}));
var UpdateResourceShareResponse;
(function (UpdateResourceShareResponse) {
    /**
     * @internal
     */
    UpdateResourceShareResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceShareResponse = exports.UpdateResourceShareResponse || (exports.UpdateResourceShareResponse = {}));
//# sourceMappingURL=models_0.js.map