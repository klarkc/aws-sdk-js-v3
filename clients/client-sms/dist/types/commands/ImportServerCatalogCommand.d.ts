import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { ImportServerCatalogRequest, ImportServerCatalogResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportServerCatalogCommandInput extends ImportServerCatalogRequest {
}
export interface ImportServerCatalogCommandOutput extends ImportServerCatalogResponse, __MetadataBearer {
}
/**
 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
 *             monitoring all servers to import.</p>
 *         <p>This call returns immediately, but might take additional time to retrieve all the
 *             servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportServerCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportServerCatalogCommand extends $Command<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput, SMSClientResolvedConfig> {
    readonly input: ImportServerCatalogCommandInput;
    constructor(input: ImportServerCatalogCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput>;
    private serialize;
    private deserialize;
}
