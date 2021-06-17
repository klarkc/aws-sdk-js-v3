import { __extends } from "tslib";
import { CreateCustomerGatewayRequest, CreateCustomerGatewayResult } from "../models/models_0";
import { deserializeAws_ec2CreateCustomerGatewayCommand, serializeAws_ec2CreateCustomerGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateCustomerGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateCustomerGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomerGatewayCommand(input) {
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
    CreateCustomerGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateCustomerGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomerGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomerGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomerGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateCustomerGatewayCommand(input, context);
    };
    CreateCustomerGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateCustomerGatewayCommand(output, context);
    };
    return CreateCustomerGatewayCommand;
}($Command));
export { CreateCustomerGatewayCommand };
//# sourceMappingURL=CreateCustomerGatewayCommand.js.map