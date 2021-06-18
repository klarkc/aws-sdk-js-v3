import { __extends } from "tslib";
import { SearchQuantumTasksRequest, SearchQuantumTasksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchQuantumTasksCommand,
  serializeAws_restJson1SearchQuantumTasksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for tasks that match the specified filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchQuantumTasksCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchQuantumTasksCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new SearchQuantumTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchQuantumTasksCommandInput} for command's `input` shape.
 * @see {@link SearchQuantumTasksCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchQuantumTasksCommand = /** @class */ (function (_super) {
  __extends(SearchQuantumTasksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchQuantumTasksCommand(input) {
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
  SearchQuantumTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BraketClient";
    var commandName = "SearchQuantumTasksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchQuantumTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchQuantumTasksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchQuantumTasksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1SearchQuantumTasksCommand(input, context);
  };
  SearchQuantumTasksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1SearchQuantumTasksCommand(output, context);
  };
  return SearchQuantumTasksCommand;
})($Command);
export { SearchQuantumTasksCommand };
//# sourceMappingURL=SearchQuantumTasksCommand.js.map
