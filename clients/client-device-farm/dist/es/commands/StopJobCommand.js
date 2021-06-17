import { __extends } from "tslib";
import { StopJobRequest, StopJobResult } from "../models/models_0";
import { deserializeAws_json1_1StopJobCommand, serializeAws_json1_1StopJobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
 *             where tests have not started. You are not billed for this device. On the device where tests have started,
 *             setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
 *             and any tests that were in progress or already completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopJobCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopJobCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopJobCommand = /** @class */ (function (_super) {
    __extends(StopJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopJobCommand(input) {
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
    StopJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "StopJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopJobCommand(input, context);
    };
    StopJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopJobCommand(output, context);
    };
    return StopJobCommand;
}($Command));
export { StopJobCommand };
//# sourceMappingURL=StopJobCommand.js.map