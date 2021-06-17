import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteDataSetRequest, DeleteDataSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataSetCommandInput extends DeleteDataSetRequest {
}
export interface DeleteDataSetCommandOutput extends DeleteDataSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataSetCommand extends $Command<DeleteDataSetCommandInput, DeleteDataSetCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteDataSetCommandInput;
    constructor(input: DeleteDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSetCommandInput, DeleteDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
