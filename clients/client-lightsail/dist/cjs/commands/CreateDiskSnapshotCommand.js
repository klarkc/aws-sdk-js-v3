"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDiskSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
 *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
 *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
 *       capture data that has been written to your disk at the time the snapshot command is issued.
 *       This may exclude any data that has been cached by any applications or the operating system. If
 *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
 *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
 *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
 *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
 *       use your disk while the snapshot status is pending.</p>
 *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
 *       might want to do this, for example, to recover data from the system volume of a botched
 *       instance or to create a backup of the system volume like you would for a block storage disk.
 *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
 *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
 *       be created. After the snapshot is available, you can create a block storage disk from the
 *       snapshot and attach it to a running instance to access the data on the disk.</p>
 *
 *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDiskSnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "CreateDiskSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDiskSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDiskSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDiskSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDiskSnapshotCommand(output, context);
    }
}
exports.CreateDiskSnapshotCommand = CreateDiskSnapshotCommand;
//# sourceMappingURL=CreateDiskSnapshotCommand.js.map