import { __extends } from "tslib";
import { AssociateDeviceWithPlacementRequest, AssociateDeviceWithPlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateDeviceWithPlacementCommand, serializeAws_restJson1AssociateDeviceWithPlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a physical device with a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new AssociateDeviceWithPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithPlacementCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDeviceWithPlacementCommand = /** @class */ (function (_super) {
    __extends(AssociateDeviceWithPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDeviceWithPlacementCommand(input) {
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
    AssociateDeviceWithPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "AssociateDeviceWithPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDeviceWithPlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateDeviceWithPlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDeviceWithPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateDeviceWithPlacementCommand(input, context);
    };
    AssociateDeviceWithPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateDeviceWithPlacementCommand(output, context);
    };
    return AssociateDeviceWithPlacementCommand;
}($Command));
export { AssociateDeviceWithPlacementCommand };
//# sourceMappingURL=AssociateDeviceWithPlacementCommand.js.map