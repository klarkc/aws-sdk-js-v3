import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutConfigurationSetSuppressionOptionsRequest, PutConfigurationSetSuppressionOptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutConfigurationSetSuppressionOptionsCommandInput extends PutConfigurationSetSuppressionOptionsRequest {
}
export interface PutConfigurationSetSuppressionOptionsCommandOutput extends PutConfigurationSetSuppressionOptionsResponse, __MetadataBearer {
}
/**
 * <p>Specify the account suppression list preferences for a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetSuppressionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetSuppressionOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSuppressionOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutConfigurationSetSuppressionOptionsCommand extends $Command<PutConfigurationSetSuppressionOptionsCommandInput, PutConfigurationSetSuppressionOptionsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutConfigurationSetSuppressionOptionsCommandInput;
    constructor(input: PutConfigurationSetSuppressionOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationSetSuppressionOptionsCommandInput, PutConfigurationSetSuppressionOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
