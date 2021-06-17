import { __extends } from "tslib";
import { UpdateResourcePolicyRequest, UpdateResourcePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateResourcePolicyCommand, serializeAws_restJson1UpdateResourcePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the existing resource policy for a bot or bot alias with a
 *          new one. If the policy doesn't exist, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourcePolicyCommand(input) {
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
    UpdateResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateResourcePolicyCommand(input, context);
    };
    UpdateResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateResourcePolicyCommand(output, context);
    };
    return UpdateResourcePolicyCommand;
}($Command));
export { UpdateResourcePolicyCommand };
//# sourceMappingURL=UpdateResourcePolicyCommand.js.map