import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterWebhookWithThirdPartyCommandInput extends RegisterWebhookWithThirdPartyInput {
}
export interface RegisterWebhookWithThirdPartyCommandOutput extends RegisterWebhookWithThirdPartyOutput, __MetadataBearer {
}
/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RegisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link RegisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterWebhookWithThirdPartyCommand extends $Command<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: RegisterWebhookWithThirdPartyCommandInput;
    constructor(input: RegisterWebhookWithThirdPartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput>;
    private serialize;
    private deserialize;
}
