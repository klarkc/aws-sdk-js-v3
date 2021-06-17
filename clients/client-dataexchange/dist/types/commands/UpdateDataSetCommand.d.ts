import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDataSetCommandInput extends UpdateDataSetRequest {
}
export interface UpdateDataSetCommandOutput extends UpdateDataSetResponse, __MetadataBearer {
}
/**
 * <p>This operation updates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataSetCommand extends $Command<UpdateDataSetCommandInput, UpdateDataSetCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: UpdateDataSetCommandInput;
    constructor(input: UpdateDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSetCommandInput, UpdateDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
