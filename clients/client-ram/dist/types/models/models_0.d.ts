import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AcceptResourceShareInvitationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the invitation.</p>
     */
    resourceShareInvitationArn: string | undefined;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AcceptResourceShareInvitationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptResourceShareInvitationRequest) => any;
}
export declare type ResourceShareAssociationType = "PRINCIPAL" | "RESOURCE";
export declare type ResourceShareAssociationStatus = "ASSOCIATED" | "ASSOCIATING" | "DISASSOCIATED" | "DISASSOCIATING" | "FAILED";
/**
 * <p>Describes an association with a resource share.</p>
 */
export interface ResourceShareAssociation {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn?: string;
    /**
     * <p>The name of the resource share.</p>
     */
    resourceShareName?: string;
    /**
     * <p>The associated entity. For resource associations, this is the ARN of the resource.
     *        For principal associations, this is the ID of an AWS account or the ARN of an OU or
     *        organization from AWS Organizations.</p>
     */
    associatedEntity?: string;
    /**
     * <p>The association type.</p>
     */
    associationType?: ResourceShareAssociationType | string;
    /**
     * <p>The status of the association.</p>
     */
    status?: ResourceShareAssociationStatus | string;
    /**
     * <p>A message about the status of the association.</p>
     */
    statusMessage?: string;
    /**
     * <p>The time when the association was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time when the association was last updated.</p>
     */
    lastUpdatedTime?: Date;
    /**
     * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
     */
    external?: boolean;
}
export declare namespace ResourceShareAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareAssociation) => any;
}
export declare type ResourceShareInvitationStatus = "ACCEPTED" | "EXPIRED" | "PENDING" | "REJECTED";
/**
 * <p>Describes an invitation to join a resource share.</p>
 */
export interface ResourceShareInvitation {
    /**
     * <p>The Amazon Resource Name (ARN) of the invitation.</p>
     */
    resourceShareInvitationArn?: string;
    /**
     * <p>The name of the resource share.</p>
     */
    resourceShareName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn?: string;
    /**
     * <p>The ID of the AWS account that sent the invitation.</p>
     */
    senderAccountId?: string;
    /**
     * <p>The ID of the AWS account that received the invitation.</p>
     */
    receiverAccountId?: string;
    /**
     * <p>The date and time when the invitation was sent.</p>
     */
    invitationTimestamp?: Date;
    /**
     * <p>The status of the invitation.</p>
     */
    status?: ResourceShareInvitationStatus | string;
    /**
     * @deprecated
     *
     * <p>To view the resources associated with a pending resource share invitation, use
     *       	<a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html">
     *       		ListPendingInvitationResources</a>.</p>
     */
    resourceShareAssociations?: ResourceShareAssociation[];
}
export declare namespace ResourceShareInvitation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareInvitation) => any;
}
export interface AcceptResourceShareInvitationResponse {
    /**
     * <p>Information about the invitation.</p>
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AcceptResourceShareInvitationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptResourceShareInvitationResponse) => any;
}
/**
 * <p>A client token input parameter was reused with an operation, but at least one of
 *         the other input parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
    name: "IdempotentParameterMismatchException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace IdempotentParameterMismatchException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdempotentParameterMismatchException) => any;
}
/**
 * <p>A client token is not valid.</p>
 */
export interface InvalidClientTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidClientTokenException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidClientTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidClientTokenException) => any;
}
/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException extends __SmithyException, $MetadataBearer {
    name: "MalformedArnException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace MalformedArnException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MalformedArnException) => any;
}
/**
 * <p>The requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotPermittedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace OperationNotPermittedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationNotPermittedException) => any;
}
/**
 * <p>The invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException extends __SmithyException, $MetadataBearer {
    name: "ResourceShareInvitationAlreadyAcceptedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceShareInvitationAlreadyAcceptedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareInvitationAlreadyAcceptedException) => any;
}
/**
 * <p>The invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException extends __SmithyException, $MetadataBearer {
    name: "ResourceShareInvitationAlreadyRejectedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceShareInvitationAlreadyRejectedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareInvitationAlreadyRejectedException) => any;
}
/**
 * <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceShareInvitationArnNotFoundException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceShareInvitationArnNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareInvitationArnNotFoundException) => any;
}
/**
 * <p>The invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException extends __SmithyException, $MetadataBearer {
    name: "ResourceShareInvitationExpiredException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceShareInvitationExpiredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareInvitationExpiredException) => any;
}
/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
    name: "ServerInternalException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace ServerInternalException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerInternalException) => any;
}
/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
export interface AssociateResourceShareRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARN) of the resources.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The principals to associate with the resource share. The possible values are IDs of
     *        	AWS accounts, and the ARNs of organizational units (OU) or organizations from AWS
     *        	Organizations.</p>
     */
    principals?: string[];
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AssociateResourceShareRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceShareRequest) => any;
}
export interface AssociateResourceShareResponse {
    /**
     * <p>Information about the associations.</p>
     */
    resourceShareAssociations?: ResourceShareAssociation[];
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AssociateResourceShareResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceShareResponse) => any;
}
/**
 * <p>A parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
    name: "InvalidStateTransitionException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidStateTransitionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidStateTransitionException) => any;
}
/**
 * <p>The requested resource share exceeds the limit for your account.</p>
 */
export interface ResourceShareLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ResourceShareLimitExceededException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceShareLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShareLimitExceededException) => any;
}
/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException extends __SmithyException, $MetadataBearer {
    name: "UnknownResourceException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace UnknownResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnknownResourceException) => any;
}
export interface AssociateResourceSharePermissionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The ARN of the AWS RAM permission to associate with the resource share.</p>
     */
    permissionArn: string | undefined;
    /**
     * <p>Indicates whether the permission should replace the permissions that are currently
     *         	associated with the resource share. Use <code>true</code> to replace the current permissions.
     *         	Use <code>false</code> to add the permission to the current permission.</p>
     */
    replace?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AssociateResourceSharePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceSharePermissionRequest) => any;
}
export interface AssociateResourceSharePermissionResponse {
    /**
     * <p>Indicates whether the request succeeded.</p>
     */
    returnValue?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace AssociateResourceSharePermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceSharePermissionResponse) => any;
}
/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
    /**
     * <p>The key of the tag.</p>
     */
    key?: string;
    /**
     * <p>The value of the tag.</p>
     */
    value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateResourceShareRequest {
    /**
     * <p>The name of the resource share.</p>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARN) of the resources to associate with the resource share.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The principals to associate with the resource share. The possible values are IDs of AWS accounts,
     *           the ARN of an OU or organization from AWS Organizations.</p>
     */
    principals?: string[];
    /**
     * <p>One or more tags.</p>
     */
    tags?: Tag[];
    /**
     * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
     */
    allowExternalPrincipals?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
    /**
     * <p>The ARNs of the permissions to associate with the resource share. If you do not specify an ARN
     * 			for the permission, AWS RAM automatically attaches the default version of the permission
     * 			for each resource type.</p>
     */
    permissionArns?: string[];
}
export declare namespace CreateResourceShareRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceShareRequest) => any;
}
export declare type ResourceShareFeatureSet = "CREATED_FROM_POLICY" | "PROMOTING_TO_STANDARD" | "STANDARD";
export declare type ResourceShareStatus = "ACTIVE" | "DELETED" | "DELETING" | "FAILED" | "PENDING";
/**
 * <p>Describes a resource share.</p>
 */
export interface ResourceShare {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn?: string;
    /**
     * <p>The name of the resource share.</p>
     */
    name?: string;
    /**
     * <p>The ID of the AWS account that owns the resource share.</p>
     */
    owningAccountId?: string;
    /**
     * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
     */
    allowExternalPrincipals?: boolean;
    /**
     * <p>The status of the resource share.</p>
     */
    status?: ResourceShareStatus | string;
    /**
     * <p>A message about the status of the resource share.</p>
     */
    statusMessage?: string;
    /**
     * <p>The tags for the resource share.</p>
     */
    tags?: Tag[];
    /**
     * <p>The time when the resource share was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time when the resource share was last updated.</p>
     */
    lastUpdatedTime?: Date;
    /**
     * <p>Indicates how the resource share was created. Possible values include:</p>
     * 	        <ul>
     *             <li>
     * 			            <p>
     *                   <code>CREATED_FROM_POLICY</code> - Indicates that the resource share was created from an AWS Identity
     * 					and Access Management (AWS IAM) policy attached to a resource. These resource shares are
     * 					visible only to the AWS account that created it. They cannot be modified in
     * 					AWS RAM.</p>
     * 		          </li>
     *             <li>
     * 			            <p>
     *                   <code>PROMOTING_TO_STANDARD</code> - The resource share is in the process
     * 				of being promoted. For more information, see
     * 				<a>PromoteResourceShareCreatedFromPolicy</a>.</p>
     * 		          </li>
     *             <li>
     * 			            <p>
     *                   <code>STANDARD</code> - Indicates that the resource share was created in AWS RAM using the console or
     * 					APIs. These resource shares are visible to all principals. They can be modified
     * 					in AWS RAM.</p>
     * 		          </li>
     *          </ul>
     */
    featureSet?: ResourceShareFeatureSet | string;
}
export declare namespace ResourceShare {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceShare) => any;
}
export interface CreateResourceShareResponse {
    /**
     * <p>Information about the resource share.</p>
     */
    resourceShare?: ResourceShare;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace CreateResourceShareResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceShareResponse) => any;
}
/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
    name: "TagPolicyViolationException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace TagPolicyViolationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagPolicyViolationException) => any;
}
export interface DeleteResourceShareRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DeleteResourceShareRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceShareRequest) => any;
}
export interface DeleteResourceShareResponse {
    /**
     * <p>Indicates whether the request succeeded.</p>
     */
    returnValue?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DeleteResourceShareResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceShareResponse) => any;
}
export interface DisassociateResourceShareRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The principals.</p>
     */
    principals?: string[];
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DisassociateResourceShareRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceShareRequest) => any;
}
export interface DisassociateResourceShareResponse {
    /**
     * <p>Information about the associations.</p>
     */
    resourceShareAssociations?: ResourceShareAssociation[];
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DisassociateResourceShareResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceShareResponse) => any;
}
export interface DisassociateResourceSharePermissionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The ARN of the permission to disassociate from the resource share.</p>
     */
    permissionArn: string | undefined;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DisassociateResourceSharePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceSharePermissionRequest) => any;
}
export interface DisassociateResourceSharePermissionResponse {
    /**
     * <p>Indicates whether the request succeeded.</p>
     */
    returnValue?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace DisassociateResourceSharePermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceSharePermissionResponse) => any;
}
export interface EnableSharingWithAwsOrganizationRequest {
}
export declare namespace EnableSharingWithAwsOrganizationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSharingWithAwsOrganizationRequest) => any;
}
export interface EnableSharingWithAwsOrganizationResponse {
    /**
     * <p>Indicates whether the request succeeded.</p>
     */
    returnValue?: boolean;
}
export declare namespace EnableSharingWithAwsOrganizationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSharingWithAwsOrganizationResponse) => any;
}
export interface GetPermissionRequest {
    /**
     * <p>The ARN of the permission.</p>
     */
    permissionArn: string | undefined;
    /**
     * <p>The identifier for the version of the permission.</p>
     */
    permissionVersion?: number;
}
export declare namespace GetPermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPermissionRequest) => any;
}
/**
 * <p>Information about an AWS RAM permission.</p>
 */
export interface ResourceSharePermissionDetail {
    /**
     * <p>The ARN of the permission.</p>
     */
    arn?: string;
    /**
     * <p>The identifier for the version of the permission.</p>
     */
    version?: string;
    /**
     * <p>The identifier for the version of the permission that is set as the
     *     		default version.</p>
     */
    defaultVersion?: boolean;
    /**
     * <p>The name of the permission.</p>
     */
    name?: string;
    /**
     * <p>The resource type to which the permission applies.</p>
     */
    resourceType?: string;
    /**
     * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates whether
     * 			the actions are allowed or denied. The <code>actions</code> list the API actions to
     * 			which the principal is granted or denied access.</p>
     */
    permission?: string;
    /**
     * <p>The date and time when the permission was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The date and time when the permission was last updated.</p>
     */
    lastUpdatedTime?: Date;
}
export declare namespace ResourceSharePermissionDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceSharePermissionDetail) => any;
}
export interface GetPermissionResponse {
    /**
     * <p>Information about the permission.</p>
     */
    permission?: ResourceSharePermissionDetail;
}
export declare namespace GetPermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPermissionResponse) => any;
}
export interface GetResourcePoliciesRequest {
    /**
     * <p>The Amazon Resource Names (ARN) of the resources.</p>
     */
    resourceArns: string[] | undefined;
    /**
     * <p>The principal.</p>
     */
    principal?: string;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetResourcePoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourcePoliciesRequest) => any;
}
export interface GetResourcePoliciesResponse {
    /**
     * <p>A key policy document, in JSON format.</p>
     */
    policies?: string[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetResourcePoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourcePoliciesResponse) => any;
}
/**
 * <p>The specified value for NextToken is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidNextTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
/**
 * <p>An Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceArnNotFoundException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceArnNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceArnNotFoundException) => any;
}
export interface GetResourceShareAssociationsRequest {
    /**
     * <p>The association type. Specify <code>PRINCIPAL</code> to list the principals that are
     *    		associated with the specified resource share. Specify <code>RESOURCE</code> to list
     *    		the resources that are associated with the specified resource share.</p>
     */
    associationType: ResourceShareAssociationType | string | undefined;
    /**
     * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
     */
    resourceShareArns?: string[];
    /**
     * <p>The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the
     *       	association type is <code>PRINCIPAL</code>.</p>
     */
    resourceArn?: string;
    /**
     * <p>The principal. You cannot specify this parameter if the association type is
     *      	<code>RESOURCE</code>.</p>
     */
    principal?: string;
    /**
     * <p>The association status.</p>
     */
    associationStatus?: ResourceShareAssociationStatus | string;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetResourceShareAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceShareAssociationsRequest) => any;
}
export interface GetResourceShareAssociationsResponse {
    /**
     * <p>Information about the associations.</p>
     */
    resourceShareAssociations?: ResourceShareAssociation[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetResourceShareAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceShareAssociationsResponse) => any;
}
export interface GetResourceShareInvitationsRequest {
    /**
     * <p>The Amazon Resource Names (ARN) of the invitations.</p>
     */
    resourceShareInvitationArns?: string[];
    /**
     * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
     */
    resourceShareArns?: string[];
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetResourceShareInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceShareInvitationsRequest) => any;
}
export interface GetResourceShareInvitationsResponse {
    /**
     * <p>Information about the invitations.</p>
     */
    resourceShareInvitations?: ResourceShareInvitation[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetResourceShareInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceShareInvitationsResponse) => any;
}
/**
 * <p>The specified value for MaxResults is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
    name: "InvalidMaxResultsException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidMaxResultsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidMaxResultsException) => any;
}
export declare enum ResourceOwner {
    OTHER_ACCOUNTS = "OTHER-ACCOUNTS",
    SELF = "SELF"
}
/**
 * <p>Used to filter information based on tags.</p>
 */
export interface TagFilter {
    /**
     * <p>The tag key.</p>
     */
    tagKey?: string;
    /**
     * <p>The tag values.</p>
     */
    tagValues?: string[];
}
export declare namespace TagFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagFilter) => any;
}
export interface GetResourceSharesRequest {
    /**
     * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
     */
    resourceShareArns?: string[];
    /**
     * <p>The status of the resource share.</p>
     */
    resourceShareStatus?: ResourceShareStatus | string;
    /**
     * <p>The type of owner.</p>
     */
    resourceOwner: ResourceOwner | string | undefined;
    /**
     * <p>The name of the resource share.</p>
     */
    name?: string;
    /**
     * <p>One or more tag filters.</p>
     */
    tagFilters?: TagFilter[];
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetResourceSharesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceSharesRequest) => any;
}
export interface GetResourceSharesResponse {
    /**
     * <p>Information about the resource shares.</p>
     */
    resourceShares?: ResourceShare[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetResourceSharesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceSharesResponse) => any;
}
export interface ListPendingInvitationResourcesRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the invitation.</p>
     */
    resourceShareInvitationArn: string | undefined;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListPendingInvitationResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPendingInvitationResourcesRequest) => any;
}
export declare type ResourceStatus = "AVAILABLE" | "LIMIT_EXCEEDED" | "PENDING" | "UNAVAILABLE" | "ZONAL_RESOURCE_INACCESSIBLE";
/**
 * <p>Describes a resource associated with a resource share.</p>
 */
export interface Resource {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    arn?: string;
    /**
     * <p>The resource type.</p>
     */
    type?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn?: string;
    /**
     * <p>The ARN of the resource group. This value is returned only if the resource is a resource
     * 			group.</p>
     */
    resourceGroupArn?: string;
    /**
     * <p>The status of the resource.</p>
     */
    status?: ResourceStatus | string;
    /**
     * <p>A message about the status of the resource.</p>
     */
    statusMessage?: string;
    /**
     * <p>The time when the resource was associated with the resource share.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time when the association was last updated.</p>
     */
    lastUpdatedTime?: Date;
}
export declare namespace Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Resource) => any;
}
export interface ListPendingInvitationResourcesResponse {
    /**
     * <p>Information about the resources included the resource share.</p>
     */
    resources?: Resource[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListPendingInvitationResourcesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPendingInvitationResourcesResponse) => any;
}
/**
 * <p>A required input parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
    name: "MissingRequiredParameterException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace MissingRequiredParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MissingRequiredParameterException) => any;
}
export interface ListPermissionsRequest {
    /**
     * <p>Specifies the resource type for which to list permissions. For example, to list only
     * 		permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>.</p>
     */
    resourceType?: string;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListPermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPermissionsRequest) => any;
}
/**
 * <p>Information about a permission that is associated with a resource share.</p>
 */
export interface ResourceSharePermissionSummary {
    /**
     * <p>The ARN of the permission.</p>
     */
    arn?: string;
    /**
     * <p>The identifier for the version of the permission.</p>
     */
    version?: string;
    /**
     * <p>The identifier for the version of the permission that is set as the default version.</p>
     */
    defaultVersion?: boolean;
    /**
     * <p>The name of the permission.</p>
     */
    name?: string;
    /**
     * <p>The type of resource to which the permission applies.</p>
     */
    resourceType?: string;
    /**
     * <p>The current status of the permission.</p>
     */
    status?: string;
    /**
     * <p>The date and time when the permission was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The date and time when the permission was last updated.</p>
     */
    lastUpdatedTime?: Date;
}
export declare namespace ResourceSharePermissionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceSharePermissionSummary) => any;
}
export interface ListPermissionsResponse {
    /**
     * <p>Information about the permissions.</p>
     */
    permissions?: ResourceSharePermissionSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListPermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPermissionsResponse) => any;
}
export interface ListPrincipalsRequest {
    /**
     * <p>The type of owner.</p>
     */
    resourceOwner: ResourceOwner | string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn?: string;
    /**
     * <p>The principals.</p>
     */
    principals?: string[];
    /**
     * <p>The resource type.</p>
     *    	     <p>Valid values: <code>acm-pca:CertificateAuthority</code> | <code>appmesh:Mesh</code> | <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:LocalGatewayRouteTable</code> | <code>ec2:PrefixList</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>imagebuilder:ContainerRecipe</code> | <code>glue:Catalog</code> | <code>glue:Database</code> | <code>glue:Table</code> | <code>license-manager:LicenseConfiguration</code> I <code>network-firewall:FirewallPolicy</code> | <code>network-firewall:StatefulRuleGroup</code> | <code>network-firewall:StatelessRuleGroup</code> | <code>outposts:Outpost</code> | <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:FirewallRuleGroup</code> |<code>route53resolver:ResolverQueryLogConfig</code> | <code>route53resolver:ResolverRule</code>
     *          </p>
     */
    resourceType?: string;
    /**
     * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
     */
    resourceShareArns?: string[];
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListPrincipalsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalsRequest) => any;
}
/**
 * <p>Describes a principal for use with AWS Resource Access Manager.</p>
 */
export interface Principal {
    /**
     * <p>The ID of the principal.</p>
     */
    id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn?: string;
    /**
     * <p>The time when the principal was associated with the resource share.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time when the association was last updated.</p>
     */
    lastUpdatedTime?: Date;
    /**
     * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
     */
    external?: boolean;
}
export declare namespace Principal {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Principal) => any;
}
export interface ListPrincipalsResponse {
    /**
     * <p>The principals.</p>
     */
    principals?: Principal[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListPrincipalsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalsResponse) => any;
}
/**
 * <p>The specified resource type is not valid.</p>
 */
export interface InvalidResourceTypeException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceTypeException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace InvalidResourceTypeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceTypeException) => any;
}
export interface ListResourcesRequest {
    /**
     * <p>The type of owner.</p>
     */
    resourceOwner: ResourceOwner | string | undefined;
    /**
     * <p>The principal.</p>
     */
    principal?: string;
    /**
     * <p>The resource type.</p>
     *    	     <p>Valid values: <code>acm-pca:CertificateAuthority</code> | <code>appmesh:Mesh</code> | <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:LocalGatewayRouteTable</code> | <code>ec2:PrefixList</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>imagebuilder:ContainerRecipe</code> | <code>glue:Catalog</code> | <code>glue:Database</code> | <code>glue:Table</code> | <code>license-manager:LicenseConfiguration</code> I <code>network-firewall:FirewallPolicy</code> | <code>network-firewall:StatefulRuleGroup</code> | <code>network-firewall:StatelessRuleGroup</code> | <code>outposts:Outpost</code> | <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:FirewallRuleGroup</code> |<code>route53resolver:ResolverQueryLogConfig</code> | <code>route53resolver:ResolverRule</code>
     *          </p>
     */
    resourceType?: string;
    /**
     * <p>The Amazon Resource Names (ARN) of the resources.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
     */
    resourceShareArns?: string[];
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesRequest) => any;
}
export interface ListResourcesResponse {
    /**
     * <p>Information about the resources.</p>
     */
    resources?: Resource[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListResourcesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesResponse) => any;
}
export interface ListResourceSharePermissionsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListResourceSharePermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceSharePermissionsRequest) => any;
}
export interface ListResourceSharePermissionsResponse {
    /**
     * <p>The permissions associated with the resource share.</p>
     */
    permissions?: ResourceSharePermissionSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListResourceSharePermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceSharePermissionsResponse) => any;
}
export interface ListResourceTypesRequest {
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace ListResourceTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceTypesRequest) => any;
}
/**
 * <p>Information about the shareable resource types and the AWS services to which they belong.</p>
 */
export interface ServiceNameAndResourceType {
    /**
     * <p>The shareable resource types.</p>
     */
    resourceType?: string;
    /**
     * <p>The name of the AWS services to which the resources belong.</p>
     */
    serviceName?: string;
}
export declare namespace ServiceNameAndResourceType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceNameAndResourceType) => any;
}
export interface ListResourceTypesResponse {
    /**
     * <p>The shareable resource types supported by AWS RAM.</p>
     */
    resourceTypes?: ServiceNameAndResourceType[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListResourceTypesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceTypesResponse) => any;
}
export interface PromoteResourceShareCreatedFromPolicyRequest {
    /**
     * <p>The ARN of the resource share to promote.</p>
     */
    resourceShareArn: string | undefined;
}
export declare namespace PromoteResourceShareCreatedFromPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PromoteResourceShareCreatedFromPolicyRequest) => any;
}
export interface PromoteResourceShareCreatedFromPolicyResponse {
    /**
     * <p>Indicates whether the request succeeded.</p>
     */
    returnValue?: boolean;
}
export declare namespace PromoteResourceShareCreatedFromPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PromoteResourceShareCreatedFromPolicyResponse) => any;
}
export interface RejectResourceShareInvitationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the invitation.</p>
     */
    resourceShareInvitationArn: string | undefined;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace RejectResourceShareInvitationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectResourceShareInvitationRequest) => any;
}
export interface RejectResourceShareInvitationResponse {
    /**
     * <p>Information about the invitation.</p>
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace RejectResourceShareInvitationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectResourceShareInvitationResponse) => any;
}
/**
 * <p>The requested tags exceed the limit for your account.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "TagLimitExceededException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace TagLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagLimitExceededException) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The tag keys of the tags to remove.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateResourceShareRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource share.</p>
     */
    resourceShareArn: string | undefined;
    /**
     * <p>The name of the resource share.</p>
     */
    name?: string;
    /**
     * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
     */
    allowExternalPrincipals?: boolean;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace UpdateResourceShareRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceShareRequest) => any;
}
export interface UpdateResourceShareResponse {
    /**
     * <p>Information about the resource share.</p>
     */
    resourceShare?: ResourceShare;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
}
export declare namespace UpdateResourceShareResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceShareResponse) => any;
}
