import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMigrationTaskCommandInput extends DescribeMigrationTaskRequest {
}
export interface DescribeMigrationTaskCommandOutput extends DescribeMigrationTaskResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DescribeMigrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMigrationTaskCommand extends $Command<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DescribeMigrationTaskCommandInput;
    constructor(input: DescribeMigrationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
