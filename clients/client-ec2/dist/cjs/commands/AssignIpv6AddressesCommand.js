"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignIpv6AddressesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
 *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
 *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
 *             You can assign as many IPv6 addresses to a network interface as you can assign private
 *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>You must specify either the IPv6 addresses or the IPv6 address count in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link AssignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssignIpv6AddressesCommand extends smithy_client_1.Command {
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
        const commandName = "AssignIpv6AddressesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssignIpv6AddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssignIpv6AddressesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AssignIpv6AddressesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AssignIpv6AddressesCommand(output, context);
    }
}
exports.AssignIpv6AddressesCommand = AssignIpv6AddressesCommand;
//# sourceMappingURL=AssignIpv6AddressesCommand.js.map