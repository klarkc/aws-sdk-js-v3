"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
const OrganizationsClient_1 = require("./OrganizationsClient");
const AcceptHandshakeCommand_1 = require("./commands/AcceptHandshakeCommand");
const AttachPolicyCommand_1 = require("./commands/AttachPolicyCommand");
const CancelHandshakeCommand_1 = require("./commands/CancelHandshakeCommand");
const CreateAccountCommand_1 = require("./commands/CreateAccountCommand");
const CreateGovCloudAccountCommand_1 = require("./commands/CreateGovCloudAccountCommand");
const CreateOrganizationCommand_1 = require("./commands/CreateOrganizationCommand");
const CreateOrganizationalUnitCommand_1 = require("./commands/CreateOrganizationalUnitCommand");
const CreatePolicyCommand_1 = require("./commands/CreatePolicyCommand");
const DeclineHandshakeCommand_1 = require("./commands/DeclineHandshakeCommand");
const DeleteOrganizationCommand_1 = require("./commands/DeleteOrganizationCommand");
const DeleteOrganizationalUnitCommand_1 = require("./commands/DeleteOrganizationalUnitCommand");
const DeletePolicyCommand_1 = require("./commands/DeletePolicyCommand");
const DeregisterDelegatedAdministratorCommand_1 = require("./commands/DeregisterDelegatedAdministratorCommand");
const DescribeAccountCommand_1 = require("./commands/DescribeAccountCommand");
const DescribeCreateAccountStatusCommand_1 = require("./commands/DescribeCreateAccountStatusCommand");
const DescribeEffectivePolicyCommand_1 = require("./commands/DescribeEffectivePolicyCommand");
const DescribeHandshakeCommand_1 = require("./commands/DescribeHandshakeCommand");
const DescribeOrganizationCommand_1 = require("./commands/DescribeOrganizationCommand");
const DescribeOrganizationalUnitCommand_1 = require("./commands/DescribeOrganizationalUnitCommand");
const DescribePolicyCommand_1 = require("./commands/DescribePolicyCommand");
const DetachPolicyCommand_1 = require("./commands/DetachPolicyCommand");
const DisableAWSServiceAccessCommand_1 = require("./commands/DisableAWSServiceAccessCommand");
const DisablePolicyTypeCommand_1 = require("./commands/DisablePolicyTypeCommand");
const EnableAWSServiceAccessCommand_1 = require("./commands/EnableAWSServiceAccessCommand");
const EnableAllFeaturesCommand_1 = require("./commands/EnableAllFeaturesCommand");
const EnablePolicyTypeCommand_1 = require("./commands/EnablePolicyTypeCommand");
const InviteAccountToOrganizationCommand_1 = require("./commands/InviteAccountToOrganizationCommand");
const LeaveOrganizationCommand_1 = require("./commands/LeaveOrganizationCommand");
const ListAWSServiceAccessForOrganizationCommand_1 = require("./commands/ListAWSServiceAccessForOrganizationCommand");
const ListAccountsCommand_1 = require("./commands/ListAccountsCommand");
const ListAccountsForParentCommand_1 = require("./commands/ListAccountsForParentCommand");
const ListChildrenCommand_1 = require("./commands/ListChildrenCommand");
const ListCreateAccountStatusCommand_1 = require("./commands/ListCreateAccountStatusCommand");
const ListDelegatedAdministratorsCommand_1 = require("./commands/ListDelegatedAdministratorsCommand");
const ListDelegatedServicesForAccountCommand_1 = require("./commands/ListDelegatedServicesForAccountCommand");
const ListHandshakesForAccountCommand_1 = require("./commands/ListHandshakesForAccountCommand");
const ListHandshakesForOrganizationCommand_1 = require("./commands/ListHandshakesForOrganizationCommand");
const ListOrganizationalUnitsForParentCommand_1 = require("./commands/ListOrganizationalUnitsForParentCommand");
const ListParentsCommand_1 = require("./commands/ListParentsCommand");
const ListPoliciesCommand_1 = require("./commands/ListPoliciesCommand");
const ListPoliciesForTargetCommand_1 = require("./commands/ListPoliciesForTargetCommand");
const ListRootsCommand_1 = require("./commands/ListRootsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTargetsForPolicyCommand_1 = require("./commands/ListTargetsForPolicyCommand");
const MoveAccountCommand_1 = require("./commands/MoveAccountCommand");
const RegisterDelegatedAdministratorCommand_1 = require("./commands/RegisterDelegatedAdministratorCommand");
const RemoveAccountFromOrganizationCommand_1 = require("./commands/RemoveAccountFromOrganizationCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateOrganizationalUnitCommand_1 = require("./commands/UpdateOrganizationalUnitCommand");
const UpdatePolicyCommand_1 = require("./commands/UpdatePolicyCommand");
/**
 * <p>AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts
 *             into an <i>organization</i> and centrally manage your accounts and their
 *             resources.</p>
 *         <p>This guide provides descriptions of the Organizations operations. For more information about
 *             using this service, see the <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">AWS Organizations User Guide</a>.</p>
 *         <p>
 *             <b>Support and feedback for AWS Organizations</b>
 *          </p>
 *         <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">AWS Organizations support forum</a>. For
 *             more information about the AWS support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *         <p>
 *             <b>Endpoint to call When using the AWS CLI or the AWS
 *                 SDK</b>
 *          </p>
 *         <p>For the current release of Organizations, specify the <code>us-east-1</code> region for all
 *             AWS API and AWS CLI calls made from the commercial AWS Regions outside of China. If
 *             calling from one of the AWS Regions in China, then specify
 *             <code>cn-northwest-1</code>. You can do this in the AWS CLI by using these parameters and
 *             commands:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                 <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                 <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the following parameter with each command to specify the endpoint:</p>
 *                 <p>
 *                   <code>--region us-east-1</code>
 *                     <i>(from commercial AWS Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--region cn-northwest-1</code>
 *                     <i>(from AWS Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Recording API Requests</b>
 *         </p>
 *         <p>AWS Organizations supports AWS CloudTrail, a service that records AWS API calls for your AWS
 *             account and delivers log files to an Amazon S3 bucket. By using information collected by
 *             AWS CloudTrail, you can determine which requests the Organizations service received, who made the request
 *             and when, and so on. For more about AWS Organizations and its support for AWS CloudTrail, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 AWS Organizations Events with AWS CloudTrail</a> in the <i>AWS Organizations User Guide</i>.
 *             To learn more about AWS CloudTrail, including how to turn it on and find your log files, see the
 *                 <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>
 */
class Organizations extends OrganizationsClient_1.OrganizationsClient {
    acceptHandshake(args, optionsOrCb, cb) {
        const command = new AcceptHandshakeCommand_1.AcceptHandshakeCommand(args);
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
    attachPolicy(args, optionsOrCb, cb) {
        const command = new AttachPolicyCommand_1.AttachPolicyCommand(args);
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
    cancelHandshake(args, optionsOrCb, cb) {
        const command = new CancelHandshakeCommand_1.CancelHandshakeCommand(args);
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
    createAccount(args, optionsOrCb, cb) {
        const command = new CreateAccountCommand_1.CreateAccountCommand(args);
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
    createGovCloudAccount(args, optionsOrCb, cb) {
        const command = new CreateGovCloudAccountCommand_1.CreateGovCloudAccountCommand(args);
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
    createOrganization(args, optionsOrCb, cb) {
        const command = new CreateOrganizationCommand_1.CreateOrganizationCommand(args);
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
    createOrganizationalUnit(args, optionsOrCb, cb) {
        const command = new CreateOrganizationalUnitCommand_1.CreateOrganizationalUnitCommand(args);
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
    createPolicy(args, optionsOrCb, cb) {
        const command = new CreatePolicyCommand_1.CreatePolicyCommand(args);
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
    declineHandshake(args, optionsOrCb, cb) {
        const command = new DeclineHandshakeCommand_1.DeclineHandshakeCommand(args);
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
    deleteOrganization(args, optionsOrCb, cb) {
        const command = new DeleteOrganizationCommand_1.DeleteOrganizationCommand(args);
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
    deleteOrganizationalUnit(args, optionsOrCb, cb) {
        const command = new DeleteOrganizationalUnitCommand_1.DeleteOrganizationalUnitCommand(args);
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
    deletePolicy(args, optionsOrCb, cb) {
        const command = new DeletePolicyCommand_1.DeletePolicyCommand(args);
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
    deregisterDelegatedAdministrator(args, optionsOrCb, cb) {
        const command = new DeregisterDelegatedAdministratorCommand_1.DeregisterDelegatedAdministratorCommand(args);
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
    describeAccount(args, optionsOrCb, cb) {
        const command = new DescribeAccountCommand_1.DescribeAccountCommand(args);
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
    describeCreateAccountStatus(args, optionsOrCb, cb) {
        const command = new DescribeCreateAccountStatusCommand_1.DescribeCreateAccountStatusCommand(args);
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
    describeEffectivePolicy(args, optionsOrCb, cb) {
        const command = new DescribeEffectivePolicyCommand_1.DescribeEffectivePolicyCommand(args);
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
    describeHandshake(args, optionsOrCb, cb) {
        const command = new DescribeHandshakeCommand_1.DescribeHandshakeCommand(args);
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
    describeOrganization(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationCommand_1.DescribeOrganizationCommand(args);
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
    describeOrganizationalUnit(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationalUnitCommand_1.DescribeOrganizationalUnitCommand(args);
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
    describePolicy(args, optionsOrCb, cb) {
        const command = new DescribePolicyCommand_1.DescribePolicyCommand(args);
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
    detachPolicy(args, optionsOrCb, cb) {
        const command = new DetachPolicyCommand_1.DetachPolicyCommand(args);
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
    disableAWSServiceAccess(args, optionsOrCb, cb) {
        const command = new DisableAWSServiceAccessCommand_1.DisableAWSServiceAccessCommand(args);
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
    disablePolicyType(args, optionsOrCb, cb) {
        const command = new DisablePolicyTypeCommand_1.DisablePolicyTypeCommand(args);
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
    enableAllFeatures(args, optionsOrCb, cb) {
        const command = new EnableAllFeaturesCommand_1.EnableAllFeaturesCommand(args);
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
    enableAWSServiceAccess(args, optionsOrCb, cb) {
        const command = new EnableAWSServiceAccessCommand_1.EnableAWSServiceAccessCommand(args);
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
    enablePolicyType(args, optionsOrCb, cb) {
        const command = new EnablePolicyTypeCommand_1.EnablePolicyTypeCommand(args);
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
    inviteAccountToOrganization(args, optionsOrCb, cb) {
        const command = new InviteAccountToOrganizationCommand_1.InviteAccountToOrganizationCommand(args);
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
    leaveOrganization(args, optionsOrCb, cb) {
        const command = new LeaveOrganizationCommand_1.LeaveOrganizationCommand(args);
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
    listAccounts(args, optionsOrCb, cb) {
        const command = new ListAccountsCommand_1.ListAccountsCommand(args);
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
    listAccountsForParent(args, optionsOrCb, cb) {
        const command = new ListAccountsForParentCommand_1.ListAccountsForParentCommand(args);
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
    listAWSServiceAccessForOrganization(args, optionsOrCb, cb) {
        const command = new ListAWSServiceAccessForOrganizationCommand_1.ListAWSServiceAccessForOrganizationCommand(args);
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
    listChildren(args, optionsOrCb, cb) {
        const command = new ListChildrenCommand_1.ListChildrenCommand(args);
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
    listCreateAccountStatus(args, optionsOrCb, cb) {
        const command = new ListCreateAccountStatusCommand_1.ListCreateAccountStatusCommand(args);
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
    listDelegatedAdministrators(args, optionsOrCb, cb) {
        const command = new ListDelegatedAdministratorsCommand_1.ListDelegatedAdministratorsCommand(args);
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
    listDelegatedServicesForAccount(args, optionsOrCb, cb) {
        const command = new ListDelegatedServicesForAccountCommand_1.ListDelegatedServicesForAccountCommand(args);
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
    listHandshakesForAccount(args, optionsOrCb, cb) {
        const command = new ListHandshakesForAccountCommand_1.ListHandshakesForAccountCommand(args);
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
    listHandshakesForOrganization(args, optionsOrCb, cb) {
        const command = new ListHandshakesForOrganizationCommand_1.ListHandshakesForOrganizationCommand(args);
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
    listOrganizationalUnitsForParent(args, optionsOrCb, cb) {
        const command = new ListOrganizationalUnitsForParentCommand_1.ListOrganizationalUnitsForParentCommand(args);
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
    listParents(args, optionsOrCb, cb) {
        const command = new ListParentsCommand_1.ListParentsCommand(args);
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
    listPolicies(args, optionsOrCb, cb) {
        const command = new ListPoliciesCommand_1.ListPoliciesCommand(args);
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
    listPoliciesForTarget(args, optionsOrCb, cb) {
        const command = new ListPoliciesForTargetCommand_1.ListPoliciesForTargetCommand(args);
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
    listRoots(args, optionsOrCb, cb) {
        const command = new ListRootsCommand_1.ListRootsCommand(args);
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
    listTargetsForPolicy(args, optionsOrCb, cb) {
        const command = new ListTargetsForPolicyCommand_1.ListTargetsForPolicyCommand(args);
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
    moveAccount(args, optionsOrCb, cb) {
        const command = new MoveAccountCommand_1.MoveAccountCommand(args);
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
    registerDelegatedAdministrator(args, optionsOrCb, cb) {
        const command = new RegisterDelegatedAdministratorCommand_1.RegisterDelegatedAdministratorCommand(args);
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
    removeAccountFromOrganization(args, optionsOrCb, cb) {
        const command = new RemoveAccountFromOrganizationCommand_1.RemoveAccountFromOrganizationCommand(args);
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
    updateOrganizationalUnit(args, optionsOrCb, cb) {
        const command = new UpdateOrganizationalUnitCommand_1.UpdateOrganizationalUnitCommand(args);
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
    updatePolicy(args, optionsOrCb, cb) {
        const command = new UpdatePolicyCommand_1.UpdatePolicyCommand(args);
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
exports.Organizations = Organizations;
//# sourceMappingURL=Organizations.js.map