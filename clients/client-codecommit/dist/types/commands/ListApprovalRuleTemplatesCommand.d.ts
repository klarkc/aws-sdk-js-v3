import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListApprovalRuleTemplatesInput, ListApprovalRuleTemplatesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListApprovalRuleTemplatesCommandInput extends ListApprovalRuleTemplatesInput {
}
export interface ListApprovalRuleTemplatesCommandOutput extends ListApprovalRuleTemplatesOutput, __MetadataBearer {
}
/**
 * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
 *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListApprovalRuleTemplatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListApprovalRuleTemplatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListApprovalRuleTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovalRuleTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListApprovalRuleTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApprovalRuleTemplatesCommand extends $Command<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListApprovalRuleTemplatesCommandInput;
    constructor(input: ListApprovalRuleTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
