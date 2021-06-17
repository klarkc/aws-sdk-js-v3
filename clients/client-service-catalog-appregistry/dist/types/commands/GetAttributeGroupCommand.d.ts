import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { GetAttributeGroupRequest, GetAttributeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAttributeGroupCommandInput extends GetAttributeGroupRequest {
}
export interface GetAttributeGroupCommandOutput extends GetAttributeGroupResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new GetAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link GetAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAttributeGroupCommand extends $Command<GetAttributeGroupCommandInput, GetAttributeGroupCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: GetAttributeGroupCommandInput;
    constructor(input: GetAttributeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAttributeGroupCommandInput, GetAttributeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
