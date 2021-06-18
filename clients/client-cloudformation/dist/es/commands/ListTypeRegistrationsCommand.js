import { __extends } from "tslib";
import { ListTypeRegistrationsInput, ListTypeRegistrationsOutput } from "../models/models_0";
import {
  deserializeAws_queryListTypeRegistrationsCommand,
  serializeAws_queryListTypeRegistrationsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of registration tokens for the specified extension(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeRegistrationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeRegistrationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeRegistrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListTypeRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypeRegistrationsCommand = /** @class */ (function (_super) {
  __extends(ListTypeRegistrationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypeRegistrationsCommand(input) {
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
  ListTypeRegistrationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListTypeRegistrationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypeRegistrationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypeRegistrationsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypeRegistrationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListTypeRegistrationsCommand(input, context);
  };
  ListTypeRegistrationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListTypeRegistrationsCommand(output, context);
  };
  return ListTypeRegistrationsCommand;
})($Command);
export { ListTypeRegistrationsCommand };
//# sourceMappingURL=ListTypeRegistrationsCommand.js.map
