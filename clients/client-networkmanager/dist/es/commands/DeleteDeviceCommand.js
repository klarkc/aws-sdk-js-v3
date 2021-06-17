import { __extends } from "tslib";
import { DeleteDeviceRequest, DeleteDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDeviceCommand, serializeAws_restJson1DeleteDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing device. You must first disassociate the device from any links and
 *             customer gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceCommand = /** @class */ (function (_super) {
    __extends(DeleteDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeviceCommand(input) {
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
    DeleteDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DeleteDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDeviceCommand(input, context);
    };
    DeleteDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDeviceCommand(output, context);
    };
    return DeleteDeviceCommand;
}($Command));
export { DeleteDeviceCommand };
//# sourceMappingURL=DeleteDeviceCommand.js.map