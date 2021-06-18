import { __extends } from "tslib";
import { CreateStackSetInput, CreateStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryCreateStackSetCommand,
  serializeAws_queryCreateStackSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStackSetCommandInput} for command's `input` shape.
 * @see {@link CreateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStackSetCommand = /** @class */ (function (_super) {
  __extends(CreateStackSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStackSetCommand(input) {
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
  CreateStackSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "CreateStackSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStackSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStackSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryCreateStackSetCommand(input, context);
  };
  CreateStackSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryCreateStackSetCommand(output, context);
  };
  return CreateStackSetCommand;
})($Command);
export { CreateStackSetCommand };
//# sourceMappingURL=CreateStackSetCommand.js.map
