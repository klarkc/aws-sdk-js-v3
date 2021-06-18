import { __extends } from "tslib";
import { ListDirectoriesRequest, ListDirectoriesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDirectoriesCommand,
  serializeAws_restJson1ListDirectoriesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists directories created within an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDirectoriesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDirectoriesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDirectoriesCommandInput} for command's `input` shape.
 * @see {@link ListDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDirectoriesCommand = /** @class */ (function (_super) {
  __extends(ListDirectoriesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDirectoriesCommand(input) {
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
  ListDirectoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListDirectoriesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDirectoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDirectoriesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDirectoriesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListDirectoriesCommand(input, context);
  };
  ListDirectoriesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListDirectoriesCommand(output, context);
  };
  return ListDirectoriesCommand;
})($Command);
export { ListDirectoriesCommand };
//# sourceMappingURL=ListDirectoriesCommand.js.map
