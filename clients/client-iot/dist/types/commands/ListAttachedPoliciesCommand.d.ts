import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAttachedPoliciesRequest, ListAttachedPoliciesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAttachedPoliciesCommandInput extends ListAttachedPoliciesRequest {
}
export interface ListAttachedPoliciesCommandOutput extends ListAttachedPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the policies attached to the specified thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAttachedPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAttachedPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAttachedPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttachedPoliciesCommand extends $Command<ListAttachedPoliciesCommandInput, ListAttachedPoliciesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAttachedPoliciesCommandInput;
    constructor(input: ListAttachedPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedPoliciesCommandInput, ListAttachedPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
