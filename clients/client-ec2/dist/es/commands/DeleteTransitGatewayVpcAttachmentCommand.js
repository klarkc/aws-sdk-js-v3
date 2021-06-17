import { __extends } from "tslib";
import { DeleteTransitGatewayVpcAttachmentRequest, DeleteTransitGatewayVpcAttachmentResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayVpcAttachmentCommand, serializeAws_ec2DeleteTransitGatewayVpcAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayVpcAttachmentCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayVpcAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayVpcAttachmentCommand(input) {
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
    DeleteTransitGatewayVpcAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayVpcAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayVpcAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayVpcAttachmentCommand(input, context);
    };
    DeleteTransitGatewayVpcAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayVpcAttachmentCommand(output, context);
    };
    return DeleteTransitGatewayVpcAttachmentCommand;
}($Command));
export { DeleteTransitGatewayVpcAttachmentCommand };
//# sourceMappingURL=DeleteTransitGatewayVpcAttachmentCommand.js.map