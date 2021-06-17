import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutStoredQueryRequest, PutStoredQueryResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutStoredQueryCommandInput extends PutStoredQueryRequest {
}
export interface PutStoredQueryCommandOutput extends PutStoredQueryResponse, __MetadataBearer {
}
/**
 * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single AWS account and a single AWS Region.
 * 			You can create upto 300 queries in a single AWS account and a single AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStoredQueryCommandInput} for command's `input` shape.
 * @see {@link PutStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutStoredQueryCommand extends $Command<PutStoredQueryCommandInput, PutStoredQueryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutStoredQueryCommandInput;
    constructor(input: PutStoredQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutStoredQueryCommandInput, PutStoredQueryCommandOutput>;
    private serialize;
    private deserialize;
}
