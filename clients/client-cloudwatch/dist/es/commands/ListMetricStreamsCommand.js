import { __extends } from "tslib";
import { ListMetricStreamsInput, ListMetricStreamsOutput } from "../models/models_0";
import { deserializeAws_queryListMetricStreamsCommand, serializeAws_queryListMetricStreamsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of metric streams in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link ListMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMetricStreamsCommand = /** @class */ (function (_super) {
    __extends(ListMetricStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMetricStreamsCommand(input) {
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
    ListMetricStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "ListMetricStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMetricStreamsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListMetricStreamsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMetricStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListMetricStreamsCommand(input, context);
    };
    ListMetricStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListMetricStreamsCommand(output, context);
    };
    return ListMetricStreamsCommand;
}($Command));
export { ListMetricStreamsCommand };
//# sourceMappingURL=ListMetricStreamsCommand.js.map