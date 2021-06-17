import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListDimensionsRequest, ListDimensionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDimensionsCommandInput extends ListDimensionsRequest {
}
export interface ListDimensionsCommandOutput extends ListDimensionsResponse, __MetadataBearer {
}
/**
 * <p>List the set of dimensions that are defined for your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDimensionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDimensionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDimensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListDimensionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDimensionsCommand extends $Command<ListDimensionsCommandInput, ListDimensionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListDimensionsCommandInput;
    constructor(input: ListDimensionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDimensionsCommandInput, ListDimensionsCommandOutput>;
    private serialize;
    private deserialize;
}
