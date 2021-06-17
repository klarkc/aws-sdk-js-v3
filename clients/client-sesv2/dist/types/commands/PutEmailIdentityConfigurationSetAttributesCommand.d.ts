import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutEmailIdentityConfigurationSetAttributesRequest, PutEmailIdentityConfigurationSetAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEmailIdentityConfigurationSetAttributesCommandInput extends PutEmailIdentityConfigurationSetAttributesRequest {
}
export interface PutEmailIdentityConfigurationSetAttributesCommandOutput extends PutEmailIdentityConfigurationSetAttributesResponse, __MetadataBearer {
}
/**
 * <p>Used to associate a configuration set with an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityConfigurationSetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEmailIdentityConfigurationSetAttributesCommand extends $Command<PutEmailIdentityConfigurationSetAttributesCommandInput, PutEmailIdentityConfigurationSetAttributesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutEmailIdentityConfigurationSetAttributesCommandInput;
    constructor(input: PutEmailIdentityConfigurationSetAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEmailIdentityConfigurationSetAttributesCommandInput, PutEmailIdentityConfigurationSetAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
