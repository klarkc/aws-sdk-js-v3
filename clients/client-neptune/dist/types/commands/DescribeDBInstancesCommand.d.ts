import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {
}
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {
}
/**
 * <p>Returns information about provisioned instances, and supports pagination.</p>
 *
 *          <note>
 *             <p>This operation can also return information for Amazon RDS instances
 *     and Amazon DocDB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBInstancesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBInstancesCommand extends $Command<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBInstancesCommandInput;
    constructor(input: DescribeDBInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
