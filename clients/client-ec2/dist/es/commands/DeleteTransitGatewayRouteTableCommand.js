import { __extends } from "tslib";
import { DeleteTransitGatewayRouteTableRequest, DeleteTransitGatewayRouteTableResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTransitGatewayRouteTableCommand, serializeAws_ec2DeleteTransitGatewayRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified transit gateway route table. You must disassociate the route table from any
 *           transit gateway route tables before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTransitGatewayRouteTableCommand = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTransitGatewayRouteTableCommand(input) {
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
    DeleteTransitGatewayRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTransitGatewayRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTransitGatewayRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTransitGatewayRouteTableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTransitGatewayRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTransitGatewayRouteTableCommand(input, context);
    };
    DeleteTransitGatewayRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTransitGatewayRouteTableCommand(output, context);
    };
    return DeleteTransitGatewayRouteTableCommand;
}($Command));
export { DeleteTransitGatewayRouteTableCommand };
//# sourceMappingURL=DeleteTransitGatewayRouteTableCommand.js.map