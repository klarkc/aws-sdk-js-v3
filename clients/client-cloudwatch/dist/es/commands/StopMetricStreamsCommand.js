import { __extends } from "tslib";
import { StopMetricStreamsInput, StopMetricStreamsOutput } from "../models/models_0";
import { deserializeAws_queryStopMetricStreamsCommand, serializeAws_queryStopMetricStreamsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StopMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StopMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StopMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StopMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopMetricStreamsCommand = /** @class */ (function (_super) {
    __extends(StopMetricStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopMetricStreamsCommand(input) {
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
    StopMetricStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "StopMetricStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopMetricStreamsInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopMetricStreamsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopMetricStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStopMetricStreamsCommand(input, context);
    };
    StopMetricStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStopMetricStreamsCommand(output, context);
    };
    return StopMetricStreamsCommand;
}($Command));
export { StopMetricStreamsCommand };
//# sourceMappingURL=StopMetricStreamsCommand.js.map