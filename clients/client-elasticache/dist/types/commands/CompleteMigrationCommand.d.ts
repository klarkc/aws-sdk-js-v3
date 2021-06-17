import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CompleteMigrationMessage, CompleteMigrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteMigrationCommandInput extends CompleteMigrationMessage {
}
export interface CompleteMigrationCommandOutput extends CompleteMigrationResponse, __MetadataBearer {
}
/**
 * <p>Complete the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CompleteMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CompleteMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CompleteMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CompleteMigrationCommand extends $Command<CompleteMigrationCommandInput, CompleteMigrationCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CompleteMigrationCommandInput;
    constructor(input: CompleteMigrationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteMigrationCommandInput, CompleteMigrationCommandOutput>;
    private serialize;
    private deserialize;
}
