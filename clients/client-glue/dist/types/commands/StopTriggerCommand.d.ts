import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopTriggerRequest, StopTriggerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopTriggerCommandInput extends StopTriggerRequest {
}
export interface StopTriggerCommandOutput extends StopTriggerResponse, __MetadataBearer {
}
/**
 * <p>Stops a specified trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTriggerCommandInput} for command's `input` shape.
 * @see {@link StopTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopTriggerCommand extends $Command<StopTriggerCommandInput, StopTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopTriggerCommandInput;
    constructor(input: StopTriggerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTriggerCommandInput, StopTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
