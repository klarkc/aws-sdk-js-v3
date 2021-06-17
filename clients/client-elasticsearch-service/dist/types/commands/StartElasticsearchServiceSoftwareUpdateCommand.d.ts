import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { StartElasticsearchServiceSoftwareUpdateRequest, StartElasticsearchServiceSoftwareUpdateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartElasticsearchServiceSoftwareUpdateCommandInput extends StartElasticsearchServiceSoftwareUpdateRequest {
}
export interface StartElasticsearchServiceSoftwareUpdateCommandOutput extends StartElasticsearchServiceSoftwareUpdateResponse, __MetadataBearer {
}
/**
 * <p>Schedules a service software update for an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new StartElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartElasticsearchServiceSoftwareUpdateCommand extends $Command<StartElasticsearchServiceSoftwareUpdateCommandInput, StartElasticsearchServiceSoftwareUpdateCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: StartElasticsearchServiceSoftwareUpdateCommandInput;
    constructor(input: StartElasticsearchServiceSoftwareUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartElasticsearchServiceSoftwareUpdateCommandInput, StartElasticsearchServiceSoftwareUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
