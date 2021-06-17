import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateDashboardRequest, CreateDashboardResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDashboardCommandInput extends CreateDashboardRequest {
}
export interface CreateDashboardCommandOutput extends CreateDashboardResponse, __MetadataBearer {
}
/**
 * <p>Creates a dashboard from a template. To first create a template, see the <code>
 *                <a>CreateTemplate</a>
 *             </code> API operation.</p>
 *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
 *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
 *             create scheduled email reports from them. If you have the correct permissions, you can
 *             create a dashboard from a template that exists in a different AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDashboardCommandInput} for command's `input` shape.
 * @see {@link CreateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDashboardCommand extends $Command<CreateDashboardCommandInput, CreateDashboardCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateDashboardCommandInput;
    constructor(input: CreateDashboardCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDashboardCommandInput, CreateDashboardCommandOutput>;
    private serialize;
    private deserialize;
}
