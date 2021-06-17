import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteDataSourceRequest, DeleteDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataSourceCommandInput extends DeleteDataSourceRequest {
}
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Deletes the data source permanently. This operation breaks
 * 			all the datasets that reference the deleted data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataSourceCommand extends $Command<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteDataSourceCommandInput;
    constructor(input: DeleteDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
