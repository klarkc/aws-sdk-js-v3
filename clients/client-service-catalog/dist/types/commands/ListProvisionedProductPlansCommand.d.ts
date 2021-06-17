import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisionedProductPlansCommandInput extends ListProvisionedProductPlansInput {
}
export interface ListProvisionedProductPlansCommandOutput extends ListProvisionedProductPlansOutput, __MetadataBearer {
}
/**
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisionedProductPlansCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisionedProductPlansCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisionedProductPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedProductPlansCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedProductPlansCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisionedProductPlansCommand extends $Command<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisionedProductPlansCommandInput;
    constructor(input: ListProvisionedProductPlansCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput>;
    private serialize;
    private deserialize;
}
