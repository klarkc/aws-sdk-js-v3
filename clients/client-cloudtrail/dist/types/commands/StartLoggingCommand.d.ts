import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StartLoggingRequest, StartLoggingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartLoggingCommandInput extends StartLoggingRequest {
}
export interface StartLoggingCommandOutput extends StartLoggingResponse, __MetadataBearer {
}
/**
 * <p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StartLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLoggingCommandInput} for command's `input` shape.
 * @see {@link StartLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartLoggingCommand extends $Command<StartLoggingCommandInput, StartLoggingCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: StartLoggingCommandInput;
    constructor(input: StartLoggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartLoggingCommandInput, StartLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
