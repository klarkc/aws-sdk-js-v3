import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteUserEndpointsRequest, DeleteUserEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserEndpointsCommandInput extends DeleteUserEndpointsRequest {
}
export interface DeleteUserEndpointsCommandOutput extends DeleteUserEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Deletes all the endpoints that are associated with a specific user ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteUserEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserEndpointsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserEndpointsCommand extends $Command<DeleteUserEndpointsCommandInput, DeleteUserEndpointsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteUserEndpointsCommandInput;
    constructor(input: DeleteUserEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserEndpointsCommandInput, DeleteUserEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
