import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListTagOptionsInput, ListTagOptionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagOptionsCommandInput extends ListTagOptionsInput {
}
export interface ListTagOptionsCommandOutput extends ListTagOptionsOutput, __MetadataBearer {
}
/**
 * <p>Lists the specified TagOptions or all TagOptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListTagOptionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListTagOptionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListTagOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagOptionsCommandInput} for command's `input` shape.
 * @see {@link ListTagOptionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagOptionsCommand extends $Command<ListTagOptionsCommandInput, ListTagOptionsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListTagOptionsCommandInput;
    constructor(input: ListTagOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagOptionsCommandInput, ListTagOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
