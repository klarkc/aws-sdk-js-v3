import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetBlacklistReportsRequest, GetBlacklistReportsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBlacklistReportsCommandInput extends GetBlacklistReportsRequest {
}
export interface GetBlacklistReportsCommandOutput extends GetBlacklistReportsResponse, __MetadataBearer {
}
/**
 * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetBlacklistReportsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetBlacklistReportsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetBlacklistReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlacklistReportsCommandInput} for command's `input` shape.
 * @see {@link GetBlacklistReportsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBlacklistReportsCommand extends $Command<GetBlacklistReportsCommandInput, GetBlacklistReportsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetBlacklistReportsCommandInput;
    constructor(input: GetBlacklistReportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlacklistReportsCommandInput, GetBlacklistReportsCommandOutput>;
    private serialize;
    private deserialize;
}
