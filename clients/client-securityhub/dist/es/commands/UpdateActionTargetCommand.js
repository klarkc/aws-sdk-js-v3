import { __extends } from "tslib";
import { UpdateActionTargetRequest, UpdateActionTargetResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateActionTargetCommand, serializeAws_restJson1UpdateActionTargetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and description of a custom action target in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateActionTargetCommand = /** @class */ (function (_super) {
    __extends(UpdateActionTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateActionTargetCommand(input) {
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
    UpdateActionTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "UpdateActionTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateActionTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateActionTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateActionTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateActionTargetCommand(input, context);
    };
    UpdateActionTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateActionTargetCommand(output, context);
    };
    return UpdateActionTargetCommand;
}($Command));
export { UpdateActionTargetCommand };
//# sourceMappingURL=UpdateActionTargetCommand.js.map