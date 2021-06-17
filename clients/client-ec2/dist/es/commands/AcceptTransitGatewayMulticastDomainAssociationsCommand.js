import { __extends } from "tslib";
import { AcceptTransitGatewayMulticastDomainAssociationsRequest, AcceptTransitGatewayMulticastDomainAssociationsResult, } from "../models/models_0";
import { deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand, serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a request to associate subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptTransitGatewayMulticastDomainAssociationsCommand = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayMulticastDomainAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptTransitGatewayMulticastDomainAssociationsCommand(input) {
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
    AcceptTransitGatewayMulticastDomainAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AcceptTransitGatewayMulticastDomainAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptTransitGatewayMulticastDomainAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(input, context);
    };
    AcceptTransitGatewayMulticastDomainAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(output, context);
    };
    return AcceptTransitGatewayMulticastDomainAssociationsCommand;
}($Command));
export { AcceptTransitGatewayMulticastDomainAssociationsCommand };
//# sourceMappingURL=AcceptTransitGatewayMulticastDomainAssociationsCommand.js.map