import { __extends } from "tslib";
import { AcceptTransitGatewayPeeringAttachmentRequest, AcceptTransitGatewayPeeringAttachmentResult, } from "../models/models_0";
import { deserializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand, serializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a transit gateway peering attachment request. The peering attachment must be
 *             in the <code>pendingAcceptance</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptTransitGatewayPeeringAttachmentCommand = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptTransitGatewayPeeringAttachmentCommand(input) {
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
    AcceptTransitGatewayPeeringAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AcceptTransitGatewayPeeringAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptTransitGatewayPeeringAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand(input, context);
    };
    AcceptTransitGatewayPeeringAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand(output, context);
    };
    return AcceptTransitGatewayPeeringAttachmentCommand;
}($Command));
export { AcceptTransitGatewayPeeringAttachmentCommand };
//# sourceMappingURL=AcceptTransitGatewayPeeringAttachmentCommand.js.map