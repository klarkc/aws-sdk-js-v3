import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreBackupCommandInput extends RestoreBackupRequest {
}
export interface RestoreBackupCommandOutput extends RestoreBackupResponse, __MetadataBearer {
}
/**
 * <p>Restores a specified AWS CloudHSM backup that is in the
 *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
 *                 <a>DeleteBackup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, RestoreBackupCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, RestoreBackupCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new RestoreBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreBackupCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreBackupCommand extends $Command<RestoreBackupCommandInput, RestoreBackupCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: RestoreBackupCommandInput;
    constructor(input: RestoreBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreBackupCommandInput, RestoreBackupCommandOutput>;
    private serialize;
    private deserialize;
}
