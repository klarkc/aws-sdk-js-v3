import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteAlarmRequest, DeleteAlarmResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAlarmCommandInput extends DeleteAlarmRequest {
}
export interface DeleteAlarmCommandOutput extends DeleteAlarmResult, __MetadataBearer {
}
/**
 * <p>Deletes an alarm.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlarmCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAlarmCommand extends $Command<DeleteAlarmCommandInput, DeleteAlarmCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteAlarmCommandInput;
    constructor(input: DeleteAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAlarmCommandInput, DeleteAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
