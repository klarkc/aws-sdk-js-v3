import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestBySquashInput, MergePullRequestBySquashOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergePullRequestBySquashCommandInput extends MergePullRequestBySquashInput {
}
export interface MergePullRequestBySquashCommandOutput extends MergePullRequestBySquashOutput, __MetadataBearer {
}
/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestBySquashCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestBySquashCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergePullRequestBySquashCommand extends $Command<MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestBySquashCommandInput;
    constructor(input: MergePullRequestBySquashCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput>;
    private serialize;
    private deserialize;
}
