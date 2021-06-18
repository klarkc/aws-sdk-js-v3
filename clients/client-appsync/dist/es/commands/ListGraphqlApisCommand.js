import { __extends } from "tslib";
import { ListGraphqlApisRequest, ListGraphqlApisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListGraphqlApisCommand,
  serializeAws_restJson1ListGraphqlApisCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your GraphQL APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListGraphqlApisCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListGraphqlApisCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListGraphqlApisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGraphqlApisCommandInput} for command's `input` shape.
 * @see {@link ListGraphqlApisCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGraphqlApisCommand = /** @class */ (function (_super) {
  __extends(ListGraphqlApisCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListGraphqlApisCommand(input) {
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
  ListGraphqlApisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListGraphqlApisCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListGraphqlApisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGraphqlApisResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListGraphqlApisCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListGraphqlApisCommand(input, context);
  };
  ListGraphqlApisCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListGraphqlApisCommand(output, context);
  };
  return ListGraphqlApisCommand;
})($Command);
export { ListGraphqlApisCommand };
//# sourceMappingURL=ListGraphqlApisCommand.js.map
