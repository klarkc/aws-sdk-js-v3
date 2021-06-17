import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEffectivePoliciesCommandInput extends GetEffectivePoliciesRequest {
}
export interface GetEffectivePoliciesCommandOutput extends GetEffectivePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the AWS IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEffectivePoliciesCommand extends $Command<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetEffectivePoliciesCommandInput;
    constructor(input: GetEffectivePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
