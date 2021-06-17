import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCatalogImportStatusRequest, GetCatalogImportStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCatalogImportStatusCommandInput extends GetCatalogImportStatusRequest {
}
export interface GetCatalogImportStatusCommandOutput extends GetCatalogImportStatusResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the status of a migration operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCatalogImportStatusCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCatalogImportStatusCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCatalogImportStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCatalogImportStatusCommandInput} for command's `input` shape.
 * @see {@link GetCatalogImportStatusCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCatalogImportStatusCommand extends $Command<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCatalogImportStatusCommandInput;
    constructor(input: GetCatalogImportStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput>;
    private serialize;
    private deserialize;
}
