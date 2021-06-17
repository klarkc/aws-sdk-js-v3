import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { UpdateActionTypeInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateActionTypeCommandInput extends UpdateActionTypeInput {
}
export interface UpdateActionTypeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates an action type that was created with any supported integration model, where
 *             the action type is to be used by customers of the action type provider. Use a JSON file
 *             with the action definition and <code>UpdateActionType</code> to provide the full
 *             structure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdateActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdateActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new UpdateActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateActionTypeCommand extends $Command<UpdateActionTypeCommandInput, UpdateActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: UpdateActionTypeCommandInput;
    constructor(input: UpdateActionTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateActionTypeCommandInput, UpdateActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
