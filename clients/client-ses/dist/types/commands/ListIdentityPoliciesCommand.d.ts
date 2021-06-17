import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentityPoliciesCommandInput extends ListIdentityPoliciesRequest {
}
export interface ListIdentityPoliciesCommandOutput extends ListIdentityPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of sending authorization policies that are attached to the given
 *             identity (an email address or a domain). This API returns only a list. If you want the
 *             actual policy content, you can use <code>GetIdentityPolicies</code>.</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentityPoliciesCommand extends $Command<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListIdentityPoliciesCommandInput;
    constructor(input: ListIdentityPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
