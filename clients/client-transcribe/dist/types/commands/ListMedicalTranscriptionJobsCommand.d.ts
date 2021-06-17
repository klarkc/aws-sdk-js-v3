import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListMedicalTranscriptionJobsRequest, ListMedicalTranscriptionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMedicalTranscriptionJobsCommandInput extends ListMedicalTranscriptionJobsRequest {
}
export interface ListMedicalTranscriptionJobsCommandOutput extends ListMedicalTranscriptionJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists medical transcription jobs with a specified status or substring that matches
 *             their names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListMedicalTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMedicalTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListMedicalTranscriptionJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMedicalTranscriptionJobsCommand extends $Command<ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListMedicalTranscriptionJobsCommandInput;
    constructor(input: ListMedicalTranscriptionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
