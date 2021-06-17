import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListRepositoriesForApprovalRuleTemplateInput, ListRepositoriesForApprovalRuleTemplateOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRepositoriesForApprovalRuleTemplateCommandInput extends ListRepositoriesForApprovalRuleTemplateInput {
}
export interface ListRepositoriesForApprovalRuleTemplateCommandOutput extends ListRepositoriesForApprovalRuleTemplateOutput, __MetadataBearer {
}
/**
 * <p>Lists all repositories associated with the specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListRepositoriesForApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRepositoriesForApprovalRuleTemplateCommand extends $Command<ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListRepositoriesForApprovalRuleTemplateCommandInput;
    constructor(input: ListRepositoriesForApprovalRuleTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
