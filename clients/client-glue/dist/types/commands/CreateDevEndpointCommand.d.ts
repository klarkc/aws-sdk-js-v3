import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateDevEndpointRequest, CreateDevEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDevEndpointCommandInput extends CreateDevEndpointRequest {
}
export interface CreateDevEndpointCommandOutput extends CreateDevEndpointResponse, __MetadataBearer {
}
/**
 * <p>Creates a new development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDevEndpointCommand extends $Command<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateDevEndpointCommandInput;
    constructor(input: CreateDevEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
