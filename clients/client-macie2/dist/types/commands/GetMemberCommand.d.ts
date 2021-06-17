import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetMemberRequest, GetMemberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMemberCommandInput extends GetMemberRequest {
}
export interface GetMemberCommandOutput extends GetMemberResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an account that's associated with an Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberCommandInput} for command's `input` shape.
 * @see {@link GetMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMemberCommand extends $Command<GetMemberCommandInput, GetMemberCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetMemberCommandInput;
    constructor(input: GetMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMemberCommandInput, GetMemberCommandOutput>;
    private serialize;
    private deserialize;
}
