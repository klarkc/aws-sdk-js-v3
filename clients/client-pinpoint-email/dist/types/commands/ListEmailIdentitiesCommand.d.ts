import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListEmailIdentitiesRequest, ListEmailIdentitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEmailIdentitiesCommandInput extends ListEmailIdentitiesRequest {
}
export interface ListEmailIdentitiesCommandOutput extends ListEmailIdentitiesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint
 *             account. An identity can be either an email address or a domain. This operation returns
 *             identities that are verified as well as those that aren't.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListEmailIdentitiesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListEmailIdentitiesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListEmailIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEmailIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListEmailIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEmailIdentitiesCommand extends $Command<ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: ListEmailIdentitiesCommandInput;
    constructor(input: ListEmailIdentitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
