import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { TranslateTextRequest, TranslateTextResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TranslateTextCommandInput extends TranslateTextRequest {
}
export interface TranslateTextCommandOutput extends TranslateTextResponse, __MetadataBearer {
}
/**
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a>what-is-languages</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new TranslateTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TranslateTextCommandInput} for command's `input` shape.
 * @see {@link TranslateTextCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TranslateTextCommand extends $Command<TranslateTextCommandInput, TranslateTextCommandOutput, TranslateClientResolvedConfig> {
    readonly input: TranslateTextCommandInput;
    constructor(input: TranslateTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TranslateTextCommandInput, TranslateTextCommandOutput>;
    private serialize;
    private deserialize;
}
