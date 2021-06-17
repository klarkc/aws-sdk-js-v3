import { __extends } from "tslib";
import { CreateEgressOnlyInternetGatewayRequest, CreateEgressOnlyInternetGatewayResult } from "../models/models_0";
import { deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand, serializeAws_ec2CreateEgressOnlyInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
 * 			internet gateway is used to enable outbound communication over IPv6 from instances in
 * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
 * 			connection with your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEgressOnlyInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateEgressOnlyInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEgressOnlyInternetGatewayCommand(input) {
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
    CreateEgressOnlyInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateEgressOnlyInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEgressOnlyInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEgressOnlyInternetGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEgressOnlyInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateEgressOnlyInternetGatewayCommand(input, context);
    };
    CreateEgressOnlyInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand(output, context);
    };
    return CreateEgressOnlyInternetGatewayCommand;
}($Command));
export { CreateEgressOnlyInternetGatewayCommand };
//# sourceMappingURL=CreateEgressOnlyInternetGatewayCommand.js.map