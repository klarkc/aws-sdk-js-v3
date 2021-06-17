import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateServiceActionInput, CreateServiceActionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateServiceActionCommandInput extends CreateServiceActionInput {
}
export interface CreateServiceActionCommandOutput extends CreateServiceActionOutput, __MetadataBearer {
}
/**
 * <p>Creates a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceActionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateServiceActionCommand extends $Command<CreateServiceActionCommandInput, CreateServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateServiceActionCommandInput;
    constructor(input: CreateServiceActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceActionCommandInput, CreateServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
