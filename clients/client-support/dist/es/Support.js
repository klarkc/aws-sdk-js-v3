import { __extends } from "tslib";
import { SupportClient } from "./SupportClient";
import { AddAttachmentsToSetCommand, } from "./commands/AddAttachmentsToSetCommand";
import { AddCommunicationToCaseCommand, } from "./commands/AddCommunicationToCaseCommand";
import { CreateCaseCommand } from "./commands/CreateCaseCommand";
import { DescribeAttachmentCommand, } from "./commands/DescribeAttachmentCommand";
import { DescribeCasesCommand, } from "./commands/DescribeCasesCommand";
import { DescribeCommunicationsCommand, } from "./commands/DescribeCommunicationsCommand";
import { DescribeServicesCommand, } from "./commands/DescribeServicesCommand";
import { DescribeSeverityLevelsCommand, } from "./commands/DescribeSeverityLevelsCommand";
import { DescribeTrustedAdvisorCheckRefreshStatusesCommand, } from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import { DescribeTrustedAdvisorCheckResultCommand, } from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import { DescribeTrustedAdvisorCheckSummariesCommand, } from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import { DescribeTrustedAdvisorChecksCommand, } from "./commands/DescribeTrustedAdvisorChecksCommand";
import { RefreshTrustedAdvisorCheckCommand, } from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommand } from "./commands/ResolveCaseCommand";
/**
 * <fullname>AWS Support</fullname>
 *         <p>The <i>AWS Support API Reference</i> is intended for programmers who need detailed
 *             information about the AWS Support operations and data types. You can use the API to manage
 *             your support cases programmatically. The AWS Support API uses HTTP methods that return
 *             results in JSON format.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">AWS Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p> Service names, issue categories, and available severity levels  - The
 *                         <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p> Case creation, case details, and case resolution - The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations
 *                     create AWS Support cases, retrieve information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p> Case communication - The <a>DescribeCommunications</a>,
 *                         <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications
 *                     and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service for
 *             Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check that you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a
 *                     specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *             AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
var Support = /** @class */ (function (_super) {
    __extends(Support, _super);
    function Support() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Support.prototype.addAttachmentsToSet = function (args, optionsOrCb, cb) {
        var command = new AddAttachmentsToSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.addCommunicationToCase = function (args, optionsOrCb, cb) {
        var command = new AddCommunicationToCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.createCase = function (args, optionsOrCb, cb) {
        var command = new CreateCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeAttachment = function (args, optionsOrCb, cb) {
        var command = new DescribeAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeCases = function (args, optionsOrCb, cb) {
        var command = new DescribeCasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeCommunications = function (args, optionsOrCb, cb) {
        var command = new DescribeCommunicationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeServices = function (args, optionsOrCb, cb) {
        var command = new DescribeServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeSeverityLevels = function (args, optionsOrCb, cb) {
        var command = new DescribeSeverityLevelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeTrustedAdvisorCheckRefreshStatuses = function (args, optionsOrCb, cb) {
        var command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeTrustedAdvisorCheckResult = function (args, optionsOrCb, cb) {
        var command = new DescribeTrustedAdvisorCheckResultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeTrustedAdvisorChecks = function (args, optionsOrCb, cb) {
        var command = new DescribeTrustedAdvisorChecksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.describeTrustedAdvisorCheckSummaries = function (args, optionsOrCb, cb) {
        var command = new DescribeTrustedAdvisorCheckSummariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.refreshTrustedAdvisorCheck = function (args, optionsOrCb, cb) {
        var command = new RefreshTrustedAdvisorCheckCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Support.prototype.resolveCase = function (args, optionsOrCb, cb) {
        var command = new ResolveCaseCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Support;
}(SupportClient));
export { Support };
//# sourceMappingURL=Support.js.map