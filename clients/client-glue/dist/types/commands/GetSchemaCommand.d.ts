import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaInput, GetSchemaResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSchemaCommandInput extends GetSchemaInput {
}
export interface GetSchemaCommandOutput extends GetSchemaResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified schema in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSchemaCommand extends $Command<GetSchemaCommandInput, GetSchemaCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSchemaCommandInput;
    constructor(input: GetSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSchemaCommandInput, GetSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
