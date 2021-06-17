import { __extends } from "tslib";
import { DeleteBotAliasRequest, DeleteBotAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBotAliasCommand, serializeAws_restJson1DeleteBotAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBotAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteBotAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBotAliasCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteBotAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteBotAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBotAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBotAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBotAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBotAliasCommand(input, context);
    };
    DeleteBotAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBotAliasCommand(output, context);
    };
    return DeleteBotAliasCommand;
}($Command));
export { DeleteBotAliasCommand };
//# sourceMappingURL=DeleteBotAliasCommand.js.map