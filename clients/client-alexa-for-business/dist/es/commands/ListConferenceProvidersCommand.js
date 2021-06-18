import { __extends } from "tslib";
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListConferenceProvidersCommand,
  serializeAws_json1_1ListConferenceProvidersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists conference providers under a specific AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListConferenceProvidersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListConferenceProvidersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListConferenceProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConferenceProvidersCommandInput} for command's `input` shape.
 * @see {@link ListConferenceProvidersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConferenceProvidersCommand = /** @class */ (function (_super) {
  __extends(ListConferenceProvidersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConferenceProvidersCommand(input) {
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
  ListConferenceProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ListConferenceProvidersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConferenceProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConferenceProvidersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConferenceProvidersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListConferenceProvidersCommand(input, context);
  };
  ListConferenceProvidersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListConferenceProvidersCommand(output, context);
  };
  return ListConferenceProvidersCommand;
})($Command);
export { ListConferenceProvidersCommand };
//# sourceMappingURL=ListConferenceProvidersCommand.js.map
