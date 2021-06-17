import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput extends BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
}
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput extends BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput, __MetadataBearer {
}
/**
 * <p>Removes the association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand extends $Command<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput;
    constructor(input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
