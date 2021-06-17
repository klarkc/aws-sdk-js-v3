import { Macie2Client } from "./Macie2Client";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { BatchGetCustomDataIdentifiersCommandInput, BatchGetCustomDataIdentifiersCommandOutput } from "./commands/BatchGetCustomDataIdentifiersCommand";
import { CreateClassificationJobCommandInput, CreateClassificationJobCommandOutput } from "./commands/CreateClassificationJobCommand";
import { CreateCustomDataIdentifierCommandInput, CreateCustomDataIdentifierCommandOutput } from "./commands/CreateCustomDataIdentifierCommand";
import { CreateFindingsFilterCommandInput, CreateFindingsFilterCommandOutput } from "./commands/CreateFindingsFilterCommand";
import { CreateInvitationsCommandInput, CreateInvitationsCommandOutput } from "./commands/CreateInvitationsCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand";
import { CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput } from "./commands/CreateSampleFindingsCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteCustomDataIdentifierCommandInput, DeleteCustomDataIdentifierCommandOutput } from "./commands/DeleteCustomDataIdentifierCommand";
import { DeleteFindingsFilterCommandInput, DeleteFindingsFilterCommandOutput } from "./commands/DeleteFindingsFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "./commands/DescribeBucketsCommand";
import { DescribeClassificationJobCommandInput, DescribeClassificationJobCommandOutput } from "./commands/DescribeClassificationJobCommand";
import { DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput } from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableMacieCommandInput, DisableMacieCommandOutput } from "./commands/DisableMacieCommand";
import { DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput } from "./commands/DisableOrganizationAdminAccountCommand";
import { DisassociateFromAdministratorAccountCommandInput, DisassociateFromAdministratorAccountCommandOutput } from "./commands/DisassociateFromAdministratorAccountCommand";
import { DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput } from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand";
import { EnableMacieCommandInput, EnableMacieCommandOutput } from "./commands/EnableMacieCommand";
import { EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput } from "./commands/EnableOrganizationAdminAccountCommand";
import { GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput } from "./commands/GetAdministratorAccountCommand";
import { GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput } from "./commands/GetBucketStatisticsCommand";
import { GetClassificationExportConfigurationCommandInput, GetClassificationExportConfigurationCommandOutput } from "./commands/GetClassificationExportConfigurationCommand";
import { GetCustomDataIdentifierCommandInput, GetCustomDataIdentifierCommandOutput } from "./commands/GetCustomDataIdentifierCommand";
import { GetFindingStatisticsCommandInput, GetFindingStatisticsCommandOutput } from "./commands/GetFindingStatisticsCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "./commands/GetFindingsFilterCommand";
import { GetFindingsPublicationConfigurationCommandInput, GetFindingsPublicationConfigurationCommandOutput } from "./commands/GetFindingsPublicationConfigurationCommand";
import { GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput } from "./commands/GetInvitationsCountCommand";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "./commands/GetMacieSessionCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "./commands/GetUsageTotalsCommand";
import { ListClassificationJobsCommandInput, ListClassificationJobsCommandOutput } from "./commands/ListClassificationJobsCommand";
import { ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput } from "./commands/ListCustomDataIdentifiersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListFindingsFiltersCommandInput, ListFindingsFiltersCommandOutput } from "./commands/ListFindingsFiltersCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "./commands/ListOrganizationAdminAccountsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutClassificationExportConfigurationCommandInput, PutClassificationExportConfigurationCommandOutput } from "./commands/PutClassificationExportConfigurationCommand";
import { PutFindingsPublicationConfigurationCommandInput, PutFindingsPublicationConfigurationCommandOutput } from "./commands/PutFindingsPublicationConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestCustomDataIdentifierCommandInput, TestCustomDataIdentifierCommandOutput } from "./commands/TestCustomDataIdentifierCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateClassificationJobCommandInput, UpdateClassificationJobCommandOutput } from "./commands/UpdateClassificationJobCommand";
import { UpdateFindingsFilterCommandInput, UpdateFindingsFilterCommandOutput } from "./commands/UpdateFindingsFilterCommand";
import { UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput } from "./commands/UpdateMacieSessionCommand";
import { UpdateMemberSessionCommandInput, UpdateMemberSessionCommandOutput } from "./commands/UpdateMemberSessionCommand";
import { UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput } from "./commands/UpdateOrganizationConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.</p>
 */
export declare class Macie2 extends Macie2Client {
    /**
     * <p>Accepts an Amazon Macie membership invitation that was received from a specific account.</p>
     */
    acceptInvitation(args: AcceptInvitationCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInvitationCommandOutput>;
    acceptInvitation(args: AcceptInvitationCommandInput, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    acceptInvitation(args: AcceptInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInvitationCommandOutput) => void): void;
    /**
     * <p>Retrieves information about one or more custom data identifiers.</p>
     */
    batchGetCustomDataIdentifiers(args: BatchGetCustomDataIdentifiersCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetCustomDataIdentifiersCommandOutput>;
    batchGetCustomDataIdentifiers(args: BatchGetCustomDataIdentifiersCommandInput, cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void): void;
    batchGetCustomDataIdentifiers(args: BatchGetCustomDataIdentifiersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void): void;
    /**
     * <p>Creates and defines the settings for a classification job.</p>
     */
    createClassificationJob(args: CreateClassificationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateClassificationJobCommandOutput>;
    createClassificationJob(args: CreateClassificationJobCommandInput, cb: (err: any, data?: CreateClassificationJobCommandOutput) => void): void;
    createClassificationJob(args: CreateClassificationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClassificationJobCommandOutput) => void): void;
    /**
     * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
     */
    createCustomDataIdentifier(args: CreateCustomDataIdentifierCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomDataIdentifierCommandOutput>;
    createCustomDataIdentifier(args: CreateCustomDataIdentifierCommandInput, cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void): void;
    createCustomDataIdentifier(args: CreateCustomDataIdentifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void): void;
    /**
     * <p>Creates and defines the criteria and other settings for a findings filter.</p>
     */
    createFindingsFilter(args: CreateFindingsFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateFindingsFilterCommandOutput>;
    createFindingsFilter(args: CreateFindingsFilterCommandInput, cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void): void;
    createFindingsFilter(args: CreateFindingsFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void): void;
    /**
     * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
     */
    createInvitations(args: CreateInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<CreateInvitationsCommandOutput>;
    createInvitations(args: CreateInvitationsCommandInput, cb: (err: any, data?: CreateInvitationsCommandOutput) => void): void;
    createInvitations(args: CreateInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInvitationsCommandOutput) => void): void;
    /**
     * <p>Associates an account with an Amazon Macie administrator account.</p>
     */
    createMember(args: CreateMemberCommandInput, options?: __HttpHandlerOptions): Promise<CreateMemberCommandOutput>;
    createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
    createMember(args: CreateMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
    /**
     * <p>Creates sample findings.</p>
     */
    createSampleFindings(args: CreateSampleFindingsCommandInput, options?: __HttpHandlerOptions): Promise<CreateSampleFindingsCommandOutput>;
    createSampleFindings(args: CreateSampleFindingsCommandInput, cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void): void;
    createSampleFindings(args: CreateSampleFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void): void;
    /**
     * <p>Declines Amazon Macie membership invitations that were received from specific accounts.</p>
     */
    declineInvitations(args: DeclineInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeclineInvitationsCommandOutput>;
    declineInvitations(args: DeclineInvitationsCommandInput, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    declineInvitations(args: DeclineInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeclineInvitationsCommandOutput) => void): void;
    /**
     * <p>Soft deletes a custom data identifier.</p>
     */
    deleteCustomDataIdentifier(args: DeleteCustomDataIdentifierCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomDataIdentifierCommandOutput>;
    deleteCustomDataIdentifier(args: DeleteCustomDataIdentifierCommandInput, cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void): void;
    deleteCustomDataIdentifier(args: DeleteCustomDataIdentifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void): void;
    /**
     * <p>Deletes a findings filter.</p>
     */
    deleteFindingsFilter(args: DeleteFindingsFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFindingsFilterCommandOutput>;
    deleteFindingsFilter(args: DeleteFindingsFilterCommandInput, cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void): void;
    deleteFindingsFilter(args: DeleteFindingsFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void): void;
    /**
     * <p>Deletes Amazon Macie membership invitations that were received from specific accounts.</p>
     */
    deleteInvitations(args: DeleteInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInvitationsCommandOutput>;
    deleteInvitations(args: DeleteInvitationsCommandInput, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    deleteInvitations(args: DeleteInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInvitationsCommandOutput) => void): void;
    /**
     * <p>Deletes the association between an Amazon Macie administrator account and an account.</p>
     */
    deleteMember(args: DeleteMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemberCommandOutput>;
    deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
    deleteMember(args: DeleteMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
     */
    describeBuckets(args: DescribeBucketsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBucketsCommandOutput>;
    describeBuckets(args: DescribeBucketsCommandInput, cb: (err: any, data?: DescribeBucketsCommandOutput) => void): void;
    describeBuckets(args: DescribeBucketsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBucketsCommandOutput) => void): void;
    /**
     * <p>Retrieves the status and settings for a classification job.</p>
     */
    describeClassificationJob(args: DescribeClassificationJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClassificationJobCommandOutput>;
    describeClassificationJob(args: DescribeClassificationJobCommandInput, cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void): void;
    describeClassificationJob(args: DescribeClassificationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void): void;
    /**
     * <p>Retrieves the Amazon Macie configuration settings for an AWS organization.</p>
     */
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationConfigurationCommandOutput>;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    describeOrganizationConfiguration(args: DescribeOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void): void;
    /**
     * <p>Disables an Amazon Macie account and deletes Macie resources for the account.</p>
     */
    disableMacie(args: DisableMacieCommandInput, options?: __HttpHandlerOptions): Promise<DisableMacieCommandOutput>;
    disableMacie(args: DisableMacieCommandInput, cb: (err: any, data?: DisableMacieCommandOutput) => void): void;
    disableMacie(args: DisableMacieCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableMacieCommandOutput) => void): void;
    /**
     * <p>Disables an account as the delegated Amazon Macie administrator account for an AWS organization.</p>
     */
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisableOrganizationAdminAccountCommandOutput>;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    disableOrganizationAdminAccount(args: DisableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates a member account from its Amazon Macie administrator account.</p>
     */
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFromAdministratorAccountCommandOutput>;
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void): void;
    disassociateFromAdministratorAccount(args: DisassociateFromAdministratorAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void): void;
    /**
     * <p>(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.</p>
     */
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFromMasterAccountCommandOutput>;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    disassociateFromMasterAccount(args: DisassociateFromMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void): void;
    /**
     * <p>Disassociates an Amazon Macie administrator account from a member account.</p>
     */
    disassociateMember(args: DisassociateMemberCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMemberCommandOutput>;
    disassociateMember(args: DisassociateMemberCommandInput, cb: (err: any, data?: DisassociateMemberCommandOutput) => void): void;
    disassociateMember(args: DisassociateMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMemberCommandOutput) => void): void;
    /**
     * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
     */
    enableMacie(args: EnableMacieCommandInput, options?: __HttpHandlerOptions): Promise<EnableMacieCommandOutput>;
    enableMacie(args: EnableMacieCommandInput, cb: (err: any, data?: EnableMacieCommandOutput) => void): void;
    enableMacie(args: EnableMacieCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableMacieCommandOutput) => void): void;
    /**
     * <p>Designates an account as the delegated Amazon Macie administrator account for an AWS organization.</p>
     */
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options?: __HttpHandlerOptions): Promise<EnableOrganizationAdminAccountCommandOutput>;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    enableOrganizationAdminAccount(args: EnableOrganizationAdminAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the Amazon Macie administrator account for an account.</p>
     */
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAdministratorAccountCommandOutput>;
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void): void;
    getAdministratorAccount(args: GetAdministratorAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
     */
    getBucketStatistics(args: GetBucketStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketStatisticsCommandOutput>;
    getBucketStatistics(args: GetBucketStatisticsCommandInput, cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void): void;
    getBucketStatistics(args: GetBucketStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration settings for storing data classification results.</p>
     */
    getClassificationExportConfiguration(args: GetClassificationExportConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetClassificationExportConfigurationCommandOutput>;
    getClassificationExportConfiguration(args: GetClassificationExportConfigurationCommandInput, cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void): void;
    getClassificationExportConfiguration(args: GetClassificationExportConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves the criteria and other settings for a custom data identifier.</p>
     */
    getCustomDataIdentifier(args: GetCustomDataIdentifierCommandInput, options?: __HttpHandlerOptions): Promise<GetCustomDataIdentifierCommandOutput>;
    getCustomDataIdentifier(args: GetCustomDataIdentifierCommandInput, cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void): void;
    getCustomDataIdentifier(args: GetCustomDataIdentifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of one or more findings.</p>
     */
    getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
    getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    getFindings(args: GetFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
    /**
     * <p>Retrieves the criteria and other settings for a findings filter.</p>
     */
    getFindingsFilter(args: GetFindingsFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsFilterCommandOutput>;
    getFindingsFilter(args: GetFindingsFilterCommandInput, cb: (err: any, data?: GetFindingsFilterCommandOutput) => void): void;
    getFindingsFilter(args: GetFindingsFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsFilterCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration settings for publishing findings to AWS Security Hub.</p>
     */
    getFindingsPublicationConfiguration(args: GetFindingsPublicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsPublicationConfigurationCommandOutput>;
    getFindingsPublicationConfiguration(args: GetFindingsPublicationConfigurationCommandInput, cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void): void;
    getFindingsPublicationConfiguration(args: GetFindingsPublicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) aggregated statistical data about findings.</p>
     */
    getFindingStatistics(args: GetFindingStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingStatisticsCommandOutput>;
    getFindingStatistics(args: GetFindingStatisticsCommandInput, cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void): void;
    getFindingStatistics(args: GetFindingStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void): void;
    /**
     * <p>Retrieves the count of Amazon Macie membership invitations that were received by an account.</p>
     */
    getInvitationsCount(args: GetInvitationsCountCommandInput, options?: __HttpHandlerOptions): Promise<GetInvitationsCountCommandOutput>;
    getInvitationsCount(args: GetInvitationsCountCommandInput, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    getInvitationsCount(args: GetInvitationsCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInvitationsCountCommandOutput) => void): void;
    /**
     * <p>Retrieves the current status and configuration settings for an Amazon Macie account.</p>
     */
    getMacieSession(args: GetMacieSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetMacieSessionCommandOutput>;
    getMacieSession(args: GetMacieSessionCommandInput, cb: (err: any, data?: GetMacieSessionCommandOutput) => void): void;
    getMacieSession(args: GetMacieSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMacieSessionCommandOutput) => void): void;
    /**
     * <p>(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.</p>
     */
    getMasterAccount(args: GetMasterAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetMasterAccountCommandOutput>;
    getMasterAccount(args: GetMasterAccountCommandInput, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    getMasterAccount(args: GetMasterAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMasterAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an account that's associated with an Amazon Macie administrator account.</p>
     */
    getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
    getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
    getMember(args: GetMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
     */
    getUsageStatistics(args: GetUsageStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageStatisticsCommandOutput>;
    getUsageStatistics(args: GetUsageStatisticsCommandInput, cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void): void;
    getUsageStatistics(args: GetUsageStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) aggregated usage data for an account.</p>
     */
    getUsageTotals(args: GetUsageTotalsCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageTotalsCommandOutput>;
    getUsageTotals(args: GetUsageTotalsCommandInput, cb: (err: any, data?: GetUsageTotalsCommandOutput) => void): void;
    getUsageTotals(args: GetUsageTotalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUsageTotalsCommandOutput) => void): void;
    /**
     * <p>Retrieves a subset of information about one or more classification jobs.</p>
     */
    listClassificationJobs(args: ListClassificationJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListClassificationJobsCommandOutput>;
    listClassificationJobs(args: ListClassificationJobsCommandInput, cb: (err: any, data?: ListClassificationJobsCommandOutput) => void): void;
    listClassificationJobs(args: ListClassificationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClassificationJobsCommandOutput) => void): void;
    /**
     * <p>Retrieves a subset of information about all the custom data identifiers for an account.</p>
     */
    listCustomDataIdentifiers(args: ListCustomDataIdentifiersCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomDataIdentifiersCommandOutput>;
    listCustomDataIdentifiers(args: ListCustomDataIdentifiersCommandInput, cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void): void;
    listCustomDataIdentifiers(args: ListCustomDataIdentifiersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void): void;
    /**
     * <p>Retrieves a subset of information about one or more findings.</p>
     */
    listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
    listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    listFindings(args: ListFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    /**
     * <p>Retrieves a subset of information about all the findings filters for an account.</p>
     */
    listFindingsFilters(args: ListFindingsFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsFiltersCommandOutput>;
    listFindingsFilters(args: ListFindingsFiltersCommandInput, cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void): void;
    listFindingsFilters(args: ListFindingsFiltersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void): void;
    /**
     * <p>Retrieves information about all the Amazon Macie membership invitations that were received by an account.</p>
     */
    listInvitations(args: ListInvitationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvitationsCommandOutput>;
    listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    listInvitations(args: ListInvitationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the accounts that are associated with an Amazon Macie administrator account.</p>
     */
    listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
    listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    listMembers(args: ListMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the delegated Amazon Macie administrator account for an AWS organization.</p>
     */
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationAdminAccountsCommandOutput>;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    listOrganizationAdminAccounts(args: ListOrganizationAdminAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void): void;
    /**
     * <p>Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates the configuration settings for storing data classification results.</p>
     */
    putClassificationExportConfiguration(args: PutClassificationExportConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutClassificationExportConfigurationCommandOutput>;
    putClassificationExportConfiguration(args: PutClassificationExportConfigurationCommandInput, cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void): void;
    putClassificationExportConfiguration(args: PutClassificationExportConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the configuration settings for publishing findings to AWS Security Hub.</p>
     */
    putFindingsPublicationConfiguration(args: PutFindingsPublicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutFindingsPublicationConfigurationCommandOutput>;
    putFindingsPublicationConfiguration(args: PutFindingsPublicationConfigurationCommandInput, cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void): void;
    putFindingsPublicationConfiguration(args: PutFindingsPublicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves (queries) statistical data and other information about AWS resources that Amazon Macie monitors and analyzes.</p>
     */
    searchResources(args: SearchResourcesCommandInput, options?: __HttpHandlerOptions): Promise<SearchResourcesCommandOutput>;
    searchResources(args: SearchResourcesCommandInput, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
    searchResources(args: SearchResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
    /**
     * <p>Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Tests a custom data identifier.</p>
     */
    testCustomDataIdentifier(args: TestCustomDataIdentifierCommandInput, options?: __HttpHandlerOptions): Promise<TestCustomDataIdentifierCommandOutput>;
    testCustomDataIdentifier(args: TestCustomDataIdentifierCommandInput, cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void): void;
    testCustomDataIdentifier(args: TestCustomDataIdentifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Changes the status of a classification job.</p>
     */
    updateClassificationJob(args: UpdateClassificationJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClassificationJobCommandOutput>;
    updateClassificationJob(args: UpdateClassificationJobCommandInput, cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void): void;
    updateClassificationJob(args: UpdateClassificationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void): void;
    /**
     * <p>Updates the criteria and other settings for a findings filter.</p>
     */
    updateFindingsFilter(args: UpdateFindingsFilterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFindingsFilterCommandOutput>;
    updateFindingsFilter(args: UpdateFindingsFilterCommandInput, cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void): void;
    updateFindingsFilter(args: UpdateFindingsFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void): void;
    /**
     * <p>Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.</p>
     */
    updateMacieSession(args: UpdateMacieSessionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMacieSessionCommandOutput>;
    updateMacieSession(args: UpdateMacieSessionCommandInput, cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void): void;
    updateMacieSession(args: UpdateMacieSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void): void;
    /**
     * <p>Enables an Amazon Macie administrator to suspend or re-enable a member account.</p>
     */
    updateMemberSession(args: UpdateMemberSessionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMemberSessionCommandOutput>;
    updateMemberSession(args: UpdateMemberSessionCommandInput, cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void): void;
    updateMemberSession(args: UpdateMemberSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void): void;
    /**
     * <p>Updates the Amazon Macie configuration settings for an AWS organization.</p>
     */
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOrganizationConfigurationCommandOutput>;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
    updateOrganizationConfiguration(args: UpdateOrganizationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void): void;
}
