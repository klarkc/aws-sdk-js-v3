import { __extends } from "tslib";
import { CreateTransitGatewayMulticastDomainRequest, CreateTransitGatewayMulticastDomainResult, } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayMulticastDomainCommand, serializeAws_ec2CreateTransitGatewayMulticastDomainCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a multicast domain using the specified transit gateway.</p>
 *         <p>The transit gateway  must be in the available state before you create a domain. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html">DescribeTransitGateways</a> to see the state of transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayMulticastDomainCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayMulticastDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayMulticastDomainCommand(input) {
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
    CreateTransitGatewayMulticastDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayMulticastDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayMulticastDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayMulticastDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayMulticastDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayMulticastDomainCommand(input, context);
    };
    CreateTransitGatewayMulticastDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayMulticastDomainCommand(output, context);
    };
    return CreateTransitGatewayMulticastDomainCommand;
}($Command));
export { CreateTransitGatewayMulticastDomainCommand };
//# sourceMappingURL=CreateTransitGatewayMulticastDomainCommand.js.map