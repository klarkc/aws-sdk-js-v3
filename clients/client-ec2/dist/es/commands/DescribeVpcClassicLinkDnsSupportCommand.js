import { __extends } from "tslib";
import { DescribeVpcClassicLinkDnsSupportRequest, DescribeVpcClassicLinkDnsSupportResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand, serializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS
 *             hostname of a linked EC2-Classic instance resolves to its private IP address when
 *             addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 *             of an instance in a VPC resolves to its private IP address when addressed from a linked
 *             EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcClassicLinkDnsSupportCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcClassicLinkDnsSupportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcClassicLinkDnsSupportCommand(input) {
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
    DescribeVpcClassicLinkDnsSupportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcClassicLinkDnsSupportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcClassicLinkDnsSupportResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcClassicLinkDnsSupportCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(input, context);
    };
    DescribeVpcClassicLinkDnsSupportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(output, context);
    };
    return DescribeVpcClassicLinkDnsSupportCommand;
}($Command));
export { DescribeVpcClassicLinkDnsSupportCommand };
//# sourceMappingURL=DescribeVpcClassicLinkDnsSupportCommand.js.map