import { __extends } from "tslib";
import { CreateVpnConnectionRequest, CreateVpnConnectionResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpnConnectionCommand, serializeAws_ec2CreateVpnConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a VPN connection between an existing virtual private gateway or transit gateway and a
 *             customer gateway. The supported connection type is <code>ipsec.1</code>.</p>
 *         <p>The response includes information that you need to give to your network administrator
 *             to configure your customer gateway.</p>
 *         <important>
 *             <p>We strongly recommend that you use HTTPS when calling this operation because the
 *                 response contains sensitive cryptographic information for configuring your customer
 *                 gateway device.</p>
 *         </important>
 *         <p>If you decide to shut down your VPN connection for any reason and later create a new
 *             VPN connection, you must reconfigure your customer gateway with the new information
 *             returned from this call.</p>
 *         <p>This is an idempotent operation. If you perform the operation more than once, Amazon
 *             EC2 doesn't return an error.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpnConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateVpnConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpnConnectionCommand(input) {
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
    CreateVpnConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpnConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpnConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpnConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpnConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpnConnectionCommand(input, context);
    };
    CreateVpnConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpnConnectionCommand(output, context);
    };
    return CreateVpnConnectionCommand;
}($Command));
export { CreateVpnConnectionCommand };
//# sourceMappingURL=CreateVpnConnectionCommand.js.map