import { __extends } from "tslib";
import { StopCanaryRequest, StopCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1StopCanaryCommand, serializeAws_restJson1StopCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the canary to prevent all future runs. If the canary is currently running,
 *          Synthetics stops waiting for the current run of the specified canary to complete. The
 *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
 *          it is not recorded in Synthetics as a completed run.</p>
 *          <p>You can use <code>StartCanary</code> to start it running again
 *          with the canary’s current schedule at any point in the future.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StopCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StopCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new StopCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCanaryCommandInput} for command's `input` shape.
 * @see {@link StopCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopCanaryCommand = /** @class */ (function (_super) {
    __extends(StopCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopCanaryCommand(input) {
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
    StopCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "StopCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopCanaryCommand(input, context);
    };
    StopCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopCanaryCommand(output, context);
    };
    return StopCanaryCommand;
}($Command));
export { StopCanaryCommand };
//# sourceMappingURL=StopCanaryCommand.js.map