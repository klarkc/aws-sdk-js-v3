import { __extends } from "tslib";
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/models_2";
import { deserializeAws_ec2DescribeImageAttributeCommand, serializeAws_ec2DescribeImageAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImageAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeImageAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImageAttributeCommand(input) {
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
    DescribeImageAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeImageAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImageAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImageAttribute.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImageAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeImageAttributeCommand(input, context);
    };
    DescribeImageAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeImageAttributeCommand(output, context);
    };
    return DescribeImageAttributeCommand;
}($Command));
export { DescribeImageAttributeCommand };
//# sourceMappingURL=DescribeImageAttributeCommand.js.map