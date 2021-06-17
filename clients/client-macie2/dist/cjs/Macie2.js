"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macie2 = void 0;
const Macie2Client_1 = require("./Macie2Client");
const AcceptInvitationCommand_1 = require("./commands/AcceptInvitationCommand");
const BatchGetCustomDataIdentifiersCommand_1 = require("./commands/BatchGetCustomDataIdentifiersCommand");
const CreateClassificationJobCommand_1 = require("./commands/CreateClassificationJobCommand");
const CreateCustomDataIdentifierCommand_1 = require("./commands/CreateCustomDataIdentifierCommand");
const CreateFindingsFilterCommand_1 = require("./commands/CreateFindingsFilterCommand");
const CreateInvitationsCommand_1 = require("./commands/CreateInvitationsCommand");
const CreateMemberCommand_1 = require("./commands/CreateMemberCommand");
const CreateSampleFindingsCommand_1 = require("./commands/CreateSampleFindingsCommand");
const DeclineInvitationsCommand_1 = require("./commands/DeclineInvitationsCommand");
const DeleteCustomDataIdentifierCommand_1 = require("./commands/DeleteCustomDataIdentifierCommand");
const DeleteFindingsFilterCommand_1 = require("./commands/DeleteFindingsFilterCommand");
const DeleteInvitationsCommand_1 = require("./commands/DeleteInvitationsCommand");
const DeleteMemberCommand_1 = require("./commands/DeleteMemberCommand");
const DescribeBucketsCommand_1 = require("./commands/DescribeBucketsCommand");
const DescribeClassificationJobCommand_1 = require("./commands/DescribeClassificationJobCommand");
const DescribeOrganizationConfigurationCommand_1 = require("./commands/DescribeOrganizationConfigurationCommand");
const DisableMacieCommand_1 = require("./commands/DisableMacieCommand");
const DisableOrganizationAdminAccountCommand_1 = require("./commands/DisableOrganizationAdminAccountCommand");
const DisassociateFromAdministratorAccountCommand_1 = require("./commands/DisassociateFromAdministratorAccountCommand");
const DisassociateFromMasterAccountCommand_1 = require("./commands/DisassociateFromMasterAccountCommand");
const DisassociateMemberCommand_1 = require("./commands/DisassociateMemberCommand");
const EnableMacieCommand_1 = require("./commands/EnableMacieCommand");
const EnableOrganizationAdminAccountCommand_1 = require("./commands/EnableOrganizationAdminAccountCommand");
const GetAdministratorAccountCommand_1 = require("./commands/GetAdministratorAccountCommand");
const GetBucketStatisticsCommand_1 = require("./commands/GetBucketStatisticsCommand");
const GetClassificationExportConfigurationCommand_1 = require("./commands/GetClassificationExportConfigurationCommand");
const GetCustomDataIdentifierCommand_1 = require("./commands/GetCustomDataIdentifierCommand");
const GetFindingStatisticsCommand_1 = require("./commands/GetFindingStatisticsCommand");
const GetFindingsCommand_1 = require("./commands/GetFindingsCommand");
const GetFindingsFilterCommand_1 = require("./commands/GetFindingsFilterCommand");
const GetFindingsPublicationConfigurationCommand_1 = require("./commands/GetFindingsPublicationConfigurationCommand");
const GetInvitationsCountCommand_1 = require("./commands/GetInvitationsCountCommand");
const GetMacieSessionCommand_1 = require("./commands/GetMacieSessionCommand");
const GetMasterAccountCommand_1 = require("./commands/GetMasterAccountCommand");
const GetMemberCommand_1 = require("./commands/GetMemberCommand");
const GetUsageStatisticsCommand_1 = require("./commands/GetUsageStatisticsCommand");
const GetUsageTotalsCommand_1 = require("./commands/GetUsageTotalsCommand");
const ListClassificationJobsCommand_1 = require("./commands/ListClassificationJobsCommand");
const ListCustomDataIdentifiersCommand_1 = require("./commands/ListCustomDataIdentifiersCommand");
const ListFindingsCommand_1 = require("./commands/ListFindingsCommand");
const ListFindingsFiltersCommand_1 = require("./commands/ListFindingsFiltersCommand");
const ListInvitationsCommand_1 = require("./commands/ListInvitationsCommand");
const ListMembersCommand_1 = require("./commands/ListMembersCommand");
const ListOrganizationAdminAccountsCommand_1 = require("./commands/ListOrganizationAdminAccountsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutClassificationExportConfigurationCommand_1 = require("./commands/PutClassificationExportConfigurationCommand");
const PutFindingsPublicationConfigurationCommand_1 = require("./commands/PutFindingsPublicationConfigurationCommand");
const SearchResourcesCommand_1 = require("./commands/SearchResourcesCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestCustomDataIdentifierCommand_1 = require("./commands/TestCustomDataIdentifierCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateClassificationJobCommand_1 = require("./commands/UpdateClassificationJobCommand");
const UpdateFindingsFilterCommand_1 = require("./commands/UpdateFindingsFilterCommand");
const UpdateMacieSessionCommand_1 = require("./commands/UpdateMacieSessionCommand");
const UpdateMemberSessionCommand_1 = require("./commands/UpdateMemberSessionCommand");
const UpdateOrganizationConfigurationCommand_1 = require("./commands/UpdateOrganizationConfigurationCommand");
/**
 * <p>Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.</p>
 */
class Macie2 extends Macie2Client_1.Macie2Client {
    acceptInvitation(args, optionsOrCb, cb) {
        const command = new AcceptInvitationCommand_1.AcceptInvitationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetCustomDataIdentifiers(args, optionsOrCb, cb) {
        const command = new BatchGetCustomDataIdentifiersCommand_1.BatchGetCustomDataIdentifiersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createClassificationJob(args, optionsOrCb, cb) {
        const command = new CreateClassificationJobCommand_1.CreateClassificationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomDataIdentifier(args, optionsOrCb, cb) {
        const command = new CreateCustomDataIdentifierCommand_1.CreateCustomDataIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFindingsFilter(args, optionsOrCb, cb) {
        const command = new CreateFindingsFilterCommand_1.CreateFindingsFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInvitations(args, optionsOrCb, cb) {
        const command = new CreateInvitationsCommand_1.CreateInvitationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMember(args, optionsOrCb, cb) {
        const command = new CreateMemberCommand_1.CreateMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSampleFindings(args, optionsOrCb, cb) {
        const command = new CreateSampleFindingsCommand_1.CreateSampleFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    declineInvitations(args, optionsOrCb, cb) {
        const command = new DeclineInvitationsCommand_1.DeclineInvitationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomDataIdentifier(args, optionsOrCb, cb) {
        const command = new DeleteCustomDataIdentifierCommand_1.DeleteCustomDataIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFindingsFilter(args, optionsOrCb, cb) {
        const command = new DeleteFindingsFilterCommand_1.DeleteFindingsFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInvitations(args, optionsOrCb, cb) {
        const command = new DeleteInvitationsCommand_1.DeleteInvitationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMember(args, optionsOrCb, cb) {
        const command = new DeleteMemberCommand_1.DeleteMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeBuckets(args, optionsOrCb, cb) {
        const command = new DescribeBucketsCommand_1.DescribeBucketsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClassificationJob(args, optionsOrCb, cb) {
        const command = new DescribeClassificationJobCommand_1.DescribeClassificationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOrganizationConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationConfigurationCommand_1.DescribeOrganizationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableMacie(args, optionsOrCb, cb) {
        const command = new DisableMacieCommand_1.DisableMacieCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableOrganizationAdminAccount(args, optionsOrCb, cb) {
        const command = new DisableOrganizationAdminAccountCommand_1.DisableOrganizationAdminAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateFromAdministratorAccount(args, optionsOrCb, cb) {
        const command = new DisassociateFromAdministratorAccountCommand_1.DisassociateFromAdministratorAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateFromMasterAccount(args, optionsOrCb, cb) {
        const command = new DisassociateFromMasterAccountCommand_1.DisassociateFromMasterAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateMember(args, optionsOrCb, cb) {
        const command = new DisassociateMemberCommand_1.DisassociateMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableMacie(args, optionsOrCb, cb) {
        const command = new EnableMacieCommand_1.EnableMacieCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableOrganizationAdminAccount(args, optionsOrCb, cb) {
        const command = new EnableOrganizationAdminAccountCommand_1.EnableOrganizationAdminAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAdministratorAccount(args, optionsOrCb, cb) {
        const command = new GetAdministratorAccountCommand_1.GetAdministratorAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getBucketStatistics(args, optionsOrCb, cb) {
        const command = new GetBucketStatisticsCommand_1.GetBucketStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getClassificationExportConfiguration(args, optionsOrCb, cb) {
        const command = new GetClassificationExportConfigurationCommand_1.GetClassificationExportConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCustomDataIdentifier(args, optionsOrCb, cb) {
        const command = new GetCustomDataIdentifierCommand_1.GetCustomDataIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFindings(args, optionsOrCb, cb) {
        const command = new GetFindingsCommand_1.GetFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFindingsFilter(args, optionsOrCb, cb) {
        const command = new GetFindingsFilterCommand_1.GetFindingsFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFindingsPublicationConfiguration(args, optionsOrCb, cb) {
        const command = new GetFindingsPublicationConfigurationCommand_1.GetFindingsPublicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFindingStatistics(args, optionsOrCb, cb) {
        const command = new GetFindingStatisticsCommand_1.GetFindingStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInvitationsCount(args, optionsOrCb, cb) {
        const command = new GetInvitationsCountCommand_1.GetInvitationsCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMacieSession(args, optionsOrCb, cb) {
        const command = new GetMacieSessionCommand_1.GetMacieSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMasterAccount(args, optionsOrCb, cb) {
        const command = new GetMasterAccountCommand_1.GetMasterAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMember(args, optionsOrCb, cb) {
        const command = new GetMemberCommand_1.GetMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUsageStatistics(args, optionsOrCb, cb) {
        const command = new GetUsageStatisticsCommand_1.GetUsageStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUsageTotals(args, optionsOrCb, cb) {
        const command = new GetUsageTotalsCommand_1.GetUsageTotalsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listClassificationJobs(args, optionsOrCb, cb) {
        const command = new ListClassificationJobsCommand_1.ListClassificationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomDataIdentifiers(args, optionsOrCb, cb) {
        const command = new ListCustomDataIdentifiersCommand_1.ListCustomDataIdentifiersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFindings(args, optionsOrCb, cb) {
        const command = new ListFindingsCommand_1.ListFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFindingsFilters(args, optionsOrCb, cb) {
        const command = new ListFindingsFiltersCommand_1.ListFindingsFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInvitations(args, optionsOrCb, cb) {
        const command = new ListInvitationsCommand_1.ListInvitationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMembers(args, optionsOrCb, cb) {
        const command = new ListMembersCommand_1.ListMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOrganizationAdminAccounts(args, optionsOrCb, cb) {
        const command = new ListOrganizationAdminAccountsCommand_1.ListOrganizationAdminAccountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putClassificationExportConfiguration(args, optionsOrCb, cb) {
        const command = new PutClassificationExportConfigurationCommand_1.PutClassificationExportConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putFindingsPublicationConfiguration(args, optionsOrCb, cb) {
        const command = new PutFindingsPublicationConfigurationCommand_1.PutFindingsPublicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchResources(args, optionsOrCb, cb) {
        const command = new SearchResourcesCommand_1.SearchResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testCustomDataIdentifier(args, optionsOrCb, cb) {
        const command = new TestCustomDataIdentifierCommand_1.TestCustomDataIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateClassificationJob(args, optionsOrCb, cb) {
        const command = new UpdateClassificationJobCommand_1.UpdateClassificationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFindingsFilter(args, optionsOrCb, cb) {
        const command = new UpdateFindingsFilterCommand_1.UpdateFindingsFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMacieSession(args, optionsOrCb, cb) {
        const command = new UpdateMacieSessionCommand_1.UpdateMacieSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMemberSession(args, optionsOrCb, cb) {
        const command = new UpdateMemberSessionCommand_1.UpdateMemberSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateOrganizationConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateOrganizationConfigurationCommand_1.UpdateOrganizationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Macie2 = Macie2;
//# sourceMappingURL=Macie2.js.map