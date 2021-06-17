import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceDataSyncCommandInput extends UpdateResourceDataSyncRequest {
}
export interface UpdateResourceDataSyncCommandOutput extends UpdateResourceDataSyncResult, __MetadataBearer {
}
/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the Include only the current account option, you can't edit that
 *    sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead,
 *    you must delete the first resource data sync, and create a new one.</p>
 *          <note>
 *             <p>This API action only supports a resource data sync that was created with a SyncFromSource
 *      <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceDataSyncCommand extends $Command<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateResourceDataSyncCommandInput;
    constructor(input: UpdateResourceDataSyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
