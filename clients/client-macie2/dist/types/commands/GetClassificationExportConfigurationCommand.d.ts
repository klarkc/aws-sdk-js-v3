import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetClassificationExportConfigurationRequest, GetClassificationExportConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetClassificationExportConfigurationCommandInput extends GetClassificationExportConfigurationRequest {
}
export interface GetClassificationExportConfigurationCommandOutput extends GetClassificationExportConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetClassificationExportConfigurationCommand extends $Command<GetClassificationExportConfigurationCommandInput, GetClassificationExportConfigurationCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetClassificationExportConfigurationCommandInput;
    constructor(input: GetClassificationExportConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetClassificationExportConfigurationCommandInput, GetClassificationExportConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
