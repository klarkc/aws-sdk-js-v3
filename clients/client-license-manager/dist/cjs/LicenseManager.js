"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseManager = void 0;
const LicenseManagerClient_1 = require("./LicenseManagerClient");
const AcceptGrantCommand_1 = require("./commands/AcceptGrantCommand");
const CheckInLicenseCommand_1 = require("./commands/CheckInLicenseCommand");
const CheckoutBorrowLicenseCommand_1 = require("./commands/CheckoutBorrowLicenseCommand");
const CheckoutLicenseCommand_1 = require("./commands/CheckoutLicenseCommand");
const CreateGrantCommand_1 = require("./commands/CreateGrantCommand");
const CreateGrantVersionCommand_1 = require("./commands/CreateGrantVersionCommand");
const CreateLicenseCommand_1 = require("./commands/CreateLicenseCommand");
const CreateLicenseConfigurationCommand_1 = require("./commands/CreateLicenseConfigurationCommand");
const CreateLicenseManagerReportGeneratorCommand_1 = require("./commands/CreateLicenseManagerReportGeneratorCommand");
const CreateLicenseVersionCommand_1 = require("./commands/CreateLicenseVersionCommand");
const CreateTokenCommand_1 = require("./commands/CreateTokenCommand");
const DeleteGrantCommand_1 = require("./commands/DeleteGrantCommand");
const DeleteLicenseCommand_1 = require("./commands/DeleteLicenseCommand");
const DeleteLicenseConfigurationCommand_1 = require("./commands/DeleteLicenseConfigurationCommand");
const DeleteLicenseManagerReportGeneratorCommand_1 = require("./commands/DeleteLicenseManagerReportGeneratorCommand");
const DeleteTokenCommand_1 = require("./commands/DeleteTokenCommand");
const ExtendLicenseConsumptionCommand_1 = require("./commands/ExtendLicenseConsumptionCommand");
const GetAccessTokenCommand_1 = require("./commands/GetAccessTokenCommand");
const GetGrantCommand_1 = require("./commands/GetGrantCommand");
const GetLicenseCommand_1 = require("./commands/GetLicenseCommand");
const GetLicenseConfigurationCommand_1 = require("./commands/GetLicenseConfigurationCommand");
const GetLicenseManagerReportGeneratorCommand_1 = require("./commands/GetLicenseManagerReportGeneratorCommand");
const GetLicenseUsageCommand_1 = require("./commands/GetLicenseUsageCommand");
const GetServiceSettingsCommand_1 = require("./commands/GetServiceSettingsCommand");
const ListAssociationsForLicenseConfigurationCommand_1 = require("./commands/ListAssociationsForLicenseConfigurationCommand");
const ListDistributedGrantsCommand_1 = require("./commands/ListDistributedGrantsCommand");
const ListFailuresForLicenseConfigurationOperationsCommand_1 = require("./commands/ListFailuresForLicenseConfigurationOperationsCommand");
const ListLicenseConfigurationsCommand_1 = require("./commands/ListLicenseConfigurationsCommand");
const ListLicenseManagerReportGeneratorsCommand_1 = require("./commands/ListLicenseManagerReportGeneratorsCommand");
const ListLicenseSpecificationsForResourceCommand_1 = require("./commands/ListLicenseSpecificationsForResourceCommand");
const ListLicenseVersionsCommand_1 = require("./commands/ListLicenseVersionsCommand");
const ListLicensesCommand_1 = require("./commands/ListLicensesCommand");
const ListReceivedGrantsCommand_1 = require("./commands/ListReceivedGrantsCommand");
const ListReceivedLicensesCommand_1 = require("./commands/ListReceivedLicensesCommand");
const ListResourceInventoryCommand_1 = require("./commands/ListResourceInventoryCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTokensCommand_1 = require("./commands/ListTokensCommand");
const ListUsageForLicenseConfigurationCommand_1 = require("./commands/ListUsageForLicenseConfigurationCommand");
const RejectGrantCommand_1 = require("./commands/RejectGrantCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLicenseConfigurationCommand_1 = require("./commands/UpdateLicenseConfigurationCommand");
const UpdateLicenseManagerReportGeneratorCommand_1 = require("./commands/UpdateLicenseManagerReportGeneratorCommand");
const UpdateLicenseSpecificationsForResourceCommand_1 = require("./commands/UpdateLicenseSpecificationsForResourceCommand");
const UpdateServiceSettingsCommand_1 = require("./commands/UpdateServiceSettingsCommand");
/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
class LicenseManager extends LicenseManagerClient_1.LicenseManagerClient {
    acceptGrant(args, optionsOrCb, cb) {
        const command = new AcceptGrantCommand_1.AcceptGrantCommand(args);
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
    checkInLicense(args, optionsOrCb, cb) {
        const command = new CheckInLicenseCommand_1.CheckInLicenseCommand(args);
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
    checkoutBorrowLicense(args, optionsOrCb, cb) {
        const command = new CheckoutBorrowLicenseCommand_1.CheckoutBorrowLicenseCommand(args);
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
    checkoutLicense(args, optionsOrCb, cb) {
        const command = new CheckoutLicenseCommand_1.CheckoutLicenseCommand(args);
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
    createGrant(args, optionsOrCb, cb) {
        const command = new CreateGrantCommand_1.CreateGrantCommand(args);
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
    createGrantVersion(args, optionsOrCb, cb) {
        const command = new CreateGrantVersionCommand_1.CreateGrantVersionCommand(args);
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
    createLicense(args, optionsOrCb, cb) {
        const command = new CreateLicenseCommand_1.CreateLicenseCommand(args);
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
    createLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new CreateLicenseConfigurationCommand_1.CreateLicenseConfigurationCommand(args);
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
    createLicenseManagerReportGenerator(args, optionsOrCb, cb) {
        const command = new CreateLicenseManagerReportGeneratorCommand_1.CreateLicenseManagerReportGeneratorCommand(args);
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
    createLicenseVersion(args, optionsOrCb, cb) {
        const command = new CreateLicenseVersionCommand_1.CreateLicenseVersionCommand(args);
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
    createToken(args, optionsOrCb, cb) {
        const command = new CreateTokenCommand_1.CreateTokenCommand(args);
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
    deleteGrant(args, optionsOrCb, cb) {
        const command = new DeleteGrantCommand_1.DeleteGrantCommand(args);
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
    deleteLicense(args, optionsOrCb, cb) {
        const command = new DeleteLicenseCommand_1.DeleteLicenseCommand(args);
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
    deleteLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteLicenseConfigurationCommand_1.DeleteLicenseConfigurationCommand(args);
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
    deleteLicenseManagerReportGenerator(args, optionsOrCb, cb) {
        const command = new DeleteLicenseManagerReportGeneratorCommand_1.DeleteLicenseManagerReportGeneratorCommand(args);
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
    deleteToken(args, optionsOrCb, cb) {
        const command = new DeleteTokenCommand_1.DeleteTokenCommand(args);
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
    extendLicenseConsumption(args, optionsOrCb, cb) {
        const command = new ExtendLicenseConsumptionCommand_1.ExtendLicenseConsumptionCommand(args);
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
    getAccessToken(args, optionsOrCb, cb) {
        const command = new GetAccessTokenCommand_1.GetAccessTokenCommand(args);
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
    getGrant(args, optionsOrCb, cb) {
        const command = new GetGrantCommand_1.GetGrantCommand(args);
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
    getLicense(args, optionsOrCb, cb) {
        const command = new GetLicenseCommand_1.GetLicenseCommand(args);
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
    getLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new GetLicenseConfigurationCommand_1.GetLicenseConfigurationCommand(args);
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
    getLicenseManagerReportGenerator(args, optionsOrCb, cb) {
        const command = new GetLicenseManagerReportGeneratorCommand_1.GetLicenseManagerReportGeneratorCommand(args);
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
    getLicenseUsage(args, optionsOrCb, cb) {
        const command = new GetLicenseUsageCommand_1.GetLicenseUsageCommand(args);
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
    getServiceSettings(args, optionsOrCb, cb) {
        const command = new GetServiceSettingsCommand_1.GetServiceSettingsCommand(args);
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
    listAssociationsForLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new ListAssociationsForLicenseConfigurationCommand_1.ListAssociationsForLicenseConfigurationCommand(args);
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
    listDistributedGrants(args, optionsOrCb, cb) {
        const command = new ListDistributedGrantsCommand_1.ListDistributedGrantsCommand(args);
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
    listFailuresForLicenseConfigurationOperations(args, optionsOrCb, cb) {
        const command = new ListFailuresForLicenseConfigurationOperationsCommand_1.ListFailuresForLicenseConfigurationOperationsCommand(args);
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
    listLicenseConfigurations(args, optionsOrCb, cb) {
        const command = new ListLicenseConfigurationsCommand_1.ListLicenseConfigurationsCommand(args);
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
    listLicenseManagerReportGenerators(args, optionsOrCb, cb) {
        const command = new ListLicenseManagerReportGeneratorsCommand_1.ListLicenseManagerReportGeneratorsCommand(args);
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
    listLicenses(args, optionsOrCb, cb) {
        const command = new ListLicensesCommand_1.ListLicensesCommand(args);
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
    listLicenseSpecificationsForResource(args, optionsOrCb, cb) {
        const command = new ListLicenseSpecificationsForResourceCommand_1.ListLicenseSpecificationsForResourceCommand(args);
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
    listLicenseVersions(args, optionsOrCb, cb) {
        const command = new ListLicenseVersionsCommand_1.ListLicenseVersionsCommand(args);
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
    listReceivedGrants(args, optionsOrCb, cb) {
        const command = new ListReceivedGrantsCommand_1.ListReceivedGrantsCommand(args);
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
    listReceivedLicenses(args, optionsOrCb, cb) {
        const command = new ListReceivedLicensesCommand_1.ListReceivedLicensesCommand(args);
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
    listResourceInventory(args, optionsOrCb, cb) {
        const command = new ListResourceInventoryCommand_1.ListResourceInventoryCommand(args);
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
    listTokens(args, optionsOrCb, cb) {
        const command = new ListTokensCommand_1.ListTokensCommand(args);
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
    listUsageForLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new ListUsageForLicenseConfigurationCommand_1.ListUsageForLicenseConfigurationCommand(args);
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
    rejectGrant(args, optionsOrCb, cb) {
        const command = new RejectGrantCommand_1.RejectGrantCommand(args);
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
    updateLicenseConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateLicenseConfigurationCommand_1.UpdateLicenseConfigurationCommand(args);
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
    updateLicenseManagerReportGenerator(args, optionsOrCb, cb) {
        const command = new UpdateLicenseManagerReportGeneratorCommand_1.UpdateLicenseManagerReportGeneratorCommand(args);
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
    updateLicenseSpecificationsForResource(args, optionsOrCb, cb) {
        const command = new UpdateLicenseSpecificationsForResourceCommand_1.UpdateLicenseSpecificationsForResourceCommand(args);
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
    updateServiceSettings(args, optionsOrCb, cb) {
        const command = new UpdateServiceSettingsCommand_1.UpdateServiceSettingsCommand(args);
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
exports.LicenseManager = LicenseManager;
//# sourceMappingURL=LicenseManager.js.map