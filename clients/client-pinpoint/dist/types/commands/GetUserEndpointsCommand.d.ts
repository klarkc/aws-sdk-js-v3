import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetUserEndpointsRequest, GetUserEndpointsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUserEndpointsCommandInput extends GetUserEndpointsRequest {
}
export interface GetUserEndpointsCommandOutput extends GetUserEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about all the endpoints that are associated with a specific user ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetUserEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetUserEndpointsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUserEndpointsCommand extends $Command<GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetUserEndpointsCommandInput;
    constructor(input: GetUserEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
