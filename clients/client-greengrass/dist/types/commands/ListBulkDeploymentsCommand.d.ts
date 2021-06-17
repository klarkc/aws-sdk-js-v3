import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListBulkDeploymentsRequest, ListBulkDeploymentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBulkDeploymentsCommandInput extends ListBulkDeploymentsRequest {
}
export interface ListBulkDeploymentsCommandOutput extends ListBulkDeploymentsResponse, __MetadataBearer {
}
/**
 * Returns a list of bulk deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListBulkDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBulkDeploymentsCommand extends $Command<ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListBulkDeploymentsCommandInput;
    constructor(input: ListBulkDeploymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
