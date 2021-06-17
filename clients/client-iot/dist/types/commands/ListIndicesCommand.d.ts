import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListIndicesRequest, ListIndicesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIndicesCommandInput extends ListIndicesRequest {
}
export interface ListIndicesCommandOutput extends ListIndicesResponse, __MetadataBearer {
}
/**
 * <p>Lists the search indices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListIndicesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListIndicesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIndicesCommand extends $Command<ListIndicesCommandInput, ListIndicesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListIndicesCommandInput;
    constructor(input: ListIndicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIndicesCommandInput, ListIndicesCommandOutput>;
    private serialize;
    private deserialize;
}
