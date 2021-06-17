import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { GetDataSetRequest, GetDataSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDataSetCommandInput extends GetDataSetRequest {
}
export interface GetDataSetCommandOutput extends GetDataSetResponse, __MetadataBearer {
}
/**
 * <p>This operation returns information about a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new GetDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSetCommandInput} for command's `input` shape.
 * @see {@link GetDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDataSetCommand extends $Command<GetDataSetCommandInput, GetDataSetCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: GetDataSetCommandInput;
    constructor(input: GetDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataSetCommandInput, GetDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
