import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectKeyPhrasesRequest, BatchDetectKeyPhrasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDetectKeyPhrasesCommandInput extends BatchDetectKeyPhrasesRequest {
}
export interface BatchDetectKeyPhrasesCommandOutput extends BatchDetectKeyPhrasesResponse, __MetadataBearer {
}
/**
 * <p>Detects the key noun phrases found in a batch of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDetectKeyPhrasesCommand extends $Command<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectKeyPhrasesCommandInput;
    constructor(input: BatchDetectKeyPhrasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput>;
    private serialize;
    private deserialize;
}
