import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteBranchInput, DeleteBranchOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBranchCommandInput extends DeleteBranchInput {
}
export interface DeleteBranchCommandOutput extends DeleteBranchOutput, __MetadataBearer {
}
/**
 * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBranchCommandInput} for command's `input` shape.
 * @see {@link DeleteBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBranchCommand extends $Command<DeleteBranchCommandInput, DeleteBranchCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteBranchCommandInput;
    constructor(input: DeleteBranchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBranchCommandInput, DeleteBranchCommandOutput>;
    private serialize;
    private deserialize;
}
