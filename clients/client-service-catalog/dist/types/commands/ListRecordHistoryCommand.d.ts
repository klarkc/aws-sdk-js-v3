import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListRecordHistoryInput, ListRecordHistoryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRecordHistoryCommandInput extends ListRecordHistoryInput {
}
export interface ListRecordHistoryCommandOutput extends ListRecordHistoryOutput, __MetadataBearer {
}
/**
 * <p>Lists the specified requests or all performed requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListRecordHistoryCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListRecordHistoryCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListRecordHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecordHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRecordHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRecordHistoryCommand extends $Command<ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListRecordHistoryCommandInput;
    constructor(input: ListRecordHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
