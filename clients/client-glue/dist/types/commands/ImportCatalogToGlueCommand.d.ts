import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportCatalogToGlueCommandInput extends ImportCatalogToGlueRequest {
}
export interface ImportCatalogToGlueCommandOutput extends ImportCatalogToGlueResponse, __MetadataBearer {
}
/**
 * <p>Imports an existing Amazon Athena Data Catalog to AWS Glue</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportCatalogToGlueCommand extends $Command<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput, GlueClientResolvedConfig> {
    readonly input: ImportCatalogToGlueCommandInput;
    constructor(input: ImportCatalogToGlueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput>;
    private serialize;
    private deserialize;
}
