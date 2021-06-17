import { __extends } from "tslib";
import { ModifyVpcEndpointConnectionNotificationRequest, ModifyVpcEndpointConnectionNotificationResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand, serializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
 *             can change the SNS topic for the notification, or the events for which to be notified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcEndpointConnectionNotificationCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcEndpointConnectionNotificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcEndpointConnectionNotificationCommand(input) {
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
    ModifyVpcEndpointConnectionNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcEndpointConnectionNotificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcEndpointConnectionNotificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcEndpointConnectionNotificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcEndpointConnectionNotificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand(input, context);
    };
    ModifyVpcEndpointConnectionNotificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand(output, context);
    };
    return ModifyVpcEndpointConnectionNotificationCommand;
}($Command));
export { ModifyVpcEndpointConnectionNotificationCommand };
//# sourceMappingURL=ModifyVpcEndpointConnectionNotificationCommand.js.map