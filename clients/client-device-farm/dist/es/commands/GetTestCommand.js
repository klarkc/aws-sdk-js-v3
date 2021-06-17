import { __extends } from "tslib";
import { GetTestRequest, GetTestResult } from "../models/models_0";
import { deserializeAws_json1_1GetTestCommand, serializeAws_json1_1GetTestCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTestCommandInput} for command's `input` shape.
 * @see {@link GetTestCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTestCommand = /** @class */ (function (_super) {
    __extends(GetTestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTestCommand(input) {
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
    GetTestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetTestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTestResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTestCommand(input, context);
    };
    GetTestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTestCommand(output, context);
    };
    return GetTestCommand;
}($Command));
export { GetTestCommand };
//# sourceMappingURL=GetTestCommand.js.map