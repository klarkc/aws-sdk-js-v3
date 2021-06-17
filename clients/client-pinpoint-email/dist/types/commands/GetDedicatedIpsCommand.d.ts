import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDedicatedIpsCommandInput extends GetDedicatedIpsRequest {
}
export interface GetDedicatedIpsCommandOutput extends GetDedicatedIpsResponse, __MetadataBearer {
}
/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDedicatedIpsCommand extends $Command<GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: GetDedicatedIpsCommandInput;
    constructor(input: GetDedicatedIpsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput>;
    private serialize;
    private deserialize;
}
