import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetRepositoryTriggersInput, GetRepositoryTriggersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRepositoryTriggersCommandInput extends GetRepositoryTriggersInput {
}
export interface GetRepositoryTriggersCommandOutput extends GetRepositoryTriggersOutput, __MetadataBearer {
}
/**
 * <p>Gets information about triggers configured for a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRepositoryTriggersCommand extends $Command<GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetRepositoryTriggersCommandInput;
    constructor(input: GetRepositoryTriggersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
