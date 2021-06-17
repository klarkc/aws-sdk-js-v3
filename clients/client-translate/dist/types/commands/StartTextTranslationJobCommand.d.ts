import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { StartTextTranslationJobRequest, StartTextTranslationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTextTranslationJobCommandInput extends StartTextTranslationJobRequest {
}
export interface StartTextTranslationJobCommandOutput extends StartTextTranslationJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to
 *       translate large volumes of text across multiple documents at once. For more information, see
 *         <a>async</a>.</p>
 *
 *          <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
 *          <note>
 *             <p>Amazon Translate does not support batch translation of multiple source languages at once.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StartTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StartTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new StartTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StartTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTextTranslationJobCommand extends $Command<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput, TranslateClientResolvedConfig> {
    readonly input: StartTextTranslationJobCommandInput;
    constructor(input: StartTextTranslationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput>;
    private serialize;
    private deserialize;
}
