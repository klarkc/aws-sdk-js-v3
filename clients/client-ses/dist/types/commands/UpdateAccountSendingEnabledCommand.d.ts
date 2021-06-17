import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateAccountSendingEnabledRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAccountSendingEnabledCommandInput extends UpdateAccountSendingEnabledRequest {
}
export interface UpdateAccountSendingEnabledCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables or disables email sending across your entire Amazon SES account in the current
 *             AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
 *             temporarily pause email sending across your Amazon SES account in a given AWS Region when
 *             reputation metrics (such as your bounce or complaint rates) reach certain
 *             thresholds.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAccountSendingEnabledCommand extends $Command<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateAccountSendingEnabledCommandInput;
    constructor(input: UpdateAccountSendingEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
