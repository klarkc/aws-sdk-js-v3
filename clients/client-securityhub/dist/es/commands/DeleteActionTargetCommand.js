import { __extends } from "tslib";
import { DeleteActionTargetRequest, DeleteActionTargetResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteActionTargetCommand, serializeAws_restJson1DeleteActionTargetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a custom action target from Security Hub.</p>
 *          <p>Deleting a custom action target does not affect any findings or insights that were
 *          already sent to Amazon CloudWatch Events using the custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActionTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteActionTargetCommand = /** @class */ (function (_super) {
    __extends(DeleteActionTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteActionTargetCommand(input) {
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
    DeleteActionTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DeleteActionTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteActionTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteActionTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteActionTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteActionTargetCommand(input, context);
    };
    DeleteActionTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteActionTargetCommand(output, context);
    };
    return DeleteActionTargetCommand;
}($Command));
export { DeleteActionTargetCommand };
//# sourceMappingURL=DeleteActionTargetCommand.js.map