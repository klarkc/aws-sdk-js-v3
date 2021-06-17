import { __extends } from "tslib";
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/models_2";
import { deserializeAws_ec2DescribeElasticGpusCommand, serializeAws_ec2DescribeElasticGpusCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information
 *             about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeElasticGpusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeElasticGpusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeElasticGpusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticGpusCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticGpusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticGpusCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticGpusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticGpusCommand(input) {
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
    DescribeElasticGpusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeElasticGpusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticGpusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticGpusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticGpusCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeElasticGpusCommand(input, context);
    };
    DescribeElasticGpusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeElasticGpusCommand(output, context);
    };
    return DescribeElasticGpusCommand;
}($Command));
export { DescribeElasticGpusCommand };
//# sourceMappingURL=DescribeElasticGpusCommand.js.map