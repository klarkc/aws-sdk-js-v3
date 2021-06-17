import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { StopJobRunRequest, StopJobRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopJobRunCommandInput extends StopJobRunRequest {
}
export interface StopJobRunCommandOutput extends StopJobRunResponse, __MetadataBearer {
}
/**
 * <p>Stops a particular run of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StopJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StopJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StopJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopJobRunCommandInput} for command's `input` shape.
 * @see {@link StopJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopJobRunCommand extends $Command<StopJobRunCommandInput, StopJobRunCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: StopJobRunCommandInput;
    constructor(input: StopJobRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopJobRunCommandInput, StopJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
