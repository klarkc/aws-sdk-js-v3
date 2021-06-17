import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateFileSystemRequest, UpdateFileSystemResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {
}
export interface UpdateFileSystemCommandOutput extends UpdateFileSystemResponse, __MetadataBearer {
}
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
export declare class UpdateFileSystemCommand extends $Command<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput, FSxClientResolvedConfig> {
    readonly input: UpdateFileSystemCommandInput;
    constructor(input: UpdateFileSystemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
