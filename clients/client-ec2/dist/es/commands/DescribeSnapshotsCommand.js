import { __extends } from "tslib";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSnapshotsCommand, serializeAws_ec2DescribeSnapshotsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots
 *       available to you.</p>
 *          <p>The snapshots available to you include public snapshots, private snapshots that you own,
 *       and private snapshots owned by other AWS accounts for which you have explicit create volume
 *       permissions.</p>
 *          <p>The create volume permissions fall into the following categories:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>public</i>: The owner of the snapshot granted create volume
 *           permissions for the snapshot to the <code>all</code> group. All AWS accounts have create
 *           volume permissions for these snapshots.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>explicit</i>: The owner of the snapshot granted create volume
 *           permissions to a specific AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>implicit</i>: An AWS account has implicit create volume permissions
 *           for all snapshots it owns.</p>
 *             </li>
 *          </ul>
 *          <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot
 *       owners, or AWS accounts with create volume permissions. If no options are specified, Amazon
 *       EC2 returns all snapshots for which you have create volume permissions.</p>
 *          <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are
 *       returned. If you specify an invalid snapshot ID, an error is returned. If you specify a
 *       snapshot ID for which you do not have access, it is not included in the returned
 *       results.</p>
 *          <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only
 *       snapshots from the specified owners and for which you have access are returned. The results
 *       can include the AWS account IDs of the specified owners, <code>amazon</code> for snapshots
 *       owned by Amazon, or <code>self</code> for snapshots that you own.</p>
 *          <p>If you specify a list of restorable users, only snapshots with create snapshot permissions
 *       for those users are returned. You can specify AWS account IDs (if you own the snapshots),
 *         <code>self</code> for snapshots for which you own or have explicit permissions, or
 *         <code>all</code> for public snapshots.</p>
 *          <p>If you are describing a long list of snapshots, we recommend that you paginate the output to make the
 *       list more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
 *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
 *       then that number of results is returned along with a <code>NextToken</code> value that can be
 *       passed to a subsequent <code>DescribeSnapshots</code> request to retrieve the remaining
 *       results.</p>
 *          <p>To get the state of fast snapshot restores for a snapshot, use <a>DescribeFastSnapshotRestores</a>.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotsCommand(input) {
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
    DescribeSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSnapshotsCommand(input, context);
    };
    DescribeSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSnapshotsCommand(output, context);
    };
    return DescribeSnapshotsCommand;
}($Command));
export { DescribeSnapshotsCommand };
//# sourceMappingURL=DescribeSnapshotsCommand.js.map