import { __extends } from "tslib";
import { ListDeviceInstancesRequest, ListDeviceInstancesResult } from "../models/models_0";
import { deserializeAws_json1_1ListDeviceInstancesCommand, serializeAws_json1_1ListDeviceInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the private device instances associated with one or more AWS
 *             accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDeviceInstancesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDeviceInstancesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListDeviceInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceInstancesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeviceInstancesCommand = /** @class */ (function (_super) {
    __extends(ListDeviceInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeviceInstancesCommand(input) {
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
    ListDeviceInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListDeviceInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeviceInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeviceInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeviceInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDeviceInstancesCommand(input, context);
    };
    ListDeviceInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDeviceInstancesCommand(output, context);
    };
    return ListDeviceInstancesCommand;
}($Command));
export { ListDeviceInstancesCommand };
//# sourceMappingURL=ListDeviceInstancesCommand.js.map