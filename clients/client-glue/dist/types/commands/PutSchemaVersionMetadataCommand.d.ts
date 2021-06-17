import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutSchemaVersionMetadataInput, PutSchemaVersionMetadataResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutSchemaVersionMetadataCommandInput extends PutSchemaVersionMetadataInput {
}
export interface PutSchemaVersionMetadataCommandOutput extends PutSchemaVersionMetadataResponse, __MetadataBearer {
}
/**
 * <p>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link PutSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSchemaVersionMetadataCommand extends $Command<PutSchemaVersionMetadataCommandInput, PutSchemaVersionMetadataCommandOutput, GlueClientResolvedConfig> {
    readonly input: PutSchemaVersionMetadataCommandInput;
    constructor(input: PutSchemaVersionMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSchemaVersionMetadataCommandInput, PutSchemaVersionMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
