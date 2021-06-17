import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { DeleteDiscovererRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDiscovererCommandInput extends DeleteDiscovererRequest {
}
export interface DeleteDiscovererCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DeleteDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiscovererCommandInput} for command's `input` shape.
 * @see {@link DeleteDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDiscovererCommand extends $Command<DeleteDiscovererCommandInput, DeleteDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: DeleteDiscovererCommandInput;
    constructor(input: DeleteDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDiscovererCommandInput, DeleteDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
