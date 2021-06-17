import { __extends } from "tslib";
import { MacieClient } from "./MacieClient";
import { AssociateMemberAccountCommand, } from "./commands/AssociateMemberAccountCommand";
import { AssociateS3ResourcesCommand, } from "./commands/AssociateS3ResourcesCommand";
import { DisassociateMemberAccountCommand, } from "./commands/DisassociateMemberAccountCommand";
import { DisassociateS3ResourcesCommand, } from "./commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommand, } from "./commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommand, } from "./commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommand, } from "./commands/UpdateS3ResourcesCommand";
/**
 * <fullname>Amazon Macie Classic</fullname>
 *          <p>Amazon Macie Classic is a security service that uses machine learning to automatically
 *       discover, classify, and protect sensitive data in AWS. Macie Classic recognizes sensitive data
 *       such as personally identifiable information (PII) or intellectual property, and provides you
 *       with dashboards and alerts that give visibility into how this data is being accessed or moved.
 *       For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Amazon Macie
 *         Classic User Guide</a>. </p>
 */
var Macie = /** @class */ (function (_super) {
    __extends(Macie, _super);
    function Macie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Macie.prototype.associateMemberAccount = function (args, optionsOrCb, cb) {
        var command = new AssociateMemberAccountCommand(args);
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
    Macie.prototype.associateS3Resources = function (args, optionsOrCb, cb) {
        var command = new AssociateS3ResourcesCommand(args);
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
    Macie.prototype.disassociateMemberAccount = function (args, optionsOrCb, cb) {
        var command = new DisassociateMemberAccountCommand(args);
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
    Macie.prototype.disassociateS3Resources = function (args, optionsOrCb, cb) {
        var command = new DisassociateS3ResourcesCommand(args);
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
    Macie.prototype.listMemberAccounts = function (args, optionsOrCb, cb) {
        var command = new ListMemberAccountsCommand(args);
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
    Macie.prototype.listS3Resources = function (args, optionsOrCb, cb) {
        var command = new ListS3ResourcesCommand(args);
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
    Macie.prototype.updateS3Resources = function (args, optionsOrCb, cb) {
        var command = new UpdateS3ResourcesCommand(args);
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
    return Macie;
}(MacieClient));
export { Macie };
//# sourceMappingURL=Macie.js.map