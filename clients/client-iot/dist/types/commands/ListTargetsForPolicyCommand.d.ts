import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTargetsForPolicyCommandInput extends ListTargetsForPolicyRequest {
}
export interface ListTargetsForPolicyCommandOutput extends ListTargetsForPolicyResponse, __MetadataBearer {
}
/**
 * <p>List targets for the specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTargetsForPolicyCommand extends $Command<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListTargetsForPolicyCommandInput;
    constructor(input: ListTargetsForPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
