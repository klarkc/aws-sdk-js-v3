"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityHub = void 0;
const SecurityHubClient_1 = require("./SecurityHubClient");
const AcceptAdministratorInvitationCommand_1 = require("./commands/AcceptAdministratorInvitationCommand");
const AcceptInvitationCommand_1 = require("./commands/AcceptInvitationCommand");
const BatchDisableStandardsCommand_1 = require("./commands/BatchDisableStandardsCommand");
const BatchEnableStandardsCommand_1 = require("./commands/BatchEnableStandardsCommand");
const BatchImportFindingsCommand_1 = require("./commands/BatchImportFindingsCommand");
const BatchUpdateFindingsCommand_1 = require("./commands/BatchUpdateFindingsCommand");
const CreateActionTargetCommand_1 = require("./commands/CreateActionTargetCommand");
const CreateInsightCommand_1 = require("./commands/CreateInsightCommand");
const CreateMembersCommand_1 = require("./commands/CreateMembersCommand");
const DeclineInvitationsCommand_1 = require("./commands/DeclineInvitationsCommand");
const DeleteActionTargetCommand_1 = require("./commands/DeleteActionTargetCommand");
const DeleteInsightCommand_1 = require("./commands/DeleteInsightCommand");
const DeleteInvitationsCommand_1 = require("./commands/DeleteInvitationsCommand");
const DeleteMembersCommand_1 = require("./commands/DeleteMembersCommand");
const DescribeActionTargetsCommand_1 = require("./commands/DescribeActionTargetsCommand");
const DescribeHubCommand_1 = require("./commands/DescribeHubCommand");
const DescribeOrganizationConfigurationCommand_1 = require("./commands/DescribeOrganizationConfigurationCommand");
const DescribeProductsCommand_1 = require("./commands/DescribeProductsCommand");
const DescribeStandardsCommand_1 = require("./commands/DescribeStandardsCommand");
const DescribeStandardsControlsCommand_1 = require("./commands/DescribeStandardsControlsCommand");
const DisableImportFindingsForProductCommand_1 = require("./commands/DisableImportFindingsForProductCommand");
const DisableOrganizationAdminAccountCommand_1 = require("./commands/DisableOrganizationAdminAccountCommand");
const DisableSecurityHubCommand_1 = require("./commands/DisableSecurityHubCommand");
const DisassociateFromAdministratorAccountCommand_1 = require("./commands/DisassociateFromAdministratorAccountCommand");
const DisassociateFromMasterAccountCommand_1 = require("./commands/DisassociateFromMasterAccountCommand");
const DisassociateMembersCommand_1 = require("./commands/DisassociateMembersCommand");
const EnableImportFindingsForProductCommand_1 = require("./commands/EnableImportFindingsForProductCommand");
const EnableOrganizationAdminAccountCommand_1 = require("./commands/EnableOrganizationAdminAccountCommand");
const EnableSecurityHubCommand_1 = require("./commands/EnableSecurityHubCommand");
const GetAdministratorAccountCommand_1 = require("./commands/GetAdministratorAccountCommand");
const GetEnabledStandardsCommand_1 = require("./commands/GetEnabledStandardsCommand");
const GetFindingsCommand_1 = require("./commands/GetFindingsCommand");
const GetInsightResultsCommand_1 = require("./commands/GetInsightResultsCommand");
const GetInsightsCommand_1 = require("./commands/GetInsightsCommand");
const GetInvitationsCountCommand_1 = require("./commands/GetInvitationsCountCommand");
const GetMasterAccountCommand_1 = require("./commands/GetMasterAccountCommand");
const GetMembersCommand_1 = require("./commands/GetMembersCommand");
const InviteMembersCommand_1 = require("./commands/InviteMembersCommand");
const ListEnabledProductsForImportCommand_1 = require("./commands/ListEnabledProductsForImportCommand");
const ListInvitationsCommand_1 = require("./commands/ListInvitationsCommand");
const ListMembersCommand_1 = require("./commands/ListMembersCommand");
const ListOrganizationAdminAccountsCommand_1 = require("./commands/ListOrganizationAdminAccountsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateActionTargetCommand_1 = require("./commands/UpdateActionTargetCommand");
const UpdateFindingsCommand_1 = require("./commands/UpdateFindingsCommand");
const UpdateInsightCommand_1 = require("./commands/UpdateInsightCommand");
const UpdateOrganizationConfigurationCommand_1 = require("./commands/UpdateOrganizationConfigurationCommand");
const UpdateSecurityHubConfigurationCommand_1 = require("./commands/UpdateSecurityHubConfigurationCommand");
const UpdateStandardsControlCommand_1 = require("./commands/UpdateStandardsControlCommand");
/**
 * <p>Security Hub provides you with a comprehensive view of the security state of your AWS
 *          environment and resources. It also provides you with the readiness status of your
 *          environment based on controls from supported security standards. Security Hub collects security
 *          data from AWS accounts, services, and integrated third-party products and helps you analyze
 *          security trends in your environment to identify the highest priority security issues. For
 *          more information about Security Hub, see the <i>
 *                <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User
 *                Guide</a>
 *             </i>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the AWS
 *          Region that is currently active or in the specific AWS Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to.</p>
 *          <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>
 *                <a>CreateMembers</a>
 *             </code> to add a member account to Security Hub, the association of
 *          the member account with the administrator account is created only in the <code>us-west-2</code>
 *          Region. Security Hub must be enabled for the member account in the same Region that the invitation
 *          was sent from.</p>
 *          <p>The following throttling limits apply to using Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>BatchEnableStandards</a>
 *                   </code> - <code>RateLimit</code> of 1
 *                request per second, <code>BurstLimit</code> of 1 request per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>GetFindings</a>
 *                   </code> - <code>RateLimit</code> of 3 requests per second.
 *                   <code>BurstLimit</code> of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>UpdateFindings</a>
 *                   </code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <a>UpdateStandardsControl</a>
 *                   </code> - <code>RateLimit</code> of
 *                1 request per second, <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 */
class SecurityHub extends SecurityHubClient_1.SecurityHubClient {
    acceptAdministratorInvitation(args, optionsOrCb, cb) {
        const command = new AcceptAdministratorInvitationCommand_1.AcceptAdministratorInvitationCommand(args);
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
    batchDisableStandards(args, optionsOrCb, cb) {
        const command = new BatchDisableStandardsCommand_1.BatchDisableStandardsCommand(args);
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
    batchEnableStandards(args, optionsOrCb, cb) {
        const command = new BatchEnableStandardsCommand_1.BatchEnableStandardsCommand(args);
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
    batchImportFindings(args, optionsOrCb, cb) {
        const command = new BatchImportFindingsCommand_1.BatchImportFindingsCommand(args);
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
    batchUpdateFindings(args, optionsOrCb, cb) {
        const command = new BatchUpdateFindingsCommand_1.BatchUpdateFindingsCommand(args);
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
    createActionTarget(args, optionsOrCb, cb) {
        const command = new CreateActionTargetCommand_1.CreateActionTargetCommand(args);
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
    createInsight(args, optionsOrCb, cb) {
        const command = new CreateInsightCommand_1.CreateInsightCommand(args);
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
    deleteActionTarget(args, optionsOrCb, cb) {
        const command = new DeleteActionTargetCommand_1.DeleteActionTargetCommand(args);
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
    deleteInsight(args, optionsOrCb, cb) {
        const command = new DeleteInsightCommand_1.DeleteInsightCommand(args);
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
    describeActionTargets(args, optionsOrCb, cb) {
        const command = new DescribeActionTargetsCommand_1.DescribeActionTargetsCommand(args);
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
    describeHub(args, optionsOrCb, cb) {
        const command = new DescribeHubCommand_1.DescribeHubCommand(args);
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
    describeProducts(args, optionsOrCb, cb) {
        const command = new DescribeProductsCommand_1.DescribeProductsCommand(args);
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
    describeStandards(args, optionsOrCb, cb) {
        const command = new DescribeStandardsCommand_1.DescribeStandardsCommand(args);
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
    describeStandardsControls(args, optionsOrCb, cb) {
        const command = new DescribeStandardsControlsCommand_1.DescribeStandardsControlsCommand(args);
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
    disableImportFindingsForProduct(args, optionsOrCb, cb) {
        const command = new DisableImportFindingsForProductCommand_1.DisableImportFindingsForProductCommand(args);
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
    disableSecurityHub(args, optionsOrCb, cb) {
        const command = new DisableSecurityHubCommand_1.DisableSecurityHubCommand(args);
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
    enableImportFindingsForProduct(args, optionsOrCb, cb) {
        const command = new EnableImportFindingsForProductCommand_1.EnableImportFindingsForProductCommand(args);
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
    enableSecurityHub(args, optionsOrCb, cb) {
        const command = new EnableSecurityHubCommand_1.EnableSecurityHubCommand(args);
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
    getEnabledStandards(args, optionsOrCb, cb) {
        const command = new GetEnabledStandardsCommand_1.GetEnabledStandardsCommand(args);
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
    getInsightResults(args, optionsOrCb, cb) {
        const command = new GetInsightResultsCommand_1.GetInsightResultsCommand(args);
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
    getInsights(args, optionsOrCb, cb) {
        const command = new GetInsightsCommand_1.GetInsightsCommand(args);
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
    listEnabledProductsForImport(args, optionsOrCb, cb) {
        const command = new ListEnabledProductsForImportCommand_1.ListEnabledProductsForImportCommand(args);
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
    updateActionTarget(args, optionsOrCb, cb) {
        const command = new UpdateActionTargetCommand_1.UpdateActionTargetCommand(args);
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
    updateFindings(args, optionsOrCb, cb) {
        const command = new UpdateFindingsCommand_1.UpdateFindingsCommand(args);
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
    updateInsight(args, optionsOrCb, cb) {
        const command = new UpdateInsightCommand_1.UpdateInsightCommand(args);
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
    updateSecurityHubConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateSecurityHubConfigurationCommand_1.UpdateSecurityHubConfigurationCommand(args);
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
    updateStandardsControl(args, optionsOrCb, cb) {
        const command = new UpdateStandardsControlCommand_1.UpdateStandardsControlCommand(args);
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
exports.SecurityHub = SecurityHub;
//# sourceMappingURL=SecurityHub.js.map