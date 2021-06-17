import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { RestoreAnalysisRequest, RestoreAnalysisResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreAnalysisCommandInput extends RestoreAnalysisRequest {
}
export interface RestoreAnalysisCommandOutput extends RestoreAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Restores an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RestoreAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RestoreAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RestoreAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAnalysisCommandInput} for command's `input` shape.
 * @see {@link RestoreAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreAnalysisCommand extends $Command<RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: RestoreAnalysisCommandInput;
    constructor(input: RestoreAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
