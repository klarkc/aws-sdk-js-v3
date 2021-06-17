import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeregisterWebhookWithThirdPartyInput, DeregisterWebhookWithThirdPartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterWebhookWithThirdPartyCommandInput extends DeregisterWebhookWithThirdPartyInput {
}
export interface DeregisterWebhookWithThirdPartyCommandOutput extends DeregisterWebhookWithThirdPartyOutput, __MetadataBearer {
}
/**
 * <p>Removes the connection between the webhook that was created by CodePipeline and the
 *             external tool with events to be detected. Currently supported only for webhooks that
 *             target an action type of GitHub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeregisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link DeregisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterWebhookWithThirdPartyCommand extends $Command<DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeregisterWebhookWithThirdPartyCommandInput;
    constructor(input: DeregisterWebhookWithThirdPartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput>;
    private serialize;
    private deserialize;
}
