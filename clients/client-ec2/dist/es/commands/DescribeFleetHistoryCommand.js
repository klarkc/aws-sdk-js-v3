import { __extends } from "tslib";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFleetHistoryCommand, serializeAws_ec2DescribeFleetHistoryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetHistoryCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetHistoryCommand(input) {
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
    DescribeFleetHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFleetHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetHistoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFleetHistoryCommand(input, context);
    };
    DescribeFleetHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFleetHistoryCommand(output, context);
    };
    return DescribeFleetHistoryCommand;
}($Command));
export { DescribeFleetHistoryCommand };
//# sourceMappingURL=DescribeFleetHistoryCommand.js.map