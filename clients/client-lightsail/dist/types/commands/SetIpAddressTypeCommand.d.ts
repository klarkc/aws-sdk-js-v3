import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { SetIpAddressTypeRequest, SetIpAddressTypeResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetIpAddressTypeCommandInput extends SetIpAddressTypeRequest {
}
export interface SetIpAddressTypeCommandOutput extends SetIpAddressTypeResult, __MetadataBearer {
}
/**
 * <p>Sets the IP address type for an Amazon Lightsail resource.</p>
 *
 *          <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the
 *       specified resource. Alternately, you can use this action to disable dual-stack, and enable
 *       IPv4 only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SetIpAddressTypeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, SetIpAddressTypeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetIpAddressTypeCommand extends $Command<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput, LightsailClientResolvedConfig> {
    readonly input: SetIpAddressTypeCommandInput;
    constructor(input: SetIpAddressTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput>;
    private serialize;
    private deserialize;
}
