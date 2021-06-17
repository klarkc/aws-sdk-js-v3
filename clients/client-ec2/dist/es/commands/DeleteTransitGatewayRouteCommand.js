import { __extends } from "tslib";
import { DeleteTransitGatewayRouteRequest, DeleteTransitGatewayRouteResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayRouteCommand, serializeAws_ec2DeleteTransitGatewayRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified route from the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayRouteCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayRouteCommand(input) {
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
    DeleteTransitGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayRouteCommand(input, context);
    };
    DeleteTransitGatewayRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayRouteCommand(output, context);
    };
    return DeleteTransitGatewayRouteCommand;
}($Command));
export { DeleteTransitGatewayRouteCommand };
//# sourceMappingURL=DeleteTransitGatewayRouteCommand.js.map