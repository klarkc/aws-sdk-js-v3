"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionByoipCidrCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provisions an IPv4 or IPv6 address range for use with your AWS resources through bring your own IP
 *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
 *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
 *          <p>AWS verifies that you own the address range and are authorized to advertise it.
 *          You must ensure that the address range is registered to you and that you created an
 *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
 *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
 *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
 *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
 *          with either the specific address from the address pool or the ID of the address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ProvisionByoipCidrCommand extends smithy_client_1.Command {
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
        const commandName = "ProvisionByoipCidrCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ProvisionByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ProvisionByoipCidrResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ProvisionByoipCidrCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ProvisionByoipCidrCommand(output, context);
    }
}
exports.ProvisionByoipCidrCommand = ProvisionByoipCidrCommand;
//# sourceMappingURL=ProvisionByoipCidrCommand.js.map