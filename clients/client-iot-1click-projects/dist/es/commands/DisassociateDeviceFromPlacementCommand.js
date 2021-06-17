import { __extends } from "tslib";
import { DisassociateDeviceFromPlacementRequest, DisassociateDeviceFromPlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateDeviceFromPlacementCommand, serializeAws_restJson1DisassociateDeviceFromPlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a physical device from a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DisassociateDeviceFromPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDeviceFromPlacementCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateDeviceFromPlacementCommand = /** @class */ (function (_super) {
    __extends(DisassociateDeviceFromPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateDeviceFromPlacementCommand(input) {
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
    DisassociateDeviceFromPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "DisassociateDeviceFromPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateDeviceFromPlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateDeviceFromPlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateDeviceFromPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateDeviceFromPlacementCommand(input, context);
    };
    DisassociateDeviceFromPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateDeviceFromPlacementCommand(output, context);
    };
    return DisassociateDeviceFromPlacementCommand;
}($Command));
export { DisassociateDeviceFromPlacementCommand };
//# sourceMappingURL=DisassociateDeviceFromPlacementCommand.js.map