import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutApprovalResultInput, PutApprovalResultOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutApprovalResultCommandInput extends PutApprovalResultInput {
}
export interface PutApprovalResultCommandOutput extends PutApprovalResultOutput, __MetadataBearer {
}
/**
 * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid
 *             responses include Approved and Rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutApprovalResultCommand extends $Command<PutApprovalResultCommandInput, PutApprovalResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutApprovalResultCommandInput;
    constructor(input: PutApprovalResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutApprovalResultCommandInput, PutApprovalResultCommandOutput>;
    private serialize;
    private deserialize;
}
