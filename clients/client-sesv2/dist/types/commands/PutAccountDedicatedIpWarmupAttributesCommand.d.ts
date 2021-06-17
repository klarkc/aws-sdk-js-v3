import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutAccountDedicatedIpWarmupAttributesRequest, PutAccountDedicatedIpWarmupAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccountDedicatedIpWarmupAttributesCommandInput extends PutAccountDedicatedIpWarmupAttributesRequest {
}
export interface PutAccountDedicatedIpWarmupAttributesCommandOutput extends PutAccountDedicatedIpWarmupAttributesResponse, __MetadataBearer {
}
/**
 * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccountDedicatedIpWarmupAttributesCommand extends $Command<PutAccountDedicatedIpWarmupAttributesCommandInput, PutAccountDedicatedIpWarmupAttributesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutAccountDedicatedIpWarmupAttributesCommandInput;
    constructor(input: PutAccountDedicatedIpWarmupAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountDedicatedIpWarmupAttributesCommandInput, PutAccountDedicatedIpWarmupAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
