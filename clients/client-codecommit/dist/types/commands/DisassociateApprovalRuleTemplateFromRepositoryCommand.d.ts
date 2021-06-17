import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DisassociateApprovalRuleTemplateFromRepositoryInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateApprovalRuleTemplateFromRepositoryCommandInput extends DisassociateApprovalRuleTemplateFromRepositoryInput {
}
export interface DisassociateApprovalRuleTemplateFromRepositoryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the association between a template and a repository so that approval rules
 *             based on the template are not automatically created when pull requests are created in
 *             the specified repository. This does not delete any approval rules previously created for
 *             pull requests through the template association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DisassociateApprovalRuleTemplateFromRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateApprovalRuleTemplateFromRepositoryCommand extends $Command<DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput;
    constructor(input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
