import { __extends } from "tslib";
import { ListEngineVersionsInput, ListEngineVersionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListEngineVersionsCommand,
  serializeAws_json1_1ListEngineVersionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of engine versions that are available to choose from, including the
 *             Auto option.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListEngineVersionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListEngineVersionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEngineVersionsCommand = /** @class */ (function (_super) {
  __extends(ListEngineVersionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListEngineVersionsCommand(input) {
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
  ListEngineVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListEngineVersionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListEngineVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListEngineVersionsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListEngineVersionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListEngineVersionsCommand(input, context);
  };
  ListEngineVersionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListEngineVersionsCommand(output, context);
  };
  return ListEngineVersionsCommand;
})($Command);
export { ListEngineVersionsCommand };
//# sourceMappingURL=ListEngineVersionsCommand.js.map
