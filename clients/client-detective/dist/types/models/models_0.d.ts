import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AcceptInvitationRequest {
    /**
     * <p>The ARN of the behavior graph that the member account is accepting the invitation
     *          for.</p>
     *          <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
     */
    GraphArn: string | undefined;
}
export declare namespace AcceptInvitationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptInvitationRequest) => any;
}
/**
 * <p>The request attempted an invalid action.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The request was valid but failed because of a problem with the service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The request refers to a nonexistent resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The request parameters are invalid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>An AWS account that is the administrator account of or a member of a behavior
 *          graph.</p>
 */
export interface Account {
    /**
     * <p>The account identifier of the AWS account.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>The AWS account root user email address for the AWS account.</p>
     */
    EmailAddress: string | undefined;
}
export declare namespace Account {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Account) => any;
}
export interface CreateGraphRequest {
    /**
     * <p>The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag,
     *          you provide the tag key and the tag value. Each tag key can contain up to 128 characters.
     *          Each tag value can contain up to 256 characters.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateGraphRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGraphRequest) => any;
}
export interface CreateGraphResponse {
    /**
     * <p>The ARN of the new behavior graph.</p>
     */
    GraphArn?: string;
}
export declare namespace CreateGraphResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGraphResponse) => any;
}
/**
 * <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>The request would cause the number of member accounts in the behavior graph to
 *                exceed the maximum allowed. A behavior graph cannot have more than 1000 member
 *                accounts.</p>
 *             </li>
 *             <li>
 *                <p>The request would cause the data rate for the behavior graph to exceed the maximum
 *                allowed.</p>
 *             </li>
 *             <li>
 *                <p>Detective is unable to verify the data rate for the member account. This is usually
 *                because the member account is not enrolled in Amazon GuardDuty. </p>
 *             </li>
 *          </ul>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export interface CreateMembersRequest {
    /**
     * <p>The ARN of the behavior graph to invite the member accounts to contribute their data
     *          to.</p>
     */
    GraphArn: string | undefined;
    /**
     * <p>Customized message text to include in the invitation email message to the invited member
     *          accounts.</p>
     */
    Message?: string;
    /**
     * <p>if set to <code>true</code>, then the member accounts do not receive email
     *          notifications. By default, this is set to <code>false</code>, and the member accounts
     *          receive email notifications.</p>
     */
    DisableEmailNotification?: boolean;
    /**
     * <p>The list of AWS accounts to invite to become member accounts in the behavior graph.
     *          You can invite up to 50 accounts at a time. For each invited account, the account list
     *          contains the account identifier and the AWS account root user email address.</p>
     */
    Accounts: Account[] | undefined;
}
export declare namespace CreateMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMembersRequest) => any;
}
export declare enum MemberDisabledReason {
    VOLUME_TOO_HIGH = "VOLUME_TOO_HIGH",
    VOLUME_UNKNOWN = "VOLUME_UNKNOWN"
}
export declare enum MemberStatus {
    ACCEPTED_BUT_DISABLED = "ACCEPTED_BUT_DISABLED",
    ENABLED = "ENABLED",
    INVITED = "INVITED",
    VERIFICATION_FAILED = "VERIFICATION_FAILED",
    VERIFICATION_IN_PROGRESS = "VERIFICATION_IN_PROGRESS"
}
/**
 * <p>Details about a member account that was invited to contribute to a behavior
 *          graph.</p>
 */
export interface MemberDetail {
    /**
     * <p>The AWS account identifier for the member account.</p>
     */
    AccountId?: string;
    /**
     * <p>The AWS account root user email address for the member account.</p>
     */
    EmailAddress?: string;
    /**
     * <p>The ARN of the behavior graph that the member account was invited to.</p>
     */
    GraphArn?: string;
    /**
     * @deprecated
     *
     * <p>The AWS account identifier of the administrator account for the behavior graph.</p>
     */
    MasterId?: string;
    /**
     * <p>The AWS account identifier of the administrator account for the behavior graph.</p>
     */
    AdministratorId?: string;
    /**
     * <p>The current membership status of the member account. The status can have one of the
     *          following values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>INVITED</code> - Indicates that the member was sent an invitation but has
     *                not yet responded.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VERIFICATION_IN_PROGRESS</code> - Indicates that Detective is verifying that the
     *                account identifier and email address provided for the member account match. If they
     *                do match, then Detective sends the invitation. If the email address and account
     *                identifier don't match, then the member cannot be added to the behavior graph.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VERIFICATION_FAILED</code> - Indicates that the account and email address
     *                provided for the member account do not match, and Detective did not send an invitation to
     *                the account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ENABLED</code> - Indicates that the member account accepted the invitation
     *                to contribute to the behavior graph.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ACCEPTED_BUT_DISABLED</code> - Indicates that the member account accepted
     *                the invitation but is prevented from contributing data to the behavior graph.
     *                   <code>DisabledReason</code> provides the reason why the member account is not
     *                enabled.</p>
     *             </li>
     *          </ul>
     *          <p>Member accounts that declined an invitation or that were removed from the behavior graph
     *          are not included.</p>
     */
    Status?: MemberStatus | string;
    /**
     * <p>For member accounts with a status of <code>ACCEPTED_BUT_DISABLED</code>, the reason that
     *          the member account is not enabled.</p>
     *          <p>The reason can have one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>VOLUME_TOO_HIGH</code> - Indicates that adding the member account would
     *                cause the data volume for the behavior graph to be too high.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VOLUME_UNKNOWN</code> - Indicates that Detective is unable to verify the data
     *                volume for the member account. This is usually because the member account is not
     *                enrolled in Amazon GuardDuty. </p>
     *             </li>
     *          </ul>
     */
    DisabledReason?: MemberDisabledReason | string;
    /**
     * <p>The date and time that Detective sent the invitation to the member account. The value is in
     *          milliseconds since the epoch.</p>
     */
    InvitedTime?: Date;
    /**
     * <p>The date and time that the member account was last updated. The value is in milliseconds
     *          since the epoch.</p>
     */
    UpdatedTime?: Date;
    /**
     * <p>The data volume in bytes per day for the member account.</p>
     */
    VolumeUsageInBytes?: number;
    /**
     * <p>The data and time when the member account data volume was last updated.</p>
     */
    VolumeUsageUpdatedTime?: Date;
    /**
     * @deprecated
     *
     * <p>The member account data volume as a percentage of the maximum allowed data volume. 0
     *          indicates 0 percent, and 100 indicates 100 percent.</p>
     *          <p>Note that this is not the percentage of the behavior graph data volume.</p>
     *          <p>For example, the data volume for the behavior graph is 80 GB per day. The maximum data
     *          volume is 160 GB per day. If the data volume for the member account is 40 GB per day, then
     *             <code>PercentOfGraphUtilization</code> is 25. It represents 25% of the maximum allowed
     *          data volume. </p>
     */
    PercentOfGraphUtilization?: number;
    /**
     * @deprecated
     *
     * <p>The date and time when the graph utilization percentage was last updated.</p>
     */
    PercentOfGraphUtilizationUpdatedTime?: Date;
}
export declare namespace MemberDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MemberDetail) => any;
}
/**
 * <p>A member account that was included in a request but for which the request could not be
 *          processed.</p>
 */
export interface UnprocessedAccount {
    /**
     * <p>The AWS account identifier of the member account that was not processed.</p>
     */
    AccountId?: string;
    /**
     * <p>The reason that the member account request could not be processed.</p>
     */
    Reason?: string;
}
export declare namespace UnprocessedAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnprocessedAccount) => any;
}
export interface CreateMembersResponse {
    /**
     * <p>The set of member account invitation requests that Detective was able to process. This
     *          includes accounts that are being verified, that failed verification, and that passed
     *          verification and are being sent an invitation.</p>
     */
    Members?: MemberDetail[];
    /**
     * <p>The list of accounts for which Detective was unable to process the invitation request. For
     *          each account, the list provides the reason why the request could not be processed. The list
     *          includes accounts that are already member accounts in the behavior graph.</p>
     */
    UnprocessedAccounts?: UnprocessedAccount[];
}
export declare namespace CreateMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMembersResponse) => any;
}
export interface DeleteGraphRequest {
    /**
     * <p>The ARN of the behavior graph to disable.</p>
     */
    GraphArn: string | undefined;
}
export declare namespace DeleteGraphRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGraphRequest) => any;
}
export interface DeleteMembersRequest {
    /**
     * <p>The ARN of the behavior graph to delete members from.</p>
     */
    GraphArn: string | undefined;
    /**
     * <p>The list of AWS account identifiers for the member accounts to delete from the
     *          behavior graph. You can delete up to 50 member accounts at a time.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DeleteMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMembersRequest) => any;
}
export interface DeleteMembersResponse {
    /**
     * <p>The list of AWS account identifiers for the member accounts that Detective successfully
     *          deleted from the behavior graph.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The list of member accounts that Detective was not able to delete from the behavior graph.
     *          For each member account, provides the reason that the deletion could not be
     *          processed.</p>
     */
    UnprocessedAccounts?: UnprocessedAccount[];
}
export declare namespace DeleteMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMembersResponse) => any;
}
export interface DisassociateMembershipRequest {
    /**
     * <p>The ARN of the behavior graph to remove the member account from.</p>
     *          <p>The member account's member status in the behavior graph must be
     *          <code>ENABLED</code>.</p>
     */
    GraphArn: string | undefined;
}
export declare namespace DisassociateMembershipRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMembershipRequest) => any;
}
export interface GetMembersRequest {
    /**
     * <p>The ARN of the behavior graph for which to request the member details.</p>
     */
    GraphArn: string | undefined;
    /**
     * <p>The list of AWS account identifiers for the member account for which to return member
     *          details. You can request details for up to 50 member accounts at a time.</p>
     *          <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts
     *          that were removed from the behavior graph.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace GetMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersRequest) => any;
}
export interface GetMembersResponse {
    /**
     * <p>The member account details that Detective is returning in response to the request.</p>
     */
    MemberDetails?: MemberDetail[];
    /**
     * <p>The requested member accounts for which Detective was unable to return member
     *          details.</p>
     *          <p>For each account, provides the reason why the request could not be processed.</p>
     */
    UnprocessedAccounts?: UnprocessedAccount[];
}
export declare namespace GetMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersResponse) => any;
}
export interface ListGraphsRequest {
    /**
     * <p>For requests to get the next page of results, the pagination token that was returned
     *          with the previous set of results. The initial request does not include a pagination
     *          token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of graphs to return at a time. The total must be less than the
     *          overall limit on the number of results to return, which is currently 200.</p>
     */
    MaxResults?: number;
}
export declare namespace ListGraphsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGraphsRequest) => any;
}
/**
 * <p>A behavior graph in Detective.</p>
 */
export interface Graph {
    /**
     * <p>The ARN of the behavior graph.</p>
     */
    Arn?: string;
    /**
     * <p>The date and time that the behavior graph was created. The value is in milliseconds
     *          since the epoch.</p>
     */
    CreatedTime?: Date;
}
export declare namespace Graph {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Graph) => any;
}
export interface ListGraphsResponse {
    /**
     * <p>A list of behavior graphs that the account is an administrator account for.</p>
     */
    GraphList?: Graph[];
    /**
     * <p>If there are more behavior graphs remaining in the results, then this is the pagination
     *          token to use to request the next page of behavior graphs.</p>
     */
    NextToken?: string;
}
export declare namespace ListGraphsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGraphsResponse) => any;
}
export interface ListInvitationsRequest {
    /**
     * <p>For requests to retrieve the next page of results, the pagination token that was
     *          returned with the previous page of results. The initial request does not include a
     *          pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of behavior graph invitations to return in the response. The total
     *          must be less than the overall limit on the number of results to return, which is currently
     *          200.</p>
     */
    MaxResults?: number;
}
export declare namespace ListInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInvitationsRequest) => any;
}
export interface ListInvitationsResponse {
    /**
     * <p>The list of behavior graphs for which the member account has open or accepted
     *          invitations.</p>
     */
    Invitations?: MemberDetail[];
    /**
     * <p>If there are more behavior graphs remaining in the results, then this is the pagination
     *          token to use to request the next page of behavior graphs.</p>
     */
    NextToken?: string;
}
export declare namespace ListInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInvitationsResponse) => any;
}
export interface ListMembersRequest {
    /**
     * <p>The ARN of the behavior graph for which to retrieve the list of member accounts.</p>
     */
    GraphArn: string | undefined;
    /**
     * <p>For requests to retrieve the next page of member account results, the pagination token
     *          that was returned with the previous page of results. The initial request does not include a
     *          pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of member accounts to include in the response. The total must be less
     *          than the overall limit on the number of results to return, which is currently 200.</p>
     */
    MaxResults?: number;
}
export declare namespace ListMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersRequest) => any;
}
export interface ListMembersResponse {
    /**
     * <p>The list of member accounts in the behavior graph.</p>
     *          <p>The results include member accounts that did not pass verification and member accounts
     *          that have not yet accepted the invitation to the behavior graph. The results do not include
     *          member accounts that were removed from the behavior graph.</p>
     */
    MemberDetails?: MemberDetail[];
    /**
     * <p>If there are more member accounts remaining in the results, then this is the pagination
     *          token to use to request the next page of member accounts.</p>
     */
    NextToken?: string;
}
export declare namespace ListMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the behavior graph for which to retrieve the tag values.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The tag values that are assigned to the behavior graph. The request returns up to 50 tag
     *          values.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface RejectInvitationRequest {
    /**
     * <p>The ARN of the behavior graph to reject the invitation to.</p>
     *          <p>The member account's current member status in the behavior graph must be
     *             <code>INVITED</code>.</p>
     */
    GraphArn: string | undefined;
}
export declare namespace RejectInvitationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectInvitationRequest) => any;
}
export interface StartMonitoringMemberRequest {
    /**
     * <p>The ARN of the behavior graph.</p>
     */
    GraphArn: string | undefined;
    /**
     * <p>The account ID of the member account to try to enable.</p>
     *          <p>The account must be an invited member account with a status of
     *             <code>ACCEPTED_BUT_DISABLED</code>. </p>
     */
    AccountId: string | undefined;
}
export declare namespace StartMonitoringMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartMonitoringMemberRequest) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The ARN of the behavior graph to assign the tags to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you
     *          provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each
     *          tag value can contain up to 256 characters.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
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
     * <p>The ARN of the behavior graph to remove the tags from.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags
     *          at a time.</p>
     */
    TagKeys: string[] | undefined;
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
