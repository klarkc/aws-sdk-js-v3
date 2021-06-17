import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointTypesMessage, DescribeEndpointTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEndpointTypesCommandInput extends DescribeEndpointTypesMessage {
}
export interface DescribeEndpointTypesCommandOutput extends DescribeEndpointTypesResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the type of endpoints available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointTypesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEndpointTypesCommand extends $Command<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEndpointTypesCommandInput;
    constructor(input: DescribeEndpointTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput>;
    private serialize;
    private deserialize;
}
