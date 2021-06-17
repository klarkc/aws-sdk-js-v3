import { __extends } from "tslib";
import { CreateVpnGatewayRequest, CreateVpnGatewayResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpnGatewayCommand, serializeAws_ec2CreateVpnGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpnGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateVpnGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpnGatewayCommand(input) {
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
    CreateVpnGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpnGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpnGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpnGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpnGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpnGatewayCommand(input, context);
    };
    CreateVpnGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpnGatewayCommand(output, context);
    };
    return CreateVpnGatewayCommand;
}($Command));
export { CreateVpnGatewayCommand };
//# sourceMappingURL=CreateVpnGatewayCommand.js.map