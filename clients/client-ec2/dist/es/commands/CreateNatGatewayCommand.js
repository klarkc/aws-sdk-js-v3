import { __extends } from "tslib";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_1";
import { deserializeAws_ec2CreateNatGatewayCommand, serializeAws_ec2CreateNatGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a NAT gateway in the specified public subnet. This action creates a network
 *             interface in the specified subnet with a private IP address from the IP address range of
 *             the subnet. Internet-bound traffic from a private subnet can be routed to the NAT
 *             gateway, therefore enabling instances in the private subnet to connect to the internet.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateways</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNatGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNatGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateNatGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNatGatewayCommand(input) {
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
    CreateNatGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNatGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNatGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNatGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNatGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNatGatewayCommand(input, context);
    };
    CreateNatGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNatGatewayCommand(output, context);
    };
    return CreateNatGatewayCommand;
}($Command));
export { CreateNatGatewayCommand };
//# sourceMappingURL=CreateNatGatewayCommand.js.map