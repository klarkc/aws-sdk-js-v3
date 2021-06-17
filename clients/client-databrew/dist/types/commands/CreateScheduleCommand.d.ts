import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateScheduleRequest, CreateScheduleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateScheduleCommandInput extends CreateScheduleRequest {
}
export interface CreateScheduleCommandOutput extends CreateScheduleResponse, __MetadataBearer {
}
/**
 * <p>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific
 *             date and time, or at regular intervals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateScheduleCommand extends $Command<CreateScheduleCommandInput, CreateScheduleCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: CreateScheduleCommandInput;
    constructor(input: CreateScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScheduleCommandInput, CreateScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
