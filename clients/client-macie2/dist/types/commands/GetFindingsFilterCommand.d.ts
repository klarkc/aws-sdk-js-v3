import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingsFilterRequest, GetFindingsFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFindingsFilterCommandInput extends GetFindingsFilterRequest {
}
export interface GetFindingsFilterCommandOutput extends GetFindingsFilterResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link GetFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFindingsFilterCommand extends $Command<GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetFindingsFilterCommandInput;
    constructor(input: GetFindingsFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput>;
    private serialize;
    private deserialize;
}
