import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateDevEndpointRequest, UpdateDevEndpointResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDevEndpointCommandInput extends UpdateDevEndpointRequest {
}
export interface UpdateDevEndpointCommandOutput extends UpdateDevEndpointResponse, __MetadataBearer {
}
/**
 * <p>Updates a specified development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDevEndpointCommand extends $Command<UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateDevEndpointCommandInput;
    constructor(input: UpdateDevEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
