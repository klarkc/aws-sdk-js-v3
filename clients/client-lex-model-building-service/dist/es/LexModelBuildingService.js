import { __extends } from "tslib";
import { LexModelBuildingServiceClient } from "./LexModelBuildingServiceClient";
import { CreateBotVersionCommand, } from "./commands/CreateBotVersionCommand";
import { CreateIntentVersionCommand, } from "./commands/CreateIntentVersionCommand";
import { CreateSlotTypeVersionCommand, } from "./commands/CreateSlotTypeVersionCommand";
import { DeleteBotAliasCommand, } from "./commands/DeleteBotAliasCommand";
import { DeleteBotChannelAssociationCommand, } from "./commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommand } from "./commands/DeleteBotCommand";
import { DeleteBotVersionCommand, } from "./commands/DeleteBotVersionCommand";
import { DeleteIntentCommand, } from "./commands/DeleteIntentCommand";
import { DeleteIntentVersionCommand, } from "./commands/DeleteIntentVersionCommand";
import { DeleteSlotTypeCommand, } from "./commands/DeleteSlotTypeCommand";
import { DeleteSlotTypeVersionCommand, } from "./commands/DeleteSlotTypeVersionCommand";
import { DeleteUtterancesCommand, } from "./commands/DeleteUtterancesCommand";
import { GetBotAliasCommand } from "./commands/GetBotAliasCommand";
import { GetBotAliasesCommand, } from "./commands/GetBotAliasesCommand";
import { GetBotChannelAssociationCommand, } from "./commands/GetBotChannelAssociationCommand";
import { GetBotChannelAssociationsCommand, } from "./commands/GetBotChannelAssociationsCommand";
import { GetBotCommand } from "./commands/GetBotCommand";
import { GetBotVersionsCommand, } from "./commands/GetBotVersionsCommand";
import { GetBotsCommand } from "./commands/GetBotsCommand";
import { GetBuiltinIntentCommand, } from "./commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommand, } from "./commands/GetBuiltinIntentsCommand";
import { GetBuiltinSlotTypesCommand, } from "./commands/GetBuiltinSlotTypesCommand";
import { GetExportCommand } from "./commands/GetExportCommand";
import { GetImportCommand } from "./commands/GetImportCommand";
import { GetIntentCommand } from "./commands/GetIntentCommand";
import { GetIntentVersionsCommand, } from "./commands/GetIntentVersionsCommand";
import { GetIntentsCommand } from "./commands/GetIntentsCommand";
import { GetSlotTypeCommand } from "./commands/GetSlotTypeCommand";
import { GetSlotTypeVersionsCommand, } from "./commands/GetSlotTypeVersionsCommand";
import { GetSlotTypesCommand, } from "./commands/GetSlotTypesCommand";
import { GetUtterancesViewCommand, } from "./commands/GetUtterancesViewCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutBotAliasCommand } from "./commands/PutBotAliasCommand";
import { PutBotCommand } from "./commands/PutBotCommand";
import { PutIntentCommand } from "./commands/PutIntentCommand";
import { PutSlotTypeCommand } from "./commands/PutSlotTypeCommand";
import { StartImportCommand } from "./commands/StartImportCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text
 *       interfaces. Use these actions to create, update, and delete conversational
 *       bots for new and existing client applications. </p>
 */
var LexModelBuildingService = /** @class */ (function (_super) {
    __extends(LexModelBuildingService, _super);
    function LexModelBuildingService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LexModelBuildingService.prototype.createBotVersion = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.createIntentVersion = function (args, optionsOrCb, cb) {
        var command = new CreateIntentVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.createSlotTypeVersion = function (args, optionsOrCb, cb) {
        var command = new CreateSlotTypeVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.deleteBot = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.deleteBotAlias = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.deleteBotChannelAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteBotChannelAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.deleteBotVersion = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.deleteIntent = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.deleteIntentVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteIntentVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.deleteSlotType = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.deleteSlotTypeVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteSlotTypeVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.deleteUtterances = function (args, optionsOrCb, cb) {
        var command = new DeleteUtterancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBot = function (args, optionsOrCb, cb) {
        var command = new GetBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBotAlias = function (args, optionsOrCb, cb) {
        var command = new GetBotAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBotAliases = function (args, optionsOrCb, cb) {
        var command = new GetBotAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBotChannelAssociation = function (args, optionsOrCb, cb) {
        var command = new GetBotChannelAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBotChannelAssociations = function (args, optionsOrCb, cb) {
        var command = new GetBotChannelAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBots = function (args, optionsOrCb, cb) {
        var command = new GetBotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBotVersions = function (args, optionsOrCb, cb) {
        var command = new GetBotVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBuiltinIntent = function (args, optionsOrCb, cb) {
        var command = new GetBuiltinIntentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBuiltinIntents = function (args, optionsOrCb, cb) {
        var command = new GetBuiltinIntentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getBuiltinSlotTypes = function (args, optionsOrCb, cb) {
        var command = new GetBuiltinSlotTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getExport = function (args, optionsOrCb, cb) {
        var command = new GetExportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getImport = function (args, optionsOrCb, cb) {
        var command = new GetImportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getIntent = function (args, optionsOrCb, cb) {
        var command = new GetIntentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getIntents = function (args, optionsOrCb, cb) {
        var command = new GetIntentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getIntentVersions = function (args, optionsOrCb, cb) {
        var command = new GetIntentVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getSlotType = function (args, optionsOrCb, cb) {
        var command = new GetSlotTypeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getSlotTypes = function (args, optionsOrCb, cb) {
        var command = new GetSlotTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getSlotTypeVersions = function (args, optionsOrCb, cb) {
        var command = new GetSlotTypeVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.getUtterancesView = function (args, optionsOrCb, cb) {
        var command = new GetUtterancesViewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.putBot = function (args, optionsOrCb, cb) {
        var command = new PutBotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.putBotAlias = function (args, optionsOrCb, cb) {
        var command = new PutBotAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.putIntent = function (args, optionsOrCb, cb) {
        var command = new PutIntentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.putSlotType = function (args, optionsOrCb, cb) {
        var command = new PutSlotTypeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexModelBuildingService.prototype.startImport = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    LexModelBuildingService.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return LexModelBuildingService;
}(LexModelBuildingServiceClient));
export { LexModelBuildingService };
//# sourceMappingURL=LexModelBuildingService.js.map