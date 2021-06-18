import { __extends } from "tslib";
import { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDataSourcesCommand,
  serializeAws_restJson1ListDataSourcesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the data sources for a given API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListDataSourcesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListDataSourcesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataSourcesCommand = /** @class */ (function (_super) {
  __extends(ListDataSourcesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDataSourcesCommand(input) {
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
  ListDataSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListDataSourcesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDataSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataSourcesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDataSourcesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListDataSourcesCommand(input, context);
  };
  ListDataSourcesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListDataSourcesCommand(output, context);
  };
  return ListDataSourcesCommand;
})($Command);
export { ListDataSourcesCommand };
//# sourceMappingURL=ListDataSourcesCommand.js.map
