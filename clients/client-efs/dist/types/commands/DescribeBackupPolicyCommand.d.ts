import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { BackupPolicyDescription, DescribeBackupPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBackupPolicyCommandInput extends DescribeBackupPolicyRequest {
}
export interface DescribeBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {
}
/**
 * <p>Returns the backup policy for the specified EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBackupPolicyCommand extends $Command<DescribeBackupPolicyCommandInput, DescribeBackupPolicyCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeBackupPolicyCommandInput;
    constructor(input: DescribeBackupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupPolicyCommandInput, DescribeBackupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
