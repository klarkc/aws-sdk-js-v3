import { __extends } from "tslib";
import { ListDeviceProfilesRequest, ListDeviceProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeviceProfilesCommand, serializeAws_restJson1ListDeviceProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the device profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDeviceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDeviceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListDeviceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeviceProfilesCommand = /** @class */ (function (_super) {
    __extends(ListDeviceProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeviceProfilesCommand(input) {
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
    ListDeviceProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "ListDeviceProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeviceProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeviceProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeviceProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeviceProfilesCommand(input, context);
    };
    ListDeviceProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeviceProfilesCommand(output, context);
    };
    return ListDeviceProfilesCommand;
}($Command));
export { ListDeviceProfilesCommand };
//# sourceMappingURL=ListDeviceProfilesCommand.js.map