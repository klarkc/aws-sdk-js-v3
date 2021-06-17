import { __extends } from "tslib";
import { CreateVpnConnectionRouteRequest } from "../models/models_1";
import { deserializeAws_ec2CreateVpnConnectionRouteCommand, serializeAws_ec2CreateVpnConnectionRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpnConnectionRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpnConnectionRouteCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpnConnectionRouteCommand = /** @class */ (function (_super) {
    __extends(CreateVpnConnectionRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpnConnectionRouteCommand(input) {
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
    CreateVpnConnectionRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpnConnectionRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpnConnectionRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpnConnectionRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpnConnectionRouteCommand(input, context);
    };
    CreateVpnConnectionRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpnConnectionRouteCommand(output, context);
    };
    return CreateVpnConnectionRouteCommand;
}($Command));
export { CreateVpnConnectionRouteCommand };
//# sourceMappingURL=CreateVpnConnectionRouteCommand.js.map