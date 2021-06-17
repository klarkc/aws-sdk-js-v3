"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateAddressCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in
 *       subnets in Wavelength Zones) with an instance or a network interface. Before you can use an
 *       Elastic IP address, you must allocate it to your account.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already
 *       associated with a different instance, it is disassociated from that instance and associated
 *       with the specified instance. If you associate an Elastic IP address with an instance that has
 *       an existing Elastic IP address, the existing address is disassociated from the instance, but
 *       remains allocated to your account.</p>
 *          <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic
 *       IP address is associated with the primary IP address. If the Elastic IP address is already
 *       associated with a different instance or a network interface, you get an error unless you allow
 *       reassociation. You cannot associate an Elastic IP address with an instance or network
 *       interface that has an existing Elastic IP address.</p>
 *          <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication
 *       carrier to the instance or network interface. </p>
 *          <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p>
 *          <important>
 *             <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2
 *         doesn't return an error, and you may be charged for each time the Elastic IP address is
 *         remapped to the same instance. For more information, see the <i>Elastic IP
 *           Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2
 *           Pricing</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateAddressCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateAddressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateAddressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AssociateAddressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AssociateAddressCommand(output, context);
    }
}
exports.AssociateAddressCommand = AssociateAddressCommand;
//# sourceMappingURL=AssociateAddressCommand.js.map