import { __extends } from "tslib";
import { LexModelsV2Client } from "./LexModelsV2Client";
import { BuildBotLocaleCommand, } from "./commands/BuildBotLocaleCommand";
import { CreateBotAliasCommand, } from "./commands/CreateBotAliasCommand";
import { CreateBotCommand } from "./commands/CreateBotCommand";
import { CreateBotLocaleCommand, } from "./commands/CreateBotLocaleCommand";
import { CreateBotVersionCommand, } from "./commands/CreateBotVersionCommand";
import { CreateExportCommand, } from "./commands/CreateExportCommand";
import { CreateIntentCommand, } from "./commands/CreateIntentCommand";
import { CreateResourcePolicyCommand, } from "./commands/CreateResourcePolicyCommand";
import { CreateResourcePolicyStatementCommand, } from "./commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommand } from "./commands/CreateSlotCommand";
import { CreateSlotTypeCommand, } from "./commands/CreateSlotTypeCommand";
import { CreateUploadUrlCommand, } from "./commands/CreateUploadUrlCommand";
import { DeleteBotAliasCommand, } from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommand } from "./commands/DeleteBotCommand";
import { DeleteBotLocaleCommand, } from "./commands/DeleteBotLocaleCommand";
import { DeleteBotVersionCommand, } from "./commands/DeleteBotVersionCommand";
import { DeleteExportCommand, } from "./commands/DeleteExportCommand";
import { DeleteImportCommand, } from "./commands/DeleteImportCommand";
import { DeleteIntentCommand, } from "./commands/DeleteIntentCommand";
import { DeleteResourcePolicyCommand, } from "./commands/DeleteResourcePolicyCommand";
import { DeleteResourcePolicyStatementCommand, } from "./commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommand } from "./commands/DeleteSlotCommand";
import { DeleteSlotTypeCommand, } from "./commands/DeleteSlotTypeCommand";
import { DescribeBotAliasCommand, } from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommand } from "./commands/DescribeBotCommand";
import { DescribeBotLocaleCommand, } from "./commands/DescribeBotLocaleCommand";
import { DescribeBotVersionCommand, } from "./commands/DescribeBotVersionCommand";
import { DescribeExportCommand, } from "./commands/DescribeExportCommand";
import { DescribeImportCommand, } from "./commands/DescribeImportCommand";
import { DescribeIntentCommand, } from "./commands/DescribeIntentCommand";
import { DescribeResourcePolicyCommand, } from "./commands/DescribeResourcePolicyCommand";
import { DescribeSlotCommand, } from "./commands/DescribeSlotCommand";
import { DescribeSlotTypeCommand, } from "./commands/DescribeSlotTypeCommand";
import { ListBotAliasesCommand, } from "./commands/ListBotAliasesCommand";
import { ListBotLocalesCommand, } from "./commands/ListBotLocalesCommand";
import { ListBotVersionsCommand, } from "./commands/ListBotVersionsCommand";
import { ListBotsCommand } from "./commands/ListBotsCommand";
import { ListBuiltInIntentsCommand, } from "./commands/ListBuiltInIntentsCommand";
import { ListBuiltInSlotTypesCommand, } from "./commands/ListBuiltInSlotTypesCommand";
import { ListExportsCommand } from "./commands/ListExportsCommand";
import { ListImportsCommand } from "./commands/ListImportsCommand";
import { ListIntentsCommand } from "./commands/ListIntentsCommand";
import { ListSlotTypesCommand, } from "./commands/ListSlotTypesCommand";
import { ListSlotsCommand } from "./commands/ListSlotsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StartImportCommand } from "./commands/StartImportCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateBotAliasCommand, } from "./commands/UpdateBotAliasCommand";
import { UpdateBotCommand } from "./commands/UpdateBotCommand";
import { UpdateBotLocaleCommand, } from "./commands/UpdateBotLocaleCommand";
import { UpdateExportCommand, } from "./commands/UpdateExportCommand";
import { UpdateIntentCommand, } from "./commands/UpdateIntentCommand";
import { UpdateResourcePolicyCommand, } from "./commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommand } from "./commands/UpdateSlotCommand";
import { UpdateSlotTypeCommand, } from "./commands/UpdateSlotTypeCommand";
/**
 * <p></p>
 */
var LexModelsV2 = /** @class */ (function (_super) {
    __extends(LexModelsV2, _super);
    function LexModelsV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LexModelsV2.prototype.buildBotLocale = function (args, optionsOrCb, cb) {
        var command = new BuildBotLocaleCommand(args);
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
    LexModelsV2.prototype.createBot = function (args, optionsOrCb, cb) {
        var command = new CreateBotCommand(args);
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
    LexModelsV2.prototype.createBotAlias = function (args, optionsOrCb, cb) {
        var command = new CreateBotAliasCommand(args);
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
    LexModelsV2.prototype.createBotLocale = function (args, optionsOrCb, cb) {
        var command = new CreateBotLocaleCommand(args);
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
    LexModelsV2.prototype.createBotVersion = function (args, optionsOrCb, cb) {
        var command = new CreateBotVersionCommand(args);
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
    LexModelsV2.prototype.createExport = function (args, optionsOrCb, cb) {
        var command = new CreateExportCommand(args);
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
    LexModelsV2.prototype.createIntent = function (args, optionsOrCb, cb) {
        var command = new CreateIntentCommand(args);
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
    LexModelsV2.prototype.createResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new CreateResourcePolicyCommand(args);
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
    LexModelsV2.prototype.createResourcePolicyStatement = function (args, optionsOrCb, cb) {
        var command = new CreateResourcePolicyStatementCommand(args);
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
    LexModelsV2.prototype.createSlot = function (args, optionsOrCb, cb) {
        var command = new CreateSlotCommand(args);
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
    LexModelsV2.prototype.createSlotType = function (args, optionsOrCb, cb) {
        var command = new CreateSlotTypeCommand(args);
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
    LexModelsV2.prototype.createUploadUrl = function (args, optionsOrCb, cb) {
        var command = new CreateUploadUrlCommand(args);
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
    LexModelsV2.prototype.deleteBot = function (args, optionsOrCb, cb) {
        var command = new DeleteBotCommand(args);
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
    LexModelsV2.prototype.deleteBotAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteBotAliasCommand(args);
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
    LexModelsV2.prototype.deleteBotLocale = function (args, optionsOrCb, cb) {
        var command = new DeleteBotLocaleCommand(args);
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
    LexModelsV2.prototype.deleteBotVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteBotVersionCommand(args);
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
    LexModelsV2.prototype.deleteExport = function (args, optionsOrCb, cb) {
        var command = new DeleteExportCommand(args);
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
    LexModelsV2.prototype.deleteImport = function (args, optionsOrCb, cb) {
        var command = new DeleteImportCommand(args);
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
    LexModelsV2.prototype.deleteIntent = function (args, optionsOrCb, cb) {
        var command = new DeleteIntentCommand(args);
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
    LexModelsV2.prototype.deleteResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteResourcePolicyCommand(args);
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
    LexModelsV2.prototype.deleteResourcePolicyStatement = function (args, optionsOrCb, cb) {
        var command = new DeleteResourcePolicyStatementCommand(args);
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
    LexModelsV2.prototype.deleteSlot = function (args, optionsOrCb, cb) {
        var command = new DeleteSlotCommand(args);
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
    LexModelsV2.prototype.deleteSlotType = function (args, optionsOrCb, cb) {
        var command = new DeleteSlotTypeCommand(args);
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
    LexModelsV2.prototype.describeBot = function (args, optionsOrCb, cb) {
        var command = new DescribeBotCommand(args);
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
    LexModelsV2.prototype.describeBotAlias = function (args, optionsOrCb, cb) {
        var command = new DescribeBotAliasCommand(args);
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
    LexModelsV2.prototype.describeBotLocale = function (args, optionsOrCb, cb) {
        var command = new DescribeBotLocaleCommand(args);
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
    LexModelsV2.prototype.describeBotVersion = function (args, optionsOrCb, cb) {
        var command = new DescribeBotVersionCommand(args);
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
    LexModelsV2.prototype.describeExport = function (args, optionsOrCb, cb) {
        var command = new DescribeExportCommand(args);
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
    LexModelsV2.prototype.describeImport = function (args, optionsOrCb, cb) {
        var command = new DescribeImportCommand(args);
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
    LexModelsV2.prototype.describeIntent = function (args, optionsOrCb, cb) {
        var command = new DescribeIntentCommand(args);
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
    LexModelsV2.prototype.describeResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new DescribeResourcePolicyCommand(args);
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
    LexModelsV2.prototype.describeSlot = function (args, optionsOrCb, cb) {
        var command = new DescribeSlotCommand(args);
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
    LexModelsV2.prototype.describeSlotType = function (args, optionsOrCb, cb) {
        var command = new DescribeSlotTypeCommand(args);
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
    LexModelsV2.prototype.listBotAliases = function (args, optionsOrCb, cb) {
        var command = new ListBotAliasesCommand(args);
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
    LexModelsV2.prototype.listBotLocales = function (args, optionsOrCb, cb) {
        var command = new ListBotLocalesCommand(args);
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
    LexModelsV2.prototype.listBots = function (args, optionsOrCb, cb) {
        var command = new ListBotsCommand(args);
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
    LexModelsV2.prototype.listBotVersions = function (args, optionsOrCb, cb) {
        var command = new ListBotVersionsCommand(args);
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
    LexModelsV2.prototype.listBuiltInIntents = function (args, optionsOrCb, cb) {
        var command = new ListBuiltInIntentsCommand(args);
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
    LexModelsV2.prototype.listBuiltInSlotTypes = function (args, optionsOrCb, cb) {
        var command = new ListBuiltInSlotTypesCommand(args);
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
    LexModelsV2.prototype.listExports = function (args, optionsOrCb, cb) {
        var command = new ListExportsCommand(args);
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
    LexModelsV2.prototype.listImports = function (args, optionsOrCb, cb) {
        var command = new ListImportsCommand(args);
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
    LexModelsV2.prototype.listIntents = function (args, optionsOrCb, cb) {
        var command = new ListIntentsCommand(args);
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
    LexModelsV2.prototype.listSlots = function (args, optionsOrCb, cb) {
        var command = new ListSlotsCommand(args);
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
    LexModelsV2.prototype.listSlotTypes = function (args, optionsOrCb, cb) {
        var command = new ListSlotTypesCommand(args);
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
    LexModelsV2.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    LexModelsV2.prototype.startImport = function (args, optionsOrCb, cb) {
        var command = new StartImportCommand(args);
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
    LexModelsV2.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    LexModelsV2.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    LexModelsV2.prototype.updateBot = function (args, optionsOrCb, cb) {
        var command = new UpdateBotCommand(args);
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
    LexModelsV2.prototype.updateBotAlias = function (args, optionsOrCb, cb) {
        var command = new UpdateBotAliasCommand(args);
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
    LexModelsV2.prototype.updateBotLocale = function (args, optionsOrCb, cb) {
        var command = new UpdateBotLocaleCommand(args);
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
    LexModelsV2.prototype.updateExport = function (args, optionsOrCb, cb) {
        var command = new UpdateExportCommand(args);
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
    LexModelsV2.prototype.updateIntent = function (args, optionsOrCb, cb) {
        var command = new UpdateIntentCommand(args);
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
    LexModelsV2.prototype.updateResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new UpdateResourcePolicyCommand(args);
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
    LexModelsV2.prototype.updateSlot = function (args, optionsOrCb, cb) {
        var command = new UpdateSlotCommand(args);
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
    LexModelsV2.prototype.updateSlotType = function (args, optionsOrCb, cb) {
        var command = new UpdateSlotTypeCommand(args);
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
    return LexModelsV2;
}(LexModelsV2Client));
export { LexModelsV2 };
//# sourceMappingURL=LexModelsV2.js.map