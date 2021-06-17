import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobCommandInput extends DeleteJobRequest {
}
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DeleteJobCommandInput;
    constructor(input: DeleteJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobCommandInput, DeleteJobCommandOutput>;
    private serialize;
    private deserialize;
}
