import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeleteCustomActionTypeInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomActionTypeCommandInput extends DeleteCustomActionTypeInput {
}
export interface DeleteCustomActionTypeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
 *             fails after the action is marked for deletion. Used for custom actions only.</p>
 *         <important>
 *             <p>To re-create a custom action after it has been deleted you must use a string in
 *                 the version field that has never been used before. This string can be an incremented
 *                 version number, for example. To restore a deleted custom action, use a JSON file
 *                 that is identical to the deleted action, including the original string in the
 *                 version field.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeleteCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomActionTypeCommand extends $Command<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeleteCustomActionTypeCommandInput;
    constructor(input: DeleteCustomActionTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
