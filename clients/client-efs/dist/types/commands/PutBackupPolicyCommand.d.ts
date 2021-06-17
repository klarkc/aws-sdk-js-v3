import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { BackupPolicyDescription, PutBackupPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutBackupPolicyCommandInput extends PutBackupPolicyRequest {
}
export interface PutBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {
}
/**
 * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutBackupPolicyCommand extends $Command<PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput, EFSClientResolvedConfig> {
    readonly input: PutBackupPolicyCommandInput;
    constructor(input: PutBackupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
