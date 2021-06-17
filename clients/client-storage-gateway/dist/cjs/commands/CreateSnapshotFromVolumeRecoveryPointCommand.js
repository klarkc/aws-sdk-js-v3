"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSnapshotFromVolumeRecoveryPointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only
 *          supported in the cached volume gateway type.</p>
 *
 *          <p>A volume recovery point is a point in time at which all data of the volume is consistent
 *          and from which you can create a snapshot. To get a list of volume recovery point for cached
 *          volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p>
 *
 *          <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). You must also provide a description for
 *          the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
 *          its description appear in the AWS Storage Gateway console.
 *           In response, the gateway returns
 *          you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
 *          it when you want to create a volume from a snapshot.</p>
 *
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSnapshotFromVolumeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSnapshotFromVolumeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateSnapshotFromVolumeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotFromVolumeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotFromVolumeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSnapshotFromVolumeRecoveryPointCommand extends smithy_client_1.Command {
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
        const commandName = "CreateSnapshotFromVolumeRecoveryPointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSnapshotFromVolumeRecoveryPointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSnapshotFromVolumeRecoveryPointOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(output, context);
    }
}
exports.CreateSnapshotFromVolumeRecoveryPointCommand = CreateSnapshotFromVolumeRecoveryPointCommand;
//# sourceMappingURL=CreateSnapshotFromVolumeRecoveryPointCommand.js.map