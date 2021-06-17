import { __extends } from "tslib";
import { DescribeFleetInstancesRequest, DescribeFleetInstancesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFleetInstancesCommand, serializeAws_ec2DescribeFleetInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the running instances for the specified EC2 Fleet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetInstancesCommand(input) {
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
    DescribeFleetInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFleetInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFleetInstancesCommand(input, context);
    };
    DescribeFleetInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFleetInstancesCommand(output, context);
    };
    return DescribeFleetInstancesCommand;
}($Command));
export { DescribeFleetInstancesCommand };
//# sourceMappingURL=DescribeFleetInstancesCommand.js.map