import { __extends } from "tslib";
import { DeregisterTransitGatewayMulticastGroupMembersRequest, DeregisterTransitGatewayMulticastGroupMembersResult, } from "../models/models_2";
import { deserializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand, serializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified members (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTransitGatewayMulticastGroupMembersCommand = /** @class */ (function (_super) {
    __extends(DeregisterTransitGatewayMulticastGroupMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterTransitGatewayMulticastGroupMembersCommand(input) {
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
    DeregisterTransitGatewayMulticastGroupMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeregisterTransitGatewayMulticastGroupMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTransitGatewayMulticastGroupMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand(input, context);
    };
    DeregisterTransitGatewayMulticastGroupMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand(output, context);
    };
    return DeregisterTransitGatewayMulticastGroupMembersCommand;
}($Command));
export { DeregisterTransitGatewayMulticastGroupMembersCommand };
//# sourceMappingURL=DeregisterTransitGatewayMulticastGroupMembersCommand.js.map