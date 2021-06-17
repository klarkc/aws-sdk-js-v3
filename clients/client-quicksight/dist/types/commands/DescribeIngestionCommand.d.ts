import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeIngestionRequest, DescribeIngestionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIngestionCommandInput extends DescribeIngestionRequest {
}
export interface DescribeIngestionCommandOutput extends DescribeIngestionResponse, __MetadataBearer {
}
/**
 * <p>Describes a SPICE ingestion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIngestionCommandInput} for command's `input` shape.
 * @see {@link DescribeIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIngestionCommand extends $Command<DescribeIngestionCommandInput, DescribeIngestionCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeIngestionCommandInput;
    constructor(input: DescribeIngestionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIngestionCommandInput, DescribeIngestionCommandOutput>;
    private serialize;
    private deserialize;
}
