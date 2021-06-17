import { __extends } from "tslib";
import { GetRunRequest, GetRunResult } from "../models/models_0";
import { deserializeAws_json1_1GetRunCommand, serializeAws_json1_1GetRunCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRunCommandInput} for command's `input` shape.
 * @see {@link GetRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRunCommand = /** @class */ (function (_super) {
    __extends(GetRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRunCommand(input) {
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
    GetRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRunResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRunCommand(input, context);
    };
    GetRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRunCommand(output, context);
    };
    return GetRunCommand;
}($Command));
export { GetRunCommand };
//# sourceMappingURL=GetRunCommand.js.map