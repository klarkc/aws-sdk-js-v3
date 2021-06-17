import { __extends } from "tslib";
import { DeleteWirelessGatewayTaskRequest, DeleteWirelessGatewayTaskResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteWirelessGatewayTaskCommand, serializeAws_restJson1DeleteWirelessGatewayTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a wireless gateway task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWirelessGatewayTaskCommand = /** @class */ (function (_super) {
    __extends(DeleteWirelessGatewayTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWirelessGatewayTaskCommand(input) {
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
    DeleteWirelessGatewayTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DeleteWirelessGatewayTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWirelessGatewayTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWirelessGatewayTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWirelessGatewayTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWirelessGatewayTaskCommand(input, context);
    };
    DeleteWirelessGatewayTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWirelessGatewayTaskCommand(output, context);
    };
    return DeleteWirelessGatewayTaskCommand;
}($Command));
export { DeleteWirelessGatewayTaskCommand };
//# sourceMappingURL=DeleteWirelessGatewayTaskCommand.js.map