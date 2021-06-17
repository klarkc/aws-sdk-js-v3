import { __extends } from "tslib";
import { ListDevicePoolsRequest, ListDevicePoolsResult } from "../models/models_0";
import { deserializeAws_json1_1ListDevicePoolsCommand, serializeAws_json1_1ListDevicePoolsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about device pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicePoolsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicePoolsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePoolsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePoolsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevicePoolsCommand = /** @class */ (function (_super) {
    __extends(ListDevicePoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDevicePoolsCommand(input) {
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
    ListDevicePoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListDevicePoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevicePoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDevicePoolsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevicePoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDevicePoolsCommand(input, context);
    };
    ListDevicePoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDevicePoolsCommand(output, context);
    };
    return ListDevicePoolsCommand;
}($Command));
export { ListDevicePoolsCommand };
//# sourceMappingURL=ListDevicePoolsCommand.js.map