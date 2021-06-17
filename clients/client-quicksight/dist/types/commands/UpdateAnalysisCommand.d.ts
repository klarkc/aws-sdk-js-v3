import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateAnalysisRequest, UpdateAnalysisResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAnalysisCommandInput extends UpdateAnalysisRequest {
}
export interface UpdateAnalysisCommandOutput extends UpdateAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Updates an analysis in Amazon QuickSight</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnalysisCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAnalysisCommand extends $Command<UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateAnalysisCommandInput;
    constructor(input: UpdateAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
