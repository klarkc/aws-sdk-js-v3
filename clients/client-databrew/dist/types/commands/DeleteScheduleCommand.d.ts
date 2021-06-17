import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DeleteScheduleRequest, DeleteScheduleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteScheduleCommandInput extends DeleteScheduleRequest {
}
export interface DeleteScheduleCommandOutput extends DeleteScheduleResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteScheduleCommand extends $Command<DeleteScheduleCommandInput, DeleteScheduleCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DeleteScheduleCommandInput;
    constructor(input: DeleteScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduleCommandInput, DeleteScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
