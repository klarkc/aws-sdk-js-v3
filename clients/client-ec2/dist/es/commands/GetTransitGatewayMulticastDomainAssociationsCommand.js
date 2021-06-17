import { __extends } from "tslib";
import { GetTransitGatewayMulticastDomainAssociationsRequest, GetTransitGatewayMulticastDomainAssociationsResult, } from "../models/models_4";
import { deserializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand, serializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the associations for the transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayMulticastDomainAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayMulticastDomainAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayMulticastDomainAssociationsCommand(input) {
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
    GetTransitGatewayMulticastDomainAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetTransitGatewayMulticastDomainAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayMulticastDomainAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand(input, context);
    };
    GetTransitGatewayMulticastDomainAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand(output, context);
    };
    return GetTransitGatewayMulticastDomainAssociationsCommand;
}($Command));
export { GetTransitGatewayMulticastDomainAssociationsCommand };
//# sourceMappingURL=GetTransitGatewayMulticastDomainAssociationsCommand.js.map