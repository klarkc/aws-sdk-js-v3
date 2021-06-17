import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeBillingGroupRequest, DescribeBillingGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBillingGroupCommandInput extends DescribeBillingGroupRequest {
}
export interface DescribeBillingGroupCommandOutput extends DescribeBillingGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBillingGroupCommand extends $Command<DescribeBillingGroupCommandInput, DescribeBillingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeBillingGroupCommandInput;
    constructor(input: DescribeBillingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBillingGroupCommandInput, DescribeBillingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
