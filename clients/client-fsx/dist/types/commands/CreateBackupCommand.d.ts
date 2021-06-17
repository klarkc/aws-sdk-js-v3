import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBackupCommandInput extends CreateBackupRequest {
}
export interface CreateBackupCommandOutput extends CreateBackupResponse, __MetadataBearer {
}
/**
 * <p>Creates a backup of an existing Amazon FSx file system.
 *             Creating regular backups for your file system is a best practice, enabling you to restore a file system
 *             from a backup if an issue arises with the original file system.</p>
 *         <p>For Amazon FSx for Lustre file systems, you can create a backup only
 *             for file systems with the following configuration:</p>
 *         <ul>
 *             <li>
 *                <p>a Persistent deployment type</p>
 *             </li>
 *             <li>
 *                <p>is <i>not</i> linked to a data respository.</p>
 *             </li>
 *          </ul>
 *             <p>For more information about backing up Amazon FSx for Lustre file systems,
 *                 see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p>
 *         <p>For more information about backing up Amazon FSx for Windows file systems,
 *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p>
 *
 *         <p>If a backup with the specified client request token exists, and the parameters
 *             match, this operation returns the description of the existing backup. If a backup
 *             specified client request token exists, and the parameters don't match, this
 *             operation returns <code>IncompatibleParameterError</code>. If a backup with the
 *             specified client request token doesn't exist, <code>CreateBackup</code> does the
 *             following: </p>
 *         <ul>
 *             <li>
 *                 <p>Creates a new Amazon FSx backup with an assigned ID, and an initial
 *                     lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Returns the description of the backup.</p>
 *             </li>
 *          </ul>
 *
 *         <p>By using the idempotent operation, you can retry a <code>CreateBackup</code>
 *             operation without the risk of creating an extra backup. This approach can be useful when
 *             an initial call fails in a way that makes it unclear whether a backup was created. If
 *             you use the same client request token and the initial call created a backup, the
 *             operation returns a successful result because all the parameters are the same.</p>
 *
 *         <p>The <code>CreateBackup</code> operation returns while the backup's
 *             lifecycle state is still <code>CREATING</code>. You can check the backup creation
 *             status by calling the <a>DescribeBackups</a> operation, which returns the
 *             backup state along with other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBackupCommand extends $Command<CreateBackupCommandInput, CreateBackupCommandOutput, FSxClientResolvedConfig> {
    readonly input: CreateBackupCommandInput;
    constructor(input: CreateBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBackupCommandInput, CreateBackupCommandOutput>;
    private serialize;
    private deserialize;
}
