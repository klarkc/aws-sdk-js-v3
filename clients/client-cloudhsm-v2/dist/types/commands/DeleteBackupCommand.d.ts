import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBackupCommandInput extends DeleteBackupRequest {
}
export interface DeleteBackupCommandOutput extends DeleteBackupResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days
 *             after the DeleteBackup request is made. For more information on restoring a backup, see
 *                 <a>RestoreBackup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DeleteBackupCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DeleteBackupCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBackupCommand extends $Command<DeleteBackupCommandInput, DeleteBackupCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DeleteBackupCommandInput;
    constructor(input: DeleteBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput>;
    private serialize;
    private deserialize;
}
