import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutChannelPolicyRequest, PutChannelPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutChannelPolicyCommandInput extends PutChannelPolicyRequest {
}
export interface PutChannelPolicyCommandOutput extends PutChannelPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates an IAM policy for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new PutChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link PutChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutChannelPolicyCommand extends $Command<PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: PutChannelPolicyCommandInput;
    constructor(input: PutChannelPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
