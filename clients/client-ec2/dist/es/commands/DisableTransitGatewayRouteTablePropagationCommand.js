import { __extends } from "tslib";
import { DisableTransitGatewayRouteTablePropagationRequest, DisableTransitGatewayRouteTablePropagationResult, } from "../models/models_4";
import { deserializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand, serializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified resource attachment from propagating routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableTransitGatewayRouteTablePropagationCommand = /** @class */ (function (_super) {
    __extends(DisableTransitGatewayRouteTablePropagationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableTransitGatewayRouteTablePropagationCommand(input) {
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
    DisableTransitGatewayRouteTablePropagationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableTransitGatewayRouteTablePropagationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableTransitGatewayRouteTablePropagationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableTransitGatewayRouteTablePropagationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand(input, context);
    };
    DisableTransitGatewayRouteTablePropagationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand(output, context);
    };
    return DisableTransitGatewayRouteTablePropagationCommand;
}($Command));
export { DisableTransitGatewayRouteTablePropagationCommand };
//# sourceMappingURL=DisableTransitGatewayRouteTablePropagationCommand.js.map