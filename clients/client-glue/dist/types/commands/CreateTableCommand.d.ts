import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTableCommandInput extends CreateTableRequest {
}
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {
}
/**
 * <p>Creates a new table definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTableCommand extends $Command<CreateTableCommandInput, CreateTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateTableCommandInput;
    constructor(input: CreateTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTableCommandInput, CreateTableCommandOutput>;
    private serialize;
    private deserialize;
}
