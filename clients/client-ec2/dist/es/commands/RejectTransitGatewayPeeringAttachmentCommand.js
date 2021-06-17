import { __extends } from "tslib";
import { RejectTransitGatewayPeeringAttachmentRequest, RejectTransitGatewayPeeringAttachmentResult, } from "../models/models_4";
import { deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand, serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a transit gateway peering attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectTransitGatewayPeeringAttachmentCommand = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectTransitGatewayPeeringAttachmentCommand(input) {
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
    RejectTransitGatewayPeeringAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RejectTransitGatewayPeeringAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectTransitGatewayPeeringAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(input, context);
    };
    RejectTransitGatewayPeeringAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(output, context);
    };
    return RejectTransitGatewayPeeringAttachmentCommand;
}($Command));
export { RejectTransitGatewayPeeringAttachmentCommand };
//# sourceMappingURL=RejectTransitGatewayPeeringAttachmentCommand.js.map