import { ServiceCatalogAppRegistryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogAppRegistryClient";
import { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApplicationCommandInput extends GetApplicationRequest {
}
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetApplicationCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, GetApplicationCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApplicationCommand extends $Command<GetApplicationCommandInput, GetApplicationCommandOutput, ServiceCatalogAppRegistryClientResolvedConfig> {
    readonly input: GetApplicationCommandInput;
    constructor(input: GetApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogAppRegistryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationCommandInput, GetApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
