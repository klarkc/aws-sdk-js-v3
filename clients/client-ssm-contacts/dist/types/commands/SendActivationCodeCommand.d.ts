import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { SendActivationCodeRequest, SendActivationCodeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendActivationCodeCommandInput extends SendActivationCodeRequest {
}
export interface SendActivationCodeCommandOutput extends SendActivationCodeResult, __MetadataBearer {
}
/**
 * <p>Sends an activation code to a contact channel. The contact can use this code to activate
 *          the contact channel in the console or with the <code>ActivateChannel</code> action.
 *          Incident Manager can't engage a contact channel until it has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, SendActivationCodeCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, SendActivationCodeCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new SendActivationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendActivationCodeCommandInput} for command's `input` shape.
 * @see {@link SendActivationCodeCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendActivationCodeCommand extends $Command<SendActivationCodeCommandInput, SendActivationCodeCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: SendActivationCodeCommandInput;
    constructor(input: SendActivationCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendActivationCodeCommandInput, SendActivationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
