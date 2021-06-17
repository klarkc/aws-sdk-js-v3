import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteRepositoryInput, DeleteRepositoryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRepositoryCommandInput extends DeleteRepositoryInput {
}
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryOutput, __MetadataBearer {
}
/**
 * <p>Deletes a repository. If a specified repository was already deleted, a null repository
 *             ID is returned.</p>
 *         <important>
 *             <p>Deleting a repository also deletes all associated objects and metadata. After a repository is
 *                 deleted, all future push calls to the deleted repository fail.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRepositoryCommand extends $Command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteRepositoryCommandInput;
    constructor(input: DeleteRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
