import { __extends } from "tslib";
import { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeKeyPairsCommand, serializeAws_ec2DescribeKeyPairsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified key pairs or all of your key pairs.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeKeyPairsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeKeyPairsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKeyPairsCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeKeyPairsCommand = /** @class */ (function (_super) {
    __extends(DescribeKeyPairsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeKeyPairsCommand(input) {
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
    DescribeKeyPairsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeKeyPairsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeKeyPairsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeKeyPairsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeKeyPairsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeKeyPairsCommand(input, context);
    };
    DescribeKeyPairsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeKeyPairsCommand(output, context);
    };
    return DescribeKeyPairsCommand;
}($Command));
export { DescribeKeyPairsCommand };
//# sourceMappingURL=DescribeKeyPairsCommand.js.map