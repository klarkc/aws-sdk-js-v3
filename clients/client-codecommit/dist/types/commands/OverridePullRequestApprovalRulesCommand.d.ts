import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { OverridePullRequestApprovalRulesInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface OverridePullRequestApprovalRulesCommandInput extends OverridePullRequestApprovalRulesInput {
}
export interface OverridePullRequestApprovalRulesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, OverridePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, OverridePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new OverridePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OverridePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link OverridePullRequestApprovalRulesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class OverridePullRequestApprovalRulesCommand extends $Command<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: OverridePullRequestApprovalRulesCommandInput;
    constructor(input: OverridePullRequestApprovalRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput>;
    private serialize;
    private deserialize;
}
