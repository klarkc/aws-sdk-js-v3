import { GuardDutyClient } from "./GuardDutyClient";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "./commands/ArchiveFindingsCommand";
import { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "./commands/CreateDetectorCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { CreatePublishingDestinationCommandInput, CreatePublishingDestinationCommandOutput } from "./commands/CreatePublishingDestinationCommand";
import { CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput } from "./commands/CreateSampleFindingsCommand";
import { CreateThreatIntelSetCommandInput, CreateThreatIntelSetCommandOutput } from "./commands/CreateThreatIntelSetCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import { DeletePublishingDestinationCommandInput, DeletePublishingDestinationCommandOutput } from "./commands/DeletePublishingDestinationCommand";
import { DeleteThreatIntelSetCommandInput, DeleteThreatIntelSetCommandOutput } from "./commands/DeleteThreatIntelSetCommand";
import { DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput } from "./commands/DescribeOrganizationConfigurationCommand";
import { DescribePublishingDestinationCommandInput, DescribePublishingDestinationCommandOutput } from "./commands/DescribePublishingDestinationCommand";
import { DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput } from "./commands/DisableOrganizationAdminAccountCommand";
import { DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput } from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMembersCommandInput, DisassociateMembersCommandOutput } from "./commands/DisassociateMembersCommand";
import { EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput } from "./commands/EnableOrganizationAdminAccountCommand";
import { GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand";
import { GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetFindingsStatisticsCommandInput, GetFindingsStatisticsCommandOutput } from "./commands/GetFindingsStatisticsCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import { GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput } from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput } from "./commands/GetMemberDetectorsCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput } from "./commands/GetThreatIntelSetCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "./commands/ListDetectorsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "./commands/ListOrganizationAdminAccountsCommand";
import { ListPublishingDestinationsCommandInput, ListPublishingDestinationsCommandOutput } from "./commands/ListPublishingDestinationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListThreatIntelSetsCommandInput, ListThreatIntelSetsCommandOutput } from "./commands/ListThreatIntelSetsCommand";
import { StartMonitoringMembersCommandInput, StartMonitoringMembersCommandOutput } from "./commands/StartMonitoringMembersCommand";
import { StopMonitoringMembersCommandInput, StopMonitoringMembersCommandOutput } from "./commands/StopMonitoringMembersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput } from "./commands/UnarchiveFindingsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "./commands/UpdateDetectorCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import { UpdateFindingsFeedbackCommandInput, UpdateFindingsFeedbackCommandOutput } from "./commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import { UpdateMemberDetectorsCommandInput, UpdateMemberDetectorsCommandOutput } from "./commands/UpdateMemberDetectorsCommand";
import { UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput } from "./commands/UpdateOrganizationConfigurationCommand";
import { UpdatePublishingDestinationCommandInput, UpdatePublishingDestinationCommandOutput } from "./commands/UpdatePublishingDestinationCommand";
import { UpdateThreatIntelSetCommandInput, UpdateThreatIntelSetCommandOutput } from "./commands/UpdateThreatIntelSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses
 *       threat intelligence feeds (such as lists of malicious IPs and domains) and machine learning to
 *       identify unexpected, potentially unauthorized, and malicious activity within your AWS
 *       environment. This can include issues like escalations of privileges, uses of exposed
 *       credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can
 *       detect compromised EC2 instances that serve malware or mine bitcoin. </p>
 *          <p>GuardDuty also monitors AWS account access behavior for signs of compromise. Some examples
 *       of this are unauthorized infrastructure deployments such as EC2 instances deployed in a Region
 *       that has never been used, or unusual API calls like a password policy change to reduce
 *       password strength. </p>
 *          <p>GuardDuty informs you of the status of your AWS environment by producing security findings
 *       that you can view in the GuardDuty console or through Amazon CloudWatch events. For more
 *       information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 */
export declare class GuardDuty extends GuardDutyClient {
    /**
     * <p>Accepts the invitation to be monitored by a GuardDuty administrator account.</p>
     */
    acceptInvitation(args: AcceptInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInvitationCommandOutput>;
    acceptInvitation(args: AcceptInvitationCommandInput, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    acceptInvitation(args: AcceptInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    /**
     * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
     *          <note>
     *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
     *         archive findings from their accounts.</p>
     *          </note>
     */
    archiveFindings(args: ArchiveFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ArchiveFindingsCommandOutput>;
    archiveFindings(args: ArchiveFindingsCommandInput, cb: (err: any, data?: ArchiveFindingsCommandOutput) => void): void;
    archiveFindings(args: ArchiveFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ArchiveFindingsCommandOutput) => void): void;
    /**
     * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
     *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
     *       you enable the service. You can have only one detector per account per Region. All data
     *       sources are enabled in a new detector by default.</p>
     */
    createDetector(args: CreateDetectorCommandInput, options?: __HttpHandlerOptions): Promise<CreateDetectorCommandOutput>;
    createDetector(args: CreateDetectorCommandInput, cb: (err: any, data?: CreateDetectorCommandOutput) => void): void;
    createDetector(args: CreateDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDetectorCommandOutput) => void): void;
    /**
     * <p>Creates a filter using the specified finding criteria.</p>
     */
    createFilter(args: CreateFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateFilterCommandOutput>;
    createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
    createFilter(args: CreateFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
    /**
     * <p>Creates a new IPSet, which is called a trusted IP list in the console user interface. An
     *       IPSet is a list of IP addresses that are trusted for secure communication with AWS
     *       infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
     *       included in IPSets. Only users from the administrator account can use this operation.</p>
     */
    createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
    createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
    createIPSet(args: CreateIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
    /**
     * <p>Creates member accounts of the current AWS account by specifying a list of AWS account
     *       IDs. This step is a prerequisite for managing the associated member accounts either by
     *       invitation or through an organization.</p>
     *          <p>When using <code>Create Members</code> as an organizations delegated administrator this
     *       action will enable GuardDuty in the added member accounts, with the exception of the
     *       organization delegated administrator account, which must enable GuardDuty prior to being added as a
     *       member.</p>
     *          <p>If you are adding accounts by invitation use this action after GuardDuty has been enabled
     *       in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">
     *                <code>Invite
     *         Members</code>
     *             </a>.</p>
     */
    createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
    createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    createMembers(args: CreateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
    /**
     * <p>Creates a publishing destination to export findings to. The resource to export findings to
     *       must exist before you use this operation.</p>
     */
    createPublishingDestination(args: CreatePublishingDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreatePublishingDestinationCommandOutput>;
    createPublishingDestination(args: CreatePublishingDestinationCommandInput, cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void): void;
    createPublishingDestination(args: CreatePublishingDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void): void;
    /**
     * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is
     *       specified for <code>findingTypes</code>, the API generates example findings of all supported
     *       finding types.</p>
     */
    createSampleFindings(args: CreateSampleFindingsCommandInput, options?: __HttpHandlerOptions): Promise<CreateSampleFindingsCommandOutput>;
    createSampleFindings(args: CreateSampleFindingsCommandInput, cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void): void;
    createSampleFindings(args: CreateSampleFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void): void;
    /**
     * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
     *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
     *       use this operation.</p>
     */
    createThreatIntelSet(args: CreateThreatIntelSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateThreatIntelSetCommandOutput>;
    createThreatIntelSet(args: CreateThreatIntelSetCommandInput, cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void): void;
    createThreatIntelSet(args: CreateThreatIntelSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void): void;
    /**
     * <p>Declines invitations sent to the current member account by AWS accounts specified by their
     *       account IDs.</p>
     */
    declineInvitations(args: DeclineInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeclineInvitationsCommandOutput>;
    declineInvitations(args: DeclineInvitationsCommandInput, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    declineInvitations(args: DeclineInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</p>
     */
    deleteDetector(args: DeleteDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDetectorCommandOutput>;
    deleteDetector(args: DeleteDetectorCommandInput, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
    deleteDetector(args: DeleteDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
    /**
     * <p>Deletes the filter specified by the filter name.</p>
     */
    deleteFilter(args: DeleteFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFilterCommandOutput>;
    deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
    deleteFilter(args: DeleteFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
    /**
     * <p>Deletes invitations sent to the current member account by AWS accounts specified by their
     *       account IDs.</p>
     */
    deleteInvitations(args: DeleteInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInvitationsCommandOutput>;
    deleteInvitations(args: DeleteInvitationsCommandInput, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    deleteInvitations(args: DeleteInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    /**
     * <p>Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP
     *       lists in the console user interface.</p>
     */
    deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
    deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
    deleteIPSet(args: DeleteIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
    /**
     * <p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by
     *       the account IDs.</p>
     */
    deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
    deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    deleteMembers(args: DeleteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
    /**
     * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
     */
    deletePublishingDestination(args: DeletePublishingDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeletePublishingDestinationCommandOutput>;
    deletePublishingDestination(args: DeletePublishingDestinationCommandInput, cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void): void;
    deletePublishingDestination(args: DeletePublishingDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void): void;
    /**
     * <p>Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
     */
    deleteThreatIntelSet(args: DeleteThreatIntelSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThreatIntelSetCommandOutput>;
    deleteThreatIntelSet(args: DeleteThreatIntelSetCommandInput, cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void): void;
    deleteThreatIntelSet(args: DeleteThreatIntelSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void): void;
    /**
     * <p>Returns information about the account selected as the delegated administrator for
     *       GuardDuty.</p>
     */
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConfigurationCommandOutput>;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns information about the publishing destination specified by the provided
     *         <code>destinationId</code>.</p>
     */
    describePublishingDestination(args: DescribePublishingDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DescribePublishingDestinationCommandOutput>;
    describePublishingDestination(args: DescribePublishingDestinationCommandInput, cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void): void;
    describePublishingDestination(args: DescribePublishingDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void): void;
    /**
     * <p>Disables an AWS account within the Organization as the GuardDuty delegated
     *       administrator.</p>
     */
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisableOrganizationAdminAccountCommandOutput>;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
     */
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFromMasterAccountCommandOutput>;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates GuardDuty member accounts (to the current GuardDuty administrator account)
     *       specified by the account IDs.</p>
     */
    disassociateMembers(args: DisassociateMembersCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMembersCommandOutput>;
    disassociateMembers(args: DisassociateMembersCommandInput, cb: (err: any, data?: DisassociateMembersCommandOutput) => void): void;
    disassociateMembers(args: DisassociateMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMembersCommandOutput) => void): void;
    /**
     * <p>Enables an AWS account within the organization as the GuardDuty delegated
     *       administrator.</p>
     */
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<EnableOrganizationAdminAccountCommandOutput>;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p>
     */
    getDetector(args: GetDetectorCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorCommandOutput>;
    getDetector(args: GetDetectorCommandInput, cb: (err: any, data?: GetDetectorCommandOutput) => void): void;
    getDetector(args: GetDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorCommandOutput) => void): void;
    /**
     * <p>Returns the details of the filter specified by the filter name.</p>
     */
    getFilter(args: GetFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetFilterCommandOutput>;
    getFilter(args: GetFilterCommandInput, cb: (err: any, data?: GetFilterCommandOutput) => void): void;
    getFilter(args: GetFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFilterCommandOutput) => void): void;
    /**
     * <p>Describes Amazon GuardDuty findings specified by finding IDs.</p>
     */
    getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
    getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    getFindings(args: GetFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    /**
     * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
     */
    getFindingsStatistics(args: GetFindingsStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsStatisticsCommandOutput>;
    getFindingsStatistics(args: GetFindingsStatisticsCommandInput, cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void): void;
    getFindingsStatistics(args: GetFindingsStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void): void;
    /**
     * <p>Returns the count of all GuardDuty membership invitations that were sent to the current
     *       member account except the currently accepted invitation.</p>
     */
    getInvitationsCount(args: GetInvitationsCountCommandInput, options?: __HttpHandlerOptions): Promise<GetInvitationsCountCommandOutput>;
    getInvitationsCount(args: GetInvitationsCountCommandInput, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    getInvitationsCount(args: GetInvitationsCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    /**
     * <p>Retrieves the IPSet specified by the <code>ipSetId</code>.</p>
     */
    getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
    getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
    getIPSet(args: GetIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
    /**
     * <p>Provides the details for the GuardDuty administrator account associated with the current
     *       GuardDuty member account.</p>
     */
    getMasterAccount(args: GetMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetMasterAccountCommandOutput>;
    getMasterAccount(args: GetMasterAccountCommandInput, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    getMasterAccount(args: GetMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    /**
     * <p>Describes which data sources are enabled for the member account's detector.</p>
     */
    getMemberDetectors(args: GetMemberDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberDetectorsCommandOutput>;
    getMemberDetectors(args: GetMemberDetectorsCommandInput, cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void): void;
    getMemberDetectors(args: GetMemberDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void): void;
    /**
     * <p>Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by
     *       the account IDs.</p>
     */
    getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
    getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    getMembers(args: GetMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
    /**
     * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
     */
    getThreatIntelSet(args: GetThreatIntelSetCommandInput, options?: __HttpHandlerOptions): Promise<GetThreatIntelSetCommandOutput>;
    getThreatIntelSet(args: GetThreatIntelSetCommandInput, cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void): void;
    getThreatIntelSet(args: GetThreatIntelSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void): void;
    /**
     * <p>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
     *       ID. For newly enabled detectors or data sources the cost returned will include only the usage
     *       so far under 30 days, this may differ from the cost metrics in the console, which projects
     *       usage over 30 days to provide a monthly cost estimate. For more information see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.</p>
     */
    getUsageStatistics(args: GetUsageStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageStatisticsCommandOutput>;
    getUsageStatistics(args: GetUsageStatisticsCommandInput, cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void): void;
    getUsageStatistics(args: GetUsageStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void): void;
    /**
     * <p>Invites other AWS accounts (created as members of the current AWS account by
     *       CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these
     *       accounts' findings on their behalf as the GuardDuty administrator account.</p>
     */
    inviteMembers(args: InviteMembersCommandInput, options?: __HttpHandlerOptions): Promise<InviteMembersCommandOutput>;
    inviteMembers(args: InviteMembersCommandInput, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
    inviteMembers(args: InviteMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
    /**
     * <p>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</p>
     */
    listDetectors(args: ListDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectorsCommandOutput>;
    listDetectors(args: ListDetectorsCommandInput, cb: (err: any, data?: ListDetectorsCommandOutput) => void): void;
    listDetectors(args: ListDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectorsCommandOutput) => void): void;
    /**
     * <p>Returns a paginated list of the current filters.</p>
     */
    listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
    listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
    listFilters(args: ListFiltersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
    /**
     * <p>Lists Amazon GuardDuty findings for the specified detector ID.</p>
     */
    listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
    listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    listFindings(args: ListFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    /**
     * <p>Lists all GuardDuty membership invitations that were sent to the current AWS
     *       account.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
     *       operation from a member account, the IPSets returned are the IPSets from the associated administrator
     *       account.</p>
     */
    listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
    listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
    listIPSets(args: ListIPSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
    /**
     * <p>Lists details about all member accounts for the current GuardDuty administrator account.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Lists the accounts configured as GuardDuty delegated administrators.</p>
     */
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationAdminAccountsCommandOutput>;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    /**
     * <p>Returns a list of publishing destinations associated with the specified
     *         <code>dectectorId</code>.</p>
     */
    listPublishingDestinations(args: ListPublishingDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<ListPublishingDestinationsCommandOutput>;
    listPublishingDestinations(args: ListPublishingDestinationsCommandInput, cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void): void;
    listPublishingDestinations(args: ListPublishingDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void): void;
    /**
     * <p>Lists tags for a resource. Tagging is currently supported for detectors, finding filters,
     *       IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this
     *       operation returns all assigned tags for a given resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
     *       use this operation from a member account, the ThreatIntelSets associated with the administrator
     *       account are returned.</p>
     */
    listThreatIntelSets(args: ListThreatIntelSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListThreatIntelSetsCommandOutput>;
    listThreatIntelSets(args: ListThreatIntelSetsCommandInput, cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void): void;
    listThreatIntelSets(args: ListThreatIntelSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void): void;
    /**
     * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
     *       restart monitoring of accounts that you stopped monitoring with the
     *         <code>StopMonitoringMembers</code> operation.</p>
     */
    startMonitoringMembers(args: StartMonitoringMembersCommandInput, options?: __HttpHandlerOptions): Promise<StartMonitoringMembersCommandOutput>;
    startMonitoringMembers(args: StartMonitoringMembersCommandInput, cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void): void;
    startMonitoringMembers(args: StartMonitoringMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void): void;
    /**
     * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
     *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
     *       accounts.</p>
     */
    stopMonitoringMembers(args: StopMonitoringMembersCommandInput, options?: __HttpHandlerOptions): Promise<StopMonitoringMembersCommandOutput>;
    stopMonitoringMembers(args: StopMonitoringMembersCommandInput, cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void): void;
    stopMonitoringMembers(args: StopMonitoringMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void): void;
    /**
     * <p>Adds tags to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
     */
    unarchiveFindings(args: UnarchiveFindingsCommandInput, options?: __HttpHandlerOptions): Promise<UnarchiveFindingsCommandOutput>;
    unarchiveFindings(args: UnarchiveFindingsCommandInput, cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void): void;
    unarchiveFindings(args: UnarchiveFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the Amazon GuardDuty detector specified by the detectorId.</p>
     */
    updateDetector(args: UpdateDetectorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorCommandOutput>;
    updateDetector(args: UpdateDetectorCommandInput, cb: (err: any, data?: UpdateDetectorCommandOutput) => void): void;
    updateDetector(args: UpdateDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorCommandOutput) => void): void;
    /**
     * <p>Updates the filter specified by the filter name.</p>
     */
    updateFilter(args: UpdateFilterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFilterCommandOutput>;
    updateFilter(args: UpdateFilterCommandInput, cb: (err: any, data?: UpdateFilterCommandOutput) => void): void;
    updateFilter(args: UpdateFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFilterCommandOutput) => void): void;
    /**
     * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
     */
    updateFindingsFeedback(args: UpdateFindingsFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFindingsFeedbackCommandOutput>;
    updateFindingsFeedback(args: UpdateFindingsFeedbackCommandInput, cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void): void;
    updateFindingsFeedback(args: UpdateFindingsFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void): void;
    /**
     * <p>Updates the IPSet specified by the IPSet ID.</p>
     */
    updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
    updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
    updateIPSet(args: UpdateIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
    /**
     * <p>Contains information on member accounts to be updated.</p>
     */
    updateMemberDetectors(args: UpdateMemberDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMemberDetectorsCommandOutput>;
    updateMemberDetectors(args: UpdateMemberDetectorsCommandInput, cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void): void;
    updateMemberDetectors(args: UpdateMemberDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void): void;
    /**
     * <p>Updates the delegated administrator account with the values provided.</p>
     */
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOrganizationConfigurationCommandOutput>;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates information about the publishing destination specified by the
     *         <code>destinationId</code>.</p>
     */
    updatePublishingDestination(args: UpdatePublishingDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePublishingDestinationCommandOutput>;
    updatePublishingDestination(args: UpdatePublishingDestinationCommandInput, cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void): void;
    updatePublishingDestination(args: UpdatePublishingDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void): void;
    /**
     * <p>Updates the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
     */
    updateThreatIntelSet(args: UpdateThreatIntelSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThreatIntelSetCommandOutput>;
    updateThreatIntelSet(args: UpdateThreatIntelSetCommandInput, cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void): void;
    updateThreatIntelSet(args: UpdateThreatIntelSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void): void;
}
