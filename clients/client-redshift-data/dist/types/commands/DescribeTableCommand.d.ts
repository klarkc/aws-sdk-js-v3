import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { DescribeTableRequest, DescribeTableResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTableCommandInput extends DescribeTableRequest {
}
export interface DescribeTableCommandOutput extends DescribeTableResponse, __MetadataBearer {
}
/**
 * <p>Describes the detailed information about a table from metadata in the cluster. The
 *       information includes its columns.
 *       A token is returned to page through the column list.
 *       Depending on the authorization method, use one of the
 *       following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
 *          cluster identifier that matches the cluster in the secret. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - specify the cluster identifier, the database name, and the database
 *           user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is
 *           required to use this method. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, DescribeTableCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, DescribeTableCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new DescribeTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableCommandInput} for command's `input` shape.
 * @see {@link DescribeTableCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTableCommand extends $Command<DescribeTableCommandInput, DescribeTableCommandOutput, RedshiftDataClientResolvedConfig> {
    readonly input: DescribeTableCommandInput;
    constructor(input: DescribeTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableCommandInput, DescribeTableCommandOutput>;
    private serialize;
    private deserialize;
}
