import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutWebhookInput, PutWebhookOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutWebhookCommandInput extends PutWebhookInput {
}
export interface PutWebhookCommandOutput extends PutWebhookOutput, __MetadataBearer {
}
/**
 * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This
 *             URL can be supplied to third party source hosting providers to call every time there's a
 *             code change. When CodePipeline receives a POST request on this URL, the pipeline defined
 *             in the webhook is started as long as the POST request satisfied the authentication and
 *             filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty
 *             and DeregisterWebhookWithThirdParty APIs can be used to automatically configure
 *             supported third parties to call the generated webhook URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWebhookCommandInput} for command's `input` shape.
 * @see {@link PutWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutWebhookCommand extends $Command<PutWebhookCommandInput, PutWebhookCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutWebhookCommandInput;
    constructor(input: PutWebhookCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutWebhookCommandInput, PutWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
