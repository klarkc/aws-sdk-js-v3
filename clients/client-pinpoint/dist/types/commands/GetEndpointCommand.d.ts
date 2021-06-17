import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetEndpointRequest, GetEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEndpointCommandInput extends GetEndpointRequest {
}
export interface GetEndpointCommandOutput extends GetEndpointResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the settings and attributes of a specific endpoint for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEndpointCommandInput} for command's `input` shape.
 * @see {@link GetEndpointCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEndpointCommand extends $Command<GetEndpointCommandInput, GetEndpointCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetEndpointCommandInput;
    constructor(input: GetEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEndpointCommandInput, GetEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
