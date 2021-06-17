import { __extends } from "tslib";
import { Route53DomainsClient } from "./Route53DomainsClient";
import { AcceptDomainTransferFromAnotherAwsAccountCommand, } from "./commands/AcceptDomainTransferFromAnotherAwsAccountCommand";
import { CancelDomainTransferToAnotherAwsAccountCommand, } from "./commands/CancelDomainTransferToAnotherAwsAccountCommand";
import { CheckDomainAvailabilityCommand, } from "./commands/CheckDomainAvailabilityCommand";
import { CheckDomainTransferabilityCommand, } from "./commands/CheckDomainTransferabilityCommand";
import { DeleteTagsForDomainCommand, } from "./commands/DeleteTagsForDomainCommand";
import { DisableDomainAutoRenewCommand, } from "./commands/DisableDomainAutoRenewCommand";
import { DisableDomainTransferLockCommand, } from "./commands/DisableDomainTransferLockCommand";
import { EnableDomainAutoRenewCommand, } from "./commands/EnableDomainAutoRenewCommand";
import { EnableDomainTransferLockCommand, } from "./commands/EnableDomainTransferLockCommand";
import { GetContactReachabilityStatusCommand, } from "./commands/GetContactReachabilityStatusCommand";
import { GetDomainDetailCommand, } from "./commands/GetDomainDetailCommand";
import { GetDomainSuggestionsCommand, } from "./commands/GetDomainSuggestionsCommand";
import { GetOperationDetailCommand, } from "./commands/GetOperationDetailCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListOperationsCommand, } from "./commands/ListOperationsCommand";
import { ListTagsForDomainCommand, } from "./commands/ListTagsForDomainCommand";
import { RegisterDomainCommand, } from "./commands/RegisterDomainCommand";
import { RejectDomainTransferFromAnotherAwsAccountCommand, } from "./commands/RejectDomainTransferFromAnotherAwsAccountCommand";
import { RenewDomainCommand } from "./commands/RenewDomainCommand";
import { ResendContactReachabilityEmailCommand, } from "./commands/ResendContactReachabilityEmailCommand";
import { RetrieveDomainAuthCodeCommand, } from "./commands/RetrieveDomainAuthCodeCommand";
import { TransferDomainCommand, } from "./commands/TransferDomainCommand";
import { TransferDomainToAnotherAwsAccountCommand, } from "./commands/TransferDomainToAnotherAwsAccountCommand";
import { UpdateDomainContactCommand, } from "./commands/UpdateDomainContactCommand";
import { UpdateDomainContactPrivacyCommand, } from "./commands/UpdateDomainContactPrivacyCommand";
import { UpdateDomainNameserversCommand, } from "./commands/UpdateDomainNameserversCommand";
import { UpdateTagsForDomainCommand, } from "./commands/UpdateTagsForDomainCommand";
import { ViewBillingCommand } from "./commands/ViewBillingCommand";
/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
var Route53Domains = /** @class */ (function (_super) {
    __extends(Route53Domains, _super);
    function Route53Domains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route53Domains.prototype.acceptDomainTransferFromAnotherAwsAccount = function (args, optionsOrCb, cb) {
        var command = new AcceptDomainTransferFromAnotherAwsAccountCommand(args);
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
    Route53Domains.prototype.cancelDomainTransferToAnotherAwsAccount = function (args, optionsOrCb, cb) {
        var command = new CancelDomainTransferToAnotherAwsAccountCommand(args);
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
    Route53Domains.prototype.checkDomainAvailability = function (args, optionsOrCb, cb) {
        var command = new CheckDomainAvailabilityCommand(args);
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
    Route53Domains.prototype.checkDomainTransferability = function (args, optionsOrCb, cb) {
        var command = new CheckDomainTransferabilityCommand(args);
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
    Route53Domains.prototype.deleteTagsForDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteTagsForDomainCommand(args);
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
    Route53Domains.prototype.disableDomainAutoRenew = function (args, optionsOrCb, cb) {
        var command = new DisableDomainAutoRenewCommand(args);
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
    Route53Domains.prototype.disableDomainTransferLock = function (args, optionsOrCb, cb) {
        var command = new DisableDomainTransferLockCommand(args);
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
    Route53Domains.prototype.enableDomainAutoRenew = function (args, optionsOrCb, cb) {
        var command = new EnableDomainAutoRenewCommand(args);
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
    Route53Domains.prototype.enableDomainTransferLock = function (args, optionsOrCb, cb) {
        var command = new EnableDomainTransferLockCommand(args);
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
    Route53Domains.prototype.getContactReachabilityStatus = function (args, optionsOrCb, cb) {
        var command = new GetContactReachabilityStatusCommand(args);
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
    Route53Domains.prototype.getDomainDetail = function (args, optionsOrCb, cb) {
        var command = new GetDomainDetailCommand(args);
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
    Route53Domains.prototype.getDomainSuggestions = function (args, optionsOrCb, cb) {
        var command = new GetDomainSuggestionsCommand(args);
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
    Route53Domains.prototype.getOperationDetail = function (args, optionsOrCb, cb) {
        var command = new GetOperationDetailCommand(args);
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
    Route53Domains.prototype.listDomains = function (args, optionsOrCb, cb) {
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
    Route53Domains.prototype.listOperations = function (args, optionsOrCb, cb) {
        var command = new ListOperationsCommand(args);
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
    Route53Domains.prototype.listTagsForDomain = function (args, optionsOrCb, cb) {
        var command = new ListTagsForDomainCommand(args);
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
    Route53Domains.prototype.registerDomain = function (args, optionsOrCb, cb) {
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
    Route53Domains.prototype.rejectDomainTransferFromAnotherAwsAccount = function (args, optionsOrCb, cb) {
        var command = new RejectDomainTransferFromAnotherAwsAccountCommand(args);
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
    Route53Domains.prototype.renewDomain = function (args, optionsOrCb, cb) {
        var command = new RenewDomainCommand(args);
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
    Route53Domains.prototype.resendContactReachabilityEmail = function (args, optionsOrCb, cb) {
        var command = new ResendContactReachabilityEmailCommand(args);
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
    Route53Domains.prototype.retrieveDomainAuthCode = function (args, optionsOrCb, cb) {
        var command = new RetrieveDomainAuthCodeCommand(args);
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
    Route53Domains.prototype.transferDomain = function (args, optionsOrCb, cb) {
        var command = new TransferDomainCommand(args);
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
    Route53Domains.prototype.transferDomainToAnotherAwsAccount = function (args, optionsOrCb, cb) {
        var command = new TransferDomainToAnotherAwsAccountCommand(args);
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
    Route53Domains.prototype.updateDomainContact = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainContactCommand(args);
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
    Route53Domains.prototype.updateDomainContactPrivacy = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainContactPrivacyCommand(args);
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
    Route53Domains.prototype.updateDomainNameservers = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainNameserversCommand(args);
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
    Route53Domains.prototype.updateTagsForDomain = function (args, optionsOrCb, cb) {
        var command = new UpdateTagsForDomainCommand(args);
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
    Route53Domains.prototype.viewBilling = function (args, optionsOrCb, cb) {
        var command = new ViewBillingCommand(args);
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
    return Route53Domains;
}(Route53DomainsClient));
export { Route53Domains };
//# sourceMappingURL=Route53Domains.js.map