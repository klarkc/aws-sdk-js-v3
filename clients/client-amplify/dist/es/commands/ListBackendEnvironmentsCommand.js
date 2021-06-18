import { __extends } from "tslib";
import { ListBackendEnvironmentsRequest, ListBackendEnvironmentsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackendEnvironmentsCommand,
  serializeAws_restJson1ListBackendEnvironmentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Lists the backend environments for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBackendEnvironmentsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBackendEnvironmentsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListBackendEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackendEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListBackendEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackendEnvironmentsCommand = /** @class */ (function (_super) {
  __extends(ListBackendEnvironmentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackendEnvironmentsCommand(input) {
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
  ListBackendEnvironmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "ListBackendEnvironmentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackendEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackendEnvironmentsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackendEnvironmentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackendEnvironmentsCommand(input, context);
  };
  ListBackendEnvironmentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackendEnvironmentsCommand(output, context);
  };
  return ListBackendEnvironmentsCommand;
})($Command);
export { ListBackendEnvironmentsCommand };
//# sourceMappingURL=ListBackendEnvironmentsCommand.js.map
