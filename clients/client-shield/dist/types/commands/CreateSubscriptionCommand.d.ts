import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { CreateSubscriptionRequest, CreateSubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSubscriptionCommandInput extends CreateSubscriptionRequest {
}
export interface CreateSubscriptionCommandOutput extends CreateSubscriptionResponse, __MetadataBearer {
}
/**
 * <p>Activates AWS Shield Advanced for an account.</p>
 *
 *          <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period.  You can change this by submitting an <code>UpdateSubscription</code> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSubscriptionCommand extends $Command<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: CreateSubscriptionCommandInput;
    constructor(input: CreateSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
