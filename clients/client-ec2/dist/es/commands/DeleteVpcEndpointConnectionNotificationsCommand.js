import { __extends } from "tslib";
import { DeleteVpcEndpointConnectionNotificationsRequest, DeleteVpcEndpointConnectionNotificationsResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand, serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more VPC endpoint connection notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpcEndpointConnectionNotificationsCommand = /** @class */ (function (_super) {
    __extends(DeleteVpcEndpointConnectionNotificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpcEndpointConnectionNotificationsCommand(input) {
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
    DeleteVpcEndpointConnectionNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpcEndpointConnectionNotificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcEndpointConnectionNotificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(input, context);
    };
    DeleteVpcEndpointConnectionNotificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(output, context);
    };
    return DeleteVpcEndpointConnectionNotificationsCommand;
}($Command));
export { DeleteVpcEndpointConnectionNotificationsCommand };
//# sourceMappingURL=DeleteVpcEndpointConnectionNotificationsCommand.js.map