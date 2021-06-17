import { __extends } from "tslib";
import { RegisterTransitGatewayMulticastGroupSourcesRequest, RegisterTransitGatewayMulticastGroupSourcesResult, } from "../models/models_4";
import { deserializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand, serializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
 *         <p>A multicast source is a network interface attached to a supported instance that sends
 *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTransitGatewayMulticastGroupSourcesCommand = /** @class */ (function (_super) {
    __extends(RegisterTransitGatewayMulticastGroupSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTransitGatewayMulticastGroupSourcesCommand(input) {
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
    RegisterTransitGatewayMulticastGroupSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RegisterTransitGatewayMulticastGroupSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTransitGatewayMulticastGroupSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand(input, context);
    };
    RegisterTransitGatewayMulticastGroupSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand(output, context);
    };
    return RegisterTransitGatewayMulticastGroupSourcesCommand;
}($Command));
export { RegisterTransitGatewayMulticastGroupSourcesCommand };
//# sourceMappingURL=RegisterTransitGatewayMulticastGroupSourcesCommand.js.map