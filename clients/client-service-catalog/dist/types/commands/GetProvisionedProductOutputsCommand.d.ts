import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { GetProvisionedProductOutputsInput, GetProvisionedProductOutputsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProvisionedProductOutputsCommandInput extends GetProvisionedProductOutputsInput {
}
export interface GetProvisionedProductOutputsCommandOutput extends GetProvisionedProductOutputsOutput, __MetadataBearer {
}
/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetProvisionedProductOutputsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetProvisionedProductOutputsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetProvisionedProductOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedProductOutputsCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedProductOutputsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProvisionedProductOutputsCommand extends $Command<GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: GetProvisionedProductOutputsCommandInput;
    constructor(input: GetProvisionedProductOutputsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput>;
    private serialize;
    private deserialize;
}
