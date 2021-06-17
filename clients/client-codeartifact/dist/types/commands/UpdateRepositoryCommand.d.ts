import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { UpdateRepositoryRequest, UpdateRepositoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRepositoryCommandInput extends UpdateRepositoryRequest {
}
export interface UpdateRepositoryCommandOutput extends UpdateRepositoryResult, __MetadataBearer {
}
/**
 * <p>
 *          Update the properties of a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdateRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdateRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new UpdateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRepositoryCommand extends $Command<UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: UpdateRepositoryCommandInput;
    constructor(input: UpdateRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
