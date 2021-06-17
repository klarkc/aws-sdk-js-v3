"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Health = void 0;
const HealthClient_1 = require("./HealthClient");
const DescribeAffectedAccountsForOrganizationCommand_1 = require("./commands/DescribeAffectedAccountsForOrganizationCommand");
const DescribeAffectedEntitiesCommand_1 = require("./commands/DescribeAffectedEntitiesCommand");
const DescribeAffectedEntitiesForOrganizationCommand_1 = require("./commands/DescribeAffectedEntitiesForOrganizationCommand");
const DescribeEntityAggregatesCommand_1 = require("./commands/DescribeEntityAggregatesCommand");
const DescribeEventAggregatesCommand_1 = require("./commands/DescribeEventAggregatesCommand");
const DescribeEventDetailsCommand_1 = require("./commands/DescribeEventDetailsCommand");
const DescribeEventDetailsForOrganizationCommand_1 = require("./commands/DescribeEventDetailsForOrganizationCommand");
const DescribeEventTypesCommand_1 = require("./commands/DescribeEventTypesCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeEventsForOrganizationCommand_1 = require("./commands/DescribeEventsForOrganizationCommand");
const DescribeHealthServiceStatusForOrganizationCommand_1 = require("./commands/DescribeHealthServiceStatusForOrganizationCommand");
const DisableHealthServiceAccessForOrganizationCommand_1 = require("./commands/DisableHealthServiceAccessForOrganizationCommand");
const EnableHealthServiceAccessForOrganizationCommand_1 = require("./commands/EnableHealthServiceAccessForOrganizationCommand");
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
class Health extends HealthClient_1.HealthClient {
    describeAffectedAccountsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeAffectedAccountsForOrganizationCommand_1.DescribeAffectedAccountsForOrganizationCommand(args);
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
    describeAffectedEntities(args, optionsOrCb, cb) {
        const command = new DescribeAffectedEntitiesCommand_1.DescribeAffectedEntitiesCommand(args);
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
    describeAffectedEntitiesForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeAffectedEntitiesForOrganizationCommand_1.DescribeAffectedEntitiesForOrganizationCommand(args);
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
    describeEntityAggregates(args, optionsOrCb, cb) {
        const command = new DescribeEntityAggregatesCommand_1.DescribeEntityAggregatesCommand(args);
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
    describeEventAggregates(args, optionsOrCb, cb) {
        const command = new DescribeEventAggregatesCommand_1.DescribeEventAggregatesCommand(args);
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
    describeEventDetails(args, optionsOrCb, cb) {
        const command = new DescribeEventDetailsCommand_1.DescribeEventDetailsCommand(args);
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
    describeEventDetailsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeEventDetailsForOrganizationCommand_1.DescribeEventDetailsForOrganizationCommand(args);
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
    describeEvents(args, optionsOrCb, cb) {
        const command = new DescribeEventsCommand_1.DescribeEventsCommand(args);
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
    describeEventsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeEventsForOrganizationCommand_1.DescribeEventsForOrganizationCommand(args);
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
    describeEventTypes(args, optionsOrCb, cb) {
        const command = new DescribeEventTypesCommand_1.DescribeEventTypesCommand(args);
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
    describeHealthServiceStatusForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeHealthServiceStatusForOrganizationCommand_1.DescribeHealthServiceStatusForOrganizationCommand(args);
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
    disableHealthServiceAccessForOrganization(args, optionsOrCb, cb) {
        const command = new DisableHealthServiceAccessForOrganizationCommand_1.DisableHealthServiceAccessForOrganizationCommand(args);
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
    enableHealthServiceAccessForOrganization(args, optionsOrCb, cb) {
        const command = new EnableHealthServiceAccessForOrganizationCommand_1.EnableHealthServiceAccessForOrganizationCommand(args);
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
exports.Health = Health;
//# sourceMappingURL=Health.js.map