import { __extends } from "tslib";
import { SearchUsersRequest, SearchUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchUsersCommand,
  serializeAws_json1_1SearchUsersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches users and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchUsersCommand = /** @class */ (function (_super) {
  __extends(SearchUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SearchUsersCommand(input) {
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
  SearchUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SearchUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SearchUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchUsersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SearchUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SearchUsersCommand(input, context);
  };
  SearchUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SearchUsersCommand(output, context);
  };
  return SearchUsersCommand;
})($Command);
export { SearchUsersCommand };
//# sourceMappingURL=SearchUsersCommand.js.map
