import { __extends } from "tslib";
import { CreateDevicePoolRequest, CreateDevicePoolResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDevicePoolCommand, serializeAws_json1_1CreateDevicePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link CreateDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDevicePoolCommand = /** @class */ (function (_super) {
    __extends(CreateDevicePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDevicePoolCommand(input) {
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
    CreateDevicePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "CreateDevicePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDevicePoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDevicePoolResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDevicePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDevicePoolCommand(input, context);
    };
    CreateDevicePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDevicePoolCommand(output, context);
    };
    return CreateDevicePoolCommand;
}($Command));
export { CreateDevicePoolCommand };
//# sourceMappingURL=CreateDevicePoolCommand.js.map