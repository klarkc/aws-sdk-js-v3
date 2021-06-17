import { __extends } from "tslib";
import { CreateInternetGatewayRequest, CreateInternetGatewayResult } from "../models/models_0";
import { deserializeAws_ec2CreateInternetGatewayCommand, serializeAws_ec2CreateInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway,
 * 			you attach it to a VPC using <a>AttachInternetGateway</a>.</p>
 *          <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInternetGatewayCommand(input) {
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
    CreateInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInternetGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateInternetGatewayCommand(input, context);
    };
    CreateInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateInternetGatewayCommand(output, context);
    };
    return CreateInternetGatewayCommand;
}($Command));
export { CreateInternetGatewayCommand };
//# sourceMappingURL=CreateInternetGatewayCommand.js.map