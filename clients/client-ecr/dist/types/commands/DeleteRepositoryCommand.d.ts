import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRepositoryCommandInput extends DeleteRepositoryRequest {
}
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResponse, __MetadataBearer {
}
/**
 * <p>Deletes a repository. If the repository contains images, you must either delete all
 *             images in the repository or use the <code>force</code> option to delete the
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRepositoryCommand extends $Command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteRepositoryCommandInput;
    constructor(input: DeleteRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
