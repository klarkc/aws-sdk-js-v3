import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEnabledProductsForImportCommandInput extends ListEnabledProductsForImportRequest {
}
export interface ListEnabledProductsForImportCommandOutput extends ListEnabledProductsForImportResponse, __MetadataBearer {
}
/**
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListEnabledProductsForImportCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListEnabledProductsForImportCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnabledProductsForImportCommandInput} for command's `input` shape.
 * @see {@link ListEnabledProductsForImportCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEnabledProductsForImportCommand extends $Command<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: ListEnabledProductsForImportCommandInput;
    constructor(input: ListEnabledProductsForImportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput>;
    private serialize;
    private deserialize;
}
