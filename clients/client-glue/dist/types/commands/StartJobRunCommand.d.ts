import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartJobRunCommandInput extends StartJobRunRequest {
}
export interface StartJobRunCommandOutput extends StartJobRunResponse, __MetadataBearer {
}
/**
 * <p>Starts a job run using a job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartJobRunCommand extends $Command<StartJobRunCommandInput, StartJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartJobRunCommandInput;
    constructor(input: StartJobRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartJobRunCommandInput, StartJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
