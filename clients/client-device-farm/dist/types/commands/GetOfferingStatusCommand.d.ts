import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetOfferingStatusRequest, GetOfferingStatusResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOfferingStatusCommandInput extends GetOfferingStatusRequest {
}
export interface GetOfferingStatusCommandOutput extends GetOfferingStatusResult, __MetadataBearer {
}
/**
 * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
 *             indicates how many offerings are currently available and the offerings that will be available in the next
 *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
 *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetOfferingStatusCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetOfferingStatusCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetOfferingStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOfferingStatusCommandInput} for command's `input` shape.
 * @see {@link GetOfferingStatusCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOfferingStatusCommand extends $Command<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetOfferingStatusCommandInput;
    constructor(input: GetOfferingStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput>;
    private serialize;
    private deserialize;
}
