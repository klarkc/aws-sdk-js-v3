import { __extends } from "tslib";
import { ListWorkspacesRequest, ListWorkspacesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListWorkspacesCommand,
  serializeAws_restJson1ListWorkspacesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists all AMP workspaces, including workspaces being created or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListWorkspacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListWorkspacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkspacesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkspacesCommand = /** @class */ (function (_super) {
  __extends(ListWorkspacesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListWorkspacesCommand(input) {
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
  ListWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmpClient";
    var commandName = "ListWorkspacesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListWorkspacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkspacesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListWorkspacesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListWorkspacesCommand(input, context);
  };
  ListWorkspacesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListWorkspacesCommand(output, context);
  };
  return ListWorkspacesCommand;
})($Command);
export { ListWorkspacesCommand };
//# sourceMappingURL=ListWorkspacesCommand.js.map
