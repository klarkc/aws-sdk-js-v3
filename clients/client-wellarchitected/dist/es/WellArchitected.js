import { __extends } from "tslib";
import { WellArchitectedClient } from "./WellArchitectedClient";
import { AssociateLensesCommand, } from "./commands/AssociateLensesCommand";
import { CreateMilestoneCommand, } from "./commands/CreateMilestoneCommand";
import { CreateWorkloadCommand, } from "./commands/CreateWorkloadCommand";
import { CreateWorkloadShareCommand, } from "./commands/CreateWorkloadShareCommand";
import { DeleteWorkloadCommand, } from "./commands/DeleteWorkloadCommand";
import { DeleteWorkloadShareCommand, } from "./commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommand, } from "./commands/DisassociateLensesCommand";
import { GetAnswerCommand } from "./commands/GetAnswerCommand";
import { GetLensReviewCommand, } from "./commands/GetLensReviewCommand";
import { GetLensReviewReportCommand, } from "./commands/GetLensReviewReportCommand";
import { GetLensVersionDifferenceCommand, } from "./commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommand, } from "./commands/GetMilestoneCommand";
import { GetWorkloadCommand } from "./commands/GetWorkloadCommand";
import { ListAnswersCommand } from "./commands/ListAnswersCommand";
import { ListLensReviewImprovementsCommand, } from "./commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommand, } from "./commands/ListLensReviewsCommand";
import { ListLensesCommand } from "./commands/ListLensesCommand";
import { ListMilestonesCommand, } from "./commands/ListMilestonesCommand";
import { ListNotificationsCommand, } from "./commands/ListNotificationsCommand";
import { ListShareInvitationsCommand, } from "./commands/ListShareInvitationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListWorkloadSharesCommand, } from "./commands/ListWorkloadSharesCommand";
import { ListWorkloadsCommand, } from "./commands/ListWorkloadsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAnswerCommand, } from "./commands/UpdateAnswerCommand";
import { UpdateLensReviewCommand, } from "./commands/UpdateLensReviewCommand";
import { UpdateShareInvitationCommand, } from "./commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommand, } from "./commands/UpdateWorkloadCommand";
import { UpdateWorkloadShareCommand, } from "./commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommand, } from "./commands/UpgradeLensReviewCommand";
/**
 * <fullname>AWS Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>AWS Well-Architected Tool API Reference</i>. The AWS Well-Architected Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the
 *             <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>. For information
 *             about the AWS Well-Architected Tool, see the
 *             <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>
 */
var WellArchitected = /** @class */ (function (_super) {
    __extends(WellArchitected, _super);
    function WellArchitected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WellArchitected.prototype.associateLenses = function (args, optionsOrCb, cb) {
        var command = new AssociateLensesCommand(args);
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
    WellArchitected.prototype.createMilestone = function (args, optionsOrCb, cb) {
        var command = new CreateMilestoneCommand(args);
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
    WellArchitected.prototype.createWorkload = function (args, optionsOrCb, cb) {
        var command = new CreateWorkloadCommand(args);
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
    WellArchitected.prototype.createWorkloadShare = function (args, optionsOrCb, cb) {
        var command = new CreateWorkloadShareCommand(args);
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
    WellArchitected.prototype.deleteWorkload = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkloadCommand(args);
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
    WellArchitected.prototype.deleteWorkloadShare = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkloadShareCommand(args);
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
    WellArchitected.prototype.disassociateLenses = function (args, optionsOrCb, cb) {
        var command = new DisassociateLensesCommand(args);
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
    WellArchitected.prototype.getAnswer = function (args, optionsOrCb, cb) {
        var command = new GetAnswerCommand(args);
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
    WellArchitected.prototype.getLensReview = function (args, optionsOrCb, cb) {
        var command = new GetLensReviewCommand(args);
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
    WellArchitected.prototype.getLensReviewReport = function (args, optionsOrCb, cb) {
        var command = new GetLensReviewReportCommand(args);
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
    WellArchitected.prototype.getLensVersionDifference = function (args, optionsOrCb, cb) {
        var command = new GetLensVersionDifferenceCommand(args);
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
    WellArchitected.prototype.getMilestone = function (args, optionsOrCb, cb) {
        var command = new GetMilestoneCommand(args);
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
    WellArchitected.prototype.getWorkload = function (args, optionsOrCb, cb) {
        var command = new GetWorkloadCommand(args);
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
    WellArchitected.prototype.listAnswers = function (args, optionsOrCb, cb) {
        var command = new ListAnswersCommand(args);
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
    WellArchitected.prototype.listLenses = function (args, optionsOrCb, cb) {
        var command = new ListLensesCommand(args);
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
    WellArchitected.prototype.listLensReviewImprovements = function (args, optionsOrCb, cb) {
        var command = new ListLensReviewImprovementsCommand(args);
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
    WellArchitected.prototype.listLensReviews = function (args, optionsOrCb, cb) {
        var command = new ListLensReviewsCommand(args);
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
    WellArchitected.prototype.listMilestones = function (args, optionsOrCb, cb) {
        var command = new ListMilestonesCommand(args);
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
    WellArchitected.prototype.listNotifications = function (args, optionsOrCb, cb) {
        var command = new ListNotificationsCommand(args);
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
    WellArchitected.prototype.listShareInvitations = function (args, optionsOrCb, cb) {
        var command = new ListShareInvitationsCommand(args);
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
    WellArchitected.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    WellArchitected.prototype.listWorkloads = function (args, optionsOrCb, cb) {
        var command = new ListWorkloadsCommand(args);
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
    WellArchitected.prototype.listWorkloadShares = function (args, optionsOrCb, cb) {
        var command = new ListWorkloadSharesCommand(args);
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
    WellArchitected.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    WellArchitected.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    WellArchitected.prototype.updateAnswer = function (args, optionsOrCb, cb) {
        var command = new UpdateAnswerCommand(args);
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
    WellArchitected.prototype.updateLensReview = function (args, optionsOrCb, cb) {
        var command = new UpdateLensReviewCommand(args);
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
    WellArchitected.prototype.updateShareInvitation = function (args, optionsOrCb, cb) {
        var command = new UpdateShareInvitationCommand(args);
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
    WellArchitected.prototype.updateWorkload = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkloadCommand(args);
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
    WellArchitected.prototype.updateWorkloadShare = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkloadShareCommand(args);
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
    WellArchitected.prototype.upgradeLensReview = function (args, optionsOrCb, cb) {
        var command = new UpgradeLensReviewCommand(args);
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
    return WellArchitected;
}(WellArchitectedClient));
export { WellArchitected };
//# sourceMappingURL=WellArchitected.js.map