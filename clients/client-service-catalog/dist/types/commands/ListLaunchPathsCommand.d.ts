import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLaunchPathsCommandInput extends ListLaunchPathsInput {
}
export interface ListLaunchPathsCommandOutput extends ListLaunchPathsOutput, __MetadataBearer {
}
/**
 * <p>Lists the paths to the specified product. A path is how the user
 *          has access to a specified product, and is necessary when provisioning a product. A path
 *          also determines the constraints put on the product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListLaunchPathsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListLaunchPathsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListLaunchPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchPathsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchPathsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLaunchPathsCommand extends $Command<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListLaunchPathsCommandInput;
    constructor(input: ListLaunchPathsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput>;
    private serialize;
    private deserialize;
}
