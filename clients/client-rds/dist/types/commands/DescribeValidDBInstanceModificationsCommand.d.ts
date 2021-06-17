import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeValidDBInstanceModificationsMessage, DescribeValidDBInstanceModificationsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeValidDBInstanceModificationsCommandInput extends DescribeValidDBInstanceModificationsMessage {
}
export interface DescribeValidDBInstanceModificationsCommandOutput extends DescribeValidDBInstanceModificationsResult, __MetadataBearer {
}
/**
 * <p>You can call <code>DescribeValidDBInstanceModifications</code>
 *             to learn what modifications you can make to your DB instance.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeValidDBInstanceModificationsCommand extends $Command<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeValidDBInstanceModificationsCommandInput;
    constructor(input: DescribeValidDBInstanceModificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
