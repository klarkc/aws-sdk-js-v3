import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { CreateFileSystemRequest, FileSystemDescription } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFileSystemCommandInput extends CreateFileSystemRequest {
}
export interface CreateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {
}
/**
 * <p>Creates a new, empty file system. The operation requires a creation token in the
 *       request that Amazon EFS uses to ensure idempotent creation (calling the operation with same
 *       creation token has no effect). If a file system does not currently exist that is owned by the
 *       caller's AWS account with the specified creation token, this operation does the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned
 *           ID, and an initial lifecycle state <code>creating</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns with the description of the created file system.</p>
 *             </li>
 *          </ul>
 *          <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the
 *       ID of the existing file system.</p>
 *          <note>
 *             <p>For basic use cases, you can use a randomly generated UUID for the creation
 *         token.</p>
 *          </note>
 *          <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without
 *       risk of creating an extra file system. This can happen when an initial call fails in a way
 *       that leaves it uncertain whether or not a file system was actually created. An example might
 *       be that a transport level timeout occurred or your connection was reset. As long as you use
 *       the same creation token, if the initial call had succeeded in creating a file system, the
 *       client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p>
 *          <p>For more information, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a>
 *      in the <i>Amazon EFS User Guide</i>.</p>
 *
 *          <note>
 *             <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle
 *         state is still <code>creating</code>. You can check the file system creation status by
 *         calling the <a>DescribeFileSystems</a> operation, which among other things returns the file
 *         system state.</p>
 *          </note>
 *
 *          <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you
 *       choose for your file system. We recommend <code>generalPurpose</code> performance mode for
 *       most file systems. File systems using the <code>maxIO</code> performance mode can scale to
 *       higher levels of aggregate throughput and operations per second with a tradeoff of slightly
 *       higher latencies for most file operations. The performance mode can't be changed after
 *       the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance
 *         modes</a>.</p>
 *
 *          <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p>
 *
 *          <p>After the file system is fully created, Amazon EFS sets its lifecycle state to
 *         <code>available</code>, at which point you can create one or more mount targets for the file
 *       system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in
 *       your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p>
 *
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:CreateFileSystem</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFileSystemCommand extends $Command<CreateFileSystemCommandInput, CreateFileSystemCommandOutput, EFSClientResolvedConfig> {
    readonly input: CreateFileSystemCommandInput;
    constructor(input: CreateFileSystemCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFileSystemCommandInput, CreateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
