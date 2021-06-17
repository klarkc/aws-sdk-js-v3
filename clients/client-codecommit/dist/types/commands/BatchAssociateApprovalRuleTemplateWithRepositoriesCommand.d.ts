import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesInput, BatchAssociateApprovalRuleTemplateWithRepositoriesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
}
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput, __MetadataBearer {
}
/**
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput;
    constructor(input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
