import { __extends } from "tslib";
import { DeleteChangeSetInput, DeleteChangeSetOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteChangeSetCommand,
  serializeAws_queryDeleteChangeSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes
 *          the wrong change set.</p>
 *          <p>If the call successfully completes, AWS CloudFormation successfully deleted the
 *          change set.</p>
 *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of
 *          the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and
 *           will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChangeSetCommand = /** @class */ (function (_super) {
  __extends(DeleteChangeSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteChangeSetCommand(input) {
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
  DeleteChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DeleteChangeSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteChangeSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteChangeSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteChangeSetCommand(input, context);
  };
  DeleteChangeSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteChangeSetCommand(output, context);
  };
  return DeleteChangeSetCommand;
})($Command);
export { DeleteChangeSetCommand };
//# sourceMappingURL=DeleteChangeSetCommand.js.map
