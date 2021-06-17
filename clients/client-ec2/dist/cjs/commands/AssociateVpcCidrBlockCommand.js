"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateVpcCidrBlockCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class AssociateVpcCidrBlockCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateVpcCidrBlockCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateVpcCidrBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateVpcCidrBlockResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AssociateVpcCidrBlockCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AssociateVpcCidrBlockCommand(output, context);
    }
}
exports.AssociateVpcCidrBlockCommand = AssociateVpcCidrBlockCommand;
//# sourceMappingURL=AssociateVpcCidrBlockCommand.js.map