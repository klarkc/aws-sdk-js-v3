import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateConfigurationSetTrackingOptionsRequest, CreateConfigurationSetTrackingOptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigurationSetTrackingOptionsCommandInput extends CreateConfigurationSetTrackingOptionsRequest {
}
export interface CreateConfigurationSetTrackingOptionsCommandOutput extends CreateConfigurationSetTrackingOptionsResponse, __MetadataBearer {
}
/**
 * <p>Creates an association between a configuration set and a custom domain for open and
 *             click event tracking. </p>
 *         <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationSetTrackingOptionsCommand extends $Command<CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateConfigurationSetTrackingOptionsCommandInput;
    constructor(input: CreateConfigurationSetTrackingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
