"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lambda = void 0;
const LambdaClient_1 = require("./LambdaClient");
const AddLayerVersionPermissionCommand_1 = require("./commands/AddLayerVersionPermissionCommand");
const AddPermissionCommand_1 = require("./commands/AddPermissionCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateCodeSigningConfigCommand_1 = require("./commands/CreateCodeSigningConfigCommand");
const CreateEventSourceMappingCommand_1 = require("./commands/CreateEventSourceMappingCommand");
const CreateFunctionCommand_1 = require("./commands/CreateFunctionCommand");
const DeleteAliasCommand_1 = require("./commands/DeleteAliasCommand");
const DeleteCodeSigningConfigCommand_1 = require("./commands/DeleteCodeSigningConfigCommand");
const DeleteEventSourceMappingCommand_1 = require("./commands/DeleteEventSourceMappingCommand");
const DeleteFunctionCodeSigningConfigCommand_1 = require("./commands/DeleteFunctionCodeSigningConfigCommand");
const DeleteFunctionCommand_1 = require("./commands/DeleteFunctionCommand");
const DeleteFunctionConcurrencyCommand_1 = require("./commands/DeleteFunctionConcurrencyCommand");
const DeleteFunctionEventInvokeConfigCommand_1 = require("./commands/DeleteFunctionEventInvokeConfigCommand");
const DeleteLayerVersionCommand_1 = require("./commands/DeleteLayerVersionCommand");
const DeleteProvisionedConcurrencyConfigCommand_1 = require("./commands/DeleteProvisionedConcurrencyConfigCommand");
const GetAccountSettingsCommand_1 = require("./commands/GetAccountSettingsCommand");
const GetAliasCommand_1 = require("./commands/GetAliasCommand");
const GetCodeSigningConfigCommand_1 = require("./commands/GetCodeSigningConfigCommand");
const GetEventSourceMappingCommand_1 = require("./commands/GetEventSourceMappingCommand");
const GetFunctionCodeSigningConfigCommand_1 = require("./commands/GetFunctionCodeSigningConfigCommand");
const GetFunctionCommand_1 = require("./commands/GetFunctionCommand");
const GetFunctionConcurrencyCommand_1 = require("./commands/GetFunctionConcurrencyCommand");
const GetFunctionConfigurationCommand_1 = require("./commands/GetFunctionConfigurationCommand");
const GetFunctionEventInvokeConfigCommand_1 = require("./commands/GetFunctionEventInvokeConfigCommand");
const GetLayerVersionByArnCommand_1 = require("./commands/GetLayerVersionByArnCommand");
const GetLayerVersionCommand_1 = require("./commands/GetLayerVersionCommand");
const GetLayerVersionPolicyCommand_1 = require("./commands/GetLayerVersionPolicyCommand");
const GetPolicyCommand_1 = require("./commands/GetPolicyCommand");
const GetProvisionedConcurrencyConfigCommand_1 = require("./commands/GetProvisionedConcurrencyConfigCommand");
const InvokeAsyncCommand_1 = require("./commands/InvokeAsyncCommand");
const InvokeCommand_1 = require("./commands/InvokeCommand");
const ListAliasesCommand_1 = require("./commands/ListAliasesCommand");
const ListCodeSigningConfigsCommand_1 = require("./commands/ListCodeSigningConfigsCommand");
const ListEventSourceMappingsCommand_1 = require("./commands/ListEventSourceMappingsCommand");
const ListFunctionEventInvokeConfigsCommand_1 = require("./commands/ListFunctionEventInvokeConfigsCommand");
const ListFunctionsByCodeSigningConfigCommand_1 = require("./commands/ListFunctionsByCodeSigningConfigCommand");
const ListFunctionsCommand_1 = require("./commands/ListFunctionsCommand");
const ListLayerVersionsCommand_1 = require("./commands/ListLayerVersionsCommand");
const ListLayersCommand_1 = require("./commands/ListLayersCommand");
const ListProvisionedConcurrencyConfigsCommand_1 = require("./commands/ListProvisionedConcurrencyConfigsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const ListVersionsByFunctionCommand_1 = require("./commands/ListVersionsByFunctionCommand");
const PublishLayerVersionCommand_1 = require("./commands/PublishLayerVersionCommand");
const PublishVersionCommand_1 = require("./commands/PublishVersionCommand");
const PutFunctionCodeSigningConfigCommand_1 = require("./commands/PutFunctionCodeSigningConfigCommand");
const PutFunctionConcurrencyCommand_1 = require("./commands/PutFunctionConcurrencyCommand");
const PutFunctionEventInvokeConfigCommand_1 = require("./commands/PutFunctionEventInvokeConfigCommand");
const PutProvisionedConcurrencyConfigCommand_1 = require("./commands/PutProvisionedConcurrencyConfigCommand");
const RemoveLayerVersionPermissionCommand_1 = require("./commands/RemoveLayerVersionPermissionCommand");
const RemovePermissionCommand_1 = require("./commands/RemovePermissionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAliasCommand_1 = require("./commands/UpdateAliasCommand");
const UpdateCodeSigningConfigCommand_1 = require("./commands/UpdateCodeSigningConfigCommand");
const UpdateEventSourceMappingCommand_1 = require("./commands/UpdateEventSourceMappingCommand");
const UpdateFunctionCodeCommand_1 = require("./commands/UpdateFunctionCodeCommand");
const UpdateFunctionConfigurationCommand_1 = require("./commands/UpdateFunctionConfigurationCommand");
const UpdateFunctionEventInvokeConfigCommand_1 = require("./commands/UpdateFunctionEventInvokeConfigCommand");
/**
 * <fullname>AWS Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional
 *       information. For the service overview, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is
 *         AWS Lambda</a>, and for information about how the service works, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <b>AWS Lambda Developer Guide</b>.</p>
 */
class Lambda extends LambdaClient_1.LambdaClient {
    addLayerVersionPermission(args, optionsOrCb, cb) {
        const command = new AddLayerVersionPermissionCommand_1.AddLayerVersionPermissionCommand(args);
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
    addPermission(args, optionsOrCb, cb) {
        const command = new AddPermissionCommand_1.AddPermissionCommand(args);
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
    createAlias(args, optionsOrCb, cb) {
        const command = new CreateAliasCommand_1.CreateAliasCommand(args);
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
    createCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new CreateCodeSigningConfigCommand_1.CreateCodeSigningConfigCommand(args);
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
    createEventSourceMapping(args, optionsOrCb, cb) {
        const command = new CreateEventSourceMappingCommand_1.CreateEventSourceMappingCommand(args);
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
    createFunction(args, optionsOrCb, cb) {
        const command = new CreateFunctionCommand_1.CreateFunctionCommand(args);
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
    deleteAlias(args, optionsOrCb, cb) {
        const command = new DeleteAliasCommand_1.DeleteAliasCommand(args);
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
    deleteCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new DeleteCodeSigningConfigCommand_1.DeleteCodeSigningConfigCommand(args);
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
    deleteEventSourceMapping(args, optionsOrCb, cb) {
        const command = new DeleteEventSourceMappingCommand_1.DeleteEventSourceMappingCommand(args);
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
    deleteFunction(args, optionsOrCb, cb) {
        const command = new DeleteFunctionCommand_1.DeleteFunctionCommand(args);
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
    deleteFunctionCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new DeleteFunctionCodeSigningConfigCommand_1.DeleteFunctionCodeSigningConfigCommand(args);
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
    deleteFunctionConcurrency(args, optionsOrCb, cb) {
        const command = new DeleteFunctionConcurrencyCommand_1.DeleteFunctionConcurrencyCommand(args);
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
    deleteFunctionEventInvokeConfig(args, optionsOrCb, cb) {
        const command = new DeleteFunctionEventInvokeConfigCommand_1.DeleteFunctionEventInvokeConfigCommand(args);
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
    deleteLayerVersion(args, optionsOrCb, cb) {
        const command = new DeleteLayerVersionCommand_1.DeleteLayerVersionCommand(args);
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
    deleteProvisionedConcurrencyConfig(args, optionsOrCb, cb) {
        const command = new DeleteProvisionedConcurrencyConfigCommand_1.DeleteProvisionedConcurrencyConfigCommand(args);
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
    getAccountSettings(args, optionsOrCb, cb) {
        const command = new GetAccountSettingsCommand_1.GetAccountSettingsCommand(args);
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
    getAlias(args, optionsOrCb, cb) {
        const command = new GetAliasCommand_1.GetAliasCommand(args);
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
    getCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new GetCodeSigningConfigCommand_1.GetCodeSigningConfigCommand(args);
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
    getEventSourceMapping(args, optionsOrCb, cb) {
        const command = new GetEventSourceMappingCommand_1.GetEventSourceMappingCommand(args);
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
    getFunction(args, optionsOrCb, cb) {
        const command = new GetFunctionCommand_1.GetFunctionCommand(args);
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
    getFunctionCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new GetFunctionCodeSigningConfigCommand_1.GetFunctionCodeSigningConfigCommand(args);
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
    getFunctionConcurrency(args, optionsOrCb, cb) {
        const command = new GetFunctionConcurrencyCommand_1.GetFunctionConcurrencyCommand(args);
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
    getFunctionConfiguration(args, optionsOrCb, cb) {
        const command = new GetFunctionConfigurationCommand_1.GetFunctionConfigurationCommand(args);
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
    getFunctionEventInvokeConfig(args, optionsOrCb, cb) {
        const command = new GetFunctionEventInvokeConfigCommand_1.GetFunctionEventInvokeConfigCommand(args);
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
    getLayerVersion(args, optionsOrCb, cb) {
        const command = new GetLayerVersionCommand_1.GetLayerVersionCommand(args);
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
    getLayerVersionByArn(args, optionsOrCb, cb) {
        const command = new GetLayerVersionByArnCommand_1.GetLayerVersionByArnCommand(args);
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
    getLayerVersionPolicy(args, optionsOrCb, cb) {
        const command = new GetLayerVersionPolicyCommand_1.GetLayerVersionPolicyCommand(args);
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
    getPolicy(args, optionsOrCb, cb) {
        const command = new GetPolicyCommand_1.GetPolicyCommand(args);
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
    getProvisionedConcurrencyConfig(args, optionsOrCb, cb) {
        const command = new GetProvisionedConcurrencyConfigCommand_1.GetProvisionedConcurrencyConfigCommand(args);
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
    invoke(args, optionsOrCb, cb) {
        const command = new InvokeCommand_1.InvokeCommand(args);
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
    invokeAsync(args, optionsOrCb, cb) {
        const command = new InvokeAsyncCommand_1.InvokeAsyncCommand(args);
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
    listAliases(args, optionsOrCb, cb) {
        const command = new ListAliasesCommand_1.ListAliasesCommand(args);
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
    listCodeSigningConfigs(args, optionsOrCb, cb) {
        const command = new ListCodeSigningConfigsCommand_1.ListCodeSigningConfigsCommand(args);
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
    listEventSourceMappings(args, optionsOrCb, cb) {
        const command = new ListEventSourceMappingsCommand_1.ListEventSourceMappingsCommand(args);
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
    listFunctionEventInvokeConfigs(args, optionsOrCb, cb) {
        const command = new ListFunctionEventInvokeConfigsCommand_1.ListFunctionEventInvokeConfigsCommand(args);
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
    listFunctions(args, optionsOrCb, cb) {
        const command = new ListFunctionsCommand_1.ListFunctionsCommand(args);
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
    listFunctionsByCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new ListFunctionsByCodeSigningConfigCommand_1.ListFunctionsByCodeSigningConfigCommand(args);
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
    listLayers(args, optionsOrCb, cb) {
        const command = new ListLayersCommand_1.ListLayersCommand(args);
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
    listLayerVersions(args, optionsOrCb, cb) {
        const command = new ListLayerVersionsCommand_1.ListLayerVersionsCommand(args);
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
    listProvisionedConcurrencyConfigs(args, optionsOrCb, cb) {
        const command = new ListProvisionedConcurrencyConfigsCommand_1.ListProvisionedConcurrencyConfigsCommand(args);
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
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
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
    listVersionsByFunction(args, optionsOrCb, cb) {
        const command = new ListVersionsByFunctionCommand_1.ListVersionsByFunctionCommand(args);
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
    publishLayerVersion(args, optionsOrCb, cb) {
        const command = new PublishLayerVersionCommand_1.PublishLayerVersionCommand(args);
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
    publishVersion(args, optionsOrCb, cb) {
        const command = new PublishVersionCommand_1.PublishVersionCommand(args);
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
    putFunctionCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new PutFunctionCodeSigningConfigCommand_1.PutFunctionCodeSigningConfigCommand(args);
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
    putFunctionConcurrency(args, optionsOrCb, cb) {
        const command = new PutFunctionConcurrencyCommand_1.PutFunctionConcurrencyCommand(args);
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
    putFunctionEventInvokeConfig(args, optionsOrCb, cb) {
        const command = new PutFunctionEventInvokeConfigCommand_1.PutFunctionEventInvokeConfigCommand(args);
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
    putProvisionedConcurrencyConfig(args, optionsOrCb, cb) {
        const command = new PutProvisionedConcurrencyConfigCommand_1.PutProvisionedConcurrencyConfigCommand(args);
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
    removeLayerVersionPermission(args, optionsOrCb, cb) {
        const command = new RemoveLayerVersionPermissionCommand_1.RemoveLayerVersionPermissionCommand(args);
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
    removePermission(args, optionsOrCb, cb) {
        const command = new RemovePermissionCommand_1.RemovePermissionCommand(args);
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
    updateAlias(args, optionsOrCb, cb) {
        const command = new UpdateAliasCommand_1.UpdateAliasCommand(args);
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
    updateCodeSigningConfig(args, optionsOrCb, cb) {
        const command = new UpdateCodeSigningConfigCommand_1.UpdateCodeSigningConfigCommand(args);
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
    updateEventSourceMapping(args, optionsOrCb, cb) {
        const command = new UpdateEventSourceMappingCommand_1.UpdateEventSourceMappingCommand(args);
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
    updateFunctionCode(args, optionsOrCb, cb) {
        const command = new UpdateFunctionCodeCommand_1.UpdateFunctionCodeCommand(args);
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
    updateFunctionConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateFunctionConfigurationCommand_1.UpdateFunctionConfigurationCommand(args);
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
    updateFunctionEventInvokeConfig(args, optionsOrCb, cb) {
        const command = new UpdateFunctionEventInvokeConfigCommand_1.UpdateFunctionEventInvokeConfigCommand(args);
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
exports.Lambda = Lambda;
//# sourceMappingURL=Lambda.js.map