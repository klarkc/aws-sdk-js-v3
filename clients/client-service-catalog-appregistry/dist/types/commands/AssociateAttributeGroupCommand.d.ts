import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { AssociateAttributeGroupRequest, AssociateAttributeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateAttributeGroupCommandInput extends AssociateAttributeGroupRequest {
}
export interface AssociateAttributeGroupCommandOutput extends AssociateAttributeGroupResponse, __MetadataBearer {
}
/**
 * <p>Associates an attribute group with an application to augment the application's metadata
 *       with the group's attributes. This feature enables applications to be described with
 *       user-defined details that are machine-readable, such as third-party integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new AssociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateAttributeGroupCommand extends $Command<AssociateAttributeGroupCommandInput, AssociateAttributeGroupCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: AssociateAttributeGroupCommandInput;
    constructor(input: AssociateAttributeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAttributeGroupCommandInput, AssociateAttributeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
