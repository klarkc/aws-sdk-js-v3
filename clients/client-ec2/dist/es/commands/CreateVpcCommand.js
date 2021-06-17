import { __extends } from "tslib";
import { CreateVpcRequest, CreateVpcResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpcCommand, serializeAws_ec2CreateVpcCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create
 * 			uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4
 * 			addresses). For more information about how large to make your VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and
 * 				Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can optionally request an IPv6 CIDR block for the VPC. You can request an Amazon-provided IPv6 CIDR block from Amazon's pool of IPv6 addresses, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>).</p>
 * 		       <p>By default, each instance you launch in the VPC has the default DHCP options, which
 * 			include only a default DNS server that we provide (AmazonProvidedDNS). For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can specify the instance tenancy value for the VPC when you create it. You can't change
 *       this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 *           <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcCommandInput} for command's `input` shape.
 * @see {@link CreateVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpcCommand = /** @class */ (function (_super) {
    __extends(CreateVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcCommand(input) {
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
    CreateVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpcCommand(input, context);
    };
    CreateVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpcCommand(output, context);
    };
    return CreateVpcCommand;
}($Command));
export { CreateVpcCommand };
//# sourceMappingURL=CreateVpcCommand.js.map