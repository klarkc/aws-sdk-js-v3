import { __extends } from "tslib";
import { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/models_0";
import { deserializeAws_ec2AssociateTransitGatewayRouteTableCommand, serializeAws_ec2AssociateTransitGatewayRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified attachment with the specified transit gateway route table. You can
 *         associate only one route table with an attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTransitGatewayRouteTableCommand = /** @class */ (function (_super) {
    __extends(AssociateTransitGatewayRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTransitGatewayRouteTableCommand(input) {
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
    AssociateTransitGatewayRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateTransitGatewayRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTransitGatewayRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTransitGatewayRouteTableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTransitGatewayRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateTransitGatewayRouteTableCommand(input, context);
    };
    AssociateTransitGatewayRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateTransitGatewayRouteTableCommand(output, context);
    };
    return AssociateTransitGatewayRouteTableCommand;
}($Command));
export { AssociateTransitGatewayRouteTableCommand };
//# sourceMappingURL=AssociateTransitGatewayRouteTableCommand.js.map