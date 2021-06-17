import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteStoredQueryRequest, DeleteStoredQueryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStoredQueryCommandInput extends DeleteStoredQueryRequest {
}
export interface DeleteStoredQueryCommandOutput extends DeleteStoredQueryResponse, __MetadataBearer {
}
/**
 * <p>Deletes the stored query for a single AWS account and a single AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStoredQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStoredQueryCommand extends $Command<DeleteStoredQueryCommandInput, DeleteStoredQueryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteStoredQueryCommandInput;
    constructor(input: DeleteStoredQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStoredQueryCommandInput, DeleteStoredQueryCommandOutput>;
    private serialize;
    private deserialize;
}
