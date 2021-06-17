import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { DeleteRevisionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRevisionCommandInput extends DeleteRevisionRequest {
}
export interface DeleteRevisionCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation deletes a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new DeleteRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRevisionCommandInput} for command's `input` shape.
 * @see {@link DeleteRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRevisionCommand extends $Command<DeleteRevisionCommandInput, DeleteRevisionCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: DeleteRevisionCommandInput;
    constructor(input: DeleteRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRevisionCommandInput, DeleteRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
