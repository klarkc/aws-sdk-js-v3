import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DisableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableEnhancedMonitoringCommandInput extends DisableEnhancedMonitoringInput {
}
export interface DisableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {
}
/**
 * <p>Disables enhanced monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DisableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DisableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DisableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link DisableEnhancedMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableEnhancedMonitoringCommand extends $Command<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DisableEnhancedMonitoringCommandInput;
    constructor(input: DisableEnhancedMonitoringCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput>;
    private serialize;
    private deserialize;
}
