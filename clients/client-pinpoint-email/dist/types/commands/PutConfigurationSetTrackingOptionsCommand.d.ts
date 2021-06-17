import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutConfigurationSetTrackingOptionsRequest, PutConfigurationSetTrackingOptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutConfigurationSetTrackingOptionsCommandInput extends PutConfigurationSetTrackingOptionsRequest {
}
export interface PutConfigurationSetTrackingOptionsCommandOutput extends PutConfigurationSetTrackingOptionsResponse, __MetadataBearer {
}
/**
 * <p>Specify a custom domain to use for open and click tracking elements in email that you
 *             send using Amazon Pinpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutConfigurationSetTrackingOptionsCommand extends $Command<PutConfigurationSetTrackingOptionsCommandInput, PutConfigurationSetTrackingOptionsCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: PutConfigurationSetTrackingOptionsCommandInput;
    constructor(input: PutConfigurationSetTrackingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationSetTrackingOptionsCommandInput, PutConfigurationSetTrackingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
