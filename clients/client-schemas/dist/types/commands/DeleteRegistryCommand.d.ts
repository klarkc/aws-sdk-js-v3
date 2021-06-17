import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { DeleteRegistryRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRegistryCommandInput extends DeleteRegistryRequest {
}
export interface DeleteRegistryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a Registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRegistryCommand extends $Command<DeleteRegistryCommandInput, DeleteRegistryCommandOutput, SchemasClientResolvedConfig> {
    readonly input: DeleteRegistryCommandInput;
    constructor(input: DeleteRegistryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegistryCommandInput, DeleteRegistryCommandOutput>;
    private serialize;
    private deserialize;
}
