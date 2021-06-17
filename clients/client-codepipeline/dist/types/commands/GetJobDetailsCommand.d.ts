import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetJobDetailsInput, GetJobDetailsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobDetailsCommandInput extends GetJobDetailsInput {
}
export interface GetJobDetailsCommandOutput extends GetJobDetailsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about a job. Used for custom actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobDetailsCommand extends $Command<GetJobDetailsCommandInput, GetJobDetailsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetJobDetailsCommandInput;
    constructor(input: GetJobDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobDetailsCommandInput, GetJobDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
