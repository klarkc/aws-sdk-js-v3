import { __extends } from "tslib";
import { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/models_0";
import { deserializeAws_json1_0SendTaskHeartbeatCommand, serializeAws_json1_0SendTaskHeartbeatCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report to Step Functions that the task represented by the specified
 *         <code>taskToken</code> is still making progress. This action resets the
 *         <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state
 *       machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself
 *       create an event in the execution history. However, if the task times out, the execution
 *       history contains an <code>ActivityTimedOut</code> entry for activities, or a
 *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
 *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern.</p>
 *          <note>
 *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
 *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
 *         for heartbeats.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskHeartbeatCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskHeartbeatCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new SendTaskHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTaskHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendTaskHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendTaskHeartbeatCommand = /** @class */ (function (_super) {
    __extends(SendTaskHeartbeatCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendTaskHeartbeatCommand(input) {
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
    SendTaskHeartbeatCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "SendTaskHeartbeatCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendTaskHeartbeatInput.filterSensitiveLog,
            outputFilterSensitiveLog: SendTaskHeartbeatOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendTaskHeartbeatCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0SendTaskHeartbeatCommand(input, context);
    };
    SendTaskHeartbeatCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0SendTaskHeartbeatCommand(output, context);
    };
    return SendTaskHeartbeatCommand;
}($Command));
export { SendTaskHeartbeatCommand };
//# sourceMappingURL=SendTaskHeartbeatCommand.js.map