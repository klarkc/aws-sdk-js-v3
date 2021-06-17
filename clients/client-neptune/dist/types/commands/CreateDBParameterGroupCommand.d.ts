import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBParameterGroupCommandInput extends CreateDBParameterGroupMessage {
}
export interface CreateDBParameterGroupCommandOutput extends CreateDBParameterGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new DB parameter group.</p>
 *
 *          <p>A DB parameter group is initially created with the default parameters for the database
 *       engine used by the DB instance. To provide custom values for any of the parameters, you must
 *       modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once
 *       you've created a DB parameter group, you need to associate it with your DB instance using
 *       <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a
 *       running DB instance, you need to reboot the DB instance without failover for the new DB
 *       parameter group and associated settings to take effect.</p>
 *
 *          <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes before
 *         creating your first DB instance that uses that DB parameter group as the default parameter
 *         group. This allows Amazon Neptune to fully complete the create action before the parameter
 *         group is used as the default for a new DB instance. This is especially important for
 *         parameters that are critical when creating the default database for a DB instance, such as
 *         the character set for the default database defined by the
 *         <code>character_set_database</code> parameter. You can use the <i>Parameter
 *         Groups</i> option of the Amazon Neptune console or the
 *         <i>DescribeDBParameters</i> command to verify that your DB parameter group has
 *         been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBParameterGroupCommand extends $Command<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateDBParameterGroupCommandInput;
    constructor(input: CreateDBParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
