import { __extends } from "tslib";
import { DescribeAccountAttributesRequest, DescribeAccountAttributesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeAccountAttributesCommand, serializeAws_ec2DescribeAccountAttributesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes attributes of your AWS account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: Indicates whether your account can launch instances
 *           into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or
 *             <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *           that you can assign to a network interface.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-Classic. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAttributesCommand(input) {
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
    DescribeAccountAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeAccountAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeAccountAttributesCommand(input, context);
    };
    DescribeAccountAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeAccountAttributesCommand(output, context);
    };
    return DescribeAccountAttributesCommand;
}($Command));
export { DescribeAccountAttributesCommand };
//# sourceMappingURL=DescribeAccountAttributesCommand.js.map