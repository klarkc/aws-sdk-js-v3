import { __extends } from "tslib";
import { RejectTransitGatewayMulticastDomainAssociationsRequest, RejectTransitGatewayMulticastDomainAssociationsResult, } from "../models/models_4";
import { deserializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand, serializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectTransitGatewayMulticastDomainAssociationsCommand = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayMulticastDomainAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectTransitGatewayMulticastDomainAssociationsCommand(input) {
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
    RejectTransitGatewayMulticastDomainAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RejectTransitGatewayMulticastDomainAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectTransitGatewayMulticastDomainAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand(input, context);
    };
    RejectTransitGatewayMulticastDomainAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand(output, context);
    };
    return RejectTransitGatewayMulticastDomainAssociationsCommand;
}($Command));
export { RejectTransitGatewayMulticastDomainAssociationsCommand };
//# sourceMappingURL=RejectTransitGatewayMulticastDomainAssociationsCommand.js.map