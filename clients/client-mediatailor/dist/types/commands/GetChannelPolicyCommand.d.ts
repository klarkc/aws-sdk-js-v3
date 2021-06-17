import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetChannelPolicyRequest, GetChannelPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetChannelPolicyCommandInput extends GetChannelPolicyRequest {
}
export interface GetChannelPolicyCommandOutput extends GetChannelPolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a channel's IAM policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new GetChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link GetChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetChannelPolicyCommand extends $Command<GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: GetChannelPolicyCommandInput;
    constructor(input: GetChannelPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
