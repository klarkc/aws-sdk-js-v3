import { __extends } from "tslib";
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFlowLogsCommand, serializeAws_ec2DescribeFlowLogsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more flow logs. To view the information in your flow logs (the log
 *             streams for the network interfaces), you must use the CloudWatch Logs console or the CloudWatch Logs
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFlowLogsCommand = /** @class */ (function (_super) {
    __extends(DescribeFlowLogsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFlowLogsCommand(input) {
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
    DescribeFlowLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFlowLogsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFlowLogsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFlowLogsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFlowLogsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFlowLogsCommand(input, context);
    };
    DescribeFlowLogsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFlowLogsCommand(output, context);
    };
    return DescribeFlowLogsCommand;
}($Command));
export { DescribeFlowLogsCommand };
//# sourceMappingURL=DescribeFlowLogsCommand.js.map