import { __extends } from "tslib";
import { UpdateIntentRequest, UpdateIntentResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateIntentCommand, serializeAws_restJson1UpdateIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings for an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIntentCommandInput} for command's `input` shape.
 * @see {@link UpdateIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIntentCommand = /** @class */ (function (_super) {
    __extends(UpdateIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIntentCommand(input) {
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
    UpdateIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIntentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIntentCommand(input, context);
    };
    UpdateIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIntentCommand(output, context);
    };
    return UpdateIntentCommand;
}($Command));
export { UpdateIntentCommand };
//# sourceMappingURL=UpdateIntentCommand.js.map