"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWatchEvents = void 0;
const CloudWatchEventsClient_1 = require("./CloudWatchEventsClient");
const ActivateEventSourceCommand_1 = require("./commands/ActivateEventSourceCommand");
const CancelReplayCommand_1 = require("./commands/CancelReplayCommand");
const CreateApiDestinationCommand_1 = require("./commands/CreateApiDestinationCommand");
const CreateArchiveCommand_1 = require("./commands/CreateArchiveCommand");
const CreateConnectionCommand_1 = require("./commands/CreateConnectionCommand");
const CreateEventBusCommand_1 = require("./commands/CreateEventBusCommand");
const CreatePartnerEventSourceCommand_1 = require("./commands/CreatePartnerEventSourceCommand");
const DeactivateEventSourceCommand_1 = require("./commands/DeactivateEventSourceCommand");
const DeauthorizeConnectionCommand_1 = require("./commands/DeauthorizeConnectionCommand");
const DeleteApiDestinationCommand_1 = require("./commands/DeleteApiDestinationCommand");
const DeleteArchiveCommand_1 = require("./commands/DeleteArchiveCommand");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const DeleteEventBusCommand_1 = require("./commands/DeleteEventBusCommand");
const DeletePartnerEventSourceCommand_1 = require("./commands/DeletePartnerEventSourceCommand");
const DeleteRuleCommand_1 = require("./commands/DeleteRuleCommand");
const DescribeApiDestinationCommand_1 = require("./commands/DescribeApiDestinationCommand");
const DescribeArchiveCommand_1 = require("./commands/DescribeArchiveCommand");
const DescribeConnectionCommand_1 = require("./commands/DescribeConnectionCommand");
const DescribeEventBusCommand_1 = require("./commands/DescribeEventBusCommand");
const DescribeEventSourceCommand_1 = require("./commands/DescribeEventSourceCommand");
const DescribePartnerEventSourceCommand_1 = require("./commands/DescribePartnerEventSourceCommand");
const DescribeReplayCommand_1 = require("./commands/DescribeReplayCommand");
const DescribeRuleCommand_1 = require("./commands/DescribeRuleCommand");
const DisableRuleCommand_1 = require("./commands/DisableRuleCommand");
const EnableRuleCommand_1 = require("./commands/EnableRuleCommand");
const ListApiDestinationsCommand_1 = require("./commands/ListApiDestinationsCommand");
const ListArchivesCommand_1 = require("./commands/ListArchivesCommand");
const ListConnectionsCommand_1 = require("./commands/ListConnectionsCommand");
const ListEventBusesCommand_1 = require("./commands/ListEventBusesCommand");
const ListEventSourcesCommand_1 = require("./commands/ListEventSourcesCommand");
const ListPartnerEventSourceAccountsCommand_1 = require("./commands/ListPartnerEventSourceAccountsCommand");
const ListPartnerEventSourcesCommand_1 = require("./commands/ListPartnerEventSourcesCommand");
const ListReplaysCommand_1 = require("./commands/ListReplaysCommand");
const ListRuleNamesByTargetCommand_1 = require("./commands/ListRuleNamesByTargetCommand");
const ListRulesCommand_1 = require("./commands/ListRulesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTargetsByRuleCommand_1 = require("./commands/ListTargetsByRuleCommand");
const PutEventsCommand_1 = require("./commands/PutEventsCommand");
const PutPartnerEventsCommand_1 = require("./commands/PutPartnerEventsCommand");
const PutPermissionCommand_1 = require("./commands/PutPermissionCommand");
const PutRuleCommand_1 = require("./commands/PutRuleCommand");
const PutTargetsCommand_1 = require("./commands/PutTargetsCommand");
const RemovePermissionCommand_1 = require("./commands/RemovePermissionCommand");
const RemoveTargetsCommand_1 = require("./commands/RemoveTargetsCommand");
const StartReplayCommand_1 = require("./commands/StartReplayCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestEventPatternCommand_1 = require("./commands/TestEventPatternCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateApiDestinationCommand_1 = require("./commands/UpdateApiDestinationCommand");
const UpdateArchiveCommand_1 = require("./commands/UpdateArchiveCommand");
const UpdateConnectionCommand_1 = require("./commands/UpdateConnectionCommand");
/**
 * <p>Amazon EventBridge helps you to respond to state changes in your AWS resources. When your
 *       resources change state, they automatically send events into an event stream. You can create
 *       rules that match selected events in the stream and route them to targets to take action. You
 *       can also use rules to take action on a predetermined schedule. For example, you can configure
 *       rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an AWS Lambda function to update DNS entries when an event
 *           notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for
 *           detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 */
class CloudWatchEvents extends CloudWatchEventsClient_1.CloudWatchEventsClient {
    activateEventSource(args, optionsOrCb, cb) {
        const command = new ActivateEventSourceCommand_1.ActivateEventSourceCommand(args);
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
    cancelReplay(args, optionsOrCb, cb) {
        const command = new CancelReplayCommand_1.CancelReplayCommand(args);
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
    createApiDestination(args, optionsOrCb, cb) {
        const command = new CreateApiDestinationCommand_1.CreateApiDestinationCommand(args);
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
    createArchive(args, optionsOrCb, cb) {
        const command = new CreateArchiveCommand_1.CreateArchiveCommand(args);
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
    createConnection(args, optionsOrCb, cb) {
        const command = new CreateConnectionCommand_1.CreateConnectionCommand(args);
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
    createEventBus(args, optionsOrCb, cb) {
        const command = new CreateEventBusCommand_1.CreateEventBusCommand(args);
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
    createPartnerEventSource(args, optionsOrCb, cb) {
        const command = new CreatePartnerEventSourceCommand_1.CreatePartnerEventSourceCommand(args);
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
    deactivateEventSource(args, optionsOrCb, cb) {
        const command = new DeactivateEventSourceCommand_1.DeactivateEventSourceCommand(args);
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
    deauthorizeConnection(args, optionsOrCb, cb) {
        const command = new DeauthorizeConnectionCommand_1.DeauthorizeConnectionCommand(args);
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
    deleteApiDestination(args, optionsOrCb, cb) {
        const command = new DeleteApiDestinationCommand_1.DeleteApiDestinationCommand(args);
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
    deleteArchive(args, optionsOrCb, cb) {
        const command = new DeleteArchiveCommand_1.DeleteArchiveCommand(args);
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
    deleteConnection(args, optionsOrCb, cb) {
        const command = new DeleteConnectionCommand_1.DeleteConnectionCommand(args);
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
    deleteEventBus(args, optionsOrCb, cb) {
        const command = new DeleteEventBusCommand_1.DeleteEventBusCommand(args);
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
    deletePartnerEventSource(args, optionsOrCb, cb) {
        const command = new DeletePartnerEventSourceCommand_1.DeletePartnerEventSourceCommand(args);
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
    deleteRule(args, optionsOrCb, cb) {
        const command = new DeleteRuleCommand_1.DeleteRuleCommand(args);
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
    describeApiDestination(args, optionsOrCb, cb) {
        const command = new DescribeApiDestinationCommand_1.DescribeApiDestinationCommand(args);
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
    describeArchive(args, optionsOrCb, cb) {
        const command = new DescribeArchiveCommand_1.DescribeArchiveCommand(args);
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
    describeConnection(args, optionsOrCb, cb) {
        const command = new DescribeConnectionCommand_1.DescribeConnectionCommand(args);
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
    describeEventBus(args, optionsOrCb, cb) {
        const command = new DescribeEventBusCommand_1.DescribeEventBusCommand(args);
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
    describeEventSource(args, optionsOrCb, cb) {
        const command = new DescribeEventSourceCommand_1.DescribeEventSourceCommand(args);
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
    describePartnerEventSource(args, optionsOrCb, cb) {
        const command = new DescribePartnerEventSourceCommand_1.DescribePartnerEventSourceCommand(args);
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
    describeReplay(args, optionsOrCb, cb) {
        const command = new DescribeReplayCommand_1.DescribeReplayCommand(args);
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
    describeRule(args, optionsOrCb, cb) {
        const command = new DescribeRuleCommand_1.DescribeRuleCommand(args);
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
    disableRule(args, optionsOrCb, cb) {
        const command = new DisableRuleCommand_1.DisableRuleCommand(args);
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
    enableRule(args, optionsOrCb, cb) {
        const command = new EnableRuleCommand_1.EnableRuleCommand(args);
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
    listApiDestinations(args, optionsOrCb, cb) {
        const command = new ListApiDestinationsCommand_1.ListApiDestinationsCommand(args);
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
    listArchives(args, optionsOrCb, cb) {
        const command = new ListArchivesCommand_1.ListArchivesCommand(args);
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
    listConnections(args, optionsOrCb, cb) {
        const command = new ListConnectionsCommand_1.ListConnectionsCommand(args);
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
    listEventBuses(args, optionsOrCb, cb) {
        const command = new ListEventBusesCommand_1.ListEventBusesCommand(args);
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
    listEventSources(args, optionsOrCb, cb) {
        const command = new ListEventSourcesCommand_1.ListEventSourcesCommand(args);
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
    listPartnerEventSourceAccounts(args, optionsOrCb, cb) {
        const command = new ListPartnerEventSourceAccountsCommand_1.ListPartnerEventSourceAccountsCommand(args);
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
    listPartnerEventSources(args, optionsOrCb, cb) {
        const command = new ListPartnerEventSourcesCommand_1.ListPartnerEventSourcesCommand(args);
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
    listReplays(args, optionsOrCb, cb) {
        const command = new ListReplaysCommand_1.ListReplaysCommand(args);
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
    listRuleNamesByTarget(args, optionsOrCb, cb) {
        const command = new ListRuleNamesByTargetCommand_1.ListRuleNamesByTargetCommand(args);
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
    listRules(args, optionsOrCb, cb) {
        const command = new ListRulesCommand_1.ListRulesCommand(args);
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
    listTargetsByRule(args, optionsOrCb, cb) {
        const command = new ListTargetsByRuleCommand_1.ListTargetsByRuleCommand(args);
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
    putEvents(args, optionsOrCb, cb) {
        const command = new PutEventsCommand_1.PutEventsCommand(args);
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
    putPartnerEvents(args, optionsOrCb, cb) {
        const command = new PutPartnerEventsCommand_1.PutPartnerEventsCommand(args);
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
    putPermission(args, optionsOrCb, cb) {
        const command = new PutPermissionCommand_1.PutPermissionCommand(args);
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
    putRule(args, optionsOrCb, cb) {
        const command = new PutRuleCommand_1.PutRuleCommand(args);
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
    putTargets(args, optionsOrCb, cb) {
        const command = new PutTargetsCommand_1.PutTargetsCommand(args);
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
    removePermission(args, optionsOrCb, cb) {
        const command = new RemovePermissionCommand_1.RemovePermissionCommand(args);
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
    removeTargets(args, optionsOrCb, cb) {
        const command = new RemoveTargetsCommand_1.RemoveTargetsCommand(args);
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
    startReplay(args, optionsOrCb, cb) {
        const command = new StartReplayCommand_1.StartReplayCommand(args);
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
    testEventPattern(args, optionsOrCb, cb) {
        const command = new TestEventPatternCommand_1.TestEventPatternCommand(args);
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
    updateApiDestination(args, optionsOrCb, cb) {
        const command = new UpdateApiDestinationCommand_1.UpdateApiDestinationCommand(args);
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
    updateArchive(args, optionsOrCb, cb) {
        const command = new UpdateArchiveCommand_1.UpdateArchiveCommand(args);
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
    updateConnection(args, optionsOrCb, cb) {
        const command = new UpdateConnectionCommand_1.UpdateConnectionCommand(args);
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
exports.CloudWatchEvents = CloudWatchEvents;
//# sourceMappingURL=CloudWatchEvents.js.map