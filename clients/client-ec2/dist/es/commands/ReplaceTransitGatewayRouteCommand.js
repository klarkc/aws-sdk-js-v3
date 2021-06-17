import { __extends } from "tslib";
import { ReplaceTransitGatewayRouteRequest, ReplaceTransitGatewayRouteResult } from "../models/models_5";
import { deserializeAws_ec2ReplaceTransitGatewayRouteCommand, serializeAws_ec2ReplaceTransitGatewayRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the specified route in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceTransitGatewayRouteCommand = /** @class */ (function (_super) {
    __extends(ReplaceTransitGatewayRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceTransitGatewayRouteCommand(input) {
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
    ReplaceTransitGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceTransitGatewayRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceTransitGatewayRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplaceTransitGatewayRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceTransitGatewayRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceTransitGatewayRouteCommand(input, context);
    };
    ReplaceTransitGatewayRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceTransitGatewayRouteCommand(output, context);
    };
    return ReplaceTransitGatewayRouteCommand;
}($Command));
export { ReplaceTransitGatewayRouteCommand };
//# sourceMappingURL=ReplaceTransitGatewayRouteCommand.js.map