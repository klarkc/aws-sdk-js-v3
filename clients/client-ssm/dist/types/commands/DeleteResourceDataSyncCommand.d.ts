import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {
}
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {
}
/**
 * <p>Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to
 *    data on managed instances are no longer synced to or from the target. Deleting a sync
 *    configuration does not delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourceDataSyncCommand extends $Command<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteResourceDataSyncCommandInput;
    constructor(input: DeleteResourceDataSyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
