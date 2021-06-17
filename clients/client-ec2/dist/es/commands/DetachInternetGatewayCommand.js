import { __extends } from "tslib";
import { DetachInternetGatewayRequest } from "../models/models_3";
import { deserializeAws_ec2DetachInternetGatewayCommand, serializeAws_ec2DetachInternetGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet
 * 			and the VPC. The VPC must not contain any running instances with Elastic IP addresses or
 * 			public IPv4 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachInternetGatewayCommand = /** @class */ (function (_super) {
    __extends(DetachInternetGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachInternetGatewayCommand(input) {
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
    DetachInternetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DetachInternetGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachInternetGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachInternetGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DetachInternetGatewayCommand(input, context);
    };
    DetachInternetGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DetachInternetGatewayCommand(output, context);
    };
    return DetachInternetGatewayCommand;
}($Command));
export { DetachInternetGatewayCommand };
//# sourceMappingURL=DetachInternetGatewayCommand.js.map