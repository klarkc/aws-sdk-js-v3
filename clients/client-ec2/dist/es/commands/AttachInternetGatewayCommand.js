import { __extends } from "tslib";
import { AttachInternetGatewayRequest } from "../models/models_0";
import { deserializeAws_ec2AttachInternetGatewayCommand, serializeAws_ec2AttachInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and
 * 			the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(AttachInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachInternetGatewayCommand(input) {
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
    AttachInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AttachInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AttachInternetGatewayCommand(input, context);
    };
    AttachInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AttachInternetGatewayCommand(output, context);
    };
    return AttachInternetGatewayCommand;
}($Command));
export { AttachInternetGatewayCommand };
//# sourceMappingURL=AttachInternetGatewayCommand.js.map