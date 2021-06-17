import { __extends } from "tslib";
import { UpdateBotLocaleRequest, UpdateBotLocaleResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBotLocaleCommand, serializeAws_restJson1UpdateBotLocaleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings that a bot has for a specific locale.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link UpdateBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBotLocaleCommand = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBotLocaleCommand(input) {
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
    UpdateBotLocaleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateBotLocaleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBotLocaleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBotLocaleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBotLocaleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBotLocaleCommand(input, context);
    };
    UpdateBotLocaleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBotLocaleCommand(output, context);
    };
    return UpdateBotLocaleCommand;
}($Command));
export { UpdateBotLocaleCommand };
//# sourceMappingURL=UpdateBotLocaleCommand.js.map