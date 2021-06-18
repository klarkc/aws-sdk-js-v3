import { __extends } from "tslib";
import { GetQuantumTaskRequest, GetQuantumTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetQuantumTaskCommand,
  serializeAws_restJson1GetQuantumTaskCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new GetQuantumTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link GetQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQuantumTaskCommand = /** @class */ (function (_super) {
  __extends(GetQuantumTaskCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetQuantumTaskCommand(input) {
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
  GetQuantumTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BraketClient";
    var commandName = "GetQuantumTaskCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetQuantumTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetQuantumTaskResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetQuantumTaskCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetQuantumTaskCommand(input, context);
  };
  GetQuantumTaskCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetQuantumTaskCommand(output, context);
  };
  return GetQuantumTaskCommand;
})($Command);
export { GetQuantumTaskCommand };
//# sourceMappingURL=GetQuantumTaskCommand.js.map
