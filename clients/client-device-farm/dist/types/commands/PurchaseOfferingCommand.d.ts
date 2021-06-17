import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {
}
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResult, __MetadataBearer {
}
/**
 * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
 *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, PurchaseOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, PurchaseOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseOfferingCommand extends $Command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: PurchaseOfferingCommandInput;
    constructor(input: PurchaseOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
