import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { AssociateApprovalRuleTemplateWithRepositoryInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateApprovalRuleTemplateWithRepositoryCommandInput extends AssociateApprovalRuleTemplateWithRepositoryInput {
}
export interface AssociateApprovalRuleTemplateWithRepositoryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates an association between an approval rule template and a specified repository.
 *             Then, the next time a pull request is created in the repository where the destination
 *             reference (if specified) matches the destination reference (branch) for the pull
 *             request, an approval rule that matches the template conditions is automatically created
 *             for that pull request. If no destination references are specified in the template, an
 *             approval rule that matches the template contents is created for all pull requests in
 *             that repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateApprovalRuleTemplateWithRepositoryCommand extends $Command<AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: AssociateApprovalRuleTemplateWithRepositoryCommandInput;
    constructor(input: AssociateApprovalRuleTemplateWithRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
