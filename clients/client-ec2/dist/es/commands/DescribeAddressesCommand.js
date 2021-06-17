import { __extends } from "tslib";
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeAddressesCommand, serializeAws_ec2DescribeAddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
 * 				For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAddressesCommand = /** @class */ (function (_super) {
    __extends(DescribeAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAddressesCommand(input) {
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
    DescribeAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeAddressesCommand(input, context);
    };
    DescribeAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeAddressesCommand(output, context);
    };
    return DescribeAddressesCommand;
}($Command));
export { DescribeAddressesCommand };
//# sourceMappingURL=DescribeAddressesCommand.js.map