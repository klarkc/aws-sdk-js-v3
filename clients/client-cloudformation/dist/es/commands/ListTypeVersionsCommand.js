import { __extends } from "tslib";
import { ListTypeVersionsInput, ListTypeVersionsOutput } from "../models/models_0";
import {
  deserializeAws_queryListTypeVersionsCommand,
  serializeAws_queryListTypeVersionsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about the versions of an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeVersionsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeVersionsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypeVersionsCommand = /** @class */ (function (_super) {
  __extends(ListTypeVersionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypeVersionsCommand(input) {
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
  ListTypeVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListTypeVersionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypeVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypeVersionsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypeVersionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListTypeVersionsCommand(input, context);
  };
  ListTypeVersionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListTypeVersionsCommand(output, context);
  };
  return ListTypeVersionsCommand;
})($Command);
export { ListTypeVersionsCommand };
//# sourceMappingURL=ListTypeVersionsCommand.js.map
