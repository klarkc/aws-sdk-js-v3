import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWebhookCommandInput extends DeleteWebhookInput {
}
export interface DeleteWebhookCommandOutput extends DeleteWebhookOutput, __MetadataBearer {
}
/**
 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
 *             Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code
 *             change is pushed to the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWebhookCommand extends $Command<DeleteWebhookCommandInput, DeleteWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteWebhookCommandInput;
    constructor(input: DeleteWebhookCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
