import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListAssociatedApprovalRuleTemplatesForRepositoryInput, ListAssociatedApprovalRuleTemplatesForRepositoryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput extends ListAssociatedApprovalRuleTemplatesForRepositoryInput {
}
export interface ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput extends ListAssociatedApprovalRuleTemplatesForRepositoryOutput, __MetadataBearer {
}
/**
 * <p>Lists all approval rule templates that are associated with a specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryCommand extends $Command<ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput;
    constructor(input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
