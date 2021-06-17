import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartTriggerRequest, StartTriggerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTriggerCommandInput extends StartTriggerRequest {
}
export interface StartTriggerCommandOutput extends StartTriggerResponse, __MetadataBearer {
}
/**
 * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
 *       Jobs</a> for information about how different types of trigger are
 *       started.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTriggerCommandInput} for command's `input` shape.
 * @see {@link StartTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTriggerCommand extends $Command<StartTriggerCommandInput, StartTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartTriggerCommandInput;
    constructor(input: StartTriggerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTriggerCommandInput, StartTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
