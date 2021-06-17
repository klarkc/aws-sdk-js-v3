import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetTracesCommandInput extends BatchGetTracesRequest {
}
export interface BatchGetTracesCommandOutput extends BatchGetTracesResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetTracesCommand extends $Command<BatchGetTracesCommandInput, BatchGetTracesCommandOutput, XRayClientResolvedConfig> {
    readonly input: BatchGetTracesCommandInput;
    constructor(input: BatchGetTracesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetTracesCommandInput, BatchGetTracesCommandOutput>;
    private serialize;
    private deserialize;
}
