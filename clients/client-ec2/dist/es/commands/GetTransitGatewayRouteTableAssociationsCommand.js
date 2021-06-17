import { __extends } from "tslib";
import { GetTransitGatewayRouteTableAssociationsRequest, GetTransitGatewayRouteTableAssociationsResult, } from "../models/models_4";
import { deserializeAws_ec2GetTransitGatewayRouteTableAssociationsCommand, serializeAws_ec2GetTransitGatewayRouteTableAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the associations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayRouteTableAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayRouteTableAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayRouteTableAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayRouteTableAssociationsCommand(input) {
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
    GetTransitGatewayRouteTableAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetTransitGatewayRouteTableAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayRouteTableAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayRouteTableAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayRouteTableAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetTransitGatewayRouteTableAssociationsCommand(input, context);
    };
    GetTransitGatewayRouteTableAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetTransitGatewayRouteTableAssociationsCommand(output, context);
    };
    return GetTransitGatewayRouteTableAssociationsCommand;
}($Command));
export { GetTransitGatewayRouteTableAssociationsCommand };
//# sourceMappingURL=GetTransitGatewayRouteTableAssociationsCommand.js.map