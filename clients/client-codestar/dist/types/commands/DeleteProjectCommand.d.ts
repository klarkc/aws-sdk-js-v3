import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProjectCommandInput extends DeleteProjectRequest {
}
export interface DeleteProjectCommandOutput extends DeleteProjectResult, __MetadataBearer {
}
/**
 * <p>Deletes a project, including project resources. Does not delete users associated with
 *       the project, but does delete the IAM roles that allowed access to the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProjectCommand extends $Command<DeleteProjectCommandInput, DeleteProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DeleteProjectCommandInput;
    constructor(input: DeleteProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProjectCommandInput, DeleteProjectCommandOutput>;
    private serialize;
    private deserialize;
}
