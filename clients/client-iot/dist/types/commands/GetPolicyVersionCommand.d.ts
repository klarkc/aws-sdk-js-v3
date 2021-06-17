import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetPolicyVersionRequest, GetPolicyVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {
}
export interface GetPolicyVersionCommandOutput extends GetPolicyVersionResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link GetPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPolicyVersionCommand extends $Command<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetPolicyVersionCommandInput;
    constructor(input: GetPolicyVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
