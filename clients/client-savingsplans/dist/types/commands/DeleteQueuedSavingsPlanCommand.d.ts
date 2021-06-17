import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQueuedSavingsPlanCommandInput extends DeleteQueuedSavingsPlanRequest {
}
export interface DeleteQueuedSavingsPlanCommandOutput extends DeleteQueuedSavingsPlanResponse, __MetadataBearer {
}
/**
 * <p>Deletes the queued purchase for the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DeleteQueuedSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DeleteQueuedSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DeleteQueuedSavingsPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueuedSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQueuedSavingsPlanCommand extends $Command<DeleteQueuedSavingsPlanCommandInput, DeleteQueuedSavingsPlanCommandOutput, SavingsplansClientResolvedConfig> {
    readonly input: DeleteQueuedSavingsPlanCommandInput;
    constructor(input: DeleteQueuedSavingsPlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SavingsplansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueuedSavingsPlanCommandInput, DeleteQueuedSavingsPlanCommandOutput>;
    private serialize;
    private deserialize;
}
