import { __extends } from "tslib";
import { DisassociateTransitGatewayMulticastDomainRequest, DisassociateTransitGatewayMulticastDomainResult, } from "../models/models_4";
import { deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand, serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTransitGatewayMulticastDomainCommand = /** @class */ (function (_super) {
    __extends(DisassociateTransitGatewayMulticastDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTransitGatewayMulticastDomainCommand(input) {
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
    DisassociateTransitGatewayMulticastDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateTransitGatewayMulticastDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTransitGatewayMulticastDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(input, context);
    };
    DisassociateTransitGatewayMulticastDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(output, context);
    };
    return DisassociateTransitGatewayMulticastDomainCommand;
}($Command));
export { DisassociateTransitGatewayMulticastDomainCommand };
//# sourceMappingURL=DisassociateTransitGatewayMulticastDomainCommand.js.map