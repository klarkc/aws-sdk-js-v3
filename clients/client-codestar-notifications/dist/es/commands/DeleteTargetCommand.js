import { __extends } from "tslib";
import { DeleteTargetRequest, DeleteTargetResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteTargetCommand, serializeAws_restJson1DeleteTargetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified target for notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteTargetCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteTargetCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DeleteTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTargetCommand = /** @class */ (function (_super) {
    __extends(DeleteTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTargetCommand(input) {
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
    DeleteTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "DeleteTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTargetCommand(input, context);
    };
    DeleteTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTargetCommand(output, context);
    };
    return DeleteTargetCommand;
}($Command));
export { DeleteTargetCommand };
//# sourceMappingURL=DeleteTargetCommand.js.map