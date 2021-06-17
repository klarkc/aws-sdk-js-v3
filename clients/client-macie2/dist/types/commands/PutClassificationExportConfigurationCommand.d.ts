import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { PutClassificationExportConfigurationRequest, PutClassificationExportConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutClassificationExportConfigurationCommandInput extends PutClassificationExportConfigurationRequest {
}
export interface PutClassificationExportConfigurationCommandOutput extends PutClassificationExportConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, PutClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutClassificationExportConfigurationCommand extends $Command<PutClassificationExportConfigurationCommandInput, PutClassificationExportConfigurationCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: PutClassificationExportConfigurationCommandInput;
    constructor(input: PutClassificationExportConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutClassificationExportConfigurationCommandInput, PutClassificationExportConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
