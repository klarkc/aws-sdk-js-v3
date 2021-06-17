import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingsPublicationConfigurationRequest, GetFindingsPublicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFindingsPublicationConfigurationCommandInput extends GetFindingsPublicationConfigurationRequest {
}
export interface GetFindingsPublicationConfigurationCommandOutput extends GetFindingsPublicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the configuration settings for publishing findings to AWS Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsPublicationConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFindingsPublicationConfigurationCommand extends $Command<GetFindingsPublicationConfigurationCommandInput, GetFindingsPublicationConfigurationCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetFindingsPublicationConfigurationCommandInput;
    constructor(input: GetFindingsPublicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingsPublicationConfigurationCommandInput, GetFindingsPublicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
