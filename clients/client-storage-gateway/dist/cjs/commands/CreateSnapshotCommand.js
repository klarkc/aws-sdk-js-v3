"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateSnapshotCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "StorageGatewayClient";
        const commandName = "CreateSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSnapshotInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSnapshotOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateSnapshotCommand(output, context);
    }
}
exports.CreateSnapshotCommand = CreateSnapshotCommand;
//# sourceMappingURL=CreateSnapshotCommand.js.map