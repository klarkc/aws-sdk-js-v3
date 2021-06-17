"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerGatewayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides information to AWS about your VPN customer gateway device. The customer
 *             gateway is the appliance at your end of the VPN connection. (The device on the AWS side
 *             of the VPN connection is the virtual private gateway.) You must provide the
 *             internet-routable IP address of the customer gateway's external interface. The IP
 *             address must be static and can be behind a device performing network address translation
 *             (NAT).</p>
 *         <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
 *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your
 *             network. If you don't have an ASN already, you can use a private ASN (in the 64512 -
 *             65534 range).</p>
 *         <note>
 *             <p>Amazon EC2 supports all 4-byte ASN numbers in the range of 1 - 2147483647, with the
 *                 exception of the following:</p>
 *                 <ul>
 *                <li>
 *                   <p>7224 - reserved in the <code>us-east-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>9059 - reserved in the <code>eu-west-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>17943 - reserved in the <code>ap-southeast-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>10124 - reserved in the <code>ap-northeast-1</code> Region</p>
 *                </li>
 *             </ul>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 *         <important>
 *             <p>To create more than one customer gateway with the same VPN type, IP address, and
 *                 BGP ASN, specify a unique device name for each customer gateway. Identical requests
 *                 return information about the existing customer gateway and do not create new
 *                 customer gateways.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateCustomerGatewayCommand extends smithy_client_1.Command {
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
        const commandName = "CreateCustomerGatewayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateCustomerGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateCustomerGatewayResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateCustomerGatewayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateCustomerGatewayCommand(output, context);
    }
}
exports.CreateCustomerGatewayCommand = CreateCustomerGatewayCommand;
//# sourceMappingURL=CreateCustomerGatewayCommand.js.map