import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteConstraintInput, DeleteConstraintOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConstraintCommandInput extends DeleteConstraintInput {
}
export interface DeleteConstraintCommandOutput extends DeleteConstraintOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConstraintCommandInput} for command's `input` shape.
 * @see {@link DeleteConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConstraintCommand extends $Command<DeleteConstraintCommandInput, DeleteConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteConstraintCommandInput;
    constructor(input: DeleteConstraintCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConstraintCommandInput, DeleteConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
