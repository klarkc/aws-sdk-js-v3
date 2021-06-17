import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWebhookCommandInput extends UpdateWebhookInput {
}
export interface UpdateWebhookCommandOutput extends UpdateWebhookOutput, __MetadataBearer {
}
/**
 * <p> Updates the webhook associated with an AWS CodeBuild build project. </p>
 *          <note>
 *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWebhookCommand extends $Command<UpdateWebhookCommandInput, UpdateWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: UpdateWebhookCommandInput;
    constructor(input: UpdateWebhookCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWebhookCommandInput, UpdateWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
