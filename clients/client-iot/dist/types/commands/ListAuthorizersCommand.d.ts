import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuthorizersRequest, ListAuthorizersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAuthorizersCommandInput extends ListAuthorizersRequest {
}
export interface ListAuthorizersCommandOutput extends ListAuthorizersResponse, __MetadataBearer {
}
/**
 * <p>Lists the authorizers registered in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuthorizersCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuthorizersCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuthorizersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuthorizersCommandInput} for command's `input` shape.
 * @see {@link ListAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAuthorizersCommand extends $Command<ListAuthorizersCommandInput, ListAuthorizersCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAuthorizersCommandInput;
    constructor(input: ListAuthorizersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAuthorizersCommandInput, ListAuthorizersCommandOutput>;
    private serialize;
    private deserialize;
}
