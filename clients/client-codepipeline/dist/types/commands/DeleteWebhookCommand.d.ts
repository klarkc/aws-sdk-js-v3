import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWebhookCommandInput extends DeleteWebhookInput {
}
export interface DeleteWebhookCommandOutput extends DeleteWebhookOutput, __MetadataBearer {
}
/**
 * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS
 *             CodePipeline from starting a pipeline every time an external event occurs. The API
 *             returns successfully when trying to delete a webhook that is already deleted. If a
 *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 *             different URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWebhookCommand extends $Command<DeleteWebhookCommandInput, DeleteWebhookCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeleteWebhookCommandInput;
    constructor(input: DeleteWebhookCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
