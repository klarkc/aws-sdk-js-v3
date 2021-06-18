import { __extends } from "tslib";
import { CreateQuantumTaskRequest, CreateQuantumTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateQuantumTaskCommand,
  serializeAws_restJson1CreateQuantumTaskCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new CreateQuantumTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CreateQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQuantumTaskCommand = /** @class */ (function (_super) {
  __extends(CreateQuantumTaskCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateQuantumTaskCommand(input) {
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
  CreateQuantumTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BraketClient";
    var commandName = "CreateQuantumTaskCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateQuantumTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQuantumTaskResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateQuantumTaskCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateQuantumTaskCommand(input, context);
  };
  CreateQuantumTaskCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateQuantumTaskCommand(output, context);
  };
  return CreateQuantumTaskCommand;
})($Command);
export { CreateQuantumTaskCommand };
//# sourceMappingURL=CreateQuantumTaskCommand.js.map
