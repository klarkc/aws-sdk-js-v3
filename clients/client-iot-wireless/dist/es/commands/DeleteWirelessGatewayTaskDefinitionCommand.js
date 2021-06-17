import { __extends } from "tslib";
import { DeleteWirelessGatewayTaskDefinitionRequest, DeleteWirelessGatewayTaskDefinitionResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand, serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWirelessGatewayTaskDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteWirelessGatewayTaskDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWirelessGatewayTaskDefinitionCommand(input) {
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
    DeleteWirelessGatewayTaskDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DeleteWirelessGatewayTaskDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWirelessGatewayTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWirelessGatewayTaskDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWirelessGatewayTaskDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand(input, context);
    };
    DeleteWirelessGatewayTaskDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand(output, context);
    };
    return DeleteWirelessGatewayTaskDefinitionCommand;
}($Command));
export { DeleteWirelessGatewayTaskDefinitionCommand };
//# sourceMappingURL=DeleteWirelessGatewayTaskDefinitionCommand.js.map