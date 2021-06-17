import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteFileInput, DeleteFileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFileCommandInput extends DeleteFileInput {
}
export interface DeleteFileCommandOutput extends DeleteFileOutput, __MetadataBearer {
}
/**
 * <p>Deletes a specified file from a specified branch. A commit is created on the branch
 *             that contains the revision. The file still exists in the commits earlier to the commit
 *             that contains the deletion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteFileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileCommandInput} for command's `input` shape.
 * @see {@link DeleteFileCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFileCommand extends $Command<DeleteFileCommandInput, DeleteFileCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteFileCommandInput;
    constructor(input: DeleteFileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFileCommandInput, DeleteFileCommandOutput>;
    private serialize;
    private deserialize;
}
