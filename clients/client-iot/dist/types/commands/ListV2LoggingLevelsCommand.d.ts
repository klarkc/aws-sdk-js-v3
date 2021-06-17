import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListV2LoggingLevelsRequest, ListV2LoggingLevelsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListV2LoggingLevelsCommandInput extends ListV2LoggingLevelsRequest {
}
export interface ListV2LoggingLevelsCommandOutput extends ListV2LoggingLevelsResponse, __MetadataBearer {
}
/**
 * <p>Lists logging levels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListV2LoggingLevelsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListV2LoggingLevelsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListV2LoggingLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListV2LoggingLevelsCommandInput} for command's `input` shape.
 * @see {@link ListV2LoggingLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListV2LoggingLevelsCommand extends $Command<ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListV2LoggingLevelsCommandInput;
    constructor(input: ListV2LoggingLevelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput>;
    private serialize;
    private deserialize;
}
