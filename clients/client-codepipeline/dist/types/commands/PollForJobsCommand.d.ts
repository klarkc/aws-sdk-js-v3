import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForJobsInput, PollForJobsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PollForJobsCommandInput extends PollForJobsInput {
}
export interface PollForJobsCommandOutput extends PollForJobsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about any jobs for AWS CodePipeline to act on.
 *                 <code>PollForJobs</code> is valid only for action types with "Custom" in the owner
 *             field. If the action type contains "AWS" or "ThirdParty" in the owner field, the
 *                 <code>PollForJobs</code> action returns an error.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PollForJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForJobsCommandInput} for command's `input` shape.
 * @see {@link PollForJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PollForJobsCommand extends $Command<PollForJobsCommandInput, PollForJobsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PollForJobsCommandInput;
    constructor(input: PollForJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForJobsCommandInput, PollForJobsCommandOutput>;
    private serialize;
    private deserialize;
}
