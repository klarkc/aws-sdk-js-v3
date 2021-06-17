import { __extends } from "tslib";
import { AssociateTransitGatewayMulticastDomainRequest, AssociateTransitGatewayMulticastDomainResult, } from "../models/models_0";
import { deserializeAws_ec2AssociateTransitGatewayMulticastDomainCommand, serializeAws_ec2AssociateTransitGatewayMulticastDomainCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p>
 *         <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a> to see the state of the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTransitGatewayMulticastDomainCommand = /** @class */ (function (_super) {
    __extends(AssociateTransitGatewayMulticastDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTransitGatewayMulticastDomainCommand(input) {
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
    AssociateTransitGatewayMulticastDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateTransitGatewayMulticastDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTransitGatewayMulticastDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTransitGatewayMulticastDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTransitGatewayMulticastDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateTransitGatewayMulticastDomainCommand(input, context);
    };
    AssociateTransitGatewayMulticastDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateTransitGatewayMulticastDomainCommand(output, context);
    };
    return AssociateTransitGatewayMulticastDomainCommand;
}($Command));
export { AssociateTransitGatewayMulticastDomainCommand };
//# sourceMappingURL=AssociateTransitGatewayMulticastDomainCommand.js.map