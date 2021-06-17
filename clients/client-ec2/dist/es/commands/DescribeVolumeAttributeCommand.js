import { __extends } from "tslib";
import { DescribeVolumeAttributeRequest, DescribeVolumeAttributeResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVolumeAttributeCommand, serializeAws_ec2DescribeVolumeAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified attribute of the specified volume. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVolumeAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeVolumeAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVolumeAttributeCommand(input) {
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
    DescribeVolumeAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVolumeAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVolumeAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVolumeAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVolumeAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVolumeAttributeCommand(input, context);
    };
    DescribeVolumeAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVolumeAttributeCommand(output, context);
    };
    return DescribeVolumeAttributeCommand;
}($Command));
export { DescribeVolumeAttributeCommand };
//# sourceMappingURL=DescribeVolumeAttributeCommand.js.map