import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSubscriptionStateCommandInput extends GetSubscriptionStateRequest {
}
export interface GetSubscriptionStateCommandOutput extends GetSubscriptionStateResponse, __MetadataBearer {
}
/**
 * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, GetSubscriptionStateCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, GetSubscriptionStateCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new GetSubscriptionStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionStateCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionStateCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSubscriptionStateCommand extends $Command<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput, ShieldClientResolvedConfig> {
    readonly input: GetSubscriptionStateCommandInput;
    constructor(input: GetSubscriptionStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput>;
    private serialize;
    private deserialize;
}
