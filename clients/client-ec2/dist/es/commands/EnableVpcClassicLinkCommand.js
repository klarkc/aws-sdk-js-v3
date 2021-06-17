import { __extends } from "tslib";
import { EnableVpcClassicLinkRequest, EnableVpcClassicLinkResult } from "../models/models_4";
import { deserializeAws_ec2EnableVpcClassicLinkCommand, serializeAws_ec2EnableVpcClassicLinkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
 * 			ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot
 * 			enable your VPC for ClassicLink if any of your VPC route tables have existing routes for
 * 			address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local
 * 			routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address
 * 			ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableVpcClassicLinkCommand = /** @class */ (function (_super) {
    __extends(EnableVpcClassicLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableVpcClassicLinkCommand(input) {
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
    EnableVpcClassicLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableVpcClassicLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableVpcClassicLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableVpcClassicLinkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableVpcClassicLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableVpcClassicLinkCommand(input, context);
    };
    EnableVpcClassicLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableVpcClassicLinkCommand(output, context);
    };
    return EnableVpcClassicLinkCommand;
}($Command));
export { EnableVpcClassicLinkCommand };
//# sourceMappingURL=EnableVpcClassicLinkCommand.js.map