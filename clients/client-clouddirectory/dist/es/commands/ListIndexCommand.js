import { __extends } from "tslib";
import { ListIndexRequest, ListIndexResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIndexCommand,
  serializeAws_restJson1ListIndexCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists objects attached to the specified index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListIndexCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListIndexCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIndexCommandInput} for command's `input` shape.
 * @see {@link ListIndexCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIndexCommand = /** @class */ (function (_super) {
  __extends(ListIndexCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListIndexCommand(input) {
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
  ListIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListIndexCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIndexResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListIndexCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListIndexCommand(input, context);
  };
  ListIndexCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListIndexCommand(output, context);
  };
  return ListIndexCommand;
})($Command);
export { ListIndexCommand };
//# sourceMappingURL=ListIndexCommand.js.map
