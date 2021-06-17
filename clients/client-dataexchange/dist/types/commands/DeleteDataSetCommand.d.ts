import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { DeleteDataSetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataSetCommandInput extends DeleteDataSetRequest {
}
export interface DeleteDataSetCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation deletes a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new DeleteDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataSetCommand extends $Command<DeleteDataSetCommandInput, DeleteDataSetCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: DeleteDataSetCommandInput;
    constructor(input: DeleteDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSetCommandInput, DeleteDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
