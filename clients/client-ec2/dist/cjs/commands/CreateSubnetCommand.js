"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubnetCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a subnet in a specified VPC.</p>
 *         <p>You must specify an IPv4 CIDR block for the subnet. After you create a subnet, you
 *             can't change its CIDR block. The allowed block size is between a /16 netmask (65,536 IP
 *             addresses) and /28 netmask (16 IP addresses). The CIDR block must not overlap with the
 *             CIDR block of an existing subnet in the VPC.</p>
 *         <p>If you've associated an IPv6 CIDR block with your VPC, you can create a subnet with an
 *             IPv6 CIDR block that uses a /64 prefix length. </p>
 *         <important>
 *             <p>AWS reserves both the first four and the last IPv4 address in each subnet's CIDR
 *                 block. They're not available for use.</p>
 *         </important>
 *         <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
 *             logical router in the middle.</p>
 *         <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
 *             therefore possible to have a subnet with no running instances (they're all stopped), but
 *             no remaining IP addresses available.</p>
 *         <p>For more information about subnets, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSubnetCommand extends smithy_client_1.Command {
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
        const commandName = "CreateSubnetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateSubnetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateSubnetResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateSubnetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateSubnetCommand(output, context);
    }
}
exports.CreateSubnetCommand = CreateSubnetCommand;
//# sourceMappingURL=CreateSubnetCommand.js.map