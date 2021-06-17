import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteServiceActionInput, DeleteServiceActionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServiceActionCommandInput extends DeleteServiceActionInput {
}
export interface DeleteServiceActionCommandOutput extends DeleteServiceActionOutput, __MetadataBearer {
}
/**
 * <p>Deletes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceActionCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServiceActionCommand extends $Command<DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteServiceActionCommandInput;
    constructor(input: DeleteServiceActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
