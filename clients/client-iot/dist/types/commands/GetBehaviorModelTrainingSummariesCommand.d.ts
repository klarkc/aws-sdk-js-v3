import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetBehaviorModelTrainingSummariesRequest, GetBehaviorModelTrainingSummariesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBehaviorModelTrainingSummariesCommandInput extends GetBehaviorModelTrainingSummariesRequest {
}
export interface GetBehaviorModelTrainingSummariesCommandOutput extends GetBehaviorModelTrainingSummariesResponse, __MetadataBearer {
}
/**
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetBehaviorModelTrainingSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBehaviorModelTrainingSummariesCommandInput} for command's `input` shape.
 * @see {@link GetBehaviorModelTrainingSummariesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBehaviorModelTrainingSummariesCommand extends $Command<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetBehaviorModelTrainingSummariesCommandInput;
    constructor(input: GetBehaviorModelTrainingSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
