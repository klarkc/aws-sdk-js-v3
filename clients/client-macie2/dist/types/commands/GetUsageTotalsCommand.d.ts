import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageTotalsRequest, GetUsageTotalsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUsageTotalsCommandInput extends GetUsageTotalsRequest {
}
export interface GetUsageTotalsCommandOutput extends GetUsageTotalsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageTotalsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageTotalsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetUsageTotalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link GetUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsageTotalsCommand extends $Command<GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetUsageTotalsCommandInput;
    constructor(input: GetUsageTotalsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput>;
    private serialize;
    private deserialize;
}
