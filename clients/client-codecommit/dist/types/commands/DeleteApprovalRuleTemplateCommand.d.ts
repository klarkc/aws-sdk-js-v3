import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApprovalRuleTemplateCommandInput extends DeleteApprovalRuleTemplateInput {
}
export interface DeleteApprovalRuleTemplateCommandOutput extends DeleteApprovalRuleTemplateOutput, __MetadataBearer {
}
/**
 * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApprovalRuleTemplateCommand extends $Command<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteApprovalRuleTemplateCommandInput;
    constructor(input: DeleteApprovalRuleTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
