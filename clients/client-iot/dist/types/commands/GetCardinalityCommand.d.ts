import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetCardinalityRequest, GetCardinalityResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCardinalityCommandInput extends GetCardinalityRequest {
}
export interface GetCardinalityCommandOutput extends GetCardinalityResponse, __MetadataBearer {
}
/**
 * <p>Returns the approximate count of unique values that match the query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetCardinalityCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetCardinalityCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetCardinalityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCardinalityCommandInput} for command's `input` shape.
 * @see {@link GetCardinalityCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCardinalityCommand extends $Command<GetCardinalityCommandInput, GetCardinalityCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetCardinalityCommandInput;
    constructor(input: GetCardinalityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCardinalityCommandInput, GetCardinalityCommandOutput>;
    private serialize;
    private deserialize;
}
