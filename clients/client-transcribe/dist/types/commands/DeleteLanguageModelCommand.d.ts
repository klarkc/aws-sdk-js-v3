import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteLanguageModelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLanguageModelCommandInput extends DeleteLanguageModelRequest {
}
export interface DeleteLanguageModelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a custom language model using its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DeleteLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLanguageModelCommand extends $Command<DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteLanguageModelCommandInput;
    constructor(input: DeleteLanguageModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput>;
    private serialize;
    private deserialize;
}
