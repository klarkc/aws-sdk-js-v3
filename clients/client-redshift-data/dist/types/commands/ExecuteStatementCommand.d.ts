import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteStatementCommandInput extends ExecuteStatementInput {
}
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, __MetadataBearer {
}
/**
 * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition
 *       language (DDL). This statement must be a single SQL statement.
 *       Depending on the authorization
 *       method, use one of the following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
 *          cluster identifier that matches the cluster in the secret. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
 *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
 *           operation is required to use this method. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteStatementCommand extends $Command<ExecuteStatementCommandInput, ExecuteStatementCommandOutput, RedshiftDataClientResolvedConfig> {
    readonly input: ExecuteStatementCommandInput;
    constructor(input: ExecuteStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput>;
    private serialize;
    private deserialize;
}
