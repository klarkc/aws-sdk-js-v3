import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ExecuteCommandRequest, ExecuteCommandResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteCommandCommandInput extends ExecuteCommandRequest {
}
export interface ExecuteCommandCommandOutput extends ExecuteCommandResponse, __MetadataBearer {
}
/**
 * <p>Runs a command remotely on a container within a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ExecuteCommandCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ExecuteCommandCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteCommandCommandInput} for command's `input` shape.
 * @see {@link ExecuteCommandCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteCommandCommand extends $Command<ExecuteCommandCommandInput, ExecuteCommandCommandOutput, ECSClientResolvedConfig> {
    readonly input: ExecuteCommandCommandInput;
    constructor(input: ExecuteCommandCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteCommandCommandInput, ExecuteCommandCommandOutput>;
    private serialize;
    private deserialize;
}
