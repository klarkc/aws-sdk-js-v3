import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteBGPPeerRequest, DeleteBGPPeerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBGPPeerCommandInput extends DeleteBGPPeerRequest {
}
export interface DeleteBGPPeerCommandOutput extends DeleteBGPPeerResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
 *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteBGPPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBGPPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteBGPPeerCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBGPPeerCommand extends $Command<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteBGPPeerCommandInput;
    constructor(input: DeleteBGPPeerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput>;
    private serialize;
    private deserialize;
}
