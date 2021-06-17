import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApprovalRuleTemplateNameCommandInput extends UpdateApprovalRuleTemplateNameInput {
}
export interface UpdateApprovalRuleTemplateNameCommandOutput extends UpdateApprovalRuleTemplateNameOutput, __MetadataBearer {
}
/**
 * <p>Updates the name of a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateNameCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApprovalRuleTemplateNameCommand extends $Command<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateApprovalRuleTemplateNameCommandInput;
    constructor(input: UpdateApprovalRuleTemplateNameCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput>;
    private serialize;
    private deserialize;
}
