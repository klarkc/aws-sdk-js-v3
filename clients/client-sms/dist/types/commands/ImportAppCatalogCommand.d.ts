import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { ImportAppCatalogRequest, ImportAppCatalogResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportAppCatalogCommandInput extends ImportAppCatalogRequest {
}
export interface ImportAppCatalogCommandOutput extends ImportAppCatalogResponse, __MetadataBearer {
}
/**
 * <p>Allows application import from AWS Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportAppCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportAppCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportAppCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAppCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportAppCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportAppCatalogCommand extends $Command<ImportAppCatalogCommandInput, ImportAppCatalogCommandOutput, SMSClientResolvedConfig> {
    readonly input: ImportAppCatalogCommandInput;
    constructor(input: ImportAppCatalogCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportAppCatalogCommandInput, ImportAppCatalogCommandOutput>;
    private serialize;
    private deserialize;
}
