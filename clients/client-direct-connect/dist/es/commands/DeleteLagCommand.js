import { __extends } from "tslib";
import { DeleteLagRequest, Lag } from "../models/models_0";
import { deserializeAws_json1_1DeleteLagCommand, serializeAws_json1_1DeleteLagCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
 *       virtual interfaces or hosted connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLagCommandInput} for command's `input` shape.
 * @see {@link DeleteLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLagCommand = /** @class */ (function (_super) {
    __extends(DeleteLagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLagCommand(input) {
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
    DeleteLagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DeleteLagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Lag.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLagCommand(input, context);
    };
    DeleteLagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLagCommand(output, context);
    };
    return DeleteLagCommand;
}($Command));
export { DeleteLagCommand };
//# sourceMappingURL=DeleteLagCommand.js.map