"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellArchitected = void 0;
const WellArchitectedClient_1 = require("./WellArchitectedClient");
const AssociateLensesCommand_1 = require("./commands/AssociateLensesCommand");
const CreateMilestoneCommand_1 = require("./commands/CreateMilestoneCommand");
const CreateWorkloadCommand_1 = require("./commands/CreateWorkloadCommand");
const CreateWorkloadShareCommand_1 = require("./commands/CreateWorkloadShareCommand");
const DeleteWorkloadCommand_1 = require("./commands/DeleteWorkloadCommand");
const DeleteWorkloadShareCommand_1 = require("./commands/DeleteWorkloadShareCommand");
const DisassociateLensesCommand_1 = require("./commands/DisassociateLensesCommand");
const GetAnswerCommand_1 = require("./commands/GetAnswerCommand");
const GetLensReviewCommand_1 = require("./commands/GetLensReviewCommand");
const GetLensReviewReportCommand_1 = require("./commands/GetLensReviewReportCommand");
const GetLensVersionDifferenceCommand_1 = require("./commands/GetLensVersionDifferenceCommand");
const GetMilestoneCommand_1 = require("./commands/GetMilestoneCommand");
const GetWorkloadCommand_1 = require("./commands/GetWorkloadCommand");
const ListAnswersCommand_1 = require("./commands/ListAnswersCommand");
const ListLensReviewImprovementsCommand_1 = require("./commands/ListLensReviewImprovementsCommand");
const ListLensReviewsCommand_1 = require("./commands/ListLensReviewsCommand");
const ListLensesCommand_1 = require("./commands/ListLensesCommand");
const ListMilestonesCommand_1 = require("./commands/ListMilestonesCommand");
const ListNotificationsCommand_1 = require("./commands/ListNotificationsCommand");
const ListShareInvitationsCommand_1 = require("./commands/ListShareInvitationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWorkloadSharesCommand_1 = require("./commands/ListWorkloadSharesCommand");
const ListWorkloadsCommand_1 = require("./commands/ListWorkloadsCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAnswerCommand_1 = require("./commands/UpdateAnswerCommand");
const UpdateLensReviewCommand_1 = require("./commands/UpdateLensReviewCommand");
const UpdateShareInvitationCommand_1 = require("./commands/UpdateShareInvitationCommand");
const UpdateWorkloadCommand_1 = require("./commands/UpdateWorkloadCommand");
const UpdateWorkloadShareCommand_1 = require("./commands/UpdateWorkloadShareCommand");
const UpgradeLensReviewCommand_1 = require("./commands/UpgradeLensReviewCommand");
/**
 * <fullname>AWS Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>AWS Well-Architected Tool API Reference</i>. The AWS Well-Architected Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the
 *             <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>. For information
 *             about the AWS Well-Architected Tool, see the
 *             <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>
 */
class WellArchitected extends WellArchitectedClient_1.WellArchitectedClient {
    associateLenses(args, optionsOrCb, cb) {
        const command = new AssociateLensesCommand_1.AssociateLensesCommand(args);
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
    createMilestone(args, optionsOrCb, cb) {
        const command = new CreateMilestoneCommand_1.CreateMilestoneCommand(args);
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
    createWorkload(args, optionsOrCb, cb) {
        const command = new CreateWorkloadCommand_1.CreateWorkloadCommand(args);
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
    createWorkloadShare(args, optionsOrCb, cb) {
        const command = new CreateWorkloadShareCommand_1.CreateWorkloadShareCommand(args);
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
    deleteWorkload(args, optionsOrCb, cb) {
        const command = new DeleteWorkloadCommand_1.DeleteWorkloadCommand(args);
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
    deleteWorkloadShare(args, optionsOrCb, cb) {
        const command = new DeleteWorkloadShareCommand_1.DeleteWorkloadShareCommand(args);
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
    disassociateLenses(args, optionsOrCb, cb) {
        const command = new DisassociateLensesCommand_1.DisassociateLensesCommand(args);
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
    getAnswer(args, optionsOrCb, cb) {
        const command = new GetAnswerCommand_1.GetAnswerCommand(args);
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
    getLensReview(args, optionsOrCb, cb) {
        const command = new GetLensReviewCommand_1.GetLensReviewCommand(args);
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
    getLensReviewReport(args, optionsOrCb, cb) {
        const command = new GetLensReviewReportCommand_1.GetLensReviewReportCommand(args);
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
    getLensVersionDifference(args, optionsOrCb, cb) {
        const command = new GetLensVersionDifferenceCommand_1.GetLensVersionDifferenceCommand(args);
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
    getMilestone(args, optionsOrCb, cb) {
        const command = new GetMilestoneCommand_1.GetMilestoneCommand(args);
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
    getWorkload(args, optionsOrCb, cb) {
        const command = new GetWorkloadCommand_1.GetWorkloadCommand(args);
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
    listAnswers(args, optionsOrCb, cb) {
        const command = new ListAnswersCommand_1.ListAnswersCommand(args);
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
    listLenses(args, optionsOrCb, cb) {
        const command = new ListLensesCommand_1.ListLensesCommand(args);
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
    listLensReviewImprovements(args, optionsOrCb, cb) {
        const command = new ListLensReviewImprovementsCommand_1.ListLensReviewImprovementsCommand(args);
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
    listLensReviews(args, optionsOrCb, cb) {
        const command = new ListLensReviewsCommand_1.ListLensReviewsCommand(args);
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
    listMilestones(args, optionsOrCb, cb) {
        const command = new ListMilestonesCommand_1.ListMilestonesCommand(args);
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
    listNotifications(args, optionsOrCb, cb) {
        const command = new ListNotificationsCommand_1.ListNotificationsCommand(args);
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
    listShareInvitations(args, optionsOrCb, cb) {
        const command = new ListShareInvitationsCommand_1.ListShareInvitationsCommand(args);
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
    listWorkloads(args, optionsOrCb, cb) {
        const command = new ListWorkloadsCommand_1.ListWorkloadsCommand(args);
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
    listWorkloadShares(args, optionsOrCb, cb) {
        const command = new ListWorkloadSharesCommand_1.ListWorkloadSharesCommand(args);
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
    updateAnswer(args, optionsOrCb, cb) {
        const command = new UpdateAnswerCommand_1.UpdateAnswerCommand(args);
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
    updateLensReview(args, optionsOrCb, cb) {
        const command = new UpdateLensReviewCommand_1.UpdateLensReviewCommand(args);
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
    updateShareInvitation(args, optionsOrCb, cb) {
        const command = new UpdateShareInvitationCommand_1.UpdateShareInvitationCommand(args);
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
    updateWorkload(args, optionsOrCb, cb) {
        const command = new UpdateWorkloadCommand_1.UpdateWorkloadCommand(args);
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
    updateWorkloadShare(args, optionsOrCb, cb) {
        const command = new UpdateWorkloadShareCommand_1.UpdateWorkloadShareCommand(args);
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
    upgradeLensReview(args, optionsOrCb, cb) {
        const command = new UpgradeLensReviewCommand_1.UpgradeLensReviewCommand(args);
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
exports.WellArchitected = WellArchitected;
//# sourceMappingURL=WellArchitected.js.map