import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {
}
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {
}
/**
 * <p>Returns information about provisioned RDS instances. This API supports pagination.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBInstancesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBInstancesCommand extends $Command<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBInstancesCommandInput;
    constructor(input: DescribeDBInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
