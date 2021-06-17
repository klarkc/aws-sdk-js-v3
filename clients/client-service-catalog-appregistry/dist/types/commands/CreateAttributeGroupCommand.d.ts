import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { CreateAttributeGroupRequest, CreateAttributeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAttributeGroupCommandInput extends CreateAttributeGroupRequest {
}
export interface CreateAttributeGroupCommandOutput extends CreateAttributeGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a new attribute group as a container for user-defined attributes. This feature
 *       enables users to have full control over their cloud application's metadata in a rich
 *       machine-readable format to facilitate integration with automated workflows and third-party
 *       tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new CreateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAttributeGroupCommand extends $Command<CreateAttributeGroupCommandInput, CreateAttributeGroupCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: CreateAttributeGroupCommandInput;
    constructor(input: CreateAttributeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAttributeGroupCommandInput, CreateAttributeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
