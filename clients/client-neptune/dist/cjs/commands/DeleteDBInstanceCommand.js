"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDBInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete
 *       a DB instance, all automated backups for that instance are deleted and can't be recovered.
 *       Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not
 *       deleted.</p>
 *          <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is
 *       <code>deleting</code> until the DB snapshot is created. The API action
 *       <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action
 *       can't be canceled or reverted once submitted.</p>
 *          <p>Note that when a DB instance is in a failure state and has a status of
 *       <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>,
 *       you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to
 *       <code>true</code>.</p>
 *          <p>You can't delete a DB instance if it is the only instance in the DB cluster, or
 *       if it has deletion protection enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBInstanceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBInstanceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteDBInstanceCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "NeptuneClient";
        const commandName = "DeleteDBInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteDBInstanceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteDBInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteDBInstanceCommand(output, context);
    }
}
exports.DeleteDBInstanceCommand = DeleteDBInstanceCommand;
//# sourceMappingURL=DeleteDBInstanceCommand.js.map