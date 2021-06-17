import { __extends } from "tslib";
import { ImagebuilderClient } from "./ImagebuilderClient";
import { CancelImageCreationCommand, } from "./commands/CancelImageCreationCommand";
import { CreateComponentCommand, } from "./commands/CreateComponentCommand";
import { CreateContainerRecipeCommand, } from "./commands/CreateContainerRecipeCommand";
import { CreateDistributionConfigurationCommand, } from "./commands/CreateDistributionConfigurationCommand";
import { CreateImageCommand } from "./commands/CreateImageCommand";
import { CreateImagePipelineCommand, } from "./commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommand, } from "./commands/CreateImageRecipeCommand";
import { CreateInfrastructureConfigurationCommand, } from "./commands/CreateInfrastructureConfigurationCommand";
import { DeleteComponentCommand, } from "./commands/DeleteComponentCommand";
import { DeleteContainerRecipeCommand, } from "./commands/DeleteContainerRecipeCommand";
import { DeleteDistributionConfigurationCommand, } from "./commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommand } from "./commands/DeleteImageCommand";
import { DeleteImagePipelineCommand, } from "./commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommand, } from "./commands/DeleteImageRecipeCommand";
import { DeleteInfrastructureConfigurationCommand, } from "./commands/DeleteInfrastructureConfigurationCommand";
import { GetComponentCommand, } from "./commands/GetComponentCommand";
import { GetComponentPolicyCommand, } from "./commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommand, } from "./commands/GetContainerRecipeCommand";
import { GetContainerRecipePolicyCommand, } from "./commands/GetContainerRecipePolicyCommand";
import { GetDistributionConfigurationCommand, } from "./commands/GetDistributionConfigurationCommand";
import { GetImageCommand } from "./commands/GetImageCommand";
import { GetImagePipelineCommand, } from "./commands/GetImagePipelineCommand";
import { GetImagePolicyCommand, } from "./commands/GetImagePolicyCommand";
import { GetImageRecipeCommand, } from "./commands/GetImageRecipeCommand";
import { GetImageRecipePolicyCommand, } from "./commands/GetImageRecipePolicyCommand";
import { GetInfrastructureConfigurationCommand, } from "./commands/GetInfrastructureConfigurationCommand";
import { ImportComponentCommand, } from "./commands/ImportComponentCommand";
import { ListComponentBuildVersionsCommand, } from "./commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommand, } from "./commands/ListComponentsCommand";
import { ListContainerRecipesCommand, } from "./commands/ListContainerRecipesCommand";
import { ListDistributionConfigurationsCommand, } from "./commands/ListDistributionConfigurationsCommand";
import { ListImageBuildVersionsCommand, } from "./commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommand, } from "./commands/ListImagePackagesCommand";
import { ListImagePipelineImagesCommand, } from "./commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommand, } from "./commands/ListImagePipelinesCommand";
import { ListImageRecipesCommand, } from "./commands/ListImageRecipesCommand";
import { ListImagesCommand } from "./commands/ListImagesCommand";
import { ListInfrastructureConfigurationsCommand, } from "./commands/ListInfrastructureConfigurationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutComponentPolicyCommand, } from "./commands/PutComponentPolicyCommand";
import { PutContainerRecipePolicyCommand, } from "./commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommand, } from "./commands/PutImagePolicyCommand";
import { PutImageRecipePolicyCommand, } from "./commands/PutImageRecipePolicyCommand";
import { StartImagePipelineExecutionCommand, } from "./commands/StartImagePipelineExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDistributionConfigurationCommand, } from "./commands/UpdateDistributionConfigurationCommand";
import { UpdateImagePipelineCommand, } from "./commands/UpdateImagePipelineCommand";
import { UpdateInfrastructureConfigurationCommand, } from "./commands/UpdateInfrastructureConfigurationCommand";
/**
 * <p>EC2 Image Builder is a fully managed AWS service that makes it easier to automate the
 *       creation, management, and deployment of customized, secure, and up-to-date "golden" server
 *       images that are pre-installed and pre-configured with software and settings to meet specific
 *       IT standards.</p>
 */
var Imagebuilder = /** @class */ (function (_super) {
    __extends(Imagebuilder, _super);
    function Imagebuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imagebuilder.prototype.cancelImageCreation = function (args, optionsOrCb, cb) {
        var command = new CancelImageCreationCommand(args);
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
    Imagebuilder.prototype.createComponent = function (args, optionsOrCb, cb) {
        var command = new CreateComponentCommand(args);
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
    Imagebuilder.prototype.createContainerRecipe = function (args, optionsOrCb, cb) {
        var command = new CreateContainerRecipeCommand(args);
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
    Imagebuilder.prototype.createDistributionConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateDistributionConfigurationCommand(args);
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
    Imagebuilder.prototype.createImage = function (args, optionsOrCb, cb) {
        var command = new CreateImageCommand(args);
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
    Imagebuilder.prototype.createImagePipeline = function (args, optionsOrCb, cb) {
        var command = new CreateImagePipelineCommand(args);
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
    Imagebuilder.prototype.createImageRecipe = function (args, optionsOrCb, cb) {
        var command = new CreateImageRecipeCommand(args);
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
    Imagebuilder.prototype.createInfrastructureConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateInfrastructureConfigurationCommand(args);
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
    Imagebuilder.prototype.deleteComponent = function (args, optionsOrCb, cb) {
        var command = new DeleteComponentCommand(args);
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
    Imagebuilder.prototype.deleteContainerRecipe = function (args, optionsOrCb, cb) {
        var command = new DeleteContainerRecipeCommand(args);
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
    Imagebuilder.prototype.deleteDistributionConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteDistributionConfigurationCommand(args);
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
    Imagebuilder.prototype.deleteImage = function (args, optionsOrCb, cb) {
        var command = new DeleteImageCommand(args);
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
    Imagebuilder.prototype.deleteImagePipeline = function (args, optionsOrCb, cb) {
        var command = new DeleteImagePipelineCommand(args);
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
    Imagebuilder.prototype.deleteImageRecipe = function (args, optionsOrCb, cb) {
        var command = new DeleteImageRecipeCommand(args);
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
    Imagebuilder.prototype.deleteInfrastructureConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteInfrastructureConfigurationCommand(args);
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
    Imagebuilder.prototype.getComponent = function (args, optionsOrCb, cb) {
        var command = new GetComponentCommand(args);
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
    Imagebuilder.prototype.getComponentPolicy = function (args, optionsOrCb, cb) {
        var command = new GetComponentPolicyCommand(args);
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
    Imagebuilder.prototype.getContainerRecipe = function (args, optionsOrCb, cb) {
        var command = new GetContainerRecipeCommand(args);
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
    Imagebuilder.prototype.getContainerRecipePolicy = function (args, optionsOrCb, cb) {
        var command = new GetContainerRecipePolicyCommand(args);
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
    Imagebuilder.prototype.getDistributionConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetDistributionConfigurationCommand(args);
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
    Imagebuilder.prototype.getImage = function (args, optionsOrCb, cb) {
        var command = new GetImageCommand(args);
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
    Imagebuilder.prototype.getImagePipeline = function (args, optionsOrCb, cb) {
        var command = new GetImagePipelineCommand(args);
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
    Imagebuilder.prototype.getImagePolicy = function (args, optionsOrCb, cb) {
        var command = new GetImagePolicyCommand(args);
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
    Imagebuilder.prototype.getImageRecipe = function (args, optionsOrCb, cb) {
        var command = new GetImageRecipeCommand(args);
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
    Imagebuilder.prototype.getImageRecipePolicy = function (args, optionsOrCb, cb) {
        var command = new GetImageRecipePolicyCommand(args);
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
    Imagebuilder.prototype.getInfrastructureConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetInfrastructureConfigurationCommand(args);
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
    Imagebuilder.prototype.importComponent = function (args, optionsOrCb, cb) {
        var command = new ImportComponentCommand(args);
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
    Imagebuilder.prototype.listComponentBuildVersions = function (args, optionsOrCb, cb) {
        var command = new ListComponentBuildVersionsCommand(args);
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
    Imagebuilder.prototype.listComponents = function (args, optionsOrCb, cb) {
        var command = new ListComponentsCommand(args);
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
    Imagebuilder.prototype.listContainerRecipes = function (args, optionsOrCb, cb) {
        var command = new ListContainerRecipesCommand(args);
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
    Imagebuilder.prototype.listDistributionConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListDistributionConfigurationsCommand(args);
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
    Imagebuilder.prototype.listImageBuildVersions = function (args, optionsOrCb, cb) {
        var command = new ListImageBuildVersionsCommand(args);
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
    Imagebuilder.prototype.listImagePackages = function (args, optionsOrCb, cb) {
        var command = new ListImagePackagesCommand(args);
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
    Imagebuilder.prototype.listImagePipelineImages = function (args, optionsOrCb, cb) {
        var command = new ListImagePipelineImagesCommand(args);
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
    Imagebuilder.prototype.listImagePipelines = function (args, optionsOrCb, cb) {
        var command = new ListImagePipelinesCommand(args);
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
    Imagebuilder.prototype.listImageRecipes = function (args, optionsOrCb, cb) {
        var command = new ListImageRecipesCommand(args);
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
    Imagebuilder.prototype.listImages = function (args, optionsOrCb, cb) {
        var command = new ListImagesCommand(args);
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
    Imagebuilder.prototype.listInfrastructureConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListInfrastructureConfigurationsCommand(args);
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
    Imagebuilder.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    Imagebuilder.prototype.putComponentPolicy = function (args, optionsOrCb, cb) {
        var command = new PutComponentPolicyCommand(args);
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
    Imagebuilder.prototype.putContainerRecipePolicy = function (args, optionsOrCb, cb) {
        var command = new PutContainerRecipePolicyCommand(args);
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
    Imagebuilder.prototype.putImagePolicy = function (args, optionsOrCb, cb) {
        var command = new PutImagePolicyCommand(args);
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
    Imagebuilder.prototype.putImageRecipePolicy = function (args, optionsOrCb, cb) {
        var command = new PutImageRecipePolicyCommand(args);
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
    Imagebuilder.prototype.startImagePipelineExecution = function (args, optionsOrCb, cb) {
        var command = new StartImagePipelineExecutionCommand(args);
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
    Imagebuilder.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    Imagebuilder.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    Imagebuilder.prototype.updateDistributionConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateDistributionConfigurationCommand(args);
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
    Imagebuilder.prototype.updateImagePipeline = function (args, optionsOrCb, cb) {
        var command = new UpdateImagePipelineCommand(args);
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
    Imagebuilder.prototype.updateInfrastructureConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateInfrastructureConfigurationCommand(args);
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
    return Imagebuilder;
}(ImagebuilderClient));
export { Imagebuilder };
//# sourceMappingURL=Imagebuilder.js.map