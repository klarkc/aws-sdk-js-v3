import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetMacieSessionRequest, GetMacieSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMacieSessionCommandInput extends GetMacieSessionRequest {
}
export interface GetMacieSessionCommandOutput extends GetMacieSessionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the current status and configuration settings for an Amazon Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMacieSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMacieSessionCommandInput} for command's `input` shape.
 * @see {@link GetMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMacieSessionCommand extends $Command<GetMacieSessionCommandInput, GetMacieSessionCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetMacieSessionCommandInput;
    constructor(input: GetMacieSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMacieSessionCommandInput, GetMacieSessionCommandOutput>;
    private serialize;
    private deserialize;
}
