import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetImportJobRequest, GetImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImportJobCommandInput extends GetImportJobRequest {
}
export interface GetImportJobCommandOutput extends GetImportJobResponse, __MetadataBearer {
}
/**
 * <p>Provides information about an import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImportJobCommand extends $Command<GetImportJobCommandInput, GetImportJobCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetImportJobCommandInput;
    constructor(input: GetImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImportJobCommandInput, GetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
