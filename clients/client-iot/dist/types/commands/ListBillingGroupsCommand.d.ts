import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListBillingGroupsRequest, ListBillingGroupsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBillingGroupsCommandInput extends ListBillingGroupsRequest {
}
export interface ListBillingGroupsCommandOutput extends ListBillingGroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists the billing groups you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListBillingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListBillingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBillingGroupsCommand extends $Command<ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListBillingGroupsCommandInput;
    constructor(input: ListBillingGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
