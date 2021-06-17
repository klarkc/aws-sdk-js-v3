import { __extends } from "tslib";
import { UpdateBotRequest, UpdateBotResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBotCommand, serializeAws_restJson1UpdateBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of an existing bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBotCommand = /** @class */ (function (_super) {
    __extends(UpdateBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBotCommand(input) {
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
    UpdateBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBotCommand(input, context);
    };
    UpdateBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBotCommand(output, context);
    };
    return UpdateBotCommand;
}($Command));
export { UpdateBotCommand };
//# sourceMappingURL=UpdateBotCommand.js.map