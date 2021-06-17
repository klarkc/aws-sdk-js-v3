import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { FileSystemPolicyDescription, PutFileSystemPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFileSystemPolicyCommandInput extends PutFileSystemPolicyRequest {
}
export interface PutFileSystemPolicyCommandOutput extends FileSystemPolicyDescription, __MetadataBearer {
}
/**
 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system.
 *       A file system policy is an IAM resource-based policy and can contain multiple policy statements.
 *       A file system always has exactly one file system policy, which can be the default policy or
 *       an explicit policy set or updated using this API operation.
 *       EFS file system policies have a 20,000 character limit.
 *       When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>.
 *     </p>
 *          <p>EFS file system policies have a 20,000 character limit.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFileSystemPolicyCommand extends $Command<PutFileSystemPolicyCommandInput, PutFileSystemPolicyCommandOutput, EFSClientResolvedConfig> {
    readonly input: PutFileSystemPolicyCommandInput;
    constructor(input: PutFileSystemPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFileSystemPolicyCommandInput, PutFileSystemPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
