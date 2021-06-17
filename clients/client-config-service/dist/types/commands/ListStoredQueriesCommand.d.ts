import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListStoredQueriesRequest, ListStoredQueriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStoredQueriesCommandInput extends ListStoredQueriesRequest {
}
export interface ListStoredQueriesCommandOutput extends ListStoredQueriesResponse, __MetadataBearer {
}
/**
 * <p>Lists the stored queries for a single AWS account and a single AWS Region. The default is 100. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListStoredQueriesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListStoredQueriesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListStoredQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStoredQueriesCommandInput} for command's `input` shape.
 * @see {@link ListStoredQueriesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStoredQueriesCommand extends $Command<ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: ListStoredQueriesCommandInput;
    constructor(input: ListStoredQueriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput>;
    private serialize;
    private deserialize;
}
