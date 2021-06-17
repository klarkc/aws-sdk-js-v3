import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeApplicationStateRequest, DescribeApplicationStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeApplicationStateCommandInput extends DescribeApplicationStateRequest {
}
export interface DescribeApplicationStateCommandOutput extends DescribeApplicationStateResult, __MetadataBearer {
}
/**
 * <p>Gets the migration status of an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DescribeApplicationStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationStateCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeApplicationStateCommand extends $Command<DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DescribeApplicationStateCommandInput;
    constructor(input: DescribeApplicationStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput>;
    private serialize;
    private deserialize;
}
