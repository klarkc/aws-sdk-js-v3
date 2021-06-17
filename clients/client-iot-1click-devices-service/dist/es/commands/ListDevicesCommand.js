import { __extends } from "tslib";
import { ListDevicesRequest, ListDevicesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDevicesCommand, serializeAws_restJson1ListDevicesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the 1-Click compatible devices associated with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDevicesCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDevicesCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevicesCommand = /** @class */ (function (_super) {
    __extends(ListDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDevicesCommand(input) {
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
    ListDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "ListDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDevicesCommand(input, context);
    };
    ListDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDevicesCommand(output, context);
    };
    return ListDevicesCommand;
}($Command));
export { ListDevicesCommand };
//# sourceMappingURL=ListDevicesCommand.js.map