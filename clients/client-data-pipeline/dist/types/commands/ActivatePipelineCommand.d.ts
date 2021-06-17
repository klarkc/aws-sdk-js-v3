import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ActivatePipelineInput, ActivatePipelineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivatePipelineCommandInput extends ActivatePipelineInput {
}
export interface ActivatePipelineCommandOutput extends ActivatePipelineOutput, __MetadataBearer {
}
/**
 * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation,
 *            activation fails.</p>
 *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
 *            call <a>DeactivatePipeline</a>.</p>
 *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ActivatePipeline
 * Content-Length: 39
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE"}
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: ee19d5bf-074e-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 2
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ActivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ActivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ActivatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivatePipelineCommandInput} for command's `input` shape.
 * @see {@link ActivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivatePipelineCommand extends $Command<ActivatePipelineCommandInput, ActivatePipelineCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: ActivatePipelineCommandInput;
    constructor(input: ActivatePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivatePipelineCommandInput, ActivatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
