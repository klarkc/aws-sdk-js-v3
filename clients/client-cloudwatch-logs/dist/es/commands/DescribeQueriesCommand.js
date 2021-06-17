import { __extends } from "tslib";
import { DescribeQueriesRequest, DescribeQueriesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeQueriesCommand, serializeAws_json1_1DescribeQueriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have
 *       been executed recently in this account. You can request all queries or limit it to queries of
 *       a specific log group or queries with a certain status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeQueriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeQueriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQueriesCommandInput} for command's `input` shape.
 * @see {@link DescribeQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeQueriesCommand = /** @class */ (function (_super) {
    __extends(DescribeQueriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeQueriesCommand(input) {
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
    DescribeQueriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DescribeQueriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeQueriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeQueriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeQueriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeQueriesCommand(input, context);
    };
    DescribeQueriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeQueriesCommand(output, context);
    };
    return DescribeQueriesCommand;
}($Command));
export { DescribeQueriesCommand };
//# sourceMappingURL=DescribeQueriesCommand.js.map