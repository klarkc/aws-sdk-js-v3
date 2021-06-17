import { __extends } from "tslib";
import { HealthClient } from "./HealthClient";
import { DescribeAffectedAccountsForOrganizationCommand, } from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import { DescribeAffectedEntitiesCommand, } from "./commands/DescribeAffectedEntitiesCommand";
import { DescribeAffectedEntitiesForOrganizationCommand, } from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import { DescribeEntityAggregatesCommand, } from "./commands/DescribeEntityAggregatesCommand";
import { DescribeEventAggregatesCommand, } from "./commands/DescribeEventAggregatesCommand";
import { DescribeEventDetailsCommand, } from "./commands/DescribeEventDetailsCommand";
import { DescribeEventDetailsForOrganizationCommand, } from "./commands/DescribeEventDetailsForOrganizationCommand";
import { DescribeEventTypesCommand, } from "./commands/DescribeEventTypesCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeEventsForOrganizationCommand, } from "./commands/DescribeEventsForOrganizationCommand";
import { DescribeHealthServiceStatusForOrganizationCommand, } from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import { DisableHealthServiceAccessForOrganizationCommand, } from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import { EnableHealthServiceAccessForOrganizationCommand, } from "./commands/EnableHealthServiceAccessForOrganizationCommand";
/**
 * <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information that
 *          appears in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You
 *          can use the API operations to get information about AWS Health events that affect your
 *          AWS services and resources.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the
 *                   AWS Health API. If you call the AWS Health API from an AWS account that
 *                   doesn't have a Business or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You can use the AWS Health endpoint health.us-east-1.amazonaws.com (HTTPS) to
 *                   call the AWS Health API operations. AWS Health supports a multi-Region
 *                   application architecture and has two regional endpoints in an active-passive
 *                   configuration. You can use the high availability endpoint example to determine
 *                   which AWS Region is active, so that you can get the latest information from the
 *                   API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the AWS Health API</a> in the
 *                      <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>If your AWS account is part of AWS Organizations, you can use the AWS Health organizational
 *          view feature. This feature provides a centralized view of AWS Health events across all
 *          accounts in your organization. You can aggregate AWS Health events in real time to
 *          identify accounts in your organization that are affected by an operational event or get
 *          notified of security vulnerabilities. Use the organizational view API operations to enable
 *          this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
 *          <note>
 *             <p>When you use the AWS Health API operations to return AWS Health events, see the
 *             following recommendations:</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return AWS Health
 *                   events that are public or account-specific.</p>
 *                </li>
 *                <li>
 *                   <p>Use pagination to view all events from the response. For example, if you call
 *                   the <code>DescribeEventsForOrganization</code> operation to get all events in your
 *                   organization, you might receive several page results. Specify the
 *                      <code>nextToken</code> in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
var Health = /** @class */ (function (_super) {
    __extends(Health, _super);
    function Health() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Health.prototype.describeAffectedAccountsForOrganization = function (args, optionsOrCb, cb) {
        var command = new DescribeAffectedAccountsForOrganizationCommand(args);
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
    Health.prototype.describeAffectedEntities = function (args, optionsOrCb, cb) {
        var command = new DescribeAffectedEntitiesCommand(args);
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
    Health.prototype.describeAffectedEntitiesForOrganization = function (args, optionsOrCb, cb) {
        var command = new DescribeAffectedEntitiesForOrganizationCommand(args);
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
    Health.prototype.describeEntityAggregates = function (args, optionsOrCb, cb) {
        var command = new DescribeEntityAggregatesCommand(args);
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
    Health.prototype.describeEventAggregates = function (args, optionsOrCb, cb) {
        var command = new DescribeEventAggregatesCommand(args);
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
    Health.prototype.describeEventDetails = function (args, optionsOrCb, cb) {
        var command = new DescribeEventDetailsCommand(args);
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
    Health.prototype.describeEventDetailsForOrganization = function (args, optionsOrCb, cb) {
        var command = new DescribeEventDetailsForOrganizationCommand(args);
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
    Health.prototype.describeEvents = function (args, optionsOrCb, cb) {
        var command = new DescribeEventsCommand(args);
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
    Health.prototype.describeEventsForOrganization = function (args, optionsOrCb, cb) {
        var command = new DescribeEventsForOrganizationCommand(args);
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
    Health.prototype.describeEventTypes = function (args, optionsOrCb, cb) {
        var command = new DescribeEventTypesCommand(args);
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
    Health.prototype.describeHealthServiceStatusForOrganization = function (args, optionsOrCb, cb) {
        var command = new DescribeHealthServiceStatusForOrganizationCommand(args);
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
    Health.prototype.disableHealthServiceAccessForOrganization = function (args, optionsOrCb, cb) {
        var command = new DisableHealthServiceAccessForOrganizationCommand(args);
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
    Health.prototype.enableHealthServiceAccessForOrganization = function (args, optionsOrCb, cb) {
        var command = new EnableHealthServiceAccessForOrganizationCommand(args);
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
    return Health;
}(HealthClient));
export { Health };
//# sourceMappingURL=Health.js.map