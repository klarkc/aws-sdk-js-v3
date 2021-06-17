import { __extends } from "tslib";
import { CreateTransitGatewayConnectPeerRequest, CreateTransitGatewayConnectPeerResult } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayConnectPeerCommand, serializeAws_ec2CreateTransitGatewayConnectPeerCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a
 *             transit gateway and an appliance.</p>
 *         <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a> in the <i>Transit Gateways Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayConnectPeerCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectPeerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayConnectPeerCommand(input) {
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
    CreateTransitGatewayConnectPeerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayConnectPeerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayConnectPeerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayConnectPeerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayConnectPeerCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayConnectPeerCommand(input, context);
    };
    CreateTransitGatewayConnectPeerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayConnectPeerCommand(output, context);
    };
    return CreateTransitGatewayConnectPeerCommand;
}($Command));
export { CreateTransitGatewayConnectPeerCommand };
//# sourceMappingURL=CreateTransitGatewayConnectPeerCommand.js.map