import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { GetHomeRegionRequest, GetHomeRegionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHomeRegionCommandInput extends GetHomeRegionRequest {
}
export interface GetHomeRegionCommandOutput extends GetHomeRegionResult, __MetadataBearer {
}
/**
 * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
 *       services to determine the regional endpoint for calling AWS Application Discovery Service and
 *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
 *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
 *       Migration Hub home region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, GetHomeRegionCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, GetHomeRegionCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new GetHomeRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHomeRegionCommandInput} for command's `input` shape.
 * @see {@link GetHomeRegionCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHomeRegionCommand extends $Command<GetHomeRegionCommandInput, GetHomeRegionCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: GetHomeRegionCommandInput;
    constructor(input: GetHomeRegionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHomeRegionCommandInput, GetHomeRegionCommandOutput>;
    private serialize;
    private deserialize;
}
