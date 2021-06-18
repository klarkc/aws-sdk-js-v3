"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinueUpdateRollbackCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state,
 *          continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on
 *          the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can
 *          return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and
 *          then try to update the stack again.</p>
 *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS
 *          CloudFormation cannot roll back all changes after a failed stack update. For example, you
 *          might have a stack that is rolling back to an old database instance that was deleted
 *          outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was
 *          deleted, it assumes that the database instance still exists and attempts to roll back to
 *          it, causing the update rollback to fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ContinueUpdateRollbackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ContinueUpdateRollbackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ContinueUpdateRollbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContinueUpdateRollbackCommandInput} for command's `input` shape.
 * @see {@link ContinueUpdateRollbackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ContinueUpdateRollbackCommand extends smithy_client_1.Command {
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
    const clientName = "CloudFormationClient";
    const commandName = "ContinueUpdateRollbackCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ContinueUpdateRollbackInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ContinueUpdateRollbackOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryContinueUpdateRollbackCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryContinueUpdateRollbackCommand(output, context);
  }
}
exports.ContinueUpdateRollbackCommand = ContinueUpdateRollbackCommand;
//# sourceMappingURL=ContinueUpdateRollbackCommand.js.map
