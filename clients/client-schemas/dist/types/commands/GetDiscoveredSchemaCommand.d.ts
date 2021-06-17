import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {
}
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {
}
/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDiscoveredSchemaCommand extends $Command<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput, SchemasClientResolvedConfig> {
    readonly input: GetDiscoveredSchemaCommandInput;
    constructor(input: GetDiscoveredSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
