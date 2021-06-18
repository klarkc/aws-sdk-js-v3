import { __extends } from "tslib";
import { ListBackendJobsRequest, ListBackendJobsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackendJobsCommand,
  serializeAws_restJson1ListBackendJobsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the jobs for the backend of an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ListBackendJobsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ListBackendJobsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new ListBackendJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackendJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackendJobsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackendJobsCommand = /** @class */ (function (_super) {
  __extends(ListBackendJobsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackendJobsCommand(input) {
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
  ListBackendJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "ListBackendJobsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackendJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackendJobsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackendJobsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackendJobsCommand(input, context);
  };
  ListBackendJobsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackendJobsCommand(output, context);
  };
  return ListBackendJobsCommand;
})($Command);
export { ListBackendJobsCommand };
//# sourceMappingURL=ListBackendJobsCommand.js.map
