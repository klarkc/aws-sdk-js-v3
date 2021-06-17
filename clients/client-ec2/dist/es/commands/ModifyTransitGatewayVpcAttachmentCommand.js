import { __extends } from "tslib";
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/models_4";
import { deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand, serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTransitGatewayVpcAttachmentCommand = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayVpcAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTransitGatewayVpcAttachmentCommand(input) {
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
    ModifyTransitGatewayVpcAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTransitGatewayVpcAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTransitGatewayVpcAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(input, context);
    };
    ModifyTransitGatewayVpcAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(output, context);
    };
    return ModifyTransitGatewayVpcAttachmentCommand;
}($Command));
export { ModifyTransitGatewayVpcAttachmentCommand };
//# sourceMappingURL=ModifyTransitGatewayVpcAttachmentCommand.js.map