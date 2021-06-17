import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface QuerySchemaVersionMetadataCommandInput extends QuerySchemaVersionMetadataInput {
}
export interface QuerySchemaVersionMetadataCommandOutput extends QuerySchemaVersionMetadataResponse, __MetadataBearer {
}
/**
 * <p>Queries for the schema version metadata information. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new QuerySchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QuerySchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link QuerySchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class QuerySchemaVersionMetadataCommand extends $Command<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput, GlueClientResolvedConfig> {
    readonly input: QuerySchemaVersionMetadataCommandInput;
    constructor(input: QuerySchemaVersionMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
