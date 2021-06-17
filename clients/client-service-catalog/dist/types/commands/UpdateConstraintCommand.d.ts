import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateConstraintInput, UpdateConstraintOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConstraintCommandInput extends UpdateConstraintInput {
}
export interface UpdateConstraintCommandOutput extends UpdateConstraintOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified constraint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConstraintCommandInput} for command's `input` shape.
 * @see {@link UpdateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConstraintCommand extends $Command<UpdateConstraintCommandInput, UpdateConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateConstraintCommandInput;
    constructor(input: UpdateConstraintCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConstraintCommandInput, UpdateConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
