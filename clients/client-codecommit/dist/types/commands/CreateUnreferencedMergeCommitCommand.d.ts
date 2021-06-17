import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateUnreferencedMergeCommitInput, CreateUnreferencedMergeCommitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUnreferencedMergeCommitCommandInput extends CreateUnreferencedMergeCommitInput {
}
export interface CreateUnreferencedMergeCommitCommandOutput extends CreateUnreferencedMergeCommitOutput, __MetadataBearer {
}
/**
 * <p>Creates an unreferenced commit that represents the result of merging two branches
 *             using a specified merge strategy. This can help you determine the outcome of a potential
 *             merge. This API cannot be used with the fast-forward merge strategy because that
 *             strategy does not create a merge commit.</p>
 *         <note>
 *             <p>This unreferenced merge commit
 *         can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateUnreferencedMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateUnreferencedMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateUnreferencedMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUnreferencedMergeCommitCommandInput} for command's `input` shape.
 * @see {@link CreateUnreferencedMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUnreferencedMergeCommitCommand extends $Command<CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateUnreferencedMergeCommitCommandInput;
    constructor(input: CreateUnreferencedMergeCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput>;
    private serialize;
    private deserialize;
}
