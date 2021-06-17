import { __extends } from "tslib";
import { DescribeAddressesAttributeRequest, DescribeAddressesAttributeResult } from "../models/models_2";
import { deserializeAws_ec2DescribeAddressesAttributeCommand, serializeAws_ec2DescribeAddressesAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the attributes of the specified Elastic IP addresses. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAddressesAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressesAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAddressesAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeAddressesAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAddressesAttributeCommand(input) {
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
    DescribeAddressesAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeAddressesAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAddressesAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAddressesAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAddressesAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeAddressesAttributeCommand(input, context);
    };
    DescribeAddressesAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeAddressesAttributeCommand(output, context);
    };
    return DescribeAddressesAttributeCommand;
}($Command));
export { DescribeAddressesAttributeCommand };
//# sourceMappingURL=DescribeAddressesAttributeCommand.js.map