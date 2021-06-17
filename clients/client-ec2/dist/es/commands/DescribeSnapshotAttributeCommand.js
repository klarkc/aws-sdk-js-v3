import { __extends } from "tslib";
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSnapshotAttributeCommand, serializeAws_ec2DescribeSnapshotAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified attribute of the specified snapshot. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotAttributeCommand(input) {
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
    DescribeSnapshotAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSnapshotAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSnapshotAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSnapshotAttributeCommand(input, context);
    };
    DescribeSnapshotAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSnapshotAttributeCommand(output, context);
    };
    return DescribeSnapshotAttributeCommand;
}($Command));
export { DescribeSnapshotAttributeCommand };
//# sourceMappingURL=DescribeSnapshotAttributeCommand.js.map