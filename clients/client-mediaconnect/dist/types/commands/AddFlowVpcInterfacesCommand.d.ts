import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowVpcInterfacesRequest, AddFlowVpcInterfacesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddFlowVpcInterfacesCommandInput extends AddFlowVpcInterfacesRequest {
}
export interface AddFlowVpcInterfacesCommandOutput extends AddFlowVpcInterfacesResponse, __MetadataBearer {
}
/**
 * Adds VPC interfaces to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowVpcInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowVpcInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowVpcInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowVpcInterfacesCommandInput} for command's `input` shape.
 * @see {@link AddFlowVpcInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddFlowVpcInterfacesCommand extends $Command<AddFlowVpcInterfacesCommandInput, AddFlowVpcInterfacesCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: AddFlowVpcInterfacesCommandInput;
    constructor(input: AddFlowVpcInterfacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddFlowVpcInterfacesCommandInput, AddFlowVpcInterfacesCommandOutput>;
    private serialize;
    private deserialize;
}
