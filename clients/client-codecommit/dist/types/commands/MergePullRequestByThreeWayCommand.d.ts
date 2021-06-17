import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByThreeWayInput, MergePullRequestByThreeWayOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergePullRequestByThreeWayCommandInput extends MergePullRequestByThreeWayInput {
}
export interface MergePullRequestByThreeWayCommandOutput extends MergePullRequestByThreeWayOutput, __MetadataBearer {
}
/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergePullRequestByThreeWayCommand extends $Command<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestByThreeWayCommandInput;
    constructor(input: MergePullRequestByThreeWayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput>;
    private serialize;
    private deserialize;
}
