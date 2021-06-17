import { __extends } from "tslib";
import { DetectiveClient } from "./DetectiveClient";
import { AcceptInvitationCommand, } from "./commands/AcceptInvitationCommand";
import { CreateGraphCommand } from "./commands/CreateGraphCommand";
import { CreateMembersCommand, } from "./commands/CreateMembersCommand";
import { DeleteGraphCommand } from "./commands/DeleteGraphCommand";
import { DeleteMembersCommand, } from "./commands/DeleteMembersCommand";
import { DisassociateMembershipCommand, } from "./commands/DisassociateMembershipCommand";
import { GetMembersCommand } from "./commands/GetMembersCommand";
import { ListGraphsCommand } from "./commands/ListGraphsCommand";
import { ListInvitationsCommand, } from "./commands/ListInvitationsCommand";
import { ListMembersCommand } from "./commands/ListMembersCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RejectInvitationCommand, } from "./commands/RejectInvitationCommand";
import { StartMonitoringMemberCommand, } from "./commands/StartMonitoringMemberCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <p>Detective uses machine learning and purpose-built visualizations to help you analyze and
 *          investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically
 *          extracts time-based events such as login attempts, API calls, and network traffic from
 *          AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
 *          Amazon GuardDuty.</p>
 *          <p>The Detective API primarily supports the creation and management of behavior graphs. A
 *          behavior graph contains the extracted data from a set of member accounts, and is created
 *          and managed by an administrator account.</p>
 *          <p>Every behavior graph is specific to a Region. You can only use the API to manage graphs
 *          that belong to the Region that is associated with the currently selected endpoint.</p>
 *          <p>A Detective administrator account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>View the list of member accounts in a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Add member accounts to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove member accounts from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>A member account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>View the list of behavior graphs that they are invited to.</p>
 *             </li>
 *             <li>
 *                <p>Accept an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Decline an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove their account from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>
 *          <note>
 *             <p>We replaced the term "master account" with the term "administrator account." An
 *             administrator account is used to centrally manage multiple accounts. In the case of
 *             Detective, the administrator account manages the accounts in their behavior graph.</p>
 *          </note>
 */
var Detective = /** @class */ (function (_super) {
    __extends(Detective, _super);
    function Detective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Detective.prototype.acceptInvitation = function (args, optionsOrCb, cb) {
        var command = new AcceptInvitationCommand(args);
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
    Detective.prototype.createGraph = function (args, optionsOrCb, cb) {
        var command = new CreateGraphCommand(args);
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
    Detective.prototype.createMembers = function (args, optionsOrCb, cb) {
        var command = new CreateMembersCommand(args);
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
    Detective.prototype.deleteGraph = function (args, optionsOrCb, cb) {
        var command = new DeleteGraphCommand(args);
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
    Detective.prototype.deleteMembers = function (args, optionsOrCb, cb) {
        var command = new DeleteMembersCommand(args);
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
    Detective.prototype.disassociateMembership = function (args, optionsOrCb, cb) {
        var command = new DisassociateMembershipCommand(args);
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
    Detective.prototype.getMembers = function (args, optionsOrCb, cb) {
        var command = new GetMembersCommand(args);
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
    Detective.prototype.listGraphs = function (args, optionsOrCb, cb) {
        var command = new ListGraphsCommand(args);
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
    Detective.prototype.listInvitations = function (args, optionsOrCb, cb) {
        var command = new ListInvitationsCommand(args);
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
    Detective.prototype.listMembers = function (args, optionsOrCb, cb) {
        var command = new ListMembersCommand(args);
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
    Detective.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    Detective.prototype.rejectInvitation = function (args, optionsOrCb, cb) {
        var command = new RejectInvitationCommand(args);
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
    Detective.prototype.startMonitoringMember = function (args, optionsOrCb, cb) {
        var command = new StartMonitoringMemberCommand(args);
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
    Detective.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    Detective.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return Detective;
}(DetectiveClient));
export { Detective };
//# sourceMappingURL=Detective.js.map