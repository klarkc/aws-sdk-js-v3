import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLanguageModelsCommandInput extends ListLanguageModelsRequest {
}
export interface ListLanguageModelsCommandOutput extends ListLanguageModelsResponse, __MetadataBearer {
}
/**
 * <p>Provides more information about the custom language models you've created. You can use
 *             the information in this list to find a specific custom language model. You can then use
 *             the  operation to get more information about
 *             it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListLanguageModelsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListLanguageModelsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListLanguageModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLanguageModelsCommandInput} for command's `input` shape.
 * @see {@link ListLanguageModelsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLanguageModelsCommand extends $Command<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListLanguageModelsCommandInput;
    constructor(input: ListLanguageModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput>;
    private serialize;
    private deserialize;
}
