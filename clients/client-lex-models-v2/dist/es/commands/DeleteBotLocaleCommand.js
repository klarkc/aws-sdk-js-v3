import { __extends } from "tslib";
import { DeleteBotLocaleRequest, DeleteBotLocaleResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBotLocaleCommand, serializeAws_restJson1DeleteBotLocaleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a locale from a bot.</p>
 *          <p>When you delete a locale, all intents, slots, and slot types defined
 *          for the locale are also deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DeleteBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBotLocaleCommand = /** @class */ (function (_super) {
    __extends(DeleteBotLocaleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBotLocaleCommand(input) {
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
    DeleteBotLocaleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteBotLocaleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBotLocaleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBotLocaleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBotLocaleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBotLocaleCommand(input, context);
    };
    DeleteBotLocaleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBotLocaleCommand(output, context);
    };
    return DeleteBotLocaleCommand;
}($Command));
export { DeleteBotLocaleCommand };
//# sourceMappingURL=DeleteBotLocaleCommand.js.map