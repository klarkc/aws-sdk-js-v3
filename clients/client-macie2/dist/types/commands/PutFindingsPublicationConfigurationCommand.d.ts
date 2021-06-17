import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { PutFindingsPublicationConfigurationRequest, PutFindingsPublicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFindingsPublicationConfigurationCommandInput extends PutFindingsPublicationConfigurationRequest {
}
export interface PutFindingsPublicationConfigurationCommandOutput extends PutFindingsPublicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration settings for publishing findings to AWS Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutFindingsPublicationConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, PutFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFindingsPublicationConfigurationCommand extends $Command<PutFindingsPublicationConfigurationCommandInput, PutFindingsPublicationConfigurationCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: PutFindingsPublicationConfigurationCommandInput;
    constructor(input: PutFindingsPublicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFindingsPublicationConfigurationCommandInput, PutFindingsPublicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
