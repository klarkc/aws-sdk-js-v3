"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkLink = void 0;
const WorkLinkClient_1 = require("./WorkLinkClient");
const AssociateDomainCommand_1 = require("./commands/AssociateDomainCommand");
const AssociateWebsiteAuthorizationProviderCommand_1 = require("./commands/AssociateWebsiteAuthorizationProviderCommand");
const AssociateWebsiteCertificateAuthorityCommand_1 = require("./commands/AssociateWebsiteCertificateAuthorityCommand");
const CreateFleetCommand_1 = require("./commands/CreateFleetCommand");
const DeleteFleetCommand_1 = require("./commands/DeleteFleetCommand");
const DescribeAuditStreamConfigurationCommand_1 = require("./commands/DescribeAuditStreamConfigurationCommand");
const DescribeCompanyNetworkConfigurationCommand_1 = require("./commands/DescribeCompanyNetworkConfigurationCommand");
const DescribeDeviceCommand_1 = require("./commands/DescribeDeviceCommand");
const DescribeDevicePolicyConfigurationCommand_1 = require("./commands/DescribeDevicePolicyConfigurationCommand");
const DescribeDomainCommand_1 = require("./commands/DescribeDomainCommand");
const DescribeFleetMetadataCommand_1 = require("./commands/DescribeFleetMetadataCommand");
const DescribeIdentityProviderConfigurationCommand_1 = require("./commands/DescribeIdentityProviderConfigurationCommand");
const DescribeWebsiteCertificateAuthorityCommand_1 = require("./commands/DescribeWebsiteCertificateAuthorityCommand");
const DisassociateDomainCommand_1 = require("./commands/DisassociateDomainCommand");
const DisassociateWebsiteAuthorizationProviderCommand_1 = require("./commands/DisassociateWebsiteAuthorizationProviderCommand");
const DisassociateWebsiteCertificateAuthorityCommand_1 = require("./commands/DisassociateWebsiteCertificateAuthorityCommand");
const ListDevicesCommand_1 = require("./commands/ListDevicesCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListFleetsCommand_1 = require("./commands/ListFleetsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWebsiteAuthorizationProvidersCommand_1 = require("./commands/ListWebsiteAuthorizationProvidersCommand");
const ListWebsiteCertificateAuthoritiesCommand_1 = require("./commands/ListWebsiteCertificateAuthoritiesCommand");
const RestoreDomainAccessCommand_1 = require("./commands/RestoreDomainAccessCommand");
const RevokeDomainAccessCommand_1 = require("./commands/RevokeDomainAccessCommand");
const SignOutUserCommand_1 = require("./commands/SignOutUserCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAuditStreamConfigurationCommand_1 = require("./commands/UpdateAuditStreamConfigurationCommand");
const UpdateCompanyNetworkConfigurationCommand_1 = require("./commands/UpdateCompanyNetworkConfigurationCommand");
const UpdateDevicePolicyConfigurationCommand_1 = require("./commands/UpdateDevicePolicyConfigurationCommand");
const UpdateDomainMetadataCommand_1 = require("./commands/UpdateDomainMetadataCommand");
const UpdateFleetMetadataCommand_1 = require("./commands/UpdateFleetMetadataCommand");
const UpdateIdentityProviderConfigurationCommand_1 = require("./commands/UpdateIdentityProviderConfigurationCommand");
/**
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS and Android phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
class WorkLink extends WorkLinkClient_1.WorkLinkClient {
    associateDomain(args, optionsOrCb, cb) {
        const command = new AssociateDomainCommand_1.AssociateDomainCommand(args);
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
    associateWebsiteAuthorizationProvider(args, optionsOrCb, cb) {
        const command = new AssociateWebsiteAuthorizationProviderCommand_1.AssociateWebsiteAuthorizationProviderCommand(args);
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
    associateWebsiteCertificateAuthority(args, optionsOrCb, cb) {
        const command = new AssociateWebsiteCertificateAuthorityCommand_1.AssociateWebsiteCertificateAuthorityCommand(args);
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
    createFleet(args, optionsOrCb, cb) {
        const command = new CreateFleetCommand_1.CreateFleetCommand(args);
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
    deleteFleet(args, optionsOrCb, cb) {
        const command = new DeleteFleetCommand_1.DeleteFleetCommand(args);
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
    describeAuditStreamConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeAuditStreamConfigurationCommand_1.DescribeAuditStreamConfigurationCommand(args);
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
    describeCompanyNetworkConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeCompanyNetworkConfigurationCommand_1.DescribeCompanyNetworkConfigurationCommand(args);
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
    describeDevice(args, optionsOrCb, cb) {
        const command = new DescribeDeviceCommand_1.DescribeDeviceCommand(args);
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
    describeDevicePolicyConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeDevicePolicyConfigurationCommand_1.DescribeDevicePolicyConfigurationCommand(args);
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
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
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
    describeFleetMetadata(args, optionsOrCb, cb) {
        const command = new DescribeFleetMetadataCommand_1.DescribeFleetMetadataCommand(args);
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
    describeIdentityProviderConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeIdentityProviderConfigurationCommand_1.DescribeIdentityProviderConfigurationCommand(args);
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
    describeWebsiteCertificateAuthority(args, optionsOrCb, cb) {
        const command = new DescribeWebsiteCertificateAuthorityCommand_1.DescribeWebsiteCertificateAuthorityCommand(args);
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
    disassociateDomain(args, optionsOrCb, cb) {
        const command = new DisassociateDomainCommand_1.DisassociateDomainCommand(args);
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
    disassociateWebsiteAuthorizationProvider(args, optionsOrCb, cb) {
        const command = new DisassociateWebsiteAuthorizationProviderCommand_1.DisassociateWebsiteAuthorizationProviderCommand(args);
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
    disassociateWebsiteCertificateAuthority(args, optionsOrCb, cb) {
        const command = new DisassociateWebsiteCertificateAuthorityCommand_1.DisassociateWebsiteCertificateAuthorityCommand(args);
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
    listDevices(args, optionsOrCb, cb) {
        const command = new ListDevicesCommand_1.ListDevicesCommand(args);
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
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
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
    listFleets(args, optionsOrCb, cb) {
        const command = new ListFleetsCommand_1.ListFleetsCommand(args);
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
    listWebsiteAuthorizationProviders(args, optionsOrCb, cb) {
        const command = new ListWebsiteAuthorizationProvidersCommand_1.ListWebsiteAuthorizationProvidersCommand(args);
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
    listWebsiteCertificateAuthorities(args, optionsOrCb, cb) {
        const command = new ListWebsiteCertificateAuthoritiesCommand_1.ListWebsiteCertificateAuthoritiesCommand(args);
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
    restoreDomainAccess(args, optionsOrCb, cb) {
        const command = new RestoreDomainAccessCommand_1.RestoreDomainAccessCommand(args);
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
    revokeDomainAccess(args, optionsOrCb, cb) {
        const command = new RevokeDomainAccessCommand_1.RevokeDomainAccessCommand(args);
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
    signOutUser(args, optionsOrCb, cb) {
        const command = new SignOutUserCommand_1.SignOutUserCommand(args);
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
    updateAuditStreamConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateAuditStreamConfigurationCommand_1.UpdateAuditStreamConfigurationCommand(args);
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
    updateCompanyNetworkConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateCompanyNetworkConfigurationCommand_1.UpdateCompanyNetworkConfigurationCommand(args);
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
    updateDevicePolicyConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateDevicePolicyConfigurationCommand_1.UpdateDevicePolicyConfigurationCommand(args);
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
    updateDomainMetadata(args, optionsOrCb, cb) {
        const command = new UpdateDomainMetadataCommand_1.UpdateDomainMetadataCommand(args);
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
    updateFleetMetadata(args, optionsOrCb, cb) {
        const command = new UpdateFleetMetadataCommand_1.UpdateFleetMetadataCommand(args);
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
    updateIdentityProviderConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateIdentityProviderConfigurationCommand_1.UpdateIdentityProviderConfigurationCommand(args);
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
exports.WorkLink = WorkLink;
//# sourceMappingURL=WorkLink.js.map