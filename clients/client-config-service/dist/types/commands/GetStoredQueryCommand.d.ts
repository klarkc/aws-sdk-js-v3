import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetStoredQueryRequest, GetStoredQueryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStoredQueryCommandInput extends GetStoredQueryRequest {
}
export interface GetStoredQueryCommandOutput extends GetStoredQueryResponse, __MetadataBearer {
}
/**
 * <p>Returns the details of a specific stored query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStoredQueryCommandInput} for command's `input` shape.
 * @see {@link GetStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStoredQueryCommand extends $Command<GetStoredQueryCommandInput, GetStoredQueryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetStoredQueryCommandInput;
    constructor(input: GetStoredQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStoredQueryCommandInput, GetStoredQueryCommandOutput>;
    private serialize;
    private deserialize;
}
