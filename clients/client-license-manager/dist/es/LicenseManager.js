import { __extends } from "tslib";
import { LicenseManagerClient } from "./LicenseManagerClient";
import { AcceptGrantCommand } from "./commands/AcceptGrantCommand";
import { CheckInLicenseCommand, } from "./commands/CheckInLicenseCommand";
import { CheckoutBorrowLicenseCommand, } from "./commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommand, } from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommand } from "./commands/CreateGrantCommand";
import { CreateGrantVersionCommand, } from "./commands/CreateGrantVersionCommand";
import { CreateLicenseCommand, } from "./commands/CreateLicenseCommand";
import { CreateLicenseConfigurationCommand, } from "./commands/CreateLicenseConfigurationCommand";
import { CreateLicenseManagerReportGeneratorCommand, } from "./commands/CreateLicenseManagerReportGeneratorCommand";
import { CreateLicenseVersionCommand, } from "./commands/CreateLicenseVersionCommand";
import { CreateTokenCommand } from "./commands/CreateTokenCommand";
import { DeleteGrantCommand } from "./commands/DeleteGrantCommand";
import { DeleteLicenseCommand, } from "./commands/DeleteLicenseCommand";
import { DeleteLicenseConfigurationCommand, } from "./commands/DeleteLicenseConfigurationCommand";
import { DeleteLicenseManagerReportGeneratorCommand, } from "./commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommand } from "./commands/DeleteTokenCommand";
import { ExtendLicenseConsumptionCommand, } from "./commands/ExtendLicenseConsumptionCommand";
import { GetAccessTokenCommand, } from "./commands/GetAccessTokenCommand";
import { GetGrantCommand } from "./commands/GetGrantCommand";
import { GetLicenseCommand } from "./commands/GetLicenseCommand";
import { GetLicenseConfigurationCommand, } from "./commands/GetLicenseConfigurationCommand";
import { GetLicenseManagerReportGeneratorCommand, } from "./commands/GetLicenseManagerReportGeneratorCommand";
import { GetLicenseUsageCommand, } from "./commands/GetLicenseUsageCommand";
import { GetServiceSettingsCommand, } from "./commands/GetServiceSettingsCommand";
import { ListAssociationsForLicenseConfigurationCommand, } from "./commands/ListAssociationsForLicenseConfigurationCommand";
import { ListDistributedGrantsCommand, } from "./commands/ListDistributedGrantsCommand";
import { ListFailuresForLicenseConfigurationOperationsCommand, } from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import { ListLicenseConfigurationsCommand, } from "./commands/ListLicenseConfigurationsCommand";
import { ListLicenseManagerReportGeneratorsCommand, } from "./commands/ListLicenseManagerReportGeneratorsCommand";
import { ListLicenseSpecificationsForResourceCommand, } from "./commands/ListLicenseSpecificationsForResourceCommand";
import { ListLicenseVersionsCommand, } from "./commands/ListLicenseVersionsCommand";
import { ListLicensesCommand, } from "./commands/ListLicensesCommand";
import { ListReceivedGrantsCommand, } from "./commands/ListReceivedGrantsCommand";
import { ListReceivedLicensesCommand, } from "./commands/ListReceivedLicensesCommand";
import { ListResourceInventoryCommand, } from "./commands/ListResourceInventoryCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTokensCommand } from "./commands/ListTokensCommand";
import { ListUsageForLicenseConfigurationCommand, } from "./commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommand } from "./commands/RejectGrantCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateLicenseConfigurationCommand, } from "./commands/UpdateLicenseConfigurationCommand";
import { UpdateLicenseManagerReportGeneratorCommand, } from "./commands/UpdateLicenseManagerReportGeneratorCommand";
import { UpdateLicenseSpecificationsForResourceCommand, } from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import { UpdateServiceSettingsCommand, } from "./commands/UpdateServiceSettingsCommand";
/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
var LicenseManager = /** @class */ (function (_super) {
    __extends(LicenseManager, _super);
    function LicenseManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LicenseManager.prototype.acceptGrant = function (args, optionsOrCb, cb) {
        var command = new AcceptGrantCommand(args);
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
    LicenseManager.prototype.checkInLicense = function (args, optionsOrCb, cb) {
        var command = new CheckInLicenseCommand(args);
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
    LicenseManager.prototype.checkoutBorrowLicense = function (args, optionsOrCb, cb) {
        var command = new CheckoutBorrowLicenseCommand(args);
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
    LicenseManager.prototype.checkoutLicense = function (args, optionsOrCb, cb) {
        var command = new CheckoutLicenseCommand(args);
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
    LicenseManager.prototype.createGrant = function (args, optionsOrCb, cb) {
        var command = new CreateGrantCommand(args);
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
    LicenseManager.prototype.createGrantVersion = function (args, optionsOrCb, cb) {
        var command = new CreateGrantVersionCommand(args);
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
    LicenseManager.prototype.createLicense = function (args, optionsOrCb, cb) {
        var command = new CreateLicenseCommand(args);
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
    LicenseManager.prototype.createLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.createLicenseManagerReportGenerator = function (args, optionsOrCb, cb) {
        var command = new CreateLicenseManagerReportGeneratorCommand(args);
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
    LicenseManager.prototype.createLicenseVersion = function (args, optionsOrCb, cb) {
        var command = new CreateLicenseVersionCommand(args);
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
    LicenseManager.prototype.createToken = function (args, optionsOrCb, cb) {
        var command = new CreateTokenCommand(args);
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
    LicenseManager.prototype.deleteGrant = function (args, optionsOrCb, cb) {
        var command = new DeleteGrantCommand(args);
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
    LicenseManager.prototype.deleteLicense = function (args, optionsOrCb, cb) {
        var command = new DeleteLicenseCommand(args);
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
    LicenseManager.prototype.deleteLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.deleteLicenseManagerReportGenerator = function (args, optionsOrCb, cb) {
        var command = new DeleteLicenseManagerReportGeneratorCommand(args);
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
    LicenseManager.prototype.deleteToken = function (args, optionsOrCb, cb) {
        var command = new DeleteTokenCommand(args);
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
    LicenseManager.prototype.extendLicenseConsumption = function (args, optionsOrCb, cb) {
        var command = new ExtendLicenseConsumptionCommand(args);
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
    LicenseManager.prototype.getAccessToken = function (args, optionsOrCb, cb) {
        var command = new GetAccessTokenCommand(args);
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
    LicenseManager.prototype.getGrant = function (args, optionsOrCb, cb) {
        var command = new GetGrantCommand(args);
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
    LicenseManager.prototype.getLicense = function (args, optionsOrCb, cb) {
        var command = new GetLicenseCommand(args);
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
    LicenseManager.prototype.getLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.getLicenseManagerReportGenerator = function (args, optionsOrCb, cb) {
        var command = new GetLicenseManagerReportGeneratorCommand(args);
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
    LicenseManager.prototype.getLicenseUsage = function (args, optionsOrCb, cb) {
        var command = new GetLicenseUsageCommand(args);
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
    LicenseManager.prototype.getServiceSettings = function (args, optionsOrCb, cb) {
        var command = new GetServiceSettingsCommand(args);
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
    LicenseManager.prototype.listAssociationsForLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new ListAssociationsForLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.listDistributedGrants = function (args, optionsOrCb, cb) {
        var command = new ListDistributedGrantsCommand(args);
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
    LicenseManager.prototype.listFailuresForLicenseConfigurationOperations = function (args, optionsOrCb, cb) {
        var command = new ListFailuresForLicenseConfigurationOperationsCommand(args);
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
    LicenseManager.prototype.listLicenseConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListLicenseConfigurationsCommand(args);
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
    LicenseManager.prototype.listLicenseManagerReportGenerators = function (args, optionsOrCb, cb) {
        var command = new ListLicenseManagerReportGeneratorsCommand(args);
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
    LicenseManager.prototype.listLicenses = function (args, optionsOrCb, cb) {
        var command = new ListLicensesCommand(args);
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
    LicenseManager.prototype.listLicenseSpecificationsForResource = function (args, optionsOrCb, cb) {
        var command = new ListLicenseSpecificationsForResourceCommand(args);
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
    LicenseManager.prototype.listLicenseVersions = function (args, optionsOrCb, cb) {
        var command = new ListLicenseVersionsCommand(args);
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
    LicenseManager.prototype.listReceivedGrants = function (args, optionsOrCb, cb) {
        var command = new ListReceivedGrantsCommand(args);
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
    LicenseManager.prototype.listReceivedLicenses = function (args, optionsOrCb, cb) {
        var command = new ListReceivedLicensesCommand(args);
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
    LicenseManager.prototype.listResourceInventory = function (args, optionsOrCb, cb) {
        var command = new ListResourceInventoryCommand(args);
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
    LicenseManager.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    LicenseManager.prototype.listTokens = function (args, optionsOrCb, cb) {
        var command = new ListTokensCommand(args);
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
    LicenseManager.prototype.listUsageForLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new ListUsageForLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.rejectGrant = function (args, optionsOrCb, cb) {
        var command = new RejectGrantCommand(args);
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
    LicenseManager.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    LicenseManager.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    LicenseManager.prototype.updateLicenseConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateLicenseConfigurationCommand(args);
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
    LicenseManager.prototype.updateLicenseManagerReportGenerator = function (args, optionsOrCb, cb) {
        var command = new UpdateLicenseManagerReportGeneratorCommand(args);
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
    LicenseManager.prototype.updateLicenseSpecificationsForResource = function (args, optionsOrCb, cb) {
        var command = new UpdateLicenseSpecificationsForResourceCommand(args);
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
    LicenseManager.prototype.updateServiceSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceSettingsCommand(args);
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
    return LicenseManager;
}(LicenseManagerClient));
export { LicenseManager };
//# sourceMappingURL=LicenseManager.js.map