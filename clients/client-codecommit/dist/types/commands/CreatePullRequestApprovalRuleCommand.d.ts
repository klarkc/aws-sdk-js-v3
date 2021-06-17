import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePullRequestApprovalRuleCommandInput extends CreatePullRequestApprovalRuleInput {
}
export interface CreatePullRequestApprovalRuleCommandOutput extends CreatePullRequestApprovalRuleOutput, __MetadataBearer {
}
/**
 * <p>Creates an approval rule for a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreatePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePullRequestApprovalRuleCommand extends $Command<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreatePullRequestApprovalRuleCommandInput;
    constructor(input: CreatePullRequestApprovalRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput>;
    private serialize;
    private deserialize;
}
