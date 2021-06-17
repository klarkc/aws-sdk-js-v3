import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { DeleteAttributeGroupRequest, DeleteAttributeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAttributeGroupCommandInput extends DeleteAttributeGroupRequest {
}
export interface DeleteAttributeGroupCommandOutput extends DeleteAttributeGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes an attribute group, specified either by its attribute group ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new DeleteAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAttributeGroupCommand extends $Command<DeleteAttributeGroupCommandInput, DeleteAttributeGroupCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: DeleteAttributeGroupCommandInput;
    constructor(input: DeleteAttributeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAttributeGroupCommandInput, DeleteAttributeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
