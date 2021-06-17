import { __extends } from "tslib";
import { DescribeReplaceRootVolumeTasksRequest, DescribeReplaceRootVolumeTasksResult } from "../models/models_3";
import { deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand, serializeAws_ec2DescribeReplaceRootVolumeTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a root volume replacement task. For more information, see
 *       <a href="https://docs.aws.amazon.com/">Replace a root volume</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReplaceRootVolumeTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReplaceRootVolumeTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReplaceRootVolumeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplaceRootVolumeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplaceRootVolumeTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplaceRootVolumeTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeReplaceRootVolumeTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplaceRootVolumeTasksCommand(input) {
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
    DescribeReplaceRootVolumeTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeReplaceRootVolumeTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplaceRootVolumeTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplaceRootVolumeTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplaceRootVolumeTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeReplaceRootVolumeTasksCommand(input, context);
    };
    DescribeReplaceRootVolumeTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand(output, context);
    };
    return DescribeReplaceRootVolumeTasksCommand;
}($Command));
export { DescribeReplaceRootVolumeTasksCommand };
//# sourceMappingURL=DescribeReplaceRootVolumeTasksCommand.js.map