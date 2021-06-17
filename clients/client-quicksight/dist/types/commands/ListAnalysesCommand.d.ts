import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListAnalysesRequest, ListAnalysesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAnalysesCommandInput extends ListAnalysesRequest {
}
export interface ListAnalysesCommandOutput extends ListAnalysesResponse, __MetadataBearer {
}
/**
 * <p>Lists Amazon QuickSight analyses that exist in the specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAnalysesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAnalysesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalysesCommandInput} for command's `input` shape.
 * @see {@link ListAnalysesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAnalysesCommand extends $Command<ListAnalysesCommandInput, ListAnalysesCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListAnalysesCommandInput;
    constructor(input: ListAnalysesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnalysesCommandInput, ListAnalysesCommandOutput>;
    private serialize;
    private deserialize;
}
