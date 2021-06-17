import { __extends } from "tslib";
import { GetInstanceProfileRequest, GetInstanceProfileResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceProfileCommand, serializeAws_json1_1GetInstanceProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified instance profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(GetInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceProfileCommand(input) {
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
    GetInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceProfileCommand(input, context);
    };
    GetInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceProfileCommand(output, context);
    };
    return GetInstanceProfileCommand;
}($Command));
export { GetInstanceProfileCommand };
//# sourceMappingURL=GetInstanceProfileCommand.js.map