import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowVpcInterfaceRequest, RemoveFlowVpcInterfaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveFlowVpcInterfaceCommandInput extends RemoveFlowVpcInterfaceRequest {
}
export interface RemoveFlowVpcInterfaceCommandOutput extends RemoveFlowVpcInterfaceResponse, __MetadataBearer {
}
/**
 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowVpcInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowVpcInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowVpcInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowVpcInterfaceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowVpcInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveFlowVpcInterfaceCommand extends $Command<RemoveFlowVpcInterfaceCommandInput, RemoveFlowVpcInterfaceCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RemoveFlowVpcInterfaceCommandInput;
    constructor(input: RemoveFlowVpcInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFlowVpcInterfaceCommandInput, RemoveFlowVpcInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
