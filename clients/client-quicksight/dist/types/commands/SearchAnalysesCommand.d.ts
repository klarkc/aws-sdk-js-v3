import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchAnalysesRequest, SearchAnalysesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchAnalysesCommandInput extends SearchAnalysesRequest {
}
export interface SearchAnalysesCommandOutput extends SearchAnalysesResponse, __MetadataBearer {
}
/**
 * <p>Searches for analyses that belong to the user specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchAnalysesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchAnalysesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new SearchAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAnalysesCommandInput} for command's `input` shape.
 * @see {@link SearchAnalysesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchAnalysesCommand extends $Command<SearchAnalysesCommandInput, SearchAnalysesCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: SearchAnalysesCommandInput;
    constructor(input: SearchAnalysesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchAnalysesCommandInput, SearchAnalysesCommandOutput>;
    private serialize;
    private deserialize;
}
