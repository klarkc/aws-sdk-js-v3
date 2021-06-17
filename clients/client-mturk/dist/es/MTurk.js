import { __extends } from "tslib";
import { MTurkClient } from "./MTurkClient";
import { AcceptQualificationRequestCommand, } from "./commands/AcceptQualificationRequestCommand";
import { ApproveAssignmentCommand, } from "./commands/ApproveAssignmentCommand";
import { AssociateQualificationWithWorkerCommand, } from "./commands/AssociateQualificationWithWorkerCommand";
import { CreateAdditionalAssignmentsForHITCommand, } from "./commands/CreateAdditionalAssignmentsForHITCommand";
import { CreateHITCommand } from "./commands/CreateHITCommand";
import { CreateHITTypeCommand, } from "./commands/CreateHITTypeCommand";
import { CreateHITWithHITTypeCommand, } from "./commands/CreateHITWithHITTypeCommand";
import { CreateQualificationTypeCommand, } from "./commands/CreateQualificationTypeCommand";
import { CreateWorkerBlockCommand, } from "./commands/CreateWorkerBlockCommand";
import { DeleteHITCommand } from "./commands/DeleteHITCommand";
import { DeleteQualificationTypeCommand, } from "./commands/DeleteQualificationTypeCommand";
import { DeleteWorkerBlockCommand, } from "./commands/DeleteWorkerBlockCommand";
import { DisassociateQualificationFromWorkerCommand, } from "./commands/DisassociateQualificationFromWorkerCommand";
import { GetAccountBalanceCommand, } from "./commands/GetAccountBalanceCommand";
import { GetAssignmentCommand, } from "./commands/GetAssignmentCommand";
import { GetFileUploadURLCommand, } from "./commands/GetFileUploadURLCommand";
import { GetHITCommand } from "./commands/GetHITCommand";
import { GetQualificationScoreCommand, } from "./commands/GetQualificationScoreCommand";
import { GetQualificationTypeCommand, } from "./commands/GetQualificationTypeCommand";
import { ListAssignmentsForHITCommand, } from "./commands/ListAssignmentsForHITCommand";
import { ListBonusPaymentsCommand, } from "./commands/ListBonusPaymentsCommand";
import { ListHITsCommand } from "./commands/ListHITsCommand";
import { ListHITsForQualificationTypeCommand, } from "./commands/ListHITsForQualificationTypeCommand";
import { ListQualificationRequestsCommand, } from "./commands/ListQualificationRequestsCommand";
import { ListQualificationTypesCommand, } from "./commands/ListQualificationTypesCommand";
import { ListReviewPolicyResultsForHITCommand, } from "./commands/ListReviewPolicyResultsForHITCommand";
import { ListReviewableHITsCommand, } from "./commands/ListReviewableHITsCommand";
import { ListWorkerBlocksCommand, } from "./commands/ListWorkerBlocksCommand";
import { ListWorkersWithQualificationTypeCommand, } from "./commands/ListWorkersWithQualificationTypeCommand";
import { NotifyWorkersCommand, } from "./commands/NotifyWorkersCommand";
import { RejectAssignmentCommand, } from "./commands/RejectAssignmentCommand";
import { RejectQualificationRequestCommand, } from "./commands/RejectQualificationRequestCommand";
import { SendBonusCommand } from "./commands/SendBonusCommand";
import { SendTestEventNotificationCommand, } from "./commands/SendTestEventNotificationCommand";
import { UpdateExpirationForHITCommand, } from "./commands/UpdateExpirationForHITCommand";
import { UpdateHITReviewStatusCommand, } from "./commands/UpdateHITReviewStatusCommand";
import { UpdateHITTypeOfHITCommand, } from "./commands/UpdateHITTypeOfHITCommand";
import { UpdateNotificationSettingsCommand, } from "./commands/UpdateNotificationSettingsCommand";
import { UpdateQualificationTypeCommand, } from "./commands/UpdateQualificationTypeCommand";
/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 */
var MTurk = /** @class */ (function (_super) {
    __extends(MTurk, _super);
    function MTurk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MTurk.prototype.acceptQualificationRequest = function (args, optionsOrCb, cb) {
        var command = new AcceptQualificationRequestCommand(args);
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
    MTurk.prototype.approveAssignment = function (args, optionsOrCb, cb) {
        var command = new ApproveAssignmentCommand(args);
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
    MTurk.prototype.associateQualificationWithWorker = function (args, optionsOrCb, cb) {
        var command = new AssociateQualificationWithWorkerCommand(args);
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
    MTurk.prototype.createAdditionalAssignmentsForHIT = function (args, optionsOrCb, cb) {
        var command = new CreateAdditionalAssignmentsForHITCommand(args);
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
    MTurk.prototype.createHIT = function (args, optionsOrCb, cb) {
        var command = new CreateHITCommand(args);
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
    MTurk.prototype.createHITType = function (args, optionsOrCb, cb) {
        var command = new CreateHITTypeCommand(args);
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
    MTurk.prototype.createHITWithHITType = function (args, optionsOrCb, cb) {
        var command = new CreateHITWithHITTypeCommand(args);
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
    MTurk.prototype.createQualificationType = function (args, optionsOrCb, cb) {
        var command = new CreateQualificationTypeCommand(args);
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
    MTurk.prototype.createWorkerBlock = function (args, optionsOrCb, cb) {
        var command = new CreateWorkerBlockCommand(args);
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
    MTurk.prototype.deleteHIT = function (args, optionsOrCb, cb) {
        var command = new DeleteHITCommand(args);
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
    MTurk.prototype.deleteQualificationType = function (args, optionsOrCb, cb) {
        var command = new DeleteQualificationTypeCommand(args);
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
    MTurk.prototype.deleteWorkerBlock = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkerBlockCommand(args);
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
    MTurk.prototype.disassociateQualificationFromWorker = function (args, optionsOrCb, cb) {
        var command = new DisassociateQualificationFromWorkerCommand(args);
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
    MTurk.prototype.getAccountBalance = function (args, optionsOrCb, cb) {
        var command = new GetAccountBalanceCommand(args);
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
    MTurk.prototype.getAssignment = function (args, optionsOrCb, cb) {
        var command = new GetAssignmentCommand(args);
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
    MTurk.prototype.getFileUploadURL = function (args, optionsOrCb, cb) {
        var command = new GetFileUploadURLCommand(args);
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
    MTurk.prototype.getHIT = function (args, optionsOrCb, cb) {
        var command = new GetHITCommand(args);
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
    MTurk.prototype.getQualificationScore = function (args, optionsOrCb, cb) {
        var command = new GetQualificationScoreCommand(args);
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
    MTurk.prototype.getQualificationType = function (args, optionsOrCb, cb) {
        var command = new GetQualificationTypeCommand(args);
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
    MTurk.prototype.listAssignmentsForHIT = function (args, optionsOrCb, cb) {
        var command = new ListAssignmentsForHITCommand(args);
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
    MTurk.prototype.listBonusPayments = function (args, optionsOrCb, cb) {
        var command = new ListBonusPaymentsCommand(args);
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
    MTurk.prototype.listHITs = function (args, optionsOrCb, cb) {
        var command = new ListHITsCommand(args);
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
    MTurk.prototype.listHITsForQualificationType = function (args, optionsOrCb, cb) {
        var command = new ListHITsForQualificationTypeCommand(args);
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
    MTurk.prototype.listQualificationRequests = function (args, optionsOrCb, cb) {
        var command = new ListQualificationRequestsCommand(args);
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
    MTurk.prototype.listQualificationTypes = function (args, optionsOrCb, cb) {
        var command = new ListQualificationTypesCommand(args);
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
    MTurk.prototype.listReviewableHITs = function (args, optionsOrCb, cb) {
        var command = new ListReviewableHITsCommand(args);
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
    MTurk.prototype.listReviewPolicyResultsForHIT = function (args, optionsOrCb, cb) {
        var command = new ListReviewPolicyResultsForHITCommand(args);
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
    MTurk.prototype.listWorkerBlocks = function (args, optionsOrCb, cb) {
        var command = new ListWorkerBlocksCommand(args);
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
    MTurk.prototype.listWorkersWithQualificationType = function (args, optionsOrCb, cb) {
        var command = new ListWorkersWithQualificationTypeCommand(args);
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
    MTurk.prototype.notifyWorkers = function (args, optionsOrCb, cb) {
        var command = new NotifyWorkersCommand(args);
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
    MTurk.prototype.rejectAssignment = function (args, optionsOrCb, cb) {
        var command = new RejectAssignmentCommand(args);
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
    MTurk.prototype.rejectQualificationRequest = function (args, optionsOrCb, cb) {
        var command = new RejectQualificationRequestCommand(args);
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
    MTurk.prototype.sendBonus = function (args, optionsOrCb, cb) {
        var command = new SendBonusCommand(args);
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
    MTurk.prototype.sendTestEventNotification = function (args, optionsOrCb, cb) {
        var command = new SendTestEventNotificationCommand(args);
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
    MTurk.prototype.updateExpirationForHIT = function (args, optionsOrCb, cb) {
        var command = new UpdateExpirationForHITCommand(args);
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
    MTurk.prototype.updateHITReviewStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateHITReviewStatusCommand(args);
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
    MTurk.prototype.updateHITTypeOfHIT = function (args, optionsOrCb, cb) {
        var command = new UpdateHITTypeOfHITCommand(args);
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
    MTurk.prototype.updateNotificationSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateNotificationSettingsCommand(args);
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
    MTurk.prototype.updateQualificationType = function (args, optionsOrCb, cb) {
        var command = new UpdateQualificationTypeCommand(args);
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
    return MTurk;
}(MTurkClient));
export { MTurk };
//# sourceMappingURL=MTurk.js.map