import { __extends } from "tslib";
import { DeleteTransitGatewayPeeringAttachmentRequest, DeleteTransitGatewayPeeringAttachmentResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayPeeringAttachmentCommand, serializeAws_ec2DeleteTransitGatewayPeeringAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a transit gateway peering attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayPeeringAttachmentCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayPeeringAttachmentCommand(input) {
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
    DeleteTransitGatewayPeeringAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayPeeringAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayPeeringAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayPeeringAttachmentCommand(input, context);
    };
    DeleteTransitGatewayPeeringAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayPeeringAttachmentCommand(output, context);
    };
    return DeleteTransitGatewayPeeringAttachmentCommand;
}($Command));
export { DeleteTransitGatewayPeeringAttachmentCommand };
//# sourceMappingURL=DeleteTransitGatewayPeeringAttachmentCommand.js.map