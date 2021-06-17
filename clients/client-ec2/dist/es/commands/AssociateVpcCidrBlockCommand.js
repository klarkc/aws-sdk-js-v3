import { __extends } from "tslib";
import { AssociateVpcCidrBlockRequest, AssociateVpcCidrBlockResult } from "../models/models_0";
import { deserializeAws_ec2AssociateVpcCidrBlockCommand, serializeAws_ec2AssociateVpcCidrBlockCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block,
 *             an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that
 *             you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed
 *             at /56.</p>
 *         <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6
 *             pool, or an Amazon-provided IPv6 CIDR block.</p>
 *         <p>For more information about associating CIDR blocks with your VPC and applicable
 *             restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and Subnet Sizing</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateVpcCidrBlockCommand = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateVpcCidrBlockCommand(input) {
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
    AssociateVpcCidrBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateVpcCidrBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateVpcCidrBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateVpcCidrBlockResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateVpcCidrBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateVpcCidrBlockCommand(input, context);
    };
    AssociateVpcCidrBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateVpcCidrBlockCommand(output, context);
    };
    return AssociateVpcCidrBlockCommand;
}($Command));
export { AssociateVpcCidrBlockCommand };
//# sourceMappingURL=AssociateVpcCidrBlockCommand.js.map