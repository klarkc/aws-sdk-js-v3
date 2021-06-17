import { __extends } from "tslib";
import { DeleteTransitGatewayMulticastDomainRequest, DeleteTransitGatewayMulticastDomainResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayMulticastDomainCommand, serializeAws_ec2DeleteTransitGatewayMulticastDomainCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayMulticastDomainCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayMulticastDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayMulticastDomainCommand(input) {
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
    DeleteTransitGatewayMulticastDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayMulticastDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayMulticastDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayMulticastDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayMulticastDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayMulticastDomainCommand(input, context);
    };
    DeleteTransitGatewayMulticastDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayMulticastDomainCommand(output, context);
    };
    return DeleteTransitGatewayMulticastDomainCommand;
}($Command));
export { DeleteTransitGatewayMulticastDomainCommand };
//# sourceMappingURL=DeleteTransitGatewayMulticastDomainCommand.js.map