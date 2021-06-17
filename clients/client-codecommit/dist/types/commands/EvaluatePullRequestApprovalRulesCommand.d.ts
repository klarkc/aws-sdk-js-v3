import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EvaluatePullRequestApprovalRulesCommandInput extends EvaluatePullRequestApprovalRulesInput {
}
export interface EvaluatePullRequestApprovalRulesCommandOutput extends EvaluatePullRequestApprovalRulesOutput, __MetadataBearer {
}
/**
 * <p>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new EvaluatePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluatePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link EvaluatePullRequestApprovalRulesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EvaluatePullRequestApprovalRulesCommand extends $Command<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: EvaluatePullRequestApprovalRulesCommandInput;
    constructor(input: EvaluatePullRequestApprovalRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput>;
    private serialize;
    private deserialize;
}
