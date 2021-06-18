import { __extends } from "tslib";
import { ListApiKeysRequest, ListApiKeysResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListApiKeysCommand,
  serializeAws_restJson1ListApiKeysCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may
 *             still be included in the response until they have actually been deleted. You can safely
 *             call <code>DeleteApiKey</code> to manually delete a key before it's automatically
 *             deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApiKeysCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApiKeysCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiKeysCommandInput} for command's `input` shape.
 * @see {@link ListApiKeysCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApiKeysCommand = /** @class */ (function (_super) {
  __extends(ListApiKeysCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListApiKeysCommand(input) {
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
  ListApiKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListApiKeysCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListApiKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApiKeysResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListApiKeysCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListApiKeysCommand(input, context);
  };
  ListApiKeysCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListApiKeysCommand(output, context);
  };
  return ListApiKeysCommand;
})($Command);
export { ListApiKeysCommand };
//# sourceMappingURL=ListApiKeysCommand.js.map
