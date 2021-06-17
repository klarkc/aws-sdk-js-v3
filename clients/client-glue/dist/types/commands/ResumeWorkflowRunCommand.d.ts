import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResumeWorkflowRunRequest, ResumeWorkflowRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResumeWorkflowRunCommandInput extends ResumeWorkflowRunRequest {
}
export interface ResumeWorkflowRunCommandOutput extends ResumeWorkflowRunResponse, __MetadataBearer {
}
/**
 * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResumeWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResumeWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResumeWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link ResumeWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeWorkflowRunCommand extends $Command<ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: ResumeWorkflowRunCommandInput;
    constructor(input: ResumeWorkflowRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput>;
    private serialize;
    private deserialize;
}
