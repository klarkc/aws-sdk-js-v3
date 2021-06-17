import { __extends } from "tslib";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVolumesCommand, serializeAws_ec2DescribeVolumesCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
 *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
 *       more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
 *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
 *       then that number of results is returned along with a <code>NextToken</code> value that can be
 *       passed to a subsequent <code>DescribeVolumes</code> request to retrieve the remaining
 *       results.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVolumesCommand = /** @class */ (function (_super) {
    __extends(DescribeVolumesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVolumesCommand(input) {
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
    DescribeVolumesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVolumesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVolumesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVolumesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVolumesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVolumesCommand(input, context);
    };
    DescribeVolumesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVolumesCommand(output, context);
    };
    return DescribeVolumesCommand;
}($Command));
export { DescribeVolumesCommand };
//# sourceMappingURL=DescribeVolumesCommand.js.map