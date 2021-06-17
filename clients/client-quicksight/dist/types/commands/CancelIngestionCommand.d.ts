import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CancelIngestionRequest, CancelIngestionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelIngestionCommandInput extends CancelIngestionRequest {
}
export interface CancelIngestionCommandOutput extends CancelIngestionResponse, __MetadataBearer {
}
/**
 * <p>Cancels an ongoing ingestion of data into SPICE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CancelIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CancelIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CancelIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelIngestionCommandInput} for command's `input` shape.
 * @see {@link CancelIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelIngestionCommand extends $Command<CancelIngestionCommandInput, CancelIngestionCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CancelIngestionCommandInput;
    constructor(input: CancelIngestionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelIngestionCommandInput, CancelIngestionCommandOutput>;
    private serialize;
    private deserialize;
}
