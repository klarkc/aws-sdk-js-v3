import { __extends } from "tslib";
import { SWFClient } from "./SWFClient";
import { CountClosedWorkflowExecutionsCommand, } from "./commands/CountClosedWorkflowExecutionsCommand";
import { CountOpenWorkflowExecutionsCommand, } from "./commands/CountOpenWorkflowExecutionsCommand";
import { CountPendingActivityTasksCommand, } from "./commands/CountPendingActivityTasksCommand";
import { CountPendingDecisionTasksCommand, } from "./commands/CountPendingDecisionTasksCommand";
import { DeprecateActivityTypeCommand, } from "./commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommand, } from "./commands/DeprecateDomainCommand";
import { DeprecateWorkflowTypeCommand, } from "./commands/DeprecateWorkflowTypeCommand";
import { DescribeActivityTypeCommand, } from "./commands/DescribeActivityTypeCommand";
import { DescribeDomainCommand, } from "./commands/DescribeDomainCommand";
import { DescribeWorkflowExecutionCommand, } from "./commands/DescribeWorkflowExecutionCommand";
import { DescribeWorkflowTypeCommand, } from "./commands/DescribeWorkflowTypeCommand";
import { GetWorkflowExecutionHistoryCommand, } from "./commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommand, } from "./commands/ListActivityTypesCommand";
import { ListClosedWorkflowExecutionsCommand, } from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListOpenWorkflowExecutionsCommand, } from "./commands/ListOpenWorkflowExecutionsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommand, } from "./commands/ListWorkflowTypesCommand";
import { PollForActivityTaskCommand, } from "./commands/PollForActivityTaskCommand";
import { PollForDecisionTaskCommand, } from "./commands/PollForDecisionTaskCommand";
import { RecordActivityTaskHeartbeatCommand, } from "./commands/RecordActivityTaskHeartbeatCommand";
import { RegisterActivityTypeCommand, } from "./commands/RegisterActivityTypeCommand";
import { RegisterDomainCommand, } from "./commands/RegisterDomainCommand";
import { RegisterWorkflowTypeCommand, } from "./commands/RegisterWorkflowTypeCommand";
import { RequestCancelWorkflowExecutionCommand, } from "./commands/RequestCancelWorkflowExecutionCommand";
import { RespondActivityTaskCanceledCommand, } from "./commands/RespondActivityTaskCanceledCommand";
import { RespondActivityTaskCompletedCommand, } from "./commands/RespondActivityTaskCompletedCommand";
import { RespondActivityTaskFailedCommand, } from "./commands/RespondActivityTaskFailedCommand";
import { RespondDecisionTaskCompletedCommand, } from "./commands/RespondDecisionTaskCompletedCommand";
import { SignalWorkflowExecutionCommand, } from "./commands/SignalWorkflowExecutionCommand";
import { StartWorkflowExecutionCommand, } from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TerminateWorkflowExecutionCommand, } from "./commands/TerminateWorkflowExecutionCommand";
import { UndeprecateActivityTypeCommand, } from "./commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommand, } from "./commands/UndeprecateDomainCommand";
import { UndeprecateWorkflowTypeCommand, } from "./commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <fullname>Amazon Simple Workflow Service</fullname>
 *
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
var SWF = /** @class */ (function (_super) {
    __extends(SWF, _super);
    function SWF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SWF.prototype.countClosedWorkflowExecutions = function (args, optionsOrCb, cb) {
        var command = new CountClosedWorkflowExecutionsCommand(args);
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
    SWF.prototype.countOpenWorkflowExecutions = function (args, optionsOrCb, cb) {
        var command = new CountOpenWorkflowExecutionsCommand(args);
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
    SWF.prototype.countPendingActivityTasks = function (args, optionsOrCb, cb) {
        var command = new CountPendingActivityTasksCommand(args);
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
    SWF.prototype.countPendingDecisionTasks = function (args, optionsOrCb, cb) {
        var command = new CountPendingDecisionTasksCommand(args);
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
    SWF.prototype.deprecateActivityType = function (args, optionsOrCb, cb) {
        var command = new DeprecateActivityTypeCommand(args);
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
    SWF.prototype.deprecateDomain = function (args, optionsOrCb, cb) {
        var command = new DeprecateDomainCommand(args);
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
    SWF.prototype.deprecateWorkflowType = function (args, optionsOrCb, cb) {
        var command = new DeprecateWorkflowTypeCommand(args);
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
    SWF.prototype.describeActivityType = function (args, optionsOrCb, cb) {
        var command = new DescribeActivityTypeCommand(args);
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
    SWF.prototype.describeDomain = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainCommand(args);
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
    SWF.prototype.describeWorkflowExecution = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkflowExecutionCommand(args);
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
    SWF.prototype.describeWorkflowType = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkflowTypeCommand(args);
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
    SWF.prototype.getWorkflowExecutionHistory = function (args, optionsOrCb, cb) {
        var command = new GetWorkflowExecutionHistoryCommand(args);
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
    SWF.prototype.listActivityTypes = function (args, optionsOrCb, cb) {
        var command = new ListActivityTypesCommand(args);
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
    SWF.prototype.listClosedWorkflowExecutions = function (args, optionsOrCb, cb) {
        var command = new ListClosedWorkflowExecutionsCommand(args);
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
    SWF.prototype.listDomains = function (args, optionsOrCb, cb) {
        var command = new ListDomainsCommand(args);
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
    SWF.prototype.listOpenWorkflowExecutions = function (args, optionsOrCb, cb) {
        var command = new ListOpenWorkflowExecutionsCommand(args);
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
    SWF.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    SWF.prototype.listWorkflowTypes = function (args, optionsOrCb, cb) {
        var command = new ListWorkflowTypesCommand(args);
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
    SWF.prototype.pollForActivityTask = function (args, optionsOrCb, cb) {
        var command = new PollForActivityTaskCommand(args);
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
    SWF.prototype.pollForDecisionTask = function (args, optionsOrCb, cb) {
        var command = new PollForDecisionTaskCommand(args);
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
    SWF.prototype.recordActivityTaskHeartbeat = function (args, optionsOrCb, cb) {
        var command = new RecordActivityTaskHeartbeatCommand(args);
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
    SWF.prototype.registerActivityType = function (args, optionsOrCb, cb) {
        var command = new RegisterActivityTypeCommand(args);
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
    SWF.prototype.registerDomain = function (args, optionsOrCb, cb) {
        var command = new RegisterDomainCommand(args);
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
    SWF.prototype.registerWorkflowType = function (args, optionsOrCb, cb) {
        var command = new RegisterWorkflowTypeCommand(args);
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
    SWF.prototype.requestCancelWorkflowExecution = function (args, optionsOrCb, cb) {
        var command = new RequestCancelWorkflowExecutionCommand(args);
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
    SWF.prototype.respondActivityTaskCanceled = function (args, optionsOrCb, cb) {
        var command = new RespondActivityTaskCanceledCommand(args);
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
    SWF.prototype.respondActivityTaskCompleted = function (args, optionsOrCb, cb) {
        var command = new RespondActivityTaskCompletedCommand(args);
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
    SWF.prototype.respondActivityTaskFailed = function (args, optionsOrCb, cb) {
        var command = new RespondActivityTaskFailedCommand(args);
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
    SWF.prototype.respondDecisionTaskCompleted = function (args, optionsOrCb, cb) {
        var command = new RespondDecisionTaskCompletedCommand(args);
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
    SWF.prototype.signalWorkflowExecution = function (args, optionsOrCb, cb) {
        var command = new SignalWorkflowExecutionCommand(args);
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
    SWF.prototype.startWorkflowExecution = function (args, optionsOrCb, cb) {
        var command = new StartWorkflowExecutionCommand(args);
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
    SWF.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    SWF.prototype.terminateWorkflowExecution = function (args, optionsOrCb, cb) {
        var command = new TerminateWorkflowExecutionCommand(args);
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
    SWF.prototype.undeprecateActivityType = function (args, optionsOrCb, cb) {
        var command = new UndeprecateActivityTypeCommand(args);
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
    SWF.prototype.undeprecateDomain = function (args, optionsOrCb, cb) {
        var command = new UndeprecateDomainCommand(args);
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
    SWF.prototype.undeprecateWorkflowType = function (args, optionsOrCb, cb) {
        var command = new UndeprecateWorkflowTypeCommand(args);
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
    SWF.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    return SWF;
}(SWFClient));
export { SWF };
//# sourceMappingURL=SWF.js.map