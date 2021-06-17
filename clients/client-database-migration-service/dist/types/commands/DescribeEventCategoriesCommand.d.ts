import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEventCategoriesMessage, DescribeEventCategoriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventCategoriesCommandInput extends DescribeEventCategoriesMessage {
}
export interface DescribeEventCategoriesCommandOutput extends DescribeEventCategoriesResponse, __MetadataBearer {
}
/**
 * <p>Lists categories for all event source types, or, if specified, for a specified source
 *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
 *             and Notifications</a> in the <i>AWS Database Migration Service User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventCategoriesCommand extends $Command<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEventCategoriesCommandInput;
    constructor(input: DescribeEventCategoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
