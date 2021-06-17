import { __extends } from "tslib";
import { WorkLinkClient } from "./WorkLinkClient";
import { AssociateDomainCommand, } from "./commands/AssociateDomainCommand";
import { AssociateWebsiteAuthorizationProviderCommand, } from "./commands/AssociateWebsiteAuthorizationProviderCommand";
import { AssociateWebsiteCertificateAuthorityCommand, } from "./commands/AssociateWebsiteCertificateAuthorityCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DescribeAuditStreamConfigurationCommand, } from "./commands/DescribeAuditStreamConfigurationCommand";
import { DescribeCompanyNetworkConfigurationCommand, } from "./commands/DescribeCompanyNetworkConfigurationCommand";
import { DescribeDeviceCommand, } from "./commands/DescribeDeviceCommand";
import { DescribeDevicePolicyConfigurationCommand, } from "./commands/DescribeDevicePolicyConfigurationCommand";
import { DescribeDomainCommand, } from "./commands/DescribeDomainCommand";
import { DescribeFleetMetadataCommand, } from "./commands/DescribeFleetMetadataCommand";
import { DescribeIdentityProviderConfigurationCommand, } from "./commands/DescribeIdentityProviderConfigurationCommand";
import { DescribeWebsiteCertificateAuthorityCommand, } from "./commands/DescribeWebsiteCertificateAuthorityCommand";
import { DisassociateDomainCommand, } from "./commands/DisassociateDomainCommand";
import { DisassociateWebsiteAuthorizationProviderCommand, } from "./commands/DisassociateWebsiteAuthorizationProviderCommand";
import { DisassociateWebsiteCertificateAuthorityCommand, } from "./commands/DisassociateWebsiteCertificateAuthorityCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListFleetsCommand } from "./commands/ListFleetsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListWebsiteAuthorizationProvidersCommand, } from "./commands/ListWebsiteAuthorizationProvidersCommand";
import { ListWebsiteCertificateAuthoritiesCommand, } from "./commands/ListWebsiteCertificateAuthoritiesCommand";
import { RestoreDomainAccessCommand, } from "./commands/RestoreDomainAccessCommand";
import { RevokeDomainAccessCommand, } from "./commands/RevokeDomainAccessCommand";
import { SignOutUserCommand } from "./commands/SignOutUserCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAuditStreamConfigurationCommand, } from "./commands/UpdateAuditStreamConfigurationCommand";
import { UpdateCompanyNetworkConfigurationCommand, } from "./commands/UpdateCompanyNetworkConfigurationCommand";
import { UpdateDevicePolicyConfigurationCommand, } from "./commands/UpdateDevicePolicyConfigurationCommand";
import { UpdateDomainMetadataCommand, } from "./commands/UpdateDomainMetadataCommand";
import { UpdateFleetMetadataCommand, } from "./commands/UpdateFleetMetadataCommand";
import { UpdateIdentityProviderConfigurationCommand, } from "./commands/UpdateIdentityProviderConfigurationCommand";
/**
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS and Android phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
var WorkLink = /** @class */ (function (_super) {
    __extends(WorkLink, _super);
    function WorkLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkLink.prototype.associateDomain = function (args, optionsOrCb, cb) {
        var command = new AssociateDomainCommand(args);
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
    WorkLink.prototype.associateWebsiteAuthorizationProvider = function (args, optionsOrCb, cb) {
        var command = new AssociateWebsiteAuthorizationProviderCommand(args);
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
    WorkLink.prototype.associateWebsiteCertificateAuthority = function (args, optionsOrCb, cb) {
        var command = new AssociateWebsiteCertificateAuthorityCommand(args);
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
    WorkLink.prototype.createFleet = function (args, optionsOrCb, cb) {
        var command = new CreateFleetCommand(args);
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
    WorkLink.prototype.deleteFleet = function (args, optionsOrCb, cb) {
        var command = new DeleteFleetCommand(args);
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
    WorkLink.prototype.describeAuditStreamConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeAuditStreamConfigurationCommand(args);
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
    WorkLink.prototype.describeCompanyNetworkConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeCompanyNetworkConfigurationCommand(args);
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
    WorkLink.prototype.describeDevice = function (args, optionsOrCb, cb) {
        var command = new DescribeDeviceCommand(args);
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
    WorkLink.prototype.describeDevicePolicyConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeDevicePolicyConfigurationCommand(args);
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
    WorkLink.prototype.describeDomain = function (args, optionsOrCb, cb) {
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
    WorkLink.prototype.describeFleetMetadata = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetMetadataCommand(args);
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
    WorkLink.prototype.describeIdentityProviderConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityProviderConfigurationCommand(args);
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
    WorkLink.prototype.describeWebsiteCertificateAuthority = function (args, optionsOrCb, cb) {
        var command = new DescribeWebsiteCertificateAuthorityCommand(args);
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
    WorkLink.prototype.disassociateDomain = function (args, optionsOrCb, cb) {
        var command = new DisassociateDomainCommand(args);
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
    WorkLink.prototype.disassociateWebsiteAuthorizationProvider = function (args, optionsOrCb, cb) {
        var command = new DisassociateWebsiteAuthorizationProviderCommand(args);
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
    WorkLink.prototype.disassociateWebsiteCertificateAuthority = function (args, optionsOrCb, cb) {
        var command = new DisassociateWebsiteCertificateAuthorityCommand(args);
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
    WorkLink.prototype.listDevices = function (args, optionsOrCb, cb) {
        var command = new ListDevicesCommand(args);
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
    WorkLink.prototype.listDomains = function (args, optionsOrCb, cb) {
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
    WorkLink.prototype.listFleets = function (args, optionsOrCb, cb) {
        var command = new ListFleetsCommand(args);
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
    WorkLink.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    WorkLink.prototype.listWebsiteAuthorizationProviders = function (args, optionsOrCb, cb) {
        var command = new ListWebsiteAuthorizationProvidersCommand(args);
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
    WorkLink.prototype.listWebsiteCertificateAuthorities = function (args, optionsOrCb, cb) {
        var command = new ListWebsiteCertificateAuthoritiesCommand(args);
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
    WorkLink.prototype.restoreDomainAccess = function (args, optionsOrCb, cb) {
        var command = new RestoreDomainAccessCommand(args);
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
    WorkLink.prototype.revokeDomainAccess = function (args, optionsOrCb, cb) {
        var command = new RevokeDomainAccessCommand(args);
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
    WorkLink.prototype.signOutUser = function (args, optionsOrCb, cb) {
        var command = new SignOutUserCommand(args);
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
    WorkLink.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    WorkLink.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    WorkLink.prototype.updateAuditStreamConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateAuditStreamConfigurationCommand(args);
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
    WorkLink.prototype.updateCompanyNetworkConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateCompanyNetworkConfigurationCommand(args);
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
    WorkLink.prototype.updateDevicePolicyConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateDevicePolicyConfigurationCommand(args);
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
    WorkLink.prototype.updateDomainMetadata = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainMetadataCommand(args);
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
    WorkLink.prototype.updateFleetMetadata = function (args, optionsOrCb, cb) {
        var command = new UpdateFleetMetadataCommand(args);
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
    WorkLink.prototype.updateIdentityProviderConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateIdentityProviderConfigurationCommand(args);
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
    return WorkLink;
}(WorkLinkClient));
export { WorkLink };
//# sourceMappingURL=WorkLink.js.map