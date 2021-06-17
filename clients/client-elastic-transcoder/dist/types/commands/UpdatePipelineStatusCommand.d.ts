import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { UpdatePipelineStatusRequest, UpdatePipelineStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePipelineStatusCommandInput extends UpdatePipelineStatusRequest {
}
export interface UpdatePipelineStatusCommandOutput extends UpdatePipelineStatusResponse, __MetadataBearer {
}
/**
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePipelineStatusCommand extends $Command<UpdatePipelineStatusCommandInput, UpdatePipelineStatusCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: UpdatePipelineStatusCommandInput;
    constructor(input: UpdatePipelineStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineStatusCommandInput, UpdatePipelineStatusCommandOutput>;
    private serialize;
    private deserialize;
}
