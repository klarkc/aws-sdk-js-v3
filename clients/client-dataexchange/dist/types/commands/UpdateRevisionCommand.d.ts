import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { UpdateRevisionRequest, UpdateRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRevisionCommandInput extends UpdateRevisionRequest {
}
export interface UpdateRevisionCommandOutput extends UpdateRevisionResponse, __MetadataBearer {
}
/**
 * <p>This operation updates a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new UpdateRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRevisionCommandInput} for command's `input` shape.
 * @see {@link UpdateRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRevisionCommand extends $Command<UpdateRevisionCommandInput, UpdateRevisionCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: UpdateRevisionCommandInput;
    constructor(input: UpdateRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRevisionCommandInput, UpdateRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
