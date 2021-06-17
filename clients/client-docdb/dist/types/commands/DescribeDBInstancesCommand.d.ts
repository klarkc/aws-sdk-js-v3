import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {
}
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {
}
/**
 * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports
 *             pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBInstancesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBInstancesCommand extends $Command<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBInstancesCommandInput;
    constructor(input: DescribeDBInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
