import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMappingRequest, GetMappingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMappingCommandInput extends GetMappingRequest {
}
export interface GetMappingCommandOutput extends GetMappingResponse, __MetadataBearer {
}
/**
 * <p>Creates mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMappingCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMappingCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMappingCommandInput} for command's `input` shape.
 * @see {@link GetMappingCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMappingCommand extends $Command<GetMappingCommandInput, GetMappingCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMappingCommandInput;
    constructor(input: GetMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMappingCommandInput, GetMappingCommandOutput>;
    private serialize;
    private deserialize;
}
