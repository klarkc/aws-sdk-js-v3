import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { DisassociateResourceRequest, DisassociateResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateResourceCommandInput extends DisassociateResourceRequest {
}
export interface DisassociateResourceCommandOutput extends DisassociateResourceResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new DisassociateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateResourceCommand extends $Command<DisassociateResourceCommandInput, DisassociateResourceCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: DisassociateResourceCommandInput;
    constructor(input: DisassociateResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResourceCommandInput, DisassociateResourceCommandOutput>;
    private serialize;
    private deserialize;
}
