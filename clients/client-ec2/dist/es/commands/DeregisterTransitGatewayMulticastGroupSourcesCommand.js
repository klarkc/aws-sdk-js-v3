import { __extends } from "tslib";
import { DeregisterTransitGatewayMulticastGroupSourcesRequest, DeregisterTransitGatewayMulticastGroupSourcesResult, } from "../models/models_2";
import { deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand, serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified sources (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTransitGatewayMulticastGroupSourcesCommand = /** @class */ (function (_super) {
    __extends(DeregisterTransitGatewayMulticastGroupSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterTransitGatewayMulticastGroupSourcesCommand(input) {
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
    DeregisterTransitGatewayMulticastGroupSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeregisterTransitGatewayMulticastGroupSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTransitGatewayMulticastGroupSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(input, context);
    };
    DeregisterTransitGatewayMulticastGroupSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(output, context);
    };
    return DeregisterTransitGatewayMulticastGroupSourcesCommand;
}($Command));
export { DeregisterTransitGatewayMulticastGroupSourcesCommand };
//# sourceMappingURL=DeregisterTransitGatewayMulticastGroupSourcesCommand.js.map