import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateDescriptionInput, UpdateApprovalRuleTemplateDescriptionOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApprovalRuleTemplateDescriptionCommandInput extends UpdateApprovalRuleTemplateDescriptionInput {
}
export interface UpdateApprovalRuleTemplateDescriptionCommandOutput extends UpdateApprovalRuleTemplateDescriptionOutput, __MetadataBearer {
}
/**
 * <p>Updates the description for a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApprovalRuleTemplateDescriptionCommand extends $Command<UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateApprovalRuleTemplateDescriptionCommandInput;
    constructor(input: UpdateApprovalRuleTemplateDescriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
