import { __extends } from "tslib";
import { ListDatabasesInput, ListDatabasesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatabasesCommand,
  serializeAws_json1_1ListDatabasesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the databases in the specified data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDatabasesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDatabasesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListDatabasesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatabasesCommand = /** @class */ (function (_super) {
  __extends(ListDatabasesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDatabasesCommand(input) {
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
  ListDatabasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListDatabasesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDatabasesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatabasesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDatabasesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListDatabasesCommand(input, context);
  };
  ListDatabasesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListDatabasesCommand(output, context);
  };
  return ListDatabasesCommand;
})($Command);
export { ListDatabasesCommand };
//# sourceMappingURL=ListDatabasesCommand.js.map
