"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVpcCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateVpcCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "CreateVpcCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateVpcResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateVpcCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateVpcCommand(output, context);
    }
}
exports.CreateVpcCommand = CreateVpcCommand;
//# sourceMappingURL=CreateVpcCommand.js.map