import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergePullRequestByFastForwardCommandInput extends MergePullRequestByFastForwardInput {
}
export interface MergePullRequestByFastForwardCommandOutput extends MergePullRequestByFastForwardOutput, __MetadataBearer {
}
/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByFastForwardCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestByFastForwardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByFastForwardCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergePullRequestByFastForwardCommand extends $Command<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestByFastForwardCommandInput;
    constructor(input: MergePullRequestByFastForwardCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput>;
    private serialize;
    private deserialize;
}
