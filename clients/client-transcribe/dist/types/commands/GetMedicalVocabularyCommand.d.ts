import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetMedicalVocabularyRequest, GetMedicalVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMedicalVocabularyCommandInput extends GetMedicalVocabularyRequest {
}
export interface GetMedicalVocabularyCommandOutput extends GetMedicalVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a medical vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link GetMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMedicalVocabularyCommand extends $Command<GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetMedicalVocabularyCommandInput;
    constructor(input: GetMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}
