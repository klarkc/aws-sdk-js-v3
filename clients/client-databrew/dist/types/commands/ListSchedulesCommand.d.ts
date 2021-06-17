import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListSchedulesRequest, ListSchedulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSchedulesCommandInput extends ListSchedulesRequest {
}
export interface ListSchedulesCommandOutput extends ListSchedulesResponse, __MetadataBearer {
}
/**
 * <p>Lists the DataBrew schedules that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListSchedulesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListSchedulesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSchedulesCommand extends $Command<ListSchedulesCommandInput, ListSchedulesCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: ListSchedulesCommandInput;
    constructor(input: ListSchedulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchedulesCommandInput, ListSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
