import { __extends } from "tslib";
import { StartMetricStreamsInput, StartMetricStreamsOutput } from "../models/models_0";
import { deserializeAws_queryStartMetricStreamsCommand, serializeAws_queryStartMetricStreamsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StartMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StartMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StartMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StartMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMetricStreamsCommand = /** @class */ (function (_super) {
    __extends(StartMetricStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMetricStreamsCommand(input) {
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
    StartMetricStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "StartMetricStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMetricStreamsInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartMetricStreamsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMetricStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartMetricStreamsCommand(input, context);
    };
    StartMetricStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartMetricStreamsCommand(output, context);
    };
    return StartMetricStreamsCommand;
}($Command));
export { StartMetricStreamsCommand };
//# sourceMappingURL=StartMetricStreamsCommand.js.map