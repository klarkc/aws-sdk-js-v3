import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { ListJobsByPipelineRequest, ListJobsByPipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJobsByPipelineCommandInput extends ListJobsByPipelineRequest {
}
export interface ListJobsByPipelineCommandOutput extends ListJobsByPipelineResponse, __MetadataBearer {
}
/**
 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
 *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
 *             one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByPipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByPipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListJobsByPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsByPipelineCommandInput} for command's `input` shape.
 * @see {@link ListJobsByPipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJobsByPipelineCommand extends $Command<ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: ListJobsByPipelineCommandInput;
    constructor(input: ListJobsByPipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput>;
    private serialize;
    private deserialize;
}
