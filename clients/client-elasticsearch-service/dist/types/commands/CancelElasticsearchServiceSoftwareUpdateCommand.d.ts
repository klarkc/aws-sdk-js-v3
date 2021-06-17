import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { CancelElasticsearchServiceSoftwareUpdateRequest, CancelElasticsearchServiceSoftwareUpdateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelElasticsearchServiceSoftwareUpdateCommandInput extends CancelElasticsearchServiceSoftwareUpdateRequest {
}
export interface CancelElasticsearchServiceSoftwareUpdateCommandOutput extends CancelElasticsearchServiceSoftwareUpdateResponse, __MetadataBearer {
}
/**
 * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CancelElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelElasticsearchServiceSoftwareUpdateCommand extends $Command<CancelElasticsearchServiceSoftwareUpdateCommandInput, CancelElasticsearchServiceSoftwareUpdateCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: CancelElasticsearchServiceSoftwareUpdateCommandInput;
    constructor(input: CancelElasticsearchServiceSoftwareUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelElasticsearchServiceSoftwareUpdateCommandInput, CancelElasticsearchServiceSoftwareUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
