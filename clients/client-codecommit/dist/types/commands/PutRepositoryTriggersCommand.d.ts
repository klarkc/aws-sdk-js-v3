import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PutRepositoryTriggersInput, PutRepositoryTriggersOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRepositoryTriggersCommandInput extends PutRepositoryTriggersInput {
}
export interface PutRepositoryTriggersCommandOutput extends PutRepositoryTriggersOutput, __MetadataBearer {
}
/**
 * <p>Replaces all triggers for a repository. Used to create or delete triggers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PutRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRepositoryTriggersCommand extends $Command<PutRepositoryTriggersCommandInput, PutRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PutRepositoryTriggersCommandInput;
    constructor(input: PutRepositoryTriggersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRepositoryTriggersCommandInput, PutRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
