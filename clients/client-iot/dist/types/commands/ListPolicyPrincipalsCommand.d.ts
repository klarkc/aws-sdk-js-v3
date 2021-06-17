import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPolicyPrincipalsRequest, ListPolicyPrincipalsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPolicyPrincipalsCommandInput extends ListPolicyPrincipalsRequest {
}
export interface ListPolicyPrincipalsCommandOutput extends ListPolicyPrincipalsResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Lists the principals associated with the specified policy.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPolicyPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPolicyPrincipalsCommand extends $Command<ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListPolicyPrincipalsCommandInput;
    constructor(input: ListPolicyPrincipalsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput>;
    private serialize;
    private deserialize;
}
