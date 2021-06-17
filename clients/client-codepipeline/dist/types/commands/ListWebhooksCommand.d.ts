import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListWebhooksInput, ListWebhooksOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWebhooksCommandInput extends ListWebhooksInput {
}
export interface ListWebhooksCommandOutput extends ListWebhooksOutput, __MetadataBearer {
}
/**
 * <p>Gets a listing of all the webhooks in this AWS Region for this account. The output
 *             lists all webhooks and includes the webhook URL and ARN and the configuration for each
 *             webhook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListWebhooksCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListWebhooksCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListWebhooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebhooksCommandInput} for command's `input` shape.
 * @see {@link ListWebhooksCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWebhooksCommand extends $Command<ListWebhooksCommandInput, ListWebhooksCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListWebhooksCommandInput;
    constructor(input: ListWebhooksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebhooksCommandInput, ListWebhooksCommandOutput>;
    private serialize;
    private deserialize;
}
