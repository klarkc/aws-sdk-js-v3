import { __extends } from "tslib";
import { GetTransitGatewayRouteTablePropagationsRequest, GetTransitGatewayRouteTablePropagationsResult, } from "../models/models_4";
import { deserializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand, serializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayRouteTablePropagationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayRouteTablePropagationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayRouteTablePropagationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayRouteTablePropagationsCommand(input) {
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
    GetTransitGatewayRouteTablePropagationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetTransitGatewayRouteTablePropagationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayRouteTablePropagationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayRouteTablePropagationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayRouteTablePropagationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand(input, context);
    };
    GetTransitGatewayRouteTablePropagationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand(output, context);
    };
    return GetTransitGatewayRouteTablePropagationsCommand;
}($Command));
export { GetTransitGatewayRouteTablePropagationsCommand };
//# sourceMappingURL=GetTransitGatewayRouteTablePropagationsCommand.js.map