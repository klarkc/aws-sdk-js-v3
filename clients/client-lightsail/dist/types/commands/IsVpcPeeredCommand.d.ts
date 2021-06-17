import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IsVpcPeeredCommandInput extends IsVpcPeeredRequest {
}
export interface IsVpcPeeredCommandOutput extends IsVpcPeeredResult, __MetadataBearer {
}
/**
 * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, IsVpcPeeredCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, IsVpcPeeredCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new IsVpcPeeredCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IsVpcPeeredCommandInput} for command's `input` shape.
 * @see {@link IsVpcPeeredCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IsVpcPeeredCommand extends $Command<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput, LightsailClientResolvedConfig> {
    readonly input: IsVpcPeeredCommandInput;
    constructor(input: IsVpcPeeredCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput>;
    private serialize;
    private deserialize;
}
