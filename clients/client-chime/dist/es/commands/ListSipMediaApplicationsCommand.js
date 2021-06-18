import { __extends } from "tslib";
import { ListSipMediaApplicationsRequest, ListSipMediaApplicationsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListSipMediaApplicationsCommand,
  serializeAws_restJson1ListSipMediaApplicationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the SIP media applications under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipMediaApplicationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSipMediaApplicationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSipMediaApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSipMediaApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSipMediaApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSipMediaApplicationsCommand = /** @class */ (function (_super) {
  __extends(ListSipMediaApplicationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListSipMediaApplicationsCommand(input) {
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
  ListSipMediaApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListSipMediaApplicationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListSipMediaApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSipMediaApplicationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListSipMediaApplicationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListSipMediaApplicationsCommand(input, context);
  };
  ListSipMediaApplicationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListSipMediaApplicationsCommand(output, context);
  };
  return ListSipMediaApplicationsCommand;
})($Command);
export { ListSipMediaApplicationsCommand };
//# sourceMappingURL=ListSipMediaApplicationsCommand.js.map
