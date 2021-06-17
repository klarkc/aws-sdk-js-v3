import { __extends } from "tslib";
import { DescribeReservedInstancesRequest, DescribeReservedInstancesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeReservedInstancesCommand, serializeAws_ec2DescribeReservedInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of the Reserved Instances that you purchased.</p>
 *          <p>For more information about Reserved Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved
 * 				Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedInstancesCommand(input) {
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
    DescribeReservedInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeReservedInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeReservedInstancesCommand(input, context);
    };
    DescribeReservedInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeReservedInstancesCommand(output, context);
    };
    return DescribeReservedInstancesCommand;
}($Command));
export { DescribeReservedInstancesCommand };
//# sourceMappingURL=DescribeReservedInstancesCommand.js.map