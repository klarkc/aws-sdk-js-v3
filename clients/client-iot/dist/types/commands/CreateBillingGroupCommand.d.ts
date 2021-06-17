import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateBillingGroupRequest, CreateBillingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBillingGroupCommandInput extends CreateBillingGroupRequest {
}
export interface CreateBillingGroupCommandOutput extends CreateBillingGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBillingGroupCommand extends $Command<CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateBillingGroupCommandInput;
    constructor(input: CreateBillingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
