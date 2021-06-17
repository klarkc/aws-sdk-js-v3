"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocateAddressCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Allocates an Elastic IP address to your AWS account. After you allocate the Elastic IP address you can associate
 *          it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address
 *          pool and can be allocated to a different AWS account.</p>
 *          <p>You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created
 *          from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own
 *          IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>[EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an
 *          Elastic IP address that you released after it is allocated to another AWS account. You cannot recover an Elastic IP
 *          address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.</p>
 *          <p>An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate
 *          5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateAddressCommandInput} for command's `input` shape.
 * @see {@link AllocateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AllocateAddressCommand extends smithy_client_1.Command {
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
        const commandName = "AllocateAddressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AllocateAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AllocateAddressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AllocateAddressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AllocateAddressCommand(output, context);
    }
}
exports.AllocateAddressCommand = AllocateAddressCommand;
//# sourceMappingURL=AllocateAddressCommand.js.map