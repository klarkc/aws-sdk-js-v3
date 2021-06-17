import { __extends } from "tslib";
import { CreateFlowLogsRequest, CreateFlowLogsResult } from "../models/models_0";
import { deserializeAws_ec2CreateFlowLogsCommand, serializeAws_ec2CreateFlowLogsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface,
 *             subnet, or VPC. </p>
 *
 *         <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events
 *             consisting of fields that describe the traffic flow. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>
 *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *
 *         <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network
 *             interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all
 *             of the monitored network interfaces are published to a single log file object that is stored in the specified
 *             bucket.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowLogsCommandInput} for command's `input` shape.
 * @see {@link CreateFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFlowLogsCommand = /** @class */ (function (_super) {
    __extends(CreateFlowLogsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFlowLogsCommand(input) {
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
    CreateFlowLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateFlowLogsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFlowLogsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFlowLogsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFlowLogsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateFlowLogsCommand(input, context);
    };
    CreateFlowLogsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateFlowLogsCommand(output, context);
    };
    return CreateFlowLogsCommand;
}($Command));
export { CreateFlowLogsCommand };
//# sourceMappingURL=CreateFlowLogsCommand.js.map