import { __extends } from "tslib";
import { UpdateBotAliasRequest, UpdateBotAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateBotAliasCommand, serializeAws_restJson1UpdateBotAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of an existing bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBotAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateBotAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBotAliasCommand(input) {
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
    UpdateBotAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateBotAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBotAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBotAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBotAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBotAliasCommand(input, context);
    };
    UpdateBotAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBotAliasCommand(output, context);
    };
    return UpdateBotAliasCommand;
}($Command));
export { UpdateBotAliasCommand };
//# sourceMappingURL=UpdateBotAliasCommand.js.map