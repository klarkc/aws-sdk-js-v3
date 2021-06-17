import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { StartSyncExecutionInput, StartSyncExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSyncExecutionCommandInput extends StartSyncExecutionInput {
}
export interface StartSyncExecutionCommandOutput extends StartSyncExecutionOutput, __MetadataBearer {
}
/**
 * <p>Starts a Synchronous Express state machine execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSyncExecutionCommand extends $Command<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: StartSyncExecutionCommandInput;
    constructor(input: StartSyncExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
