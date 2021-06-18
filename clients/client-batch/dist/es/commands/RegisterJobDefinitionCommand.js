import { __extends } from "tslib";
import { RegisterJobDefinitionRequest, RegisterJobDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterJobDefinitionCommand,
  serializeAws_restJson1RegisterJobDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an AWS Batch job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, RegisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, RegisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterJobDefinitionCommand = /** @class */ (function (_super) {
  __extends(RegisterJobDefinitionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegisterJobDefinitionCommand(input) {
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
  RegisterJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "RegisterJobDefinitionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegisterJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterJobDefinitionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegisterJobDefinitionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RegisterJobDefinitionCommand(input, context);
  };
  RegisterJobDefinitionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RegisterJobDefinitionCommand(output, context);
  };
  return RegisterJobDefinitionCommand;
})($Command);
export { RegisterJobDefinitionCommand };
//# sourceMappingURL=RegisterJobDefinitionCommand.js.map
