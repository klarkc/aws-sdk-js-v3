import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMailboxQuotaCommandInput extends UpdateMailboxQuotaRequest {
}
export interface UpdateMailboxQuotaCommandOutput extends UpdateMailboxQuotaResponse, __MetadataBearer {
}
/**
 * <p>Updates a user's current mailbox quota for a specified organization and
 *          user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMailboxQuotaCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMailboxQuotaCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateMailboxQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMailboxQuotaCommandInput} for command's `input` shape.
 * @see {@link UpdateMailboxQuotaCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMailboxQuotaCommand extends $Command<UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdateMailboxQuotaCommandInput;
    constructor(input: UpdateMailboxQuotaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
