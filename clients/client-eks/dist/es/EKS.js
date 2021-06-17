import { __extends } from "tslib";
import { EKSClient } from "./EKSClient";
import { AssociateEncryptionConfigCommand, } from "./commands/AssociateEncryptionConfigCommand";
import { AssociateIdentityProviderConfigCommand, } from "./commands/AssociateIdentityProviderConfigCommand";
import { CreateAddonCommand } from "./commands/CreateAddonCommand";
import { CreateClusterCommand, } from "./commands/CreateClusterCommand";
import { CreateFargateProfileCommand, } from "./commands/CreateFargateProfileCommand";
import { CreateNodegroupCommand, } from "./commands/CreateNodegroupCommand";
import { DeleteAddonCommand } from "./commands/DeleteAddonCommand";
import { DeleteClusterCommand, } from "./commands/DeleteClusterCommand";
import { DeleteFargateProfileCommand, } from "./commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommand, } from "./commands/DeleteNodegroupCommand";
import { DescribeAddonCommand, } from "./commands/DescribeAddonCommand";
import { DescribeAddonVersionsCommand, } from "./commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommand, } from "./commands/DescribeClusterCommand";
import { DescribeFargateProfileCommand, } from "./commands/DescribeFargateProfileCommand";
import { DescribeIdentityProviderConfigCommand, } from "./commands/DescribeIdentityProviderConfigCommand";
import { DescribeNodegroupCommand, } from "./commands/DescribeNodegroupCommand";
import { DescribeUpdateCommand, } from "./commands/DescribeUpdateCommand";
import { DisassociateIdentityProviderConfigCommand, } from "./commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommand } from "./commands/ListAddonsCommand";
import { ListClustersCommand, } from "./commands/ListClustersCommand";
import { ListFargateProfilesCommand, } from "./commands/ListFargateProfilesCommand";
import { ListIdentityProviderConfigsCommand, } from "./commands/ListIdentityProviderConfigsCommand";
import { ListNodegroupsCommand, } from "./commands/ListNodegroupsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListUpdatesCommand } from "./commands/ListUpdatesCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAddonCommand } from "./commands/UpdateAddonCommand";
import { UpdateClusterConfigCommand, } from "./commands/UpdateClusterConfigCommand";
import { UpdateClusterVersionCommand, } from "./commands/UpdateClusterVersionCommand";
import { UpdateNodegroupConfigCommand, } from "./commands/UpdateNodegroupConfigCommand";
import { UpdateNodegroupVersionCommand, } from "./commands/UpdateNodegroupVersionCommand";
/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             AWS without needing to stand up or maintain your own Kubernetes control plane.
 *             Kubernetes is an open-source system for automating the deployment, scaling, and
 *             management of containerized applications. </p>
 *         <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use
 *             all the existing plugins and tooling from the Kubernetes community. Applications running
 *             on Amazon EKS are fully compatible with applications running on any standard Kubernetes
 *             environment, whether running in on-premises data centers or public clouds. This means
 *             that you can easily migrate any standard Kubernetes application to Amazon EKS without any
 *             code modification required.</p>
 */
var EKS = /** @class */ (function (_super) {
    __extends(EKS, _super);
    function EKS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EKS.prototype.associateEncryptionConfig = function (args, optionsOrCb, cb) {
        var command = new AssociateEncryptionConfigCommand(args);
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
    EKS.prototype.associateIdentityProviderConfig = function (args, optionsOrCb, cb) {
        var command = new AssociateIdentityProviderConfigCommand(args);
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
    EKS.prototype.createAddon = function (args, optionsOrCb, cb) {
        var command = new CreateAddonCommand(args);
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
    EKS.prototype.createCluster = function (args, optionsOrCb, cb) {
        var command = new CreateClusterCommand(args);
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
    EKS.prototype.createFargateProfile = function (args, optionsOrCb, cb) {
        var command = new CreateFargateProfileCommand(args);
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
    EKS.prototype.createNodegroup = function (args, optionsOrCb, cb) {
        var command = new CreateNodegroupCommand(args);
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
    EKS.prototype.deleteAddon = function (args, optionsOrCb, cb) {
        var command = new DeleteAddonCommand(args);
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
    EKS.prototype.deleteCluster = function (args, optionsOrCb, cb) {
        var command = new DeleteClusterCommand(args);
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
    EKS.prototype.deleteFargateProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteFargateProfileCommand(args);
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
    EKS.prototype.deleteNodegroup = function (args, optionsOrCb, cb) {
        var command = new DeleteNodegroupCommand(args);
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
    EKS.prototype.describeAddon = function (args, optionsOrCb, cb) {
        var command = new DescribeAddonCommand(args);
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
    EKS.prototype.describeAddonVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeAddonVersionsCommand(args);
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
    EKS.prototype.describeCluster = function (args, optionsOrCb, cb) {
        var command = new DescribeClusterCommand(args);
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
    EKS.prototype.describeFargateProfile = function (args, optionsOrCb, cb) {
        var command = new DescribeFargateProfileCommand(args);
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
    EKS.prototype.describeIdentityProviderConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityProviderConfigCommand(args);
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
    EKS.prototype.describeNodegroup = function (args, optionsOrCb, cb) {
        var command = new DescribeNodegroupCommand(args);
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
    EKS.prototype.describeUpdate = function (args, optionsOrCb, cb) {
        var command = new DescribeUpdateCommand(args);
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
    EKS.prototype.disassociateIdentityProviderConfig = function (args, optionsOrCb, cb) {
        var command = new DisassociateIdentityProviderConfigCommand(args);
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
    EKS.prototype.listAddons = function (args, optionsOrCb, cb) {
        var command = new ListAddonsCommand(args);
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
    EKS.prototype.listClusters = function (args, optionsOrCb, cb) {
        var command = new ListClustersCommand(args);
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
    EKS.prototype.listFargateProfiles = function (args, optionsOrCb, cb) {
        var command = new ListFargateProfilesCommand(args);
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
    EKS.prototype.listIdentityProviderConfigs = function (args, optionsOrCb, cb) {
        var command = new ListIdentityProviderConfigsCommand(args);
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
    EKS.prototype.listNodegroups = function (args, optionsOrCb, cb) {
        var command = new ListNodegroupsCommand(args);
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
    EKS.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    EKS.prototype.listUpdates = function (args, optionsOrCb, cb) {
        var command = new ListUpdatesCommand(args);
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
    EKS.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    EKS.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    EKS.prototype.updateAddon = function (args, optionsOrCb, cb) {
        var command = new UpdateAddonCommand(args);
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
    EKS.prototype.updateClusterConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateClusterConfigCommand(args);
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
    EKS.prototype.updateClusterVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateClusterVersionCommand(args);
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
    EKS.prototype.updateNodegroupConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateNodegroupConfigCommand(args);
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
    EKS.prototype.updateNodegroupVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateNodegroupVersionCommand(args);
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
    return EKS;
}(EKSClient));
export { EKS };
//# sourceMappingURL=EKS.js.map