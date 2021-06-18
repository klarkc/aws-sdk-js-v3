import { __extends } from "tslib";
import { ListResolversRequest, ListResolversResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListResolversCommand,
  serializeAws_restJson1ListResolversCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resolvers for a given API and type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListResolversCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolversCommandInput} for command's `input` shape.
 * @see {@link ListResolversCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolversCommand = /** @class */ (function (_super) {
  __extends(ListResolversCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListResolversCommand(input) {
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
  ListResolversCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListResolversCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListResolversRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolversResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListResolversCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListResolversCommand(input, context);
  };
  ListResolversCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListResolversCommand(output, context);
  };
  return ListResolversCommand;
})($Command);
export { ListResolversCommand };
//# sourceMappingURL=ListResolversCommand.js.map
