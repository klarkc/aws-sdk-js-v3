import { __extends } from "tslib";
import { RegisterTransitGatewayMulticastGroupMembersRequest, RegisterTransitGatewayMulticastGroupMembersResult, } from "../models/models_4";
import { deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand, serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
 *             with a supported EC2 instance that receives multicast traffic. For information about
 *             supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
 *             to the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTransitGatewayMulticastGroupMembersCommand = /** @class */ (function (_super) {
    __extends(RegisterTransitGatewayMulticastGroupMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTransitGatewayMulticastGroupMembersCommand(input) {
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
    RegisterTransitGatewayMulticastGroupMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RegisterTransitGatewayMulticastGroupMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTransitGatewayMulticastGroupMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(input, context);
    };
    RegisterTransitGatewayMulticastGroupMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(output, context);
    };
    return RegisterTransitGatewayMulticastGroupMembersCommand;
}($Command));
export { RegisterTransitGatewayMulticastGroupMembersCommand };
//# sourceMappingURL=RegisterTransitGatewayMulticastGroupMembersCommand.js.map