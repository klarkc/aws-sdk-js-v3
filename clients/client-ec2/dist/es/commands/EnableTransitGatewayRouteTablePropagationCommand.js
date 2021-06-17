import { __extends } from "tslib";
import { EnableTransitGatewayRouteTablePropagationRequest, EnableTransitGatewayRouteTablePropagationResult, } from "../models/models_4";
import { deserializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand, serializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified attachment to propagate routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableTransitGatewayRouteTablePropagationCommand = /** @class */ (function (_super) {
    __extends(EnableTransitGatewayRouteTablePropagationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableTransitGatewayRouteTablePropagationCommand(input) {
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
    EnableTransitGatewayRouteTablePropagationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableTransitGatewayRouteTablePropagationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableTransitGatewayRouteTablePropagationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableTransitGatewayRouteTablePropagationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand(input, context);
    };
    EnableTransitGatewayRouteTablePropagationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand(output, context);
    };
    return EnableTransitGatewayRouteTablePropagationCommand;
}($Command));
export { EnableTransitGatewayRouteTablePropagationCommand };
//# sourceMappingURL=EnableTransitGatewayRouteTablePropagationCommand.js.map