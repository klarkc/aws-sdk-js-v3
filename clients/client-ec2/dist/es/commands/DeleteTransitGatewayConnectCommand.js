import { __extends } from "tslib";
import { DeleteTransitGatewayConnectRequest, DeleteTransitGatewayConnectResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayConnectCommand, serializeAws_ec2DeleteTransitGatewayConnectCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Connect attachment. You must first delete any Connect peers for
 *             the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayConnectCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayConnectCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayConnectCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayConnectCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayConnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayConnectCommand(input) {
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
    DeleteTransitGatewayConnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayConnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayConnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayConnectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayConnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayConnectCommand(input, context);
    };
    DeleteTransitGatewayConnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayConnectCommand(output, context);
    };
    return DeleteTransitGatewayConnectCommand;
}($Command));
export { DeleteTransitGatewayConnectCommand };
//# sourceMappingURL=DeleteTransitGatewayConnectCommand.js.map