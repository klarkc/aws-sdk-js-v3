import { __extends } from "tslib";
import { DeleteResourcePolicyStatementRequest, DeleteResourcePolicyStatementResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteResourcePolicyStatementCommand, serializeAws_restJson1DeleteResourcePolicyStatementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a policy statement from a resource policy. If you delete the
 *          last statement from a policy, the policy is deleted. If you specify a
 *          statement ID that doesn't exist in the policy, or if the bot or bot
 *          alias doesn't have a policy attached, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourcePolicyStatementCommand = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourcePolicyStatementCommand(input) {
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
    DeleteResourcePolicyStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteResourcePolicyStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourcePolicyStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourcePolicyStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourcePolicyStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteResourcePolicyStatementCommand(input, context);
    };
    DeleteResourcePolicyStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteResourcePolicyStatementCommand(output, context);
    };
    return DeleteResourcePolicyStatementCommand;
}($Command));
export { DeleteResourcePolicyStatementCommand };
//# sourceMappingURL=DeleteResourcePolicyStatementCommand.js.map