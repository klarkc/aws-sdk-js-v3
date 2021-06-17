import { __extends } from "tslib";
import { ECRPUBLICClient } from "./ECRPUBLICClient";
import { BatchCheckLayerAvailabilityCommand, } from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommand, } from "./commands/BatchDeleteImageCommand";
import { CompleteLayerUploadCommand, } from "./commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommand, } from "./commands/CreateRepositoryCommand";
import { DeleteRepositoryCommand, } from "./commands/DeleteRepositoryCommand";
import { DeleteRepositoryPolicyCommand, } from "./commands/DeleteRepositoryPolicyCommand";
import { DescribeImageTagsCommand, } from "./commands/DescribeImageTagsCommand";
import { DescribeImagesCommand, } from "./commands/DescribeImagesCommand";
import { DescribeRegistriesCommand, } from "./commands/DescribeRegistriesCommand";
import { DescribeRepositoriesCommand, } from "./commands/DescribeRepositoriesCommand";
import { GetAuthorizationTokenCommand, } from "./commands/GetAuthorizationTokenCommand";
import { GetRegistryCatalogDataCommand, } from "./commands/GetRegistryCatalogDataCommand";
import { GetRepositoryCatalogDataCommand, } from "./commands/GetRepositoryCatalogDataCommand";
import { GetRepositoryPolicyCommand, } from "./commands/GetRepositoryPolicyCommand";
import { InitiateLayerUploadCommand, } from "./commands/InitiateLayerUploadCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutImageCommand } from "./commands/PutImageCommand";
import { PutRegistryCatalogDataCommand, } from "./commands/PutRegistryCatalogDataCommand";
import { PutRepositoryCatalogDataCommand, } from "./commands/PutRepositoryCatalogDataCommand";
import { SetRepositoryPolicyCommand, } from "./commands/SetRepositoryPolicyCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommand, } from "./commands/UploadLayerPartCommand";
/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the familiar
 *          Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a
 *          secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI)
 *          images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR
 *          API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
var ECRPUBLIC = /** @class */ (function (_super) {
    __extends(ECRPUBLIC, _super);
    function ECRPUBLIC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ECRPUBLIC.prototype.batchCheckLayerAvailability = function (args, optionsOrCb, cb) {
        var command = new BatchCheckLayerAvailabilityCommand(args);
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
    ECRPUBLIC.prototype.batchDeleteImage = function (args, optionsOrCb, cb) {
        var command = new BatchDeleteImageCommand(args);
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
    ECRPUBLIC.prototype.completeLayerUpload = function (args, optionsOrCb, cb) {
        var command = new CompleteLayerUploadCommand(args);
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
    ECRPUBLIC.prototype.createRepository = function (args, optionsOrCb, cb) {
        var command = new CreateRepositoryCommand(args);
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
    ECRPUBLIC.prototype.deleteRepository = function (args, optionsOrCb, cb) {
        var command = new DeleteRepositoryCommand(args);
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
    ECRPUBLIC.prototype.deleteRepositoryPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteRepositoryPolicyCommand(args);
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
    ECRPUBLIC.prototype.describeImages = function (args, optionsOrCb, cb) {
        var command = new DescribeImagesCommand(args);
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
    ECRPUBLIC.prototype.describeImageTags = function (args, optionsOrCb, cb) {
        var command = new DescribeImageTagsCommand(args);
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
    ECRPUBLIC.prototype.describeRegistries = function (args, optionsOrCb, cb) {
        var command = new DescribeRegistriesCommand(args);
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
    ECRPUBLIC.prototype.describeRepositories = function (args, optionsOrCb, cb) {
        var command = new DescribeRepositoriesCommand(args);
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
    ECRPUBLIC.prototype.getAuthorizationToken = function (args, optionsOrCb, cb) {
        var command = new GetAuthorizationTokenCommand(args);
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
    ECRPUBLIC.prototype.getRegistryCatalogData = function (args, optionsOrCb, cb) {
        var command = new GetRegistryCatalogDataCommand(args);
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
    ECRPUBLIC.prototype.getRepositoryCatalogData = function (args, optionsOrCb, cb) {
        var command = new GetRepositoryCatalogDataCommand(args);
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
    ECRPUBLIC.prototype.getRepositoryPolicy = function (args, optionsOrCb, cb) {
        var command = new GetRepositoryPolicyCommand(args);
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
    ECRPUBLIC.prototype.initiateLayerUpload = function (args, optionsOrCb, cb) {
        var command = new InitiateLayerUploadCommand(args);
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
    ECRPUBLIC.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ECRPUBLIC.prototype.putImage = function (args, optionsOrCb, cb) {
        var command = new PutImageCommand(args);
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
    ECRPUBLIC.prototype.putRegistryCatalogData = function (args, optionsOrCb, cb) {
        var command = new PutRegistryCatalogDataCommand(args);
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
    ECRPUBLIC.prototype.putRepositoryCatalogData = function (args, optionsOrCb, cb) {
        var command = new PutRepositoryCatalogDataCommand(args);
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
    ECRPUBLIC.prototype.setRepositoryPolicy = function (args, optionsOrCb, cb) {
        var command = new SetRepositoryPolicyCommand(args);
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
    ECRPUBLIC.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ECRPUBLIC.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    ECRPUBLIC.prototype.uploadLayerPart = function (args, optionsOrCb, cb) {
        var command = new UploadLayerPartCommand(args);
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
    return ECRPUBLIC;
}(ECRPUBLICClient));
export { ECRPUBLIC };
//# sourceMappingURL=ECRPUBLIC.js.map