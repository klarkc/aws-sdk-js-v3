import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectDominantLanguageRequest, BatchDetectDominantLanguageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDetectDominantLanguageCommandInput extends BatchDetectDominantLanguageRequest {
}
export interface BatchDetectDominantLanguageCommandOutput extends BatchDetectDominantLanguageResponse, __MetadataBearer {
}
/**
 * <p>Determines the dominant language of the input text for a batch of documents. For a list
 *       of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link BatchDetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDetectDominantLanguageCommand extends $Command<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectDominantLanguageCommandInput;
    constructor(input: BatchDetectDominantLanguageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput>;
    private serialize;
    private deserialize;
}
