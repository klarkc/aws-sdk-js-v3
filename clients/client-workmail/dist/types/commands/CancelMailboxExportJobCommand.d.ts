import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { CancelMailboxExportJobRequest, CancelMailboxExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelMailboxExportJobCommandInput extends CancelMailboxExportJobRequest {
}
export interface CancelMailboxExportJobCommandOutput extends CancelMailboxExportJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels a mailbox export job.</p>
 *          <note>
 *             <p>If the mailbox export job is near completion, it might not be possible to cancel
 *             it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CancelMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CancelMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CancelMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelMailboxExportJobCommand extends $Command<CancelMailboxExportJobCommandInput, CancelMailboxExportJobCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: CancelMailboxExportJobCommandInput;
    constructor(input: CancelMailboxExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelMailboxExportJobCommandInput, CancelMailboxExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
