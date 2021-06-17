import { __extends } from "tslib";
import { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/models_4";
import { deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand, serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
 * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
 * 			in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableVpcClassicLinkDnsSupportCommand = /** @class */ (function (_super) {
    __extends(DisableVpcClassicLinkDnsSupportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableVpcClassicLinkDnsSupportCommand(input) {
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
    DisableVpcClassicLinkDnsSupportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableVpcClassicLinkDnsSupportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableVpcClassicLinkDnsSupportCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(input, context);
    };
    DisableVpcClassicLinkDnsSupportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(output, context);
    };
    return DisableVpcClassicLinkDnsSupportCommand;
}($Command));
export { DisableVpcClassicLinkDnsSupportCommand };
//# sourceMappingURL=DisableVpcClassicLinkDnsSupportCommand.js.map