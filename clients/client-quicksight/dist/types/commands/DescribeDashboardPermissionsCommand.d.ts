import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDashboardPermissionsRequest, DescribeDashboardPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDashboardPermissionsCommandInput extends DescribeDashboardPermissionsRequest {
}
export interface DescribeDashboardPermissionsCommandOutput extends DescribeDashboardPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Describes read and write permissions for a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDashboardPermissionsCommand extends $Command<DescribeDashboardPermissionsCommandInput, DescribeDashboardPermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeDashboardPermissionsCommandInput;
    constructor(input: DescribeDashboardPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDashboardPermissionsCommandInput, DescribeDashboardPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
