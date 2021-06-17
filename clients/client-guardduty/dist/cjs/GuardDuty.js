"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardDuty = void 0;
const GuardDutyClient_1 = require("./GuardDutyClient");
const AcceptInvitationCommand_1 = require("./commands/AcceptInvitationCommand");
const ArchiveFindingsCommand_1 = require("./commands/ArchiveFindingsCommand");
const CreateDetectorCommand_1 = require("./commands/CreateDetectorCommand");
const CreateFilterCommand_1 = require("./commands/CreateFilterCommand");
const CreateIPSetCommand_1 = require("./commands/CreateIPSetCommand");
const CreateMembersCommand_1 = require("./commands/CreateMembersCommand");
const CreatePublishingDestinationCommand_1 = require("./commands/CreatePublishingDestinationCommand");
const CreateSampleFindingsCommand_1 = require("./commands/CreateSampleFindingsCommand");
const CreateThreatIntelSetCommand_1 = require("./commands/CreateThreatIntelSetCommand");
const DeclineInvitationsCommand_1 = require("./commands/DeclineInvitationsCommand");
const DeleteDetectorCommand_1 = require("./commands/DeleteDetectorCommand");
const DeleteFilterCommand_1 = require("./commands/DeleteFilterCommand");
const DeleteIPSetCommand_1 = require("./commands/DeleteIPSetCommand");
const DeleteInvitationsCommand_1 = require("./commands/DeleteInvitationsCommand");
const DeleteMembersCommand_1 = require("./commands/DeleteMembersCommand");
const DeletePublishingDestinationCommand_1 = require("./commands/DeletePublishingDestinationCommand");
const DeleteThreatIntelSetCommand_1 = require("./commands/DeleteThreatIntelSetCommand");
const DescribeOrganizationConfigurationCommand_1 = require("./commands/DescribeOrganizationConfigurationCommand");
const DescribePublishingDestinationCommand_1 = require("./commands/DescribePublishingDestinationCommand");
const DisableOrganizationAdminAccountCommand_1 = require("./commands/DisableOrganizationAdminAccountCommand");
const DisassociateFromMasterAccountCommand_1 = require("./commands/DisassociateFromMasterAccountCommand");
const DisassociateMembersCommand_1 = require("./commands/DisassociateMembersCommand");
const EnableOrganizationAdminAccountCommand_1 = require("./commands/EnableOrganizationAdminAccountCommand");
const GetDetectorCommand_1 = require("./commands/GetDetectorCommand");
const GetFilterCommand_1 = require("./commands/GetFilterCommand");
const GetFindingsCommand_1 = require("./commands/GetFindingsCommand");
const GetFindingsStatisticsCommand_1 = require("./commands/GetFindingsStatisticsCommand");
const GetIPSetCommand_1 = require("./commands/GetIPSetCommand");
const GetInvitationsCountCommand_1 = require("./commands/GetInvitationsCountCommand");
const GetMasterAccountCommand_1 = require("./commands/GetMasterAccountCommand");
const GetMemberDetectorsCommand_1 = require("./commands/GetMemberDetectorsCommand");
const GetMembersCommand_1 = require("./commands/GetMembersCommand");
const GetThreatIntelSetCommand_1 = require("./commands/GetThreatIntelSetCommand");
const GetUsageStatisticsCommand_1 = require("./commands/GetUsageStatisticsCommand");
const InviteMembersCommand_1 = require("./commands/InviteMembersCommand");
const ListDetectorsCommand_1 = require("./commands/ListDetectorsCommand");
const ListFiltersCommand_1 = require("./commands/ListFiltersCommand");
const ListFindingsCommand_1 = require("./commands/ListFindingsCommand");
const ListIPSetsCommand_1 = require("./commands/ListIPSetsCommand");
const ListInvitationsCommand_1 = require("./commands/ListInvitationsCommand");
const ListMembersCommand_1 = require("./commands/ListMembersCommand");
const ListOrganizationAdminAccountsCommand_1 = require("./commands/ListOrganizationAdminAccountsCommand");
const ListPublishingDestinationsCommand_1 = require("./commands/ListPublishingDestinationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListThreatIntelSetsCommand_1 = require("./commands/ListThreatIntelSetsCommand");
const StartMonitoringMembersCommand_1 = require("./commands/StartMonitoringMembersCommand");
const StopMonitoringMembersCommand_1 = require("./commands/StopMonitoringMembersCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnarchiveFindingsCommand_1 = require("./commands/UnarchiveFindingsCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDetectorCommand_1 = require("./commands/UpdateDetectorCommand");
const UpdateFilterCommand_1 = require("./commands/UpdateFilterCommand");
const UpdateFindingsFeedbackCommand_1 = require("./commands/UpdateFindingsFeedbackCommand");
const UpdateIPSetCommand_1 = require("./commands/UpdateIPSetCommand");
const UpdateMemberDetectorsCommand_1 = require("./commands/UpdateMemberDetectorsCommand");
const UpdateOrganizationConfigurationCommand_1 = require("./commands/UpdateOrganizationConfigurationCommand");
const UpdatePublishingDestinationCommand_1 = require("./commands/UpdatePublishingDestinationCommand");
const UpdateThreatIntelSetCommand_1 = require("./commands/UpdateThreatIntelSetCommand");
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
class GuardDuty extends GuardDutyClient_1.GuardDutyClient {
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
    archiveFindings(args, optionsOrCb, cb) {
        const command = new ArchiveFindingsCommand_1.ArchiveFindingsCommand(args);
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
    createDetector(args, optionsOrCb, cb) {
        const command = new CreateDetectorCommand_1.CreateDetectorCommand(args);
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
    createFilter(args, optionsOrCb, cb) {
        const command = new CreateFilterCommand_1.CreateFilterCommand(args);
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
    createIPSet(args, optionsOrCb, cb) {
        const command = new CreateIPSetCommand_1.CreateIPSetCommand(args);
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
    createMembers(args, optionsOrCb, cb) {
        const command = new CreateMembersCommand_1.CreateMembersCommand(args);
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
    createPublishingDestination(args, optionsOrCb, cb) {
        const command = new CreatePublishingDestinationCommand_1.CreatePublishingDestinationCommand(args);
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
    createThreatIntelSet(args, optionsOrCb, cb) {
        const command = new CreateThreatIntelSetCommand_1.CreateThreatIntelSetCommand(args);
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
    deleteDetector(args, optionsOrCb, cb) {
        const command = new DeleteDetectorCommand_1.DeleteDetectorCommand(args);
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
    deleteFilter(args, optionsOrCb, cb) {
        const command = new DeleteFilterCommand_1.DeleteFilterCommand(args);
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
    deleteIPSet(args, optionsOrCb, cb) {
        const command = new DeleteIPSetCommand_1.DeleteIPSetCommand(args);
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
    deleteMembers(args, optionsOrCb, cb) {
        const command = new DeleteMembersCommand_1.DeleteMembersCommand(args);
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
    deletePublishingDestination(args, optionsOrCb, cb) {
        const command = new DeletePublishingDestinationCommand_1.DeletePublishingDestinationCommand(args);
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
    deleteThreatIntelSet(args, optionsOrCb, cb) {
        const command = new DeleteThreatIntelSetCommand_1.DeleteThreatIntelSetCommand(args);
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
    describePublishingDestination(args, optionsOrCb, cb) {
        const command = new DescribePublishingDestinationCommand_1.DescribePublishingDestinationCommand(args);
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
    disassociateMembers(args, optionsOrCb, cb) {
        const command = new DisassociateMembersCommand_1.DisassociateMembersCommand(args);
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
    getDetector(args, optionsOrCb, cb) {
        const command = new GetDetectorCommand_1.GetDetectorCommand(args);
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
    getFilter(args, optionsOrCb, cb) {
        const command = new GetFilterCommand_1.GetFilterCommand(args);
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
    getFindingsStatistics(args, optionsOrCb, cb) {
        const command = new GetFindingsStatisticsCommand_1.GetFindingsStatisticsCommand(args);
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
    getIPSet(args, optionsOrCb, cb) {
        const command = new GetIPSetCommand_1.GetIPSetCommand(args);
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
    getMemberDetectors(args, optionsOrCb, cb) {
        const command = new GetMemberDetectorsCommand_1.GetMemberDetectorsCommand(args);
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
    getMembers(args, optionsOrCb, cb) {
        const command = new GetMembersCommand_1.GetMembersCommand(args);
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
    getThreatIntelSet(args, optionsOrCb, cb) {
        const command = new GetThreatIntelSetCommand_1.GetThreatIntelSetCommand(args);
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
    inviteMembers(args, optionsOrCb, cb) {
        const command = new InviteMembersCommand_1.InviteMembersCommand(args);
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
    listDetectors(args, optionsOrCb, cb) {
        const command = new ListDetectorsCommand_1.ListDetectorsCommand(args);
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
    listFilters(args, optionsOrCb, cb) {
        const command = new ListFiltersCommand_1.ListFiltersCommand(args);
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
    listIPSets(args, optionsOrCb, cb) {
        const command = new ListIPSetsCommand_1.ListIPSetsCommand(args);
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
    listPublishingDestinations(args, optionsOrCb, cb) {
        const command = new ListPublishingDestinationsCommand_1.ListPublishingDestinationsCommand(args);
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
    listThreatIntelSets(args, optionsOrCb, cb) {
        const command = new ListThreatIntelSetsCommand_1.ListThreatIntelSetsCommand(args);
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
    startMonitoringMembers(args, optionsOrCb, cb) {
        const command = new StartMonitoringMembersCommand_1.StartMonitoringMembersCommand(args);
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
    stopMonitoringMembers(args, optionsOrCb, cb) {
        const command = new StopMonitoringMembersCommand_1.StopMonitoringMembersCommand(args);
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
    unarchiveFindings(args, optionsOrCb, cb) {
        const command = new UnarchiveFindingsCommand_1.UnarchiveFindingsCommand(args);
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
    updateDetector(args, optionsOrCb, cb) {
        const command = new UpdateDetectorCommand_1.UpdateDetectorCommand(args);
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
    updateFilter(args, optionsOrCb, cb) {
        const command = new UpdateFilterCommand_1.UpdateFilterCommand(args);
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
    updateFindingsFeedback(args, optionsOrCb, cb) {
        const command = new UpdateFindingsFeedbackCommand_1.UpdateFindingsFeedbackCommand(args);
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
    updateIPSet(args, optionsOrCb, cb) {
        const command = new UpdateIPSetCommand_1.UpdateIPSetCommand(args);
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
    updateMemberDetectors(args, optionsOrCb, cb) {
        const command = new UpdateMemberDetectorsCommand_1.UpdateMemberDetectorsCommand(args);
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
    updatePublishingDestination(args, optionsOrCb, cb) {
        const command = new UpdatePublishingDestinationCommand_1.UpdatePublishingDestinationCommand(args);
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
    updateThreatIntelSet(args, optionsOrCb, cb) {
        const command = new UpdateThreatIntelSetCommand_1.UpdateThreatIntelSetCommand(args);
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
exports.GuardDuty = GuardDuty;
//# sourceMappingURL=GuardDuty.js.map