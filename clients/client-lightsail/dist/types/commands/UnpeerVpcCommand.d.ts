import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UnpeerVpcRequest, UnpeerVpcResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnpeerVpcCommandInput extends UnpeerVpcRequest {
}
export interface UnpeerVpcCommandOutput extends UnpeerVpcResult, __MetadataBearer {
}
/**
 * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UnpeerVpcCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UnpeerVpcCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UnpeerVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnpeerVpcCommandInput} for command's `input` shape.
 * @see {@link UnpeerVpcCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnpeerVpcCommand extends $Command<UnpeerVpcCommandInput, UnpeerVpcCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UnpeerVpcCommandInput;
    constructor(input: UnpeerVpcCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnpeerVpcCommandInput, UnpeerVpcCommandOutput>;
    private serialize;
    private deserialize;
}
