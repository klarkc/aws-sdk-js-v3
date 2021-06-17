import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMasterAccountCommandInput extends GetMasterAccountRequest {
}
export interface GetMasterAccountCommandOutput extends GetMasterAccountResponse, __MetadataBearer {
}
/**
 * <p>(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMasterAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMasterAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMasterAccountCommandInput} for command's `input` shape.
 * @see {@link GetMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMasterAccountCommand extends $Command<GetMasterAccountCommandInput, GetMasterAccountCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetMasterAccountCommandInput;
    constructor(input: GetMasterAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMasterAccountCommandInput, GetMasterAccountCommandOutput>;
    private serialize;
    private deserialize;
}
