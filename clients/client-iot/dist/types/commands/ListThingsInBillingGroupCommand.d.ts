import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingsInBillingGroupRequest, ListThingsInBillingGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingsInBillingGroupCommandInput extends ListThingsInBillingGroupRequest {
}
export interface ListThingsInBillingGroupCommandOutput extends ListThingsInBillingGroupResponse, __MetadataBearer {
}
/**
 * <p>Lists the things you have added to the given billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsInBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsInBillingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingsInBillingGroupCommand extends $Command<ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingsInBillingGroupCommandInput;
    constructor(input: ListThingsInBillingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
