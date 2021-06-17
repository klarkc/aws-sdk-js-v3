import { __extends } from "tslib";
import { GetDevicesInPlacementRequest, GetDevicesInPlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDevicesInPlacementCommand, serializeAws_restJson1GetDevicesInPlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an object enumerating the devices in a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new GetDevicesInPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicesInPlacementCommandInput} for command's `input` shape.
 * @see {@link GetDevicesInPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicesInPlacementCommand = /** @class */ (function (_super) {
    __extends(GetDevicesInPlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicesInPlacementCommand(input) {
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
    GetDevicesInPlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "GetDevicesInPlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicesInPlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicesInPlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicesInPlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDevicesInPlacementCommand(input, context);
    };
    GetDevicesInPlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDevicesInPlacementCommand(output, context);
    };
    return GetDevicesInPlacementCommand;
}($Command));
export { GetDevicesInPlacementCommand };
//# sourceMappingURL=GetDevicesInPlacementCommand.js.map