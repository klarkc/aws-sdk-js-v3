"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileSystemCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Use this operation to update the configuration of an existing Amazon FSx file system.
 *       You can update multiple properties in a single request.</p>
 *          <p>For Amazon FSx for Windows File Server file systems, you can update the following
 *     properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>SelfManagedActiveDirectoryConfiguration</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>ThroughputCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 *          <p>For Amazon FSx for Lustre file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutoImportPolicy</p>
 *             </li>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>DataCompressionType</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFileSystemCommand extends smithy_client_1.Command {
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
        const clientName = "FSxClient";
        const commandName = "UpdateFileSystemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFileSystemResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateFileSystemCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateFileSystemCommand(output, context);
    }
}
exports.UpdateFileSystemCommand = UpdateFileSystemCommand;
//# sourceMappingURL=UpdateFileSystemCommand.js.map