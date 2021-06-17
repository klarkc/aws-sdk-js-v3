import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { ReadPipelineRequest, ReadPipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReadPipelineCommandInput extends ReadPipelineRequest {
}
export interface ReadPipelineCommandOutput extends ReadPipelineResponse, __MetadataBearer {
}
/**
 * <p>The ReadPipeline operation gets detailed information about a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReadPipelineCommandInput} for command's `input` shape.
 * @see {@link ReadPipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReadPipelineCommand extends $Command<ReadPipelineCommandInput, ReadPipelineCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: ReadPipelineCommandInput;
    constructor(input: ReadPipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReadPipelineCommandInput, ReadPipelineCommandOutput>;
    private serialize;
    private deserialize;
}
