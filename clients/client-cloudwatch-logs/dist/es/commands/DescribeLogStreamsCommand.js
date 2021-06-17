import { __extends } from "tslib";
import { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLogStreamsCommand, serializeAws_json1_1DescribeLogStreamsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the log streams for the specified log group.
 *       You can list all the log streams or filter the results by prefix.
 *       You can also control how the results are ordered.</p>
 *          <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLogStreamsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLogStreamsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeLogStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLogStreamsCommandInput} for command's `input` shape.
 * @see {@link DescribeLogStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLogStreamsCommand = /** @class */ (function (_super) {
    __extends(DescribeLogStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLogStreamsCommand(input) {
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
    DescribeLogStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DescribeLogStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLogStreamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLogStreamsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLogStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLogStreamsCommand(input, context);
    };
    DescribeLogStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLogStreamsCommand(output, context);
    };
    return DescribeLogStreamsCommand;
}($Command));
export { DescribeLogStreamsCommand };
//# sourceMappingURL=DescribeLogStreamsCommand.js.map