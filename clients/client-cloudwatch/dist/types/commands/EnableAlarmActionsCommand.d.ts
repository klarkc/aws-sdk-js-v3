import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableAlarmActionsInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableAlarmActionsCommandInput extends EnableAlarmActionsInput {
}
export interface EnableAlarmActionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the actions for the specified alarms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new EnableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link EnableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableAlarmActionsCommand extends $Command<EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: EnableAlarmActionsCommandInput;
    constructor(input: EnableAlarmActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput>;
    private serialize;
    private deserialize;
}
