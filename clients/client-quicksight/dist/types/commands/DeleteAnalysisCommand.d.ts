import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteAnalysisRequest, DeleteAnalysisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAnalysisCommandInput extends DeleteAnalysisRequest {
}
export interface DeleteAnalysisCommandOutput extends DeleteAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
 *             which you can restore the analysis. If you don't specify a recovery window value, the
 *             operation defaults to 30 days. QuickSight attaches a <code>DeletionTime</code> stamp to
 *             the response that specifies the end of the recovery window. At the end of the recovery
 *             window, QuickSight deletes the analysis permanently.</p>
 *         <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
 *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
 *             the analysis. The analysis remains visible in the API until it's deleted, so you can
 *             describe it but you can't make a template from it.</p>
 *         <p>An analysis that's scheduled for deletion isn't accessible in the QuickSight console.
 *             To access it in the console, restore it. Deleting an analysis doesn't delete the
 *             dashboards that you publish from it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAnalysisCommand extends $Command<DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteAnalysisCommandInput;
    constructor(input: DeleteAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
