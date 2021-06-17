import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { DeleteConnectionInput, DeleteConnectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConnectionCommandInput extends DeleteConnectionInput {
}
export interface DeleteConnectionCommandOutput extends DeleteConnectionOutput, __MetadataBearer {
}
/**
 * <p>The connection to be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConnectionCommand extends $Command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: DeleteConnectionCommandInput;
    constructor(input: DeleteConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
