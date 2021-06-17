import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {
}
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {
}
/**
 * <p>Modifies the definition of an existing DataBrew dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateDatasetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateDatasetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDatasetCommand extends $Command<UpdateDatasetCommandInput, UpdateDatasetCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: UpdateDatasetCommandInput;
    constructor(input: UpdateDatasetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
