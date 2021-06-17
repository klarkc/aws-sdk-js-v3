import { ActionTarget, AdminAccount, AwsSecurityFinding, AwsSecurityFindingFilters, ControlStatus, NoteUpdate, RecordState, Result, StandardsSubscription } from "./models_0";
export interface DeclineInvitationsResponse {
    /**
     * <p>The list of AWS accounts that were not processed. For each account, the list includes
     *          the account ID and the email address.</p>
     */
    UnprocessedAccounts?: Result[];
}
export declare namespace DeclineInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeclineInvitationsResponse) => any;
}
export interface DeleteActionTargetRequest {
    /**
     * <p>The ARN of the custom action target to delete.</p>
     */
    ActionTargetArn: string | undefined;
}
export declare namespace DeleteActionTargetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteActionTargetRequest) => any;
}
export interface DeleteActionTargetResponse {
    /**
     * <p>The ARN of the custom action target that was deleted.</p>
     */
    ActionTargetArn: string | undefined;
}
export declare namespace DeleteActionTargetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteActionTargetResponse) => any;
}
export interface DeleteInsightRequest {
    /**
     * <p>The ARN of the insight to delete.</p>
     */
    InsightArn: string | undefined;
}
export declare namespace DeleteInsightRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInsightRequest) => any;
}
export interface DeleteInsightResponse {
    /**
     * <p>The ARN of the insight that was deleted.</p>
     */
    InsightArn: string | undefined;
}
export declare namespace DeleteInsightResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInsightResponse) => any;
}
export interface DeleteInvitationsRequest {
    /**
     * <p>The list of the account IDs that sent the invitations to delete.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DeleteInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInvitationsRequest) => any;
}
export interface DeleteInvitationsResponse {
    /**
     * <p>The list of AWS accounts for which the invitations were not deleted. For each account,
     *          the list includes the account ID and the email address.</p>
     */
    UnprocessedAccounts?: Result[];
}
export declare namespace DeleteInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInvitationsResponse) => any;
}
export interface DeleteMembersRequest {
    /**
     * <p>The list of account IDs for the member accounts to delete.</p>
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
     * <p>The list of AWS accounts that were not deleted. For each account, the list includes the
     *          account ID and the email address.</p>
     */
    UnprocessedAccounts?: Result[];
}
export declare namespace DeleteMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMembersResponse) => any;
}
export interface DescribeActionTargetsRequest {
    /**
     * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
     */
    ActionTargetArns?: string[];
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeActionTargetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeActionTargetsRequest) => any;
}
export interface DescribeActionTargetsResponse {
    /**
     * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
     *             <code>Description</code>, and <code>Name</code> of a custom action target available in
     *          Security Hub.</p>
     */
    ActionTargets: ActionTarget[] | undefined;
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeActionTargetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeActionTargetsResponse) => any;
}
export interface DescribeHubRequest {
    /**
     * <p>The ARN of the Hub resource to retrieve.</p>
     */
    HubArn?: string;
}
export declare namespace DescribeHubRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHubRequest) => any;
}
export interface DescribeHubResponse {
    /**
     * <p>The ARN of the Hub resource that was retrieved.</p>
     */
    HubArn?: string;
    /**
     * <p>The date and time when Security Hub was enabled in the account.</p>
     */
    SubscribedAt?: string;
    /**
     * <p>Whether to automatically enable new controls when they are added to standards that are
     *          enabled.</p>
     *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
     *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
     */
    AutoEnableControls?: boolean;
}
export declare namespace DescribeHubResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHubResponse) => any;
}
export interface DescribeOrganizationConfigurationRequest {
}
export declare namespace DescribeOrganizationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationConfigurationRequest) => any;
}
export interface DescribeOrganizationConfigurationResponse {
    /**
     * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
     *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
     *          then new accounts are not added automatically.</p>
     */
    AutoEnable?: boolean;
    /**
     * <p>Whether the maximum number of allowed member accounts are already associated with the
     *          Security Hub administrator account.</p>
     */
    MemberAccountLimitReached?: boolean;
}
export declare namespace DescribeOrganizationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationConfigurationResponse) => any;
}
export interface DescribeProductsRequest {
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>DescribeProducts</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The ARN of the integration to return.</p>
     */
    ProductArn?: string;
}
export declare namespace DescribeProductsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductsRequest) => any;
}
export declare enum IntegrationType {
    RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
    SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
    UPDATE_FINDINGS_IN_SECURITY_HUB = "UPDATE_FINDINGS_IN_SECURITY_HUB"
}
/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
    /**
     * <p>The ARN assigned to the product.</p>
     */
    ProductArn: string | undefined;
    /**
     * <p>The name of the product.</p>
     */
    ProductName?: string;
    /**
     * <p>The name of the company that provides the product.</p>
     */
    CompanyName?: string;
    /**
     * <p>A description of the product.</p>
     */
    Description?: string;
    /**
     * <p>The categories assigned to the product.</p>
     */
    Categories?: string[];
    /**
     * <p>The types of integration that the product supports. Available values are the
     *          following.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
     *                findings to Security Hub.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
     *                receives findings from Security Hub.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
     *             </li>
     *          </ul>
     */
    IntegrationTypes?: (IntegrationType | string)[];
    /**
     * <p>For integrations with AWS services, the AWS Console URL from which to activate the service.</p>
     *          <p>For integrations with third-party products, the AWS Marketplace URL from which to subscribe to or purchase the product.</p>
     */
    MarketplaceUrl?: string;
    /**
     * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
     */
    ActivationUrl?: string;
    /**
     * <p>The resource policy associated with the product.</p>
     */
    ProductSubscriptionResourcePolicy?: string;
}
export declare namespace Product {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Product) => any;
}
export interface DescribeProductsResponse {
    /**
     * <p>A list of products, including details for each product.</p>
     */
    Products: Product[] | undefined;
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeProductsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductsResponse) => any;
}
export interface DescribeStandardsRequest {
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>DescribeStandards</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of standards to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeStandardsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStandardsRequest) => any;
}
/**
 * <p>Provides information about a specific standard.</p>
 */
export interface Standard {
    /**
     * <p>The ARN of a standard.</p>
     */
    StandardsArn?: string;
    /**
     * <p>The name of the standard.</p>
     */
    Name?: string;
    /**
     * <p>A description of the standard.</p>
     */
    Description?: string;
    /**
     * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
     *          standard is enabled by default, the check box for that standard is selected by
     *          default.</p>
     *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
     *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
     *             <code>false</code>.</p>
     */
    EnabledByDefault?: boolean;
}
export declare namespace Standard {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Standard) => any;
}
export interface DescribeStandardsResponse {
    /**
     * <p>A list of available standards.</p>
     */
    Standards?: Standard[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeStandardsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStandardsResponse) => any;
}
export interface DescribeStandardsControlsRequest {
    /**
     * <p>The ARN of a resource that represents your subscription to a supported standard. To get
     *          the subscription ARNs of the standards you have enabled, use the <code>
     *                <a>GetEnabledStandards</a>
     *             </code> operation.</p>
     */
    StandardsSubscriptionArn: string | undefined;
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of security standard controls to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeStandardsControlsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStandardsControlsRequest) => any;
}
export declare enum SeverityRating {
    CRITICAL = "CRITICAL",
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM"
}
/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
    /**
     * <p>The ARN of the security standard control.</p>
     */
    StandardsControlArn?: string;
    /**
     * <p>The current status of the security standard control. Indicates whether the control is
     *          enabled or disabled. Security Hub does not check against disabled controls.</p>
     */
    ControlStatus?: ControlStatus | string;
    /**
     * <p>The reason provided for the most recent change in status for the control.</p>
     */
    DisabledReason?: string;
    /**
     * <p>The date and time that the status of the security standard control was most recently
     *          updated.</p>
     */
    ControlStatusUpdatedAt?: Date;
    /**
     * <p>The identifier of the security standard control.</p>
     */
    ControlId?: string;
    /**
     * <p>The title of the security standard control.</p>
     */
    Title?: string;
    /**
     * <p>The longer description of the security standard control. Provides information about what
     *          the control is checking for.</p>
     */
    Description?: string;
    /**
     * <p>A link to remediation information for the control in the Security Hub user
     *          documentation.</p>
     */
    RemediationUrl?: string;
    /**
     * <p>The severity of findings generated from this security standard control.</p>
     *          <p>The finding severity is based on an assessment of how easy it would be to compromise AWS
     *          resources if the issue is detected.</p>
     */
    SeverityRating?: SeverityRating | string;
    /**
     * <p>The list of requirements that are related to this control.</p>
     */
    RelatedRequirements?: string[];
}
export declare namespace StandardsControl {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StandardsControl) => any;
}
export interface DescribeStandardsControlsResponse {
    /**
     * <p>A list of security standards controls.</p>
     */
    Controls?: StandardsControl[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeStandardsControlsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStandardsControlsResponse) => any;
}
export interface DisableImportFindingsForProductRequest {
    /**
     * <p>The ARN of the integrated product to disable the integration for.</p>
     */
    ProductSubscriptionArn: string | undefined;
}
export declare namespace DisableImportFindingsForProductRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableImportFindingsForProductRequest) => any;
}
export interface DisableImportFindingsForProductResponse {
}
export declare namespace DisableImportFindingsForProductResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableImportFindingsForProductResponse) => any;
}
export interface DisableOrganizationAdminAccountRequest {
    /**
     * <p>The AWS account identifier of the Security Hub administrator account.</p>
     */
    AdminAccountId: string | undefined;
}
export declare namespace DisableOrganizationAdminAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableOrganizationAdminAccountRequest) => any;
}
export interface DisableOrganizationAdminAccountResponse {
}
export declare namespace DisableOrganizationAdminAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableOrganizationAdminAccountResponse) => any;
}
export interface DisableSecurityHubRequest {
}
export declare namespace DisableSecurityHubRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableSecurityHubRequest) => any;
}
export interface DisableSecurityHubResponse {
}
export declare namespace DisableSecurityHubResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableSecurityHubResponse) => any;
}
export interface DisassociateFromAdministratorAccountRequest {
}
export declare namespace DisassociateFromAdministratorAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromAdministratorAccountRequest) => any;
}
export interface DisassociateFromAdministratorAccountResponse {
}
export declare namespace DisassociateFromAdministratorAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromAdministratorAccountResponse) => any;
}
export interface DisassociateFromMasterAccountRequest {
}
export declare namespace DisassociateFromMasterAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromMasterAccountRequest) => any;
}
export interface DisassociateFromMasterAccountResponse {
}
export declare namespace DisassociateFromMasterAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromMasterAccountResponse) => any;
}
export interface DisassociateMembersRequest {
    /**
     * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DisassociateMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMembersRequest) => any;
}
export interface DisassociateMembersResponse {
}
export declare namespace DisassociateMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMembersResponse) => any;
}
export interface EnableImportFindingsForProductRequest {
    /**
     * <p>The ARN of the product to enable the integration for.</p>
     */
    ProductArn: string | undefined;
}
export declare namespace EnableImportFindingsForProductRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableImportFindingsForProductRequest) => any;
}
export interface EnableImportFindingsForProductResponse {
    /**
     * <p>The ARN of your subscription to the product to enable integrations for.</p>
     */
    ProductSubscriptionArn?: string;
}
export declare namespace EnableImportFindingsForProductResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableImportFindingsForProductResponse) => any;
}
export interface EnableOrganizationAdminAccountRequest {
    /**
     * <p>The AWS account identifier of the account to designate as the Security Hub administrator
     *          account.</p>
     */
    AdminAccountId: string | undefined;
}
export declare namespace EnableOrganizationAdminAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableOrganizationAdminAccountRequest) => any;
}
export interface EnableOrganizationAdminAccountResponse {
}
export declare namespace EnableOrganizationAdminAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableOrganizationAdminAccountResponse) => any;
}
export interface EnableSecurityHubRequest {
    /**
     * <p>The tags to add to the hub resource when you enable Security Hub.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>Whether to enable the security standards that Security Hub has designated as automatically
     *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
     *          to <code>true</code>. To not enable the automatically enabled standards, set
     *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
     */
    EnableDefaultStandards?: boolean;
}
export declare namespace EnableSecurityHubRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSecurityHubRequest) => any;
}
export interface EnableSecurityHubResponse {
}
export declare namespace EnableSecurityHubResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSecurityHubResponse) => any;
}
export interface GetAdministratorAccountRequest {
}
export declare namespace GetAdministratorAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAdministratorAccountRequest) => any;
}
/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
    /**
     * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID of the invitation sent to the member account.</p>
     */
    InvitationId?: string;
    /**
     * <p>The timestamp of when the invitation was sent.</p>
     */
    InvitedAt?: Date;
    /**
     * <p>The current status of the association between the member and administrator accounts.</p>
     */
    MemberStatus?: string;
}
export declare namespace Invitation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Invitation) => any;
}
export interface GetAdministratorAccountResponse {
    /**
     * <p>Details about an invitation.</p>
     */
    Administrator?: Invitation;
}
export declare namespace GetAdministratorAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAdministratorAccountResponse) => any;
}
export interface GetEnabledStandardsRequest {
    /**
     * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
     */
    StandardsSubscriptionArns?: string[];
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in the response.</p>
     */
    MaxResults?: number;
}
export declare namespace GetEnabledStandardsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEnabledStandardsRequest) => any;
}
export interface GetEnabledStandardsResponse {
    /**
     * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
     *          the enabled standards.</p>
     */
    StandardsSubscriptions?: StandardsSubscription[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetEnabledStandardsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEnabledStandardsResponse) => any;
}
export declare enum SortOrder {
    ASCENDING = "asc",
    DESCENDING = "desc"
}
/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
    /**
     * <p>The finding attribute used to sort findings.</p>
     */
    Field?: string;
    /**
     * <p>The order used to sort findings.</p>
     */
    SortOrder?: SortOrder | string;
}
export declare namespace SortCriterion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SortCriterion) => any;
}
export interface GetFindingsRequest {
    /**
     * <p>The finding attributes used to define a condition to filter the returned
     *          findings.</p>
     *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
     *          20 filter values.</p>
     *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
     *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * <p>The finding attributes used to sort the list of returned findings.</p>
     */
    SortCriteria?: SortCriterion[];
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>GetFindings</code> operation, set the value of this parameter to
     *          <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of findings to return.</p>
     */
    MaxResults?: number;
}
export declare namespace GetFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsRequest) => any;
}
export interface GetFindingsResponse {
    /**
     * <p>The findings that matched the filters specified in the request.</p>
     */
    Findings: AwsSecurityFinding[] | undefined;
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsResponse) => any;
}
export interface GetInsightResultsRequest {
    /**
     * <p>The ARN of the insight for which to return results.</p>
     */
    InsightArn: string | undefined;
}
export declare namespace GetInsightResultsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInsightResultsRequest) => any;
}
/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
    /**
     * <p>The value of the attribute that the findings are grouped by for the insight whose
     *          results are returned by the <code>GetInsightResults</code> operation.</p>
     */
    GroupByAttributeValue: string | undefined;
    /**
     * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
     */
    Count: number | undefined;
}
export declare namespace InsightResultValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsightResultValue) => any;
}
/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
    /**
     * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
     *          operation.</p>
     */
    InsightArn: string | undefined;
    /**
     * <p>The attribute that the findings are grouped by for the insight whose results are
     *          returned by the <code>GetInsightResults</code> operation.</p>
     */
    GroupByAttribute: string | undefined;
    /**
     * <p>The list of insight result values returned by the <code>GetInsightResults</code>
     *          operation.</p>
     */
    ResultValues: InsightResultValue[] | undefined;
}
export declare namespace InsightResults {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsightResults) => any;
}
export interface GetInsightResultsResponse {
    /**
     * <p>The insight results returned by the operation.</p>
     */
    InsightResults: InsightResults | undefined;
}
export declare namespace GetInsightResultsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInsightResultsResponse) => any;
}
export interface GetInsightsRequest {
    /**
     * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
     *             <code>GetInsights</code> returns all of your custom insights. It does not return any
     *          managed insights.</p>
     */
    InsightArns?: string[];
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>GetInsights</code> operation, set the value of this parameter to
     *          <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return in the response.</p>
     */
    MaxResults?: number;
}
export declare namespace GetInsightsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInsightsRequest) => any;
}
/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
    /**
     * <p>The ARN of a Security Hub insight.</p>
     */
    InsightArn: string | undefined;
    /**
     * <p>The name of a Security Hub insight.</p>
     */
    Name: string | undefined;
    /**
     * <p>One or more attributes used to filter the findings included in the insight. The insight
     *          only includes findings that match the criteria defined in the filters.</p>
     */
    Filters: AwsSecurityFindingFilters | undefined;
    /**
     * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
     *          findings, and identifies the type of item that the insight applies to. For example, if an
     *          insight is grouped by resource identifier, then the insight produces a list of resource
     *          identifiers.</p>
     */
    GroupByAttribute: string | undefined;
}
export declare namespace Insight {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Insight) => any;
}
export interface GetInsightsResponse {
    /**
     * <p>The insights returned by the operation.</p>
     */
    Insights: Insight[] | undefined;
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetInsightsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInsightsResponse) => any;
}
export interface GetInvitationsCountRequest {
}
export declare namespace GetInvitationsCountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInvitationsCountRequest) => any;
}
export interface GetInvitationsCountResponse {
    /**
     * <p>The number of all membership invitations sent to this Security Hub member account, not
     *          including the currently accepted invitation.</p>
     */
    InvitationsCount?: number;
}
export declare namespace GetInvitationsCountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInvitationsCountResponse) => any;
}
export interface GetMasterAccountRequest {
}
export declare namespace GetMasterAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMasterAccountRequest) => any;
}
export interface GetMasterAccountResponse {
    /**
     * <p>A list of details about the Security Hub administrator account for the current member account.
     *       </p>
     */
    Master?: Invitation;
}
export declare namespace GetMasterAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMasterAccountResponse) => any;
}
export interface GetMembersRequest {
    /**
     * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace GetMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersRequest) => any;
}
/**
 * <p>The details about a member account.</p>
 */
export interface Member {
    /**
     * <p>The AWS account ID of the member account.</p>
     */
    AccountId?: string;
    /**
     * <p>The email address of the member account.</p>
     */
    Email?: string;
    /**
     * @deprecated
     *
     * <p>This is replaced by <code>AdministratorID</code>.</p>
     *          <p>The AWS account ID of the Security Hub administrator account associated with this member account.</p>
     */
    MasterId?: string;
    /**
     * <p>The AWS account ID of the Security Hub administrator account associated with this member account.</p>
     */
    AdministratorId?: string;
    /**
     * <p>The status of the relationship between the member account and its administrator account.
     *       </p>
     *          <p>The status can have one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CREATED</code> - Indicates that the administrator account added the member account,
     *                but has not yet invited the member account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INVITED</code> - Indicates that the administrator account invited the member
     *                account. The member account has not yet responded to the invitation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ENABLED</code> - Indicates that the member account is currently active. For
     *                manually invited member accounts, indicates that the member account accepted the
     *                invitation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>REMOVED</code> - Indicates that the administrator account disassociated the member
     *                account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
     *                from the administrator account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DELETED</code> - Indicates that the administrator account deleted the member
     *                account.</p>
     *             </li>
     *          </ul>
     */
    MemberStatus?: string;
    /**
     * <p>A timestamp for the date and time when the invitation was sent to the member
     *          account.</p>
     */
    InvitedAt?: Date;
    /**
     * <p>The timestamp for the date and time when the member account was updated.</p>
     */
    UpdatedAt?: Date;
}
export declare namespace Member {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Member) => any;
}
export interface GetMembersResponse {
    /**
     * <p>The list of details about the Security Hub member accounts.</p>
     */
    Members?: Member[];
    /**
     * <p>The list of AWS accounts that could not be processed. For each account, the list
     *          includes the account ID and the email address.</p>
     */
    UnprocessedAccounts?: Result[];
}
export declare namespace GetMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersResponse) => any;
}
export interface InviteMembersRequest {
    /**
     * <p>The list of account IDs of the AWS accounts to invite to Security Hub as members. </p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace InviteMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InviteMembersRequest) => any;
}
export interface InviteMembersResponse {
    /**
     * <p>The list of AWS accounts that could not be processed. For each account, the list
     *          includes the account ID and the email address.</p>
     */
    UnprocessedAccounts?: Result[];
}
export declare namespace InviteMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InviteMembersResponse) => any;
}
export interface ListEnabledProductsForImportRequest {
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return in the response.</p>
     */
    MaxResults?: number;
}
export declare namespace ListEnabledProductsForImportRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEnabledProductsForImportRequest) => any;
}
export interface ListEnabledProductsForImportResponse {
    /**
     * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
     */
    ProductSubscriptions?: string[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListEnabledProductsForImportResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEnabledProductsForImportResponse) => any;
}
export interface ListInvitationsRequest {
    /**
     * <p>The maximum number of items to return in the response. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>ListInvitations</code> operation, set the value of this parameter to
     *             <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
}
export declare namespace ListInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInvitationsRequest) => any;
}
export interface ListInvitationsResponse {
    /**
     * <p>The details of the invitations returned by the operation.</p>
     */
    Invitations?: Invitation[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
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
     * <p>Specifies which member accounts to include in the response based on their relationship
     *          status with the administrator account. The default value is <code>TRUE</code>.</p>
     *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
     *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
     *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
     *          existing member accounts. </p>
     */
    OnlyAssociated?: boolean;
    /**
     * <p>The maximum number of items to return in the response. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>ListMembers</code> operation, set the value of this parameter to
     *          <code>NULL</code>.</p>
     *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
     *          parameter to the value returned from the previous response.</p>
     */
    NextToken?: string;
}
export declare namespace ListMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersRequest) => any;
}
export interface ListMembersResponse {
    /**
     * <p>Member details returned by the operation.</p>
     */
    Members?: Member[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersResponse) => any;
}
export interface ListOrganizationAdminAccountsRequest {
    /**
     * <p>The maximum number of items to return in the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token that is required for pagination. On your first call to the
     *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
     *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
     *          the value of this parameter to the value returned from the previous response. </p>
     */
    NextToken?: string;
}
export declare namespace ListOrganizationAdminAccountsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationAdminAccountsRequest) => any;
}
export interface ListOrganizationAdminAccountsResponse {
    /**
     * <p>The list of Security Hub administrator accounts.</p>
     */
    AdminAccounts?: AdminAccount[];
    /**
     * <p>The pagination token to use to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListOrganizationAdminAccountsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationAdminAccountsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource to retrieve tags for.</p>
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
     * <p>The tags associated with a resource.</p>
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
export interface TagResourceRequest {
    /**
     * <p>The ARN of the resource to apply the tags to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
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
     * <p>The ARN of the resource to remove the tags from.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
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
export interface UpdateActionTargetRequest {
    /**
     * <p>The ARN of the custom action target to update.</p>
     */
    ActionTargetArn: string | undefined;
    /**
     * <p>The updated name of the custom action target.</p>
     */
    Name?: string;
    /**
     * <p>The updated description for the custom action target.</p>
     */
    Description?: string;
}
export declare namespace UpdateActionTargetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateActionTargetRequest) => any;
}
export interface UpdateActionTargetResponse {
}
export declare namespace UpdateActionTargetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateActionTargetResponse) => any;
}
export interface UpdateFindingsRequest {
    /**
     * <p>A collection of attributes that specify which findings you want to update.</p>
     */
    Filters: AwsSecurityFindingFilters | undefined;
    /**
     * <p>The updated note for the finding.</p>
     */
    Note?: NoteUpdate;
    /**
     * <p>The updated record state for the finding.</p>
     */
    RecordState?: RecordState | string;
}
export declare namespace UpdateFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFindingsRequest) => any;
}
export interface UpdateFindingsResponse {
}
export declare namespace UpdateFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFindingsResponse) => any;
}
export interface UpdateInsightRequest {
    /**
     * <p>The ARN of the insight that you want to update.</p>
     */
    InsightArn: string | undefined;
    /**
     * <p>The updated name for the insight.</p>
     */
    Name?: string;
    /**
     * <p>The updated filters that define this insight.</p>
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
     */
    GroupByAttribute?: string;
}
export declare namespace UpdateInsightRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInsightRequest) => any;
}
export interface UpdateInsightResponse {
}
export declare namespace UpdateInsightResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInsightResponse) => any;
}
export interface UpdateOrganizationConfigurationRequest {
    /**
     * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
     *          <p>By default, this is <code>false</code>, and new accounts are not added
     *          automatically.</p>
     *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
     */
    AutoEnable: boolean | undefined;
}
export declare namespace UpdateOrganizationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOrganizationConfigurationRequest) => any;
}
export interface UpdateOrganizationConfigurationResponse {
}
export declare namespace UpdateOrganizationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOrganizationConfigurationResponse) => any;
}
export interface UpdateSecurityHubConfigurationRequest {
    /**
     * <p>Whether to automatically enable new controls when they are added to standards that are
     *          enabled.</p>
     *          <p>By default, this is set to <code>true</code>, and new controls are enabled
     *          automatically. To not automatically enable new controls, set this to <code>false</code>.
     *       </p>
     */
    AutoEnableControls?: boolean;
}
export declare namespace UpdateSecurityHubConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSecurityHubConfigurationRequest) => any;
}
export interface UpdateSecurityHubConfigurationResponse {
}
export declare namespace UpdateSecurityHubConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSecurityHubConfigurationResponse) => any;
}
export interface UpdateStandardsControlRequest {
    /**
     * <p>The ARN of the security standard control to enable or disable.</p>
     */
    StandardsControlArn: string | undefined;
    /**
     * <p>The updated status of the security standard control.</p>
     */
    ControlStatus?: ControlStatus | string;
    /**
     * <p>A description of the reason why you are disabling a security standard control. If you
     *          are disabling a control, then this is required.</p>
     */
    DisabledReason?: string;
}
export declare namespace UpdateStandardsControlRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStandardsControlRequest) => any;
}
export interface UpdateStandardsControlResponse {
}
export declare namespace UpdateStandardsControlResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStandardsControlResponse) => any;
}
