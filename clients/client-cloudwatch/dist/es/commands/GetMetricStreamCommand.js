import { __extends } from "tslib";
import { GetMetricStreamInput, GetMetricStreamOutput } from "../models/models_0";
import { deserializeAws_queryGetMetricStreamCommand, serializeAws_queryGetMetricStreamCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricStreamCommandInput} for command's `input` shape.
 * @see {@link GetMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMetricStreamCommand = /** @class */ (function (_super) {
    __extends(GetMetricStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMetricStreamCommand(input) {
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
    GetMetricStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "GetMetricStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMetricStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMetricStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMetricStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetMetricStreamCommand(input, context);
    };
    GetMetricStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetMetricStreamCommand(output, context);
    };
    return GetMetricStreamCommand;
}($Command));
export { GetMetricStreamCommand };
//# sourceMappingURL=GetMetricStreamCommand.js.map