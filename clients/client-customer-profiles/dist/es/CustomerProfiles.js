import { __extends } from "tslib";
import { CustomerProfilesClient } from "./CustomerProfilesClient";
import { AddProfileKeyCommand, } from "./commands/AddProfileKeyCommand";
import { CreateDomainCommand, } from "./commands/CreateDomainCommand";
import { CreateProfileCommand, } from "./commands/CreateProfileCommand";
import { DeleteDomainCommand, } from "./commands/DeleteDomainCommand";
import { DeleteIntegrationCommand, } from "./commands/DeleteIntegrationCommand";
import { DeleteProfileCommand, } from "./commands/DeleteProfileCommand";
import { DeleteProfileKeyCommand, } from "./commands/DeleteProfileKeyCommand";
import { DeleteProfileObjectCommand, } from "./commands/DeleteProfileObjectCommand";
import { DeleteProfileObjectTypeCommand, } from "./commands/DeleteProfileObjectTypeCommand";
import { GetDomainCommand } from "./commands/GetDomainCommand";
import { GetIntegrationCommand, } from "./commands/GetIntegrationCommand";
import { GetMatchesCommand } from "./commands/GetMatchesCommand";
import { GetProfileObjectTypeCommand, } from "./commands/GetProfileObjectTypeCommand";
import { GetProfileObjectTypeTemplateCommand, } from "./commands/GetProfileObjectTypeTemplateCommand";
import { ListAccountIntegrationsCommand, } from "./commands/ListAccountIntegrationsCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListIntegrationsCommand, } from "./commands/ListIntegrationsCommand";
import { ListProfileObjectTypeTemplatesCommand, } from "./commands/ListProfileObjectTypeTemplatesCommand";
import { ListProfileObjectTypesCommand, } from "./commands/ListProfileObjectTypesCommand";
import { ListProfileObjectsCommand, } from "./commands/ListProfileObjectsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { MergeProfilesCommand, } from "./commands/MergeProfilesCommand";
import { PutIntegrationCommand, } from "./commands/PutIntegrationCommand";
import { PutProfileObjectCommand, } from "./commands/PutProfileObjectCommand";
import { PutProfileObjectTypeCommand, } from "./commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommand, } from "./commands/SearchProfilesCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDomainCommand, } from "./commands/UpdateDomainCommand";
import { UpdateProfileCommand, } from "./commands/UpdateProfileCommand";
/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <p>Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information
 *          about the Amazon Connect Customer Profiles API, including supported operations, data types,
 *          parameters, and schemas.</p>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has
 *          pre-built connectors powered by AppFlow that make it easy to combine customer information
 *          from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your
 *          enterprise resource planning (ERP), with contact history from your Amazon Connect contact
 *          center.</p>
 *          <p>If you're new to Amazon Connect , you might find it helpful to also review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html">Amazon Connect Administrator Guide</a>.</p>
 */
var CustomerProfiles = /** @class */ (function (_super) {
    __extends(CustomerProfiles, _super);
    function CustomerProfiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerProfiles.prototype.addProfileKey = function (args, optionsOrCb, cb) {
        var command = new AddProfileKeyCommand(args);
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
    CustomerProfiles.prototype.createDomain = function (args, optionsOrCb, cb) {
        var command = new CreateDomainCommand(args);
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
    CustomerProfiles.prototype.createProfile = function (args, optionsOrCb, cb) {
        var command = new CreateProfileCommand(args);
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
    CustomerProfiles.prototype.deleteDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteDomainCommand(args);
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
    CustomerProfiles.prototype.deleteIntegration = function (args, optionsOrCb, cb) {
        var command = new DeleteIntegrationCommand(args);
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
    CustomerProfiles.prototype.deleteProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteProfileCommand(args);
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
    CustomerProfiles.prototype.deleteProfileKey = function (args, optionsOrCb, cb) {
        var command = new DeleteProfileKeyCommand(args);
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
    CustomerProfiles.prototype.deleteProfileObject = function (args, optionsOrCb, cb) {
        var command = new DeleteProfileObjectCommand(args);
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
    CustomerProfiles.prototype.deleteProfileObjectType = function (args, optionsOrCb, cb) {
        var command = new DeleteProfileObjectTypeCommand(args);
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
    CustomerProfiles.prototype.getDomain = function (args, optionsOrCb, cb) {
        var command = new GetDomainCommand(args);
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
    CustomerProfiles.prototype.getIntegration = function (args, optionsOrCb, cb) {
        var command = new GetIntegrationCommand(args);
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
    CustomerProfiles.prototype.getMatches = function (args, optionsOrCb, cb) {
        var command = new GetMatchesCommand(args);
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
    CustomerProfiles.prototype.getProfileObjectType = function (args, optionsOrCb, cb) {
        var command = new GetProfileObjectTypeCommand(args);
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
    CustomerProfiles.prototype.getProfileObjectTypeTemplate = function (args, optionsOrCb, cb) {
        var command = new GetProfileObjectTypeTemplateCommand(args);
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
    CustomerProfiles.prototype.listAccountIntegrations = function (args, optionsOrCb, cb) {
        var command = new ListAccountIntegrationsCommand(args);
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
    CustomerProfiles.prototype.listDomains = function (args, optionsOrCb, cb) {
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
    CustomerProfiles.prototype.listIntegrations = function (args, optionsOrCb, cb) {
        var command = new ListIntegrationsCommand(args);
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
    CustomerProfiles.prototype.listProfileObjects = function (args, optionsOrCb, cb) {
        var command = new ListProfileObjectsCommand(args);
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
    CustomerProfiles.prototype.listProfileObjectTypes = function (args, optionsOrCb, cb) {
        var command = new ListProfileObjectTypesCommand(args);
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
    CustomerProfiles.prototype.listProfileObjectTypeTemplates = function (args, optionsOrCb, cb) {
        var command = new ListProfileObjectTypeTemplatesCommand(args);
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
    CustomerProfiles.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    CustomerProfiles.prototype.mergeProfiles = function (args, optionsOrCb, cb) {
        var command = new MergeProfilesCommand(args);
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
    CustomerProfiles.prototype.putIntegration = function (args, optionsOrCb, cb) {
        var command = new PutIntegrationCommand(args);
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
    CustomerProfiles.prototype.putProfileObject = function (args, optionsOrCb, cb) {
        var command = new PutProfileObjectCommand(args);
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
    CustomerProfiles.prototype.putProfileObjectType = function (args, optionsOrCb, cb) {
        var command = new PutProfileObjectTypeCommand(args);
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
    CustomerProfiles.prototype.searchProfiles = function (args, optionsOrCb, cb) {
        var command = new SearchProfilesCommand(args);
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
    CustomerProfiles.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    CustomerProfiles.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    CustomerProfiles.prototype.updateDomain = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainCommand(args);
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
    CustomerProfiles.prototype.updateProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateProfileCommand(args);
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
    return CustomerProfiles;
}(CustomerProfilesClient));
export { CustomerProfiles };
//# sourceMappingURL=CustomerProfiles.js.map