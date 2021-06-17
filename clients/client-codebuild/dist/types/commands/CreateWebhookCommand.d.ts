import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWebhookCommandInput extends CreateWebhookInput {
}
export interface CreateWebhookCommandOutput extends CreateWebhookOutput, __MetadataBearer {
}
/**
 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
 *       Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a
 *       code change is pushed to the repository.</p>
 *          <important>
 *             <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build
 *         step in AWS CodePipeline, then two identical builds are created for each commit. One build is
 *         triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build
 *         basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we
 *         recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the
 *         Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWebhookCommand extends $Command<CreateWebhookCommandInput, CreateWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: CreateWebhookCommandInput;
    constructor(input: CreateWebhookCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWebhookCommandInput, CreateWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
