import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHomeRegionControlsCommandInput extends DescribeHomeRegionControlsRequest {
}
export interface DescribeHomeRegionControlsCommandOutput extends DescribeHomeRegionControlsResult, __MetadataBearer {
}
/**
 * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
 *       fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new DescribeHomeRegionControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHomeRegionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeHomeRegionControlsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHomeRegionControlsCommand extends $Command<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: DescribeHomeRegionControlsCommandInput;
    constructor(input: DescribeHomeRegionControlsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput>;
    private serialize;
    private deserialize;
}
