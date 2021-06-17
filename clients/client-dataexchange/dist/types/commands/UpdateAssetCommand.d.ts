import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { UpdateAssetRequest, UpdateAssetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAssetCommandInput extends UpdateAssetRequest {
}
export interface UpdateAssetCommandOutput extends UpdateAssetResponse, __MetadataBearer {
}
/**
 * <p>This operation updates an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new UpdateAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssetCommand extends $Command<UpdateAssetCommandInput, UpdateAssetCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: UpdateAssetCommandInput;
    constructor(input: UpdateAssetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssetCommandInput, UpdateAssetCommandOutput>;
    private serialize;
    private deserialize;
}
