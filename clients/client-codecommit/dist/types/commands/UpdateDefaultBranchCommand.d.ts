import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateDefaultBranchInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDefaultBranchCommandInput extends UpdateDefaultBranchInput {
}
export interface UpdateDefaultBranchCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets or changes the default branch name for the specified repository.</p>
 *         <note>
 *             <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateDefaultBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateDefaultBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateDefaultBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDefaultBranchCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDefaultBranchCommand extends $Command<UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateDefaultBranchCommandInput;
    constructor(input: UpdateDefaultBranchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput>;
    private serialize;
    private deserialize;
}
