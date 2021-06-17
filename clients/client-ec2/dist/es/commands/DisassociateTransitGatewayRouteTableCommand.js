import { __extends } from "tslib";
import { DisassociateTransitGatewayRouteTableRequest, DisassociateTransitGatewayRouteTableResult, } from "../models/models_4";
import { deserializeAws_ec2DisassociateTransitGatewayRouteTableCommand, serializeAws_ec2DisassociateTransitGatewayRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a resource attachment from a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTransitGatewayRouteTableCommand = /** @class */ (function (_super) {
    __extends(DisassociateTransitGatewayRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTransitGatewayRouteTableCommand(input) {
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
    DisassociateTransitGatewayRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateTransitGatewayRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTransitGatewayRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTransitGatewayRouteTableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTransitGatewayRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateTransitGatewayRouteTableCommand(input, context);
    };
    DisassociateTransitGatewayRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateTransitGatewayRouteTableCommand(output, context);
    };
    return DisassociateTransitGatewayRouteTableCommand;
}($Command));
export { DisassociateTransitGatewayRouteTableCommand };
//# sourceMappingURL=DisassociateTransitGatewayRouteTableCommand.js.map