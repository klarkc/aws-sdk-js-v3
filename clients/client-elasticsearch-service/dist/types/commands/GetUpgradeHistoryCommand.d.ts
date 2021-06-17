import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { GetUpgradeHistoryRequest, GetUpgradeHistoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUpgradeHistoryCommandInput extends GetUpgradeHistoryRequest {
}
export interface GetUpgradeHistoryCommandOutput extends GetUpgradeHistoryResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetUpgradeHistoryCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetUpgradeHistoryCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetUpgradeHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUpgradeHistoryCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUpgradeHistoryCommand extends $Command<GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: GetUpgradeHistoryCommandInput;
    constructor(input: GetUpgradeHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
