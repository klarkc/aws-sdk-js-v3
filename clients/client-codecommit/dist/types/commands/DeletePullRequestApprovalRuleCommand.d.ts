import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePullRequestApprovalRuleCommandInput extends DeletePullRequestApprovalRuleInput {
}
export interface DeletePullRequestApprovalRuleCommandOutput extends DeletePullRequestApprovalRuleOutput, __MetadataBearer {
}
/**
 * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
 *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
 *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeletePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeletePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeletePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePullRequestApprovalRuleCommand extends $Command<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeletePullRequestApprovalRuleCommandInput;
    constructor(input: DeletePullRequestApprovalRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput>;
    private serialize;
    private deserialize;
}
