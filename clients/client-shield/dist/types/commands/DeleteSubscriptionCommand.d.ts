import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DeleteSubscriptionRequest, DeleteSubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSubscriptionCommandInput extends DeleteSubscriptionRequest {
}
export interface DeleteSubscriptionCommandOutput extends DeleteSubscriptionResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DeleteSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DeleteSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DeleteSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSubscriptionCommand extends $Command<DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DeleteSubscriptionCommandInput;
    constructor(input: DeleteSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
