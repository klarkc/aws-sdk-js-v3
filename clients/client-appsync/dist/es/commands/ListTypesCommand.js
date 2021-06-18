import { __extends } from "tslib";
import { ListTypesRequest, ListTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTypesCommand,
  serializeAws_restJson1ListTypesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the types for a given API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListTypesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListTypesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTypesCommand = /** @class */ (function (_super) {
  __extends(ListTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTypesCommand(input) {
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
  ListTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListTypesCommand(input, context);
  };
  ListTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListTypesCommand(output, context);
  };
  return ListTypesCommand;
})($Command);
export { ListTypesCommand };
//# sourceMappingURL=ListTypesCommand.js.map
