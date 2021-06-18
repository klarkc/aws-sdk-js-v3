import { __extends } from "tslib";
import { ListTypesInput, ListTypesOutput } from "../models/models_0";
import { deserializeAws_queryListTypesCommand, serializeAws_queryListTypesCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about extension that have been registered with CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypesCommand = /** @class */ (function (_super) {
  __extends(ListTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypesCommand(input) {
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
  ListTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListTypesCommand(input, context);
  };
  ListTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListTypesCommand(output, context);
  };
  return ListTypesCommand;
})($Command);
export { ListTypesCommand };
//# sourceMappingURL=ListTypesCommand.js.map
