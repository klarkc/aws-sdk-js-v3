import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPoliciesCommandInput extends ListPoliciesRequest {
}
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists your policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPoliciesCommand extends $Command<ListPoliciesCommandInput, ListPoliciesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListPoliciesCommandInput;
    constructor(input: ListPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesCommandInput, ListPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
