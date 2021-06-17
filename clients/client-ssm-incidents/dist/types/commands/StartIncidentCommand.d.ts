import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { StartIncidentInput, StartIncidentOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartIncidentCommandInput extends StartIncidentInput {
}
export interface StartIncidentCommandOutput extends StartIncidentOutput, __MetadataBearer {
}
/**
 * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, StartIncidentCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, StartIncidentCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new StartIncidentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartIncidentCommandInput} for command's `input` shape.
 * @see {@link StartIncidentCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartIncidentCommand extends $Command<StartIncidentCommandInput, StartIncidentCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: StartIncidentCommandInput;
    constructor(input: StartIncidentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartIncidentCommandInput, StartIncidentCommandOutput>;
    private serialize;
    private deserialize;
}
