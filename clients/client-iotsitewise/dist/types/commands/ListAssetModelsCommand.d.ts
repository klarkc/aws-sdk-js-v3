import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetModelsRequest, ListAssetModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssetModelsCommandInput extends ListAssetModelsRequest {
}
export interface ListAssetModelsCommandOutput extends ListAssetModelsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of summaries of all asset models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetModelsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetModelsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetModelsCommandInput} for command's `input` shape.
 * @see {@link ListAssetModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssetModelsCommand extends $Command<ListAssetModelsCommandInput, ListAssetModelsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListAssetModelsCommandInput;
    constructor(input: ListAssetModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssetModelsCommandInput, ListAssetModelsCommandOutput>;
    private serialize;
    private deserialize;
}
