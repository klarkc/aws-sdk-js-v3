import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PollForThirdPartyJobsCommandInput extends PollForThirdPartyJobsInput {
}
export interface PollForThirdPartyJobsCommandOutput extends PollForThirdPartyJobsOutput, __MetadataBearer {
}
/**
 * <p>Determines whether there are any third party jobs for a job worker to act on. Used
 *             for partner actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForThirdPartyJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForThirdPartyJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PollForThirdPartyJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForThirdPartyJobsCommandInput} for command's `input` shape.
 * @see {@link PollForThirdPartyJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PollForThirdPartyJobsCommand extends $Command<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PollForThirdPartyJobsCommandInput;
    constructor(input: PollForThirdPartyJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput>;
    private serialize;
    private deserialize;
}
