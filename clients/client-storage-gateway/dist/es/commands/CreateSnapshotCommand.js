import { __extends } from "tslib";
import { CreateSnapshotInput, CreateSnapshotOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateSnapshotCommand, serializeAws_json1_1CreateSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a snapshot of a volume.</p>
 *
 *          <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data
 *          to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the
 *          data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2).
 *          You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API
 *          enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a
 *             snapshot schedule</a>.</p>
 *
 *          <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its
 *          Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS
 *          Storage Gateway takes the snapshot of specified volume, the snapshot and description
 *          appears in the AWS Storage Gateway console. In response, AWS Storage Gateway returns you a
 *          snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it
 *          when you want to create a volume from a snapshot. This operation is only supported in
 *          stored and cached volume gateway type.</p>
 *
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 *
 *          <important>
 *             <p>Volume and snapshot IDs are changing to a longer length ID format. For more
 *             information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSnapshotCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSnapshotCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSnapshotCommand(input) {
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
    CreateSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSnapshotInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSnapshotOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSnapshotCommand(input, context);
    };
    CreateSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSnapshotCommand(output, context);
    };
    return CreateSnapshotCommand;
}($Command));
export { CreateSnapshotCommand };
//# sourceMappingURL=CreateSnapshotCommand.js.map