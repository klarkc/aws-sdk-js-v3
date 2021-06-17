import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetRegistryInput, GetRegistryResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRegistryCommandInput extends GetRegistryInput {
}
export interface GetRegistryCommandOutput extends GetRegistryResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified registry in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRegistryCommand extends $Command<GetRegistryCommandInput, GetRegistryCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetRegistryCommandInput;
    constructor(input: GetRegistryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegistryCommandInput, GetRegistryCommandOutput>;
    private serialize;
    private deserialize;
}
