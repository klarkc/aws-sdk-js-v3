import { __extends } from "tslib";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import {
  deserializeAws_queryContinueUpdateRollbackCommand,
  serializeAws_queryContinueUpdateRollbackCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ContinueUpdateRollbackCommand = /** @class */ (function (_super) {
  __extends(ContinueUpdateRollbackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ContinueUpdateRollbackCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  ContinueUpdateRollbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ContinueUpdateRollbackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ContinueUpdateRollbackInput.filterSensitiveLog,
      outputFilterSensitiveLog: ContinueUpdateRollbackOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ContinueUpdateRollbackCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryContinueUpdateRollbackCommand(input, context);
  };
  ContinueUpdateRollbackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryContinueUpdateRollbackCommand(output, context);
  };
  return ContinueUpdateRollbackCommand;
})($Command);
export { ContinueUpdateRollbackCommand };
//# sourceMappingURL=ContinueUpdateRollbackCommand.js.map
